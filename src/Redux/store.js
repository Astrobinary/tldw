import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';

import clipsReducer from './topClips';

const reducer = {
	topClips: clipsReducer
};

const store = configureStore({
	reducer,
	devTools: process.env.NODE_ENV !== 'production'
});

export const history = createBrowserHistory();

export default store;
