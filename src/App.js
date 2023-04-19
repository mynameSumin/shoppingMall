// import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Main from "./component/main";
import Detail from "./component/Detail";
import Event from "./component/Event";
import Sale from "./component/Sale";
import data from "./data.js";
import NewDetail from "./component/NewDetail";

function App() {
  let [newClothes, setNewClothes] = useState([]);
  let [clothesInfo, setClothesInfo] = useState(data);

  const getData = (num) => {
    setNewClothes(num);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Main
            clothesInfo={clothesInfo}
            newClothes={newClothes}
            getData={getData}
          />
        }
      />
      <Route
        path="/detail/:id"
        element={<Detail clothesInfo={clothesInfo} />}
      />
      <Route
        path="/newDetail/:id"
        element={<NewDetail getData={getData} newClothes={newClothes} />}
      />
      <Route path="/event" element={<Event />}>
        <Route path="event1" element={<div>첫 주문시 양말 한 개 서비스</div>} />
        <Route path="event2" element={<div>생일기념 쿠폰 받기</div>} />
      </Route>
      {/* <Route path="*" element={<div>존재하지 않는 페이지입니다</div>} /> */}
      <Route path="/sale" element={<Sale clothesInfo={clothesInfo} />}></Route>
    </Routes>
  );
}

export default App;
