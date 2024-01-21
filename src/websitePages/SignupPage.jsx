import React from 'react'
import LoginPage from './LoginPage'

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvKsp1U2E5W5OsnVjje4qUNGGSPxb1-Qg",
  authDomain: "even-trainer-411819.firebaseapp.com",
  projectId: "even-trainer-411819",
  storageBucket: "even-trainer-411819.appspot.com",
  messagingSenderId: "270695756520",
  appId: "1:270695756520:web:0e4d975895f9182307cf5d",
  measurementId: "G-K6CCZSE9WC"
};
const app = initializeApp(firebaseConfig);


export default function SignupPage(props) {
  return (
    <section>
    <div className='signin-container'>
    <div className="signin"> 

    <div className="content"> 

     <h2>Sign In</h2> 

     <div className="form"> 

      <div className="inputBox"> 

       <input type="text" required placeholder='Username'/>

      </div> 

      <div className="inputBox"> 

       <input type="password" required placeholder='Password'/>

      </div> 

      <div className="links">  <a href="#"
        onClick={() => {
            props.setActivePage(<LoginPage setActivePage = {(page) => props.setActivePage(page)}/>)}
        }
        >Go back to login</a> 

      </div> 

      <div className="inputBox"> 

       <input type="submit" value="Login" />

      </div> 

     </div> 

    </div> 

   </div>
   </div>
   </section> 
  )
}
