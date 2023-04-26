import './card.css'
import React from 'react'


const Card = ({data}) => {

    const allCards= () => {
        return data.map((item,index)=>{
            return(
                (
                    <div key={index} className='out'>
                        <img id="img" src={item.link}/>
                        <h4 className='item'>{item.brand}</h4>
                        <p className='item'>{item.product}</p>
                        <h2 className='item'>{item.price}</h2>
                        <p className='item'>{item.rating}</p>
                        <div id='footer' onClick={()=>alert(item.alertMessage)
                        }>ADD TO CART</div>
                    </div>
                )
            )
        })
    }

    return(
        <div className='list'> 
      {allCards()}
    </div>
    )
}

export default Card