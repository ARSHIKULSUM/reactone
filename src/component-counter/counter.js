import {useState} from 'react'
        //counter
export  function Count(event){
   
    const[num, setNum]=useState(0);

    const[name, setName] =useState('***');
    const[val, setVal] =useState('')

    function handleChange(e) {
        setVal(e.target.value);
 }
    
    function handleClick(e){
      setName(val)
      setVal('');
    }
  



    return(
        <>
       <h4>Counter</h4>
       <div style={{border:"1px solid black",
       width:"300px",
       height:"300px",
       background: "pink",
       margin: "100px",
       paddingTop:"100px",
       marginLeft:"600px"
       
    }}> 
        
        <button onClick={()=>(setNum(num+1))
        }>INCREASE</button>

        <h1>{num}</h1>

        <button onClick={()=>(num>0)?(setNum(num-1)):(setNum(num))}>DECREASE</button>
        </div>



            <h4>Name Changer</h4>
        

           
            <input  placeholder='Add Your Name'  onChange={handleChange}  style={{width: "400px", height:"30px"}}/>
            <button  onClick={handleClick}
            style={{width: "80px", height:"30px", background:"pink"}}
            >
                Click Here</button>
            <h2>Hi my name is {name}</h2>
            </>
        )
    }
