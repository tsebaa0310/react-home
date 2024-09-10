import React from "react";
import Button from "react-bootstrap/Button";
import imdb from "../assets/imdb.png";

function MovieItem({ movie }) {
  return (
    <div className="movie-item">
      <div className="movie-img-container">
        <img src={movie.poster} alt={movie.title} className="movie-img" />
        <div className="movie-overlay">
          <strong className="overlay-title">{movie.title}</strong>
          <Button className="genre-button" variant="danger">
            {movie.genre}
          </Button>{" "}
          <p className="overlay-text">{movie.year}</p>
          <div className="overlay-div">
            <img src={imdb} alt="IMDB logo" className="imdb-logo" />
            <p className="overlay-score">{movie.score.toFixed(1)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;
