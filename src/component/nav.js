import styles from './nav.module.css'                                                                                             
import {useState, useRef} from 'react'



export default function Navbar(){

 
    
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

  /*
  if(visible){
   
    menuItems.style.display = 'none';
    
  }else{
    menuItems.style.display = 'flex';
  }

  function toggleMenu() {
    const menuItems = menuItemsRef.current;
    if (menuItems.style.display === 'none') {
      menuItems.style.display = 'flex';
    } else {
      menuItems.style.display = 'none';
    }
    setShowMenu(!showMenu);
  }*/




     return(
       <>
       <div className={styles.navouter}>
        {
            navelm.map(elements => (
                <p>{elements}</p>
            ))
        }

        
        
       </div>
       <div className={styles.menu}>
        
       <img 
       onClick={handleClick}
       className={styles.menubtn} src='https://cdn-icons-png.flaticon.com/512/660/660376.png'/>
        <div className={styles.navelm} ref={menuItemsRef}>
         
        {
            navelm.map(elements => (
                <p>{elements}</p>
            ))
        }

        </div>
     </div>
     </>

     )
}