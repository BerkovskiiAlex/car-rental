/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { fetchCarsThunk, loadMoreThunk } from "./operations";

const initialState = {
  cars: [],
};

const carsSlice = createSlice({
  name: "carsList",
  initialState,
  reducers: {},
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

export const carsReducer = carsSlice.reducer;
