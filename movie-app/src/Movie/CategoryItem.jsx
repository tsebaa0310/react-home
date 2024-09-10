import React from "react";
import MoviesData from "./MoviesDatas";

function CategoryItem({ category, onClick, setFilteredMovies, list }) {
  const onCategoryClick = () => {
    onClick(category.category);

    const filteredMovies = MoviesData.filter((arr1) =>
      list.some((arr2) => arr1.genre === arr2.category)
    );

    setFilteredMovies(filteredMovies);
  };

  return (
    <div
      className="category-item"
      onClick={onCategoryClick}
      style={{ backgroundColor: category.bgColor }}
    >
      <div className="category-card">
        <h3 className="category-title">{category.category}</h3>
      </div>
    </div>
  );
}

export default CategoryItem;
