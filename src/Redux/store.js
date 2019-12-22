import { createStore, applyMiddleware, combineReducers } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";

import sampleModule from "./modules/sample";

export const history = createBrowserHistory();

const reducer = history =>
    combineReducers({
        router: connectRouter(history),
        sampleModule
    });

export default function configureStore() {
    return createStore(reducer(history), composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk)));
}
