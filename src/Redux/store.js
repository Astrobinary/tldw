import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

//Reducers
import { feedSlice, singleClipSlice } from './clipsReducer';
import { chatReplaySlice } from './chatReducer';

const reducer = {
	feed: feedSlice.reducer,
	single: singleClipSlice.reducer,
	chatReplay: chatReplaySlice.reducer,
};

const middleware = [...getDefaultMiddleware()];

const store = configureStore({
	reducer,
	middleware,
	devTools: process.env.NODE_ENV !== 'production',
});

export default store;
