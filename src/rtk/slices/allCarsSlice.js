import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../firebase";
import { collection, query, getDocs } from "firebase/firestore";

export const getAllCars = createAsyncThunk(
  "allCarsSlice/getAllCars",
  async () => {
    const q = query(collection(db, "models"));
    let cars = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      cars.push(doc);
    });
    return cars;
  }
);

const allCarsSlice = createSlice({
  initialState: [],
  name: "allCarsSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCars.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(getAllCars.rejected, (state, action) => {
      return action.payload;
    });
  },
});

export default allCarsSlice.reducer;
