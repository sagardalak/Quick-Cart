import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    selectProduct: null,
    skip: 0,
    more: true,
    load: false,
  },
  reducers: {
    setProduct: (state, action) => {
      state.products = [...state.products, ...action.payload];
    },
    setSelectProduct: (state, action) => {
      state.selectProduct = action.payload;
    },
    increaseSkip: (state, action) => {
      state.skip += action.payload;
    },
    setMore: (state, action) => {
      state.more = action.payload;
    },
    setLoad: (state, action) => {
      state.load = action.payload;
    },
  },
});

export const { setProduct, setSelectProduct, increaseSkip, setMore, setLoad } =
  ProductSlice.actions;
export default ProductSlice.reducer;
