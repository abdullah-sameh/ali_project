import React from "react";
import Navbar from "../../components/navBar/Navbar";
import "./home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="carsType container">
        <a href="./logan.html">لوجان</a>
        <a href="./klio.html">كليو</a>
        <a href="./simpol.html">سيمبول</a>
        <a href="./flownse.html">فلونس</a>
        <a href="./dastre.html">داستر</a>
        <a href="./sandero.html">سانديرو</a>
        <a href="./step-way.html">سانديرو استيب واي</a>
        <a href="./cadgar.html">كادجار</a>
        <a href="./capture.html">كابتشر</a>
        <a href="./optema.html">اوبتيما</a>
        <a href="./renpo.html">رينبو</a>
        <a href="./snake.html">سينيك</a>
      </div>
    </>
  );
};

export default Home;
