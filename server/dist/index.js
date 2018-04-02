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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjkxMDA4YmRmYzgyN2JjM2QwYzIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvbW9kZWxzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1wb2x5ZmlsbFwiIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9yb3V0ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9yb3V0ZXMvYXBpUm91dGVzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvY29udHJvbGxlcnMvdGVzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL3JvdXRlcy91c2VyUm91dGVzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvY29udHJvbGxlcnMvdXNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcXVlbGl6ZVwiIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvY29uZmlnL2NvbmZpZy5qc29uIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvcm91dGVzL2xvZ2luUm91dGVzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvY29udHJvbGxlcnMvbG9naW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9yb3V0ZXMvZGF5T2ZSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy9kYXlPZi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL3JvdXRlcy9tZWRpYVJvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL3JvdXRlcy9zZWFyY2hSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy9zZWFyY2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy9zZWFyY2gvc2VhcmNoLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb25maWcvc2Vzc2lvbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGllbnQtc2Vzc2lvbnNcIiJdLCJuYW1lcyI6WyJmcyIsInBhdGgiLCJjb25maWdGaWxlIiwicmVxdWlyZSIsImVudiIsInByb2Nlc3MiLCJOT0RFX0VOViIsIl9fZGlybmFtZSIsImN3ZCIsImN1cnJlbnREaXIiLCJqb2luIiwiZmlsZW5hbWUiLCJtb2R1bGUiLCJ1bmRlZmluZWQiLCJiYXNlbmFtZSIsImRiIiwic2VxdWVsaXplIiwiREFUQUJBU0VfVVJMIiwiY29uZmlnIiwiZGF0YWJhc2UiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwicmVhZGRpclN5bmMiLCJmaWx0ZXIiLCJmaWxlIiwiaW5kZXhPZiIsInNsaWNlIiwiZm9yRWFjaCIsIm1vZGVsIiwibmFtZSIsIk9iamVjdCIsImtleXMiLCJtb2RlbE5hbWUiLCJhc3NvY2lhdGUiLCJTZXF1ZWxpemUiLCJleHBvcnRzIiwicG9ydCIsInBhcnNlSW50IiwiUE9SVCIsInNldCIsImxpc3RlbiIsImV4cHJlc3MiLCJsb2dnZXIiLCJib2R5UGFyc2VyIiwic2Vzc2lvbkF1dGgiLCJhcHAiLCJhbGwiLCJyZXEiLCJyZXMiLCJuZXh0IiwiaGVhZGVyIiwibWV0aG9kIiwic2VuZCIsInVzZSIsImpzb24iLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJnZXQiLCJzdGF0dXMiLCJzZW5kRmlsZSIsInJvb3QiLCJ0ZXN0RnVuY3Rpb24iLCJ0ZXN0RnVuY3Rpb24yIiwicG9zdCIsIlVzZXIiLCJsaXN0IiwiZmluZEFsbCIsInRoZW4iLCJ1c2VycyIsInVzZXIiLCJkYXRhVmFsdWVzIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiY3JlYXRlVXNlciIsImJvZHkiLCJlbWFpbCIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJvcmdhbml6YXRpb24iLCJjcmVhdGUiLCJsb2dpbiIsImRhdGEiLCJzdWNjZXNzIiwiZmluZE9uZSIsIndoZXJlIiwic2Vzc2lvbiIsImxvZ291dCIsInByZXZpb3VzVXNlciIsInJlc2V0IiwiY3VycmVudFVzZXIiLCJsb2dnZWRfaW4iLCJzY2hlZHVsZSIsInNlYXJjaCIsInVzZXJEYXRhIiwibWFwIiwicXVlcnkiLCJzb3J0ZWRVc2VycyIsInF1ZXJ5QXJyYXkiLCJzcGxpdCIsInJhbmsiLCJpIiwibGVuZ3RoIiwiSlNPTiIsInN0cmluZ2lmeSIsInRvTG93ZXJDYXNlIiwic29ydCIsImEiLCJiIiwic2Vzc2lvbnMiLCJjb29raWVOYW1lIiwic2VjcmV0IiwiZHVyYXRpb24iLCJhY3RpdmVEdXJhdGlvbiIsImJsYWNrbGlzdGVkIiwib3JpZ2luYWxVcmwiLCJSZWdFeHAiLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztB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d0JBQWdCLE9BQU8sRUFBUCxHQUFZLEVBQVosR0FBaUIsQ0FKcEIsQ0FJdUI7QUFKdkIsS0FBVCxDQUFSOztBQU9BcEUsUUFBSVEsR0FBSixDQUFRLFVBQUNOLEdBQUQsRUFBTUMsR0FBTixFQUFXQyxJQUFYLEVBQW9CO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLFlBQU1pRSxjQUFjLENBQ2hCLHNCQURnQixDQUFwQjtBQUdBLFlBQU1qSCxPQUFPOEMsSUFBSW9FLFdBQWpCO0FBQ0EsWUFBSSxDQUFDcEUsSUFBSXVDLE9BQUosQ0FBWWpCLElBQWpCLEVBQXVCO0FBQ25CRSxvQkFBUUMsR0FBUixDQUFZLFlBQVo7QUFDQSxnQkFBSSxJQUFJNEMsTUFBSixDQUFXRixZQUFZeEcsSUFBWixDQUFpQixHQUFqQixDQUFYLEVBQWtDLEdBQWxDLEVBQXVDMkcsSUFBdkMsQ0FBNENwSCxJQUE1QyxDQUFKLEVBQXVEO0FBQUU7QUFDckQrQyxvQkFBSVUsTUFBSixDQUFXLEdBQVgsRUFBZ0JOLElBQWhCLENBQXFCLGVBQXJCO0FBQ0gsYUFGRCxNQUVPO0FBQUU7QUFDTEg7QUFDSDtBQUNKLFNBUEQsTUFPTztBQUNIc0Isb0JBQVFDLEdBQVIsZ0NBQWtDekIsSUFBSXVDLE9BQUosQ0FBWWpCLElBQVosQ0FBaUJqRCxRQUFuRDtBQUNBNkI7QUFDSDtBQUNKLEtBbkJEO0FBb0JILENBN0JEOztBQStCQXJDLE9BQU91QixPQUFQLEdBQWlCUyxXQUFqQixDOzs7Ozs7QUNqQ0EsNEMiLCJmaWxlIjoiZGlzdC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDI5MTAwOGJkZmM4MjdiYzNkMGMyIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGhcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBFUzYtc3R5bGUgaW1wb3J0c1xuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBTZXF1ZWxpemUgZnJvbSAnc2VxdWVsaXplJztcblxuY29uc3QgY29uZmlnRmlsZSAgPSByZXF1aXJlKCcuLi9jb25maWcvY29uZmlnLmpzb24nKTtcblxudmFyIGVudiAgICAgICAgICAgICA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7IC8vIERldGVybWluZSBpZiB1c2luZyBkZXZlbG9wbWVudFxuY29uc3QgX19kaXJuYW1lICAgICA9IHByb2Nlc3MuY3dkKCk7IC8vIENvdWxkIGJyZWFrIG9uIHByb2RcbmNvbnN0IGN1cnJlbnREaXIgPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9zZXJ2ZXIvc3JjL21vZGVscycpO1xuXG4vLyBSZWd1bGFyIGBtb2R1bGUuZmlsZW5hbWVgIGlzIHVuZGVmaW5lZCBpbiBsb2NhbCBkZXZcbmNvbnN0IGZpbGVuYW1lID0gKG1vZHVsZS5maWxlbmFtZSAhPT0gdW5kZWZpbmVkKSA/IG1vZHVsZS5maWxlbmFtZSA6ICdpbmRleC5qcyc7XG52YXIgYmFzZW5hbWUgID0gcGF0aC5iYXNlbmFtZShmaWxlbmFtZSk7XG5cbnZhciBkYiA9IHt9O1xuXG4vLyBJIHVzZSB0aGUgbm9kZS1jb25maWcgcGFja2FnZSB0byBtYW5hZ2UgdGhlIERCIGNvbmZpZyB5b3UgY2FuIGNob29zZVxuLy8gdG8gc3RpY2sgd2l0aCB0aGUgb3JpZ2luYWwgdmVyc2lvbi4gQW5kIEkgcmVtb3ZlZCBlbnZpcm9ubWVudCB2YXJpYWJsZVxuLy8gc3VwcG9ydCBiZWNhdXNlIEkgZG9uJ3QgbmVlZCBpdC5cbmxldCBzZXF1ZWxpemUgPSB7fTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOVikge1xuICAgIC8vIEZyb20gdGhlIGVudmlyb25tZW50LCBleHRyYWN0IHRoZSBrZXkgd2l0aCB0aGUgbmFtZSBwcm92aWRlZCBpbiB0aGUgY29uZmlnIGFzIHVzZV9lbnZfdmFyaWFibGVcbiAgICAvLyBhbmQgdXNlIHRoYXQgdG8gZXN0YWJsaXNoIGEgY29ubmVjdGlvbiB0byBvdXIgZGF0YWJhc2UuXG4gICAgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwpOyAvLyBFc3RhYmxpc2ggY29ubmVjdGlvbiB1c2luZyBlbnZpcm9ubWVudCB2YXJpYWJsZXNcblxufSBlbHNlIHtcbiAgICB2YXIgY29uZmlnICAgID0gY29uZmlnRmlsZVtlbnZdOyAvLyBJZiBsb2NhbCwgdXNlIGNvbmZpZ1xuXG4gICAgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShjb25maWcuZGF0YWJhc2UsIGNvbmZpZy51c2VybmFtZSwgY29uZmlnLnBhc3N3b3JkLCBjb25maWcpOyAvLyBDb25uZWN0XG59XG5cbmZzXG4gICAgLnJlYWRkaXJTeW5jKGN1cnJlbnREaXIpXG4gICAgLmZpbHRlcihmdW5jdGlvbihmaWxlKSB7XG4gICAgICAgIHJldHVybiAoZmlsZS5pbmRleE9mKCcuJykgIT09IDApICYmIChmaWxlICE9PSBiYXNlbmFtZSkgJiYgKGZpbGUuc2xpY2UoLTMpID09PSAnLmpzJyk7XG4gICAgfSlcbiAgICAuZm9yRWFjaChmdW5jdGlvbihmaWxlKSB7XG4gICAgICAgIHZhciBtb2RlbCA9IHNlcXVlbGl6ZS5pbXBvcnQocGF0aC5qb2luKGN1cnJlbnREaXIsIGZpbGUpKTtcbiAgICAgICAgZGJbbW9kZWwubmFtZV0gPSBtb2RlbDtcbiAgICB9KTtcblxuT2JqZWN0LmtleXMoZGIpLmZvckVhY2goZnVuY3Rpb24obW9kZWxOYW1lKSB7XG4gICAgaWYgKGRiW21vZGVsTmFtZV0uYXNzb2NpYXRlKSB7XG4gICAgICAgIGRiW21vZGVsTmFtZV0uYXNzb2NpYXRlKGRiKTtcbiAgICB9XG59KTtcblxuZGIuc2VxdWVsaXplID0gc2VxdWVsaXplO1xuZGIuU2VxdWVsaXplID0gU2VxdWVsaXplO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRiO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9tb2RlbHMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXBvbHlmaWxsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcG9seWZpbGxcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBBcHBsaWNhdGlvbiBlbnRyeSwgc2V0dGluZyB1cCBzZXJ2ZXJcbmltcG9ydCBhcHAgZnJvbSAnLi9hcHAnOyAvLyBUaGUgZXhwcmVzcyBhcHAgd2UganVzdCBjcmVhdGVkXG5cbmNvbnN0IHBvcnQgPSBwYXJzZUludChwcm9jZXNzLmVudi5QT1JULCAxMCkgfHwgNTU1NTtcbmFwcC5zZXQoJ3BvcnQnLCBwb3J0KTtcblxuLy8gMC4wLjAuMCBtYWtlcyBpdCBhdmFpbGFibGUgb24geW91ciBsb2NhbCBuZXR3b3JrXG4vLyBhcHAubGlzdGVuKHBvcnQsICcwLjAuMC4wJyk7XG5hcHAubGlzdGVuKHBvcnQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9pbmRleC5qcyIsImltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xuXG5jb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuY29uc3QgbG9nZ2VyID0gcmVxdWlyZSgnbW9yZ2FuJyk7XG5jb25zdCBib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKTtcbmNvbnN0IHNlc3Npb25BdXRoID0gcmVxdWlyZSgnLi9jb25maWcvc2Vzc2lvbicpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxubGV0IF9fZGlybmFtZSA9IHByb2Nlc3MuY3dkKCk7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTsgLy8gU2V0dXAgZXhwcmVzcyBhcHBcblxuLy8gQWxsb3cgY3Jvc3Mgb3JpZ2luIHJlcXVlc3RzIHdpdGggYXV0aG9yaXphdGlvbiAoZm9yIEFQSSBwdXJwb3NlcylcbmFwcC5hbGwoJyonLCAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpO1xuICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLCAnUFVULCBHRVQsIFBPU1QsIERFTEVURSwgT1BUSU9OUycpO1xuICAgIHJlcy5oZWFkZXIoXG4gICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJyxcbiAgICAgICAgJ2FjY2VwdCwgY29udGVudC10eXBlLCB4LXBhcnNlLWFwcGxpY2F0aW9uLWlkLCB4LXBhcnNlLXJlc3QtYXBpLWtleSwgeC1wYXJzZS1zZXNzaW9uLXRva2VuLCBBVVRIT1JJWkFUSU9OJ1xuICAgICk7XG5cbiAgICAvLyBJbnRlcmNlcHQgT1BUSU9OUyBtZXRob2RcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ09QVElPTlMnKSB7XG4gICAgICAgIHJlcy5zZW5kKDIwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV4dCgpO1xuICAgIH1cbn0pO1xuXG4vLyBTZXR1cCBhdXRoZW50aWNhdGlvbiBhbmQgc2VjdXJpdHlcbnNlc3Npb25BdXRoKGFwcCk7XG5cbi8vIExvZyByZXF1ZXN0cyB0byB0aGUgY29uc29sZS5cbmFwcC51c2UobG9nZ2VyKCdkZXYnKSk7XG5cbi8vIFBhcnNlIGluY29taW5nIHJlcXVlc3RzIGRhdGEgKGh0dHBzOi8vZ2l0aHViLmNvbS9leHByZXNzanMvYm9keS1wYXJzZXIpXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IGZhbHNlIH0pKTtcbmFwcC51c2UoJy9zY3JpcHRzJywgZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uLy4uL2NsaWVudC9kaXN0JykpKTtcblxuLy8gUmVxdWlyZSByb3V0ZXMgYW5kIHNpbXVsdGFuZW91c2x5IGF0dGFjaCBhcHBcbnJvdXRlcyhhcHApO1xuXG4vLyBDYXRjaCBhbGwgaWYgdGhlIHJvdXRlcyBkb2Vzbid0IGZpbmQgYSB2YWxpZCBVUkxcbmFwcC5nZXQoJyonLCAocmVxLCByZXMpID0+IHJlcy5zdGF0dXMoMjAwKS5zZW5kKCdOb3RoaW5nIGhlcmUgeWV0Li4uJykpO1xuXG5leHBvcnQgZGVmYXVsdCBhcHA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvc3JjL2FwcC5qcyIsImltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5cbi8vIEZ1bmN0aW9uYWwgY29udHJvbGxlcnMgZ28gaGVyZTpcbi8vIC4uLlxuXG4vLyBNYWtlIG1vZHVsYXIgc28gbm90IGFsbCByb3V0ZXMgYXJlIGhlcmVcbmltcG9ydCBhcGlSb3V0ZXMgZnJvbSAnLi9hcGlSb3V0ZXMnO1xuaW1wb3J0IHVzZXJSb3V0ZXMgZnJvbSAnLi91c2VyUm91dGVzJztcbmltcG9ydCBsb2dpblJvdXRlcyBmcm9tICcuL2xvZ2luUm91dGVzJztcbmltcG9ydCBkYXlPZlJvdXRlcyBmcm9tICcuL2RheU9mUm91dGVzJztcbmltcG9ydCBtZWRpYVJvdXRlcyBmcm9tICcuL21lZGlhUm91dGVzJztcbmltcG9ydCBzZWFyY2hSb3V0ZXMgZnJvbSAnLi9zZWFyY2hSb3V0ZXMnO1xuXG4vLyBSZXF1aXJlcyBhbiBhcHAgYXMgYW4gaW5wdXQgc28gY2FuIGRpcmVjdCB0aGUgdXNlciBhY2NvcmRpbmdseVxuZXhwb3J0IGRlZmF1bHQgKGFwcCkgPT4ge1xuICAgIC8qICoqKioqKioqKioqKioqKioqKioqICBSb3V0ZXMgICoqKioqKioqKioqKioqKioqKioqICovXG4gICAgYXBpUm91dGVzKGFwcCk7XG4gICAgdXNlclJvdXRlcyhhcHApO1xuICAgIGxvZ2luUm91dGVzKGFwcCk7XG4gICAgZGF5T2ZSb3V0ZXMoYXBwKTtcbiAgICBtZWRpYVJvdXRlcyhhcHApO1xuICAgIHNlYXJjaFJvdXRlcyhhcHApO1xuXG4gICAgLyogKioqKioqKioqKioqKioqKioqKiogIENsaWVudCAgKioqKioqKioqKioqKioqKioqKiogKi9cblxuICAgIC8vIFNlcnZlIHRoZSBzdGF0aWMgY2xpZW50IGluZGV4LmpzIGJ1aWxkIGZpbGVcbiAgICBhcHAuZ2V0KCcvc2NyaXB0cy9pbmRleC5qcycsIChyZXEsIHJlcykgPT4ge1xuICAgICAgICBjb25zdCBfX2Rpcm5hbWUgPSBwcm9jZXNzLmN3ZCgpO1xuICAgICAgICByZXMuc2VuZEZpbGUoJ2luZGV4LmpzJywgeyByb290OiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9jbGllbnQvZGlzdCcpIH0pO1xuICAgIH0pO1xuXG4gICAgYXBwLmdldCgnL2Zhdmljb24ucG5nJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgIGNvbnN0IF9fZGlybmFtZSA9IHByb2Nlc3MuY3dkKCk7XG4gICAgICAgIHJlcy5zZW5kRmlsZSgnZmF2aWNvbi5wbmcnLCB7IHJvb3Q6IHBhdGguam9pbihfX2Rpcm5hbWUsICcuL2NsaWVudC9kaXN0JykgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBDbGllbnQgYXBwIGVudHJ5IGluZGV4Lmh0bWwgZmlsZSAtIHJlYWN0IHJvdXRlclxuICAgIGFwcC5nZXQoJyonLCAocmVxLCByZXMpID0+IHtcbiAgICAgICAgY29uc3QgX19kaXJuYW1lID0gcHJvY2Vzcy5jd2QoKTtcbiAgICAgICAgcmVzLnNlbmRGaWxlKCdpbmRleC5odG1sJywgeyByb290OiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9jbGllbnQvZGlzdCcpIH0pOyAvLyBSZW5kZXIgY2xpZW50XG4gICAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9yb3V0ZXMvaW5kZXguanMiLCJpbXBvcnQgeyB0ZXN0RnVuY3Rpb24gfSBmcm9tICcuLi9jb250cm9sbGVycy90ZXN0JztcblxuZXhwb3J0IGRlZmF1bHQgKGFwcCkgPT4ge1xuICAgIGFwcC5nZXQoJy9hcGkvdGVzdCcsIHRlc3RGdW5jdGlvbik7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9yb3V0ZXMvYXBpUm91dGVzLmpzIiwiZXhwb3J0IGNvbnN0IHRlc3RGdW5jdGlvbiA9IChyZXEsIHJlcykgPT4ge1xuICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKCdUaGlzIGlzIGEgdGVzdCcpO1xufTtcblxuZXhwb3J0IGNvbnN0IHRlc3RGdW5jdGlvbjIgPSAocmVxLCByZXMpID0+IHtcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCgnVGhpcyBpcyB0ZXN0ICMyJyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9jb250cm9sbGVycy90ZXN0L2luZGV4LmpzIiwiaW1wb3J0IHsgY3JlYXRlVXNlciwgbGlzdCB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL3VzZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgKGFwcCkgPT4ge1xuICAgIGFwcC5wb3N0KCcvYXBpL3VzZXJzL2NyZWF0ZScsIGNyZWF0ZVVzZXIgKTtcbiAgICBhcHAuZ2V0KCcvYXBpL3VzZXJzJywgbGlzdCApO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvcm91dGVzL3VzZXJSb3V0ZXMuanMiLCJjb25zdCBVc2VyID0gcmVxdWlyZSgnLi4vLi4vbW9kZWxzJykuVXNlcjtcblxuZXhwb3J0IGNvbnN0IGxpc3QgPSAocmVxLCByZXMpID0+IHtcbiAgICByZXR1cm4gVXNlclxuICAgICAgICAuZmluZEFsbCh7fSkgLy8gR2V0IGFsbCBxdW90ZXNcbiAgICAgICAgLnRoZW4oKHVzZXJzKSA9PiB7XG4gICAgICAgICAgICAvLyBGaWx0ZXIgb3V0IHBhc3N3b3JkIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgIHVzZXJzLmZvckVhY2goKHVzZXIpID0+IHsgZGVsZXRlIHVzZXIuZGF0YVZhbHVlcy5wYXNzd29yZCB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJzKTtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHVzZXJzKTtcbiAgICAgICAgfSkgLy8gUmV0dXJuIGFycmF5IG9mIHF1b3Rlc1xuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTsgLy8gRXJyb3Jcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVVc2VyID0gKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0NyZWF0ZWQgdXNlcicpO1xuICAgIGNvbnN0IHtcbiAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgIGVtYWlsLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgZmlyc3RfbmFtZSxcbiAgICAgICAgbGFzdF9uYW1lLFxuICAgICAgICBvcmdhbml6YXRpb24sXG4gICAgfSA9IHJlcS5ib2R5OyAvLyBJbmZvcm1hdGlvbiBmcm9tIHRoZSByZXF1ZXN0IGJvZHkgSlNPTiBkYXRhXG5cbiAgICByZXR1cm4gVXNlclxuICAgICAgICAuY3JlYXRlKHtcbiAgICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICAgIGZpcnN0X25hbWUsXG4gICAgICAgICAgICBsYXN0X25hbWUsXG4gICAgICAgICAgICBvcmdhbml6YXRpb24sXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCh1c2VyKSA9PiB7IC8vIFN1Y2Nlc3M6IGNyZWF0ZWQgbmV3IHF1b3RlIGVudHJ5XG4gICAgICAgICAgICBkZWxldGUgdXNlci5kYXRhVmFsdWVzLnBhc3N3b3JkOyAvLyBSZW1vdmUgcGFzc3dvcmRcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHVzZXIpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpO1xuICAgICAgICB9KTsgLy8gRXJyb3Jcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvc3JjL2NvbnRyb2xsZXJzL3VzZXJzL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZzXCJcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNlcXVlbGl6ZVwiXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcImRldmVsb3BtZW50XCI6e1widXNlcm5hbWVcIjpcImtldmluaG91XCIsXCJwYXNzd29yZFwiOm51bGwsXCJkYXRhYmFzZVwiOlwiaWduaXRlLXN0ZW0tZGV2XCIsXCJob3N0XCI6XCIxMjcuMC4wLjFcIixcInBvcnRcIjo1NDMyLFwiZGlhbGVjdFwiOlwicG9zdGdyZXNcIn0sXCJ0ZXN0XCI6e1widXNlcm5hbWVcIjpcImtldmluaG91XCIsXCJwYXNzd29yZFwiOm51bGwsXCJkYXRhYmFzZVwiOlwiaWduaXRlLXN0ZW0tdGVzdFwiLFwiaG9zdFwiOlwiMTI3LjAuMC4xXCIsXCJwb3J0XCI6NTQzMixcImRpYWxlY3RcIjpcInBvc3RncmVzXCJ9LFwicHJvZHVjdGlvblwiOntcInVzZV9lbnZfdmFyaWFibGVcIjpcIkRBVEFCQVNFX1VSTFwifX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NlcnZlci9zcmMvY29uZmlnL2NvbmZpZy5qc29uXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgbG9naW4sIGxvZ291dCwgY3VycmVudFVzZXIgfSBmcm9tICcuLi9jb250cm9sbGVycy9sb2dpbic7XG5cbmV4cG9ydCBkZWZhdWx0IChhcHA6IGV4cHJlc3MuQXBwbGljYXRpb24pID0+IHtcbiAgICBhcHAucG9zdCgnL2FwaS9sb2dpbicsIGxvZ2luKTtcbiAgICBhcHAuZ2V0KCcvYXBpL2xvZ291dCcsIGxvZ291dCk7XG4gICAgYXBwLmdldCgnL2FwaS91c2Vycy9jdXJyZW50JywgY3VycmVudFVzZXIpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9yb3V0ZXMvbG9naW5Sb3V0ZXMuanMiLCJjb25zdCBVc2VyID0gcmVxdWlyZSgnLi4vLi4vbW9kZWxzL2luZGV4LmpzJykuVXNlcjtcblxuLypcbiAqIFBhcmFtZXRlcnM6XG4gKiAgcmVxLmJvZHkge1xuICogICAgICB1c2VybmFtZSxcbiAqICAgICAgcGFzc3dvcmQsXG4gKiAgfVxuICovXG5leHBvcnQgY29uc3QgbG9naW4gPSAocmVxOiBSZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpID0+IHtcbiAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XG4gICAgaWYgKGRhdGEudXNlcm5hbWUgPT09IHVuZGVmaW5lZCB8fCBkYXRhLnBhc3N3b3JkID09PSB1bmRlZmluZWQpIHsgLy8gRW1wdHkgYXV0aGVudGljYXRpb25cbiAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICBlcnJvcjogJ1BsZWFzZSBzdWJtaXQgYSB1c2VybmFtZSBhbmQgcGFzc3dvcmQnLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuOyAvLyBUZXJtaW5hdGVcbiAgICB9XG4gICAgY29uc29sZS5sb2coYFVzZXJuYW1lOiAke2RhdGEudXNlcm5hbWV9YCk7XG4gICAgcmV0dXJuIFVzZXJcbiAgICAgICAgLmZpbmRPbmUoe1xuICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogZGF0YS51c2VybmFtZSxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogZGF0YS5wYXNzd29yZCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkgLy8gR2V0IGFsbCBxdW90ZXNcbiAgICAgICAgLnRoZW4oKHVzZXI6IFVzZXIpID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyID09IG51bGwpIHsgLy8gSW52YWxpZCBjcmVkZW50aWFsc1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiAnSW52YWxpZCB1c2VybmFtZSAmIHBhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFZhbGlkIGNyZWRlbnRpYWxzXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgU3VjY2Vzc2Z1bGx5IGxvZ2dlZCBpbiB1c2VyOiAke3VzZXIudXNlcm5hbWV9YCk7XG4gICAgICAgICAgICBkZWxldGUgdXNlci5wYXNzd29yZDsgLy8gRG9uJ3Qgc2VuZCBiYWNrIHBhc3N3b3JkXG4gICAgICAgICAgICByZXEuc2Vzc2lvbi51c2VyID0gdXNlcjsgLy8gU2V0IGNvb2tpZVxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgdXNlciwgLy8gU2VuZCB1c2VyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkgLy8gUmV0dXJuIGFycmF5IG9mIHF1b3Rlc1xuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoe1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pOyAvLyBFcnJvciBpbiByZXF1ZXN0XG59XG5cbmV4cG9ydCBjb25zdCBsb2dvdXQgPSAocmVxOiBSZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpID0+IHtcbiAgICBjb25zdCBwcmV2aW91c1VzZXIgPSByZXEuc2Vzc2lvbi51c2VyO1xuICAgIHJlcS5zZXNzaW9uLnJlc2V0KCk7XG4gICAgcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICB1c2VyOiBwcmV2aW91c1VzZXIsXG4gICAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBjdXJyZW50VXNlciA9IChyZXE6IFJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSkgPT4ge1xuICAgIGlmIChyZXEuc2Vzc2lvbi51c2VyKSB7XG4gICAgICAgIGRlbGV0ZSByZXEuc2Vzc2lvbi51c2VyLnBhc3N3b3JkOyAvLyBSZW1vdmUgcGFzc3dvcmRcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGxvZ2dlZF9pbjogdHJ1ZSxcbiAgICAgICAgICAgIHVzZXI6IHJlcS5zZXNzaW9uLnVzZXIsXG4gICAgICAgIH07XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBsb2dnZWRfaW46IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChkYXRhKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvc3JjL2NvbnRyb2xsZXJzL2xvZ2luL2luZGV4LmpzIiwiaW1wb3J0IHNjaGVkdWxlIGZyb20gJy4uL2NvbnRyb2xsZXJzL2RheU9mJztcblxuZXhwb3J0IGRlZmF1bHQgKGFwcCkgPT4ge1xuICAgIGFwcC5nZXQoJy9hcGkvc2NoZWR1bGUnLCBzY2hlZHVsZSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9yb3V0ZXMvZGF5T2ZSb3V0ZXMuanMiLCIvKiBEZXRhaWxzOlxuICogIGRhdGU6IElTTyA4NjAxXG4gKlxuICovXG5jb25zdCBzY2hlZHVsZSA9IChyZXEsIHJlcykgPT4ge1xuICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIlNlc3Npb25cIjogXCJSZWdpc3RyYXRpb24gKyBDYXN1YWwgQnJlYWtmYXN0XCIsXG4gICAgICAgICAgICAgICAgXCJTcGVha2VyXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJDYXBhY2l0eVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiTG9jYXRpb25cIjogXCJcIixcbiAgICAgICAgICAgICAgICBcIk5vdGVzXCI6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJUaW1lXCI6IFwiOTozMCAtIDk6NDVcIixcbiAgICAgICAgICAgICAgICBcIlNlc3Npb25cIjogXCJPcGVuaW5nIFJlbWFya3NcIixcbiAgICAgICAgICAgICAgICBcIlNwZWFrZXJcIjogXCJJZ25pdGVTVEVNIERpcmVjdG9yc1wiLFxuICAgICAgICAgICAgICAgIFwiQ2FwYWNpdHlcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcIkxvY2F0aW9uXCI6IFwiR1dCIDRBMjIwQVwiLFxuICAgICAgICAgICAgICAgIFwiTm90ZXNcIjogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIlRpbWVcIjogXCIxMDowMCAtIDEwOjQ1XCIsXG4gICAgICAgICAgICAgICAgXCJTZXNzaW9uXCI6IFwiS2V5bm90ZVwiLFxuICAgICAgICAgICAgICAgIFwiU3BlYWtlclwiOiBcIlBhdCBZb25ncHJhZGl0LCBDaGllZiBBY2FkZW1pYyBPZmZpY2VyIGF0IENvZGUub3JnXCIsXG4gICAgICAgICAgICAgICAgXCJDYXBhY2l0eVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiTG9jYXRpb25cIjogXCJHV0IgNEEyMjBBXCIsXG4gICAgICAgICAgICAgICAgXCJOb3Rlc1wiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiVGltZVwiOiBcIjExOjAwIC0gMTI6MzBcIixcbiAgICAgICAgICAgICAgICBcIlNlc3Npb25cIjogXCJMaWdodG5pbmcgVGFsa3MgYW5kIFdvcmtzaG9wc1wiLFxuICAgICAgICAgICAgICAgIFwiU3BlYWtlclwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiQ2FwYWNpdHlcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcIkxvY2F0aW9uXCI6IFwiQXBvbGxvXCIsXG4gICAgICAgICAgICAgICAgXCJOb3Rlc1wiOiBcIm1heCAyNSBwZW9wbGVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIlRpbWVcIjogXCIxMTowMCAtIDEyOjMwXCIsXG4gICAgICAgICAgICAgICAgXCJTZXNzaW9uXCI6IFwiTGlnaHRuaW5nIFRhbGtzIGFuZCBXb3Jrc2hvcHNcIixcbiAgICAgICAgICAgICAgICBcIlNwZWFrZXJcIjogXCJEb24gQnVja2xleSAoRGVzaWduIFRoaW5raW5nKVwiLFxuICAgICAgICAgICAgICAgIFwiQ2FwYWNpdHlcIjogMjAsXG4gICAgICAgICAgICAgICAgXCJMb2NhdGlvblwiOiBcIkFwb2xsb1wiLFxuICAgICAgICAgICAgICAgIFwiTm90ZXNcIjogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIlRpbWVcIjogXCIxMTowMCAtIDEyOjMwXCIsXG4gICAgICAgICAgICAgICAgXCJTZXNzaW9uXCI6IFwiTGlnaHRuaW5nIFRhbGtzIGFuZCBXb3Jrc2hvcHNcIixcbiAgICAgICAgICAgICAgICBcIlNwZWFrZXJcIjogXCJHb2R3eW4gTW9ycmlzIChNYWtlcnNwYWNlKVwiLFxuICAgICAgICAgICAgICAgIFwiQ2FwYWNpdHlcIjogMzAsXG4gICAgICAgICAgICAgICAgXCJMb2NhdGlvblwiOiBcIkFwb2xsb1wiLFxuICAgICAgICAgICAgICAgIFwiTm90ZXNcIjogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIlRpbWVcIjogXCIxMTowMCAtIDEyOjMwXCIsXG4gICAgICAgICAgICAgICAgXCJTZXNzaW9uXCI6IFwiTGlnaHRuaW5nIFRhbGtzIGFuZCBXb3Jrc2hvcHNcIixcbiAgICAgICAgICAgICAgICBcIlNwZWFrZXJcIjogXCJJZ25pdGVTVEVNIERlc2lnbiBUaGlua2luZ1wiLFxuICAgICAgICAgICAgICAgIFwiQ2FwYWNpdHlcIjogMjAsXG4gICAgICAgICAgICAgICAgXCJMb2NhdGlvblwiOiBcIkFwb2xsb1wiLFxuICAgICAgICAgICAgICAgIFwiTm90ZXNcIjogXCJSYWZlJ3MgRFQgd29ya3Nob3BcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIlRpbWVcIjogXCIxMTowMCAtIDEyOjMwXCIsXG4gICAgICAgICAgICAgICAgXCJTZXNzaW9uXCI6IFwiTGlnaHRuaW5nIFRhbGtzIGFuZCBXb3Jrc2hvcHNcIixcbiAgICAgICAgICAgICAgICBcIlNwZWFrZXJcIjogXCJXb3Jrc2hvcHMgZm9yIFRlYWNoZXJzIGluIFRlY2hcIixcbiAgICAgICAgICAgICAgICBcIkNhcGFjaXR5XCI6IDIwLFxuICAgICAgICAgICAgICAgIFwiTG9jYXRpb25cIjogXCJBcG9sbG9cIixcbiAgICAgICAgICAgICAgICBcIk5vdGVzXCI6IFwibGV0IGJ5IEFhbmtpdCBQYXRlbFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiVGltZVwiOiBcIjExOjAwIC0gMTI6MzBcIixcbiAgICAgICAgICAgICAgICBcIlNlc3Npb25cIjogXCJMaWdodG5pbmcgVGFsa3MgYW5kIFdvcmtzaG9wc1wiLFxuICAgICAgICAgICAgICAgIFwiU3BlYWtlclwiOiBcIlBhdWwgU2N1bGx5IChCdWlsZGluZyBPbmUgQW1lcmljYSlcIixcbiAgICAgICAgICAgICAgICBcIkNhcGFjaXR5XCI6IDIwLFxuICAgICAgICAgICAgICAgIFwiTG9jYXRpb25cIjogXCJCYWtlciBGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiTm90ZXNcIjogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIlRpbWVcIjogXCIxMTowMCAtIDEyOjMwXCIsXG4gICAgICAgICAgICAgICAgXCJTZXNzaW9uXCI6IFwiTGlnaHRuaW5nIFRhbGtzIGFuZCBXb3Jrc2hvcHNcIixcbiAgICAgICAgICAgICAgICBcIlNwZWFrZXJcIjogXCJDb3VuY2lsIGZvciBBY2FkZW1pYyBPcHBvcnR1bml0eVwiLFxuICAgICAgICAgICAgICAgIFwiQ2FwYWNpdHlcIjogMjAsXG4gICAgICAgICAgICAgICAgXCJMb2NhdGlvblwiOiBcIkFwb2xsb1wiLFxuICAgICAgICAgICAgICAgIFwiTm90ZXNcIjogXCJEICsgSVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiVGltZVwiOiBcIjExOjAwIC0gMTI6MzBcIixcbiAgICAgICAgICAgICAgICBcIlNlc3Npb25cIjogXCJMaWdodG5pbmcgVGFsa3MgYW5kIFdvcmtzaG9wc1wiLFxuICAgICAgICAgICAgICAgIFwiU3BlYWtlclwiOiBcIk1ham9yIExlYWd1ZSBIYWNraW5nXCIsXG4gICAgICAgICAgICAgICAgXCJDYXBhY2l0eVwiOiAyMCxcbiAgICAgICAgICAgICAgICBcIkxvY2F0aW9uXCI6IFwiQXBvbGxvXCIsXG4gICAgICAgICAgICAgICAgXCJOb3Rlc1wiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiVGltZVwiOiBcIjExOjAwIC0gMTI6MzBcIixcbiAgICAgICAgICAgICAgICBcIlNlc3Npb25cIjogXCJMaWdodG5pbmcgVGFsa3MgYW5kIFdvcmtzaG9wc1wiLFxuICAgICAgICAgICAgICAgIFwiU3BlYWtlclwiOiBcIkNocmlzIEhhcnJpc1wiLFxuICAgICAgICAgICAgICAgIFwiQ2FwYWNpdHlcIjogMjAsXG4gICAgICAgICAgICAgICAgXCJMb2NhdGlvblwiOiBcIkFwb2xsb1wiLFxuICAgICAgICAgICAgICAgIFwiTm90ZXNcIjogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIlRpbWVcIjogXCIxMjozMCAtIDE6MTVcIixcbiAgICAgICAgICAgICAgICBcIlNlc3Npb25cIjogXCJMdW5jaFwiLFxuICAgICAgICAgICAgICAgIFwiU3BlYWtlclwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiQ2FwYWNpdHlcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcIkxvY2F0aW9uXCI6IFwiU3BhY2UgRFwiLFxuICAgICAgICAgICAgICAgIFwiTm90ZXNcIjogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIlRpbWVcIjogXCIxOjMwIC0gMjoxNVwiLFxuICAgICAgICAgICAgICAgIFwiU2Vzc2lvblwiOiBcIkVkVGVjaCBQYW5lbFwiLFxuICAgICAgICAgICAgICAgIFwiU3BlYWtlclwiOiBcIkxhYnN0ZXJcIixcbiAgICAgICAgICAgICAgICBcIkNhcGFjaXR5XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJMb2NhdGlvblwiOiBcIkdXQiA0QTIyMEFcIixcbiAgICAgICAgICAgICAgICBcIk5vdGVzXCI6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJUaW1lXCI6IFwiMTozMCAtIDI6MTVcIixcbiAgICAgICAgICAgICAgICBcIlNlc3Npb25cIjogXCJFZFRlY2ggUGFuZWxcIixcbiAgICAgICAgICAgICAgICBcIlNwZWFrZXJcIjogXCJKYWNrIERlRnVyaWEgKEJvbHQgTGVhcm5pbmcpXCIsXG4gICAgICAgICAgICAgICAgXCJDYXBhY2l0eVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiTG9jYXRpb25cIjogXCJHV0IgNEEyMjBBXCIsXG4gICAgICAgICAgICAgICAgXCJOb3Rlc1wiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiVGltZVwiOiBcIjE6MzAgLSAyOjE1XCIsXG4gICAgICAgICAgICAgICAgXCJTZXNzaW9uXCI6IFwiRWRUZWNoIFBhbmVsXCIsXG4gICAgICAgICAgICAgICAgXCJTcGVha2VyXCI6IFwiUGlwZXJcIixcbiAgICAgICAgICAgICAgICBcIkNhcGFjaXR5XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJMb2NhdGlvblwiOiBcIkdXQiA0QTIyMEFcIixcbiAgICAgICAgICAgICAgICBcIk5vdGVzXCI6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJUaW1lXCI6IFwiMjoxNSAtIDM6MDBcIixcbiAgICAgICAgICAgICAgICBcIlNlc3Npb25cIjogXCJLZXlub3RlXCIsXG4gICAgICAgICAgICAgICAgXCJTcGVha2VyXCI6IFwiSm9uYXRoYW4gUm9jaGVsbGUsIERpcmVjdG9yIG9mIFByb2R1Y3QgTWFuYWdlbWVudCBhdCBHb29nbGUgRWR1Y2F0aW9uXCIsXG4gICAgICAgICAgICAgICAgXCJDYXBhY2l0eVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiTG9jYXRpb25cIjogXCJHV0IgNEEyMjBBXCIsXG4gICAgICAgICAgICAgICAgXCJOb3Rlc1wiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiVGltZVwiOiBcIjM6MTUgLSA0OjAwXCIsXG4gICAgICAgICAgICAgICAgXCJTZXNzaW9uXCI6IFwiVW5jb25mZXJlbmNlIFNlc3Npb25cIixcbiAgICAgICAgICAgICAgICBcIlNwZWFrZXJcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcIkNhcGFjaXR5XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJMb2NhdGlvblwiOiBcIkFwb2xsb1xcclxcbkVtcGlyZSBTdGF0ZVxcclxcbkJhdHRlcnkgUGFya1xcclxcbkJldGhlc2RhIEZvdW50YWluXCIsXG4gICAgICAgICAgICAgICAgXCJOb3Rlc1wiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiVGltZVwiOiBcIjQ6MTUgLSA0OjMwXCIsXG4gICAgICAgICAgICAgICAgXCJTZXNzaW9uXCI6IFwiQ2xvc2luZyBSZW1hcmtzXCIsXG4gICAgICAgICAgICAgICAgXCJTcGVha2VyXCI6IFwiSWduaXRlU1RFTSBEaXJlY3RvcnNcIixcbiAgICAgICAgICAgICAgICBcIkNhcGFjaXR5XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJMb2NhdGlvblwiOiBcIkdXQiA0QTIyMEFcIixcbiAgICAgICAgICAgICAgICBcIk5vdGVzXCI6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNjaGVkdWxlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9jb250cm9sbGVycy9kYXlPZi9pbmRleC5qcyIsImltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5cbmV4cG9ydCBkZWZhdWx0IChhcHApID0+IHtcbiAgICBhcHAuZ2V0KCcvYXBpL21lZGlhL2JsdWVfZmlyZS5wbmcnLCAocmVxLCByZXMpID0+IHtcbiAgICAgICAgY29uc3QgX19kaXJuYW1lID0gcHJvY2Vzcy5jd2QoKTtcbiAgICAgICAgcmVzLnNlbmRGaWxlKCdmaXJlX2JsdWUucG5nJywgeyByb290OiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9jbGllbnQvbWVkaWEnKSB9KTtcbiAgICB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvc3JjL3JvdXRlcy9tZWRpYVJvdXRlcy5qcyIsImltcG9ydCBzZWFyY2ggZnJvbSAnLi4vY29udHJvbGxlcnMvc2VhcmNoJztcblxuZXhwb3J0IGRlZmF1bHQgKGFwcCkgPT4ge1xuICAgIGFwcC5wb3N0KCcvYXBpL3NlYXJjaCcsIHNlYXJjaCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9yb3V0ZXMvc2VhcmNoUm91dGVzLmpzIiwiY29uc3QgVXNlciA9IHJlcXVpcmUoJy4uLy4uL21vZGVscycpLlVzZXI7XG5cbmltcG9ydCBzZWFyY2hBbGdvcml0aG0gZnJvbSAnLi9zZWFyY2gnIC8vIEdldCB0aGUgc2VhcmNoIGFsZ29yaXRobVxuXG5jb25zdCBzZWFyY2ggPSAocmVxLCByZXMpID0+IHtcbiAgICByZXR1cm4gVXNlclxuICAgICAgICAuZmluZEFsbCh7fSkgLy8gR2V0IGFsbCBxdW90ZXNcbiAgICAgICAgLnRoZW4oKHVzZXJzKSA9PiB7XG4gICAgICAgICAgICAvLyBGaWx0ZXIgb3V0IHBhc3N3b3JkIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgIHVzZXJzLmZvckVhY2goKHVzZXIpID0+IHsgZGVsZXRlIHVzZXIuZGF0YVZhbHVlcy5wYXNzd29yZCB9KTtcblxuICAgICAgICAgICAgbGV0IHVzZXJEYXRhID0gdXNlcnMubWFwKCh1c2VyKSA9PiB1c2VyLmRhdGFWYWx1ZXMpO1xuXG4gICAgICAgICAgICAvLyBsZXQgc29ydGVkVXNlcnMgPSB1c2VyczsgLy8gTW9kaWZ5IHRoaXMgYXJyYXlcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gcmVxLmJvZHkucXVlcnk7IC8vIFRoZSBzZWFyY2ggcXVlcnlcblxuICAgICAgICAgICAgLyoqKioqKioqKioqKioqKiogQ29kZSBnb2VzIGhlcmUgKioqKioqKioqKioqKioqKi9cbiAgICAgICAgICAgIGxldCBzb3J0ZWRVc2VycyA9IHNlYXJjaEFsZ29yaXRobShxdWVyeSwgdXNlckRhdGEpXG4gICAgICAgICAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChzb3J0ZWRVc2Vycyk7XG4gICAgICAgIH0pIC8vIFJldHVybiByYW5rZWQgYXJyYXkgb2YgdXNlcnMgYmFzZWQgb24gc2VhcmNoIHF1ZXJ5XG4gICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcilcbiAgICAgICAgfSk7IC8vIEVycm9yXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZWFyY2g7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvc3JjL2NvbnRyb2xsZXJzL3NlYXJjaC9pbmRleC5qcyIsIi8vIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcbi8vIGxldCByYXdEYXRhID0gZnMucmVhZEZpbGVTeW5jKCcuL3VzZXJzLmpzb24nKTsgXG4vL1xuLy8gLy8gUmVhZCBpbiB0aGUgSlNPTiBkYXRhXG4vLyBjb25zdCB1c2VycyA9IEpTT04ucGFyc2UocmF3RGF0YSk7XG5cbi8qbGV0IHJhbmsgPSAwO1xubGV0IHNvcnRlZFVzZXJzID0gdXNlcnMubWFwKCh1c2VyKSA9PiB7XG5cdHJhbmsrKztcblx0cmV0dXJuIHtcblx0XHRyYW5rLCBcblx0XHQuLi51c2VyLFxuXHR9XG59KTsqL1xuXG4vLyBjb25zdCBxdWVyeSA9IFwiVGltIG1hdGggY29kaW5nXCI7IC8vIFRoZSBzZWFyY2ggcXVlcnlcblxuY29uc3Qgc2VhcmNoID0gKHF1ZXJ5LCB1c2VycykgPT4ge1xuICAgIC8qKioqKioqKioqKioqKioqIENvZGUgZ29lcyBoZXJlICoqKioqKioqKioqKioqKiovXG4gICAgLypcbiAgICAgKiBNb2RpZnkgdGhlIGFycmF5OiBzb3J0ZWRVc2Vyc1xuICAgICAqICAobWFrZSBzdXJlIHRvIG1vZGlmeSB0aGUgcmFuayBhdHRyaWJ1dGUgdG8gbWF0Y2ggaXRzIG9yZGVyIGluIHRoZSBhcnJheSlcbiAgICAgKiBVc2UgdGhlIHZhcmlhYmxlLCBxdWVyeSwgYXMgdGhlIHNlYXJjaCBxdWVyeVxuICAgICAqXG4gICAgICogUnVuIHRoaXMgc2NyaXB0IHVzaW5nOlxuICAgICAqICAkIG5vZGUgc2VhcmNoLmpzXG4gICAgICovXG5cbiAgICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAvLyBjb25zb2xlLmxvZyhcIlNlYXJjaGluZyBxdWVyeTpcIiwgcXVlcnkpXG4gICAgIFxuICAgICAvL1NwbGl0dGluZyBxdWVyeSBzdHJpbmcgaW50byBhbiBhcnJheSBvZiBzdHJpbmdzXG4gICAgIHZhciBxdWVyeUFycmF5ID0gcXVlcnkuc3BsaXQoXCIgXCIpO1xuXG4gICAgLy9BZGp1c3RpbmcgdGhlIHJhbmsgb2YgZWFjaCB1c2VyIGJ5IGluY3JlbWVudGluZyB0aGUgcmFuayBlYWNoIHRpbWUgb25lIG9mIHRoZSB3b3Jkc1xuICAgIC8vaW4gdGhlIHF1ZXJ5QXJyYXkgdmFyaWFibGUgYXBwZWFycyBpbiBhIHVzZXIncyBkYXRhXG4gICAgIHNvcnRlZFVzZXJzID0gdXNlcnMubWFwKCh1c2VyKSA9PiB7XG4gICAgICAgIHJhbmsgPSAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcXVlcnlBcnJheS5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHVzZXIpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihxdWVyeUFycmF5W2ldLnRvTG93ZXJDYXNlKCkpICE9PSAtMSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByYW5rKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmFuayxcbiAgICAgICAgICAgIC4uLnVzZXIsXG4gICAgICAgIH1cbiAgICAgfSk7XG5cbiAgICAvL1NvcnRpbmcgZWFjaCB1c2VyIGZyb20gZ3JlYXRlc3QgcmFuayB0byBsZWFzdCByYW5rXG4gICAgc29ydGVkVXNlcnMuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgICByZXR1cm4gYi5yYW5rIC0gYS5yYW5rO1xuICAgIH0pO1xuXG4gICAgLy9SZWFzc2lnbmluZyB0aGUgcmFuayBvZiBlYWNoIHVzZXIgdG8gYmUgdGhlIHVzZXIncyBwb3NpdGlvbiAocGx1cyAxKSwgd2l0aGluIHRoZSBhcnJheVxuICAgIGZvcihpID0gMDsgaSA8IHNvcnRlZFVzZXJzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgc29ydGVkVXNlcnNbaV0ucmFuayA9IGkgKyAxO1xuICAgIH1cblxuICAgIHJldHVybiBzb3J0ZWRVc2Vycztcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9jb250cm9sbGVycy9zZWFyY2gvc2VhcmNoLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9yZ2FuXCJcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYm9keS1wYXJzZXJcIlxuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3Qgc2Vzc2lvbnMgPSByZXF1aXJlKCdjbGllbnQtc2Vzc2lvbnMnKTsgLy8gVXNlciBzZXNzaW9uc1xuXG5jb25zdCBzZXNzaW9uQXV0aCA9IChhcHApID0+IHtcbiAgICAvLyBEb2NzOiBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9ub2RlLWNsaWVudC1zZXNzaW9uc1xuICAgIGFwcC51c2Uoc2Vzc2lvbnMoe1xuICAgICAgICBjb29raWVOYW1lOiAnc2Vzc2lvbicsIC8vIENvb2tpZSBuYW1lIGRpY3RhdGVzIHRoZSBrZXkgbmFtZSBhZGRlZCB0byB0aGUgcmVxdWVzdCBvYmplY3RcbiAgICAgICAgc2VjcmV0OiAnYmxhcmdhZGVlYmxhcmdibGFyZycsIC8vIHNob3VsZCBiZSBhIGxhcmdlIHVuZ3Vlc3NhYmxlIHN0cmluZyAoc3RvcmUgaW4gZW52aXJvbm1lbnQgdmFyaWFibGVzIGV2ZW50dWFsbHkpXG4gICAgICAgIGR1cmF0aW9uOiA0ICogNjAgKiA2MCAqIDEwMDAsIC8vIGhvdyBsb25nIHRoZSBzZXNzaW9uIHdpbGwgc3RheSB2YWxpZCBpbiBtcyAoNCBob3VycylcbiAgICAgICAgYWN0aXZlRHVyYXRpb246IDEwMDAgKiA2MCAqIDYwICogMiwgLy8gaWYgZXhwaXJlc0luIDwgYWN0aXZlRHVyYXRpb24sIHRoZSBzZXNzaW9uIHdpbGwgYmUgZXh0ZW5kZWQgYnkgYWN0aXZlRHVyYXRpb24gbWlsbGlzZWNvbmRzXG4gICAgfSkpO1xuXG4gICAgYXBwLnVzZSgocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICAgICAgLy8gQVBJcyB0aGF0IGNsaWVudCBtdXN0IGJlIGxvZ2dlZCBpbiBmb3JcbiAgICAgICAgLy8gQmVzdCBwcmFjdGljZTogQVBJcyB0aGF0IGFyZSBhY2Nlc3NpYmxlIHZpYSB0aGUgY2xpZW50IGJ1dCByZXF1aXJlIGEgbG9naW5cbiAgICAgICAgLy8gQVBJcyBhcmUgYWxyZWFkeSBwcm90ZWN0ZWQgYnkgYSBCYXNpYyBBdXRoLCB0aGlzIGlzIGp1c3QgYSBzYWZlZ2F1cmRcbiAgICAgICAgY29uc3QgYmxhY2tsaXN0ZWQgPSBbXG4gICAgICAgICAgICAnXFwvYXBpXFwvdXNlcnNcXC9jcmVhdGUnLFxuICAgICAgICBdO1xuICAgICAgICBjb25zdCBwYXRoID0gcmVxLm9yaWdpbmFsVXJsO1xuICAgICAgICBpZiAoIXJlcS5zZXNzaW9uLnVzZXIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBzZXNzaW9uJyk7XG4gICAgICAgICAgICBpZiAobmV3IFJlZ0V4cChibGFja2xpc3RlZC5qb2luKCd8JyksICdpJykudGVzdChwYXRoKSkgeyAvLyBJZiBvbiB0aGUgYmxhY2tsaXN0XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoJ1BsZWFzZSBsb2cgaW4nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIEFsbG93ZWRcbiAgICAgICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgU2Vzc2lvbiB3aXRoIHVzZXI6ICR7cmVxLnNlc3Npb24udXNlci51c2VybmFtZX1gKTtcbiAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzZXNzaW9uQXV0aDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvY29uZmlnL3Nlc3Npb24uanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGllbnQtc2Vzc2lvbnNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjbGllbnQtc2Vzc2lvbnNcIlxuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==