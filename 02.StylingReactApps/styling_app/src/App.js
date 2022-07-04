import { useState } from "react";
import "./App.css";
import AddGoal from "./Components/AddGoal";
import GoalList from "./Components/GoalList";

function App() {
  const [goals_list, setGoalsList] = useState();
  const addGoalHandler = (goal_text) => {
    const id = Math.random().toString();
    setGoalsList((prevList) => {
      if (!prevList)
        return [
          {
            id: id,
            text: goal_text,
          },
        ];
      return [...prevList, { id: id, text: goal_text }];
    });
  };
  const deleteGoalHandler = (id) => {
    // goals_list.findIndex((goal) => goal.id === id);
    setGoalsList((prevList) => {
      return prevList.filter((goal) => goal.id !== id);
    });
  };

  return (
    <div>
      <AddGoal onAddGoal={addGoalHandler} />;
      <GoalList goals_list={goals_list} onDeleteId={deleteGoalHandler} />
    </div>
  );
}

export default App;
