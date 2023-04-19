import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import { parsePath, useNavigate, useParams } from "react-router-dom";
import "./Detail.css";

function NewDetail(props) {
  let { id } = useParams();
  let [timer, setTimer] = useState(false);
  let [tab, setTab] = useState(0);
  let [fade, setFade] = useState("");
  let [page, setPage] = useState("");

  useEffect(() => {
    let a = setTimeout(() => {
      setPage("end");
    }, 1);
    return () => {
      clearTimeout(a);
      setPage("");
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setTimer(true);
    }, 5000);
  }, []);
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
            {/* <Nav.Link href="/detail/:id">Detail</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      <div className={"container mainScreen start " + page}>
        <div className="row">
          {timer == false ? (
            <Timer></Timer>
          ) : (
            <div className="alert alert-success" id="timeSale" color="white">
              실패 했지롱 ~
            </div>
          )}
          <div className="col-md-6 col-sm-6 photoBox">
            <img
              src={
                "https://codingapple1.github.io/shop/shoes" +
                (Number(id) + 1) +
                ".jpg"
              }
              className="detailPhoto"
            />
          </div>
          {props.newClothes.length == 0 ? (
            <div>로딩 중입니다</div>
          ) : (
            <div className="col-sm-6 col-md-6 detailInfo">
              <h4 className="pt-5 title">{props.newClothes[id].title}</h4>
              <p className="content">{props.newClothes[id].content}</p>
              <p className="price">{props.newClothes[id].price}원</p>
              <button className="btn btn-danger">주문하기</button>
            </div>
          )}
          <Nav variant="tabs" id="nav-tab" defaultActiveKey="link0">
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  setTab(0);
                }}
                data-bs-target="#detail-tab-pane"
                style={{ color: "black" }}
                eventKey="link0"
              >
                상세정보
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  setTab(1);
                }}
                eventKey="link1"
                data-bs-target="#review-tab-pane"
                style={{ color: "black" }}
              >
                리뷰
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  setTab(2);
                }}
                eventKey="link2"
                data-bs-target="#refund-tab-pane"
                style={{ color: "black" }}
              >
                환불/교환 안내
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div className={"start " + fade}>
            <ShowTab tab={tab} fade={fade} setFade={setFade} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Timer() {
  return (
    <div className="alert alert-warning" id="timeSale">
      5초 이내 구매시 90% 할인!
    </div>
  );
}

function ShowTab({ tab, fade, setFade }) {
  useEffect(() => {
    let a = setTimeout(() => {
      setFade("end");
    }, 10);
    return () => {
      clearTimeout(a);
      setFade("");
    };
  }, [tab]);

  if (tab === 0) {
    return <div style={{ marginTop: "20px" }}>디자인은 구리지만 비싼 옷</div>;
  } else if (tab === 1) {
    return (
      <div>
        <div className="review">민수민: 매우 좋습니다</div>
        <div className="review">밍숭맹: 품질이 좋아요!</div>
        <div className="review">민수: 딸이 마음에 들어하네요~</div>
      </div>
    );
  } else if (tab === 2) {
    return <div style={{ marginTop: "20px" }}>환불 절대 불가!</div>;
  }
}

export default NewDetail;
