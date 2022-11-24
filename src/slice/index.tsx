import { configureStore } from "@reduxjs/toolkit";
import formsReducer from "./formSlice";

export const store = configureStore({
  reducer: {
    form: formsReducer
  }
});