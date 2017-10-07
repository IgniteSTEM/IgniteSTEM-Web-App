import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
// import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import { BrowserRouter as Switch } from 'react-router-dom';
import PropTypes from 'prop-types'; // For prop validation

// Components
import Home from '../Components/home/index.jsx';
import Profile from '../Components/profile/index.jsx';
import Login from '../Containers/LoginContainer';

// Navigation bar
import NavBar from '../Components/partials/header.jsx';

// Loading screen while fetching current user information
import FullscreenLoading from '../Components/loading/fullscreen-loading.jsx';

class MainRouter extends Component {

    // Only matters if the user is logged in
    checkLogin(component) {
        if (this.props.loggedIn) return component;

        this.props.history.push('/login');
        return <Login />;
    }

    render() {
        const {
            fetchingUser,
            loggedIn,
            currentUser,
        } = this.props;

        // If user data not yet retrieved, display the loading screen
        if (fetchingUser) return <FullscreenLoading />;

        return (
            <div>
                <NavBar history={history} loggedIn={loggedIn} user={currentUser} />
                <Route exact path="/" component={Home} />
                <Route path="/profile" render={() => this.checkLogin(<Profile />)} />
                <Route path="/login" component={Login} />
            </div>
        );
    };
}

// Prop validation
MainRouter.propTypes = {
    history: PropTypes.object.isRequire, // Passed by parent, not redux
    fetchingUser: PropTypes.bool.isRequired, // Whether fetching the current user right now
    loggedIn: PropTypes.bool.isRequired, // Whether a user is logged in
    currentUser: PropTypes.object.isRequired, // Empty if not logged in
};

export default MainRouter;
