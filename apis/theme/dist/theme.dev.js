/*
* @nebula.js/theme v0.1.0-alpha.29
* Copyright (c) 2020 QlikTech International AB
* Released under the MIT license.
*/

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.theme = factory());
}(this, (function () { 'use strict';

  /**
   * Utility functions
   */

  var util = {};

  util.isObject = function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
  };

  util.isNumber = function isNumber(arg) {
    return typeof arg === 'number';
  };

  util.isUndefined = function isUndefined(arg) {
    return arg === void 0;
  };

  util.isFunction = function isFunction(arg){
    return typeof arg === 'function';
  };


  /**
   * EventEmitter class
   */

  function EventEmitter() {
    EventEmitter.init.call(this);
  }
  var nodeEventEmitter = EventEmitter;

  // Backwards-compat with node 0.10.x
  EventEmitter.EventEmitter = EventEmitter;

  EventEmitter.prototype._events = undefined;
  EventEmitter.prototype._maxListeners = undefined;

  // By default EventEmitters will print a warning if more than 10 listeners are
  // added to it. This is a useful default which helps finding memory leaks.
  EventEmitter.defaultMaxListeners = 10;

  EventEmitter.init = function() {
    this._events = this._events || {};
    this._maxListeners = this._maxListeners || undefined;
  };

  // Obviously not all Emitters should be limited to 10. This function allows
  // that to be increased. Set to zero for unlimited.
  EventEmitter.prototype.setMaxListeners = function(n) {
    if (!util.isNumber(n) || n < 0 || isNaN(n))
      throw TypeError('n must be a positive number');
    this._maxListeners = n;
    return this;
  };

  EventEmitter.prototype.emit = function(type) {
    var er, handler, len, args, i, listeners;

    if (!this._events)
      this._events = {};

    // If there is no 'error' event listener then throw.
    if (type === 'error' && !this._events.error) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        throw Error('Uncaught, unspecified "error" event.');
      }
    }

    handler = this._events[type];

    if (util.isUndefined(handler))
      return false;

    if (util.isFunction(handler)) {
      switch (arguments.length) {
        // fast cases
        case 1:
          handler.call(this);
          break;
        case 2:
          handler.call(this, arguments[1]);
          break;
        case 3:
          handler.call(this, arguments[1], arguments[2]);
          break;
        // slower
        default:
          len = arguments.length;
          args = new Array(len - 1);
          for (i = 1; i < len; i++)
            args[i - 1] = arguments[i];
          handler.apply(this, args);
      }
    } else if (util.isObject(handler)) {
      len = arguments.length;
      args = new Array(len - 1);
      for (i = 1; i < len; i++)
        args[i - 1] = arguments[i];

      listeners = handler.slice();
      len = listeners.length;
      for (i = 0; i < len; i++)
        listeners[i].apply(this, args);
    }

    return true;
  };

  EventEmitter.prototype.addListener = function(type, listener) {
    var m;

    if (!util.isFunction(listener))
      throw TypeError('listener must be a function');

    if (!this._events)
      this._events = {};

    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (this._events.newListener)
      this.emit('newListener', type,
                util.isFunction(listener.listener) ?
                listener.listener : listener);

    if (!this._events[type])
      // Optimize the case of one listener. Don't need the extra array object.
      this._events[type] = listener;
    else if (util.isObject(this._events[type]))
      // If we've already got an array, just append.
      this._events[type].push(listener);
    else
      // Adding the second element, need to change to array.
      this._events[type] = [this._events[type], listener];

    // Check for listener leak
    if (util.isObject(this._events[type]) && !this._events[type].warned) {
      var m;
      if (!util.isUndefined(this._maxListeners)) {
        m = this._maxListeners;
      } else {
        m = EventEmitter.defaultMaxListeners;
      }

      if (m && m > 0 && this._events[type].length > m) {
        this._events[type].warned = true;

        if (util.isFunction(console.error)) {
          console.error('(node) warning: possible EventEmitter memory ' +
                        'leak detected. %d listeners added. ' +
                        'Use emitter.setMaxListeners() to increase limit.',
                        this._events[type].length);
        }
        if (util.isFunction(console.trace))
          console.trace();
      }
    }

    return this;
  };

  EventEmitter.prototype.on = EventEmitter.prototype.addListener;

  EventEmitter.prototype.once = function(type, listener) {
    if (!util.isFunction(listener))
      throw TypeError('listener must be a function');

    var fired = false;

    function g() {
      this.removeListener(type, g);

      if (!fired) {
        fired = true;
        listener.apply(this, arguments);
      }
    }

    g.listener = listener;
    this.on(type, g);

    return this;
  };

  // emits a 'removeListener' event iff the listener was removed
  EventEmitter.prototype.removeListener = function(type, listener) {
    var list, position, length, i;

    if (!util.isFunction(listener))
      throw TypeError('listener must be a function');

    if (!this._events || !this._events[type])
      return this;

    list = this._events[type];
    length = list.length;
    position = -1;

    if (list === listener ||
        (util.isFunction(list.listener) && list.listener === listener)) {
      delete this._events[type];
      if (this._events.removeListener)
        this.emit('removeListener', type, listener);

    } else if (util.isObject(list)) {
      for (i = length; i-- > 0;) {
        if (list[i] === listener ||
            (list[i].listener && list[i].listener === listener)) {
          position = i;
          break;
        }
      }

      if (position < 0)
        return this;

      if (list.length === 1) {
        list.length = 0;
        delete this._events[type];
      } else {
        list.splice(position, 1);
      }

      if (this._events.removeListener)
        this.emit('removeListener', type, listener);
    }

    return this;
  };

  EventEmitter.prototype.removeAllListeners = function(type) {
    var key, listeners;

    if (!this._events)
      return this;

    // not listening for removeListener, no need to emit
    if (!this._events.removeListener) {
      if (arguments.length === 0)
        this._events = {};
      else if (this._events[type])
        delete this._events[type];
      return this;
    }

    // emit removeListener for all listeners on all events
    if (arguments.length === 0) {
      for (key in this._events) {
        if (key === 'removeListener') continue;
        this.removeAllListeners(key);
      }
      this.removeAllListeners('removeListener');
      this._events = {};
      return this;
    }

    listeners = this._events[type];

    if (util.isFunction(listeners)) {
      this.removeListener(type, listeners);
    } else if (Array.isArray(listeners)) {
      // LIFO order
      while (listeners.length)
        this.removeListener(type, listeners[listeners.length - 1]);
    }
    delete this._events[type];

    return this;
  };

  EventEmitter.prototype.listeners = function(type) {
    var ret;
    if (!this._events || !this._events[type])
      ret = [];
    else if (util.isFunction(this._events[type]))
      ret = [this._events[type]];
    else
      ret = this._events[type].slice();
    return ret;
  };

  EventEmitter.listenerCount = function(emitter, type) {
    var ret;
    if (!emitter._events || !emitter._events[type])
      ret = 0;
    else if (util.isFunction(emitter._events[type]))
      ret = 1;
    else
      ret = emitter._events[type].length;
    return ret;
  };

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

  function define(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
  }

  function extend$1(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for (var key in definition) prototype[key] = definition[key];
    return prototype;
  }

  function Color() {}

  var darker = 0.7;
  var brighter = 1 / darker;

  var reI = "\\s*([+-]?\\d+)\\s*",
      reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      reHex = /^#([0-9a-f]{3,8})$/,
      reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
      reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
      reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
      reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
      reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
      reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

  var named = {
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 0x006400,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    grey: 0x808080,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32
  };

  define(Color, color$2, {
    copy: function(channels) {
      return Object.assign(new this.constructor, this, channels);
    },
    displayable: function() {
      return this.rgb().displayable();
    },
    hex: color_formatHex, // Deprecated! Use color.formatHex.
    formatHex: color_formatHex,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb
  });

  function color_formatHex() {
    return this.rgb().formatHex();
  }

  function color_formatHsl() {
    return hslConvert(this).formatHsl();
  }

  function color_formatRgb() {
    return this.rgb().formatRgb();
  }

  function color$2(format) {
    var m, l;
    format = (format + "").trim().toLowerCase();
    return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
        : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
        : l === 8 ? new Rgb(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
        : l === 4 ? new Rgb((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
        : null) // invalid hex
        : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
        : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
        : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
        : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
        : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
        : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
        : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
        : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
        : null;
  }

  function rgbn(n) {
    return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
  }

  function rgba(r, g, b, a) {
    if (a <= 0) r = g = b = NaN;
    return new Rgb(r, g, b, a);
  }

  function rgbConvert(o) {
    if (!(o instanceof Color)) o = color$2(o);
    if (!o) return new Rgb;
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
  }

  function rgb(r, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
  }

  function Rgb(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
  }

  define(Rgb, rgb, extend$1(Color, {
    brighter: function(k) {
      k = k == null ? brighter : Math.pow(brighter, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker: function(k) {
      k = k == null ? darker : Math.pow(darker, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb: function() {
      return this;
    },
    displayable: function() {
      return (-0.5 <= this.r && this.r < 255.5)
          && (-0.5 <= this.g && this.g < 255.5)
          && (-0.5 <= this.b && this.b < 255.5)
          && (0 <= this.opacity && this.opacity <= 1);
    },
    hex: rgb_formatHex, // Deprecated! Use color.formatHex.
    formatHex: rgb_formatHex,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
  }));

  function rgb_formatHex() {
    return "#" + hex(this.r) + hex(this.g) + hex(this.b);
  }

  function rgb_formatRgb() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(")
        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.b) || 0))
        + (a === 1 ? ")" : ", " + a + ")");
  }

  function hex(value) {
    value = Math.max(0, Math.min(255, Math.round(value) || 0));
    return (value < 16 ? "0" : "") + value.toString(16);
  }

  function hsla(h, s, l, a) {
    if (a <= 0) h = s = l = NaN;
    else if (l <= 0 || l >= 1) h = s = NaN;
    else if (s <= 0) h = NaN;
    return new Hsl(h, s, l, a);
  }

  function hslConvert(o) {
    if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color)) o = color$2(o);
    if (!o) return new Hsl;
    if (o instanceof Hsl) return o;
    o = o.rgb();
    var r = o.r / 255,
        g = o.g / 255,
        b = o.b / 255,
        min = Math.min(r, g, b),
        max = Math.max(r, g, b),
        h = NaN,
        s = max - min,
        l = (max + min) / 2;
    if (s) {
      if (r === max) h = (g - b) / s + (g < b) * 6;
      else if (g === max) h = (b - r) / s + 2;
      else h = (r - g) / s + 4;
      s /= l < 0.5 ? max + min : 2 - max - min;
      h *= 60;
    } else {
      s = l > 0 && l < 1 ? 0 : h;
    }
    return new Hsl(h, s, l, o.opacity);
  }

  function hsl(h, s, l, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
  }

  function Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
  }

  define(Hsl, hsl, extend$1(Color, {
    brighter: function(k) {
      k = k == null ? brighter : Math.pow(brighter, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function(k) {
      k = k == null ? darker : Math.pow(darker, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function() {
      var h = this.h % 360 + (this.h < 0) * 360,
          s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
          l = this.l,
          m2 = l + (l < 0.5 ? l : 1 - l) * s,
          m1 = 2 * l - m2;
      return new Rgb(
        hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
        hsl2rgb(h, m1, m2),
        hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
        this.opacity
      );
    },
    displayable: function() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s))
          && (0 <= this.l && this.l <= 1)
          && (0 <= this.opacity && this.opacity <= 1);
    },
    formatHsl: function() {
      var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
      return (a === 1 ? "hsl(" : "hsla(")
          + (this.h || 0) + ", "
          + (this.s || 0) * 100 + "%, "
          + (this.l || 0) * 100 + "%"
          + (a === 1 ? ")" : ", " + a + ")");
    }
  }));

  /* From FvD 13.37, CSS Color Module Level 3 */
  function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60
        : h < 180 ? m2
        : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
        : m1) * 255;
  }

  function luminance(colStr) {
    var c = color$2(colStr).rgb();
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
    Object.keys(nodeEventEmitter.prototype).forEach(function (key) {
      externalAPI[key] = nodeEventEmitter.prototype[key];
    });
    nodeEventEmitter.init(externalAPI);
    internalAPI.setTheme({}, 'light');
    return {
      externalAPI: externalAPI,
      internalAPI: internalAPI
    };
  }

  return theme$1;

})));
