import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { v4 as uuid } from "uuid";

import { CATEGORIES, TASKS as tasksList } from "../data";

const TASKS = tasksList.map((task) => {
  return {
    ...task,
    id: uuid(),
  };
});

// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }

  const filteredTasks = tasks.filter((task) => {
    return selectedCategory === "All" || task.category === selectedCategory;
  });

  //console.log(filteredTasks);
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleFormSubmit}
      />
      <TaskList tasks={filteredTasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
