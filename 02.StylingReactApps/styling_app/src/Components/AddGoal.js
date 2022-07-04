import { useState } from "react";
import "./AddGoal.css";

const AddGoal = (props) => {
  const [goal_input, setGoalInput] = useState("");
  const inputChangeHandler = (e) => {
    setGoalInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.onAddGoal(goal_input);
    setGoalInput("");
  };
  return (
    <div onSubmit={submitHandler} className="container">
      <form>
        <label>Course Goal</label>
        <div>
          <input
            onChange={inputChangeHandler}
            value={goal_input}
            className="form-input"
            type="text"
            placeholder="Enter your Goal!"
          />
        </div>
        <div className="btn-submit">
          <button type="submit">Add Goal</button>
        </div>
      </form>
    </div>
  );
};
export default AddGoal;
