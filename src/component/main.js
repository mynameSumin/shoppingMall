import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import "./Main.css";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import MyNav from "./MyNav";

function Main(props) {
  let [clothesInfo, setClothesInfo] = useState(props.clothesInfo);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <MyNav />
      <div>
        <img src={process.env.PUBLIC_URL + "/bg-img.png"} className="main-bg" />
      </div>

      <Container className="container-fluid">
        <Row className="row" style={{ flexFlow: "wrap" }}>
          <ClothesTemplate clothesInfo={clothesInfo}></ClothesTemplate>
          {props.newClothes == 0
            ? null
            : props.newClothes.map((a, i) => {
                return (
                  <GetNewClothes
                    newClothes={props.newClothes[i]}
                    i={i + 1}
                  ></GetNewClothes>
                );
              })}
        </Row>
      </Container>
      {modal == true ? <div>로딩 중입니다~</div> : null}
      <button
        onClick={() => {
          setModal(true);
          axios
            .get("https://codingapple1.github.io/shop/data2.json")
            .then((result) => {
              let copy = [...result.data];
              props.getData(copy);
              setModal(false);
            })
            .catch(() => {
              console.log("fail");
              setModal(false);
            });
        }}
      >
        상품 추가
      </button>
    </div>
  );
}

function ClothesTemplate(props) {
  return props.clothesInfo.map((a, i) => {
    return (
      <div className="col-md-4 col-xs-6 col-sm-6">
        <Link to={"/detail/" + i} className="link">
          <img
            className="clothes"
            src={process.env.PUBLIC_URL + "/clothes" + (i + 1) + ".jpg"}
          />
          <h5 className="itemName" style={{ fontFamily: "Do Hyeon" }}>
            {props.clothesInfo[i].title}
          </h5>
          <div className="detail" style={{ fontFamily: "Do Hyeon" }}>
            {props.clothesInfo[i].price}
          </div>
        </Link>
      </div>
    );
  });
}

function GetNewClothes(props) {
  return (
    <div class="col-md-4 col-xs-6 col-sm-6">
      <Link to={"/newDetail/" + Number(props.i - 1)} className="link">
        <img
          className="clothes"
          src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
        />
        <h5 className="itemName" style={{ fontFamily: "Do Hyeon" }}>
          {props.newClothes.title}
        </h5>
        <div className="detail" style={{ fontFamily: "Do Hyeon" }}>
          {props.newClothes.price}
        </div>
      </Link>
    </div>
  );
}

export default Main;
