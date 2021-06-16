import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "../firebase";

export const Login = () => {
  const signIn = (event) => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png"
          alt="Discord Logo"
        ></img>
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
};
