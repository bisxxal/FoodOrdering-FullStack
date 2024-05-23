import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { assets } from '../../assets/assets'

function  MyOrder() {
    const [data , setData] = useState([])
    const {url , token } = useContext(StoreContext)

    const fetchData = async()=>{
        const responce = await axios.post(url+"/api/order/userorders" ,{},{headers:{token}} )
         
        setData(responce.data.data)
    }
    useEffect(()=>{ 
        if(token){
            fetchData()
            
        } 
    }) 
    return (
    <div className='min-h-screen pt-16 lg:px-14 ' >
        <h1 className='text-[30px] pl-4 font-bold'>My Order.</h1>
    <div className='pt-7 order-list '>
            {
                data.map((order,index)=>{
                    return(
                        <div className='w-full px-2 lg:p-4 py-3 text-[12px] mb-3 lg:text-[14px] rounded-xl bg-zinc-800 grid gap-[5px] lg:gap-[30px] ' key={index} style={{gridTemplateColumns:'0.5fr 2fr 1fr 1fr 2fr 1fr ' , alignItems:'start'}}>
                        <img className='w-[30px]' src={assets.parcel_icon} alt="" />
                        
                        <div className='ml-1'>
                        <p className='font-semibold mb-2 text-[tomato] ' >{order.items.map((item,index)=>{
                              if(index === order.items.length -1){
                                return item.name+"  x  "+item.quantity
                                }
                            else{
                                return item.name+" x "+item.quantity+' , '
                            }
                        })
                        }</p>
                         
                        </div>
                        <p>Items: {order.items.length }</p>
                        <p>$ {order.amount}.00</p>
                        <p> &#x2022;  { order.status }</p>

                        <button onClick={fetchData} className=' py-2 text-[12px] bg-red-600 rounded-md' >Track Order</button>
                        </div>
                    )
                })
            }
    </div>
    </div>
  )
}

export default  MyOrder