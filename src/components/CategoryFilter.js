import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  const categoriesButtons = categories.map((cat) => (
    <button
      className={cat === selectedCategory ? "selected" : ""}
      onClick={() => onCategoryChange(cat)}
      key={cat}
    >
      {cat}
    </button>
  ));
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoriesButtons}
    </div>
  );
}

export default CategoryFilter;
