import React, { Component } from 'react';
import PropTypes from 'prop-types';

// React-Select form element
import Select from 'react-select';
import 'react-select/dist/react-select.css';

// Import styles
import '../../Styles/register.scss';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                username: '',
                email: '',
                occupation: '',
                school: '',
                schoolType: '',
                password: '',
                confirmPassword: '',
            }
        };
    }

    editField(event) {
        const newData = this.state.data;
        const id = event.target.id;
        const value = event.target.value;
        newData[id] = value;
        this.setState({
            data: newData,
        });
    }

    handleSchoolTypeChange(selection) {
        const newData = this.state.data;
        newData.schoolType = selection.value;
        this.setState({ data: newData });
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = this.state.data;
        Object.keys(data).forEach(key => {
            if (data[key] == null) {
                console.log(`${key} not filled out`);
            }
        });
    }

    render() {
        const schoolTypes = [
            { value: 'primary', label: 'Primary School' },
            { value: 'elementary', label: 'Elementary School' },
            { value: 'middle', label: 'Middle School' },
            { value: 'high', label: 'High School' },
        ];
        return (
            <div className="register">
                <h3>Register For IgniteSTEM</h3>
                <form onSubmit={(event) => this.handleSubmit(event)}>
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
                    <Select
                        name="schoolType"
                        value={this.state.data.schoolType}
                        onChange={(value) => this.handleSchoolTypeChange(value)}
                        options={schoolTypes}
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
