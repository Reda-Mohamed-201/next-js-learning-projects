/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/from2";
exports.ids = ["vendor-chunks/from2"];
exports.modules = {

/***/ "(ssr)/./node_modules/from2/index.js":
/*!*************************************!*\
  !*** ./node_modules/from2/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Readable = (__webpack_require__(/*! readable-stream */ \"(ssr)/./node_modules/readable-stream/readable.js\").Readable)\nvar inherits = __webpack_require__(/*! inherits */ \"(ssr)/./node_modules/inherits/inherits.js\")\n\nmodule.exports = from2\n\nfrom2.ctor = ctor\nfrom2.obj = obj\n\nvar Proto = ctor()\n\nfunction toFunction(list) {\n  list = list.slice()\n  return function (_, cb) {\n    var err = null\n    var item = list.length ? list.shift() : null\n    if (item instanceof Error) {\n      err = item\n      item = null\n    }\n\n    cb(err, item)\n  }\n}\n\nfunction from2(opts, read) {\n  if (typeof opts !== 'object' || Array.isArray(opts)) {\n    read = opts\n    opts = {}\n  }\n\n  var rs = new Proto(opts)\n  rs._from = Array.isArray(read) ? toFunction(read) : (read || noop)\n  return rs\n}\n\nfunction ctor(opts, read) {\n  if (typeof opts === 'function') {\n    read = opts\n    opts = {}\n  }\n\n  opts = defaults(opts)\n\n  inherits(Class, Readable)\n  function Class(override) {\n    if (!(this instanceof Class)) return new Class(override)\n    this._reading = false\n    this._callback = check\n    this.destroyed = false\n    Readable.call(this, override || opts)\n\n    var self = this\n    var hwm = this._readableState.highWaterMark\n\n    function check(err, data) {\n      if (self.destroyed) return\n      if (err) return self.destroy(err)\n      if (data === null) return self.push(null)\n      self._reading = false\n      if (self.push(data)) self._read(hwm)\n    }\n  }\n\n  Class.prototype._from = read || noop\n  Class.prototype._read = function(size) {\n    if (this._reading || this.destroyed) return\n    this._reading = true\n    this._from(size, this._callback)\n  }\n\n  Class.prototype.destroy = function(err) {\n    if (this.destroyed) return\n    this.destroyed = true\n\n    var self = this\n    process.nextTick(function() {\n      if (err) self.emit('error', err)\n      self.emit('close')\n    })\n  }\n\n  return Class\n}\n\nfunction obj(opts, read) {\n  if (typeof opts === 'function' || Array.isArray(opts)) {\n    read = opts\n    opts = {}\n  }\n\n  opts = defaults(opts)\n  opts.objectMode = true\n  opts.highWaterMark = 16\n\n  return from2(opts, read)\n}\n\nfunction noop () {}\n\nfunction defaults(opts) {\n  opts = opts || {}\n  return opts\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZnJvbTIvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSx5R0FBbUM7QUFDbEQsZUFBZSxtQkFBTyxDQUFDLDJEQUFVOztBQUVqQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RpZ2l0YWwtZWNvbW1lcmNlLy4vbm9kZV9tb2R1bGVzL2Zyb20yL2luZGV4LmpzPzVhMmUiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFJlYWRhYmxlID0gcmVxdWlyZSgncmVhZGFibGUtc3RyZWFtJykuUmVhZGFibGVcbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJylcblxubW9kdWxlLmV4cG9ydHMgPSBmcm9tMlxuXG5mcm9tMi5jdG9yID0gY3RvclxuZnJvbTIub2JqID0gb2JqXG5cbnZhciBQcm90byA9IGN0b3IoKVxuXG5mdW5jdGlvbiB0b0Z1bmN0aW9uKGxpc3QpIHtcbiAgbGlzdCA9IGxpc3Quc2xpY2UoKVxuICByZXR1cm4gZnVuY3Rpb24gKF8sIGNiKSB7XG4gICAgdmFyIGVyciA9IG51bGxcbiAgICB2YXIgaXRlbSA9IGxpc3QubGVuZ3RoID8gbGlzdC5zaGlmdCgpIDogbnVsbFxuICAgIGlmIChpdGVtIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIGVyciA9IGl0ZW1cbiAgICAgIGl0ZW0gPSBudWxsXG4gICAgfVxuXG4gICAgY2IoZXJyLCBpdGVtKVxuICB9XG59XG5cbmZ1bmN0aW9uIGZyb20yKG9wdHMsIHJlYWQpIHtcbiAgaWYgKHR5cGVvZiBvcHRzICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KG9wdHMpKSB7XG4gICAgcmVhZCA9IG9wdHNcbiAgICBvcHRzID0ge31cbiAgfVxuXG4gIHZhciBycyA9IG5ldyBQcm90byhvcHRzKVxuICBycy5fZnJvbSA9IEFycmF5LmlzQXJyYXkocmVhZCkgPyB0b0Z1bmN0aW9uKHJlYWQpIDogKHJlYWQgfHwgbm9vcClcbiAgcmV0dXJuIHJzXG59XG5cbmZ1bmN0aW9uIGN0b3Iob3B0cywgcmVhZCkge1xuICBpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZWFkID0gb3B0c1xuICAgIG9wdHMgPSB7fVxuICB9XG5cbiAgb3B0cyA9IGRlZmF1bHRzKG9wdHMpXG5cbiAgaW5oZXJpdHMoQ2xhc3MsIFJlYWRhYmxlKVxuICBmdW5jdGlvbiBDbGFzcyhvdmVycmlkZSkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBDbGFzcykpIHJldHVybiBuZXcgQ2xhc3Mob3ZlcnJpZGUpXG4gICAgdGhpcy5fcmVhZGluZyA9IGZhbHNlXG4gICAgdGhpcy5fY2FsbGJhY2sgPSBjaGVja1xuICAgIHRoaXMuZGVzdHJveWVkID0gZmFsc2VcbiAgICBSZWFkYWJsZS5jYWxsKHRoaXMsIG92ZXJyaWRlIHx8IG9wdHMpXG5cbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICB2YXIgaHdtID0gdGhpcy5fcmVhZGFibGVTdGF0ZS5oaWdoV2F0ZXJNYXJrXG5cbiAgICBmdW5jdGlvbiBjaGVjayhlcnIsIGRhdGEpIHtcbiAgICAgIGlmIChzZWxmLmRlc3Ryb3llZCkgcmV0dXJuXG4gICAgICBpZiAoZXJyKSByZXR1cm4gc2VsZi5kZXN0cm95KGVycilcbiAgICAgIGlmIChkYXRhID09PSBudWxsKSByZXR1cm4gc2VsZi5wdXNoKG51bGwpXG4gICAgICBzZWxmLl9yZWFkaW5nID0gZmFsc2VcbiAgICAgIGlmIChzZWxmLnB1c2goZGF0YSkpIHNlbGYuX3JlYWQoaHdtKVxuICAgIH1cbiAgfVxuXG4gIENsYXNzLnByb3RvdHlwZS5fZnJvbSA9IHJlYWQgfHwgbm9vcFxuICBDbGFzcy5wcm90b3R5cGUuX3JlYWQgPSBmdW5jdGlvbihzaXplKSB7XG4gICAgaWYgKHRoaXMuX3JlYWRpbmcgfHwgdGhpcy5kZXN0cm95ZWQpIHJldHVyblxuICAgIHRoaXMuX3JlYWRpbmcgPSB0cnVlXG4gICAgdGhpcy5fZnJvbShzaXplLCB0aGlzLl9jYWxsYmFjaylcbiAgfVxuXG4gIENsYXNzLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oZXJyKSB7XG4gICAgaWYgKHRoaXMuZGVzdHJveWVkKSByZXR1cm5cbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWVcblxuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoZXJyKSBzZWxmLmVtaXQoJ2Vycm9yJywgZXJyKVxuICAgICAgc2VsZi5lbWl0KCdjbG9zZScpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBDbGFzc1xufVxuXG5mdW5jdGlvbiBvYmoob3B0cywgcmVhZCkge1xuICBpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicgfHwgQXJyYXkuaXNBcnJheShvcHRzKSkge1xuICAgIHJlYWQgPSBvcHRzXG4gICAgb3B0cyA9IHt9XG4gIH1cblxuICBvcHRzID0gZGVmYXVsdHMob3B0cylcbiAgb3B0cy5vYmplY3RNb2RlID0gdHJ1ZVxuICBvcHRzLmhpZ2hXYXRlck1hcmsgPSAxNlxuXG4gIHJldHVybiBmcm9tMihvcHRzLCByZWFkKVxufVxuXG5mdW5jdGlvbiBub29wICgpIHt9XG5cbmZ1bmN0aW9uIGRlZmF1bHRzKG9wdHMpIHtcbiAgb3B0cyA9IG9wdHMgfHwge31cbiAgcmV0dXJuIG9wdHNcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/from2/index.js\n");

