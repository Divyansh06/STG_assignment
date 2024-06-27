export interface IUser {
  id: string;
  name: string;
  avatar: string;
  hobby: string;
  location: string;
  createdAt: string;
}

export interface IUserState {
  users: IUser[];
  loading: boolean;
}
