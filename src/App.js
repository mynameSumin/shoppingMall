// import logo from "./logo.svg";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import "./App.css";
import data from "./data.js";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className="navbar">
        <Container className="container">
          <Navbar.Brand href="#home" className="home">
            밍숭맹숭
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <img src={process.env.PUBLIC_URL + "/bg-img.png"} className="main-bg" />
      </div>
      <Container className="content">
        <Row className="row-content">
          <Col sm>
            <img
              className="clothes"
              src={process.env.PUBLIC_URL + "/clothes1.jpg"}
            />
            <h5 className="itemName">꽈배기 니트(베이지)</h5>
            <div className="detail">평상시 입고 다니기 좋은 니트</div>
          </Col>
          <Col sm>
            <img
              className="clothes"
              src={process.env.PUBLIC_URL + "/clothes2.jpg"}
            />
            <h5 className="itemName">RUN 어글리슈즈</h5>
            <div className="detail">남성 Running</div>
          </Col>
          <Col sm>
            <img
              className="clothes"
              src={process.env.PUBLIC_URL + "/clothes3.jpg"}
            />
            <h5 className="itemName">베이지 숄</h5>
            <div className="detail">포인트 주기 좋은 옷</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
