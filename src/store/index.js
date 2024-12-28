import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./slices/loadingSlice";
import pageReducer from "./slices/pageSlice";
import umrahReducer from "./slices/umrahSlice";
import hajjReducer from "./slices/hajjSlice";

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    page: pageReducer,
    umrah: umrahReducer,
    hajj: hajjReducer,
  },
});

export default store;
