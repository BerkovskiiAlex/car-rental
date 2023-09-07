/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarsThunk, loadMoreThunk } from "../../Redux/Cars/operations";
import {
  getCars,
  getFavorites,
  getIsModalOpen,
} from "../../Redux/Cars/selectors";
import {
  StyledActiveIcon,
  StyledCarsListSpan,
  StyledNormalIcon,
} from "./Catalog.styled";
import {
  addToFavorites,
  removeFromFavorites,
  setIsModalOpen,
} from "../../Redux/Cars/carsSlice";
import Modal from "../../components/Modal/Modal";

export const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(getCars);
  const favorites = useSelector(getFavorites);
  const isModalOpen = useSelector(getIsModalOpen);
  const [currentPage, setCurrentPage] = useState(2);

  useEffect(() => {
    dispatch(fetchCarsThunk());
  }, [dispatch]);

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
    return favorites.some((favoriteCar) => favoriteCar.id === carId);
  };

  const handleLearnMore = () => {
    dispatch(setIsModalOpen(true));
  };

  return (
    <section>
      {cars.map((car) => {
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
            <button onClick={handleLearnMore}>Learn more</button>
          </div>
        );
      })}
      {currentPage <= 4 ? (
        <button onClick={handleLoadMore}>Load more</button>
      ) : null}
      {isModalOpen && (
        <Modal>
          {/* Здесь размещается содержимое вашего модального окна */}
        </Modal>
      )}
    </section>
  );
};
