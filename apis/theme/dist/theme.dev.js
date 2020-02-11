/*
* @nebula.js/theme v0.1.0-alpha.29
* Copyright (c) 2020 QlikTech International AB
* Released under the MIT license.
*/

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('node-event-emitter'), require('d3-color')) :
	typeof define === 'function' && define.amd ? define(['node-event-emitter', 'd3-color'], factory) :
	(global = global || self, global.theme = factory(global.EventEmitter, global.d3Color));
}(this, (function (EventEmitter, d3Color) { 'use strict';

	EventEmitter = EventEmitter && EventEmitter.hasOwnProperty('default') ? EventEmitter['default'] : EventEmitter;

	var hasOwn = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var defineProperty = Object.defineProperty;
	var gOPD = Object.getOwnPropertyDescriptor;

	var isArray = function isArray(arr) {
		if (typeof Array.isArray === 'function') {
			return Array.isArray(arr);
		}

		return toStr.call(arr) === '[object Array]';
	};

	var isPlainObject = function isPlainObject(obj) {
		if (!obj || toStr.call(obj) !== '[object Object]') {
			return false;
		}

		var hasOwnConstructor = hasOwn.call(obj, 'constructor');
		var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
		// Not own constructor property must be Object
		if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
			return false;
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		var key;
		for (key in obj) { /**/ }

		return typeof key === 'undefined' || hasOwn.call(obj, key);
	};

	// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
	var setProperty = function setProperty(target, options) {
		if (defineProperty && options.name === '__proto__') {
			defineProperty(target, options.name, {
				enumerable: true,
				configurable: true,
				value: options.newValue,
				writable: true
			});
		} else {
			target[options.name] = options.newValue;
		}
	};

	// Return undefined instead of __proto__ if '__proto__' is not an own property
	var getProperty = function getProperty(obj, name) {
		if (name === '__proto__') {
			if (!hasOwn.call(obj, name)) {
				return void 0;
			} else if (gOPD) {
				// In early versions of node, obj['__proto__'] is buggy when obj has
				// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
				return gOPD(obj, name).value;
			}
		}

		return obj[name];
	};

	var extend = function extend() {
		var options, name, src, copy, copyIsArray, clone;
		var target = arguments[0];
		var i = 1;
		var length = arguments.length;
		var deep = false;

		// Handle a deep copy situation
		if (typeof target === 'boolean') {
			deep = target;
			target = arguments[1] || {};
			// skip the boolean and the target
			i = 2;
		}
		if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
			target = {};
		}

		for (; i < length; ++i) {
			options = arguments[i];
			// Only deal with non-null/undefined values
			if (options != null) {
				// Extend the base object
				for (name in options) {
					src = getProperty(target, name);
					copy = getProperty(options, name);

					// Prevent never-ending loop
					if (target !== copy) {
						// Recurse if we're merging plain objects or arrays
						if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
							if (copyIsArray) {
								copyIsArray = false;
								clone = src && isArray(src) ? src : [];
							} else {
								clone = src && isPlainObject(src) ? src : {};
							}

							// Never move original objects, clone them
							setProperty(target, { name: name, newValue: extend(deep, clone, copy) });

						// Don't bring in undefined values
						} else if (typeof copy !== 'undefined') {
							setProperty(target, { name: name, newValue: copy });
						}
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	var fontSize = "13px";
	var fontFamily = "'Source Sans Pro', 'Arial', 'sans-serif'";
	var backgroundColor = "transparent";
	var dataColors = {
		primaryColor: "#26a0a7",
		othersColor: "#a5a5a5",
		errorColor: "#ff4444",
		nullColor: "#d2d2d2"
	};
	var scales = [
		{
			name: "Sequential Gradient",
			translation: "properties.colorScheme.sequential",
			type: "gradient",
			propertyValue: "sg",
			scale: [
				"#26a0a7",
				"#c7ea8b"
			]
		},
		{
			name: "Sequential Classes",
			translation: "properties.colorScheme.sequentialC",
			propertyValue: "sc",
			type: "class",
			scale: [
				"#26a0a7",
				"#c7ea8b"
			]
		},
		{
			name: "Diverging gradient",
			translation: "properties.colorScheme.diverging",
			propertyValue: "dg",
			type: "gradient",
			scale: [
				"#26a0a7",
				"#c3ea8c",
				"#ec983d"
			]
		},
		{
			name: "Diverging Classes",
			translation: "properties.colorScheme.divergingC",
			propertyValue: "dc",
			type: "class",
			scale: [
				"#26a0a7",
				"#c3ea8c",
				"#ec983d"
			]
		}
	];
	var palettes = {
		data: [
			{
				name: "12 Colors",
				translation: "properties.colorNumberOfColors.12",
				propertyValue: "12",
				type: "pyramid",
				scale: [
					[
						"#26A0A7"
					],
					[
						"#26A0A7",
						"#EC983D"
					],
					[
						"#26A0A7",
						"#CBE989",
						"#EC983D"
					],
					[
						"#26A0A7",
						"#79D69F",
						"#F9EC86",
						"#EC983D"
					],
					[
						"#26A0A7",
						"#79D69F",
						"#CBE989",
						"#F9EC86",
						"#EC983D"
					],
					[
						"#26A0A7",
						"#65D3DA",
						"#79D69F",
						"#CBE989",
						"#F9EC86",
						"#EC983D"
					],
					[
						"#26A0A7",
						"#65D3DA",
						"#79D69F",
						"#CBE989",
						"#F9EC86",
						"#EC983D",
						"#D76C6C"
					],
					[
						"#26A0A7",
						"#65D3DA",
						"#79D69F",
						"#CBE989",
						"#F9EC86",
						"#FAD144",
						"#EC983D",
						"#D76C6C"
					],
					[
						"#138185",
						"#26A0A7",
						"#65D3DA",
						"#79D69F",
						"#CBE989",
						"#F9EC86",
						"#FAD144",
						"#EC983D",
						"#D76C6C"
					],
					[
						"#138185",
						"#26A0A7",
						"#65D3DA",
						"#79D69F",
						"#CBE989",
						"#EBF898",
						"#F9EC86",
						"#FAD144",
						"#EC983D",
						"#D76C6C"
					],
					[
						"#138185",
						"#26A0A7",
						"#65D3DA",
						"#79D69F",
						"#CBE989",
						"#EBF898",
						"#F9EC86",
						"#FAD144",
						"#EC983D",
						"#D76C6C",
						"#A54343"
					],
					[
						"#138185",
						"#26A0A7",
						"#65D3DA",
						"#79D69F",
						"#70BA6E",
						"#CBE989",
						"#EBF898",
						"#F9EC86",
						"#FAD144",
						"#EC983D",
						"#D76C6C",
						"#A54343"
					]
				]
			}
		],
		ui: [
			{
				name: "Palette",
				colors: [
					"#b0afae",
					"#7b7a78",
					"#a54343",
					"#d76c6c",
					"#ec983d",
					"#ecc43d",
					"#f9ec86",
					"#cbe989",
					"#70ba6e",
					"#578b60",
					"#79d69f",
					"#26a0a7",
					"#138185",
					"#65d3da",
					"#ffffff",
					"#000000"
				]
			}
		]
	};
	var baseRawJSON = {
		fontSize: fontSize,
		fontFamily: fontFamily,
		backgroundColor: backgroundColor,
		dataColors: dataColors,
		scales: scales,
		palettes: palettes
	};

	var _variables = {
		"@B20": "#333333",
		"@B35": "#595959",
		"@B45": "#737373",
		"@B50": "#808080",
		"@B60": "#999999",
		"@B80": "#cccccc",
		"@B90": "#e6e6e6",
		"@B98": "#fbfbfb",
		"@B100": "#ffffff",
		"@H1": "24px",
		"@H2": "18px",
		"@H3": "14px",
		"@H4": "13px",
		"@H5": "12px",
		"@H6": "10px"
	};
	var type = "light";
	var color = "@B35";
	var lightRawJSON = {
		_variables: _variables,
		type: type,
		color: color
	};

	var _variables$1 = {
		"@B20": "#333333",
		"@B35": "#595959",
		"@B45": "#737373",
		"@B50": "#808080",
		"@B60": "#999999",
		"@B80": "#cccccc",
		"@B90": "#e6e6e6",
		"@B98": "#fbfbfb",
		"@B100": "#ffffff",
		"@H1": "24px",
		"@H2": "18px",
		"@H3": "14px",
		"@H4": "13px",
		"@H5": "12px",
		"@H6": "10px"
	};
	var type$1 = "dark";
	var color$1 = "@B98";
	var darkRawJSON = {
		_variables: _variables$1,
		type: type$1,
		color: color$1
	};

	function setTheme(t, resolve) {
	  var colorRawJSON = t.type === 'dark' ? darkRawJSON : lightRawJSON;
	  var root = extend(true, {}, baseRawJSON, colorRawJSON); // avoid merging known array objects as it could cause issues if they are of different types (pyramid vs class) or length

	  var rawThemeJSON = extend(true, {}, root, {
	    scales: null,
	    palettes: {
	      data: null,
	      ui: null
	    }
	  }, t);

	  if (!rawThemeJSON.palettes.data) {
	    rawThemeJSON.palettes.data = root.palettes.data;
	  }

	  if (!rawThemeJSON.palettes.ui) {
	    rawThemeJSON.palettes.ui = root.palettes.ui;
	  }

	  if (!rawThemeJSON.scales) {
	    rawThemeJSON.scales = root.scales;
	  }

	  var resolvedThemeJSON = resolve(rawThemeJSON);
	  return resolvedThemeJSON;
	}

	/**
	 * @typedef {object} scalePalette
	 * @property {string} key
	 * @property {'gradient'|'class'} type
	 * @property {string[]} colors
	 */

	/**
	 * @typedef {object} dataPalette
	 * @property {string} key
	 * @property {'pyramid'|'row'} type
	 * @property {string[]|Array<Array<string>>} colors
	 */

	/**
	 * @typedef {object} colorPickerPalette
	 * @property {string} key
	 * @property {string[]} colors
	 */
	function theme(resolvedTheme) {
	  var uiPalette;
	  return {
	    dataScales: function dataScales() {
	      var pals = [];
	      resolvedTheme.scales.forEach(function (s) {
	        pals.push({
	          key: s.propertyValue,
	          name: s.name,
	          translation: s.translation,
	          scheme: true,
	          // indicate that this is scheme that can be used to generate more colors
	          type: s.type,
	          // gradient, class, pyramid, row
	          colors: s.scale
	        });
	      });
	      return pals;
	    },
	    dataPalettes: function dataPalettes() {
	      var pals = [];
	      resolvedTheme.palettes.data.forEach(function (s) {
	        pals.push({
	          key: s.propertyValue,
	          name: s.name,
	          translation: s.translation,
	          type: s.type,
	          colors: s.scale
	        });
	      });
	      return pals;
	    },
	    uiPalettes: function uiPalettes() {
	      var pals = [];
	      resolvedTheme.palettes.ui.forEach(function (s) {
	        pals.push({
	          key: 'ui',
	          name: s.name,
	          translation: s.translation,
	          type: 'row',
	          colors: s.colors
	        });
	      });
	      return pals;
	    },
	    dataColors: function dataColors() {
	      /** @typedef {object} dataColorSpecials */
	      return (
	        /** @lends dataColorSpecials */
	        {
	          /** @type {string} */
	          primary: resolvedTheme.dataColors.primaryColor,

	          /** @type {string} */
	          nil: resolvedTheme.dataColors.nullColor,

	          /** @type {string} */
	          others: resolvedTheme.dataColors.othersColor
	        }
	      );
	    },
	    uiColor: function uiColor(c) {
	      if (c.index < 0 || typeof c.index === 'undefined') {
	        return c.color;
	      }

	      if (typeof uiPalette === 'undefined') {
	        uiPalette = this.uiPalettes()[0] || false;
	      }

	      if (!uiPalette) {
	        return c.color;
	      }

	      if (typeof uiPalette.colors[c.index] === 'undefined') {
	        return c.color;
	      }

	      return uiPalette.colors[c.index];
	    }
	  };
	}

	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	    _typeof = function (obj) {
	      return typeof obj;
	    };
	  } else {
	    _typeof = function (obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    };
	  }

	  return _typeof(obj);
	}

	function _slicedToArray(arr, i) {
	  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
	}

	function _toConsumableArray(arr) {
	  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
	}

	function _arrayWithoutHoles(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

	    return arr2;
	  }
	}

	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}

	function _iterableToArray(iter) {
	  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
	}

	function _iterableToArrayLimit(arr, i) {
	  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
	    return;
	  }

	  var _arr = [];
	  var _n = true;
	  var _d = false;
	  var _e = undefined;

	  try {
	    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	      _arr.push(_s.value);

	      if (i && _arr.length === i) break;
	    }
	  } catch (err) {
	    _d = true;
	    _e = err;
	  } finally {
	    try {
	      if (!_n && _i["return"] != null) _i["return"]();
	    } finally {
	      if (_d) throw _e;
	    }
	  }

	  return _arr;
	}

	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance");
	}

	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance");
	}

	/**
	 * Creates the follwing array of paths
	 * object.barChart - legend.title - fontSize
	 * object - legend.title - fontSize
	 * legend.title - fontSize
	 * object.barChart - legend - fontSize
	 * object - legend - fontSize
	 * legend - fontSize
	 * object.barChart - fontSize
	 * object - fontSize
	 * fontSize
	 * @ignore
	 */

	function constructPaths(pathSteps, baseSteps) {
	  var ret = [];
	  var localBaseSteps;
	  var baseLength;

	  if (pathSteps) {
	    var pathLength = pathSteps.length;

	    while (pathLength >= 0) {
	      localBaseSteps = baseSteps.slice();
	      baseLength = localBaseSteps.length;

	      while (baseLength >= 0) {
	        ret.push(localBaseSteps.concat(pathSteps));
	        localBaseSteps.pop();
	        baseLength--;
	      }

	      pathSteps.pop();
	      pathLength--;
	    }
	  } else {
	    localBaseSteps = baseSteps.slice();
	    baseLength = localBaseSteps.length;

	    while (baseLength >= 0) {
	      ret.push(localBaseSteps.concat());
	      localBaseSteps.pop();
	      baseLength--;
	    }
	  }

	  return ret;
	}

	function getObject(root, steps) {
	  var obj = root;

	  for (var i = 0; i < steps.length; i++) {
	    if (obj[steps[i]]) {
	      obj = obj[steps[i]];
	    } else {
	      return null;
	    }
	  }

	  return obj;
	}

	function searchPathArray(pathArray, attribute, theme) {
	  for (var i = 0; i < pathArray.length; i++) {
	    var target = getObject(theme, pathArray[i]);

	    if (target !== null && target[attribute]) {
	      return target[attribute];
	    }
	  }

	  return undefined;
	}

	function searchValue(path, attribute, baseSteps, component) {
	  var pathArray;

	  if (path === '') {
	    pathArray = constructPaths(null, baseSteps);
	  } else {
	    var steps = path.split('.');
	    pathArray = constructPaths(steps, baseSteps);
	  }

	  return searchPathArray(pathArray, attribute, component);
	}

	function styleResolver(basePath, themeJSON) {
	  var basePathSteps = basePath.split('.');
	  var api = {
	    /**
	     *
	     * Get the value of a style attribute, starting in the given base path + path
	     * Ex: Base path: "object.barChart", Path: "legend.title", Attribute: "fontSize"
	     * Will search in, and fall back to:
	     * object.barChart - legend.title - fontSize
	     * object - legend.title - fontSize
	     * legend.title - fontSize
	     * object.barChart - legend - fontSize
	     * object - legend - fontSize
	     * legend - fontSize
	     * object.barChart - fontSize
	     * object - fontSize
	     * fontSize
	     * @ignore
	     *
	     * @param {string} component string of properties seperated by dots to search in
	     * @param {string} attribute to return
	     * @returns {any} value of the resolved path, undefined if not found
	     */
	    getStyle: function getStyle(component, attribute) {
	      // TODO - object overrides
	      // TODO - feature flag on font-family?
	      // TODO - caching
	      var baseSteps = basePathSteps.concat();
	      var result = searchValue(component, attribute, baseSteps, themeJSON); // TODO - support functions

	      return result;
	    }
	  };
	  return api;
	}
	/**
	 * Iterate the object tree and resolve variables and functions.
	 * @ignore
	 * @param {Object} - objTree
	 * @param {Object} - variables
	 */

	function resolveVariables(objTree, variables) {
	  Object.keys(objTree).forEach(function (key) {
	    if (_typeof(objTree[key]) === 'object' && objTree[key] !== null) {
	      resolveVariables(objTree[key], variables);
	    } else if (typeof objTree[key] === 'string' && objTree[key].charAt(0) === '@') {
	      // Resolve variables
	      objTree[key] = variables[objTree[key]]; // eslint-disable-line no-param-reassign
	    }
	  });
	}

	styleResolver.resolveRawTheme = function (raw) {
	  // TODO - validate format
	  // TODO - generate class-pyramid
	  var c = extend(true, {}, raw);
	  resolveVariables(c, c._variables); // eslint-disable-line

	  return c;
	};

	function luminance(colStr) {
	  var c = d3Color.color(colStr).rgb();
	  var r = c.r,
	      g = c.g,
	      b = c.b; // https://www.w3.org/TR/WCAG20/#relativeluminancedef

	  var _map = [r, g, b].map(function (v) {
	    return v / 255;
	  }),
	      _map2 = _slicedToArray(_map, 3),
	      sR = _map2[0],
	      sG = _map2[1],
	      sB = _map2[2];

	  var _map3 = [sR, sG, sB].map(function (v) {
	    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
	  }),
	      _map4 = _slicedToArray(_map3, 3),
	      R = _map4[0],
	      G = _map4[1],
	      B = _map4[2];

	  return +(0.2126 * R + 0.7152 * G + 0.0722 * B).toFixed(5);
	}

	// https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html#contrast-ratiodef
	function contrast(L1, L2) {
	  return +((Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05)).toFixed(5);
	}

	var MAX_SIZE = 1000;
	function colorFn() {
	  var colors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['#333333', '#ffffff'];
	  var cache = {};
	  var n = 0;
	  var luminances = colors.map(luminance);
	  return {
	    getBestContrastColor: function getBestContrastColor(colorString) {
	      if (!cache[colorString]) {
	        if (n > MAX_SIZE) {
	          cache = {};
	          n = 0;
	        }

	        var L = luminance(colorString);
	        var contrasts = luminances.map(function (lum) {
	          return contrast(L, lum);
	        });
	        var c = colors[contrasts.indexOf(Math.max.apply(Math, _toConsumableArray(contrasts)))];
	        cache[colorString] = c;
	        n++;
	      }

	      return cache[colorString];
	    }
	  };
	}

	function theme$1() {
	  var resolvedThemeJSON;
	  var styleResolverInstanceCache = {};
	  var paletteResolver;
	  var contraster;
	  /**
	   * @interface
	   * @alias Theme
	   */

	  var externalAPI =
	  /** @lends Theme */
	  {
	    /**
	     * @returns {scalePalette[]}
	     */
	    getDataColorScales: function getDataColorScales() {
	      return paletteResolver.dataScales();
	    },

	    /**
	     * @returns {dataPalette[]}
	     */
	    getDataColorPalettes: function getDataColorPalettes() {
	      return paletteResolver.dataPalettes();
	    },

	    /**
	     * @returns {colorPickerPalette[]}
	     */
	    getDataColorPickerPalettes: function getDataColorPickerPalettes() {
	      return paletteResolver.uiPalettes();
	    },

	    /**
	     * @returns {dataColorSpecials}
	     */
	    getDataColorSpecials: function getDataColorSpecials() {
	      return paletteResolver.dataColors();
	    },

	    /**
	     * Resolve a color object using the color picker palette from the provided JSON theme
	     * @param {object} c
	     * @param {number=} c.index
	     * @param {string=} c.color
	     * @returns {string}
	     *
	     * @example
	     * theme.getColorPickerColor({ index: 1 });
	     * theme.getColorPickerColor({ color: 'red' });
	     */
	    getColorPickerColor: function getColorPickerColor() {
	      var _paletteResolver;

	      return (_paletteResolver = paletteResolver).uiColor.apply(_paletteResolver, arguments);
	    },

	    /**
	     * Get the best contrasting color against the specified `color`.
	     * This is typically used to find a suitable text color for a label placed on an arbitrarily colored background.
	     *
	     * The returned colors are derived from the theme.
	     * @param {string} color
	     * @returns {string}
	     * @example
	     * theme.getContrastingColorTo('#400');
	     */
	    getContrastingColorTo: function getContrastingColorTo(color) {
	      return contraster.getBestContrastColor(color);
	    },

	    /**
	     * Get the value of a style attribute in the theme by searching in the theme's json structure.
	     * The search starts at the specified base path and continue upwards until the value is found.
	     * If possible it will get the attribute's value using the given path.
	     *
	     * @param {string} basePath - Base path in the theme's json structure to start the search in (specified as a name path separated by dots)
	     * @param {string} path - Expected path for the attribute (specified as a name path separated by dots)
	     * @param {string} attribute - Name of the style attribute
	     * @returns {string} The style value
	     *
	     * @example
	     * theme.getStyle('object', 'title.main', 'fontSize'));
	     * theme.getStyle('', '', 'fontSize'));
	     */
	    getStyle: function getStyle(basePath, path, attribute) {
	      if (!styleResolverInstanceCache[basePath]) {
	        styleResolverInstanceCache[basePath] = styleResolver(basePath, resolvedThemeJSON);
	      }

	      return styleResolverInstanceCache[basePath].getStyle(path, attribute, false);
	    }
	  };
	  var internalAPI = {
	    /**
	     * @private
	     * @param {object} t Raw JSON theme
	     */
	    setTheme: function setTheme$1(t, name) {
	      resolvedThemeJSON = setTheme(t, styleResolver.resolveRawTheme);
	      styleResolverInstanceCache = {};
	      paletteResolver = theme(resolvedThemeJSON); // try to determine if the theme color is light or dark

	      var textColor = externalAPI.getStyle('', '', 'color');
	      var textColorLuminance = luminance(textColor); // if it appears dark, create an inverse that is light and vice versa

	      var inverseTextColor = textColorLuminance < 0.2 ? '#ffffff' : '#333333'; // instantiate a contraster that uses those two colors when determining the best contrast for an arbitrary color

	      contraster = colorFn([textColor, inverseTextColor]);
	      externalAPI.emit('changed');

	      externalAPI.name = function () {
	        return name;
	      };
	    }
	  };
	  Object.keys(EventEmitter.prototype).forEach(function (key) {
	    externalAPI[key] = EventEmitter.prototype[key];
	  });
	  EventEmitter.init(externalAPI);
	  internalAPI.setTheme({}, 'light');
	  return {
	    externalAPI: externalAPI,
	    internalAPI: internalAPI
	  };
	}

	return theme$1;

})));
