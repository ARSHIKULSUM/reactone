
import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios';

export default function Fetchdata() {
  const [image, setImage] = useState('');

  useEffect(() => {
    const response=axios.get('https://dog.ceo/api/breeds/image/random')
     .then(response => setImage(response.data.message))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <img src={image} />
    </>
  );
}