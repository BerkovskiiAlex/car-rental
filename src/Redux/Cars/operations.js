/** @format */

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const carsInstance = axios.create({
  baseURL: "https://64de2222825d19d9bfb22657.mockapi.io",
});

export const fetchCarsThunk = createAsyncThunk(
  "fetchContacts",
  async (_, thunkAPI) => {
    try {
      const res = await carsInstance.get("/car-rental");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
