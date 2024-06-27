// Interface of User object
export interface IUser {
  id: string;
  name: string;
  avatar: string;
  hobby: string;
  location: string;
  createdAt: string;
}

// Interface of User states in user slice
export interface IUserState {
  users: IUser[];
  loading: boolean;
}
