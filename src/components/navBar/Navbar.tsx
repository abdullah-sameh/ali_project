import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";
import logo from "../../assets/renault.png";

const Navbar = () => {
  return (
    <header>
      <nav className="container">
        <section className="left">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </section>
        <section className="someLinks">
          <Link to="/add">أضف جديد</Link>
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
