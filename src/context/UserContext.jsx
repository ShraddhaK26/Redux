import React, { createContext, useState } from 'react';
import { food_items } from '../food';

export const dataContext = createContext();

function UserContextProvider({ children }) {
  const [cate, setcate] = useState(food_items);
  const [input, setinput] = useState("");
  let [showCard , setshowCard]=useState(false)

  const data = {
    input,
    setinput,
    cate,
    setcate,
    showCard,
    setshowCard
  };

  return (
    <dataContext.Provider value={data}>
      {children}
    </dataContext.Provider>
  );
}

export default UserContextProvider;
