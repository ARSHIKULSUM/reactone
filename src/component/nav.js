import styles from './nav.module.css'                                                                                             
import {useState, useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import ButtonNav from './btn';



export default function Navbar(){

  //router dom
  const travel=useNavigate();

   const pathbyKey={
     'login':'/login1',
     'register':'/Register1',
     'about':'/About1',
     'home':'/Home1'
   }
  function handleTravel(key){
    const pathtotravel=pathbyKey[key]
     travel(pathtotravel)
  }

 
    
   const navelm=['Home', 'About Us','Services','features','Contact Us']
   

 const[visible, setVisible]=useState(false)
 const menuItemsRef = useRef(null);

  function handleClick(){
 
    const menuItems = menuItemsRef.current;

    if(visible == true){
      setVisible(false);
      menuItems.style.display = 'none';
    }else{
      setVisible(true)
      menuItems.style.display = 'flex';
    }
     
  }

/* nac elm using map
 {
            navelm.map(elements => (
                <button className={styles.navbtn}
                onClick={handleTravel}
                >{elements}</button>
            ))
        } */



     return(
       <>
       <div className={styles.navouter}>
        
        <ButtonNav btnClass={styles.navbtn} text="Login" funcClick={()=>handleTravel('login')}/>
        <ButtonNav btnClass={styles.navbtn} text="Register" funcClick={()=>handleTravel('register')}/>
        <ButtonNav btnClass={styles.navbtn} text="About us" funcClick={()=>handleTravel('about')}/>
        <ButtonNav btnClass={styles.navbtn} text="Home" funcClick={()=>handleTravel('home')}/>
        
        

        
        
       </div>
       <div className={styles.menu}>
        
       <img 
       onClick={handleClick}
       className={styles.menubtn} src='https://cdn-icons-png.flaticon.com/512/660/660376.png'/>
        <div className={styles.navelm} ref={menuItemsRef}>
          
         
        {
            navelm.map(elements => (
                <button >{elements}</button>
            ))
        }

        </div>
     </div>
     </>

     )
}