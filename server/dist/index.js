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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Application entry, setting up server
console.log("Hello");
// The express app we just created

console.log("Test");

var port = parseInt(process.env.PORT, 10) || 5555;
_app2["default"].set('port', port);

// 0.0.0.0 makes it available on your local network
// app.listen(port, '0.0.0.0');
_app2["default"].listen(port);

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

console.log(__dirname);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDAwNTc1OTNmMzAwNjhmYzA0NzIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvbW9kZWxzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1wb2x5ZmlsbFwiIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9yb3V0ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9yb3V0ZXMvYXBpUm91dGVzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvY29udHJvbGxlcnMvdGVzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL3JvdXRlcy91c2VyUm91dGVzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvY29udHJvbGxlcnMvdXNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcXVlbGl6ZVwiIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvY29uZmlnL2NvbmZpZy5qc29uIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvcm91dGVzL2xvZ2luUm91dGVzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvY29udHJvbGxlcnMvbG9naW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9yb3V0ZXMvZGF5T2ZSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy9kYXlPZi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL3JvdXRlcy9tZWRpYVJvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL3JvdXRlcy9zZWFyY2hSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy9zZWFyY2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy9zZWFyY2gvc2VhcmNoLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb25maWcvc2Vzc2lvbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGllbnQtc2Vzc2lvbnNcIiJdLCJuYW1lcyI6WyJmcyIsInBhdGgiLCJjb25maWdGaWxlIiwicmVxdWlyZSIsImVudiIsInByb2Nlc3MiLCJOT0RFX0VOViIsIl9fZGlybmFtZSIsImN3ZCIsImN1cnJlbnREaXIiLCJqb2luIiwiZmlsZW5hbWUiLCJtb2R1bGUiLCJ1bmRlZmluZWQiLCJiYXNlbmFtZSIsImRiIiwic2VxdWVsaXplIiwiREFUQUJBU0VfVVJMIiwiY29uZmlnIiwiZGF0YWJhc2UiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwicmVhZGRpclN5bmMiLCJmaWx0ZXIiLCJmaWxlIiwiaW5kZXhPZiIsInNsaWNlIiwiZm9yRWFjaCIsIm1vZGVsIiwibmFtZSIsIk9iamVjdCIsImtleXMiLCJtb2RlbE5hbWUiLCJhc3NvY2lhdGUiLCJTZXF1ZWxpemUiLCJleHBvcnRzIiwiY29uc29sZSIsImxvZyIsInBvcnQiLCJwYXJzZUludCIsIlBPUlQiLCJzZXQiLCJsaXN0ZW4iLCJleHByZXNzIiwibG9nZ2VyIiwiYm9keVBhcnNlciIsInNlc3Npb25BdXRoIiwiYXBwIiwiYWxsIiwicmVxIiwicmVzIiwibmV4dCIsImhlYWRlciIsIm1ldGhvZCIsInNlbmQiLCJ1c2UiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwiZ2V0Iiwic3RhdHVzIiwic2VuZEZpbGUiLCJyb290IiwidGVzdEZ1bmN0aW9uIiwidGVzdEZ1bmN0aW9uMiIsInBvc3QiLCJVc2VyIiwibGlzdCIsImZpbmRBbGwiLCJ0aGVuIiwidXNlcnMiLCJ1c2VyIiwiZGF0YVZhbHVlcyIsImVycm9yIiwiY3JlYXRlVXNlciIsImJvZHkiLCJlbWFpbCIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJvcmdhbml6YXRpb24iLCJjcmVhdGUiLCJsb2dpbiIsImRhdGEiLCJzdWNjZXNzIiwiZmluZE9uZSIsIndoZXJlIiwic2Vzc2lvbiIsImxvZ291dCIsInByZXZpb3VzVXNlciIsInJlc2V0IiwiY3VycmVudFVzZXIiLCJsb2dnZWRfaW4iLCJzY2hlZHVsZSIsInNlYXJjaCIsInVzZXJEYXRhIiwibWFwIiwicXVlcnkiLCJzb3J0ZWRVc2VycyIsInF1ZXJ5QXJyYXkiLCJzcGxpdCIsInJhbmsiLCJpIiwibGVuZ3RoIiwiSlNPTiIsInN0cmluZ2lmeSIsInRvTG93ZXJDYXNlIiwic29ydCIsImEiLCJiIiwic2Vzc2lvbnMiLCJjb29raWVOYW1lIiwic2VjcmV0IiwiZHVyYXRpb24iLCJhY3RpdmVEdXJhdGlvbiIsImJsYWNrbGlzdGVkIiwib3JpZ2luYWxVcmwiLCJSZWdFeHAiLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztB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QixDOzs7Ozs7QUNqQ0EsNEMiLCJmaWxlIjoiZGlzdC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQwMDU3NTkzZjMwMDY4ZmMwNDcyIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGhcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBFUzYtc3R5bGUgaW1wb3J0c1xyXG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCBTZXF1ZWxpemUgZnJvbSAnc2VxdWVsaXplJztcclxuXHJcbmNvbnN0IGNvbmZpZ0ZpbGUgID0gcmVxdWlyZSgnLi4vY29uZmlnL2NvbmZpZy5qc29uJyk7XHJcblxyXG52YXIgZW52ICAgICAgICAgICAgID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JzsgLy8gRGV0ZXJtaW5lIGlmIHVzaW5nIGRldmVsb3BtZW50XHJcbmNvbnN0IF9fZGlybmFtZSAgICAgPSBwcm9jZXNzLmN3ZCgpOyAvLyBDb3VsZCBicmVhayBvbiBwcm9kXHJcbmNvbnN0IGN1cnJlbnREaXIgPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9zZXJ2ZXIvc3JjL21vZGVscycpO1xyXG5cclxuLy8gUmVndWxhciBgbW9kdWxlLmZpbGVuYW1lYCBpcyB1bmRlZmluZWQgaW4gbG9jYWwgZGV2XHJcbmNvbnN0IGZpbGVuYW1lID0gKG1vZHVsZS5maWxlbmFtZSAhPT0gdW5kZWZpbmVkKSA/IG1vZHVsZS5maWxlbmFtZSA6ICdpbmRleC5qcyc7XHJcbnZhciBiYXNlbmFtZSAgPSBwYXRoLmJhc2VuYW1lKGZpbGVuYW1lKTtcclxuXHJcbnZhciBkYiA9IHt9O1xyXG5cclxuLy8gSSB1c2UgdGhlIG5vZGUtY29uZmlnIHBhY2thZ2UgdG8gbWFuYWdlIHRoZSBEQiBjb25maWcgeW91IGNhbiBjaG9vc2VcclxuLy8gdG8gc3RpY2sgd2l0aCB0aGUgb3JpZ2luYWwgdmVyc2lvbi4gQW5kIEkgcmVtb3ZlZCBlbnZpcm9ubWVudCB2YXJpYWJsZVxyXG4vLyBzdXBwb3J0IGJlY2F1c2UgSSBkb24ndCBuZWVkIGl0LlxyXG5sZXQgc2VxdWVsaXplID0ge307XHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOVikge1xyXG4gICAgLy8gRnJvbSB0aGUgZW52aXJvbm1lbnQsIGV4dHJhY3QgdGhlIGtleSB3aXRoIHRoZSBuYW1lIHByb3ZpZGVkIGluIHRoZSBjb25maWcgYXMgdXNlX2Vudl92YXJpYWJsZVxyXG4gICAgLy8gYW5kIHVzZSB0aGF0IHRvIGVzdGFibGlzaCBhIGNvbm5lY3Rpb24gdG8gb3VyIGRhdGFiYXNlLlxyXG4gICAgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwpOyAvLyBFc3RhYmxpc2ggY29ubmVjdGlvbiB1c2luZyBlbnZpcm9ubWVudCB2YXJpYWJsZXNcclxuXHJcbn0gZWxzZSB7XHJcbiAgICB2YXIgY29uZmlnICAgID0gY29uZmlnRmlsZVtlbnZdOyAvLyBJZiBsb2NhbCwgdXNlIGNvbmZpZ1xyXG5cclxuICAgIHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUoY29uZmlnLmRhdGFiYXNlLCBjb25maWcudXNlcm5hbWUsIGNvbmZpZy5wYXNzd29yZCwgY29uZmlnKTsgLy8gQ29ubmVjdFxyXG59XHJcblxyXG5mc1xyXG4gICAgLnJlYWRkaXJTeW5jKGN1cnJlbnREaXIpXHJcbiAgICAuZmlsdGVyKGZ1bmN0aW9uKGZpbGUpIHtcclxuICAgICAgICByZXR1cm4gKGZpbGUuaW5kZXhPZignLicpICE9PSAwKSAmJiAoZmlsZSAhPT0gYmFzZW5hbWUpICYmIChmaWxlLnNsaWNlKC0zKSA9PT0gJy5qcycpO1xyXG4gICAgfSlcclxuICAgIC5mb3JFYWNoKGZ1bmN0aW9uKGZpbGUpIHtcclxuICAgICAgICB2YXIgbW9kZWwgPSBzZXF1ZWxpemUuaW1wb3J0KHBhdGguam9pbihjdXJyZW50RGlyLCBmaWxlKSk7XHJcbiAgICAgICAgZGJbbW9kZWwubmFtZV0gPSBtb2RlbDtcclxuICAgIH0pO1xyXG5cclxuT2JqZWN0LmtleXMoZGIpLmZvckVhY2goZnVuY3Rpb24obW9kZWxOYW1lKSB7XHJcbiAgICBpZiAoZGJbbW9kZWxOYW1lXS5hc3NvY2lhdGUpIHtcclxuICAgICAgICBkYlttb2RlbE5hbWVdLmFzc29jaWF0ZShkYik7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZGIuc2VxdWVsaXplID0gc2VxdWVsaXplO1xyXG5kYi5TZXF1ZWxpemUgPSBTZXF1ZWxpemU7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGRiO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvc3JjL21vZGVscy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcG9seWZpbGxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1wb2x5ZmlsbFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIEFwcGxpY2F0aW9uIGVudHJ5LCBzZXR0aW5nIHVwIHNlcnZlclxyXG5jb25zb2xlLmxvZyhcIkhlbGxvXCIpXHJcbmltcG9ydCBhcHAgZnJvbSAnLi9hcHAnOyAvLyBUaGUgZXhwcmVzcyBhcHAgd2UganVzdCBjcmVhdGVkXHJcblxyXG5jb25zb2xlLmxvZyhcIlRlc3RcIilcclxuXHJcbmNvbnN0IHBvcnQgPSBwYXJzZUludChwcm9jZXNzLmVudi5QT1JULCAxMCkgfHwgNTU1NTtcclxuYXBwLnNldCgncG9ydCcsIHBvcnQpO1xyXG5cclxuLy8gMC4wLjAuMCBtYWtlcyBpdCBhdmFpbGFibGUgb24geW91ciBsb2NhbCBuZXR3b3JrXHJcbi8vIGFwcC5saXN0ZW4ocG9ydCwgJzAuMC4wLjAnKTtcclxuYXBwLmxpc3Rlbihwb3J0KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9pbmRleC5qcyIsImltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xyXG5cclxuY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcclxuY29uc3QgbG9nZ2VyID0gcmVxdWlyZSgnbW9yZ2FuJyk7XHJcbmNvbnN0IGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO1xyXG5jb25zdCBzZXNzaW9uQXV0aCA9IHJlcXVpcmUoJy4vY29uZmlnL3Nlc3Npb24nKTtcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuXHJcbmxldCBfX2Rpcm5hbWUgPSBwcm9jZXNzLmN3ZCgpO1xyXG5cclxuY29uc29sZS5sb2coX19kaXJuYW1lKVxyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7IC8vIFNldHVwIGV4cHJlc3MgYXBwXHJcblxyXG4vLyBBbGxvdyBjcm9zcyBvcmlnaW4gcmVxdWVzdHMgd2l0aCBhdXRob3JpemF0aW9uIChmb3IgQVBJIHB1cnBvc2VzKVxyXG5hcHAuYWxsKCcqJywgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpO1xyXG4gICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcycsICdQVVQsIEdFVCwgUE9TVCwgREVMRVRFLCBPUFRJT05TJyk7XHJcbiAgICByZXMuaGVhZGVyKFxyXG4gICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJyxcclxuICAgICAgICAnYWNjZXB0LCBjb250ZW50LXR5cGUsIHgtcGFyc2UtYXBwbGljYXRpb24taWQsIHgtcGFyc2UtcmVzdC1hcGkta2V5LCB4LXBhcnNlLXNlc3Npb24tdG9rZW4sIEFVVEhPUklaQVRJT04nXHJcbiAgICApO1xyXG5cclxuICAgIC8vIEludGVyY2VwdCBPUFRJT05TIG1ldGhvZFxyXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdPUFRJT05TJykge1xyXG4gICAgICAgIHJlcy5zZW5kKDIwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5leHQoKTtcclxuICAgIH1cclxufSk7XHJcblxyXG4vLyBTZXR1cCBhdXRoZW50aWNhdGlvbiBhbmQgc2VjdXJpdHlcclxuc2Vzc2lvbkF1dGgoYXBwKTtcclxuXHJcbi8vIExvZyByZXF1ZXN0cyB0byB0aGUgY29uc29sZS5cclxuYXBwLnVzZShsb2dnZXIoJ2RldicpKTtcclxuXHJcbi8vIFBhcnNlIGluY29taW5nIHJlcXVlc3RzIGRhdGEgKGh0dHBzOi8vZ2l0aHViLmNvbS9leHByZXNzanMvYm9keS1wYXJzZXIpXHJcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xyXG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiBmYWxzZSB9KSk7XHJcbmFwcC51c2UoJy9zY3JpcHRzJywgZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uLy4uL2NsaWVudC9kaXN0JykpKTtcclxuXHJcbi8vIFJlcXVpcmUgcm91dGVzIGFuZCBzaW11bHRhbmVvdXNseSBhdHRhY2ggYXBwXHJcbnJvdXRlcyhhcHApO1xyXG5cclxuLy8gQ2F0Y2ggYWxsIGlmIHRoZSByb3V0ZXMgZG9lc24ndCBmaW5kIGEgdmFsaWQgVVJMXHJcbmFwcC5nZXQoJyonLCAocmVxLCByZXMpID0+IHJlcy5zdGF0dXMoMjAwKS5zZW5kKCdOb3RoaW5nIGhlcmUgeWV0Li4uJykpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBwO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvc3JjL2FwcC5qcyIsImltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG4vLyBGdW5jdGlvbmFsIGNvbnRyb2xsZXJzIGdvIGhlcmU6XHJcbi8vIC4uLlxyXG5cclxuLy8gTWFrZSBtb2R1bGFyIHNvIG5vdCBhbGwgcm91dGVzIGFyZSBoZXJlXHJcbmltcG9ydCBhcGlSb3V0ZXMgZnJvbSAnLi9hcGlSb3V0ZXMnO1xyXG5pbXBvcnQgdXNlclJvdXRlcyBmcm9tICcuL3VzZXJSb3V0ZXMnO1xyXG5pbXBvcnQgbG9naW5Sb3V0ZXMgZnJvbSAnLi9sb2dpblJvdXRlcyc7XHJcbmltcG9ydCBkYXlPZlJvdXRlcyBmcm9tICcuL2RheU9mUm91dGVzJztcclxuaW1wb3J0IG1lZGlhUm91dGVzIGZyb20gJy4vbWVkaWFSb3V0ZXMnO1xyXG5pbXBvcnQgc2VhcmNoUm91dGVzIGZyb20gJy4vc2VhcmNoUm91dGVzJztcclxuXHJcbi8vIFJlcXVpcmVzIGFuIGFwcCBhcyBhbiBpbnB1dCBzbyBjYW4gZGlyZWN0IHRoZSB1c2VyIGFjY29yZGluZ2x5XHJcbmV4cG9ydCBkZWZhdWx0IChhcHApID0+IHtcclxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqICBSb3V0ZXMgICoqKioqKioqKioqKioqKioqKioqICovXHJcbiAgICBhcGlSb3V0ZXMoYXBwKTtcclxuICAgIHVzZXJSb3V0ZXMoYXBwKTtcclxuICAgIGxvZ2luUm91dGVzKGFwcCk7XHJcbiAgICBkYXlPZlJvdXRlcyhhcHApO1xyXG4gICAgbWVkaWFSb3V0ZXMoYXBwKTtcclxuICAgIHNlYXJjaFJvdXRlcyhhcHApO1xyXG5cclxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqICBDbGllbnQgICoqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG4gICAgLy8gU2VydmUgdGhlIHN0YXRpYyBjbGllbnQgaW5kZXguanMgYnVpbGQgZmlsZVxyXG4gICAgYXBwLmdldCgnL3NjcmlwdHMvaW5kZXguanMnLCAocmVxLCByZXMpID0+IHtcclxuICAgICAgICBjb25zdCBfX2Rpcm5hbWUgPSBwcm9jZXNzLmN3ZCgpO1xyXG4gICAgICAgIHJlcy5zZW5kRmlsZSgnaW5kZXguanMnLCB7IHJvb3Q6IHBhdGguam9pbihfX2Rpcm5hbWUsICcuL2NsaWVudC9kaXN0JykgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBhcHAuZ2V0KCcvZmF2aWNvbi5wbmcnLCAocmVxLCByZXMpID0+IHtcclxuICAgICAgICBjb25zdCBfX2Rpcm5hbWUgPSBwcm9jZXNzLmN3ZCgpO1xyXG4gICAgICAgIHJlcy5zZW5kRmlsZSgnZmF2aWNvbi5wbmcnLCB7IHJvb3Q6IHBhdGguam9pbihfX2Rpcm5hbWUsICcuL2NsaWVudC9kaXN0JykgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDbGllbnQgYXBwIGVudHJ5IGluZGV4Lmh0bWwgZmlsZSAtIHJlYWN0IHJvdXRlclxyXG4gICAgYXBwLmdldCgnKicsIChyZXEsIHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IF9fZGlybmFtZSA9IHByb2Nlc3MuY3dkKCk7XHJcbiAgICAgICAgcmVzLnNlbmRGaWxlKCdpbmRleC5odG1sJywgeyByb290OiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9jbGllbnQvZGlzdCcpIH0pOyAvLyBSZW5kZXIgY2xpZW50XHJcbiAgICB9KTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9yb3V0ZXMvaW5kZXguanMiLCJpbXBvcnQgeyB0ZXN0RnVuY3Rpb24gfSBmcm9tICcuLi9jb250cm9sbGVycy90ZXN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChhcHApID0+IHtcclxuICAgIGFwcC5nZXQoJy9hcGkvdGVzdCcsIHRlc3RGdW5jdGlvbik7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvcm91dGVzL2FwaVJvdXRlcy5qcyIsImV4cG9ydCBjb25zdCB0ZXN0RnVuY3Rpb24gPSAocmVxLCByZXMpID0+IHtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKCdUaGlzIGlzIGEgdGVzdCcpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRlc3RGdW5jdGlvbjIgPSAocmVxLCByZXMpID0+IHtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKCdUaGlzIGlzIHRlc3QgIzInKTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9jb250cm9sbGVycy90ZXN0L2luZGV4LmpzIiwiaW1wb3J0IHsgY3JlYXRlVXNlciwgbGlzdCB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL3VzZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChhcHApID0+IHtcclxuICAgIGFwcC5wb3N0KCcvYXBpL3VzZXJzL2NyZWF0ZScsIGNyZWF0ZVVzZXIgKTtcclxuICAgIGFwcC5nZXQoJy9hcGkvdXNlcnMnLCBsaXN0ICk7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvcm91dGVzL3VzZXJSb3V0ZXMuanMiLCJjb25zdCBVc2VyID0gcmVxdWlyZSgnLi4vLi4vbW9kZWxzJykuVXNlcjtcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0ID0gKHJlcSwgcmVzKSA9PiB7XHJcbiAgICByZXR1cm4gVXNlclxyXG4gICAgICAgIC5maW5kQWxsKHt9KSAvLyBHZXQgYWxsIHF1b3Rlc1xyXG4gICAgICAgIC50aGVuKCh1c2VycykgPT4ge1xyXG4gICAgICAgICAgICAvLyBGaWx0ZXIgb3V0IHBhc3N3b3JkIGF0dHJpYnV0ZXNcclxuICAgICAgICAgICAgdXNlcnMuZm9yRWFjaCgodXNlcikgPT4geyBkZWxldGUgdXNlci5kYXRhVmFsdWVzLnBhc3N3b3JkIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1c2Vycyk7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHVzZXJzKTtcclxuICAgICAgICB9KSAvLyBSZXR1cm4gYXJyYXkgb2YgcXVvdGVzXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7IC8vIEVycm9yXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlVXNlciA9IChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ0NyZWF0ZWQgdXNlcicpO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgIGZpcnN0X25hbWUsXHJcbiAgICAgICAgbGFzdF9uYW1lLFxyXG4gICAgICAgIG9yZ2FuaXphdGlvbixcclxuICAgIH0gPSByZXEuYm9keTsgLy8gSW5mb3JtYXRpb24gZnJvbSB0aGUgcmVxdWVzdCBib2R5IEpTT04gZGF0YVxyXG5cclxuICAgIHJldHVybiBVc2VyXHJcbiAgICAgICAgLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgICAgIGZpcnN0X25hbWUsXHJcbiAgICAgICAgICAgIGxhc3RfbmFtZSxcclxuICAgICAgICAgICAgb3JnYW5pemF0aW9uLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHVzZXIpID0+IHsgLy8gU3VjY2VzczogY3JlYXRlZCBuZXcgcXVvdGUgZW50cnlcclxuICAgICAgICAgICAgZGVsZXRlIHVzZXIuZGF0YVZhbHVlcy5wYXNzd29yZDsgLy8gUmVtb3ZlIHBhc3N3b3JkXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHVzZXIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcik7XHJcbiAgICAgICAgfSk7IC8vIEVycm9yXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvY29udHJvbGxlcnMvdXNlcnMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZnNcIlxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2VxdWVsaXplXCJcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1wiZGV2ZWxvcG1lbnRcIjp7XCJ1c2VybmFtZVwiOlwia2V2aW5ob3VcIixcInBhc3N3b3JkXCI6bnVsbCxcImRhdGFiYXNlXCI6XCJpZ25pdGUtc3RlbS1kZXZcIixcImhvc3RcIjpcIjEyNy4wLjAuMVwiLFwicG9ydFwiOjU0MzIsXCJkaWFsZWN0XCI6XCJwb3N0Z3Jlc1wifSxcInRlc3RcIjp7XCJ1c2VybmFtZVwiOlwia2V2aW5ob3VcIixcInBhc3N3b3JkXCI6bnVsbCxcImRhdGFiYXNlXCI6XCJpZ25pdGUtc3RlbS10ZXN0XCIsXCJob3N0XCI6XCIxMjcuMC4wLjFcIixcInBvcnRcIjo1NDMyLFwiZGlhbGVjdFwiOlwicG9zdGdyZXNcIn0sXCJwcm9kdWN0aW9uXCI6e1widXNlX2Vudl92YXJpYWJsZVwiOlwiREFUQUJBU0VfVVJMXCJ9fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2VydmVyL3NyYy9jb25maWcvY29uZmlnLmpzb25cbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7IGxvZ2luLCBsb2dvdXQsIGN1cnJlbnRVc2VyIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvbG9naW4nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGFwcDogZXhwcmVzcy5BcHBsaWNhdGlvbikgPT4ge1xyXG4gICAgYXBwLnBvc3QoJy9hcGkvbG9naW4nLCBsb2dpbik7XHJcbiAgICBhcHAuZ2V0KCcvYXBpL2xvZ291dCcsIGxvZ291dCk7XHJcbiAgICBhcHAuZ2V0KCcvYXBpL3VzZXJzL2N1cnJlbnQnLCBjdXJyZW50VXNlcik7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9yb3V0ZXMvbG9naW5Sb3V0ZXMuanMiLCJjb25zdCBVc2VyID0gcmVxdWlyZSgnLi4vLi4vbW9kZWxzL2luZGV4LmpzJykuVXNlcjtcclxuXHJcbi8qXHJcbiAqIFBhcmFtZXRlcnM6XHJcbiAqICByZXEuYm9keSB7XHJcbiAqICAgICAgdXNlcm5hbWUsXHJcbiAqICAgICAgcGFzc3dvcmQsXHJcbiAqICB9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbG9naW4gPSAocmVxOiBSZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcclxuICAgIGlmIChkYXRhLnVzZXJuYW1lID09PSB1bmRlZmluZWQgfHwgZGF0YS5wYXNzd29yZCA9PT0gdW5kZWZpbmVkKSB7IC8vIEVtcHR5IGF1dGhlbnRpY2F0aW9uXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoe1xyXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgZXJyb3I6ICdQbGVhc2Ugc3VibWl0IGEgdXNlcm5hbWUgYW5kIHBhc3N3b3JkJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm47IC8vIFRlcm1pbmF0ZVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coYFVzZXJuYW1lOiAke2RhdGEudXNlcm5hbWV9YCk7XHJcbiAgICByZXR1cm4gVXNlclxyXG4gICAgICAgIC5maW5kT25lKHtcclxuICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBkYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGRhdGEucGFzc3dvcmQsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSAvLyBHZXQgYWxsIHF1b3Rlc1xyXG4gICAgICAgIC50aGVuKCh1c2VyOiBVc2VyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyID09IG51bGwpIHsgLy8gSW52YWxpZCBjcmVkZW50aWFsc1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiAnSW52YWxpZCB1c2VybmFtZSAmIHBhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBWYWxpZCBjcmVkZW50aWFsc1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgU3VjY2Vzc2Z1bGx5IGxvZ2dlZCBpbiB1c2VyOiAke3VzZXIudXNlcm5hbWV9YCk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB1c2VyLnBhc3N3b3JkOyAvLyBEb24ndCBzZW5kIGJhY2sgcGFzc3dvcmRcclxuICAgICAgICAgICAgcmVxLnNlc3Npb24udXNlciA9IHVzZXI7IC8vIFNldCBjb29raWVcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHVzZXIsIC8vIFNlbmQgdXNlclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KSAvLyBSZXR1cm4gYXJyYXkgb2YgcXVvdGVzXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGVycm9yLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTsgLy8gRXJyb3IgaW4gcmVxdWVzdFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKHJlcTogUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSA9PiB7XHJcbiAgICBjb25zdCBwcmV2aW91c1VzZXIgPSByZXEuc2Vzc2lvbi51c2VyO1xyXG4gICAgcmVxLnNlc3Npb24ucmVzZXQoKTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgIHVzZXI6IHByZXZpb3VzVXNlcixcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3VycmVudFVzZXIgPSAocmVxOiBSZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpID0+IHtcclxuICAgIGlmIChyZXEuc2Vzc2lvbi51c2VyKSB7XHJcbiAgICAgICAgZGVsZXRlIHJlcS5zZXNzaW9uLnVzZXIucGFzc3dvcmQ7IC8vIFJlbW92ZSBwYXNzd29yZFxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGxvZ2dlZF9pbjogdHJ1ZSxcclxuICAgICAgICAgICAgdXNlcjogcmVxLnNlc3Npb24udXNlcixcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGRhdGEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICBsb2dnZWRfaW46IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9jb250cm9sbGVycy9sb2dpbi9pbmRleC5qcyIsImltcG9ydCBzY2hlZHVsZSBmcm9tICcuLi9jb250cm9sbGVycy9kYXlPZic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoYXBwKSA9PiB7XHJcbiAgICBhcHAuZ2V0KCcvYXBpL3NjaGVkdWxlJywgc2NoZWR1bGUpO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvc3JjL3JvdXRlcy9kYXlPZlJvdXRlcy5qcyIsIi8qIERldGFpbHM6XHJcbiAqICBkYXRlOiBJU08gODYwMVxyXG4gKlxyXG4gKi9cclxuY29uc3Qgc2NoZWR1bGUgPSAocmVxLCByZXMpID0+IHtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcclxuICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJTb21lIExvbmdnZ2cgRXZlbnQgTmFtZSBJREtcIixcclxuICAgICAgICAgICAgICAgIFwidGltZVwiOiBcIjIwMTgtMDMtMjdUMjM6MDI6NDcrMDA6MDBcIixcclxuICAgICAgICAgICAgICAgIFwibG9jYXRpb25cIjogXCJTb21lIGxvY2F0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBcImNhdGVnb3J5XCI6IFwiV29ya3Nob3BcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSGFja2F0aG9uIDEwMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0aW1lXCI6IFwiMjAxOC0wMy0yN1QyMzowMjo0NyswMDowMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJsb2NhdGlvblwiOiBcIlJvb20gNTAyMCBzb21ld2hlcmVcIixcclxuICAgICAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogXCJXb3Jrc2hvcFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJIb3cgdG8gYnJpbmcgc3RlbSBpbnRvIHRoZSBjbGFzc3Jvb21cIixcclxuICAgICAgICAgICAgICAgIFwidGltZVwiOiBcIjIwMTgtMDMtMjdUMjM6MDI6NDcrMDA6MDBcIixcclxuICAgICAgICAgICAgICAgIFwibG9jYXRpb25cIjogXCJBIHJlYXNvbmFibHkgbG9uZyBsb2NhdGlvbiBkZXNjcmlwdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJjYXRlZ29yeVwiOiBcIldvcmtzaG9wXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlRFRCBUYWxrXCIsXHJcbiAgICAgICAgICAgICAgICBcInRpbWVcIjogXCIyMDE4LTAzLTI3VDIzOjAyOjQ3KzAwOjAwXCIsXHJcbiAgICAgICAgICAgICAgICBcImxvY2F0aW9uXCI6IFwiU2hvcnRcIixcclxuICAgICAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogXCJQcmVzZW50YXRpb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRXJpYyBUaG9tYW4gU3BlYWtlciBTZXJpZXNcIixcclxuICAgICAgICAgICAgICAgIFwidGltZVwiOiBcIjIwMTgtMDMtMjdUMjM6MDI6NDcrMDA6MDBcIixcclxuICAgICAgICAgICAgICAgIFwibG9jYXRpb25cIjogXCJrZXZpbidzIGhvdXNlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNhdGVnb3J5XCI6IFwiU3BlYWtlclwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJFdmVudCBuYW1lXCIsXHJcbiAgICAgICAgICAgICAgICBcInRpbWVcIjogXCIyMDE4LTAzLTI3VDIzOjAyOjQ3KzAwOjAwXCIsXHJcbiAgICAgICAgICAgICAgICBcImxvY2F0aW9uXCI6IFwia2V2aW4ncyBob3VzZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjYXRlZ29yeVwiOiBcIldvcmtzaG9wXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzY2hlZHVsZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9jb250cm9sbGVycy9kYXlPZi9pbmRleC5qcyIsImltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoYXBwKSA9PiB7XHJcbiAgICBhcHAuZ2V0KCcvYXBpL21lZGlhL2JsdWVfZmlyZS5wbmcnLCAocmVxLCByZXMpID0+IHtcclxuICAgICAgICBjb25zdCBfX2Rpcm5hbWUgPSBwcm9jZXNzLmN3ZCgpO1xyXG4gICAgICAgIHJlcy5zZW5kRmlsZSgnZmlyZV9ibHVlLnBuZycsIHsgcm9vdDogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vY2xpZW50L21lZGlhJykgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9yb3V0ZXMvbWVkaWFSb3V0ZXMuanMiLCJpbXBvcnQgc2VhcmNoIGZyb20gJy4uL2NvbnRyb2xsZXJzL3NlYXJjaCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoYXBwKSA9PiB7XHJcbiAgICBhcHAucG9zdCgnL2FwaS9zZWFyY2gnLCBzZWFyY2gpO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvc3JjL3JvdXRlcy9zZWFyY2hSb3V0ZXMuanMiLCJjb25zdCBVc2VyID0gcmVxdWlyZSgnLi4vLi4vbW9kZWxzJykuVXNlcjtcclxuXHJcbmltcG9ydCBzZWFyY2hBbGdvcml0aG0gZnJvbSAnLi9zZWFyY2gnIC8vIEdldCB0aGUgc2VhcmNoIGFsZ29yaXRobVxyXG5cclxuY29uc3Qgc2VhcmNoID0gKHJlcSwgcmVzKSA9PiB7XHJcbiAgICByZXR1cm4gVXNlclxyXG4gICAgICAgIC5maW5kQWxsKHt9KSAvLyBHZXQgYWxsIHF1b3Rlc1xyXG4gICAgICAgIC50aGVuKCh1c2VycykgPT4ge1xyXG4gICAgICAgICAgICAvLyBGaWx0ZXIgb3V0IHBhc3N3b3JkIGF0dHJpYnV0ZXNcclxuICAgICAgICAgICAgdXNlcnMuZm9yRWFjaCgodXNlcikgPT4geyBkZWxldGUgdXNlci5kYXRhVmFsdWVzLnBhc3N3b3JkIH0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IHVzZXJEYXRhID0gdXNlcnMubWFwKCh1c2VyKSA9PiB1c2VyLmRhdGFWYWx1ZXMpO1xyXG5cclxuICAgICAgICAgICAgLy8gbGV0IHNvcnRlZFVzZXJzID0gdXNlcnM7IC8vIE1vZGlmeSB0aGlzIGFycmF5XHJcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gcmVxLmJvZHkucXVlcnk7IC8vIFRoZSBzZWFyY2ggcXVlcnlcclxuXHJcbiAgICAgICAgICAgIC8qKioqKioqKioqKioqKioqIENvZGUgZ29lcyBoZXJlICoqKioqKioqKioqKioqKiovXHJcbiAgICAgICAgICAgIGxldCBzb3J0ZWRVc2VycyA9IHNlYXJjaEFsZ29yaXRobShxdWVyeSwgdXNlckRhdGEpXHJcbiAgICAgICAgICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChzb3J0ZWRVc2Vycyk7XHJcbiAgICAgICAgfSkgLy8gUmV0dXJuIHJhbmtlZCBhcnJheSBvZiB1c2VycyBiYXNlZCBvbiBzZWFyY2ggcXVlcnlcclxuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKVxyXG4gICAgICAgIH0pOyAvLyBFcnJvclxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvc3JjL2NvbnRyb2xsZXJzL3NlYXJjaC9pbmRleC5qcyIsIi8vIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcclxuLy8gbGV0IHJhd0RhdGEgPSBmcy5yZWFkRmlsZVN5bmMoJy4vdXNlcnMuanNvbicpOyBcclxuLy9cclxuLy8gLy8gUmVhZCBpbiB0aGUgSlNPTiBkYXRhXHJcbi8vIGNvbnN0IHVzZXJzID0gSlNPTi5wYXJzZShyYXdEYXRhKTtcclxuXHJcbi8qbGV0IHJhbmsgPSAwO1xyXG5sZXQgc29ydGVkVXNlcnMgPSB1c2Vycy5tYXAoKHVzZXIpID0+IHtcclxuXHRyYW5rKys7XHJcblx0cmV0dXJuIHtcclxuXHRcdHJhbmssIFxyXG5cdFx0Li4udXNlcixcclxuXHR9XHJcbn0pOyovXHJcblxyXG4vLyBjb25zdCBxdWVyeSA9IFwiVGltIG1hdGggY29kaW5nXCI7IC8vIFRoZSBzZWFyY2ggcXVlcnlcclxuXHJcbmNvbnN0IHNlYXJjaCA9IChxdWVyeSwgdXNlcnMpID0+IHtcclxuICAgIC8qKioqKioqKioqKioqKioqIENvZGUgZ29lcyBoZXJlICoqKioqKioqKioqKioqKiovXHJcbiAgICAvKlxyXG4gICAgICogTW9kaWZ5IHRoZSBhcnJheTogc29ydGVkVXNlcnNcclxuICAgICAqICAobWFrZSBzdXJlIHRvIG1vZGlmeSB0aGUgcmFuayBhdHRyaWJ1dGUgdG8gbWF0Y2ggaXRzIG9yZGVyIGluIHRoZSBhcnJheSlcclxuICAgICAqIFVzZSB0aGUgdmFyaWFibGUsIHF1ZXJ5LCBhcyB0aGUgc2VhcmNoIHF1ZXJ5XHJcbiAgICAgKlxyXG4gICAgICogUnVuIHRoaXMgc2NyaXB0IHVzaW5nOlxyXG4gICAgICogICQgbm9kZSBzZWFyY2guanNcclxuICAgICAqL1xyXG5cclxuICAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJTZWFyY2hpbmcgcXVlcnk6XCIsIHF1ZXJ5KVxyXG4gICAgIFxyXG4gICAgIC8vU3BsaXR0aW5nIHF1ZXJ5IHN0cmluZyBpbnRvIGFuIGFycmF5IG9mIHN0cmluZ3NcclxuICAgICB2YXIgcXVlcnlBcnJheSA9IHF1ZXJ5LnNwbGl0KFwiIFwiKTtcclxuXHJcbiAgICAvL0FkanVzdGluZyB0aGUgcmFuayBvZiBlYWNoIHVzZXIgYnkgaW5jcmVtZW50aW5nIHRoZSByYW5rIGVhY2ggdGltZSBvbmUgb2YgdGhlIHdvcmRzXHJcbiAgICAvL2luIHRoZSBxdWVyeUFycmF5IHZhcmlhYmxlIGFwcGVhcnMgaW4gYSB1c2VyJ3MgZGF0YVxyXG4gICAgIHNvcnRlZFVzZXJzID0gdXNlcnMubWFwKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgcmFuayA9IDA7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHF1ZXJ5QXJyYXkubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkodXNlcikudG9Mb3dlckNhc2UoKS5pbmRleE9mKHF1ZXJ5QXJyYXlbaV0udG9Mb3dlckNhc2UoKSkgIT09IC0xKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByYW5rKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJhbmssXHJcbiAgICAgICAgICAgIC4uLnVzZXIsXHJcbiAgICAgICAgfVxyXG4gICAgIH0pO1xyXG5cclxuICAgIC8vU29ydGluZyBlYWNoIHVzZXIgZnJvbSBncmVhdGVzdCByYW5rIHRvIGxlYXN0IHJhbmtcclxuICAgIHNvcnRlZFVzZXJzLnNvcnQoZnVuY3Rpb24oYSxiKXtcclxuICAgICAgICByZXR1cm4gYi5yYW5rIC0gYS5yYW5rO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9SZWFzc2lnbmluZyB0aGUgcmFuayBvZiBlYWNoIHVzZXIgdG8gYmUgdGhlIHVzZXIncyBwb3NpdGlvbiAocGx1cyAxKSwgd2l0aGluIHRoZSBhcnJheVxyXG4gICAgZm9yKGkgPSAwOyBpIDwgc29ydGVkVXNlcnMubGVuZ3RoOyBpKyspXHJcbiAgICB7XHJcbiAgICAgICAgc29ydGVkVXNlcnNbaV0ucmFuayA9IGkgKyAxO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzb3J0ZWRVc2VycztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvc3JjL2NvbnRyb2xsZXJzL3NlYXJjaC9zZWFyY2guanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtb3JnYW5cIlxuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBzZXNzaW9ucyA9IHJlcXVpcmUoJ2NsaWVudC1zZXNzaW9ucycpOyAvLyBVc2VyIHNlc3Npb25zXHJcblxyXG5jb25zdCBzZXNzaW9uQXV0aCA9IChhcHApID0+IHtcclxuICAgIC8vIERvY3M6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL25vZGUtY2xpZW50LXNlc3Npb25zXHJcbiAgICBhcHAudXNlKHNlc3Npb25zKHtcclxuICAgICAgICBjb29raWVOYW1lOiAnc2Vzc2lvbicsIC8vIENvb2tpZSBuYW1lIGRpY3RhdGVzIHRoZSBrZXkgbmFtZSBhZGRlZCB0byB0aGUgcmVxdWVzdCBvYmplY3RcclxuICAgICAgICBzZWNyZXQ6ICdibGFyZ2FkZWVibGFyZ2JsYXJnJywgLy8gc2hvdWxkIGJlIGEgbGFyZ2UgdW5ndWVzc2FibGUgc3RyaW5nIChzdG9yZSBpbiBlbnZpcm9ubWVudCB2YXJpYWJsZXMgZXZlbnR1YWxseSlcclxuICAgICAgICBkdXJhdGlvbjogNCAqIDYwICogNjAgKiAxMDAwLCAvLyBob3cgbG9uZyB0aGUgc2Vzc2lvbiB3aWxsIHN0YXkgdmFsaWQgaW4gbXMgKDQgaG91cnMpXHJcbiAgICAgICAgYWN0aXZlRHVyYXRpb246IDEwMDAgKiA2MCAqIDYwICogMiwgLy8gaWYgZXhwaXJlc0luIDwgYWN0aXZlRHVyYXRpb24sIHRoZSBzZXNzaW9uIHdpbGwgYmUgZXh0ZW5kZWQgYnkgYWN0aXZlRHVyYXRpb24gbWlsbGlzZWNvbmRzXHJcbiAgICB9KSk7XHJcblxyXG4gICAgYXBwLnVzZSgocmVxLCByZXMsIG5leHQpID0+IHtcclxuICAgICAgICAvLyBBUElzIHRoYXQgY2xpZW50IG11c3QgYmUgbG9nZ2VkIGluIGZvclxyXG4gICAgICAgIC8vIEJlc3QgcHJhY3RpY2U6IEFQSXMgdGhhdCBhcmUgYWNjZXNzaWJsZSB2aWEgdGhlIGNsaWVudCBidXQgcmVxdWlyZSBhIGxvZ2luXHJcbiAgICAgICAgLy8gQVBJcyBhcmUgYWxyZWFkeSBwcm90ZWN0ZWQgYnkgYSBCYXNpYyBBdXRoLCB0aGlzIGlzIGp1c3QgYSBzYWZlZ2F1cmRcclxuICAgICAgICBjb25zdCBibGFja2xpc3RlZCA9IFtcclxuICAgICAgICAgICAgJ1xcL2FwaVxcL3VzZXJzXFwvY3JlYXRlJyxcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IHBhdGggPSByZXEub3JpZ2luYWxVcmw7XHJcbiAgICAgICAgaWYgKCFyZXEuc2Vzc2lvbi51c2VyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBzZXNzaW9uJyk7XHJcbiAgICAgICAgICAgIGlmIChuZXcgUmVnRXhwKGJsYWNrbGlzdGVkLmpvaW4oJ3wnKSwgJ2knKS50ZXN0KHBhdGgpKSB7IC8vIElmIG9uIHRoZSBibGFja2xpc3RcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAxKS5zZW5kKCdQbGVhc2UgbG9nIGluJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIEFsbG93ZWRcclxuICAgICAgICAgICAgICAgIG5leHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTZXNzaW9uIHdpdGggdXNlcjogJHtyZXEuc2Vzc2lvbi51c2VyLnVzZXJuYW1lfWApO1xyXG4gICAgICAgICAgICBuZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHNlc3Npb25BdXRoO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvc3JjL2NvbmZpZy9zZXNzaW9uLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xpZW50LXNlc3Npb25zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY2xpZW50LXNlc3Npb25zXCJcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=