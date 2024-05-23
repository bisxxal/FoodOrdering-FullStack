import { CiCirclePlus } from "react-icons/ci";
import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { motion } from "framer-motion"
import { StoreContext } from "../../context/StoreContext";
function FoodItem({id ,description,price ,name,  image,}) {
    
    const {addToCart,url,food_list,removeToCart,cartItems} = useContext(StoreContext)
 
  return (
    <motion.div animate={{opacity:1}} transition={{
        ease: "linear",
        duration: 1.5,
        }} className='shadowbox food-item mt-[30px] bg-red-30 bg-zinc-80 overflow-hidden  w-full opacity-0 rounded-2xl '>
     
       <div className=' relative'>
            <img className='' src={url+'/images/'+image} alt="" />
            {
                !cartItems[id] ?
                    <CiCirclePlus className="absolute w-12 bg-[#000000b3] rounded-full bottom-[15px] right-[15px] text-[45px] text-white" onClick={()=> addToCart(id)} />
        
                : <div className='food-item-counter flex bg-[#000000b3] items-center gap-3 absolute  rounded-full bottom-[15px] p-1 justify-center right-[15px]'>
                    <img onClick={()=> removeToCart(id)}  src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=> addToCart(id)}  src={assets.add_icon_green} alt="" />
                </div>
            }
        </div> 
        
         <div className='px-4 mt-3 justify-evenly flex flex-col'>
        <div className='info flex justify-between'>
            <p className='text-[20px] font-semibold'>{name}</p>
            <img className='w-[90px] h-5' src={assets.rating_starts} alt="" />
        </div>
      <div> 
         <p className='text-[13px] mt-3 text-[#ffffff98]'>{description}</p>
        <p className='text-[25px] mt-3 font-bold text-[#FF1E1E] '>${price}</p></div>
       </div>
    </motion.div>
  )
}

export default FoodItem