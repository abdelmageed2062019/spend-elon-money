import { configureStore } from "@reduxjs/toolkit";
import moneySlice from "./Product/productReducer";

export const store = configureStore({
  reducer: {
    money: moneySlice,
  },
});
