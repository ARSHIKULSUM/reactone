export default function Btn({message}){
    return(
        <button style={{ marginLeft: "50px", borderRadius:"20px"}}onClick={()=>alert(message)}>
             See more..
        </button>
    )
}