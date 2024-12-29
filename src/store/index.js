import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./slices/loadingSlice";
import pageReducer from "./slices/pageSlice";
import umrahReducer from "./slices/umrahSlice";
import hajjReducer from "./slices/hajjSlice";
import facilitiesReducer from "./slices/facilitiesSlice";
import guidanceReducer from "./slices/guidanceSlice";

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    page: pageReducer,
    umrah: umrahReducer,
    hajj: hajjReducer,
    facilities: facilitiesReducer,
    guidance: guidanceReducer,
  },
});

export default store;
