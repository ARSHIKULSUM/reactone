import React from "react"
import { Fragment } from "react"

export default function Invitation(props){
    return(
    <Fragment>
    <p>Subject : {props.sub} </p>
    <p> To : {props.mail}</p>
    <p>  Hi , {props.name} </p>     
    <p> I am having a {props.event} next Friday at my Home .
        Would you like to come ? It will be fun . 
       Lots of people from my school are coming .
       you know some of them - {props.guest1},{props.guest2},{props.guest3}  .
    </p>
    <p>
    My house is behind our school , near {props.venue} .</p>
    <p>I hope you will come and see you soon .</p>
    <p> from ,
     <p>{props.name}</p>
</p>
    </Fragment>
    )
}

