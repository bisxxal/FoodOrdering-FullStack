import React, { useContext, useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import axios from 'axios'
import { StoreContext } from '../../context/StoreContext';
function LoginPopup({setShowlogin}) {
  const{url, setToken} = useContext(StoreContext)
  const [currState , setCurrState] =useState("Login")
  const [data  , setData] = useState({
    name:'',
    password:"",
    email:'',
  })

  const onChangeHandeler = (e)=>{
    const name =e.target.name
    const value =e.target.value
    setData(data=>({...data,[name]:value}))

  }
  const onLogin  = async(e)=>{
    e.preventDefault();

    let newUrl = url;
    if(currState === 'Login'){
      newUrl += `/api/user/login`
    }
    else {
      newUrl += `/api/user/register`
    }
    const responce  = await axios.post(newUrl , data)
    if(responce.data.success){ 
      setToken(responce.data.token)
      localStorage.setItem("token",responce.data.token)
      setShowlogin(false)
    }
    else{ 
      alert(responce.data.message)
    }
  } 
    return (
    <div className='text-white  absolute z-[11] w-full h-full bg-[#0000007f] flex-col flex items-center justify-center  '>
        <form onSubmit={onLogin} className=' backdrop-blur-[3px] bg-[#0000007f] w-[400px] rounded-lg gap-4 py-6 px-3 flex-col flex items-center justify-center '>
            <div className='w-full flex  justify-center relative'>
                <h2 className='text-bold text-3xl'>{currState}</h2>
                    <RxCross1 onClick={()=> setShowlogin(false)} className=' absolute right-6 text-white text-[30px]' />
            </div>
            <div className='inputs flex flex-col gap-3'>
                {currState === 'Login' ? <></> : <input onChange={onChangeHandeler} name='name' value={data.name} className='px-2 rounded py-1 outline-none bg-transparent border border-[#ffffff65]' type="text" placeholder='Enter Your name'/>}
               
                <input onChange={onChangeHandeler} name='email' value={data.email} className='px-2 rounded py-1 outline-none bg-transparent border border-[#ffffff65]' type="email" placeholder='email'/>
                <input onChange={onChangeHandeler} name='password' value={data.password} className='px-2 rounded py-1 outline-none bg-transparent border border-[#ffffff65]' type="password" placeholder='password'/>
            </div>
            <button type='sumbit' className=' bg-[#ff6347cb]   font-bold px-7 py-2 rounded-full '>{currState === 'Sign UP'?'Create account' :'Login' }</button>
            <div className='condition flex w-full gap-3 text-[13px] items-center'>
              <input className='' type="checkbox" required />
              <p>By continuing , i agree to oothe terms of use & privacy policy </p>
                  </div>
             {currState === "Login"

             ? <p className='text-[17px]  text-center '>Create a new  account ? <Link className=' text-blue-500' onClick={()=> setCurrState("Sign UP")}>Click here</Link> </p>
             : <p className='text-[17px]  text-center '>Already have an account ? <Link  className=' text-blue-500'onClick={()=> setCurrState("Login")}>Click here</Link> </p>
             }
          
           
        </form>
    </div>
  )
}

export default LoginPopup