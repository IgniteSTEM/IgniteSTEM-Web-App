import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, browserHistory } from 'react-router-dom';

// Style sheet
import '../../Styles/lessonPlanTile.scss';

class LessonPlanTile extends Component {

    render() {
        const {
            title,
            subtitle,
            author,
            description,
            link,
        } = this.props.lessonPlan;
        return (
            <div className="lesson-plan-tile">
                {title}
            </div>
        );
    }
};

LessonPlanTile.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    userLogout: PropTypes.func.isRequired,

    // Lesson plan data
    lessonPlan: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    }).isRequired,

    // Redux/Router window location data
    location: PropTypes.shape({
        hash: PropTypes.string.isRequired,
        pathname: PropTypes.string.isRequired,
        search: PropTypes.string.isRequired,
    }).isRequired,
};

export default LessonPlanTile;
