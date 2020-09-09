import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { increaseRowCount } from '../../Redux/gamesReducer';
import PropTypes from 'prop-types';
import './GameSection.scss';

import LoginMSG from '../Messages/loginMSG';
import MissingMSG from '../Messages/missingMSG';

const GameSection = (props) => {
	const [perRow, setPerRow] = useState(Math.floor(window.innerWidth / 158));
	const dispatch = useDispatch();
	const GameSectionRef = useRef(null);
	const location = useLocation();

	const handleDimensions = () => {
		if (GameSectionRef.current) setPerRow(Math.floor(GameSectionRef.current.clientWidth / 158));
	};

	useEffect(() => {
		window.addEventListener('resize', handleDimensions);
		return () => {
			window.removeEventListener('resize', handleDimensions);
		};
	}, [location, props, GameSectionRef]);

	if (props.data.items.length < 1) return <MissingMSG />;

	//TODO Have a better loading spinner
	if (props.data.isFetching) return <span className='GameSection'>Fetching data...</span>;

	const handleViewMore = () => {
		const maxRows = Math.floor(props.data.items.length / perRow);
		const newCount = parseInt(props.data.rowCount) + 2;
		if (props.data.rowCount < maxRows) {
			dispatch(increaseRowCount({ from: props.from, newRowCount: newCount }));
		} else {
			console.log('we need to fetch more from twitch');
		}
	};

	const renderThumbnails = () => {
		let extraThumbnails = [];

		const amount = perRow - (props.data.items.length % perRow);

		for (let i = 0; i < amount; i++) {
			extraThumbnails.push(<div key={i} style={{ width: '158px' }} />);
		}

		return (
			<React.Fragment>
				{props.data.items.slice(0, perRow * props.data.rowCount).map((item, index) => (
					<Link className='game' key={item.game['_id']} to={{ pathname: `${location.pathname}/${item.game.name}` }} title={item.game.name}>
						<img src={item.game.box.medium} key={item.game['_id']} alt={item.game.name} />
					</Link>
				))}

				{extraThumbnails}
			</React.Fragment>
		);
	};

	return (
		<React.Fragment>
			<section className='GameSection' ref={GameSectionRef}>
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

GameSection.propTypes = {
	from: PropTypes.string,
	btntext: PropTypes.string,
};

export default GameSection;
