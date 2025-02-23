import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { user: null },  // Ensure the state starts as an object
  reducers: {
    login: (state, action) => {
      return { user: action.payload };  // Set the entire state correctly
    },
    logout: () => {
      return { user: null };  // Reset state on logout
    },
  },
});

// Export actions
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
