import React from 'react'
import { Checkbox } from '@mui/material'

export default function MakeCommitements() {
    var label = ["ok"]
  return (
    <section className='commitements'>
    <h1>Pick the things that you will do today !</h1>
    <h3>They give your community points</h3>


    <span> Use an alternative to Cars </span><Checkbox {...label} defaultChecked />
    <br></br>
    <span> Lower your electricity consumption (Air Cooler and Heater) </span><Checkbox {...label} defaultChecked color="secondary" />
    <br></br>
    <span> Help clean your streats </span> <Checkbox {...label} defaultChecked color="default" />
    <br></br>
    <span> Plant something ! </span><Checkbox {...label} defaultChecked color="success" />
   </section> 
  )
}
