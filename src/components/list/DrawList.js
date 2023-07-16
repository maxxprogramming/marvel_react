import list from './list.css'
import React, { useContext } from 'react'

const DrawList = ({database}) => {
console.log(database)
  return (
    <div className='container_list' >
    
    {database && database.data && database.data.results ? (
      database.data.results.map((item) => (
        <div className='container_detailed box box1'> 
        <div className='container_detailed_name' key={item.id}> <h2>  {item.name}  </h2> </div>
       
        <p> <img src={item.thumbnail.path + '.' + item.thumbnail.extension} /></p>
        {item.comics.items.map((itemName) => itemName.name).length > 2 ? ( <p>Comics available: {item.comics.items.map((itemName) => itemName.name).join(',')}</p>) : (<p>No Comics available</p>)}        </div>
      ))
    ) : (
      <p>Loading</p>
    )}
   
  </div>
);
}

export default DrawList
 