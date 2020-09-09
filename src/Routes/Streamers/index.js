import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTopOnlineStreamers } from '../../Redux/streamersReducer';
import SectionHeader from '../../Components/PeriodSelector';
import StreamerSection from '../../Components/StreamerSection';

import { increaseRowCount } from '../../Redux/streamersReducer';

export const Streamers = () => {
	const streamers = useSelector((state) => state.streamers);
	const dispatch = useDispatch();

	useEffect(() => {
		if (streamers.top.streams.length === 0) {
			dispatch(fetchTopOnlineStreamers());
		}
	}, [dispatch, streamers.top.streams.length]);

	return (
		<section className='Streamers'>
			<SectionHeader from='online' titleText='top online streamers' hideDate route='streamers' />
			<StreamerSection from='top' data={streamers.top} btntext='show me more streamers' more={increaseRowCount} />

			<SectionHeader from='online' titleText='followed streamers' hideDate route='streamers' />
			<StreamerSection from='followed' data={streamers.followed} />
		</section>
	);
};
