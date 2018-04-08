/*
 * Verify fields (password length, username length, etc.)
 * Returns object:
 *  Success: { success: true }
 *  Failure: { success: false, error: String }
 */

// import checkUsernameAvailable from "../controllers/users";
import USER_FIELD_META from "./userConstants";

// On success, return success object
const success = () => {
    return {
        success: true,
    }
}

// On failure, return the error object
const failure = (error) => {
    return {
        success: false,
        error,
    }
}

// Given the meta properties and the entry, determine if field can be null
//  and if it is empty
const validNull = (entry, field) => {
    if (entry != null && entry != '') return true; // If filled, doesn't matter
    return USER_FIELD_META[field].allowNull; // Not filled, so return if allowed to be null
}

export checkUsername = (username) => {
    // Check if username not filled out
    if !validNull(username, 'username') return failure(`Please enter a ${USER_FIELD_META.username.description}`);

    // Username not available
    // if !checkUsernameAvailable(username) {
    //     return failure("Username is already taken");
    // }

    // Check if only alphanumeric
    if (false) {
        return failure("Username must be alphanumeric");
    }

    return success();
}

export checkEmail = (email) => {
    if !validNull(email, 'email') return failure(`Please enter a ${USER_FIELD_META.email.description}`);

    // Check if it's a valid email address
    // Email regex: https://stackoverflow.com/questions/46155/how-to-validate-email-address-in-javascript
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if !emailRegex.test(email) return failure(`Please enter a valid email ${USER_FIELD_META.address.description}`);
}

export checkPassword = (password) => {
    if !validNull(password, 'password') return failure(`Please enter a ${USER_FIELD_META.password.description}`);
}

export checkFirstName = (first_name) => {
    if !validNull(first_name, 'first_name') return failure(`Please enter a ${USER_FIELD_META.first_name.description}`);
}

export checkLastName = (last_name) => {
    if !validNull(last_name, 'last_name') return failure(`Please enter a ${USER_FIELD_META.last_name.description}`);
}

export checkOrganization = (organization) => {
    if !validNull(organization, 'organization') return failure(`Please enter a ${USER_FIELD_META.organization.description}`);
}

export checkSchool = (school) => {
    if !validNull(school, 'school') return failure(`Please enter a ${USER_FIELD_META.school.description}`);
}

export checkBio = (bio) => {
    if !validNull(bio, 'bio') return failure(`Please enter a ${USER_FIELD_META.bio.description}`);
}

export checkTwitterUsername = (twitter_username) => {
    if !validNull(twitter_username, 'twitter_username') return failure(`Please enter a ${USER_FIELD_META.twitter_username.description}`);
}

export checkSubjects = (subjects) => {
    if !validNull(subjects, 'subjects') return failure(`Please enter a ${USER_FIELD_META.subjects.description}`);
}

export checkInterests = (interests) => {
    if !validNull(interests, 'interests') return failure(`Please enter a ${USER_FIELD_META.interests.description}`);
}
