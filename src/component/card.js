import React,{useState} from'react';
import './card.css'

export default function Card() {

    const [Data, setData] = useState([])

    async function UserInfo() {
        try {

            const data = await fetch(' https://reqres.in/api/users/')
            const UpdatedData = await data.json();
            setData(UpdatedData.data);

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='outer'>
            <button className='btn' onClick={UserInfo}>Get user</button>
            <div className='inner'>
            {Data.map((item)=>(
                <div className='card' key={item.id}>
                <img src={item.avatar} /> 
                <p>id : {item.id}</p>
                <h3>name : {item.first_name} {item.last_name}</h3><br />
                <p>email : {item.email}</p>
            </div>
            ) )}  
        </div>
        </div>
    )
}