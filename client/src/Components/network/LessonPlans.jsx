import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LessonPlanTile from './tile.jsx'

// Import lesson plans (TODO: Move to server)
import lessonPlanData from './lessonPlans.js';

class LessonPlans extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const lessonPlanNodes = lessonPlanData.map((lessonPlan) => <LessonPlanTile lessonPlan={lessonPlan} />);
        return (
            <div>
                {lessonPlanNodes}
            </div>
        )
    }
}

export default LessonPlans;
