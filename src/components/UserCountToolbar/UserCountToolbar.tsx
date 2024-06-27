import { useSelector } from "react-redux";
import { LOCATIONS } from "../../Constants";
import { RootState } from "../../store/store";
import { useEffect, useState } from "react";
import "./UserCountToolbar.css";
import { Grid } from "@mui/material";

function UserCountToolbar() {
  const users = useSelector((state: RootState) => state.userStates.users);
  const [userLocationMap, setUserLocationMap] = useState<Record<string, number>>({});

  useEffect(() => {
    // Trigger user location mapping computations
    if (users.length) createUserLocationMapping();
  }, [users]);

  function createUserLocationMapping() {
    // created a map for location and user
    const locationMap: Record<string, number> = {};

    // loop over locations to create keys for each location
    LOCATIONS.map((item) => {
      locationMap[item] = 0;
    });

    // loop over users to update location count
    users.map((user) => {
      locationMap[user.location] += 1;
    });

    // set the map inn state to be used in UI
    setUserLocationMap(locationMap);
  }

  return (
    <div className='toolbar'>
      <Grid container spacing={2}>
        {Object.keys(userLocationMap).map((location: string) => (
          <Grid key={location} item xs={4} md={12 / 9}>
            <div className='location-card'>
              <p>{location}</p>
              <p>{userLocationMap[location]}</p>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default UserCountToolbar;
