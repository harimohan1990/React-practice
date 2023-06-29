import {configureStore}  from '@reduxjs/toolkit';

import counterSlice from './component/features/counterSlice';
export  const store = configureStore({
    reducer:{
        count:counterSlice
    }
})


