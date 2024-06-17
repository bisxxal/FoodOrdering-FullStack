import React, { createContext, useEffect, useState } from "react"; 
import axios from "axios";
export const StoreContext = createContext();

const StoreContextProvider = (props) => {
  const [cartItems, setItems] = useState({});
  const url = `https://foodorderi.onrender.com`
  const [token , setToken] = useState('')
  const [food_list , setFood_list] = useState([])


  const [dis , setDis] = useState()
  
  const discount = () => {
    let totalAmount = gettotolCartItem();
    if (dis === "NEW20") {
     Math.floor( totalAmount *= 0.8); 
    }
    return totalAmount.toFixed(2);
};


  const addToCart = async(itemId) => {
    if (!cartItems[itemId]) {
      setItems((prev) => ({ ...prev, [itemId]:1 }));
    } else {
      setItems((prev) => ({ ...prev, [itemId]:prev[itemId] + 1 }));
    }
    if(token){
      await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
    }
  };
  const removeToCart =async (itemId) => {
    setItems((prev) => ({ ...prev, [itemId]:prev[itemId] - 1 }));
    if(token){
      await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
    }
  };

  const loadCartData = async(token)=>{
    const responce = await axios.post(url+"/api/cart/get",{},{headers:{token}})
    setItems(responce.data.cartData)
  }

  const gettotolCartItem = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
        if (cartItems[item] > 0) {
            let itemInfo = food_list.find((product) => product._id === item);
            if (itemInfo) {
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
    }
    return totalAmount;
}


  const featchFood= async()=>{
    const responce  = await axios.get(url+'/api/food/list')
    setFood_list(responce.data.data)
  } 
  useEffect(()=>{

    const getList = async ()=>{
     await featchFood()
     gettotolCartItem()
    //  await displayFood()
      if(localStorage.getItem("token")){
      setToken(localStorage.getItem("token"))
      await loadCartData(localStorage.getItem('token'))
    }
    }
    getList()
  },[])

  const contextValue = {
    food_list,addToCart,removeToCart,cartItems,setItems,gettotolCartItem ,url,token, setToken
    ,dis , setDis,discount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
