import AddUserForm from "../AddUserForm/AddUserForm";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const formSubmitHandler = (data) => {
    props.getData(data);
  };

  return (
    <div className={styles.container}>
      <AddUserForm onFormSubmit={formSubmitHandler} />
    </div>
  );
};

export default AddUser;
