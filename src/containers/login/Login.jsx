import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { setUser } from "../../rtk/slices/userSlice";
import { useDispatch } from "react-redux/es/exports";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (sessionStorage.getItem("user")) {
    //@ts-ignore
    let item = sessionStorage.getItem("user");
    dispatch(setUser(JSON.parse(item)));
  }

  const checkUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCred) => {
        sessionStorage.setItem("user", JSON.stringify(userCred?.user));
        dispatch(setUser(userCred?.user));
        navigate("/home");
      })
      .catch((existError) => {
        console.log(existError);
        Swal.fire({
          icon: "error",
          title: "فشل تسجيل الدخول",
          text: "قد يكون البريد الالكترونى او كلمة السر خطأ حاول مرة أخرى",
        });
      });
  };

  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={(e) => checkUser(e)} id="login">
        <h3>سجل دخولك</h3>

        <label htmlFor="username">اسم المستخدم</label>
        <input
          onChange={(e) => setEmail(e.currentTarget.value.trim())}
          type="text"
          id="userName"
          autoComplete=""
          required
        />

        <label htmlFor="password">رقم السر</label>
        <input
          onChange={(e) => setPassword(e.currentTarget.value.trim())}
          type="password"
          id="password"
          autoComplete=""
          required
        />

        <button className="submit" type="submit">
          سجل الآن
        </button>
      </form>
    </>
  );
};

export default Login;
