import { getDefaultMiddleware, configureStore } from "@reduxjs/toolkit";
import allCarsSlice from "./slices/allCarsSlice";
import carIdSlice from "./slices/carIdSlice";
import carNameSlice from "./slices/carNameSlice";
import sellPartsSlice from "./slices/sellPartsSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    allCars: allCarsSlice,
    carById: carIdSlice,
    carByName: carNameSlice,
    sellParts: sellPartsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
