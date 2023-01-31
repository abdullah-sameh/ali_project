import React from "react";
import { useParams } from "react-router";

const CarDetails = () => {
  const { carId } = useParams();

  return <div>CarDetails</div>;
};

export default CarDetails;
