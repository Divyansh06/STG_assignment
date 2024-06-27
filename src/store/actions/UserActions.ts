import { IUser } from "../../models/IUser.interface";
import { deleteUserService, fetchUserService, updateUserService } from "../../services/UserApi.service";
import { handleNotification } from "../slices/NotificationSlice";
import { handleDeleteUser, handleLoading, handleUpdateUser } from "../slices/UserSlice";
import { AppDispatch } from "../store";

// Action to fetch the Users and update the state in the userSlice and trigger the revelant notifications.
export async function fetchUsers(dispatch: AppDispatch) {
  try {
    // starting the loading
    dispatch(handleLoading(true));

    // Fetched the data
    const data = await fetchUserService();

    // Triggered the notification
    dispatch(
      handleNotification({
        display: true,
        type: "success",
        content: "Users fetched successfully!",
      })
    );

    // Updated the users and stopped the loading
    dispatch(handleUpdateUser(data));
    dispatch(handleLoading(false));
  } catch (error) {
    // Trigger error notification in case of failure
    dispatch(
      handleNotification({
        display: true,
        type: "error",
        content: "Error: Unable to fetch users!",
      })
    );
  }
}

// Action to update User's location and update the state in the userSlice and trigger the revelant notifications.
export async function updateUsers(dispatch: AppDispatch, userId: string, location: string, users: IUser[]) {
  // Update the array to be updated in the users state
  let updatedUserIndex = -1;
  const updatedUsers = users.map((item, index) => {
    if (item.id === userId) {
      item = { ...item, location };
      updatedUserIndex = index;
    }
    return item;
  });

  if (updatedUserIndex >= 0) {
    try {
      // starting the loading
      dispatch(handleLoading(true));

      // Triggring the update user action
      await updateUserService(updatedUsers[updatedUserIndex]);

      // Updating the users in the user slice
      dispatch(handleUpdateUser(updatedUsers));

      // Triggering the success notification
      dispatch(
        handleNotification({
          display: true,
          type: "success",
          content: "Users updated successfully!",
        })
      );
    } catch (error) {
      // Trigger error notification in case of failure
      dispatch(
        handleNotification({
          display: true,
          type: "error",
          content: "Error: Unable to update user!",
        })
      );
    }
    // Stopping the loading
    dispatch(handleLoading(false));
  }
}

// Action to delete the User and update the state in the userSlice and trigger the revelant notifications.
export async function deleteUsers(dispatch: AppDispatch, userId: string) {
  // Starting the loading
  dispatch(handleLoading(true));
  try {
    // Triggring the update user action
    await deleteUserService(userId);

    // Update the user in user slice
    dispatch(handleDeleteUser(userId));

    // Triggering the success notification
    dispatch(
      handleNotification({
        display: true,
        type: "success",
        content: "Users deleted successfully!",
      })
    );
  } catch (error) {
    // Triggering the error notification in case of failure
    dispatch(
      handleNotification({
        display: true,
        type: "error",
        content: "Error: Unable to delete user!",
      })
    );
  }
  dispatch(handleLoading(false));
}
