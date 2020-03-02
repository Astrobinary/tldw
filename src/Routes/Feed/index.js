import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTopClips } from '../../Redux/topClips';

export const Feed = () => {
	const theState = useSelector((state) => state);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTopClips({ from: 'mostViewed' }));
	}, [dispatch]);

	const checkState = () => {
		console.log(theState);
	};

	return (
		<section className='Feed'>
			<button onClick={() => dispatch(fetchTopClips({ from: 'mostViewed', _cursor: theState.clips.mostViewed.day.cursor }))}>Fetch More Clips for Today</button>
			<button onClick={() => checkState()}>Whats the state</button>
		</section>
	);
};

// export default connect(null, mapDispatch)(Feed);
