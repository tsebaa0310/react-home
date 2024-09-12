import styled from "styled-components";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import NavScroll from "./layout/Navbar";
import Header from "./layout/Header";
import "./App.css";

import headimg from "./images/desktop/image-header.jpg";

function App() {
  const Button = styled.button`
    background-color: ${(props) => (props.test ? "green" : "blue")};
  `;

  return (
    <Container fluid>
      <NavScroll />
      <Header />
    </Container>
  );
}

export default App;
