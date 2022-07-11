import User from "../User/User";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <div className={styles["users-list-container"]}>
      {props.users.map((user) => (
        <User key={user.id} userData={user} />
      ))}
    </div>
  );
};

export default UsersList;
