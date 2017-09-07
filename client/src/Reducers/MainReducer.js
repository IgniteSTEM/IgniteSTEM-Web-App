import * as types from '../Constants/MainActionTypes';

const initialState = {
    test: false,
};

const MainReducer = (state = initialState, action) => {
    // The app can decide what to do based on the action type
    // The return object for this function will be the new state
   switch (action.type) {
       case types.ACTION_ERROR: // Test
           return state;
       default: // Default, no state change
           return state;
   };
   return state;
};

export default MainReducer;
