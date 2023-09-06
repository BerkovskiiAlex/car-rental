/** @format */

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const carsInstance = axios.create({
  baseURL: "https://64de2222825d19d9bfb22657.mockapi.io",
});

export const fetchCarsThunk = createAsyncThunk(
  "fetchCars",
  async (_, thunkAPI) => {
    try {
      const res = await carsInstance.get(`/advert?limit=8&page=1`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loadMoreThunk = createAsyncThunk(
  "fetchLoadMore",
  async (currentPage, thunkAPI) => {
    try {
      const res = await carsInstance.get(`/advert?limit=8&page=${currentPage}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
