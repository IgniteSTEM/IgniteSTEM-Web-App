import * as path from 'path';

// Functional controllers go here:
// ...

// Make modular so not all routes are here
import apiRoutes from './apiRoutes';
import userRoutes from './userRoutes';
import loginRoutes from './loginRoutes';
import dayOfRoutes from './dayOfRoutes';

// Requires an app as an input so can direct the user accordingly
export default (app) => {
    /* ********************  Routes  ******************** */
    apiRoutes(app);
    userRoutes(app);
    loginRoutes(app);
    dayOfRoutes(app);

    /* ********************  Client  ******************** */

    // Serve the static client index.js build file
    app.get('/scripts/index.js', (req, res) => {
        const __dirname = process.env.PWD;
        res.sendFile('index.js', { root: path.join(__dirname, './client/dist') });
    });

    app.get('/favicon.png', (req, res) => {
        const __dirname = process.env.PWD;
        res.sendFile('favicon.png', { root: path.join(__dirname, './client/dist') });
    });

    // Client app entry index.html file - react router
    app.get('*', (req, res) => {
        const __dirname = process.env.PWD;
        res.sendFile('index.html', { root: path.join(__dirname, './client/dist') }); // Render client
    });
};
