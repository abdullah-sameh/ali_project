import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  initialState: {},
  name: "userSlice",
  reducers: {
    setUser: (state, action) => {
      let theUser = action.payload;
      if (
        theUser.uid === process.env.REACT_APP_FIRST_ADMIN ||
        theUser.uid === process.env.REACT_APP_SECOND_ADMIN
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
