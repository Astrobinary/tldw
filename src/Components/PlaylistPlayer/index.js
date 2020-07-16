import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/pro-duotone-svg-icons';
import './PlaylistPlayer.scss';
import VideoPlayer from '../VideoPlayer';
import Thumbnail from '../Thumbnail';
import TwitchChat from '../TwitchChat';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

export const PlaylistPlayer = () => {
	const location = useLocation();
	const history = useHistory();
	const query = new URLSearchParams(location.search);
	const route = location.pathname.split('/')[1];
	const index = parseInt(location.hash.substring(1));
	const state = useSelector((state) => state[route]);
	const { slug } = useParams();

	const videoPlayerRef = useRef(null);
	const scrollRef = useRef(null);
	const [sideCount, setSideCount] = useState(null);

	const handleDimensions = () => {
		if (videoPlayerRef.current) setSideCount(Math.floor(videoPlayerRef.current.clientHeight / 160));
	};

	useEffect(() => {
		window.addEventListener('resize', handleDimensions);
		handleDimensions();
		return () => {
			window.removeEventListener('resize', handleDimensions);
		};
	}, [sideCount, videoPlayerRef]);

	useEffect(() => {
		if (scrollRef.current) scrollRef.current.recalculate();
		let currentDiv = document.getElementById(index.toString());
		if (currentDiv) currentDiv.scrollIntoView({ behavior: 'smooth' });
	}, [index]);

	if (!query.get('period') || !query.get('from')) {
		history.replace(`/single/${slug}`);
		return <div>Redirecting...</div>;
	}

	let clips = state[query.get('from')][query.get('period')].clips;

	if (clips.length === 0) {
		history.replace(`/single/${slug}`);
		return <div>Redirecting...</div>;
	}

	const renderPlaylistVideos = () => {
		let videos = [];

		clips.forEach((vid, i) => {
			if (clips[i + 1]) {
				videos.push(
					<div onClick={() => changeVideo(i)} id={i} key={i}>
						<Thumbnail id={i} addedClass={`playlist-thumbnail  ${index === i ? 'selected' : ''}`} key={clips[i].slug} {...clips[i]} />
						<div className='playlist-order'>{i}</div>
					</div>
				);
			}
		});
		return videos;
	};

	const changeVideo = (index) => {
		history.push({
			pathname: clips[index].slug,
			hash: `#${index}`,
			search: `?from=${query.get('from')}&period=${query.get('period')}`,
		});
	};

	return (
		<div className='PlaylistPlayer'>
			<div className='Side playlist'>
				<SimpleBar ref={scrollRef} className='playlist-container' data-simplebar-direction='rtl' style={{ maxHeight: videoPlayerRef.current ? videoPlayerRef.current.clientHeight : 100, marginRight: 30 }}>
					{renderPlaylistVideos()}
				</SimpleBar>

				<div className='playlist-buttons'>
					<div className='playlist-btn' onClick={() => changeVideo(index - 1)}>
						<FontAwesomeIcon className='icon' alt={'previous video'} icon={faChevronLeft} /> <div className='text'>prev video</div>
					</div>

					<div className='playlist-btn' onClick={() => changeVideo(index + 1)}>
						<div className='text'>next video</div>
						<FontAwesomeIcon className='icon' alt={'next video'} icon={faChevronRight} />
					</div>
				</div>
			</div>

			<VideoPlayer key={location.key + 1} video={clips[index]} ref={videoPlayerRef} />

			<TwitchChat vod={clips[index].vod} duration={clips[index].duration} videoRef={videoPlayerRef} />
		</div>
	);
};

export default PlaylistPlayer;
