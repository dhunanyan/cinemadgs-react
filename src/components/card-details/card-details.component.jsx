import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import "./card-details.styles.scss";

const CardDetails = (props) => {
  const { id } = useParams();
  const location = useLocation();
  console.log(location);

  return <div>Hello World!!!</div>;
};

export default CardDetails;
