import React, { useState } from 'react'
import LoginPage from './LoginPage'

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function createUser(email, password, arrondissement, age, ourApp, setErrorMessage){

    const auth = getAuth(ourApp);

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log("User created !")

        //TODO, GIVE POINT TO ARRONDISSEMENT

    // Signed up 
    const user = userCredential.user;
    // ...
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    setErrorMessage(<p className='error-message'>{errorMessage}</p>)
    // ..
    });

}






export default function SignupPage(props) {

  const [errorMessage, setErrorMessage] = useState(<label></label>)

  return (
    <section>
    <div className='signin-container'>  
    <div className="signin"> 
    <div className="content"> 
     <h2>Sign In</h2> 
     {errorMessage}
     <div className="form"> 

      <div className="inputBox"> 

       <input id="signup_username" type="text" required placeholder='Username'/>

      </div> 

      <div className="inputBox"> 

       <input id="signup_email" type="text" required placeholder='Email'/>

      </div> 

      <div className="inputBox"> 

       <input id="signup_password" type="password" required placeholder='Password'/>

      </div> 

      <div className="links">  <a href="#"
        onClick={() => {
            props.setActivePage(<LoginPage setActivePage = {(page) => props.setActivePage(page)}/>)}
        }
        >Go back to login</a> 

      </div> 

      <div className="inputBox"> 

       <input type='submit' placeholder='sign-up' onClick={() => {

        var inputField = document.getElementById('signup_username');
        var inputValue = inputField.value;
        var email = inputValue

        var inputField2 = document.getElementById('signup_password');
        var inputValue2 = inputField2.value;
        console.log("Hello")

        createUser(email, inputValue2, "Verdun", 10, props.app, setErrorMessage)

       }} />

      </div> 

     </div> 

    </div> 

   </div>
   </div>
   </section> 
  )
}
