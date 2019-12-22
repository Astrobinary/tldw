import React from "react";
import ReactDOM from "react-dom";
import "./global.scss";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./Redux/store";

import Feed from "./pages/Feed";
import Navbar from "./components/Navbar";
import * as ROUTES from "./constants/routes";
import * as serviceWorker from "./serviceWorker";

const Index = () => (
    <Router>
        <Provider store={configureStore()}>
            <Navbar />

            <Switch>
                <Redirect from="/" exact to="/feed" />

                <Route exact path={ROUTES.FEED} component={Feed} />
            </Switch>
        </Provider>
    </Router>
);

ReactDOM.render(<Index />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
