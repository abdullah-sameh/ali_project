import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  initialState: {},
  name: "userSlice",
  reducers: {
    setUser: (state, action) => {
      let theUser = action.payload;
      if (
        theUser.uid === "IkCyW6WUCjZFRWphnGjVKHvngSY2" ||
        theUser.uid === "mWEUNIgvo9XBIChzYdtmLNsrGKG2"
      ) {
        return { ...theUser, admin: true };
      } else {
        return { ...theUser, admin: false };
      }
    },
  },
});

export default userSlice.reducer;
export const { setUser } = userSlice.actions;
