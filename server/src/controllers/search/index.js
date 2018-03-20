const User = require('../../models').User;

import searchAlgorithm from './search' // Get the search algorithm

const search = (req, res) => {
    return User
        .findAll({}) // Get all quotes
        .then((users) => {
            // Filter out password attributes
            users.forEach((user) => { delete user.dataValues.password });

            let userData = users.map((user) => user.dataValues);

            // let sortedUsers = users; // Modify this array
            const query = req.body.query; // The search query

            /**************** Code goes here ****************/
            let sortedUsers = searchAlgorithm(query, userData)
            /************************************************/

            res.status(200).send(sortedUsers);
        }) // Return ranked array of users based on search query
        .catch((error: Error) => {
            console.log(error)
            return res.status(400).send(error)
        }); // Error
};

export default search;
