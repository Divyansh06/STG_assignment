import { useSelector } from "react-redux";
import Notification from "./components/Notification/Notification";
import UserCountToolbar from "./components/UserCountToolbar/UserCountToolbar";
import UserList from "./components/UserList/UserList";
import { RootState } from "./store/store";

function App() {
  const notification = useSelector((state: RootState) => state.notificationStates.status);
  console.log({ notification });

  return (
    <>
      <div className='app-container'>
        {notification.display && <Notification data={notification} />}
        <UserCountToolbar />
        <UserList />
      </div>
    </>
  );
}

export default App;
