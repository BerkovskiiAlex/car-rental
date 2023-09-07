/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { fetchCarsThunk, loadMoreThunk } from "./operations";

const initialState = {
  cars: [],
  favorites: [],
};
const carsSlice = createSlice({
  name: "carsList",
  initialState,
  reducers: {
    addToFavorites: (state, { payload }) => {
      const carIndex = state.cars.findIndex((car) => car.id === payload.car.id);
      if (carIndex >= 0) {
        state.cars[carIndex].isFavorite = true;
        state.favorites = [...state.favorites, payload.car];
      }
    },
    removeFromFavorites: (state, { payload }) => {
      const carIndex = state.cars.findIndex((car) => car.id === payload.car.id);
      if (carIndex >= 0) {
        state.cars[carIndex].isFavorite = false;
        state.favorites = state.favorites.filter(
          (car) => car.id !== payload.car.id
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarsThunk.fulfilled, (state, { payload }) => {
        state.cars = payload;
      })
      .addCase(loadMoreThunk.fulfilled, (state, { payload }) => {
        state.cars = [...state.cars, ...payload];
      });
  },
});

export const { addToFavorites, removeFromFavorites } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;