import axios from 'axios';
import {useState} from 'react';
import './post_api.css'

export default function GenerateOTP(){
const[mobile, setMobile]=useState('')

function handleChange(e){
    setMobile(e.target.value)
}

  async function handleClick(e){
    e.preventDefault()
    
    if(mobile.length !==10){
        alert("please Enter a Valid number")
    }


    const url="https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP";
    const data={mobile:mobile};
    try {
        const response = await axios.post(url,data,{header: {'Content-type':'application.json'}});
        console.log(response);
    } catch(error){
        console.log("error", error)
    }
    setMobile('')

  }
    return(
        <div className='outer'>
            <input className='input'
            type='number' onChange={handleChange} placeholder="Enter your number"/>
            <button
            className='btn'
            onClick={handleClick}>Generate OTP</button>

       
        </div>
    )
}