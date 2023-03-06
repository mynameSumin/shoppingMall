// import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import data from "../data.js";
import "./Main.css";
import { Routes, Route, Link } from "react-router-dom";

function Main() {
  let [clothesInfo, setClothesInfo] = useState(data);
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className="navbar">
        <Container className="container">
          <Navbar.Brand href="/" className="home">
            밍숭맹숭
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <img src={process.env.PUBLIC_URL + "/bg-img.png"} className="main-bg" />
      </div>

      <Container className="content">
        <Row className="row-content">
          <ClothesTemplate clothesInfo={clothesInfo}></ClothesTemplate>
        </Row>
      </Container>
    </div>
  );
}

function ClothesTemplate(props) {
  return props.clothesInfo.map((a, i) => {
    return (
      <Col sm>
        <Link to="/detail" className="link">
          <img
            className="clothes"
            src={process.env.PUBLIC_URL + "/clothes" + (i + 1) + ".jpg"}
          />
          <h5 className="itemName">{props.clothesInfo[i].title}</h5>
          <div className="detail">{props.clothesInfo[i].price}</div>
        </Link>
      </Col>
    );
  });
}

export default Main;
