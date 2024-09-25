import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../types/IUser";

export interface AuthState {
  user: IUser | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authLogin(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
    authLogout(state) {
      state.user = null;
    },
  },
});

export const { authLogin, authLogout } = authSlice.actions;
export default authSlice.reducer;
