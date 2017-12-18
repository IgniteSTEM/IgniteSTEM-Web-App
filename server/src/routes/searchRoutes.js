import search from '../controllers/search';

export default (app) => {
    app.post('/api/search', search);
};
