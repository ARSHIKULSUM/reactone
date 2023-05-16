export default function ButtonNav(props){
    return(
        <>
        <button className={props.btnClass} onClick={props.funcClick}>{props.text}</button>
        </>
    )
}