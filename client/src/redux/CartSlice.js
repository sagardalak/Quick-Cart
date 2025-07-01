import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartData: [],
    cartId:[],
    Rate:0
  },
  reducers: {
    AddToCart: (state, action) => {
      state.cartData.push(action.payload);
    },
    RemoveToCart: (state, action) => {
      state.cartData = state.cartData.filter((i) => i.id !== action.payload);
    },
    AddToCartId: (state, action) => {
      state.cartId.push(action.payload);
    },
    RemoveToCartId: (state, action) => {
      state.cartId = state.cartId.filter((id) => id !== action.payload);
    },
    AddRate:(state,action)=>{
      state.Rate+=action.payload
    },
    SubRate:(state,action)=>{
      state.Rate-=action.payload
    }
  },
});

export const { AddToCart, RemoveToCart, AddToCartId,RemoveToCartId,AddRate,SubRate} = CartSlice.actions;
export default CartSlice.reducer;

