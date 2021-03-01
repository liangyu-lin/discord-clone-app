import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import React from "react";

import "./Login.css";

function Login() {
  const signIn = (e) => {
    //do google login
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <div className='login__logo'>
        <img
          src='https://i1.wp.com/blog.travian.com/wp-content/uploads/2020/05/discord.png?fit=980%2C504&ssl=1'
          alt=''
        />
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
