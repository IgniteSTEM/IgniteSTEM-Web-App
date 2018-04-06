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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzgzMTAxYjkyNTdhODU2YzdjY2IiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvbW9kZWxzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1wb2x5ZmlsbFwiIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9yb3V0ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9yb3V0ZXMvYXBpUm91dGVzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvY29udHJvbGxlcnMvdGVzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL3JvdXRlcy91c2VyUm91dGVzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvY29udHJvbGxlcnMvdXNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcXVlbGl6ZVwiIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvY29uZmlnL2NvbmZpZy5qc29uIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvcm91dGVzL2xvZ2luUm91dGVzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvY29udHJvbGxlcnMvbG9naW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9yb3V0ZXMvZGF5T2ZSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy9kYXlPZi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL3JvdXRlcy9tZWRpYVJvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL3JvdXRlcy9zZWFyY2hSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy9zZWFyY2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy9zZWFyY2gvc2VhcmNoLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb25maWcvc2Vzc2lvbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGllbnQtc2Vzc2lvbnNcIiJdLCJuYW1lcyI6WyJmcyIsInBhdGgiLCJjb25maWdGaWxlIiwicmVxdWlyZSIsImVudiIsInByb2Nlc3MiLCJOT0RFX0VOViIsIl9fZGlybmFtZSIsImN3ZCIsImN1cnJlbnREaXIiLCJqb2luIiwiZmlsZW5hbWUiLCJtb2R1bGUiLCJ1bmRlZmluZWQiLCJiYXNlbmFtZSIsImRiIiwic2VxdWVsaXplIiwiREFUQUJBU0VfVVJMIiwiY29uZmlnIiwiZGF0YWJhc2UiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwicmVhZGRpclN5bmMiLCJmaWx0ZXIiLCJmaWxlIiwiaW5kZXhPZiIsInNsaWNlIiwiZm9yRWFjaCIsIm1vZGVsIiwibmFtZSIsIk9iamVjdCIsImtleXMiLCJtb2RlbE5hbWUiLCJhc3NvY2lhdGUiLCJTZXF1ZWxpemUiLCJleHBvcnRzIiwicG9ydCIsInBhcnNlSW50IiwiUE9SVCIsInNldCIsImxpc3RlbiIsImV4cHJlc3MiLCJsb2dnZXIiLCJib2R5UGFyc2VyIiwic2Vzc2lvbkF1dGgiLCJhcHAiLCJhbGwiLCJyZXEiLCJyZXMiLCJuZXh0IiwiaGVhZGVyIiwibWV0aG9kIiwic2VuZCIsInVzZSIsImpzb24iLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJnZXQiLCJzdGF0dXMiLCJzZW5kRmlsZSIsInJvb3QiLCJ0ZXN0RnVuY3Rpb24iLCJ0ZXN0RnVuY3Rpb24yIiwicG9zdCIsIlVzZXIiLCJsaXN0IiwiZmluZEFsbCIsInRoZW4iLCJ1c2VycyIsInVzZXIiLCJkYXRhVmFsdWVzIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiY2hlY2tVc2VybmFtZSIsImJvZHkiLCJ3aGVyZSIsInVzZXJuYW1lQXZhaWxhYmxlIiwibGVuZ3RoIiwiYXZhaWxhYmxlIiwiY3JlYXRlVXNlciIsImVtYWlsIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsIm9yZ2FuaXphdGlvbiIsImNyZWF0ZSIsImxvZ2luIiwiZGF0YSIsInN1Y2Nlc3MiLCJmaW5kT25lIiwic2Vzc2lvbiIsImxvZ291dCIsInByZXZpb3VzVXNlciIsInJlc2V0IiwiY3VycmVudFVzZXIiLCJsb2dnZWRfaW4iLCJzY2hlZHVsZSIsInRpbWUiLCJzcGVha2VyIiwiY2FwYWNpdHkiLCJsb2NhdGlvbiIsIm5vdGVzIiwic2VhcmNoIiwidXNlckRhdGEiLCJtYXAiLCJxdWVyeSIsInNvcnRlZFVzZXJzIiwicXVlcnlBcnJheSIsInNwbGl0IiwicmFuayIsImkiLCJKU09OIiwic3RyaW5naWZ5IiwidG9Mb3dlckNhc2UiLCJzb3J0IiwiYSIsImIiLCJzZXNzaW9ucyIsImNvb2tpZU5hbWUiLCJzZWNyZXQiLCJkdXJhdGlvbiIsImFjdGl2ZUR1cmF0aW9uIiwiYmxhY2tsaXN0ZWQiLCJvcmlnaW5hbFVybCIsIlJlZ0V4cCIsInRlc3QiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSxpQzs7Ozs7O0FDQ0E7O0lBQVlBLEU7O0FBQ1o7O0lBQVlDLEk7O0FBQ1o7Ozs7Ozs7O0FBRUEsSUFBTUMsYUFBYyxtQkFBQUMsQ0FBUSxFQUFSLENBQXBCLEMsQ0FMQTs7O0FBT0EsSUFBSUMsTUFBa0JDLFFBQVFELEdBQVIsQ0FBWUUsUUFBWixJQUF3QixhQUE5QyxDLENBQTZEO0FBQzdELElBQU1DLFlBQWdCRixRQUFRRyxHQUFSLEVBQXRCLEMsQ0FBcUM7QUFDckMsSUFBTUMsYUFBYVIsS0FBS1MsSUFBTCxDQUFVSCxTQUFWLEVBQXFCLHFCQUFyQixDQUFuQjs7QUFFQTtBQUNBLElBQU1JLFdBQVlDLE9BQU9ELFFBQVAsS0FBb0JFLFNBQXJCLEdBQWtDRCxPQUFPRCxRQUF6QyxHQUFvRCxVQUFyRTtBQUNBLElBQUlHLFdBQVliLEtBQUthLFFBQUwsQ0FBY0gsUUFBZCxDQUFoQjs7QUFFQSxJQUFJSSxLQUFLLEVBQVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSUMsWUFBWSxFQUFoQjtBQUNBLElBQUlYLFFBQVFELEdBQVIsQ0FBWUUsUUFBaEIsRUFBMEI7QUFDdEI7QUFDQTtBQUNBVSxnQkFBWSwyQkFBY1gsUUFBUUQsR0FBUixDQUFZYSxZQUExQixDQUFaLENBSHNCLENBRytCO0FBRXhELENBTEQsTUFLTztBQUNILFFBQUlDLFNBQVloQixXQUFXRSxHQUFYLENBQWhCLENBREcsQ0FDOEI7O0FBRWpDWSxnQkFBWSwyQkFBY0UsT0FBT0MsUUFBckIsRUFBK0JELE9BQU9FLFFBQXRDLEVBQWdERixPQUFPRyxRQUF2RCxFQUFpRUgsTUFBakUsQ0FBWixDQUhHLENBR21GO0FBQ3pGOztBQUVEbEIsR0FDS3NCLFdBREwsQ0FDaUJiLFVBRGpCLEVBRUtjLE1BRkwsQ0FFWSxVQUFTQyxJQUFULEVBQWU7QUFDbkIsV0FBUUEsS0FBS0MsT0FBTCxDQUFhLEdBQWIsTUFBc0IsQ0FBdkIsSUFBOEJELFNBQVNWLFFBQXZDLElBQXFEVSxLQUFLRSxLQUFMLENBQVcsQ0FBQyxDQUFaLE1BQW1CLEtBQS9FO0FBQ0gsQ0FKTCxFQUtLQyxPQUxMLENBS2EsVUFBU0gsSUFBVCxFQUFlO0FBQ3BCLFFBQUlJLFFBQVFaLG9CQUFpQmYsS0FBS1MsSUFBTCxDQUFVRCxVQUFWLEVBQXNCZSxJQUF0QixDQUFqQixDQUFaO0FBQ0FULE9BQUdhLE1BQU1DLElBQVQsSUFBaUJELEtBQWpCO0FBQ0gsQ0FSTDs7QUFVQUUsT0FBT0MsSUFBUCxDQUFZaEIsRUFBWixFQUFnQlksT0FBaEIsQ0FBd0IsVUFBU0ssU0FBVCxFQUFvQjtBQUN4QyxRQUFJakIsR0FBR2lCLFNBQUgsRUFBY0MsU0FBbEIsRUFBNkI7QUFDekJsQixXQUFHaUIsU0FBSCxFQUFjQyxTQUFkLENBQXdCbEIsRUFBeEI7QUFDSDtBQUNKLENBSkQ7O0FBTUFBLEdBQUdDLFNBQUgsR0FBZUEsU0FBZjtBQUNBRCxHQUFHbUIsU0FBSDs7QUFFQXRCLE9BQU91QixPQUFQLEdBQWlCcEIsRUFBakIsQzs7Ozs7OztBQ25EQSxvQzs7Ozs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7O0FDQ0E7Ozs7OztBQUF5Qjs7QUFFekIsSUFBTXFCLE9BQU9DLFNBQVNoQyxRQUFRRCxHQUFSLENBQVlrQyxJQUFyQixFQUEyQixFQUEzQixLQUFrQyxJQUEvQyxDLENBSEE7O0FBSUEsaUJBQUlDLEdBQUosQ0FBUSxNQUFSLEVBQWdCSCxJQUFoQjs7QUFFQTtBQUNBO0FBQ0EsaUJBQUlJLE1BQUosQ0FBV0osSUFBWCxFOzs7Ozs7Ozs7O0FDUkE7Ozs7OztBQUVBLElBQU1LLFVBQVUsbUJBQUF0QyxDQUFRLENBQVIsQ0FBaEI7QUFDQSxJQUFNdUMsU0FBUyxtQkFBQXZDLENBQVEsRUFBUixDQUFmO0FBQ0EsSUFBTXdDLGFBQWEsbUJBQUF4QyxDQUFRLEVBQVIsQ0FBbkI7QUFDQSxJQUFNeUMsY0FBYyxtQkFBQXpDLENBQVEsRUFBUixDQUFwQjtBQUNBLElBQU1GLE9BQU8sbUJBQUFFLENBQVEsQ0FBUixDQUFiOztBQUVBLElBQUlJLFlBQVlGLFFBQVFHLEdBQVIsRUFBaEI7O0FBRUEsSUFBTXFDLE1BQU1KLFNBQVosQyxDQUF1Qjs7QUFFdkI7QUFDQUksSUFBSUMsR0FBSixDQUFRLEdBQVIsRUFBYSxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBV0MsSUFBWCxFQUFvQjtBQUM3QkQsUUFBSUUsTUFBSixDQUFXLDZCQUFYLEVBQTBDLEdBQTFDO0FBQ0FGLFFBQUlFLE1BQUosQ0FBVyw4QkFBWCxFQUEyQyxpQ0FBM0M7QUFDQUYsUUFBSUUsTUFBSixDQUNJLDhCQURKLEVBRUksMEdBRko7O0FBS0E7QUFDQSxRQUFJSCxJQUFJSSxNQUFKLEtBQWUsU0FBbkIsRUFBOEI7QUFDMUJILFlBQUlJLElBQUosQ0FBUyxHQUFUO0FBQ0gsS0FGRCxNQUVPO0FBQ0hIO0FBQ0g7QUFDSixDQWREOztBQWdCQTtBQUNBTCxZQUFZQyxHQUFaOztBQUVBO0FBQ0FBLElBQUlRLEdBQUosQ0FBUVgsT0FBTyxLQUFQLENBQVI7O0FBRUE7QUFDQUcsSUFBSVEsR0FBSixDQUFRVixXQUFXVyxJQUFYLEVBQVI7QUFDQVQsSUFBSVEsR0FBSixDQUFRVixXQUFXWSxVQUFYLENBQXNCLEVBQUVDLFVBQVUsS0FBWixFQUF0QixDQUFSO0FBQ0FYLElBQUlRLEdBQUosQ0FBUSxVQUFSLEVBQW9CWixrQkFBZXhDLEtBQUtTLElBQUwsQ0FBVUgsU0FBVixFQUFxQixtQkFBckIsQ0FBZixDQUFwQjs7QUFFQTtBQUNBLHlCQUFPc0MsR0FBUDs7QUFFQTtBQUNBQSxJQUFJWSxHQUFKLENBQVEsR0FBUixFQUFhLFVBQUNWLEdBQUQsRUFBTUMsR0FBTjtBQUFBLFdBQWNBLElBQUlVLE1BQUosQ0FBVyxHQUFYLEVBQWdCTixJQUFoQixDQUFxQixxQkFBckIsQ0FBZDtBQUFBLENBQWI7O3FCQUVlUCxHOzs7Ozs7Ozs7O0FDOUNmOztJQUFZNUMsSTs7QUFNWjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUE7OztBQVhBO0FBQ0E7O0FBRUE7cUJBU2UsVUFBQzRDLEdBQUQsRUFBUztBQUNwQjtBQUNBLGdDQUFVQSxHQUFWO0FBQ0EsaUNBQVdBLEdBQVg7QUFDQSxrQ0FBWUEsR0FBWjtBQUNBLGtDQUFZQSxHQUFaO0FBQ0Esa0NBQVlBLEdBQVo7QUFDQSxtQ0FBYUEsR0FBYjs7QUFFQTs7QUFFQTtBQUNBQSxRQUFJWSxHQUFKLENBQVEsbUJBQVIsRUFBNkIsVUFBQ1YsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDdkMsWUFBTXpDLFlBQVlGLFFBQVFHLEdBQVIsRUFBbEI7QUFDQXdDLFlBQUlXLFFBQUosQ0FBYSxVQUFiLEVBQXlCLEVBQUVDLE1BQU0zRCxLQUFLUyxJQUFMLENBQVVILFNBQVYsRUFBcUIsZUFBckIsQ0FBUixFQUF6QjtBQUNILEtBSEQ7O0FBS0FzQyxRQUFJWSxHQUFKLENBQVEsY0FBUixFQUF3QixVQUFDVixHQUFELEVBQU1DLEdBQU4sRUFBYztBQUNsQyxZQUFNekMsWUFBWUYsUUFBUUcsR0FBUixFQUFsQjtBQUNBd0MsWUFBSVcsUUFBSixDQUFhLGFBQWIsRUFBNEIsRUFBRUMsTUFBTTNELEtBQUtTLElBQUwsQ0FBVUgsU0FBVixFQUFxQixlQUFyQixDQUFSLEVBQTVCO0FBQ0gsS0FIRDs7QUFLQTtBQUNBc0MsUUFBSVksR0FBSixDQUFRLEdBQVIsRUFBYSxVQUFDVixHQUFELEVBQU1DLEdBQU4sRUFBYztBQUN2QixZQUFNekMsWUFBWUYsUUFBUUcsR0FBUixFQUFsQjtBQUNBd0MsWUFBSVcsUUFBSixDQUFhLFlBQWIsRUFBMkIsRUFBRUMsTUFBTTNELEtBQUtTLElBQUwsQ0FBVUgsU0FBVixFQUFxQixlQUFyQixDQUFSLEVBQTNCLEVBRnVCLENBRXNEO0FBQ2hGLEtBSEQ7QUFJSCxDOzs7Ozs7Ozs7O0FDekNEOztxQkFFZSxVQUFDc0MsR0FBRCxFQUFTO0FBQ3BCQSxRQUFJWSxHQUFKLENBQVEsV0FBUjtBQUNILEM7Ozs7Ozs7OztBQ0pNLElBQU1JLHNDQUFlLFNBQWZBLFlBQWUsQ0FBQ2QsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDdENBLFFBQUlVLE1BQUosQ0FBVyxHQUFYLEVBQWdCTixJQUFoQixDQUFxQixnQkFBckI7QUFDSCxDQUZNOztBQUlBLElBQU1VLHdDQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ2YsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDdkNBLFFBQUlVLE1BQUosQ0FBVyxHQUFYLEVBQWdCTixJQUFoQixDQUFxQixpQkFBckI7QUFDSCxDQUZNLEM7Ozs7Ozs7Ozs7QUNKUDs7cUJBRWUsVUFBQ1AsR0FBRCxFQUFTO0FBQ3BCQSxRQUFJa0IsSUFBSixDQUFTLG1CQUFUO0FBQ0FsQixRQUFJWSxHQUFKLENBQVEsWUFBUjtBQUNBWixRQUFJa0IsSUFBSixDQUFTLDBCQUFUO0FBQ0gsQzs7Ozs7Ozs7O0FDTkQsSUFBTUMsT0FBTyxtQkFBQTdELENBQVEsQ0FBUixFQUF3QjZELElBQXJDOztBQUVPLElBQU1DLHNCQUFPLFNBQVBBLElBQU8sQ0FBQ2xCLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQzlCLFdBQU9nQixLQUNGRSxPQURFLENBQ00sRUFETixFQUNVO0FBRFYsS0FFRkMsSUFGRSxDQUVHLFVBQUNDLEtBQUQsRUFBVztBQUNiO0FBQ0FBLGNBQU16QyxPQUFOLENBQWMsVUFBQzBDLElBQUQsRUFBVTtBQUFFLG1CQUFPQSxLQUFLQyxVQUFMLENBQWdCakQsUUFBdkI7QUFBaUMsU0FBM0Q7QUFDQWtELGdCQUFRQyxHQUFSLENBQVlKLEtBQVo7QUFDQXBCLFlBQUlVLE1BQUosQ0FBVyxHQUFYLEVBQWdCTixJQUFoQixDQUFxQmdCLEtBQXJCO0FBQ0gsS0FQRSxFQU9BO0FBUEEsY0FRSSxVQUFDSyxLQUFEO0FBQUEsZUFBa0J6QixJQUFJVSxNQUFKLENBQVcsR0FBWCxFQUFnQk4sSUFBaEIsQ0FBcUJxQixLQUFyQixDQUFsQjtBQUFBLEtBUkosQ0FBUCxDQUQ4QixDQVM2QjtBQUM5RCxDQVZNOztBQVlBLElBQU1DLHdDQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQzNCLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQUEsUUFFbkM1QixRQUZtQyxHQUduQzJCLElBQUk0QixJQUgrQixDQUVuQ3ZELFFBRm1DLEVBR3pCOztBQUNkLFdBQU80QyxLQUNIRSxPQURHLENBQ0s7QUFDSlUsZUFBTztBQUNIeEQsOEJBREcsQ0FDTztBQURQO0FBREgsS0FETCxFQU1GK0MsSUFORSxDQU1HLFVBQUNDLEtBQUQsRUFBVztBQUNiUyw0QkFBcUJULE1BQU1VLE1BQU4sSUFBZ0IsQ0FBckMsQ0FEYSxDQUM0QjtBQUN6QzlCLFlBQUlVLE1BQUosQ0FBVyxHQUFYLEVBQWdCTixJQUFoQixDQUFxQjtBQUNqQjJCLHVCQUFXRjtBQURNLFNBQXJCO0FBR0gsS0FYRSxXQVlJLFVBQUNKLEtBQUQ7QUFBQSxlQUFrQnpCLElBQUlVLE1BQUosQ0FBVyxHQUFYLEVBQWdCTixJQUFoQixDQUFxQnFCLEtBQXJCLENBQWxCO0FBQUEsS0FaSixDQUFQLENBSnVDLENBZ0JvQjtBQUM5RCxDQWpCTTs7QUFtQkEsSUFBTU8sa0NBQWEsU0FBYkEsVUFBYSxDQUFDakMsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDcEN1QixZQUFRQyxHQUFSLENBQVksY0FBWjtBQURvQyxvQkFTaEN6QixJQUFJNEIsSUFUNEI7QUFBQSxRQUdoQ3ZELFFBSGdDLGFBR2hDQSxRQUhnQztBQUFBLFFBSWhDNkQsS0FKZ0MsYUFJaENBLEtBSmdDO0FBQUEsUUFLaEM1RCxRQUxnQyxhQUtoQ0EsUUFMZ0M7QUFBQSxRQU1oQzZELFVBTmdDLGFBTWhDQSxVQU5nQztBQUFBLFFBT2hDQyxTQVBnQyxhQU9oQ0EsU0FQZ0M7QUFBQSxRQVFoQ0MsWUFSZ0MsYUFRaENBLFlBUmdDLEVBU3RCOztBQUVkLFdBQU9wQixLQUNGcUIsTUFERSxDQUNLO0FBQ0pqRSwwQkFESTtBQUVKNkQsb0JBRkk7QUFHSjVELDBCQUhJO0FBSUo2RCw4QkFKSTtBQUtKQyw0QkFMSTtBQU1KQztBQU5JLEtBREwsRUFTRmpCLElBVEUsQ0FTRyxVQUFDRSxJQUFELEVBQVU7QUFBRTtBQUNkLGVBQU9BLEtBQUtDLFVBQUwsQ0FBZ0JqRCxRQUF2QixDQURZLENBQ3FCO0FBQ2pDMkIsWUFBSVUsTUFBSixDQUFXLEdBQVgsRUFBZ0JOLElBQWhCLENBQXFCaUIsSUFBckI7QUFDSCxLQVpFLFdBYUksVUFBQ0ksS0FBRCxFQUFrQjtBQUNyQkYsZ0JBQVFDLEdBQVIsQ0FBWUMsS0FBWjtBQUNBekIsWUFBSVUsTUFBSixDQUFXLEdBQVgsRUFBZ0JOLElBQWhCLENBQXFCcUIsS0FBckI7QUFDSCxLQWhCRSxDQUFQLENBWG9DLENBMkI1QjtBQUNYLENBNUJNLEM7Ozs7OztBQ2pDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNyQkEsK0I7Ozs7OztBQ0FBLHNDOzs7Ozs7QUNBQSxrQkFBa0IsZUFBZSx1SEFBdUgsU0FBUyx3SEFBd0gsZUFBZSxtQzs7Ozs7Ozs7OztBQ0F4Uzs7SUFBWWhDLE87O0FBQ1o7Ozs7cUJBRWUsVUFBQ0ksR0FBRCxFQUE4QjtBQUN6Q0EsUUFBSWtCLElBQUosQ0FBUyxZQUFUO0FBQ0FsQixRQUFJWSxHQUFKLENBQVEsYUFBUjtBQUNBWixRQUFJWSxHQUFKLENBQVEsb0JBQVI7QUFDSCxDOzs7Ozs7Ozs7QUNQRCxJQUFNTyxPQUFPLG1CQUFBN0QsQ0FBUSxDQUFSLEVBQWlDNkQsSUFBOUM7O0FBRUE7Ozs7Ozs7QUFPTyxJQUFNc0Isd0JBQVEsU0FBUkEsS0FBUSxDQUFDdkMsR0FBRCxFQUFlQyxHQUFmLEVBQXlDO0FBQzFELFFBQU11QyxPQUFPeEMsSUFBSTRCLElBQWpCO0FBQ0EsUUFBSVksS0FBS25FLFFBQUwsS0FBa0JQLFNBQWxCLElBQStCMEUsS0FBS2xFLFFBQUwsS0FBa0JSLFNBQXJELEVBQWdFO0FBQUU7QUFDOURtQyxZQUFJVSxNQUFKLENBQVcsR0FBWCxFQUFnQk4sSUFBaEIsQ0FBcUI7QUFDakJvQyxxQkFBUyxLQURRO0FBRWpCZixtQkFBTztBQUZVLFNBQXJCO0FBSUEsZUFMNEQsQ0FLcEQ7QUFDWDtBQUNERixZQUFRQyxHQUFSLHVCQUF5QmUsS0FBS25FLFFBQTlCO0FBQ0EsV0FBTzRDLEtBQ0Z5QixPQURFLENBQ007QUFDTGIsZUFBTztBQUNIeEQsc0JBQVVtRSxLQUFLbkUsUUFEWjtBQUVIQyxzQkFBVWtFLEtBQUtsRTtBQUZaO0FBREYsS0FETixFQU1BO0FBTkEsS0FPRjhDLElBUEUsQ0FPRyxVQUFDRSxJQUFELEVBQWdCO0FBQ2xCLFlBQUlBLFFBQVEsSUFBWixFQUFrQjtBQUFFO0FBQ2hCckIsZ0JBQUlVLE1BQUosQ0FBVyxHQUFYLEVBQWdCTixJQUFoQixDQUFxQjtBQUNqQm9DLHlCQUFTLEtBRFE7QUFFakJmLHVCQUFPO0FBRlUsYUFBckI7QUFJQTtBQUNIOztBQUVEO0FBQ0FGLGdCQUFRQyxHQUFSLDBDQUE0Q0gsS0FBS2pELFFBQWpEO0FBQ0EsZUFBT2lELEtBQUtoRCxRQUFaLENBWGtCLENBV0k7QUFDdEIwQixZQUFJMkMsT0FBSixDQUFZckIsSUFBWixHQUFtQkEsSUFBbkIsQ0Faa0IsQ0FZTztBQUN6QnJCLFlBQUlVLE1BQUosQ0FBVyxHQUFYLEVBQWdCTixJQUFoQixDQUFxQjtBQUNqQm9DLHFCQUFTLElBRFE7QUFFakJuQixzQkFGaUIsQ0FFWDtBQUZXLFNBQXJCO0FBSUgsS0F4QkUsRUF3QkE7QUF4QkEsY0F5QkksVUFBQ0ksS0FBRCxFQUFrQjtBQUNyQkYsZ0JBQVFDLEdBQVIsQ0FBWUMsS0FBWjtBQUNBekIsWUFBSVUsTUFBSixDQUFXLEdBQVgsRUFBZ0JOLElBQWhCLENBQXFCO0FBQ2pCb0MscUJBQVMsS0FEUTtBQUVqQmY7QUFGaUIsU0FBckI7QUFJSCxLQS9CRSxDQUFQLENBVjBELENBeUNsRDtBQUNYLENBMUNNOztBQTRDQSxJQUFNa0IsMEJBQVMsU0FBVEEsTUFBUyxDQUFDNUMsR0FBRCxFQUFlQyxHQUFmLEVBQXlDO0FBQzNELFFBQU00QyxlQUFlN0MsSUFBSTJDLE9BQUosQ0FBWXJCLElBQWpDO0FBQ0F0QixRQUFJMkMsT0FBSixDQUFZRyxLQUFaO0FBQ0E3QyxRQUFJVSxNQUFKLENBQVcsR0FBWCxFQUFnQk4sSUFBaEIsQ0FBcUI7QUFDakJvQyxpQkFBUyxJQURRO0FBRWpCbkIsY0FBTXVCO0FBRlcsS0FBckI7QUFJSCxDQVBNOztBQVNBLElBQU1FLG9DQUFjLFNBQWRBLFdBQWMsQ0FBQy9DLEdBQUQsRUFBZUMsR0FBZixFQUF5QztBQUNoRSxRQUFJRCxJQUFJMkMsT0FBSixDQUFZckIsSUFBaEIsRUFBc0I7QUFDbEIsZUFBT3RCLElBQUkyQyxPQUFKLENBQVlyQixJQUFaLENBQWlCaEQsUUFBeEIsQ0FEa0IsQ0FDZ0I7QUFDbEMsWUFBTWtFLE9BQU87QUFDVFEsdUJBQVcsSUFERjtBQUVUMUIsa0JBQU10QixJQUFJMkMsT0FBSixDQUFZckI7QUFGVCxTQUFiO0FBSUFyQixZQUFJVSxNQUFKLENBQVcsR0FBWCxFQUFnQk4sSUFBaEIsQ0FBcUJtQyxJQUFyQjtBQUNILEtBUEQsTUFPTztBQUNILFlBQU1BLFFBQU87QUFDVFEsdUJBQVc7QUFERixTQUFiO0FBR0EvQyxZQUFJVSxNQUFKLENBQVcsR0FBWCxFQUFnQk4sSUFBaEIsQ0FBcUJtQyxLQUFyQjtBQUNIO0FBQ0osQ0FkTSxDOzs7Ozs7Ozs7O0FDOURQOzs7Ozs7cUJBRWUsVUFBQzFDLEdBQUQsRUFBUztBQUNwQkEsUUFBSVksR0FBSixDQUFRLGVBQVI7QUFDSCxDOzs7Ozs7Ozs7QUNKRDs7OztBQUlBLElBQU11QyxXQUFXLFNBQVhBLFFBQVcsQ0FBQ2pELEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQzNCQSxRQUFJVSxNQUFKLENBQVcsR0FBWCxFQUFnQk4sSUFBaEIsQ0FBcUI7QUFDakIsZ0JBQVEsQ0FDSjtBQUNBNkMsa0JBQU0sbUJBRE47QUFFQVAscUJBQVMsaUNBRlQ7QUFHQVEscUJBQVMsRUFIVDtBQUlBQyxzQkFBVSxFQUpWO0FBS0FDLHNCQUFVLEVBTFY7QUFNQUMsbUJBQU87QUFOUCxTQURJLEVBU0o7QUFDQUosa0JBQU0sb0JBRE47QUFFQVAscUJBQVMsaUJBRlQ7QUFHQVEscUJBQVMsc0JBSFQ7QUFJQUMsc0JBQVUsRUFKVjtBQUtBQyxzQkFBVSxZQUxWO0FBTUFDLG1CQUFPO0FBTlAsU0FUSSxFQWlCSjtBQUNBSixrQkFBTSxxQkFETjtBQUVBUCxxQkFBUyxTQUZUO0FBR0FRLHFCQUFTLG9EQUhUO0FBSUFDLHNCQUFVLEVBSlY7QUFLQUMsc0JBQVUsWUFMVjtBQU1BQyxtQkFBTztBQU5QLFNBakJJLEVBeUJKO0FBQ0FKLGtCQUFNLHFCQUROO0FBRUFQLHFCQUFTLCtCQUZUO0FBR0FRLHFCQUFTLCtCQUhUO0FBSUFDLHNCQUFVLEVBSlY7QUFLQUMsc0JBQVUsYUFMVjtBQU1BQyxtQkFBTztBQU5QLFNBekJJLEVBaUNKO0FBQ0FKLGtCQUFNLHFCQUROO0FBRUFQLHFCQUFTLCtCQUZUO0FBR0FRLHFCQUFTLDRCQUhUO0FBSUFDLHNCQUFVLEVBSlY7QUFLQUMsc0JBQVUsWUFMVjtBQU1BQyxtQkFBTztBQU5QLFNBakNJLEVBeUNKO0FBQ0FKLGtCQUFNLHFCQUROO0FBRUFQLHFCQUFTLCtCQUZUO0FBR0FRLHFCQUFTLDRCQUhUO0FBSUFDLHNCQUFVLEVBSlY7QUFLQUMsc0JBQVUsY0FMVjtBQU1BQyxtQkFBTztBQU5QLFNBekNJLEVBaURKO0FBQ0FKLGtCQUFNLHFCQUROO0FBRUFQLHFCQUFTLCtCQUZUO0FBR0FRLHFCQUFTLGdDQUhUO0FBSUFDLHNCQUFVLEVBSlY7QUFLQUMsc0JBQVUsY0FMVjtBQU1BQyxtQkFBTztBQU5QLFNBakRJLEVBeURKO0FBQ0FKLGtCQUFNLHFCQUROO0FBRUFQLHFCQUFTLCtCQUZUO0FBR0FRLHFCQUFTLHNDQUhUO0FBSUFDLHNCQUFVLEVBSlY7QUFLQUMsc0JBQVUsY0FMVjtBQU1BQyxtQkFBTztBQU5QLFNBekRJLEVBaUVKO0FBQ0FKLGtCQUFNLHFCQUROO0FBRUFQLHFCQUFTLCtCQUZUO0FBR0FRLHFCQUFTLDJCQUhUO0FBSUFDLHNCQUFVLEVBSlY7QUFLQUMsc0JBQVUsUUFMVjtBQU1BQyxtQkFBTztBQU5QLFNBakVJLEVBeUVKO0FBQ0FKLGtCQUFNLHFCQUROO0FBRUFQLHFCQUFTLCtCQUZUO0FBR0FRLHFCQUFTLHVDQUhUO0FBSUFDLHNCQUFVLEVBSlY7QUFLQUMsc0JBQVUsZ0JBTFY7QUFNQUMsbUJBQU87QUFOUCxTQXpFSSxFQWlGSjtBQUNBSixrQkFBTSxvQkFETjtBQUVBUCxxQkFBUyxPQUZUO0FBR0FRLHFCQUFTLEVBSFQ7QUFJQUMsc0JBQVUsRUFKVjtBQUtBQyxzQkFBVSxZQUxWO0FBTUFDLG1CQUFPO0FBTlAsU0FqRkksRUF5Rko7QUFDQUosa0JBQU0sbUJBRE47QUFFQVAscUJBQVMsY0FGVDtBQUdBUSxxQkFBUyxTQUhUO0FBSUFDLHNCQUFVLEVBSlY7QUFLQUMsc0JBQVUsWUFMVjtBQU1BQyxtQkFBTztBQU5QLFNBekZJLEVBaUdKO0FBQ0FKLGtCQUFNLG1CQUROO0FBRUFQLHFCQUFTLGNBRlQ7QUFHQVEscUJBQVMsOEJBSFQ7QUFJQUMsc0JBQVUsRUFKVjtBQUtBQyxzQkFBVSxZQUxWO0FBTUFDLG1CQUFPO0FBTlAsU0FqR0ksRUF5R0o7QUFDQUosa0JBQU0sbUJBRE47QUFFQVAscUJBQVMsY0FGVDtBQUdBUSxxQkFBUyx1Q0FIVDtBQUlBQyxzQkFBVSxFQUpWO0FBS0FDLHNCQUFVLFlBTFY7QUFNQUMsbUJBQU87QUFOUCxTQXpHSSxFQWlISjtBQUNBSixrQkFBTSxtQkFETjtBQUVBUCxxQkFBUyxTQUZUO0FBR0FRLHFCQUFTLHVFQUhUO0FBSUFDLHNCQUFVLEVBSlY7QUFLQUMsc0JBQVUsWUFMVjtBQU1BQyxtQkFBTztBQU5QLFNBakhJLEVBeUhKO0FBQ0FKLGtCQUFNLG1CQUROO0FBRUFQLHFCQUFTLHNCQUZUO0FBR0FRLHFCQUFTLEVBSFQ7QUFJQUMsc0JBQVUsRUFKVjtBQUtBQyxzQkFBVSx3REFMVjtBQU1BQyxtQkFBTztBQU5QLFNBekhJLEVBaUlKO0FBQ0FKLGtCQUFNLG1CQUROO0FBRUFQLHFCQUFTLGlCQUZUO0FBR0FRLHFCQUFTLHNCQUhUO0FBSUFDLHNCQUFVLEVBSlY7QUFLQUMsc0JBQVUsWUFMVjtBQU1BQyxtQkFBTztBQU5QLFNBaklJLEVBeUlKO0FBQ0FKLGtCQUFNLG1CQUROO0FBRUFQLHFCQUFTLHNCQUZUO0FBR0FRLHFCQUFTLGdCQUhUO0FBSUFDLHNCQUFVLEVBSlY7QUFLQUMsc0JBQVUsWUFMVjtBQU1BQyxtQkFBTztBQU5QLFNBeklJO0FBRFMsS0FBckI7QUFvSkgsQ0FySkQ7O3FCQXVKZUwsUTs7Ozs7Ozs7OztBQzNKZjs7SUFBWS9GLEk7Ozs7cUJBRUcsVUFBQzRDLEdBQUQsRUFBUztBQUNwQkEsUUFBSVksR0FBSixDQUFRLDBCQUFSLEVBQW9DLFVBQUNWLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQzlDLFlBQU16QyxZQUFZRixRQUFRRyxHQUFSLEVBQWxCO0FBQ0F3QyxZQUFJVyxRQUFKLENBQWEsZUFBYixFQUE4QixFQUFFQyxNQUFNM0QsS0FBS1MsSUFBTCxDQUFVSCxTQUFWLEVBQXFCLGdCQUFyQixDQUFSLEVBQTlCO0FBQ0gsS0FIRDtBQUlILEM7Ozs7Ozs7Ozs7QUNQRDs7Ozs7O3FCQUVlLFVBQUNzQyxHQUFELEVBQVM7QUFDcEJBLFFBQUlrQixJQUFKLENBQVMsYUFBVDtBQUNILEM7Ozs7Ozs7Ozs7QUNGRDs7Ozs7O0FBRkEsSUFBTUMsT0FBTyxtQkFBQTdELENBQVEsQ0FBUixFQUF3QjZELElBQXJDOztBQUV1Qzs7QUFFdkMsSUFBTXNDLFNBQVMsU0FBVEEsTUFBUyxDQUFDdkQsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDekIsV0FBT2dCLEtBQ0ZFLE9BREUsQ0FDTSxFQUROLEVBQ1U7QUFEVixLQUVGQyxJQUZFLENBRUcsVUFBQ0MsS0FBRCxFQUFXO0FBQ2I7QUFDQUEsY0FBTXpDLE9BQU4sQ0FBYyxVQUFDMEMsSUFBRCxFQUFVO0FBQUUsbUJBQU9BLEtBQUtDLFVBQUwsQ0FBZ0JqRCxRQUF2QjtBQUFpQyxTQUEzRDs7QUFFQSxZQUFJa0YsV0FBV25DLE1BQU1vQyxHQUFOLENBQVUsVUFBQ25DLElBQUQ7QUFBQSxtQkFBVUEsS0FBS0MsVUFBZjtBQUFBLFNBQVYsQ0FBZjs7QUFFQTtBQUNBLFlBQU1tQyxRQUFRMUQsSUFBSTRCLElBQUosQ0FBUzhCLEtBQXZCLENBUGEsQ0FPaUI7O0FBRTlCO0FBQ0EsWUFBSUMsY0FBYyx5QkFBZ0JELEtBQWhCLEVBQXVCRixRQUF2QixDQUFsQjtBQUNBOztBQUVBdkQsWUFBSVUsTUFBSixDQUFXLEdBQVgsRUFBZ0JOLElBQWhCLENBQXFCc0QsV0FBckI7QUFDSCxLQWhCRSxFQWdCQTtBQWhCQSxjQWlCSSxVQUFDakMsS0FBRCxFQUFrQjtBQUNyQkYsZ0JBQVFDLEdBQVIsQ0FBWUMsS0FBWjtBQUNBLGVBQU96QixJQUFJVSxNQUFKLENBQVcsR0FBWCxFQUFnQk4sSUFBaEIsQ0FBcUJxQixLQUFyQixDQUFQO0FBQ0gsS0FwQkUsQ0FBUCxDQUR5QixDQXFCakI7QUFDWCxDQXRCRDs7cUJBd0JlNkIsTTs7Ozs7Ozs7O0FDNUJmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7OztBQVNBOztBQUVBLElBQU1BLFNBQVMsU0FBVEEsTUFBUyxDQUFDRyxLQUFELEVBQVFyQyxLQUFSLEVBQWtCO0FBQzdCO0FBQ0E7Ozs7Ozs7OztBQVNDO0FBQ0Q7O0FBRUM7QUFDQSxRQUFJdUMsYUFBYUYsTUFBTUcsS0FBTixDQUFZLEdBQVosQ0FBakI7O0FBRUQ7QUFDQTtBQUNDRixrQkFBY3RDLE1BQU1vQyxHQUFOLENBQVUsVUFBQ25DLElBQUQsRUFBVTtBQUMvQndDLGVBQU8sQ0FBUDtBQUNBLGFBQUtDLElBQUksQ0FBVCxFQUFZQSxJQUFJSCxXQUFXN0IsTUFBM0IsRUFBbUNnQyxHQUFuQyxFQUNBO0FBQ0ksZ0JBQUlDLEtBQUtDLFNBQUwsQ0FBZTNDLElBQWYsRUFBcUI0QyxXQUFyQixHQUFtQ3hGLE9BQW5DLENBQTJDa0YsV0FBV0csQ0FBWCxFQUFjRyxXQUFkLEVBQTNDLE1BQTRFLENBQUMsQ0FBakYsRUFDQTtBQUNJSjtBQUNIO0FBQ0o7O0FBRUQ7QUFDSUE7QUFESixXQUVPeEMsSUFGUDtBQUlGLEtBZGEsQ0FBZDs7QUFnQkQ7QUFDQXFDLGdCQUFZUSxJQUFaLENBQWlCLFVBQVNDLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQzFCLGVBQU9BLEVBQUVQLElBQUYsR0FBU00sRUFBRU4sSUFBbEI7QUFDSCxLQUZEOztBQUlBO0FBQ0EsU0FBSUMsSUFBSSxDQUFSLEVBQVdBLElBQUlKLFlBQVk1QixNQUEzQixFQUFtQ2dDLEdBQW5DLEVBQ0E7QUFDSUosb0JBQVlJLENBQVosRUFBZUQsSUFBZixHQUFzQkMsSUFBSSxDQUExQjtBQUNIOztBQUVELFdBQU9KLFdBQVA7QUFDSCxDQS9DRDs7cUJBaURlSixNOzs7Ozs7QUNsRWYsbUM7Ozs7OztBQ0FBLHdDOzs7Ozs7QUNBQSxJQUFNZSxXQUFXLG1CQUFBbEgsQ0FBUSxFQUFSLENBQWpCLEMsQ0FBNkM7O0FBRTdDLElBQU15QyxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsR0FBRCxFQUFTO0FBQ3pCO0FBQ0FBLFFBQUlRLEdBQUosQ0FBUWdFLFNBQVM7QUFDYkMsb0JBQVksU0FEQyxFQUNVO0FBQ3ZCQyxnQkFBUSxxQkFGSyxFQUVrQjtBQUMvQkMsa0JBQVUsSUFBSSxFQUFKLEdBQVMsRUFBVCxHQUFjLElBSFgsRUFHaUI7QUFDOUJDLHdCQUFnQixPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLENBSnBCLENBSXVCO0FBSnZCLEtBQVQsQ0FBUjs7QUFPQTVFLFFBQUlRLEdBQUosQ0FBUSxVQUFDTixHQUFELEVBQU1DLEdBQU4sRUFBV0MsSUFBWCxFQUFvQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxZQUFNeUUsY0FBYyxDQUNoQixzQkFEZ0IsQ0FBcEI7QUFHQSxZQUFNekgsT0FBTzhDLElBQUk0RSxXQUFqQjtBQUNBLFlBQUksQ0FBQzVFLElBQUkyQyxPQUFKLENBQVlyQixJQUFqQixFQUF1QjtBQUNuQkUsb0JBQVFDLEdBQVIsQ0FBWSxZQUFaO0FBQ0EsZ0JBQUksSUFBSW9ELE1BQUosQ0FBV0YsWUFBWWhILElBQVosQ0FBaUIsR0FBakIsQ0FBWCxFQUFrQyxHQUFsQyxFQUF1Q21ILElBQXZDLENBQTRDNUgsSUFBNUMsQ0FBSixFQUF1RDtBQUFFO0FBQ3JEK0Msb0JBQUlVLE1BQUosQ0FBVyxHQUFYLEVBQWdCTixJQUFoQixDQUFxQixlQUFyQjtBQUNILGFBRkQsTUFFTztBQUFFO0FBQ0xIO0FBQ0g7QUFDSixTQVBELE1BT087QUFDSHNCLG9CQUFRQyxHQUFSLGdDQUFrQ3pCLElBQUkyQyxPQUFKLENBQVlyQixJQUFaLENBQWlCakQsUUFBbkQ7QUFDQTZCO0FBQ0g7QUFDSixLQW5CRDtBQW9CSCxDQTdCRDs7QUErQkFyQyxPQUFPdUIsT0FBUCxHQUFpQlMsV0FBakIsQzs7Ozs7O0FDakNBLDRDIiwiZmlsZSI6ImRpc3QvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzODMxMDFiOTI1N2E4NTZjN2NjYiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gRVM2LXN0eWxlIGltcG9ydHNcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgU2VxdWVsaXplIGZyb20gJ3NlcXVlbGl6ZSc7XG5cbmNvbnN0IGNvbmZpZ0ZpbGUgID0gcmVxdWlyZSgnLi4vY29uZmlnL2NvbmZpZy5qc29uJyk7XG5cbnZhciBlbnYgICAgICAgICAgICAgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnOyAvLyBEZXRlcm1pbmUgaWYgdXNpbmcgZGV2ZWxvcG1lbnRcbmNvbnN0IF9fZGlybmFtZSAgICAgPSBwcm9jZXNzLmN3ZCgpOyAvLyBDb3VsZCBicmVhayBvbiBwcm9kXG5jb25zdCBjdXJyZW50RGlyID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vc2VydmVyL3NyYy9tb2RlbHMnKTtcblxuLy8gUmVndWxhciBgbW9kdWxlLmZpbGVuYW1lYCBpcyB1bmRlZmluZWQgaW4gbG9jYWwgZGV2XG5jb25zdCBmaWxlbmFtZSA9IChtb2R1bGUuZmlsZW5hbWUgIT09IHVuZGVmaW5lZCkgPyBtb2R1bGUuZmlsZW5hbWUgOiAnaW5kZXguanMnO1xudmFyIGJhc2VuYW1lICA9IHBhdGguYmFzZW5hbWUoZmlsZW5hbWUpO1xuXG52YXIgZGIgPSB7fTtcblxuLy8gSSB1c2UgdGhlIG5vZGUtY29uZmlnIHBhY2thZ2UgdG8gbWFuYWdlIHRoZSBEQiBjb25maWcgeW91IGNhbiBjaG9vc2Vcbi8vIHRvIHN0aWNrIHdpdGggdGhlIG9yaWdpbmFsIHZlcnNpb24uIEFuZCBJIHJlbW92ZWQgZW52aXJvbm1lbnQgdmFyaWFibGVcbi8vIHN1cHBvcnQgYmVjYXVzZSBJIGRvbid0IG5lZWQgaXQuXG5sZXQgc2VxdWVsaXplID0ge307XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYpIHtcbiAgICAvLyBGcm9tIHRoZSBlbnZpcm9ubWVudCwgZXh0cmFjdCB0aGUga2V5IHdpdGggdGhlIG5hbWUgcHJvdmlkZWQgaW4gdGhlIGNvbmZpZyBhcyB1c2VfZW52X3ZhcmlhYmxlXG4gICAgLy8gYW5kIHVzZSB0aGF0IHRvIGVzdGFibGlzaCBhIGNvbm5lY3Rpb24gdG8gb3VyIGRhdGFiYXNlLlxuICAgIHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUocHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMKTsgLy8gRXN0YWJsaXNoIGNvbm5lY3Rpb24gdXNpbmcgZW52aXJvbm1lbnQgdmFyaWFibGVzXG5cbn0gZWxzZSB7XG4gICAgdmFyIGNvbmZpZyAgICA9IGNvbmZpZ0ZpbGVbZW52XTsgLy8gSWYgbG9jYWwsIHVzZSBjb25maWdcblxuICAgIHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUoY29uZmlnLmRhdGFiYXNlLCBjb25maWcudXNlcm5hbWUsIGNvbmZpZy5wYXNzd29yZCwgY29uZmlnKTsgLy8gQ29ubmVjdFxufVxuXG5mc1xuICAgIC5yZWFkZGlyU3luYyhjdXJyZW50RGlyKVxuICAgIC5maWx0ZXIoZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICByZXR1cm4gKGZpbGUuaW5kZXhPZignLicpICE9PSAwKSAmJiAoZmlsZSAhPT0gYmFzZW5hbWUpICYmIChmaWxlLnNsaWNlKC0zKSA9PT0gJy5qcycpO1xuICAgIH0pXG4gICAgLmZvckVhY2goZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICB2YXIgbW9kZWwgPSBzZXF1ZWxpemUuaW1wb3J0KHBhdGguam9pbihjdXJyZW50RGlyLCBmaWxlKSk7XG4gICAgICAgIGRiW21vZGVsLm5hbWVdID0gbW9kZWw7XG4gICAgfSk7XG5cbk9iamVjdC5rZXlzKGRiKS5mb3JFYWNoKGZ1bmN0aW9uKG1vZGVsTmFtZSkge1xuICAgIGlmIChkYlttb2RlbE5hbWVdLmFzc29jaWF0ZSkge1xuICAgICAgICBkYlttb2RlbE5hbWVdLmFzc29jaWF0ZShkYik7XG4gICAgfVxufSk7XG5cbmRiLnNlcXVlbGl6ZSA9IHNlcXVlbGl6ZTtcbmRiLlNlcXVlbGl6ZSA9IFNlcXVlbGl6ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBkYjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvbW9kZWxzL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1wb2x5ZmlsbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQXBwbGljYXRpb24gZW50cnksIHNldHRpbmcgdXAgc2VydmVyXG5pbXBvcnQgYXBwIGZyb20gJy4vYXBwJzsgLy8gVGhlIGV4cHJlc3MgYXBwIHdlIGp1c3QgY3JlYXRlZFxuXG5jb25zdCBwb3J0ID0gcGFyc2VJbnQocHJvY2Vzcy5lbnYuUE9SVCwgMTApIHx8IDU1NTU7XG5hcHAuc2V0KCdwb3J0JywgcG9ydCk7XG5cbi8vIDAuMC4wLjAgbWFrZXMgaXQgYXZhaWxhYmxlIG9uIHlvdXIgbG9jYWwgbmV0d29ya1xuLy8gYXBwLmxpc3Rlbihwb3J0LCAnMC4wLjAuMCcpO1xuYXBwLmxpc3Rlbihwb3J0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvaW5kZXguanMiLCJpbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcblxuY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbmNvbnN0IGxvZ2dlciA9IHJlcXVpcmUoJ21vcmdhbicpO1xuY29uc3QgYm9keVBhcnNlciA9IHJlcXVpcmUoJ2JvZHktcGFyc2VyJyk7XG5jb25zdCBzZXNzaW9uQXV0aCA9IHJlcXVpcmUoJy4vY29uZmlnL3Nlc3Npb24nKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbmxldCBfX2Rpcm5hbWUgPSBwcm9jZXNzLmN3ZCgpO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7IC8vIFNldHVwIGV4cHJlc3MgYXBwXG5cbi8vIEFsbG93IGNyb3NzIG9yaWdpbiByZXF1ZXN0cyB3aXRoIGF1dGhvcml6YXRpb24gKGZvciBBUEkgcHVycG9zZXMpXG5hcHAuYWxsKCcqJywgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKTtcbiAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJywgJ1BVVCwgR0VULCBQT1NULCBERUxFVEUsIE9QVElPTlMnKTtcbiAgICByZXMuaGVhZGVyKFxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsXG4gICAgICAgICdhY2NlcHQsIGNvbnRlbnQtdHlwZSwgeC1wYXJzZS1hcHBsaWNhdGlvbi1pZCwgeC1wYXJzZS1yZXN0LWFwaS1rZXksIHgtcGFyc2Utc2Vzc2lvbi10b2tlbiwgQVVUSE9SSVpBVElPTidcbiAgICApO1xuXG4gICAgLy8gSW50ZXJjZXB0IE9QVElPTlMgbWV0aG9kXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdPUFRJT05TJykge1xuICAgICAgICByZXMuc2VuZCgyMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5leHQoKTtcbiAgICB9XG59KTtcblxuLy8gU2V0dXAgYXV0aGVudGljYXRpb24gYW5kIHNlY3VyaXR5XG5zZXNzaW9uQXV0aChhcHApO1xuXG4vLyBMb2cgcmVxdWVzdHMgdG8gdGhlIGNvbnNvbGUuXG5hcHAudXNlKGxvZ2dlcignZGV2JykpO1xuXG4vLyBQYXJzZSBpbmNvbWluZyByZXF1ZXN0cyBkYXRhIChodHRwczovL2dpdGh1Yi5jb20vZXhwcmVzc2pzL2JvZHktcGFyc2VyKVxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiBmYWxzZSB9KSk7XG5hcHAudXNlKCcvc2NyaXB0cycsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi8uLi9jbGllbnQvZGlzdCcpKSk7XG5cbi8vIFJlcXVpcmUgcm91dGVzIGFuZCBzaW11bHRhbmVvdXNseSBhdHRhY2ggYXBwXG5yb3V0ZXMoYXBwKTtcblxuLy8gQ2F0Y2ggYWxsIGlmIHRoZSByb3V0ZXMgZG9lc24ndCBmaW5kIGEgdmFsaWQgVVJMXG5hcHAuZ2V0KCcqJywgKHJlcSwgcmVzKSA9PiByZXMuc3RhdHVzKDIwMCkuc2VuZCgnTm90aGluZyBoZXJlIHlldC4uLicpKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9hcHAuanMiLCJpbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuXG4vLyBGdW5jdGlvbmFsIGNvbnRyb2xsZXJzIGdvIGhlcmU6XG4vLyAuLi5cblxuLy8gTWFrZSBtb2R1bGFyIHNvIG5vdCBhbGwgcm91dGVzIGFyZSBoZXJlXG5pbXBvcnQgYXBpUm91dGVzIGZyb20gJy4vYXBpUm91dGVzJztcbmltcG9ydCB1c2VyUm91dGVzIGZyb20gJy4vdXNlclJvdXRlcyc7XG5pbXBvcnQgbG9naW5Sb3V0ZXMgZnJvbSAnLi9sb2dpblJvdXRlcyc7XG5pbXBvcnQgZGF5T2ZSb3V0ZXMgZnJvbSAnLi9kYXlPZlJvdXRlcyc7XG5pbXBvcnQgbWVkaWFSb3V0ZXMgZnJvbSAnLi9tZWRpYVJvdXRlcyc7XG5pbXBvcnQgc2VhcmNoUm91dGVzIGZyb20gJy4vc2VhcmNoUm91dGVzJztcblxuLy8gUmVxdWlyZXMgYW4gYXBwIGFzIGFuIGlucHV0IHNvIGNhbiBkaXJlY3QgdGhlIHVzZXIgYWNjb3JkaW5nbHlcbmV4cG9ydCBkZWZhdWx0IChhcHApID0+IHtcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKiAgUm91dGVzICAqKioqKioqKioqKioqKioqKioqKiAqL1xuICAgIGFwaVJvdXRlcyhhcHApO1xuICAgIHVzZXJSb3V0ZXMoYXBwKTtcbiAgICBsb2dpblJvdXRlcyhhcHApO1xuICAgIGRheU9mUm91dGVzKGFwcCk7XG4gICAgbWVkaWFSb3V0ZXMoYXBwKTtcbiAgICBzZWFyY2hSb3V0ZXMoYXBwKTtcblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqICBDbGllbnQgICoqKioqKioqKioqKioqKioqKioqICovXG5cbiAgICAvLyBTZXJ2ZSB0aGUgc3RhdGljIGNsaWVudCBpbmRleC5qcyBidWlsZCBmaWxlXG4gICAgYXBwLmdldCgnL3NjcmlwdHMvaW5kZXguanMnLCAocmVxLCByZXMpID0+IHtcbiAgICAgICAgY29uc3QgX19kaXJuYW1lID0gcHJvY2Vzcy5jd2QoKTtcbiAgICAgICAgcmVzLnNlbmRGaWxlKCdpbmRleC5qcycsIHsgcm9vdDogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vY2xpZW50L2Rpc3QnKSB9KTtcbiAgICB9KTtcblxuICAgIGFwcC5nZXQoJy9mYXZpY29uLnBuZycsIChyZXEsIHJlcykgPT4ge1xuICAgICAgICBjb25zdCBfX2Rpcm5hbWUgPSBwcm9jZXNzLmN3ZCgpO1xuICAgICAgICByZXMuc2VuZEZpbGUoJ2Zhdmljb24ucG5nJywgeyByb290OiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9jbGllbnQvZGlzdCcpIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gQ2xpZW50IGFwcCBlbnRyeSBpbmRleC5odG1sIGZpbGUgLSByZWFjdCByb3V0ZXJcbiAgICBhcHAuZ2V0KCcqJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgIGNvbnN0IF9fZGlybmFtZSA9IHByb2Nlc3MuY3dkKCk7XG4gICAgICAgIHJlcy5zZW5kRmlsZSgnaW5kZXguaHRtbCcsIHsgcm9vdDogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vY2xpZW50L2Rpc3QnKSB9KTsgLy8gUmVuZGVyIGNsaWVudFxuICAgIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvcm91dGVzL2luZGV4LmpzIiwiaW1wb3J0IHsgdGVzdEZ1bmN0aW9uIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvdGVzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IChhcHApID0+IHtcbiAgICBhcHAuZ2V0KCcvYXBpL3Rlc3QnLCB0ZXN0RnVuY3Rpb24pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvcm91dGVzL2FwaVJvdXRlcy5qcyIsImV4cG9ydCBjb25zdCB0ZXN0RnVuY3Rpb24gPSAocmVxLCByZXMpID0+IHtcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCgnVGhpcyBpcyBhIHRlc3QnKTtcbn07XG5cbmV4cG9ydCBjb25zdCB0ZXN0RnVuY3Rpb24yID0gKHJlcSwgcmVzKSA9PiB7XG4gICAgcmVzLnN0YXR1cygyMDApLnNlbmQoJ1RoaXMgaXMgdGVzdCAjMicpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvY29udHJvbGxlcnMvdGVzdC9pbmRleC5qcyIsImltcG9ydCB7IGNyZWF0ZVVzZXIsIGxpc3QsIGNoZWNrVXNlcm5hbWUgfSBmcm9tICcuLi9jb250cm9sbGVycy91c2Vycyc7XG5cbmV4cG9ydCBkZWZhdWx0IChhcHApID0+IHtcbiAgICBhcHAucG9zdCgnL2FwaS91c2Vycy9jcmVhdGUnLCBjcmVhdGVVc2VyKTtcbiAgICBhcHAuZ2V0KCcvYXBpL3VzZXJzJywgbGlzdCk7XG4gICAgYXBwLnBvc3QoJy9hcGkvdXNlcnMvY2hlY2tVc2VybmFtZScsIGNoZWNrVXNlcm5hbWUpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvcm91dGVzL3VzZXJSb3V0ZXMuanMiLCJjb25zdCBVc2VyID0gcmVxdWlyZSgnLi4vLi4vbW9kZWxzJykuVXNlcjtcblxuZXhwb3J0IGNvbnN0IGxpc3QgPSAocmVxLCByZXMpID0+IHtcbiAgICByZXR1cm4gVXNlclxuICAgICAgICAuZmluZEFsbCh7fSkgLy8gR2V0IGFsbCBxdW90ZXNcbiAgICAgICAgLnRoZW4oKHVzZXJzKSA9PiB7XG4gICAgICAgICAgICAvLyBGaWx0ZXIgb3V0IHBhc3N3b3JkIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgIHVzZXJzLmZvckVhY2goKHVzZXIpID0+IHsgZGVsZXRlIHVzZXIuZGF0YVZhbHVlcy5wYXNzd29yZCB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJzKTtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHVzZXJzKTtcbiAgICAgICAgfSkgLy8gUmV0dXJuIGFycmF5IG9mIHF1b3Rlc1xuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTsgLy8gRXJyb3Jcbn07XG5cbmV4cG9ydCBjb25zdCBjaGVja1VzZXJuYW1lID0gKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICB1c2VybmFtZSxcbiAgICB9ID0gcmVxLmJvZHk7IC8vIEdldCB1c2VybmFtZVxuICAgIHJldHVybiBVc2VyLlxuICAgICAgICBmaW5kQWxsKHtcbiAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWUsIC8vIFNlZSBpZiB1c2VyIGV4aXN0cyB3aXRoIHRoYXQgdXNlcm5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHVzZXJzKSA9PiB7XG4gICAgICAgICAgICB1c2VybmFtZUF2YWlsYWJsZSA9ICh1c2Vycy5sZW5ndGggPT0gMCk7IC8vIFVzZXJuYW1lIGF2YWlsYWJsZSBpZiBub25lXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlOiB1c2VybmFtZUF2YWlsYWJsZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTsgLy8gRXJyb3Jcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVzZXIgPSAocmVxLCByZXMpID0+IHtcbiAgICBjb25zb2xlLmxvZygnQ3JlYXRlZCB1c2VyJyk7XG4gICAgY29uc3Qge1xuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgICBmaXJzdF9uYW1lLFxuICAgICAgICBsYXN0X25hbWUsXG4gICAgICAgIG9yZ2FuaXphdGlvbixcbiAgICB9ID0gcmVxLmJvZHk7IC8vIEluZm9ybWF0aW9uIGZyb20gdGhlIHJlcXVlc3QgYm9keSBKU09OIGRhdGFcblxuICAgIHJldHVybiBVc2VyXG4gICAgICAgIC5jcmVhdGUoe1xuICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICAgICAgZmlyc3RfbmFtZSxcbiAgICAgICAgICAgIGxhc3RfbmFtZSxcbiAgICAgICAgICAgIG9yZ2FuaXphdGlvbixcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHVzZXIpID0+IHsgLy8gU3VjY2VzczogY3JlYXRlZCBuZXcgcXVvdGUgZW50cnlcbiAgICAgICAgICAgIGRlbGV0ZSB1c2VyLmRhdGFWYWx1ZXMucGFzc3dvcmQ7IC8vIFJlbW92ZSBwYXNzd29yZFxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQodXNlcik7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcik7XG4gICAgICAgIH0pOyAvLyBFcnJvclxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvY29udHJvbGxlcnMvdXNlcnMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZnNcIlxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2VxdWVsaXplXCJcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1wiZGV2ZWxvcG1lbnRcIjp7XCJ1c2VybmFtZVwiOlwia2V2aW5ob3VcIixcInBhc3N3b3JkXCI6bnVsbCxcImRhdGFiYXNlXCI6XCJpZ25pdGUtc3RlbS1kZXZcIixcImhvc3RcIjpcIjEyNy4wLjAuMVwiLFwicG9ydFwiOjU0MzIsXCJkaWFsZWN0XCI6XCJwb3N0Z3Jlc1wifSxcInRlc3RcIjp7XCJ1c2VybmFtZVwiOlwia2V2aW5ob3VcIixcInBhc3N3b3JkXCI6bnVsbCxcImRhdGFiYXNlXCI6XCJpZ25pdGUtc3RlbS10ZXN0XCIsXCJob3N0XCI6XCIxMjcuMC4wLjFcIixcInBvcnRcIjo1NDMyLFwiZGlhbGVjdFwiOlwicG9zdGdyZXNcIn0sXCJwcm9kdWN0aW9uXCI6e1widXNlX2Vudl92YXJpYWJsZVwiOlwiREFUQUJBU0VfVVJMXCJ9fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2VydmVyL3NyYy9jb25maWcvY29uZmlnLmpzb25cbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBsb2dpbiwgbG9nb3V0LCBjdXJyZW50VXNlciB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL2xvZ2luJztcblxuZXhwb3J0IGRlZmF1bHQgKGFwcDogZXhwcmVzcy5BcHBsaWNhdGlvbikgPT4ge1xuICAgIGFwcC5wb3N0KCcvYXBpL2xvZ2luJywgbG9naW4pO1xuICAgIGFwcC5nZXQoJy9hcGkvbG9nb3V0JywgbG9nb3V0KTtcbiAgICBhcHAuZ2V0KCcvYXBpL3VzZXJzL2N1cnJlbnQnLCBjdXJyZW50VXNlcik7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvc3JjL3JvdXRlcy9sb2dpblJvdXRlcy5qcyIsImNvbnN0IFVzZXIgPSByZXF1aXJlKCcuLi8uLi9tb2RlbHMvaW5kZXguanMnKS5Vc2VyO1xuXG4vKlxuICogUGFyYW1ldGVyczpcbiAqICByZXEuYm9keSB7XG4gKiAgICAgIHVzZXJuYW1lLFxuICogICAgICBwYXNzd29yZCxcbiAqICB9XG4gKi9cbmV4cG9ydCBjb25zdCBsb2dpbiA9IChyZXE6IFJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcbiAgICBpZiAoZGF0YS51c2VybmFtZSA9PT0gdW5kZWZpbmVkIHx8IGRhdGEucGFzc3dvcmQgPT09IHVuZGVmaW5lZCkgeyAvLyBFbXB0eSBhdXRoZW50aWNhdGlvblxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIGVycm9yOiAnUGxlYXNlIHN1Ym1pdCBhIHVzZXJuYW1lIGFuZCBwYXNzd29yZCcsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47IC8vIFRlcm1pbmF0ZVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgVXNlcm5hbWU6ICR7ZGF0YS51c2VybmFtZX1gKTtcbiAgICByZXR1cm4gVXNlclxuICAgICAgICAuZmluZE9uZSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBkYXRhLnVzZXJuYW1lLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBkYXRhLnBhc3N3b3JkLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KSAvLyBHZXQgYWxsIHF1b3Rlc1xuICAgICAgICAudGhlbigodXNlcjogVXNlcikgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXIgPT0gbnVsbCkgeyAvLyBJbnZhbGlkIGNyZWRlbnRpYWxzXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6ICdJbnZhbGlkIHVzZXJuYW1lICYgcGFzc3dvcmQnLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVmFsaWQgY3JlZGVudGlhbHNcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTdWNjZXNzZnVsbHkgbG9nZ2VkIGluIHVzZXI6ICR7dXNlci51c2VybmFtZX1gKTtcbiAgICAgICAgICAgIGRlbGV0ZSB1c2VyLnBhc3N3b3JkOyAvLyBEb24ndCBzZW5kIGJhY2sgcGFzc3dvcmRcbiAgICAgICAgICAgIHJlcS5zZXNzaW9uLnVzZXIgPSB1c2VyOyAvLyBTZXQgY29va2llXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1c2VyLCAvLyBTZW5kIHVzZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSAvLyBSZXR1cm4gYXJyYXkgb2YgcXVvdGVzXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZCh7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7IC8vIEVycm9yIGluIHJlcXVlc3Rcbn1cblxuZXhwb3J0IGNvbnN0IGxvZ291dCA9IChyZXE6IFJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSkgPT4ge1xuICAgIGNvbnN0IHByZXZpb3VzVXNlciA9IHJlcS5zZXNzaW9uLnVzZXI7XG4gICAgcmVxLnNlc3Npb24ucmVzZXQoKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgIHVzZXI6IHByZXZpb3VzVXNlcixcbiAgICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IGN1cnJlbnRVc2VyID0gKHJlcTogUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSA9PiB7XG4gICAgaWYgKHJlcS5zZXNzaW9uLnVzZXIpIHtcbiAgICAgICAgZGVsZXRlIHJlcS5zZXNzaW9uLnVzZXIucGFzc3dvcmQ7IC8vIFJlbW92ZSBwYXNzd29yZFxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgbG9nZ2VkX2luOiB0cnVlLFxuICAgICAgICAgICAgdXNlcjogcmVxLnNlc3Npb24udXNlcixcbiAgICAgICAgfTtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGxvZ2dlZF9pbjogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGRhdGEpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvY29udHJvbGxlcnMvbG9naW4vaW5kZXguanMiLCJpbXBvcnQgc2NoZWR1bGUgZnJvbSAnLi4vY29udHJvbGxlcnMvZGF5T2YnO1xuXG5leHBvcnQgZGVmYXVsdCAoYXBwKSA9PiB7XG4gICAgYXBwLmdldCgnL2FwaS9zY2hlZHVsZScsIHNjaGVkdWxlKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvc3JjL3JvdXRlcy9kYXlPZlJvdXRlcy5qcyIsIi8qIERldGFpbHM6XG4gKiAgZGF0ZTogSVNPIDg2MDFcbiAqXG4gKi9cbmNvbnN0IHNjaGVkdWxlID0gKHJlcSwgcmVzKSA9PiB7XG4gICAgcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgdGltZTogXCI5OjAwIGFtIC0gOTo0NSBhbVwiLFxuICAgICAgICAgICAgc2Vzc2lvbjogXCJSZWdpc3RyYXRpb24gKyBDYXN1YWwgQnJlYWtmYXN0XCIsXG4gICAgICAgICAgICBzcGVha2VyOiBcIlwiLFxuICAgICAgICAgICAgY2FwYWNpdHk6IFwiXCIsXG4gICAgICAgICAgICBsb2NhdGlvbjogXCJcIixcbiAgICAgICAgICAgIG5vdGVzOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgdGltZTogXCI5OjQ1IGFtIC0gMTA6MDAgYW1cIixcbiAgICAgICAgICAgIHNlc3Npb246IFwiT3BlbmluZyBSZW1hcmtzXCIsXG4gICAgICAgICAgICBzcGVha2VyOiBcIklnbml0ZVNURU0gRGlyZWN0b3JzXCIsXG4gICAgICAgICAgICBjYXBhY2l0eTogXCJcIixcbiAgICAgICAgICAgIGxvY2F0aW9uOiBcIkdXQiA0QTIyMEFcIixcbiAgICAgICAgICAgIG5vdGVzOiBcIkNvbmZlcmVuY2Ugd2VsY29tZSBhbmQgb3BlbmluZyByZW1hcmtzIGZyb20gSWduaXRlU1RFTSBEaXJlY290cnNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpbWU6IFwiMTA6MDAgYW0gLSAxMDo0NSBhbVwiLFxuICAgICAgICAgICAgc2Vzc2lvbjogXCJLZXlub3RlXCIsXG4gICAgICAgICAgICBzcGVha2VyOiBcIlBhdCBZb25ncHJhZGl0LCBDaGllZiBBY2FkZW1pYyBPZmZpY2VyIGF0IENvZGUub3JnXCIsXG4gICAgICAgICAgICBjYXBhY2l0eTogXCJcIixcbiAgICAgICAgICAgIGxvY2F0aW9uOiBcIkdXQiA0QTIyMEFcIixcbiAgICAgICAgICAgIG5vdGVzOiBcIktleW5vdGUgYnkgUGF0IFlvbmdwcmFkaXQsIENoaWVmIEFjYWRlbWljIE9mZmljZXIgYXQgQ29kZS5vcmdcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpbWU6IFwiMTE6MDAgYW0gLSAxMjozMCBwbVwiLFxuICAgICAgICAgICAgc2Vzc2lvbjogXCJMaWdodG5pbmcgVGFsa3MgYW5kIFdvcmtzaG9wc1wiLFxuICAgICAgICAgICAgc3BlYWtlcjogXCJEb24gQnVja2xleSAoRGVzaWduIFRoaW5raW5nKVwiLFxuICAgICAgICAgICAgY2FwYWNpdHk6IDMwLFxuICAgICAgICAgICAgbG9jYXRpb246IFwiQmFrZXIgRmllbGRcIixcbiAgICAgICAgICAgIG5vdGVzOiBcIkRlc2lnbiBUaGlua2luZyB3b3Jrc2hvcCBsZWQgYnkgRG9uIEJ1Y2tsZXlcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpbWU6IFwiMTE6MDAgYW0gLSAxMjozMCBwbVwiLFxuICAgICAgICAgICAgc2Vzc2lvbjogXCJMaWdodG5pbmcgVGFsa3MgYW5kIFdvcmtzaG9wc1wiLFxuICAgICAgICAgICAgc3BlYWtlcjogXCJHb2R3eW4gTW9ycmlzIChNYWtlcnNwYWNlKVwiLFxuICAgICAgICAgICAgY2FwYWNpdHk6IDUwLFxuICAgICAgICAgICAgbG9jYXRpb246IFwiR1dCIDRBMjIwQVwiLFxuICAgICAgICAgICAgbm90ZXM6IFwiTWFrZXJzcGFjZSBzZXNzaW9uIGxlZCBieSBHb2R3eW4gTW9ycmlzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICB0aW1lOiBcIjExOjAwIGFtIC0gMTI6MzAgcG1cIixcbiAgICAgICAgICAgIHNlc3Npb246IFwiTGlnaHRuaW5nIFRhbGtzIGFuZCBXb3Jrc2hvcHNcIixcbiAgICAgICAgICAgIHNwZWFrZXI6IFwiSWduaXRlU1RFTSBEZXNpZ24gVGhpbmtpbmdcIixcbiAgICAgICAgICAgIGNhcGFjaXR5OiAyMCxcbiAgICAgICAgICAgIGxvY2F0aW9uOiBcIkVtcGlyZSBTdGF0ZVwiLFxuICAgICAgICAgICAgbm90ZXM6IFwiRGVzaWduIFRoaW5raW5nIHdvcmtzaG9wIGxlZCBieSBJZ25pdGVTVEVNZXJzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICB0aW1lOiBcIjExOjAwIGFtIC0gMTI6MzAgcG1cIixcbiAgICAgICAgICAgIHNlc3Npb246IFwiTGlnaHRuaW5nIFRhbGtzIGFuZCBXb3Jrc2hvcHNcIixcbiAgICAgICAgICAgIHNwZWFrZXI6IFwiV29ya3Nob3BzIGZvciBUZWFjaGVycyBpbiBUZWNoXCIsXG4gICAgICAgICAgICBjYXBhY2l0eTogMTAsXG4gICAgICAgICAgICBsb2NhdGlvbjogXCJQaGlsaGFybW9uaWNcIixcbiAgICAgICAgICAgIG5vdGVzOiBcIlRlY2hub2xvZ3kgaW4gVGVhY2hpbmcgbGVkIGJ5IEFhbmtpdCBQYXRlbFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgdGltZTogXCIxMTowMCBhbSAtIDEyOjMwIHBtXCIsXG4gICAgICAgICAgICBzZXNzaW9uOiBcIkxpZ2h0bmluZyBUYWxrcyBhbmQgV29ya3Nob3BzXCIsXG4gICAgICAgICAgICBzcGVha2VyOiBcIkNvdW5jaWwgZm9yIE9wcG9ydHVuaXR5IGluIEVkdWNhdGlvblwiLFxuICAgICAgICAgICAgY2FwYWNpdHk6IDEwLFxuICAgICAgICAgICAgbG9jYXRpb246IFwiQmF0dGVyeSBQYXJrXCIsXG4gICAgICAgICAgICBub3RlczogXCJEZXZlbG9waW5nIFNURU0gTGVhcm5lcnM6IFRoaW5raW5nIE91dHNpZGUgb2YgdGhlIENsYXNzcm9vbVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgdGltZTogXCIxMTowMCBhbSAtIDEyOjMwIHBtXCIsXG4gICAgICAgICAgICBzZXNzaW9uOiBcIkxpZ2h0bmluZyBUYWxrcyBhbmQgV29ya3Nob3BzXCIsXG4gICAgICAgICAgICBzcGVha2VyOiBcIklnbml0ZVNURU0gVGVhbSBIYWNrYXRob25cIixcbiAgICAgICAgICAgIGNhcGFjaXR5OiAyMCxcbiAgICAgICAgICAgIGxvY2F0aW9uOiBcIkFwb2xsb1wiLFxuICAgICAgICAgICAgbm90ZXM6IFwiSGFjay1hLXRob24gd29ya3Nob3AgKHdvcmtpbmcgaW4gc21hbGwgZ3JvdXBzKVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgdGltZTogXCIxMTowMCBhbSAtIDEyOjMwIHBtXCIsXG4gICAgICAgICAgICBzZXNzaW9uOiBcIkxpZ2h0bmluZyBUYWxrcyBhbmQgV29ya3Nob3BzXCIsXG4gICAgICAgICAgICBzcGVha2VyOiBcIkNocmlzIEhhcnJpcyArIEplbm5pZmVyIEtyZXNzbGVyIER1ZGFcIixcbiAgICAgICAgICAgIGNhcGFjaXR5OiAxMCxcbiAgICAgICAgICAgIGxvY2F0aW9uOiBcIlJpdmVyc2lkZSBQYXJrXCIsXG4gICAgICAgICAgICBub3RlczogXCJDb2RpbmcgYW5kIFJvYm90cyBpbiB0aGUgU3BlY2lhbCBOZWVkcyBDbGFzc3Jvb21cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpbWU6IFwiMTI6MzAgcG0gLSAxOjE1IHBtXCIsXG4gICAgICAgICAgICBzZXNzaW9uOiBcIkx1bmNoXCIsXG4gICAgICAgICAgICBzcGVha2VyOiBcIlwiLFxuICAgICAgICAgICAgY2FwYWNpdHk6IFwiXCIsXG4gICAgICAgICAgICBsb2NhdGlvbjogXCJHV0IgNEEyMjBBXCIsXG4gICAgICAgICAgICBub3RlczogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpbWU6IFwiMTozMCBwbSAtIDI6MTUgcG1cIixcbiAgICAgICAgICAgIHNlc3Npb246IFwiRWRUZWNoIFBhbmVsXCIsXG4gICAgICAgICAgICBzcGVha2VyOiBcIkxhYnN0ZXJcIixcbiAgICAgICAgICAgIGNhcGFjaXR5OiBcIlwiLFxuICAgICAgICAgICAgbG9jYXRpb246IFwiR1dCIDRBMjIwQVwiLFxuICAgICAgICAgICAgbm90ZXM6IFwiVXNpbmcgZWRUZWNoIGluIHRoZSBjbGFzc3Jvb206IFEvQSB3aXRoIHRocmVlIGRpZmZlcmVudCBhcmVhc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgdGltZTogXCIxOjMwIHBtIC0gMjoxNSBwbVwiLFxuICAgICAgICAgICAgc2Vzc2lvbjogXCJFZFRlY2ggUGFuZWxcIixcbiAgICAgICAgICAgIHNwZWFrZXI6IFwiSmFjayBEZUZ1cmlhIChCb2x0IExlYXJuaW5nKVwiLFxuICAgICAgICAgICAgY2FwYWNpdHk6IFwiXCIsXG4gICAgICAgICAgICBsb2NhdGlvbjogXCJHV0IgNEEyMjBBXCIsXG4gICAgICAgICAgICBub3RlczogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpbWU6IFwiMTozMCBwbSAtIDI6MTUgcG1cIixcbiAgICAgICAgICAgIHNlc3Npb246IFwiRWRUZWNoIFBhbmVsXCIsXG4gICAgICAgICAgICBzcGVha2VyOiBcIkNocmlzIEhhcnJpcyArIEplbm5pZmVyIEtyZXNzbGVyIER1ZGFcIixcbiAgICAgICAgICAgIGNhcGFjaXR5OiBcIlwiLFxuICAgICAgICAgICAgbG9jYXRpb246IFwiR1dCIDRBMjIwQVwiLFxuICAgICAgICAgICAgbm90ZXM6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICB0aW1lOiBcIjI6MTUgcG0gLSAzOjAwIHBtXCIsXG4gICAgICAgICAgICBzZXNzaW9uOiBcIktleW5vdGVcIixcbiAgICAgICAgICAgIHNwZWFrZXI6IFwiSm9uYXRoYW4gUm9jaGVsbGUsIERpcmVjdG9yIG9mIFByb2R1Y3QgTWFuYWdlbWVudCBhdCBHb29nbGUgRWR1Y2F0aW9uXCIsXG4gICAgICAgICAgICBjYXBhY2l0eTogXCJcIixcbiAgICAgICAgICAgIGxvY2F0aW9uOiBcIkdXQiA0QTIyMEFcIixcbiAgICAgICAgICAgIG5vdGVzOiBcIktleW5vdGUgYW5kIFEvQSBieSBKb25hdGhhbiBSb2NoZWxsZSwgRGlyZWN0b3Igb2YgUHJvZHVjdCBNYW5hZ2VtZW50IGF0IEdvb2dsZSBFZHVjYXRpb25cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpbWU6IFwiMzoxNSBwbSAtIDQ6MDAgcG1cIixcbiAgICAgICAgICAgIHNlc3Npb246IFwiVW5jb25mZXJlbmNlIFNlc3Npb25cIixcbiAgICAgICAgICAgIHNwZWFrZXI6IFwiXCIsXG4gICAgICAgICAgICBjYXBhY2l0eTogXCJcIixcbiAgICAgICAgICAgIGxvY2F0aW9uOiBcIih0YmQtIGluZm8gd2lsbCBiZSBnaXZlbiB0byBhdHRlbmRlZXMgYXQgYSBsYXRlciBkYXRlKVwiLFxuICAgICAgICAgICAgbm90ZXM6IFwiQXR0ZW5kZWUtZHJpdmVuIHNtYWxsIGdyb3VwIHVuY29uZmVyZW5jZSBhbmQgY3VycmljdWx1bSBkZXNpZ24gc2Vzc2lvbnNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpbWU6IFwiNDoxNSBwbSAtIDQ6MzAgcG1cIixcbiAgICAgICAgICAgIHNlc3Npb246IFwiQ2xvc2luZyBSZW1hcmtzXCIsXG4gICAgICAgICAgICBzcGVha2VyOiBcIklnbml0ZVNURU0gRGlyZWN0b3JzXCIsXG4gICAgICAgICAgICBjYXBhY2l0eTogXCJcIixcbiAgICAgICAgICAgIGxvY2F0aW9uOiBcIkdXQiA0QTIyMEFcIixcbiAgICAgICAgICAgIG5vdGVzOiBcIkNsb3NpbmcgUmVtYXJrcyBmcm9tIElnbml0ZVNURU1cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpbWU6IFwiNDozMCBwbSAtIDY6MDAgcG1cIixcbiAgICAgICAgICAgIHNlc3Npb246IFwiSWduaXRlU1RFTSBSZWNlcHRpb25cIixcbiAgICAgICAgICAgIHNwZWFrZXI6IFwiQWxsIENvbmZlcmVuY2VcIixcbiAgICAgICAgICAgIGNhcGFjaXR5OiBcIlwiLFxuICAgICAgICAgICAgbG9jYXRpb246IFwiR1dCIDRBMjIwQVwiLFxuICAgICAgICAgICAgbm90ZXM6IFwiSGFjay1pbi1hLWJveCBkaXN0cmlidXRpb24gYW5kIHJlY2VwdGlvbiBmZWF0dXJpbmcgZHJpbmtzIGFuZCBzbmFja3NcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzY2hlZHVsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvY29udHJvbGxlcnMvZGF5T2YvaW5kZXguanMiLCJpbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgZGVmYXVsdCAoYXBwKSA9PiB7XG4gICAgYXBwLmdldCgnL2FwaS9tZWRpYS9ibHVlX2ZpcmUucG5nJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgIGNvbnN0IF9fZGlybmFtZSA9IHByb2Nlc3MuY3dkKCk7XG4gICAgICAgIHJlcy5zZW5kRmlsZSgnZmlyZV9ibHVlLnBuZycsIHsgcm9vdDogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vY2xpZW50L21lZGlhJykgfSk7XG4gICAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9yb3V0ZXMvbWVkaWFSb3V0ZXMuanMiLCJpbXBvcnQgc2VhcmNoIGZyb20gJy4uL2NvbnRyb2xsZXJzL3NlYXJjaCc7XG5cbmV4cG9ydCBkZWZhdWx0IChhcHApID0+IHtcbiAgICBhcHAucG9zdCgnL2FwaS9zZWFyY2gnLCBzZWFyY2gpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvcm91dGVzL3NlYXJjaFJvdXRlcy5qcyIsImNvbnN0IFVzZXIgPSByZXF1aXJlKCcuLi8uLi9tb2RlbHMnKS5Vc2VyO1xuXG5pbXBvcnQgc2VhcmNoQWxnb3JpdGhtIGZyb20gJy4vc2VhcmNoJyAvLyBHZXQgdGhlIHNlYXJjaCBhbGdvcml0aG1cblxuY29uc3Qgc2VhcmNoID0gKHJlcSwgcmVzKSA9PiB7XG4gICAgcmV0dXJuIFVzZXJcbiAgICAgICAgLmZpbmRBbGwoe30pIC8vIEdldCBhbGwgcXVvdGVzXG4gICAgICAgIC50aGVuKCh1c2VycykgPT4ge1xuICAgICAgICAgICAgLy8gRmlsdGVyIG91dCBwYXNzd29yZCBhdHRyaWJ1dGVzXG4gICAgICAgICAgICB1c2Vycy5mb3JFYWNoKCh1c2VyKSA9PiB7IGRlbGV0ZSB1c2VyLmRhdGFWYWx1ZXMucGFzc3dvcmQgfSk7XG5cbiAgICAgICAgICAgIGxldCB1c2VyRGF0YSA9IHVzZXJzLm1hcCgodXNlcikgPT4gdXNlci5kYXRhVmFsdWVzKTtcblxuICAgICAgICAgICAgLy8gbGV0IHNvcnRlZFVzZXJzID0gdXNlcnM7IC8vIE1vZGlmeSB0aGlzIGFycmF5XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9IHJlcS5ib2R5LnF1ZXJ5OyAvLyBUaGUgc2VhcmNoIHF1ZXJ5XG5cbiAgICAgICAgICAgIC8qKioqKioqKioqKioqKioqIENvZGUgZ29lcyBoZXJlICoqKioqKioqKioqKioqKiovXG4gICAgICAgICAgICBsZXQgc29ydGVkVXNlcnMgPSBzZWFyY2hBbGdvcml0aG0ocXVlcnksIHVzZXJEYXRhKVxuICAgICAgICAgICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoc29ydGVkVXNlcnMpO1xuICAgICAgICB9KSAvLyBSZXR1cm4gcmFua2VkIGFycmF5IG9mIHVzZXJzIGJhc2VkIG9uIHNlYXJjaCBxdWVyeVxuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpXG4gICAgICAgIH0pOyAvLyBFcnJvclxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NyYy9jb250cm9sbGVycy9zZWFyY2gvaW5kZXguanMiLCIvLyBjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG4vLyBsZXQgcmF3RGF0YSA9IGZzLnJlYWRGaWxlU3luYygnLi91c2Vycy5qc29uJyk7IFxuLy9cbi8vIC8vIFJlYWQgaW4gdGhlIEpTT04gZGF0YVxuLy8gY29uc3QgdXNlcnMgPSBKU09OLnBhcnNlKHJhd0RhdGEpO1xuXG4vKmxldCByYW5rID0gMDtcbmxldCBzb3J0ZWRVc2VycyA9IHVzZXJzLm1hcCgodXNlcikgPT4ge1xuXHRyYW5rKys7XG5cdHJldHVybiB7XG5cdFx0cmFuaywgXG5cdFx0Li4udXNlcixcblx0fVxufSk7Ki9cblxuLy8gY29uc3QgcXVlcnkgPSBcIlRpbSBtYXRoIGNvZGluZ1wiOyAvLyBUaGUgc2VhcmNoIHF1ZXJ5XG5cbmNvbnN0IHNlYXJjaCA9IChxdWVyeSwgdXNlcnMpID0+IHtcbiAgICAvKioqKioqKioqKioqKioqKiBDb2RlIGdvZXMgaGVyZSAqKioqKioqKioqKioqKioqL1xuICAgIC8qXG4gICAgICogTW9kaWZ5IHRoZSBhcnJheTogc29ydGVkVXNlcnNcbiAgICAgKiAgKG1ha2Ugc3VyZSB0byBtb2RpZnkgdGhlIHJhbmsgYXR0cmlidXRlIHRvIG1hdGNoIGl0cyBvcmRlciBpbiB0aGUgYXJyYXkpXG4gICAgICogVXNlIHRoZSB2YXJpYWJsZSwgcXVlcnksIGFzIHRoZSBzZWFyY2ggcXVlcnlcbiAgICAgKlxuICAgICAqIFJ1biB0aGlzIHNjcmlwdCB1c2luZzpcbiAgICAgKiAgJCBub2RlIHNlYXJjaC5qc1xuICAgICAqL1xuXG4gICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgLy8gY29uc29sZS5sb2coXCJTZWFyY2hpbmcgcXVlcnk6XCIsIHF1ZXJ5KVxuICAgICBcbiAgICAgLy9TcGxpdHRpbmcgcXVlcnkgc3RyaW5nIGludG8gYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAgICB2YXIgcXVlcnlBcnJheSA9IHF1ZXJ5LnNwbGl0KFwiIFwiKTtcblxuICAgIC8vQWRqdXN0aW5nIHRoZSByYW5rIG9mIGVhY2ggdXNlciBieSBpbmNyZW1lbnRpbmcgdGhlIHJhbmsgZWFjaCB0aW1lIG9uZSBvZiB0aGUgd29yZHNcbiAgICAvL2luIHRoZSBxdWVyeUFycmF5IHZhcmlhYmxlIGFwcGVhcnMgaW4gYSB1c2VyJ3MgZGF0YVxuICAgICBzb3J0ZWRVc2VycyA9IHVzZXJzLm1hcCgodXNlcikgPT4ge1xuICAgICAgICByYW5rID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHF1ZXJ5QXJyYXkubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChKU09OLnN0cmluZ2lmeSh1c2VyKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YocXVlcnlBcnJheVtpXS50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmFuaysrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJhbmssXG4gICAgICAgICAgICAuLi51c2VyLFxuICAgICAgICB9XG4gICAgIH0pO1xuXG4gICAgLy9Tb3J0aW5nIGVhY2ggdXNlciBmcm9tIGdyZWF0ZXN0IHJhbmsgdG8gbGVhc3QgcmFua1xuICAgIHNvcnRlZFVzZXJzLnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgICAgcmV0dXJuIGIucmFuayAtIGEucmFuaztcbiAgICB9KTtcblxuICAgIC8vUmVhc3NpZ25pbmcgdGhlIHJhbmsgb2YgZWFjaCB1c2VyIHRvIGJlIHRoZSB1c2VyJ3MgcG9zaXRpb24gKHBsdXMgMSksIHdpdGhpbiB0aGUgYXJyYXlcbiAgICBmb3IoaSA9IDA7IGkgPCBzb3J0ZWRVc2Vycy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIHNvcnRlZFVzZXJzW2ldLnJhbmsgPSBpICsgMTtcbiAgICB9XG5cbiAgICByZXR1cm4gc29ydGVkVXNlcnM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9zcmMvY29udHJvbGxlcnMvc2VhcmNoL3NlYXJjaC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vcmdhblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1vcmdhblwiXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJvZHktcGFyc2VyXCJcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IHNlc3Npb25zID0gcmVxdWlyZSgnY2xpZW50LXNlc3Npb25zJyk7IC8vIFVzZXIgc2Vzc2lvbnNcblxuY29uc3Qgc2Vzc2lvbkF1dGggPSAoYXBwKSA9PiB7XG4gICAgLy8gRG9jczogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvbm9kZS1jbGllbnQtc2Vzc2lvbnNcbiAgICBhcHAudXNlKHNlc3Npb25zKHtcbiAgICAgICAgY29va2llTmFtZTogJ3Nlc3Npb24nLCAvLyBDb29raWUgbmFtZSBkaWN0YXRlcyB0aGUga2V5IG5hbWUgYWRkZWQgdG8gdGhlIHJlcXVlc3Qgb2JqZWN0XG4gICAgICAgIHNlY3JldDogJ2JsYXJnYWRlZWJsYXJnYmxhcmcnLCAvLyBzaG91bGQgYmUgYSBsYXJnZSB1bmd1ZXNzYWJsZSBzdHJpbmcgKHN0b3JlIGluIGVudmlyb25tZW50IHZhcmlhYmxlcyBldmVudHVhbGx5KVxuICAgICAgICBkdXJhdGlvbjogNCAqIDYwICogNjAgKiAxMDAwLCAvLyBob3cgbG9uZyB0aGUgc2Vzc2lvbiB3aWxsIHN0YXkgdmFsaWQgaW4gbXMgKDQgaG91cnMpXG4gICAgICAgIGFjdGl2ZUR1cmF0aW9uOiAxMDAwICogNjAgKiA2MCAqIDIsIC8vIGlmIGV4cGlyZXNJbiA8IGFjdGl2ZUR1cmF0aW9uLCB0aGUgc2Vzc2lvbiB3aWxsIGJlIGV4dGVuZGVkIGJ5IGFjdGl2ZUR1cmF0aW9uIG1pbGxpc2Vjb25kc1xuICAgIH0pKTtcblxuICAgIGFwcC51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgICAgIC8vIEFQSXMgdGhhdCBjbGllbnQgbXVzdCBiZSBsb2dnZWQgaW4gZm9yXG4gICAgICAgIC8vIEJlc3QgcHJhY3RpY2U6IEFQSXMgdGhhdCBhcmUgYWNjZXNzaWJsZSB2aWEgdGhlIGNsaWVudCBidXQgcmVxdWlyZSBhIGxvZ2luXG4gICAgICAgIC8vIEFQSXMgYXJlIGFscmVhZHkgcHJvdGVjdGVkIGJ5IGEgQmFzaWMgQXV0aCwgdGhpcyBpcyBqdXN0IGEgc2FmZWdhdXJkXG4gICAgICAgIGNvbnN0IGJsYWNrbGlzdGVkID0gW1xuICAgICAgICAgICAgJ1xcL2FwaVxcL3VzZXJzXFwvY3JlYXRlJyxcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgcGF0aCA9IHJlcS5vcmlnaW5hbFVybDtcbiAgICAgICAgaWYgKCFyZXEuc2Vzc2lvbi51c2VyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gc2Vzc2lvbicpO1xuICAgICAgICAgICAgaWYgKG5ldyBSZWdFeHAoYmxhY2tsaXN0ZWQuam9pbignfCcpLCAnaScpLnRlc3QocGF0aCkpIHsgLy8gSWYgb24gdGhlIGJsYWNrbGlzdFxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAxKS5zZW5kKCdQbGVhc2UgbG9nIGluJyk7XG4gICAgICAgICAgICB9IGVsc2UgeyAvLyBBbGxvd2VkXG4gICAgICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFNlc3Npb24gd2l0aCB1c2VyOiAke3JlcS5zZXNzaW9uLnVzZXIudXNlcm5hbWV9YCk7XG4gICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2Vzc2lvbkF1dGg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvc3JjL2NvbmZpZy9zZXNzaW9uLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xpZW50LXNlc3Npb25zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY2xpZW50LXNlc3Npb25zXCJcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=