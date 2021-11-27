import React, { useState, useEffect } from "react";
import CardCarousel from "../../components/card-list/card-list.component";

import "./movies.styles.scss";
import "../../styles/GlobalStyles.scss";

const Movies = () => {
  const [movies, setMovies] = useState();
  const [genres, setGenres] = useState([
    "adventure",
    "horror",
    "family",
    "comedy",
    "fantastic",
  ]);

  const updateMovies = (newMovies) => {
    this.setState({ movies: newMovies });
  };

  const showMovies = () => {
    const url = "http://127.0.0.1:8000/movies";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setMovies({ json });
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  };

  useEffect(showMovies, []);

  return (
    <div className="container card-carousel">
      {genres.map((genre) => (
        <div className="card-carousel__container">
          <div className="card-carousel__genre">
            <h2 className="card-carousel__title">{genre}</h2>
          </div>
          <CardCarousel
            onUpdate={updateMovies}
            sliderGenre={genre}
            genres={genres}
            movies={movies}
          ></CardCarousel>
        </div>
      ))}{" "}
      <div className="card-carousel__genre card-carousel__genre--1">
        <h2 className="card-carousel__title card-carousel__title--1">.</h2>
      </div>
    </div>
  );
};

export default Movies;
