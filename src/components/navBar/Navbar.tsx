import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../../rtk/store";
import "./navbar.css";
import logo from "../../assets/renault.png";

const Navbar = () => {
  interface User {
    admin?: boolean;
  }
  const user: User = useSelector((state: RootState) => state?.user);

  return (
    <header>
      <nav className="container">
        <section className="left">
          <Link to="/home">
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
