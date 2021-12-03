import React from "react";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";

const Input = ({ value, onChange, id, endAdornment, type, placeholder }) => {
  return (
    <FormControl variant="filled" style={{ width: "100%" }}>
      <InputLabel
        style={{
          color: "rgba(48, 48, 48, 0.486)",
        }}
        htmlFor={id}
      >
        {placeholder}
      </InputLabel>
      <FilledInput
        style={{
          margin: "5px 0",
          width: "100%",
          color: "#303030",
          backgroundColor: "rgba(240, 235, 225, 0.603)",
        }}
        id={id}
        value={value}
        onChange={onChange}
        endAdornment={endAdornment}
        type={type}
      />
    </FormControl>
  );
};

export default Input;
