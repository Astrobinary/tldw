import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTopClips } from '../../Redux/topClips';

import { SectionHeader } from '../../Components/SectionHeader';

export const Feed = () => {
	const topClips = useSelector((state) => state.topClips);
	const dispatch = useDispatch();

	useEffect(() => {
		if (topClips.mostViewed[topClips.mostViewed.currentPeriod].clips.length === 0) {
			dispatch(fetchTopClips({ from: 'mostViewed', period: topClips.mostViewed.currentPeriod }));
		}
	}, [topClips.mostViewed.currentPeriod]);

	const checkState = () => {
		dispatch(fetchTopClips({ from: 'mostViewed', period: topClips[topClips.currentPeriod], _cursor: topClips.mostViewed[topClips.mostViewed.currentPeriod].cursor }));
	};

	return (
		<section className='Feed'>
			<SectionHeader {...topClips.mostViewed} from='mostViewed'>
				most viewed
			</SectionHeader>
			{/* <button onClick={() => dispatch(fetchTopClips({ from: 'mostViewed', _cursor: topClips.mostViewed.day.cursor }))}>Fetch More Clips for Today</button>
			<button onClick={() => checkState()}>Whats the state</button> */}
		</section>
	);
};
