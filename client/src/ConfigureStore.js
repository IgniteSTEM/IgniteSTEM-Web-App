import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger'; // For debugging in the console
import { routerReducer, routerMiddleware } from 'react-router-redux';

import mainReducers from './Reducers'; // Import the reducer (client/src/Reducers/index.js)

// Thunk middleware is used to allow functions to be passed as actions
const configureStore = (browserHistory) => {
    const middlewares = [thunkMiddleware];

    // If debug mode is on, log state changes and actions to the console
    const debuggerMode = true; // Can also be determined by process.ENV variables
    if (debuggerMode) {
        const loggerMiddleware = createLogger();
        middlewares.push(loggerMiddleware); // Add middleware
    }

    middlewares.push(
        routerMiddleware(browserHistory)
    )

    // Creates store that handles the complete state tree of app
    // This is exported and used by the provider
    return createStore(combineReducers({ // Combine with router reducer
        ...mainReducers,
        routing: routerReducer
    }), applyMiddleware(...middlewares));
}

export default configureStore;
