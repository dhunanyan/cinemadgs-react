import React, { Component } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Movies from "./pages/movies/movies.jsx";
// import Home from "./pages/home.jsx";
// import Login from "./pages/login.jsx";
// import Signup from "./pages/signup.jsx";
// import Repertoire from "./pages/repetoire.jsx";

// <Route path='/' element={<Home/>}/>
// <Route path='/signup' element={<Signup/>}/>
// <Route path='/login' element={<Login/>}/>
// <Route path='/repetoire' element={<Repertoire/>}/>

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/cinemadgs-react/movies" element={<Movies />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
