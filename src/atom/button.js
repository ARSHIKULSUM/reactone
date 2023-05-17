

export default function Button(props){

    return(
        <>
        <button 
        onClick={props.clickEvent}
        className={props.btnclass}>{props.text}</button>
        </>
    )
}