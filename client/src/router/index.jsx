import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
// import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import { BrowserRouter as Switch } from 'react-router-dom';
import PropTypes from 'prop-types'; // For prop validation

// Components
import Network from '../Containers/NetworkContainer'; // Aka the Directory
import Conferences from '../Components/conferences/index.jsx'; // Conferences screen
import About from '../Components/about/index.jsx'; // About page
import Contact from '../Components/contact/index.jsx'; // Contact page
import Profile from '../Components/profile/index.jsx';
import Login from '../Containers/LoginContainer';
import Register from '../Containers/RegisterContainer';

// Partials
import Sidebar from '../Components/partials/sidebar.jsx';
import Header from '../Components/partials/header.jsx';

// Loading screen while fetching current user information
import FullscreenLoading from '../Components/loading/fullscreen-loading.jsx';

class MainRouter extends Component {

    // Only matters if the user ~is~ logged in
    ifLoggedIn(component) {
        if (this.props.loggedIn) return component;

        this.props.loginSetReferrer(this.props.location.pathname);
        this.props.history.push('/login');
        return <Login />;
    }

    // Only show screen if ~not~ logged in
    ifLoggedOut(component) {
        if (!this.props.loggedIn) return component;

        this.props.history.push('/'); // Go to homepage
        return <Home />;
    }

    render() {
        const {
            fetchingUser,
            loggedIn,
            currentUser,
            location, // Location object
            userLogout, // Logout function
        } = this.props;

        // If user data not yet retrieved, display the loading screen
        if (fetchingUser) return <FullscreenLoading />;

        return (
            <div>
                <Sidebar
                    // React Router information
                    history={history}
                    location={location}

                    // User information
                    loggedIn={loggedIn}
                    user={currentUser}

                    // Functions
                    userLogout={userLogout}
                />
                <Header
                    location={location}
                />
                <div className="main-content">
                    <Route exact path="/" component={About} />
                    <Route path="/community" render={() => this.ifLoggedIn(<Network />)} />
                    <Route path="/conferences" component={Conferences} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/profile" render={() => this.ifLoggedIn(<Profile />)} />
                    <Route path="/login" render={() => this.ifLoggedOut(<Login />)} />
                    <Route path="/register" render={() => this.ifLoggedOut(<Register />)} />
                </div>
            </div>
        );
    };
}

// Prop validation
MainRouter.propTypes = {
    history: PropTypes.object.isRequire, // Passed by parent, not redux
    location: PropTypes.shape({
        hash: PropTypes.string.isRequired,
        pathname: PropTypes.string.isRequired,
        search: PropTypes.string.isRequired,
    }).isRequired,

    fetchingUser: PropTypes.bool.isRequired, // Whether fetching the current user right now
    loggedIn: PropTypes.bool.isRequired, // Whether a user is logged in
    currentUser: PropTypes.object.isRequired, // Empty if not logged in
    userLogout: PropTypes.func.isRequired, // Logout function
    loginSetReferrer: PropTypes.func.isRequired, // Settign the login referrer
};

export default MainRouter;
