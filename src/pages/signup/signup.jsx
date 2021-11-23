import React from "react";
import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import Logo from '../../assets/logo.png'

import "./signup.styles.scss";

const FilledInputs = styled(FilledInput)({
  ".css-f6v4u4-MuiInputBase-root-MuiFilledInput-root::after": {
    borderBottom: "2px solid #ffcd57",
  },
});

const Signup = () => {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const [username, setName] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  const handleChangeUsername = (event) => {
    setName(event.target.value);
  };

  const handleChangeFirstName = (event) => {
    setName(event.target.value);
  };

  const handleChangeLastName = (event) => {
    setName(event.target.value);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="signup signup--2">
      <div className="signup__container container">
        <Box
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
          <div className="signup__img"><img className="signup__logo" src={Logo} alt="Logo"/></div>
            <p className="signup__descr descr">
              watch your favourite movies with us
            </p>
          </div>
          <div className="signup__inputs">
            <FormControl variant="filled" style={{width: "100%"}}>
              <InputLabel
                style={{
                  color: "rgba(48, 48, 48, 0.486)",
                }}
                htmlFor="firstName"
              >
                First name
              </InputLabel>
              <FilledInput
                style={{
                  margin: "5px 0",
                  width: "100%",
                  color: "#303030",
                  backgroundColor: "rgba(240, 235, 225, 0.603)",
                }}
                id="firstName"
                value={firstName}
                onChange={handleChangeFirstName}
              />
            </FormControl>

            <FormControl variant="filled" style={{width: "100%"}}>
              <InputLabel
                style={{
                  color: "rgba(48, 48, 48, 0.486)",
                }}
                htmlFor="lastName"
              >
                Last name
              </InputLabel>
              <FilledInput
                style={{
                  margin: "5px 0",
                  width: "100%",
                  color: "#303030",
                  backgroundColor: "rgba(240, 235, 225, 0.603)",
                }}
                id="lastName"
                value={lastName}
                onChange={handleChangeLastName}
              />
            </FormControl>

            <FormControl variant="filled" style={{width: "100%"}}>
              <InputLabel
                style={{
                  color: "rgba(48, 48, 48, 0.486)",
                }}
                htmlFor="username"
              >
                Username
              </InputLabel>
              <FilledInput
                style={{
                  margin: "5px 0",
                  width: "100%",
                  color: "#303030",
                  backgroundColor: "rgba(240, 235, 225, 0.603)",
                }}
                id="username"
                value={username}
                onChange={handleChangeUsername}
              />
            </FormControl>

            <FormControl
              sx={{ width: "100%", maxHeight: "100%" }}
              variant="filled"
            >
              <InputLabel
                style={{
                  color: "rgba(48, 48, 48, 0.486)",
                }}
                htmlFor="password"
              >
                Password
              </InputLabel>
              <FilledInputs
                style={{
                  margin: "5px 0",
                  width: "100%",
                  color: "#303030",
                  backgroundColor: "rgba(240, 235, 225, 0.603)",
                }}
                id="password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
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
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <FormControl
              sx={{ width: "100%", maxHeight: "100%" }}
              variant="filled"
            >
              <InputLabel
                style={{
                  color: "rgba(48, 48, 48, 0.486)",
                }}
                htmlFor="password"
              >
                Repeat password
              </InputLabel>
              <FilledInputs
                style={{
                  margin: "5px 0",
                  width: "100%",
                  color: "#303030",
                  backgroundColor: "rgba(240, 235, 225, 0.603)",
                }}
                id="password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
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
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
        </Box>
      </div>
    </div>
  );
};
export default Signup;
