import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpaceStationMoonAlt, faAlienMonster } from '@fortawesome/pro-duotone-svg-icons';

export const loginMSG = (props) => {
	return (
		<div className='error'>
			<span>
				<FontAwesomeIcon className='icon' alt={'missing'} icon={faSpaceStationMoonAlt} />
			</span>
			something went wrong, no clips found
		</div>
	);
};

export default loginMSG;
