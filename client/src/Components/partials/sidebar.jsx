import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, browserHistory } from 'react-router-dom';

// Style sheet
import '../../Styles/sidebar.scss';

class Sidebar extends Component {
    // If active page, custom class
    currentPageClass(path) {
        console.log(this.props.location);
        const currentPath = this.props.location.pathname;
        if (path === currentPath) {
            return 'sidebar-links-selected';
        }
        return ''; // No custom className
    }

    render() {
        const {
            loggedIn,
            user,
        } = this.props;
        console.log(this.props);
        return (
            <div className="sidebar">
                <ul className="sidebar-links">
                    <li>
                        <Link className={this.currentPageClass('/')} to={'/'}>DIRECTORY</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>ABOUT</Link>
                    </li>
                    <li>
                        <Link to={'/join'}>JOIN</Link>
                    </li>
                    <li>
                        { loggedIn ?
                            <Link to={'/profile'}>WELCOME, {user.first_name}</Link>
                        :
                                <Link to={'/login'}>LOGIN</Link>
                        }
                    </li>
                </ul>
            </div>
        );
    }
};

Sidebar.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,

    // Redux/Router window location data
    location: PropTypes.shape({
        hash: PropTypes.string.isRequired,
        pathname: PropTypes.string.isRequired,
        search: PropTypes.string.isRequired,
    }).isRequired,
};

export default Sidebar;
