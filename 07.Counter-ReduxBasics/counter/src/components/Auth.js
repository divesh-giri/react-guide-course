import { useSelector, useDispatch } from "react-redux";
import classes from "./Auth.module.css";

import { authActions } from "../store";
import { useRef } from "react";

const Auth = () => {
  const dispatch = useDispatch();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitFormHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.setEmail(emailInputRef.current.value));
    dispatch(authActions.setPassword(emailInputRef.current.value));
    dispatch(authActions.setIsLoggedIn(true));
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitFormHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input ref={passwordInputRef} type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input ref={emailInputRef} type="password" id="password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
