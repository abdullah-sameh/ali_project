import React from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import AddProduct from "./containers/addProduct/AddProduct";
import Home from "./containers/home/Home";
import Login from "./containers/login/Login";
import CarTypePage from "./containers/CarTypePage/CarTypePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
