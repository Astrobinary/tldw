import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './VideoSection.scss';
import '../Thumbnail/Thumbnail.scss';

const VideoSection = props => {
	const videoSectionRef = useRef(null);
	const [width, setWidth] = useState(window.innerWidth);
	const [perRow, setPerRow] = useState(window.innerWidth / 304);

	const collection = props[props.currentPeriod];

	const handleDimensions = () => {
		setWidth(videoSectionRef.current.clientWidth);
		setPerRow(Math.floor(videoSectionRef.current.clientWidth / 304));
	};

	useEffect(() => {
		window.addEventListener('resize', handleDimensions);
		return () => {
			window.removeEventListener('resize', handleDimensions);
		};
	}, []);

	if (collection.isFetching) return <span className='VideoSection'>Fetching data...</span>;

	const renderThumbnails = () => {
		let extraThumbnails = [];

		const amount = Math.floor(perRow - (collection.clips.length % perRow));
		console.log(amount);

		for (let i = 0; i < amount; i++) {
			extraThumbnails.push(<div key={i} style={{ width: '300px' }} />);
		}

		return (
			<React.Fragment>
				{collection.clips.slice(0, perRow * collection.rowCount).map((video, index) => (
					<div classname='Thumbnail' key={video.slug}>
						<img src={video.thumbnails.medium} />
					</div>
				))}
				{extraThumbnails}
			</React.Fragment>
		);
	};

	return (
		<section className='VideoSection' ref={videoSectionRef}>
			{renderThumbnails()}
			{/* {width} ---- {perRow} */}
		</section>
	);
};

VideoSection.propTypes = {
	currentPeriod: PropTypes.string.isRequired
};

export default VideoSection;
