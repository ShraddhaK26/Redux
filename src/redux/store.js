// import {configureStore} from "@reduxjs/toolkit";
// import cardSlice from './cardSlice';

// export const store=configureStore({
//     reducer:{
//         cart:cardSlice
//     }
// })

// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './cardSlice';

export const store = configureStore({
  reducer: {
    Card: cardReducer, // make sure this matches useSelector(state => state.Card)
  },
});
