import React from "react";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import * as CgIcons from "react-icons/cg";
import * as BiIcons from "react-icons/bi";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome className="menu__icon" />,
    cName: "menu__text",
    isAuth: false,
  },
  {
    title: "Movies",
    path: "/movies",
    icon: <MdIcons.MdLocalMovies className="menu__icon" />,
    cName: "menu__text",
    isAuth: true,
  },
  {
    title: "Employees",
    path: "/employees",
    icon: <MdIcons.MdWork className="menu__icon" />,
    cName: "menu__text",
    isAuth: true,
  },
  {
    title: "Log in",
    path: "/login",
    icon: <CgIcons.CgLogIn className="menu__icon" />,
    cName: "menu__text",
    isAuth: false,
  },
  {
    title: "Sign up",
    path: "/signup",
    icon: <FaIcons.FaUserAlt className="menu__icon" />,
    cName: "menu__text",
    isAuth: false,
  },
  {
    title: "Log out",
    path: "/",
    icon: <BiIcons.BiLogOut className="menu__icon" />,
    cName: "menu__text",
    isAuth: true,
  },
];
