import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

function Verify() {
    const{url} = useContext(StoreContext)
    const [searchParmas , setSearchParmas] = useSearchParams()
    const success = searchParmas.get("success")
    const orderId = searchParmas.get("orderId")
   const navigate = useNavigate() 
//    console.log(success.toString());
    const verifyPaymennt= async()=>{
        const responce = await axios.post(url+"/api/order/verify",{success,orderId})
        if(responce.data.success){
            navigate("/myorders")
        }
        else{
            navigate('/')
        } 
    } 
    useEffect(()=>{
        verifyPaymennt()
    },[])
  return (
    <div className='min-h-screen grid'>
        <div className="spinner w-[100px] h-[100px] place-self-center border-[3px] rounded-full border-t-[tomato] animate-spin"></div>
    </div>
  )
}

export default Verify