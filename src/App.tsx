import Notification from "./components/Notification/Notification";
import UserCountToolbar from "./components/UserCountToolbar/UserCountToolbar";
import UserList from "./components/UserList/UserList";

function App() {
  return (
    <>
      {/* Notifications: will disappear in 3 Seconds  */}
      <Notification />

      {/* Component displaying the location user mapping toolbar  */}
      <UserCountToolbar />

      {/* Component displaying the user list  */}
      <UserList />
    </>
  );
}

export default App;
