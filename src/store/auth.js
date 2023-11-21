import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "cart",
  initialState: {
    isShown: false,
    isLoggedIn: false,
    user: null,
  },
  reducers: {
    toggleShown(state) {
      state.isShown = !state.isShown;
    },
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
