import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MoviesData from "./Movie/MoviesDatas";
import Navbar from "./Layout/Navbar";
import Slider from "./Movie/Slider";
import MoviesList from "./Movie/MovieList";
import CategoryList from "./Movie/CategoryList";
import Footer from "./Layout/Footer";

import { Container } from "react-bootstrap";

function App() {
  const [theme, setTheme] = useState("dark");

  const [currentCategory, setCurrentCategory] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(MoviesData || []);

  return (
    <Container fluid className={`container-main ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Slider />
      <CategoryList
        onClick={setCurrentCategory}
        setFilteredMovies={setFilteredMovies}
        currentCategory={currentCategory}
      />
      <MoviesList filteredMovies={filteredMovies} />
      <Footer />
    </Container>
  );
}

export default App;
