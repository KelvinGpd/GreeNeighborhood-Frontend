import React, { useEffect } from 'react'
import SignupPage from './SignupPage'
import HomePage from './HomePage'

import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { useState} from 'react';

function  signin(setUser, setPage, email, password, ourApp, setErrorMessage){


  const auth = getAuth(ourApp);
  console.log(auth)
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    console.log(errorCode)
    setErrorMessage(<p className='error-message'>{errorMessage}</p>)
  });
}

export default function LoginPage(props) {

  const [errorMessage, setErrorMessage] = useState(<label></label>)

  return (
    <section>
    <div className='signin-container'>
    <div className="signin"> 

    <div className="content"> 

     <h2>Log In</h2> 
    {errorMessage}
     <div className="form"> 

      <div className="inputBox"> 

       <input type="text" id="Username" required placeholder='Username'/>

      </div> 

      <div className="inputBox"> 

       <input id="Password" type="password" required placeholder='Password'/>

      </div> 

      <div className="links"> <a href="#" onClick={() => {
            props.setActivePage(<HomePage setActivePage = {(page) => props.setActivePage(page)}/>)}
        }>Go back to homepage</a> 
        <a 
        onClick={() => props.setActivePage(<SignupPage app={props.app} setActivePage = {(page) => props.setActivePage(page)}/>)}
        href="#">Signup</a> 

      </div> 

      <div className="inputBox"> 

       <input type="submit" value="Login" onClick={() =>
      {
        var inputField = document.getElementById('Username');
        var inputValue = inputField.value;
        var email = inputValue

        var inputField = document.getElementById('Password');
        var inputValue = inputField.value;
        
        signin(props.setUser, props.setActivePage, email, inputValue, props.app, setErrorMessage)

      }}/>

      </div> 

     </div> 

    </div> 

   </div>
   </div>
   </section> 
  )
}
