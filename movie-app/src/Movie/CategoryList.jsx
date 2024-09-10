import { useState } from "react";
import { Button } from "react-bootstrap";
import Slider from "react-slick";
import CategoryDataList from "./CategoryDataList";
import CategoryItem from "./CategoryItem";
import MoviesListData from "./MoviesDatas";
import CustomArrow from "./CustomArrow";

function CategoriesList({ onClick, currentCategory, setFilteredMovies }) {
  const [list, setList] = useState([]);

  const handleSaveList = (category) => {
    setList([...list, category]);
  };

  const onReset = () => {
    setFilteredMovies(MoviesListData);
    setList([]);
  };

  const sliderSwiper = {
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow: <CustomArrow className="slick-prev" direction="prev" />,
    nextArrow: <CustomArrow className="slick-next" direction="next" />,
  };

  return (
    <div className="category-main">
      <div className="category">
        <div className="d-flex align-items-center justify-content-center">
          <h2 className="title-text">Categories:</h2>
          {list.map((category, index) => (
            <p className="mx-2" key={index}>
              *{category.category}
            </p>
          ))}
        </div>
        <button
          className="reset-button"
          onClick={onReset}
          variant="light"
          style={{ borderColor: "red" }}
        >
          Reset
        </button>
      </div>
      <div className="category-list">
        <Slider {...sliderSwiper}>
          {CategoryDataList.map((category) => (
            <CategoryItem
              key={category.id}
              category={category}
              list={list}
              onClick={() => handleSaveList(category)}
              currentCategory={currentCategory}
              setFilteredMovies={setFilteredMovies}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CategoriesList;
