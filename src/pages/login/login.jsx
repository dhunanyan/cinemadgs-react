import React from "react";
import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import Logo from "../../assets/logo.png";

import Input from "../../components/input/input.component";

import employee from "../../api/employees.json";

import "./login.styles.scss";

const Login = ({ auth }) => {
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [username, setUsername] = React.useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    console.log(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (username, password) => {
    try {
      // const employee = await fetch("localhost:8001/login", {
      //   method: "POST",
      //   body: JSON.stringify({ username, password }),
      //   headers: { "Content-Type": "application/json" },
      // });
      if (true) {
        auth(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="signup signup--2">
      <div className="signup__container container">
        <Box
          onSubmit={(e) => handleSubmit(username, password)}
          className="signup__subcontainer"
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <button type="submit" className="signup__button">
            Login
          </button>
          <div className="signup__content">
            <div className="signup__img">
              <img className="signup__logo" src={Logo} alt="Logo" />
            </div>
            <p className="signup__descr descr">
              watch your favourite movies in CinemaDGS
            </p>
          </div>
          <div className="signup__inputs">
            <Input
              id="username"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Username"
            />
            <Input
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
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

export default Login;
