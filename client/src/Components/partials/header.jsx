import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, browserHistory } from 'react-router-dom';

// Style sheet
import '../../Styles/header.scss';

class NavBar extends Component {
    render() {
        const {
            loggedIn,
            user,
        } = this.props;
        return (
            <div className="header">
                <Link to={'/'}>Home</Link>
                { loggedIn ?
                    <Link to={'/profile'}>Welcome, {user.first_name}</Link>
                :
                        <Link to={'/login'}>Login</Link>
                }
            </div>
        );
    }
};

NavBar.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
};

export default NavBar;
