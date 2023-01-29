import React from "react";
import "./login.css";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const checkUser = (e: React.SyntheticEvent) => {
    e.preventDefault();
    /*
    firebase actions
    */
    navigate("/");
  };
  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={(e: React.SyntheticEvent) => checkUser(e)} id="login">
        <h3>سجل دخولك</h3>

        <label htmlFor="username">اسم المستخدم</label>
        <input type="text" id="userName" autoComplete="" required />

        <label htmlFor="password">رقم السر</label>
        <input type="password" id="password" autoComplete="" required />

        <button className="submit" type="submit">
          سجل الآن
        </button>
      </form>
    </>
  );
};

export default Login;
