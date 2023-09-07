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

  const filterFavoriteCars = (car) => {
    let makeFilter = !selectedMake || car.make === selectedMake;
    let priceFilter = !selectedPrice || car.rentalPrice <= selectedPrice;
    let mileageFilter =
      (!mileageRange.min || car.mileage >= mileageRange.min) &&
      (!mileageRange.max || car.mileage <= mileageRange.max);
    return makeFilter && priceFilter && mileageFilter;
  };

  const filteredFavoriteCars = favorites.filter(filterFavoriteCars);

  return (
    <section>
      <div>
        <label htmlFor="makeFilter">Make:</label>
        <select
          id="makeFilter"
          value={selectedMake}
          onChange={(e) => setSelectedMake(e.target.value)}
        >
          <option value="">All</option>
          {makes.map((make) => (
            <option key={make.id} value={make.name}>
              {make.name}
            </option>
          ))}
        </select>

        <label htmlFor="priceFilter">Max Price:</label>
        <select
          id="priceFilter"
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
        >
          <option value="">All</option>
          {[...Array(50)].map((_, index) => (
            <option key={index} value={(index + 1) * 10}>
              ${(index + 1) * 10}
            </option>
          ))}
        </select>

        <label htmlFor="minMileageRange">Mileage Range:</label>
        <input
          type="number"
          id="minMileageRange"
          placeholder="Min"
          value={mileageRange.min}
          onChange={(e) =>
            setMileageRange({ ...mileageRange, min: e.target.value })
          }
        />
        <input
          type="number"
          id="maxMileageRange"
          placeholder="Max"
          value={mileageRange.max}
          onChange={(e) =>
            setMileageRange({ ...mileageRange, max: e.target.value })
          }
        />
      </div>
      {favorites.length === 0 ? (
        <h1>No cars found in favorites.</h1>
      ) : (
        filteredFavoriteCars.map((car) => {
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
