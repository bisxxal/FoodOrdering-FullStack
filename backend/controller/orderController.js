import Stripe from 'stripe'
import orderModel from '../models/orderModel.js';
import userModel from '../models/userModel.js';
const stripe  = new Stripe(process.env.STRIPE_SECRECT_KEY)

export const placeOrder = async(req,res)=>{
    const frontend_url = "https://delicious-mgpq.onrender.com"
    try {
        const { userId , items ,amount,address} = req.body;
        const newOrder = new orderModel({
            userId , items ,amount,address
        })
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId,{cartData:{}});

        const line_items = items.map((item)=>({
            price_data:{
            currency:"inr",
            product_data:{
                name:item.name
            },
            unit_amount:item.price*100*80
        },
        quantity:item.quantity
        }))

        line_items.push({
            price_data:{
                currency:'inr',
                product_data:{
                    name:"Delivery Charges"
                },
                unit_amount:2*100*80
            },
            quantity:1
        })

        const session = await stripe.checkout.sessions.create({
            line_items:line_items,
            mode:"payment",
            success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
        })

        res.json({success:true,session_url:session.url})

    } catch (error) {
        console.log("error in placeOrder route",error);
        return res.json({status:false,message:"error"})
    }
}

export const verifyorder= async (req,res)=>{
    try {
        const {orderId , success} = req.body;
        if(success == "true"){
            await orderModel.findByIdAndUpdate(orderId , {payment:true});
            res.json({success:true , message:"paid"})
        }
        else{
            await orderModel.findByIdAndDelete(orderId);
            res.json({success:false , message:"not paid"})
        }
    } catch (error) {
        console.log("error in verifyorder route",error);
        return res.json({status:false,message:"error"})
    }
}
export const userOrder= async (req,res)=>{
    try {
       const orders = await orderModel.find({userId:req.body.userId}) 
       res.json({success:true,data:orders})
    } catch (error) {
        console.log("error in userOrder route",error);
        return res.json({status:false,message:"error"})
    }
}

export const listOrder= async (req,res)=>{
    try {
       const orders = await orderModel.find({}) 
       res.json({success:true,data:orders})
    } catch (error) {
        console.log("error in userOrder route",error);
        return res.json({status:false,message:"error"})
    }
}
export const updateOrder= async (req,res)=>{
    try {
       const orders = await orderModel.findByIdAndUpdate(req.body.orderId , {status:req.body.status}) 
       res.json({success:true,message:"status updated"})
    } catch (error) {
        console.log("error in updateOrder route",error);
        return res.json({status:false,message:"error"})
    }
}
