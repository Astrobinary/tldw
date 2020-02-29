import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import configureStore, { history } from "./redux/store";
import * as serviceWorker from "./serviceWorker";
import "./global.scss";

//Containers
import Feed from "./containers/Feed";
import Streamers from "./containers/Streamers";
import Games from "./containers/Games";
import Playlists from "./containers/Playlists";

//Components
import Navbar from "./components/Navbar";
import _playlistPlayerView from "./components/PlaylistPlayerView";
import _singlePlayerView from "./components/SinglePlayerView";


const isIE = () => {
    var ua = window.navigator.userAgent; //Check the userAgent property of the window.navigator object
    var msie = ua.indexOf("MSIE "); // IE 10 or older
    var trident = ua.indexOf("Trident/"); //IE 11

    return msie > 0 || trident > 0;
};

let Index;
if (isIE()) {
    //TODO: Create an browser landing page.
    Index = () => <div>You need to upgrade your shit bruh.</div>;
} else {
    Index = () => (
        <Provider store={configureStore()}>
            <ConnectedRouter history={history}>
                <Navbar />
                <Switch>
                    <Redirect from="/" exact to="/feed" />
                    <Route exact path="/feed" component={Feed} />
                    <Route exact path="/feed/:from/playlist" component={_playlistPlayerView} />
                    <Route exact path="/feed/:from/single" component={_singlePlayerView} />


                    <Route exact path="/streamers" component={Streamers} />
                    <Route exact path="/games" component={Games} />
                    <Route exact path="/playlists" component={Playlists} />
                </Switch>
            </ConnectedRouter>
        </Provider>
    );
}

ReactDOM.render(<Index />, document.getElementById("root"));

serviceWorker.register();
