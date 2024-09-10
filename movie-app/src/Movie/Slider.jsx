import Carousel from "react-bootstrap/Carousel";
import thrones from "../assets/game-of-thrones.jpg";

function Slider() {
  return (
    <Carousel data-bs-theme="white">
      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src={thrones}
          alt="First slide"
        />
        <Carousel.Caption className="slider-desc">
          <h5 className="slider-text">"Game Of Thrones"</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src="https://templates.iqonic.design/streamit-dist/frontend/html/assets/images/movies/banner1.webp"
          alt="Second slide"
        />
        <Carousel.Caption className="slider-desc">
          <h5 className="slider-text">"War for the Planet of the Apes"</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src="https://templates.iqonic.design/streamit-dist/frontend/html/assets/images/movies/movie-banner-1.webp"
          alt="Third slide"
        />
        <Carousel.Caption className="slider-desc">
          <h5 className="slider-text">"John Wick"</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src="https://templates.iqonic.design/streamit-dist/frontend/html/assets/images/tv-show/banner-3.webp"
          alt="Fourth slide"
        />
        <Carousel.Caption className="slider-desc">
          <h5 className="slider-text">"Breaking Bad"</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src="https://templates.iqonic.design/streamit-dist/frontend/html/assets/images/movies/banner3.webp"
          alt="Fifth slide"
        />
        <Carousel.Caption className="slider-desc">
          <h5 className="slider-text">"Star Wars"</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
