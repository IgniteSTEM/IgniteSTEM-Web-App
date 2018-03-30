import * as path from 'path';

export default (app) => {
    app.get('/api/media/blue_fire.png', (req, res) => {
        const __dirname = process.cwd();
        res.sendFile('fire_blue.png', { root: path.join(__dirname, './client/media') });
    });
};
