/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(5);
	var $ = __webpack_require__(6);
	var $body = $('body');
	var $renderArea = $('.yiqi-render-area');
	$renderArea.length === 0 ? $renderArea = $body : undefined;

	$body.livetouchclick('.yiqi-input-area.text-area', function (event) {
	    event.preventDefault();
	    $(this).find('input').focus();
	});

	$body.livetouchclick('.yiqi-input-area.radio-area', function () {
	    $(this).find('input')[0].checked = true;
	});

	$body.livetouchclick('.yiqi-input-area.checkbox-area', function (event) {
	    event.preventDefault();
	    var checked = $(this).find('input')[0].checked;
	    $(this).find('input')[0].checked = !checked;
	});

	var render = (function render() {
	    $('.yiqi-input-text:not(.yiqi-input-render)').each(function () {
	        var $this = $(this).addClass('yiqi-input-render'),
	            label = $this.attr('data-input-label');
	        $this.wrap('<div class="yiqi-input-area text-area"></div>')
	            .before('<div class="yiqi-input-label">' + label + '</div>');
	    });

	    $('.yiqi-input-radio:not(.yiqi-input-render)').each(function () {
	        var $this = $(this).addClass('yiqi-input-render'),
	            label = $this.attr('data-input-label');
	        $this.wrap('<div class="yiqi-input-area radio-area"></div>')
	            .after('<div class="yiqi-input-label">' + label + '</div>')
	            .after('<div class="yiqi-input-control"></div>');
	    });

	    $('.yiqi-input-checkbox:not(.yiqi-input-render)').each(function () {
	        var $this = $(this).addClass('yiqi-input-render'),
	            label = $this.attr('data-input-label');
	        $this.wrap('<div class="yiqi-input-area checkbox-area"></div>')
	            .after('<div class="yiqi-input-label">' + label + '</div>')
	            .after('<div class="yiqi-input-control"></div>');
	    });
	    $renderArea.data('loading', false);
	    return render;
	})();

	$renderArea.on('DOMSubtreeModified', function (event) {
	    if ($renderArea.data('loading')) {
	        return false;
	    }
	    $renderArea.data('loading', true);
	    render();
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js?{browsers:[\"last 3 version\", \"Android 4\"]}!./../../../node_modules/sass-loader/index.js!./yiqi_input.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js?{browsers:[\"last 3 version\", \"Android 4\"]}!./../../../node_modules/sass-loader/index.js!./yiqi_input.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".yiqi-input-area {\n  display: block; }\n  .yiqi-input-area * {\n    box-sizing: border-box;\n    -webkit-tap-highlight-color: transparent; }\n  .yiqi-input-area.text-area {\n    width: 100%;\n    background: #fff;\n    border-bottom: 1px solid #ccc;\n    border-top: 1px solid #ccc;\n    padding: 10px 0;\n    font-size: 16px;\n    position: relative; }\n    .yiqi-input-area.text-area:before,\n    .yiqi-input-area.text-area:after {\n      content: \" \";\n      display: table; }\n    .yiqi-input-area.text-area:after {\n      clear: both; }\n    .yiqi-input-area.text-area .yiqi-input-label {\n      color: #ccc;\n      display: inline-block;\n      width: 30%;\n      padding-left: 15px; }\n    .yiqi-input-area.text-area .yiqi-input-text {\n      color: #333;\n      text-align: right;\n      width: 65%;\n      border: 0;\n      padding: 0;\n      margin-right: 15px;\n      font-size: 16px; }\n      .yiqi-input-area.text-area .yiqi-input-text::-webkit-input-placeholder {\n        color: #ccc; }\n  .yiqi-input-area.radio-area,\n  .yiqi-input-area.checkbox-area {\n    position: relative;\n    font-size: 16px;\n    color: #333; }\n    .yiqi-input-area.radio-area .yiqi-input-radio,\n    .yiqi-input-area.radio-area .yiqi-input-checkbox,\n    .yiqi-input-area.checkbox-area .yiqi-input-radio,\n    .yiqi-input-area.checkbox-area .yiqi-input-checkbox {\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      width: 100%;\n      height: 100%;\n      z-index: 5;\n      display: block;\n      opacity: 0; }\n      .yiqi-input-area.radio-area .yiqi-input-radio:checked + .yiqi-input-control:after,\n      .yiqi-input-area.radio-area .yiqi-input-checkbox:checked + .yiqi-input-control:after,\n      .yiqi-input-area.checkbox-area .yiqi-input-radio:checked + .yiqi-input-control:after,\n      .yiqi-input-area.checkbox-area .yiqi-input-checkbox:checked + .yiqi-input-control:after {\n        background: #390; }\n    .yiqi-input-area.radio-area .yiqi-input-control,\n    .yiqi-input-area.checkbox-area .yiqi-input-control {\n      width: 24px;\n      height: 24px;\n      background: #fff;\n      border-radius: 100%;\n      display: inline-block;\n      vertical-align: middle;\n      position: relative; }\n      .yiqi-input-area.radio-area .yiqi-input-control:after,\n      .yiqi-input-area.checkbox-area .yiqi-input-control:after {\n        -webkit-transform: scale(0.625, 0.625);\n            -ms-transform: scale(0.625, 0.625);\n                transform: scale(0.625, 0.625);\n        background: #fff;\n        content: '';\n        width: 100%;\n        height: 100%;\n        border-radius: 100%;\n        display: block;\n        -webkit-transition: all 0.2s ease;\n                transition: all 0.2s ease; }\n    .yiqi-input-area.radio-area .yiqi-input-label,\n    .yiqi-input-area.checkbox-area .yiqi-input-label {\n      padding-left: 10px;\n      display: inline-block;\n      vertical-align: middle; }\n  .yiqi-input-area.checkbox-area .yiqi-input-control {\n    border-radius: 3px; }\n    .yiqi-input-area.checkbox-area .yiqi-input-control:after {\n      border-radius: 3px; }\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var $ = __webpack_require__(6);

	$.fn.touchclick = function (handle) {
	    var lock = false,
	        self = this;
	    this.on('touchstart', function () {
	        lock = false;
	    }).on('touchmove', function () {
	        lock = true;
	    }).on('touchend', function (event) {
	        if(lock){
	            return false;
	        }
	        handle(event);
	        return self;
	    })
	}

	$.fn.livetouchclick = function (query, handle) {
	    var lock = false,
	        self = this;
	    this.on('touchstart', query, function () {
	        lock = false;
	    }).on('touchmove', query, function () {
	        lock = true;
	    }).on('touchend', query, function (event) {
	        if(lock){
	            return false;
	        }
	        handle.call(this, event);
	        return self;
	    })
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ }
/******/ ]);