import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./slices/loadingSlice";
import pageReducer from "./slices/pageSlice";
import umrahReducer from "./slices/umrahSlice";
import hajjReducer from "./slices/hajjSlice";
import facilitiesReducer from "./slices/facilitiesSlice";
import guidanceReducer from "./slices/guidanceSlice";
import managementReducer from "./slices/managementSlice";
import locationReducer from "./slices/locationSlice";
import faqReducer from "./slices/pageFaqDataSlice";
import authReducer from "./slices/authSlice";
import packageReducer from "./slices/packageSlice";
const store = configureStore({
  reducer: {
    loading: loadingReducer,
    page: pageReducer,
    umrah: umrahReducer,
    hajj: hajjReducer,
    facilities: facilitiesReducer,
    guidance: guidanceReducer,
    management: managementReducer,
    location: locationReducer,
    faq: faqReducer,
    auth: authReducer,
    packages: packageReducer,
  },
});

export default store;
