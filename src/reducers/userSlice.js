import { createSlice } from "@reduxjs/toolkit";

export const useSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    id: "",
    isLoading: false,
    isLogin: null,
  },
  reducers: {
    loginUser: (state, action) => {
      /* ... */
    },
    clearUser: (state) => {
      /* ... */
    },
  },
});

export const { loginUser, clearUser } = useSlice.actions;
export default useSlice.reducer;
