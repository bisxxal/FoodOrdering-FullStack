import React from 'react'
import { MdAddCircleOutline } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa"; 
import { NavLink } from 'react-router-dom';
function Sidebar() {
  return (
    <div className=' mt-16 p-4 lg:px-16 w-[18%]   rounded-lg  min-h-screen boder-r border-[#ffffff50]'>


     <div className='flex flex-col gap-5 pt-14'>
     <NavLink to='/add' className={`sidebar-option lg:w-[130px] flex gap-4 text-[15px]  hover:bg-zinc-600 items-center bg-zinc-700  px-2 py-2 rounded-lg`} > <FaCartPlus className='text-2xl'/> <p className=' hidden lg:block' >Add items</p></NavLink>
      <NavLink to='/list' className={`sidebar-option lg:w-[130px] flex gap-4 text-[15px] hover:bg-zinc-600 items-center bg-zinc-700  px-2 py-2 rounded-lg`}> <MdAddCircleOutline className='text-2xl'/> <p className=' hidden lg:block' >List items</p></NavLink>
      <NavLink to='/myorders' className={`sidebar-option lg:w-[130px] flex gap-4 text-[15px] hover:bg-zinc-600 items-center bg-zinc-700 px-2 py-2 rounded-lg`}> <FaClipboardList className='text-2xl'/><p className=' hidden lg:block' >Orders</p></NavLink>
     </div>
      
      
    </div>
  )
}

export default Sidebar