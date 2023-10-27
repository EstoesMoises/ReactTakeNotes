import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskCard({ task, deleteTask }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Delete task</button>
    </div>
  );
}
