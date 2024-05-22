import React from 'react'
import { menu_list } from '../../assets/assets'
function ExploreMenu({categorie,setCatrgorie}) {
  return (
    <div className='w-full flex flex-col lg:py-10 py-6  gap-3  border-b-[1px] border-[#ffffff76] '>
        <h1 className='text-[26px] font-semibold'>Explore Our Menu</h1>

        <p className='text-[12px] lg:text-[18px] w-full lg:max-w-[60%] text-[#9b9999]'>Choose from a diverse menu featuring a delectable array of dishes with the finest priceChoose from a diverse menu featuring a delectable array of dishes with the finest price</p>

        <div className='menu-list w-full flex items-center justify-between mt-5 overflow-x-auto'>
            {menu_list.map((item, index)=> <div
            onClick={()=>setCatrgorie(prev => prev === item.menu_name  ? "All":item.menu_name)}
            className=' flex flex-col items-center gap-4 ' key={index}>
                <img className={`rounded-full ${categorie === item.menu_name ?" border-[3px] border-[tomato]   p-[5px] ":''}w-[7.5vw]  overflow-hidden min-w-[80px] cursor-pointer `} src={item.menu_image} alt="" />
                <p className='text-[13px] lg:text-[18px] text-[#747474] cursor-pointer'>{item.menu_name}</p>
              </div> )}
        </div>
    </div>
  )
}

export default ExploreMenu