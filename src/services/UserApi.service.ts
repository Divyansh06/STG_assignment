import axios from "axios";
import { BASE_URL } from "../Constants";
import { IUser } from "../models/IUser.interface";

export async function fetchUserService(): Promise<IUser[]> {
  const response = await axios.get<IUser[]>(BASE_URL);
  return response.data;
}

export async function deleteUserService(userId: string): Promise<void> {
  const response = await axios.delete(`${BASE_URL}/${userId}`);
  return response.data;
}

export async function updateUserService(user: IUser): Promise<void> {
  const response = await axios.put(`${BASE_URL}/${user.id}`, user);
  return response.data;
}
