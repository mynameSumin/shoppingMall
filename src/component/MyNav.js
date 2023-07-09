import { Navigate, useNavigate } from "react-router-dom";
import "./Main.css";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";

function MyNav() {
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark" className="navbar">
      <Container className="container">
        <Navbar.Brand href="/" className="home">
          밍숭맹숭
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/event");
            }}
          >
            Event
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/sale");
            }}
          >
            Sale
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/cart");
            }}
          >
            Cart
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNav;
