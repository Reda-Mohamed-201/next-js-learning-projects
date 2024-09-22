/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/simple-concat";
exports.ids = ["vendor-chunks/simple-concat"];
exports.modules = {

/***/ "(ssr)/./node_modules/simple-concat/index.js":
/*!*********************************************!*\
  !*** ./node_modules/simple-concat/index.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/*! simple-concat. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */\nmodule.exports = function (stream, cb) {\n  var chunks = []\n  stream.on('data', function (chunk) {\n    chunks.push(chunk)\n  })\n  stream.once('end', function () {\n    if (cb) cb(null, Buffer.concat(chunks))\n    cb = null\n  })\n  stream.once('error', function (err) {\n    if (cb) cb(err)\n    cb = null\n  })\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2ltcGxlLWNvbmNhdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaWdpdGFsLWVjb21tZXJjZS8uL25vZGVfbW9kdWxlcy9zaW1wbGUtY29uY2F0L2luZGV4LmpzP2FiZDQiXSwic291cmNlc0NvbnRlbnQiOlsiLyohIHNpbXBsZS1jb25jYXQuIE1JVCBMaWNlbnNlLiBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmcvb3BlbnNvdXJjZT4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0cmVhbSwgY2IpIHtcbiAgdmFyIGNodW5rcyA9IFtdXG4gIHN0cmVhbS5vbignZGF0YScsIGZ1bmN0aW9uIChjaHVuaykge1xuICAgIGNodW5rcy5wdXNoKGNodW5rKVxuICB9KVxuICBzdHJlYW0ub25jZSgnZW5kJywgZnVuY3Rpb24gKCkge1xuICAgIGlmIChjYikgY2IobnVsbCwgQnVmZmVyLmNvbmNhdChjaHVua3MpKVxuICAgIGNiID0gbnVsbFxuICB9KVxuICBzdHJlYW0ub25jZSgnZXJyb3InLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgaWYgKGNiKSBjYihlcnIpXG4gICAgY2IgPSBudWxsXG4gIH0pXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/simple-concat/index.js\n");

/***/ }),

/***/ "(action-browser)/./node_modules/simple-concat/index.js":
/*!*********************************************!*\
  !*** ./node_modules/simple-concat/index.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/*! simple-concat. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */\nmodule.exports = function (stream, cb) {\n  var chunks = []\n  stream.on('data', function (chunk) {\n    chunks.push(chunk)\n  })\n  stream.once('end', function () {\n    if (cb) cb(null, Buffer.concat(chunks))\n    cb = null\n  })\n  stream.once('error', function (err) {\n    if (cb) cb(err)\n    cb = null\n  })\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9zaW1wbGUtY29uY2F0L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2RpZ2l0YWwtZWNvbW1lcmNlLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1jb25jYXQvaW5kZXguanM/ZmVhZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgc2ltcGxlLWNvbmNhdC4gTUlUIExpY2Vuc2UuIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZy9vcGVuc291cmNlPiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyZWFtLCBjYikge1xuICB2YXIgY2h1bmtzID0gW11cbiAgc3RyZWFtLm9uKCdkYXRhJywgZnVuY3Rpb24gKGNodW5rKSB7XG4gICAgY2h1bmtzLnB1c2goY2h1bmspXG4gIH0pXG4gIHN0cmVhbS5vbmNlKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGNiKSBjYihudWxsLCBCdWZmZXIuY29uY2F0KGNodW5rcykpXG4gICAgY2IgPSBudWxsXG4gIH0pXG4gIHN0cmVhbS5vbmNlKCdlcnJvcicsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICBpZiAoY2IpIGNiKGVycilcbiAgICBjYiA9IG51bGxcbiAgfSlcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/simple-concat/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/simple-concat/index.js":
/*!*********************************************!*\
  !*** ./node_modules/simple-concat/index.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/*! simple-concat. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */\nmodule.exports = function (stream, cb) {\n  var chunks = []\n  stream.on('data', function (chunk) {\n    chunks.push(chunk)\n  })\n  stream.once('end', function () {\n    if (cb) cb(null, Buffer.concat(chunks))\n    cb = null\n  })\n  stream.once('error', function (err) {\n    if (cb) cb(err)\n    cb = null\n  })\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvc2ltcGxlLWNvbmNhdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaWdpdGFsLWVjb21tZXJjZS8uL25vZGVfbW9kdWxlcy9zaW1wbGUtY29uY2F0L2luZGV4LmpzP2QwZTIiXSwic291cmNlc0NvbnRlbnQiOlsiLyohIHNpbXBsZS1jb25jYXQuIE1JVCBMaWNlbnNlLiBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmcvb3BlbnNvdXJjZT4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0cmVhbSwgY2IpIHtcbiAgdmFyIGNodW5rcyA9IFtdXG4gIHN0cmVhbS5vbignZGF0YScsIGZ1bmN0aW9uIChjaHVuaykge1xuICAgIGNodW5rcy5wdXNoKGNodW5rKVxuICB9KVxuICBzdHJlYW0ub25jZSgnZW5kJywgZnVuY3Rpb24gKCkge1xuICAgIGlmIChjYikgY2IobnVsbCwgQnVmZmVyLmNvbmNhdChjaHVua3MpKVxuICAgIGNiID0gbnVsbFxuICB9KVxuICBzdHJlYW0ub25jZSgnZXJyb3InLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgaWYgKGNiKSBjYihlcnIpXG4gICAgY2IgPSBudWxsXG4gIH0pXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/simple-concat/index.js\n");

/***/ })

};
;