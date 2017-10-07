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
                        this.props.history.push('/'); // Go to the homepage if login was successful
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    render() {
        const {
            error,
        } = this.props;
        return (
            <div className="login">
                <h3>Please Log In</h3>
                { error !== '' ? (
                    <p>{error}</p>
                ) : null }
                <form onSubmit={(event) => this.login(event)}>
                    <input type="text" id="username" placeholder="Username" onChange={(event) => this.editField(event)} />
                    <input type="password" id="password" placeholder="Password" onChange={(event) => this.editField(event)} />
                    <input type="submit" />
                </form>
            </div>
        );
    }
};

LoginScreen.propTypes = {
    history: PropTypes.object.isRequired,
    userLogin: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired,
};

export default LoginScreen;
