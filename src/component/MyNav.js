import "./Main.css";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";

function MyNav() {
  return (
    <Navbar bg="dark" variant="dark" className="navbar">
      <Container className="container">
        <Navbar.Brand href="/" className="home">
          밍숭맹숭
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/event">Event</Nav.Link>
          <Nav.Link href="/sale">Sale</Nav.Link>
          <Nav.Link href="/cart">Cart</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNav;
