import { configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit';

//Reducers
import clipsReducer from './feedReducer';


const reducer = {
	feed: clipsReducer,
};

const middleware = [...getDefaultMiddleware()]

const store = configureStore({
	reducer,
	middleware,
	devTools: process.env.NODE_ENV !== 'production',
	
});


export default store;
