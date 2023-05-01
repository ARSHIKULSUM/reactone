import {useEffect, useRef} from 'react'

export default function ImageChanger(){

     const myref= useRef(null);


     function handleClick(){
           myref.current.src='https://www.meghnaunni.com/wp-content/uploads/2021/05/northern-lights-painting-meghna-unni.jpg'
     }

    return(
        <>
        <img
        style={{width:'300px'}}
        ref={myref} src='https://m.media-amazon.com/images/I/71e3nY+tiLL._AC_SX466_.jpg'/>
        <br/>
        <button onClick={handleClick} >Click To Change</button>
        </>
    )
}