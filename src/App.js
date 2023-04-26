import Card from './component/card';
import './App.css';
import React from 'react'

let data = [
  {
    link:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/369579/14/sv01/fnd/IND/fmt/png/RS-X-Reinvention-Unisex-Sneakers",
         brand:"Puma Sneakers",
         product:"Muse X-2 Metallic IMEVA",
         price:"$60",
         rating:"rating-4",
         alertMessage:"‘Product of is  1 , which is Shoes of brand Adidas has of $60 is added in the cart , please proceed to pay !!! "
 },
 {
  link:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/369579/15/sv01/fnd/IND/fmt/png/RS-X-Reinvention-Unisex-Sneakers",
  brand:"Puma Sneakers",
  product:"Glitz-aqua shoe IMKAU",
  price:"$70",
  rating:"rating-5",
  alertMessage:"‘Product of is  2 , which is Shoes of brand Puma has of rupees $70 is added in the cart , please proceed to pay !!! ",
},
{
  link:"https://www.efootwear.eu/media/catalog/product/cache/image/650x650//0/0/0000208869959.jpg",
        brand:"Puma Shoes",
        product:"KEM ULTRA MICRP-001",
        price:"$50",
        rating:"rating-3",
        alertMessage:"‘Product of is  3 , which is Shoes of brand PUMA has of rupees $50 is added in the cart , please proceed to pay !!! "
},


]






function App() {
  return (
    <div className="App">
     <Card data={data} />
    </div>
  );
}


export default App;
