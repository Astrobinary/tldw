import React from 'react';
import './Messages.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlienMonster } from '@fortawesome/pro-duotone-svg-icons';

export const loginMSG = (props) => {
	return (
		<div className='error'>
			<span>
				<FontAwesomeIcon className='icon' alt={'must login'} icon={faAlienMonster} />
			</span>
			feature not available until you login
		</div>
	);
};

export default loginMSG;
