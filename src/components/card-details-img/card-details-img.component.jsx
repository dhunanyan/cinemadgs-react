import React from "react";

const Img = ({ movie, id }) => {
  const image = require("../../assets/movie" + id + ".jpg");

  return <img src={image.default} alt={movie.movieTitle} />;
};

export default Img;
