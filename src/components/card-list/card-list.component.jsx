import React from "react";
import Carousel from "react-elastic-carousel";
import { Card } from "../card/card.component";

import "./card-list.stiles.scss";

const CardCarousel = ({ movies, genres, sliderGenre }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1000, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <Carousel
      breakPoints={breakPoints}
      className="slider slider--horror styling-example"
    >
      {movies.map((movie) =>
        movie.genres.map((movieGenre) =>
          movieGenre === sliderGenre ? (
            <Card key={movie.roomID} movie={movie} />
          ) : (
            false
          )
        )
      )}
    </Carousel>
  );
};

export default CardCarousel;
