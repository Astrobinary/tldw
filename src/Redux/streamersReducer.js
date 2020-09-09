import { createSlice } from '@reduxjs/toolkit';
import { getOnlineStreamers, getStreamerClips } from '../Api/twitchAPI';

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

const initialTimes = {
	day: initialData,
	week: initialData,
	month: initialData,
	all: initialData,
	currentPeriod: 'day',
};

const initialClipData = {
	clips: [],
	cursor: '',
	isFetching: true,
	error: false,
	rowCount: 2,
};

const initialStreamerTimes = {
	day: initialClipData,
	week: initialClipData,
	month: initialClipData,
	all: initialClipData,
	currentPeriod: 'day',
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
		getStreamerClips_Start(state, action) {
			if (!state[action.payload]) state[action.payload] = initialStreamerTimes;
		},
		getStreamerClips_Success(state, action) {
			const { clips, cursor, name, period } = action.payload;
			const location = state[name][period];

			location.isFetching = false;
			location.cursor = cursor;

			!location.cursor ? (location.clips = clips) : location.clips.push(...clips); //if does not have cursor set array, else push
		},
		getStreamerClips_Failure(state, action) {
			console.error(action.payload.error);
			state.error = action.payload.error;
		},
		increaseRowCount(state, action) {
			const { from, period, newRowCount } = action.payload;

			if (!period) {
				state[from].rowCount = newRowCount;
			} else {
				state[from][period].rowCount = newRowCount;
			}
		},
		updatePeriod(state, action) {
			const { from, newPeriod } = action.payload;
			state[from].currentPeriod = newPeriod;
		},
	},
});

export const updatePeriod = streamersSlice.actions.updatePeriod;
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

export const fetchStreamerClips = ({ from, period = 'day', language, _cursor }) => async (dispatch) => {
	try {
		dispatch(streamersSlice.actions.getStreamerClips_Start(from));
		const data = await getStreamerClips(from, period);
		dispatch(streamersSlice.actions.getStreamerClips_Success({ clips: data.clips, cursor: data.cursor, name: from, period }));
	} catch (err) {
		dispatch(streamersSlice.actions.getStreamerClips_Failure({ error: err.toString() }));
	}
};
