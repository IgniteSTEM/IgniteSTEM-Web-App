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

class MainRouter extends Component {

    render() {
        return (
            <div>
                <NavBar history={history} />
                <Route exact path="/" component={Home} />
                <Route path="/profile" component={Profile} />
                <Route path="/login" component={Login} />
            </div>
        );
    };
}

// Prop validation
MainRouter.propTypes = {
    test: PropTypes.bool.isRequired,
};

export default MainRouter;
