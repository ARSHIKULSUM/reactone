import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineSearch } from "react-icons/ai";
import styles from './search.module.css'


const AutoMatchingSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [matchedStates, setMatchedStates] = useState([]);
  const [states, setStates] = useState([]);
  

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get(
          'http://cdn-api.co-vin.in/api/v2/admin/location/states'
        );
        setStates(response.data.states);
      } catch (error) {
        console.log('Failed to fetch states from the API.', error);
      }
    };

    fetchStates();
  }, []);

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
    const matchedResults = states.filter((state) =>
    state.state_name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  setMatchedStates(matchedResults);
  };

  return (<>
  
 
    <div className={styles.wrapper}>
   
    <h1 className={styles.text}>Search States</h1> 
     
      <div  className={styles.searchcontainer}>
      <AiOutlineSearch/>
      <input 
        type="text"
        value={searchQuery}
        onChange={handleSearchQueryChange}
        placeholder="Search states..."
      />
      </div>
      {/* <MdOutlineWatchLater/> */}
      <ul className={styles.matchedstates}>
        {matchedStates.map((state) => (
          
          <li className={styles.searchresult}
          key={state.state_id}>{state.state_name}</li>
        ))}
      </ul> 
      </div>
    
    
      
         </>
  );
};

export default AutoMatchingSearch;