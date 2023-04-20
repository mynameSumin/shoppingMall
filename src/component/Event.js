import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import { useNavigate, Outlet } from "react-router-dom";
import MyNav from "./MyNav";

function Event() {
  let navigate = useNavigate();

  return (
    <div className="App">
      <MyNav />
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
