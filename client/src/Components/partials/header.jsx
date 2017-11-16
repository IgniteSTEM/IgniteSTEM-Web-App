import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, browserHistory } from 'react-router-dom';

// Style sheet
import '../../Styles/header.scss';

class Header extends Component {
    render() {
        const {
            subheader,
        } = this.props;
        return (
            <div className="header">
                <h2>IGNITESTEM</h2>
                <p>{subheader}</p>
            </div>
        );
    }
};

Header.propTypes = {
    subheader: PropTypes.string.isRequired,
};

export default Header;
