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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIj81YjJhIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(3);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCI/ZDBkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1wb2x5ZmlsbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

eval("var _app = __webpack_require__(4);\n\nvar _app2 = _interopRequireDefault(_app);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\n// The express app we just created\n\nvar port = parseInt(process.env.PORT, 10) || 5555; // Application entry, setting up server\n\n_app2['default'].set('port', port);\n\n// 0.0.0.0 makes it available on your local network\n_app2['default'].listen(port, '0.0.0.0');\n// app.listen(port);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zZXJ2ZXIvc3JjL2luZGV4LmpzPzg3MzciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQXBwbGljYXRpb24gZW50cnksIHNldHRpbmcgdXAgc2VydmVyXG5pbXBvcnQgYXBwIGZyb20gJy4vYXBwJzsgLy8gVGhlIGV4cHJlc3MgYXBwIHdlIGp1c3QgY3JlYXRlZFxuXG5jb25zdCBwb3J0ID0gcGFyc2VJbnQocHJvY2Vzcy5lbnYuUE9SVCwgMTApIHx8IDU1NTU7XG5hcHAuc2V0KCdwb3J0JywgcG9ydCk7XG5cbi8vIDAuMC4wLjAgbWFrZXMgaXQgYXZhaWxhYmxlIG9uIHlvdXIgbG9jYWwgbmV0d29ya1xuYXBwLmxpc3Rlbihwb3J0LCAnMC4wLjAuMCcpO1xuLy8gYXBwLmxpc3Rlbihwb3J0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzZXJ2ZXIvc3JjL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUNBOzs7OztBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

eval("Object.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _routes = __webpack_require__(5);\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar express = __webpack_require__(8);\nvar logger = __webpack_require__(9);\nvar bodyParser = __webpack_require__(10);\nvar sessionAuth = __webpack_require__(11);\nvar path = __webpack_require__(0);\n\nvar __dirname = process.env.PWD; // Could break on prod\n\nvar app = express(); // Setup express app\n\n// Allow cross origin requests with authorization (for API purposes)\napp.all('*', function (req, res, next) {\n    res.header('Access-Control-Allow-Origin', '*');\n    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');\n    res.header('Access-Control-Allow-Headers', 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token, AUTHORIZATION');\n\n    // Intercept OPTIONS method\n    if (req.method === 'OPTIONS') {\n        res.send(200);\n    } else {\n        next();\n    }\n});\n\n// Setup authentication and security\nsessionAuth(app);\n\n// Log requests to the console.\napp.use(logger('dev'));\n\n// Parse incoming requests data (https://github.com/expressjs/body-parser)\napp.use(bodyParser.json());\napp.use(bodyParser.urlencoded({ extended: false }));\napp.use('/scripts', express['static'](path.join(__dirname, '../../client/dist')));\n\n// Require routes and simultaneously attach app\n(0, _routes2['default'])(app);\n\n// Catch all if the routes doesn't find a valid URL\napp.get('*', function (req, res) {\n    return res.status(200).send('Nothing here yet...');\n});\n\nexports['default'] = app;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zZXJ2ZXIvc3JjL2FwcC5qcz9kMGMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xuXG5jb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuY29uc3QgbG9nZ2VyID0gcmVxdWlyZSgnbW9yZ2FuJyk7XG5jb25zdCBib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKTtcbmNvbnN0IHNlc3Npb25BdXRoID0gcmVxdWlyZSgnLi9jb25maWcvc2Vzc2lvbicpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxuY29uc3QgX19kaXJuYW1lID0gcHJvY2Vzcy5lbnYuUFdEOyAvLyBDb3VsZCBicmVhayBvbiBwcm9kXG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTsgLy8gU2V0dXAgZXhwcmVzcyBhcHBcblxuLy8gQWxsb3cgY3Jvc3Mgb3JpZ2luIHJlcXVlc3RzIHdpdGggYXV0aG9yaXphdGlvbiAoZm9yIEFQSSBwdXJwb3NlcylcbmFwcC5hbGwoJyonLCAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpO1xuICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLCAnUFVULCBHRVQsIFBPU1QsIERFTEVURSwgT1BUSU9OUycpO1xuICAgIHJlcy5oZWFkZXIoXG4gICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJyxcbiAgICAgICAgJ2FjY2VwdCwgY29udGVudC10eXBlLCB4LXBhcnNlLWFwcGxpY2F0aW9uLWlkLCB4LXBhcnNlLXJlc3QtYXBpLWtleSwgeC1wYXJzZS1zZXNzaW9uLXRva2VuLCBBVVRIT1JJWkFUSU9OJ1xuICAgICk7XG5cbiAgICAvLyBJbnRlcmNlcHQgT1BUSU9OUyBtZXRob2RcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ09QVElPTlMnKSB7XG4gICAgICAgIHJlcy5zZW5kKDIwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV4dCgpO1xuICAgIH1cbn0pO1xuXG4vLyBTZXR1cCBhdXRoZW50aWNhdGlvbiBhbmQgc2VjdXJpdHlcbnNlc3Npb25BdXRoKGFwcCk7XG5cbi8vIExvZyByZXF1ZXN0cyB0byB0aGUgY29uc29sZS5cbmFwcC51c2UobG9nZ2VyKCdkZXYnKSk7XG5cbi8vIFBhcnNlIGluY29taW5nIHJlcXVlc3RzIGRhdGEgKGh0dHBzOi8vZ2l0aHViLmNvbS9leHByZXNzanMvYm9keS1wYXJzZXIpXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IGZhbHNlIH0pKTtcbmFwcC51c2UoJy9zY3JpcHRzJywgZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uLy4uL2NsaWVudC9kaXN0JykpKTtcblxuLy8gUmVxdWlyZSByb3V0ZXMgYW5kIHNpbXVsdGFuZW91c2x5IGF0dGFjaCBhcHBcbnJvdXRlcyhhcHApO1xuXG4vLyBDYXRjaCBhbGwgaWYgdGhlIHJvdXRlcyBkb2Vzbid0IGZpbmQgYSB2YWxpZCBVUkxcbmFwcC5nZXQoJyonLCAocmVxLCByZXMpID0+IHJlcy5zdGF0dXMoMjAwKS5zZW5kKCdOb3RoaW5nIGhlcmUgeWV0Li4uJykpO1xuXG5leHBvcnQgZGVmYXVsdCBhcHA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc2VydmVyL3NyYy9hcHAuanMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

eval("Object.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _path = __webpack_require__(0);\n\nvar path = _interopRequireWildcard(_path);\n\nvar _apiRoutes = __webpack_require__(6);\n\nvar _apiRoutes2 = _interopRequireDefault(_apiRoutes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }\n\n// Test\n\n// Requires an app as an input so can direct the user accordingly\nexports['default'] = function (app) {\n    /* ********************  Routes  ******************** */\n    (0, _apiRoutes2['default'])(app);\n\n    /* ********************  Client  ******************** */\n\n    // Serve the static client index.js build file\n    app.get('/scripts/index.js', function (req, res) {\n        var __dirname = process.env.PWD;\n        res.sendFile('index.js', { root: path.join(__dirname, './client/dist') });\n    });\n\n    app.get('/favicon.png', function (req, res) {\n        var __dirname = process.env.PWD;\n        res.sendFile('favicon.png', { root: path.join(__dirname, './client/dist') });\n    });\n\n    // Client app entry index.html file - react router\n    // app.get('*', (req, res) => {\n    //     const __dirname = process.env.PWD;\n    //     res.sendFile('index.html', { root: path.join(__dirname, './client/dist') }); // Render client\n    // });\n};\n\n// Functional controllers go here:\n// ...\n\n// Make modular so not all routes are here//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zZXJ2ZXIvc3JjL3JvdXRlcy9pbmRleC5qcz9iOGU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5cbi8vIEZ1bmN0aW9uYWwgY29udHJvbGxlcnMgZ28gaGVyZTpcbi8vIC4uLlxuXG4vLyBNYWtlIG1vZHVsYXIgc28gbm90IGFsbCByb3V0ZXMgYXJlIGhlcmVcbmltcG9ydCBhcGlSb3V0ZXMgZnJvbSAnLi9hcGlSb3V0ZXMnOyAvLyBUZXN0XG5cbi8vIFJlcXVpcmVzIGFuIGFwcCBhcyBhbiBpbnB1dCBzbyBjYW4gZGlyZWN0IHRoZSB1c2VyIGFjY29yZGluZ2x5XG5leHBvcnQgZGVmYXVsdCAoYXBwKSA9PiB7XG4gICAgLyogKioqKioqKioqKioqKioqKioqKiogIFJvdXRlcyAgKioqKioqKioqKioqKioqKioqKiogKi9cbiAgICBhcGlSb3V0ZXMoYXBwKTtcblxuXG4gICAgLyogKioqKioqKioqKioqKioqKioqKiogIENsaWVudCAgKioqKioqKioqKioqKioqKioqKiogKi9cblxuICAgIC8vIFNlcnZlIHRoZSBzdGF0aWMgY2xpZW50IGluZGV4LmpzIGJ1aWxkIGZpbGVcbiAgICBhcHAuZ2V0KCcvc2NyaXB0cy9pbmRleC5qcycsIChyZXEsIHJlcykgPT4ge1xuICAgICAgICBjb25zdCBfX2Rpcm5hbWUgPSBwcm9jZXNzLmVudi5QV0Q7XG4gICAgICAgIHJlcy5zZW5kRmlsZSgnaW5kZXguanMnLCB7IHJvb3Q6IHBhdGguam9pbihfX2Rpcm5hbWUsICcuL2NsaWVudC9kaXN0JykgfSk7XG4gICAgfSk7XG5cbiAgICBhcHAuZ2V0KCcvZmF2aWNvbi5wbmcnLCAocmVxLCByZXMpID0+IHtcbiAgICAgICAgY29uc3QgX19kaXJuYW1lID0gcHJvY2Vzcy5lbnYuUFdEO1xuICAgICAgICByZXMuc2VuZEZpbGUoJ2Zhdmljb24ucG5nJywgeyByb290OiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9jbGllbnQvZGlzdCcpIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gQ2xpZW50IGFwcCBlbnRyeSBpbmRleC5odG1sIGZpbGUgLSByZWFjdCByb3V0ZXJcbiAgICAvLyBhcHAuZ2V0KCcqJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IF9fZGlybmFtZSA9IHByb2Nlc3MuZW52LlBXRDtcbiAgICAvLyAgICAgcmVzLnNlbmRGaWxlKCdpbmRleC5odG1sJywgeyByb290OiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9jbGllbnQvZGlzdCcpIH0pOyAvLyBSZW5kZXIgY2xpZW50XG4gICAgLy8gfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNlcnZlci9zcmMvcm91dGVzL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFLQTtBQUNBOzs7Ozs7O0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL0JBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

eval("Object.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _test = __webpack_require__(7);\n\nexports['default'] = function (app) {\n    app.get('/api/test', _test.testFunction);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zZXJ2ZXIvc3JjL3JvdXRlcy9hcGlSb3V0ZXMuanM/MDRkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0ZXN0RnVuY3Rpb24gfSBmcm9tICcuLi9jb250cm9sbGVycy90ZXN0JztcblxuZXhwb3J0IGRlZmF1bHQgKGFwcCkgPT4ge1xuICAgIGFwcC5nZXQoJy9hcGkvdGVzdCcsIHRlc3RGdW5jdGlvbik7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNlcnZlci9zcmMvcm91dGVzL2FwaVJvdXRlcy5qcyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

eval("Object.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar testFunction = exports.testFunction = function testFunction(req, res) {\n    res.status(200).send('This is a test');\n};\n\nvar testFunction2 = exports.testFunction2 = function testFunction2(req, res) {\n    res.status(200).send('This is test #2');\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zZXJ2ZXIvc3JjL2NvbnRyb2xsZXJzL3Rlc3QvaW5kZXguanM/NDRkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdGVzdEZ1bmN0aW9uID0gKHJlcSwgcmVzKSA9PiB7XG4gICAgcmVzLnN0YXR1cygyMDApLnNlbmQoJ1RoaXMgaXMgYSB0ZXN0Jyk7XG59O1xuXG5leHBvcnQgY29uc3QgdGVzdEZ1bmN0aW9uMiA9IChyZXEsIHJlcykgPT4ge1xuICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKCdUaGlzIGlzIHRlc3QgIzInKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc2VydmVyL3NyYy9jb250cm9sbGVycy90ZXN0L2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIj9kMmQyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiPzE5ZWYiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9yZ2FuXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiPzQ2NTciXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

eval("var sessions = __webpack_require__(12); // User sessions\n\nvar sessionAuth = function sessionAuth(app) {\n    // Docs: https://github.com/mozilla/node-client-sessions\n    app.use(sessions({\n        cookieName: 'session', // Cookie name dictates the key name added to the request object\n        secret: 'blargadeeblargblarg', // should be a large unguessable string (store in environment variables eventually)\n        duration: 60 * 60 * 1000, // how long the session will stay valid in ms\n        activeDuration: 1000 * 60 * 5 // if expiresIn < activeDuration, the session will be extended by activeDuration milliseconds\n    }));\n\n    app.use(function (req, res, next) {\n        // APIs that client must be logged in for\n        // Best practice: APIs that are accessible via the client but require a login\n        // APIs are already protected by a Basic Auth, this is just a safegaurd\n        var blacklisted = ['\\/api\\/users\\/create'];\n        var path = req.originalUrl;\n        if (!req.session.user) {\n            // console.log('No session');\n            if (new RegExp(blacklisted.join('|'), 'i').test(path)) {\n                // If on the blacklist\n                res.status(401).send('Please log in');\n            } else {\n                // Allowed\n                next();\n            }\n        } else {\n            // console.log(`Session with user: ${req.session.user.username}`);\n            next();\n        }\n    });\n};\n\nmodule.exports = sessionAuth;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc2VydmVyL3NyYy9jb25maWcvc2Vzc2lvbi5qcz80ZjExIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNlc3Npb25zID0gcmVxdWlyZSgnY2xpZW50LXNlc3Npb25zJyk7IC8vIFVzZXIgc2Vzc2lvbnNcblxuY29uc3Qgc2Vzc2lvbkF1dGggPSAoYXBwKSA9PiB7XG4gICAgLy8gRG9jczogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvbm9kZS1jbGllbnQtc2Vzc2lvbnNcbiAgICBhcHAudXNlKHNlc3Npb25zKHtcbiAgICAgICAgY29va2llTmFtZTogJ3Nlc3Npb24nLCAvLyBDb29raWUgbmFtZSBkaWN0YXRlcyB0aGUga2V5IG5hbWUgYWRkZWQgdG8gdGhlIHJlcXVlc3Qgb2JqZWN0XG4gICAgICAgIHNlY3JldDogJ2JsYXJnYWRlZWJsYXJnYmxhcmcnLCAvLyBzaG91bGQgYmUgYSBsYXJnZSB1bmd1ZXNzYWJsZSBzdHJpbmcgKHN0b3JlIGluIGVudmlyb25tZW50IHZhcmlhYmxlcyBldmVudHVhbGx5KVxuICAgICAgICBkdXJhdGlvbjogNjAgKiA2MCAqIDEwMDAsIC8vIGhvdyBsb25nIHRoZSBzZXNzaW9uIHdpbGwgc3RheSB2YWxpZCBpbiBtc1xuICAgICAgICBhY3RpdmVEdXJhdGlvbjogMTAwMCAqIDYwICogNSwgLy8gaWYgZXhwaXJlc0luIDwgYWN0aXZlRHVyYXRpb24sIHRoZSBzZXNzaW9uIHdpbGwgYmUgZXh0ZW5kZWQgYnkgYWN0aXZlRHVyYXRpb24gbWlsbGlzZWNvbmRzXG4gICAgfSkpO1xuXG4gICAgYXBwLnVzZSgocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICAgICAgLy8gQVBJcyB0aGF0IGNsaWVudCBtdXN0IGJlIGxvZ2dlZCBpbiBmb3JcbiAgICAgICAgLy8gQmVzdCBwcmFjdGljZTogQVBJcyB0aGF0IGFyZSBhY2Nlc3NpYmxlIHZpYSB0aGUgY2xpZW50IGJ1dCByZXF1aXJlIGEgbG9naW5cbiAgICAgICAgLy8gQVBJcyBhcmUgYWxyZWFkeSBwcm90ZWN0ZWQgYnkgYSBCYXNpYyBBdXRoLCB0aGlzIGlzIGp1c3QgYSBzYWZlZ2F1cmRcbiAgICAgICAgY29uc3QgYmxhY2tsaXN0ZWQgPSBbXG4gICAgICAgICAgICAnXFwvYXBpXFwvdXNlcnNcXC9jcmVhdGUnLFxuICAgICAgICBdO1xuICAgICAgICBjb25zdCBwYXRoID0gcmVxLm9yaWdpbmFsVXJsO1xuICAgICAgICBpZiAoIXJlcS5zZXNzaW9uLnVzZXIpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdObyBzZXNzaW9uJyk7XG4gICAgICAgICAgICBpZiAobmV3IFJlZ0V4cChibGFja2xpc3RlZC5qb2luKCd8JyksICdpJykudGVzdChwYXRoKSkgeyAvLyBJZiBvbiB0aGUgYmxhY2tsaXN0XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoJ1BsZWFzZSBsb2cgaW4nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIEFsbG93ZWRcbiAgICAgICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgU2Vzc2lvbiB3aXRoIHVzZXI6ICR7cmVxLnNlc3Npb24udXNlci51c2VybmFtZX1gKTtcbiAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzZXNzaW9uQXV0aDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzZXJ2ZXIvc3JjL2NvbmZpZy9zZXNzaW9uLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

eval("module.exports = require(\"client-sessions\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGllbnQtc2Vzc2lvbnNcIj9jMWYwIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsaWVudC1zZXNzaW9uc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNsaWVudC1zZXNzaW9uc1wiXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

/***/ })
/******/ ])));