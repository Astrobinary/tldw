import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './PlaylistPlayer.scss';
import VideoPlayer from '../VideoPlayer';

export const SinglePlayer = (props) => {
	const location = useLocation();
	const history = useHistory();

	const query = new URLSearchParams(location.search);
	const slug = query.get('slug');
	const period = query.get('period');
	const route = location.pathname.split('/')[1];
	const from = location.pathname.split('/')[2];
	const [index, setIndex] = useState(location.hash.substring(1));
	const feed = useSelector((state) => state[route]);

	let clips;

	

	return (
		<div className='SinglePlayer'>
			This is the single player
		</div>
	);
};

export default SinglePlayer;
