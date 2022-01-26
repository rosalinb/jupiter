import React from "react";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import NavMenu from "./components/NavMenu/NavMenu";
import RouteConfig from "./config/RouteConfig";
import Color from "../src/utils/Color";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavMenu></NavMenu>

      <div
        style={{
          width: "100%",
          margin: "auto",
          color: Color.primaryText,
          backgroundColor: Color.bodyBackgrond,
        }}
      >
        <Routes>
          <Route path={RouteConfig.home} element={<Home />} />
          <Route path={RouteConfig.courses} element={<Courses />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
