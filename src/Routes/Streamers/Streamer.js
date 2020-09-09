import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchStreamerClips } from '../../Redux/streamersReducer';
import { increaseRowCount } from '../../Redux/streamersReducer';
import SectionHeader from '../../Components/PeriodSelector';
import VideoSection from '../../Components/VideoSection';

import { updatePeriod } from '../../Redux/streamersReducer';

export const Streamer = () => {
	const streamers = useSelector((state) => state.streamers);
	const dispatch = useDispatch();
	const { streamer } = useParams();
	const [currentPeriod, setCurrentPeriod] = useState('');

	useEffect(() => {
		if (streamer !== undefined) {
			if (streamers[streamer] === undefined) {
				dispatch(fetchStreamerClips({ from: streamer }));
				setCurrentPeriod('day');
			} else if (streamers[streamer][streamers[streamer].currentPeriod].clips.length < 1) {
				if (!streamers[streamer][streamers[streamer].currentPeriod].isFetching) {
					console.log('else fetch');
					dispatch(fetchStreamerClips({ from: streamer, period: streamers[streamer].currentPeriod }));
				}
			}
		}
	}, [dispatch, streamer, streamers, currentPeriod]);

	return (
		<section className='Streamer'>
			<SectionHeader from={streamer} titleText='most viewed' route='streamers' updateFunc={updatePeriod} />
			<VideoSection from={streamer} {...streamers[streamer]} btntext={`more clips from ${streamer}`} more={increaseRowCount} />
		</section>
	);
};
