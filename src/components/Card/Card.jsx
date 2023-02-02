import { useState } from "react"
import { useSelector } from "react-redux/es/exports"
import "./card.css"

export default function Card({ nameItem, countryMade }) {
  const user = useSelector((state) => state.user)
  const [numOrder, setNumOrder] = useState("0")

  const [info, setInfo] = useState("")
  return (
    <section className="card">
      <header>
        <h2>{nameItem}</h2>
        <div className="types">
          <span>نوع العربية</span>
          <select
            id="country"
            onChange={(e) => {
              setInfo(e.target.value)
            }}
          >
            {countryMade.map((country, index) => {
              return (
                <option value={JSON.stringify(country)}>
                  {country.country}
                </option>
              )
            })}
          </select>
          <span>{info ? JSON.parse(info).availableNumber : ""}</span>
        </div>
      </header>
      <aside>
        <span
          onClick={() => {
            if (JSON.parse(info).availableNumber > +numOrder)
              setNumOrder(+numOrder + 1)
          }}
        >
          +
        </span>
        <input
          type="number"
          value={numOrder}
          onChange={(e) => {
            if (JSON.parse(info).availableNumber >= e.target.value)
              setNumOrder(e.target.value)
          }}
        />
        <span
          onClick={() => {
            // eslint-disable-next-line eqeqeq
            if (numOrder != 0) setNumOrder(+numOrder - 1)
          }}
        >
          -
        </span>
      </aside>
      <footer>
        {user.admin && (
          <span>الجملة: {info ? JSON.parse(info).gomlaPrice : ""} جنية</span>
        )}
        <span>البيع: {info ? JSON.parse(info).customerPrice : ""} جنية</span>
      </footer>
    </section>
  )
}
