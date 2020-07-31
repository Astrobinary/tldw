import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTopOnlineStreamers } from '../../Redux/streamersReducer';
import SectionHeader from '../../Components/PeriodSelector';
import StreamerSection from '../../Components/StreamerSection';

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
			<SectionHeader from='online' titleText='top online streamers' hideDate />
			<StreamerSection from='top' data={streamers.top} btntext='show me more streamers' />

			<SectionHeader from='online' titleText='followed streamers' hideDate />
			<StreamerSection from='top' data={streamers.followed} />
		</section>
	);
};
