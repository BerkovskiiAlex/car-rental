/** @format */

import React from "react";
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

export const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(getFavorites);
  const isModalOpen = useSelector(getIsModalOpen);

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

  return (
    <section>
      {favorites.length === 0 ? (
        <h1>No cars found in favorites.</h1>
      ) : (
        favorites.map((car) => {
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
                <p>{car.rentalPrice}</p>
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
