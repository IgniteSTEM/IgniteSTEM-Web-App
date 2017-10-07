import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// Get the component
import LoginComponent from '../Components/login/index.jsx';

// Import actions you'd like to make usable to a component
import { userLogin } from '../Actions/MainActions';

// Map the redux states to props
const mapStateToProps = (state) => ({
    error: state.login.error, // Login errors
});

// Map actions to props
const mapDispatchToProps = (dispatch) => ({
    userLogin: (username, password) => (
        dispatch(userLogin(username, password))
   ),
});

// Connects your component to the store using the previously defined functions
export default withRouter(connect(
    mapStateToProps, // Add the states
    mapDispatchToProps // Add the actions
)(LoginComponent)); // Connect them to the component
