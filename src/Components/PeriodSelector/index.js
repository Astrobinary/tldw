import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { updatePeriod } from '../../Redux/clipsReducer';
import './PeriodSelector.scss';

export const PeriodSelector = (props) => {
	const periodEnum = [
		{ id: 0, text: 'today', key: 'day' },
		{ id: 1, text: 'this week', key: 'week' },
		{ id: 2, text: 'this month', key: 'month' },
		{ id: 3, text: 'of all time', key: 'all' },
	];

	const [showMenu, setShowMenu] = useState(false);
	const dispatch = useDispatch();
	const periods = useSelector((state) => state.feed[props.from]);

	const key = periods.currentPeriod;
	const current = periodEnum.filter((obj) => obj.key === key);
	const periodText = current[0].text;

	const updateMenu = (item) => {
		dispatch(updatePeriod({ from: props.from, newPeriod: item.key }));
		setShowMenu(false);
	};

	const menu = periodEnum.map((item) => (
		<span key={item.id} onClick={() => updateMenu(item)} className='sort-item'>
			{item.key}
		</span>
	));

	return (
		<div className='PeriodSelector'>
			{props.titleText}
			<span className='current-item' onClick={() => setShowMenu(!showMenu)}>
				{periodText}
			</span>
			{showMenu && menu}
		</div>
	);
};

PeriodSelector.propTypes = {
	from: PropTypes.string.isRequired,
	titleText: PropTypes.string.isRequired,
};

export default PeriodSelector;
