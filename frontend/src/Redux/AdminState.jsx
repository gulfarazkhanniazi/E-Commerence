import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAdmin: false, // Default: Not an admin
};

const adminSlice = createSlice({
  name: "isAdmin",
  initialState,
  reducers: {
    toggleAdmin: (state) => {
      state.isAdmin = !state.isAdmin; // Toggle admin status
    },
  },
});

// Export actions
export const { toggleAdmin } = adminSlice.actions;
export default adminSlice.reducer;