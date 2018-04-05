import { createUser, list, checkUsername } from '../controllers/users';

export default (app) => {
    app.post('/api/users/create', createUser);
    app.get('/api/users', list);
    app.post('/api/users/checkUsername', checkUsername);
};
