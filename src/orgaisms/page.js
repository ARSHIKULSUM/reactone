import Styles from './page.module.css';
import {useRef, useState} from "react";
import Button from '../atom/button';

export default function Todo(){
    const [input, setInput] = useState('');
    const [todo, setTodo]= useState([]);
    
    const[completed, setCompleted]=useState([])

   // adding btn functionality
   /*


    function handleDelete(index){
      const filteredTodo= todo.filter((item, i)=> i !== index)
      setTodo(filteredTodo);
    }*/
    function handleDelete(index){
     
      const filteredTodo= todo.filter((item, i)=> i !== index)
      setTodo(filteredTodo);
      setCompleted(prevCompleted => {
        const newCompleted = [...prevCompleted];
        newCompleted.splice(index, 1);
        return newCompleted;
      });
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
      
      setCompleted(prevCompleted => {
          const newCompleted = [...prevCompleted];
          newCompleted[index] = true;
          return newCompleted;
      });
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
                         onClick={() => handleComplete(index)}
                          />
                         
                         <Button
                            text="x"
                            btnclass={Styles.dlt}
                             onClick={() => handleDelete(index)}
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