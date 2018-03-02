import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import styles
import '../../Styles/network.scss';

class Home extends Component {
    constructor(props) {
        super(props);
        props.getUsers(); // Initiate the API fetch
    }

    render() {
        const userTiles = this.props.users.map((user) => {
            const {
                id,
                username,
                first_name,
                last_name,
                school,
                subjects,
                interests,
                bio,
                twitter_username,
                createdAt,
                updatedAt,
            } = user;
            return (
                <div className="home-tile">
                    {/* <img src="http://im.vsco.co/1/5596ee97bbcb95169892/593d910a6b20f55867578928/vsco_061117.jpg?w=1006&dpr=2" /> */}
                    {first_name} {last_name}
                </div>
            )
        });
        return (
            <div>
                <button onClick={() => this.props.getUsers()}>Refresh</button>
                <hr />
                {userTiles}
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
