/** @format */

import React from "react";
import {
  StyledCloseIcon,
  StyledModalSection,
  StyledRentalCar,
} from "./ModalForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { setIsModalClose } from "../../Redux/Cars/carsSlice";
import { getCarModal } from "../../Redux/Cars/selectors";
import { StyledCarsListSpan } from "../../pages/CatalogPage/Catalog.styled";

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
        <div key={carModal.id}>
          <img src={carModal.img} alt={carModal.description} width={274} />
          <div>
            <h2>
              {carModal.make} <span>{carModal.model}</span>, {carModal.year}
            </h2>
            <p>{carModal.rentalPrice}</p>
          </div>
          <p>
            <StyledCarsListSpan>{carModal.city}</StyledCarsListSpan>
            <StyledCarsListSpan>{carModal.country}</StyledCarsListSpan>
            <StyledCarsListSpan>id: {carModal.id}</StyledCarsListSpan>
            <StyledCarsListSpan>year: {carModal.year}</StyledCarsListSpan>
            <StyledCarsListSpan>type: {carModal.type}</StyledCarsListSpan>
            <StyledCarsListSpan>
              fuelConsumption: {carModal.fuelConsumption}
            </StyledCarsListSpan>
            <StyledCarsListSpan>
              Engine Size: {carModal.engineSize}
            </StyledCarsListSpan>
          </p>
          <p> {carModal.description}</p>
          <p>Accessories and functionalities:</p>
          <p>
            {carModal.accessories.map((accessorie) => (
              <StyledCarsListSpan key={accessorie}>
                {accessorie}
              </StyledCarsListSpan>
            ))}
          </p>
          <p>
            {carModal.functionalities.map((functional) => (
              <StyledCarsListSpan key={functional}>
                {functional}
              </StyledCarsListSpan>
            ))}
          </p>
          <div>
            <p>Rental Conditions: </p>
            <div>
              {carModal.rentalConditions.map((Condition) => (
                <p key={Condition}>{Condition}</p>
              ))}
            </div>
            <p>
              Mileage:{" "}
              {Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(
                parseFloat(carModal.mileage)
              )}
            </p>
            <p>Price: {carModal.rentalPrice}</p>
          </div>
          <StyledRentalCar href="tel:+380730000000" className="rental-car-link">
            Rental car
          </StyledRentalCar>
        </div>
      )}
    </StyledModalSection>
  );
};
