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

export async function getSingleClip(slug) {
	const url = `${api}/clips/${slug}`;

	try {
		const clip = await axios.get(url, options);
		return clip.data;
	} catch (err) {
		console.log(err);
		throw err;
	}
}

export async function getChatReplay(vodID, offset, duration) {
	const url = `${api}/videos/${vodID}/comments?content_offset_seconds=${offset}`;
	let comments = [];

	try {
		let replay = await axios.get(url, options);
		comments.push(...replay.data.comments);

		while (replay.data.comments[replay.data.comments.length - 1]['content_offset_seconds'] < offset + duration && replay.data['_next']) {
			comments.push(...replay.data.comments);
			replay = await axios.get(url + '&cursor=' + replay.data['_next'], options);
		}
		return comments;
	} catch (err) {
		console.log(err);
		throw err;
	}
}

export async function getOnlineStreamers(offset) {
	!offset ? (offset = '') : (offset = `&offset=${offset}`);

	const url = `${api}/streams?limit=100${offset}`;

	try {
		const json = await axios.get(url, options);
		return { streams: json.data.streams, amount: json.data.streams.length };
	} catch (err) {
		console.log(err);
		throw err;
	}
}

export async function getStreamerClips(name, period, language, cursor) {
	!cursor ? (cursor = '') : (cursor = `&cursor=${cursor}`);
	!language ? (language = '') : (language = `&language=${language}`);
	!name ? (name = '') : (name = `${name}`);

	const url = `${api}/clips/top?channel=${name}&limit=100&period=${period}${language}${cursor}`;

	try {
		const clips = await axios.get(url, options);
		return { clips: clips.data.clips, cursor: clips.data._cursor };
	} catch (err) {
		console.log(err);
		throw err;
	}
}

export async function getTopGames(offset) {
	!offset ? (offset = '') : (offset = `&offset=${offset}`);

	const url = `${api}/games/top?limit=100${offset}`;

	try {
		const json = await axios.get(url, options);
		return { games: json.data.top };
	} catch (err) {
		console.log(err);
		throw err;
	}
}
