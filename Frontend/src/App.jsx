import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn  from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";

export default function App() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/signUp" element={<Register />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </div>
    );
  }