/***/ }),

/***/ "(action-browser)/./node_modules/from2/index.js":
/*!*************************************!*\
  !*** ./node_modules/from2/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Readable = (__webpack_require__(/*! readable-stream */ \"(action-browser)/./node_modules/readable-stream/readable.js\").Readable)\nvar inherits = __webpack_require__(/*! inherits */ \"(action-browser)/./node_modules/inherits/inherits.js\")\n\nmodule.exports = from2\n\nfrom2.ctor = ctor\nfrom2.obj = obj\n\nvar Proto = ctor()\n\nfunction toFunction(list) {\n  list = list.slice()\n  return function (_, cb) {\n    var err = null\n    var item = list.length ? list.shift() : null\n    if (item instanceof Error) {\n      err = item\n      item = null\n    }\n\n    cb(err, item)\n  }\n}\n\nfunction from2(opts, read) {\n  if (typeof opts !== 'object' || Array.isArray(opts)) {\n    read = opts\n    opts = {}\n  }\n\n  var rs = new Proto(opts)\n  rs._from = Array.isArray(read) ? toFunction(read) : (read || noop)\n  return rs\n}\n\nfunction ctor(opts, read) {\n  if (typeof opts === 'function') {\n    read = opts\n    opts = {}\n  }\n\n  opts = defaults(opts)\n\n  inherits(Class, Readable)\n  function Class(override) {\n    if (!(this instanceof Class)) return new Class(override)\n    this._reading = false\n    this._callback = check\n    this.destroyed = false\n    Readable.call(this, override || opts)\n\n    var self = this\n    var hwm = this._readableState.highWaterMark\n\n    function check(err, data) {\n      if (self.destroyed) return\n      if (err) return self.destroy(err)\n      if (data === null) return self.push(null)\n      self._reading = false\n      if (self.push(data)) self._read(hwm)\n    }\n  }\n\n  Class.prototype._from = read || noop\n  Class.prototype._read = function(size) {\n    if (this._reading || this.destroyed) return\n    this._reading = true\n    this._from(size, this._callback)\n  }\n\n  Class.prototype.destroy = function(err) {\n    if (this.destroyed) return\n    this.destroyed = true\n\n    var self = this\n    process.nextTick(function() {\n      if (err) self.emit('error', err)\n      self.emit('close')\n    })\n  }\n\n  return Class\n}\n\nfunction obj(opts, read) {\n  if (typeof opts === 'function' || Array.isArray(opts)) {\n    read = opts\n    opts = {}\n  }\n\n  opts = defaults(opts)\n  opts.objectMode = true\n  opts.highWaterMark = 16\n\n  return from2(opts, read)\n}\n\nfunction noop () {}\n\nfunction defaults(opts) {\n  opts = opts || {}\n  return opts\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9mcm9tMi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQSxlQUFlLG9IQUFtQztBQUNsRCxlQUFlLG1CQUFPLENBQUMsc0VBQVU7O0FBRWpDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGlnaXRhbC1lY29tbWVyY2UvLi9ub2RlX21vZHVsZXMvZnJvbTIvaW5kZXguanM/YjAwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUmVhZGFibGUgPSByZXF1aXJlKCdyZWFkYWJsZS1zdHJlYW0nKS5SZWFkYWJsZVxudmFyIGluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZyb20yXG5cbmZyb20yLmN0b3IgPSBjdG9yXG5mcm9tMi5vYmogPSBvYmpcblxudmFyIFByb3RvID0gY3RvcigpXG5cbmZ1bmN0aW9uIHRvRnVuY3Rpb24obGlzdCkge1xuICBsaXN0ID0gbGlzdC5zbGljZSgpXG4gIHJldHVybiBmdW5jdGlvbiAoXywgY2IpIHtcbiAgICB2YXIgZXJyID0gbnVsbFxuICAgIHZhciBpdGVtID0gbGlzdC5sZW5ndGggPyBsaXN0LnNoaWZ0KCkgOiBudWxsXG4gICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgZXJyID0gaXRlbVxuICAgICAgaXRlbSA9IG51bGxcbiAgICB9XG5cbiAgICBjYihlcnIsIGl0ZW0pXG4gIH1cbn1cblxuZnVuY3Rpb24gZnJvbTIob3B0cywgcmVhZCkge1xuICBpZiAodHlwZW9mIG9wdHMgIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkob3B0cykpIHtcbiAgICByZWFkID0gb3B0c1xuICAgIG9wdHMgPSB7fVxuICB9XG5cbiAgdmFyIHJzID0gbmV3IFByb3RvKG9wdHMpXG4gIHJzLl9mcm9tID0gQXJyYXkuaXNBcnJheShyZWFkKSA/IHRvRnVuY3Rpb24ocmVhZCkgOiAocmVhZCB8fCBub29wKVxuICByZXR1cm4gcnNcbn1cblxuZnVuY3Rpb24gY3RvcihvcHRzLCByZWFkKSB7XG4gIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJlYWQgPSBvcHRzXG4gICAgb3B0cyA9IHt9XG4gIH1cblxuICBvcHRzID0gZGVmYXVsdHMob3B0cylcblxuICBpbmhlcml0cyhDbGFzcywgUmVhZGFibGUpXG4gIGZ1bmN0aW9uIENsYXNzKG92ZXJyaWRlKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIENsYXNzKSkgcmV0dXJuIG5ldyBDbGFzcyhvdmVycmlkZSlcbiAgICB0aGlzLl9yZWFkaW5nID0gZmFsc2VcbiAgICB0aGlzLl9jYWxsYmFjayA9IGNoZWNrXG4gICAgdGhpcy5kZXN0cm95ZWQgPSBmYWxzZVxuICAgIFJlYWRhYmxlLmNhbGwodGhpcywgb3ZlcnJpZGUgfHwgb3B0cylcblxuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIHZhciBod20gPSB0aGlzLl9yZWFkYWJsZVN0YXRlLmhpZ2hXYXRlck1hcmtcblxuICAgIGZ1bmN0aW9uIGNoZWNrKGVyciwgZGF0YSkge1xuICAgICAgaWYgKHNlbGYuZGVzdHJveWVkKSByZXR1cm5cbiAgICAgIGlmIChlcnIpIHJldHVybiBzZWxmLmRlc3Ryb3koZXJyKVxuICAgICAgaWYgKGRhdGEgPT09IG51bGwpIHJldHVybiBzZWxmLnB1c2gobnVsbClcbiAgICAgIHNlbGYuX3JlYWRpbmcgPSBmYWxzZVxuICAgICAgaWYgKHNlbGYucHVzaChkYXRhKSkgc2VsZi5fcmVhZChod20pXG4gICAgfVxuICB9XG5cbiAgQ2xhc3MucHJvdG90eXBlLl9mcm9tID0gcmVhZCB8fCBub29wXG4gIENsYXNzLnByb3RvdHlwZS5fcmVhZCA9IGZ1bmN0aW9uKHNpemUpIHtcbiAgICBpZiAodGhpcy5fcmVhZGluZyB8fCB0aGlzLmRlc3Ryb3llZCkgcmV0dXJuXG4gICAgdGhpcy5fcmVhZGluZyA9IHRydWVcbiAgICB0aGlzLl9mcm9tKHNpemUsIHRoaXMuX2NhbGxiYWNrKVxuICB9XG5cbiAgQ2xhc3MucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbihlcnIpIHtcbiAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHJldHVyblxuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZVxuXG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiAgICAgIGlmIChlcnIpIHNlbGYuZW1pdCgnZXJyb3InLCBlcnIpXG4gICAgICBzZWxmLmVtaXQoJ2Nsb3NlJylcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIENsYXNzXG59XG5cbmZ1bmN0aW9uIG9iaihvcHRzLCByZWFkKSB7XG4gIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJyB8fCBBcnJheS5pc0FycmF5KG9wdHMpKSB7XG4gICAgcmVhZCA9IG9wdHNcbiAgICBvcHRzID0ge31cbiAgfVxuXG4gIG9wdHMgPSBkZWZhdWx0cyhvcHRzKVxuICBvcHRzLm9iamVjdE1vZGUgPSB0cnVlXG4gIG9wdHMuaGlnaFdhdGVyTWFyayA9IDE2XG5cbiAgcmV0dXJuIGZyb20yKG9wdHMsIHJlYWQpXG59XG5cbmZ1bmN0aW9uIG5vb3AgKCkge31cblxuZnVuY3Rpb24gZGVmYXVsdHMob3B0cykge1xuICBvcHRzID0gb3B0cyB8fCB7fVxuICByZXR1cm4gb3B0c1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/from2/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/from2/index.js":
