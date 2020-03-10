import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect, Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore, { history } from './Redux/store';
import * as serviceWorker from './serviceWorker';
import './global.scss';

import Navbar from './Components/Navbar';
import PlaylistPlayer from './Components/PlaylistPlayer';
import Redirecting from './Components/Redirecting';

//Routes
import { Feed } from './Routes/Feed';

let Index = () => (
	<React.StrictMode>
		<Provider store={configureStore}>
			<Router history={history}>
				<Navbar />
				<Switch>
					<Redirect from='/' exact to='/feed' />
					<Route exact path='/feed' component={Feed} />
					<Route exact path='/feed/:from/playlist' component={PlaylistPlayer} />
					<Redirect from='/feed/:err' to='/feed' />
					<Redirect from='/feed/:from/:err' exact to='/feed' />

					<Route exact path='/redirecting' component={Redirecting} />
				</Switch>
			</Router>
		</Provider>
	</React.StrictMode>
);

ReactDOM.render(<Index />, document.getElementById('root'));

serviceWorker.register();
