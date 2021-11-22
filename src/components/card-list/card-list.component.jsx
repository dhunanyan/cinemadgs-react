import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import { Card } from "../card/card.component";
import Message from "../message/message.component";

import "./card-list.stiles.scss";

const CardCarousel = ({ movies, sliderGenre, onUpdate }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1000, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 },
  ];

  const [messageVisibility, setMessageVisibility] = useState(false);
  const [currentMovie, setCurrentMovie] = useState();

  const handleDelete = (movie) => {
    // const data = await fetch("https://example.com/delete-item/" + movie.id, {
    //   method: "DELETE",
    // });
    // const updatedMovies = await fetch('https://example.com/all-items/');
    // onUpdate(updatedMovies);
    setCurrentMovie(movie);
    setMessageVisibility(true);
  };

  const closeMessage = () => {
    setMessageVisibility(false);
  };

  return (
    <Carousel
      breakPoints={breakPoints}
      className="slider slider--horror styling-example"
    >
      {movies.map((movie) =>
        movie.genres.map((movieGenre) =>
          movieGenre === sliderGenre ? (
            messageVisibility &&
            currentMovie &&
            movie.id === currentMovie.id ? (
              <Message
                onClose={closeMessage}
                message={`You have successfully deleted movie with ID:`}
              />
            ) : (
              <Card
                key={movie.roomID}
                movie={movie}
                date={movie.date}
                onDelete={handleDelete}
              />
            )
          ) : (
            false
          )
        )
      )}
    </Carousel>
  );
};

export default CardCarousel;
