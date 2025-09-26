import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: {
    id: string;
    name: string;
    email: string;
  } | null;
  token: string | null;
  loading: boolean;
  success: boolean;
  error: string | null;
  isAuthenticated: boolean;
  hydrated: boolean;
}
const initialState: UserState = {
  user: null,
  token: null,
  loading: false,
  error: null,
  success: false,
  isAuthenticated: false,
  hydrated: false,

}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
      state.error = null;
      state.success = false;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.loading = false;
      state.success = false;
    },
    setUser: (state, action: PayloadAction<{ user: UserState["user"], token: UserState["token"] }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = null;
      state.loading = false;
      state.success = true;
      state.isAuthenticated = true;

    },
    setHydrated: (state, action: PayloadAction<boolean>) => {
      state.hydrated = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
      state.loading = false;
      state.success = true;
      state.isAuthenticated = false;
      state.hydrated = true;

    }
  },
});

export const { setLoading, setError, setUser, setHydrated, logout } = userSlice.actions;
export default userSlice.reducer;
