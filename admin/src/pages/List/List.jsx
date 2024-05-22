import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { RxCrossCircled } from "react-icons/rx";

function List({url}) {
  const [list, setList] = useState([]);
  
  const fetchdata = async (e) => {
    const responce = await axios.get(`${url}/api/food/list`);
    if (responce.data.success) {
      setList(responce.data.data);
      toast.success(responce.data.message);
       
    } else {
      toast.error(responce.data.message);
    }
  };
  const removeFood = async (id) => {
      const responce = await axios.post(`${url}/api/food/remove` , {id})
      await fetchdata()
      if(responce.data.success){
 
        toast.success(responce.data.message)
    }
    else{
        toast.error(responce.data.message)
    }
    
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div className=" min-h-screen pt-20  w-[70%] mx-auto ">
      <p className="text-center text-[30px] mb-4 font-bold">All Food List</p>
      <div className="list-taable">
        <div
          className="list-formart grid gap-2 px-4 py-3 text-[15px] "
          style={{ gridTemplateColumns: "0.5fr 2fr 1fr 1fr 0.5fr" }}
        >
          <b>Image</b>
          <b className=" hidden lg:block">Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div
              className="grid gap-2 px-4 py-3 text-[15px] bg-zinc-800 mb-3 rounded-lg "
              style={{ gridTemplateColumns: "0.5fr 2fr 1fr 1fr 0.5fr" }}
              key={index}
            >
              <img
                className="w-[50px] rounded-sm   object-contain "
                src={`${url}/images/` + item.image}
                alt=""
              />
              <p className=" hidden lg:block">{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <RxCrossCircled
                onClick={() => removeFood(item._id)}
                className="text-[25px] cursor-pointer"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;
