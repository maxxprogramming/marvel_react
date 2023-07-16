import React from 'react'
import { useEffect, useContext , useState } from 'react';
import axios from 'axios'
import { LoginContext } from '../../Contexts/LoginContext';

function DataApi() {
   const { setDataBase } = useContext(LoginContext)

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://gateway.marvel.com/v1/public/characters?ts=1000&apikey=b819d866c81b5bd4e0cc05f9a943dba5&hash=d2920bc5270a5ef5760c5a3b1ce3e506');
          setDataBase(response.data);
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
    
  return (
    <div>
      
    </div>
  )
}

export default DataApi
