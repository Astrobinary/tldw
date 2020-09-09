import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { increaseRowCount } from '../../Redux/streamersReducer';
import PropTypes from 'prop-types';
import './StreamerSection.scss';

import LoginMSG from '../Messages/loginMSG';
import MissingMSG from '../Messages/missingMSG';

const StreamerSection = (props) => {
	const [perRow, setPerRow] = useState(Math.floor(window.innerWidth / 172));
	const dispatch = useDispatch();
	const streamerSectionRef = useRef(null);
	const location = useLocation();

	const handleDimensions = () => {
		if (streamerSectionRef.current) setPerRow(Math.floor(streamerSectionRef.current.clientWidth / 172));
	};

	useEffect(() => {
		window.addEventListener('resize', handleDimensions);
		return () => {
			window.removeEventListener('resize', handleDimensions);
		};
	}, [location, props, streamerSectionRef]);

	if (props.data.streams.length < 1) return <MissingMSG />;

	//TODO Have a better loading spinner
	if (props.data.isFetching) return <span className='VideoSection'>Fetching data...</span>;

	const handleViewMore = () => {
		const maxRows = Math.floor(props.data.streams.length / perRow);
		const newCount = parseInt(props.data.rowCount) + 2;
		if (props.data.rowCount < maxRows) {
			dispatch(increaseRowCount({ from: props.from, newRowCount: newCount }));
		} else {
			console.log('we need to fetch more from twitch');
		}
	};

	const renderThumbnails = () => {
		let extraThumbnails = [];

		const amount = perRow - (props.data.streams.length % perRow);

		for (let i = 0; i < amount; i++) {
			extraThumbnails.push(<div key={i} style={{ width: '172px' }} />);
		}

		return (
			<React.Fragment>
				{props.data.streams.slice(0, perRow * props.data.rowCount).map((stream, index) => (
					<Link className='streamer' key={stream['_id']} to={{ pathname: `${location.pathname}/${stream.channel['display_name']}` }}>
						<img src={stream.channel.logo} key={stream['_id']} alt={stream.channel['display_name']} />
						<div className='streamer-name'>{stream.channel['display_name']}</div>
					</Link>
				))}
				{extraThumbnails}
			</React.Fragment>
		);
	};

	return (
		<React.Fragment>
			<section className='StreamerSection' ref={streamerSectionRef}>
				{renderThumbnails()}

				{!props.btntext ? (
					''
				) : (
					<div className='view-more-btn' onClick={handleViewMore}>
						<div>{props.btntext}</div>
					</div>
				)}
			</section>
		</React.Fragment>
	);
};

StreamerSection.propTypes = {
	from: PropTypes.string,
	btntext: PropTypes.string,
};

export default StreamerSection;
