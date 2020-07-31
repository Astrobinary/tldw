import { createSlice } from '@reduxjs/toolkit';
import { getOnlineStreamers } from '../Api/twitchAPI';

const initialData = {
	streams: [],
	offset: 0,
	rowCount: 2,
	isFetching: false,
};

const initialState = {
	top: initialData,
	followed: initialData,
	random: initialData,
};

export const streamersSlice = createSlice({
	name: 'streamers',
	initialState,
	reducers: {
		getOnlineStreamers_Start(state, action) {
			state.isFetching = true;
		},
		getOnlineStreamers_Success(state, action) {
			const { streams, amount } = action.payload;
			state.top.offset = amount + state.top.offset;
			state.top.streams = streams;
			state.isFetching = false;
		},
		getOnlineStreamers_Failure(state, action) {
			state.error = action.payload.error;
		},
		increaseRowCount(state, action) {
			const { from, newRowCount } = action.payload;
			state[from].rowCount = newRowCount;
		},
	},
});

export const increaseRowCount = streamersSlice.actions.increaseRowCount;

export const fetchTopOnlineStreamers = (offset) => async (dispatch) => {
	try {
		dispatch(streamersSlice.actions.getOnlineStreamers_Start());
		const data = await getOnlineStreamers();
		dispatch(streamersSlice.actions.getOnlineStreamers_Success({ streams: data.streams, amount: data.amount }));
	} catch (err) {
		dispatch(streamersSlice.actions.getOnlineStreamers_Failure({ error: err.toString() }));
	}
};
