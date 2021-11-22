import React from "react";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome className="menu__icon" />,
    cName: "menu__text",
  },
  {
    title: "Movies",
    path: "/movies",
    icon: <MdIcons.MdLocalMovies className="menu__icon" />,
    cName: "menu__text",
  },
  {
    title: "Employees",
    path: "/employees",
    icon: <MdIcons.MdWork className="menu__icon" />,
    cName: "menu__text",
  },
];
