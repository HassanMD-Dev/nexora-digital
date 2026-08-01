import React from "react";
import Navbar from "../src/components/layouts/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Footer from "./components/layouts/footer/Footer";
import Services from "./components/pages/services/Services";
import About from "./components/pages/about/About";
import Pricing from "./components/pages/pricing/Pricing";
import Projects from "./components/pages/projects/Projects";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
