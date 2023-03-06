// import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./component/main";
import Detail from "./Detail/Detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  );
}

export default App;
