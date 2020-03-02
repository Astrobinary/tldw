import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect, Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore, { history } from './Redux/store';
import * as serviceWorker from './serviceWorker';
import './global.scss';

//Routes
import { Feed } from './Routes/Feed';

let Index = () => (
	<Provider store={configureStore}>
		<Router history={history}>
			<Switch>
				<Redirect from='/' exact to='/feed' />
				<Route exact path='/feed' component={Feed} />
			</Switch>
		</Router>
	</Provider>
);

ReactDOM.render(<Index />, document.getElementById('root'));

serviceWorker.register();
