import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { useNavigate } from "react-router-dom";
import "./Detail.css";
import MyNav from "./MyNav";

function Sale(props) {
  let navigate = useNavigate();

  return (
    <div className="App">
      <MyNav />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="100%"
            />
          </div>
          <div className="col-md-6 detailInfo">
            <h4 className="pt-5 title">{props.clothesInfo[1].title}</h4>
            <p className="content">안팔려서 할인 중</p>
            <p className="price">120000원</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sale;
