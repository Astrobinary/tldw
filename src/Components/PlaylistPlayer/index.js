import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft, faChevronRight } from '@fortawesome/pro-duotone-svg-icons';
import './PlaylistPlayer.scss';
import VideoPlayer from '../VideoPlayer';
import Thumbnail from '../Thumbnail';

export const PlaylistPlayer = () => {
	const location = useLocation();
	const history = useHistory();
	const query = new URLSearchParams(location.search);
	const route = location.pathname.split('/')[1];
	const index = parseInt(location.hash.substring(1));
	const state = useSelector((state) => state[route]);
	const { slug } = useParams();

	const videoPlayerRef = useRef(null);
	const [sideCount, setSideCount] = useState(null);

	const handleDimensions = () => {
		if (videoPlayerRef.current) setSideCount(Math.floor(videoPlayerRef.current.clientHeight / 200));
	};

	useEffect(() => {
		window.addEventListener('resize', handleDimensions);
		handleDimensions();
		return () => {
			window.removeEventListener('resize', handleDimensions);
		};
	}, [sideCount, videoPlayerRef]);

	if (!query.get('period') || !query.get('from')) {
		history.replace(`/single/${slug}`);
		return <div>Redirecting...</div>;
	}

	let clips = state[query.get('from')][query.get('period')].clips;

	if (clips.length === 0) {
		history.replace(`/single/${slug}`);
		return <div>Redirecting...</div>;
	}

	const renderPreviousVideos = () => {
		let videos = [];

		for (let i = 1; i <= sideCount; i++) {
			// let tempDec = i === 0 ? 1 : i;

			videos.push(
				<React.Fragment>
					{index >= i ? (
						<div onClick={() => changeVideo(index - i)}>
							<Thumbnail key={clips[index].slug} {...clips[index - i]} />
						</div>
					) : (
						<div key={i} style={{ width: '304px', height: '174px', margin: '10px 0px', pointerEvents: 'none' }}></div>
					)}
				</React.Fragment>
			);
		}

		return videos;
	};

	const renderNextVideos = () => {
		let videos = [];

		for (let i = 1; i <= sideCount; i++) {
			videos.push(
				<div onClick={() => changeVideo(index + i)}>
					<Thumbnail key={clips[index + i].slug} {...clips[index + i]} />
				</div>
			);
		}

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
			<div className='options'>
				<div className='option-text'>previous videos</div>
				<div className='prev-videos'>{renderPreviousVideos()}</div>
				{/* <div className='prev-text' onClick={() => changeVideo(index - 1)}>
					<FontAwesomeIcon className='icon' alt={'previous video'} icon={faChevronLeft} /> <div className='text'>play previous video</div>
				</div> */}
			</div>

			<VideoPlayer key={location.key} video={clips[index]} ref={videoPlayerRef} />

			<div className='options'>
				<div className='option-text'>upcoming videos</div>
				<div className='next-videos'>{renderNextVideos()}</div>
				{/* <div className='next-text' onClick={() => changeVideo(index + 1)}>
					<div className='text'>play next video</div>
					<FontAwesomeIcon className='icon' alt={'next video'} icon={faChevronRight} />
				</div> */}
			</div>
		</div>
	);
};

export default PlaylistPlayer;
