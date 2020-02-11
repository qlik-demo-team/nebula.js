/*
* @nebula.js/locale v0.1.0-alpha.29
* Copyright (c) 2020 QlikTech International AB
* Released under the MIT license.
*/

var format = function format() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var arr = typeof args === 'string' || typeof args === 'number' ? [args] : args;
  return message.replace(/\{(\d+)\}/g, function (match, number) {
    return typeof arr[number] !== 'undefined' ? arr[number] : match;
  });
};

function translator() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$initial = _ref.initial,
      initial = _ref$initial === void 0 ? 'en-US' : _ref$initial,
      _ref$fallback = _ref.fallback,
      fallback = _ref$fallback === void 0 ? 'en-US' : _ref$fallback;

  var dictionaries = {};
  var currentLocale = initial;
  /**
   * @interface Translator
   */

  var api =
  /** @lends Translator */
  {
    language: function language(lang) {
      if (lang) {
        currentLocale = lang;
      }

      return currentLocale;
    },

    /**
     * Register a string in multiple locales
     * @param {object} item
     * @param {string} item.id
     * @param {object<string,string>} item.locale
     * @example
     * translator.add({
     *   id: 'company.hello_user',
     *   locale: {
     *     'en-US': 'Hello {0}',
     *     'sv-SE': 'Hej {0}
     *   }
     * });
     * translator.get('company.hello_user', ['John']); // Hello John
     */
    add: function add(item) {
      // TODO - disallow override?
      var id = item.id,
          locale = item.locale;
      Object.keys(locale).forEach(function (lang) {
        if (!dictionaries[lang]) {
          dictionaries[lang] = {};
        }

        dictionaries[lang][id] = locale[lang];
      });
    },

    /**
     * Translate string for current locale
     * @param {string} str - Id of the registered string
     * @param {Array<string>=} args - Values passed down for string interpolation
     */
    get: function get(str, args) {
      var v;

      if (dictionaries[currentLocale] && typeof dictionaries[currentLocale][str] !== 'undefined') {
        v = dictionaries[currentLocale][str];
      } else if (dictionaries[fallback] && typeof dictionaries[fallback][str] !== 'undefined') {
        v = dictionaries[fallback][str];
      } else {
        v = str;
      }

      return typeof args !== 'undefined' ? format(v, args) : v;
    }
  };
  return api;
}

function locale() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$initial = _ref.initial,
      initial = _ref$initial === void 0 ? 'en-US' : _ref$initial,
      _ref$fallback = _ref.fallback,
      fallback = _ref$fallback === void 0 ? 'en-US' : _ref$fallback;

  var t = translator({
    initial: initial,
    fallback: fallback
  });
  return {
    translator: t
  };
}

export default locale;
