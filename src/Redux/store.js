import {createStore, applyMiddleware, compose} from "redux";
//thunk used to call dispatch directly and can make asynchronous requests
import thunk from "redux-thunk";
import rootReducer from "./rootReducer.js";

const initialState = {};
const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer, initialState,
    composeEnhancers(
        applyMiddleware(...middleware) 
    ));

export default store;