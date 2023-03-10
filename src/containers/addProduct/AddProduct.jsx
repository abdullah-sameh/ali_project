import React from "react";
import Navbar from "../../components/navBar/Navbar";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/exports";
import "./addProduct.css";
import { useState } from "react";
import { getCarByName } from "../../rtk/slices/carNameSlice";
import { db } from "../../firebase";
import { setDoc, doc } from "firebase/firestore";
import Swal from "sweetalert2";

const AddProduct = () => {
  // to check if he loggedin
  const dispatch = useDispatch();

  //to get the user
  const user = useSelector((state) => state.user);
  const allCars = useSelector((state) => state.allCars);
  const theCar = useSelector((state) => state.carByName);

  const [firstForm, setFirstForm] = useState("");
  const [secondForm, setSecondForm] = useState("");
  const [styleFirstForm, setStyleFirstForm] = useState("grid");
  const [styleSecForm, setStyleSecForm] = useState("none");

  const [partName, setPartName] = useState("");
  const [partDetails, setPartDetails] = useState({});
  const [partCountryDetails, setPartCountryDetails] = useState({});

  //second form states
  const [availableNumber, setAvailableNumber] = useState(0);
  const [gomlaPrice, setGomlaPrice] = useState(0);
  const [customerPrice, setCustomerPrice] = useState(0);

  const firstFormHandler = (e) => {
    e.preventDefault();

    let [Details] =
      theCar?.data?.spareParts?.filter((part) => part?.name === partName)
        .length !== 0
        ? theCar?.data?.spareParts?.filter((part) => part?.name === partName)
        : [{ name: partName, madeIn: [] }];
    setPartDetails(Details);

    setFirstForm("animate__backOutRight");
    setTimeout(() => {
      setStyleFirstForm("none");
      setStyleSecForm("grid");
      setSecondForm("animate__backInLeft");
    }, 300);
  };

  const getPartByCountry = (value) => {
    let [CountryDetails] =
      partDetails?.madeIn?.filter(
        (countryMade) => countryMade?.country === value
      ).length !== 0
        ? partDetails?.madeIn?.filter(
            (countryMade) => countryMade?.country === value
          )
        : [
            {
              country: value,
              availableNumber: 0,
              gomlaPrice: 0,
              customerPrice: 0,
            },
          ];
    setPartCountryDetails(CountryDetails);
  };

  const sendData = async (e) => {
    e.preventDefault();

    let newSpare = theCar?.data?.spareParts?.filter(
      (part) => part?.name !== partName
    );

    let [currentPart] = theCar?.data?.spareParts.filter(
      (part) => part.name === partName
    );

    let oldCountryDetails = [];

    if (currentPart) {
      oldCountryDetails = currentPart?.madeIn?.filter(
        (countryDetails) =>
          countryDetails?.country !== partCountryDetails?.country
      );
    }

    newSpare.push({
      name: partName,
      madeIn: [
        {
          country: partCountryDetails?.country,
          availableNumber: availableNumber,
          gomlaPrice: gomlaPrice,
          customerPrice: customerPrice,
        },
        ...oldCountryDetails,
      ],
    });

    let newData = {
      modelName: theCar?.data?.modelName,
      spareParts: newSpare,
    };

    await setDoc(doc(db, "models", theCar?.id), newData).then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `???? ?????????? ${partName} ${theCar?.data?.modelName} ??????????`,
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(getCarByName(theCar?.data?.modelName));
      document.querySelector(".form2").reset();
    });
  };

  return (
    <>
      <Navbar />
      {user.admin ? (
        <div className="container forms">
          <div className="absolute"></div>
          <div className="format">
            <form
              id="typeCar_nameItem"
              className={"animate__animated " + firstForm}
              style={{ display: styleFirstForm }}
              onSubmit={(e) => {
                firstFormHandler(e);
              }}
            >
              <section id="typeCar">
                <label className="carType">?????? ??????????????</label>
                <select
                  onChange={(e) =>
                    dispatch(getCarByName(e.currentTarget.value))
                  }
                  required
                  name="carType"
                  id="carType"
                >
                  <option value="">?????? ??????????????</option>

                  {allCars?.map((car) => (
                    <option key={car?.id} value={car?.data()?.modelName}>
                      {car?.data()?.modelName}
                    </option>
                  ))}
                </select>
              </section>
              <section id="nameItem">
                <label htmlFor="itemName">?????? ????????????</label>
                <input
                  onChange={(e) => setPartName(e.currentTarget.value)}
                  type="text"
                  id="itemName"
                  placeholder="?????? ????????????"
                  required
                />
              </section>
              <button type="submit">????????????</button>
            </form>

            <form
              id="itemDetails"
              className={"animate__animated " + secondForm + " form2"}
              onSubmit={(e) => {
                sendData(e);
              }}
              style={{ display: styleSecForm }}
            >
              <section>
                <label htmlFor="countryMade">?????? ??????????????</label>
                <select
                  onChange={(e) => getPartByCountry(e.currentTarget.value)}
                  name="countryMade"
                  id="countryMade"
                  required
                >
                  <option value="">?????? ??????????????</option>
                  <option value="????????">????????</option>
                  <option value="??????????????">??????????????</option>
                  <option value="????????">????????</option>
                  <option value="????????">????????</option>
                  <option value="????????????">????????????</option>
                  <option value="????????????">????????????</option>
                  <option value="????????????">????????????</option>
                  <option value="??????????????">??????????????</option>
                  <option value="??????????????">??????????????</option>
                  <option value="????????">????????</option>
                  <option value="??????????">??????????</option>
                  <option value="??????????">??????????</option>
                </select>
              </section>
              <section>
                <label htmlFor="numItem">?????? ????????????</label>
                <input
                  placeholder="?????? ????????????"
                  type="number"
                  id="numItem"
                  min="1"
                  required
                  onChange={(e) =>
                    setAvailableNumber(parseInt(e.currentTarget.value))
                  }
                />
                <h5 className="current-number">
                  {partCountryDetails?.availableNumber}
                </h5>
              </section>

              <section>
                <label htmlFor="priceRaw">?????? ????????????</label>
                <input
                  placeholder="?????? ????????????"
                  type="number"
                  id="priceRaw"
                  required
                  onChange={(e) =>
                    setGomlaPrice(parseInt(e.currentTarget.value))
                  }
                />
                <h5 className="current-number">
                  {partCountryDetails?.gomlaPrice}
                </h5>
              </section>

              <section>
                <label htmlFor="priceFull">?????? ??????????</label>
                <input
                  placeholder="?????? ??????????"
                  type="number"
                  id="priceFull"
                  required
                  onChange={(e) =>
                    setCustomerPrice(parseInt(e.currentTarget.value))
                  }
                />
                <h5 className="current-number">
                  {partCountryDetails?.customerPrice}
                </h5>
              </section>

              <section>
                <button
                  onClick={() => {
                    setSecondForm("animate__backOutLeft");
                    setTimeout(() => {
                      setStyleFirstForm("grid");
                      setFirstForm("animate__backInRight");
                      setStyleSecForm("none");
                    }, 300);
                  }}
                >
                  ????????????
                </button>
                <button type="submit">??????</button>
              </section>
            </form>
          </div>
        </div>
      ) : (
        <div className="container">
          <h1 className="permission">???????? ?????? ???????? ?????? ??????????????</h1>
        </div>
      )}
    </>
  );
};

export default AddProduct;
