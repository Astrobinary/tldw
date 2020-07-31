import { createSlice } from '@reduxjs/toolkit';
import { getTopClips, getSingleClip } from '../Api/twitchAPI';

const initialData = {
	clips: [],
	cursor: '',
	isFetching: false,
	error: false,
	rowCount: 2,
};

const initialTimes = {
	day: initialData,
	week: initialData,
	month: initialData,
	all: initialData,
	currentPeriod: 'day',
};

const initialState = {
	sponsored: initialTimes,
	views: initialTimes,
	followed: initialTimes,
	drama: initialTimes,
};

export const feedSlice = createSlice({
	name: 'feed',
	initialState: initialState,
	reducers: {
		getTopClips_Start(state, action) {
			const { from, period } = action.payload;
			state[from][period].isFetching = true;
		},
		getTopClips_Success(state, action) {
			const { from, period, clips, cursor } = action.payload;
			const location = state[from][period];

			location.isFetching = false;
			location.cursor = cursor;
			!location.cursor ? (location.clips = clips) : location.clips.push(...clips); //if does not have cursor set array, else push
		},
		getTopClips_Failure(state, action) {
			const { error, from, period } = action.payload;
			state[from][period].error = error;
		},
		updatePeriod(state, action) {
			const { from, newPeriod } = action.payload;
			state[from].currentPeriod = newPeriod;
		},
		increaseRowCount(state, action) {
			const { from, period, newRowCount } = action.payload;
			state[from][period].rowCount = newRowCount;
		},
	},
});

export const updatePeriod = feedSlice.actions.updatePeriod;
export const increaseRowCount = feedSlice.actions.increaseRowCount;

const { getTopClips_Start, getTopClips_Success, getTopClips_Failure } = feedSlice.actions;
export const fetchTopClips = ({ from, period = 'day', language, _cursor }) => async (dispatch) => {
	try {
		dispatch(getTopClips_Start({ from, period }));
		const { clips, cursor } = await getTopClips(period, language, _cursor);
		dispatch(getTopClips_Success({ from, period, clips, cursor }));
	} catch (err) {
		dispatch(getTopClips_Failure({ error: err.toString(), from, period }));
	}
};

// ---------------------------------------- //

export const singleClipSlice = createSlice({
	name: 'single',
	initialState: { clip: null, isFetching: false, error: false },
	reducers: {
		getSingleClips_Start(state, action) {
			state.isFetching = true;
		},
		getSingleClips_Success(state, action) {
			state.clip = action.payload;
			state.isFetching = false;
		},
		getSingleClips_Failure(state, action) {
			state.error = action.payload.error;
		},
	},
});

export const fetchSingleClip = (slug) => async (dispatch) => {
	try {
		dispatch(singleClipSlice.actions.getSingleClips_Start());
		const clip = await getSingleClip(slug);
		dispatch(singleClipSlice.actions.getSingleClips_Success(clip));
	} catch (err) {
		dispatch(singleClipSlice.actions.getSingleClips_Failure({ error: err.toString() }));
	}
};
