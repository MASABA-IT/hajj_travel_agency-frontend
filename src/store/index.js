import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./slices/loadingSlice";
import pageReducer from './slices/pageSlice';
const store = configureStore({
  reducer: {
    loading: loadingReducer,
    page: pageReducer
  },
});

export default store;
