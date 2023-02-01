import { useState } from "react"
import { useSelector } from "react-redux/es/exports"
import "./card.css"

export default function Card(props) {
  const user = useSelector((state) => state.user)
  const [numOrder, setNumOrder] = useState()
  return (
    <section className="card">
      <header>
        <h2>{props.nameItem}</h2>
        <div>
          <span>{props.typeCar}</span>
          <span>{props.countryMade}</span>
          <span>{props.numItems}</span>
        </div>
      </header>
      <aside>
        <span
          onClick={() => {
            if (+props.numItems > +numOrder) setNumOrder(+numOrder + 1)
          }}
        >
          +
        </span>
        <input type="number" value={numOrder} onChange={e => {
          if (+props.numItems >= e.target.value) setNumOrder(e.target.value)
        }} />
        <span
          onClick={() => {
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
