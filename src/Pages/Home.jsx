// src/Pages/Home.jsx
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import Nav from '../Components/Nav';
import Categories from '../Category';
import Card from '../Components/Card';
import { food_items } from '../food';
import { dataContext } from '../context/UserContext';
import { RxCross2 } from 'react-icons/rx';
import Card2 from '../Components/Card2';
import { toast } from 'react-toastify';

function Home() {
  let { cate, setcate, input, showCard, setshowCard } = useContext(dataContext);

  function filter(Category) {
    if (Category === 'All') {
      setcate(food_items);
    } else {
      let newList = food_items.filter((item) => item.food_category === Category);
      setcate(newList);
    }
  }

  let items = useSelector((state) => state.Card) || [];

  let subtotal=items.reduce((total,item)=>total+item.price,0)
 let deliveryfee=20;
 let taxes=subtotal*0.5/100;
 let total=Math.floor(subtotal+deliveryfee+taxes)

 
  

  return (
    <div className='bg-slate-200 w-full min-h-screen'>
      <Nav />

      {!input ? (
        <div className='flex flex-wrap justify-center items-center gap-6 w-full'>
          {Categories.map((item, index) => (
            <div
              key={index}
              className='w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-600 rounded-lg shadow-lg hover:bg-green-200 cursor-pointer transition-all duration-200'
              onClick={() => filter(item.name)}
            >
              {item.image}
              {item.name}
            </div>
          ))}
        </div>
      ) : null}

      <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
        {cate.length>1?  cate.map((item, index) => (
          <Card
            key={index}
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
          />
        )): <div className=' items-center text-green-500 text-2xl font-semibold pt-5'> No Dish found </div>}
       
      </div>

      <div
        className={`w-full md:w-[40vw] h-[100%] transition-all flex flex-col items-center overflow-auto duration-500 fixed top-0 right-0 bg-white shadow-xl p-6 ${
          showCard ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <header className='w-full flex justify-between items-center'>
          <span className='text-green-400 text-[18px] font-semibold'>Order items</span>
          <RxCross2
            className='w-[30px] h-[30px] cursor-pointer text-green-400 text-[18px] font-semibold hover:text-gray-600'
            onClick={() => setshowCard(false)}
          />
        </header>
        {items.length > 0 ? <>
        <div className='w-full mt-9 flex flex-col gap-8 '>
          {items.map((item, index) => (
            <Card2
              key={index}
              name={item.name}
              price={item.price}
              image={item.image}
              id={item.id}
              qty={item.qty}
            />
          ))}
        </div>
        <div className='w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-8'>
<div className='w-full flex justify-between items-center'>
    <span className='text-lg text-gray-600 font-semibold'>Subtotal</span>
    <span className='text-green-400 font-semibold text-lg'>Rs {subtotal}-/</span>
</div>
<div className='w-full flex justify-between items-center'>
    <span className='text-lg text-gray-600 font-semibold'>Delivery</span>
    <span className='text-green-400 font-semibold text-lg'>Rs {deliveryfee}-/</span>
</div>
<div className='w-full flex justify-between items-center'>
    <span className='text-lg text-gray-600 font-semibold'>Taxes</span>
    <span className='text-green-400 font-semibold text-lg'>Rs {taxes}-/</span>
</div>

        </div>
        
    <div className='w-full flex justify-between items-center p-9'>
    <span className='text-2xl text-gray-600 font-semibold'>Total</span>
    <span className='text-green-400 font-semibold text-2xl'>Rs {total}-/</span>
        </div>

        <button className='w-[80%] p-3 rounded-lg text-white
       hover:bg-green-300 transition-all bg-green-500' onClick={()=>{toast.success("Order Sucessfull..")}}>Place Order</button>
       </> : 
       <div className=' items-center text-green-500 text-2xl font-semibold pt-5'>
        empty card
         </div>}

      </div>
    </div>
  );
}

export default Home;
