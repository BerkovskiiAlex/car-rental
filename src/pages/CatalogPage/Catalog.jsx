/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarsThunk, loadMoreThunk } from "../../Redux/Cars/operations";
import {
  getCars,
  getFavoriteStatus,
  getIsModalOpen,
} from "../../Redux/Cars/selectors";
import {
  StyledActiveIcon,
  StyledCarsListSpan,
  StyledCatalogCarBrandDiv,
  StyledCatalogCarBrandSelect,
  StyledCatalogCarMileageDiv,
  StyledCatalogCarMileageInputs,
  StyledCatalogCarMileageInputsDiv,
  StyledCatalogForm,
  StyledCatalogLabel,
  StyledCatalogOption,
  StyledCatalogPriceDiv,
  StyledCatalogPriceSelect,
  StyledCatalogSearchButton,
  StyledCatalogSection,
  StyledNormalIcon,
} from "./Catalog.styled";
import {
  addToCarModal,
  addToFavorites,
  removeFromFavorites,
  setIsModalOpen,
} from "../../Redux/Cars/carsSlice";
import Modal from "../../components/Modal/Modal";
import makes from "../../data/makes.json";

export const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(getCars);
  const isModalOpen = useSelector(getIsModalOpen);
  const favoriteStatus = useSelector(getFavoriteStatus);
  const [currentPage, setCurrentPage] = useState(2);
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [mileageRange, setMileageRange] = useState({ min: "", max: "" });

  const [filteredCars, setFilteredCars] = useState(cars);

  const [userInputs, setUserInputs] = useState({ min: "", max: "" });

  useEffect(() => {
    dispatch(fetchCarsThunk());
  }, [dispatch]);

  useEffect(() => {
    setFilteredCars(cars);
  }, [cars]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    dispatch(loadMoreThunk(currentPage));
  };

  const toggleFavorite = (car, isFavorite) => {
    if (isFavorite) {
      dispatch(removeFromFavorites({ car }));
    } else {
      dispatch(addToFavorites({ car }));
    }
  };

  const isCarInFavorites = (carId) => {
    return favoriteStatus[carId];
  };
  const handleLearnMore = (carId) => {
    dispatch(setIsModalOpen(true));
    dispatch(addToCarModal(carId));
  };

  const filterCars = () => {
    return cars.filter((car) => {
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

    setFilteredCars(filterCars());
  };

  return (
    <StyledCatalogSection>
      <StyledCatalogForm onSubmit={handleFormSubmit}>
        <StyledCatalogCarBrandDiv>
          <StyledCatalogLabel htmlFor="makeFilter">
            Car brand
          </StyledCatalogLabel>
          <StyledCatalogCarBrandSelect
            id="makeFilter"
            name="makeFilter"
            value={selectedMake}
            onChange={handleChange}
          >
            <StyledCatalogOption value="">All</StyledCatalogOption>
            {makes.map((make) => (
              <StyledCatalogOption key={make.id} value={make.name}>
                {make.name}
              </StyledCatalogOption>
            ))}
          </StyledCatalogCarBrandSelect>
        </StyledCatalogCarBrandDiv>
        <StyledCatalogPriceDiv>
          <StyledCatalogLabel htmlFor="priceFilter">
            Price/ 1 hour
          </StyledCatalogLabel>
          <StyledCatalogPriceSelect
            id="priceFilter"
            name="priceFilter"
            value={selectedPrice}
            onChange={handleChange}
          >
            <StyledCatalogOption value="">All</StyledCatalogOption>
            {[...Array(50)].map((_, index) => (
              <StyledCatalogOption key={index} value={(index + 1) * 10}>
                {`To ${(index + 1) * 10}$`}
              </StyledCatalogOption>
            ))}
          </StyledCatalogPriceSelect>
        </StyledCatalogPriceDiv>
        <StyledCatalogCarMileageDiv>
          <StyledCatalogLabel htmlFor="minMileageRange">
            Car mileage / km
          </StyledCatalogLabel>
          <StyledCatalogCarMileageInputsDiv>
            <StyledCatalogCarMileageInputs
              type="text"
              id="minMileageRange"
              name="min"
              placeholder="Min"
              value={userInputs.min}
              onChange={handleChange}
            />
            <StyledCatalogCarMileageInputs
              type="text"
              id="maxMileageRange"
              name="max"
              placeholder="Max"
              value={userInputs.max}
              onChange={handleChange}
            />
          </StyledCatalogCarMileageInputsDiv>
        </StyledCatalogCarMileageDiv>
        <StyledCatalogSearchButton type="submit">
          Search
        </StyledCatalogSearchButton>
      </StyledCatalogForm>
      {filteredCars.map((car) => {
        const carIsFavorite = isCarInFavorites(car.id);
        return (
          <div key={car.id}>
            <img src={car.img} alt={car.description} width={274} />
            {carIsFavorite ? (
              <StyledActiveIcon
                onClick={() => toggleFavorite(car, carIsFavorite)}
              />
            ) : (
              <StyledNormalIcon
                onClick={() => toggleFavorite(car, carIsFavorite)}
              />
            )}
            <div>
              <h2>
                {car.make} <span>{car.model}</span>, {car.year}
              </h2>
              <p>${car.rentalPrice}</p>
            </div>
            <p>
              <StyledCarsListSpan>{car.city}</StyledCarsListSpan>
              <StyledCarsListSpan>{car.country}</StyledCarsListSpan>
              <StyledCarsListSpan>{car.rentalCompany}</StyledCarsListSpan>
              <StyledCarsListSpan>{car.type}</StyledCarsListSpan>
              <StyledCarsListSpan>{car.model}</StyledCarsListSpan>
              <StyledCarsListSpan>{car.id}</StyledCarsListSpan>
              <StyledCarsListSpan>{car.accessories[0]}</StyledCarsListSpan>
            </p>
            <button onClick={() => handleLearnMore(car.id)}>Learn more</button>
          </div>
        );
      })}
      {currentPage <= 4 ? (
        <button onClick={handleLoadMore}>Load more</button>
      ) : null}
      {isModalOpen && <Modal />}
    </StyledCatalogSection>
  );
};
