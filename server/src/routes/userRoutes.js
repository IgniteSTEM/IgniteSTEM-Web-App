import { createUser, list } from '../controllers/users';

export default (app) => {
    app.post('/api/users/create', createUser );
    app.get('/api/users', list );
};
