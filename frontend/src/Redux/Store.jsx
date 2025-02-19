import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserState";

const store = configureStore({
  reducer: {
    user: userReducer, // User authentication state
  },
});

export default store;
