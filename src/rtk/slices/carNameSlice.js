import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const getCarByName = createAsyncThunk(
  "carSlice/getCar",
  async (carName) => {
    const q = query(
      collection(db, "models"),
      where("modelName", "==", carName)
    );

    let car = {};
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      car = doc;
    });
    return car;
  }
);

const carNameSlice = createSlice({
  initialState: null,
  name: "carSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCarByName.fulfilled, (state, action) => {
      let car = { id: action.payload.id, data: action.payload.data() };
      return car;
    });
  },
});

export default carNameSlice.reducer;
