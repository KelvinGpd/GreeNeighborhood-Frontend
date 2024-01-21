import React from 'react'
import { Checkbox } from '@mui/material'
import Button from '../globalComponents/Button'

export default function MakeCommitements() {
    var label = ["ok"]


    var check1 = false
    var check2 = false
    var check3 = false
    var check4 = false

  return (
    <section className='commitements'>
    <h1>Pick the things that you will do today !</h1>
    <h3>They give your community points</h3>


    <span> Use an alternative to Cars </span><Checkbox {...label} defaultChecked onChange={(e) =>{
        check1 = !check1
    }}/>
    <br></br>
    <span> Lower your electricity consumption (Air Cooler and Heater) </span><Checkbox {...label} defaultChecked color="secondary" 
        onChange={(e) => check2 = !check2}
    />
    <br></br>
    <span> Help clean your streats </span> <Checkbox {...label} defaultChecked color="default" 
    onChange={(e) => check3 = !check3}
    />
    <br></br>
    <span> Plant something ! </span><Checkbox {...label} defaultChecked color="success" 
    onChange={(e) => check4 = !check4}
    />

    <div className='small-button'>
    <Button 
    onClick={() => {}} 
    text={"Submit your commitements"}
    />
    </div>

    <br></br>
    <br></br>

    <h1>Your Stats: </h1>
   </section> 
  )
}
