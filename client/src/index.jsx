import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
// import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux'
// import { createBrowserHistory } from 'history';
import createHistory from 'history/createBrowserHistory';
// import createBrowserHistory from 'history/createBrowserHistory';

// Get the routes/entry container
import Routes from './Containers/MainContainer';

// Get the store
import configureStore from './ConfigureStore';

// Actions to call on entry
import { fetchLoginStatus } from './Actions/MainActions.js';

// Import main styling
import './Styles/constants.scss';
import './Styles/reset.scss'; // Normalize CSS
import './Styles/main.scss'; // Apply general styling
import './Styles/inputs.scss'; // Input style guide

// 'react-router-redux': Add the reducer to your store on the `routing` key

// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(createBrowserHistory(), store);
const history = createHistory();
const store = configureStore(history);

// Immediate actions
store.dispatch(fetchLoginStatus());

render(
    <Provider store={store}>
        <Router history={history}>
            <Routes history={history} />
        </Router>
    </Provider>,
    document.getElementById('main')
);
