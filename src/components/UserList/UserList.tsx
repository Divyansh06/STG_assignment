import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useEffect } from "react";
import { deleteUsers, fetchUsers, updateUsers } from "../../store/actions/UserActions";
import { IUser } from "../../models/IUser.interface";
import { CircularProgress, Grid } from "@mui/material";
import UserCard from "../UserCard/UserCard";
import "./UserList.css";

function UserList() {
  const { users, loading } = useSelector((state: RootState) => state.userStates);
  const dispatch = useDispatch();

  useEffect(() => {
    // Initiate the fetching of users
    fetchUsers(dispatch);
  }, []);

  // function to update the user
  function handleLocationUpdate(userId: string, location: string) {
    updateUsers(dispatch, userId, location, users);
  }

  // function to delete the user
  function handleUserDelete(userId: string) {
    deleteUsers(dispatch, userId);
  }

  // Returning the loading status while facing the data
  if (loading) {
    return (
      <div className='loader'>
        <CircularProgress />
      </div>
    );
  }

  // Returning the users when data is fetched
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
