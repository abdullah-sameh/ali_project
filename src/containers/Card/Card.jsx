import { useState } from "react"
import { useSelector } from "react-redux/es/exports"
import "./card.css"

export default function Card(props) {
  const user = useSelector((state) => state.user)
  const [numOrder, setNumOrder] = useState("0")
  const countrysMade = [1,2,3]

  return (
    <section className="card">
      <header>
        <h2>{props.nameItem}</h2>
        <div className="types">
          {countrysMade.map((item) => {
            return (
              <div className="type">
                <span>{props.typeCar}</span>
                <span>{props.countryMade}</span>
                <span>{props.numItems}</span>
              </div>
            )
          })}
        </div>
      </header>
      <aside>
        <span
          onClick={() => {
            if (props.numItems > +numOrder) setNumOrder(+numOrder + 1)
          }}
        >
          +
        </span>
        <input
          type="number"
          value={numOrder}
          onChange={(e) => {
            if (props.numItems >= e.target.value) setNumOrder(e.target.value)
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
        {user.admin && <span>الجملة: {props.gomlaPrice} جنية</span>}
        <span>البيع: {props.sellPrice} جنية</span>
      </footer>
    </section>
  )
}
