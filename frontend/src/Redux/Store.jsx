import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserState";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Uses localStorage by default
import { combineReducers } from "redux";

// Combine reducers (in case you add more in the future)
const rootReducer = combineReducers({
  user: userReducer, // User authentication state
});

// Configure Redux Persist
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create Redux Store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Avoids errors with non-serializable values
    }),
});

// Persistor to rehydrate state
export const persistor = persistStore(store);

export default store;