import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

import { SidebarData } from "../sidebar-data/side-bar.component";

import "./navbar.styles.scss";

import Logo from "../../assets/logo.png";

const Navbar = ({ isAuth }) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <header className="header">
      <div className="header__navbar">
        <Link to="#">
          <AiIcons.AiOutlineBars className="menu__bars" onClick={showSidebar} />
        </Link>
      </div>
      <nav
        className={
          sidebar ? "header__menu menu menu--active" : "header__menu menu"
        }
      >
        <ul className="menu__list" onClick={showSidebar}>
          <li className="menu__toggle">
            <Link to="#" className="menu__times">
              <FaIcons.FaTimes />
            </Link>
          </li>
          {SidebarData.map((item) => {
            return isAuth === item.isAuth || item.title === "Home" ? (
              <li key={item.title} className={item.cName}>
                <Link to={item.path} className="menu__link">
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ) : (
              false
            );
          })}
          <li className="menu__text">
            <div className="menu__link menu__link--disable">
              <img src={Logo} alt="Logo" />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
