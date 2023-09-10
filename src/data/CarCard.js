/** @format */

import {
  StyledActiveIcon,
  StyledAdressP,
  StyledCardDiv,
  StyledCardMarkDiv,
  StyledCardMarkH2,
  StyledCardMarkP,
  StyledCardMarkSpan,
  StyledFullCardDiv,
  StyledImage,
  StyledImages,
  StyledLearnMoreButton,
  StyledMachineDescriptionSpan,
  StyledNormalIcon,
  StyledTypeP,
} from "../pages/CatalogPage/Catalog.styled";

export const CarCard = ({
  car,
  carIsFavorite,
  onToggleFavorite,
  onLearnMore,
}) => {
  return (
    <StyledFullCardDiv>
      <StyledCardDiv>
        <StyledImages>
          <StyledImage src={car.img} alt={car.description} />
          {carIsFavorite ? (
            <StyledActiveIcon
              onClick={() => onToggleFavorite(car, carIsFavorite)}
            />
          ) : (
            <StyledNormalIcon
              onClick={() => onToggleFavorite(car, carIsFavorite)}
            />
          )}
        </StyledImages>
        <StyledCardMarkDiv>
          <StyledCardMarkH2>
            {car.make} <StyledCardMarkSpan>{car.model}</StyledCardMarkSpan>,{" "}
            {car.year}
          </StyledCardMarkH2>
          <StyledCardMarkP>${car.rentalPrice}</StyledCardMarkP>
        </StyledCardMarkDiv>
        <StyledAdressP>
          <StyledMachineDescriptionSpan>
            {car.city}
          </StyledMachineDescriptionSpan>
          <StyledMachineDescriptionSpan>
            {car.country}
          </StyledMachineDescriptionSpan>
          <StyledMachineDescriptionSpan>
            {car.rentalCompany}
          </StyledMachineDescriptionSpan>
        </StyledAdressP>
        <StyledTypeP>
          <StyledMachineDescriptionSpan>
            {car.type}
          </StyledMachineDescriptionSpan>
          <StyledMachineDescriptionSpan>
            {car.model}
          </StyledMachineDescriptionSpan>
          <StyledMachineDescriptionSpan>{car.id}</StyledMachineDescriptionSpan>
          <StyledMachineDescriptionSpan>
            {car.accessories[0]}
          </StyledMachineDescriptionSpan>
        </StyledTypeP>
      </StyledCardDiv>
      <StyledLearnMoreButton onClick={() => onLearnMore(car.id)}>
        Learn more
      </StyledLearnMoreButton>
    </StyledFullCardDiv>
  );
};
