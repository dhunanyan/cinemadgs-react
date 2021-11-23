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

import "./login.styles.scss";

const FilledInputs = styled(FilledInput)({
  ".css-f6v4u4-MuiInputBase-root-MuiFilledInput-root::after": {
    borderBottom: "2px solid #ffcd57",
  },
});

const Login = () => {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const [username, setName] = React.useState("");

  const handleChangeUser = (event) => {
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
    <div className="signup signup--1">
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
            Login
          </button>
          <div className="signup__content">
            <h3 className="signup__title title">Sign in</h3>
            <p className="signup__descr descr">
              watch your favourite movies in CinemaDGS
            </p>
          </div>
          <div className="signup__inputs">
            <FormControl variant="filled">
              <InputLabel
                style={{
                  fontSize: "32px",
                  color: "rgba(48, 48, 48, 0.486)",
                }}
                htmlFor="username"
              >
                Username
              </InputLabel>
              <FilledInput
                style={{
                  margin: "10px 0",
                  width: "100%",
                  fontSize: "32px",
                  color: "#303030",
                  backgroundColor: "rgba(240, 235, 225, 0.603)",
                }}
                id="username"
                value={username}
                onChange={handleChangeUser}
              />
            </FormControl>
            <FormControl
              sx={{ width: "100%", maxHeight: "100%" }}
              variant="filled"
            >
              <InputLabel
                style={{
                  fontSize: "32px",
                  color: "rgba(48, 48, 48, 0.486)",
                }}
                htmlFor="password"
              >
                Password
              </InputLabel>
              <FilledInputs
                style={{
                  margin: "10px 0",
                  width: "100%",
                  fontSize: "32px",
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

// <FormControl>
//         <InputLabel htmlFor="component-outlined">Name</InputLabel>
//         <OutlinedInput
//           id="component-outlined"
//           value={name}
//           onChange={handleChange}
//           label="Name"
//         />

export default Login;
