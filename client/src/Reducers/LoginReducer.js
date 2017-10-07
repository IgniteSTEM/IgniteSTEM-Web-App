import * as types from '../Constants/MainActionTypes';

const initialState = {
    error: '', // Login errors
};

const LoginReducer = (state = initialState, action) => {
    // The app can decide what to do based on the action type
    // The return object for this function will be the new state
   switch (action.type) {
        case types.USER_LOGGED_IN:
            return {
                ...state,
                loggedIn: true,
                currentUser: action.user, // Update user state
            };
       case types.USER_LOGIN_FAILED:
            return {
                ...state,
                loggedIn: false,
                error: action.error,
            };
       default: // Default, no state change
           return state;
   };
   return state;
};

export default LoginReducer;
