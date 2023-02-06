import { createSlice } from "@reduxjs/toolkit";

const sellPartsSlice = createSlice({
  initialState: [],
  name: "sellPartsSlice",
  reducers: {
    addPart: (state, action) => {
      // let [oldStateOfNewPart] = state?.filter(
      //   (part) => part?.name === action.payload?.name
      // );
      // let newPartCountry = {
      //   name: action.payload?.name,
      //   madeIn: [
      //     ...oldStateOfNewPart?.madeIn?.filter(
      //       (countryDetails) =>
      //         countryDetails?.country !== action.payload?.country?.country
      //     ),
      //     action.payload?.country,
      //   ],
      // };
      // console.log([
      //   ...state?.filter((part) => part?.name !== action.payload?.name),
      //   newPartCountry,
      // ]);
      console.log(action.payload);
      return action.payload;
    },
    resetCart: (state, action) => {
      return [];
    },
  },
});

export default sellPartsSlice.reducer;
export const { addPart, resetCart } = sellPartsSlice.actions;
