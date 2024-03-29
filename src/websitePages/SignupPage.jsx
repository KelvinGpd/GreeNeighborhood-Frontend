import React, { useEffect, useState } from 'react'
import LoginPage from './LoginPage'

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {set, ref, getDatabase, get, child} from "firebase/database"

import { Autocomplete, InputLabel } from "@mui/material";
import { TextField } from "@mui/material";


import axios from 'axios';
import { point } from 'leaflet';



// RETURN LOBJECT
function getUserData(userId){

  const db = ref(getDatabase());
      get(child(db, `users/${userId}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log("oh");
            var bestObj = snapshot.val();
            return bestObj
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
}

function assignPoints(neighborhood, points){
  //Post request vers mon backend
  // nb points, npm du quartier

  axios.post("http://127.0.0.1:5000/post_points",
    {
      "neighborhood": neighborhood,
      "points": points
    }
  )

}


function writeUserData(userId, name, email, neighborhood) {
  const db = getDatabase();
  console.log(neighborhood)
  set(ref(db, "users/" + userId), {
    username: name,
    email: email,
    neighborhood: neighborhood['label'],
  });



}

function createUser(email, password, arrondissement, age, ourApp, setErrorMessage, neighborhood){

    const auth = getAuth(ourApp);



    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log("User created !")

        //TODO, GIVE POINT TO ARRONDISSEMENT
        assignPoints(neighborhood, 1)

    // Signed up 
    const user = userCredential.user;
    writeUserData(user.uid, document.getElementById('signup_username'), email, neighborhood)
    return user.uid
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

function getData(setApiData, setNeighborhood) {

  axios.get("https://greeneighborhood-ca0076fde18e.herokuapp.com/get_data")
  .then((response) => {
    
    var arr = []
    for (const [key, value] of Object.entries(response.data)) {
      if(key != "Montreal" && key != "Montréal") arr.push({"label": key})
    }


    setApiData(<div className="search-box">
          <InputLabel> Select your neighborhood </InputLabel>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={arr}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Neighborhoods" />
            )}
            onChange={(e, value) => setNeighborhood(value)}
          />
      </div>)


  })
  .catch((error) => console.log(error));

  return 0
}





export default function SignupPage(props) {

  const [errorMessage, setErrorMessage] = useState(<label></label>)
  const [neighborhood, setNeighborhood] = useState()
  const [apiData, setApiData] = useState(<></>)


  useEffect(()=>{
    getData(setApiData, setNeighborhood)
  }, [])

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

      <div className="inputBox"> 

      </div> 

      <div className="links">  <a href="#"
        onClick={() => {
            props.setActivePage(<LoginPage setActivePage = {(page) => props.setActivePage(page)}/>)}
        }
        >Go back to login</a> 

      </div> 

      <div className="inputBox"> 

       <input type='submit' placeholder='sign-up' onClick={() => {

        var inputField = document.getElementById('signup_email');
        var inputValue = inputField.value;
        var email = inputValue

        var inputField2 = document.getElementById('signup_password');
        var inputValue2 = inputField2.value;
        console.log("Hello")

        var uid = createUser(email, inputValue2, "Verdun", 10, props.app, setErrorMessage, neighborhood)

       }} />

      </div> 

     </div> 

    </div> 

   </div>
   </div>
   </section> 
  )
}
