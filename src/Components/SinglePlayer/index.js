import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingleClip } from '../../Redux/clipsReducer';
import './SinglePlayer.scss';

import VideoPlayer from '../VideoPlayer';

export const SinglePlayer = (props) => {
	const slug = props.location.pathname.split('/')[2];
	const clip = useSelector((state) => state.single.clip);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!clip) dispatch(fetchSingleClip(slug));

		console.log('how many');
	}, [slug, dispatch, clip]);

	return (
		<div className='SinglePlayer'>
			<VideoPlayer video={clip} />
		</div>
	);
};

export default SinglePlayer;
