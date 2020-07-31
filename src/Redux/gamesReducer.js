import { createSlice } from '@reduxjs/toolkit';
import { getTopGames } from '../Api/twitchAPI';

const initialData = {
	items: [],
	offset: 0,
	rowCount: 2,
	isFetching: false,
};

const initialState = {
	top: initialData,
	followed: initialData,
	random: initialData,
};

export const gamesSlice = createSlice({
	name: 'games',
	initialState,
	reducers: {
		getTopGames_Start(state, action) {
			state.isFetching = true;
		},
		getTopGames_Success(state, action) {
			const { games, amount } = action.payload;
			state.top.offset = amount + state.top.offset;
			state.top.items = games;
			state.isFetching = false;
		},
		getTopGames_Failure(state, action) {
			state.error = action.payload.error;
		},
		increaseRowCount(state, action) {
			const { from, newRowCount } = action.payload;
			state[from].rowCount = newRowCount;
		},
	},
});

export const increaseRowCount = gamesSlice.actions.increaseRowCount;

export const fetchTopGames = (offset) => async (dispatch) => {
	try {
		dispatch(gamesSlice.actions.getTopGames_Start());
		const data = await getTopGames();
		dispatch(gamesSlice.actions.getTopGames_Success({ games: data.games, amount: data.games.length }));
	} catch (err) {
		dispatch(gamesSlice.actions.getTopGames_Failure({ error: err.toString() }));
	}
};
