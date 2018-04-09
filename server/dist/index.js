(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var _fs = __webpack_require__(13);

var fs = _interopRequireWildcard(_fs);

var _path = __webpack_require__(0);

var path = _interopRequireWildcard(_path);

var _sequelize = __webpack_require__(14);

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var configFile = __webpack_require__(15); // ES6-style imports


var env = process.env.NODE_ENV || 'development'; // Determine if using development
var __dirname = process.cwd(); // Could break on prod
var currentDir = path.join(__dirname, './server/src/models');

// Regular `module.filename` is undefined in local dev
var filename = module.filename !== undefined ? module.filename : 'index.js';
var basename = path.basename(filename);

var db = {};

// I use the node-config package to manage the DB config you can choose
// to stick with the original version. And I removed environment variable
// support because I don't need it.
var sequelize = {};
if (process.env.NODE_ENV) {
    // From the environment, extract the key with the name provided in the config as use_env_variable
    // and use that to establish a connection to our database.
    sequelize = new _sequelize2['default'](process.env.DATABASE_URL); // Establish connection using environment variables
} else {
    var config = configFile[env]; // If local, use config

    sequelize = new _sequelize2['default'](config.database, config.username, config.password, config); // Connect
}

fs.readdirSync(currentDir).filter(function (file) {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
}).forEach(function (file) {
    var model = sequelize['import'](path.join(currentDir, file));
    db[model.name] = model;
});

Object.keys(db).forEach(function (modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = _sequelize2['default'];

module.exports = db;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4);
module.exports = __webpack_require__(5);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var _app = __webpack_require__(6);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// The express app we just created

var port = parseInt(process.env.PORT, 10) || 5555; // Application entry, setting up server

_app2['default'].set('port', port);

// 0.0.0.0 makes it available on your local network
// app.listen(port, '0.0.0.0');
_app2['default'].listen(port);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _routes = __webpack_require__(7);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var express = __webpack_require__(2);
var logger = __webpack_require__(24);
var bodyParser = __webpack_require__(25);
var sessionAuth = __webpack_require__(26);
var path = __webpack_require__(0);

var __dirname = process.cwd();

var app = express(); // Setup express app

// Allow cross origin requests with authorization (for API purposes)
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token, AUTHORIZATION');

    // Intercept OPTIONS method
    if (req.method === 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});

// Setup authentication and security
sessionAuth(app);

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/scripts', express['static'](path.join(__dirname, '../../client/dist')));

// Require routes and simultaneously attach app
(0, _routes2['default'])(app);

// Catch all if the routes doesn't find a valid URL
app.get('*', function (req, res) {
    return res.status(200).send('Nothing here yet...');
});

exports['default'] = app;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = __webpack_require__(0);

var path = _interopRequireWildcard(_path);

var _apiRoutes = __webpack_require__(8);

var _apiRoutes2 = _interopRequireDefault(_apiRoutes);

var _userRoutes = __webpack_require__(10);

var _userRoutes2 = _interopRequireDefault(_userRoutes);

var _loginRoutes = __webpack_require__(16);

var _loginRoutes2 = _interopRequireDefault(_loginRoutes);

var _dayOfRoutes = __webpack_require__(18);

var _dayOfRoutes2 = _interopRequireDefault(_dayOfRoutes);

var _mediaRoutes = __webpack_require__(20);

var _mediaRoutes2 = _interopRequireDefault(_mediaRoutes);

var _searchRoutes = __webpack_require__(21);

var _searchRoutes2 = _interopRequireDefault(_searchRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

// Requires an app as an input so can direct the user accordingly


// Functional controllers go here:
// ...

// Make modular so not all routes are here
exports['default'] = function (app) {
    /* ********************  Routes  ******************** */
    (0, _apiRoutes2['default'])(app);
    (0, _userRoutes2['default'])(app);
    (0, _loginRoutes2['default'])(app);
    (0, _dayOfRoutes2['default'])(app);
    (0, _mediaRoutes2['default'])(app);
    (0, _searchRoutes2['default'])(app);

    /* ********************  Client  ******************** */

    // Serve the static client index.js build file
    app.get('/scripts/index.js', function (req, res) {
        var __dirname = process.cwd();
        res.sendFile('index.js', { root: path.join(__dirname, './client/dist') });
    });

    app.get('/favicon.png', function (req, res) {
        var __dirname = process.cwd();
        res.sendFile('favicon.png', { root: path.join(__dirname, './client/dist') });
    });

    // Client app entry index.html file - react router
    app.get('*', function (req, res) {
        var __dirname = process.cwd();
        res.sendFile('index.html', { root: path.join(__dirname, './client/dist') }); // Render client
    });
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _test = __webpack_require__(9);

exports['default'] = function (app) {
    app.get('/api/test', _test.testFunction);
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
var testFunction = exports.testFunction = function testFunction(req, res) {
    res.status(200).send('This is a test');
};

var testFunction2 = exports.testFunction2 = function testFunction2(req, res) {
    res.status(200).send('This is test #2');
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _users = __webpack_require__(11);

exports['default'] = function (app) {
    app.post('/api/users/create', _users.createUser);
    app.get('/api/users', _users.list);
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
var User = __webpack_require__(1).User;

var list = exports.list = function list(req, res) {
    return User.findAll({}) // Get all quotes
    .then(function (users) {
        // Filter out password attributes
        users.forEach(function (user) {
            delete user.dataValues.password;
        });
        console.log(users);
        res.status(200).send(users);
    }) // Return array of quotes
    ['catch'](function (error) {
        return res.status(400).send(error);
    }); // Error
};

var createUser = exports.createUser = function createUser(req, res) {
    console.log('Created user');
    var _req$body = req.body,
        username = _req$body.username,
        email = _req$body.email,
        password = _req$body.password,
        first_name = _req$body.first_name,
        last_name = _req$body.last_name,
        organization = _req$body.organization; // Information from the request body JSON data

    return User.create({
        username: username,
        email: email,
        password: password,
        first_name: first_name,
        last_name: last_name,
        organization: organization
    }).then(function (user) {
        // Success: created new quote entry
        delete user.dataValues.password; // Remove password
        res.status(200).send(user);
    })['catch'](function (error) {
        console.log(error);
        res.status(400).send(error);
    }); // Error
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = {"development":{"username":"kevinhou","password":null,"database":"ignite-stem-dev","host":"127.0.0.1","port":5432,"dialect":"postgres"},"test":{"username":"kevinhou","password":null,"database":"ignite-stem-test","host":"127.0.0.1","port":5432,"dialect":"postgres"},"production":{"use_env_variable":"DATABASE_URL"}}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = __webpack_require__(2);

var express = _interopRequireWildcard(_express);

var _login = __webpack_require__(17);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

exports['default'] = function (app) {
    app.post('/api/login', _login.login);
    app.get('/api/logout', _login.logout);
    app.get('/api/users/current', _login.currentUser);
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
var User = __webpack_require__(1).User;

/*
 * Parameters:
 *  req.body {
 *      username,
 *      password,
 *  }
 */
var login = exports.login = function login(req, res) {
    var data = req.body;
    if (data.username === undefined || data.password === undefined) {
        // Empty authentication
        res.status(200).send({
            success: false,
            error: 'Please submit a username and password'
        });
        return; // Terminate
    }
    console.log('Username: ' + String(data.username));
    return User.findOne({
        where: {
            username: data.username,
            password: data.password
        }
    }) // Get all quotes
    .then(function (user) {
        if (user == null) {
            // Invalid credentials
            res.status(200).send({
                success: false,
                error: 'Invalid username & password'
            });
            return;
        }

        // Valid credentials
        console.log('Successfully logged in user: ' + String(user.username));
        delete user.password; // Don't send back password
        req.session.user = user; // Set cookie
        res.status(200).send({
            success: true,
            user: user // Send user
        });
    }) // Return array of quotes
    ['catch'](function (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            error: error
        });
    }); // Error in request
};

var logout = exports.logout = function logout(req, res) {
    var previousUser = req.session.user;
    req.session.reset();
    res.status(200).send({
        success: true,
        user: previousUser
    });
};

var currentUser = exports.currentUser = function currentUser(req, res) {
    if (req.session.user) {
        delete req.session.user.password; // Remove password
        var data = {
            logged_in: true,
            user: req.session.user
        };
        res.status(200).send(data);
    } else {
        var _data = {
            logged_in: false
        };
        res.status(200).send(_data);
    }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dayOf = __webpack_require__(19);

var _dayOf2 = _interopRequireDefault(_dayOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (app) {
    app.get('/api/schedule', _dayOf2['default']);
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
/* Details:
 *  date: ISO 8601
 *
 */
var schedule = function schedule(req, res) {
    res.status(200).send({
        "data": [{
            "name": "Some Longggg Event Name IDK",
            "time": "2018-03-27T23:02:47+00:00",
            "location": "Some location",
            "category": "Workshop"
        }, {
            "name": "Hackathon 101",
            "time": "2018-03-27T23:02:47+00:00",
            "location": "Room 5020 somewhere",
            "category": "Workshop"
        }, {
            "name": "How to bring stem into the classroom",
            "time": "2018-03-27T23:02:47+00:00",
            "location": "A reasonably long location description",
            "category": "Workshop"
        }, {
            "name": "TED Talk",
            "time": "2018-03-27T23:02:47+00:00",
            "location": "Short",
            "category": "Presentation"
        }, {
            "name": "Eric Thoman Speaker Series",
            "time": "2018-03-27T23:02:47+00:00",
            "location": "kevin's house",
            "category": "Speaker"
        }, {
            "name": "Event name",
            "time": "2018-03-27T23:02:47+00:00",
            "location": "kevin's house",
            "category": "Workshop"
        }]
    });
};

exports["default"] = schedule;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = __webpack_require__(0);

var path = _interopRequireWildcard(_path);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

exports['default'] = function (app) {
    app.get('/api/media/blue_fire.png', function (req, res) {
        var __dirname = process.cwd();
        res.sendFile('fire_blue.png', { root: path.join(__dirname, './client/media') });
    });
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _search = __webpack_require__(22);

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (app) {
    app.post('/api/search', _search2['default']);
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
            value: true
});

var _search = __webpack_require__(23);

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var User = __webpack_require__(1).User;

// Get the search algorithm

var search = function search(req, res) {
            return User.findAll({}) // Get all quotes
            .then(function (users) {
                        // Filter out password attributes
                        users.forEach(function (user) {
                                    delete user.dataValues.password;
                        });

                        var userData = users.map(function (user) {
                                    return user.dataValues;
                        });

                        // let sortedUsers = users; // Modify this array
                        var query = req.body.query; // The search query

                        /**************** Code goes here ****************/
                        var sortedUsers = (0, _search2['default'])(query, userData);
                        /************************************************/

                        res.status(200).send(sortedUsers);
            }) // Return ranked array of users based on search query
            ['catch'](function (error) {
                        console.log(error);
                        return res.status(400).send(error);
            }); // Error
};

exports['default'] = search;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
// const fs = require('fs');
// let rawData = fs.readFileSync('./users.json'); 
//
// // Read in the JSON data
// const users = JSON.parse(rawData);

/*let rank = 0;
let sortedUsers = users.map((user) => {
	rank++;
	return {
		rank, 
		...user,
	}
});*/

// const query = "Tim math coding"; // The search query

var search = function search(query, users) {
    /**************** Code goes here ****************/
    /*
     * Modify the array: sortedUsers
     *  (make sure to modify the rank attribute to match its order in the array)
     * Use the variable, query, as the search query
     *
     * Run this script using:
     *  $ node search.js
     */

    /************************************************/
    // console.log("Searching query:", query)

    //Splitting query string into an array of strings
    var queryArray = query.split(" ");

    //Adjusting the rank of each user by incrementing the rank each time one of the words
    //in the queryArray variable appears in a user's data
    sortedUsers = users.map(function (user) {
        rank = 0;
        for (i = 0; i < queryArray.length; i++) {
            if (JSON.stringify(user).toLowerCase().indexOf(queryArray[i].toLowerCase()) !== -1) {
                rank++;
            }
        }

        return Object.assign({
            rank: rank
        }, user);
    });

    //Sorting each user from greatest rank to least rank
    sortedUsers.sort(function (a, b) {
        return b.rank - a.rank;
    });

    //Reassigning the rank of each user to be the user's position (plus 1), within the array
    for (i = 0; i < sortedUsers.length; i++) {
        sortedUsers[i].rank = i + 1;
    }

    return sortedUsers;
};

exports["default"] = search;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var sessions = __webpack_require__(27); // User sessions

var sessionAuth = function sessionAuth(app) {
    // Docs: https://github.com/mozilla/node-client-sessions
    app.use(sessions({
        cookieName: 'session', // Cookie name dictates the key name added to the request object
        secret: 'blargadeeblargblarg', // should be a large unguessable string (store in environment variables eventually)
        duration: 4 * 60 * 60 * 1000, // how long the session will stay valid in ms (4 hours)
        activeDuration: 1000 * 60 * 60 * 2 // if expiresIn < activeDuration, the session will be extended by activeDuration milliseconds
    }));

    app.use(function (req, res, next) {
        // APIs that client must be logged in for
        // Best practice: APIs that are accessible via the client but require a login
        // APIs are already protected by a Basic Auth, this is just a safegaurd
        var blacklisted = ['\/api\/users\/create'];
        var path = req.originalUrl;
        if (!req.session.user) {
            console.log('No session');
            if (new RegExp(blacklisted.join('|'), 'i').test(path)) {
                // If on the blacklist
                res.status(401).send('Please log in');
            } else {
                // Allowed
                next();
            }
        } else {
            console.log('Session with user: ' + String(req.session.user.username));
            next();
        }
    });
};

module.exports = sessionAuth;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("client-sessions");

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODgxNjc5NWE1MjVmNDgzNTI2MjAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvbW9kZWxzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1wb2x5ZmlsbFwiIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9yb3V0ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9yb3V0ZXMvYXBpUm91dGVzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvY29udHJvbGxlcnMvdGVzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL3JvdXRlcy91c2VyUm91dGVzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvY29udHJvbGxlcnMvdXNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcXVlbGl6ZVwiIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvY29uZmlnL2NvbmZpZy5qc29uIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvcm91dGVzL2xvZ2luUm91dGVzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvY29udHJvbGxlcnMvbG9naW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9yb3V0ZXMvZGF5T2ZSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy9kYXlPZi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL3JvdXRlcy9tZWRpYVJvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL3JvdXRlcy9zZWFyY2hSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy9zZWFyY2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy9zZWFyY2gvc2VhcmNoLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb25maWcvc2Vzc2lvbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGllbnQtc2Vzc2lvbnNcIiJdLCJuYW1lcyI6WyJmcyIsInBhdGgiLCJjb25maWdGaWxlIiwicmVxdWlyZSIsImVudiIsInByb2Nlc3MiLCJOT0RFX0VOViIsIl9fZGlybmFtZSIsImN3ZCIsImN1cnJlbnREaXIiLCJqb2luIiwiZmlsZW5hbWUiLCJtb2R1bGUiLCJ1bmRlZmluZWQiLCJiYXNlbmFtZSIsImRiIiwic2VxdWVsaXplIiwiREFUQUJBU0VfVVJMIiwiY29uZmlnIiwiZGF0YWJhc2UiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwicmVhZGRpclN5bmMiLCJmaWx0ZXIiLCJmaWxlIiwiaW5kZXhPZiIsInNsaWNlIiwiZm9yRWFjaCIsIm1vZGVsIiwibmFtZSIsIk9iamVjdCIsImtleXMiLCJtb2RlbE5hbWUiLCJhc3NvY2lhdGUiLCJTZXF1ZWxpemUiLCJleHBvcnRzIiwicG9ydCIsInBhcnNlSW50IiwiUE9SVCIsInNldCIsImxpc3RlbiIsImV4cHJlc3MiLCJsb2dnZXIiLCJib2R5UGFyc2VyIiwic2Vzc2lvbkF1dGgiLCJhcHAiLCJhbGwiLCJyZXEiLCJyZXMiLCJuZXh0IiwiaGVhZGVyIiwibWV0aG9kIiwic2VuZCIsInVzZSIsImpzb24iLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJnZXQiLCJzdGF0dXMiLCJzZW5kRmlsZSIsInJvb3QiLCJ0ZXN0RnVuY3Rpb24iLCJ0ZXN0RnVuY3Rpb24yIiwicG9zdCIsIlVzZXIiLCJsaXN0IiwiZmluZEFsbCIsInRoZW4iLCJ1c2VycyIsInVzZXIiLCJkYXRhVmFsdWVzIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiY3JlYXRlVXNlciIsImJvZHkiLCJlbWFpbCIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJvcmdhbml6YXRpb24iLCJjcmVhdGUiLCJsb2dpbiIsImRhdGEiLCJzdWNjZXNzIiwiZmluZE9uZSIsIndoZXJlIiwic2Vzc2lvbiIsImxvZ291dCIsInByZXZpb3VzVXNlciIsInJlc2V0IiwiY3VycmVudFVzZXIiLCJsb2dnZWRfaW4iLCJzY2hlZHVsZSIsInNlYXJjaCIsInVzZXJEYXRhIiwibWFwIiwicXVlcnkiLCJzb3J0ZWRVc2VycyIsInF1ZXJ5QXJyYXkiLCJzcGxpdCIsInJhbmsiLCJpIiwibGVuZ3RoIiwiSlNPTiIsInN0cmluZ2lmeSIsInRvTG93ZXJDYXNlIiwic29ydCIsImEiLCJiIiwic2Vzc2lvbnMiLCJjb29raWVOYW1lIiwic2VjcmV0IiwiZHVyYXRpb24iLCJhY3RpdmVEdXJhdGlvbiIsImJsYWNrbGlzdGVkIiwib3JpZ2luYWxVcmwiLCJSZWdFeHAiLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztB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Y2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4ODE2Nzk1YTUyNWY0ODM1MjYyMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gRVM2LXN0eWxlIGltcG9ydHNcclxuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgU2VxdWVsaXplIGZyb20gJ3NlcXVlbGl6ZSc7XHJcblxyXG5jb25zdCBjb25maWdGaWxlICA9IHJlcXVpcmUoJy4uL2NvbmZpZy9jb25maWcuanNvbicpO1xyXG5cclxudmFyIGVudiAgICAgICAgICAgICA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7IC8vIERldGVybWluZSBpZiB1c2luZyBkZXZlbG9wbWVudFxyXG5jb25zdCBfX2Rpcm5hbWUgICAgID0gcHJvY2Vzcy5jd2QoKTsgLy8gQ291bGQgYnJlYWsgb24gcHJvZFxyXG5jb25zdCBjdXJyZW50RGlyID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vc2VydmVyL3NyYy9tb2RlbHMnKTtcclxuXHJcbi8vIFJlZ3VsYXIgYG1vZHVsZS5maWxlbmFtZWAgaXMgdW5kZWZpbmVkIGluIGxvY2FsIGRldlxyXG5jb25zdCBmaWxlbmFtZSA9IChtb2R1bGUuZmlsZW5hbWUgIT09IHVuZGVmaW5lZCkgPyBtb2R1bGUuZmlsZW5hbWUgOiAnaW5kZXguanMnO1xyXG52YXIgYmFzZW5hbWUgID0gcGF0aC5iYXNlbmFtZShmaWxlbmFtZSk7XHJcblxyXG52YXIgZGIgPSB7fTtcclxuXHJcbi8vIEkgdXNlIHRoZSBub2RlLWNvbmZpZyBwYWNrYWdlIHRvIG1hbmFnZSB0aGUgREIgY29uZmlnIHlvdSBjYW4gY2hvb3NlXHJcbi8vIHRvIHN0aWNrIHdpdGggdGhlIG9yaWdpbmFsIHZlcnNpb24uIEFuZCBJIHJlbW92ZWQgZW52aXJvbm1lbnQgdmFyaWFibGVcclxuLy8gc3VwcG9ydCBiZWNhdXNlIEkgZG9uJ3QgbmVlZCBpdC5cclxubGV0IHNlcXVlbGl6ZSA9IHt9O1xyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYpIHtcclxuICAgIC8vIEZyb20gdGhlIGVudmlyb25tZW50LCBleHRyYWN0IHRoZSBrZXkgd2l0aCB0aGUgbmFtZSBwcm92aWRlZCBpbiB0aGUgY29uZmlnIGFzIHVzZV9lbnZfdmFyaWFibGVcclxuICAgIC8vIGFuZCB1c2UgdGhhdCB0byBlc3RhYmxpc2ggYSBjb25uZWN0aW9uIHRvIG91ciBkYXRhYmFzZS5cclxuICAgIHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUocHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMKTsgLy8gRXN0YWJsaXNoIGNvbm5lY3Rpb24gdXNpbmcgZW52aXJvbm1lbnQgdmFyaWFibGVzXHJcblxyXG59IGVsc2Uge1xyXG4gICAgdmFyIGNvbmZpZyAgICA9IGNvbmZpZ0ZpbGVbZW52XTsgLy8gSWYgbG9jYWwsIHVzZSBjb25maWdcclxuXHJcbiAgICBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKGNvbmZpZy5kYXRhYmFzZSwgY29uZmlnLnVzZXJuYW1lLCBjb25maWcucGFzc3dvcmQsIGNvbmZpZyk7IC8vIENvbm5lY3RcclxufVxyXG5cclxuZnNcclxuICAgIC5yZWFkZGlyU3luYyhjdXJyZW50RGlyKVxyXG4gICAgLmZpbHRlcihmdW5jdGlvbihmaWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIChmaWxlLmluZGV4T2YoJy4nKSAhPT0gMCkgJiYgKGZpbGUgIT09IGJhc2VuYW1lKSAmJiAoZmlsZS5zbGljZSgtMykgPT09ICcuanMnKTtcclxuICAgIH0pXHJcbiAgICAuZm9yRWFjaChmdW5jdGlvbihmaWxlKSB7XHJcbiAgICAgICAgdmFyIG1vZGVsID0gc2VxdWVsaXplLmltcG9ydChwYXRoLmpvaW4oY3VycmVudERpciwgZmlsZSkpO1xyXG4gICAgICAgIGRiW21vZGVsLm5hbWVdID0gbW9kZWw7XHJcbiAgICB9KTtcclxuXHJcbk9iamVjdC5rZXlzKGRiKS5mb3JFYWNoKGZ1bmN0aW9uKG1vZGVsTmFtZSkge1xyXG4gICAgaWYgKGRiW21vZGVsTmFtZV0uYXNzb2NpYXRlKSB7XHJcbiAgICAgICAgZGJbbW9kZWxOYW1lXS5hc3NvY2lhdGUoZGIpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmRiLnNlcXVlbGl6ZSA9IHNlcXVlbGl6ZTtcclxuZGIuU2VxdWVsaXplID0gU2VxdWVsaXplO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBkYjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9tb2RlbHMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXBvbHlmaWxsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcG9seWZpbGxcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBBcHBsaWNhdGlvbiBlbnRyeSwgc2V0dGluZyB1cCBzZXJ2ZXJcclxuaW1wb3J0IGFwcCBmcm9tICcuL2FwcCc7IC8vIFRoZSBleHByZXNzIGFwcCB3ZSBqdXN0IGNyZWF0ZWRcclxuXHJcbmNvbnN0IHBvcnQgPSBwYXJzZUludChwcm9jZXNzLmVudi5QT1JULCAxMCkgfHwgNTU1NTtcclxuYXBwLnNldCgncG9ydCcsIHBvcnQpO1xyXG5cclxuLy8gMC4wLjAuMCBtYWtlcyBpdCBhdmFpbGFibGUgb24geW91ciBsb2NhbCBuZXR3b3JrXHJcbi8vIGFwcC5saXN0ZW4ocG9ydCwgJzAuMC4wLjAnKTtcclxuYXBwLmxpc3Rlbihwb3J0KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9pbmRleC5qcyIsImltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xyXG5cclxuY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcclxuY29uc3QgbG9nZ2VyID0gcmVxdWlyZSgnbW9yZ2FuJyk7XHJcbmNvbnN0IGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO1xyXG5jb25zdCBzZXNzaW9uQXV0aCA9IHJlcXVpcmUoJy4vY29uZmlnL3Nlc3Npb24nKTtcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuXHJcbmxldCBfX2Rpcm5hbWUgPSBwcm9jZXNzLmN3ZCgpO1xyXG5cclxuY29uc3QgYXBwID0gZXhwcmVzcygpOyAvLyBTZXR1cCBleHByZXNzIGFwcFxyXG5cclxuLy8gQWxsb3cgY3Jvc3Mgb3JpZ2luIHJlcXVlc3RzIHdpdGggYXV0aG9yaXphdGlvbiAoZm9yIEFQSSBwdXJwb3NlcylcclxuYXBwLmFsbCgnKicsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKTtcclxuICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLCAnUFVULCBHRVQsIFBPU1QsIERFTEVURSwgT1BUSU9OUycpO1xyXG4gICAgcmVzLmhlYWRlcihcclxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsXHJcbiAgICAgICAgJ2FjY2VwdCwgY29udGVudC10eXBlLCB4LXBhcnNlLWFwcGxpY2F0aW9uLWlkLCB4LXBhcnNlLXJlc3QtYXBpLWtleSwgeC1wYXJzZS1zZXNzaW9uLXRva2VuLCBBVVRIT1JJWkFUSU9OJ1xyXG4gICAgKTtcclxuXHJcbiAgICAvLyBJbnRlcmNlcHQgT1BUSU9OUyBtZXRob2RcclxuICAgIGlmIChyZXEubWV0aG9kID09PSAnT1BUSU9OUycpIHtcclxuICAgICAgICByZXMuc2VuZCgyMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBuZXh0KCk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8gU2V0dXAgYXV0aGVudGljYXRpb24gYW5kIHNlY3VyaXR5XHJcbnNlc3Npb25BdXRoKGFwcCk7XHJcblxyXG4vLyBMb2cgcmVxdWVzdHMgdG8gdGhlIGNvbnNvbGUuXHJcbmFwcC51c2UobG9nZ2VyKCdkZXYnKSk7XHJcblxyXG4vLyBQYXJzZSBpbmNvbWluZyByZXF1ZXN0cyBkYXRhIChodHRwczovL2dpdGh1Yi5jb20vZXhwcmVzc2pzL2JvZHktcGFyc2VyKVxyXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcclxuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSkpO1xyXG5hcHAudXNlKCcvc2NyaXB0cycsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi8uLi9jbGllbnQvZGlzdCcpKSk7XHJcblxyXG4vLyBSZXF1aXJlIHJvdXRlcyBhbmQgc2ltdWx0YW5lb3VzbHkgYXR0YWNoIGFwcFxyXG5yb3V0ZXMoYXBwKTtcclxuXHJcbi8vIENhdGNoIGFsbCBpZiB0aGUgcm91dGVzIGRvZXNuJ3QgZmluZCBhIHZhbGlkIFVSTFxyXG5hcHAuZ2V0KCcqJywgKHJlcSwgcmVzKSA9PiByZXMuc3RhdHVzKDIwMCkuc2VuZCgnTm90aGluZyBoZXJlIHlldC4uLicpKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwcDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9hcHAuanMiLCJpbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xyXG5cclxuLy8gRnVuY3Rpb25hbCBjb250cm9sbGVycyBnbyBoZXJlOlxyXG4vLyAuLi5cclxuXHJcbi8vIE1ha2UgbW9kdWxhciBzbyBub3QgYWxsIHJvdXRlcyBhcmUgaGVyZVxyXG5pbXBvcnQgYXBpUm91dGVzIGZyb20gJy4vYXBpUm91dGVzJztcclxuaW1wb3J0IHVzZXJSb3V0ZXMgZnJvbSAnLi91c2VyUm91dGVzJztcclxuaW1wb3J0IGxvZ2luUm91dGVzIGZyb20gJy4vbG9naW5Sb3V0ZXMnO1xyXG5pbXBvcnQgZGF5T2ZSb3V0ZXMgZnJvbSAnLi9kYXlPZlJvdXRlcyc7XHJcbmltcG9ydCBtZWRpYVJvdXRlcyBmcm9tICcuL21lZGlhUm91dGVzJztcclxuaW1wb3J0IHNlYXJjaFJvdXRlcyBmcm9tICcuL3NlYXJjaFJvdXRlcyc7XHJcblxyXG4vLyBSZXF1aXJlcyBhbiBhcHAgYXMgYW4gaW5wdXQgc28gY2FuIGRpcmVjdCB0aGUgdXNlciBhY2NvcmRpbmdseVxyXG5leHBvcnQgZGVmYXVsdCAoYXBwKSA9PiB7XHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKiAgUm91dGVzICAqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4gICAgYXBpUm91dGVzKGFwcCk7XHJcbiAgICB1c2VyUm91dGVzKGFwcCk7XHJcbiAgICBsb2dpblJvdXRlcyhhcHApO1xyXG4gICAgZGF5T2ZSb3V0ZXMoYXBwKTtcclxuICAgIG1lZGlhUm91dGVzKGFwcCk7XHJcbiAgICBzZWFyY2hSb3V0ZXMoYXBwKTtcclxuXHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKiAgQ2xpZW50ICAqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuICAgIC8vIFNlcnZlIHRoZSBzdGF0aWMgY2xpZW50IGluZGV4LmpzIGJ1aWxkIGZpbGVcclxuICAgIGFwcC5nZXQoJy9zY3JpcHRzL2luZGV4LmpzJywgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgX19kaXJuYW1lID0gcHJvY2Vzcy5jd2QoKTtcclxuICAgICAgICByZXMuc2VuZEZpbGUoJ2luZGV4LmpzJywgeyByb290OiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9jbGllbnQvZGlzdCcpIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYXBwLmdldCgnL2Zhdmljb24ucG5nJywgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgX19kaXJuYW1lID0gcHJvY2Vzcy5jd2QoKTtcclxuICAgICAgICByZXMuc2VuZEZpbGUoJ2Zhdmljb24ucG5nJywgeyByb290OiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9jbGllbnQvZGlzdCcpIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ2xpZW50IGFwcCBlbnRyeSBpbmRleC5odG1sIGZpbGUgLSByZWFjdCByb3V0ZXJcclxuICAgIGFwcC5nZXQoJyonLCAocmVxLCByZXMpID0+IHtcclxuICAgICAgICBjb25zdCBfX2Rpcm5hbWUgPSBwcm9jZXNzLmN3ZCgpO1xyXG4gICAgICAgIHJlcy5zZW5kRmlsZSgnaW5kZXguaHRtbCcsIHsgcm9vdDogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vY2xpZW50L2Rpc3QnKSB9KTsgLy8gUmVuZGVyIGNsaWVudFxyXG4gICAgfSk7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvcm91dGVzL2luZGV4LmpzIiwiaW1wb3J0IHsgdGVzdEZ1bmN0aW9uIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvdGVzdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoYXBwKSA9PiB7XHJcbiAgICBhcHAuZ2V0KCcvYXBpL3Rlc3QnLCB0ZXN0RnVuY3Rpb24pO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvc3JjL3JvdXRlcy9hcGlSb3V0ZXMuanMiLCJleHBvcnQgY29uc3QgdGVzdEZ1bmN0aW9uID0gKHJlcSwgcmVzKSA9PiB7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCgnVGhpcyBpcyBhIHRlc3QnKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0ZXN0RnVuY3Rpb24yID0gKHJlcSwgcmVzKSA9PiB7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCgnVGhpcyBpcyB0ZXN0ICMyJyk7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvY29udHJvbGxlcnMvdGVzdC9pbmRleC5qcyIsImltcG9ydCB7IGNyZWF0ZVVzZXIsIGxpc3QgfSBmcm9tICcuLi9jb250cm9sbGVycy91c2Vycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoYXBwKSA9PiB7XHJcbiAgICBhcHAucG9zdCgnL2FwaS91c2Vycy9jcmVhdGUnLCBjcmVhdGVVc2VyICk7XHJcbiAgICBhcHAuZ2V0KCcvYXBpL3VzZXJzJywgbGlzdCApO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvc3JjL3JvdXRlcy91c2VyUm91dGVzLmpzIiwiY29uc3QgVXNlciA9IHJlcXVpcmUoJy4uLy4uL21vZGVscycpLlVzZXI7XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdCA9IChyZXEsIHJlcykgPT4ge1xyXG4gICAgcmV0dXJuIFVzZXJcclxuICAgICAgICAuZmluZEFsbCh7fSkgLy8gR2V0IGFsbCBxdW90ZXNcclxuICAgICAgICAudGhlbigodXNlcnMpID0+IHtcclxuICAgICAgICAgICAgLy8gRmlsdGVyIG91dCBwYXNzd29yZCBhdHRyaWJ1dGVzXHJcbiAgICAgICAgICAgIHVzZXJzLmZvckVhY2goKHVzZXIpID0+IHsgZGVsZXRlIHVzZXIuZGF0YVZhbHVlcy5wYXNzd29yZCB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codXNlcnMpO1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh1c2Vycyk7XHJcbiAgICAgICAgfSkgLy8gUmV0dXJuIGFycmF5IG9mIHF1b3Rlc1xyXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpOyAvLyBFcnJvclxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVzZXIgPSAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdDcmVhdGVkIHVzZXInKTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBwYXNzd29yZCxcclxuICAgICAgICBmaXJzdF9uYW1lLFxyXG4gICAgICAgIGxhc3RfbmFtZSxcclxuICAgICAgICBvcmdhbml6YXRpb24sXHJcbiAgICB9ID0gcmVxLmJvZHk7IC8vIEluZm9ybWF0aW9uIGZyb20gdGhlIHJlcXVlc3QgYm9keSBKU09OIGRhdGFcclxuXHJcbiAgICByZXR1cm4gVXNlclxyXG4gICAgICAgIC5jcmVhdGUoe1xyXG4gICAgICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgICAgICBmaXJzdF9uYW1lLFxyXG4gICAgICAgICAgICBsYXN0X25hbWUsXHJcbiAgICAgICAgICAgIG9yZ2FuaXphdGlvbixcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCh1c2VyKSA9PiB7IC8vIFN1Y2Nlc3M6IGNyZWF0ZWQgbmV3IHF1b3RlIGVudHJ5XHJcbiAgICAgICAgICAgIGRlbGV0ZSB1c2VyLmRhdGFWYWx1ZXMucGFzc3dvcmQ7IC8vIFJlbW92ZSBwYXNzd29yZFxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh1c2VyKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpO1xyXG4gICAgICAgIH0pOyAvLyBFcnJvclxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvc3JjL2NvbnRyb2xsZXJzL3VzZXJzL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZzXCJcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNlcXVlbGl6ZVwiXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcImRldmVsb3BtZW50XCI6e1widXNlcm5hbWVcIjpcImtldmluaG91XCIsXCJwYXNzd29yZFwiOm51bGwsXCJkYXRhYmFzZVwiOlwiaWduaXRlLXN0ZW0tZGV2XCIsXCJob3N0XCI6XCIxMjcuMC4wLjFcIixcInBvcnRcIjo1NDMyLFwiZGlhbGVjdFwiOlwicG9zdGdyZXNcIn0sXCJ0ZXN0XCI6e1widXNlcm5hbWVcIjpcImtldmluaG91XCIsXCJwYXNzd29yZFwiOm51bGwsXCJkYXRhYmFzZVwiOlwiaWduaXRlLXN0ZW0tdGVzdFwiLFwiaG9zdFwiOlwiMTI3LjAuMC4xXCIsXCJwb3J0XCI6NTQzMixcImRpYWxlY3RcIjpcInBvc3RncmVzXCJ9LFwicHJvZHVjdGlvblwiOntcInVzZV9lbnZfdmFyaWFibGVcIjpcIkRBVEFCQVNFX1VSTFwifX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NlcnZlci9zcmMvY29uZmlnL2NvbmZpZy5qc29uXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyBsb2dpbiwgbG9nb3V0LCBjdXJyZW50VXNlciB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL2xvZ2luJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChhcHA6IGV4cHJlc3MuQXBwbGljYXRpb24pID0+IHtcclxuICAgIGFwcC5wb3N0KCcvYXBpL2xvZ2luJywgbG9naW4pO1xyXG4gICAgYXBwLmdldCgnL2FwaS9sb2dvdXQnLCBsb2dvdXQpO1xyXG4gICAgYXBwLmdldCgnL2FwaS91c2Vycy9jdXJyZW50JywgY3VycmVudFVzZXIpO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvcm91dGVzL2xvZ2luUm91dGVzLmpzIiwiY29uc3QgVXNlciA9IHJlcXVpcmUoJy4uLy4uL21vZGVscy9pbmRleC5qcycpLlVzZXI7XHJcblxyXG4vKlxyXG4gKiBQYXJhbWV0ZXJzOlxyXG4gKiAgcmVxLmJvZHkge1xyXG4gKiAgICAgIHVzZXJuYW1lLFxyXG4gKiAgICAgIHBhc3N3b3JkLFxyXG4gKiAgfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxvZ2luID0gKHJlcTogUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XHJcbiAgICBpZiAoZGF0YS51c2VybmFtZSA9PT0gdW5kZWZpbmVkIHx8IGRhdGEucGFzc3dvcmQgPT09IHVuZGVmaW5lZCkgeyAvLyBFbXB0eSBhdXRoZW50aWNhdGlvblxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcclxuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgICAgIGVycm9yOiAnUGxlYXNlIHN1Ym1pdCBhIHVzZXJuYW1lIGFuZCBwYXNzd29yZCcsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuOyAvLyBUZXJtaW5hdGVcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGBVc2VybmFtZTogJHtkYXRhLnVzZXJuYW1lfWApO1xyXG4gICAgcmV0dXJuIFVzZXJcclxuICAgICAgICAuZmluZE9uZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogZGF0YS51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBkYXRhLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkgLy8gR2V0IGFsbCBxdW90ZXNcclxuICAgICAgICAudGhlbigodXNlcjogVXNlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAodXNlciA9PSBudWxsKSB7IC8vIEludmFsaWQgY3JlZGVudGlhbHNcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogJ0ludmFsaWQgdXNlcm5hbWUgJiBwYXNzd29yZCcsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gVmFsaWQgY3JlZGVudGlhbHNcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYFN1Y2Nlc3NmdWxseSBsb2dnZWQgaW4gdXNlcjogJHt1c2VyLnVzZXJuYW1lfWApO1xyXG4gICAgICAgICAgICBkZWxldGUgdXNlci5wYXNzd29yZDsgLy8gRG9uJ3Qgc2VuZCBiYWNrIHBhc3N3b3JkXHJcbiAgICAgICAgICAgIHJlcS5zZXNzaW9uLnVzZXIgPSB1c2VyOyAvLyBTZXQgY29va2llXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB1c2VyLCAvLyBTZW5kIHVzZXJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSkgLy8gUmV0dXJuIGFycmF5IG9mIHF1b3Rlc1xyXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBlcnJvcixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7IC8vIEVycm9yIGluIHJlcXVlc3RcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dCA9IChyZXE6IFJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSkgPT4ge1xyXG4gICAgY29uc3QgcHJldmlvdXNVc2VyID0gcmVxLnNlc3Npb24udXNlcjtcclxuICAgIHJlcS5zZXNzaW9uLnJlc2V0KCk7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICB1c2VyOiBwcmV2aW91c1VzZXIsXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGN1cnJlbnRVc2VyID0gKHJlcTogUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSA9PiB7XHJcbiAgICBpZiAocmVxLnNlc3Npb24udXNlcikge1xyXG4gICAgICAgIGRlbGV0ZSByZXEuc2Vzc2lvbi51c2VyLnBhc3N3b3JkOyAvLyBSZW1vdmUgcGFzc3dvcmRcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICBsb2dnZWRfaW46IHRydWUsXHJcbiAgICAgICAgICAgIHVzZXI6IHJlcS5zZXNzaW9uLnVzZXIsXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChkYXRhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgICAgbG9nZ2VkX2luOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGRhdGEpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvY29udHJvbGxlcnMvbG9naW4vaW5kZXguanMiLCJpbXBvcnQgc2NoZWR1bGUgZnJvbSAnLi4vY29udHJvbGxlcnMvZGF5T2YnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGFwcCkgPT4ge1xyXG4gICAgYXBwLmdldCgnL2FwaS9zY2hlZHVsZScsIHNjaGVkdWxlKTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9yb3V0ZXMvZGF5T2ZSb3V0ZXMuanMiLCIvKiBEZXRhaWxzOlxyXG4gKiAgZGF0ZTogSVNPIDg2MDFcclxuICpcclxuICovXHJcbmNvbnN0IHNjaGVkdWxlID0gKHJlcSwgcmVzKSA9PiB7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XHJcbiAgICAgICAgXCJkYXRhXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiU29tZSBMb25nZ2dnIEV2ZW50IE5hbWUgSURLXCIsXHJcbiAgICAgICAgICAgICAgICBcInRpbWVcIjogXCIyMDE4LTAzLTI3VDIzOjAyOjQ3KzAwOjAwXCIsXHJcbiAgICAgICAgICAgICAgICBcImxvY2F0aW9uXCI6IFwiU29tZSBsb2NhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJjYXRlZ29yeVwiOiBcIldvcmtzaG9wXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkhhY2thdGhvbiAxMDFcIixcclxuICAgICAgICAgICAgICAgIFwidGltZVwiOiBcIjIwMTgtMDMtMjdUMjM6MDI6NDcrMDA6MDBcIixcclxuICAgICAgICAgICAgICAgIFwibG9jYXRpb25cIjogXCJSb29tIDUwMjAgc29tZXdoZXJlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNhdGVnb3J5XCI6IFwiV29ya3Nob3BcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSG93IHRvIGJyaW5nIHN0ZW0gaW50byB0aGUgY2xhc3Nyb29tXCIsXHJcbiAgICAgICAgICAgICAgICBcInRpbWVcIjogXCIyMDE4LTAzLTI3VDIzOjAyOjQ3KzAwOjAwXCIsXHJcbiAgICAgICAgICAgICAgICBcImxvY2F0aW9uXCI6IFwiQSByZWFzb25hYmx5IGxvbmcgbG9jYXRpb24gZGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogXCJXb3Jrc2hvcFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJURUQgVGFsa1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ0aW1lXCI6IFwiMjAxOC0wMy0yN1QyMzowMjo0NyswMDowMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJsb2NhdGlvblwiOiBcIlNob3J0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNhdGVnb3J5XCI6IFwiUHJlc2VudGF0aW9uXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkVyaWMgVGhvbWFuIFNwZWFrZXIgU2VyaWVzXCIsXHJcbiAgICAgICAgICAgICAgICBcInRpbWVcIjogXCIyMDE4LTAzLTI3VDIzOjAyOjQ3KzAwOjAwXCIsXHJcbiAgICAgICAgICAgICAgICBcImxvY2F0aW9uXCI6IFwia2V2aW4ncyBob3VzZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjYXRlZ29yeVwiOiBcIlNwZWFrZXJcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRXZlbnQgbmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0aW1lXCI6IFwiMjAxOC0wMy0yN1QyMzowMjo0NyswMDowMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJsb2NhdGlvblwiOiBcImtldmluJ3MgaG91c2VcIixcclxuICAgICAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogXCJXb3Jrc2hvcFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2NoZWR1bGU7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvY29udHJvbGxlcnMvZGF5T2YvaW5kZXguanMiLCJpbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGFwcCkgPT4ge1xyXG4gICAgYXBwLmdldCgnL2FwaS9tZWRpYS9ibHVlX2ZpcmUucG5nJywgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgX19kaXJuYW1lID0gcHJvY2Vzcy5jd2QoKTtcclxuICAgICAgICByZXMuc2VuZEZpbGUoJ2ZpcmVfYmx1ZS5wbmcnLCB7IHJvb3Q6IHBhdGguam9pbihfX2Rpcm5hbWUsICcuL2NsaWVudC9tZWRpYScpIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvcm91dGVzL21lZGlhUm91dGVzLmpzIiwiaW1wb3J0IHNlYXJjaCBmcm9tICcuLi9jb250cm9sbGVycy9zZWFyY2gnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGFwcCkgPT4ge1xyXG4gICAgYXBwLnBvc3QoJy9hcGkvc2VhcmNoJywgc2VhcmNoKTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9yb3V0ZXMvc2VhcmNoUm91dGVzLmpzIiwiY29uc3QgVXNlciA9IHJlcXVpcmUoJy4uLy4uL21vZGVscycpLlVzZXI7XHJcblxyXG5pbXBvcnQgc2VhcmNoQWxnb3JpdGhtIGZyb20gJy4vc2VhcmNoJyAvLyBHZXQgdGhlIHNlYXJjaCBhbGdvcml0aG1cclxuXHJcbmNvbnN0IHNlYXJjaCA9IChyZXEsIHJlcykgPT4ge1xyXG4gICAgcmV0dXJuIFVzZXJcclxuICAgICAgICAuZmluZEFsbCh7fSkgLy8gR2V0IGFsbCBxdW90ZXNcclxuICAgICAgICAudGhlbigodXNlcnMpID0+IHtcclxuICAgICAgICAgICAgLy8gRmlsdGVyIG91dCBwYXNzd29yZCBhdHRyaWJ1dGVzXHJcbiAgICAgICAgICAgIHVzZXJzLmZvckVhY2goKHVzZXIpID0+IHsgZGVsZXRlIHVzZXIuZGF0YVZhbHVlcy5wYXNzd29yZCB9KTtcclxuXHJcbiAgICAgICAgICAgIGxldCB1c2VyRGF0YSA9IHVzZXJzLm1hcCgodXNlcikgPT4gdXNlci5kYXRhVmFsdWVzKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGxldCBzb3J0ZWRVc2VycyA9IHVzZXJzOyAvLyBNb2RpZnkgdGhpcyBhcnJheVxyXG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9IHJlcS5ib2R5LnF1ZXJ5OyAvLyBUaGUgc2VhcmNoIHF1ZXJ5XHJcblxyXG4gICAgICAgICAgICAvKioqKioqKioqKioqKioqKiBDb2RlIGdvZXMgaGVyZSAqKioqKioqKioqKioqKioqL1xyXG4gICAgICAgICAgICBsZXQgc29ydGVkVXNlcnMgPSBzZWFyY2hBbGdvcml0aG0ocXVlcnksIHVzZXJEYXRhKVxyXG4gICAgICAgICAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoc29ydGVkVXNlcnMpO1xyXG4gICAgICAgIH0pIC8vIFJldHVybiByYW5rZWQgYXJyYXkgb2YgdXNlcnMgYmFzZWQgb24gc2VhcmNoIHF1ZXJ5XHJcbiAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcilcclxuICAgICAgICB9KTsgLy8gRXJyb3JcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlYXJjaDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9jb250cm9sbGVycy9zZWFyY2gvaW5kZXguanMiLCIvLyBjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XHJcbi8vIGxldCByYXdEYXRhID0gZnMucmVhZEZpbGVTeW5jKCcuL3VzZXJzLmpzb24nKTsgXHJcbi8vXHJcbi8vIC8vIFJlYWQgaW4gdGhlIEpTT04gZGF0YVxyXG4vLyBjb25zdCB1c2VycyA9IEpTT04ucGFyc2UocmF3RGF0YSk7XHJcblxyXG4vKmxldCByYW5rID0gMDtcclxubGV0IHNvcnRlZFVzZXJzID0gdXNlcnMubWFwKCh1c2VyKSA9PiB7XHJcblx0cmFuaysrO1xyXG5cdHJldHVybiB7XHJcblx0XHRyYW5rLCBcclxuXHRcdC4uLnVzZXIsXHJcblx0fVxyXG59KTsqL1xyXG5cclxuLy8gY29uc3QgcXVlcnkgPSBcIlRpbSBtYXRoIGNvZGluZ1wiOyAvLyBUaGUgc2VhcmNoIHF1ZXJ5XHJcblxyXG5jb25zdCBzZWFyY2ggPSAocXVlcnksIHVzZXJzKSA9PiB7XHJcbiAgICAvKioqKioqKioqKioqKioqKiBDb2RlIGdvZXMgaGVyZSAqKioqKioqKioqKioqKioqL1xyXG4gICAgLypcclxuICAgICAqIE1vZGlmeSB0aGUgYXJyYXk6IHNvcnRlZFVzZXJzXHJcbiAgICAgKiAgKG1ha2Ugc3VyZSB0byBtb2RpZnkgdGhlIHJhbmsgYXR0cmlidXRlIHRvIG1hdGNoIGl0cyBvcmRlciBpbiB0aGUgYXJyYXkpXHJcbiAgICAgKiBVc2UgdGhlIHZhcmlhYmxlLCBxdWVyeSwgYXMgdGhlIHNlYXJjaCBxdWVyeVxyXG4gICAgICpcclxuICAgICAqIFJ1biB0aGlzIHNjcmlwdCB1c2luZzpcclxuICAgICAqICAkIG5vZGUgc2VhcmNoLmpzXHJcbiAgICAgKi9cclxuXHJcbiAgICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIC8vIGNvbnNvbGUubG9nKFwiU2VhcmNoaW5nIHF1ZXJ5OlwiLCBxdWVyeSlcclxuICAgICBcclxuICAgICAvL1NwbGl0dGluZyBxdWVyeSBzdHJpbmcgaW50byBhbiBhcnJheSBvZiBzdHJpbmdzXHJcbiAgICAgdmFyIHF1ZXJ5QXJyYXkgPSBxdWVyeS5zcGxpdChcIiBcIik7XHJcblxyXG4gICAgLy9BZGp1c3RpbmcgdGhlIHJhbmsgb2YgZWFjaCB1c2VyIGJ5IGluY3JlbWVudGluZyB0aGUgcmFuayBlYWNoIHRpbWUgb25lIG9mIHRoZSB3b3Jkc1xyXG4gICAgLy9pbiB0aGUgcXVlcnlBcnJheSB2YXJpYWJsZSBhcHBlYXJzIGluIGEgdXNlcidzIGRhdGFcclxuICAgICBzb3J0ZWRVc2VycyA9IHVzZXJzLm1hcCgodXNlcikgPT4ge1xyXG4gICAgICAgIHJhbmsgPSAwO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBxdWVyeUFycmF5Lmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHVzZXIpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihxdWVyeUFycmF5W2ldLnRvTG93ZXJDYXNlKCkpICE9PSAtMSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmFuaysrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByYW5rLFxyXG4gICAgICAgICAgICAuLi51c2VyLFxyXG4gICAgICAgIH1cclxuICAgICB9KTtcclxuXHJcbiAgICAvL1NvcnRpbmcgZWFjaCB1c2VyIGZyb20gZ3JlYXRlc3QgcmFuayB0byBsZWFzdCByYW5rXHJcbiAgICBzb3J0ZWRVc2Vycy5zb3J0KGZ1bmN0aW9uKGEsYil7XHJcbiAgICAgICAgcmV0dXJuIGIucmFuayAtIGEucmFuaztcclxuICAgIH0pO1xyXG5cclxuICAgIC8vUmVhc3NpZ25pbmcgdGhlIHJhbmsgb2YgZWFjaCB1c2VyIHRvIGJlIHRoZSB1c2VyJ3MgcG9zaXRpb24gKHBsdXMgMSksIHdpdGhpbiB0aGUgYXJyYXlcclxuICAgIGZvcihpID0gMDsgaSA8IHNvcnRlZFVzZXJzLmxlbmd0aDsgaSsrKVxyXG4gICAge1xyXG4gICAgICAgIHNvcnRlZFVzZXJzW2ldLnJhbmsgPSBpICsgMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc29ydGVkVXNlcnM7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlYXJjaDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9jb250cm9sbGVycy9zZWFyY2gvc2VhcmNoLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9yZ2FuXCJcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYm9keS1wYXJzZXJcIlxuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3Qgc2Vzc2lvbnMgPSByZXF1aXJlKCdjbGllbnQtc2Vzc2lvbnMnKTsgLy8gVXNlciBzZXNzaW9uc1xyXG5cclxuY29uc3Qgc2Vzc2lvbkF1dGggPSAoYXBwKSA9PiB7XHJcbiAgICAvLyBEb2NzOiBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9ub2RlLWNsaWVudC1zZXNzaW9uc1xyXG4gICAgYXBwLnVzZShzZXNzaW9ucyh7XHJcbiAgICAgICAgY29va2llTmFtZTogJ3Nlc3Npb24nLCAvLyBDb29raWUgbmFtZSBkaWN0YXRlcyB0aGUga2V5IG5hbWUgYWRkZWQgdG8gdGhlIHJlcXVlc3Qgb2JqZWN0XHJcbiAgICAgICAgc2VjcmV0OiAnYmxhcmdhZGVlYmxhcmdibGFyZycsIC8vIHNob3VsZCBiZSBhIGxhcmdlIHVuZ3Vlc3NhYmxlIHN0cmluZyAoc3RvcmUgaW4gZW52aXJvbm1lbnQgdmFyaWFibGVzIGV2ZW50dWFsbHkpXHJcbiAgICAgICAgZHVyYXRpb246IDQgKiA2MCAqIDYwICogMTAwMCwgLy8gaG93IGxvbmcgdGhlIHNlc3Npb24gd2lsbCBzdGF5IHZhbGlkIGluIG1zICg0IGhvdXJzKVxyXG4gICAgICAgIGFjdGl2ZUR1cmF0aW9uOiAxMDAwICogNjAgKiA2MCAqIDIsIC8vIGlmIGV4cGlyZXNJbiA8IGFjdGl2ZUR1cmF0aW9uLCB0aGUgc2Vzc2lvbiB3aWxsIGJlIGV4dGVuZGVkIGJ5IGFjdGl2ZUR1cmF0aW9uIG1pbGxpc2Vjb25kc1xyXG4gICAgfSkpO1xyXG5cclxuICAgIGFwcC51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICAgICAgLy8gQVBJcyB0aGF0IGNsaWVudCBtdXN0IGJlIGxvZ2dlZCBpbiBmb3JcclxuICAgICAgICAvLyBCZXN0IHByYWN0aWNlOiBBUElzIHRoYXQgYXJlIGFjY2Vzc2libGUgdmlhIHRoZSBjbGllbnQgYnV0IHJlcXVpcmUgYSBsb2dpblxyXG4gICAgICAgIC8vIEFQSXMgYXJlIGFscmVhZHkgcHJvdGVjdGVkIGJ5IGEgQmFzaWMgQXV0aCwgdGhpcyBpcyBqdXN0IGEgc2FmZWdhdXJkXHJcbiAgICAgICAgY29uc3QgYmxhY2tsaXN0ZWQgPSBbXHJcbiAgICAgICAgICAgICdcXC9hcGlcXC91c2Vyc1xcL2NyZWF0ZScsXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCBwYXRoID0gcmVxLm9yaWdpbmFsVXJsO1xyXG4gICAgICAgIGlmICghcmVxLnNlc3Npb24udXNlcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gc2Vzc2lvbicpO1xyXG4gICAgICAgICAgICBpZiAobmV3IFJlZ0V4cChibGFja2xpc3RlZC5qb2luKCd8JyksICdpJykudGVzdChwYXRoKSkgeyAvLyBJZiBvbiB0aGUgYmxhY2tsaXN0XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMSkuc2VuZCgnUGxlYXNlIGxvZyBpbicpO1xyXG4gICAgICAgICAgICB9IGVsc2UgeyAvLyBBbGxvd2VkXHJcbiAgICAgICAgICAgICAgICBuZXh0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgU2Vzc2lvbiB3aXRoIHVzZXI6ICR7cmVxLnNlc3Npb24udXNlci51c2VybmFtZX1gKTtcclxuICAgICAgICAgICAgbmV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzZXNzaW9uQXV0aDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9jb25maWcvc2Vzc2lvbi5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsaWVudC1zZXNzaW9uc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNsaWVudC1zZXNzaW9uc1wiXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9