import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import {  useNavigate } from 'react-router-dom'

function Cart() {
  const  {
    food_list,removeToCart,cartItems,gettotolCartItem,url ,dis , setDis,discount} = useContext(StoreContext)
  const navigate = useNavigate() 
  return (
    <div>
      <div className='pt-24 cart-item px-7 lg:px-14'>
        <div className='tittle grid mb-7'style={{gridTemplateColumns:"1fr 1.5fr 1fr 1fr 1fr 0.5fr"}}>
          <p>Item</p>
          <p>Tittle</p>
          <p>Price</p>
          <p>Quatitiy</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        
        {
          food_list.map((item, index)=>{
              if(cartItems[item._id] >0){
                return(
                  <div className='grid  justify-between bg-zinc-800 px-3 rounded-lg mb-2 py-3' style={{gridTemplateColumns:"1fr 1.5fr 1fr 1fr 1fr 0.5fr"}}>
                    <img className='w-[50px] rounded-lg' src={url+'/images/'+item.image} alt="" />
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>$ {item.price * cartItems[item._id]}</p>
                    <p className=' cursor-pointer text-[20px] font-semibold' onClick={()=> removeToCart(item._id)}>X</p>
                    
                  </div>
                )
              }
          })
        }
      </div>
      <div className='cart-bottom mt-[80px] w-full flex lg:flex-row flex-col-reverse lg:justify-between gap-6 px-7 lg:px-14'>
        <div className='cart-total lg:w-1/2'>
          <h2 className='text-[25px] font-bold'>Cart Total</h2>
          <div className='  '>
            <div className="totaldetails flex justify-between pr-5 border-[#ffffff52] border-b py-2"> <p>Subtotal</p><p>$ {gettotolCartItem() > 0 ? gettotolCartItem() : '0'}</p>
</div>
            <div className="totaldetails flex justify-between pr-5 border-[#ffffff52] border-b py-2"><p> Delivery Fee</p> <p>$ {gettotolCartItem() > 0 ? "3" : '0'}</p>
 </div>
            <div className="totaldetails flex justify-between pr-5 font-bold mt-4"><p>Total</p> $ {discount()}</div>
            {/* <div className="totaldetails flex justify-between pr-5 font-bold mt-4"><p>Total</p> $ {gettotolCartItem() > 0 ? gettotolCartItem()+3 : '0'}</div> */}
          </div>
          <button onClick={()=> navigate('/order')} className='px-5 py-3 mt-9 font-semibold text-[13px] bg-[#FF1E1E] rounded-full'>PROCEED TO  CHEAKOUT</button>
        </div>

        <div className="cart-promocode w-full lg:w-1/4 lg:mb-0 mb-7">
          <div>
            <p>If You have a promo code , Enter it here</p>
            <dir  className="border flex justify-between w-[90%] rounded-lg overflow-hidden mt-4 border-[#ffffff65]">
            <input onChange={(e)=>setDis(e.target.value)} className='px-2  rounded py-1 outline-none bg-transparent  ' type="text" placeholder='Enter Promocode'/>
            <button onClick={()=>discount()} className='px-5 py-2  font-semibold text-[13px] bg-[#FF1E1E] '>Sumbit</button>
       
            </dir>

                  <p className='mt-8'>Use this PromoCode to get 20% discount</p>
            <div className='font-bold text-xl mt-2 h-14 w-[90%] flex items-center justify-center rounded-lg border border-dashed  '>
                   <span>NEW20</span>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Cart