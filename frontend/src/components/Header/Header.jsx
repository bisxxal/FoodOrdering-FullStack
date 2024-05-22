import React from 'react'
import { assets } from '../../assets/assets'
import { motion } from "framer-motion"
function Header() {
  return (
    <div className='lg:h-[34vw] h-[40vh]  relative w-full flex justify-center items-center rounded-lg '>
       <img className=' object-cover object-center rounded-xl w-[100%] h-full ' src="https://images.unsplash.com/photo-1610614819513-58e34989848b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1610614819513-58e34989848b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <motion.div animate={{opacity:1}} transition={{
                ease: "linear",
                duration: 1,
                // x: { duration: 1 }
                }} className='heeder-content opacity-0 bottom-1/ left-7 lg:left-16 absolute'>
            <h2 className=' text-[50px]   font-bold '>Order Your <br /> Favourite Food !!!</h2>
            <p className='lg:text-[20px] text-[17px]  '>Choose from a diverse menu featuring a delectable array of dishes with the finest price</p>
            <button className=' border-[1px] rounded-full text-black font-semibold text-[18px] lg:px-9 px-6 py-3  bg-slate-200 '>View Menu</button>
        </motion.div>
    </div>
  )
}

export default Header