"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/has-proto";
exports.ids = ["vendor-chunks/has-proto"];
exports.modules = {

/***/ "(action-browser)/./node_modules/has-proto/index.js":
/*!*****************************************!*\
  !*** ./node_modules/has-proto/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("\n\nvar test = {\n\t__proto__: null,\n\tfoo: {}\n};\n\nvar $Object = Object;\n\n/** @type {import('.')} */\nmodule.exports = function hasProto() {\n\t// @ts-expect-error: TS errors on an inherited property for some reason\n\treturn { __proto__: test }.foo === test.foo\n\t\t&& !(test instanceof $Object);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9oYXMtcHJvdG8vaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsV0FBVyxhQUFhO0FBQ3hCO0FBQ0E7QUFDQSxVQUFVLGlCQUFpQjtBQUMzQjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGlnaXRhbC1lY29tbWVyY2UvLi9ub2RlX21vZHVsZXMvaGFzLXByb3RvL2luZGV4LmpzP2UyYmYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdGVzdCA9IHtcblx0X19wcm90b19fOiBudWxsLFxuXHRmb286IHt9XG59O1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxuLyoqIEB0eXBlIHtpbXBvcnQoJy4nKX0gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaGFzUHJvdG8oKSB7XG5cdC8vIEB0cy1leHBlY3QtZXJyb3I6IFRTIGVycm9ycyBvbiBhbiBpbmhlcml0ZWQgcHJvcGVydHkgZm9yIHNvbWUgcmVhc29uXG5cdHJldHVybiB7IF9fcHJvdG9fXzogdGVzdCB9LmZvbyA9PT0gdGVzdC5mb29cblx0XHQmJiAhKHRlc3QgaW5zdGFuY2VvZiAkT2JqZWN0KTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/has-proto/index.js\n");

/***/ })

};
;