import useHttp from "../../hooks/use-http";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  let tskText;
  const { onAddTask } = props;
  const transformTasks = (taskObj) => {
    const generatedId = taskObj.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: tskText };

    onAddTask(createdTask);
  };
  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  const enterTaskHandler = (text) => {
    tskText = text;
    fetchTasks(
      {
        url: "https://todo-list-a7954-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          text,
        },
      },
      transformTasks
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
