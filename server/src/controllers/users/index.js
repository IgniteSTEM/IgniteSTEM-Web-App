const User = require('../../models').User;

export const list = (req, res) => {
    return User
        .findAll({}) // Get all quotes
        .then((users) => {
            // Filter out password attributes
            users.forEach((user) => { delete user.dataValues.password });
            console.log(users);
            res.status(200).send(users);
        }) // Return array of quotes
        .catch((error: Error) => res.status(400).send(error)); // Error
};

export const checkUsername = (req, res) => {
    const {
        username,
    } = req.body; // Get username
    return User.
        findAll({
            where: {
                username, // See if user exists with that username
            }
        })
        .then((users) => {
            usernameAvailable = (users.length == 0); // Username available if none
            res.status(200).send({
                available: usernameAvailable,
            });
        })
        .catch((error: Error) => res.status(400).send(error)); // Error
}

export const createUser = (req, res) => {
    console.log('Created user');
    const {
        username,
        email,
        password,
        first_name,
        last_name,
        organization,
    } = req.body; // Information from the request body JSON data

    return User
        .create({
            username,
            email,
            password,
            first_name,
            last_name,
            organization,
        })
        .then((user) => { // Success: created new quote entry
            delete user.dataValues.password; // Remove password
            res.status(200).send(user);
        })
        .catch((error: Error) => {
            console.log(error);
            res.status(400).send(error);
        }); // Error
};
