import { useState } from "react";
import NavBar from "../components/NavBar";
import { data } from "../interfaces";
import Card from "../components/Card";

function Home() {
  const films = data;

  return (
    <>
      <div className="h-full w-full bg-gray-900">
        <NavBar />
        <div id="cards">
          {films.map((film) => (
            <Card
              key={film.imdbID}
              film_name={film.Title}
              runtime={film.Runtime}
              rating={film.Ratings[0].Value}
              year={film.Year}
              description={film.Plot}
              poster={film.Poster}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
