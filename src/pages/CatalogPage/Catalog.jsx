/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarsThunk, loadMoreThunk } from "../../Redux/Cars/operations";
import { getCars } from "../../Redux/Cars/selectors";
import { StyledCarsListSpan } from "./Catalog.styled";

export const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(getCars);
  const [currentPage, setCurrentPage] = useState(2);

  useEffect(() => {
    dispatch(fetchCarsThunk());
  }, [dispatch]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    dispatch(loadMoreThunk(currentPage));
  };

  return (
    <section>
      {cars.map((car) => (
        <div key={car.id}>
          <img src={car.img} alt={car.description} width={274} />
          <div>
            <h2>
              {car.make} <span>{car.model}</span>, {car.year}
            </h2>
            <p>{car.rentalPrice}</p>
          </div>
          <p>
            <StyledCarsListSpan>{car.city}</StyledCarsListSpan>
            <StyledCarsListSpan>{car.country}</StyledCarsListSpan>
            <StyledCarsListSpan>{car.rentalCompany}</StyledCarsListSpan>
            <StyledCarsListSpan>{car.type}</StyledCarsListSpan>
            <StyledCarsListSpan>{car.model}</StyledCarsListSpan>
            <StyledCarsListSpan>{car.id}</StyledCarsListSpan>
            <StyledCarsListSpan>{car.accessories[0]}</StyledCarsListSpan>
          </p>
          <button>Learn more</button>
        </div>
      ))}
      {currentPage <= 4 ? (
        <button onClick={handleLoadMore}>Load more</button>
      ) : null}
    </section>
  );
};
