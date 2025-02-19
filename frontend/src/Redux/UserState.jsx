import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // Initially, no user is logged in
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload; // Store user data on login
    },
    logout: (state) => {
      state.user = null; // Remove user data on logout
    },
  },
});

// Export actions
export const { login, logout } = userSlice.actions;

// Export reducer
export default userSlice.reducer;