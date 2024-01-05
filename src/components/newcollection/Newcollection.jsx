import React from 'react'
import './newcollection.css'

import new_collection from '../Assets/collection';
import { Item } from '../item/Item';

export const Newcollection = () => {
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className='collections'>
            {new_collection.map((item,index)=>(
              <Item 
              key ={index} id={item.id}
              name={item.name} 
              image ={item.image}
               new_price={item.new_price}
               old_price ={item.old_price}/>
            ))}
        </div>


    </div>
  )
}
