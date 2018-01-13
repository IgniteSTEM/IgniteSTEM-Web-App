import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// Get the component
import RouterComponent from '../router/index.jsx';

// Import actions you'd like to make usable to a component
import { userLogout } from '../Actions/MainActions';

// Map the redux states to props
const mapStateToProps = (state) => ({
    fetchingUser: state.main.fetchingUser,
    loggedIn: state.main.loggedIn,
    currentUser: state.main.currentUser,
});

// Map actions to props
const mapDispatchToProps = (dispatch) => ({
    userLogout: (input) => (
        dispatch(userLogout())
   ),
});

// Connects your component to the store using the previously defined functions
export default withRouter(connect(
    mapStateToProps, // Add the states
    mapDispatchToProps // Add the actions
)(RouterComponent)); // Connect them to the component
