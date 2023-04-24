import Btn from "./button"

export default function Card({name,para,desg,link}){
    const outerdivstyle={
        color: "black",
        backgroundColor:"aqua",
        height: "450px",
        width: "460px",
        borderRadius: "30px",
        margin: "100px",
        
    }
    const imgst={
        width: "100px",
        height: "100px",
        borderRadius: "100px",
        padding: "40px"
    }
    
    const space={
        paddingLeft: "50px"
    }
    
    return(
        <>
       
       <div style={outerdivstyle}>
        <img style= {imgst} src={link} />
        <h2 style={space}>{desg}</h2>
        <h1 style={space}>{name}</h1>
        <p style={space}>{para}</p>
        <Btn message={name}/>
       </div>
       

       </>
    )
}