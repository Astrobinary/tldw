import React, { useState } from 'react';
import './sectionheader.scss';

import { usePeriodSelection } from '../../Hooks/usePeriodSelection';

export const SectionHeader = (props) => {
	const [showMenu, setShowMenu] = useState(false);
	const { periodText, menu } = usePeriodSelection(props.from, setShowMenu);

	return (
		<div className='SectionHeader'>
			{props.titleText}
			<span className='current-item' onClick={() => setShowMenu(!showMenu)}>
				{periodText}
			</span>
			{showMenu && menu}
		</div>
	);
};

export default SectionHeader;
