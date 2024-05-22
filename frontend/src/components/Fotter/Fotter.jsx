import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
function Fotter() {
  return (
    <div className="fotter mt-10 bg-[#323232] flex flex-col items-center gap-5 px-[20px] pt-[80px]" id="fotter">
      <div
        className="fotter-content w-full  grid gap-5 lg:gap-[80px]"
        style={{ gridTemplateColumns: "2fr 1fr 1fr"    }}
      >
        <div className="fotter-left flex gap-4 flex-col">
          <img className="w-[300px]" src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            sequi amet necessitatibus natus quod itaque asperiores reprehenderit
            ad obcaecati, suscipit perspiciatis nihil consequatur, praesentium
            nam vitae nisi? Inventore, eligendi vero!
          </p>
          <div className="flex gap-6"><img className="w-[40px]"src={assets.facebook_icon} alt="" />
          <img className="w-[40px]"src={assets.twitter_icon} alt="" />
          <img className="w-[40px]"src={assets.linkedin_icon} alt="" /></div>
        </div>
        <div className="fotter-centet flex flex-col gap-3">
            <h1 className="text-2xl">COMPANY</h1>
          {["home", "menu", "mobile-app", "contact-us"].map((item, index) => (
            <Link className={`   `} key={index}>
              {item}
            </Link>
          ))}
        </div>
        <div className="fotter-right b-3">
          <h1 className="text-2xl mb-4">GET IN TOUCH</h1>
          <div>
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
