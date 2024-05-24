import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    is_logged: false,
    user: {},
    token: "",
  },
  reducers: {
    loginAction: (state, action) => {
      state.is_logged = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      window.localStorage.setItem("token-api-sena", action.payload.token);
    },
    logoutAction: (state) => {
      state.is_logged = false;
      state.user = {};
      state.token = "";
      window.localStorage.removeItem("token-api-sena");
    },
  },
});

export const { loginAction, logoutAction } = authSlice.actions;

export default authSlice.reducer;
