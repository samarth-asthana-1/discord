import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          alt=""
          src="https://yt3.ggpht.com/a/AATXAJw1tXvJInOnm44MdEF3kS0b8x-W4Twj27SYvJ9gRw=s900-c-k-c0xffffffff-no-rj-mo"
        />
      </div>
      <Button onClick={signIn}>SignIn</Button>
    </div>
  );
}

export default Login;
