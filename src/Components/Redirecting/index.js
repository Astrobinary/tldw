import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory, useLocation } from 'react-router-dom';

export const Redirecting = props => {
	console.log('redirecting!');

	return (
		<div className='SectionHeader'>
			Something went wrong, sending you back to the start.
			<Redirect
				to={{
					pathname: `/${props.history.location.state.start}`
				}}
			/>
		</div>
	);
};

export default Redirecting;
