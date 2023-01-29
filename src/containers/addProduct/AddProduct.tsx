import React from "react";
import Navbar from "../../components/navBar/Navbar";
import "./addProduct.css";

const AddProduct = () => {
  return (
    <>
      <Navbar />
      <div className="container form">
        <form id="addNewItem">
          <h3>أضف عنصر جديد</h3>

          <section>
            <label htmlFor="itemName">اسم المنتج</label>
            <input placeholder="اسم المنتج" type="text" id="itemName" />
          </section>
          <section>
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
          <button type="submit">أضف</button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
