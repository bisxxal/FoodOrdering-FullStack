import React, { useState } from "react";
import Header from "../../components/Header/Header"; 
import Appdowload from "../../components/appdowload/Appdowload"; 
import { Link } from "react-router-dom";
function Home() { 
  return (
    <div className="w-full p-3 overflow-hidden lg:p-7 lg:px-16 pt-20 ">
      <Header />
      
      <div className="lg:w-[80%]"> 
      <div className="lg:w-1/2 w-[70%] mt-[70px] h-[230px] lg:h-[370px] bg-zinc-800 overflow-hidden transition-all hover:scale-[1.03] rounded-lg">
        <Link to={"/categorie"} className="w-full h-full rounded-lg">
          <img
            className="w-full h-[150px] object-center lg:h-[270px] object-cover"
            src="https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className=" px-2 lg:text-[16px] text-[14px] lg:[16px] lg:px-5  pt-5">
            <h1 className=" font-bold text-[16px] lg:text-[18px] ">Order Online</h1>
            <p>Stay home and order to your doorstep</p>
          </div>
        </Link>
      </div>
 </div>
      <Appdowload />
    </div>
  );
}

export default Home;
