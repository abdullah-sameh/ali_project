import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbarPages.css";
import "./navbarPages.css";
import logo from "../../assets/renault.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllCars } from "../../rtk/slices/allCarsSlice";

const Navbar = (props) => {
  const allCars = useSelector((state) => state.allCars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, []);

  const [linksStyle, setLinksStyle] = useState("none");

  return (
    <header>
      <nav className="container">
        <section className="left">
          <Link to="/home">
            <img src={logo} alt="logo" />
          </Link>
        </section>

        <section>{props.name}</section>

        <i
          className="someLinks material-icons"
          onClick={() => {
            linksStyle === "none"
              ? setLinksStyle("grid")
              : setLinksStyle("none");
          }}
        >
          menu
        </i>
      </nav>

      <div className="links container" style={{ display: linksStyle }}>
        {allCars?.map((car) => {
          return (
            <Link key={car?.id} to={`/cars/${car.id}`}>
              {car?.data()?.modelName}
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export default Navbar;
