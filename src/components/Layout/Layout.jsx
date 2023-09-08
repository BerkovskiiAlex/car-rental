/** @format */

import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { StyledNav } from "./Layout.styled";

export const Layout = () => {
  const pages = [
    { title: "Home", src: "/" },
    { title: "Catalog", src: "/catalog" },
    { title: "Favorites", src: "/favorites" },
  ];
  return (
    <div>
      <StyledNav>
        <ul>
          {pages.map((page) => (
            <li key={page.title}>
              <NavLink to={page.src}>{page.title}</NavLink>
            </li>
          ))}
        </ul>
      </StyledNav>
      <Outlet />
    </div>
  );
};
