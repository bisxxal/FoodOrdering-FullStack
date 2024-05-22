import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'; 
function Add({url}) {
    const [image , setImage] = useState(false)
  
   const [data , setData] = useState({
    name:'',
    description:'',
    price:"",
    category:'',
    
   })
   const onChangeHandeler = (e)=>{
        const name = e.target.name;
        const value =e.target.value
        setData(data=> ({...data , [name]:value}))
   }
    const onSumbitHandler= async(e)=>{
        e.preventDefault()
        const formData = new FormData();
        formData.append("name" , data.name)
        formData.append("price" , Number(data.price))
        formData.append("description" , data.description)
        formData.append("category" , data.category)
        formData.append("image" , image)

        const responce =await axios.post(`${url}/api/food/add`,formData);
        if(responce.data.success){
            toast.success(responce.data.message)
        }
        else{
            toast.error(responce.data.message)
        }
    }
  return (
    <div className=' min-h-screen w-[70%] m-auto pt-16'>
      <form onSubmit={onSumbitHandler} className='flex flex-col gap-3 w-full ' >
        <div className='upload  flex flex-col relative '>
            <p className='text-[18px] mb-3'>Upload images</p>
            <label htmlFor="image">
                <img className='w-[140px] rounded-md h-[100px] object-contain ' src={ image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
            </label>
            <input required onChange={(e)=>setImage(e.target.files[0])} className='  opacity-0 px-3 py-1 w-[170px] left-0 bottom-0 h-20 rounded-md bg-transparent border border-[#ffffff4f] outline-none  absolute'    type="file"   />
        </div>
        <div className='add-prodect name'>
            <p className='text-[18px] mb-3'>Product name</p>
            <input onChange={onChangeHandeler} value={data.name} className='px-3 py-1 rounded-md bg-transparent border border-[#ffffff4f] outline-none ' type="text" name='name' placeholder='Type here'/>
        </div>
        <div className='des flex-col fle'>
            <p className='text-[18px] mb-3'>Product Description</p>
            <textarea required onChange={onChangeHandeler} value={data.description}  name="description" rows='6' placeholder='Write content here' className='px-3 py-1 w-full lg:w-1/3 rounded-md bg-zinc-800  border border-[#ffffff4f] outline-none resize-none'></textarea>
        </div>


        <div className="price">
            <div className="category">
                <p className='text-[18px] mb-3'>Product Category</p>
                <select onChange={onChangeHandeler} className=' bg-transparent mb-4 px-7 py-2 border rounded-lg border-[#ffffff50]'   name="category" >
                    <option className=' bg-transparent text-black' value="Salad">Salad</option>
                    <option className=' bg-transparent text-black' value="Rolls">Rolls</option>
                    <option className=' bg-transparent text-black' value="Deserts">Deserts</option>
                    <option className=' bg-transparent text-black' value="Sandwich">Sandwich</option>
                    <option className=' bg-transparent text-black' value="Cake">Cake</option>
                    <option className=' bg-transparent text-black' value="Pasta">Pasta</option>
                    <option className=' bg-transparent text-black' value="Noodles">Noodles</option>
                    <option className=' bg-transparent text-black' value="Pure Veg">Pure Veg</option>
                </select>
            </div>
            <div className="addprice">
                <p className='text-[18px] mb-3'>Product Price</p>
                <input required onChange={onChangeHandeler} value={data.price}  className='px-3 py-1 rounded-md bg-transparent border border-[#ffffff4f] outline-none ' name='price' placeholder='$20' type="Number" />
            </div>
        </div>

<button type='sumbit' className='bg-[tomato] w-1/4 py-2 rounded-full text-[18px] mt-4 font-bold'>Add</button>
      </form>
    </div>
  )
}

export default Add