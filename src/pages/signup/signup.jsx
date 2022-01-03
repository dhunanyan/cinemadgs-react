import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import axios from "axios";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import Logo from "../../assets/logo.png";
import Input from "../../components/input/input.component";

import "./signup.styles.scss";

const FilledInputs = styled(FilledInput)({
  ".css-f6v4u4-MuiInputBase-root-MuiFilledInput-root::after": {
    borderBottom: "2px solid #ffcd57",
  },
});

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setName] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleUsernameChange = (event) => {
    setName(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handlePassword1Change = (event) => {
    setPassword1(event.target.value);
    console.log(event.target.value);
  };

  const handlePassword2Change = (event) => {
    setPassword2(event.target.value);
    console.log(event.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  //password or text
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    const formData = new FormData();
    console.log(event);
    event.preventDefault();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("username", username);
    formData.append("password1", password1);
    formData.append("password2", password2);

    try {
      const response = await axios({
        url: "https://cors-anywhere.herokuapp.com/http://127.0.0.1:8000/account/register",
        method: "post",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          // "Access-Control-Allow-Origin": "*",
          // "Access-Control-Allow-Methods": "POST",
          // "Access-Control-Allow-Headers": "Content-Type",
          // "Accec-Control-Allow-Credentials": "true",
        },
      });
      const result = await response.json();
      console.log("succes!!!!!:", JSON.stringify(result));
    } catch (error) {
      console.log("error!!!!!:", error);
    }
  };

  return (
    <div className="signup signup--2">
      <div className="signup__container container">
        <Box
          onSubmit={(e) => handleSubmit(e)}
          className="signup__subcontainer"
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <button type="submit" className="signup__button">
            Sign up
          </button>
          <div className="signup__content">
            <div className="signup__img">
              <img className="signup__logo" src={Logo} alt="Logo" />
            </div>
            <p className="signup__descr descr">
              watch your favourite movies with us
            </p>
          </div>
          <div className="signup__inputs">
            <Input
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              placeholder="First Name"
              name="first_name"
            />

            <Input
              id="lastName"
              value={lastName}
              onChange={handleLastNameChange}
              placeholder="Last Name"
              name="last_name"
            />

            <Input
              id="username"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Username"
              name="username"
            />

            <Input
              id="password1"
              value={password1}
              onChange={handlePassword1Change}
              placeholder="Password"
              name="password1"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    style={{
                      backgroundColor: "#ffcd57",
                      right: "5px",
                    }}
                    aria-label="Password"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />

            <Input
              id="password2"
              value={password2}
              onChange={handlePassword2Change}
              placeholder="Repeat password"
              name="password2"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    style={{
                      backgroundColor: "#ffcd57",
                      right: "5px",
                    }}
                    aria-label="Password"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
        </Box>
      </div>
    </div>
  );
};
export default Signup;
