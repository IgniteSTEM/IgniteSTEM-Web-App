import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import styles
import '../../Styles/network.scss';

import LessonPlans from './LessonPlans.jsx';

class Home extends Component {
    constructor(props) {
        super(props);
        props.getUsers(); // Initiate the API fetch
    }

    render() {
        return (
            <div>
                <div className="network-sidebar">
                    <div className="network-sidebar-content">
                        Search
                    </div>
                </div>
                <div className="lesson-plans">
                    <LessonPlans />
                </div>
            </div>
        )
    }
}

Home.propTypes = {
    history: PropTypes.object.isRequired,
    error: PropTypes.string.isRequired,
    loadingUsers: PropTypes.bool.isRequired,
    users: PropTypes.array.isRequired,

    // Actions
    getUsers: PropTypes.func.isRequired,
};

export default Home;
