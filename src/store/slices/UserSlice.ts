import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUser, IUserState } from "../../models/IUser.interface";

const initialState: IUserState = {
  loading: false,
  users: [],
};

// Slice to manage all the user states
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // action to manage user loading state
    handleLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    // action to manage user state
    handleUpdateUser(state, action: PayloadAction<IUser[]>) {
      state.users = action.payload;
    },
    // action to manage deleting of user
    handleDeleteUser(state, action: PayloadAction<string>) {
      state.users = state.users.filter((item) => item.id !== action.payload);
    },
  },
});

export const { handleUpdateUser, handleDeleteUser, handleLoading } = userSlice.actions;
export default userSlice.reducer;
