import { RootState } from "app/store";

export const getIsAuthenticated = (state: RootState) =>
  state.login.isAuthenticated;
