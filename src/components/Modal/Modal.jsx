/** @format */

import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalOverlay } from "./Modal.styled";
import { useDispatch } from "react-redux";
import { setIsModalClose } from "../../Redux/Cars/carsSlice";
import { ModalForm } from "../ModalForm/ModalForm";

const modalRoot = document.querySelector("#modal-root");

const Modal = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleEscape = (e) => {
      if (e.code === "Escape") {
        dispatch(setIsModalClose());
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [dispatch]);

  return createPortal(
    <ModalOverlay
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          dispatch(setIsModalClose());
        }
      }}
    >
      <ModalForm />
    </ModalOverlay>,
    modalRoot
  );
};

export default Modal;
