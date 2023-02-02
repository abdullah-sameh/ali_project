import Card from "../../components/Card/Card";
import NavbarPages from "../../components/NavbarPages/NavbarPages";
import "./CarTypePage.css";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCarById } from "../../rtk/slices/carIdSlice";

export default function CarTypePage() {
  const dispatch = useDispatch();
  const { carId } = useParams();
  const theCar = useSelector((state) => state.carById);

  // theCar:{
  // spareParts:[
  //   {
  //     name:'',
  //     madeIn:[
  //       {
  //         availableNumber: 0,
  //         gomlaNumber: 0,
  //         customerNumber: 0,
  //         country:''
  //       },
  //     ],
  //   },
  //  ],
  // }

  useEffect(() => {
    dispatch(getCarById(carId));
  }, [carId]);
  return (
    <>
      <NavbarPages name={theCar?.data?.modelName} />
      <form className="container search">
        <input type="search" id="search" />
        <label htmlFor="search">
          <i className="material-icons">search</i>
        </label>
      </form>
      <div className="container cards">
        {theCar?.data?.spareParts?.map((part, index) => {
          return (
            <Card
              key={index}
              nameItem={part?.name}
              countryMade={part?.madeIn}
            />
          );
        })}
      </div>
      <Link className="request-btn" to={"./requestPage"}>
        <p>اكد الطلب</p>
        <i className="material-icons">shopping_cart</i>
      </Link>
    </>
  );
}
