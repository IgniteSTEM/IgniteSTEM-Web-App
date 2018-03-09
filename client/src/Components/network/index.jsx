import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LessonPlanTile from './tile.jsx'

// Import styles
import '../../Styles/network.scss';

// Import lesson plans (TODO: Move to server)
import lessonPlanData from './lessonPlans.js';

class Home extends Component {
    constructor(props) {
        super(props);
        props.getUsers(); // Initiate the API fetch
    }

    render() {
        const lessonPlanNodes = lessonPlanData.map((lessonPlan) => <LessonPlanTile lessonPlan={lessonPlan} />);
        return (
            <div class="lesson-plans">
                {lessonPlanNodes}
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
