import styles from './home.module.css'


export default function Home(){

    return(
        <div className={styles.home}>
            
            <div className={styles.right}>
                <img
                className={styles.img}
                 src='https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGVzc2VydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'/>
            </div>
            <div className={styles.left}>
                <p>Welcome to dream Confectionaries, We bake with love..............</p>
                <button className={styles.btn}>Explore...</button>
            </div>
        </div>
    )
}