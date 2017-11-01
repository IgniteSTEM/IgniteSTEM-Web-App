import schedule from '../controllers/dayOf';

export default (app) => {
    app.get('/api/schedule', schedule);
};
