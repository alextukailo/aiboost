/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "../";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./scss/main.scss");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ../node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ../node_modules/postcss-loader/dist/cjs.js):\nError: Package exports for '/Users/AlexTukaylo/dev/starter/node_modules/klona' do not define a valid './full' target\n    at resolveExportsTarget (internal/modules/cjs/loader.js:460:13)\n    at resolveExports (internal/modules/cjs/loader.js:393:16)\n    at Function.Module._findPath (internal/modules/cjs/loader.js:492:20)\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:787:27)\n    at Function.Module._load (internal/modules/cjs/loader.js:693:27)\n    at Module.require (internal/modules/cjs/loader.js:864:19)\n    at require (/Users/AlexTukaylo/dev/starter/node_modules/v8-compile-cache/v8-compile-cache.js:161:20)\n    at Object.<anonymous> (/Users/AlexTukaylo/dev/starter/node_modules/postcss-loader/dist/utils.js:16:13)\n    at Module._compile (/Users/AlexTukaylo/dev/starter/node_modules/v8-compile-cache/v8-compile-cache.js:194:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1011:10)\n    at Module.load (internal/modules/cjs/loader.js:822:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:730:14)\n    at Module.require (internal/modules/cjs/loader.js:864:19)\n    at require (/Users/AlexTukaylo/dev/starter/node_modules/v8-compile-cache/v8-compile-cache.js:161:20)\n    at Object.<anonymous> (/Users/AlexTukaylo/dev/starter/node_modules/postcss-loader/dist/index.js:24:14)\n    at Module._compile (/Users/AlexTukaylo/dev/starter/node_modules/v8-compile-cache/v8-compile-cache.js:194:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1011:10)\n    at Module.load (internal/modules/cjs/loader.js:822:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:730:14)\n    at Module.require (internal/modules/cjs/loader.js:864:19)\n    at require (/Users/AlexTukaylo/dev/starter/node_modules/v8-compile-cache/v8-compile-cache.js:161:20)\n    at Object.<anonymous> (/Users/AlexTukaylo/dev/starter/node_modules/postcss-loader/dist/cjs.js:3:18)\n    at Module._compile (/Users/AlexTukaylo/dev/starter/node_modules/v8-compile-cache/v8-compile-cache.js:194:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1011:10)\n    at Module.load (internal/modules/cjs/loader.js:822:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:730:14)\n    at Module.require (internal/modules/cjs/loader.js:864:19)\n    at require (/Users/AlexTukaylo/dev/starter/node_modules/v8-compile-cache/v8-compile-cache.js:161:20)\n    at loadLoader (/Users/AlexTukaylo/dev/starter/node_modules/loader-runner/lib/loadLoader.js:18:17)\n    at iteratePitchingLoaders (/Users/AlexTukaylo/dev/starter/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at /Users/AlexTukaylo/dev/starter/node_modules/webpack/lib/NormalModule.js:316:20\n    at /Users/AlexTukaylo/dev/starter/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Users/AlexTukaylo/dev/starter/node_modules/loader-runner/lib/LoaderRunner.js:172:11\n    at loadLoader (/Users/AlexTukaylo/dev/starter/node_modules/loader-runner/lib/loadLoader.js:32:11)\n    at iteratePitchingLoaders (/Users/AlexTukaylo/dev/starter/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/AlexTukaylo/dev/starter/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/AlexTukaylo/dev/starter/node_modules/loader-runner/lib/LoaderRunner.js:176:18\n    at loadLoader (/Users/AlexTukaylo/dev/starter/node_modules/loader-runner/lib/loadLoader.js:47:3)\n    at iteratePitchingLoaders (/Users/AlexTukaylo/dev/starter/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/Users/AlexTukaylo/dev/starter/node_modules/loader-runner/lib/LoaderRunner.js:365:2)\n    at NormalModule.doBuild (/Users/AlexTukaylo/dev/starter/node_modules/webpack/lib/NormalModule.js:295:3)\n    at NormalModule.build (/Users/AlexTukaylo/dev/starter/node_modules/webpack/lib/NormalModule.js:446:15)\n    at Compilation.buildModule (/Users/AlexTukaylo/dev/starter/node_modules/webpack/lib/Compilation.js:739:10)\n    at /Users/AlexTukaylo/dev/starter/node_modules/webpack/lib/Compilation.js:1111:12\n    at /Users/AlexTukaylo/dev/starter/node_modules/webpack/lib/NormalModuleFactory.js:409:6\n    at /Users/AlexTukaylo/dev/starter/node_modules/webpack/lib/NormalModuleFactory.js:155:13\n    at AsyncSeriesWaterfallHook.eval [as callAsync] (eval at create (/Users/AlexTukaylo/dev/starter/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:4:1)\n    at AsyncSeriesWaterfallHook.lazyCompileHook (/Users/AlexTukaylo/dev/starter/node_modules/tapable/lib/Hook.js:154:20)\n    at /Users/AlexTukaylo/dev/starter/node_modules/webpack/lib/NormalModuleFactory.js:138:29\n    at /Users/AlexTukaylo/dev/starter/node_modules/webpack/lib/NormalModuleFactory.js:346:9\n    at processTicksAndRejections (internal/process/task_queues.js:75:11)");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map