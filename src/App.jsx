import React from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import AddProduct from "./containers/addProduct/AddProduct";
import Home from "./containers/home/Home";
import Login from "./containers/login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/add" element={<AddProduct />}></Route>
        <Route path="/cars/:carId" element={<AddProduct />}></Route>
      </Routes>
    </div>
  );
}

export default App;