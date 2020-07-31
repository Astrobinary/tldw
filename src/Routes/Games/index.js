import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTopGames } from '../../Redux/gamesReducer';
import SectionHeader from '../../Components/PeriodSelector';
import GameSection from '../../Components/GameSection';

export const Games = () => {
	const games = useSelector((state) => state.games);
	const dispatch = useDispatch();

	useEffect(() => {
		if (games.top.items.length === 0) {
			dispatch(fetchTopGames());
		}
	}, [dispatch, games.top.items.length]);

	return (
		<section className='Games'>
			<SectionHeader from='top' titleText='popular games' hideDate />
			<GameSection from='top' data={games.top} btntext='view more games' />

			<SectionHeader from='followed' titleText='followed games' hideDate />
			<GameSection from='followed' data={games.followed} />
		</section>
	);
};
