import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import styles
import '../../Styles/home.scss';

class Home extends Component {
    render() {
        return (
            <div>
                Hello, world.
            </div>
        )
    }
}

Home.propTypes = {
    history: PropTypes.object.isRequired,
    error: PropTypes.string.isRequired,
    loadingUsers: PropTypes.bool.isRequired,
    users: PropTypes.array.isRequired,
};

export default Home;
