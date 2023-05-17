import Styles from './page.module.css';
import {useRef, useState} from "react";
import Button from '../atom/button';

export default function Todo(){
    const [input, setInput] = useState('');
    const [todo, setTodo]= useState([]);
    
    const[completed, setCompleted]=useState([])

   // adding btn functionality
    function handleDelete(index){
       // Get the current todo list
    const todoList = [...todo];

    // start from index nd dlt 1 elm
    todo.splice(index, 1);

    // slice elm starting to index(excluded) then all other elm.
    setTodo([...todo.slice(0, index), ...todo.slice(index + 1)]);
     
    
    }

   
    //adding todo functionality
     function handleChange(e){
       setInput(e.target.value)
     }



     function handleDown(e){
       
           if(e.key ==="Enter"){

            const text= e.target.value;

            setTodo([...todo, {text}])
            setCompleted(prevCompleted => [...prevCompleted, false]);
            setInput("")
           }
            
    }
    function handleComplete(index) {
    
  }


    return(
        <div className={Styles.outerMost}>
        <h1>My ToDo</h1>
        <div className={Styles.outer}>
            
           <ul className={Styles.todolist}>
    
              {
                todo.map( (item, index)=>(
                    <li className={Styles.list} key={index} >
                      <span className={completed[index] ? Styles.completed : null}></span>
                        {item.text}
                        <Button
                        text="complete"
                         btnclass={Styles.done} 
                         clickEvent={() => handleComplete}
                          />
                         
                         <Button
                            text="x"
                            btnclass={Styles.dlt}
                            clickEvent={() => handleDelete(index)}
                             
                        />
                        
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