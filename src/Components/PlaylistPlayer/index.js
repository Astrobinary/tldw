import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './PlaylistPlayer.scss';

export const PlaylistPlayer = props => {
	const location = useLocation();
	const history = useHistory();

	const query = new URLSearchParams(location.search);
	const slug = query.get('slug');
	const period = query.get('period');
	const route = location.pathname.split('/')[1];
	const from = location.pathname.split('/')[2];
	const [index, setIndex] = useState(location.hash.substring(1));
	const feed = useSelector(state => state[route]);

	let clips;

	if (!slug) {
		return history.replace(`/redirecting`, { start: route });
	}

	if (!index || !period) {
		history.replace(`/single/${slug}`);
		return <div>Redirecting...</div>;
	}

	try {
		clips = feed[from][period].clips;
	} catch {
		clips = undefined;
	}

	if (!clips || clips.length === 0) {
		history.replace(`/single/${slug}`);
		return <div>Redirecting...</div>;
	}

	return <div className='SectionHeader'>{clips[index].title}</div>;
};

export default PlaylistPlayer;
