import './cards.css'

export default function MainCard({link,brand,product,price,rating,alertMessage}){
    

    return(
        <>
        <div id="environment">
        <div className="out">
            <img id="img" src={link}/>
            <div id="des">
            <h4 className='item'>{brand}</h4>
            <p className='item'>{product}</p>
            <h2 className='item'>{price}</h2>
            <p className='item'>{rating}</p>
            <div id='footer' onClick={()=>alert(alertMessage)
            }>ADD TO CART</div>
            </div>
            
        </div>
        </div>
        </>
    )
}