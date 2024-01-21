import React, { useState } from 'react'
import Button from '../../globalComponents/Button'
import MakeCommitements from '../MakeCommitements'
import { getAuth } from 'firebase/auth'
import LoginPage from '../LoginPage'
import { ref, child, get, getDatabase} from 'firebase/database'

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

export default function MapRight(props) {

    const [bigUi, setBigUi] = useState(false)
    const [arrondissement, setArrondissement] = useState("")

  return (
    <div className='map-right'>

    

    { bigUi ? 
    <MakeCommitements setBigUi={(ui) => setBigUi(ui)}/>
    : 
    <><h1>Neighborhood Info</h1>

<Button onClick={() => {
    var auth = getAuth()
    if(auth.currentUser){
        var obj = getUserData(auth.currentUser.uid)
        console.log(obj)
    }
    else{
        props.setActivePage(<LoginPage setActivePage = {(page) => props.setActivePage(page)}/>)
    }
    setBigUi(true)
}}/>
</> 
}

    </div>
  )
}
