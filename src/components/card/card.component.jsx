import React from "react";

import "./card.styles.scss";

export const Card = ({ movie, date }) => (
  <div
    class="card"
    style={{
      backgroundImage: `url('${movie.image}')`,
      backgroundPosition: "bottom center",
      backgroundSize: "cover",
    }}
  >
    <div className="card__content">
      <h2 className="card__subtitle subtitle">
        {" "}
        {movie.name.length > 18 ? `${movie.name.slice(0, 18)}...` : movie.name}
      </h2>
      <p className="card__descr descr">
        {movie.description.length > 120
          ? `${movie.description.slice(0, 120)}...`
          : movie.description}
      </p>
      <div className="card__btns">
        <button
          className="card__btn"
          style={{ transition: "all 350ms ease-out" }}
        >
          Reserve
        </button>
        <p className="card__date">{date}</p>
      </div>
    </div>
  </div>
);
