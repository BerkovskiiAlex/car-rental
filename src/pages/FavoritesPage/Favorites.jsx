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
  StyledSection,
  StyledCardsListDiv,
} from "../CatalogPage/Catalog.styled";
import Modal from "../../components/Modal/Modal";
import { CarCard } from "../../data/CarCard";
import FilterForm from "../../data/FilterForm";

export const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(getFavorites);
  const isModalOpen = useSelector(getIsModalOpen);

  const [filteredFavorites, setFilteredFavorites] = useState(favorites);

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

  return (
    <StyledSection>
      <FilterForm cars={favorites} onSubmitFilter={setFilteredFavorites} />
      <StyledCardsListDiv>
        {filteredFavorites.map((car) => {
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
      </StyledCardsListDiv>
      {isModalOpen && <Modal />}
    </StyledSection>
  );
};
