import { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UsersList from "./components/UsersList/UsersList";
import Overlay from "./components/UI/Overlay";

function App() {
  const [usersList, setUsersList] = useState([]);
  const [isError, setIsError] = useState([false, ""]);
  const dataHandler = (data) => {
    if (data.age <= 0) {
      setIsError([true, "Please enter Valid Age!"]);
      return;
    }

    setUsersList((prevList) => {
      return [...prevList, data];
    });
  };

  const exitOverlayHandler = () => {
    setIsError([false, ""]);
  };

  return (
    <div>
      {isError[0] && (
        <Overlay onClickExit={exitOverlayHandler} error={isError} />
      )}
      <AddUser getData={dataHandler} />;
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
