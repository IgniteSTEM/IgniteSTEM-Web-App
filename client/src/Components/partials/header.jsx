import React from 'react';
import PropTypes from 'prop-types';
import { Link, browserHistory } from 'react-router-dom';

const NavBar = (props) => (
    <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/profile'}>Profile</Link>
        <Link to={'/login'}>Login</Link>
    </div>
);

NavBar.propTypes = {
};

export default NavBar;
