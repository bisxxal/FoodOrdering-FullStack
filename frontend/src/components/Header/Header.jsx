import React from 'react'
import { assets } from '../../assets/assets'
import { motion } from "framer-motion"
function Header() {
  return (
    <div className='lg:h-[38vw] h-[40vh] lg:pt-10 relative w-full flex justify-center items-center rounded-lg '>
       <img className=' object-cover  rounded-xl w-[100%] h-full ' src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <motion.div animate={{opacity:1}} transition={{
                ease: "linear",
                duration: 0.7, 
                }} className='heeder-content opacity-0 bottom-1/ left-7 lg:left-16 absolute'>
            <h2 className='text-[30px] lg:text-[50px] font-bold '>Order Your <br /> <span className='text-[#FF1E1E]'>Delicious</span> Food !!!</h2>
            <p className='lg:text-[20px] text-[17px] text-[#ffffff9f] '>"Craving something delicious? Dive into our menu and let your taste buds embark on a flavorful adventure!"</p>
            <button className=' border-[1px  rounded-full   font-semibold mt-3 lg:text-[18px] lg:px-9 px-4 py-1 lg:py-3 backdrop-blur-[3px]  bg-[#ffffff42] '>View Menu</button>
        </motion.div>
    </div>
  )
}

export default Header