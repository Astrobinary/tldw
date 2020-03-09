import React from 'react';
import PropTypes from 'prop-types';

import './thumbnail.scss';

const Thumbnail = props => (
	<div className='Thumbnail'>
		<section className='top-section'>
			<img className='avatar' src={props.broadcaster.logo} alt='avatar' />

			<div className='stats'>
				<div className='text'>{props.views}</div>
				<div className='text'>{props.broadcaster.display_name}</div>
			</div>

			<span className='date'>today</span>
		</section>

		<img className='preview-image' src={props.thumbnails.medium} alt='preview' />
		<div className='title'>{props.title}</div>
	</div>
);

Thumbnail.propTypes = {
	thumbnail: PropTypes.string,
	avatar: PropTypes.string
};

export default Thumbnail;
