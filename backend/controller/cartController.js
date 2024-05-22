import userModel from "../models/userModel.js";

export const addToCart = async (req, res) => {
  try {
    const userData =await userModel.findById(req.body.userId)
    let cartData = await userData.cartData;
    if(!cartData[req.body.itemId]){
        cartData[req.body.itemId] = 1;
    }
    else{
        cartData[req.body.itemId] +=1
    }
    await userModel.findByIdAndUpdate(req.body.userId,{cartData});
    res.json({ success: true, message: "Added to cart" })
  } catch (error) {
    console.log("error in addtoCartController =>>>>", error);
    return res.json({ success: false, message: "error" });
  }
};
export const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId)
    let cartData = await userData.cartData;
    if(cartData[req.body.itemId]>0){
        cartData[req.body.itemId] -= 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId,{cartData})
    res.json({ success: true, message: "removed from to cart" })
  } catch (error) {
    console.log("error in removeFromCartController =>>>>", error);
    return res.json({ success: false, message: "error" });
  }
};
export const getCart = async (req, res) => {

  try {
    let userData = await userModel.findById(req.body.userId)
    let cartData = await userData.cartData;

    res.json({ success: true, cartData})
  } catch (error) {
    console.log("error in getCartController =>>>>", error);
    return res.json({ success: false, message: "error" });
  }
};
