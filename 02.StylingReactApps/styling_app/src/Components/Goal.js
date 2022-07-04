import "./Goal.css";
const Goal = (props) => {
  const clickHandler = (e) => {
    props.getId(props.id);
  };
  return (
    <div onClick={clickHandler} className="goal-container">
      <h2>{props.text}</h2>
    </div>
  );
};

export default Goal;
