import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slices/UserSlice";
import NotificationSlice from "./slices/NotificationSlice";

const store = configureStore({
  reducer: { userStates: UserSlice, notificationStates: NotificationSlice },
});

// Exporting the type of store to be used in components
export type RootState = ReturnType<typeof store.getState>;

// Exporting the type of dispatch to be used in actions
export type AppDispatch = typeof store.dispatch;

// Exporting the Store
export default store;
