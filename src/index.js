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
					<Route component={SinglePlayer} />
					<Route exact path='/redirecting' component={Redirecting} />
				</Switch>
			</Router>
		</Provider>
	</React.StrictMode>
);

ReactDOM.render(<Index />, document.getElementById('root'));

serviceWorker.register();
