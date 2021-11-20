import React from "react";

import "./card.styles.scss";

export const Card = (props) => (
  <div className="card__container">
    <div className="card__img">
      <img alt="Movie" src={props.movie.image} />
    </div>
    <h2>
      {props.movie.name.length > 26
        ? `${props.movie.name.slice(0, 26)}...`
        : props.movie.name}
    </h2>
    <p> {props.movie.description}</p>
  </div>
);
