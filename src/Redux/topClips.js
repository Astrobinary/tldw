import { createSlice } from '@reduxjs/toolkit';
import { getTopClips } from '../Api/twitchAPI';

const initialData = {
	clips: [],
	cursor: '',
	isFetching: false,
	error: false
};

const initialTimes = {
	day: initialData,
	week: initialData,
	month: initialData,
	all: initialData,
	currentPeriod: 'day'
};

const initialState = {
	sponsored: initialTimes,
	mostViewed: initialTimes,
	mostTalked: initialTimes
};

const clipsSlice = createSlice({
	name: 'topClips',
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

			//if does not have cursor set array, else push
			!location.cursor ? (location.clips = clips) : location.clips.push(...clips);
		},
		getTopClips_Failure(state, action) {
			const { error, from, period } = action.payload;
			state[from][period].error = error;
		},
		updatePeriod(state, action) {
			const { from, newPeriod } = action.payload;
			state[from].currentPeriod = newPeriod;
		}
	}
});

const { getTopClips_Start, getTopClips_Success, getTopClips_Failure } = clipsSlice.actions;

export const updatePeriod = clipsSlice.actions.updatePeriod;

export const fetchTopClips = ({ from, period = 'day', language, _cursor }) => async (dispatch) => {
	try {
		dispatch(getTopClips_Start({ from, period }));
		const { clips, cursor } = await getTopClips(period, language, _cursor);
		dispatch(getTopClips_Success({ from, period, clips, cursor }));
	} catch (err) {
		dispatch(getTopClips_Failure({ error: err.toString(), from, period }));
	}
};

export default clipsSlice.reducer;
