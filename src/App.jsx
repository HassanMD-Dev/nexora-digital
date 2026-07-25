import React from "react";
import Navbar from "../src/components/layouts/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Footer from "./components/layouts/footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
