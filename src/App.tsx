import { useSelector } from "react-redux";
import Notification from "./components/Notification/Notification";
import UserCountToolbar from "./components/UserCountToolbar/UserCountToolbar";
import UserList from "./components/UserList/UserList";
import { RootState } from "./store/store";

function App() {
  const notification = useSelector((state: RootState) => state.notificationStates.status);

  return (
    <>
      <div className='app-container'>
        {/* Notifications: will disappear in 3 Seconds  */}
        {notification.display && <Notification data={notification} />}

        {/* Component displaying the location user mapping toolbar  */}
        <UserCountToolbar />

        {/* Component displaying the user list  */}
        <UserList />
      </div>
    </>
  );
}

export default App;
