import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./Services";
import Profile from "./Profile";
import About from "./About";
import Home from "./Home";
import Details from "./Details";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <Details
              film_name="Knives Out"
              year={2019}
              runtime="130 min"
              description="A detective investigates the death of a patriarch of an eccentric, combative family."
              rating="8.1/10"
              poster="https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_SX300.jpg"
            />
          }
        />
        <Route path="/services" element={<Services />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
