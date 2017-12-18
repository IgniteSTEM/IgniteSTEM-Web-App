import * as types from '../Constants/MainActionTypes';

const initialState = {
    currentUser: {},
    loggedIn: false,
    error: '', // Login errors
};

const RegisterReducer = (state = initialState, action) => {
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

export default RegisterReducer;
