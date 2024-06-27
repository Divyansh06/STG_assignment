import axios from "axios";
import { BASE_URL } from "../Constants";
import { IUser } from "../models/IUser.interface";

// Service for fetching the users
export async function fetchUserService(): Promise<IUser[]> {
  const response = await axios.get<IUser[]>(BASE_URL);
  return response.data;
}

// Service for updating the users
export async function deleteUserService(userId: string): Promise<void> {
  const response = await axios.delete(`${BASE_URL}/${userId}`);
  return response.data;
}

// Service for deleting the users
export async function updateUserService(user: IUser): Promise<void> {
  const response = await axios.put(`${BASE_URL}/${user.id}`, user);
  return response.data;
}
