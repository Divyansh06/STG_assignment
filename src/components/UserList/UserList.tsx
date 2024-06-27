import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useEffect } from "react";
import { deleteUsers, fetchUsers, updateUsers } from "../../store/actions/UserActions";
import UserCard from "../UserCard/UserCard";
import { IUser } from "../../models/IUser.interface";
import "./UserList.css";
import { CircularProgress, Grid } from "@mui/material";

function UserList() {
  const { users, loading } = useSelector((state: RootState) => state.userStates);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUsers(dispatch);
  }, []);

  function handleLocationUpdate(userId: string, location: string) {
    updateUsers(dispatch, userId, location, users);
  }

  function handleUserDelete(userId: string) {
    deleteUsers(dispatch, userId);
  }

  if (loading) {
    return (
      <div className='loader'>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className='user-container'>
      <Grid container spacing={0}>
        {users.map((user: IUser) => (
          <Grid item key={user.id} xs={12} md={6} lg={4}>
            <UserCard user={user} onLocationUpdate={handleLocationUpdate} onUserDelete={handleUserDelete} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default UserList;
