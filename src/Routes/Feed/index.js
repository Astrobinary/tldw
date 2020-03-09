import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTopClips } from '../../Redux/topClips';
import SectionHeader from '../../Components/PeriodSelector';
import VideoSection from '../../Components/VideoSection';

export const Feed = () => {
	const topClips = useSelector(state => state.topClips);
	const dispatch = useDispatch();
	const clipLength = topClips.mostViewed[topClips.mostViewed.currentPeriod].clips.length;

	useEffect(() => {
		if (clipLength === 0) {
			dispatch(fetchTopClips({ from: 'mostViewed', period: topClips.mostViewed.currentPeriod }));
		}
	}, [topClips.mostViewed.currentPeriod, dispatch, clipLength]);

	// const checkState = () => {
	// 	dispatch(fetchTopClips({ from: 'mostViewed', period: topClips[topClips.currentPeriod], _cursor: topClips.mostViewed[topClips.mostViewed.currentPeriod].cursor }));
	// };

	return (
		<section className='Feed'>
			<SectionHeader from='mostViewed' titleText='most viewed' />
			<VideoSection {...topClips.mostViewed} />

			{/* <button onClick={() => dispatch(fetchTopClips({ from: 'mostViewed', _cursor: topClips.mostViewed.day.cursor }))}>Fetch More Clips for Today</button>
			<button onClick={() => checkState()}>Whats the state</button> */}
		</section>
	);
};
