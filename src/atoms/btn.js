import style from './btn.module.css'

 
export default function Button(props){
    return(
        <>
        <button
        onClick={props.handleClick}
        className={style.btn}>{props.text}</button>
        </>
    )
}