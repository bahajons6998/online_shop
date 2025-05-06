import React from 'react';
import './App.css';
import {Route, Routes} from "react-router";
import Home from "./component/common/Home";
import Login from "./component/user/Login";
import Register from "./component/user/Register";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </div>
  );
}

export default App;
