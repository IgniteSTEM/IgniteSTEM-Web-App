import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, browserHistory } from 'react-router-dom';

// Style sheet
import '../../Styles/sidebar.scss';

class Sidebar extends Component {
    // If active page, custom class
    currentPageClass(path) {
        const currentPath = this.props.location.pathname;
        if (path === currentPath) {
            return 'nav-link-selected';
        }
        return ''; // No custom className
    }

    render() {
        const {
            loggedIn,
            user,
            userLogout, // Logout function
        } = this.props;
        return (
            <div className="nav">
                <div className="nav-link">
                    <Link className={this.currentPageClass('/')} to={'/'}>Ignite Network</Link>
                </div>
                <div className="nav-link">
                    <Link className={this.currentPageClass('/about')} to={'/conferences'}>Conferences</Link>
                </div>
                <div className="nav-link">
                    <Link className={this.currentPageClass('/about')} to={'/about'}>HIAB</Link>
                </div>
                <div className="nav-link">
                    <Link className={this.currentPageClass('/about')} to={'/about'}>Contact Us</Link>
                </div>
                <div className="nav-link">
                    <Link className={this.currentPageClass('/register')} to={'/register'}>JOIN</Link>
                </div>
                <div className="nav-link">
                    { loggedIn ?
                            <span>
                        <Link className={this.currentPageClass('/profile')} to={'/profile'}>WELCOME, {user.first_name}</Link>
                        <br />
                        <a onClick={() => userLogout()}>LOG OUT</a>
                    </span>
                    :
                        <Link className={this.currentPageClass('/login')} to={'/login'}>LOGIN</Link>
                    }
                </div>
            </div>
        );
    }
};

Sidebar.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    userLogout: PropTypes.func.isRequired,

    // Redux/Router window location data
    location: PropTypes.shape({
        hash: PropTypes.string.isRequired,
        pathname: PropTypes.string.isRequired,
        search: PropTypes.string.isRequired,
    }).isRequired,
};

export default Sidebar;
