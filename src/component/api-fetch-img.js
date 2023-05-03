import React from 'react'
import {useState,useEffect} from 'react'

export default function Fetchdata(){
  const[image, setImage]=useState('')

useEffect(
 ()=>{
    
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response)=>response.json())
   
   .then(response=>setImage(response.message)
    )
  
  },[])

  return (
    <>
    <img src={image} />
   
    </>
  )

}