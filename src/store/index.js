import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import authReducer from "./auth";
import favsReducer from "./favorites";
import productsReducer from "./products";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    auth: authReducer,
    favs: favsReducer,
  },
});
export default store;
