import * as types from '../Constants/MainActionTypes';

const initialState = {
    fetchingUser: true, // Fetching immediately after page render
    loggedIn: false, // Default to no user logged in
    currentUser: {}, // Start as empty object
};

const MainReducer = (state = initialState, action) => {
    // The app can decide what to do based on the action type
    // The return object for this function will be the new state
   switch (action.type) {
       case types.USER_LOGGED_IN:
           return {
               ...state,
               fetchingUser: false,
               loggedIn: true,
               currentUser: action.user, // Update user state
           };
       case types.USER_NOT_LOGGED_IN:
           return {
               ...state,
               fetchingUser: false,
               loggedIn: false,
               currentUser: {}, // Back to empty user
           };
       default: // Default, no state change
           return state;
   };
   return state;
};

export default MainReducer;
