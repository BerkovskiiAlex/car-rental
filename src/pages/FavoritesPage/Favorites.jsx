/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites, getIsModalOpen } from "../../Redux/Cars/selectors";
import {
  addToCarModal,
  addToFavorites,
  removeFromFavorites,
  setIsModalOpen,
} from "../../Redux/Cars/carsSlice";
import {
  StyledActiveIcon,
  StyledCarBrandDiv,
  StyledCarBrandSelect,
  StyledCarMileageDiv,
  StyledCarMileageInputs,
  StyledCarMileageInputsDiv,
  StyledForm,
  StyledLabel,
  StyledOption,
  StyledPriceDiv,
  StyledPriceSelect,
  StyledSearchButton,
  StyledSection,
  StyledNormalIcon,
  StyledMachineDescriptionSpan,
  StyledCarMileageLeftInput,
  StyledCarMileageRightInput,
  StyledCardsListDiv,
  StyledFullCardDiv,
  StyledCardDiv,
  StyledImages,
  StyledImage,
  StyledCardMarkDiv,
  StyledCardMarkH2,
  StyledCardMarkSpan,
  StyledCardMarkP,
  StyledAdressP,
  StyledTypeP,
  StyledLearnMoreButton,
} from "../CatalogPage/Catalog.styled";
import Modal from "../../components/Modal/Modal";
import makes from "../../data/makes.json";

export const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(getFavorites);
  const isModalOpen = useSelector(getIsModalOpen);
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [mileageRange, setMileageRange] = useState({ min: "", max: "" });

  const [filteredFavorites, setFilteredFavorites] = useState(favorites);

  const [userInputs, setUserInputs] = useState({ min: "From ", max: "To " });

  useEffect(() => {
    setFilteredFavorites(favorites);
  }, [favorites]);

  const isCarInFavorites = (carId) => {
    return favorites.some((favoriteCar) => favoriteCar.id === carId);
  };

  const toggleFavorite = (car, isFavorite) => {
    if (isFavorite) {
      dispatch(removeFromFavorites({ car }));
    } else {
      dispatch(addToFavorites({ car }));
    }
  };

  const handleLearnMore = (carId) => {
    dispatch(setIsModalOpen(true));
    dispatch(addToCarModal(carId));
  };

  const filterFavoriteCars = () => {
    return favorites.filter((car) => {
      let makeFilter = !selectedMake || car.make === selectedMake;
      let priceFilter = !selectedPrice || car.rentalPrice <= selectedPrice;
      let mileageFilter =
        (!mileageRange.min || car.mileage >= mileageRange.min) &&
        (!mileageRange.max || car.mileage <= mileageRange.max);
      return makeFilter && priceFilter && mileageFilter;
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "min" || name === "max") {
      setUserInputs({ ...userInputs, [name]: value });

      const cleanedValue = value.replace(/[^\d.,]/g, "");
      const numberValue = parseFloat(cleanedValue.replace(/,/g, ""), 10);
      if (!isNaN(numberValue)) {
        setMileageRange({
          ...mileageRange,
          [name]: numberValue,
        });
      }
    } else if (name === "makeFilter") {
      setSelectedMake(value);
    } else if (name === "priceFilter") {
      setSelectedPrice(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setFilteredFavorites(filterFavoriteCars());

    setSelectedMake("");
    setSelectedPrice("");
    setMileageRange({ min: "", max: "" });
    setUserInputs({ min: "From ", max: "To " });
  };

  return (
    <StyledSection>
      <StyledForm onSubmit={handleFormSubmit}>
        <StyledCarBrandDiv>
          <StyledLabel htmlFor="makeFilter">Car brand</StyledLabel>
          <StyledCarBrandSelect
            id="makeFilter"
            name="makeFilter"
            value={selectedMake}
            onChange={handleChange}
          >
            <StyledOption value="">All</StyledOption>
            {makes.map((make) => (
              <StyledOption key={make.id} value={make.name}>
                {make.name}
              </StyledOption>
            ))}
          </StyledCarBrandSelect>
        </StyledCarBrandDiv>
        <StyledPriceDiv>
          <StyledLabel htmlFor="priceFilter">Price/ 1 hour</StyledLabel>
          <StyledPriceSelect
            id="priceFilter"
            name="priceFilter"
            value={selectedPrice}
            onChange={handleChange}
          >
            <StyledOption value="">All</StyledOption>
            {[...Array(50)].map((_, index) => (
              <StyledOption key={index} value={(index + 1) * 10}>
                {`To ${(index + 1) * 10}$`}
              </StyledOption>
            ))}
          </StyledPriceSelect>
        </StyledPriceDiv>
        <StyledCarMileageDiv>
          <StyledLabel htmlFor="minMileageRange">Car mileage / km</StyledLabel>
          <StyledCarMileageInputsDiv>
            <StyledCarMileageLeftInput
              type="text"
              id="minMileageRange"
              name="min"
              placeholder="From"
              value={userInputs.min}
              onChange={handleChange}
            />
            <StyledCarMileageRightInput
              type="text"
              id="maxMileageRange"
              name="max"
              placeholder="To"
              value={userInputs.max}
              onChange={handleChange}
            />
          </StyledCarMileageInputsDiv>
        </StyledCarMileageDiv>
        <StyledSearchButton type="submit">Search</StyledSearchButton>
      </StyledForm>
      <StyledCardsListDiv>
        {filteredFavorites.map((car) => {
          const carIsFavorite = isCarInFavorites(car.id);
          return (
            <StyledFullCardDiv key={car.id}>
              <StyledCardDiv>
                <StyledImages>
                  <StyledImage src={car.img} alt={car.description} />
                  {carIsFavorite ? (
                    <StyledActiveIcon
                      onClick={() => toggleFavorite(car, carIsFavorite)}
                    />
                  ) : (
                    <StyledNormalIcon
                      onClick={() => toggleFavorite(car, carIsFavorite)}
                    />
                  )}
                </StyledImages>
                <StyledCardMarkDiv>
                  <StyledCardMarkH2>
                    {car.make}{" "}
                    <StyledCardMarkSpan>{car.model}</StyledCardMarkSpan>,{" "}
                    {car.year}
                  </StyledCardMarkH2>
                  <StyledCardMarkP>${car.rentalPrice}</StyledCardMarkP>
                </StyledCardMarkDiv>
                <StyledAdressP>
                  <StyledMachineDescriptionSpan>
                    {car.city}
                  </StyledMachineDescriptionSpan>{" "}
                  <StyledMachineDescriptionSpan>
                    {car.country}
                  </StyledMachineDescriptionSpan>{" "}
                  <StyledMachineDescriptionSpan>
                    {car.rentalCompany}
                  </StyledMachineDescriptionSpan>
                </StyledAdressP>
                <StyledTypeP>
                  <StyledMachineDescriptionSpan>
                    {car.type}
                  </StyledMachineDescriptionSpan>{" "}
                  <StyledMachineDescriptionSpan>
                    {car.model}
                  </StyledMachineDescriptionSpan>{" "}
                  <StyledMachineDescriptionSpan>
                    {car.id}
                  </StyledMachineDescriptionSpan>{" "}
                  <StyledMachineDescriptionSpan>
                    {car.accessories[0]}
                  </StyledMachineDescriptionSpan>
                </StyledTypeP>
              </StyledCardDiv>
              <StyledLearnMoreButton onClick={() => handleLearnMore(car.id)}>
                Learn more
              </StyledLearnMoreButton>
            </StyledFullCardDiv>
          );
        })}
      </StyledCardsListDiv>
      {isModalOpen && <Modal />}
    </StyledSection>
  );
};
