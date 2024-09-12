import styled from "styled-components";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import arrow from "./images/icon-arrow-down.svg";
import pic1 from "./images/desktop/image-transform.jpg";
import pic2 from "./images/desktop/image-stand-out.jpg";
import pic3 from "./images/desktop/image-graphic-design.jpg";
import pic4 from "./images/desktop/image-photography.jpg";

import pic5 from "./images/desktop/image-gallery-milkbottles.jpg";
import pic6 from "./images/desktop/image-gallery-orange.jpg";
import pic7 from "./images/desktop/image-gallery-cone.jpg";
import pic8 from "./images/desktop/image-gallery-sugarcubes.jpg";

function App() {
  const Button = styled.button`
    background-color: ${(props) => (props.test ? "green" : "blue")};
  `;

  return (
    <Container fluid>
      <section className="header">
        <nav className="header-nav">
          <h1>sunnyside</h1>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <button>Contact</button>
            </li>
          </ul>
        </nav>

        <div className="header-content">
          <h2>WE ARE CREATIVES</h2>
          <div>
            <img src={arrow} alt="Arrow" className="arrow" />
          </div>
        </div>
      </section>
      <section className="d-flex section-1">
        <div className="sec-text">
          <h2>Transform your brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compellino visuals that do
            most of the marketing for you.
          </p>
          <button>LEARN MORE</button>
        </div>
        <div className="sec-img">
          <img src={pic1} className="" />
        </div>
      </section>
      <section className="d-flex section-2">
        <div className="sec-img">
          <img src={pic2} className="" />
        </div>
        <div className="sec-text">
          <h2>Stand out to the right audience</h2>
          <p>
            Using a coltaborative formula of designers, researchers.
            photographers, videographers, and copywriters, we'll build and
            extend your brand in digital places.
          </p>
          <button>LEARN MORE</button>
        </div>
      </section>
      <section className="d-flex section-3">
        <div className="img-rel">
          <img src={pic3} />
          <div className="text-abso">
            <strong>Graphic Design</strong>
            <p>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
        <div className="img-rel">
          <img src={pic4} />
          <div className="text-abso">
            <strong>Photography</strong>
            <p>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients
              attention.
            </p>
          </div>
        </div>
      </section>
      <section className="d-flex section-4">
        <div>
          <p>sec4 end bga</p>
        </div>
      </section>
      <section className="d-flex section-5">
        <div className="sec-img">
          <img src={pic5} className="" />
        </div>
        <div className="sec-img">
          <img src={pic6} className="" />
        </div>
        <div className="sec-img">
          <img src={pic7} className="" />
        </div>
        <div className="sec-img">
          <img src={pic8} className="" />
        </div>
      </section>
    </Container>
  );
}

export default App;
