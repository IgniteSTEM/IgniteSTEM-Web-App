const sessions = require('client-sessions'); // User sessions

const sessionAuth = (app) => {
    // Docs: https://github.com/mozilla/node-client-sessions
    app.use(sessions({
        cookieName: 'session', // Cookie name dictates the key name added to the request object
        secret: 'blargadeeblargblarg', // should be a large unguessable string (store in environment variables eventually)
        duration: 4 * 60 * 60 * 1000, // how long the session will stay valid in ms (4 hours)
        activeDuration: 1000 * 60 * 60 * 2, // if expiresIn < activeDuration, the session will be extended by activeDuration milliseconds
    }));

    app.use((req, res, next) => {
        // APIs that client must be logged in for
        // Best practice: APIs that are accessible via the client but require a login
        // APIs are already protected by a Basic Auth, this is just a safegaurd
        const blacklisted = [
            '\/api\/users\/create',
        ];
        const path = req.originalUrl;
        if (!req.session.user) {
            console.log('No session');
            if (new RegExp(blacklisted.join('|'), 'i').test(path)) { // If on the blacklist
                res.status(401).send('Please log in');
            } else { // Allowed
                next();
            }
        } else {
            console.log(`Session with user: ${req.session.user.username}`);
            next();
        }
    });
};

module.exports = sessionAuth;
