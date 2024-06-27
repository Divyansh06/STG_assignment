import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { IUser } from "../../models/IUser.interface";
import { useId, useMemo } from "react";
import { LOCATIONS } from "../../Constants";
import "./UserCard.css";

function UserCard(props: PropTypes) {
  const { user, onLocationUpdate, onUserDelete } = props;
  const labelId = useId();

  // Formatting the date display format
  // Have used useMemo to only do this computation when date is updated to optimise performance
  const createdAt = useMemo(() => {
    return new Date(user.createdAt).toUTCString().slice(0, 17);
  }, [user.createdAt]);

  return (
    <div className='card-container round'>
      <div>
        <img src={user.avatar} alt='User Avatar' className='avatar round' />
        <h4 className='name-container'>{user.name}</h4>
      </div>
      <div className='card-content'>
        <p>
          <strong>Created at: </strong>
          {createdAt}
        </p>
        <p>
          <strong>Hobby:</strong> {user.hobby}
        </p>
        <div className='select-container'>
          <FormControl sx={{ m: 1, minWidth: 120 }} size='small' fullWidth>
            <InputLabel id={labelId}>Location</InputLabel>
            <Select
              labelId={labelId}
              label='Location'
              value={user.location}
              onChange={(event) => onLocationUpdate(user.id, event.target.value)}
            >
              {LOCATIONS.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className='button-container'>
          <Button variant='outlined' onClick={() => onUserDelete(user.id)}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

interface PropTypes {
  user: IUser;
  onLocationUpdate: (userId: string, location: string) => void;
  onUserDelete: (userId: string) => void;
}

export default UserCard;
