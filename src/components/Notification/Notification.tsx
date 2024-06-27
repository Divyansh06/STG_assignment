import { Alert } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleNotification } from "../../store/slices/NotificationSlice";
import { RootState } from "../../store/store";
import "./Notification.css";

function Notification() {
  const notification = useSelector((state: RootState) => state.notificationStates.status);
  const dispatch = useDispatch();

  useEffect(() => {
    // Timeout to hide the notification after 3 seconds
    if (notification.display) {
      setTimeout(() => {
        dispatch(
          handleNotification({
            display: false,
            content: "",
            type: "",
          })
        );
      }, 3000);
    }
  }, [notification]);

  return (
    <div className='alert-container' style={{ display: notification.display ? "block" : "none" }}>
      <Alert severity={notification.type || "info"}>{notification.content}</Alert>
    </div>
  );
}

export default Notification;
