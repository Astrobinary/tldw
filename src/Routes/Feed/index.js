import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTopClips } from '../../Redux/feedReducer';
import SectionHeader from '../../Components/PeriodSelector';
import VideoSection from '../../Components/VideoSection';

export const Feed = () => {
	const feed = useSelector((state) => state.feed);
	const dispatch = useDispatch();
	const clipLength = feed.mostViewed[feed.mostViewed.currentPeriod].clips.length;

	useEffect(() => {
		if (clipLength === 0) {
			dispatch(fetchTopClips({ from: 'mostViewed', period: feed.mostViewed.currentPeriod }));
		}
	}, [feed.mostViewed.currentPeriod, dispatch, clipLength]);

	// const checkState = () => {
	// 	dispatch(fetchTopClips({ from: 'mostViewed', period: topClips[topClips.currentPeriod], _cursor: topClips.mostViewed[topClips.mostViewed.currentPeriod].cursor }));
	// };

	return (
		<section className='Feed'>
			<SectionHeader from='mostViewed' titleText='most viewed' />
			<VideoSection from='mostViewed' {...feed.mostViewed} />

			{/* <button onClick={() => dispatch(fetchTopClips({ from: 'mostViewed', _cursor: topClips.mostViewed.day.cursor }))}>Fetch More Clips for Today</button>
			<button onClick={() => checkState()}>Whats the state</button> */}
		</section>
	);
};
