/** @format */

import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const StyledNav = styled.nav`
  max-width: 1440px;
  font-family: Manrope;
  padding: 20px 10%;
  background-color: #3470ff;
`;

export const StyledUl = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

export const StyledNavLink = styled(NavLink)`
  border-radius: 20px;

  &:hover {
    position: relative;
    text-align: center;
    font-size: 18px;
    color: #fff;
    padding: 4px 8px;
    background-image: radial-gradient(
      circle,
      rgba(255, 131, 25, 1) 0%,
      transparent 100%
    );
    background-size: 100% 100%;
    background-position: center;
    transition: background-position 0.3s, box-shadow 0.3s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

    background-position: 50% 50%;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  }

  &.active {
    position: relative;
    text-align: center;
    font-size: 18px;
    color: #fff;
    padding: 10px 20px;
    background-image: radial-gradient(
      circle,
      rgba(255, 131, 25, 1) 0%,
      transparent 100%
    );
    background-size: 200% 200%;
    background-position: center;
    transition: background-position 0.3s, box-shadow 0.3s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  &.active:hover {
    background-position: 50% 50%;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  }
`;
