import Card from "../Card/Card"
import NavbarPages from "../NavbarPages/NavbarPages"
import "./CarTypePage.css"
import { Link } from "react-router-dom"

export default function CarTypePage(props) {
  const data = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <>
      <NavbarPages name="هوبا" />
      <form className="container search">
        <input type="search" id="search" />
        <label htmlFor="search">
          <i className="material-icons">search</i>
        </label>
      </form>
      <div className="container cards">
        {data.map((item) => {
          return (
            <Card
              nameItem="اسم المنتج"
              typeCar="لوجان"
              countryMade="مصر"
              numItems="50"
              gomlaPrice="25"
              sellPrice="50"
            />
          )
        })}
      </div>
      <Link className="request-btn" to={"./requestPage"}>
        <p>اكد الطلب</p>
        <i className="material-icons">shopping_cart</i>
      </Link>
    </>
  )
}
