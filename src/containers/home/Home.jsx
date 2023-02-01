import { useNavigate } from "react-router"
import Navbar from "../../components/navBar/Navbar"
import { useDispatch, useSelector } from "react-redux/es/exports"
import "./home.css"
import { setUser } from "../../rtk/slices/userSlice"
import { useEffect, useState } from "react"
import { getAllCars } from "../../rtk/slices/allCarsSlice"
import { Link } from "react-router-dom"
import Card from "../../components/card/Card"

const Home = () => {
  // to check if he loggedin
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const data = []

  const [formState, setFormState] = useState(false)
  const [model, setModel] = useState("")

  const allCars = useSelector((state) => state.allCars)
  const user = useSelector((state) => state.user)

  useEffect(() => {
    if (!sessionStorage.getItem("user")) {
      navigate("/")
    } else {
      let item = sessionStorage.getItem("user")
      dispatch(setUser(JSON.parse(item)))
    }
    dispatch(getAllCars())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleForm = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <Navbar />
      <div className="carsType container">
        {allCars.map((car) => (
          <Link key={car.id} to={`/cars/${car.id}`}>
            {car.data().modelName}
          </Link>
        ))}
        {user.admin && (
          <button onClick={() => setFormState(true)}>أضف نوع جديد</button>
        )}
        <Card
          nameItem="اسم المنتج"
          typeCar="لوجان"
          countryMade="مصر"
          numItems="50"
          gomlaPrice="25"
          sellPrice="50"
        />
        {formState && (
          <div className="addContainer">
            <form onSubmit={(e) => handleForm(e)} className="addModel">
              <h3 onClick={() => setFormState(false)} className="close">
                X
              </h3>
              <label htmlFor="carModel">
                <h1>أدخل موديل العربية</h1>
              </label>
              <input
                onChange={(e) => setModel(e.currentTarget.value)}
                id="carModel"
                type="text"
                placeholder="مثلا: ميجان"
                required
              />
              <input type="submit" value="موافق" />
            </form>
          </div>
        )}
      </div>
    </>
  )
}

export default Home