import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingleClip } from '../../Redux/clipsReducer';
import './SinglePlayer.scss';

import VideoPlayer from '../VideoPlayer';
import TwitchChat from '../TwitchChat';

export const SinglePlayer = (props) => {
	const slug = props.location.pathname.split('/')[2];
	const clip = useSelector((state) => state.single.clip);
	const dispatch = useDispatch();
	const singleVideoPlayerRef = useRef(null);

	const [sideCount, setSideCount] = useState(null);

	const handleDimensions = () => {
		if (singleVideoPlayerRef.current) setSideCount(Math.floor(singleVideoPlayerRef.current.clientHeight / 160));
	};

	useEffect(() => {
		window.addEventListener('resize', handleDimensions);
		handleDimensions();
		return () => {
			window.removeEventListener('resize', handleDimensions);
		};
	}, [sideCount, singleVideoPlayerRef]);

	useEffect(() => {
		if (!clip) dispatch(fetchSingleClip(slug));

		console.log(clip);
	}, [slug, dispatch, clip, singleVideoPlayerRef]);

	return (
		<div className='SinglePlayer'>
			<VideoPlayer video={clip} ref={singleVideoPlayerRef} />

			{clip ? <TwitchChat vod={clip.vod} duration={clip.duration} videoRef={singleVideoPlayerRef} /> : null}
		</div>
	);
};

export default SinglePlayer;
