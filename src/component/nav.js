import styles from './nav.module.css'
import {useState, useRef} from 'react'



export default function Navbar(){

    const navelm=['Home', 'About Us','Services','features','Contact Us']
   

    const [showMenu, setShowMenu] = useState(false);
  const menuItemsRef = useRef(null);

  function toggleMenu() {
    const menuItems = menuItemsRef.current;
    if (menuItems.style.display === 'none') {
      menuItems.style.display = 'flex';
    } else {
      menuItems.style.display = 'none';
    }
    setShowMenu(!showMenu);
  }




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
       <button onClick={toggleMenu}>menu</button>
        <div className={`$styles['navelm']} ${showMenu ? styles.show : ''}`} ref={menuItemsRef}>
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