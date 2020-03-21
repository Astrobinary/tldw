import React from 'react';
import { useLocation, useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/pro-duotone-svg-icons';
import './PlaylistPlayer.scss';
import VideoPlayer from '../VideoPlayer';

export const PlaylistPlayer = () => {
	const location = useLocation();
	const history = useHistory();
	const query = new URLSearchParams(location.search);
	const route = location.pathname.split('/')[1];
	const index = parseInt(location.hash.substring(1));
	const state = useSelector((state) => state[route]);
	const { slug } = useParams();

	if (!query.get('period') || !query.get('from')) {
		history.replace(`/single/${slug}`);
		return <div>Redirecting...</div>;
	}

	let clips = state[query.get('from')][query.get('period')].clips;

	if (!clips || clips.length === 0) {
		history.replace(`/single/${slug}`);
		return <div>Redirecting...</div>;
	}

	const prevVideo = (e) => {
		history.push({
			pathname: clips[index - 1].slug,
			hash: `#${index - 1}`,
			search: `?from=${query.get('from')}&period=${query.get('period')}`
		});
	};

	const nextVideo = (e) => {
		history.push({
			pathname: clips[index + 1].slug,
			hash: `#${index + 1}`,
			search: `?from=${query.get('from')}&period=${query.get('period')}`
		});
	};

	return (
		<div className='PlaylistPlayer'>
			<VideoPlayer key={location.key} video={clips[index]} />

			<div className='side-options'>
				{index !== 0 ? (
					<div className='option prev-video' onClick={prevVideo}>
						<FontAwesomeIcon className='icon' alt={'previous video'} icon={faChevronLeft} />
						<img src={clips[index - 1].thumbnails.medium} alt='previous video' />
						<span className='prev-text'>{clips[index - 1].title}</span>
					</div>
				) : (
					<div className='option prev-video' onClick={prevVideo}></div>
				)}

				<div className='option next-video' onClick={nextVideo}>
					<FontAwesomeIcon className='icon' alt={'next video'} icon={faChevronRight} />
					<img src={clips[index + 1].thumbnails.medium} alt='next video' />
					<span className='next-text'>{clips[index + 1].title}</span>
				</div>
			</div>
		</div>
	);
};

export default PlaylistPlayer;
