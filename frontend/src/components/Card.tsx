import React from "react";
import { CardProps } from "../interfaces";

const Card: React.FC<CardProps> = ({
  film_name,
  runtime,
  year,
  rating,
  description,
  poster,
}) => {
  return (
    <div
      id="main"
      className="flex w-5/12 m-10 bg-cardColor rounded text-cardTextColor transform hover:scale-105 transition-transform duration-300"
    >
      <div id="image" className="w-40">
        <img src={poster} className="h-auto w-full" alt="film image" />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <div id="film_name-year" className="flex justify-between m-4">
            <div>
              <div className="font-semibold text-xl">{film_name}</div>
              <div>{year}</div>
            </div>
            <div>{rating}⭐</div>
          </div>
          <div id="description" className="m-4 text-xs w-80">
            <div className="w-full h-auto">{description}</div>
          </div>
        </div>
        <div id="runtime" className="m-4">
          <div>Runtime: {runtime}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
