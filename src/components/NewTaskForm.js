import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [category, setCategory] = useState("Food");
  const [details, setDetails] = useState("");

  function handleCatChange(e) {
    setCategory(e.target.value);
  }

  function handleDetailsChange(e) {
    setDetails(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({
      id: uuid(),
      text: details,
      category: category,
    });
  }

  const categoriesOptions = categories.map((cat) => {
    if (cat !== "All") {
      return (
        <option key={cat} value={cat}>
          {cat}
        </option>
      );
    }
  });

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={details}
          onChange={handleDetailsChange}
        />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCatChange}>
          {categoriesOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
