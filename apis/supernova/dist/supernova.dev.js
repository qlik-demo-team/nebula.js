/*
* @nebula.js/supernova v0.1.0-alpha.29
* Copyright (c) 2020 QlikTech International AB
* Released under the MIT license.
*/

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('node-event-emitter')) :
	typeof define === 'function' && define.amd ? define(['exports', 'node-event-emitter'], factory) :
	(global = global || self, factory(global.supernova = {}, global.EventEmitter));
}(this, (function (exports, EventEmitter) { 'use strict';

	EventEmitter = EventEmitter && EventEmitter.hasOwnProperty('default') ? EventEmitter['default'] : EventEmitter;

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var runtime_1 = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var runtime = (function (exports) {

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined$1; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  exports.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };

	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  exports.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  exports.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  exports.awrap = function(arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration.
	          result.value = unwrapped;
	          resolve(result);
	        }, function(error) {
	          // If a rejected Promise was yielded, throw the rejection back
	          // into the async generator function so it can be handled there.
	          return invoke("throw", error, resolve, reject);
	        });
	      }
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  exports.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  exports.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );

	    return exports.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;

	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);

	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined$1) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;

	      if (context.method === "throw") {
	        // Note: ["return"] must be used for ES3 parsing compatibility.
	        if (delegate.iterator["return"]) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined$1;
	          maybeInvokeDelegate(delegate, context);

	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }

	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    var info = record.arg;

	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined$1;
	      }

	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[toStringTagSymbol] = "Generator";

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  exports.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined$1;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  exports.values = values;

	  function doneResult() {
	    return { value: undefined$1, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined$1;
	      this.done = false;
	      this.delegate = null;

	      this.method = "next";
	      this.arg = undefined$1;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined$1;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined$1;
	        }

	        return !! caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined$1;
	      }

	      return ContinueSentinel;
	    }
	  };

	  // Regardless of whether this script is executing as a CommonJS module
	  // or not, return the runtime object so that we can declare the variable
	  // regeneratorRuntime in the outer scope, which allows this module to be
	  // injected easily by `bin/regenerator --include-runtime script.js`.
	  return exports;

	}(
	  // If this script is executing as a CommonJS module, use module.exports
	  // as the regeneratorRuntime namespace. Otherwise create a new empty
	  // object. Either way, the resulting object will be used to initialize
	  // the regeneratorRuntime variable at the top of this file.
	   module.exports 
	));

	try {
	  regeneratorRuntime = runtime;
	} catch (accidentalStrictMode) {
	  // This module should not be running in strict mode, so the above
	  // assignment should always work unless something is misconfigured. Just
	  // in case runtime.js accidentally runs in strict mode, we can escape
	  // strict mode using a global Function call. This could conceivably fail
	  // if a Content Security Policy forbids using Function, but in that case
	  // the proper solution is to fix the accidental strict mode problem. If
	  // you've misconfigured your bundler to force strict mode and applied a
	  // CSP to forbid Function, and you're not willing to fix either of those
	  // problems, please detail your unique predicament in a GitHub issue.
	  Function("r", "regeneratorRuntime = r")(runtime);
	}
	});

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

	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
	  try {
	    var info = gen[key](arg);
	    var value = info.value;
	  } catch (error) {
	    reject(error);
	    return;
	  }

	  if (info.done) {
	    resolve(value);
	  } else {
	    Promise.resolve(value).then(_next, _throw);
	  }
	}

	function _asyncToGenerator(fn) {
	  return function () {
	    var self = this,
	        args = arguments;
	    return new Promise(function (resolve, reject) {
	      var gen = fn.apply(self, args);

	      function _next(value) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
	      }

	      function _throw(err) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
	      }

	      _next(undefined);
	    });
	  };
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	function ownKeys(object, enumerableOnly) {
	  var keys = Object.keys(object);

	  if (Object.getOwnPropertySymbols) {
	    var symbols = Object.getOwnPropertySymbols(object);
	    if (enumerableOnly) symbols = symbols.filter(function (sym) {
	      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
	    });
	    keys.push.apply(keys, symbols);
	  }

	  return keys;
	}

	function _objectSpread2(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i] != null ? arguments[i] : {};

	    if (i % 2) {
	      ownKeys(Object(source), true).forEach(function (key) {
	        _defineProperty(target, key, source[key]);
	      });
	    } else if (Object.getOwnPropertyDescriptors) {
	      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
	    } else {
	      ownKeys(Object(source)).forEach(function (key) {
	        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
	      });
	    }
	  }

	  return target;
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

	var extend$1 = extend.bind(null, true);
	var JSONPatch = {};
	var isArray$1 = Array.isArray;

	function isObject(v) {
	  return v != null && !Array.isArray(v) && _typeof(v) === 'object';
	}

	function isUndef(v) {
	  return typeof v === 'undefined';
	}

	function isFunction(v) {
	  return typeof v === 'function';
	}
	/**
	 * Generate an exact duplicate (with no references) of a specific value.
	 *
	 * @private
	 * @param {Object} The value to duplicate
	 * @returns {Object} a unique, duplicated value
	 */


	function generateValue(val) {
	  if (val) {
	    return extend$1({}, {
	      val: val
	    }).val;
	  }

	  return val;
	}
	/**
	 * An additional type checker used to determine if the property is of internal
	 * use or not a type that can be translated into JSON (like functions).
	 *
	 * @private
	 * @param {Object} obj The object which has the property to check
	 * @param {String} The property name to check
	 * @returns {Boolean} Whether the property is deemed special or not
	 */


	function isSpecialProperty(obj, key) {
	  return isFunction(obj[key]) || key.substring(0, 2) === '$$' || key.substring(0, 1) === '_';
	}
	/**
	 * Finds the parent object from a JSON-Pointer ("/foo/bar/baz" = "bar" is "baz" parent),
	 * also creates the object structure needed.
	 *
	 * @private
	 * @param {Object} data The root object to traverse through
	 * @param {String} The JSON-Pointer string to use when traversing
	 * @returns {Object} The parent object
	 */


	function getParent(data, str) {
	  var seperator = '/';
	  var parts = str.substring(1).split(seperator).slice(0, -1);
	  var numPart;
	  parts.forEach(function (part, i) {
	    if (i === parts.length) {
	      return;
	    }

	    numPart = +part;
	    var newPart = !isNaN(numPart) ? [] : {};
	    data[numPart || part] = isUndef(data[numPart || part]) ? newPart : data[part];
	    data = data[numPart || part];
	  });
	  return data;
	}
	/**
	 * Cleans an object of all its properties, unless they're deemed special or
	 * cannot be removed by configuration.
	 *
	 * @private
	 * @param {Object} obj The object to clean
	 */


	function emptyObject(obj) {
	  Object.keys(obj).forEach(function (key) {
	    var config = Object.getOwnPropertyDescriptor(obj, key);

	    if (config.configurable && !isSpecialProperty(obj, key)) {
	      delete obj[key];
	    }
	  });
	}
	/**
	 * Compare an object with another, could be object, array, number, string, bool.
	 * @private
	 *
	 * @param {Object} a The first object to compare
	 * @param {Object} a The second object to compare
	 * @returns {Boolean} Whether the objects are identical
	 */


	function compare(a, b) {
	  var isIdentical = true;

	  if (isObject(a) && isObject(b)) {
	    if (Object.keys(a).length !== Object.keys(b).length) {
	      return false;
	    }

	    Object.keys(a).forEach(function (key) {
	      if (!compare(a[key], b[key])) {
	        isIdentical = false;
	      }
	    });
	    return isIdentical;
	  }

	  if (isArray$1(a) && isArray$1(b)) {
	    if (a.length !== b.length) {
	      return false;
	    }

	    for (var i = 0, l = a.length; i < l; i += 1) {
	      if (!compare(a[i], b[i])) {
	        return false;
	      }
	    }

	    return true;
	  }

	  return a === b;
	}
	/**
	 * Generates patches by comparing two arrays.
	 *
	 * @private
	 * @param {Array} oldA The old (original) array, which will be patched
	 * @param {Array} newA The new array, which will be used to compare against
	 * @returns {Array} An array of patches (if any)
	 */


	function patchArray(original, newA, basePath) {
	  var patches = [];
	  var oldA = original.slice();
	  var tmpIdx = -1;

	  function findIndex(a, id, idx) {
	    if (a[idx] && isUndef(a[idx].qInfo)) {
	      return null;
	    }

	    if (a[idx] && a[idx].qInfo.qId === id) {
	      // shortcut if identical
	      return idx;
	    }

	    for (var ii = 0, ll = a.length; ii < ll; ii += 1) {
	      if (a[ii] && a[ii].qInfo.qId === id) {
	        return ii;
	      }
	    }

	    return -1;
	  }

	  if (compare(newA, oldA)) {
	    // array is unchanged
	    return patches;
	  }

	  if (!isUndef(newA[0]) && isUndef(newA[0].qInfo)) {
	    // we cannot create patches without unique identifiers, replace array...
	    patches.push({
	      op: 'replace',
	      path: basePath,
	      value: newA
	    });
	    return patches;
	  }

	  for (var i = oldA.length - 1; i >= 0; i -= 1) {
	    tmpIdx = findIndex(newA, oldA[i].qInfo && oldA[i].qInfo.qId, i);

	    if (tmpIdx === -1) {
	      patches.push({
	        op: 'remove',
	        path: "".concat(basePath, "/").concat(i)
	      });
	      oldA.splice(i, 1);
	    } else {
	      patches = patches.concat(JSONPatch.generate(oldA[i], newA[tmpIdx], "".concat(basePath, "/").concat(i)));
	    }
	  }

	  for (var _i = 0, l = newA.length; _i < l; _i += 1) {
	    tmpIdx = findIndex(oldA, newA[_i].qInfo && newA[_i].qInfo.qId);

	    if (tmpIdx === -1) {
	      patches.push({
	        op: 'add',
	        path: "".concat(basePath, "/").concat(_i),
	        value: newA[_i]
	      });
	      oldA.splice(_i, 0, newA[_i]);
	    } else if (tmpIdx !== _i) {
	      patches.push({
	        op: 'move',
	        path: "".concat(basePath, "/").concat(_i),
	        from: "".concat(basePath, "/").concat(tmpIdx)
	      });
	      oldA.splice(_i, 0, oldA.splice(tmpIdx, 1)[0]);
	    }
	  }

	  return patches;
	}
	/**
	 * Generate an array of JSON-Patch:es following the JSON-Patch Specification Draft.
	 *
	 * See [specification draft](http://tools.ietf.org/html/draft-ietf-appsawg-json-patch-10)
	 *
	 * Does NOT currently generate patches for arrays (will replace them)
	 * @private
	 *
	 * @param {Object} original The object to patch to
	 * @param {Object} newData The object to patch from
	 * @param {String} [basePath] The base path to use when generating the paths for
	 *                            the patches (normally not used)
	 * @returns {Array} An array of patches
	 */


	JSONPatch.generate = function generate(original, newData, basePath) {
	  basePath = basePath || '';
	  var patches = [];
	  Object.keys(newData).forEach(function (key) {
	    var val = generateValue(newData[key]);
	    var oldVal = original[key];
	    var tmpPath = "".concat(basePath, "/").concat(key);

	    if (compare(val, oldVal) || isSpecialProperty(newData, key)) {
	      return;
	    }

	    if (isUndef(oldVal)) {
	      // property does not previously exist
	      patches.push({
	        op: 'add',
	        path: tmpPath,
	        value: val
	      });
	    } else if (isObject(val) && isObject(oldVal)) {
	      // we need to generate sub-patches for this, since it already exist
	      patches = patches.concat(JSONPatch.generate(oldVal, val, tmpPath));
	    } else if (isArray$1(val) && isArray$1(oldVal)) {
	      patches = patches.concat(patchArray(oldVal, val, tmpPath));
	    } else {
	      // it's a simple property (bool, string, number)
	      patches.push({
	        op: 'replace',
	        path: "".concat(basePath, "/").concat(key),
	        value: val
	      });
	    }
	  });
	  Object.keys(original).forEach(function (key) {
	    if (isUndef(newData[key]) && !isSpecialProperty(original, key)) {
	      // this property does not exist anymore
	      patches.push({
	        op: 'remove',
	        path: "".concat(basePath, "/").concat(key)
	      });
	    }
	  });
	  return patches;
	};
	/**
	 * Apply a list of patches to an object.
	 * @private
	 *
	 * @param {Object} original The object to patch
	 * @param {Array} patches The list of patches to apply
	 */


	JSONPatch.apply = function apply(original, patches) {
	  patches.forEach(function (patch) {
	    var parent = getParent(original, patch.path);
	    var key = patch.path.split('/').splice(-1)[0];
	    var target = key && isNaN(+key) ? parent[key] : parent[+key] || parent;
	    var from = patch.from ? patch.from.split('/').splice(-1)[0] : null;

	    if (patch.path === '/') {
	      parent = null;
	      target = original;
	    }

	    if (patch.op === 'add' || patch.op === 'replace') {
	      if (isArray$1(parent)) {
	        // trust indexes from patches, so don't replace the index if it's an add
	        if (key === '-') {
	          key = parent.length;
	        }

	        parent.splice(+key, patch.op === 'add' ? 0 : 1, patch.value);
	      } else if (isArray$1(target) && isArray$1(patch.value)) {
	        var _target;

	        var newValues = patch.value.slice(); // keep array reference if possible...

	        target.length = 0;

	        (_target = target).push.apply(_target, _toConsumableArray(newValues));
	      } else if (isObject(target) && isObject(patch.value)) {
	        // keep object reference if possible...
	        emptyObject(target);
	        extend$1(target, patch.value);
	      } else if (!parent) {
	        throw new Error('Patchee is not an object we can patch');
	      } else {
	        // simple value
	        parent[key] = patch.value;
	      }
	    } else if (patch.op === 'move') {
	      var oldParent = getParent(original, patch.from);

	      if (isArray$1(parent)) {
	        parent.splice(+key, 0, oldParent.splice(+from, 1)[0]);
	      } else {
	        parent[key] = oldParent[from];
	        delete oldParent[from];
	      }
	    } else if (patch.op === 'remove') {
	      if (isArray$1(parent)) {
	        parent.splice(+key, 1);
	      } else {
	        delete parent[key];
	      }
	    }
	  });
	};
	/**
	 * Deep clone an object.
	 * @private
	 *
	 * @param {Object} obj The object to clone
	 * @returns {Object} A new object identical to the `obj`
	 */


	JSONPatch.clone = function clone(obj) {
	  return extend$1({}, obj);
	};
	/**
	 * Creates a JSON-patch.
	 * @private
	 *
	 * @param {String} op The operation of the patch. Available values: "add", "remove", "move"
	 * @param {Object} [val] The value to set the `path` to. If `op` is `move`, `val`
	 *                       is the "from JSON-path" path
	 * @param {String} path The JSON-path for the property to change (e.g. "/qHyperCubeDef/columnOrder")
	 * @returns {Object} A patch following the JSON-patch specification
	 */


	JSONPatch.createPatch = function createPatch(op, val, path) {
	  var patch = {
	    op: op.toLowerCase(),
	    path: path
	  };

	  if (patch.op === 'move') {
	    patch.from = val;
	  } else if (typeof val !== 'undefined') {
	    patch.value = val;
	  }

	  return patch;
	};
	/**
	 * Apply the differences of two objects (keeping references if possible).
	 * Identical to running `JSONPatch.apply(original, JSONPatch.generate(original, newData));`
	 * @private
	 *
	 * @param {Object} original The object to update/patch
	 * @param {Object} newData the object to diff against
	 *
	 * @example
	 * var obj1 = { foo: [1,2,3], bar: { baz: true, qux: 1 } };
	 * var obj2 = { foo: [4,5,6], bar: { baz: false } };
	 * JSONPatch.updateObject(obj1, obj2);
	 * // => { foo: [4,5,6], bar: { baz: false } };
	 */


	JSONPatch.updateObject = function updateObject(original, newData) {
	  if (!Object.keys(original).length) {
	    extend$1(original, newData);
	    return;
	  }

	  JSONPatch.apply(original, JSONPatch.generate(original, newData));
	};

	var mixin = function mixin(obj) {
	  /* eslint no-param-reassign: 0 */
	  Object.keys(EventEmitter.prototype).forEach(function (key) {
	    obj[key] = EventEmitter.prototype[key];
	  });
	  EventEmitter.init(obj);
	  return obj;
	};

	var actionWrapper = function actionWrapper(component) {
	  return function (item) {
	    var wrapped = mixin(_objectSpread2({}, item, {
	      action: function action() {
	        if (typeof item.action === 'function') {
	          item.action.call(wrapped, component);
	        }

	        wrapped.emit('changed');
	      },
	      enabled: function enabled() {
	        if (typeof item.enabled === 'function') {
	          return item.enabled.call(wrapped, component);
	        }

	        return true;
	      },
	      active: typeof item.active === 'function' ? function active() {
	        return item.active.call(wrapped, component);
	      } : undefined
	    }));
	    return wrapped;
	  };
	};

	function actionhero (_ref) {
	  var sn = _ref.sn,
	      component = _ref.component;
	  var actions = {};
	  var selectionToolbarItems = [];
	  var w = actionWrapper(component);
	  ((sn.definition.selectionToolbar || {}).items || []).forEach(function (item) {
	    var wrapped = w(item); // TODO - check if key exists

	    actions[item.key] = wrapped;
	    selectionToolbarItems.push(wrapped);
	  });
	  (sn.definition.actions || []).forEach(function (item) {
	    var wrapped = w(item); // TODO - check if key exists

	    actions[item.key] = wrapped;
	  });
	  return {
	    actions: actions,
	    selectionToolbarItems: selectionToolbarItems,
	    destroy: function destroy() {
	      selectionToolbarItems.length = 0;
	    }
	  };
	}

	/* eslint no-underscore-dangle: 0 */

	/* eslint no-param-reassign: 0 */

	/* eslint no-console: 0 */

	/* eslint no-use-before-define: 0 */
	// Hooks implementation heavily inspired by prect hooks
	var currentComponent;
	var currentIndex;
	/**
	 * @module supernova
	 * @alias @nebula.js/supernova
	 */

	function depsChanged(prevDeps, deps) {
	  if (!prevDeps) {
	    return true;
	  }

	  if (deps.length !== prevDeps.length) {
	    return true;
	  }

	  for (var i = 0; i < deps.length; i++) {
	    if (prevDeps[i] !== deps[i]) {
	      return true;
	    }
	  }

	  return false;
	}

	function initiate(component) {
	  component.__hooks = {
	    obsolete: false,
	    error: false,
	    chain: {
	      promise: null,
	      resolve: function resolve() {}
	    },
	    list: [],
	    snaps: [],
	    actions: [],
	    pendingEffects: [],
	    pendingLayoutEffects: [],
	    pendingPromises: []
	  };
	}
	function teardown(component) {
	  flushPending(component.__hooks.list, true);
	  component.__hooks.obsolete = true;
	  component.__hooks.list.length = 0;
	  component.__hooks.pendingEffects.length = 0;
	  component.__hooks.pendingLayoutEffects.length = 0;
	  component.__hooks.actions.length = 0;
	  component.__hooks.dispatchActions = null;
	  component.__hooks.imperativeHandle = null;
	  clearTimeout(component.__hooks.micro);
	  cancelAnimationFrame(component.__hooks.macro);
	}
	function run(_x) {
	  return _run.apply(this, arguments);
	}

	function _run() {
	  _run = _asyncToGenerator(
	  /*#__PURE__*/
	  regeneratorRuntime.mark(function _callee(component) {
	    var num, hooks;
	    return regeneratorRuntime.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            if (!component.__hooks.obsolete) {
	              _context.next = 2;
	              break;
	            }

	            return _context.abrupt("return", Promise.resolve());

	          case 2:
	            currentIndex = -1;
	            currentComponent = component;
	            num = -1;

	            if (currentComponent.__hooks.initiated) {
	              num = currentComponent.__hooks.list.length;
	            }

	            try {
	              currentComponent.fn.call(null);
	            } catch (e) {
	              console.error(e);
	            }

	            currentComponent.__hooks.initiated = true;

	            {
	              if (num > -1 && num !== currentComponent.__hooks.list.length) {
	                console.error('Detected a change in the order of hooks called.');
	              }
	            }

	            hooks = currentComponent.__hooks;
	            currentIndex = undefined;
	            currentComponent = undefined;

	            if (!hooks.chain.promise) {
	              hooks.chain.promise = new Promise(function (resolve) {
	                hooks.chain.resolve = resolve;
	              });
	            }

	            flushMicro(hooks);
	            scheduleMacro(hooks);
	            return _context.abrupt("return", hooks.chain.promise);

	          case 16:
	          case "end":
	            return _context.stop();
	        }
	      }
	    }, _callee);
	  }));
	  return _run.apply(this, arguments);
	}

	function flushPending(list, skipUpdate) {
	  try {
	    list.forEach(function (fx) {
	      // teardown existing
	      typeof fx.teardown === 'function' ? fx.teardown() : null; // update

	      if (!skipUpdate) {
	        fx.teardown = fx.value[0]();
	      }
	    });
	  } catch (e) {
	    console.error(e);
	  }

	  list.length = 0;
	}

	function flushMicro(hooks) {
	  flushPending(hooks.pendingLayoutEffects);
	}

	function flushMacro(hooks) {
	  flushPending(hooks.pendingEffects);
	  hooks.macro = null;
	  maybeEndChain(hooks); // eslint-disable-line no-use-before-define
	}

	function maybeEndChain(hooks) {
	  if (hooks.pendingPromises.length || hooks.micro || hooks.macro) {
	    return;
	  }

	  hooks.chain.promise = null;
	  hooks.chain.resolve();
	}

	function runSnaps(component, layout) {
	  try {
	    return Promise.all(component.__hooks.snaps.map(function (h) {
	      return Promise.resolve(h.fn(layout));
	    })).then(function (snaps) {
	      return snaps[snaps.length - 1];
	    });
	  } catch (e) {
	    console.error(e);
	  }

	  return Promise.resolve();
	}
	function getImperativeHandle(component) {
	  return component.__hooks.imperativeHandle;
	}

	function dispatchActions(component) {
	  component._dispatchActions && component._dispatchActions(component.__hooks.actions.slice());
	}

	function observeActions(component, callback) {
	  component._dispatchActions = callback;

	  if (component.__hooks) {
	    dispatchActions(component);
	  }
	}

	function getHook(idx) {
	  if (typeof currentComponent === 'undefined') {
	    throw new Error('Invalid nebula hook call. Hooks can only be called inside a supernova component.');
	  }

	  var hooks = currentComponent.__hooks;

	  if (idx >= hooks.list.length) {
	    hooks.list.push({});
	  }

	  return hooks.list[idx];
	}

	function scheduleMicro(component) {
	  if (component.__hooks.micro) {
	    return;
	  }

	  component.__hooks.micro = setTimeout(function () {
	    component.__hooks.micro = null;
	    run(component);
	  }, 0);
	}

	function scheduleMacro(hooks) {
	  if (hooks.macro) {
	    return;
	  }

	  hooks.macro = requestAnimationFrame(function () {
	    flushMacro(hooks);
	  });
	}

	function useInternalContext(name) {
	  getHook(++currentIndex);
	  var ctx = currentComponent.context;
	  return ctx[name];
	} // function useInternalEnv(name) {
	//   getHook(++currentIndex);
	//   const { env } = currentComponent;
	//   return env[name];
	// }
	// ========  EXTERNAL =========


	function hook(cb) {
	  return {
	    __hooked: true,
	    fn: cb,
	    initiate: initiate,
	    run: run,
	    teardown: teardown,
	    runSnaps: runSnaps,
	    observeActions: observeActions,
	    getImperativeHandle: getImperativeHandle
	  };
	}
	/**
	 * @interface SetStateCallback
	 * @param {any} previousState
	 * @returns {any}
	 */

	/**
	 * @interface SetState
	 * @param {any|module:supernova~SetStateCallback} state
	 */

	/**
	 * @interface Factory
	 * @returns {any}
	 */

	/**
	 * @param {any|module:supernova~Factory} initial
	 * @returns {Array<any,module:supernova~SetState>}
	 */

	function useState(initial) {
	  var h = getHook(++currentIndex);

	  if (!h.value) {
	    // initiate
	    h.component = currentComponent;

	    var setState = function setState(s) {
	      if (h.component.__hooks.obsolete) {
	        {
	          throw new Error('Calling setState on an unmounted component is a no-op and indicates a memory leak in your component.');
	        }
	      }

	      var v = typeof s === 'function' ? s(h.value[0]) : s;

	      if (v !== h.value[0]) {
	        h.value[0] = v;
	        scheduleMicro(h.component);
	      }
	    };

	    h.value = [typeof initial === 'function' ? initial() : initial, setState];
	  }

	  return h.value;
	}
	/**
	 * @interface EffectCallback
	 * @returns {function=}
	 */

	/**
	 * @param {module:supernova~EffectCallback} effect
	 * @param {Array<any>=} deps
	 */

	function useEffect(cb, deps) {
	  {
	    if (typeof deps !== 'undefined' && !Array.isArray(deps)) {
	      throw new Error('Invalid dependencies. Second argument must be an array.');
	    }
	  }

	  var h = getHook(++currentIndex);

	  if (depsChanged(h.value ? h.value[1] : undefined, deps)) {
	    h.value = [cb, deps];

	    if (currentComponent.__hooks.pendingEffects.indexOf(h) === -1) {
	      currentComponent.__hooks.pendingEffects.push(h);
	    }
	  }
	} // don't expose this hook since it's no different than useEffect except for the timing

	function useLayoutEffect(cb, deps) {
	  {
	    if (typeof deps !== 'undefined' && !Array.isArray(deps)) {
	      throw new Error('Invalid dependencies. Second argument must be an array.');
	    }
	  }

	  var h = getHook(++currentIndex);

	  if (depsChanged(h.value ? h.value[1] : undefined, deps)) {
	    h.value = [cb, deps];

	    currentComponent.__hooks.pendingLayoutEffects.push(h);
	  }
	}
	/**
	 * @param {module:supernova~Factory} fn
	 * @param {Array<any>} [deps]
	 * @returns {any}
	 */


	function useMemo(fn, deps) {
	  {
	    if (!deps) {
	      console.warn('useMemo called without dependencies.');
	    }
	  }

	  var h = getHook(++currentIndex);

	  if (depsChanged(h.value ? h.value[0] : undefined, deps)) {
	    h.value = [deps, fn()];
	  }

	  return h.value[1];
	}
	/**
	 * @param {module:supernova~Factory} fn
	 * @param {Array<any>} [deps]
	 */

	function useImperativeHandle(fn, deps) {
	  var h = getHook(++currentIndex);

	  {
	    if (currentComponent.__hooks.imperativeHandle) {
	      throw new Error('useImperativeHandle already used.');
	    }
	  }

	  if (!h.component) {
	    h.component = currentComponent;
	  }

	  if (depsChanged(h.value ? h.value[0] : undefined, deps)) {
	    var v = fn();
	    h.value = [deps, v];
	    h.component.__hooks.imperativeHandle = v;
	  }
	}
	/**
	 * @interface PromiseCallback
	 * @returns {Promise<any>}
	 */

	/**
	 * @param {module:supernova~PromiseCallback} fn
	 * @param {Array<any>=} deps
	 * @returns {Array<any,any>}
	 */

	function usePromise(p, deps) {
	  var _useState = useState(function () {
	    return {
	      resolved: undefined,
	      rejected: undefined,
	      state: 'pending'
	    };
	  }),
	      _useState2 = _slicedToArray(_useState, 2),
	      obj = _useState2[0],
	      setObj = _useState2[1];

	  var h = getHook(++currentIndex);

	  if (!h.component) {
	    h.component = currentComponent;
	  }

	  useLayoutEffect(function () {
	    var canceled = false;

	    h.teardown = function () {
	      canceled = true;
	      h.teardown = null;

	      var idx = h.component.__hooks.pendingPromises.indexOf(h);

	      if (idx > -1) {
	        h.component.__hooks.pendingPromises.splice(idx, 1);
	      }
	    }; // setObj({
	    //   ...obj,
	    //   state: 'pending',
	    // });


	    p().then(function (v) {
	      if (canceled) {
	        return;
	      }

	      h.teardown && h.teardown();
	      setObj({
	        resolved: v,
	        rejected: undefined,
	        state: 'resolved'
	      });
	    }).catch(function (e) {
	      if (canceled) {
	        return;
	      }

	      h.teardown && h.teardown();
	      setObj({
	        resolved: undefined,
	        rejected: e,
	        state: 'resolved'
	      });
	    });

	    h.component.__hooks.pendingPromises.push(h);

	    return function () {
	      h.teardown && h.teardown();
	    };
	  }, deps);
	  return [obj.resolved, obj.rejected];
	} // ---- composed hooks ------

	/**
	 * @interface ActionDefinition
	 * @property {function} action
	 * @property {boolean=} visible
	 * @property {boolean=} disabled
	 * @property {object=} icon
	 * @property {string} icon.d - SVG path
	 */

	/**
	 * @interface ActionFactory
	 * @returns {module:supernova~ActionDefinition}
	 */

	/**
	 * @param {module:supernova~ActionFactory} fn
	 * @param {Array<any>=} deps
	 * @returns {Array<function>}
	 */

	function useAction(fn, deps) {
	  var _useState3 = useState({
	    action: function action() {
	      ref._config.action.call(null);
	    }
	  }),
	      _useState4 = _slicedToArray(_useState3, 1),
	      ref = _useState4[0];

	  if (!ref.component) {
	    ref.component = currentComponent;

	    currentComponent.__hooks.actions.push(ref);
	  }

	  useMemo(function () {
	    var a = fn();
	    ref._config = a;
	    ref.active = a.active || false;
	    ref.disabled = a.disabled || false;
	    ref.label = a.label || '';
	    ref.getSvgIconShape = a.icon ? function () {
	      return a.icon;
	    } : undefined;
	    ref.key = a.key || ref.component.__hooks.actions.length;
	    dispatchActions(ref.component);
	  }, deps); // TODO - return array of just action?

	  return [ref.action];
	}
	/**
	 * @interface Rect
	 * @property {number} top
	 * @property {number} left
	 * @property {number} width
	 * @property {number} height
	 */

	/**
	 * @returns {Array<module:supernova~Rect>}
	 */

	function useRect() {
	  var element = useElement();

	  var _useState5 = useState(function () {
	    var _element$getBoundingC = element.getBoundingClientRect(),
	        left = _element$getBoundingC.left,
	        top = _element$getBoundingC.top,
	        width = _element$getBoundingC.width,
	        height = _element$getBoundingC.height;

	    return {
	      left: left,
	      top: top,
	      width: width,
	      height: height
	    };
	  }),
	      _useState6 = _slicedToArray(_useState5, 2),
	      rect = _useState6[0],
	      setRect = _useState6[1];

	  var ref = useState(function () {
	    return {
	      current: {}
	    };
	  });
	  ref.current = rect;
	  useLayoutEffect(function () {
	    var handleResize = function handleResize() {
	      // TODO - should we really care about left/top?
	      var _element$getBoundingC2 = element.getBoundingClientRect(),
	          left = _element$getBoundingC2.left,
	          top = _element$getBoundingC2.top,
	          width = _element$getBoundingC2.width,
	          height = _element$getBoundingC2.height;

	      var r = ref.current;

	      if (r.width !== width || r.height !== height || r.left !== left || r.top !== top) {
	        setRect({
	          left: left,
	          top: top,
	          width: width,
	          height: height
	        });
	      }
	    };

	    if (typeof ResizeObserver === 'function') {
	      var resizeObserver = new ResizeObserver(handleResize);
	      resizeObserver.observe(element);
	      return function () {
	        resizeObserver.unobserve(element);
	        resizeObserver.disconnect(element);
	        resizeObserver = null;
	      };
	    }

	    window.addEventListener('resize', handleResize);
	    return function () {
	      window.removeEventListener('resize', handleResize);
	    };
	  }, [element]); // TODO - return array or just rect?

	  return [rect];
	}
	/**
	 * @returns {EnigmaObjectModel=}
	 */

	function useModel() {
	  var model = useInternalContext('model');
	  return model && model.session ? model : undefined;
	}
	/**
	 * @returns {EnigmaAppModel=}
	 */

	function useApp() {
	  var app = useInternalContext('app');
	  return app && app.session ? app : undefined;
	}
	/**
	 * @returns {EnigmaGlobalModel=}
	 */

	function useGlobal() {
	  var global = useInternalContext('global');
	  return global && global.session ? global : undefined;
	}
	/**
	 * @returns {HTMLElement}
	 */

	function useElement() {
	  return useInternalContext('element');
	}
	/**
	 * @returns {ObjectSelections}
	 */

	function useSelections() {
	  return useInternalContext('selections');
	}
	/**
	 * @returns {Theme}
	 */

	function useTheme() {
	  return useInternalContext('theme');
	}
	/**
	 * @returns {GenericObjectLayout}
	 */

	function useLayout() {
	  return useInternalContext('layout');
	}
	/**
	 * @returns {GenericObjectLayout}
	 */

	function useStaleLayout() {
	  var layout = useInternalContext('layout');

	  var _useState7 = useState({
	    current: layout
	  }),
	      _useState8 = _slicedToArray(_useState7, 1),
	      ref = _useState8[0];

	  if (!layout.qSelectionInfo || !layout.qSelectionInfo.qInSelections) {
	    ref.current = layout;
	  }

	  return ref.current;
	}
	/**
	 * @returns {NxAppLayout}
	 */

	function useAppLayout() {
	  return useInternalContext('appLayout');
	}
	/**
	 * @returns {Translator}
	 */

	function useTranslator() {
	  return useInternalContext('translator');
	}
	/**
	 * @interface Constraints
	 * @property {boolean=} passive
	 * @property {boolean=} active
	 * @property {boolean=} select
	 */

	/**
	 * @returns {module:supernova~Constraints}
	 */

	function useConstraints() {
	  return useInternalContext('constraints');
	}
	/**
	 * @returns {object}
	 */

	function useOptions() {
	  return useInternalContext('options');
	}
	/**
	 * @interface SnapshotCallback
	 * @param {GenericObjectLayout} layout
	 * @returns {Promise<GenericObjectLayout>}
	 */

	/**
	 * @param {module:supernova~SnapshotCallback} cb
	 */

	function onTakeSnapshot(cb) {
	  var h = getHook(++currentIndex);

	  if (!h.value) {
	    h.value = 1;

	    currentComponent.__hooks.snaps.push(h);
	  }

	  h.fn = cb;
	}

	var defaultComponent = {
	  app: null,
	  model: null,
	  actions: null,
	  selections: null,
	  created: function created() {},
	  mounted: function mounted() {},
	  render: function render() {},
	  resize: function resize() {},
	  willUnmount: function willUnmount() {},
	  destroy: function destroy() {},
	  emit: function emit() {},
	  getViewState: function getViewState() {},
	  // temporary
	  observeActions: function observeActions() {},
	  setSnapshotData: function setSnapshotData(snapshot) {
	    return Promise.resolve(snapshot);
	  }
	};
	var reservedKeys = Object.keys(defaultComponent);

	var mixin$1 = function mixin(obj) {
	  /* eslint no-param-reassign: 0 */
	  Object.keys(EventEmitter.prototype).forEach(function (key) {
	    obj[key] = EventEmitter.prototype[key];
	  });
	  EventEmitter.init(obj);
	  return obj;
	};

	function createWithHooks(generator, opts, env) {
	  {
	    if (generator.component.run !== run) {
	      // eslint-disable-next-line no-console
	      console.warn('Detected multiple supernova modules, this might cause problems.');
	    }
	  }

	  var qGlobal = opts.app && opts.app.session ? opts.app.session.getObjectApi({
	    handle: -1
	  }) : undefined; // use a deep comparison for 'small' objects

	  var hasRun = false;
	  var current = {};
	  var deepCheck = ['appLayout', 'constraints', 'options'];
	  var forcedConstraints = {}; // select should be a constraint when a real model is not available

	  if (!opts.model || !opts.model.session) {
	    forcedConstraints.select = true;
	  }

	  var c = {
	    context: {
	      // static values that are not expected to
	      // change during the component's life
	      // --------------------
	      model: opts.model,
	      app: opts.app,
	      global: qGlobal,
	      selections: opts.selections,
	      element: undefined,
	      // set on mount
	      // ---- singletons ----
	      theme: undefined,
	      translator: env.translator,
	      // --- dynamic values ---
	      layout: {},
	      appLayout: {},
	      constraints: forcedConstraints,
	      options: {}
	    },
	    env: env,
	    fn: generator.component.fn,
	    created: function created() {},
	    mounted: function mounted(element) {
	      this.context.element = element;
	      generator.component.initiate(c);
	    },
	    render: function render(r) {
	      var _this = this;

	      var changed = !hasRun || false;

	      if (r) {
	        if (r.layout) {
	          // too expensive to do a deep comparison for large layouts - assume it's always new
	          changed = true;
	          this.context.layout = r.layout;
	        }

	        if (r.context && r.context.theme) {
	          // changed is set further down only if the name is different
	          this.context.theme = r.context.theme;
	        } // do a deep check on 'small' objects


	        deepCheck.forEach(function (key) {
	          var ref = key === 'options' ? r : r.context;

	          if (ref && Object.prototype.hasOwnProperty.call(ref, key)) {
	            var s = JSON.stringify(ref[key]);

	            if (key === 'constraints') {
	              s = JSON.stringify(_objectSpread2({}, ref[key], {}, forcedConstraints));
	            }

	            if (s !== current[key]) {
	              changed = true;
	              current[key] = s; // create new object reference to ensure useEffect/useMemo/useCallback
	              // is triggered if the object is used a dependency

	              _this.context[key] = JSON.parse(s);
	            }
	          }
	        });
	      } else {
	        changed = true;
	      } // theme and translator are singletons so their reference won't change, we do
	      // however need to observe if their internal content has changed (name, language) and
	      // trigger an update if they have


	      if (this.context.theme && this.context.theme.name() !== current.themeName) {
	        changed = true;
	        current.themeName = this.context.theme.name();
	      }

	      if (this.context.translator.language() !== current.language) {
	        changed = true;
	        current.language = c.context.translator.language();
	      } // TODO - observe what hooks are used, and only trigger run if values associated
	      // with those hooks have changed


	      if (changed) {
	        hasRun = true;
	        return generator.component.run(this);
	      }

	      return Promise.resolve();
	    },
	    resize: function resize() {
	      // resize should never really by necesseary since the ResizeObserver
	      // in useRect observes changes on the size of the object, the only time it might
	      // be necessary is on IE 11 when the object is resized without the window changing size
	      return this.render();
	    },
	    willUnmount: function willUnmount() {
	      generator.component.teardown(this);
	    },
	    setSnapshotData: function setSnapshotData(layout) {
	      return generator.component.runSnaps(this, layout);
	    },
	    getImperativeHandle: function getImperativeHandle() {
	      return generator.component.getImperativeHandle(this);
	    },
	    destroy: function destroy() {},
	    observeActions: function observeActions(callback) {
	      generator.component.observeActions(this, callback);
	    },
	    isHooked: true
	  };
	  deepCheck.forEach(function (key) {
	    current[key] = JSON.stringify(key === 'options' ? c.options : c.context[key]);
	  });
	  current.themeName = c.context.theme ? c.context.theme.name() : undefined;
	  current.language = c.context.translator ? c.context.translator.language() : undefined;
	  Object.assign(c, {
	    selections: opts.selections
	  });
	  return [c, null];
	}

	function createClassical(generator, opts) {
	  {
	    // eslint-disable-next-line no-console
	    console.warn('Obsolete API - time to get hooked!');
	  }

	  var componentInstance = _objectSpread2({}, defaultComponent);

	  mixin$1(componentInstance);
	  var userInstance = {
	    emit: function emit() {
	      componentInstance.emit.apply(componentInstance, arguments);
	    }
	  };
	  Object.keys(generator.component || {}).forEach(function (key) {
	    if (reservedKeys.indexOf(key) !== -1) {
	      componentInstance[key] = generator.component[key].bind(userInstance);
	    } else {
	      userInstance[key] = generator.component[key];
	    }
	  });
	  var hero = actionhero({
	    sn: generator,
	    component: userInstance
	  });
	  var qGlobal = opts.app && opts.app.session ? opts.app.session.getObjectApi({
	    handle: -1
	  }) : null;
	  Object.assign(userInstance, {
	    model: opts.model,
	    app: opts.app,
	    global: qGlobal,
	    selections: opts.selections,
	    actions: hero.actions
	  });
	  Object.assign(componentInstance, {
	    actions: hero.actions,
	    model: opts.model,
	    app: opts.app,
	    selections: opts.selections
	  });
	  return [componentInstance, hero];
	}

	function create(generator, opts, env) {
	  if (typeof generator.component === 'function') {
	    generator.component = hook(generator.component);
	  }

	  var _ref = generator.component && generator.component.__hooked ? createWithHooks(generator, opts, env) : createClassical(generator, opts),
	      _ref2 = _slicedToArray(_ref, 2),
	      componentInstance = _ref2[0],
	      hero = _ref2[1];

	  var teardowns = [];

	  if (generator.qae.properties.onChange) {
	    // TODO - handle multiple sn
	    // TODO - check privileges
	    if (opts.model.__snInterceptor) {
	      // remove old hook - happens only when proper cleanup hasn't been done
	      opts.model.__snInterceptor.teardown();
	    }

	    opts.model.__snInterceptor = {
	      setProperties: opts.model.setProperties,
	      applyPatches: opts.model.applyPatches,
	      teardown: undefined
	    };

	    opts.model.setProperties = function setProperties() {
	      var _generator$qae$proper, _opts$model$__snInter;

	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      (_generator$qae$proper = generator.qae.properties.onChange).call.apply(_generator$qae$proper, [{
	        model: opts.model
	      }].concat(args));

	      return (_opts$model$__snInter = opts.model.__snInterceptor.setProperties).call.apply(_opts$model$__snInter, [this].concat(args));
	    };

	    opts.model.applyPatches = function applyPatches(qPatches, qSoftPatch) {
	      var _this2 = this;

	      var method = qSoftPatch ? 'getEffectiveProperties' : 'getProperties';
	      return opts.model[method]().then(function (currentProperties) {
	        // apply patches to current props
	        var original = JSONPatch.clone(currentProperties);
	        var patches = qPatches.map(function (p) {
	          return {
	            op: p.qOp,
	            value: JSON.parse(p.qValue),
	            path: p.qPath
	          };
	        });
	        JSONPatch.apply(currentProperties, patches);
	        generator.qae.properties.onChange.call({
	          model: opts.model
	        }, currentProperties); // calculate new patches from after change

	        var newPatches = JSONPatch.generate(original, currentProperties).map(function (p) {
	          return {
	            qOp: p.op,
	            qValue: JSON.stringify(p.value),
	            qPath: p.path
	          };
	        });
	        return opts.model.__snInterceptor.applyPatches.call(_this2, newPatches, qSoftPatch);
	      });
	    };

	    opts.model.__snInterceptor.teardown = function () {
	      opts.model.setProperties = opts.model.__snInterceptor.setProperties;
	      delete opts.model.__snInterceptor;
	    };

	    teardowns.push(opts.model.__snInterceptor.teardown);
	  }

	  return {
	    generator: generator,
	    component: componentInstance,
	    selectionToolbar: {
	      items: hero ? hero.selectionToolbarItems : []
	    },
	    destroy: function destroy() {
	      teardowns.forEach(function (t) {
	        return t();
	      });
	    },
	    logicalSize: generator.definition.logicalSize || function () {
	      return false;
	    }
	  };
	}

	var translator = {
	  get: function get(str
	  /* , args */
	  ) {
	    return "$$$".concat(str, "$$$");
	  }
	};

	var noop = function noop() {};

	function fallback(x, value) {
	  if (typeof x === 'undefined') {
	    return function () {
	      return value;
	    };
	  }

	  return function () {
	    return x;
	  };
	}

	function defFn() {
	  var def = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  return {
	    min: typeof def.min === 'function' ? def.min : fallback(def.min, 0),
	    max: typeof def.max === 'function' ? def.max : fallback(def.max, 1000),
	    added: def.added || def.add || noop,
	    // TODO - deprecate add in favour of added
	    description: def.description || noop,
	    moved: def.moved || def.move || noop,
	    removed: def.removed || def.remove || noop,
	    replaced: def.replaced || def.replace || noop
	  };
	}

	var resolveValue = function resolveValue(data, reference, defaultValue) {
	  var steps = reference.split('/');
	  var dataContainer = data;

	  if (dataContainer === undefined) {
	    return defaultValue;
	  }

	  for (var i = 0; i < steps.length; ++i) {
	    if (steps[i] === '') {
	      continue; // eslint-disable-line no-continue
	    }

	    if (typeof dataContainer[steps[i]] === 'undefined') {
	      return defaultValue;
	    }

	    dataContainer = dataContainer[steps[i]];
	  }

	  return dataContainer;
	};

	function target(def) {
	  var propertyPath = def.path || '/qHyperCubeDef';
	  var layoutPath = propertyPath.slice(0, -3);
	  return {
	    propertyPath: propertyPath,
	    layoutPath: layoutPath,
	    resolveLayout: function resolveLayout(layout) {
	      return resolveValue(layout, layoutPath, {});
	    },
	    dimensions: defFn(def.dimensions),
	    measures: defFn(def.measures)
	  };
	}

	function qae() {
	  var def = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var initial = def.properties || {};
	  var onChange;

	  if (def.properties && (def.properties.initial || def.properties.onChange)) {
	    initial = def.properties.initial;
	    onChange = def.properties.onChange;
	  }

	  var q = {
	    properties: {
	      initial: initial,
	      onChange: onChange
	    },
	    data: {
	      targets: ((def.data || {}).targets || []).map(target)
	    }
	  };
	  return q;
	}

	/**
	 * @typedef {SnDefinition|SnFn} Supernova
	 */

	/**
	 * @interface SnDefinition
	 * @property {object} qae
	 * @property {function} component
	 */

	/**
	 * @typedef {object} env
	 */

	/**
	 * @interface SnFn
	 * @param {env} env
	 * @returns {SnDefinition}
	 */

	/**
	 * @interface snGenerator
	 * @param {Supernova} Sn
	 * @param {env} env
	 * @returns {generator}
	 * @private
	 */

	function generatorFn(UserSN, env) {
	  var sn;

	  var localEnv = _objectSpread2({
	    translator: translator
	  }, env);

	  if (typeof UserSN === 'function') {
	    sn = UserSN(localEnv);
	  } else {
	    sn = UserSN;
	  }
	  /**
	   * @alias generator
	   * @private
	   */


	  var generator =
	  /** @lends generator */
	  {
	    /**
	     * @type {QAE}
	     */
	    qae: qae(sn.qae),

	    /**
	     * @type {SnComponent}
	     */
	    component: sn.component || {},

	    /**
	     * @param {object} p
	     * @param {EnigmaAppModel} p.app
	     * @param {EnigmaObjectModel} p.model
	     * @param {ObjectSelections} p.selections
	     */
	    create: function create$1(params) {
	      var ss = create(generator, params, localEnv);

	      return ss;
	    },
	    definition: {}
	  };
	  Object.keys(sn).forEach(function (key) {
	    if (!generator[key]) {
	      generator.definition[key] = sn[key];
	    }
	  });
	  return generator;
	}

	exports.generator = generatorFn;
	exports.hook = hook;
	exports.onTakeSnapshot = onTakeSnapshot;
	exports.useAction = useAction;
	exports.useApp = useApp;
	exports.useAppLayout = useAppLayout;
	exports.useConstraints = useConstraints;
	exports.useEffect = useEffect;
	exports.useElement = useElement;
	exports.useGlobal = useGlobal;
	exports.useImperativeHandle = useImperativeHandle;
	exports.useLayout = useLayout;
	exports.useMemo = useMemo;
	exports.useModel = useModel;
	exports.useOptions = useOptions;
	exports.usePromise = usePromise;
	exports.useRect = useRect;
	exports.useSelections = useSelections;
	exports.useStaleLayout = useStaleLayout;
	exports.useState = useState;
	exports.useTheme = useTheme;
	exports.useTranslator = useTranslator;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
