import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import {  useNavigate } from 'react-router-dom'
import axios from 'axios'


function PlaceOrder() {
  const navigate = useNavigate()
 const{ food_list,removeToCart,cartItems,gettotolCartItem,url,token ,discount} = useContext(StoreContext)
 const [data , setData] = useState({
  firstname:'',lastname:'', email:'',city:'',street:'',state:'',zipcode:'',country:'',phone:''
 })
 const onChangeHander=(e)=>{
    const name = e.target.name
    const value = e.target.value 
    setData(data=>({...data,[name]:value}))
 }
const placeOrder = async (e)=>{
  e.preventDefault();
  let orderItems = [];
  food_list.map((item)=>{
    if(cartItems[item._id]>0){
      let itemInfo = item;
      itemInfo["quantity"] = cartItems[item._id]
      orderItems.push(itemInfo)
    }
  })
 let orderData={
  address:data,
  items:orderItems,
  amount:gettotolCartItem()+3
 }
 let responce = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
 if(responce.data.success){
  const {session_url} = responce.data
  window.location.replace(session_url);

 }
 else{
  alert('error')
 }
}
useEffect(()=>{
  if(!token){
    navigate("/cart")
  
  }
  if(gettotolCartItem() === 0 ){
  navigate("/cart")
  }
},[token])
  return (
    <div className='pt-16 min-h-screen   w-full '>
      <form onSubmit={placeOrder} className='flex w-full h-screen flex-col lg:flex-row justify-between'>
        <div className='place-order-left flex flex-col lg:justify-center items-center w-full lg:w-1/2'>
          <p className='text-[24px] font-bold mb-5'>Delivery Information</p>
          <div className='multi-filds w-full lg:justify-center items-center flex flex-col lg:flex-row mb-5 gap-5'>
            <input required onChange={onChangeHander}   value={data.firstname} name='firstname' className='w-[80%] lg:w-1/3  bg-transparent outline-none border border-[#ffffff53] rounded-lg px-3  py-2' type="text" placeholder='FistName' />
            <input required onChange={onChangeHander}   value={data.lastname} name='lastname' className='w-[80%] lg:w-1/4 bg-transparent outline-none border border-[#ffffff53] rounded-lg px-3  py-2' type="text" placeholder='Last Name' />
          </div>
          <input required onChange={onChangeHander} value={data.email} name='email' className='w-[80%] lg:w-[60%] bg-transparent outline-none border border-[#ffffff53] rounded-lg px-3  py-2' type="email" placeholder='email adress' />
         <br />
          <input required onChange={onChangeHander}  value={data.street} name='street' className='w-[80%] lg:w-[60%] bg-transparent outline-none border border-[#ffffff53] rounded-lg px-3  py-2' type="text" placeholder='Street' />

          <div className='multi-filds lg:justify-center w-full items-center mt-4 flex flex-col lg:flex-row gap-5 mb-5'>
            <input required onChange={onChangeHander}  value={data.city} name='city' className='w-[80%] lg:w-1/3 bg-transparent outline-none border border-[#ffffff53] rounded-lg px-3  py-2' type="text" placeholder='City' />
            <input required onChange={onChangeHander}  value={data.state} name='state' className='w-[80%] lg:w-1/4 bg-transparent outline-none border border-[#ffffff53] rounded-lg px-3  py-2' type="text" placeholder='State' />
          </div>
          <div className='multi-filds w-full lg:justify-center items-center flex flex-col lg:flex-row gap-5 mb-5'>
            <input required onChange={onChangeHander}  value={data.zipcode} name='zipcode' className='w-[80%] lg:w-1/3 bg-transparent outline-none border border-[#ffffff53] rounded-lg px-3  py-2' type="number" placeholder='Zip code' />
            <input required onChange={onChangeHander}  value={data.country} name='country' className='w-[80%] lg:w-1/4 bg-transparent outline-none border border-[#ffffff53] rounded-lg px-3  py-2' type="text" placeholder='Country' />
          </div>
          <input required  onChange={onChangeHander}  value={data.phone} name='phone'className=' w-[80%] lg:w-[60%] bg-transparent outline-none border border-[#ffffff53] rounded-lg px-3  py-2' type="number" placeholder='Phone' />
        </div>


        <div className='place-order-right w-full lg:w-1/2  flex justify-center items-center  '>

        <div className='cart-total w-full lg:w-1/2 px-10 py-10 lg:py-20 rounded-xl bg-[#0000003b]'>
          <h2 className='text-[25px] font-bold'>Cart Total</h2>
          <div className='  '>
            <div className="totaldetails flex justify-between pr-5 border-[#ffffff52] border-b py-2"> <p>Subtotal</p><p>$ {gettotolCartItem() > 0 ? gettotolCartItem() : '0'}</p>
</div>
            <div className="totaldetails flex justify-between pr-5 border-[#ffffff52] border-b py-2"><p> Delivery Fee</p> <p>$ {gettotolCartItem() > 0 ? "3" : '0'}</p>
 </div>
            <div className="totaldetails flex justify-between pr-5 font-bold mt-4"><p>Total</p> $ {discount()}</div>
          </div>
          <button  type='sumbit' className='px-5 py-3 mt-9 font-semibold text-[13px] bg-[tomato] rounded-full'>PROCEED TO  PAYMENT</button>
        </div>
       
      </div>
      </form>
    </div>
  )
}

export default PlaceOrder