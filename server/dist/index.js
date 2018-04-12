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

    // No username provided

    if (username == null) {
        res.status(400).send(error);
        return;
    }

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

    // Start with no errors

    var errors = {};

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
            time: "9:00 am - 9:45 am",
            session: "Registration + Casual Breakfast",
            speaker: "-",
            location: "-"
        }, {
            time: "9:45 am - 10:00 am",
            session: "Opening Remarks",
            speaker: "IgniteSTEM Directors",
            location: "GWB 4A220A"
        }, {
            time: "10:00 am - 10:45 am",
            session: "Keynote",
            speaker: "Pat Yongpradit, Chief Academic Officer at Code.org",
            location: "GWB 4A220A"
        }, {
            time: "11:00 am - 12:30 pm",
            session: "Lightning Talks and Workshops",
            speaker: "Don Buckley (Design Thinking)",
            location: "Baker Field"
        }, {
            time: "11:00 am - 12:30 pm",
            session: "Lightning Talks and Workshops",
            speaker: "Godwyn Morris (Makerspace)",
            location: "GWB 4A220A"
        }, {
            time: "11:00 am - 12:30 pm",
            session: "Lightning Talks and Workshops",
            speaker: "IgniteSTEM Design Thinking",
            location: "Empire State"
        }, {
            time: "11:00 am - 12:30 pm",
            session: "Lightning Talks and Workshops",
            speaker: "Workshops for Teachers in Tech (Aankit Patel)",
            location: "Philharmonic"
        }, {
            time: "11:00 am - 12:30 pm",
            session: "Lightning Talks and Workshops",
            speaker: "Council for Opportunity in Education (Nicole Norfles)",
            location: "Battery Park"
        }, {
            time: "11:00 am - 12:30 pm",
            session: "Lightning Talks and Workshops",
            speaker: "IgniteSTEM Team Hackathon",
            location: "Apollo"
        }, {
            time: "11:00 am - 12:30 pm",
            session: "Lightning Talks and Workshops",
            speaker: "Chris Harris + Jennifer Kressler-Duda",
            location: "Riverside Park"
        }, {
            time: "11:50 am - 12:30 pm",
            session: "Lightning Talks and Workshops",
            speaker: "Don Buckley (Design Thinking)",
            location: "Baker Field"
        }, {
            time: "11:50 am - 12:30 pm",
            session: "Lightning Talks and Workshops",
            speaker: "Godwyn Morris (Makerspace)",
            location: "GWB 4A220A"
        }, {
            time: "11:50 am - 12:30 pm",
            session: "Lightning Talks and Workshops",
            speaker: "IgniteSTEM Design Thinking",
            location: "Empire State"
        }, {
            time: "11:50 am - 12:30 pm",
            session: "Lightning Talks and Workshops",
            speaker: "Ethics in Technology (Michael Schidlowsky)",
            location: "Philharmonic"
        }, {
            time: "11:50 am - 12:30 pm",
            session: "Lightning Talks and Workshops",
            speaker: "Council for Opportunity in Education (Nicole Norfles)",
            location: "Battery Park"
        }, {
            time: "11:50 am - 12:30 pm",
            session: "Lightning Talks and Workshops",
            speaker: "IgniteSTEM Team Hackathon",
            location: "Apollo"
        }, {
            time: "11:50 am - 12:30 pm",
            session: "Lightning Talks and Workshops",
            speaker: "Chris Harris + Jennifer Kressler-Duda",
            location: "Riverside Park"
        }, {
            time: "12:30 pm - 1:15 pm",
            session: "Lunch",
            speaker: "All",
            location: "GWB 4A220A"
        }, {
            time: "1:30 pm - 2:15 pm",
            session: "EdTech Panel",
            speaker: "Labster (Laura Wirpsza)",
            location: "GWB 4A220A"
        }, {
            time: "1:30 pm - 2:15 pm",
            session: "EdTech Panel",
            speaker: "Jack DeFuria (Bolt Learning)",
            location: "GWB 4A220A"
        }, {
            time: "1:30 pm - 2:15 pm",
            session: "EdTech Panel",
            speaker: "Jennifer Kressler-Duda",
            location: "GWB 4A220A"
        }, {
            time: "1:30 pm - 2:15 pm",
            session: "EdTech Panel",
            speaker: "Chris Harris",
            location: "GWB 4A220A"
        }, {
            time: "2:30 pm - 3:15 pm",
            session: "Keynote",
            speaker: "Jonathan Rochelle, Director of Product Management at Google Education",
            location: "GWB 4A220A"
        }, {
            time: "3:15 pm - 4:00 pm",
            session: "Unconferencesession",
            speaker: "-",
            location: "GWB 4A220A"
        }, {
            time: "4:15 pm - 4:30 pm",
            session: "Closing Ceremonies",
            speaker: "IgniteSTEM Team",
            location: "GWB 4A220A"
        }, {
            time: "4:30 pm - 6:00 pm",
            session: "IgniteSTEM Reception",
            speaker: "-",
            location: "GWB 4A220A"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzBkNzVkYzY5NmRjYzQ1NjE5MzAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvbW9kZWxzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1wb2x5ZmlsbFwiIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9yb3V0ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9yb3V0ZXMvYXBpUm91dGVzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvY29udHJvbGxlcnMvdGVzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL3JvdXRlcy91c2VyUm91dGVzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvY29udHJvbGxlcnMvdXNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcXVlbGl6ZVwiIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvY29uZmlnL2NvbmZpZy5qc29uIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvcm91dGVzL2xvZ2luUm91dGVzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvY29udHJvbGxlcnMvbG9naW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9yb3V0ZXMvZGF5T2ZSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy9kYXlPZi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL3JvdXRlcy9tZWRpYVJvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL3JvdXRlcy9zZWFyY2hSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy9zZWFyY2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy9zZWFyY2gvc2VhcmNoLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb25maWcvc2Vzc2lvbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGllbnQtc2Vzc2lvbnNcIiJdLCJuYW1lcyI6WyJmcyIsInBhdGgiLCJjb25maWdGaWxlIiwicmVxdWlyZSIsImVudiIsInByb2Nlc3MiLCJOT0RFX0VOViIsIl9fZGlybmFtZSIsImN3ZCIsImN1cnJlbnREaXIiLCJqb2luIiwiZmlsZW5hbWUiLCJtb2R1bGUiLCJ1bmRlZmluZWQiLCJiYXNlbmFtZSIsImRiIiwic2VxdWVsaXplIiwiREFUQUJBU0VfVVJMIiwiY29uZmlnIiwiZGF0YWJhc2UiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwicmVhZGRpclN5bmMiLCJmaWx0ZXIiLCJmaWxlIiwiaW5kZXhPZiIsInNsaWNlIiwiZm9yRWFjaCIsIm1vZGVsIiwibmFtZSIsIk9iamVjdCIsImtleXMiLCJtb2RlbE5hbWUiLCJhc3NvY2lhdGUiLCJTZXF1ZWxpemUiLCJleHBvcnRzIiwicG9ydCIsInBhcnNlSW50IiwiUE9SVCIsInNldCIsImxpc3RlbiIsImV4cHJlc3MiLCJsb2dnZXIiLCJib2R5UGFyc2VyIiwic2Vzc2lvbkF1dGgiLCJhcHAiLCJhbGwiLCJyZXEiLCJyZXMiLCJuZXh0IiwiaGVhZGVyIiwibWV0aG9kIiwic2VuZCIsInVzZSIsImpzb24iLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJnZXQiLCJzdGF0dXMiLCJzZW5kRmlsZSIsInJvb3QiLCJ0ZXN0RnVuY3Rpb24iLCJ0ZXN0RnVuY3Rpb24yIiwicG9zdCIsIlVzZXIiLCJsaXN0IiwiZmluZEFsbCIsInRoZW4iLCJ1c2VycyIsInVzZXIiLCJkYXRhVmFsdWVzIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiY2hlY2tVc2VybmFtZSIsImJvZHkiLCJ3aGVyZSIsInVzZXJuYW1lQXZhaWxhYmxlIiwibGVuZ3RoIiwiYXZhaWxhYmxlIiwiY3JlYXRlVXNlciIsImVtYWlsIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsIm9yZ2FuaXphdGlvbiIsImVycm9ycyIsImNyZWF0ZSIsImxvZ2luIiwiZGF0YSIsInN1Y2Nlc3MiLCJmaW5kT25lIiwic2Vzc2lvbiIsImxvZ291dCIsInByZXZpb3VzVXNlciIsInJlc2V0IiwiY3VycmVudFVzZXIiLCJsb2dnZWRfaW4iLCJzY2hlZHVsZSIsInRpbWUiLCJzcGVha2VyIiwibG9jYXRpb24iLCJzZWFyY2giLCJ1c2VyRGF0YSIsIm1hcCIsInF1ZXJ5Iiwic29ydGVkVXNlcnMiLCJxdWVyeUFycmF5Iiwic3BsaXQiLCJyYW5rIiwiaSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0b0xvd2VyQ2FzZSIsInNvcnQiLCJhIiwiYiIsInNlc3Npb25zIiwiY29va2llTmFtZSIsInNlY3JldCIsImR1cmF0aW9uIiwiYWN0aXZlRHVyYXRpb24iLCJibGFja2xpc3RlZCIsIm9yaWdpbmFsVXJsIiwiUmVnRXhwIiwidGVzdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIs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QUFvQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxZQUFNd0UsY0FBYyxDQUNoQixzQkFEZ0IsQ0FBcEI7QUFHQSxZQUFNeEgsT0FBTzhDLElBQUkyRSxXQUFqQjtBQUNBLFlBQUksQ0FBQzNFLElBQUk0QyxPQUFKLENBQVl0QixJQUFqQixFQUF1QjtBQUNuQkUsb0JBQVFDLEdBQVIsQ0FBWSxZQUFaO0FBQ0EsZ0JBQUksSUFBSW1ELE1BQUosQ0FBV0YsWUFBWS9HLElBQVosQ0FBaUIsR0FBakIsQ0FBWCxFQUFrQyxHQUFsQyxFQUF1Q2tILElBQXZDLENBQTRDM0gsSUFBNUMsQ0FBSixFQUF1RDtBQUFFO0FBQ3JEK0Msb0JBQUlVLE1BQUosQ0FBVyxHQUFYLEVBQWdCTixJQUFoQixDQUFxQixlQUFyQjtBQUNILGFBRkQsTUFFTztBQUFFO0FBQ0xIO0FBQ0g7QUFDSixTQVBELE1BT087QUFDSHNCLG9CQUFRQyxHQUFSLGdDQUFrQ3pCLElBQUk0QyxPQUFKLENBQVl0QixJQUFaLENBQWlCakQsUUFBbkQ7QUFDQTZCO0FBQ0g7QUFDSixLQW5CRDtBQW9CSCxDQTdCRDs7QUErQkFyQyxPQUFPdUIsT0FBUCxHQUFpQlMsV0FBakIsQzs7Ozs7O0FDakNBLDRDIiwiZmlsZSI6ImRpc3QvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzMGQ3NWRjNjk2ZGNjNDU2MTkzMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gRVM2LXN0eWxlIGltcG9ydHNcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgU2VxdWVsaXplIGZyb20gJ3NlcXVlbGl6ZSc7XG5cbmNvbnN0IGNvbmZpZ0ZpbGUgID0gcmVxdWlyZSgnLi4vY29uZmlnL2NvbmZpZy5qc29uJyk7XG5cbnZhciBlbnYgICAgICAgICAgICAgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnOyAvLyBEZXRlcm1pbmUgaWYgdXNpbmcgZGV2ZWxvcG1lbnRcbmNvbnN0IF9fZGlybmFtZSAgICAgPSBwcm9jZXNzLmN3ZCgpOyAvLyBDb3VsZCBicmVhayBvbiBwcm9kXG5jb25zdCBjdXJyZW50RGlyID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vc2VydmVyL3NyYy9tb2RlbHMnKTtcblxuLy8gUmVndWxhciBgbW9kdWxlLmZpbGVuYW1lYCBpcyB1bmRlZmluZWQgaW4gbG9jYWwgZGV2XG5jb25zdCBmaWxlbmFtZSA9IChtb2R1bGUuZmlsZW5hbWUgIT09IHVuZGVmaW5lZCkgPyBtb2R1bGUuZmlsZW5hbWUgOiAnaW5kZXguanMnO1xudmFyIGJhc2VuYW1lICA9IHBhdGguYmFzZW5hbWUoZmlsZW5hbWUpO1xuXG52YXIgZGIgPSB7fTtcblxuLy8gSSB1c2UgdGhlIG5vZGUtY29uZmlnIHBhY2thZ2UgdG8gbWFuYWdlIHRoZSBEQiBjb25maWcgeW91IGNhbiBjaG9vc2Vcbi8vIHRvIHN0aWNrIHdpdGggdGhlIG9yaWdpbmFsIHZlcnNpb24uIEFuZCBJIHJlbW92ZWQgZW52aXJvbm1lbnQgdmFyaWFibGVcbi8vIHN1cHBvcnQgYmVjYXVzZSBJIGRvbid0IG5lZWQgaXQuXG5sZXQgc2VxdWVsaXplID0ge307XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYpIHtcbiAgICAvLyBGcm9tIHRoZSBlbnZpcm9ubWVudCwgZXh0cmFjdCB0aGUga2V5IHdpdGggdGhlIG5hbWUgcHJvdmlkZWQgaW4gdGhlIGNvbmZpZyBhcyB1c2VfZW52X3ZhcmlhYmxlXG4gICAgLy8gYW5kIHVzZSB0aGF0IHRvIGVzdGFibGlzaCBhIGNvbm5lY3Rpb24gdG8gb3VyIGRhdGFiYXNlLlxuICAgIHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUocHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMKTsgLy8gRXN0YWJsaXNoIGNvbm5lY3Rpb24gdXNpbmcgZW52aXJvbm1lbnQgdmFyaWFibGVzXG5cbn0gZWxzZSB7XG4gICAgdmFyIGNvbmZpZyAgICA9IGNvbmZpZ0ZpbGVbZW52XTsgLy8gSWYgbG9jYWwsIHVzZSBjb25maWdcblxuICAgIHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUoY29uZmlnLmRhdGFiYXNlLCBjb25maWcudXNlcm5hbWUsIGNvbmZpZy5wYXNzd29yZCwgY29uZmlnKTsgLy8gQ29ubmVjdFxufVxuXG5mc1xuICAgIC5yZWFkZGlyU3luYyhjdXJyZW50RGlyKVxuICAgIC5maWx0ZXIoZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICByZXR1cm4gKGZpbGUuaW5kZXhPZignLicpICE9PSAwKSAmJiAoZmlsZSAhPT0gYmFzZW5hbWUpICYmIChmaWxlLnNsaWNlKC0zKSA9PT0gJy5qcycpO1xuICAgIH0pXG4gICAgLmZvckVhY2goZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICB2YXIgbW9kZWwgPSBzZXF1ZWxpemUuaW1wb3J0KHBhdGguam9pbihjdXJyZW50RGlyLCBmaWxlKSk7XG4gICAgICAgIGRiW21vZGVsLm5hbWVdID0gbW9kZWw7XG4gICAgfSk7XG5cbk9iamVjdC5rZXlzKGRiKS5mb3JFYWNoKGZ1bmN0aW9uKG1vZGVsTmFtZSkge1xuICAgIGlmIChkYlttb2RlbE5hbWVdLmFzc29jaWF0ZSkge1xuICAgICAgICBkYlttb2RlbE5hbWVdLmFzc29jaWF0ZShkYik7XG4gICAgfVxufSk7XG5cbmRiLnNlcXVlbGl6ZSA9IHNlcXVlbGl6ZTtcbmRiLlNlcXVlbGl6ZSA9IFNlcXVlbGl6ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBkYjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvbW9kZWxzL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1wb2x5ZmlsbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQXBwbGljYXRpb24gZW50cnksIHNldHRpbmcgdXAgc2VydmVyXG5pbXBvcnQgYXBwIGZyb20gJy4vYXBwJzsgLy8gVGhlIGV4cHJlc3MgYXBwIHdlIGp1c3QgY3JlYXRlZFxuXG5jb25zdCBwb3J0ID0gcGFyc2VJbnQocHJvY2Vzcy5lbnYuUE9SVCwgMTApIHx8IDU1NTU7XG5hcHAuc2V0KCdwb3J0JywgcG9ydCk7XG5cbi8vIDAuMC4wLjAgbWFrZXMgaXQgYXZhaWxhYmxlIG9uIHlvdXIgbG9jYWwgbmV0d29ya1xuLy8gYXBwLmxpc3Rlbihwb3J0LCAnMC4wLjAuMCcpO1xuYXBwLmxpc3Rlbihwb3J0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvaW5kZXguanMiLCJpbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcblxuY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbmNvbnN0IGxvZ2dlciA9IHJlcXVpcmUoJ21vcmdhbicpO1xuY29uc3QgYm9keVBhcnNlciA9IHJlcXVpcmUoJ2JvZHktcGFyc2VyJyk7XG5jb25zdCBzZXNzaW9uQXV0aCA9IHJlcXVpcmUoJy4vY29uZmlnL3Nlc3Npb24nKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbmxldCBfX2Rpcm5hbWUgPSBwcm9jZXNzLmN3ZCgpO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7IC8vIFNldHVwIGV4cHJlc3MgYXBwXG5cbi8vIEFsbG93IGNyb3NzIG9yaWdpbiByZXF1ZXN0cyB3aXRoIGF1dGhvcml6YXRpb24gKGZvciBBUEkgcHVycG9zZXMpXG5hcHAuYWxsKCcqJywgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKTtcbiAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJywgJ1BVVCwgR0VULCBQT1NULCBERUxFVEUsIE9QVElPTlMnKTtcbiAgICByZXMuaGVhZGVyKFxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsXG4gICAgICAgICdhY2NlcHQsIGNvbnRlbnQtdHlwZSwgeC1wYXJzZS1hcHBsaWNhdGlvbi1pZCwgeC1wYXJzZS1yZXN0LWFwaS1rZXksIHgtcGFyc2Utc2Vzc2lvbi10b2tlbiwgQVVUSE9SSVpBVElPTidcbiAgICApO1xuXG4gICAgLy8gSW50ZXJjZXB0IE9QVElPTlMgbWV0aG9kXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdPUFRJT05TJykge1xuICAgICAgICByZXMuc2VuZCgyMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5leHQoKTtcbiAgICB9XG59KTtcblxuLy8gU2V0dXAgYXV0aGVudGljYXRpb24gYW5kIHNlY3VyaXR5XG5zZXNzaW9uQXV0aChhcHApO1xuXG4vLyBMb2cgcmVxdWVzdHMgdG8gdGhlIGNvbnNvbGUuXG5hcHAudXNlKGxvZ2dlcignZGV2JykpO1xuXG4vLyBQYXJzZSBpbmNvbWluZyByZXF1ZXN0cyBkYXRhIChodHRwczovL2dpdGh1Yi5jb20vZXhwcmVzc2pzL2JvZHktcGFyc2VyKVxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiBmYWxzZSB9KSk7XG5hcHAudXNlKCcvc2NyaXB0cycsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi8uLi9jbGllbnQvZGlzdCcpKSk7XG5cbi8vIFJlcXVpcmUgcm91dGVzIGFuZCBzaW11bHRhbmVvdXNseSBhdHRhY2ggYXBwXG5yb3V0ZXMoYXBwKTtcblxuLy8gQ2F0Y2ggYWxsIGlmIHRoZSByb3V0ZXMgZG9lc24ndCBmaW5kIGEgdmFsaWQgVVJMXG5hcHAuZ2V0KCcqJywgKHJlcSwgcmVzKSA9PiByZXMuc3RhdHVzKDIwMCkuc2VuZCgnTm90aGluZyBoZXJlIHlldC4uLicpKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9hcHAuanMiLCJpbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuXG4vLyBGdW5jdGlvbmFsIGNvbnRyb2xsZXJzIGdvIGhlcmU6XG4vLyAuLi5cblxuLy8gTWFrZSBtb2R1bGFyIHNvIG5vdCBhbGwgcm91dGVzIGFyZSBoZXJlXG5pbXBvcnQgYXBpUm91dGVzIGZyb20gJy4vYXBpUm91dGVzJztcbmltcG9ydCB1c2VyUm91dGVzIGZyb20gJy4vdXNlclJvdXRlcyc7XG5pbXBvcnQgbG9naW5Sb3V0ZXMgZnJvbSAnLi9sb2dpblJvdXRlcyc7XG5pbXBvcnQgZGF5T2ZSb3V0ZXMgZnJvbSAnLi9kYXlPZlJvdXRlcyc7XG5pbXBvcnQgbWVkaWFSb3V0ZXMgZnJvbSAnLi9tZWRpYVJvdXRlcyc7XG5pbXBvcnQgc2VhcmNoUm91dGVzIGZyb20gJy4vc2VhcmNoUm91dGVzJztcblxuLy8gUmVxdWlyZXMgYW4gYXBwIGFzIGFuIGlucHV0IHNvIGNhbiBkaXJlY3QgdGhlIHVzZXIgYWNjb3JkaW5nbHlcbmV4cG9ydCBkZWZhdWx0IChhcHApID0+IHtcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKiAgUm91dGVzICAqKioqKioqKioqKioqKioqKioqKiAqL1xuICAgIGFwaVJvdXRlcyhhcHApO1xuICAgIHVzZXJSb3V0ZXMoYXBwKTtcbiAgICBsb2dpblJvdXRlcyhhcHApO1xuICAgIGRheU9mUm91dGVzKGFwcCk7XG4gICAgbWVkaWFSb3V0ZXMoYXBwKTtcbiAgICBzZWFyY2hSb3V0ZXMoYXBwKTtcblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqICBDbGllbnQgICoqKioqKioqKioqKioqKioqKioqICovXG5cbiAgICAvLyBTZXJ2ZSB0aGUgc3RhdGljIGNsaWVudCBpbmRleC5qcyBidWlsZCBmaWxlXG4gICAgYXBwLmdldCgnL3NjcmlwdHMvaW5kZXguanMnLCAocmVxLCByZXMpID0+IHtcbiAgICAgICAgY29uc3QgX19kaXJuYW1lID0gcHJvY2Vzcy5jd2QoKTtcbiAgICAgICAgcmVzLnNlbmRGaWxlKCdpbmRleC5qcycsIHsgcm9vdDogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vY2xpZW50L2Rpc3QnKSB9KTtcbiAgICB9KTtcblxuICAgIGFwcC5nZXQoJy9mYXZpY29uLnBuZycsIChyZXEsIHJlcykgPT4ge1xuICAgICAgICBjb25zdCBfX2Rpcm5hbWUgPSBwcm9jZXNzLmN3ZCgpO1xuICAgICAgICByZXMuc2VuZEZpbGUoJ2Zhdmljb24ucG5nJywgeyByb290OiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9jbGllbnQvZGlzdCcpIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gQ2xpZW50IGFwcCBlbnRyeSBpbmRleC5odG1sIGZpbGUgLSByZWFjdCByb3V0ZXJcbiAgICBhcHAuZ2V0KCcqJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgIGNvbnN0IF9fZGlybmFtZSA9IHByb2Nlc3MuY3dkKCk7XG4gICAgICAgIHJlcy5zZW5kRmlsZSgnaW5kZXguaHRtbCcsIHsgcm9vdDogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vY2xpZW50L2Rpc3QnKSB9KTsgLy8gUmVuZGVyIGNsaWVudFxuICAgIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvcm91dGVzL2luZGV4LmpzIiwiaW1wb3J0IHsgdGVzdEZ1bmN0aW9uIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvdGVzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IChhcHApID0+IHtcbiAgICBhcHAuZ2V0KCcvYXBpL3Rlc3QnLCB0ZXN0RnVuY3Rpb24pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvcm91dGVzL2FwaVJvdXRlcy5qcyIsImV4cG9ydCBjb25zdCB0ZXN0RnVuY3Rpb24gPSAocmVxLCByZXMpID0+IHtcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCgnVGhpcyBpcyBhIHRlc3QnKTtcbn07XG5cbmV4cG9ydCBjb25zdCB0ZXN0RnVuY3Rpb24yID0gKHJlcSwgcmVzKSA9PiB7XG4gICAgcmVzLnN0YXR1cygyMDApLnNlbmQoJ1RoaXMgaXMgdGVzdCAjMicpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvY29udHJvbGxlcnMvdGVzdC9pbmRleC5qcyIsImltcG9ydCB7IGNyZWF0ZVVzZXIsIGxpc3QsIGNoZWNrVXNlcm5hbWUgfSBmcm9tICcuLi9jb250cm9sbGVycy91c2Vycyc7XG5cbmV4cG9ydCBkZWZhdWx0IChhcHApID0+IHtcbiAgICBhcHAucG9zdCgnL2FwaS91c2Vycy9jcmVhdGUnLCBjcmVhdGVVc2VyKTtcbiAgICBhcHAuZ2V0KCcvYXBpL3VzZXJzJywgbGlzdCk7XG4gICAgYXBwLnBvc3QoJy9hcGkvdXNlcnMvY2hlY2tVc2VybmFtZScsIGNoZWNrVXNlcm5hbWUpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvcm91dGVzL3VzZXJSb3V0ZXMuanMiLCJjb25zdCBVc2VyID0gcmVxdWlyZSgnLi4vLi4vbW9kZWxzJykuVXNlcjtcblxuZXhwb3J0IGNvbnN0IGxpc3QgPSAocmVxLCByZXMpID0+IHtcbiAgICByZXR1cm4gVXNlclxuICAgICAgICAuZmluZEFsbCh7fSkgLy8gR2V0IGFsbCBxdW90ZXNcbiAgICAgICAgLnRoZW4oKHVzZXJzKSA9PiB7XG4gICAgICAgICAgICAvLyBGaWx0ZXIgb3V0IHBhc3N3b3JkIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgIHVzZXJzLmZvckVhY2goKHVzZXIpID0+IHsgZGVsZXRlIHVzZXIuZGF0YVZhbHVlcy5wYXNzd29yZCB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJzKTtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHVzZXJzKTtcbiAgICAgICAgfSkgLy8gUmV0dXJuIGFycmF5IG9mIHF1b3Rlc1xuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTsgLy8gRXJyb3Jcbn07XG5cbmV4cG9ydCBjb25zdCBjaGVja1VzZXJuYW1lID0gKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICB1c2VybmFtZSxcbiAgICB9ID0gcmVxLmJvZHk7IC8vIEdldCB1c2VybmFtZVxuXG4gICAgLy8gTm8gdXNlcm5hbWUgcHJvdmlkZWRcbiAgICBpZiAodXNlcm5hbWUgPT0gbnVsbCkge1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4gVXNlci5cbiAgICAgICAgZmluZEFsbCh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lLCAvLyBTZWUgaWYgdXNlciBleGlzdHMgd2l0aCB0aGF0IHVzZXJuYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCh1c2VycykgPT4ge1xuICAgICAgICAgICAgdXNlcm5hbWVBdmFpbGFibGUgPSAodXNlcnMubGVuZ3RoID09IDApOyAvLyBVc2VybmFtZSBhdmFpbGFibGUgaWYgbm9uZVxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICAgICAgICAgIGF2YWlsYWJsZTogdXNlcm5hbWVBdmFpbGFibGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7IC8vIEVycm9yXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVVc2VyID0gKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0NyZWF0ZWQgdXNlcicpO1xuICAgIGNvbnN0IHtcbiAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgIGVtYWlsLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgZmlyc3RfbmFtZSxcbiAgICAgICAgbGFzdF9uYW1lLFxuICAgICAgICBvcmdhbml6YXRpb24sXG4gICAgfSA9IHJlcS5ib2R5OyAvLyBJbmZvcm1hdGlvbiBmcm9tIHRoZSByZXF1ZXN0IGJvZHkgSlNPTiBkYXRhXG5cbiAgICAvLyBTdGFydCB3aXRoIG5vIGVycm9yc1xuICAgIGxldCBlcnJvcnMgPSB7fVxuXG4gICAgcmV0dXJuIFVzZXJcbiAgICAgICAgLmNyZWF0ZSh7XG4gICAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgICBmaXJzdF9uYW1lLFxuICAgICAgICAgICAgbGFzdF9uYW1lLFxuICAgICAgICAgICAgb3JnYW5pemF0aW9uLFxuICAgICAgICB9KVxuICAgICAgICAudGhlbigodXNlcikgPT4geyAvLyBTdWNjZXNzOiBjcmVhdGVkIG5ldyBxdW90ZSBlbnRyeVxuICAgICAgICAgICAgZGVsZXRlIHVzZXIuZGF0YVZhbHVlcy5wYXNzd29yZDsgLy8gUmVtb3ZlIHBhc3N3b3JkXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh1c2VyKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKTtcbiAgICAgICAgfSk7IC8vIEVycm9yXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9jb250cm9sbGVycy91c2Vycy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmc1wiXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzZXF1ZWxpemVcIlxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJkZXZlbG9wbWVudFwiOntcInVzZXJuYW1lXCI6XCJrZXZpbmhvdVwiLFwicGFzc3dvcmRcIjpudWxsLFwiZGF0YWJhc2VcIjpcImlnbml0ZS1zdGVtLWRldlwiLFwiaG9zdFwiOlwiMTI3LjAuMC4xXCIsXCJwb3J0XCI6NTQzMixcImRpYWxlY3RcIjpcInBvc3RncmVzXCJ9LFwidGVzdFwiOntcInVzZXJuYW1lXCI6XCJrZXZpbmhvdVwiLFwicGFzc3dvcmRcIjpudWxsLFwiZGF0YWJhc2VcIjpcImlnbml0ZS1zdGVtLXRlc3RcIixcImhvc3RcIjpcIjEyNy4wLjAuMVwiLFwicG9ydFwiOjU0MzIsXCJkaWFsZWN0XCI6XCJwb3N0Z3Jlc1wifSxcInByb2R1Y3Rpb25cIjp7XCJ1c2VfZW52X3ZhcmlhYmxlXCI6XCJEQVRBQkFTRV9VUkxcIn19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zZXJ2ZXIvc3JjL2NvbmZpZy9jb25maWcuanNvblxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IGxvZ2luLCBsb2dvdXQsIGN1cnJlbnRVc2VyIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvbG9naW4nO1xuXG5leHBvcnQgZGVmYXVsdCAoYXBwOiBleHByZXNzLkFwcGxpY2F0aW9uKSA9PiB7XG4gICAgYXBwLnBvc3QoJy9hcGkvbG9naW4nLCBsb2dpbik7XG4gICAgYXBwLmdldCgnL2FwaS9sb2dvdXQnLCBsb2dvdXQpO1xuICAgIGFwcC5nZXQoJy9hcGkvdXNlcnMvY3VycmVudCcsIGN1cnJlbnRVc2VyKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvcm91dGVzL2xvZ2luUm91dGVzLmpzIiwiY29uc3QgVXNlciA9IHJlcXVpcmUoJy4uLy4uL21vZGVscy9pbmRleC5qcycpLlVzZXI7XG5cbi8qXG4gKiBQYXJhbWV0ZXJzOlxuICogIHJlcS5ib2R5IHtcbiAqICAgICAgdXNlcm5hbWUsXG4gKiAgICAgIHBhc3N3b3JkLFxuICogIH1cbiAqL1xuZXhwb3J0IGNvbnN0IGxvZ2luID0gKHJlcTogUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xuICAgIGlmIChkYXRhLnVzZXJuYW1lID09PSB1bmRlZmluZWQgfHwgZGF0YS5wYXNzd29yZCA9PT0gdW5kZWZpbmVkKSB7IC8vIEVtcHR5IGF1dGhlbnRpY2F0aW9uXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgZXJyb3I6ICdQbGVhc2Ugc3VibWl0IGEgdXNlcm5hbWUgYW5kIHBhc3N3b3JkJyxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjsgLy8gVGVybWluYXRlXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGBVc2VybmFtZTogJHtkYXRhLnVzZXJuYW1lfWApO1xuICAgIHJldHVybiBVc2VyXG4gICAgICAgIC5maW5kT25lKHtcbiAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IGRhdGEudXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGRhdGEucGFzc3dvcmQsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pIC8vIEdldCBhbGwgcXVvdGVzXG4gICAgICAgIC50aGVuKCh1c2VyOiBVc2VyKSA9PiB7XG4gICAgICAgICAgICBpZiAodXNlciA9PSBudWxsKSB7IC8vIEludmFsaWQgY3JlZGVudGlhbHNcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogJ0ludmFsaWQgdXNlcm5hbWUgJiBwYXNzd29yZCcsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBWYWxpZCBjcmVkZW50aWFsc1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFN1Y2Nlc3NmdWxseSBsb2dnZWQgaW4gdXNlcjogJHt1c2VyLnVzZXJuYW1lfWApO1xuICAgICAgICAgICAgZGVsZXRlIHVzZXIucGFzc3dvcmQ7IC8vIERvbid0IHNlbmQgYmFjayBwYXNzd29yZFxuICAgICAgICAgICAgcmVxLnNlc3Npb24udXNlciA9IHVzZXI7IC8vIFNldCBjb29raWVcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHVzZXIsIC8vIFNlbmQgdXNlclxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pIC8vIFJldHVybiBhcnJheSBvZiBxdW90ZXNcbiAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTsgLy8gRXJyb3IgaW4gcmVxdWVzdFxufVxuXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKHJlcTogUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSA9PiB7XG4gICAgY29uc3QgcHJldmlvdXNVc2VyID0gcmVxLnNlc3Npb24udXNlcjtcbiAgICByZXEuc2Vzc2lvbi5yZXNldCgpO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgdXNlcjogcHJldmlvdXNVc2VyLFxuICAgIH0pO1xufVxuXG5leHBvcnQgY29uc3QgY3VycmVudFVzZXIgPSAocmVxOiBSZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpID0+IHtcbiAgICBpZiAocmVxLnNlc3Npb24udXNlcikge1xuICAgICAgICBkZWxldGUgcmVxLnNlc3Npb24udXNlci5wYXNzd29yZDsgLy8gUmVtb3ZlIHBhc3N3b3JkXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBsb2dnZWRfaW46IHRydWUsXG4gICAgICAgICAgICB1c2VyOiByZXEuc2Vzc2lvbi51c2VyLFxuICAgICAgICB9O1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgbG9nZ2VkX2luOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoZGF0YSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9jb250cm9sbGVycy9sb2dpbi9pbmRleC5qcyIsImltcG9ydCBzY2hlZHVsZSBmcm9tICcuLi9jb250cm9sbGVycy9kYXlPZic7XG5cbmV4cG9ydCBkZWZhdWx0IChhcHApID0+IHtcbiAgICBhcHAuZ2V0KCcvYXBpL3NjaGVkdWxlJywgc2NoZWR1bGUpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvcm91dGVzL2RheU9mUm91dGVzLmpzIiwiLyogRGV0YWlsczpcbiAqICBkYXRlOiBJU08gODYwMVxuICpcbiAqL1xuY29uc3Qgc2NoZWR1bGUgPSAocmVxLCByZXMpID0+IHtcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGltZTogXCI5OjAwIGFtIC0gOTo0NSBhbVwiLFxuICAgICAgICAgICAgICAgIHNlc3Npb246IFwiUmVnaXN0cmF0aW9uICsgQ2FzdWFsIEJyZWFrZmFzdFwiLFxuICAgICAgICAgICAgICAgIHNwZWFrZXI6IFwiLVwiLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcIi1cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aW1lOiBcIjk6NDUgYW0gLSAxMDowMCBhbVwiLFxuICAgICAgICAgICAgICAgIHNlc3Npb246IFwiT3BlbmluZyBSZW1hcmtzXCIsXG4gICAgICAgICAgICAgICAgc3BlYWtlcjogXCJJZ25pdGVTVEVNIERpcmVjdG9yc1wiLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcIkdXQiA0QTIyMEFcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aW1lOiBcIjEwOjAwIGFtIC0gMTA6NDUgYW1cIixcbiAgICAgICAgICAgICAgICBzZXNzaW9uOiBcIktleW5vdGVcIixcbiAgICAgICAgICAgICAgICBzcGVha2VyOiBcIlBhdCBZb25ncHJhZGl0LCBDaGllZiBBY2FkZW1pYyBPZmZpY2VyIGF0IENvZGUub3JnXCIsXG4gICAgICAgICAgICAgICAgbG9jYXRpb246IFwiR1dCIDRBMjIwQVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpbWU6IFwiMTE6MDAgYW0gLSAxMjozMCBwbVwiLFxuICAgICAgICAgICAgICAgIHNlc3Npb246IFwiTGlnaHRuaW5nIFRhbGtzIGFuZCBXb3Jrc2hvcHNcIixcbiAgICAgICAgICAgICAgICBzcGVha2VyOiBcIkRvbiBCdWNrbGV5IChEZXNpZ24gVGhpbmtpbmcpXCIsXG4gICAgICAgICAgICAgICAgbG9jYXRpb246IFwiQmFrZXIgRmllbGRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aW1lOiBcIjExOjAwIGFtIC0gMTI6MzAgcG1cIixcbiAgICAgICAgICAgICAgICBzZXNzaW9uOiBcIkxpZ2h0bmluZyBUYWxrcyBhbmQgV29ya3Nob3BzXCIsXG4gICAgICAgICAgICAgICAgc3BlYWtlcjogXCJHb2R3eW4gTW9ycmlzIChNYWtlcnNwYWNlKVwiLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcIkdXQiA0QTIyMEFcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aW1lOiBcIjExOjAwIGFtIC0gMTI6MzAgcG1cIixcbiAgICAgICAgICAgICAgICBzZXNzaW9uOiBcIkxpZ2h0bmluZyBUYWxrcyBhbmQgV29ya3Nob3BzXCIsXG4gICAgICAgICAgICAgICAgc3BlYWtlcjogXCJJZ25pdGVTVEVNIERlc2lnbiBUaGlua2luZ1wiLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcIkVtcGlyZSBTdGF0ZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpbWU6IFwiMTE6MDAgYW0gLSAxMjozMCBwbVwiLFxuICAgICAgICAgICAgICAgIHNlc3Npb246IFwiTGlnaHRuaW5nIFRhbGtzIGFuZCBXb3Jrc2hvcHNcIixcbiAgICAgICAgICAgICAgICBzcGVha2VyOiBcIldvcmtzaG9wcyBmb3IgVGVhY2hlcnMgaW4gVGVjaCAoQWFua2l0IFBhdGVsKVwiLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcIlBoaWxoYXJtb25pY1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpbWU6IFwiMTE6MDAgYW0gLSAxMjozMCBwbVwiLFxuICAgICAgICAgICAgICAgIHNlc3Npb246IFwiTGlnaHRuaW5nIFRhbGtzIGFuZCBXb3Jrc2hvcHNcIixcbiAgICAgICAgICAgICAgICBzcGVha2VyOiBcIkNvdW5jaWwgZm9yIE9wcG9ydHVuaXR5IGluIEVkdWNhdGlvbiAoTmljb2xlIE5vcmZsZXMpXCIsXG4gICAgICAgICAgICAgICAgbG9jYXRpb246IFwiQmF0dGVyeSBQYXJrXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGltZTogXCIxMTowMCBhbSAtIDEyOjMwIHBtXCIsXG4gICAgICAgICAgICAgICAgc2Vzc2lvbjogXCJMaWdodG5pbmcgVGFsa3MgYW5kIFdvcmtzaG9wc1wiLFxuICAgICAgICAgICAgICAgIHNwZWFrZXI6IFwiSWduaXRlU1RFTSBUZWFtIEhhY2thdGhvblwiLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcIkFwb2xsb1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpbWU6IFwiMTE6MDAgYW0gLSAxMjozMCBwbVwiLFxuICAgICAgICAgICAgICAgIHNlc3Npb246IFwiTGlnaHRuaW5nIFRhbGtzIGFuZCBXb3Jrc2hvcHNcIixcbiAgICAgICAgICAgICAgICBzcGVha2VyOiBcIkNocmlzIEhhcnJpcyArIEplbm5pZmVyIEtyZXNzbGVyLUR1ZGFcIixcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogXCJSaXZlcnNpZGUgUGFya1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpbWU6IFwiMTE6NTAgYW0gLSAxMjozMCBwbVwiLFxuICAgICAgICAgICAgICAgIHNlc3Npb246IFwiTGlnaHRuaW5nIFRhbGtzIGFuZCBXb3Jrc2hvcHNcIixcbiAgICAgICAgICAgICAgICBzcGVha2VyOiBcIkRvbiBCdWNrbGV5IChEZXNpZ24gVGhpbmtpbmcpXCIsXG4gICAgICAgICAgICAgICAgbG9jYXRpb246IFwiQmFrZXIgRmllbGRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aW1lOiBcIjExOjUwIGFtIC0gMTI6MzAgcG1cIixcbiAgICAgICAgICAgICAgICBzZXNzaW9uOiBcIkxpZ2h0bmluZyBUYWxrcyBhbmQgV29ya3Nob3BzXCIsXG4gICAgICAgICAgICAgICAgc3BlYWtlcjogXCJHb2R3eW4gTW9ycmlzIChNYWtlcnNwYWNlKVwiLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcIkdXQiA0QTIyMEFcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aW1lOiBcIjExOjUwIGFtIC0gMTI6MzAgcG1cIixcbiAgICAgICAgICAgICAgICBzZXNzaW9uOiBcIkxpZ2h0bmluZyBUYWxrcyBhbmQgV29ya3Nob3BzXCIsXG4gICAgICAgICAgICAgICAgc3BlYWtlcjogXCJJZ25pdGVTVEVNIERlc2lnbiBUaGlua2luZ1wiLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcIkVtcGlyZSBTdGF0ZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpbWU6IFwiMTE6NTAgYW0gLSAxMjozMCBwbVwiLFxuICAgICAgICAgICAgICAgIHNlc3Npb246IFwiTGlnaHRuaW5nIFRhbGtzIGFuZCBXb3Jrc2hvcHNcIixcbiAgICAgICAgICAgICAgICBzcGVha2VyOiBcIkV0aGljcyBpbiBUZWNobm9sb2d5IChNaWNoYWVsIFNjaGlkbG93c2t5KVwiLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcIlBoaWxoYXJtb25pY1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpbWU6IFwiMTE6NTAgYW0gLSAxMjozMCBwbVwiLFxuICAgICAgICAgICAgICAgIHNlc3Npb246IFwiTGlnaHRuaW5nIFRhbGtzIGFuZCBXb3Jrc2hvcHNcIixcbiAgICAgICAgICAgICAgICBzcGVha2VyOiBcIkNvdW5jaWwgZm9yIE9wcG9ydHVuaXR5IGluIEVkdWNhdGlvbiAoTmljb2xlIE5vcmZsZXMpXCIsXG4gICAgICAgICAgICAgICAgbG9jYXRpb246IFwiQmF0dGVyeSBQYXJrXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGltZTogXCIxMTo1MCBhbSAtIDEyOjMwIHBtXCIsXG4gICAgICAgICAgICAgICAgc2Vzc2lvbjogXCJMaWdodG5pbmcgVGFsa3MgYW5kIFdvcmtzaG9wc1wiLFxuICAgICAgICAgICAgICAgIHNwZWFrZXI6IFwiSWduaXRlU1RFTSBUZWFtIEhhY2thdGhvblwiLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcIkFwb2xsb1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpbWU6IFwiMTE6NTAgYW0gLSAxMjozMCBwbVwiLFxuICAgICAgICAgICAgICAgIHNlc3Npb246IFwiTGlnaHRuaW5nIFRhbGtzIGFuZCBXb3Jrc2hvcHNcIixcbiAgICAgICAgICAgICAgICBzcGVha2VyOiBcIkNocmlzIEhhcnJpcyArIEplbm5pZmVyIEtyZXNzbGVyLUR1ZGFcIixcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogXCJSaXZlcnNpZGUgUGFya1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpbWU6IFwiMTI6MzAgcG0gLSAxOjE1IHBtXCIsXG4gICAgICAgICAgICAgICAgc2Vzc2lvbjogXCJMdW5jaFwiLFxuICAgICAgICAgICAgICAgIHNwZWFrZXI6IFwiQWxsXCIsXG4gICAgICAgICAgICAgICAgbG9jYXRpb246IFwiR1dCIDRBMjIwQVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpbWU6IFwiMTozMCBwbSAtIDI6MTUgcG1cIixcbiAgICAgICAgICAgICAgICBzZXNzaW9uOiBcIkVkVGVjaCBQYW5lbFwiLFxuICAgICAgICAgICAgICAgIHNwZWFrZXI6IFwiTGFic3RlciAoTGF1cmEgV2lycHN6YSlcIixcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogXCJHV0IgNEEyMjBBXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGltZTogXCIxOjMwIHBtIC0gMjoxNSBwbVwiLFxuICAgICAgICAgICAgICAgIHNlc3Npb246IFwiRWRUZWNoIFBhbmVsXCIsXG4gICAgICAgICAgICAgICAgc3BlYWtlcjogXCJKYWNrIERlRnVyaWEgKEJvbHQgTGVhcm5pbmcpXCIsXG4gICAgICAgICAgICAgICAgbG9jYXRpb246IFwiR1dCIDRBMjIwQVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpbWU6IFwiMTozMCBwbSAtIDI6MTUgcG1cIixcbiAgICAgICAgICAgICAgICBzZXNzaW9uOiBcIkVkVGVjaCBQYW5lbFwiLFxuICAgICAgICAgICAgICAgIHNwZWFrZXI6IFwiSmVubmlmZXIgS3Jlc3NsZXItRHVkYVwiLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcIkdXQiA0QTIyMEFcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aW1lOiBcIjE6MzAgcG0gLSAyOjE1IHBtXCIsXG4gICAgICAgICAgICAgICAgc2Vzc2lvbjogXCJFZFRlY2ggUGFuZWxcIixcbiAgICAgICAgICAgICAgICBzcGVha2VyOiBcIkNocmlzIEhhcnJpc1wiLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcIkdXQiA0QTIyMEFcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aW1lOiBcIjI6MzAgcG0gLSAzOjE1IHBtXCIsXG4gICAgICAgICAgICAgICAgc2Vzc2lvbjogXCJLZXlub3RlXCIsXG4gICAgICAgICAgICAgICAgc3BlYWtlcjogXCJKb25hdGhhbiBSb2NoZWxsZSwgRGlyZWN0b3Igb2YgUHJvZHVjdCBNYW5hZ2VtZW50IGF0IEdvb2dsZSBFZHVjYXRpb25cIixcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogXCJHV0IgNEEyMjBBXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGltZTogXCIzOjE1IHBtIC0gNDowMCBwbVwiLFxuICAgICAgICAgICAgICAgIHNlc3Npb246IFwiVW5jb25mZXJlbmNlc2Vzc2lvblwiLFxuICAgICAgICAgICAgICAgIHNwZWFrZXI6IFwiLVwiLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcIkdXQiA0QTIyMEFcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aW1lOiBcIjQ6MTUgcG0gLSA0OjMwIHBtXCIsXG4gICAgICAgICAgICAgICAgc2Vzc2lvbjogXCJDbG9zaW5nIENlcmVtb25pZXNcIixcbiAgICAgICAgICAgICAgICBzcGVha2VyOiBcIklnbml0ZVNURU0gVGVhbVwiLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcIkdXQiA0QTIyMEFcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aW1lOiBcIjQ6MzAgcG0gLSA2OjAwIHBtXCIsXG4gICAgICAgICAgICAgICAgc2Vzc2lvbjogXCJJZ25pdGVTVEVNIFJlY2VwdGlvblwiLFxuICAgICAgICAgICAgICAgIHNwZWFrZXI6IFwiLVwiLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcIkdXQiA0QTIyMEFcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzY2hlZHVsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvY29udHJvbGxlcnMvZGF5T2YvaW5kZXguanMiLCJpbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgZGVmYXVsdCAoYXBwKSA9PiB7XG4gICAgYXBwLmdldCgnL2FwaS9tZWRpYS9ibHVlX2ZpcmUucG5nJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgIGNvbnN0IF9fZGlybmFtZSA9IHByb2Nlc3MuY3dkKCk7XG4gICAgICAgIHJlcy5zZW5kRmlsZSgnZmlyZV9ibHVlLnBuZycsIHsgcm9vdDogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vY2xpZW50L21lZGlhJykgfSk7XG4gICAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9yb3V0ZXMvbWVkaWFSb3V0ZXMuanMiLCJpbXBvcnQgc2VhcmNoIGZyb20gJy4uL2NvbnRyb2xsZXJzL3NlYXJjaCc7XG5cbmV4cG9ydCBkZWZhdWx0IChhcHApID0+IHtcbiAgICBhcHAucG9zdCgnL2FwaS9zZWFyY2gnLCBzZWFyY2gpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvcm91dGVzL3NlYXJjaFJvdXRlcy5qcyIsImNvbnN0IFVzZXIgPSByZXF1aXJlKCcuLi8uLi9tb2RlbHMnKS5Vc2VyO1xuXG5pbXBvcnQgc2VhcmNoQWxnb3JpdGhtIGZyb20gJy4vc2VhcmNoJyAvLyBHZXQgdGhlIHNlYXJjaCBhbGdvcml0aG1cblxuY29uc3Qgc2VhcmNoID0gKHJlcSwgcmVzKSA9PiB7XG4gICAgcmV0dXJuIFVzZXJcbiAgICAgICAgLmZpbmRBbGwoe30pIC8vIEdldCBhbGwgcXVvdGVzXG4gICAgICAgIC50aGVuKCh1c2VycykgPT4ge1xuICAgICAgICAgICAgLy8gRmlsdGVyIG91dCBwYXNzd29yZCBhdHRyaWJ1dGVzXG4gICAgICAgICAgICB1c2Vycy5mb3JFYWNoKCh1c2VyKSA9PiB7IGRlbGV0ZSB1c2VyLmRhdGFWYWx1ZXMucGFzc3dvcmQgfSk7XG5cbiAgICAgICAgICAgIGxldCB1c2VyRGF0YSA9IHVzZXJzLm1hcCgodXNlcikgPT4gdXNlci5kYXRhVmFsdWVzKTtcblxuICAgICAgICAgICAgLy8gbGV0IHNvcnRlZFVzZXJzID0gdXNlcnM7IC8vIE1vZGlmeSB0aGlzIGFycmF5XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9IHJlcS5ib2R5LnF1ZXJ5OyAvLyBUaGUgc2VhcmNoIHF1ZXJ5XG5cbiAgICAgICAgICAgIC8qKioqKioqKioqKioqKioqIENvZGUgZ29lcyBoZXJlICoqKioqKioqKioqKioqKiovXG4gICAgICAgICAgICBsZXQgc29ydGVkVXNlcnMgPSBzZWFyY2hBbGdvcml0aG0ocXVlcnksIHVzZXJEYXRhKVxuICAgICAgICAgICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoc29ydGVkVXNlcnMpO1xuICAgICAgICB9KSAvLyBSZXR1cm4gcmFua2VkIGFycmF5IG9mIHVzZXJzIGJhc2VkIG9uIHNlYXJjaCBxdWVyeVxuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpXG4gICAgICAgIH0pOyAvLyBFcnJvclxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9jb250cm9sbGVycy9zZWFyY2gvaW5kZXguanMiLCIvLyBjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG4vLyBsZXQgcmF3RGF0YSA9IGZzLnJlYWRGaWxlU3luYygnLi91c2Vycy5qc29uJyk7IFxuLy9cbi8vIC8vIFJlYWQgaW4gdGhlIEpTT04gZGF0YVxuLy8gY29uc3QgdXNlcnMgPSBKU09OLnBhcnNlKHJhd0RhdGEpO1xuXG4vKmxldCByYW5rID0gMDtcbmxldCBzb3J0ZWRVc2VycyA9IHVzZXJzLm1hcCgodXNlcikgPT4ge1xuXHRyYW5rKys7XG5cdHJldHVybiB7XG5cdFx0cmFuaywgXG5cdFx0Li4udXNlcixcblx0fVxufSk7Ki9cblxuLy8gY29uc3QgcXVlcnkgPSBcIlRpbSBtYXRoIGNvZGluZ1wiOyAvLyBUaGUgc2VhcmNoIHF1ZXJ5XG5cbmNvbnN0IHNlYXJjaCA9IChxdWVyeSwgdXNlcnMpID0+IHtcbiAgICAvKioqKioqKioqKioqKioqKiBDb2RlIGdvZXMgaGVyZSAqKioqKioqKioqKioqKioqL1xuICAgIC8qXG4gICAgICogTW9kaWZ5IHRoZSBhcnJheTogc29ydGVkVXNlcnNcbiAgICAgKiAgKG1ha2Ugc3VyZSB0byBtb2RpZnkgdGhlIHJhbmsgYXR0cmlidXRlIHRvIG1hdGNoIGl0cyBvcmRlciBpbiB0aGUgYXJyYXkpXG4gICAgICogVXNlIHRoZSB2YXJpYWJsZSwgcXVlcnksIGFzIHRoZSBzZWFyY2ggcXVlcnlcbiAgICAgKlxuICAgICAqIFJ1biB0aGlzIHNjcmlwdCB1c2luZzpcbiAgICAgKiAgJCBub2RlIHNlYXJjaC5qc1xuICAgICAqL1xuXG4gICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgLy8gY29uc29sZS5sb2coXCJTZWFyY2hpbmcgcXVlcnk6XCIsIHF1ZXJ5KVxuICAgICBcbiAgICAgLy9TcGxpdHRpbmcgcXVlcnkgc3RyaW5nIGludG8gYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAgICB2YXIgcXVlcnlBcnJheSA9IHF1ZXJ5LnNwbGl0KFwiIFwiKTtcblxuICAgIC8vQWRqdXN0aW5nIHRoZSByYW5rIG9mIGVhY2ggdXNlciBieSBpbmNyZW1lbnRpbmcgdGhlIHJhbmsgZWFjaCB0aW1lIG9uZSBvZiB0aGUgd29yZHNcbiAgICAvL2luIHRoZSBxdWVyeUFycmF5IHZhcmlhYmxlIGFwcGVhcnMgaW4gYSB1c2VyJ3MgZGF0YVxuICAgICBzb3J0ZWRVc2VycyA9IHVzZXJzLm1hcCgodXNlcikgPT4ge1xuICAgICAgICByYW5rID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHF1ZXJ5QXJyYXkubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChKU09OLnN0cmluZ2lmeSh1c2VyKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YocXVlcnlBcnJheVtpXS50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmFuaysrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJhbmssXG4gICAgICAgICAgICAuLi51c2VyLFxuICAgICAgICB9XG4gICAgIH0pO1xuXG4gICAgLy9Tb3J0aW5nIGVhY2ggdXNlciBmcm9tIGdyZWF0ZXN0IHJhbmsgdG8gbGVhc3QgcmFua1xuICAgIHNvcnRlZFVzZXJzLnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgICAgcmV0dXJuIGIucmFuayAtIGEucmFuaztcbiAgICB9KTtcblxuICAgIC8vUmVhc3NpZ25pbmcgdGhlIHJhbmsgb2YgZWFjaCB1c2VyIHRvIGJlIHRoZSB1c2VyJ3MgcG9zaXRpb24gKHBsdXMgMSksIHdpdGhpbiB0aGUgYXJyYXlcbiAgICBmb3IoaSA9IDA7IGkgPCBzb3J0ZWRVc2Vycy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIHNvcnRlZFVzZXJzW2ldLnJhbmsgPSBpICsgMTtcbiAgICB9XG5cbiAgICByZXR1cm4gc29ydGVkVXNlcnM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvY29udHJvbGxlcnMvc2VhcmNoL3NlYXJjaC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vcmdhblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1vcmdhblwiXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJvZHktcGFyc2VyXCJcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IHNlc3Npb25zID0gcmVxdWlyZSgnY2xpZW50LXNlc3Npb25zJyk7IC8vIFVzZXIgc2Vzc2lvbnNcblxuY29uc3Qgc2Vzc2lvbkF1dGggPSAoYXBwKSA9PiB7XG4gICAgLy8gRG9jczogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvbm9kZS1jbGllbnQtc2Vzc2lvbnNcbiAgICBhcHAudXNlKHNlc3Npb25zKHtcbiAgICAgICAgY29va2llTmFtZTogJ3Nlc3Npb24nLCAvLyBDb29raWUgbmFtZSBkaWN0YXRlcyB0aGUga2V5IG5hbWUgYWRkZWQgdG8gdGhlIHJlcXVlc3Qgb2JqZWN0XG4gICAgICAgIHNlY3JldDogJ2JsYXJnYWRlZWJsYXJnYmxhcmcnLCAvLyBzaG91bGQgYmUgYSBsYXJnZSB1bmd1ZXNzYWJsZSBzdHJpbmcgKHN0b3JlIGluIGVudmlyb25tZW50IHZhcmlhYmxlcyBldmVudHVhbGx5KVxuICAgICAgICBkdXJhdGlvbjogNCAqIDYwICogNjAgKiAxMDAwLCAvLyBob3cgbG9uZyB0aGUgc2Vzc2lvbiB3aWxsIHN0YXkgdmFsaWQgaW4gbXMgKDQgaG91cnMpXG4gICAgICAgIGFjdGl2ZUR1cmF0aW9uOiAxMDAwICogNjAgKiA2MCAqIDIsIC8vIGlmIGV4cGlyZXNJbiA8IGFjdGl2ZUR1cmF0aW9uLCB0aGUgc2Vzc2lvbiB3aWxsIGJlIGV4dGVuZGVkIGJ5IGFjdGl2ZUR1cmF0aW9uIG1pbGxpc2Vjb25kc1xuICAgIH0pKTtcblxuICAgIGFwcC51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgICAgIC8vIEFQSXMgdGhhdCBjbGllbnQgbXVzdCBiZSBsb2dnZWQgaW4gZm9yXG4gICAgICAgIC8vIEJlc3QgcHJhY3RpY2U6IEFQSXMgdGhhdCBhcmUgYWNjZXNzaWJsZSB2aWEgdGhlIGNsaWVudCBidXQgcmVxdWlyZSBhIGxvZ2luXG4gICAgICAgIC8vIEFQSXMgYXJlIGFscmVhZHkgcHJvdGVjdGVkIGJ5IGEgQmFzaWMgQXV0aCwgdGhpcyBpcyBqdXN0IGEgc2FmZWdhdXJkXG4gICAgICAgIGNvbnN0IGJsYWNrbGlzdGVkID0gW1xuICAgICAgICAgICAgJ1xcL2FwaVxcL3VzZXJzXFwvY3JlYXRlJyxcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgcGF0aCA9IHJlcS5vcmlnaW5hbFVybDtcbiAgICAgICAgaWYgKCFyZXEuc2Vzc2lvbi51c2VyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gc2Vzc2lvbicpO1xuICAgICAgICAgICAgaWYgKG5ldyBSZWdFeHAoYmxhY2tsaXN0ZWQuam9pbignfCcpLCAnaScpLnRlc3QocGF0aCkpIHsgLy8gSWYgb24gdGhlIGJsYWNrbGlzdFxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAxKS5zZW5kKCdQbGVhc2UgbG9nIGluJyk7XG4gICAgICAgICAgICB9IGVsc2UgeyAvLyBBbGxvd2VkXG4gICAgICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFNlc3Npb24gd2l0aCB1c2VyOiAke3JlcS5zZXNzaW9uLnVzZXIudXNlcm5hbWV9YCk7XG4gICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2Vzc2lvbkF1dGg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvc3JjL2NvbmZpZy9zZXNzaW9uLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xpZW50LXNlc3Npb25zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY2xpZW50LXNlc3Npb25zXCJcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=