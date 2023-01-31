import { useNavigate } from "react-router";
import Navbar from "../../components/navBar/Navbar";
import { useDispatch } from "react-redux/es/exports";
import "./home.css";
import { setUser } from "../../rtk/slices/userSlice";
import { useEffect } from "react";

const Home = () => {
  // to check if he loggedin
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!sessionStorage.getItem("user")) {
      navigate("/");
    } else {
      //@ts-ignore
      let item = sessionStorage.getItem("user");
      dispatch(setUser(JSON.parse(item)));
    }
  }, []);

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
