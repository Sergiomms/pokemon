import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
// import Teste from "../pages/Teste";
import { home } from "./routeMap";

export default function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Home />} to={home}/>
      <Route path={home} element={<Home />}/>
      {/* <Route path={teste} element={<Teste />} /> */}
    </Routes>
  );
}
