import React from 'react'
import {assets} from '../../assets/assets'
function Navbar() {
  return (
    <div className='w-full text-white flex items-center justify-between h-16 px-4 lg:px-16 py-2 fixed backdrop-blur-[7px] z-[10] bg-[#0000004a]'>
        <img src={assets.logo} alt="" />
        <img className='w-10' src={assets.user} alt="" />
    </div>
  )
}

export default Navbar