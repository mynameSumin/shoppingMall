import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import data from "../data.js";

function Detail() {
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className="navbar">
        <Container className="container">
          <Navbar.Brand href="/" className="home">
            밍숭맹숭
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/event">Event</Nav.Link>
            <Nav.Link href="/sale">Sale</Nav.Link>
            <Nav.Link href="/detail/:id">Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="100%"
            />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">상품명</h4>
            <p>상품설명</p>
            <p>120000원</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
