import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { user: null },  // Ensuring the initial state is correctly set
  reducers: {
    login: (state, action) => {
      state.user = action.payload;  // Update the state with user data
    },
    logout: (state) => {
      state.user = null;
    },
  },
});


// Export actions
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;