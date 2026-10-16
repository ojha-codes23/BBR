import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/userSlice";
// import userReducer from "./userSlice";
// import teacherReducer from "./teacherSlice";
// import commonReducer from "./commonSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    // user: userReducer,
    // teacher: teacherReducer,
    // common: commonReducer,
  },
});

export default store;
