import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
function Fotter() {
  return (
    <div className="fotter mt-10 bg-[#1d1d1d] flex flex-col items-center gap-5 px-[20px] pt-[80px]" id="fotter">
      <div
        className="fotter-content w-full  grid gap-5 lg:gap-[80px]"
        style={{ gridTemplateColumns: "2fr 1fr 1fr"    }}
      >
        <div className="fotter-left flex gap-4 flex-col"> 
          <h1 className="text-[26px] lg:text-[70px] leading-none  font-extrabold text-[#ff1e1e]">DELICIOUS !!</h1>
        
          <div className="flex lg:px-3 gap-2 lg:gap-6">
          <img className="lg:w-[35px] w-[30px]"src={assets.facebook_icon} alt="" />
          <img className="lg:w-[35px] w-[30px]"src={assets.twitter_icon} alt="" />
          <img className="lg:w-[35px] w-[30px]"src={assets.linkedin_icon} alt="" /></div>
        </div>
        <div className="fotter-centet text-[14px] flex flex-col gap-2">
            <h1 className="lg:text-xl">COMPANY</h1>
          {["home", "menu", "mobile-app", "contact-us"].map((item, index) => (
            <Link className={`   `} key={index}>
              {item}
            </Link>
          ))}
        </div>
        <div className="fotter-right b-3">
          <h1 className="lg:text-xl mb-4">GET IN TOUCH</h1>
          <div className=" text-[14px]">
            <div>+91 23453456345</div>
            <div>contact@gmail.com</div>
          </div>
        </div>
      </div>
      <hr className="border mt-4 w-full border-[#ffffff54]"/>
      <p className="text-[14px] pb-2 text-[#ffffff83]">Copyright 2024 tomato.com - ALl Right Reserved</p>
    </div>
  );
}

export default Fotter;
