import React, { useRef } from "react";
import { auth } from "../firebase";
import "./SignInScreen.css";

const SignInScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.massage);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.massage))
  };

  return (
    <div className="signInScreen">
      <h1>Sign In</h1>
      <form className="form">
        <div className="textbox">
          <div className="material-symbols-outlined"> email </div>
          <input ref={emailRef} type="text" className="input__buttom" required />
          <label>Email</label>
        </div>
        <div className="textbox">
          <div className="material-symbols-outlined"> key </div>
          <input ref={passwordRef} type="password" className="input__buttom" required />
          <label>Password</label>
        </div>
        <p>
          New to Netflix?
          <span onClick={register}>Sign Up now.</span>
        </p>

        <button type="submit" className="input__buttom" onClick={signIn}>
          SIGN IN
          <span className="material-symbols-outlined"> arrow_forward </span>
        </button>
      </form>
    </div>
  );
};

export default SignInScreen;
