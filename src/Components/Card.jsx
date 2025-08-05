import React from 'react'
// import image1 from "../assets/image1.avif"
import { GiChickenOven } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { LuLeafyGreen } from 'react-icons/lu';
import { AddItem } from '../redux/cardSlice';
import { toast } from 'react-toastify';


function Card({name,image,id,price,type}) {

let dispatch=useDispatch()


  return (
    <div className='w-[300px] h-[400px] bg-white p-4 hover:border-2 border-green-300'>
      <div className='w-[100%] h-[60%] overflow-hidden
      rounded-lg flex flex-col gap-3 shadow-lg  '>
<img src={image} alt="" className='object-cover' />
      </div>
      <div className='text-2xl font-semibold'>
{name}
      </div>
      <div className='w-[100%] flex justify-between items-center'>
        <div className='text-lg font-bold text-green-500'>{price}</div>
        <div className='flex justify-center items-center gap-2text-green-500
        text-lg font-semibold'> {type==="veg"?<LuLeafyGreen />: <GiChickenOven />}
         <span>{type}</span></div>
      </div>
      <button className='w-full p-3 rounded-lg text-white
       hover:bg-green-300 transition-all bg-green-500' 
       onClick={()=>{dispatch(AddItem({id:id,name:name, price:price, image:image,
        qty:1})); toast.success("Item Added.. ")}}>Add To Dish</button>
    </div>
  )
}

export default Card
