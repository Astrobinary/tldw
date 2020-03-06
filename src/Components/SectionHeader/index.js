import React, { useEffect } from 'react';
import './sectionheader.scss';

import { usePeriodSelection } from '../../Hooks/usePeriodSelection';

export const SectionHeader = (props) => {
	const { periodText, menu } = usePeriodSelection('mostViewed');
	useEffect(() => {
		console.log(`this si the new one: ${periodText}`);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.currentPeriod]);

	return (
		<div className='SectionHeader'>
			{props.children}
			<span className='current-item' onClick={() => this.toggleMenu()}>
				{periodText}
			</span>
			{/* {this.state.showMenu ? mappedSort : null} */}
			{menu}
		</div>
	);
};

export default SectionHeader;
