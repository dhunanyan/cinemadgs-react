import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./card.styles.scss";

export const Card = ({ movie, onDelete }) => {
  const image = require("../../assets/" + movie.movieImage + ".jpg");

  return (
    <div
      className="card"
      style={{
        backgroundImage: `url('${image.default}')`,
        backgroundPosition: "bottom center",
        backgroundSize: "cover",
      }}
    >
      <div className="card__content">
        <h2 className="card__subtitle subtitle">
          {movie.movieTitle.length > 18
            ? `${movie.movieTitle.slice(0, 18)}...`
            : movie.movieTitle}
        </h2>
        <p className="card__descr descr">
          {movie.movieDescription.length > 120
            ? `${movie.movieDescription.slice(0, 120)}...`
            : movie.movieDescription}
        </p>
        <div className="card__btns">
          <button
            className={`card__btn ${movie.movieID}`}
            style={{ transition: "all 350ms ease-out" }}
            onClick={(e) => onDelete(movie)}
          >
            Delete
          </button>
          <Link
            className={`card__btn ${movie.movieID}`}
            style={{
              transition: "all 350ms ease-out",
              margin: "0",
              border: "2px solid #303030",
            }}
            to={`/movies/${movie.movieID}`}
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};
