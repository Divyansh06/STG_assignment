import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { INotification, INotificationState } from "../../models/INotification.interface";

const initialState: INotificationState = {
  status: {
    type: "",
    content: "",
    display: false,
  },
};

// Slice to manage the notification states
const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    // handling the notification values passed from actions
    handleNotification(state, action: PayloadAction<INotification>) {
      state.status = action.payload;
    },
  },
});

export const { handleNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
