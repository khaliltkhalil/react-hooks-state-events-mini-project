import React from "react";
import Task from "./Task";

function TaskList({ tasks, setTasks }) {
  function handleDeleteTask(id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  const renderedTasks = tasks.map((task) => (
    <Task
      key={task.id}
      id={task.id}
      text={task.text}
      category={task.category}
      onDelete={handleDeleteTask}
    />
  ));

  return <div className="tasks">{renderedTasks}</div>;
}

export default TaskList;
