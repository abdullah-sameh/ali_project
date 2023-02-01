import { getDefaultMiddleware, configureStore } from "@reduxjs/toolkit";
import allCarsSlice from "./slices/allCarsSlice";
import carSlice from "./slices/carSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    allCars: allCarsSlice,
    car: carSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
