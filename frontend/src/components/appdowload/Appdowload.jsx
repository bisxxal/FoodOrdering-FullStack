import React from 'react'
import { assets } from '../../assets/assets'

function Appdowload() {
  return (
    <div className='flex justify-center items-center my-16 lg:my-40 flex-col' id='dowload'>

        <h1 className='lg:text-[50px] text-[30px] text-center'>For Better Exprience Download <br /> <span className='text-[#FF1E1E] leading-none font-semibold'>
          DELICIOUS
          </span> app</h1>
        <div className='flex my-9 items-center justify-center gap-9'>
            <img className=' w-[170px]' src={assets.play_store} alt="" />
            <img className=' w-[170px]' src={assets.app_store} alt="" />
        </div>
        
    </div>
  )
}

export default Appdowload