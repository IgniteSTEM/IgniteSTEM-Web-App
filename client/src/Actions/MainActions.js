import 'whatwg-fetch'; // Fetch requests
import * as types from '../Constants/MainActionTypes';

const actionError = (error) => ({
    type: types.ACTION_ERROR,
    error,
});

const loginRequest = () => ({
    type: types.USER_LOGIN_REQUEST,
});

const loggedIn = (user) => ({
    type: types.USER_LOGGED_IN,
    user,
});

const loginFailed = (error) => ({
    type: types.USER_LOGIN_FAILED,
    error,
});

const notLoggedIn = () => ({
    type: types.USER_NOT_LOGGED_IN,
});

export const fetchLoginStatus = () => {
    const url = '/api/users/current';

    // Returning a promise allows you to use the 'dispatch' function in the child scope
    return (dispatch) => {
        // Return the contents of the fetch promise
        return fetch(url, { // See watwg-fetch for docs
            method: 'GET',
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            credentials: 'same-origin', // If same origin
        }).then(response => response.json()) // Parse response
        .then(json => {
            if (json.logged_in) {
                console.log('Signed in with current user:', json);
                dispatch(loggedIn(json.user)); // User logged in
            } else {
                dispatch(notLoggedIn()); // User not logged in
            }
        })
        .catch(error => { // Catch any errors
            dispatch(actionError(error));
        });
    };
};

export const userLogin = (username, password) => {
    return (dispatch) => {
        dispatch(loginRequest());
        return fetch('/api/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    "Content-Type": "application/json"
                },
                credentials: 'same-origin', // Will set cookie 'set-cookie' only if this is set to 'same-origin'
                body: JSON.stringify({
                    username,
                    password,
                }),
            })
            .then((response) => response.json()) // Parse response
            .then((json) => {
                if (json.success) {
                    dispatch(loggedIn(json.user));
                } else {
                    dispatch(loginFailed(json.error));
                }
                return json; // Return json as promise response
            }).catch((error) => {
                dispatch(actionError(error));
            });
    };
}

export const userLogout = () => {
    return (dispatch) => {
        return fetch('/api/logout', {
                method: 'GET',
                credentials: 'same-origin', // Reset cookie
            })
            .then((response) => response.json()) // Parse response
            .then((json) => {
                if (json.success) { // If successful, user has been logged out
                    dispatch(notLoggedIn(json.user));
                }
                return json; // Return json as promise response
            }).catch((error) => {
                dispatch(actionError(error));
            });
    };
}
