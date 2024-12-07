import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import flightReducer from './flightSlice';


export const store = configureStore({
    reducer: {
        app: appReducer,
        flights: flightReducer
    },
})