import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import './Thumbnail.scss';

dayjs.extend(relativeTime);

const Thumbnail = (props) => (
	<div className='Thumbnail'>
		<section className='top-section'>
			<img loading="lazy" className='avatar' src={props.broadcaster.logo} alt='avatar' />

			<div className='stats'>
				<div className='text'>{props.views.toLocaleString()}</div>
				<div className='text'>{props.broadcaster.display_name}</div>
			</div>

			<span className='date'>{dayjs(props.created_at).fromNow()}</span>
		</section>

		<img loading="lazy" className='preview-image' src={props.thumbnails.medium} alt='preview' />
		<div className='title'>{props.title}</div>
	</div>
);

Thumbnail.propTypes = {
	thumbnail: PropTypes.string,
	avatar: PropTypes.string
};

export default Thumbnail;
