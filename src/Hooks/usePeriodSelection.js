import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePeriod } from '../Redux/topClips';

export const usePeriodSelection = (from, setShowMenu) => {
	const periodEnum = [
		{ id: 0, text: 'today', key: 'day' },
		{ id: 1, text: 'this week', key: 'week' },
		{ id: 2, text: 'this month', key: 'month' },
		{ id: 3, text: 'of all time', key: 'all' }
	];

	const dispatch = useDispatch();
	const periods = useSelector((state) => state.topClips[from]);

	const key = periods.currentPeriod;
	const current = periodEnum.filter((obj) => obj.key === key);
	const periodText = current[0].text;

	const updateMenu = (item) => {
		dispatch(updatePeriod({ from, newPeriod: item.key }));
		setShowMenu(false);
	};

	const menu = periodEnum.map((item) => (
		<span key={item.id} onClick={() => updateMenu(item)} className='sort-item'>
			{item.key}
		</span>
	));

	return { periodText, menu };
};
