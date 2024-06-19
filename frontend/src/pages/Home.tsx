import { useState } from "react";
import NavBar from "../components/NavBar";
import { data } from "../interfaces";
import Card from "../components/Card";

function Home() {
  const films = data;

  return (
    <>
      <NavBar />
      <div className="h-full w-full bg-gray-900">
        <div className="">
          {films.map((film) => (
            <Card
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
