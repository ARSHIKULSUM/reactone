import {useRef} from 'react'


export default function FilePick(){
    const myref=useRef(null)


    function handleClick(){
       myref.current.click();
    }

    return(
        <>
        <input ref={myref} type='file'/>
        <button onClick={handleClick}>Click to pick</button>
        </>
    )
}