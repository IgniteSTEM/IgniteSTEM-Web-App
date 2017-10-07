import * as express from 'express';
import { login, logout, currentUser } from '../controllers/login';

export default (app: express.Application) => {
    app.post('/api/login', login);
    app.get('/api/logout', logout);
    app.get('/api/users/current', currentUser);
}
