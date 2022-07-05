import style from "./User.module.css";
const User = (props) => {
  if (props.userData.length === 0) return;
  return (
    <div className={style["user-item"]}>
      <h3>
        {props.userData.username} ({props.userData.age} years Old)
      </h3>
    </div>
  );
};

export default User;
