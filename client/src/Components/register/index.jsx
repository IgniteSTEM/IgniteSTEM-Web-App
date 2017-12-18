import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import styles
import '../../Styles/register.scss';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state ={
            data: {
                username: '',
                password: '',
            }
        };
    }

    render() {
        return (
            <div className="register">
                Register
            </div>
        );
    }
};

Register.propTypes = {
    history: PropTypes.object.isRequired,
};

export default Register;
