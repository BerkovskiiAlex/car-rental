/** @format */

import React from "react";
import {
  StyledCloseIcon,
  StyledModalAccessoriesListP,
  StyledModalAccessoriesP,
  StyledModalAdressP,
  StyledModalCardMarkDiv,
  StyledModalDescriptionP,
  StyledModalDiv,
  StyledModalFunctionalitiesListP,
  StyledModalImg,
  StyledModalMontserratAgeSpan,
  StyledModalMontserratSpan,
  StyledModalRentalConditionsDiv,
  StyledModalRentalConditionsListP,
  StyledModalRentalConditionsP,
  StyledModalSection,
  StyledModalTypeP,
  StyledRentalCarLink,
} from "./ModalForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { setIsModalClose } from "../../Redux/Cars/carsSlice";
import { getCarModal } from "../../Redux/Cars/selectors";
import {
  StyledCardMarkH2,
  StyledCardMarkSpan,
  StyledMachineDescriptionSpan,
} from "../../pages/CatalogPage/Catalog.styled";

export const ModalForm = () => {
  const dispatch = useDispatch();
  const carModal = useSelector(getCarModal);

  const handleClick = () => {
    dispatch(setIsModalClose());
  };

  return (
    <StyledModalSection>
      <StyledCloseIcon onClick={handleClick} />
      {carModal && (
        <StyledModalDiv key={carModal.id}>
          <StyledModalImg src={carModal.img} alt={carModal.description} />
          <StyledModalCardMarkDiv>
            <StyledCardMarkH2>
              {carModal.make}{" "}
              <StyledCardMarkSpan>{carModal.model}</StyledCardMarkSpan>,{" "}
              {carModal.year}
            </StyledCardMarkH2>
          </StyledModalCardMarkDiv>
          <StyledModalAdressP>
            <StyledMachineDescriptionSpan>
              {carModal.city}
            </StyledMachineDescriptionSpan>
            <StyledMachineDescriptionSpan>
              {carModal.country}
            </StyledMachineDescriptionSpan>
            <StyledMachineDescriptionSpan>
              id: {carModal.id}
            </StyledMachineDescriptionSpan>
            <StyledMachineDescriptionSpan>
              year: {carModal.year}
            </StyledMachineDescriptionSpan>
            <StyledMachineDescriptionSpan>
              type: {carModal.type}
            </StyledMachineDescriptionSpan>
          </StyledModalAdressP>
          <StyledModalTypeP>
            <StyledMachineDescriptionSpan>
              fuelConsumption: {carModal.fuelConsumption}
            </StyledMachineDescriptionSpan>
            <StyledMachineDescriptionSpan>
              Engine Size: {carModal.engineSize}
            </StyledMachineDescriptionSpan>
          </StyledModalTypeP>
          <StyledModalDescriptionP>
            {carModal.description}
          </StyledModalDescriptionP>
          <StyledModalAccessoriesP>
            Accessories and functionalities:
          </StyledModalAccessoriesP>
          <StyledModalAccessoriesListP>
            {carModal.accessories.map((accessorie) => (
              <StyledMachineDescriptionSpan key={accessorie}>
                {accessorie}
              </StyledMachineDescriptionSpan>
            ))}
          </StyledModalAccessoriesListP>
          <StyledModalFunctionalitiesListP>
            {carModal.functionalities.map((functional) => (
              <StyledMachineDescriptionSpan key={functional}>
                {functional}
              </StyledMachineDescriptionSpan>
            ))}
          </StyledModalFunctionalitiesListP>
          <StyledModalRentalConditionsP>
            Rental Conditions:
          </StyledModalRentalConditionsP>
          <StyledModalRentalConditionsDiv>
            {carModal.rentalConditions.map((condition) => (
              <StyledModalRentalConditionsListP key={condition}>
                {condition.includes("Minimum age: ") ? (
                  <StyledModalMontserratAgeSpan>
                    Minimum age:{" "}
                    <StyledModalMontserratSpan>25</StyledModalMontserratSpan>
                  </StyledModalMontserratAgeSpan>
                ) : (
                  condition
                )}
              </StyledModalRentalConditionsListP>
            ))}
            <StyledModalRentalConditionsListP>
              <StyledModalMontserratAgeSpan>
                Mileage:{" "}
                <StyledModalMontserratSpan>
                  {Intl.NumberFormat("en-US", {
                    maximumFractionDigits: 0,
                  }).format(parseFloat(carModal.mileage))}
                </StyledModalMontserratSpan>
              </StyledModalMontserratAgeSpan>
            </StyledModalRentalConditionsListP>
            <StyledModalRentalConditionsListP>
              <StyledModalMontserratAgeSpan>
                Price:{" "}
                <StyledModalMontserratSpan>
                  {carModal.rentalPrice}$
                </StyledModalMontserratSpan>
              </StyledModalMontserratAgeSpan>
            </StyledModalRentalConditionsListP>
          </StyledModalRentalConditionsDiv>
          <StyledRentalCarLink
            href="tel:+380730000000"
            className="rental-car-link"
          >
            Rental car
          </StyledRentalCarLink>
        </StyledModalDiv>
      )}
    </StyledModalSection>
  );
};
