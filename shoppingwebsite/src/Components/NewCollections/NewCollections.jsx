import React from 'react';
import new_collection from '../../assets/new_collections';
import Item from '../Item/Item';
import './NewCollections.css';
const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className='collections'>
        {new_collection.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} />
        })}
      </div>
    </div>
  )
}

export default NewCollections
