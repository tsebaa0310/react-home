import MovieItem from "./MovieItem";

function MoviesList({ filteredMovies }) {
  return (
    <div>
      <h2 className="title-text">Movies:</h2>
      <div className="movie-list">
        {filteredMovies.length === 0 ? (
          <div className="error-text">
            <p>No movies available for the selected category.</p>
          </div>
        ) : (
          filteredMovies.map((movie, index) => (
            <MovieItem key={index} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
}

export default MoviesList;
