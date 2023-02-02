import Card from "../../components/Card/Card"
import NavbarPages from "../../components/NavbarPages/NavbarPages"
import "./CarTypePage.css"
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getCar } from "../../rtk/slices/carSlice"

export default function CarTypePage() {
  const dispatch = useDispatch()
  const { carId } = useParams()
  // const theCar = useSelector((state) => state.car);

  const theCar = {
    data: {
      spareParts: [
        {
          name: "القطعة الحلوه",
          madeIn: [
            {
              availableNumber: 50,
              gomlaPrice: 250,
              customerPrice: 500,
              country: "مصري",
            },
            {
              availableNumber: 3,
              gomlaPrice: 10000,
              customerPrice: 12000,
              country: "هندي",
            },
            {
              availableNumber: 10,
              gomlaPrice: 50,
              customerPrice: 60,
              country: "باكستاني",
            },
          ],
        },
      ],
    },
  }

  useEffect(() => {
    dispatch(getCar(carId))
  }, [carId])
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
          console.log(part)
          return (
            <Card
              key={index}
              nameItem={part?.name}
              countryMade={part?.madeIn}
            />
          )
        })}
      </div>
      <Link className="request-btn" to={"./RequestPage"}>
        <p>اكد الطلب</p>
        <i className="material-icons">shopping_cart</i>
      </Link>
    </>
  )
}
