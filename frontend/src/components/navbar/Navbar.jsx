import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { IoIosSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { IoIosLogOut } from "react-icons/io";
import { IoBagHandle } from "react-icons/io5";

function Navbar({setShowlogin}) {
  const navigate = useNavigate()
  const{gettotolCartItem,token, setToken} = useContext(StoreContext)  
    const [menu ,setMenu ] = useState('home')
    const logout = ()=>{
      localStorage.removeItem("token");
      setToken('')
      navigate('/')
    }
  return (
    <div className="w-full text-white flex items-center justify-between h-[60px] px-4 lg:px-8 py-2 fixed backdrop-blur-[7px] z-[10] bg-[#0000004a]">
      
      <div className="logo ">
    <Link to={'/'}> <img src={assets.logo} className="w-[100px] lg:w-[unset] object-cover" alt="" /> </Link>   
      </div>
      <div className="lg:flex h-full items-center gap-7 hidden">

      <Link to={'/'} onClick={()=>setMenu('home')} className={`${menu === 'home' ?" border-b border-white ": ""}`}  >home</Link>
      <a onClick={()=>setMenu('menu')} className={`${menu === 'menu' ?" border-b border-white ": ""}`} href="#menu">menu</a>
      <a onClick={()=>setMenu('mobile-app')} className={`${menu === 'mobile-app' ?" border-b border-white ": ""}`} href="#dowload">mobile-app</a>
      <a onClick={()=>setMenu('contact-us')} className={`${menu === 'contact-us' ?" border-b border-white ": ""}`} href="#fotter">contact-us</a> 
       
      </div>

      <div className="nav-right items-center flex gap-6 lg:gap-10 transition-[0.3s]">
        <IoIosSearch className=" text-2xl" />
        <Link to={'/cart'} className="relative">
            <FaCartShopping className="text-2xl z-[1]" />
            {
              gettotolCartItem() > 0 && (
                <div className="absolute h-4 w-4 rounded-full bg-red-500 top-[-11px] right-[-11px] flex items-center justify-center">
                 
                </div>
              )
            }
          </Link>
          {
            !token ?   <button onClick={()=>setShowlogin(true)} className="px-6 py-2 rounded-3xl border-[1px] hover:text-black hover:bg-[#fff4f2]">Sign in</button>
            :<div className=" relative group">
              <img className="w-[30px]" src={assets.user} alt="" />
              <div className="w-[150px] hidden group-hover:flex top-[30px] px-5 py-5 absolute left-[-90px] rounded-lg backdrop-blur-sm bg-[#0000007c]  flex-col gap-3 h-[100px]">
              
              <div onClick={()=>navigate("/myorders")} className= "  hover:text-[tomato] cursor-pointer flex w-full gap-5 items-center">
                <IoBagHandle className="text-[20px] group-  "/>
                <p>Order</p> 
                </div> 
                <div onClick={logout} className="hover:text-[tomato]  cursor-pointer flex w-full gap-5 items-center">
                 <IoIosLogOut className="text-[20px]   "/>
                  <p >Logout</p>   
                  </div>
             
              </div>
            </div>
          }
      
      </div>
    </div>
  );
}

export default Navbar;
