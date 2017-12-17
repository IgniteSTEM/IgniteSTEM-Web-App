import search from '../controllers/search';

export default (app) => {
    app.get('/api/search', search);
};
