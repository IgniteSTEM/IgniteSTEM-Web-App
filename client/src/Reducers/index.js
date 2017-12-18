import { combineReducers } from 'redux';

// Import all the reducers
import mainReducer from './MainReducer';
import loginReducer from './LoginReducer';
import registerReducer from './RegisterReducer';

// Export for use in the entry index.js file
export default allReducers = {
    main: mainReducer,
    login: loginReducer,
    register: registerReducer,
};
