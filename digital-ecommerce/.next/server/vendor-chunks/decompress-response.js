"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/decompress-response";
exports.ids = ["vendor-chunks/decompress-response"];
exports.modules = {

/***/ "(ssr)/./node_modules/decompress-response/index.js":
/*!***************************************************!*\
  !*** ./node_modules/decompress-response/index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst {Transform, PassThrough} = __webpack_require__(/*! stream */ \"stream\");\nconst zlib = __webpack_require__(/*! zlib */ \"zlib\");\nconst mimicResponse = __webpack_require__(/*! mimic-response */ \"(ssr)/./node_modules/mimic-response/index.js\");\n\nmodule.exports = response => {\n\tconst contentEncoding = (response.headers['content-encoding'] || '').toLowerCase();\n\n\tif (!['gzip', 'deflate', 'br'].includes(contentEncoding)) {\n\t\treturn response;\n\t}\n\n\t// TODO: Remove this when targeting Node.js 12.\n\tconst isBrotli = contentEncoding === 'br';\n\tif (isBrotli && typeof zlib.createBrotliDecompress !== 'function') {\n\t\tresponse.destroy(new Error('Brotli is not supported on Node.js < 12'));\n\t\treturn response;\n\t}\n\n\tlet isEmpty = true;\n\n\tconst checker = new Transform({\n\t\ttransform(data, _encoding, callback) {\n\t\t\tisEmpty = false;\n\n\t\t\tcallback(null, data);\n\t\t},\n\n\t\tflush(callback) {\n\t\t\tcallback();\n\t\t}\n\t});\n\n\tconst finalStream = new PassThrough({\n\t\tautoDestroy: false,\n\t\tdestroy(error, callback) {\n\t\t\tresponse.destroy();\n\n\t\t\tcallback(error);\n\t\t}\n\t});\n\n\tconst decompressStream = isBrotli ? zlib.createBrotliDecompress() : zlib.createUnzip();\n\n\tdecompressStream.once('error', error => {\n\t\tif (isEmpty && !response.readable) {\n\t\t\tfinalStream.end();\n\t\t\treturn;\n\t\t}\n\n\t\tfinalStream.destroy(error);\n\t});\n\n\tmimicResponse(response, finalStream);\n\tresponse.pipe(checker).pipe(decompressStream).pipe(finalStream);\n\n\treturn finalStream;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZGVjb21wcmVzcy1yZXNwb25zZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLE9BQU8sd0JBQXdCLEVBQUUsbUJBQU8sQ0FBQyxzQkFBUTtBQUNqRCxhQUFhLG1CQUFPLENBQUMsa0JBQU07QUFDM0Isc0JBQXNCLG1CQUFPLENBQUMsb0VBQWdCOztBQUU5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RpZ2l0YWwtZWNvbW1lcmNlLy4vbm9kZV9tb2R1bGVzL2RlY29tcHJlc3MtcmVzcG9uc2UvaW5kZXguanM/OWRjNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5jb25zdCB7VHJhbnNmb3JtLCBQYXNzVGhyb3VnaH0gPSByZXF1aXJlKCdzdHJlYW0nKTtcbmNvbnN0IHpsaWIgPSByZXF1aXJlKCd6bGliJyk7XG5jb25zdCBtaW1pY1Jlc3BvbnNlID0gcmVxdWlyZSgnbWltaWMtcmVzcG9uc2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXNwb25zZSA9PiB7XG5cdGNvbnN0IGNvbnRlbnRFbmNvZGluZyA9IChyZXNwb25zZS5oZWFkZXJzWydjb250ZW50LWVuY29kaW5nJ10gfHwgJycpLnRvTG93ZXJDYXNlKCk7XG5cblx0aWYgKCFbJ2d6aXAnLCAnZGVmbGF0ZScsICdiciddLmluY2x1ZGVzKGNvbnRlbnRFbmNvZGluZykpIHtcblx0XHRyZXR1cm4gcmVzcG9uc2U7XG5cdH1cblxuXHQvLyBUT0RPOiBSZW1vdmUgdGhpcyB3aGVuIHRhcmdldGluZyBOb2RlLmpzIDEyLlxuXHRjb25zdCBpc0Jyb3RsaSA9IGNvbnRlbnRFbmNvZGluZyA9PT0gJ2JyJztcblx0aWYgKGlzQnJvdGxpICYmIHR5cGVvZiB6bGliLmNyZWF0ZUJyb3RsaURlY29tcHJlc3MgIT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXNwb25zZS5kZXN0cm95KG5ldyBFcnJvcignQnJvdGxpIGlzIG5vdCBzdXBwb3J0ZWQgb24gTm9kZS5qcyA8IDEyJykpO1xuXHRcdHJldHVybiByZXNwb25zZTtcblx0fVxuXG5cdGxldCBpc0VtcHR5ID0gdHJ1ZTtcblxuXHRjb25zdCBjaGVja2VyID0gbmV3IFRyYW5zZm9ybSh7XG5cdFx0dHJhbnNmb3JtKGRhdGEsIF9lbmNvZGluZywgY2FsbGJhY2spIHtcblx0XHRcdGlzRW1wdHkgPSBmYWxzZTtcblxuXHRcdFx0Y2FsbGJhY2sobnVsbCwgZGF0YSk7XG5cdFx0fSxcblxuXHRcdGZsdXNoKGNhbGxiYWNrKSB7XG5cdFx0XHRjYWxsYmFjaygpO1xuXHRcdH1cblx0fSk7XG5cblx0Y29uc3QgZmluYWxTdHJlYW0gPSBuZXcgUGFzc1Rocm91Z2goe1xuXHRcdGF1dG9EZXN0cm95OiBmYWxzZSxcblx0XHRkZXN0cm95KGVycm9yLCBjYWxsYmFjaykge1xuXHRcdFx0cmVzcG9uc2UuZGVzdHJveSgpO1xuXG5cdFx0XHRjYWxsYmFjayhlcnJvcik7XG5cdFx0fVxuXHR9KTtcblxuXHRjb25zdCBkZWNvbXByZXNzU3RyZWFtID0gaXNCcm90bGkgPyB6bGliLmNyZWF0ZUJyb3RsaURlY29tcHJlc3MoKSA6IHpsaWIuY3JlYXRlVW56aXAoKTtcblxuXHRkZWNvbXByZXNzU3RyZWFtLm9uY2UoJ2Vycm9yJywgZXJyb3IgPT4ge1xuXHRcdGlmIChpc0VtcHR5ICYmICFyZXNwb25zZS5yZWFkYWJsZSkge1xuXHRcdFx0ZmluYWxTdHJlYW0uZW5kKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZmluYWxTdHJlYW0uZGVzdHJveShlcnJvcik7XG5cdH0pO1xuXG5cdG1pbWljUmVzcG9uc2UocmVzcG9uc2UsIGZpbmFsU3RyZWFtKTtcblx0cmVzcG9uc2UucGlwZShjaGVja2VyKS5waXBlKGRlY29tcHJlc3NTdHJlYW0pLnBpcGUoZmluYWxTdHJlYW0pO1xuXG5cdHJldHVybiBmaW5hbFN0cmVhbTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/decompress-response/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/decompress-response/index.js":
/*!***************************************************!*\
  !*** ./node_modules/decompress-response/index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst {Transform, PassThrough} = __webpack_require__(/*! stream */ \"stream\");\nconst zlib = __webpack_require__(/*! zlib */ \"zlib\");\nconst mimicResponse = __webpack_require__(/*! mimic-response */ \"(rsc)/./node_modules/mimic-response/index.js\");\n\nmodule.exports = response => {\n\tconst contentEncoding = (response.headers['content-encoding'] || '').toLowerCase();\n\n\tif (!['gzip', 'deflate', 'br'].includes(contentEncoding)) {\n\t\treturn response;\n\t}\n\n\t// TODO: Remove this when targeting Node.js 12.\n\tconst isBrotli = contentEncoding === 'br';\n\tif (isBrotli && typeof zlib.createBrotliDecompress !== 'function') {\n\t\tresponse.destroy(new Error('Brotli is not supported on Node.js < 12'));\n\t\treturn response;\n\t}\n\n\tlet isEmpty = true;\n\n\tconst checker = new Transform({\n\t\ttransform(data, _encoding, callback) {\n\t\t\tisEmpty = false;\n\n\t\t\tcallback(null, data);\n\t\t},\n\n\t\tflush(callback) {\n\t\t\tcallback();\n\t\t}\n\t});\n\n\tconst finalStream = new PassThrough({\n\t\tautoDestroy: false,\n\t\tdestroy(error, callback) {\n\t\t\tresponse.destroy();\n\n\t\t\tcallback(error);\n\t\t}\n\t});\n\n\tconst decompressStream = isBrotli ? zlib.createBrotliDecompress() : zlib.createUnzip();\n\n\tdecompressStream.once('error', error => {\n\t\tif (isEmpty && !response.readable) {\n\t\t\tfinalStream.end();\n\t\t\treturn;\n\t\t}\n\n\t\tfinalStream.destroy(error);\n\t});\n\n\tmimicResponse(response, finalStream);\n\tresponse.pipe(checker).pipe(decompressStream).pipe(finalStream);\n\n\treturn finalStream;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZGVjb21wcmVzcy1yZXNwb25zZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLE9BQU8sd0JBQXdCLEVBQUUsbUJBQU8sQ0FBQyxzQkFBUTtBQUNqRCxhQUFhLG1CQUFPLENBQUMsa0JBQU07QUFDM0Isc0JBQXNCLG1CQUFPLENBQUMsb0VBQWdCOztBQUU5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RpZ2l0YWwtZWNvbW1lcmNlLy4vbm9kZV9tb2R1bGVzL2RlY29tcHJlc3MtcmVzcG9uc2UvaW5kZXguanM/ZmI5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5jb25zdCB7VHJhbnNmb3JtLCBQYXNzVGhyb3VnaH0gPSByZXF1aXJlKCdzdHJlYW0nKTtcbmNvbnN0IHpsaWIgPSByZXF1aXJlKCd6bGliJyk7XG5jb25zdCBtaW1pY1Jlc3BvbnNlID0gcmVxdWlyZSgnbWltaWMtcmVzcG9uc2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXNwb25zZSA9PiB7XG5cdGNvbnN0IGNvbnRlbnRFbmNvZGluZyA9IChyZXNwb25zZS5oZWFkZXJzWydjb250ZW50LWVuY29kaW5nJ10gfHwgJycpLnRvTG93ZXJDYXNlKCk7XG5cblx0aWYgKCFbJ2d6aXAnLCAnZGVmbGF0ZScsICdiciddLmluY2x1ZGVzKGNvbnRlbnRFbmNvZGluZykpIHtcblx0XHRyZXR1cm4gcmVzcG9uc2U7XG5cdH1cblxuXHQvLyBUT0RPOiBSZW1vdmUgdGhpcyB3aGVuIHRhcmdldGluZyBOb2RlLmpzIDEyLlxuXHRjb25zdCBpc0Jyb3RsaSA9IGNvbnRlbnRFbmNvZGluZyA9PT0gJ2JyJztcblx0aWYgKGlzQnJvdGxpICYmIHR5cGVvZiB6bGliLmNyZWF0ZUJyb3RsaURlY29tcHJlc3MgIT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXNwb25zZS5kZXN0cm95KG5ldyBFcnJvcignQnJvdGxpIGlzIG5vdCBzdXBwb3J0ZWQgb24gTm9kZS5qcyA8IDEyJykpO1xuXHRcdHJldHVybiByZXNwb25zZTtcblx0fVxuXG5cdGxldCBpc0VtcHR5ID0gdHJ1ZTtcblxuXHRjb25zdCBjaGVja2VyID0gbmV3IFRyYW5zZm9ybSh7XG5cdFx0dHJhbnNmb3JtKGRhdGEsIF9lbmNvZGluZywgY2FsbGJhY2spIHtcblx0XHRcdGlzRW1wdHkgPSBmYWxzZTtcblxuXHRcdFx0Y2FsbGJhY2sobnVsbCwgZGF0YSk7XG5cdFx0fSxcblxuXHRcdGZsdXNoKGNhbGxiYWNrKSB7XG5cdFx0XHRjYWxsYmFjaygpO1xuXHRcdH1cblx0fSk7XG5cblx0Y29uc3QgZmluYWxTdHJlYW0gPSBuZXcgUGFzc1Rocm91Z2goe1xuXHRcdGF1dG9EZXN0cm95OiBmYWxzZSxcblx0XHRkZXN0cm95KGVycm9yLCBjYWxsYmFjaykge1xuXHRcdFx0cmVzcG9uc2UuZGVzdHJveSgpO1xuXG5cdFx0XHRjYWxsYmFjayhlcnJvcik7XG5cdFx0fVxuXHR9KTtcblxuXHRjb25zdCBkZWNvbXByZXNzU3RyZWFtID0gaXNCcm90bGkgPyB6bGliLmNyZWF0ZUJyb3RsaURlY29tcHJlc3MoKSA6IHpsaWIuY3JlYXRlVW56aXAoKTtcblxuXHRkZWNvbXByZXNzU3RyZWFtLm9uY2UoJ2Vycm9yJywgZXJyb3IgPT4ge1xuXHRcdGlmIChpc0VtcHR5ICYmICFyZXNwb25zZS5yZWFkYWJsZSkge1xuXHRcdFx0ZmluYWxTdHJlYW0uZW5kKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZmluYWxTdHJlYW0uZGVzdHJveShlcnJvcik7XG5cdH0pO1xuXG5cdG1pbWljUmVzcG9uc2UocmVzcG9uc2UsIGZpbmFsU3RyZWFtKTtcblx0cmVzcG9uc2UucGlwZShjaGVja2VyKS5waXBlKGRlY29tcHJlc3NTdHJlYW0pLnBpcGUoZmluYWxTdHJlYW0pO1xuXG5cdHJldHVybiBmaW5hbFN0cmVhbTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/decompress-response/index.js\n");

/***/ })

};
;