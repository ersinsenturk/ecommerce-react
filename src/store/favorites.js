import { createSlice } from "@reduxjs/toolkit";

const favsSlice = createSlice({
  name: "favs",
  initialState: {
    items: [],
  },
  reducers: {
    addToFavorites(state, action) {
      state.items.push(action.payload);
    },
    removeFromFavorites(state, action) {
      const id = action.payload;
      const itemIndex = state.items.findIndex((item) => item === id);
      console.log(itemIndex);
      state.items.splice(itemIndex, 1);
    },
  },
});

export const favsActions = favsSlice.actions;
export default favsSlice.reducer;
