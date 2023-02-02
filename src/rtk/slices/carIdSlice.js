import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

export const getCarById = createAsyncThunk("carSlice/getCar", async (carId) => {
  const docRef = doc(db, "models", carId);
  const docSnap = await getDoc(docRef);

  return docSnap;
});

const carIdSlice = createSlice({
  initialState: null,
  name: "carSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCarById.fulfilled, (state, action) => {
      const theCar = { id: action.payload?.id, data: action.payload?.data() };
      return theCar;
    });
  },
});

export default carIdSlice.reducer;
