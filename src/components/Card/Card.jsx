import { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import "./card.css";

export default function Card({ nameItem, countryMade }) {
  const user = useSelector((state) => state.user);
  const [numOrder, setNumOrder] = useState("0");

  return (
    <section className="card">
      <header>
        <h2>{nameItem}</h2>
        <div className="types">
          {countryMade?.map((country, index) => {
            return (
              <div key={index} className="type">
                <span>{country?.country}</span>
                <span>{country?.availableNumber}</span>
              </div>
            );
          })}
        </div>
      </header>
      {/* ده فى مشكلة احنا هنعرض سعر أى بلد و لا هنعرضها ازاى اصلا  ؟ */}
      {/* <aside>
        <span
          onClick={() => {
            if (props.numItems > +numOrder) setNumOrder(+numOrder + 1);
          }}
        >
          +
        </span>
        <input
          type="number"
          value={numOrder}
          onChange={(e) => {
            if (props.numItems >= e.target.value) setNumOrder(e.target.value);
          }}
        />
        <span
          onClick={() => {
            // eslint-disable-next-line eqeqeq
            if (numOrder != 0) setNumOrder(+numOrder - 1);
          }}
        >
          -
        </span>
      </aside>
      <footer>
        {user.admin && <span>الجملة: {props.gomlaPrice} جنية</span>}
        <span>البيع: {props.sellPrice} جنية</span>
      </footer> */}
    </section>
  );
}
