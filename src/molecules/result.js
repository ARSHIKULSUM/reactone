import Button from '../atoms/btn'
import style from './result.module.css'

export default function Result(props){
        let msg="Congrats!!"
        if(props.score <= 12){
            msg= 'try again?'
        }
        /* return(
        <section className={style.result}>
            <h2>Completed!!!</h2>
            <h4>Total Score :{props.score}</h4>
            <div>
                {(msg=="congrats")? "Well Played!" :(<Button text={'Play Again'}/> )}
            </div>
        </section>
    )*/ 
if(msg == "Congrats!!"){
    return(
        <section className={style.result}>
         <h2>WELL DONE!!! you passed the test</h2>
            <h4>Total Score :{props.score}</h4>
        </section>
    )
}else{
    return(
        <section className={style.result}>
        <h4>Total Score :{props.score}</h4>
        <button onClick={props.handleClick}>TRY AGAIN!!</button> 
        </section>
    )
}
   
}