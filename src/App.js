import React, { Component } from "react";

import { Routes, Route } from "react-router-dom";

import "./App.css";
import "./styles/GlobalStyles.scss";

import Navbar from "./components/navbar/navbar.component";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Movies from "./pages/movies/movies.jsx";
import Employees from "./pages/employees/employees.jsx";
import Home from "./pages/home/home.jsx";

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

    this.state = { isAuth: false };
  }

  onAuth(value) {
    console.log(value);
    this.setState({ isAuth: value });
  }

  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login auth={this.onAuth} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </>
    );
  }
}

export default App;
