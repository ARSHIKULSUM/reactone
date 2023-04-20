import React from 'react';
import logo from './logo.svg';
import './App.css';
import Invitation from './Invitation.js'
import { Fragment } from "react"

function App() {
   
   const sub="Birthday party Invitation"
    const mail= " jaGdish@gmail.com"
    const name= "jagdish"
    const guest1 = "saurav"
    const guest2 = "ritu" 
    const guest3 = "karthik"
    const venue= "green park avenue" 
   
  return (
    <Fragment>

        <Invitation name={name} mail={mail} sub={sub} guest1={guest1} guest2={guest2} guest3={guest3} venue={venue}/>
    
    </Fragment>  
  );
}

export default App;
