import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import formsReducer from "./formSlice";

export const store = configureStore({
  reducer: {
    form: formsReducer
  }
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>