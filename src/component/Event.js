import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import { useNavigate, Outlet } from "react-router-dom";

function Event() {
  let navigate = useNavigate();

  return (
    <div className="App">
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
              onclick={() => {
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
            {/* <Nav.Link href="/detail/:id">Detail</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      <div className="container">
        <div className="row">
          <h4>오늘의 이벤트</h4>
          <button
            onClick={() => {
              navigate("/event/event1");
            }}
          >
            이벤트1
          </button>
          <button
            onClick={() => {
              navigate("/event/event2");
            }}
          >
            이벤트2
          </button>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default Event;
