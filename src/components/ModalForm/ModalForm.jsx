/** @format */

import React from "react";
import { StyledCloseIcon, StyledModalSection } from "./ModalForm.styled";
import { useDispatch } from "react-redux";
import { setIsModalClose } from "../../Redux/Cars/carsSlice";

export const ModalForm = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setIsModalClose());
  };

  return (
    <StyledModalSection>
      <StyledCloseIcon onClick={handleClick} />
    </StyledModalSection>
  );
};
