import Button from '../atoms/btn'
import style from './quiz.module.css'
import Data from  '../atoms/data'
import { useEffect, useState } from 'react'
import Result from '../molecules/result'

export default function Quiz(){

    const[num, setNum]=useState(0)
    const[score, setScore]=useState(0)
    const[btntxt, setBtntxt]=useState('Next Ques')

    const[result, setResult]=useState(false)
    const[time, setTime]=useState(10)



    function questionNum(){
        let nextques= num+1 
        setNum(nextques)  //== setNum(num+1)

        if(nextques== 9){
             setBtntxt('submit')
             
        }else if(nextques==10){
            setResult(true)
        }
        
    }

    function handleCheckAns(isRight){
        if(isRight){
            setScore(score+2)
            setNum(num+1)
        }else{
            alert("Wrong answer!!!!!")
        }
    }


    function handleplayAgain(){
         setNum(0)
         setScore(0)
         setResult(false)
         setTime(10)
    }

    function endquiz(){
        <Result/>
    }

    function timer(){
        if(time==0){
              if(num < 9){
                setNum(9)
              }else{
           questionNum();
              }

        } else{
        setTime(time-1)
        }
    }


    useEffect(()=>{
       const intervalclear=setInterval(timer ,1000);
          
         return ()=>{
            clearInterval(intervalclear)
         } 
    },[timer])



    return(
        
        <main className={style.outer}>
            <header>
           <h1>Quiz</h1>
           <h3>{time} mins left</h3>
           <h4>score:{score}</h4>
           
           </header>

           <div className={style.inner}>
           {result? (<Result score={score} handleClick={handleplayAgain}/>) : (          //passing score usestate as props to result component
        <>
          
          <section className={style.ques}>
           <h3>Question {num+1} of 10</h3>
            <p>{Data[num].ques}</p>
           </section>
           
           <aside  className={style.optn}>
              {Data[num].answer.map((optn,i)=>{
                 return(
                    <>
                     <button className={style.optnbtn}
                     onClick={()=>handleCheckAns(optn.isRight)}
                     key={i}>{optn.ans}</button>
                     </>
                 )
              })}

                <Button 
                handleClick= {questionNum}
                text={btntxt}/>
           </aside>
           </>
           ) }

           </div>
        </main>
    )
}