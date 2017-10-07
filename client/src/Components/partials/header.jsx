import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, browserHistory } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div>
                <Link to={'/'}>Home</Link>
                <Link to={'/profile'}>Profile</Link>
                <Link to={'/login'}>Login</Link>
            </div>
        );
    }
};

NavBar.propTypes = {
};

export default NavBar;
