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
            speaker: "",
            capacity: "",
            location: "",
            notes: ""
        }, {
            time: "9:45 am - 10:00 am",
            session: "Opening Remarks",
            speaker: "IgniteSTEM Directors",
            capacity: "",
            location: "GWB 4A220A",
            notes: "Conference welcome and opening remarks from IgniteSTEM Direcotrs"
        }, {
            time: "10:00 am - 10:45 am",
            session: "Keynote",
            speaker: "Pat Yongpradit, Chief Academic Officer at Code.org",
            capacity: "",
            location: "GWB 4A220A",
            notes: "Keynote by Pat Yongpradit, Chief Academic Officer at Code.org"
        }, {
            time: "11:00 am - 12:30 pm",
            session: "Lightning Talks and Workshops",
            speaker: "Don Buckley (Design Thinking)",
            capacity: 30,
            location: "Baker Field",
            notes: "Design Thinking workshop led by Don Buckley"
        }, {
            time: "11:00 am - 12:30 pm",
            session: "Lightning Talks and Workshops",
            speaker: "Godwyn Morris (Makerspace)",
            capacity: 50,
            location: "GWB 4A220A",
            notes: "Makerspace session led by Godwyn Morris"
        }, {
            time: "11:00 am - 12:30 pm",
            session: "Lightning Talks and Workshops",
            speaker: "IgniteSTEM Design Thinking",
            capacity: 20,
            location: "Empire State",
            notes: "Design Thinking workshop led by IgniteSTEMers"
        }, {
            time: "11:00 am - 12:30 pm",
            session: "Lightning Talks and Workshops",
            speaker: "Workshops for Teachers in Tech",
            capacity: 10,
            location: "Philharmonic",
            notes: "Technology in Teaching led by Aankit Patel"
        }, {
            time: "11:00 am - 12:30 pm",
            session: "Lightning Talks and Workshops",
            speaker: "Council for Opportunity in Education",
            capacity: 10,
            location: "Battery Park",
            notes: "Developing STEM Learners: Thinking Outside of the Classroom"
        }, {
            time: "11:00 am - 12:30 pm",
            session: "Lightning Talks and Workshops",
            speaker: "IgniteSTEM Team Hackathon",
            capacity: 20,
            location: "Apollo",
            notes: "Hack-a-thon workshop (working in small groups)"
        }, {
            time: "11:00 am - 12:30 pm",
            session: "Lightning Talks and Workshops",
            speaker: "Chris Harris + Jennifer Kressler Duda",
            capacity: 10,
            location: "Riverside Park",
            notes: "Coding and Robots in the Special Needs Classroom"
        }, {
            time: "12:30 pm - 1:15 pm",
            session: "Lunch",
            speaker: "",
            capacity: "",
            location: "GWB 4A220A",
            notes: ""
        }, {
            time: "1:30 pm - 2:15 pm",
            session: "EdTech Panel",
            speaker: "Labster",
            capacity: "",
            location: "GWB 4A220A",
            notes: "Using edTech in the classroom: Q/A with three different areas"
        }, {
            time: "1:30 pm - 2:15 pm",
            session: "EdTech Panel",
            speaker: "Jack DeFuria (Bolt Learning)",
            capacity: "",
            location: "GWB 4A220A",
            notes: ""
        }, {
            time: "1:30 pm - 2:15 pm",
            session: "EdTech Panel",
            speaker: "Chris Harris + Jennifer Kressler Duda",
            capacity: "",
            location: "GWB 4A220A",
            notes: ""
        }, {
            time: "2:15 pm - 3:00 pm",
            session: "Keynote",
            speaker: "Jonathan Rochelle, Director of Product Management at Google Education",
            capacity: "",
            location: "GWB 4A220A",
            notes: "Keynote and Q/A by Jonathan Rochelle, Director of Product Management at Google Education"
        }, {
            time: "3:15 pm - 4:00 pm",
            session: "Unconference Session",
            speaker: "",
            capacity: "",
            location: "(tbd- info will be given to attendees at a later date)",
            notes: "Attendee-driven small group unconference and curriculum design sessions"
        }, {
            time: "4:15 pm - 4:30 pm",
            session: "Closing Remarks",
            speaker: "IgniteSTEM Directors",
            capacity: "",
            location: "GWB 4A220A",
            notes: "Closing Remarks from IgniteSTEM"
        }, {
            time: "4:30 pm - 6:00 pm",
            session: "IgniteSTEM Reception",
            speaker: "All Conference",
            capacity: "",
            location: "GWB 4A220A",
            notes: "Hack-in-a-box distribution and reception featuring drinks and snacks"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjc1MTA1OWMzYmViNWMzZjcxM2YiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvbW9kZWxzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1wb2x5ZmlsbFwiIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9yb3V0ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9yb3V0ZXMvYXBpUm91dGVzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvY29udHJvbGxlcnMvdGVzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL3JvdXRlcy91c2VyUm91dGVzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvY29udHJvbGxlcnMvdXNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcXVlbGl6ZVwiIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvY29uZmlnL2NvbmZpZy5qc29uIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvcm91dGVzL2xvZ2luUm91dGVzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvY29udHJvbGxlcnMvbG9naW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9yb3V0ZXMvZGF5T2ZSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy9kYXlPZi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL3JvdXRlcy9tZWRpYVJvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL3JvdXRlcy9zZWFyY2hSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy9zZWFyY2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy9zZWFyY2gvc2VhcmNoLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb25maWcvc2Vzc2lvbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGllbnQtc2Vzc2lvbnNcIiJdLCJuYW1lcyI6WyJmcyIsInBhdGgiLCJjb25maWdGaWxlIiwicmVxdWlyZSIsImVudiIsInByb2Nlc3MiLCJOT0RFX0VOViIsIl9fZGlybmFtZSIsImN3ZCIsImN1cnJlbnREaXIiLCJqb2luIiwiZmlsZW5hbWUiLCJtb2R1bGUiLCJ1bmRlZmluZWQiLCJiYXNlbmFtZSIsImRiIiwic2VxdWVsaXplIiwiREFUQUJBU0VfVVJMIiwiY29uZmlnIiwiZGF0YWJhc2UiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwicmVhZGRpclN5bmMiLCJmaWx0ZXIiLCJmaWxlIiwiaW5kZXhPZiIsInNsaWNlIiwiZm9yRWFjaCIsIm1vZGVsIiwibmFtZSIsIk9iamVjdCIsImtleXMiLCJtb2RlbE5hbWUiLCJhc3NvY2lhdGUiLCJTZXF1ZWxpemUiLCJleHBvcnRzIiwicG9ydCIsInBhcnNlSW50IiwiUE9SVCIsInNldCIsImxpc3RlbiIsImV4cHJlc3MiLCJsb2dnZXIiLCJib2R5UGFyc2VyIiwic2Vzc2lvbkF1dGgiLCJhcHAiLCJhbGwiLCJyZXEiLCJyZXMiLCJuZXh0IiwiaGVhZGVyIiwibWV0aG9kIiwic2VuZCIsInVzZSIsImpzb24iLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJnZXQiLCJzdGF0dXMiLCJzZW5kRmlsZSIsInJvb3QiLCJ0ZXN0RnVuY3Rpb24iLCJ0ZXN0RnVuY3Rpb24yIiwicG9zdCIsIlVzZXIiLCJsaXN0IiwiZmluZEFsbCIsInRoZW4iLCJ1c2VycyIsInVzZXIiLCJkYXRhVmFsdWVzIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiY2hlY2tVc2VybmFtZSIsImJvZHkiLCJ3aGVyZSIsInVzZXJuYW1lQXZhaWxhYmxlIiwibGVuZ3RoIiwiYXZhaWxhYmxlIiwiY3JlYXRlVXNlciIsImVtYWlsIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsIm9yZ2FuaXphdGlvbiIsImVycm9ycyIsImNyZWF0ZSIsImxvZ2luIiwiZGF0YSIsInN1Y2Nlc3MiLCJmaW5kT25lIiwic2Vzc2lvbiIsImxvZ291dCIsInByZXZpb3VzVXNlciIsInJlc2V0IiwiY3VycmVudFVzZXIiLCJsb2dnZWRfaW4iLCJzY2hlZHVsZSIsInRpbWUiLCJzcGVha2VyIiwiY2FwYWNpdHkiLCJsb2NhdGlvbiIsIm5vdGVzIiwic2VhcmNoIiwidXNlckRhdGEiLCJtYXAiLCJxdWVyeSIsInNvcnRlZFVzZXJzIiwicXVlcnlBcnJheSIsInNwbGl0IiwicmFuayIsImkiLCJKU09OIiwic3RyaW5naWZ5IiwidG9Mb3dlckNhc2UiLCJzb3J0IiwiYSIsImIiLCJzZXNzaW9ucyIsImNvb2tpZU5hbWUiLCJzZWNyZXQiLCJkdXJhdGlvbiIsImFjdGl2ZUR1cmF0aW9uIiwiYmxhY2tsaXN0ZWQiLCJvcmlnaW5hbFVybCIsIlJlZ0V4cCIsInRlc3QiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFD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QUFNMEUsY0FBYyxDQUNoQixzQkFEZ0IsQ0FBcEI7QUFHQSxZQUFNMUgsT0FBTzhDLElBQUk2RSxXQUFqQjtBQUNBLFlBQUksQ0FBQzdFLElBQUk0QyxPQUFKLENBQVl0QixJQUFqQixFQUF1QjtBQUNuQkUsb0JBQVFDLEdBQVIsQ0FBWSxZQUFaO0FBQ0EsZ0JBQUksSUFBSXFELE1BQUosQ0FBV0YsWUFBWWpILElBQVosQ0FBaUIsR0FBakIsQ0FBWCxFQUFrQyxHQUFsQyxFQUF1Q29ILElBQXZDLENBQTRDN0gsSUFBNUMsQ0FBSixFQUF1RDtBQUFFO0FBQ3JEK0Msb0JBQUlVLE1BQUosQ0FBVyxHQUFYLEVBQWdCTixJQUFoQixDQUFxQixlQUFyQjtBQUNILGFBRkQsTUFFTztBQUFFO0FBQ0xIO0FBQ0g7QUFDSixTQVBELE1BT087QUFDSHNCLG9CQUFRQyxHQUFSLGdDQUFrQ3pCLElBQUk0QyxPQUFKLENBQVl0QixJQUFaLENBQWlCakQsUUFBbkQ7QUFDQTZCO0FBQ0g7QUFDSixLQW5CRDtBQW9CSCxDQTdCRDs7QUErQkFyQyxPQUFPdUIsT0FBUCxHQUFpQlMsV0FBakIsQzs7Ozs7O0FDakNBLDRDIiwiZmlsZSI6ImRpc3QvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2NzUxMDU5YzNiZWI1YzNmNzEzZiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gRVM2LXN0eWxlIGltcG9ydHNcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgU2VxdWVsaXplIGZyb20gJ3NlcXVlbGl6ZSc7XG5cbmNvbnN0IGNvbmZpZ0ZpbGUgID0gcmVxdWlyZSgnLi4vY29uZmlnL2NvbmZpZy5qc29uJyk7XG5cbnZhciBlbnYgICAgICAgICAgICAgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnOyAvLyBEZXRlcm1pbmUgaWYgdXNpbmcgZGV2ZWxvcG1lbnRcbmNvbnN0IF9fZGlybmFtZSAgICAgPSBwcm9jZXNzLmN3ZCgpOyAvLyBDb3VsZCBicmVhayBvbiBwcm9kXG5jb25zdCBjdXJyZW50RGlyID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vc2VydmVyL3NyYy9tb2RlbHMnKTtcblxuLy8gUmVndWxhciBgbW9kdWxlLmZpbGVuYW1lYCBpcyB1bmRlZmluZWQgaW4gbG9jYWwgZGV2XG5jb25zdCBmaWxlbmFtZSA9IChtb2R1bGUuZmlsZW5hbWUgIT09IHVuZGVmaW5lZCkgPyBtb2R1bGUuZmlsZW5hbWUgOiAnaW5kZXguanMnO1xudmFyIGJhc2VuYW1lICA9IHBhdGguYmFzZW5hbWUoZmlsZW5hbWUpO1xuXG52YXIgZGIgPSB7fTtcblxuLy8gSSB1c2UgdGhlIG5vZGUtY29uZmlnIHBhY2thZ2UgdG8gbWFuYWdlIHRoZSBEQiBjb25maWcgeW91IGNhbiBjaG9vc2Vcbi8vIHRvIHN0aWNrIHdpdGggdGhlIG9yaWdpbmFsIHZlcnNpb24uIEFuZCBJIHJlbW92ZWQgZW52aXJvbm1lbnQgdmFyaWFibGVcbi8vIHN1cHBvcnQgYmVjYXVzZSBJIGRvbid0IG5lZWQgaXQuXG5sZXQgc2VxdWVsaXplID0ge307XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYpIHtcbiAgICAvLyBGcm9tIHRoZSBlbnZpcm9ubWVudCwgZXh0cmFjdCB0aGUga2V5IHdpdGggdGhlIG5hbWUgcHJvdmlkZWQgaW4gdGhlIGNvbmZpZyBhcyB1c2VfZW52X3ZhcmlhYmxlXG4gICAgLy8gYW5kIHVzZSB0aGF0IHRvIGVzdGFibGlzaCBhIGNvbm5lY3Rpb24gdG8gb3VyIGRhdGFiYXNlLlxuICAgIHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUocHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMKTsgLy8gRXN0YWJsaXNoIGNvbm5lY3Rpb24gdXNpbmcgZW52aXJvbm1lbnQgdmFyaWFibGVzXG5cbn0gZWxzZSB7XG4gICAgdmFyIGNvbmZpZyAgICA9IGNvbmZpZ0ZpbGVbZW52XTsgLy8gSWYgbG9jYWwsIHVzZSBjb25maWdcblxuICAgIHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUoY29uZmlnLmRhdGFiYXNlLCBjb25maWcudXNlcm5hbWUsIGNvbmZpZy5wYXNzd29yZCwgY29uZmlnKTsgLy8gQ29ubmVjdFxufVxuXG5mc1xuICAgIC5yZWFkZGlyU3luYyhjdXJyZW50RGlyKVxuICAgIC5maWx0ZXIoZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICByZXR1cm4gKGZpbGUuaW5kZXhPZignLicpICE9PSAwKSAmJiAoZmlsZSAhPT0gYmFzZW5hbWUpICYmIChmaWxlLnNsaWNlKC0zKSA9PT0gJy5qcycpO1xuICAgIH0pXG4gICAgLmZvckVhY2goZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICB2YXIgbW9kZWwgPSBzZXF1ZWxpemUuaW1wb3J0KHBhdGguam9pbihjdXJyZW50RGlyLCBmaWxlKSk7XG4gICAgICAgIGRiW21vZGVsLm5hbWVdID0gbW9kZWw7XG4gICAgfSk7XG5cbk9iamVjdC5rZXlzKGRiKS5mb3JFYWNoKGZ1bmN0aW9uKG1vZGVsTmFtZSkge1xuICAgIGlmIChkYlttb2RlbE5hbWVdLmFzc29jaWF0ZSkge1xuICAgICAgICBkYlttb2RlbE5hbWVdLmFzc29jaWF0ZShkYik7XG4gICAgfVxufSk7XG5cbmRiLnNlcXVlbGl6ZSA9IHNlcXVlbGl6ZTtcbmRiLlNlcXVlbGl6ZSA9IFNlcXVlbGl6ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBkYjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvbW9kZWxzL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1wb2x5ZmlsbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQXBwbGljYXRpb24gZW50cnksIHNldHRpbmcgdXAgc2VydmVyXG5pbXBvcnQgYXBwIGZyb20gJy4vYXBwJzsgLy8gVGhlIGV4cHJlc3MgYXBwIHdlIGp1c3QgY3JlYXRlZFxuXG5jb25zdCBwb3J0ID0gcGFyc2VJbnQocHJvY2Vzcy5lbnYuUE9SVCwgMTApIHx8IDU1NTU7XG5hcHAuc2V0KCdwb3J0JywgcG9ydCk7XG5cbi8vIDAuMC4wLjAgbWFrZXMgaXQgYXZhaWxhYmxlIG9uIHlvdXIgbG9jYWwgbmV0d29ya1xuLy8gYXBwLmxpc3Rlbihwb3J0LCAnMC4wLjAuMCcpO1xuYXBwLmxpc3Rlbihwb3J0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvaW5kZXguanMiLCJpbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcblxuY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbmNvbnN0IGxvZ2dlciA9IHJlcXVpcmUoJ21vcmdhbicpO1xuY29uc3QgYm9keVBhcnNlciA9IHJlcXVpcmUoJ2JvZHktcGFyc2VyJyk7XG5jb25zdCBzZXNzaW9uQXV0aCA9IHJlcXVpcmUoJy4vY29uZmlnL3Nlc3Npb24nKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbmxldCBfX2Rpcm5hbWUgPSBwcm9jZXNzLmN3ZCgpO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7IC8vIFNldHVwIGV4cHJlc3MgYXBwXG5cbi8vIEFsbG93IGNyb3NzIG9yaWdpbiByZXF1ZXN0cyB3aXRoIGF1dGhvcml6YXRpb24gKGZvciBBUEkgcHVycG9zZXMpXG5hcHAuYWxsKCcqJywgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKTtcbiAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJywgJ1BVVCwgR0VULCBQT1NULCBERUxFVEUsIE9QVElPTlMnKTtcbiAgICByZXMuaGVhZGVyKFxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsXG4gICAgICAgICdhY2NlcHQsIGNvbnRlbnQtdHlwZSwgeC1wYXJzZS1hcHBsaWNhdGlvbi1pZCwgeC1wYXJzZS1yZXN0LWFwaS1rZXksIHgtcGFyc2Utc2Vzc2lvbi10b2tlbiwgQVVUSE9SSVpBVElPTidcbiAgICApO1xuXG4gICAgLy8gSW50ZXJjZXB0IE9QVElPTlMgbWV0aG9kXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdPUFRJT05TJykge1xuICAgICAgICByZXMuc2VuZCgyMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5leHQoKTtcbiAgICB9XG59KTtcblxuLy8gU2V0dXAgYXV0aGVudGljYXRpb24gYW5kIHNlY3VyaXR5XG5zZXNzaW9uQXV0aChhcHApO1xuXG4vLyBMb2cgcmVxdWVzdHMgdG8gdGhlIGNvbnNvbGUuXG5hcHAudXNlKGxvZ2dlcignZGV2JykpO1xuXG4vLyBQYXJzZSBpbmNvbWluZyByZXF1ZXN0cyBkYXRhIChodHRwczovL2dpdGh1Yi5jb20vZXhwcmVzc2pzL2JvZHktcGFyc2VyKVxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiBmYWxzZSB9KSk7XG5hcHAudXNlKCcvc2NyaXB0cycsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi8uLi9jbGllbnQvZGlzdCcpKSk7XG5cbi8vIFJlcXVpcmUgcm91dGVzIGFuZCBzaW11bHRhbmVvdXNseSBhdHRhY2ggYXBwXG5yb3V0ZXMoYXBwKTtcblxuLy8gQ2F0Y2ggYWxsIGlmIHRoZSByb3V0ZXMgZG9lc24ndCBmaW5kIGEgdmFsaWQgVVJMXG5hcHAuZ2V0KCcqJywgKHJlcSwgcmVzKSA9PiByZXMuc3RhdHVzKDIwMCkuc2VuZCgnTm90aGluZyBoZXJlIHlldC4uLicpKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9hcHAuanMiLCJpbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuXG4vLyBGdW5jdGlvbmFsIGNvbnRyb2xsZXJzIGdvIGhlcmU6XG4vLyAuLi5cblxuLy8gTWFrZSBtb2R1bGFyIHNvIG5vdCBhbGwgcm91dGVzIGFyZSBoZXJlXG5pbXBvcnQgYXBpUm91dGVzIGZyb20gJy4vYXBpUm91dGVzJztcbmltcG9ydCB1c2VyUm91dGVzIGZyb20gJy4vdXNlclJvdXRlcyc7XG5pbXBvcnQgbG9naW5Sb3V0ZXMgZnJvbSAnLi9sb2dpblJvdXRlcyc7XG5pbXBvcnQgZGF5T2ZSb3V0ZXMgZnJvbSAnLi9kYXlPZlJvdXRlcyc7XG5pbXBvcnQgbWVkaWFSb3V0ZXMgZnJvbSAnLi9tZWRpYVJvdXRlcyc7XG5pbXBvcnQgc2VhcmNoUm91dGVzIGZyb20gJy4vc2VhcmNoUm91dGVzJztcblxuLy8gUmVxdWlyZXMgYW4gYXBwIGFzIGFuIGlucHV0IHNvIGNhbiBkaXJlY3QgdGhlIHVzZXIgYWNjb3JkaW5nbHlcbmV4cG9ydCBkZWZhdWx0IChhcHApID0+IHtcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKiAgUm91dGVzICAqKioqKioqKioqKioqKioqKioqKiAqL1xuICAgIGFwaVJvdXRlcyhhcHApO1xuICAgIHVzZXJSb3V0ZXMoYXBwKTtcbiAgICBsb2dpblJvdXRlcyhhcHApO1xuICAgIGRheU9mUm91dGVzKGFwcCk7XG4gICAgbWVkaWFSb3V0ZXMoYXBwKTtcbiAgICBzZWFyY2hSb3V0ZXMoYXBwKTtcblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqICBDbGllbnQgICoqKioqKioqKioqKioqKioqKioqICovXG5cbiAgICAvLyBTZXJ2ZSB0aGUgc3RhdGljIGNsaWVudCBpbmRleC5qcyBidWlsZCBmaWxlXG4gICAgYXBwLmdldCgnL3NjcmlwdHMvaW5kZXguanMnLCAocmVxLCByZXMpID0+IHtcbiAgICAgICAgY29uc3QgX19kaXJuYW1lID0gcHJvY2Vzcy5jd2QoKTtcbiAgICAgICAgcmVzLnNlbmRGaWxlKCdpbmRleC5qcycsIHsgcm9vdDogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vY2xpZW50L2Rpc3QnKSB9KTtcbiAgICB9KTtcblxuICAgIGFwcC5nZXQoJy9mYXZpY29uLnBuZycsIChyZXEsIHJlcykgPT4ge1xuICAgICAgICBjb25zdCBfX2Rpcm5hbWUgPSBwcm9jZXNzLmN3ZCgpO1xuICAgICAgICByZXMuc2VuZEZpbGUoJ2Zhdmljb24ucG5nJywgeyByb290OiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9jbGllbnQvZGlzdCcpIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gQ2xpZW50IGFwcCBlbnRyeSBpbmRleC5odG1sIGZpbGUgLSByZWFjdCByb3V0ZXJcbiAgICBhcHAuZ2V0KCcqJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgIGNvbnN0IF9fZGlybmFtZSA9IHByb2Nlc3MuY3dkKCk7XG4gICAgICAgIHJlcy5zZW5kRmlsZSgnaW5kZXguaHRtbCcsIHsgcm9vdDogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vY2xpZW50L2Rpc3QnKSB9KTsgLy8gUmVuZGVyIGNsaWVudFxuICAgIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvcm91dGVzL2luZGV4LmpzIiwiaW1wb3J0IHsgdGVzdEZ1bmN0aW9uIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvdGVzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IChhcHApID0+IHtcbiAgICBhcHAuZ2V0KCcvYXBpL3Rlc3QnLCB0ZXN0RnVuY3Rpb24pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvcm91dGVzL2FwaVJvdXRlcy5qcyIsImV4cG9ydCBjb25zdCB0ZXN0RnVuY3Rpb24gPSAocmVxLCByZXMpID0+IHtcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCgnVGhpcyBpcyBhIHRlc3QnKTtcbn07XG5cbmV4cG9ydCBjb25zdCB0ZXN0RnVuY3Rpb24yID0gKHJlcSwgcmVzKSA9PiB7XG4gICAgcmVzLnN0YXR1cygyMDApLnNlbmQoJ1RoaXMgaXMgdGVzdCAjMicpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvY29udHJvbGxlcnMvdGVzdC9pbmRleC5qcyIsImltcG9ydCB7IGNyZWF0ZVVzZXIsIGxpc3QsIGNoZWNrVXNlcm5hbWUgfSBmcm9tICcuLi9jb250cm9sbGVycy91c2Vycyc7XG5cbmV4cG9ydCBkZWZhdWx0IChhcHApID0+IHtcbiAgICBhcHAucG9zdCgnL2FwaS91c2Vycy9jcmVhdGUnLCBjcmVhdGVVc2VyKTtcbiAgICBhcHAuZ2V0KCcvYXBpL3VzZXJzJywgbGlzdCk7XG4gICAgYXBwLnBvc3QoJy9hcGkvdXNlcnMvY2hlY2tVc2VybmFtZScsIGNoZWNrVXNlcm5hbWUpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvcm91dGVzL3VzZXJSb3V0ZXMuanMiLCJjb25zdCBVc2VyID0gcmVxdWlyZSgnLi4vLi4vbW9kZWxzJykuVXNlcjtcblxuZXhwb3J0IGNvbnN0IGxpc3QgPSAocmVxLCByZXMpID0+IHtcbiAgICByZXR1cm4gVXNlclxuICAgICAgICAuZmluZEFsbCh7fSkgLy8gR2V0IGFsbCBxdW90ZXNcbiAgICAgICAgLnRoZW4oKHVzZXJzKSA9PiB7XG4gICAgICAgICAgICAvLyBGaWx0ZXIgb3V0IHBhc3N3b3JkIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgIHVzZXJzLmZvckVhY2goKHVzZXIpID0+IHsgZGVsZXRlIHVzZXIuZGF0YVZhbHVlcy5wYXNzd29yZCB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJzKTtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHVzZXJzKTtcbiAgICAgICAgfSkgLy8gUmV0dXJuIGFycmF5IG9mIHF1b3Rlc1xuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTsgLy8gRXJyb3Jcbn07XG5cbmV4cG9ydCBjb25zdCBjaGVja1VzZXJuYW1lID0gKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICB1c2VybmFtZSxcbiAgICB9ID0gcmVxLmJvZHk7IC8vIEdldCB1c2VybmFtZVxuXG4gICAgLy8gTm8gdXNlcm5hbWUgcHJvdmlkZWRcbiAgICBpZiAodXNlcm5hbWUgPT0gbnVsbCkge1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4gVXNlci5cbiAgICAgICAgZmluZEFsbCh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lLCAvLyBTZWUgaWYgdXNlciBleGlzdHMgd2l0aCB0aGF0IHVzZXJuYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCh1c2VycykgPT4ge1xuICAgICAgICAgICAgdXNlcm5hbWVBdmFpbGFibGUgPSAodXNlcnMubGVuZ3RoID09IDApOyAvLyBVc2VybmFtZSBhdmFpbGFibGUgaWYgbm9uZVxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICAgICAgICAgIGF2YWlsYWJsZTogdXNlcm5hbWVBdmFpbGFibGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7IC8vIEVycm9yXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVVc2VyID0gKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0NyZWF0ZWQgdXNlcicpO1xuICAgIGNvbnN0IHtcbiAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgIGVtYWlsLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgZmlyc3RfbmFtZSxcbiAgICAgICAgbGFzdF9uYW1lLFxuICAgICAgICBvcmdhbml6YXRpb24sXG4gICAgfSA9IHJlcS5ib2R5OyAvLyBJbmZvcm1hdGlvbiBmcm9tIHRoZSByZXF1ZXN0IGJvZHkgSlNPTiBkYXRhXG5cbiAgICAvLyBTdGFydCB3aXRoIG5vIGVycm9yc1xuICAgIGxldCBlcnJvcnMgPSB7fVxuXG4gICAgcmV0dXJuIFVzZXJcbiAgICAgICAgLmNyZWF0ZSh7XG4gICAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgICBmaXJzdF9uYW1lLFxuICAgICAgICAgICAgbGFzdF9uYW1lLFxuICAgICAgICAgICAgb3JnYW5pemF0aW9uLFxuICAgICAgICB9KVxuICAgICAgICAudGhlbigodXNlcikgPT4geyAvLyBTdWNjZXNzOiBjcmVhdGVkIG5ldyBxdW90ZSBlbnRyeVxuICAgICAgICAgICAgZGVsZXRlIHVzZXIuZGF0YVZhbHVlcy5wYXNzd29yZDsgLy8gUmVtb3ZlIHBhc3N3b3JkXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh1c2VyKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKTtcbiAgICAgICAgfSk7IC8vIEVycm9yXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9jb250cm9sbGVycy91c2Vycy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmc1wiXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzZXF1ZWxpemVcIlxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJkZXZlbG9wbWVudFwiOntcInVzZXJuYW1lXCI6XCJrZXZpbmhvdVwiLFwicGFzc3dvcmRcIjpudWxsLFwiZGF0YWJhc2VcIjpcImlnbml0ZS1zdGVtLWRldlwiLFwiaG9zdFwiOlwiMTI3LjAuMC4xXCIsXCJwb3J0XCI6NTQzMixcImRpYWxlY3RcIjpcInBvc3RncmVzXCJ9LFwidGVzdFwiOntcInVzZXJuYW1lXCI6XCJrZXZpbmhvdVwiLFwicGFzc3dvcmRcIjpudWxsLFwiZGF0YWJhc2VcIjpcImlnbml0ZS1zdGVtLXRlc3RcIixcImhvc3RcIjpcIjEyNy4wLjAuMVwiLFwicG9ydFwiOjU0MzIsXCJkaWFsZWN0XCI6XCJwb3N0Z3Jlc1wifSxcInByb2R1Y3Rpb25cIjp7XCJ1c2VfZW52X3ZhcmlhYmxlXCI6XCJEQVRBQkFTRV9VUkxcIn19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zZXJ2ZXIvc3JjL2NvbmZpZy9jb25maWcuanNvblxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IGxvZ2luLCBsb2dvdXQsIGN1cnJlbnRVc2VyIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvbG9naW4nO1xuXG5leHBvcnQgZGVmYXVsdCAoYXBwOiBleHByZXNzLkFwcGxpY2F0aW9uKSA9PiB7XG4gICAgYXBwLnBvc3QoJy9hcGkvbG9naW4nLCBsb2dpbik7XG4gICAgYXBwLmdldCgnL2FwaS9sb2dvdXQnLCBsb2dvdXQpO1xuICAgIGFwcC5nZXQoJy9hcGkvdXNlcnMvY3VycmVudCcsIGN1cnJlbnRVc2VyKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvcm91dGVzL2xvZ2luUm91dGVzLmpzIiwiY29uc3QgVXNlciA9IHJlcXVpcmUoJy4uLy4uL21vZGVscy9pbmRleC5qcycpLlVzZXI7XG5cbi8qXG4gKiBQYXJhbWV0ZXJzOlxuICogIHJlcS5ib2R5IHtcbiAqICAgICAgdXNlcm5hbWUsXG4gKiAgICAgIHBhc3N3b3JkLFxuICogIH1cbiAqL1xuZXhwb3J0IGNvbnN0IGxvZ2luID0gKHJlcTogUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xuICAgIGlmIChkYXRhLnVzZXJuYW1lID09PSB1bmRlZmluZWQgfHwgZGF0YS5wYXNzd29yZCA9PT0gdW5kZWZpbmVkKSB7IC8vIEVtcHR5IGF1dGhlbnRpY2F0aW9uXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgZXJyb3I6ICdQbGVhc2Ugc3VibWl0IGEgdXNlcm5hbWUgYW5kIHBhc3N3b3JkJyxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjsgLy8gVGVybWluYXRlXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGBVc2VybmFtZTogJHtkYXRhLnVzZXJuYW1lfWApO1xuICAgIHJldHVybiBVc2VyXG4gICAgICAgIC5maW5kT25lKHtcbiAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IGRhdGEudXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGRhdGEucGFzc3dvcmQsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pIC8vIEdldCBhbGwgcXVvdGVzXG4gICAgICAgIC50aGVuKCh1c2VyOiBVc2VyKSA9PiB7XG4gICAgICAgICAgICBpZiAodXNlciA9PSBudWxsKSB7IC8vIEludmFsaWQgY3JlZGVudGlhbHNcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogJ0ludmFsaWQgdXNlcm5hbWUgJiBwYXNzd29yZCcsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBWYWxpZCBjcmVkZW50aWFsc1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFN1Y2Nlc3NmdWxseSBsb2dnZWQgaW4gdXNlcjogJHt1c2VyLnVzZXJuYW1lfWApO1xuICAgICAgICAgICAgZGVsZXRlIHVzZXIucGFzc3dvcmQ7IC8vIERvbid0IHNlbmQgYmFjayBwYXNzd29yZFxuICAgICAgICAgICAgcmVxLnNlc3Npb24udXNlciA9IHVzZXI7IC8vIFNldCBjb29raWVcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHVzZXIsIC8vIFNlbmQgdXNlclxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pIC8vIFJldHVybiBhcnJheSBvZiBxdW90ZXNcbiAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTsgLy8gRXJyb3IgaW4gcmVxdWVzdFxufVxuXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKHJlcTogUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSA9PiB7XG4gICAgY29uc3QgcHJldmlvdXNVc2VyID0gcmVxLnNlc3Npb24udXNlcjtcbiAgICByZXEuc2Vzc2lvbi5yZXNldCgpO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgdXNlcjogcHJldmlvdXNVc2VyLFxuICAgIH0pO1xufVxuXG5leHBvcnQgY29uc3QgY3VycmVudFVzZXIgPSAocmVxOiBSZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpID0+IHtcbiAgICBpZiAocmVxLnNlc3Npb24udXNlcikge1xuICAgICAgICBkZWxldGUgcmVxLnNlc3Npb24udXNlci5wYXNzd29yZDsgLy8gUmVtb3ZlIHBhc3N3b3JkXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBsb2dnZWRfaW46IHRydWUsXG4gICAgICAgICAgICB1c2VyOiByZXEuc2Vzc2lvbi51c2VyLFxuICAgICAgICB9O1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgbG9nZ2VkX2luOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoZGF0YSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9jb250cm9sbGVycy9sb2dpbi9pbmRleC5qcyIsImltcG9ydCBzY2hlZHVsZSBmcm9tICcuLi9jb250cm9sbGVycy9kYXlPZic7XG5cbmV4cG9ydCBkZWZhdWx0IChhcHApID0+IHtcbiAgICBhcHAuZ2V0KCcvYXBpL3NjaGVkdWxlJywgc2NoZWR1bGUpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvcm91dGVzL2RheU9mUm91dGVzLmpzIiwiLyogRGV0YWlsczpcbiAqICBkYXRlOiBJU08gODYwMVxuICpcbiAqL1xuY29uc3Qgc2NoZWR1bGUgPSAocmVxLCByZXMpID0+IHtcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGltZTogXCI5OjAwIGFtIC0gOTo0NSBhbVwiLFxuICAgICAgICAgICAgICAgIHNlc3Npb246IFwiUmVnaXN0cmF0aW9uICsgQ2FzdWFsIEJyZWFrZmFzdFwiLFxuICAgICAgICAgICAgICAgIHNwZWFrZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgY2FwYWNpdHk6IFwiXCIsXG4gICAgICAgICAgICAgICAgbG9jYXRpb246IFwiXCIsXG4gICAgICAgICAgICAgICAgbm90ZXM6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGltZTogXCI5OjQ1IGFtIC0gMTA6MDAgYW1cIixcbiAgICAgICAgICAgICAgICBzZXNzaW9uOiBcIk9wZW5pbmcgUmVtYXJrc1wiLFxuICAgICAgICAgICAgICAgIHNwZWFrZXI6IFwiSWduaXRlU1RFTSBEaXJlY3RvcnNcIixcbiAgICAgICAgICAgICAgICBjYXBhY2l0eTogXCJcIixcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogXCJHV0IgNEEyMjBBXCIsXG4gICAgICAgICAgICAgICAgbm90ZXM6IFwiQ29uZmVyZW5jZSB3ZWxjb21lIGFuZCBvcGVuaW5nIHJlbWFya3MgZnJvbSBJZ25pdGVTVEVNIERpcmVjb3Ryc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpbWU6IFwiMTA6MDAgYW0gLSAxMDo0NSBhbVwiLFxuICAgICAgICAgICAgICAgIHNlc3Npb246IFwiS2V5bm90ZVwiLFxuICAgICAgICAgICAgICAgIHNwZWFrZXI6IFwiUGF0IFlvbmdwcmFkaXQsIENoaWVmIEFjYWRlbWljIE9mZmljZXIgYXQgQ29kZS5vcmdcIixcbiAgICAgICAgICAgICAgICBjYXBhY2l0eTogXCJcIixcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogXCJHV0IgNEEyMjBBXCIsXG4gICAgICAgICAgICAgICAgbm90ZXM6IFwiS2V5bm90ZSBieSBQYXQgWW9uZ3ByYWRpdCwgQ2hpZWYgQWNhZGVtaWMgT2ZmaWNlciBhdCBDb2RlLm9yZ1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpbWU6IFwiMTE6MDAgYW0gLSAxMjozMCBwbVwiLFxuICAgICAgICAgICAgICAgIHNlc3Npb246IFwiTGlnaHRuaW5nIFRhbGtzIGFuZCBXb3Jrc2hvcHNcIixcbiAgICAgICAgICAgICAgICBzcGVha2VyOiBcIkRvbiBCdWNrbGV5IChEZXNpZ24gVGhpbmtpbmcpXCIsXG4gICAgICAgICAgICAgICAgY2FwYWNpdHk6IDMwLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcIkJha2VyIEZpZWxkXCIsXG4gICAgICAgICAgICAgICAgbm90ZXM6IFwiRGVzaWduIFRoaW5raW5nIHdvcmtzaG9wIGxlZCBieSBEb24gQnVja2xleVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpbWU6IFwiMTE6MDAgYW0gLSAxMjozMCBwbVwiLFxuICAgICAgICAgICAgICAgIHNlc3Npb246IFwiTGlnaHRuaW5nIFRhbGtzIGFuZCBXb3Jrc2hvcHNcIixcbiAgICAgICAgICAgICAgICBzcGVha2VyOiBcIkdvZHd5biBNb3JyaXMgKE1ha2Vyc3BhY2UpXCIsXG4gICAgICAgICAgICAgICAgY2FwYWNpdHk6IDUwLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcIkdXQiA0QTIyMEFcIixcbiAgICAgICAgICAgICAgICBub3RlczogXCJNYWtlcnNwYWNlIHNlc3Npb24gbGVkIGJ5IEdvZHd5biBNb3JyaXNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aW1lOiBcIjExOjAwIGFtIC0gMTI6MzAgcG1cIixcbiAgICAgICAgICAgICAgICBzZXNzaW9uOiBcIkxpZ2h0bmluZyBUYWxrcyBhbmQgV29ya3Nob3BzXCIsXG4gICAgICAgICAgICAgICAgc3BlYWtlcjogXCJJZ25pdGVTVEVNIERlc2lnbiBUaGlua2luZ1wiLFxuICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAyMCxcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogXCJFbXBpcmUgU3RhdGVcIixcbiAgICAgICAgICAgICAgICBub3RlczogXCJEZXNpZ24gVGhpbmtpbmcgd29ya3Nob3AgbGVkIGJ5IElnbml0ZVNURU1lcnNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aW1lOiBcIjExOjAwIGFtIC0gMTI6MzAgcG1cIixcbiAgICAgICAgICAgICAgICBzZXNzaW9uOiBcIkxpZ2h0bmluZyBUYWxrcyBhbmQgV29ya3Nob3BzXCIsXG4gICAgICAgICAgICAgICAgc3BlYWtlcjogXCJXb3Jrc2hvcHMgZm9yIFRlYWNoZXJzIGluIFRlY2hcIixcbiAgICAgICAgICAgICAgICBjYXBhY2l0eTogMTAsXG4gICAgICAgICAgICAgICAgbG9jYXRpb246IFwiUGhpbGhhcm1vbmljXCIsXG4gICAgICAgICAgICAgICAgbm90ZXM6IFwiVGVjaG5vbG9neSBpbiBUZWFjaGluZyBsZWQgYnkgQWFua2l0IFBhdGVsXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGltZTogXCIxMTowMCBhbSAtIDEyOjMwIHBtXCIsXG4gICAgICAgICAgICAgICAgc2Vzc2lvbjogXCJMaWdodG5pbmcgVGFsa3MgYW5kIFdvcmtzaG9wc1wiLFxuICAgICAgICAgICAgICAgIHNwZWFrZXI6IFwiQ291bmNpbCBmb3IgT3Bwb3J0dW5pdHkgaW4gRWR1Y2F0aW9uXCIsXG4gICAgICAgICAgICAgICAgY2FwYWNpdHk6IDEwLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcIkJhdHRlcnkgUGFya1wiLFxuICAgICAgICAgICAgICAgIG5vdGVzOiBcIkRldmVsb3BpbmcgU1RFTSBMZWFybmVyczogVGhpbmtpbmcgT3V0c2lkZSBvZiB0aGUgQ2xhc3Nyb29tXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGltZTogXCIxMTowMCBhbSAtIDEyOjMwIHBtXCIsXG4gICAgICAgICAgICAgICAgc2Vzc2lvbjogXCJMaWdodG5pbmcgVGFsa3MgYW5kIFdvcmtzaG9wc1wiLFxuICAgICAgICAgICAgICAgIHNwZWFrZXI6IFwiSWduaXRlU1RFTSBUZWFtIEhhY2thdGhvblwiLFxuICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAyMCxcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogXCJBcG9sbG9cIixcbiAgICAgICAgICAgICAgICBub3RlczogXCJIYWNrLWEtdGhvbiB3b3Jrc2hvcCAod29ya2luZyBpbiBzbWFsbCBncm91cHMpXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGltZTogXCIxMTowMCBhbSAtIDEyOjMwIHBtXCIsXG4gICAgICAgICAgICAgICAgc2Vzc2lvbjogXCJMaWdodG5pbmcgVGFsa3MgYW5kIFdvcmtzaG9wc1wiLFxuICAgICAgICAgICAgICAgIHNwZWFrZXI6IFwiQ2hyaXMgSGFycmlzICsgSmVubmlmZXIgS3Jlc3NsZXIgRHVkYVwiLFxuICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAxMCxcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogXCJSaXZlcnNpZGUgUGFya1wiLFxuICAgICAgICAgICAgICAgIG5vdGVzOiBcIkNvZGluZyBhbmQgUm9ib3RzIGluIHRoZSBTcGVjaWFsIE5lZWRzIENsYXNzcm9vbVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpbWU6IFwiMTI6MzAgcG0gLSAxOjE1IHBtXCIsXG4gICAgICAgICAgICAgICAgc2Vzc2lvbjogXCJMdW5jaFwiLFxuICAgICAgICAgICAgICAgIHNwZWFrZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgY2FwYWNpdHk6IFwiXCIsXG4gICAgICAgICAgICAgICAgbG9jYXRpb246IFwiR1dCIDRBMjIwQVwiLFxuICAgICAgICAgICAgICAgIG5vdGVzOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpbWU6IFwiMTozMCBwbSAtIDI6MTUgcG1cIixcbiAgICAgICAgICAgICAgICBzZXNzaW9uOiBcIkVkVGVjaCBQYW5lbFwiLFxuICAgICAgICAgICAgICAgIHNwZWFrZXI6IFwiTGFic3RlclwiLFxuICAgICAgICAgICAgICAgIGNhcGFjaXR5OiBcIlwiLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcIkdXQiA0QTIyMEFcIixcbiAgICAgICAgICAgICAgICBub3RlczogXCJVc2luZyBlZFRlY2ggaW4gdGhlIGNsYXNzcm9vbTogUS9BIHdpdGggdGhyZWUgZGlmZmVyZW50IGFyZWFzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGltZTogXCIxOjMwIHBtIC0gMjoxNSBwbVwiLFxuICAgICAgICAgICAgICAgIHNlc3Npb246IFwiRWRUZWNoIFBhbmVsXCIsXG4gICAgICAgICAgICAgICAgc3BlYWtlcjogXCJKYWNrIERlRnVyaWEgKEJvbHQgTGVhcm5pbmcpXCIsXG4gICAgICAgICAgICAgICAgY2FwYWNpdHk6IFwiXCIsXG4gICAgICAgICAgICAgICAgbG9jYXRpb246IFwiR1dCIDRBMjIwQVwiLFxuICAgICAgICAgICAgICAgIG5vdGVzOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpbWU6IFwiMTozMCBwbSAtIDI6MTUgcG1cIixcbiAgICAgICAgICAgICAgICBzZXNzaW9uOiBcIkVkVGVjaCBQYW5lbFwiLFxuICAgICAgICAgICAgICAgIHNwZWFrZXI6IFwiQ2hyaXMgSGFycmlzICsgSmVubmlmZXIgS3Jlc3NsZXIgRHVkYVwiLFxuICAgICAgICAgICAgICAgIGNhcGFjaXR5OiBcIlwiLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcIkdXQiA0QTIyMEFcIixcbiAgICAgICAgICAgICAgICBub3RlczogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aW1lOiBcIjI6MTUgcG0gLSAzOjAwIHBtXCIsXG4gICAgICAgICAgICAgICAgc2Vzc2lvbjogXCJLZXlub3RlXCIsXG4gICAgICAgICAgICAgICAgc3BlYWtlcjogXCJKb25hdGhhbiBSb2NoZWxsZSwgRGlyZWN0b3Igb2YgUHJvZHVjdCBNYW5hZ2VtZW50IGF0IEdvb2dsZSBFZHVjYXRpb25cIixcbiAgICAgICAgICAgICAgICBjYXBhY2l0eTogXCJcIixcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogXCJHV0IgNEEyMjBBXCIsXG4gICAgICAgICAgICAgICAgbm90ZXM6IFwiS2V5bm90ZSBhbmQgUS9BIGJ5IEpvbmF0aGFuIFJvY2hlbGxlLCBEaXJlY3RvciBvZiBQcm9kdWN0IE1hbmFnZW1lbnQgYXQgR29vZ2xlIEVkdWNhdGlvblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpbWU6IFwiMzoxNSBwbSAtIDQ6MDAgcG1cIixcbiAgICAgICAgICAgICAgICBzZXNzaW9uOiBcIlVuY29uZmVyZW5jZSBTZXNzaW9uXCIsXG4gICAgICAgICAgICAgICAgc3BlYWtlcjogXCJcIixcbiAgICAgICAgICAgICAgICBjYXBhY2l0eTogXCJcIixcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogXCIodGJkLSBpbmZvIHdpbGwgYmUgZ2l2ZW4gdG8gYXR0ZW5kZWVzIGF0IGEgbGF0ZXIgZGF0ZSlcIixcbiAgICAgICAgICAgICAgICBub3RlczogXCJBdHRlbmRlZS1kcml2ZW4gc21hbGwgZ3JvdXAgdW5jb25mZXJlbmNlIGFuZCBjdXJyaWN1bHVtIGRlc2lnbiBzZXNzaW9uc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpbWU6IFwiNDoxNSBwbSAtIDQ6MzAgcG1cIixcbiAgICAgICAgICAgICAgICBzZXNzaW9uOiBcIkNsb3NpbmcgUmVtYXJrc1wiLFxuICAgICAgICAgICAgICAgIHNwZWFrZXI6IFwiSWduaXRlU1RFTSBEaXJlY3RvcnNcIixcbiAgICAgICAgICAgICAgICBjYXBhY2l0eTogXCJcIixcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogXCJHV0IgNEEyMjBBXCIsXG4gICAgICAgICAgICAgICAgbm90ZXM6IFwiQ2xvc2luZyBSZW1hcmtzIGZyb20gSWduaXRlU1RFTVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpbWU6IFwiNDozMCBwbSAtIDY6MDAgcG1cIixcbiAgICAgICAgICAgICAgICBzZXNzaW9uOiBcIklnbml0ZVNURU0gUmVjZXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgc3BlYWtlcjogXCJBbGwgQ29uZmVyZW5jZVwiLFxuICAgICAgICAgICAgICAgIGNhcGFjaXR5OiBcIlwiLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcIkdXQiA0QTIyMEFcIixcbiAgICAgICAgICAgICAgICBub3RlczogXCJIYWNrLWluLWEtYm94IGRpc3RyaWJ1dGlvbiBhbmQgcmVjZXB0aW9uIGZlYXR1cmluZyBkcmlua3MgYW5kIHNuYWNrc1wiXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNjaGVkdWxlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9jb250cm9sbGVycy9kYXlPZi9pbmRleC5qcyIsImltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5cbmV4cG9ydCBkZWZhdWx0IChhcHApID0+IHtcbiAgICBhcHAuZ2V0KCcvYXBpL21lZGlhL2JsdWVfZmlyZS5wbmcnLCAocmVxLCByZXMpID0+IHtcbiAgICAgICAgY29uc3QgX19kaXJuYW1lID0gcHJvY2Vzcy5jd2QoKTtcbiAgICAgICAgcmVzLnNlbmRGaWxlKCdmaXJlX2JsdWUucG5nJywgeyByb290OiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9jbGllbnQvbWVkaWEnKSB9KTtcbiAgICB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvc3JjL3JvdXRlcy9tZWRpYVJvdXRlcy5qcyIsImltcG9ydCBzZWFyY2ggZnJvbSAnLi4vY29udHJvbGxlcnMvc2VhcmNoJztcblxuZXhwb3J0IGRlZmF1bHQgKGFwcCkgPT4ge1xuICAgIGFwcC5wb3N0KCcvYXBpL3NlYXJjaCcsIHNlYXJjaCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9yb3V0ZXMvc2VhcmNoUm91dGVzLmpzIiwiY29uc3QgVXNlciA9IHJlcXVpcmUoJy4uLy4uL21vZGVscycpLlVzZXI7XG5cbmltcG9ydCBzZWFyY2hBbGdvcml0aG0gZnJvbSAnLi9zZWFyY2gnIC8vIEdldCB0aGUgc2VhcmNoIGFsZ29yaXRobVxuXG5jb25zdCBzZWFyY2ggPSAocmVxLCByZXMpID0+IHtcbiAgICByZXR1cm4gVXNlclxuICAgICAgICAuZmluZEFsbCh7fSkgLy8gR2V0IGFsbCBxdW90ZXNcbiAgICAgICAgLnRoZW4oKHVzZXJzKSA9PiB7XG4gICAgICAgICAgICAvLyBGaWx0ZXIgb3V0IHBhc3N3b3JkIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgIHVzZXJzLmZvckVhY2goKHVzZXIpID0+IHsgZGVsZXRlIHVzZXIuZGF0YVZhbHVlcy5wYXNzd29yZCB9KTtcblxuICAgICAgICAgICAgbGV0IHVzZXJEYXRhID0gdXNlcnMubWFwKCh1c2VyKSA9PiB1c2VyLmRhdGFWYWx1ZXMpO1xuXG4gICAgICAgICAgICAvLyBsZXQgc29ydGVkVXNlcnMgPSB1c2VyczsgLy8gTW9kaWZ5IHRoaXMgYXJyYXlcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gcmVxLmJvZHkucXVlcnk7IC8vIFRoZSBzZWFyY2ggcXVlcnlcblxuICAgICAgICAgICAgLyoqKioqKioqKioqKioqKiogQ29kZSBnb2VzIGhlcmUgKioqKioqKioqKioqKioqKi9cbiAgICAgICAgICAgIGxldCBzb3J0ZWRVc2VycyA9IHNlYXJjaEFsZ29yaXRobShxdWVyeSwgdXNlckRhdGEpXG4gICAgICAgICAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChzb3J0ZWRVc2Vycyk7XG4gICAgICAgIH0pIC8vIFJldHVybiByYW5rZWQgYXJyYXkgb2YgdXNlcnMgYmFzZWQgb24gc2VhcmNoIHF1ZXJ5XG4gICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcilcbiAgICAgICAgfSk7IC8vIEVycm9yXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZWFyY2g7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvc3JjL2NvbnRyb2xsZXJzL3NlYXJjaC9pbmRleC5qcyIsIi8vIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcbi8vIGxldCByYXdEYXRhID0gZnMucmVhZEZpbGVTeW5jKCcuL3VzZXJzLmpzb24nKTsgXG4vL1xuLy8gLy8gUmVhZCBpbiB0aGUgSlNPTiBkYXRhXG4vLyBjb25zdCB1c2VycyA9IEpTT04ucGFyc2UocmF3RGF0YSk7XG5cbi8qbGV0IHJhbmsgPSAwO1xubGV0IHNvcnRlZFVzZXJzID0gdXNlcnMubWFwKCh1c2VyKSA9PiB7XG5cdHJhbmsrKztcblx0cmV0dXJuIHtcblx0XHRyYW5rLCBcblx0XHQuLi51c2VyLFxuXHR9XG59KTsqL1xuXG4vLyBjb25zdCBxdWVyeSA9IFwiVGltIG1hdGggY29kaW5nXCI7IC8vIFRoZSBzZWFyY2ggcXVlcnlcblxuY29uc3Qgc2VhcmNoID0gKHF1ZXJ5LCB1c2VycykgPT4ge1xuICAgIC8qKioqKioqKioqKioqKioqIENvZGUgZ29lcyBoZXJlICoqKioqKioqKioqKioqKiovXG4gICAgLypcbiAgICAgKiBNb2RpZnkgdGhlIGFycmF5OiBzb3J0ZWRVc2Vyc1xuICAgICAqICAobWFrZSBzdXJlIHRvIG1vZGlmeSB0aGUgcmFuayBhdHRyaWJ1dGUgdG8gbWF0Y2ggaXRzIG9yZGVyIGluIHRoZSBhcnJheSlcbiAgICAgKiBVc2UgdGhlIHZhcmlhYmxlLCBxdWVyeSwgYXMgdGhlIHNlYXJjaCBxdWVyeVxuICAgICAqXG4gICAgICogUnVuIHRoaXMgc2NyaXB0IHVzaW5nOlxuICAgICAqICAkIG5vZGUgc2VhcmNoLmpzXG4gICAgICovXG5cbiAgICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAvLyBjb25zb2xlLmxvZyhcIlNlYXJjaGluZyBxdWVyeTpcIiwgcXVlcnkpXG4gICAgIFxuICAgICAvL1NwbGl0dGluZyBxdWVyeSBzdHJpbmcgaW50byBhbiBhcnJheSBvZiBzdHJpbmdzXG4gICAgIHZhciBxdWVyeUFycmF5ID0gcXVlcnkuc3BsaXQoXCIgXCIpO1xuXG4gICAgLy9BZGp1c3RpbmcgdGhlIHJhbmsgb2YgZWFjaCB1c2VyIGJ5IGluY3JlbWVudGluZyB0aGUgcmFuayBlYWNoIHRpbWUgb25lIG9mIHRoZSB3b3Jkc1xuICAgIC8vaW4gdGhlIHF1ZXJ5QXJyYXkgdmFyaWFibGUgYXBwZWFycyBpbiBhIHVzZXIncyBkYXRhXG4gICAgIHNvcnRlZFVzZXJzID0gdXNlcnMubWFwKCh1c2VyKSA9PiB7XG4gICAgICAgIHJhbmsgPSAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcXVlcnlBcnJheS5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHVzZXIpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihxdWVyeUFycmF5W2ldLnRvTG93ZXJDYXNlKCkpICE9PSAtMSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByYW5rKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmFuayxcbiAgICAgICAgICAgIC4uLnVzZXIsXG4gICAgICAgIH1cbiAgICAgfSk7XG5cbiAgICAvL1NvcnRpbmcgZWFjaCB1c2VyIGZyb20gZ3JlYXRlc3QgcmFuayB0byBsZWFzdCByYW5rXG4gICAgc29ydGVkVXNlcnMuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgICByZXR1cm4gYi5yYW5rIC0gYS5yYW5rO1xuICAgIH0pO1xuXG4gICAgLy9SZWFzc2lnbmluZyB0aGUgcmFuayBvZiBlYWNoIHVzZXIgdG8gYmUgdGhlIHVzZXIncyBwb3NpdGlvbiAocGx1cyAxKSwgd2l0aGluIHRoZSBhcnJheVxuICAgIGZvcihpID0gMDsgaSA8IHNvcnRlZFVzZXJzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgc29ydGVkVXNlcnNbaV0ucmFuayA9IGkgKyAxO1xuICAgIH1cblxuICAgIHJldHVybiBzb3J0ZWRVc2Vycztcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9jb250cm9sbGVycy9zZWFyY2gvc2VhcmNoLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9yZ2FuXCJcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYm9keS1wYXJzZXJcIlxuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3Qgc2Vzc2lvbnMgPSByZXF1aXJlKCdjbGllbnQtc2Vzc2lvbnMnKTsgLy8gVXNlciBzZXNzaW9uc1xuXG5jb25zdCBzZXNzaW9uQXV0aCA9IChhcHApID0+IHtcbiAgICAvLyBEb2NzOiBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9ub2RlLWNsaWVudC1zZXNzaW9uc1xuICAgIGFwcC51c2Uoc2Vzc2lvbnMoe1xuICAgICAgICBjb29raWVOYW1lOiAnc2Vzc2lvbicsIC8vIENvb2tpZSBuYW1lIGRpY3RhdGVzIHRoZSBrZXkgbmFtZSBhZGRlZCB0byB0aGUgcmVxdWVzdCBvYmplY3RcbiAgICAgICAgc2VjcmV0OiAnYmxhcmdhZGVlYmxhcmdibGFyZycsIC8vIHNob3VsZCBiZSBhIGxhcmdlIHVuZ3Vlc3NhYmxlIHN0cmluZyAoc3RvcmUgaW4gZW52aXJvbm1lbnQgdmFyaWFibGVzIGV2ZW50dWFsbHkpXG4gICAgICAgIGR1cmF0aW9uOiA0ICogNjAgKiA2MCAqIDEwMDAsIC8vIGhvdyBsb25nIHRoZSBzZXNzaW9uIHdpbGwgc3RheSB2YWxpZCBpbiBtcyAoNCBob3VycylcbiAgICAgICAgYWN0aXZlRHVyYXRpb246IDEwMDAgKiA2MCAqIDYwICogMiwgLy8gaWYgZXhwaXJlc0luIDwgYWN0aXZlRHVyYXRpb24sIHRoZSBzZXNzaW9uIHdpbGwgYmUgZXh0ZW5kZWQgYnkgYWN0aXZlRHVyYXRpb24gbWlsbGlzZWNvbmRzXG4gICAgfSkpO1xuXG4gICAgYXBwLnVzZSgocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICAgICAgLy8gQVBJcyB0aGF0IGNsaWVudCBtdXN0IGJlIGxvZ2dlZCBpbiBmb3JcbiAgICAgICAgLy8gQmVzdCBwcmFjdGljZTogQVBJcyB0aGF0IGFyZSBhY2Nlc3NpYmxlIHZpYSB0aGUgY2xpZW50IGJ1dCByZXF1aXJlIGEgbG9naW5cbiAgICAgICAgLy8gQVBJcyBhcmUgYWxyZWFkeSBwcm90ZWN0ZWQgYnkgYSBCYXNpYyBBdXRoLCB0aGlzIGlzIGp1c3QgYSBzYWZlZ2F1cmRcbiAgICAgICAgY29uc3QgYmxhY2tsaXN0ZWQgPSBbXG4gICAgICAgICAgICAnXFwvYXBpXFwvdXNlcnNcXC9jcmVhdGUnLFxuICAgICAgICBdO1xuICAgICAgICBjb25zdCBwYXRoID0gcmVxLm9yaWdpbmFsVXJsO1xuICAgICAgICBpZiAoIXJlcS5zZXNzaW9uLnVzZXIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBzZXNzaW9uJyk7XG4gICAgICAgICAgICBpZiAobmV3IFJlZ0V4cChibGFja2xpc3RlZC5qb2luKCd8JyksICdpJykudGVzdChwYXRoKSkgeyAvLyBJZiBvbiB0aGUgYmxhY2tsaXN0XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoJ1BsZWFzZSBsb2cgaW4nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIEFsbG93ZWRcbiAgICAgICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgU2Vzc2lvbiB3aXRoIHVzZXI6ICR7cmVxLnNlc3Npb24udXNlci51c2VybmFtZX1gKTtcbiAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzZXNzaW9uQXV0aDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvY29uZmlnL3Nlc3Npb24uanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGllbnQtc2Vzc2lvbnNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjbGllbnQtc2Vzc2lvbnNcIlxuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==