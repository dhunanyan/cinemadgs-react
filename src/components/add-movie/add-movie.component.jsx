import React, { useState, useRef } from "react";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DateTimePicker from "@mui/lab/DateTimePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Input from "../input/input.component";

import "./add-movie.styles.scss";

import Genres from "../../api/genres.json";

const AddMovie = () => {
  const [date, setDate] = useState(new Date());
  const [descr, setDescr] = useState("");
  const [title, setTitle] = useState("");
  const [genres, setGenres] = useState([]);
  const [room, setRoom] = useState(0);
  const [image, setImage] = useState({});
  const [submitHover, setSubmitHover] = useState(false);
  const [submitStyle, setSubmitStyle] = useState({
    transition: "all 350ms ease-out",
    backgroundColor: "rgba(48, 48, 48, 1)",
    width: "150px",
    margin: "25px 0",
    padding: "10px",
    fontSize: "18px",
    border: "3px solid rgba(240, 235, 225, 0.8)",
    color: "rgba(240, 235, 225, 0.8)",
    borderRadius: "30px",
  });

  const ITEM_HEIGHT = 49;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  //Reading from TITLE input
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    console.log(event.target.value);
  };

  //Reading from DESCR input
  const handleDescrChange = (event) => {
    setDescr(event.target.value);
    console.log(event.target.value);
  };

  //Reading from ROOM input
  const handleRoomChange = (event) => {
    setRoom(event.target.value);
    console.log(event.target.value);
  };

  //Reading from GENRES input
  const theme = useTheme();
  const [genresOutput, setGenresOutput] = useState([]);
  const handleGenresChange = (event) => {
    const {
      target: { value },
    } = event;
    setGenresOutput(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    console.log(event.target.value);
    setGenres(event.target.value);
  };

  //Reading from DATE input
  const handleDateChange = (newValue) => {
    setDate(newValue);
    console.log(newValue);
  };

  //Reading from IMAGE input
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
    console.log(event.target.value);
  };

  //API
  const [movie, setMovie] = useState({});
  const form = useRef(null);
  const handleSubmit = async (event) => {
    const formData = new FormData(form.current);
    console.log(event);
    event.preventDefault();
    formData.append("movieTitle", title);
    formData.append("movieDescription", descr);
    formData.append("movieGenres", genres);
    formData.append("movieRoomID", room);
    formData.append("movieDate", date);
    formData.append("movieImage", image);
    // const object = {};
    // formData.forEach((value, key) => (object[key] = value));
    // const json = JSON.stringify(object);
    try {
      const response = await fetch("/http://127.0.0.1:8000/movies", {
        method: "POST",
        body: formData,
      });
      const json = await response.json();
      await setMovie(json);
      await console.log(movie);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleSubmitHover = () => {
    setSubmitHover(!submitHover);
    if (!submitHover) {
      setSubmitStyle({
        transition: "all 350ms ease-out",
        width: "calc(100%)",
        margin: "25px 0",
        padding: "10px",
        fontSize: "18px",
        borderRadius: "4px",
        backgroundColor: "#aaa",
        color: "rgba(48, 48, 48, 1)",
        border: "3px solid #303030",
      });
    } else {
      setSubmitStyle({
        transition: "all 350ms ease-out",
        backgroundColor: "rgba(48, 48, 48, 1)",
        width: "150px",
        margin: "25px 0",
        padding: "10px",
        fontSize: "18px",
        border: "3px solid rgba(240, 235, 225, 0.8)",
        color: "rgba(240, 235, 225, 0.8)",
        borderRadius: "30px",
      });
    }
  };

  return (
    <div className="signup movie-add">
      <div className="signup__container container">
        <Box
          className="signup__subcontainer"
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="signup__inputs">
            <Input
              className="signup__input"
              onChange={handleTitleChange}
              id="title"
              placeholder="Title"
              value={title}
            />
            <Input
              className="signup__input"
              onChange={handleDescrChange}
              id="movieDescription"
              placeholder="Description"
              value={descr}
            />

            <Input
              className="signup__input"
              onChange={handleRoomChange}
              id="movieRoomID"
              placeholder="Room"
            />
            <FormControl
              className="signup__input"
              style={{
                margin: "5px 0",
                width: "100%",
                backgroundColor: "rgba(240, 235, 225, 0.603)",
                color: "rgba(48, 48, 48, 0.486)",
              }}
              sx={{ m: 1, width: 300, mt: 3 }}
            >
              <Select
                multiple
                displayEmpty
                value={genresOutput}
                onChange={handleGenresChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return (
                      <em style={{ color: "rgba(48, 48, 48, 0.486)" }}>
                        Genres
                      </em>
                    );
                  }

                  return selected.join(", ");
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value="">
                  <em>Genres</em>
                </MenuItem>
                {Genres.map((genre) => (
                  <MenuItem
                    key={genre}
                    value={genre}
                    style={getStyles(genre, genresOutput, theme)}
                  >
                    {genre}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                value={date}
                onChange={handleDateChange}
                renderInput={(params) => (
                  <TextField
                    className="signup__input"
                    style={{
                      margin: "5px 0",
                      width: "100%",
                      backgroundColor: "rgba(240, 235, 225, 0.603)",
                      color: "rgba(48, 48, 48, 0.486)",
                    }}
                    {...params}
                  />
                )}
              />
            </LocalizationProvider>
            <label htmlFor="movieImage" className="signup__pic signup__input">
              Choose image
              <input
                onChange={handleImageChange}
                type="file"
                id="movieImage"
                name="movieImage"
                accept="image/*"
              />
            </label>
            <Button
              style={submitStyle}
              className="signup__submit"
              type="submit"
              onClick={(e) => console.log(e)}
              onMouseEnter={toggleSubmitHover}
              onMouseLeave={toggleSubmitHover}
            >
              Save
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default AddMovie;
