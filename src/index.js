import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';

import configureStore from './Redux/store';
import * as serviceWorker from './serviceWorker';
import './global.scss';

import Navbar from './Components/Navbar';
import PlaylistPlayer from './Components/PlaylistPlayer';
import SinglePlayer from './Components/SinglePlayer';
import Redirecting from './Components/Redirecting';

//Routes
import { Feed } from './Routes/Feed';
import { Streamers } from './Routes/Streamers';
import { Streamer } from './Routes/Streamers/Streamer';
import { Games } from './Routes/Games';

let Index = () => (
	<React.StrictMode>
		<Provider store={configureStore}>
			<Router history={createBrowserHistory()}>
				<Navbar />
				<Switch>
					<Redirect from='/' exact to='/feed' />
					<Route exact path='/feed' component={Feed} />
					<Route exact path='/feed/playlist/:slug' component={PlaylistPlayer} />
					<Redirect from='/feed/:err' to='/feed' />
					<Redirect from='/feed/:from/:err' exact to='/feed' />

					<Route exact path='/streamers' component={Streamers} />
					<Route exact path='/streamers/:streamer' component={Streamer} />
					<Route exact path='/streamers/:streamer/playlist/:slug' component={PlaylistPlayer} />

					<Route exact path='/games' component={Games} />

					<Route from='/single/:slug' component={SinglePlayer} />
					<Route exact path='/redirecting' component={Redirecting} />
				</Switch>
			</Router>
		</Provider>
	</React.StrictMode>
);

ReactDOM.render(<Index />, document.getElementById('root'));

serviceWorker.register();
