import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShareAlt, faFilmAlt, faDownload } from '@fortawesome/pro-light-svg-icons';
import { faTelescope } from '@fortawesome/pro-duotone-svg-icons';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import './VideoPlayer.scss';
import { faPuzzlePiece } from '@fortawesome/pro-duotone-svg-icons';

dayjs.extend(relativeTime);

export const VideoPlayer = React.forwardRef((props, ref) => {
	const video = props.video;
	const videoRef = useRef(null);

	const handleDimensions = () => {
		const width = videoRef.current.getBoundingClientRect().width;
		let height = width * 9;
		height /= 16;

		videoRef.current.style.height = `${height}px`;
	};

	const getMp4 = () => {};

	useEffect(() => {
		window.addEventListener('resize', handleDimensions);
		if (video) handleDimensions();
		return () => {
			window.removeEventListener('resize', handleDimensions);
		};
	}, [video]);

	if (!video) return <div>Fetching..</div>;

	return (
		<div className='VideoPlayer'>
			<div style={{ backgroundImage: `url(${video.thumbnails.medium})`, backgroundColor: 'black', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', zIndex: '100' }} ref={videoRef}>
				<iframe allowFullScreen src={video.embed_url + `&parent=tldw.live&parent=www.tldw.live&parent=localhost&action=embedview`} frameBorder='0' title={video.title} scrolling='no' height='100%' width='100%' ref={ref} />
			</div>

			<div className='video-info'>
				<Link to={'/streamers/' + video.broadcaster.name}>
					<img className='streamer-logo' alt='avatar' src={video.broadcaster.logo} />
				</Link>

				<div className='video-text'>
					<div className='video-title' title={video.title}>
						{video.title}
					</div>
					<div className='streamer-info'>
						<div className='streamer-name'>
							<Link to={'/streamers/' + video.broadcaster.name}>{video.broadcaster.display_name}</Link>
						</div>
						<div className='from-text'>&nbsp;from&nbsp;</div>
						<div className='streamer-game'>
							<Link to={'/games/' + video.game}>{video.game}</Link>
						</div>
						<div className='video-date'>&nbsp;{dayjs(video.created_at).fromNow()}</div>
					</div>
					<div className='video-views'>
						<FontAwesomeIcon className='icon' alt={'view count'} icon={faTelescope} /> <span>{video.views.toLocaleString()}</span>
						<div className='clipby' title={`clipped by ${video.curator.display_name}`}>
							<FontAwesomeIcon className='icon' alt={'view count'} icon={faPuzzlePiece} /> {video.curator.display_name}
						</div>
					</div>
				</div>

				<div className='video-interact'>
					<div className='interact-icon' title='favorite'>
						<FontAwesomeIcon className='icon' alt={'favorite'} icon={faHeart} />
					</div>
					<div className='interact-icon' title='share'>
						<FontAwesomeIcon className='icon' alt={'share'} icon={faShareAlt} />
					</div>

					{video.vod ? (
						<div className='interact-icon' title='vod'>
							<a href={video.vod.url} target='_blank' rel='noopener noreferrer'>
								<FontAwesomeIcon className='icon' alt={'vod'} icon={faFilmAlt} />
							</a>
						</div>
					) : null}

					<div className='interact-icon' title='download'>
						<a href={getMp4()} download target='_blank' rel='noopener noreferrer'>
							<FontAwesomeIcon className='icon' alt={'download'} icon={faDownload} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
});

export default VideoPlayer;
