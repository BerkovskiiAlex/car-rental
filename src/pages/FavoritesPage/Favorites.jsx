/** @format */

import React, { useState } from "react";
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
  StyledCarsListSpan,
  StyledNormalIcon,
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
      setMileageRange({ ...mileageRange, [name]: value });
    } else if (e.target.id === "makeFilter") {
      setSelectedMake(value);
    } else if (e.target.id === "priceFilter") {
      setSelectedPrice(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setFilteredFavorites(filterFavoriteCars());
  };

  return (
    <section>
      <form
        onSubmit={handleFormSubmit}
        style={{ display: "flex", gap: "18px" }}
      >
        <div style={{ display: "flex", gap: "18px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label htmlFor="makeFilter">Car brand</label>
            <select
              id="makeFilter"
              name="makeFilter"
              value={selectedMake}
              onChange={handleChange}
            >
              <option value="">All</option>
              {makes.map((make) => (
                <option key={make.id} value={make.name}>
                  {make.name}
                </option>
              ))}
            </select>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label htmlFor="priceFilter">Price/ 1 hour</label>
            <select
              id="priceFilter"
              name="priceFilter"
              value={selectedPrice}
              onChange={handleChange}
            >
              <option value="">All</option>
              {[...Array(50)].map((_, index) => (
                <option key={index} value={(index + 1) * 10}>
                  ${(index + 1) * 10}
                </option>
              ))}
            </select>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label htmlFor="minMileageRange">Car mileage / km</label>
            <div style={{ display: "flex" }}>
              <input
                type="number"
                id="minMileageRange"
                name="min"
                placeholder="Min"
                value={mileageRange.min}
                onChange={handleChange}
              />
              <input
                type="number"
                id="maxMileageRange"
                name="max"
                placeholder="Max"
                value={mileageRange.max}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <button type="submit">Filter favorites</button>
      </form>
      {favorites.length === 0 ? (
        <h1>No cars found in favorites.</h1>
      ) : (
        filteredFavorites.map((car) => {
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
              <button onClick={() => handleLearnMore(car.id)}>
                Learn more
              </button>
            </div>
          );
        })
      )}
      {isModalOpen && <Modal />}
    </section>
  );
};
