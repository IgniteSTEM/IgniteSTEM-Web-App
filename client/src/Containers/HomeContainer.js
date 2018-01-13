import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// Get the component
import HomeComponent from '../Components/home/index.jsx';

// Import actions you'd like to make usable to a component
import { getUsers } from '../Actions/MainActions';

// Map the redux states to props
const mapStateToProps = (state) => ({
    error: state.home.error, // Login errors
    loadingUsers: state.home.loadingUsers,
    users: state.home.users,
});

// Map actions to props
const mapDispatchToProps = (dispatch) => ({
    getUsers: () => (
        dispatch(getUsers())
   ),
});

// Connects your component to the store using the previously defined functions
export default withRouter(connect(
    mapStateToProps, // Add the states
    mapDispatchToProps // Add the actions
)(HomeComponent)); // Connect them to the component
