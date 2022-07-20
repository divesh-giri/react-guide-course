import { useRef } from "react";
import classes from "./NewCommentForm.module.css";
import { addComment } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import { useHistory, useRouteMatch } from "react-router-dom";
import LoadingSpinner from "../UI/LoadingSpinner";

const NewCommentForm = (props) => {
  const match = useRouteMatch();
  const history = useHistory();
  const commentTextRef = useRef();
  const { sendRequest, status, error } = useHttp(addComment);

  const quoteId = match.url.split("/")[2];

  const submitFormHandler = (event) => {
    event.preventDefault();

    // optional: Could validate here

    // send comment to server
    sendRequest({
      quoteId,
      commentData: commentTextRef.current.value,
    });
    history.replace(`${match.url}`);
  };

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />;
      </div>
    );
  }
  if (error) {
    return (
      <div className="centered">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
