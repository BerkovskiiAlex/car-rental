/** @format */

import React, { useState } from "react";

import makes from "./makes.json";
import {
  StyledForm,
  StyledCarBrandDiv,
  StyledCarBrandSelect,
  StyledCarMileageDiv,
  StyledCarMileageInputsDiv,
  StyledPriceDiv,
  StyledPriceSelect,
  StyledLabel,
  StyledOption,
  StyledSearchButton,
  StyledCarMileageLeftInput,
  StyledCarMileageRightInput,
} from "../pages/CatalogPage/Catalog.styled";

const FilterForm = ({ cars, onSubmitFilter }) => {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [mileageRange, setMileageRange] = useState({ min: "", max: "" });
  const [userInputs, setUserInputs] = useState({ min: "From ", max: "To " });

  const filterCars = () => {
    return cars.filter((car) => {
      let makeFilter = !selectedMake || car.make === selectedMake;
      let priceFilter = !selectedPrice || car.rentalPrice <= selectedPrice;
      let mileageFilter =
        (!mileageRange.min || car.mileage >= mileageRange.min) &&
        (!mileageRange.max || car.mileage <= mileageRange.max);
      return makeFilter && priceFilter && mileageFilter;
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "min" || name === "max") {
      setUserInputs({ ...userInputs, [name]: value });

      const cleanedValue = value.replace(/[^\d.,]/g, "");
      const numberValue = parseFloat(cleanedValue.replace(/,/g, ""), 10);
      if (!isNaN(numberValue)) {
        setMileageRange({
          ...mileageRange,
          [name]: numberValue,
        });
      }
    } else if (name === "makeFilter") {
      setSelectedMake(value);
    } else if (name === "priceFilter") {
      setSelectedPrice(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmitFilter(filterCars());
  };

  const handleReset = (e) => {
    setSelectedMake("");
    setSelectedPrice("");
    setMileageRange({ min: "", max: "" });
    setUserInputs({ min: "From ", max: "To " });
  };

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <StyledCarBrandDiv>
        <StyledLabel htmlFor="makeFilter">Car brand</StyledLabel>
        <StyledCarBrandSelect
          id="makeFilter"
          name="makeFilter"
          value={selectedMake}
          onChange={handleChange}
        >
          <StyledOption value="">All</StyledOption>
          {makes.map((make) => (
            <StyledOption key={make.id} value={make.name}>
              {make.name}
            </StyledOption>
          ))}
        </StyledCarBrandSelect>
      </StyledCarBrandDiv>
      <StyledPriceDiv>
        <StyledLabel htmlFor="priceFilter">Price/ 1 hour</StyledLabel>
        <StyledPriceSelect
          id="priceFilter"
          name="priceFilter"
          value={selectedPrice}
          onChange={handleChange}
        >
          <StyledOption value="">All</StyledOption>
          {[...Array(50)].map((_, index) => (
            <StyledOption key={index} value={(index + 1) * 10}>
              {`To ${(index + 1) * 10}$`}
            </StyledOption>
          ))}
        </StyledPriceSelect>
      </StyledPriceDiv>
      <StyledCarMileageDiv>
        <StyledLabel htmlFor="minMileageRange">Car mileage / km</StyledLabel>
        <StyledCarMileageInputsDiv>
          <StyledCarMileageLeftInput
            type="text"
            id="minMileageRange"
            name="min"
            placeholder="From"
            value={userInputs.min}
            onChange={handleChange}
          />
          <StyledCarMileageRightInput
            type="text"
            id="maxMileageRange"
            name="max"
            placeholder="To"
            value={userInputs.max}
            onChange={handleChange}
          />
        </StyledCarMileageInputsDiv>
      </StyledCarMileageDiv>
      <StyledSearchButton type="submit">Search</StyledSearchButton>
      <StyledSearchButton type="submit" onClick={handleReset}>
        Reset
      </StyledSearchButton>
    </StyledForm>
  );
};

export default React.memo(FilterForm);
