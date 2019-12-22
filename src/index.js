import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import configureStore, { history } from "./Redux/store";
import * as serviceWorker from "./serviceWorker";
import "./global.scss";

//Containers
import Feed from "./containers/Feed";

//Components
import Navbar from "./components/Navbar";

const Index = () => (
    <Provider store={configureStore()}>
        <ConnectedRouter history={history}>
            <Navbar />
            <Switch>
                <Redirect from="/" exact to="/feed" />
                <Route exact path="/feed" component={Feed} />
            </Switch>
        </ConnectedRouter>
    </Provider>
);

ReactDOM.render(<Index />, document.getElementById("root"));

serviceWorker.register();
