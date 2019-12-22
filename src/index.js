import React from "react";
import ReactDOM from "react-dom";
import "./global.scss";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./Redux/store";

import Feed from "./containers/Feed";

import Navbar from "./components/Navbar";
import * as serviceWorker from "./serviceWorker";

const Index = () => (
    <Router>
        <Provider store={configureStore()}>
            <Navbar />
            <Switch>
                <Redirect from="/" exact to="/feed" />
                <Route exact path="/feed" component={Feed} />
            </Switch>
        </Provider>
    </Router>
);

ReactDOM.render(<Index />, document.getElementById("root"));

serviceWorker.register();
