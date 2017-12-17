const User = require('../../models').User;

const search = (req, res) => {
    return User
        .findAll({}) // Get all quotes
        .then((users) => {
            // Filter out password attributes
            users.forEach((user) => { delete user.dataValues.password });

            let sortedUsers = users; // Modify this array
            const query = req.body.query; // The search query

            /**************** Code goes here ****************/

            /************************************************/

            res.status(200).send(sortedUsers);
        }) // Return ranked array of users based on search query
        .catch((error: Error) => res.status(400).send(error)); // Error
};

export default search;
