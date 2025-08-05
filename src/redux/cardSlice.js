
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cardSlice = createSlice({
  name: 'Card',
  initialState,
  reducers: {
    AddItem: (state, action) => {
     let existItem = state.find((item)=>item.id===action.payload.id)
     if(existItem)
 {
 return state=state.map((item)=>(item.id===action.payload.id?{...item,qty:item.qty+1}:item))
 }else{
  
      state.push(action.payload);
 }
     
    },
    RemoveItem:(state,action)=>{
        return state.filter((item)=>item.id!==action.payload)
    },
    IncreamentQty:(state,action)=>{
      return state.map((item)=>item.id===action.payload?{...item,qty:item.qty+1}:item)
    },
    DecrementQty:(state,action)=>{
      return state.map((item)=>item.id===action.payload?{...item,qty:item.qty-1}:item)
    }

  },
});

export const { AddItem , RemoveItem,IncreamentQty, DecrementQty} = cardSlice.actions;
export default cardSlice.reducer;
