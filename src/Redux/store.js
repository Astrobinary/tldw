import { configureStore } from '@reduxjs/toolkit';

//Reducers
import { feedSlice, singleClipSlice } from './feedReducer';
import { streamersSlice } from './streamersReducer';
import { chatReplaySlice } from './chatReducer';
import { gamesSlice } from './gamesReducer';

const reducer = {
	feed: feedSlice.reducer,
	streamers: streamersSlice.reducer,
	games: gamesSlice.reducer,
	single: singleClipSlice.reducer,
	chatReplay: chatReplaySlice.reducer,
};

const store = configureStore({
	reducer,
	devTools: process.env.NODE_ENV !== 'production',
});

export default store;
