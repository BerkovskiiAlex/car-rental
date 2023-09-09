/** @format */

import styled from "styled-components";
import carRentalIcon from "../../data/car-rental.png";
import { Link } from "react-router-dom";

export const StyledContainer = styled.div`
  max-width: 1440px;
  background-image: url(${carRentalIcon});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-attachment: fixed;
  margin-top: 58px;
  padding: 30px;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0f3eae10;
    z-index: 0;
  }
`;

export const StyledHeroDiv = styled.h1`
  z-index: 1;
`;

export const StyledHeroH1 = styled.h1`
  font-size: 42px;
  color: #000000;
  background-color: #ffffffde;
  margin-top: 192px;
  padding: 40px;
  max-width: 1000px;
  border-radius: 30px;
  font-weight: bold;
  text-align: center;
  border: 1px solid black;
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
`;

export const StyledHeroP = styled.p`
  font-size: 28px;
  color: #000000;
  background-color: #ffffffde;
  margin-top: 50px;
  padding: 40px;
  max-width: 1000px;
  border-radius: 30px;
  font-weight: bold;
  text-align: center;
  border: 1px solid black;
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
`;

export const StyledServicesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  margin: 50px 0 192px 0;
  row-gap: 30px;
  column-gap: 50px;
  z-index: 1;
`;

export const StyledService = styled.li`
  flex-basis: 45%;
  padding: 20px;
  background-color: rgb(255 255 255 / 90%);
  border-radius: 20px;
  border: 1px solid black;
  margin: 15px 0;
  width: 300px;
  text-align: center;
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
`;

export const StyledServiceTitle = styled.h2`
  font-size: 20px;
  color: #333;
  font-weight: bold;
`;

export const StyledServiceDescription = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.4;
  margin-top: 24px;
`;

export const StyledHomeLink = styled(Link)`
  display: inline-block;
  padding: 12px 50px;
  margin-top: 24px;
  color: #fff;
  background-color: #007bff;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  border-radius: 12px;
  background: #3470ff;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
    text-decoration: none;
    color: #fff;
  }
`;
