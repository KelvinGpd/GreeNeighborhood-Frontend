import React from 'react'
import SignupPage from './SignupPage'
import HomePage from './HomePage'

export default function LoginPage(props) {
  return (
    <section>
    <div className='signin-container'>
    <div className="signin"> 

    <div className="content"> 

     <h2>Log In</h2> 

     <div className="form"> 

      <div className="inputBox"> 

       <input type="text" required placeholder='Username'/>

      </div> 

      <div className="inputBox"> 

       <input type="password" required placeholder='Password'/>

      </div> 

      <div className="links"> <a href="#" onClick={() => {
            props.setActivePage(<HomePage setActivePage = {(page) => props.setActivePage(page)}/>)}
        }>Go back to homepage</a> 
        <a 
        onClick={() => props.setActivePage(<SignupPage setActivePage = {(page) => props.setActivePage(page)}/>)}
        href="#">Signup</a> 

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
