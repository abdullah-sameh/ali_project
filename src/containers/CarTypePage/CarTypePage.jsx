import Card from "../../components/Card/Card";
import NavbarPages from "../../components/NavbarPages/NavbarPages";
import "./CarTypePage.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { getCarById } from "../../rtk/slices/carIdSlice";

export default function CarTypePage() {
  const dispatch = useDispatch();
  const { carId } = useParams();
  const theCar = useSelector((state) => state.carById);
  const [spareParts, setSpareParts] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    dispatch(getCarById(carId));
    setSpareParts(theCar?.data?.spareParts);
  }, [carId, theCar]);

  const displayParts = useMemo(() => {
    return searchResult?.map((part, index) => (
      <Card key={index} nameItem={part?.name} countryMade={part?.madeIn} />
    ));
  }, [searchResult]);

  const searchHandler = (value) => {
    if (value.trim() !== "") {
      let currentSpareParts = spareParts?.filter((part) =>
        part?.name.includes(value.trim())
      );
      setSearchResult(currentSpareParts);
    } else if (value.trim() === "") {
      let currentParts = spareParts;
      setSearchResult(currentParts);
    }
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
