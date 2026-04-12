import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import trackReducer from "./music/trackSlice";

export const store = configureStore({
  reducer: { auth: authReducer, track: trackReducer },
});
