import { getDefaultMiddleware, configureStore } from "@reduxjs/toolkit";
import allCarsSlice from "./slices/allCarsSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    allCars: allCarsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
