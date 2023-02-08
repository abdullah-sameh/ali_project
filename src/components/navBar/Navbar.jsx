import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./navbar.css";
import logo from "../../assets/renault.png";

const Navbar = () => {
  const user = useSelector((state) => state.user);

  return (
    <header>
      <nav className="container">
        <section className="left">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </section>
        <section className="someLinks">
          {user?.admin && <Link to="/add">أضف جديد</Link>}
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
