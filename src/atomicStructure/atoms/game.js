import React, { useState } from 'react'
import './game.css'

export default function Game(){
   
    const[num, setNum]=useState()

    const[count, setCount]=useState(0)

    


    function change(e){
        
       setNum(e.target.value)
    }
 
    const coin =6;

   function check(){
      
    setCount(count+1)

    if(num>coin){
        alert('guess a smaller number!')
        return
    }  
    if(num<coin){
        alert('guess a larger number!')
        return
    }
    
    if(num== coin){
        alert(`YOU GUESSED IT RIGHT !! in ${count+1} clicks`)

    }


    

    
   }

   
   
   return(
    
    <>
    <h4>Guess the Number</h4>
    <div className='out'>
    <input type='number' onChange={change} placeholder='Enter the number' className='space'/>
    <button  id='btn' onClick={check}  > Check</button>
    </div>
    </>
   
    )
}