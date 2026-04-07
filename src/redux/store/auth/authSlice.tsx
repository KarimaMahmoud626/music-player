import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: {},
    loading: false,
    failed: null,
    isLoggedIn: false,
    isLoggedOut: false,
  },
  reducers: {},
  extraReducers(builder) {},
});

export default authSlice.reducer;
