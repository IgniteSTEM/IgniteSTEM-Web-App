import { testFunction } from '../controllers/test';

export default (app) => {
    app.get('/api/test', testFunction);
};
