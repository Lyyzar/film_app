import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./Services";
import Profile from "./Profile";
import About from "./About";
import Home from "./Home";
import Details from "./Details";
import Login from "./Login";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details/:film_name" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
