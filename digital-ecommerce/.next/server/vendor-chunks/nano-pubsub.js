/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/nano-pubsub";
exports.ids = ["vendor-chunks/nano-pubsub"];
exports.modules = {

/***/ "(ssr)/./node_modules/nano-pubsub/index.js":
/*!*******************************************!*\
  !*** ./node_modules/nano-pubsub/index.js ***!
  \*******************************************/
/***/ ((module) => {

eval("module.exports = function Pubsub() {\n  var subscribers = []\n  return {\n    subscribe: subscribe,\n    publish: publish\n  }\n  function subscribe(subscriber) {\n    subscribers.push(subscriber)\n    return function unsubscribe() {\n      var idx = subscribers.indexOf(subscriber)\n      if (idx > -1) {\n        subscribers.splice(idx, 1)\n      }\n    }\n  }\n  function publish() {\n    for (var i = 0; i < subscribers.length; i++) {\n      subscribers[i].apply(null, arguments)\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmFuby1wdWJzdWIvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isd0JBQXdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGlnaXRhbC1lY29tbWVyY2UvLi9ub2RlX21vZHVsZXMvbmFuby1wdWJzdWIvaW5kZXguanM/NTJkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFB1YnN1YigpIHtcbiAgdmFyIHN1YnNjcmliZXJzID0gW11cbiAgcmV0dXJuIHtcbiAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICBwdWJsaXNoOiBwdWJsaXNoXG4gIH1cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKHN1YnNjcmliZXIpIHtcbiAgICBzdWJzY3JpYmVycy5wdXNoKHN1YnNjcmliZXIpXG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgdmFyIGlkeCA9IHN1YnNjcmliZXJzLmluZGV4T2Yoc3Vic2NyaWJlcilcbiAgICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgICBzdWJzY3JpYmVycy5zcGxpY2UoaWR4LCAxKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBwdWJsaXNoKCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3Vic2NyaWJlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHN1YnNjcmliZXJzW2ldLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICB9XG4gIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/nano-pubsub/index.js\n");

/***/ }),

/***/ "(action-browser)/./node_modules/nano-pubsub/index.js":
/*!*******************************************!*\
  !*** ./node_modules/nano-pubsub/index.js ***!
  \*******************************************/
/***/ ((module) => {

eval("module.exports = function Pubsub() {\n  var subscribers = []\n  return {\n    subscribe: subscribe,\n    publish: publish\n  }\n  function subscribe(subscriber) {\n    subscribers.push(subscriber)\n    return function unsubscribe() {\n      var idx = subscribers.indexOf(subscriber)\n      if (idx > -1) {\n        subscribers.splice(idx, 1)\n      }\n    }\n  }\n  function publish() {\n    for (var i = 0; i < subscribers.length; i++) {\n      subscribers[i].apply(null, arguments)\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uYW5vLXB1YnN1Yi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3QkFBd0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaWdpdGFsLWVjb21tZXJjZS8uL25vZGVfbW9kdWxlcy9uYW5vLXB1YnN1Yi9pbmRleC5qcz9kY2FhIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gUHVic3ViKCkge1xuICB2YXIgc3Vic2NyaWJlcnMgPSBbXVxuICByZXR1cm4ge1xuICAgIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICAgIHB1Ymxpc2g6IHB1Ymxpc2hcbiAgfVxuICBmdW5jdGlvbiBzdWJzY3JpYmUoc3Vic2NyaWJlcikge1xuICAgIHN1YnNjcmliZXJzLnB1c2goc3Vic2NyaWJlcilcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICB2YXIgaWR4ID0gc3Vic2NyaWJlcnMuaW5kZXhPZihzdWJzY3JpYmVyKVxuICAgICAgaWYgKGlkeCA+IC0xKSB7XG4gICAgICAgIHN1YnNjcmliZXJzLnNwbGljZShpZHgsIDEpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHB1Ymxpc2goKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdWJzY3JpYmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgc3Vic2NyaWJlcnNbaV0uYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgIH1cbiAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/nano-pubsub/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/nano-pubsub/index.js":
/*!*******************************************!*\
  !*** ./node_modules/nano-pubsub/index.js ***!
  \*******************************************/
/***/ ((module) => {

eval("module.exports = function Pubsub() {\n  var subscribers = []\n  return {\n    subscribe: subscribe,\n    publish: publish\n  }\n  function subscribe(subscriber) {\n    subscribers.push(subscriber)\n    return function unsubscribe() {\n      var idx = subscribers.indexOf(subscriber)\n      if (idx > -1) {\n        subscribers.splice(idx, 1)\n      }\n    }\n  }\n  function publish() {\n    for (var i = 0; i < subscribers.length; i++) {\n      subscribers[i].apply(null, arguments)\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmFuby1wdWJzdWIvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isd0JBQXdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGlnaXRhbC1lY29tbWVyY2UvLi9ub2RlX21vZHVsZXMvbmFuby1wdWJzdWIvaW5kZXguanM/NDBhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFB1YnN1YigpIHtcbiAgdmFyIHN1YnNjcmliZXJzID0gW11cbiAgcmV0dXJuIHtcbiAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICBwdWJsaXNoOiBwdWJsaXNoXG4gIH1cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKHN1YnNjcmliZXIpIHtcbiAgICBzdWJzY3JpYmVycy5wdXNoKHN1YnNjcmliZXIpXG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgdmFyIGlkeCA9IHN1YnNjcmliZXJzLmluZGV4T2Yoc3Vic2NyaWJlcilcbiAgICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgICBzdWJzY3JpYmVycy5zcGxpY2UoaWR4LCAxKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBwdWJsaXNoKCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3Vic2NyaWJlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHN1YnNjcmliZXJzW2ldLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICB9XG4gIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/nano-pubsub/index.js\n");

/***/ })

};
;