/*!*************************************!*\
  !*** ./node_modules/from2/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Readable = (__webpack_require__(/*! readable-stream */ \"(rsc)/./node_modules/readable-stream/readable.js\").Readable)\nvar inherits = __webpack_require__(/*! inherits */ \"(rsc)/./node_modules/inherits/inherits.js\")\n\nmodule.exports = from2\n\nfrom2.ctor = ctor\nfrom2.obj = obj\n\nvar Proto = ctor()\n\nfunction toFunction(list) {\n  list = list.slice()\n  return function (_, cb) {\n    var err = null\n    var item = list.length ? list.shift() : null\n    if (item instanceof Error) {\n      err = item\n      item = null\n    }\n\n    cb(err, item)\n  }\n}\n\nfunction from2(opts, read) {\n  if (typeof opts !== 'object' || Array.isArray(opts)) {\n    read = opts\n    opts = {}\n  }\n\n  var rs = new Proto(opts)\n  rs._from = Array.isArray(read) ? toFunction(read) : (read || noop)\n  return rs\n}\n\nfunction ctor(opts, read) {\n  if (typeof opts === 'function') {\n    read = opts\n    opts = {}\n  }\n\n  opts = defaults(opts)\n\n  inherits(Class, Readable)\n  function Class(override) {\n    if (!(this instanceof Class)) return new Class(override)\n    this._reading = false\n    this._callback = check\n    this.destroyed = false\n    Readable.call(this, override || opts)\n\n    var self = this\n    var hwm = this._readableState.highWaterMark\n\n    function check(err, data) {\n      if (self.destroyed) return\n      if (err) return self.destroy(err)\n      if (data === null) return self.push(null)\n      self._reading = false\n      if (self.push(data)) self._read(hwm)\n    }\n  }\n\n  Class.prototype._from = read || noop\n  Class.prototype._read = function(size) {\n    if (this._reading || this.destroyed) return\n    this._reading = true\n    this._from(size, this._callback)\n  }\n\n  Class.prototype.destroy = function(err) {\n    if (this.destroyed) return\n    this.destroyed = true\n\n    var self = this\n    process.nextTick(function() {\n      if (err) self.emit('error', err)\n      self.emit('close')\n    })\n  }\n\n  return Class\n}\n\nfunction obj(opts, read) {\n  if (typeof opts === 'function' || Array.isArray(opts)) {\n    read = opts\n    opts = {}\n  }\n\n  opts = defaults(opts)\n  opts.objectMode = true\n  opts.highWaterMark = 16\n\n  return from2(opts, read)\n}\n\nfunction noop () {}\n\nfunction defaults(opts) {\n  opts = opts || {}\n  return opts\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZnJvbTIvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSx5R0FBbUM7QUFDbEQsZUFBZSxtQkFBTyxDQUFDLDJEQUFVOztBQUVqQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RpZ2l0YWwtZWNvbW1lcmNlLy4vbm9kZV9tb2R1bGVzL2Zyb20yL2luZGV4LmpzPzJjNjIiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFJlYWRhYmxlID0gcmVxdWlyZSgncmVhZGFibGUtc3RyZWFtJykuUmVhZGFibGVcbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJylcblxubW9kdWxlLmV4cG9ydHMgPSBmcm9tMlxuXG5mcm9tMi5jdG9yID0gY3RvclxuZnJvbTIub2JqID0gb2JqXG5cbnZhciBQcm90byA9IGN0b3IoKVxuXG5mdW5jdGlvbiB0b0Z1bmN0aW9uKGxpc3QpIHtcbiAgbGlzdCA9IGxpc3Quc2xpY2UoKVxuICByZXR1cm4gZnVuY3Rpb24gKF8sIGNiKSB7XG4gICAgdmFyIGVyciA9IG51bGxcbiAgICB2YXIgaXRlbSA9IGxpc3QubGVuZ3RoID8gbGlzdC5zaGlmdCgpIDogbnVsbFxuICAgIGlmIChpdGVtIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIGVyciA9IGl0ZW1cbiAgICAgIGl0ZW0gPSBudWxsXG4gICAgfVxuXG4gICAgY2IoZXJyLCBpdGVtKVxuICB9XG59XG5cbmZ1bmN0aW9uIGZyb20yKG9wdHMsIHJlYWQpIHtcbiAgaWYgKHR5cGVvZiBvcHRzICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KG9wdHMpKSB7XG4gICAgcmVhZCA9IG9wdHNcbiAgICBvcHRzID0ge31cbiAgfVxuXG4gIHZhciBycyA9IG5ldyBQcm90byhvcHRzKVxuICBycy5fZnJvbSA9IEFycmF5LmlzQXJyYXkocmVhZCkgPyB0b0Z1bmN0aW9uKHJlYWQpIDogKHJlYWQgfHwgbm9vcClcbiAgcmV0dXJuIHJzXG59XG5cbmZ1bmN0aW9uIGN0b3Iob3B0cywgcmVhZCkge1xuICBpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZWFkID0gb3B0c1xuICAgIG9wdHMgPSB7fVxuICB9XG5cbiAgb3B0cyA9IGRlZmF1bHRzKG9wdHMpXG5cbiAgaW5oZXJpdHMoQ2xhc3MsIFJlYWRhYmxlKVxuICBmdW5jdGlvbiBDbGFzcyhvdmVycmlkZSkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBDbGFzcykpIHJldHVybiBuZXcgQ2xhc3Mob3ZlcnJpZGUpXG4gICAgdGhpcy5fcmVhZGluZyA9IGZhbHNlXG4gICAgdGhpcy5fY2FsbGJhY2sgPSBjaGVja1xuICAgIHRoaXMuZGVzdHJveWVkID0gZmFsc2VcbiAgICBSZWFkYWJsZS5jYWxsKHRoaXMsIG92ZXJyaWRlIHx8IG9wdHMpXG5cbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICB2YXIgaHdtID0gdGhpcy5fcmVhZGFibGVTdGF0ZS5oaWdoV2F0ZXJNYXJrXG5cbiAgICBmdW5jdGlvbiBjaGVjayhlcnIsIGRhdGEpIHtcbiAgICAgIGlmIChzZWxmLmRlc3Ryb3llZCkgcmV0dXJuXG4gICAgICBpZiAoZXJyKSByZXR1cm4gc2VsZi5kZXN0cm95KGVycilcbiAgICAgIGlmIChkYXRhID09PSBudWxsKSByZXR1cm4gc2VsZi5wdXNoKG51bGwpXG4gICAgICBzZWxmLl9yZWFkaW5nID0gZmFsc2VcbiAgICAgIGlmIChzZWxmLnB1c2goZGF0YSkpIHNlbGYuX3JlYWQoaHdtKVxuICAgIH1cbiAgfVxuXG4gIENsYXNzLnByb3RvdHlwZS5fZnJvbSA9IHJlYWQgfHwgbm9vcFxuICBDbGFzcy5wcm90b3R5cGUuX3JlYWQgPSBmdW5jdGlvbihzaXplKSB7XG4gICAgaWYgKHRoaXMuX3JlYWRpbmcgfHwgdGhpcy5kZXN0cm95ZWQpIHJldHVyblxuICAgIHRoaXMuX3JlYWRpbmcgPSB0cnVlXG4gICAgdGhpcy5fZnJvbShzaXplLCB0aGlzLl9jYWxsYmFjaylcbiAgfVxuXG4gIENsYXNzLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oZXJyKSB7XG4gICAgaWYgKHRoaXMuZGVzdHJveWVkKSByZXR1cm5cbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWVcblxuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoZXJyKSBzZWxmLmVtaXQoJ2Vycm9yJywgZXJyKVxuICAgICAgc2VsZi5lbWl0KCdjbG9zZScpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBDbGFzc1xufVxuXG5mdW5jdGlvbiBvYmoob3B0cywgcmVhZCkge1xuICBpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicgfHwgQXJyYXkuaXNBcnJheShvcHRzKSkge1xuICAgIHJlYWQgPSBvcHRzXG4gICAgb3B0cyA9IHt9XG4gIH1cblxuICBvcHRzID0gZGVmYXVsdHMob3B0cylcbiAgb3B0cy5vYmplY3RNb2RlID0gdHJ1ZVxuICBvcHRzLmhpZ2hXYXRlck1hcmsgPSAxNlxuXG4gIHJldHVybiBmcm9tMihvcHRzLCByZWFkKVxufVxuXG5mdW5jdGlvbiBub29wICgpIHt9XG5cbmZ1bmN0aW9uIGRlZmF1bHRzKG9wdHMpIHtcbiAgb3B0cyA9IG9wdHMgfHwge31cbiAgcmV0dXJuIG9wdHNcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/from2/index.js\n");

/***/ })

};
;