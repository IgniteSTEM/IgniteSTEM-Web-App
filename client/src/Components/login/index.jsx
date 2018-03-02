import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import styles
import '../../Styles/login.scss';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state ={
            data: {
                username: '',
                password: '',
            }
        };
    }

    editField(event) {
        const id = event.target.id; // Get id
        const updatedData = { ...this.state.data }; // Copy data
        updatedData[id] = event.target.value; // Update value
        this.setState({ data: updatedData }); // Update state
    }

    login(event) {
        event.preventDefault(); // Prevent automatic redirect
        const {
            username,
            password,
        } = this.state.data;
        if (username !== '' && password !== '') {
            this.props.userLogin(username, password) // Send login request
                .then((response) => {
                    if (response.success) {
                        // Set the new location after the login is a success
                        const newLocation = (this.props.referrer != null) ? this.props.referrer : '/';
                        this.props.history.push(newLocation); // Go to new location
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    goToRegister(event) {
        this.props.history.push('/register'); // Go to homepage
    }

    render() {
        const {
            error,
        } = this.props;
        return (
            <div className="login">
                <div className="login-left">
                    <h3>Log In</h3>
                    { error !== '' ? (
                        <p>{error}</p>
                    ) : null }
                    <form onSubmit={(event) => this.login(event)}>
                        <p>Username or Email</p>
                        <input className="input-text" type="text" id="username" onChange={(event) => this.editField(event)} />
                        <p>Password</p>
                        <input className="input-text" type="password" id="password" onChange={(event) => this.editField(event)} />
                        <br />
                        <input className="input-button" type="submit" value="LOG IN" />
                    </form>
                </div>
                <div className="login-right">
                    <h3>Register</h3>
                    <p>
                        If you are a teacher, principal, or tech leader, create a username to become a part of a huge community of innovators in the classroom. Get connected today and find educators with a passion to bring and improve the STEM opportunities in their area.
                    </p>
                    <button className="input-button" onClick={() => this.goToRegister()}>REGISTER</button>
                </div>
            </div>
        );
    }
};

LoginScreen.propTypes = {
    history: PropTypes.object.isRequired,
    userLogin: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired,
    referrer: PropTypes.string.isRequired,
};

export default LoginScreen;
