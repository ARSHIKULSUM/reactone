import styles from './scroll.module.css'

export default function Scroll(){
  const data=[
    {
        link:'https://images.immediate.co.uk/production/volatile/sites/30/2018/08/mango-fee0d79-e1648560084294.jpg?quality=90&resize=960,872',
        name:'mango',
        des:'kjhgfdsdfghjklm'
    },
    {
        link:'https://images.immediate.co.uk/production/volatile/sites/30/2019/06/kiwi-aedbdbf.jpg',
        name:'kiwi',
        des:'kjhgfdsdfghjklm'
    },
    {
        link:'https://assets.vogue.in/photos/5d676b663242e1000840c8d2/1:1/w_960,c_limit/pineapple.jpg',
        name:'pineapple',
        des:'kjhgfdsdfghjklmnb'
    },
    {
        link:'https://images.indianexpress.com/2021/01/strawberry_1200_getty.jpg?w=414',
        name:'pineapple',
        des:'kjhgfdsdfghjklmn'
    },
    {
        link:'https://upload.wikimedia.org/wikipedia/commons/4/43/Ambersweet_oranges.jpg',
        name:'kiwi',
        des:'kjhgfdsdfghjklm'
    },
    {
        link:'https://post.healthline.com/wp-content/uploads/2020/08/peach-fruit-benefits-732x549-thumbnail.jpg',
        name:'pineapple',
        des:'kjhgfdsdfghjklmnb'
    },
    {
        link:'https://cdn2.stylecraze.com/wp-content/uploads/2013/08/9-Powerful-Reasons-You-Must-Eat-Black-Grapes.jpg',
        name:'pineapple',
        des:'kjhgfdsdfghjklmn'
    }
  ]
    /*
    {
                Array.from(Array(7)).map(elem => (
                   <div className={styles.card}>
                    <div className={styles.flvr}>
                        <img src=''/>
                    </div>
                    <h4></h4>
                    <p></p>
                   </div> 
                ))
            }
    */

    return(
        <>
        <div className={styles.outer}>

            {
                data.map(data=> (
                   <div className={styles.card}>
                    <div className={styles.flvr}>
                        <img className={styles.img} src={data.link}/>
                    </div>
                    <h4 className={styles.name}>{data.name}</h4>
                    <p className={styles.des}>{data.des}</p>
                   </div> 
                ))
            }

        </div>
        </>
    )
}