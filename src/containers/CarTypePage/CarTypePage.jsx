import Card from "../../components/Card/Card";
import NavbarPages from "../../components/NavbarPages/NavbarPages";
import "./CarTypePage.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { getCarById } from "../../rtk/slices/carIdSlice";
import { resetCart } from "../../rtk/slices/sellPartsSlice";

export default function CarTypePage() {
  const dispatch = useDispatch();
  const { carId } = useParams();
  const theCar = useSelector((state) => state.carById);
  const [spareParts, setSpareParts] = useState([]);

  useEffect(() => {
    dispatch(getCarById(carId));
    setSpareParts(theCar?.data?.spareParts);
    dispatch(resetCart());
  }, [carId, theCar]);

  const displayParts = useMemo(
    () =>
      spareParts?.map((part, index) => (
        <Card key={index} nameItem={part?.name} countryMade={part?.madeIn} />
      )),
    [spareParts]
  );

  const searchHandler = (value) => {
    if (value.trim() !== "") {
      let currentSpareParts = spareParts?.filter((part) =>
        part?.name.includes(value.trim())
      );
      console.log(currentSpareParts);
      setSpareParts(currentSpareParts);
    } else if (value.trim() === "") {
      setSpareParts(theCar?.data?.spareParts);
    }
  };

  const completeOrder = () => {
    console.log(theCar);
  };

  return (
    <>
      <NavbarPages name={theCar?.data?.modelName} />
      <form className="container search">
        <input
          onChange={(e) => searchHandler(e.currentTarget.value)}
          type="search"
          id="search"
        />
        <label htmlFor="search">
          <i className="material-icons">search</i>
        </label>
      </form>
      <div className="container cards">{displayParts}</div>
      {/* <button className="request-btn" onClick={completeOrder}>
        <p>اكد الطلب</p>
        <i className="material-icons">shopping_cart</i>
      </button> */}
    </>
  );
}
