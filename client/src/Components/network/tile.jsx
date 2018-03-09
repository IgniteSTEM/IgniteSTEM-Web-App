import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, browserHistory } from 'react-router-dom';

// Style sheet
import '../../Styles/lessonPlanTile.scss';

class LessonPlanTile extends Component {

    // Initiation state
    constructor(props) {
        super(props);
        this.state = { hover: false };
    }

    // Start hover
    onMouseEnter() {
        this.setState({
            hover: true,
        });
    }

    // End hover
    onMouseLeave() {
        this.setState({
            hover: false,
        });
    }

    render() {
        const {
            title,
            subtitle,
            author,
            description,
            link,
            image,
        } = this.props.lessonPlan;

        // Background image
        const backgroundStyle = {
            backgroundImage: `url(${image})`,
        };

        // Hover classes
        let backgroundClass = 'lesson-plan-tile-background'; // Background class
        let tileTextClass = 'lesson-plan-tile-text'; // Tile text

        return (
            <a
                className={`lesson-plan-tile`}
                href={link}
                target="_blank"
                onMouseEnter={() => { this.onMouseEnter(); }}
                onMouseLeave={() => { this.onMouseLeave(); }}
            >
                <div className="lesson-plan-tile-content">
                    <div className={tileTextClass}>
                        <div className="lesson-plan-tile-visible-text">
                            <div className="lesson-plan-tile-category">Category</div>
                            <span className="lesson-plan-tile-title">{title}</span><br/>
                            <span className="lesson-plan-tile-subtitle">{subtitle}</span><br/>
                        </div>
                        <div className="lesson-plan-tile-description">{description}</div><br />
                    </div>
                </div>

                <div className={backgroundClass} style={backgroundStyle} />
            </a>
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
        image: PropTypes.string.isRequired,
    }).isRequired,

    // Redux/Router window location data
    location: PropTypes.shape({
        hash: PropTypes.string.isRequired,
        pathname: PropTypes.string.isRequired,
        search: PropTypes.string.isRequired,
    }).isRequired,
};

export default LessonPlanTile;
