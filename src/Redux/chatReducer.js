import { createSlice } from '@reduxjs/toolkit';
import { getChatReplay } from '../Api/twitchAPI';

export const chatReplaySlice = createSlice({
	name: 'chatReplay',
	initialState: { chats: {}, isFetching: false, error: false },
	reducers: {
		getChatReplay_Start(state, action) {
			state.isFetching = true;
		},
		getChatReplay_Success(state, action) {
			const { slug, replay } = action.payload;
			state.chats[slug] = replay;
			// state.chats.add = action.payload;
			state.isFetching = false;
		},
		getChatReplay_Failure(state, action) {
			state.error = action.payload.error;
		},
	},
});

export const fetchChatReplay = (slug, vodID, offset, duration) => async (dispatch) => {
	try {
		dispatch(chatReplaySlice.actions.getChatReplay_Start());
		const replay = await getChatReplay(vodID, offset, duration);
		dispatch(chatReplaySlice.actions.getChatReplay_Success({ slug, replay }));
	} catch (err) {
		dispatch(chatReplaySlice.actions.getChatReplay_Failure({ error: err.toString() }));
	}
};
