import axios from 'axios';

const options = { headers: { 'Client-ID': '15c6l9641yo97kt42nnsa51vrwp70y', Accept: 'application/vnd.twitchtv.v5+json' } };
const api = 'https://api.twitch.tv/kraken';

export async function getTopClips(period, language, cursor) {
	!cursor ? (cursor = '') : (cursor = `&cursor=${cursor}`);
	!language ? (language = '') : (language = `&language=${language}`);

	const url = `${api}/clips/top?&limit=100&period=${period}${language}${cursor}`;

	try {
		const clips = await axios.get(url, options);
		return { clips: clips.data.clips, cursor: clips.data._cursor };
	} catch (err) {
		console.log(err);
		throw err;
	}
}
