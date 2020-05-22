import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

//Reducers
import { feedSlice, singleClipSlice } from './clipsReducer';

const reducer = {
	feed: feedSlice.reducer,
	single: singleClipSlice.reducer,
};

const middleware = [...getDefaultMiddleware()];

const store = configureStore({
	reducer,
	middleware,
	devTools: process.env.NODE_ENV !== 'production',
});

export default store;
