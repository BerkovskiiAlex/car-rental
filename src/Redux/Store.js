/** @format */

import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./Cars/carsSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfigCars = {
  key: "cars",
  version: 1,
  storage,
};

const persistedReducerContacts = persistReducer(persistConfigCars, carsReducer);

export const store = configureStore({
  reducer: { carsList: persistedReducerContacts },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
