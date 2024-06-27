import { INotification } from "../../models/INotification.interface";
import { Alert } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { handleNotification } from "../../store/slices/NotificationSlice";
import "./Notification.css";

function Notification(props: PropTypes) {
  const { type, content, display } = props.data;
  const dispatch = useDispatch();

  console.log(props.data);

  useEffect(() => {
    setTimeout(() => {
      dispatch(
        handleNotification({
          display: false,
          content: "",
          type: "",
        })
      );
    }, 3000);
  }, []);

  return (
    <div className='alert-container' style={{ display: display ? "block" : "none" }}>
      <Alert severity={type || "info"}>{content}</Alert>
    </div>
  );
}

interface PropTypes {
  data: INotification;
}

export default Notification;
