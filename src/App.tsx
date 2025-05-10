import React from 'react';
import './App.css';
import {Route, Routes} from "react-router";
import Home from "./component/common/Home";
import Login from "./component/user/Login";
import Register from "./component/user/Register";
import Navbar from './component/common/Navbar';
import Product from './component/common/products/Product.detail';

function App() {
  return (
    <div className="App">
          <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </div>
  );
}

export default App;
