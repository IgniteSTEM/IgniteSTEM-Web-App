import 'whatwg-fetch'; // Fetch requests
import * as types from '../Constants/MainActionTypes';

const actionError = (error) => ({
    type: types.ACTION_ERROR,
    error,
});
