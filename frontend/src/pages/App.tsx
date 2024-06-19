import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./Services";
import Profile from "./Profile";
import About from "./About";
import Home from "./Home";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
