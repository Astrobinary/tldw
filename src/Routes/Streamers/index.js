import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTopClips } from '../../Redux/clipsReducer';
import SectionHeader from '../../Components/PeriodSelector';
import VideoSection from '../../Components/VideoSection';

export const Streamers = () => {
	const feed = useSelector((state) => state.streamers);
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	if (clipLength === 0) {
	// 		dispatch(fetchTopClips({ from: 'views', period: feed.views.currentPeriod }));
	// 	}
	// }, [feed.views.currentPeriod, dispatch, clipLength]);

	return (
		<section className='Streamers'>
			<SectionHeader from='online' titleText='top online streamers' hideDate />
		</section>
	);
};
