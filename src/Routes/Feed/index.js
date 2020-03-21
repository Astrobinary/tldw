import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTopClips } from '../../Redux/feedReducer';
import SectionHeader from '../../Components/PeriodSelector';
import VideoSection from '../../Components/VideoSection';

export const Feed = () => {
	const feed = useSelector((state) => state.feed);
	const dispatch = useDispatch();
	const clipLength = feed.views[feed.views.currentPeriod].clips.length;

	useEffect(() => {
		if (clipLength === 0) {
			dispatch(fetchTopClips({ from: 'views', period: feed.views.currentPeriod }));
		}
	}, [feed.views.currentPeriod, dispatch, clipLength]);

	// const checkState = () => {
	// 	dispatch(fetchTopClips({ from: 'views', period: topClips[topClips.currentPeriod], _cursor: topClips.views[topClips.views.currentPeriod].cursor }));
	// };

	return (
		<section className='Feed'>
			<SectionHeader from='views' titleText='most viewed' />
			<VideoSection from='views' {...feed.views} btntext="keep them coming"/>
		</section>
	);
};
