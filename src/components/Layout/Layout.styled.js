/** @format */

import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const StyledNav = styled.nav`
  width: 100vw;
  font-family: Manrope;
  padding: 20px;
  margin: 0 auto;
  background-color: #3470ff;
  position: fixed;
  top: 0;
  z-index: 2;
`;

export const StyledUl = styled.ul`
  max-width: 1152px;
  display: flex;
  justify-content: space-evenly;
`;

export const StyledNavLink = styled(NavLink)`
  border-radius: 20px;

  &:hover,
  &:focus {
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
