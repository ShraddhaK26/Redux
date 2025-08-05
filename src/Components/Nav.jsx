import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux'; // ✅ Correct import
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';

function Nav() {
  const { input, setinput, setcate, setshowCard } = useContext(dataContext);

  useEffect(() => {
    const newList = food_items.filter(item =>
      item.food_name.toLowerCase().includes(input.toLowerCase())
    );
    setcate(newList);
  }, [input, setcate]);

  const items = useSelector((state) => state.Card); 

  return (
    <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8'>
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
        <MdFastfood className='w-[30px] h-[30px] text-green-500' />
      </div>
      <form
        className='w-[45%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md md:w-[70%]'
        onSubmit={(e) => e.preventDefault()}
      >
        <FaSearch className='text-green-500 w-[20px] h-[20px]' />
        <input
          type="text"
          placeholder='Search items...'
          className='w-full outline-none text-[16px] md:text-[20px]'
          onChange={(e) => setinput(e.target.value)}
          value={input}
        />
      </form>
      <div
        className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md relative shadow-xl cursor-pointer'
        onClick={() => { setshowCard(true) }}
      >
        <span className='absolute top-0 right-2 text-green-500 font-bold text-[18px]'>{items.length}</span>
        <LuShoppingBag className='w-[30px] h-[30px] text-green-500' />
      </div>
    </div>
  );
}

export default Nav;
