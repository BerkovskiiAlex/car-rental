/** @format */

import styled from "styled-components";
import carRentalIcon from "../../data/car-rental.png";

export const StyledContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  background-image: url(${carRentalIcon});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: fixed;
  top: 58px;
  left: 0;
  align-items: center;
  display: flex;
  flex-direction: column;

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

export const StyledHero = styled.h1`
  font-size: 48px;
  color: #000000;
  background-color: #ffffffde;
  margin-top: 192px;
  padding: 40px;
  width: 1000px;
  border-radius: 30px;
  font-weight: bold;
  text-align: center;
  border: 1px solid black;
`;

export const StyledHeroP = styled.p`
  font-size: 32px;
  color: #000000;
  background-color: #ffffffde;
  margin-top: 50px;
  padding: 40px;
  width: 1000px;
  border-radius: 30px;
  font-weight: bold;
  text-align: center;
  border: 1px solid black;
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
`;

export const StyledService = styled.li`
  flex-basis: 45%;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 20px;
  border: 1px solid black;
  margin: 15px 0;
  width: 300px;
  text-align: center;
`;

export const StyledServiceTitle = styled.h2`
  font-size: 24px;
  color: #333;
  font-weight: bold;
`;

export const StyledServiceDescription = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.4;
  margin-top: 24px;
`;
