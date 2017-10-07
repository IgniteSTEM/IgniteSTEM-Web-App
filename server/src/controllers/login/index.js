const User = require('../../models/index.js').User;

/*
 * Parameters:
 *  req.body {
 *      username,
 *      password,
 *  }
 */
export const login = (req: Request, res: express.Response) => {
    const data = req.body;
    if (data.username === undefined || data.password === undefined) { // Empty authentication
        res.status(200).send({
            success: false,
            error: 'Please submit a username and password',
        });
        return; // Terminate
    }
    console.log(`Username: ${data.username}`);
    return User
        .findOne({
            where: {
                username: data.username,
                password: data.password,
            }
        }) // Get all quotes
        .then((user: User) => {
            if (user == null) { // Invalid credentials
                res.status(200).send({
                    success: false,
                    error: 'Invalid username & password',
                });
                return;
            }

            // Valid credentials
            console.log(`Successfully logged in user: ${user.username}`);
            delete user.password; // Don't send back password
            req.session.user = user; // Set cookie
            res.status(200).send({
                success: true,
                user, // Send user
            });
        }) // Return array of quotes
        .catch((error: Error) => {
            console.log(error);
            res.status(400).send({
                success: false,
                error,
            });
        }); // Error in request
}

export const logout = (req: Request, res: express.Response) => {
    const previousUser = req.session.user;
    req.session.reset();
    res.status(200).send({
        success: true,
        user: previousUser,
    });
}

export const currentUser = (req: Request, res: express.Response) => {
    if (req.session.user) {
        delete req.session.user.password; // Remove password
        const data = {
            logged_in: true,
            user: req.session.user,
        };
        res.status(200).send(data);
    } else {
        const data = {
            logged_in: false,
        };
        res.status(200).send(data);
    }
}
