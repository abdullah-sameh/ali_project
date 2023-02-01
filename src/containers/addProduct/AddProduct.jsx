import React, { useEffect } from "react";
import Navbar from "../../components/navBar/Navbar";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux/es/exports";

import "./addProduct.css";
import { setUser } from "../../rtk/slices/userSlice";
import { useState } from "react";

const AddProduct = () => {
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

  //to get the user
  const user = useSelector((state) => state.user);

  const [firstForm, setFirstForm] = useState("");
  const [secondForm, setSecondForm] = useState("");
  const [styleFirstForm, setStyleFirstForm] = useState("grid");
  const [styleSecForm, setStyleSecForm] = useState("none");

  return (
    <>
      <Navbar />
      {user.admin ? (
        <div className="container forms">
          <div className="absolute">
          </div>
          <div className="format">
            <form
              id="typeCar_nameItem"
              className={"animate__animated " + firstForm}
              style={{ display: styleFirstForm }}
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <section id="typeCar">
                <label className="carType">نوع العربية</label>
                <select name="carType" id="carType">
                  <option value="">نوع العربية</option>
                  <option value="لوجان">لوجان</option>
                  <option value="كليو">كليو</option>
                  <option value="سيمبول">سيمبول</option>
                  <option value="فلونس">فلونس</option>
                  <option value="داستر">داستر</option>
                  <option value="سانديرو">سانديرو</option>
                  <option value="سانديرو استيب واي">سانديرو استيب واي</option>
                  <option value="كادجار">كادجار</option>
                  <option value="كابتشر">كابتشر</option>
                  <option value="اوبتيما">اوبتيما</option>
                  <option value="رينبو">رينبو</option>
                  <option value="سينيك">سينيك</option>
                </select>
              </section>
              <section id="nameItem">
                <label htmlFor="itemName">اسم المنتج</label>
                <input type="text" id="itemName" placeholder="اسم المنتج" />
              </section>
              <button
                type="submit"
                onClick={() => {
                  setFirstForm("animate__backOutRight");
                  setTimeout(() => {
                    setStyleFirstForm("none");
                    setStyleSecForm("grid");
                    setSecondForm("animate__backInLeft");
                  }, 300);
                }}
              >
                التالي
              </button>
            </form>

            <form
              id="itemDetails"
              className={"animate__animated " + secondForm}
              onSubmit={(e) => {
                e.preventDefault();
              }}
              style={{ display: styleSecForm }}
            >
              <section>
                <label htmlFor="countryMade">بلد الصناعة</label>
                <select name="countryMade" id="countryMade">
                  <option value="">بلد الصناعة</option>
                  <option value="مصري">مصري</option>
                  <option value="سوسري">سوسري</option>
                  <option value="تركي">تركي</option>
                  <option value="الماني">الماني</option>
                  <option value="بتنجاني">بتنجاني</option>
                </select>
              </section>

              <section>
                <label htmlFor="numItem">عدد القطعه</label>
                <input
                  placeholder="عدد القطعة"
                  type="number"
                  id="numItem"
                  min="1"
                />
              </section>

              <section>
                <label htmlFor="priceRaw">سعر الجملة</label>
                <input placeholder="سعر الجملة" type="number" id="priceRaw" />
              </section>

              <section>
                <label htmlFor="priceFull">سعر البيع</label>
                <input placeholder="سعر البيع" type="number" id="priceFull" />
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
                  السابق
                </button>
                <button type="submit">أضف</button>
              </section>
            </form>
          </div>
        </div>
      ) : (
        <div className="container">
          <h1 className="permission">عذرا ليس لديك اذن بالوصول</h1>
        </div>
      )}
    </>
  );
};

export default AddProduct;
