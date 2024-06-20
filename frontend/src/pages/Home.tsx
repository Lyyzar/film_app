import { useState } from "react";
import NavBar from "../components/NavBar";
import { data } from "../interfaces";
import Card from "../components/Card";
import Layout from "../components/Layout";

function Home() {
  const films = data;

  return (
    <>
      <Layout>
        <div id="cards" className="flex flex-wrap">
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
      </Layout>
    </>
  );
}

export default Home;
