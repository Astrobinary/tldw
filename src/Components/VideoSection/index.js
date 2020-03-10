import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './VideoSection.scss';

import Thumbnail from '../Thumbnail';

const VideoSection = (props) => {
	const [perRow, setPerRow] = useState(Math.floor(window.innerWidth / 304));
	const videoSectionRef = useRef(null);
	const location = useLocation();
	const collection = props[props.currentPeriod];

	const handleDimensions = () => {
		setPerRow(Math.floor(videoSectionRef.current.clientWidth / 304));
	};

	useEffect(() => {
		window.addEventListener('resize', handleDimensions);
		return () => {
			window.removeEventListener('resize', handleDimensions);
		};
	}, [location]);

	//TODO Have a better loading spinner
	if (collection.isFetching) return <span className='VideoSection'>Fetching data...</span>;

	const renderThumbnails = () => {
		let extraThumbnails = [];

		const amount = perRow - (collection.clips.length % perRow);

		for (let i = 0; i < amount; i++) {
			extraThumbnails.push(<div key={i} style={{ width: '300px' }} />);
		}

		return (
			<React.Fragment>
				{collection.clips.slice(0, perRow * collection.rowCount).map((video, index) => (
					<Link key={video.slug} to={{ pathname: `${location.pathname}/${props.from}/playlist`, search: `?slug=${video.slug}&period=${props.currentPeriod}`, hash: `${index}` }}>
						<Thumbnail {...video} />
					</Link>
				))}
				{extraThumbnails}
			</React.Fragment>
		);
	};

	return (
		<section className='VideoSection' ref={videoSectionRef}>
			{renderThumbnails()}
		</section>
	);
};

VideoSection.propTypes = {
	currentPeriod: PropTypes.string.isRequired,
	from: PropTypes.string.isRequired
};

export default VideoSection;
