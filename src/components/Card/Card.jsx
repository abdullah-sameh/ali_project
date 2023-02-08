import { doc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import Swal from "sweetalert2";
import { db } from "../../firebase";
import { getCarById } from "../../rtk/slices/carIdSlice";
import "./card.css";

export default function Card({ nameItem, countryMade, carName }) {
  const user = useSelector((state) => state.user);
  const [numOrder, setNumOrder] = useState(0);
  const [info, setInfo] = useState({});
  const theCar = useSelector((state) => state?.carById);
  const dispatch = useDispatch();

  useEffect(() => {
    setInfo(
      ...countryMade?.filter((country) => country?.country === info?.country)
    );
  }, [countryMade]);

  const orderHandler = async () => {
    if (info && numOrder !== 0) {
      let [oldStateOfNewPart] = theCar?.data?.spareParts?.filter(
        (part) => part?.name === nameItem
      );

      let newPartCountry = {
        name: nameItem,
        madeIn: [
          ...oldStateOfNewPart?.madeIn?.filter(
            (countryDetails) => countryDetails?.country !== info?.country
          ),
          {
            country: info?.country,
            availableNumber: info?.availableNumber - numOrder,
            gomlaPrice: info?.gomlaPrice,
            customerPrice: info?.customerPrice,
          },
        ],
      };

      let newCarDetails = {
        modelName: theCar?.data?.modelName,
        spareParts: [
          ...theCar?.data?.spareParts?.filter(
            (part) => part?.name !== nameItem
          ),
          newPartCountry,
        ],
      };

      await setDoc(doc(db, "models", theCar.id), newCarDetails)
        .then(() => {
          setNumOrder(0);
          dispatch(getCarById(theCar.id));
        })
        .catch((e) => {
          console.log(e);
          Swal.fire({
            icon: "error",
            title: "خطأ",
            text: "حاول مرة أخرى!",
          });
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "خطأ",
        text: "يرجى اختيرا الصناعة و العدد",
      });
    }
  };

  return (
    <section className="card">
      <header>
        <h2>{nameItem}</h2>
        <div className="types">
          <span>{carName}</span>
          <select
            id="country"
            onChange={(e) => {
              setInfo(
                ...countryMade?.filter(
                  (country) => country?.country === e.currentTarget.value
                )
              );
            }}
          >
            <option value="">الصناعة</option>
            {countryMade?.map((country, index) => {
              return (
                <option key={index} value={country.country}>
                  {country.country}
                </option>
              );
            })}
          </select>
          <span>{info?.availableNumber}</span>
        </div>
      </header>
      <aside>
        <input
          type="number"
          className="neededNumber"
          min={0}
          onChange={(e) => {
            if (info.availableNumber >= e.target.value) {
              setNumOrder(e.target.value);
            }
          }}
          value={numOrder}
        />
        <span onClick={orderHandler}>سحب</span>
      </aside>
      <footer>
        {user.admin && <span>الجملة: {info ? info.gomlaPrice : ""} جنية</span>}
        <span>السعر: {info?.customerPrice} جنية</span>
      </footer>
    </section>
  );
}
