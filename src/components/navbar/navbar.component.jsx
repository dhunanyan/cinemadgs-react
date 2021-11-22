import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

import { SidebarData } from "../sidebar-data/side-bar.component";

import "./navbar.styles.scss";

// import "./header.styles.scss";
import Logo from "../../assets/logo.png";
import { IconContext } from "react-icons/lib";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <header className="header">
      <div className="header__navbar">
        <div className="header__container">
          <Link to="#">
            <AiIcons.AiOutlineBars
              className="menu__bars"
              onClick={showSidebar}
            />
          </Link>
        </div>
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
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path} className="menu__link">
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
