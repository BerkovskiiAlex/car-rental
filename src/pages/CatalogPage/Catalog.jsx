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
  addToCarModal,
  addToFavorites,
  removeFromFavorites,
  setIsModalOpen,
} from "../../Redux/Cars/carsSlice";
import Modal from "../../components/Modal/Modal";
import { CarCard } from "../../data/CarCard";
import FilterForm from "../../data/FilterForm";
import {
  StyledSection,
  StyledLoadMoreButton,
  StyledCardsListUl,
} from "./Catalog.styled";

export const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(getCars);
  const isModalOpen = useSelector(getIsModalOpen);
  const favoriteStatus = useSelector(getFavoriteStatus);
  const [currentPage, setCurrentPage] = useState(2);
  const [filteredCars, setFilteredCars] = useState(cars);

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

  return (
    <StyledSection>
      <FilterForm cars={cars} onSubmitFilter={setFilteredCars} />
      <StyledCardsListUl>
        {filteredCars.map((car) => {
          const carIsFavorite = isCarInFavorites(car.id);
          return (
            <CarCard
              key={car.id}
              car={car}
              carIsFavorite={carIsFavorite}
              onToggleFavorite={() => toggleFavorite(car, carIsFavorite)}
              onLearnMore={() => handleLearnMore(car.id)}
            />
          );
        })}
      </StyledCardsListUl>
      {currentPage <= 6 ? (
        <StyledLoadMoreButton onClick={handleLoadMore}>
          Load more
        </StyledLoadMoreButton>
      ) : null}
      {isModalOpen && <Modal />}
    </StyledSection>
  );
};
