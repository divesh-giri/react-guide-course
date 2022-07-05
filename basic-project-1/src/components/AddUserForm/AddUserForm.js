import { useState } from "react";
import styles from "./AddUserForm.module.css";

const AddUserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const usernameChangeHadler = (e) => {
    setUsername(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      id: Math.random().toString(),
      username: username,
      age: +age,
    };
    props.onFormSubmit(data);
    setUsername("");
    setAge("");
  };

  return (
    <div>
      <form onSubmit={submitHandler} className={styles.userForm}>
        <div className={styles.formElement}>
          <label>Username</label>
          <br></br>
          <input
            onChange={usernameChangeHadler}
            type="text"
            value={username}
            placeholder="Username"
          />
        </div>
        <div className={styles.formElement}>
          <label>Age (Years)</label>
          <br></br>
          <input
            onChange={ageChangeHandler}
            type="text"
            value={age}
            placeholder="Age"
          />
        </div>
        <button className={styles["btn-submit"]} type="submit">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;
