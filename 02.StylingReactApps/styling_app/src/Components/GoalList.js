import "./GoalList.css";
import Goal from "./Goal";

const GoalList = (props) => {
  const getIDHandler = (id) => {
    props.onDeleteId(id);
  };
  return (
    <div className="goal-list-container">
      {props.goals_list &&
        props.goals_list.map((goal) => {
          return (
            <Goal
              key={goal.id}
              text={goal.text}
              id={goal.id}
              getId={getIDHandler}
            />
          );
        })}
    </div>
  );
};

export default GoalList;
