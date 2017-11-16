import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, browserHistory } from 'react-router-dom';

// Frontend rendering actions
import { getSubheader } from '../../Actions/FrontendActions.js';

// Style sheet
import '../../Styles/header.scss';

class Header extends Component {
    render() {
        const {
            location,
        } = this.props;

        const subheader = getSubheader(location.pathname);
        return (
            <div className="header">
                <h2>IGNITESTEM</h2>
                <p>{subheader}</p>
            </div>
        );
    }
};

Header.propTypes = {
    // Redux/Router window location data
    location: PropTypes.shape({
        hash: PropTypes.string.isRequired,
        pathname: PropTypes.string.isRequired,
        search: PropTypes.string.isRequired,
    }).isRequired,
};

export default Header;
