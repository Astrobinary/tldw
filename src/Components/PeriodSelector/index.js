import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import './PeriodSelector.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStream } from '@fortawesome/pro-duotone-svg-icons';

export const PeriodSelector = (props) => {
	const periodEnum = [
		{ id: 0, text: 'today', key: 'day' },
		{ id: 1, text: 'this week', key: 'week' },
		{ id: 2, text: 'this month', key: 'month' },
		{ id: 3, text: 'of all time', key: 'all' },
	];

	const [showMenu, setShowMenu] = useState(false);
	const dispatch = useDispatch();
	const periods = useSelector((state) => state[props.route][props.from]);

	if (props.hideDate) return <div className='PeriodSelector'>{props.titleText}</div>;
	if (!periods)
		return (
			<div className='PeriodSelector' onClick={() => setShowMenu(!showMenu)}>
				{props.titleText}
			</div>
		);

	const key = periods.currentPeriod;
	const current = periodEnum.filter((obj) => obj.key === key);
	const periodText = current[0].text;

	const updateMenu = (item) => {
		dispatch(props.updateFunc({ from: props.from, newPeriod: item.key }));
		setShowMenu(false);
	};

	const menu = periodEnum.map((item) => (
		<span key={item.id} onClick={() => updateMenu(item)} className='sort-item'>
			{item.key}
		</span>
	));

	return (
		<div className='PeriodSelector' onClick={() => setShowMenu(!showMenu)}>
			{props.titleText}
			<span className='current-item'>{periodText}</span>

			{showMenu && menu}
			<span>
				<FontAwesomeIcon className='icon' alt={'time selector'} icon={faStream} title='select time frame' />
			</span>
		</div>
	);
};

PeriodSelector.propTypes = {
	from: PropTypes.string.isRequired,
	titleText: PropTypes.string.isRequired,
};

export default PeriodSelector;
