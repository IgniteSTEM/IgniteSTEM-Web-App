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
                email: '',
                occupation: '',
                school: '',
                schoolType: '',
                password: ''
                confirmPassword: '',
            }
        };
    }

    render() {
        return (
            <div className="register">
                <h3>Register For IgniteSTEM</h3>
                <form onSubmit={(event) => this.login(event)}>
                    <p>Username</p>
                    <input
                        className="input-text"
                        type="text"
                        id="username"
                        onChange={(event) => this.editField(event)}
                    />

                    <p>Email</p>
                    <input
                        className="input-text"
                        type="text"
                        id="email"
                        onChange={(event) => this.editField(event)}
                    />

                    <p>Occupation</p>
                    <input
                        className="input-text"
                        type="text"
                        id="occupation"
                        onChange={(event) => this.editField(event)}
                    />

                    <p>Which school do you work at?</p>
                    <input
                        className="input-text"
                        type="text"
                        id="school"
                        onChange={(event) => this.editField(event)}
                    />

                    <p>Do you teach/lead a primary, elementary, middle, or high school?</p>
                    <input
                        className="input-text"
                        type="text"
                        id="schoolType"
                        onChange={(event) => this.editField(event)}
                    />

                    <p>Password</p>
                    <input
                        className="input-text"
                        type="password" id="password"
                        onChange={(event) => this.editField(event)}
                    />

                    <p>Confirm Password</p>
                    <input
                        className="input-text"
                        type="password" id="confirmPassword"
                        onChange={(event) => this.editField(event)}
                    />

                    <br />

                    <input className="input-button" type="submit" value="REGISTER" />
                </form>
            </div>
        );
    }
};

Register.propTypes = {
    history: PropTypes.object.isRequired,
};

export default Register;
