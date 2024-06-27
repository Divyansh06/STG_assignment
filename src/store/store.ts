import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slices/UserSlice";
import NotificationSlice from "./slices/NotificationSlice";

const store = configureStore({
  reducer: { userStates: UserSlice, notificationStates: NotificationSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
