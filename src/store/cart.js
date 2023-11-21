import { createSlice } from "@reduxjs/toolkit";

const totalAmountFn = (state) => {
  const totalAmount = state.items.reduce(
    (total, item) => total + item.price,
    0
  );
  return totalAmount;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalAmount: 0 },
  reducers: {
    addToCart(state, action) {
      state.items.push(action.payload);
      state.totalAmount = totalAmountFn(state);
    },
    removeFromCart(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      state.items.splice(itemIndex, 1);
      state.totalAmount = totalAmountFn(state);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
