import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUser, IUserState } from "../../models/IUser.interface";

const initialState: IUserState = {
  loading: false,
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    handleLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    handleUpdateUser(state, action: PayloadAction<IUser[]>) {
      state.users = action.payload;
    },
    handleDeleteUser(state, action: PayloadAction<string>) {
      state.users = state.users.filter((item) => item.id !== action.payload);
    },
  },
});

export const { handleUpdateUser, handleDeleteUser, handleLoading } = userSlice.actions;
export default userSlice.reducer;
