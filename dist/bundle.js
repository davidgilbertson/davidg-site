/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*********************!*\
  !*** ./app/main.js ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	var someOtherFile = __webpack_require__(/*! ./someOther */ 1);
	
	console.log('  --  >  main.js:1 > ');
	
	var it = someOtherFile.getIt();
	
	console.log('  --  >  main.js:7 >  > two:', it);

/***/ },
/* 1 */
/*!**************************!*\
  !*** ./app/someOther.js ***!
  \**************************/
/***/ function(module, exports) {

	console.log('  --  >  someOther.js:1 > ');
	module.exports = {
	    getIt: function() {
	        return 'got it dude';
	    }
	};


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map