import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as CgIcons from "react-icons/cg";

import Img from "../card-details-img/card-details-img.component";

import "./card-details.styles.scss";

import Screen from "../../assets/screen.png";

const CardDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState({
    movieID: "",
    movieTitle: "",
    movieDate: "",
    movieDescription: "",
    movieRoomID: "",
    movieImage: "",
    movieGenres: "",
  });

  const showMovie = () => {
    const url = `http://127.0.0.1:8000/movies/${id}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setMovie(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  };

  useEffect(showMovie, []);

  console.log(movie.movieGenres);

  return (
    <div className="card-details">
      <div className="card-details__container container">
        <div className="card-details__subcontainer">
          <div className="card-details__top">
            <div className="card-details__content">
              <div className="card-details__descr">
                <h2>Title: </h2>
                <p>{movie.movieTitle}</p>
              </div>
              <div className="card-details__descr">
                <h2>Description: </h2>
                <p>{movie.movieDescription}</p>
              </div>
              <div className="card-details__descr">
                <h2>Genre: </h2>
                <p>{movie.movieGenres}</p>
              </div>
              <div className="card-details__descr">
                <h2>Date: </h2>
                <p>{movie.movieDate}</p>
              </div>
              <div className="card-details__descr">
                <h2>Room: </h2>
                <p>{movie.movieRoomID}</p>
              </div>
            </div>
            <div className="card-details__img">
              <Img movie={movie} id={id} />
            </div>
          </div>

          <div className="card-details__line" />

          <div className="card-details__bottom">
            <div className="card-details__screen">
              <img src={Screen} alt="Screen" className="card-details__icon" />
            </div>
            <div className="card-details__audience">
              <button className="card-details__seat card-details__seat--active" />
              <button className="card-details__seat card-details__seat--active" />
              <button className="card-details__seat card-details__seat--active" />
              <button className="card-details__seat card-details__seat--active" />
              <button className="card-details__seat" />
              <button className="card-details__seat" />
              <button className="card-details__seat" />
              <button className="card-details__seat" />
              <button className="card-details__seat" />
              <button className="card-details__seat" />
              <button className="card-details__seat card-details__seat--active" />
              <button className="card-details__seat" />
              <button className="card-details__seat" />
              <button className="card-details__seat" />
              <button className="card-details__seat" />
              <button className="card-details__seat card-details__seat--active" />
              <button className="card-details__seat" />
              <button className="card-details__seat" />
              <button className="card-details__seat card-details__seat--active" />
              <button className="card-details__seat" />
              <button className="card-details__seat" />
              <button className="card-details__seat" />
              <button className="card-details__seat" />
              <button className="card-details__seat" />
              <button className="card-details__seat" />
              <button className="card-details__seat" />
              <button className="card-details__seat" />
              <button className="card-details__seat" />
              <button className="card-details__seat card-details__seat--active" />
              <button className="card-details__seat card-details__seat--active" />
              <button className="card-details__seat card-details__seat--active" />
              <button className="card-details__seat" />
              <button className="card-details__seat" />
              <button className="card-details__seat" />
              <button className="card-details__seat card-details__seat--active" />
              <button className="card-details__seat card-details__seat--active" />
              <button className="card-details__seat" />
              <button className="card-details__seat" />
              <button className="card-details__seat" />
              <button className="card-details__seat" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
