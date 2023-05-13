import Styles from './page.module.css';
import {useRef, useState} from "react";
import Button from '../atom/button';

export default function Todo(){
    const [input, setInput] = useState('');
    const [todo, setTodo]= useState([]);

   // adding btn functionality
   //

    const myRef=useRef(null)

    function handleCmplt(){
        const cmp= myRef.current;
         cmp.style.display= 'none';
    }
   
    //adding todo functionality
     function handleChange(e){
       setInput(e.target.value)
     }



     function handleDown(e){
       
           if(e.key ==="Enter"){

            const Item=e.target.value;

            setTodo([...todo, Item])
            setInput("")
           }
            
    }


    return(
        <div className={Styles.outerMost}>
        <h1>My ToDo</h1>
        <div className={Styles.outer}>
            
           <ul className={Styles.todolist}>
    
              {
                todo.map( (elm, index)=>(
                    <li className={Styles.list} key={index} ref={myRef}>
                        {elm}
                        <Button
                        text="complete"
                         btnclass={Styles.done}  onClick={()=>handleCmplt(index)} />
                         
                         <Button
                        text="x"
                         btnclass={Styles.dlt}/>
                        </li>
                ))
              }

            </ul>

            <input onKeyDown={handleDown}
                 onChange={handleChange}   
            type='text' placeholder='add todo' 
            value={input}

            className={Styles.input} />

           
            
        </div>
        </div>
    )
}