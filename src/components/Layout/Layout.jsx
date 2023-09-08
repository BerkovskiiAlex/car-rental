/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import { StyledNav, StyledNavLink, StyledUl } from "./Layout.styled";

export const Layout = () => {
  const pages = [
    { title: "Home", src: "/" },
    { title: "Catalog", src: "/catalog" },
    { title: "Favorites", src: "/favorites" },
  ];
  return (
    <div>
      <StyledNav>
        <StyledUl>
          {pages.map((page) => (
            <li key={page.title}>
              <StyledNavLink to={page.src}>{page.title}</StyledNavLink>
            </li>
          ))}
        </StyledUl>
      </StyledNav>
      <Outlet />
    </div>
  );
};
