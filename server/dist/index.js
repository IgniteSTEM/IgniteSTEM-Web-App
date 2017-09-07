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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIj9kMmQyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIj81YjJhIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
module.exports = __webpack_require__(4);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCI/ZDBkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1wb2x5ZmlsbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

eval("var _app = __webpack_require__(5);\n\nvar _app2 = _interopRequireDefault(_app);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\n// The express app we just created\n\nvar port = parseInt(process.env.PORT, 10) || 5555; // Application entry, setting up server\n\n_app2['default'].set('port', port);\n\n// 0.0.0.0 makes it available on your local network\n_app2['default'].listen(port, '0.0.0.0');\n// app.listen(port);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zZXJ2ZXIvc3JjL2luZGV4LmpzPzg3MzciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQXBwbGljYXRpb24gZW50cnksIHNldHRpbmcgdXAgc2VydmVyXG5pbXBvcnQgYXBwIGZyb20gJy4vYXBwJzsgLy8gVGhlIGV4cHJlc3MgYXBwIHdlIGp1c3QgY3JlYXRlZFxuXG5jb25zdCBwb3J0ID0gcGFyc2VJbnQocHJvY2Vzcy5lbnYuUE9SVCwgMTApIHx8IDU1NTU7XG5hcHAuc2V0KCdwb3J0JywgcG9ydCk7XG5cbi8vIDAuMC4wLjAgbWFrZXMgaXQgYXZhaWxhYmxlIG9uIHlvdXIgbG9jYWwgbmV0d29ya1xuYXBwLmxpc3Rlbihwb3J0LCAnMC4wLjAuMCcpO1xuLy8gYXBwLmxpc3Rlbihwb3J0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzZXJ2ZXIvc3JjL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUNBOzs7OztBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

eval("Object.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _routes = __webpack_require__(6);\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar express = __webpack_require__(0);\n\n\nvar logger = __webpack_require__(9);\nvar bodyParser = __webpack_require__(10);\nvar sessionAuth = __webpack_require__(11);\nvar path = __webpack_require__(1);\n\nvar __dirname = process.env.PWD; // Could break on prod\n\nvar app = express(); // Setup express app\n\n// Allow cross origin requests with authorization (for API purposes)\napp.all('*', function (req, res, next) {\n    res.header('Access-Control-Allow-Origin', '*');\n    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');\n    res.header('Access-Control-Allow-Headers', 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token, AUTHORIZATION');\n    // Intercept OPTIONS method\n    if ('OPTIONS' == req.method) {\n        res.send(200);\n    } else {\n        next();\n    }\n});\n\n// Setup authentication and security\nsessionAuth(app);\n\n// Log requests to the console.\napp.use(logger('dev'));\n\n// Parse incoming requests data (https://github.com/expressjs/body-parser)\napp.use(bodyParser.json());\napp.use(bodyParser.urlencoded({ extended: false }));\napp.use('/scripts', express['static'](path.join(__dirname, '../../client/dist')));\n\n// Require routes and simultaneously attach app\n(0, _routes2['default'])(app);\n\n// Catch all if the routes doesn't find a valid URL\napp.get('*', function (req, res) {\n    return res.status(200).send('Nothing here yet...');\n});\n\nexports['default'] = app;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zZXJ2ZXIvc3JjL2FwcC5qcz9kMGMzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcblxuY29uc3QgbG9nZ2VyID0gcmVxdWlyZSgnbW9yZ2FuJyk7XG5jb25zdCBib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKTtcbmNvbnN0IHNlc3Npb25BdXRoID0gcmVxdWlyZSgnLi9jb25maWcvc2Vzc2lvbicpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxuY29uc3QgX19kaXJuYW1lID0gcHJvY2Vzcy5lbnYuUFdEOyAvLyBDb3VsZCBicmVhayBvbiBwcm9kXG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTsgLy8gU2V0dXAgZXhwcmVzcyBhcHBcblxuLy8gQWxsb3cgY3Jvc3Mgb3JpZ2luIHJlcXVlc3RzIHdpdGggYXV0aG9yaXphdGlvbiAoZm9yIEFQSSBwdXJwb3NlcylcbmFwcC5hbGwoJyonLCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcbiAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpO1xuICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLCAnUFVULCBHRVQsIFBPU1QsIERFTEVURSwgT1BUSU9OUycpO1xuICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnLCAnYWNjZXB0LCBjb250ZW50LXR5cGUsIHgtcGFyc2UtYXBwbGljYXRpb24taWQsIHgtcGFyc2UtcmVzdC1hcGkta2V5LCB4LXBhcnNlLXNlc3Npb24tdG9rZW4sIEFVVEhPUklaQVRJT04nKTtcbiAgICAvLyBJbnRlcmNlcHQgT1BUSU9OUyBtZXRob2RcbiAgICBpZiAoJ09QVElPTlMnID09IHJlcS5tZXRob2QpIHtcbiAgICAgICAgcmVzLnNlbmQoMjAwKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG5leHQoKTtcbiAgICB9XG59KTtcblxuLy8gU2V0dXAgYXV0aGVudGljYXRpb24gYW5kIHNlY3VyaXR5XG5zZXNzaW9uQXV0aChhcHApO1xuXG4vLyBMb2cgcmVxdWVzdHMgdG8gdGhlIGNvbnNvbGUuXG5hcHAudXNlKGxvZ2dlcignZGV2JykpO1xuXG4vLyBQYXJzZSBpbmNvbWluZyByZXF1ZXN0cyBkYXRhIChodHRwczovL2dpdGh1Yi5jb20vZXhwcmVzc2pzL2JvZHktcGFyc2VyKVxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiBmYWxzZSB9KSk7XG5hcHAudXNlKCcvc2NyaXB0cycsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi8uLi9jbGllbnQvZGlzdCcpKSk7XG5cbi8vIFJlcXVpcmUgcm91dGVzIGFuZCBzaW11bHRhbmVvdXNseSBhdHRhY2ggYXBwXG5yb3V0ZXMoYXBwKTtcblxuLy8gQ2F0Y2ggYWxsIGlmIHRoZSByb3V0ZXMgZG9lc24ndCBmaW5kIGEgdmFsaWQgVVJMXG5hcHAuZ2V0KCcqJywgKHJlcSwgcmVzKSA9PiByZXMuc3RhdHVzKDIwMCkuc2VuZCgnTm90aGluZyBoZXJlIHlldC4uLicpKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNlcnZlci9zcmMvYXBwLmpzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQ0E7QUFDQTs7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

eval("Object.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _express = __webpack_require__(0);\n\nvar express = _interopRequireWildcard(_express);\n\nvar _path = __webpack_require__(1);\n\nvar path = _interopRequireWildcard(_path);\n\nvar _apiRoutes = __webpack_require__(7);\n\nvar _apiRoutes2 = _interopRequireDefault(_apiRoutes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }\n\n// Test\n\n// Requires an app as an input so can direct the user accordingly\nexports['default'] = function (app) {\n\n    /*********************  Routes  *********************/\n    (0, _apiRoutes2['default'])(app);\n\n    /*********************  Client  *********************/\n\n    // Serve the static client index.js build file\n    app.get('/scripts/index.js', function (req, res) {\n        var __dirname = process.env.PWD;\n        res.sendFile('index.js', { root: path.join(__dirname, './client/dist') });\n    });\n\n    app.get('/favicon.png', function (req, res) {\n        var __dirname = process.env.PWD;\n        res.sendFile('favicon.png', { root: path.join(__dirname, './client/dist') });\n    });\n\n    // Client app entry index.html file - react router\n    // app.get('*', (req, res) => {\n    //     const __dirname = process.env.PWD;\n    //     res.sendFile('index.html', { root: path.join(__dirname, './client/dist') }); // Render client\n    // });\n};\n\n// Functional controllers go here:\n// ...\n\n// Make modular so not all routes are here//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zZXJ2ZXIvc3JjL3JvdXRlcy9pbmRleC5qcz9iOGU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuXG4vLyBGdW5jdGlvbmFsIGNvbnRyb2xsZXJzIGdvIGhlcmU6XG4vLyAuLi5cblxuLy8gTWFrZSBtb2R1bGFyIHNvIG5vdCBhbGwgcm91dGVzIGFyZSBoZXJlXG5pbXBvcnQgYXBpUm91dGVzIGZyb20gJy4vYXBpUm91dGVzJzsgLy8gVGVzdFxuXG4vLyBSZXF1aXJlcyBhbiBhcHAgYXMgYW4gaW5wdXQgc28gY2FuIGRpcmVjdCB0aGUgdXNlciBhY2NvcmRpbmdseVxuZXhwb3J0IGRlZmF1bHQgKGFwcCkgPT4ge1xuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKiAgUm91dGVzICAqKioqKioqKioqKioqKioqKioqKiovXG4gICAgYXBpUm91dGVzKGFwcCk7XG5cblxuICAgIC8qKioqKioqKioqKioqKioqKioqKiogIENsaWVudCAgKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgLy8gU2VydmUgdGhlIHN0YXRpYyBjbGllbnQgaW5kZXguanMgYnVpbGQgZmlsZVxuICAgIGFwcC5nZXQoJy9zY3JpcHRzL2luZGV4LmpzJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgIGNvbnN0IF9fZGlybmFtZSA9IHByb2Nlc3MuZW52LlBXRDtcbiAgICAgICAgcmVzLnNlbmRGaWxlKCdpbmRleC5qcycsICB7IHJvb3Q6IHBhdGguam9pbihfX2Rpcm5hbWUsICcuL2NsaWVudC9kaXN0JykgfSk7XG4gICAgfSk7XG5cbiAgICBhcHAuZ2V0KCcvZmF2aWNvbi5wbmcnLCAocmVxLCByZXMpID0+IHtcbiAgICAgICAgY29uc3QgX19kaXJuYW1lID0gcHJvY2Vzcy5lbnYuUFdEO1xuICAgICAgICByZXMuc2VuZEZpbGUoJ2Zhdmljb24ucG5nJywgeyByb290OiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9jbGllbnQvZGlzdCcpIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gQ2xpZW50IGFwcCBlbnRyeSBpbmRleC5odG1sIGZpbGUgLSByZWFjdCByb3V0ZXJcbiAgICAvLyBhcHAuZ2V0KCcqJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IF9fZGlybmFtZSA9IHByb2Nlc3MuZW52LlBXRDtcbiAgICAvLyAgICAgcmVzLnNlbmRGaWxlKCdpbmRleC5odG1sJywgeyByb290OiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9jbGllbnQvZGlzdCcpIH0pOyAvLyBSZW5kZXIgY2xpZW50XG4gICAgLy8gfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNlcnZlci9zcmMvcm91dGVzL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUtBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

eval("Object.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _express = __webpack_require__(0);\n\nvar express = _interopRequireWildcard(_express);\n\nvar _test = __webpack_require__(8);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }\n\nexports['default'] = function (app) {\n    app.get('/api/test', _test.testFunction);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zZXJ2ZXIvc3JjL3JvdXRlcy9hcGlSb3V0ZXMuanM/MDRkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgdGVzdEZ1bmN0aW9uIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvdGVzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IChhcHApID0+IHtcbiAgICBhcHAuZ2V0KCcvYXBpL3Rlc3QnLCB0ZXN0RnVuY3Rpb24pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNlcnZlci9zcmMvcm91dGVzL2FwaVJvdXRlcy5qcyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

eval("Object.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar testFunction = exports.testFunction = function testFunction(req, res) {\n    console.log('Hit test');\n    res.status(200).send('This is a test');\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zZXJ2ZXIvc3JjL2NvbnRyb2xsZXJzL3Rlc3QvaW5kZXguanM/NDRkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdGVzdEZ1bmN0aW9uID0gKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0hpdCB0ZXN0JylcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCgnVGhpcyBpcyBhIHRlc3QnKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzZXJ2ZXIvc3JjL2NvbnRyb2xsZXJzL3Rlc3QvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

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

eval("var express = __webpack_require__(0);\nvar sessions = __webpack_require__(12); // User sessions\n\nvar sessionAuth = function sessionAuth(app) {\n\n    // Tutorial: https://github.com/mozilla/node-client-sessions\n    app.use(sessions({\n        cookieName: 'session', // Cookie name dictates the key name added to the request object\n        secret: 'blargadeeblargblarg', // should be a large unguessable string (store in environment variables eventually)\n        duration: 60 * 60 * 1000, // how long the session will stay valid in ms\n        activeDuration: 1000 * 60 * 5 // if expiresIn < activeDuration, the session will be extended by activeDuration milliseconds\n    }));\n\n    app.use(function (req, res, next) {\n        // APIs that client must be logged in for\n        // Best practice: APIs that are accessible via the client but require a login\n        // APIs are already protected by a Basic Auth, this is just a safegaurd\n        var blacklisted = ['\\/api\\/users\\/create'];\n        var path = req.originalUrl;\n        if (!req.session.user) {\n            // console.log('No session');\n            if (new RegExp(blacklisted.join('|'), 'i').test(path)) {\n                // If on the blacklist\n                res.status(401).send('Please log in');\n            } else {\n                // Allowed\n                next();\n            }\n        } else {\n            // console.log(`Session with user: ${req.session.user.username}`);\n            next();\n        }\n    });\n};\n\nmodule.exports = sessionAuth;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc2VydmVyL3NyYy9jb25maWcvc2Vzc2lvbi5qcz80ZjExIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG5jb25zdCBzZXNzaW9ucyA9IHJlcXVpcmUoJ2NsaWVudC1zZXNzaW9ucycpOyAvLyBVc2VyIHNlc3Npb25zXG5cbmNvbnN0IHNlc3Npb25BdXRoID0gKGFwcCkgPT4ge1xuXG4gICAgLy8gVHV0b3JpYWw6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL25vZGUtY2xpZW50LXNlc3Npb25zXG4gICAgYXBwLnVzZShzZXNzaW9ucyh7XG4gICAgICAgIGNvb2tpZU5hbWU6ICdzZXNzaW9uJywgLy8gQ29va2llIG5hbWUgZGljdGF0ZXMgdGhlIGtleSBuYW1lIGFkZGVkIHRvIHRoZSByZXF1ZXN0IG9iamVjdFxuICAgICAgICBzZWNyZXQ6ICdibGFyZ2FkZWVibGFyZ2JsYXJnJywgLy8gc2hvdWxkIGJlIGEgbGFyZ2UgdW5ndWVzc2FibGUgc3RyaW5nIChzdG9yZSBpbiBlbnZpcm9ubWVudCB2YXJpYWJsZXMgZXZlbnR1YWxseSlcbiAgICAgICAgZHVyYXRpb246IDYwICogNjAgKiAxMDAwLCAvLyBob3cgbG9uZyB0aGUgc2Vzc2lvbiB3aWxsIHN0YXkgdmFsaWQgaW4gbXNcbiAgICAgICAgYWN0aXZlRHVyYXRpb246IDEwMDAgKiA2MCAqIDUsIC8vIGlmIGV4cGlyZXNJbiA8IGFjdGl2ZUR1cmF0aW9uLCB0aGUgc2Vzc2lvbiB3aWxsIGJlIGV4dGVuZGVkIGJ5IGFjdGl2ZUR1cmF0aW9uIG1pbGxpc2Vjb25kc1xuICAgIH0pKTtcblxuICAgIGFwcC51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgICAgIC8vIEFQSXMgdGhhdCBjbGllbnQgbXVzdCBiZSBsb2dnZWQgaW4gZm9yXG4gICAgICAgIC8vIEJlc3QgcHJhY3RpY2U6IEFQSXMgdGhhdCBhcmUgYWNjZXNzaWJsZSB2aWEgdGhlIGNsaWVudCBidXQgcmVxdWlyZSBhIGxvZ2luXG4gICAgICAgIC8vIEFQSXMgYXJlIGFscmVhZHkgcHJvdGVjdGVkIGJ5IGEgQmFzaWMgQXV0aCwgdGhpcyBpcyBqdXN0IGEgc2FmZWdhdXJkXG4gICAgICAgIGNvbnN0IGJsYWNrbGlzdGVkID0gW1xuICAgICAgICAgICAgJ1xcL2FwaVxcL3VzZXJzXFwvY3JlYXRlJyxcbiAgICAgICAgXVxuICAgICAgICBjb25zdCBwYXRoID0gcmVxLm9yaWdpbmFsVXJsO1xuICAgICAgICAgICAgaWYgKCFyZXEuc2Vzc2lvbi51c2VyKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ05vIHNlc3Npb24nKTtcbiAgICAgICAgICAgICAgICBpZiAobmV3IFJlZ0V4cChibGFja2xpc3RlZC5qb2luKCd8JyksICdpJykudGVzdChwYXRoKSkgeyAvLyBJZiBvbiB0aGUgYmxhY2tsaXN0XG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAxKS5zZW5kKCdQbGVhc2UgbG9nIGluJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgLy8gQWxsb3dlZFxuICAgICAgICAgICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgU2Vzc2lvbiB3aXRoIHVzZXI6ICR7cmVxLnNlc3Npb24udXNlci51c2VybmFtZX1gKTtcbiAgICAgICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgfSk7XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXNzaW9uQXV0aDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzZXJ2ZXIvc3JjL2NvbmZpZy9zZXNzaW9uLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

eval("module.exports = require(\"client-sessions\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGllbnQtc2Vzc2lvbnNcIj9jMWYwIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsaWVudC1zZXNzaW9uc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNsaWVudC1zZXNzaW9uc1wiXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

/***/ })
/******/ ])));