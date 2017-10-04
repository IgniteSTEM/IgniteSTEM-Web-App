// ES6-style imports
import * as fs from 'fs';
import * as path from 'path';
import Sequelize from 'sequelize';

const configFile  = require('../config/config.json');

var env             = process.env.NODE_ENV || 'development'; // Determine if using development
const __dirname     = process.env.PWD; // Could break on prod
const currentDir = path.join(__dirname, './server/src/models');

// Regular `module.filename` is undefined in local dev
const filename = (module.filename !== undefined) ? module.filename : 'index.js';
var basename  = path.basename(filename);

var db = {};

// I use the node-config package to manage the DB config you can choose
// to stick with the original version. And I removed environment variable
// support because I don't need it.
let sequelize = {};
if (process.env.NODE_ENV) {
    // From the environment, extract the key with the name provided in the config as use_env_variable
    // and use that to establish a connection to our database.
    sequelize = new Sequelize(process.env.DATABASE_URL); // Establish connection using environment variables

} else {
    var config    = configFile[env]; // If local, use config

    sequelize = new Sequelize(config.database, config.username, config.password, config); // Connect
}

fs
    .readdirSync(currentDir)
    .filter(function(file) {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(function(file) {
        var model = sequelize.import(path.join(currentDir, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function(modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
