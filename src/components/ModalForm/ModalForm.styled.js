/** @format */

import { styled } from "styled-components";
import { ReactComponent as CloseIcon } from "../../images/close.svg";

export const StyledModalSection = styled.section`
  position: relative;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  width: 541px;
  min-height: 752px;
  @media screen and (max-width: 560px) {
  }
`;

export const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  right: 16px;
  top: 16px;
`;

export const StyledModalDiv = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 40px;
  max-height: calc(100vh - 80px);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

export const StyledModalImg = styled.img`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 461px;
  height: 248px;
  flex-shrink: 0;
  border-radius: 14px;
  background: #f3f3f2;
  overflow: hidden;
`;

export const StyledModalCardMarkDiv = styled.div`
  display: flex;
  margin-top: 14px;
`;

export const StyledModalAdressP = styled.p`
  max-width: 461px;
  margin-top: 8px;
`;

export const StyledModalTypeP = styled.p`
  max-width: 461px;
  margin-top: 4px;
`;

export const StyledModalDescriptionP = styled.p`
  color: #121417;
  font-size: 14px;
  line-height: 20px;
  margin-top: 14px;
`;

export const StyledModalAccessoriesP = styled.p`
  color: #121417;
  font-size: 14px;
  line-height: 20px;
  margin-top: 24px;
  font-weight: 500;
`;

export const StyledModalAccessoriesListP = styled.p`
  margin-top: 8px;
`;

export const StyledModalFunctionalitiesListP = styled.p`
  margin-top: 4px;
`;

export const StyledModalRentalConditionsP = styled.p`
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-top: 24px;
`;

export const StyledModalRentalConditionsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

export const StyledModalRentalConditionsListP = styled.p`
  display: flex;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  background: #f9f9f9;
  color: #363535;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.24px;
`;

export const StyledModalMontserratAgeSpan = styled.span`
  color: #363535;
  font-family: Montserrat;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.24px;
`;

export const StyledModalMontserratSpan = styled.span`
  color: #3470ff;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.24px;
`;

export const StyledRentalCarLink = styled.a`
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

  @media screen and (max-width: 1023px) {
    font-size: 12px;
  }
  @media screen and (max-width: 767px) {
    font-size: 10px;
  }
`;
