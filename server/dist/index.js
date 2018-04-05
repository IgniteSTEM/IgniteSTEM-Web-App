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
    app.post('/api/users/checkUsername', _users.checkUsername);
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

var checkUsername = exports.checkUsername = function checkUsername(req, res) {
    var username = req.body.username; // Get username

    return User.findAll({
        where: {
            username: username // See if user exists with that username
        }
    }).then(function (users) {
        usernameAvailable = users.length == 0; // Username available if none
        res.status(200).send({
            available: usernameAvailable
        });
    })['catch'](function (error) {
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
            "Session": "Registration + Casual Breakfast",
            "Speaker": "",
            "Capacity": "",
            "Location": "",
            "Notes": ""
        }, {
            "Time": "9:30 - 9:45",
            "Session": "Opening Remarks",
            "Speaker": "IgniteSTEM Directors",
            "Capacity": "",
            "Location": "GWB 4A220A",
            "Notes": ""
        }, {
            "Time": "10:00 - 10:45",
            "Session": "Keynote",
            "Speaker": "Pat Yongpradit, Chief Academic Officer at Code.org",
            "Capacity": "",
            "Location": "GWB 4A220A",
            "Notes": ""
        }, {
            "Time": "11:00 - 12:30",
            "Session": "Lightning Talks and Workshops",
            "Speaker": "",
            "Capacity": "",
            "Location": "Apollo",
            "Notes": "max 25 people"
        }, {
            "Time": "11:00 - 12:30",
            "Session": "Lightning Talks and Workshops",
            "Speaker": "Don Buckley (Design Thinking)",
            "Capacity": 20,
            "Location": "Apollo",
            "Notes": ""
        }, {
            "Time": "11:00 - 12:30",
            "Session": "Lightning Talks and Workshops",
            "Speaker": "Godwyn Morris (Makerspace)",
            "Capacity": 30,
            "Location": "Apollo",
            "Notes": ""
        }, {
            "Time": "11:00 - 12:30",
            "Session": "Lightning Talks and Workshops",
            "Speaker": "IgniteSTEM Design Thinking",
            "Capacity": 20,
            "Location": "Apollo",
            "Notes": "Rafe's DT workshop"
        }, {
            "Time": "11:00 - 12:30",
            "Session": "Lightning Talks and Workshops",
            "Speaker": "Workshops for Teachers in Tech",
            "Capacity": 20,
            "Location": "Apollo",
            "Notes": "let by Aankit Patel"
        }, {
            "Time": "11:00 - 12:30",
            "Session": "Lightning Talks and Workshops",
            "Speaker": "Paul Scully (Building One America)",
            "Capacity": 20,
            "Location": "Baker Field",
            "Notes": ""
        }, {
            "Time": "11:00 - 12:30",
            "Session": "Lightning Talks and Workshops",
            "Speaker": "Council for Academic Opportunity",
            "Capacity": 20,
            "Location": "Apollo",
            "Notes": "D + I"
        }, {
            "Time": "11:00 - 12:30",
            "Session": "Lightning Talks and Workshops",
            "Speaker": "Major League Hacking",
            "Capacity": 20,
            "Location": "Apollo",
            "Notes": ""
        }, {
            "Time": "11:00 - 12:30",
            "Session": "Lightning Talks and Workshops",
            "Speaker": "Chris Harris",
            "Capacity": 20,
            "Location": "Apollo",
            "Notes": ""
        }, {
            "Time": "12:30 - 1:15",
            "Session": "Lunch",
            "Speaker": "",
            "Capacity": "",
            "Location": "Space D",
            "Notes": ""
        }, {
            "Time": "1:30 - 2:15",
            "Session": "EdTech Panel",
            "Speaker": "Labster",
            "Capacity": "",
            "Location": "GWB 4A220A",
            "Notes": ""
        }, {
            "Time": "1:30 - 2:15",
            "Session": "EdTech Panel",
            "Speaker": "Jack DeFuria (Bolt Learning)",
            "Capacity": "",
            "Location": "GWB 4A220A",
            "Notes": ""
        }, {
            "Time": "1:30 - 2:15",
            "Session": "EdTech Panel",
            "Speaker": "Piper",
            "Capacity": "",
            "Location": "GWB 4A220A",
            "Notes": ""
        }, {
            "Time": "2:15 - 3:00",
            "Session": "Keynote",
            "Speaker": "Jonathan Rochelle, Director of Product Management at Google Education",
            "Capacity": "",
            "Location": "GWB 4A220A",
            "Notes": ""
        }, {
            "Time": "3:15 - 4:00",
            "Session": "Unconference Session",
            "Speaker": "",
            "Capacity": "",
            "Location": "Apollo\r\nEmpire State\r\nBattery Park\r\nBethesda Fountain",
            "Notes": ""
        }, {
            "Time": "4:15 - 4:30",
            "Session": "Closing Remarks",
            "Speaker": "IgniteSTEM Directors",
            "Capacity": "",
            "Location": "GWB 4A220A",
            "Notes": ""
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDAxOGZmNTY5NTc2NTA0M2Y2MjMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvbW9kZWxzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1wb2x5ZmlsbFwiIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9yb3V0ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9yb3V0ZXMvYXBpUm91dGVzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvY29udHJvbGxlcnMvdGVzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL3JvdXRlcy91c2VyUm91dGVzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvY29udHJvbGxlcnMvdXNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcXVlbGl6ZVwiIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvY29uZmlnL2NvbmZpZy5qc29uIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvcm91dGVzL2xvZ2luUm91dGVzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvY29udHJvbGxlcnMvbG9naW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9yb3V0ZXMvZGF5T2ZSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy9kYXlPZi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL3JvdXRlcy9tZWRpYVJvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL3JvdXRlcy9zZWFyY2hSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy9zZWFyY2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy9zZWFyY2gvc2VhcmNoLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb25maWcvc2Vzc2lvbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGllbnQtc2Vzc2lvbnNcIiJdLCJuYW1lcyI6WyJmcyIsInBhdGgiLCJjb25maWdGaWxlIiwicmVxdWlyZSIsImVudiIsInByb2Nlc3MiLCJOT0RFX0VOViIsIl9fZGlybmFtZSIsImN3ZCIsImN1cnJlbnREaXIiLCJqb2luIiwiZmlsZW5hbWUiLCJtb2R1bGUiLCJ1bmRlZmluZWQiLCJiYXNlbmFtZSIsImRiIiwic2VxdWVsaXplIiwiREFUQUJBU0VfVVJMIiwiY29uZmlnIiwiZGF0YWJhc2UiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwicmVhZGRpclN5bmMiLCJmaWx0ZXIiLCJmaWxlIiwiaW5kZXhPZiIsInNsaWNlIiwiZm9yRWFjaCIsIm1vZGVsIiwibmFtZSIsIk9iamVjdCIsImtleXMiLCJtb2RlbE5hbWUiLCJhc3NvY2lhdGUiLCJTZXF1ZWxpemUiLCJleHBvcnRzIiwicG9ydCIsInBhcnNlSW50IiwiUE9SVCIsInNldCIsImxpc3RlbiIsImV4cHJlc3MiLCJsb2dnZXIiLCJib2R5UGFyc2VyIiwic2Vzc2lvbkF1dGgiLCJhcHAiLCJhbGwiLCJyZXEiLCJyZXMiLCJuZXh0IiwiaGVhZGVyIiwibWV0aG9kIiwic2VuZCIsInVzZSIsImpzb24iLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJnZXQiLCJzdGF0dXMiLCJzZW5kRmlsZSIsInJvb3QiLCJ0ZXN0RnVuY3Rpb24iLCJ0ZXN0RnVuY3Rpb24yIiwicG9zdCIsIlVzZXIiLCJsaXN0IiwiZmluZEFsbCIsInRoZW4iLCJ1c2VycyIsInVzZXIiLCJkYXRhVmFsdWVzIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiY2hlY2tVc2VybmFtZSIsImJvZHkiLCJ3aGVyZSIsInVzZXJuYW1lQXZhaWxhYmxlIiwibGVuZ3RoIiwiYXZhaWxhYmxlIiwiY3JlYXRlVXNlciIsImVtYWlsIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsIm9yZ2FuaXphdGlvbiIsImNyZWF0ZSIsImxvZ2luIiwiZGF0YSIsInN1Y2Nlc3MiLCJmaW5kT25lIiwic2Vzc2lvbiIsImxvZ291dCIsInByZXZpb3VzVXNlciIsInJlc2V0IiwiY3VycmVudFVzZXIiLCJsb2dnZWRfaW4iLCJzY2hlZHVsZSIsInNlYXJjaCIsInVzZXJEYXRhIiwibWFwIiwicXVlcnkiLCJzb3J0ZWRVc2VycyIsInF1ZXJ5QXJyYXkiLCJzcGxpdCIsInJhbmsiLCJpIiwiSlNPTiIsInN0cmluZ2lmeSIsInRvTG93ZXJDYXNlIiwic29ydCIsImEiLCJiIiwic2Vzc2lvbnMiLCJjb29raWVOYW1lIiwic2VjcmV0IiwiZHVyYXRpb24iLCJhY3RpdmVEdXJhdGlvbiIsImJsYWNrbGlzdGVkIiwib3JpZ2luYWxVcmwiLCJSZWdFeHAiLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtB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R0FBakIsQ0FBWCxFQUFrQyxHQUFsQyxFQUF1QzhHLElBQXZDLENBQTRDdkgsSUFBNUMsQ0FBSixFQUF1RDtBQUFFO0FBQ3JEK0Msb0JBQUlVLE1BQUosQ0FBVyxHQUFYLEVBQWdCTixJQUFoQixDQUFxQixlQUFyQjtBQUNILGFBRkQsTUFFTztBQUFFO0FBQ0xIO0FBQ0g7QUFDSixTQVBELE1BT087QUFDSHNCLG9CQUFRQyxHQUFSLGdDQUFrQ3pCLElBQUkyQyxPQUFKLENBQVlyQixJQUFaLENBQWlCakQsUUFBbkQ7QUFDQTZCO0FBQ0g7QUFDSixLQW5CRDtBQW9CSCxDQTdCRDs7QUErQkFyQyxPQUFPdUIsT0FBUCxHQUFpQlMsV0FBakIsQzs7Ozs7O0FDakNBLDRDIiwiZmlsZSI6ImRpc3QvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0MDE4ZmY1Njk1NzY1MDQzZjYyMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gRVM2LXN0eWxlIGltcG9ydHNcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgU2VxdWVsaXplIGZyb20gJ3NlcXVlbGl6ZSc7XG5cbmNvbnN0IGNvbmZpZ0ZpbGUgID0gcmVxdWlyZSgnLi4vY29uZmlnL2NvbmZpZy5qc29uJyk7XG5cbnZhciBlbnYgICAgICAgICAgICAgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnOyAvLyBEZXRlcm1pbmUgaWYgdXNpbmcgZGV2ZWxvcG1lbnRcbmNvbnN0IF9fZGlybmFtZSAgICAgPSBwcm9jZXNzLmN3ZCgpOyAvLyBDb3VsZCBicmVhayBvbiBwcm9kXG5jb25zdCBjdXJyZW50RGlyID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vc2VydmVyL3NyYy9tb2RlbHMnKTtcblxuLy8gUmVndWxhciBgbW9kdWxlLmZpbGVuYW1lYCBpcyB1bmRlZmluZWQgaW4gbG9jYWwgZGV2XG5jb25zdCBmaWxlbmFtZSA9IChtb2R1bGUuZmlsZW5hbWUgIT09IHVuZGVmaW5lZCkgPyBtb2R1bGUuZmlsZW5hbWUgOiAnaW5kZXguanMnO1xudmFyIGJhc2VuYW1lICA9IHBhdGguYmFzZW5hbWUoZmlsZW5hbWUpO1xuXG52YXIgZGIgPSB7fTtcblxuLy8gSSB1c2UgdGhlIG5vZGUtY29uZmlnIHBhY2thZ2UgdG8gbWFuYWdlIHRoZSBEQiBjb25maWcgeW91IGNhbiBjaG9vc2Vcbi8vIHRvIHN0aWNrIHdpdGggdGhlIG9yaWdpbmFsIHZlcnNpb24uIEFuZCBJIHJlbW92ZWQgZW52aXJvbm1lbnQgdmFyaWFibGVcbi8vIHN1cHBvcnQgYmVjYXVzZSBJIGRvbid0IG5lZWQgaXQuXG5sZXQgc2VxdWVsaXplID0ge307XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYpIHtcbiAgICAvLyBGcm9tIHRoZSBlbnZpcm9ubWVudCwgZXh0cmFjdCB0aGUga2V5IHdpdGggdGhlIG5hbWUgcHJvdmlkZWQgaW4gdGhlIGNvbmZpZyBhcyB1c2VfZW52X3ZhcmlhYmxlXG4gICAgLy8gYW5kIHVzZSB0aGF0IHRvIGVzdGFibGlzaCBhIGNvbm5lY3Rpb24gdG8gb3VyIGRhdGFiYXNlLlxuICAgIHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUocHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMKTsgLy8gRXN0YWJsaXNoIGNvbm5lY3Rpb24gdXNpbmcgZW52aXJvbm1lbnQgdmFyaWFibGVzXG5cbn0gZWxzZSB7XG4gICAgdmFyIGNvbmZpZyAgICA9IGNvbmZpZ0ZpbGVbZW52XTsgLy8gSWYgbG9jYWwsIHVzZSBjb25maWdcblxuICAgIHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUoY29uZmlnLmRhdGFiYXNlLCBjb25maWcudXNlcm5hbWUsIGNvbmZpZy5wYXNzd29yZCwgY29uZmlnKTsgLy8gQ29ubmVjdFxufVxuXG5mc1xuICAgIC5yZWFkZGlyU3luYyhjdXJyZW50RGlyKVxuICAgIC5maWx0ZXIoZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICByZXR1cm4gKGZpbGUuaW5kZXhPZignLicpICE9PSAwKSAmJiAoZmlsZSAhPT0gYmFzZW5hbWUpICYmIChmaWxlLnNsaWNlKC0zKSA9PT0gJy5qcycpO1xuICAgIH0pXG4gICAgLmZvckVhY2goZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICB2YXIgbW9kZWwgPSBzZXF1ZWxpemUuaW1wb3J0KHBhdGguam9pbihjdXJyZW50RGlyLCBmaWxlKSk7XG4gICAgICAgIGRiW21vZGVsLm5hbWVdID0gbW9kZWw7XG4gICAgfSk7XG5cbk9iamVjdC5rZXlzKGRiKS5mb3JFYWNoKGZ1bmN0aW9uKG1vZGVsTmFtZSkge1xuICAgIGlmIChkYlttb2RlbE5hbWVdLmFzc29jaWF0ZSkge1xuICAgICAgICBkYlttb2RlbE5hbWVdLmFzc29jaWF0ZShkYik7XG4gICAgfVxufSk7XG5cbmRiLnNlcXVlbGl6ZSA9IHNlcXVlbGl6ZTtcbmRiLlNlcXVlbGl6ZSA9IFNlcXVlbGl6ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBkYjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvbW9kZWxzL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1wb2x5ZmlsbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQXBwbGljYXRpb24gZW50cnksIHNldHRpbmcgdXAgc2VydmVyXG5pbXBvcnQgYXBwIGZyb20gJy4vYXBwJzsgLy8gVGhlIGV4cHJlc3MgYXBwIHdlIGp1c3QgY3JlYXRlZFxuXG5jb25zdCBwb3J0ID0gcGFyc2VJbnQocHJvY2Vzcy5lbnYuUE9SVCwgMTApIHx8IDU1NTU7XG5hcHAuc2V0KCdwb3J0JywgcG9ydCk7XG5cbi8vIDAuMC4wLjAgbWFrZXMgaXQgYXZhaWxhYmxlIG9uIHlvdXIgbG9jYWwgbmV0d29ya1xuLy8gYXBwLmxpc3Rlbihwb3J0LCAnMC4wLjAuMCcpO1xuYXBwLmxpc3Rlbihwb3J0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvaW5kZXguanMiLCJpbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcblxuY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbmNvbnN0IGxvZ2dlciA9IHJlcXVpcmUoJ21vcmdhbicpO1xuY29uc3QgYm9keVBhcnNlciA9IHJlcXVpcmUoJ2JvZHktcGFyc2VyJyk7XG5jb25zdCBzZXNzaW9uQXV0aCA9IHJlcXVpcmUoJy4vY29uZmlnL3Nlc3Npb24nKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbmxldCBfX2Rpcm5hbWUgPSBwcm9jZXNzLmN3ZCgpO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7IC8vIFNldHVwIGV4cHJlc3MgYXBwXG5cbi8vIEFsbG93IGNyb3NzIG9yaWdpbiByZXF1ZXN0cyB3aXRoIGF1dGhvcml6YXRpb24gKGZvciBBUEkgcHVycG9zZXMpXG5hcHAuYWxsKCcqJywgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKTtcbiAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJywgJ1BVVCwgR0VULCBQT1NULCBERUxFVEUsIE9QVElPTlMnKTtcbiAgICByZXMuaGVhZGVyKFxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsXG4gICAgICAgICdhY2NlcHQsIGNvbnRlbnQtdHlwZSwgeC1wYXJzZS1hcHBsaWNhdGlvbi1pZCwgeC1wYXJzZS1yZXN0LWFwaS1rZXksIHgtcGFyc2Utc2Vzc2lvbi10b2tlbiwgQVVUSE9SSVpBVElPTidcbiAgICApO1xuXG4gICAgLy8gSW50ZXJjZXB0IE9QVElPTlMgbWV0aG9kXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdPUFRJT05TJykge1xuICAgICAgICByZXMuc2VuZCgyMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5leHQoKTtcbiAgICB9XG59KTtcblxuLy8gU2V0dXAgYXV0aGVudGljYXRpb24gYW5kIHNlY3VyaXR5XG5zZXNzaW9uQXV0aChhcHApO1xuXG4vLyBMb2cgcmVxdWVzdHMgdG8gdGhlIGNvbnNvbGUuXG5hcHAudXNlKGxvZ2dlcignZGV2JykpO1xuXG4vLyBQYXJzZSBpbmNvbWluZyByZXF1ZXN0cyBkYXRhIChodHRwczovL2dpdGh1Yi5jb20vZXhwcmVzc2pzL2JvZHktcGFyc2VyKVxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiBmYWxzZSB9KSk7XG5hcHAudXNlKCcvc2NyaXB0cycsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi8uLi9jbGllbnQvZGlzdCcpKSk7XG5cbi8vIFJlcXVpcmUgcm91dGVzIGFuZCBzaW11bHRhbmVvdXNseSBhdHRhY2ggYXBwXG5yb3V0ZXMoYXBwKTtcblxuLy8gQ2F0Y2ggYWxsIGlmIHRoZSByb3V0ZXMgZG9lc24ndCBmaW5kIGEgdmFsaWQgVVJMXG5hcHAuZ2V0KCcqJywgKHJlcSwgcmVzKSA9PiByZXMuc3RhdHVzKDIwMCkuc2VuZCgnTm90aGluZyBoZXJlIHlldC4uLicpKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9hcHAuanMiLCJpbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuXG4vLyBGdW5jdGlvbmFsIGNvbnRyb2xsZXJzIGdvIGhlcmU6XG4vLyAuLi5cblxuLy8gTWFrZSBtb2R1bGFyIHNvIG5vdCBhbGwgcm91dGVzIGFyZSBoZXJlXG5pbXBvcnQgYXBpUm91dGVzIGZyb20gJy4vYXBpUm91dGVzJztcbmltcG9ydCB1c2VyUm91dGVzIGZyb20gJy4vdXNlclJvdXRlcyc7XG5pbXBvcnQgbG9naW5Sb3V0ZXMgZnJvbSAnLi9sb2dpblJvdXRlcyc7XG5pbXBvcnQgZGF5T2ZSb3V0ZXMgZnJvbSAnLi9kYXlPZlJvdXRlcyc7XG5pbXBvcnQgbWVkaWFSb3V0ZXMgZnJvbSAnLi9tZWRpYVJvdXRlcyc7XG5pbXBvcnQgc2VhcmNoUm91dGVzIGZyb20gJy4vc2VhcmNoUm91dGVzJztcblxuLy8gUmVxdWlyZXMgYW4gYXBwIGFzIGFuIGlucHV0IHNvIGNhbiBkaXJlY3QgdGhlIHVzZXIgYWNjb3JkaW5nbHlcbmV4cG9ydCBkZWZhdWx0IChhcHApID0+IHtcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKiAgUm91dGVzICAqKioqKioqKioqKioqKioqKioqKiAqL1xuICAgIGFwaVJvdXRlcyhhcHApO1xuICAgIHVzZXJSb3V0ZXMoYXBwKTtcbiAgICBsb2dpblJvdXRlcyhhcHApO1xuICAgIGRheU9mUm91dGVzKGFwcCk7XG4gICAgbWVkaWFSb3V0ZXMoYXBwKTtcbiAgICBzZWFyY2hSb3V0ZXMoYXBwKTtcblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqICBDbGllbnQgICoqKioqKioqKioqKioqKioqKioqICovXG5cbiAgICAvLyBTZXJ2ZSB0aGUgc3RhdGljIGNsaWVudCBpbmRleC5qcyBidWlsZCBmaWxlXG4gICAgYXBwLmdldCgnL3NjcmlwdHMvaW5kZXguanMnLCAocmVxLCByZXMpID0+IHtcbiAgICAgICAgY29uc3QgX19kaXJuYW1lID0gcHJvY2Vzcy5jd2QoKTtcbiAgICAgICAgcmVzLnNlbmRGaWxlKCdpbmRleC5qcycsIHsgcm9vdDogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vY2xpZW50L2Rpc3QnKSB9KTtcbiAgICB9KTtcblxuICAgIGFwcC5nZXQoJy9mYXZpY29uLnBuZycsIChyZXEsIHJlcykgPT4ge1xuICAgICAgICBjb25zdCBfX2Rpcm5hbWUgPSBwcm9jZXNzLmN3ZCgpO1xuICAgICAgICByZXMuc2VuZEZpbGUoJ2Zhdmljb24ucG5nJywgeyByb290OiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9jbGllbnQvZGlzdCcpIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gQ2xpZW50IGFwcCBlbnRyeSBpbmRleC5odG1sIGZpbGUgLSByZWFjdCByb3V0ZXJcbiAgICBhcHAuZ2V0KCcqJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgIGNvbnN0IF9fZGlybmFtZSA9IHByb2Nlc3MuY3dkKCk7XG4gICAgICAgIHJlcy5zZW5kRmlsZSgnaW5kZXguaHRtbCcsIHsgcm9vdDogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vY2xpZW50L2Rpc3QnKSB9KTsgLy8gUmVuZGVyIGNsaWVudFxuICAgIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvcm91dGVzL2luZGV4LmpzIiwiaW1wb3J0IHsgdGVzdEZ1bmN0aW9uIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvdGVzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IChhcHApID0+IHtcbiAgICBhcHAuZ2V0KCcvYXBpL3Rlc3QnLCB0ZXN0RnVuY3Rpb24pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvcm91dGVzL2FwaVJvdXRlcy5qcyIsImV4cG9ydCBjb25zdCB0ZXN0RnVuY3Rpb24gPSAocmVxLCByZXMpID0+IHtcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCgnVGhpcyBpcyBhIHRlc3QnKTtcbn07XG5cbmV4cG9ydCBjb25zdCB0ZXN0RnVuY3Rpb24yID0gKHJlcSwgcmVzKSA9PiB7XG4gICAgcmVzLnN0YXR1cygyMDApLnNlbmQoJ1RoaXMgaXMgdGVzdCAjMicpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvY29udHJvbGxlcnMvdGVzdC9pbmRleC5qcyIsImltcG9ydCB7IGNyZWF0ZVVzZXIsIGxpc3QsIGNoZWNrVXNlcm5hbWUgfSBmcm9tICcuLi9jb250cm9sbGVycy91c2Vycyc7XG5cbmV4cG9ydCBkZWZhdWx0IChhcHApID0+IHtcbiAgICBhcHAucG9zdCgnL2FwaS91c2Vycy9jcmVhdGUnLCBjcmVhdGVVc2VyKTtcbiAgICBhcHAuZ2V0KCcvYXBpL3VzZXJzJywgbGlzdCk7XG4gICAgYXBwLnBvc3QoJy9hcGkvdXNlcnMvY2hlY2tVc2VybmFtZScsIGNoZWNrVXNlcm5hbWUpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvcm91dGVzL3VzZXJSb3V0ZXMuanMiLCJjb25zdCBVc2VyID0gcmVxdWlyZSgnLi4vLi4vbW9kZWxzJykuVXNlcjtcblxuZXhwb3J0IGNvbnN0IGxpc3QgPSAocmVxLCByZXMpID0+IHtcbiAgICByZXR1cm4gVXNlclxuICAgICAgICAuZmluZEFsbCh7fSkgLy8gR2V0IGFsbCBxdW90ZXNcbiAgICAgICAgLnRoZW4oKHVzZXJzKSA9PiB7XG4gICAgICAgICAgICAvLyBGaWx0ZXIgb3V0IHBhc3N3b3JkIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgIHVzZXJzLmZvckVhY2goKHVzZXIpID0+IHsgZGVsZXRlIHVzZXIuZGF0YVZhbHVlcy5wYXNzd29yZCB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJzKTtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHVzZXJzKTtcbiAgICAgICAgfSkgLy8gUmV0dXJuIGFycmF5IG9mIHF1b3Rlc1xuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTsgLy8gRXJyb3Jcbn07XG5cbmV4cG9ydCBjb25zdCBjaGVja1VzZXJuYW1lID0gKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICB1c2VybmFtZSxcbiAgICB9ID0gcmVxLmJvZHk7IC8vIEdldCB1c2VybmFtZVxuICAgIHJldHVybiBVc2VyLlxuICAgICAgICBmaW5kQWxsKHtcbiAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWUsIC8vIFNlZSBpZiB1c2VyIGV4aXN0cyB3aXRoIHRoYXQgdXNlcm5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHVzZXJzKSA9PiB7XG4gICAgICAgICAgICB1c2VybmFtZUF2YWlsYWJsZSA9ICh1c2Vycy5sZW5ndGggPT0gMCk7IC8vIFVzZXJuYW1lIGF2YWlsYWJsZSBpZiBub25lXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlOiB1c2VybmFtZUF2YWlsYWJsZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTsgLy8gRXJyb3Jcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVzZXIgPSAocmVxLCByZXMpID0+IHtcbiAgICBjb25zb2xlLmxvZygnQ3JlYXRlZCB1c2VyJyk7XG4gICAgY29uc3Qge1xuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgICBmaXJzdF9uYW1lLFxuICAgICAgICBsYXN0X25hbWUsXG4gICAgICAgIG9yZ2FuaXphdGlvbixcbiAgICB9ID0gcmVxLmJvZHk7IC8vIEluZm9ybWF0aW9uIGZyb20gdGhlIHJlcXVlc3QgYm9keSBKU09OIGRhdGFcblxuICAgIHJldHVybiBVc2VyXG4gICAgICAgIC5jcmVhdGUoe1xuICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICAgICAgZmlyc3RfbmFtZSxcbiAgICAgICAgICAgIGxhc3RfbmFtZSxcbiAgICAgICAgICAgIG9yZ2FuaXphdGlvbixcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHVzZXIpID0+IHsgLy8gU3VjY2VzczogY3JlYXRlZCBuZXcgcXVvdGUgZW50cnlcbiAgICAgICAgICAgIGRlbGV0ZSB1c2VyLmRhdGFWYWx1ZXMucGFzc3dvcmQ7IC8vIFJlbW92ZSBwYXNzd29yZFxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQodXNlcik7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcik7XG4gICAgICAgIH0pOyAvLyBFcnJvclxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvY29udHJvbGxlcnMvdXNlcnMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZnNcIlxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2VxdWVsaXplXCJcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1wiZGV2ZWxvcG1lbnRcIjp7XCJ1c2VybmFtZVwiOlwia2V2aW5ob3VcIixcInBhc3N3b3JkXCI6bnVsbCxcImRhdGFiYXNlXCI6XCJpZ25pdGUtc3RlbS1kZXZcIixcImhvc3RcIjpcIjEyNy4wLjAuMVwiLFwicG9ydFwiOjU0MzIsXCJkaWFsZWN0XCI6XCJwb3N0Z3Jlc1wifSxcInRlc3RcIjp7XCJ1c2VybmFtZVwiOlwia2V2aW5ob3VcIixcInBhc3N3b3JkXCI6bnVsbCxcImRhdGFiYXNlXCI6XCJpZ25pdGUtc3RlbS10ZXN0XCIsXCJob3N0XCI6XCIxMjcuMC4wLjFcIixcInBvcnRcIjo1NDMyLFwiZGlhbGVjdFwiOlwicG9zdGdyZXNcIn0sXCJwcm9kdWN0aW9uXCI6e1widXNlX2Vudl92YXJpYWJsZVwiOlwiREFUQUJBU0VfVVJMXCJ9fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2VydmVyL3NyYy9jb25maWcvY29uZmlnLmpzb25cbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBsb2dpbiwgbG9nb3V0LCBjdXJyZW50VXNlciB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL2xvZ2luJztcblxuZXhwb3J0IGRlZmF1bHQgKGFwcDogZXhwcmVzcy5BcHBsaWNhdGlvbikgPT4ge1xuICAgIGFwcC5wb3N0KCcvYXBpL2xvZ2luJywgbG9naW4pO1xuICAgIGFwcC5nZXQoJy9hcGkvbG9nb3V0JywgbG9nb3V0KTtcbiAgICBhcHAuZ2V0KCcvYXBpL3VzZXJzL2N1cnJlbnQnLCBjdXJyZW50VXNlcik7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvc3JjL3JvdXRlcy9sb2dpblJvdXRlcy5qcyIsImNvbnN0IFVzZXIgPSByZXF1aXJlKCcuLi8uLi9tb2RlbHMvaW5kZXguanMnKS5Vc2VyO1xuXG4vKlxuICogUGFyYW1ldGVyczpcbiAqICByZXEuYm9keSB7XG4gKiAgICAgIHVzZXJuYW1lLFxuICogICAgICBwYXNzd29yZCxcbiAqICB9XG4gKi9cbmV4cG9ydCBjb25zdCBsb2dpbiA9IChyZXE6IFJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcbiAgICBpZiAoZGF0YS51c2VybmFtZSA9PT0gdW5kZWZpbmVkIHx8IGRhdGEucGFzc3dvcmQgPT09IHVuZGVmaW5lZCkgeyAvLyBFbXB0eSBhdXRoZW50aWNhdGlvblxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIGVycm9yOiAnUGxlYXNlIHN1Ym1pdCBhIHVzZXJuYW1lIGFuZCBwYXNzd29yZCcsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47IC8vIFRlcm1pbmF0ZVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgVXNlcm5hbWU6ICR7ZGF0YS51c2VybmFtZX1gKTtcbiAgICByZXR1cm4gVXNlclxuICAgICAgICAuZmluZE9uZSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBkYXRhLnVzZXJuYW1lLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBkYXRhLnBhc3N3b3JkLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KSAvLyBHZXQgYWxsIHF1b3Rlc1xuICAgICAgICAudGhlbigodXNlcjogVXNlcikgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXIgPT0gbnVsbCkgeyAvLyBJbnZhbGlkIGNyZWRlbnRpYWxzXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6ICdJbnZhbGlkIHVzZXJuYW1lICYgcGFzc3dvcmQnLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVmFsaWQgY3JlZGVudGlhbHNcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTdWNjZXNzZnVsbHkgbG9nZ2VkIGluIHVzZXI6ICR7dXNlci51c2VybmFtZX1gKTtcbiAgICAgICAgICAgIGRlbGV0ZSB1c2VyLnBhc3N3b3JkOyAvLyBEb24ndCBzZW5kIGJhY2sgcGFzc3dvcmRcbiAgICAgICAgICAgIHJlcS5zZXNzaW9uLnVzZXIgPSB1c2VyOyAvLyBTZXQgY29va2llXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1c2VyLCAvLyBTZW5kIHVzZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSAvLyBSZXR1cm4gYXJyYXkgb2YgcXVvdGVzXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZCh7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7IC8vIEVycm9yIGluIHJlcXVlc3Rcbn1cblxuZXhwb3J0IGNvbnN0IGxvZ291dCA9IChyZXE6IFJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSkgPT4ge1xuICAgIGNvbnN0IHByZXZpb3VzVXNlciA9IHJlcS5zZXNzaW9uLnVzZXI7XG4gICAgcmVxLnNlc3Npb24ucmVzZXQoKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgIHVzZXI6IHByZXZpb3VzVXNlcixcbiAgICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IGN1cnJlbnRVc2VyID0gKHJlcTogUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSA9PiB7XG4gICAgaWYgKHJlcS5zZXNzaW9uLnVzZXIpIHtcbiAgICAgICAgZGVsZXRlIHJlcS5zZXNzaW9uLnVzZXIucGFzc3dvcmQ7IC8vIFJlbW92ZSBwYXNzd29yZFxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgbG9nZ2VkX2luOiB0cnVlLFxuICAgICAgICAgICAgdXNlcjogcmVxLnNlc3Npb24udXNlcixcbiAgICAgICAgfTtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGxvZ2dlZF9pbjogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGRhdGEpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvY29udHJvbGxlcnMvbG9naW4vaW5kZXguanMiLCJpbXBvcnQgc2NoZWR1bGUgZnJvbSAnLi4vY29udHJvbGxlcnMvZGF5T2YnO1xuXG5leHBvcnQgZGVmYXVsdCAoYXBwKSA9PiB7XG4gICAgYXBwLmdldCgnL2FwaS9zY2hlZHVsZScsIHNjaGVkdWxlKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvc3JjL3JvdXRlcy9kYXlPZlJvdXRlcy5qcyIsIi8qIERldGFpbHM6XG4gKiAgZGF0ZTogSVNPIDg2MDFcbiAqXG4gKi9cbmNvbnN0IHNjaGVkdWxlID0gKHJlcSwgcmVzKSA9PiB7XG4gICAgcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiU2Vzc2lvblwiOiBcIlJlZ2lzdHJhdGlvbiArIENhc3VhbCBCcmVha2Zhc3RcIixcbiAgICAgICAgICAgICAgICBcIlNwZWFrZXJcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcIkNhcGFjaXR5XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJMb2NhdGlvblwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiTm90ZXNcIjogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIlRpbWVcIjogXCI5OjMwIC0gOTo0NVwiLFxuICAgICAgICAgICAgICAgIFwiU2Vzc2lvblwiOiBcIk9wZW5pbmcgUmVtYXJrc1wiLFxuICAgICAgICAgICAgICAgIFwiU3BlYWtlclwiOiBcIklnbml0ZVNURU0gRGlyZWN0b3JzXCIsXG4gICAgICAgICAgICAgICAgXCJDYXBhY2l0eVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiTG9jYXRpb25cIjogXCJHV0IgNEEyMjBBXCIsXG4gICAgICAgICAgICAgICAgXCJOb3Rlc1wiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiVGltZVwiOiBcIjEwOjAwIC0gMTA6NDVcIixcbiAgICAgICAgICAgICAgICBcIlNlc3Npb25cIjogXCJLZXlub3RlXCIsXG4gICAgICAgICAgICAgICAgXCJTcGVha2VyXCI6IFwiUGF0IFlvbmdwcmFkaXQsIENoaWVmIEFjYWRlbWljIE9mZmljZXIgYXQgQ29kZS5vcmdcIixcbiAgICAgICAgICAgICAgICBcIkNhcGFjaXR5XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJMb2NhdGlvblwiOiBcIkdXQiA0QTIyMEFcIixcbiAgICAgICAgICAgICAgICBcIk5vdGVzXCI6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJUaW1lXCI6IFwiMTE6MDAgLSAxMjozMFwiLFxuICAgICAgICAgICAgICAgIFwiU2Vzc2lvblwiOiBcIkxpZ2h0bmluZyBUYWxrcyBhbmQgV29ya3Nob3BzXCIsXG4gICAgICAgICAgICAgICAgXCJTcGVha2VyXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJDYXBhY2l0eVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiTG9jYXRpb25cIjogXCJBcG9sbG9cIixcbiAgICAgICAgICAgICAgICBcIk5vdGVzXCI6IFwibWF4IDI1IHBlb3BsZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiVGltZVwiOiBcIjExOjAwIC0gMTI6MzBcIixcbiAgICAgICAgICAgICAgICBcIlNlc3Npb25cIjogXCJMaWdodG5pbmcgVGFsa3MgYW5kIFdvcmtzaG9wc1wiLFxuICAgICAgICAgICAgICAgIFwiU3BlYWtlclwiOiBcIkRvbiBCdWNrbGV5IChEZXNpZ24gVGhpbmtpbmcpXCIsXG4gICAgICAgICAgICAgICAgXCJDYXBhY2l0eVwiOiAyMCxcbiAgICAgICAgICAgICAgICBcIkxvY2F0aW9uXCI6IFwiQXBvbGxvXCIsXG4gICAgICAgICAgICAgICAgXCJOb3Rlc1wiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiVGltZVwiOiBcIjExOjAwIC0gMTI6MzBcIixcbiAgICAgICAgICAgICAgICBcIlNlc3Npb25cIjogXCJMaWdodG5pbmcgVGFsa3MgYW5kIFdvcmtzaG9wc1wiLFxuICAgICAgICAgICAgICAgIFwiU3BlYWtlclwiOiBcIkdvZHd5biBNb3JyaXMgKE1ha2Vyc3BhY2UpXCIsXG4gICAgICAgICAgICAgICAgXCJDYXBhY2l0eVwiOiAzMCxcbiAgICAgICAgICAgICAgICBcIkxvY2F0aW9uXCI6IFwiQXBvbGxvXCIsXG4gICAgICAgICAgICAgICAgXCJOb3Rlc1wiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiVGltZVwiOiBcIjExOjAwIC0gMTI6MzBcIixcbiAgICAgICAgICAgICAgICBcIlNlc3Npb25cIjogXCJMaWdodG5pbmcgVGFsa3MgYW5kIFdvcmtzaG9wc1wiLFxuICAgICAgICAgICAgICAgIFwiU3BlYWtlclwiOiBcIklnbml0ZVNURU0gRGVzaWduIFRoaW5raW5nXCIsXG4gICAgICAgICAgICAgICAgXCJDYXBhY2l0eVwiOiAyMCxcbiAgICAgICAgICAgICAgICBcIkxvY2F0aW9uXCI6IFwiQXBvbGxvXCIsXG4gICAgICAgICAgICAgICAgXCJOb3Rlc1wiOiBcIlJhZmUncyBEVCB3b3Jrc2hvcFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiVGltZVwiOiBcIjExOjAwIC0gMTI6MzBcIixcbiAgICAgICAgICAgICAgICBcIlNlc3Npb25cIjogXCJMaWdodG5pbmcgVGFsa3MgYW5kIFdvcmtzaG9wc1wiLFxuICAgICAgICAgICAgICAgIFwiU3BlYWtlclwiOiBcIldvcmtzaG9wcyBmb3IgVGVhY2hlcnMgaW4gVGVjaFwiLFxuICAgICAgICAgICAgICAgIFwiQ2FwYWNpdHlcIjogMjAsXG4gICAgICAgICAgICAgICAgXCJMb2NhdGlvblwiOiBcIkFwb2xsb1wiLFxuICAgICAgICAgICAgICAgIFwiTm90ZXNcIjogXCJsZXQgYnkgQWFua2l0IFBhdGVsXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJUaW1lXCI6IFwiMTE6MDAgLSAxMjozMFwiLFxuICAgICAgICAgICAgICAgIFwiU2Vzc2lvblwiOiBcIkxpZ2h0bmluZyBUYWxrcyBhbmQgV29ya3Nob3BzXCIsXG4gICAgICAgICAgICAgICAgXCJTcGVha2VyXCI6IFwiUGF1bCBTY3VsbHkgKEJ1aWxkaW5nIE9uZSBBbWVyaWNhKVwiLFxuICAgICAgICAgICAgICAgIFwiQ2FwYWNpdHlcIjogMjAsXG4gICAgICAgICAgICAgICAgXCJMb2NhdGlvblwiOiBcIkJha2VyIEZpZWxkXCIsXG4gICAgICAgICAgICAgICAgXCJOb3Rlc1wiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiVGltZVwiOiBcIjExOjAwIC0gMTI6MzBcIixcbiAgICAgICAgICAgICAgICBcIlNlc3Npb25cIjogXCJMaWdodG5pbmcgVGFsa3MgYW5kIFdvcmtzaG9wc1wiLFxuICAgICAgICAgICAgICAgIFwiU3BlYWtlclwiOiBcIkNvdW5jaWwgZm9yIEFjYWRlbWljIE9wcG9ydHVuaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJDYXBhY2l0eVwiOiAyMCxcbiAgICAgICAgICAgICAgICBcIkxvY2F0aW9uXCI6IFwiQXBvbGxvXCIsXG4gICAgICAgICAgICAgICAgXCJOb3Rlc1wiOiBcIkQgKyBJXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJUaW1lXCI6IFwiMTE6MDAgLSAxMjozMFwiLFxuICAgICAgICAgICAgICAgIFwiU2Vzc2lvblwiOiBcIkxpZ2h0bmluZyBUYWxrcyBhbmQgV29ya3Nob3BzXCIsXG4gICAgICAgICAgICAgICAgXCJTcGVha2VyXCI6IFwiTWFqb3IgTGVhZ3VlIEhhY2tpbmdcIixcbiAgICAgICAgICAgICAgICBcIkNhcGFjaXR5XCI6IDIwLFxuICAgICAgICAgICAgICAgIFwiTG9jYXRpb25cIjogXCJBcG9sbG9cIixcbiAgICAgICAgICAgICAgICBcIk5vdGVzXCI6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJUaW1lXCI6IFwiMTE6MDAgLSAxMjozMFwiLFxuICAgICAgICAgICAgICAgIFwiU2Vzc2lvblwiOiBcIkxpZ2h0bmluZyBUYWxrcyBhbmQgV29ya3Nob3BzXCIsXG4gICAgICAgICAgICAgICAgXCJTcGVha2VyXCI6IFwiQ2hyaXMgSGFycmlzXCIsXG4gICAgICAgICAgICAgICAgXCJDYXBhY2l0eVwiOiAyMCxcbiAgICAgICAgICAgICAgICBcIkxvY2F0aW9uXCI6IFwiQXBvbGxvXCIsXG4gICAgICAgICAgICAgICAgXCJOb3Rlc1wiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiVGltZVwiOiBcIjEyOjMwIC0gMToxNVwiLFxuICAgICAgICAgICAgICAgIFwiU2Vzc2lvblwiOiBcIkx1bmNoXCIsXG4gICAgICAgICAgICAgICAgXCJTcGVha2VyXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJDYXBhY2l0eVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiTG9jYXRpb25cIjogXCJTcGFjZSBEXCIsXG4gICAgICAgICAgICAgICAgXCJOb3Rlc1wiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiVGltZVwiOiBcIjE6MzAgLSAyOjE1XCIsXG4gICAgICAgICAgICAgICAgXCJTZXNzaW9uXCI6IFwiRWRUZWNoIFBhbmVsXCIsXG4gICAgICAgICAgICAgICAgXCJTcGVha2VyXCI6IFwiTGFic3RlclwiLFxuICAgICAgICAgICAgICAgIFwiQ2FwYWNpdHlcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcIkxvY2F0aW9uXCI6IFwiR1dCIDRBMjIwQVwiLFxuICAgICAgICAgICAgICAgIFwiTm90ZXNcIjogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIlRpbWVcIjogXCIxOjMwIC0gMjoxNVwiLFxuICAgICAgICAgICAgICAgIFwiU2Vzc2lvblwiOiBcIkVkVGVjaCBQYW5lbFwiLFxuICAgICAgICAgICAgICAgIFwiU3BlYWtlclwiOiBcIkphY2sgRGVGdXJpYSAoQm9sdCBMZWFybmluZylcIixcbiAgICAgICAgICAgICAgICBcIkNhcGFjaXR5XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJMb2NhdGlvblwiOiBcIkdXQiA0QTIyMEFcIixcbiAgICAgICAgICAgICAgICBcIk5vdGVzXCI6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJUaW1lXCI6IFwiMTozMCAtIDI6MTVcIixcbiAgICAgICAgICAgICAgICBcIlNlc3Npb25cIjogXCJFZFRlY2ggUGFuZWxcIixcbiAgICAgICAgICAgICAgICBcIlNwZWFrZXJcIjogXCJQaXBlclwiLFxuICAgICAgICAgICAgICAgIFwiQ2FwYWNpdHlcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcIkxvY2F0aW9uXCI6IFwiR1dCIDRBMjIwQVwiLFxuICAgICAgICAgICAgICAgIFwiTm90ZXNcIjogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIlRpbWVcIjogXCIyOjE1IC0gMzowMFwiLFxuICAgICAgICAgICAgICAgIFwiU2Vzc2lvblwiOiBcIktleW5vdGVcIixcbiAgICAgICAgICAgICAgICBcIlNwZWFrZXJcIjogXCJKb25hdGhhbiBSb2NoZWxsZSwgRGlyZWN0b3Igb2YgUHJvZHVjdCBNYW5hZ2VtZW50IGF0IEdvb2dsZSBFZHVjYXRpb25cIixcbiAgICAgICAgICAgICAgICBcIkNhcGFjaXR5XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJMb2NhdGlvblwiOiBcIkdXQiA0QTIyMEFcIixcbiAgICAgICAgICAgICAgICBcIk5vdGVzXCI6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJUaW1lXCI6IFwiMzoxNSAtIDQ6MDBcIixcbiAgICAgICAgICAgICAgICBcIlNlc3Npb25cIjogXCJVbmNvbmZlcmVuY2UgU2Vzc2lvblwiLFxuICAgICAgICAgICAgICAgIFwiU3BlYWtlclwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiQ2FwYWNpdHlcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcIkxvY2F0aW9uXCI6IFwiQXBvbGxvXFxyXFxuRW1waXJlIFN0YXRlXFxyXFxuQmF0dGVyeSBQYXJrXFxyXFxuQmV0aGVzZGEgRm91bnRhaW5cIixcbiAgICAgICAgICAgICAgICBcIk5vdGVzXCI6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJUaW1lXCI6IFwiNDoxNSAtIDQ6MzBcIixcbiAgICAgICAgICAgICAgICBcIlNlc3Npb25cIjogXCJDbG9zaW5nIFJlbWFya3NcIixcbiAgICAgICAgICAgICAgICBcIlNwZWFrZXJcIjogXCJJZ25pdGVTVEVNIERpcmVjdG9yc1wiLFxuICAgICAgICAgICAgICAgIFwiQ2FwYWNpdHlcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcIkxvY2F0aW9uXCI6IFwiR1dCIDRBMjIwQVwiLFxuICAgICAgICAgICAgICAgIFwiTm90ZXNcIjogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgXVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2NoZWR1bGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvc3JjL2NvbnRyb2xsZXJzL2RheU9mL2luZGV4LmpzIiwiaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcblxuZXhwb3J0IGRlZmF1bHQgKGFwcCkgPT4ge1xuICAgIGFwcC5nZXQoJy9hcGkvbWVkaWEvYmx1ZV9maXJlLnBuZycsIChyZXEsIHJlcykgPT4ge1xuICAgICAgICBjb25zdCBfX2Rpcm5hbWUgPSBwcm9jZXNzLmN3ZCgpO1xuICAgICAgICByZXMuc2VuZEZpbGUoJ2ZpcmVfYmx1ZS5wbmcnLCB7IHJvb3Q6IHBhdGguam9pbihfX2Rpcm5hbWUsICcuL2NsaWVudC9tZWRpYScpIH0pO1xuICAgIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvcm91dGVzL21lZGlhUm91dGVzLmpzIiwiaW1wb3J0IHNlYXJjaCBmcm9tICcuLi9jb250cm9sbGVycy9zZWFyY2gnO1xuXG5leHBvcnQgZGVmYXVsdCAoYXBwKSA9PiB7XG4gICAgYXBwLnBvc3QoJy9hcGkvc2VhcmNoJywgc2VhcmNoKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvc3JjL3JvdXRlcy9zZWFyY2hSb3V0ZXMuanMiLCJjb25zdCBVc2VyID0gcmVxdWlyZSgnLi4vLi4vbW9kZWxzJykuVXNlcjtcblxuaW1wb3J0IHNlYXJjaEFsZ29yaXRobSBmcm9tICcuL3NlYXJjaCcgLy8gR2V0IHRoZSBzZWFyY2ggYWxnb3JpdGhtXG5cbmNvbnN0IHNlYXJjaCA9IChyZXEsIHJlcykgPT4ge1xuICAgIHJldHVybiBVc2VyXG4gICAgICAgIC5maW5kQWxsKHt9KSAvLyBHZXQgYWxsIHF1b3Rlc1xuICAgICAgICAudGhlbigodXNlcnMpID0+IHtcbiAgICAgICAgICAgIC8vIEZpbHRlciBvdXQgcGFzc3dvcmQgYXR0cmlidXRlc1xuICAgICAgICAgICAgdXNlcnMuZm9yRWFjaCgodXNlcikgPT4geyBkZWxldGUgdXNlci5kYXRhVmFsdWVzLnBhc3N3b3JkIH0pO1xuXG4gICAgICAgICAgICBsZXQgdXNlckRhdGEgPSB1c2Vycy5tYXAoKHVzZXIpID0+IHVzZXIuZGF0YVZhbHVlcyk7XG5cbiAgICAgICAgICAgIC8vIGxldCBzb3J0ZWRVc2VycyA9IHVzZXJzOyAvLyBNb2RpZnkgdGhpcyBhcnJheVxuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSByZXEuYm9keS5xdWVyeTsgLy8gVGhlIHNlYXJjaCBxdWVyeVxuXG4gICAgICAgICAgICAvKioqKioqKioqKioqKioqKiBDb2RlIGdvZXMgaGVyZSAqKioqKioqKioqKioqKioqL1xuICAgICAgICAgICAgbGV0IHNvcnRlZFVzZXJzID0gc2VhcmNoQWxnb3JpdGhtKHF1ZXJ5LCB1c2VyRGF0YSlcbiAgICAgICAgICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHNvcnRlZFVzZXJzKTtcbiAgICAgICAgfSkgLy8gUmV0dXJuIHJhbmtlZCBhcnJheSBvZiB1c2VycyBiYXNlZCBvbiBzZWFyY2ggcXVlcnlcbiAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKVxuICAgICAgICB9KTsgLy8gRXJyb3Jcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvY29udHJvbGxlcnMvc2VhcmNoL2luZGV4LmpzIiwiLy8gY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuLy8gbGV0IHJhd0RhdGEgPSBmcy5yZWFkRmlsZVN5bmMoJy4vdXNlcnMuanNvbicpOyBcbi8vXG4vLyAvLyBSZWFkIGluIHRoZSBKU09OIGRhdGFcbi8vIGNvbnN0IHVzZXJzID0gSlNPTi5wYXJzZShyYXdEYXRhKTtcblxuLypsZXQgcmFuayA9IDA7XG5sZXQgc29ydGVkVXNlcnMgPSB1c2Vycy5tYXAoKHVzZXIpID0+IHtcblx0cmFuaysrO1xuXHRyZXR1cm4ge1xuXHRcdHJhbmssIFxuXHRcdC4uLnVzZXIsXG5cdH1cbn0pOyovXG5cbi8vIGNvbnN0IHF1ZXJ5ID0gXCJUaW0gbWF0aCBjb2RpbmdcIjsgLy8gVGhlIHNlYXJjaCBxdWVyeVxuXG5jb25zdCBzZWFyY2ggPSAocXVlcnksIHVzZXJzKSA9PiB7XG4gICAgLyoqKioqKioqKioqKioqKiogQ29kZSBnb2VzIGhlcmUgKioqKioqKioqKioqKioqKi9cbiAgICAvKlxuICAgICAqIE1vZGlmeSB0aGUgYXJyYXk6IHNvcnRlZFVzZXJzXG4gICAgICogIChtYWtlIHN1cmUgdG8gbW9kaWZ5IHRoZSByYW5rIGF0dHJpYnV0ZSB0byBtYXRjaCBpdHMgb3JkZXIgaW4gdGhlIGFycmF5KVxuICAgICAqIFVzZSB0aGUgdmFyaWFibGUsIHF1ZXJ5LCBhcyB0aGUgc2VhcmNoIHF1ZXJ5XG4gICAgICpcbiAgICAgKiBSdW4gdGhpcyBzY3JpcHQgdXNpbmc6XG4gICAgICogICQgbm9kZSBzZWFyY2guanNcbiAgICAgKi9cblxuICAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIC8vIGNvbnNvbGUubG9nKFwiU2VhcmNoaW5nIHF1ZXJ5OlwiLCBxdWVyeSlcbiAgICAgXG4gICAgIC8vU3BsaXR0aW5nIHF1ZXJ5IHN0cmluZyBpbnRvIGFuIGFycmF5IG9mIHN0cmluZ3NcbiAgICAgdmFyIHF1ZXJ5QXJyYXkgPSBxdWVyeS5zcGxpdChcIiBcIik7XG5cbiAgICAvL0FkanVzdGluZyB0aGUgcmFuayBvZiBlYWNoIHVzZXIgYnkgaW5jcmVtZW50aW5nIHRoZSByYW5rIGVhY2ggdGltZSBvbmUgb2YgdGhlIHdvcmRzXG4gICAgLy9pbiB0aGUgcXVlcnlBcnJheSB2YXJpYWJsZSBhcHBlYXJzIGluIGEgdXNlcidzIGRhdGFcbiAgICAgc29ydGVkVXNlcnMgPSB1c2Vycy5tYXAoKHVzZXIpID0+IHtcbiAgICAgICAgcmFuayA9IDA7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBxdWVyeUFycmF5Lmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkodXNlcikudG9Mb3dlckNhc2UoKS5pbmRleE9mKHF1ZXJ5QXJyYXlbaV0udG9Mb3dlckNhc2UoKSkgIT09IC0xKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJhbmsrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByYW5rLFxuICAgICAgICAgICAgLi4udXNlcixcbiAgICAgICAgfVxuICAgICB9KTtcblxuICAgIC8vU29ydGluZyBlYWNoIHVzZXIgZnJvbSBncmVhdGVzdCByYW5rIHRvIGxlYXN0IHJhbmtcbiAgICBzb3J0ZWRVc2Vycy5zb3J0KGZ1bmN0aW9uKGEsYil7XG4gICAgICAgIHJldHVybiBiLnJhbmsgLSBhLnJhbms7XG4gICAgfSk7XG5cbiAgICAvL1JlYXNzaWduaW5nIHRoZSByYW5rIG9mIGVhY2ggdXNlciB0byBiZSB0aGUgdXNlcidzIHBvc2l0aW9uIChwbHVzIDEpLCB3aXRoaW4gdGhlIGFycmF5XG4gICAgZm9yKGkgPSAwOyBpIDwgc29ydGVkVXNlcnMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICBzb3J0ZWRVc2Vyc1tpXS5yYW5rID0gaSArIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNvcnRlZFVzZXJzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzZWFyY2g7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvc3JjL2NvbnRyb2xsZXJzL3NlYXJjaC9zZWFyY2guanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtb3JnYW5cIlxuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBzZXNzaW9ucyA9IHJlcXVpcmUoJ2NsaWVudC1zZXNzaW9ucycpOyAvLyBVc2VyIHNlc3Npb25zXG5cbmNvbnN0IHNlc3Npb25BdXRoID0gKGFwcCkgPT4ge1xuICAgIC8vIERvY3M6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL25vZGUtY2xpZW50LXNlc3Npb25zXG4gICAgYXBwLnVzZShzZXNzaW9ucyh7XG4gICAgICAgIGNvb2tpZU5hbWU6ICdzZXNzaW9uJywgLy8gQ29va2llIG5hbWUgZGljdGF0ZXMgdGhlIGtleSBuYW1lIGFkZGVkIHRvIHRoZSByZXF1ZXN0IG9iamVjdFxuICAgICAgICBzZWNyZXQ6ICdibGFyZ2FkZWVibGFyZ2JsYXJnJywgLy8gc2hvdWxkIGJlIGEgbGFyZ2UgdW5ndWVzc2FibGUgc3RyaW5nIChzdG9yZSBpbiBlbnZpcm9ubWVudCB2YXJpYWJsZXMgZXZlbnR1YWxseSlcbiAgICAgICAgZHVyYXRpb246IDQgKiA2MCAqIDYwICogMTAwMCwgLy8gaG93IGxvbmcgdGhlIHNlc3Npb24gd2lsbCBzdGF5IHZhbGlkIGluIG1zICg0IGhvdXJzKVxuICAgICAgICBhY3RpdmVEdXJhdGlvbjogMTAwMCAqIDYwICogNjAgKiAyLCAvLyBpZiBleHBpcmVzSW4gPCBhY3RpdmVEdXJhdGlvbiwgdGhlIHNlc3Npb24gd2lsbCBiZSBleHRlbmRlZCBieSBhY3RpdmVEdXJhdGlvbiBtaWxsaXNlY29uZHNcbiAgICB9KSk7XG5cbiAgICBhcHAudXNlKChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgICAgICAvLyBBUElzIHRoYXQgY2xpZW50IG11c3QgYmUgbG9nZ2VkIGluIGZvclxuICAgICAgICAvLyBCZXN0IHByYWN0aWNlOiBBUElzIHRoYXQgYXJlIGFjY2Vzc2libGUgdmlhIHRoZSBjbGllbnQgYnV0IHJlcXVpcmUgYSBsb2dpblxuICAgICAgICAvLyBBUElzIGFyZSBhbHJlYWR5IHByb3RlY3RlZCBieSBhIEJhc2ljIEF1dGgsIHRoaXMgaXMganVzdCBhIHNhZmVnYXVyZFxuICAgICAgICBjb25zdCBibGFja2xpc3RlZCA9IFtcbiAgICAgICAgICAgICdcXC9hcGlcXC91c2Vyc1xcL2NyZWF0ZScsXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IHBhdGggPSByZXEub3JpZ2luYWxVcmw7XG4gICAgICAgIGlmICghcmVxLnNlc3Npb24udXNlcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIHNlc3Npb24nKTtcbiAgICAgICAgICAgIGlmIChuZXcgUmVnRXhwKGJsYWNrbGlzdGVkLmpvaW4oJ3wnKSwgJ2knKS50ZXN0KHBhdGgpKSB7IC8vIElmIG9uIHRoZSBibGFja2xpc3RcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMSkuc2VuZCgnUGxlYXNlIGxvZyBpbicpO1xuICAgICAgICAgICAgfSBlbHNlIHsgLy8gQWxsb3dlZFxuICAgICAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTZXNzaW9uIHdpdGggdXNlcjogJHtyZXEuc2Vzc2lvbi51c2VyLnVzZXJuYW1lfWApO1xuICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNlc3Npb25BdXRoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9jb25maWcvc2Vzc2lvbi5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsaWVudC1zZXNzaW9uc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNsaWVudC1zZXNzaW9uc1wiXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9