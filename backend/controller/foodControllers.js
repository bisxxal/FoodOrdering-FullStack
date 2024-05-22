import foodModel from "../models/foodModel.js";
import fs from 'fs' 
export const addFood = async (req, res)=>{
    let image_fileName = `${req.file.filename}`;
 const { name  , description,price ,image ,category ,} =req.body
    const food =new foodModel({
     description  ,
     name,
        price ,
        category,
        image:image_fileName ,
        category ,
    })

    try {
        await food.save()
        res.json({success:true ,message:"Food added"})
        
    } catch (error) {
        console.log('error inn addfood route =>>>>' , error);
        res.json({success:false ,message:"Error "})
    }
}


export const listFood = async (req, res)=>{
try {
    const food = await foodModel.find({});
    res.json({success:true , data:food}) 
} catch (error) {
    console.log('error inn listFood route =>>>>' , error);
    res.json({success:false ,message:"Error "})
}
}

export const removeFood = async (req, res)=>{
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`upload/${food.image}` ,()=> {})

        await foodModel.findByIdAndDelete(req.body.id)

        res.json({success:true ,message:"food removed "})
    } catch (error) {
        console.log('error inn remove route =>>>>' , error);
        res.json({success:false ,message:"Error "})
    }
}
