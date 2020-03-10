import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './PlaylistPlayer.scss';

export const PlaylistPlayer = (props) => {
	const location = useLocation();
	const history = useHistory();
	const query = new URLSearchParams(location.search);

	const slug = query.get('slug');
	const period = query.get('period');
	const index = location.hash.substring(1);

	const mainState = location.pathname.split('/')[1];
	const from = location.pathname.split('/')[2];

	const collection = useSelector((state) => state[mainState][from]);

	if (!slug) history.replace(`/${mainState}`);
	if (collection[period].clips.length === 0) history.replace(`/single/${slug}`);

	console.log(collection[period].clips[index]);

	return <div className='SectionHeader'>test</div>;
};

export default PlaylistPlayer;
