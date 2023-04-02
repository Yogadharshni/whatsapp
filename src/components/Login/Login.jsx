import React from 'react'
import { Button } from '@mui/material'
import './Login.css'
import { auth, provider } from "../../firebase";
import { useStateValue } from "../ContextApi/StateProvider";
import { actionTypes } from "../ContextApi/reducer";
import { signInWithPopup } from "firebase/auth";



const Login = () => {
  const [state, dispatch] = useStateValue();
console.log(state)
    const signIn = () => {
        signInWithPopup(auth, provider)
          .then((result) => {
            dispatch({
              type: actionTypes.SET_USER,
              user: result.user,
            });
          })
          .catch((err) => {
            alert(err.message);
          });
      };

  return (
    <div className="login">
      <div className="login__container">
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png' 
        alt='logo' width='80px'/>
        <div className="login_text">
           <h1>Sigin to Whatsapp</h1> 
        </div>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  )
}

export default Login
