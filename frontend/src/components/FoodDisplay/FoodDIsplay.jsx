import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

function FoodDIsplay( {categorie}) {
    const {food_list } = useContext(StoreContext) 
    
  return (
    <div className='food-display mt-10' id='display'>
    <h1 className='text-[26px] font-semibold'>Top Dishes Near You</h1>

        <div className='food-display gap-[30px] row-gap-[50px] '  style={{ display:'grid', gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}>
            {food_list.map((item,index)=>{
            
            
            if(categorie === 'All' || categorie === item.category){
              
              return <FoodItem key={index} id={item._id} description ={item.description} price={item.price} name={item.name} image= {item.image}/>
            }  
          })
        } 
        </div>
    </div>
   )
  
}

export default FoodDIsplay