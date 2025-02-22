import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAdmin: false, // Initially, the user is not an admin
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    toggleAdmin: (state) => {
      state.isAdmin = !state.isAdmin; // Toggle admin status
    },
  },
});

// Export actions
export const { toggleAdmin } = adminSlice.actions;

// Export reducer
export default adminSlice.reducer;
