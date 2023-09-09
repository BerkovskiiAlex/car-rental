/** @format */

import React from "react";
import {
  StyledContainer,
  StyledServicesList,
  StyledService,
  StyledServiceTitle,
  StyledServiceDescription,
  StyledHero,
  StyledHeroP,
  StyledHomeLink,
  StyledHeroH1,
  StyledHeroDiv,
} from "./Home.styled";
import { StyledRentalCarLink } from "../../components/ModalForm/ModalForm.styled";

export const Home = () => {
  return (
    <StyledContainer>
      <StyledHeroDiv>
        <StyledHeroH1>Welcome to Our Car Rental Service! </StyledHeroH1>
        <StyledHeroP>
          We provide top quality car rental service for every customer. Our
          fleet includes a wide range of vehicle types, brands, and models to
          ensure that you have the perfect car for your trip. Below are some of
          the services we offer.
        </StyledHeroP>
      </StyledHeroDiv>
      <StyledServicesList>
        <StyledService>
          <StyledServiceTitle>Wide Range of Cars</StyledServiceTitle>
          <StyledServiceDescription>
            Choose from our extensive selection of cars, including sedans, SUVs,
            luxury and sports cars.
          </StyledServiceDescription>
          <StyledHomeLink to="/catalog">Watch cars</StyledHomeLink>
        </StyledService>
        <StyledService>
          <StyledServiceTitle>Exceptional Assistance</StyledServiceTitle>
          <StyledServiceDescription>
            Our committed assistance team is on standby around the clock to
            address any inquiries or issues you might encounter. Your
            satisfaction is our utmost priority.
          </StyledServiceDescription>
          <StyledRentalCarLink href="tel:+380730000000">
            Contact us
          </StyledRentalCarLink>
        </StyledService>
        <StyledService>
          <StyledServiceTitle>Flexible Rental Periods</StyledServiceTitle>
          <StyledServiceDescription>
            Rent a car for as little as an hour, a day, a week, or even a month.
            We offer flexible rental periods to suit your needs.
          </StyledServiceDescription>
        </StyledService>
        <StyledService>
          <StyledServiceTitle>Competitive Prices</StyledServiceTitle>
          <StyledServiceDescription>
            Our prices are among the best in the market, ensuring that you can
            enjoy great service without breaking the bank.
          </StyledServiceDescription>
        </StyledService>
      </StyledServicesList>
    </StyledContainer>
  );
};
