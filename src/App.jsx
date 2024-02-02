import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MyComponent from "./Pages/rup";
import L from "./Pages/tup";
import Profile from "./Pages/wup";
import Home from "./Pages/Yup";

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">MyComponent   </Link>
        <Link to="/yupform">Form   </Link>
        <Link to="/profile">Profile   </Link>
        <Link to="/home">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<MyComponent/>} />
        <Route path="/yupform" element={<L/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </Router>
  );
};

export default App;



