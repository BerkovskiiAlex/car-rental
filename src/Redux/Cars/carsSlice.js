/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { fetchCarsThunk } from "./operations";

const initialState = {
  cars: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: "",
};

const carsSlice = createSlice({
  name: "contactList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCarsThunk.fulfilled, (state, { payload }) => {
      state.contacts.items = payload;
    });
  },
});

export const carsReducer = carsSlice.reducer;
