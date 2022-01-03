import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";

import "./App.css";
import "./styles/GlobalStyles.scss";

import Navbar from "./components/navbar/navbar.component";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Movies from "./pages/movies/movies";
import AddMovie from "./components/add-movie/add-movie.component";
import CardDetails from "./components/card-details/card-details.component";
import Employees from "./pages/employees/employees";
import Home from "./pages/home/home";

// import Login from "./pages/login.jsx";
// import Signup from "./pages/signup.jsx";
// import Repertoire from "./pages/repetoire.jsx";

// <Route path='/' element={<Home/>}/>
// <Route path='/signup' element={<Signup/>}/>
// <Route path='/login' element={<Login/>}/>
// <Route path='/repetoire' element={<Repertoire/>}/>

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  const onAuth = (value) => {
    console.log(value);
    setIsAuth(value);
  };

  return (
    <div>
      <Navbar isAuth={isAuth} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login isAuth={isAuth} auth={onAuth} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/add" element={<AddMovie />} />
        <Route path="/movies/:id" element={<CardDetails />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </div>
  );
};
export default App;
