/** @format */

import { styled } from "styled-components";
import { ReactComponent as CloseIcon } from "../../images/close.svg";

export const StyledModalSection = styled.section`
  position: relative;
  border-radius: 24px;
  background: #fff;
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  flex-direction: column;
  display: flex;
  justify-content: center;
  width: 541px;
  height: 752px;
`;

export const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  right: 16px;
  top: 16px;
`;

export const StyledRentalCar = styled.a`
  display: inline-block;
  padding: 8px 16px;
  color: #fff;
  background-color: #007bff;
  text-align: center;
  text-decoration: none;
  font-weight: 700;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
    text-decoration: none;
    color: #fff;
  }
`;
