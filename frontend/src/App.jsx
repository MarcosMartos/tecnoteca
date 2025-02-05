import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Post from "./pages/Post/Post.jsx";
import Navbar from "./layout/navbar/Navbar.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
    </Router>
  );
};

export default App;
