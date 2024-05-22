import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { assets } from "../../assets/assets";

function MyOrder({ url }) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const responce = await axios.post(url + "/api/order/list");

    if(responce.data.success){
        setData(responce.data.data);
    }
    else{
        alert('error!!')
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  
  const statusHandeler = async(e ,orderId)=>{
    const responce = await axios.post(url + "/api/order/status",{
        orderId ,status:e.target.value
    });
    if(responce.data.success){
        await fetchData()
    }
    // console.log(e, orderId);
  }
  return (
    <div className="min-h-screen pt-16 lg:px-14 ">
      <div className="pt-7 order-list ">
        {data.map((order, index) => {
          return (
            <div
              className="w-full p-4 text-[12px] mb-3 lg:text-[14px] rounded-xl border-[white] border-dashed borde bg-zinc-800 grid gap-[10px] lg:gap-[30px] "
              key={index}
              style={{
                gridTemplateColumns: "0.5fr 2fr 1fr 1fr 1fr ",
                alignItems: "start",
              }}
            >
              <img className="w-[30px]" src={assets.parcel_icon} alt="" />

              <div>
                <p className="font-semibold mb-2 text-[tomato] ">
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return item.name + "  x  " + item.quantity;
                    } else {
                      return item.name + " x " + item.quantity + " , ";
                    }
                  })}
                </p>
                <p>{order.address.firstname + " " + order.address.lastname}</p>
                <div>
                  <p>{order.address.street + " "}</p>
                  <p>
                    {order.address.state + " , " + order.address.country +" , " +order.address.zipcode}
                  </p>
                </div>
                <p>{order.address.phone}</p>
              </div>
              <p>Items: {order.items.length}</p>
              <p>${order.amount}</p>

              <select onChange={(e)=>statusHandeler(e,order._id)} value={order.status} className="bg-zinc-700 rounded-md px-1 py-1 lg:text-[14px] text-[10px] ">
                <option
                  className="bg-zinc-700 rounded-md lg:text-[14px] text-[10px] "
                  value="Food Processing"
                >
                  Food Processing
                </option>
                <option
                  className="bg-zinc-700 rounded-md lg:text-[14px] text-[10px] "
                  value="Out For Delivery">
                
                  Out For Delivery
                </option>
                <option
                  className="bg-zinc-700 rounded-md lg:text-[14px] text-[10px] "
                  value="Delivered">
                
                  Delivered
                </option>
              </select>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyOrder;
