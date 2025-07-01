import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductSlice";
import cartReducer from "./CartSlice"
import FormReducer from "./FormSlice"

const store = configureStore({
  reducer: {
    product: productReducer,
    cart:cartReducer,
    Form:FormReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
