import { createSlice } from "@reduxjs/toolkit";
import { IS_AUTHENTICATED } from "constants/common";
import { getItem } from "utils/local-storage";

const initialState = {
  isAuthenticated: getItem(IS_AUTHENTICATED, false),
};

export const loginSlice = createSlice({
  name: "login",
  initialState,

  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
