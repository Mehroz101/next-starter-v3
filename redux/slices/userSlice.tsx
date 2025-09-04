import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: {
    id: string;
    name: string;
    email: string;
  } | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}
const initialState: UserState = {
  user: null,
  token: null,
  loading: false,
  error: null,
}


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setUser: (state, action: PayloadAction<{ user: UserState["user"], token: UserState["token"] }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = null;
      state.loading = false;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
      state.loading = false;

    }
  },
});

export const { setLoading, setError, setUser, logout } = userSlice.actions;
export default userSlice.reducer;
