import { IUser } from "../../models/IUser.interface";
import { deleteUserService, fetchUserService, updateUserService } from "../../services/UserApi.service";
import { handleNotification } from "../slices/NotificationSlice";
import { handleDeleteUser, handleLoading, handleUpdateUser } from "../slices/UserSlice";
import { AppDispatch } from "../store";

export async function fetchUsers(dispatch: AppDispatch) {
  try {
    dispatch(handleLoading(true));
    const data = await fetchUserService();
    dispatch(
      handleNotification({
        display: true,
        type: "success",
        content: "Users fetched successfully!",
      })
    );
    dispatch(handleUpdateUser(data));
    dispatch(handleLoading(false));
  } catch (error) {
    dispatch(
      handleNotification({
        display: true,
        type: "error",
        content: "Error: Unable to fetch users!",
      })
    );
  }
}

export async function updateUsers(dispatch: AppDispatch, userId: string, location: string, users: IUser[]) {
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
      dispatch(handleLoading(true));
      await updateUserService(updatedUsers[updatedUserIndex]);
      dispatch(handleUpdateUser(updatedUsers));
      dispatch(
        handleNotification({
          display: true,
          type: "success",
          content: "Users updated successfully!",
        })
      );
    } catch (error) {
      dispatch(
        handleNotification({
          display: true,
          type: "error",
          content: "Error: Unable to update user!",
        })
      );
    }
    dispatch(handleLoading(false));
  }
}

export async function deleteUsers(dispatch: AppDispatch, userId: string) {
  dispatch(handleLoading(true));
  try {
    await deleteUserService(userId);
    dispatch(handleDeleteUser(userId));
    dispatch(
      handleNotification({
        display: true,
        type: "success",
        content: "Users deleted successfully!",
      })
    );
  } catch (error) {
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
