import * as types from '../Constants/MainActionTypes';

const initialState = {
    error: '', // Any errors
    loadingUsers: true, // Initially loading
    users: [], // Initally empty array
};

const HomeReducer = (state = initialState, action) => {
    // The app can decide what to do based on the action type
    // The return object for this function will be the new state
   switch (action.type) {
        case types.FETCHING_USERS:
            return {
                ...state,
                loadingUsers: true,
            };
       case types.RECEIVED_USERS:
            return {
                ...state,
                loadingUsers: false,
                users: action.users,
            };
       default: // Default, no state change
           return state;
   };
   return state;
};

export default HomeReducer;
