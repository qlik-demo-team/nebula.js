/*
* @nebula.js/nucleus v0.1.0-alpha.29
* Copyright (c) 2020 QlikTech International AB
* Released under the MIT license.
*/

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@nebula.js/supernova')) :
  typeof define === 'function' && define.amd ? define(['@nebula.js/supernova'], factory) :
  (global = global || self, global.nucleus = factory(global.supernova));
}(this, (function (supernova) { 'use strict';

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

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
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

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
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

  var Object_Update_Active = {
  	id: "Object.Update.Active",
  	locale: {
  		"en-US": "Updating data"
  	}
  };
  var Object_Update_Cancelled = {
  	id: "Object.Update.Cancelled",
  	locale: {
  		"en-US": "Data update was cancelled"
  	}
  };
  var Supernova_Incomplete = {
  	id: "Supernova.Incomplete",
  	locale: {
  		"en-US": "Incomplete visualization",
  		"it-IT": "Visualizzazione incompleta",
  		"zh-CN": "不完整的可视化",
  		"zh-TW": "視覺化未完成",
  		"ko-KR": "완료되지 않은 시각화",
  		"de-DE": "Unvollständige Visualisierung",
  		"sv-SE": "Ofullständig visualisering",
  		"es-ES": "Visualización incompleta",
  		"pt-BR": "Visualização incompleta",
  		"ja-JP": "未完了のビジュアライゼーション",
  		"fr-FR": "Visualisation incomplète",
  		"nl-NL": "Onvolledige visualisatie",
  		"tr-TR": "Tamamlanmamış görselleştirme",
  		"pl-PL": "Niekompletna wizualizacja",
  		"ru-RU": "Незавершенная визуализация"
  	}
  };
  var Cancel = {
  	id: "Common.Cancel",
  	locale: {
  		"en-US": "Cancel",
  		"de-DE": "Abbrechen",
  		"es-ES": "Cancelar",
  		"fr-FR": "Annuler",
  		"ja-JP": "キャンセル",
  		"nl-NL": "Annuleren",
  		"it-IT": "Annulla",
  		"ko-KR": "취소",
  		"pl-PL": "Anuluj",
  		"ru-RU": "Отмена",
  		"pt-BR": "Cancelar",
  		"sv-SE": "Avbryt",
  		"zh-CN": "取消",
  		"tr-TR": "İptal",
  		"zh-TW": "取消"
  	}
  };
  var OK = {
  	id: "Common.OK",
  	locale: {
  		"en-US": "OK",
  		"de-DE": "OK",
  		"es-ES": "Aceptar",
  		"fr-FR": "OK",
  		"ja-JP": "OK",
  		"nl-NL": "OK",
  		"it-IT": "OK",
  		"ko-KR": "확인",
  		"pl-PL": "OK",
  		"ru-RU": "ОК",
  		"pt-BR": "OK",
  		"sv-SE": "OK",
  		"zh-CN": "确定",
  		"tr-TR": "Tamam",
  		"zh-TW": "確定"
  	}
  };
  var Retry = {
  	id: "Common.Retry",
  	locale: {
  		"en-US": "Retry",
  		"it-IT": "Riprova",
  		"zh-CN": "重试",
  		"zh-TW": "重試",
  		"ko-KR": "다시 시도",
  		"de-DE": "Wiederholen",
  		"sv-SE": "Försök igen",
  		"es-ES": "Intentar de nuevo",
  		"pt-BR": "Tentar Novamente",
  		"ja-JP": "再試行",
  		"fr-FR": "Réessayer",
  		"nl-NL": "Opnieuw",
  		"tr-TR": "Yeniden dene",
  		"pl-PL": "Ponów próbę",
  		"ru-RU": "Повторить попытку"
  	}
  };
  var CurrentSelections_All = {
  	id: "CurrentSelections.All",
  	locale: {
  		"en-US": "ALL",
  		"it-IT": "TUTTO",
  		"zh-CN": "全部",
  		"zh-TW": "全部",
  		"ko-KR": "모두",
  		"de-DE": "ALLES",
  		"sv-SE": "ALLA",
  		"es-ES": "TODOS",
  		"pt-BR": "TODOS",
  		"ja-JP": "すべて",
  		"fr-FR": "TOUS",
  		"nl-NL": "ALLE",
  		"tr-TR": "TÜMÜ",
  		"pl-PL": "WSZYSTKO",
  		"ru-RU": "ВСЕ"
  	}
  };
  var CurrentSelections_Of = {
  	id: "CurrentSelections.Of",
  	locale: {
  		"en-US": "{0} of {1}",
  		"it-IT": "{0} di {1}",
  		"zh-CN": "{0}/{1}",
  		"zh-TW": "{0} / {1}",
  		"ko-KR": "{0} / {1}",
  		"de-DE": "{0} von {1}",
  		"sv-SE": "{0} av {1}",
  		"es-ES": "{0} de {1}",
  		"pt-BR": "{0} de {1}",
  		"ja-JP": "{0} / {1}",
  		"fr-FR": "{0} sur {1}",
  		"nl-NL": "{0} van {1}",
  		"tr-TR": "{0} / {1}",
  		"pl-PL": "{0} z {1}",
  		"ru-RU": "{0} из {1}"
  	}
  };
  var Listbox_Search = {
  	id: "Listbox.Search",
  	locale: {
  		"en-US": "Search in listbox",
  		"it-IT": "Cerca nella casella di elenco",
  		"zh-CN": "在列表框中搜索",
  		"zh-TW": "在清單方塊中搜尋",
  		"ko-KR": "목록 상자에서 검색",
  		"de-DE": "In Listenfeld suchen",
  		"sv-SE": "Sök i listruta",
  		"es-ES": "Buscar en cuadro de lista",
  		"pt-BR": "Pesquisar na caixa de listagem",
  		"ja-JP": "リストボックス内を検索",
  		"fr-FR": "Rechercher dans la liste de sélection",
  		"nl-NL": "Zoeken in keuzelijst",
  		"tr-TR": "Liste kutusunda ara",
  		"pl-PL": "Wyszukaj w liście wartości",
  		"ru-RU": "Поиск в списке"
  	}
  };
  var Navigate_Forward = {
  	id: "Navigate.Forward",
  	locale: {
  		"en-US": "Step forward",
  		"it-IT": "Vai avanti",
  		"zh-CN": "前进",
  		"zh-TW": "前進",
  		"ko-KR": "다음 단계",
  		"de-DE": "Schritt vor",
  		"sv-SE": "Gå framåt",
  		"es-ES": "Avanzar",
  		"pt-BR": "Avançar uma etapa",
  		"ja-JP": "1段階進む",
  		"fr-FR": "Étape suivante",
  		"nl-NL": "Stap vooruit",
  		"tr-TR": "Bir adım ileri",
  		"pl-PL": "Krok do przodu",
  		"ru-RU": "Шаг вперед"
  	}
  };
  var Navigate_Back = {
  	id: "Navigate.Back",
  	locale: {
  		"en-US": "Step back",
  		"it-IT": "Torna indietro",
  		"zh-CN": "后退",
  		"zh-TW": "倒退",
  		"ko-KR": "이전 단계",
  		"de-DE": "Schritt zurück",
  		"sv-SE": "Gå bakåt",
  		"es-ES": "Retroceder",
  		"pt-BR": "Voltar uma etapa",
  		"ja-JP": "1 段階戻る",
  		"fr-FR": "Retour en arrière",
  		"nl-NL": "Stap terug",
  		"tr-TR": "Bir adım geri",
  		"pl-PL": "Krok do tyłu",
  		"ru-RU": "Шаг назад"
  	}
  };
  var Selection_ClearAll = {
  	id: "Selection.ClearAll",
  	locale: {
  		"en-US": "Clear all selections",
  		"it-IT": "Cancella tutte le selezioni",
  		"zh-CN": "清除所有选择项",
  		"zh-TW": "清除所有選項",
  		"ko-KR": "모든 선택 해제",
  		"de-DE": "Auswahl aufheben (alle Felder)",
  		"sv-SE": "Rensa alla urval",
  		"es-ES": "Borrar todas las selecciones",
  		"pt-BR": "Limpar todas as seleções",
  		"ja-JP": "選択をすべてクリアする",
  		"fr-FR": "Effacer toutes les sélections",
  		"nl-NL": "Alle selecties wissen",
  		"tr-TR": "Tüm seçimleri temizle",
  		"pl-PL": "Wyczyść wszystkie selekcje",
  		"ru-RU": "Очистить от всех выборок"
  	}
  };
  var Selection_ClearAllStates = {
  	id: "Selection.ClearAllStates",
  	locale: {
  		"en-US": "Clear all states",
  		"it-IT": "Cancella tutti gli stati",
  		"zh-CN": "清除所有状态",
  		"zh-TW": "清除所有狀態",
  		"ko-KR": "모든 상태 지우기",
  		"de-DE": "Alle Status löschen",
  		"sv-SE": "Rensa alla tillstånd",
  		"es-ES": "Borrar todos los estados",
  		"pt-BR": "Limpar todos os estados",
  		"ja-JP": "全ステートをクリア",
  		"fr-FR": "Effacer tous les états",
  		"nl-NL": "Alle states wissen",
  		"tr-TR": "Tüm durumları temizle",
  		"pl-PL": "Wyczyść wszystkie stany",
  		"ru-RU": "Очистить все состояния"
  	}
  };
  var Selection_Confirm = {
  	id: "Selection.Confirm",
  	locale: {
  		"en-US": "Confirm selection",
  		"it-IT": "Conferma selezione",
  		"zh-CN": "确认选择",
  		"zh-TW": "確認選取",
  		"ko-KR": "선택 확인",
  		"de-DE": "Auswahl bestätigen",
  		"sv-SE": "Bekräfta urval",
  		"es-ES": "Confirmar selección",
  		"pt-BR": "Confirmar seleção",
  		"ja-JP": "選択の確認",
  		"fr-FR": "Confirmer la sélection",
  		"nl-NL": "Selectie bevestigen",
  		"tr-TR": "Seçimi onayla",
  		"pl-PL": "Potwierdź selekcję",
  		"ru-RU": "Подтвердить выборку"
  	}
  };
  var Selection_Cancel = {
  	id: "Selection.Cancel",
  	locale: {
  		"en-US": "Cancel selection",
  		"it-IT": "Annulla selezione",
  		"zh-CN": "取消选择",
  		"zh-TW": "取消選取",
  		"ko-KR": "선택 취소",
  		"de-DE": "Auswahl abbrechen",
  		"sv-SE": "Avbryt urval",
  		"es-ES": "Cancelar selección",
  		"pt-BR": "Cancelar seleção",
  		"ja-JP": "選択のキャンセル",
  		"fr-FR": "Annuler la sélection",
  		"nl-NL": "Selectie annuleren",
  		"tr-TR": "Seçimi iptal et",
  		"pl-PL": "Anuluj selekcję",
  		"ru-RU": "Отменить выборку"
  	}
  };
  var Selection_Clear = {
  	id: "Selection.Clear",
  	locale: {
  		"en-US": "Clear selection",
  		"it-IT": "Cancella selezione",
  		"zh-CN": "清除选择",
  		"zh-TW": "清除選項",
  		"ko-KR": "선택 해제",
  		"de-DE": "Auswahl löschen",
  		"sv-SE": "Rensa urval",
  		"es-ES": "Borrar selección",
  		"pt-BR": "Limpar seleção",
  		"ja-JP": "選択をクリア",
  		"fr-FR": "Effacer la sélection",
  		"nl-NL": "Selectie wissen",
  		"tr-TR": "Seçimi temizle",
  		"pl-PL": "Wyczyść selekcję",
  		"ru-RU": "Очистить выбор"
  	}
  };
  var Selection_SelectAll = {
  	id: "Selection.SelectAll",
  	locale: {
  		"en-US": "Select all",
  		"it-IT": "Seleziona tutto",
  		"zh-CN": "全选",
  		"zh-TW": "全選",
  		"ko-KR": "모두 선택",
  		"de-DE": "Alle Werte auswählen",
  		"sv-SE": "Markera alla",
  		"es-ES": "Seleccionar todo",
  		"pt-BR": "Selecionar todos",
  		"ja-JP": "すべて選択",
  		"fr-FR": "Sélectionner tout",
  		"nl-NL": "Alles selecteren",
  		"tr-TR": "Tümünü seç",
  		"pl-PL": "Wybierz wszystko",
  		"ru-RU": "Выбрать все"
  	}
  };
  var Selection_SelectAlternative = {
  	id: "Selection.SelectAlternative",
  	locale: {
  		"en-US": "Select alternative",
  		"it-IT": "Seleziona alternativi",
  		"zh-CN": "选择替代项",
  		"zh-TW": "選取替代選項",
  		"ko-KR": "대안 선택",
  		"de-DE": "Alternative Werte auswählen",
  		"sv-SE": "Välj alternativ",
  		"es-ES": "Seleccionar alternativos",
  		"pt-BR": "Selecionar alternativa",
  		"ja-JP": "代替値を選択",
  		"fr-FR": "Sélectionner des valeurs alternatives",
  		"nl-NL": "Alternatief selecteren",
  		"tr-TR": "Alternatifi seç",
  		"pl-PL": "Wybierz alternatywę",
  		"ru-RU": "Выбрать альтернативные"
  	}
  };
  var Selection_SelectExcluded = {
  	id: "Selection.SelectExcluded",
  	locale: {
  		"en-US": "Select excluded",
  		"it-IT": "Seleziona esclusi",
  		"zh-CN": "选择排除项",
  		"zh-TW": "選取排除值",
  		"ko-KR": "제외 항목 선택",
  		"de-DE": "Ausgeschlossene Werte auswählen",
  		"sv-SE": "Välj uteslutna",
  		"es-ES": "Seleccionar excluidos",
  		"pt-BR": "Selecionar excluído",
  		"ja-JP": "除外値を選択",
  		"fr-FR": "Sélectionner les valeurs exclues",
  		"nl-NL": "Uitgesloten selecteren",
  		"tr-TR": "Hariç tutulanı seç",
  		"pl-PL": "Wybierz wykluczone",
  		"ru-RU": "Выбрать исключенные"
  	}
  };
  var Selection_SelectPossible = {
  	id: "Selection.SelectPossible",
  	locale: {
  		"en-US": "Select possible",
  		"it-IT": "Seleziona possibili",
  		"zh-CN": "选择可能值",
  		"zh-TW": "選取可能值",
  		"ko-KR": "사용 가능 항목 선택",
  		"de-DE": "Wählbare Werte auswählen",
  		"sv-SE": "Välj möjliga",
  		"es-ES": "Seleccionar posibles",
  		"pt-BR": "Selecionar possível",
  		"ja-JP": "絞込値を選択",
  		"fr-FR": "Sélectionner les valeurs possibles",
  		"nl-NL": "Mogelijke selecteren",
  		"tr-TR": "Olasıyı seç",
  		"pl-PL": "Wybierz możliwe",
  		"ru-RU": "Выбрать возможные"
  	}
  };
  var Selection_Menu = {
  	id: "Selection.Menu",
  	locale: {
  		"en-US": "Selection menu",
  		"it-IT": "Menu Selezione",
  		"zh-CN": "选择菜单",
  		"zh-TW": "選項功能表",
  		"ko-KR": "선택 메뉴",
  		"de-DE": "Auswahlmenü",
  		"sv-SE": "Urvalsmeny",
  		"es-ES": "Menú de selección",
  		"pt-BR": "Menu de seleção",
  		"ja-JP": "選択メニュー",
  		"fr-FR": "Menu Sélection",
  		"nl-NL": "Selectiemenu",
  		"tr-TR": "Seçim menüsü",
  		"pl-PL": "Menu selekcji",
  		"ru-RU": "Меню \"Выборка\""
  	}
  };
  var all = {
  	Object_Update_Active: Object_Update_Active,
  	Object_Update_Cancelled: Object_Update_Cancelled,
  	Supernova_Incomplete: Supernova_Incomplete,
  	Cancel: Cancel,
  	OK: OK,
  	Retry: Retry,
  	CurrentSelections_All: CurrentSelections_All,
  	CurrentSelections_Of: CurrentSelections_Of,
  	Listbox_Search: Listbox_Search,
  	Navigate_Forward: Navigate_Forward,
  	Navigate_Back: Navigate_Back,
  	Selection_ClearAll: Selection_ClearAll,
  	Selection_ClearAllStates: Selection_ClearAllStates,
  	Selection_Confirm: Selection_Confirm,
  	Selection_Cancel: Selection_Cancel,
  	Selection_Clear: Selection_Clear,
  	Selection_SelectAll: Selection_SelectAll,
  	Selection_SelectAlternative: Selection_SelectAlternative,
  	Selection_SelectExcluded: Selection_SelectExcluded,
  	Selection_SelectPossible: Selection_SelectPossible,
  	Selection_Menu: Selection_Menu
  };

  function appLocaleFn(language) {
    var l = locale({
      initial: language
    });
    Object.keys(all).forEach(function (key) {
      l.translator.add(all[key]);
    });
    return {
      translator: l.translator
    };
  }

  /*
  * @nebula.js/theme v0.1.0-alpha.29
  * Copyright (c) 2020 QlikTech International AB
  * Released under the MIT license.
  */

  /**
   * Utility functions
   */
  var util = {};

  util.isObject = function isObject(arg) {
    return _typeof(arg) === 'object' && arg !== null;
  };

  util.isNumber = function isNumber(arg) {
    return typeof arg === 'number';
  };

  util.isUndefined = function isUndefined(arg) {
    return arg === void 0;
  };

  util.isFunction = function isFunction(arg) {
    return typeof arg === 'function';
  };
  /**
   * EventEmitter class
   */


  function EventEmitter() {
    EventEmitter.init.call(this);
  }

  var nodeEventEmitter = EventEmitter; // Backwards-compat with node 0.10.x

  EventEmitter.EventEmitter = EventEmitter;
  EventEmitter.prototype._events = undefined;
  EventEmitter.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are
  // added to it. This is a useful default which helps finding memory leaks.

  EventEmitter.defaultMaxListeners = 10;

  EventEmitter.init = function () {
    this._events = this._events || {};
    this._maxListeners = this._maxListeners || undefined;
  }; // Obviously not all Emitters should be limited to 10. This function allows
  // that to be increased. Set to zero for unlimited.


  EventEmitter.prototype.setMaxListeners = function (n) {
    if (!util.isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
    this._maxListeners = n;
    return this;
  };

  EventEmitter.prototype.emit = function (type) {
    var er, handler, len, args, i, listeners;
    if (!this._events) this._events = {}; // If there is no 'error' event listener then throw.

    if (type === 'error' && !this._events.error) {
      er = arguments[1];

      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        throw Error('Uncaught, unspecified "error" event.');
      }
    }

    handler = this._events[type];
    if (util.isUndefined(handler)) return false;

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

          for (i = 1; i < len; i++) {
            args[i - 1] = arguments[i];
          }

          handler.apply(this, args);
      }
    } else if (util.isObject(handler)) {
      len = arguments.length;
      args = new Array(len - 1);

      for (i = 1; i < len; i++) {
        args[i - 1] = arguments[i];
      }

      listeners = handler.slice();
      len = listeners.length;

      for (i = 0; i < len; i++) {
        listeners[i].apply(this, args);
      }
    }

    return true;
  };

  EventEmitter.prototype.addListener = function (type, listener) {
    var m;
    if (!util.isFunction(listener)) throw TypeError('listener must be a function');
    if (!this._events) this._events = {}; // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".

    if (this._events.newListener) this.emit('newListener', type, util.isFunction(listener.listener) ? listener.listener : listener);
    if (!this._events[type]) // Optimize the case of one listener. Don't need the extra array object.
      this._events[type] = listener;else if (util.isObject(this._events[type])) // If we've already got an array, just append.
      this._events[type].push(listener);else // Adding the second element, need to change to array.
      this._events[type] = [this._events[type], listener]; // Check for listener leak

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
          console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
        }

        if (util.isFunction(console.trace)) console.trace();
      }
    }

    return this;
  };

  EventEmitter.prototype.on = EventEmitter.prototype.addListener;

  EventEmitter.prototype.once = function (type, listener) {
    if (!util.isFunction(listener)) throw TypeError('listener must be a function');
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
  }; // emits a 'removeListener' event iff the listener was removed


  EventEmitter.prototype.removeListener = function (type, listener) {
    var list, position, length, i;
    if (!util.isFunction(listener)) throw TypeError('listener must be a function');
    if (!this._events || !this._events[type]) return this;
    list = this._events[type];
    length = list.length;
    position = -1;

    if (list === listener || util.isFunction(list.listener) && list.listener === listener) {
      delete this._events[type];
      if (this._events.removeListener) this.emit('removeListener', type, listener);
    } else if (util.isObject(list)) {
      for (i = length; i-- > 0;) {
        if (list[i] === listener || list[i].listener && list[i].listener === listener) {
          position = i;
          break;
        }
      }

      if (position < 0) return this;

      if (list.length === 1) {
        list.length = 0;
        delete this._events[type];
      } else {
        list.splice(position, 1);
      }

      if (this._events.removeListener) this.emit('removeListener', type, listener);
    }

    return this;
  };

  EventEmitter.prototype.removeAllListeners = function (type) {
    var key, listeners;
    if (!this._events) return this; // not listening for removeListener, no need to emit

    if (!this._events.removeListener) {
      if (arguments.length === 0) this._events = {};else if (this._events[type]) delete this._events[type];
      return this;
    } // emit removeListener for all listeners on all events


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
      while (listeners.length) {
        this.removeListener(type, listeners[listeners.length - 1]);
      }
    }

    delete this._events[type];
    return this;
  };

  EventEmitter.prototype.listeners = function (type) {
    var ret;
    if (!this._events || !this._events[type]) ret = [];else if (util.isFunction(this._events[type])) ret = [this._events[type]];else ret = this._events[type].slice();
    return ret;
  };

  EventEmitter.listenerCount = function (emitter, type) {
    var ret;
    if (!emitter._events || !emitter._events[type]) ret = 0;else if (util.isFunction(emitter._events[type])) ret = 1;else ret = emitter._events[type].length;
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
    var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf'); // Not own constructor property must be Object

    if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
      return false;
    } // Own properties are enumerated firstly, so to speed up,
    // if last one is own, then all properties are own.


    var key;

    for (key in obj) {
      /**/
    }

    return typeof key === 'undefined' || hasOwn.call(obj, key);
  }; // If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target


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
  }; // Return undefined instead of __proto__ if '__proto__' is not an own property


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
    var deep = false; // Handle a deep copy situation

    if (typeof target === 'boolean') {
      deep = target;
      target = arguments[1] || {}; // skip the boolean and the target

      i = 2;
    }

    if (target == null || _typeof(target) !== 'object' && typeof target !== 'function') {
      target = {};
    }

    for (; i < length; ++i) {
      options = arguments[i]; // Only deal with non-null/undefined values

      if (options != null) {
        // Extend the base object
        for (name in options) {
          src = getProperty(target, name);
          copy = getProperty(options, name); // Prevent never-ending loop

          if (target !== copy) {
            // Recurse if we're merging plain objects or arrays
            if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
              if (copyIsArray) {
                copyIsArray = false;
                clone = src && isArray(src) ? src : [];
              } else {
                clone = src && isPlainObject(src) ? src : {};
              } // Never move original objects, clone them


              setProperty(target, {
                name: name,
                newValue: extend(deep, clone, copy)
              }); // Don't bring in undefined values
            } else if (typeof copy !== 'undefined') {
              setProperty(target, {
                name: name,
                newValue: copy
              });
            }
          }
        }
      }
    } // Return the modified object


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
  var scales = [{
    name: "Sequential Gradient",
    translation: "properties.colorScheme.sequential",
    type: "gradient",
    propertyValue: "sg",
    scale: ["#26a0a7", "#c7ea8b"]
  }, {
    name: "Sequential Classes",
    translation: "properties.colorScheme.sequentialC",
    propertyValue: "sc",
    type: "class",
    scale: ["#26a0a7", "#c7ea8b"]
  }, {
    name: "Diverging gradient",
    translation: "properties.colorScheme.diverging",
    propertyValue: "dg",
    type: "gradient",
    scale: ["#26a0a7", "#c3ea8c", "#ec983d"]
  }, {
    name: "Diverging Classes",
    translation: "properties.colorScheme.divergingC",
    propertyValue: "dc",
    type: "class",
    scale: ["#26a0a7", "#c3ea8c", "#ec983d"]
  }];
  var palettes = {
    data: [{
      name: "12 Colors",
      translation: "properties.colorNumberOfColors.12",
      propertyValue: "12",
      type: "pyramid",
      scale: [["#26A0A7"], ["#26A0A7", "#EC983D"], ["#26A0A7", "#CBE989", "#EC983D"], ["#26A0A7", "#79D69F", "#F9EC86", "#EC983D"], ["#26A0A7", "#79D69F", "#CBE989", "#F9EC86", "#EC983D"], ["#26A0A7", "#65D3DA", "#79D69F", "#CBE989", "#F9EC86", "#EC983D"], ["#26A0A7", "#65D3DA", "#79D69F", "#CBE989", "#F9EC86", "#EC983D", "#D76C6C"], ["#26A0A7", "#65D3DA", "#79D69F", "#CBE989", "#F9EC86", "#FAD144", "#EC983D", "#D76C6C"], ["#138185", "#26A0A7", "#65D3DA", "#79D69F", "#CBE989", "#F9EC86", "#FAD144", "#EC983D", "#D76C6C"], ["#138185", "#26A0A7", "#65D3DA", "#79D69F", "#CBE989", "#EBF898", "#F9EC86", "#FAD144", "#EC983D", "#D76C6C"], ["#138185", "#26A0A7", "#65D3DA", "#79D69F", "#CBE989", "#EBF898", "#F9EC86", "#FAD144", "#EC983D", "#D76C6C", "#A54343"], ["#138185", "#26A0A7", "#65D3DA", "#79D69F", "#70BA6E", "#CBE989", "#EBF898", "#F9EC86", "#FAD144", "#EC983D", "#D76C6C", "#A54343"]]
    }],
    ui: [{
      name: "Palette",
      colors: ["#b0afae", "#7b7a78", "#a54343", "#d76c6c", "#ec983d", "#ecc43d", "#f9ec86", "#cbe989", "#70ba6e", "#578b60", "#79d69f", "#26a0a7", "#138185", "#65d3da", "#ffffff", "#000000"]
    }]
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

  function _typeof$1(obj) {
    if (typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol") {
      _typeof$1 = function _typeof$1(obj) {
        return _typeof(obj);
      };
    } else {
      _typeof$1 = function _typeof$1(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof(obj);
      };
    }

    return _typeof$1(obj);
  }

  function _slicedToArray$1(arr, i) {
    return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _nonIterableRest$1();
  }

  function _toConsumableArray$1(arr) {
    return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _nonIterableSpread$1();
  }

  function _arrayWithoutHoles$1(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }
  }

  function _arrayWithHoles$1(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray$1(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _iterableToArrayLimit$1(arr, i) {
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

  function _nonIterableSpread$1() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _nonIterableRest$1() {
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
      if (_typeof$1(objTree[key]) === 'object' && objTree[key] !== null) {
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

    for (var key in definition) {
      prototype[key] = definition[key];
    }

    return prototype;
  }

  function Color() {}

  var _darker = 0.7;

  var _brighter = 1 / _darker;

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
    copy: function copy(channels) {
      return Object.assign(new this.constructor(), this, channels);
    },
    displayable: function displayable() {
      return this.rgb().displayable();
    },
    hex: color_formatHex,
    // Deprecated! Use color.formatHex.
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
    : l === 3 ? new Rgb(m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf, 1) // #f00
    : l === 8 ? new Rgb(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
    : l === 4 ? new Rgb(m >> 12 & 0xf | m >> 8 & 0xf0, m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, ((m & 0xf) << 4 | m & 0xf) / 0xff) // #f000
    : null // invalid hex
    ) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
    : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
    : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
    : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
    : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
    : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
    : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
    : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
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
    if (!o) return new Rgb();
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
    brighter: function brighter(k) {
      k = k == null ? _brighter : Math.pow(_brighter, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker: function darker(k) {
      k = k == null ? _darker : Math.pow(_darker, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb: function rgb() {
      return this;
    },
    displayable: function displayable() {
      return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: rgb_formatHex,
    // Deprecated! Use color.formatHex.
    formatHex: rgb_formatHex,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
  }));

  function rgb_formatHex() {
    return "#" + hex(this.r) + hex(this.g) + hex(this.b);
  }

  function rgb_formatRgb() {
    var a = this.opacity;
    a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a === 1 ? ")" : ", " + a + ")");
  }

  function hex(value) {
    value = Math.max(0, Math.min(255, Math.round(value) || 0));
    return (value < 16 ? "0" : "") + value.toString(16);
  }

  function hsla(h, s, l, a) {
    if (a <= 0) h = s = l = NaN;else if (l <= 0 || l >= 1) h = s = NaN;else if (s <= 0) h = NaN;
    return new Hsl(h, s, l, a);
  }

  function hslConvert(o) {
    if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color)) o = color$2(o);
    if (!o) return new Hsl();
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
      if (r === max) h = (g - b) / s + (g < b) * 6;else if (g === max) h = (b - r) / s + 2;else h = (r - g) / s + 4;
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
    brighter: function brighter(k) {
      k = k == null ? _brighter : Math.pow(_brighter, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function darker(k) {
      k = k == null ? _darker : Math.pow(_darker, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function rgb() {
      var h = this.h % 360 + (this.h < 0) * 360,
          s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
          l = this.l,
          m2 = l + (l < 0.5 ? l : 1 - l) * s,
          m1 = 2 * l - m2;
      return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
    },
    displayable: function displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl: function formatHsl() {
      var a = this.opacity;
      a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
      return (a === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a === 1 ? ")" : ", " + a + ")");
    }
  }));
  /* From FvD 13.37, CSS Color Module Level 3 */

  function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
  }

  function luminance(colStr) {
    var c = color$2(colStr).rgb();
    var r = c.r,
        g = c.g,
        b = c.b; // https://www.w3.org/TR/WCAG20/#relativeluminancedef

    var _map = [r, g, b].map(function (v) {
      return v / 255;
    }),
        _map2 = _slicedToArray$1(_map, 3),
        sR = _map2[0],
        sG = _map2[1],
        sB = _map2[2];

    var _map3 = [sR, sG, sB].map(function (v) {
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    }),
        _map4 = _slicedToArray$1(_map3, 3),
        R = _map4[0],
        G = _map4[1],
        B = _map4[2];

    return +(0.2126 * R + 0.7152 * G + 0.0722 * B).toFixed(5);
  } // https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html#contrast-ratiodef


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
          var c = colors[contrasts.indexOf(Math.max.apply(Math, _toConsumableArray$1(contrasts)))];
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

  var timed = function timed(t, v) {
    return new Promise(function (resolve) {
      return setTimeout(function () {
        return resolve(v);
      }, t);
    });
  };

  var LOAD_THEME_TIMEOUT = 5000;
  function appTheme() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$themes = _ref.themes,
        themes = _ref$themes === void 0 ? [] : _ref$themes,
        logger = _ref.logger,
        root = _ref.root;

    var theme = theme$1();

    var setTheme =
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(themeName) {
        var found, muiTheme, raw;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                found = themes.filter(function (t) {
                  return t.key === themeName;
                })[0];
                muiTheme = themeName === 'dark' ? 'dark' : 'light';

                if (!(found && found.load)) {
                  _context.next = 15;
                  break;
                }

                _context.prev = 3;
                _context.next = 6;
                return Promise.race([found.load(), timed(LOAD_THEME_TIMEOUT, {
                  __timedOut: true
                })]);

              case 6:
                raw = _context.sent;

                if (raw.__timedOut) {
                  logger.warn("Timeout when loading theme '".concat(themeName, "'"));
                } else {
                  muiTheme = raw.type === 'dark' ? 'dark' : 'light';
                  theme.internalAPI.setTheme(raw, themeName);
                  root.setMuiThemeName(muiTheme);
                }

                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](3);
                logger.error(_context.t0);

              case 13:
                _context.next = 17;
                break;

              case 15:
                theme.internalAPI.setTheme({
                  type: muiTheme
                }, themeName);
                root.setMuiThemeName(muiTheme);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 10]]);
      }));

      return function setTheme(_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    return {
      setTheme: setTheme,
      externalAPI: theme.externalAPI
    };
  }

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
  	if (val === null || val === undefined) {
  		throw new TypeError('Object.assign cannot be called with null or undefined');
  	}

  	return Object(val);
  }

  function shouldUseNative() {
  	try {
  		if (!Object.assign) {
  			return false;
  		}

  		// Detect buggy property enumeration order in older V8 versions.

  		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
  		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
  		test1[5] = 'de';
  		if (Object.getOwnPropertyNames(test1)[0] === '5') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test2 = {};
  		for (var i = 0; i < 10; i++) {
  			test2['_' + String.fromCharCode(i)] = i;
  		}
  		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
  			return test2[n];
  		});
  		if (order2.join('') !== '0123456789') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test3 = {};
  		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
  			test3[letter] = letter;
  		});
  		if (Object.keys(Object.assign({}, test3)).join('') !==
  				'abcdefghijklmnopqrst') {
  			return false;
  		}

  		return true;
  	} catch (err) {
  		// We don't expect any of the above to throw, but better to be safe.
  		return false;
  	}
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  	var from;
  	var to = toObject(target);
  	var symbols;

  	for (var s = 1; s < arguments.length; s++) {
  		from = Object(arguments[s]);

  		for (var key in from) {
  			if (hasOwnProperty.call(from, key)) {
  				to[key] = from[key];
  			}
  		}

  		if (getOwnPropertySymbols) {
  			symbols = getOwnPropertySymbols(from);
  			for (var i = 0; i < symbols.length; i++) {
  				if (propIsEnumerable.call(from, symbols[i])) {
  					to[symbols[i]] = from[symbols[i]];
  				}
  			}
  		}
  	}

  	return to;
  };

  var n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113;var z=n?Symbol.for("react.memo"):60115,aa=n?Symbol.for("react.lazy"):60116;var A="function"===typeof Symbol&&Symbol.iterator;
  function B(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var C={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D={};
  function E(a,b,c){this.props=a;this.context=b;this.refs=D;this.updater=c||C;}E.prototype.isReactComponent={};E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(B(85));this.updater.enqueueSetState(this,a,b,"setState");};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E.prototype;function G(a,b,c){this.props=a;this.context=b;this.refs=D;this.updater=c||C;}var H=G.prototype=new F;
  H.constructor=G;objectAssign(H,E.prototype);H.isPureReactComponent=!0;var I={current:null},J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
  function M(a,b,c){var e,d={},g=null,l=null;if(null!=b)for(e in void 0!==b.ref&&(l=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var k=Array(f),m=0;m<f;m++)k[m]=arguments[m+2];d.children=k;}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return {$$typeof:p,type:a,key:g,ref:l,props:d,_owner:J.current}}
  function ba(a,b){return {$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return "object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return "$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,c,e){if(P.length){var d=P.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return {result:a,keyPrefix:b,func:c,context:e,count:0}}
  function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a);}
  function S(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0;}}if(g)return c(e,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var l=0;l<a.length;l++){d=a[l];var f=b+T(d,l);g+=S(d,f,c,e);}else if(null===a||"object"!==typeof a?f=null:(f=A&&a[A]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),l=
  0;!(d=a.next()).done;)d=d.value,f=b+T(d,l++),g+=S(d,f,c,e);else if("object"===d)throw c=""+a,Error(B(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function U(a,b,c){return null==a?0:S(a,"",b,c)}function T(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function ca(a,b){a.func.call(a.context,b,a.count++);}
  function da(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,e,c,function(a){return a}):null!=a&&(N(a)&&(a=ba(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+c)),e.push(a));}function V(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(O,"$&/")+"/");b=Q(b,g,e,d);U(a,da,b);R(b);}function W(){var a=I.current;if(null===a)throw Error(B(321));return a}
  var X={Children:{map:function(a,b,c){if(null==a)return a;var e=[];V(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=Q(null,null,b,c);U(a,ca,b);R(b);},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];V(a,b,null,function(a){return a});return b},only:function(a){if(!N(a))throw Error(B(143));return a}},createRef:function(){return {current:null}},Component:E,PureComponent:G,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
  _currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a},forwardRef:function(a){return {$$typeof:x,render:a}},lazy:function(a){return {$$typeof:aa,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return {$$typeof:z,type:a,compare:void 0===b?null:b}},useCallback:function(a,b){return W().useCallback(a,b)},useContext:function(a,b){return W().useContext(a,b)},useEffect:function(a,b){return W().useEffect(a,b)},useImperativeHandle:function(a,
  b,c){return W().useImperativeHandle(a,b,c)},useDebugValue:function(){},useLayoutEffect:function(a,b){return W().useLayoutEffect(a,b)},useMemo:function(a,b){return W().useMemo(a,b)},useReducer:function(a,b,c){return W().useReducer(a,b,c)},useRef:function(a){return W().useRef(a)},useState:function(a){return W().useState(a)},Fragment:r,Profiler:u,StrictMode:t,Suspense:y,createElement:M,cloneElement:function(a,b,c){if(null===a||void 0===a)throw Error(B(267,a));var e=objectAssign({},a.props),d=a.key,g=a.ref,l=a._owner;
  if(null!=b){void 0!==b.ref&&(g=b.ref,l=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(k in b)K.call(b,k)&&!L.hasOwnProperty(k)&&(e[k]=void 0===b[k]&&void 0!==f?f[k]:b[k]);}var k=arguments.length-2;if(1===k)e.children=c;else if(1<k){f=Array(k);for(var m=0;m<k;m++)f[m]=arguments[m+2];e.children=f;}return {$$typeof:p,type:a.type,key:d,ref:g,props:e,_owner:l}},createFactory:function(a){var b=M.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.12.0",
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:I,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:objectAssign}},Y={default:X},Z=Y&&X||Y;var react_production_min=Z.default||Z;

  var react = createCommonjsModule(function (module) {

  {
    module.exports = react_production_min;
  }
  });
  var react_1 = react.useState;
  var react_2 = react.useEffect;
  var react_3 = react.useLayoutEffect;
  var react_4 = react.useRef;
  var react_5 = react.useReducer;
  var react_6 = react.useImperativeHandle;
  var react_7 = react.forwardRef;
  var react_8 = react.useContext;
  var react_9 = react.useCallback;
  var react_10 = react.useMemo;
  var react_11 = react.createElement;
  var react_12 = react.PureComponent;
  var react_13 = react.isValidElement;
  var react_14 = react.Children;
  var react_15 = react.cloneElement;

  var scheduler_production_min = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports,"__esModule",{value:!0});var f,g,h,k,l;
  if("undefined"===typeof window||"function"!==typeof MessageChannel){var p=null,q=null,t=function(){if(null!==p)try{var a=exports.unstable_now();p(!0,a);p=null;}catch(b){throw setTimeout(t,0),b;}},u=Date.now();exports.unstable_now=function(){return Date.now()-u};f=function(a){null!==p?setTimeout(f,0,a):(p=a,setTimeout(t,0));};g=function(a,b){q=setTimeout(a,b);};h=function(){clearTimeout(q);};k=function(){return !1};l=exports.unstable_forceFrameRate=function(){};}else{var w=window.performance,x=window.Date,
  y=window.setTimeout,z=window.clearTimeout;if("undefined"!==typeof console){var A=window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");"function"!==typeof A&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");}if("object"===
  typeof w&&"function"===typeof w.now)exports.unstable_now=function(){return w.now()};else{var B=x.now();exports.unstable_now=function(){return x.now()-B};}var C=!1,D=null,E=-1,F=5,G=0;k=function(){return exports.unstable_now()>=G};l=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):F=0<a?Math.floor(1E3/a):5;};var H=new MessageChannel,I=H.port2;H.port1.onmessage=
  function(){if(null!==D){var a=exports.unstable_now();G=a+F;try{D(!0,a)?I.postMessage(null):(C=!1,D=null);}catch(b){throw I.postMessage(null),b;}}else C=!1;};f=function(a){D=a;C||(C=!0,I.postMessage(null));};g=function(a,b){E=y(function(){a(exports.unstable_now());},b);};h=function(){z(E);E=-1;};}function J(a,b){var c=a.length;a.push(b);a:for(;;){var d=Math.floor((c-1)/2),e=a[d];if(void 0!==e&&0<K(e,b))a[d]=b,a[c]=e,c=d;else break a}}function L(a){a=a[0];return void 0===a?null:a}
  function M(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>K(n,c))void 0!==r&&0>K(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>K(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function K(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var N=[],O=[],P=1,Q=null,R=3,S=!1,T=!1,U=!1;
  function V(a){for(var b=L(O);null!==b;){if(null===b.callback)M(O);else if(b.startTime<=a)M(O),b.sortIndex=b.expirationTime,J(N,b);else break;b=L(O);}}function W(a){U=!1;V(a);if(!T)if(null!==L(N))T=!0,f(X);else{var b=L(O);null!==b&&g(W,b.startTime-a);}}
  function X(a,b){T=!1;U&&(U=!1,h());S=!0;var c=R;try{V(b);for(Q=L(N);null!==Q&&(!(Q.expirationTime>b)||a&&!k());){var d=Q.callback;if(null!==d){Q.callback=null;R=Q.priorityLevel;var e=d(Q.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?Q.callback=e:Q===L(N)&&M(N);V(b);}else M(N);Q=L(N);}if(null!==Q)var m=!0;else{var n=L(O);null!==n&&g(W,n.startTime-b);m=!1;}return m}finally{Q=null,R=c,S=!1;}}
  function Y(a){switch(a){case 1:return -1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}var Z=l;exports.unstable_ImmediatePriority=1;exports.unstable_UserBlockingPriority=2;exports.unstable_NormalPriority=3;exports.unstable_IdlePriority=5;exports.unstable_LowPriority=4;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=R;R=a;try{return b()}finally{R=c;}};
  exports.unstable_next=function(a){switch(R){case 1:case 2:case 3:var b=3;break;default:b=R;}var c=R;R=b;try{return a()}finally{R=c;}};
  exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();if("object"===typeof c&&null!==c){var e=c.delay;e="number"===typeof e&&0<e?d+e:d;c="number"===typeof c.timeout?c.timeout:Y(a);}else c=Y(a),e=d;c=e+c;a={id:P++,callback:b,priorityLevel:a,startTime:e,expirationTime:c,sortIndex:-1};e>d?(a.sortIndex=e,J(O,a),null===L(N)&&a===L(O)&&(U?h():U=!0,g(W,e-d))):(a.sortIndex=c,J(N,a),T||S||(T=!0,f(X)));return a};exports.unstable_cancelCallback=function(a){a.callback=null;};
  exports.unstable_wrapCallback=function(a){var b=R;return function(){var c=R;R=b;try{return a.apply(this,arguments)}finally{R=c;}}};exports.unstable_getCurrentPriorityLevel=function(){return R};exports.unstable_shouldYield=function(){var a=exports.unstable_now();V(a);var b=L(N);return b!==Q&&null!==Q&&null!==b&&null!==b.callback&&b.startTime<=a&&b.expirationTime<Q.expirationTime||k()};exports.unstable_requestPaint=Z;exports.unstable_continueExecution=function(){T||S||(T=!0,f(X));};
  exports.unstable_pauseExecution=function(){};exports.unstable_getFirstCallbackNode=function(){return L(N)};exports.unstable_Profiling=null;
  });

  unwrapExports(scheduler_production_min);
  var scheduler_production_min_1 = scheduler_production_min.unstable_now;
  var scheduler_production_min_2 = scheduler_production_min.unstable_forceFrameRate;
  var scheduler_production_min_3 = scheduler_production_min.unstable_ImmediatePriority;
  var scheduler_production_min_4 = scheduler_production_min.unstable_UserBlockingPriority;
  var scheduler_production_min_5 = scheduler_production_min.unstable_NormalPriority;
  var scheduler_production_min_6 = scheduler_production_min.unstable_IdlePriority;
  var scheduler_production_min_7 = scheduler_production_min.unstable_LowPriority;
  var scheduler_production_min_8 = scheduler_production_min.unstable_runWithPriority;
  var scheduler_production_min_9 = scheduler_production_min.unstable_next;
  var scheduler_production_min_10 = scheduler_production_min.unstable_scheduleCallback;
  var scheduler_production_min_11 = scheduler_production_min.unstable_cancelCallback;
  var scheduler_production_min_12 = scheduler_production_min.unstable_wrapCallback;
  var scheduler_production_min_13 = scheduler_production_min.unstable_getCurrentPriorityLevel;
  var scheduler_production_min_14 = scheduler_production_min.unstable_shouldYield;
  var scheduler_production_min_15 = scheduler_production_min.unstable_requestPaint;
  var scheduler_production_min_16 = scheduler_production_min.unstable_continueExecution;
  var scheduler_production_min_17 = scheduler_production_min.unstable_pauseExecution;
  var scheduler_production_min_18 = scheduler_production_min.unstable_getFirstCallbackNode;
  var scheduler_production_min_19 = scheduler_production_min.unstable_Profiling;

  var scheduler = createCommonjsModule(function (module) {

  {
    module.exports = scheduler_production_min;
  }
  });

  function u$1(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!react)throw Error(u$1(227));var ba$1=null,ca$1={};
  function da$1(){if(ba$1)for(var a in ca$1){var b=ca$1[a],c=ba$1.indexOf(a);if(!(-1<c))throw Error(u$1(96,a));if(!ea[c]){if(!b.extractEvents)throw Error(u$1(97,a));ea[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;if(fa.hasOwnProperty(h))throw Error(u$1(99,h));fa[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ha(k[e],g,h);e=!0;}else f.registrationName?(ha(f.registrationName,g,h),e=!0):e=!1;if(!e)throw Error(u$1(98,d,a));}}}}
  function ha(a,b,c){if(ia[a])throw Error(u$1(100,a));ia[a]=b;ja[a]=b.eventTypes[c].dependencies;}var ea=[],fa={},ia={},ja={};function ka(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l);}catch(m){this.onError(m);}}var la=!1,ma=null,na=!1,oa=null,pa={onError:function(a){la=!0;ma=a;}};function qa(a,b,c,d,e,f,g,h,k){la=!1;ma=null;ka.apply(pa,arguments);}
  function ra(a,b,c,d,e,f,g,h,k){qa.apply(this,arguments);if(la){if(la){var l=ma;la=!1;ma=null;}else throw Error(u$1(198));na||(na=!0,oa=l);}}var sa=null,ua=null,va=null;function wa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=va(c);ra(d,b,void 0,a);a.currentTarget=null;}function xa(a,b){if(null==b)throw Error(u$1(30));if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
  function ya(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a);}var za=null;function Aa(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)wa(a,b[d],c[d]);else b&&wa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a);}}function Ba(a){null!==a&&(za=xa(za,a));a=za;za=null;if(a){ya(a,Aa);if(za)throw Error(u$1(95));if(na)throw a=oa,na=!1,oa=null,a;}}
  var Ca={injectEventPluginOrder:function(a){if(ba$1)throw Error(u$1(101));ba$1=Array.prototype.slice.call(a);da$1();},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!ca$1.hasOwnProperty(c)||ca$1[c]!==d){if(ca$1[c])throw Error(u$1(102,c));ca$1[c]=d;b=!0;}}b&&da$1();}};
  function Da(a,b){var c=a.stateNode;if(!c)return null;var d=sa(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1;}if(a)return null;if(c&&"function"!==typeof c)throw Error(u$1(231,b,typeof c));
  return c}var Ea=react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Ea.hasOwnProperty("ReactCurrentDispatcher")||(Ea.ReactCurrentDispatcher={current:null});Ea.hasOwnProperty("ReactCurrentBatchConfig")||(Ea.ReactCurrentBatchConfig={suspense:null});
  var Fa=/^(.*)[\\\/]/,w$1="function"===typeof Symbol&&Symbol.for,Ga=w$1?Symbol.for("react.element"):60103,Ha=w$1?Symbol.for("react.portal"):60106,Ia=w$1?Symbol.for("react.fragment"):60107,Ja=w$1?Symbol.for("react.strict_mode"):60108,Ka=w$1?Symbol.for("react.profiler"):60114,La=w$1?Symbol.for("react.provider"):60109,Ma=w$1?Symbol.for("react.context"):60110,Na=w$1?Symbol.for("react.concurrent_mode"):60111,Oa=w$1?Symbol.for("react.forward_ref"):60112,Pa=w$1?Symbol.for("react.suspense"):60113,Qa=w$1?Symbol.for("react.suspense_list"):
  60120,Ra=w$1?Symbol.for("react.memo"):60115,Sa=w$1?Symbol.for("react.lazy"):60116;var Ta="function"===typeof Symbol&&Symbol.iterator;function Ua(a){if(null===a||"object"!==typeof a)return null;a=Ta&&a[Ta]||a["@@iterator"];return "function"===typeof a?a:null}
  function Va(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b);},function(b){0===a._status&&(a._status=2,a._result=b);});}}
  function Wa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case Ia:return "Fragment";case Ha:return "Portal";case Ka:return "Profiler";case Ja:return "StrictMode";case Pa:return "Suspense";case Qa:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ma:return "Context.Consumer";case La:return "Context.Provider";case Oa:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":
  "ForwardRef");case Ra:return Wa(a.type);case Sa:if(a=1===a._status?a._result:null)return Wa(a)}return null}function Xa(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=Wa(a.type);c=null;d&&(c=Wa(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Fa,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f;}b+=c;a=a.return;}while(a);return b}
  var Ya=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Za=null,$a=null,ab=null;function bb(a){if(a=ua(a)){if("function"!==typeof Za)throw Error(u$1(280));var b=sa(a.stateNode);Za(a.stateNode,a.type,b);}}function cb(a){$a?ab?ab.push(a):ab=[a]:$a=a;}function db(){if($a){var a=$a,b=ab;ab=$a=null;bb(a);if(b)for(a=0;a<b.length;a++)bb(b[a]);}}function eb(a,b){return a(b)}function fb(a,b,c,d){return a(b,c,d)}function gb(){}
  var hb=eb,ib=!1,jb=!1;function kb(){if(null!==$a||null!==ab)gb(),db();}var lb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mb=Object.prototype.hasOwnProperty,nb={},ob={};
  function pb(a){if(mb.call(ob,a))return !0;if(mb.call(nb,a))return !1;if(lb.test(a))return ob[a]=!0;nb[a]=!0;return !1}function qb(a,b,c,d){if(null!==c&&0===c.type)return !1;switch(typeof b){case "function":case "symbol":return !0;case "boolean":if(d)return !1;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return !1}}
  function rb(a,b,c,d){if(null===b||"undefined"===typeof b||qb(a,b,c,d))return !0;if(d)return !1;if(null!==c)switch(c.type){case 3:return !b;case 4:return !1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return !1}function B$1(a,b,c,d,e,f){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;}var D$1={};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D$1[a]=new B$1(a,0,!1,a,null,!1);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D$1[b]=new B$1(b,1,!1,a[1],null,!1);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D$1[a]=new B$1(a,2,!1,a.toLowerCase(),null,!1);});
  ["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D$1[a]=new B$1(a,2,!1,a,null,!1);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D$1[a]=new B$1(a,3,!1,a.toLowerCase(),null,!1);});
  ["checked","multiple","muted","selected"].forEach(function(a){D$1[a]=new B$1(a,3,!0,a,null,!1);});["capture","download"].forEach(function(a){D$1[a]=new B$1(a,4,!1,a,null,!1);});["cols","rows","size","span"].forEach(function(a){D$1[a]=new B$1(a,6,!1,a,null,!1);});["rowSpan","start"].forEach(function(a){D$1[a]=new B$1(a,5,!1,a.toLowerCase(),null,!1);});var sb=/[\-:]([a-z])/g;function tb(a){return a[1].toUpperCase()}
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(sb,
  tb);D$1[b]=new B$1(b,1,!1,a,null,!1);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(sb,tb);D$1[b]=new B$1(b,1,!1,a,"http://www.w3.org/1999/xlink",!1);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(sb,tb);D$1[b]=new B$1(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1);});["tabIndex","crossOrigin"].forEach(function(a){D$1[a]=new B$1(a,1,!1,a.toLowerCase(),null,!1);});
  D$1.xlinkHref=new B$1("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){D$1[a]=new B$1(a,1,!1,a.toLowerCase(),null,!0);});function ub(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return ""}}
  function vb(a,b,c,d){var e=D$1.hasOwnProperty(b)?D$1[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(rb(b,c,e,d)&&(c=null),d||null===e?pb(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))));}
  function wb(a){var b=a.type;return (a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
  function xb(a){var b=wb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a);}});Object.defineProperty(a,b,{enumerable:c.enumerable});return {getValue:function(){return d},setValue:function(a){d=""+a;},stopTracking:function(){a._valueTracker=
  null;delete a[b];}}}}function yb(a){a._valueTracker||(a._valueTracker=xb(a));}function zb(a){if(!a)return !1;var b=a._valueTracker;if(!b)return !0;var c=b.getValue();var d="";a&&(d=wb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Ab(a,b){var c=b.checked;return objectAssign({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
  function Bb(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=ub(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value};}function Cb(a,b){b=b.checked;null!=b&&vb(a,"checked",b,!1);}
  function Eb(a,b){Cb(a,b);var c=ub(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c;}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Fb(a,b.type,c):b.hasOwnProperty("defaultValue")&&Fb(a,b.type,ub(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked);}
  function Gb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b;}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c);}
  function Fb(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c);}function Hb(a){var b="";react.Children.forEach(a,function(a){null!=a&&(b+=a);});return b}function Ib(a,b){a=objectAssign({children:void 0},b);if(b=Hb(b.children))a.children=b;return a}
  function Jb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0);}else{c=""+ub(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e]);}null!==b&&(b.selected=!0);}}
  function Kb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(u$1(91));return objectAssign({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Lb(a,b){var c=b.value;if(null==c){c=b.defaultValue;b=b.children;if(null!=b){if(null!=c)throw Error(u$1(92));if(Array.isArray(b)){if(!(1>=b.length))throw Error(u$1(93));b=b[0];}c=b;}null==c&&(c="");}a._wrapperState={initialValue:ub(c)};}
  function Mb(a,b){var c=ub(b.value),d=ub(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d);}function Nb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b);}var Ob={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
  function Pb(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}function Qb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Pb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
  var Rb,Sb=function(a){return "undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)});}:a}(function(a,b){if(a.namespaceURI!==Ob.svg||"innerHTML"in a)a.innerHTML=b;else{Rb=Rb||document.createElement("div");Rb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=Rb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild);}});
  function Tb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b;}function Ub(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Vb={animationend:Ub("Animation","AnimationEnd"),animationiteration:Ub("Animation","AnimationIteration"),animationstart:Ub("Animation","AnimationStart"),transitionend:Ub("Transition","TransitionEnd")},Wb={},Xb={};
  Ya&&(Xb=document.createElement("div").style,"AnimationEvent"in window||(delete Vb.animationend.animation,delete Vb.animationiteration.animation,delete Vb.animationstart.animation),"TransitionEvent"in window||delete Vb.transitionend.transition);function Yb(a){if(Wb[a])return Wb[a];if(!Vb[a])return a;var b=Vb[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Xb)return Wb[a]=b[c];return a}var Zb=Yb("animationend"),$b=Yb("animationiteration"),ac=Yb("animationstart"),bc=Yb("transitionend"),cc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
  function ec(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.effectTag&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function fc(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function gc(a){if(ec(a)!==a)throw Error(u$1(188));}
  function hc(a){var b=a.alternate;if(!b){b=ec(a);if(null===b)throw Error(u$1(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return gc(e),a;if(f===d)return gc(e),b;f=f.sibling;}throw Error(u$1(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling;}if(!g){for(h=f.child;h;){if(h===
  c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling;}if(!g)throw Error(u$1(189));}}if(c.alternate!==d)throw Error(u$1(190));}if(3!==c.tag)throw Error(u$1(188));return c.stateNode.current===c?a:b}function ic(a){a=hc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return null}
  var jc,kc,lc,mc=!1,nc=[],oc=null,pc=null,qc=null,rc=new Map,sc=new Map,tc=[],uc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),vc="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
  function wc(a){var b=xc(a);uc.forEach(function(c){yc(c,a,b);});vc.forEach(function(c){yc(c,a,b);});}function zc(a,b,c,d){return {blockedOn:a,topLevelType:b,eventSystemFlags:c|32,nativeEvent:d}}function Ac(a,b){switch(a){case "focus":case "blur":oc=null;break;case "dragenter":case "dragleave":pc=null;break;case "mouseover":case "mouseout":qc=null;break;case "pointerover":case "pointerout":rc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":sc.delete(b.pointerId);}}
  function Bc(a,b,c,d,e){if(null===a||a.nativeEvent!==e)return a=zc(b,c,d,e),null!==b&&(b=Cc(b),null!==b&&kc(b)),a;a.eventSystemFlags|=d;return a}function Dc(a,b,c,d){switch(b){case "focus":return oc=Bc(oc,a,b,c,d),!0;case "dragenter":return pc=Bc(pc,a,b,c,d),!0;case "mouseover":return qc=Bc(qc,a,b,c,d),!0;case "pointerover":var e=d.pointerId;rc.set(e,Bc(rc.get(e)||null,a,b,c,d));return !0;case "gotpointercapture":return e=d.pointerId,sc.set(e,Bc(sc.get(e)||null,a,b,c,d)),!0}return !1}
  function Ec(a){var b=Fc(a.target);if(null!==b){var c=ec(b);if(null!==c)if(b=c.tag,13===b){if(b=fc(c),null!==b){a.blockedOn=b;scheduler.unstable_runWithPriority(a.priority,function(){lc(c);});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null;}function Gc(a){if(null!==a.blockedOn)return !1;var b=Hc(a.topLevelType,a.eventSystemFlags,a.nativeEvent);if(null!==b){var c=Cc(b);null!==c&&kc(c);a.blockedOn=b;return !1}return !0}
  function Ic(a,b,c){Gc(a)&&c.delete(b);}function Jc(){for(mc=!1;0<nc.length;){var a=nc[0];if(null!==a.blockedOn){a=Cc(a.blockedOn);null!==a&&jc(a);break}var b=Hc(a.topLevelType,a.eventSystemFlags,a.nativeEvent);null!==b?a.blockedOn=b:nc.shift();}null!==oc&&Gc(oc)&&(oc=null);null!==pc&&Gc(pc)&&(pc=null);null!==qc&&Gc(qc)&&(qc=null);rc.forEach(Ic);sc.forEach(Ic);}function Kc(a,b){a.blockedOn===b&&(a.blockedOn=null,mc||(mc=!0,scheduler.unstable_scheduleCallback(scheduler.unstable_NormalPriority,Jc)));}
  function Lc(a){function b(b){return Kc(b,a)}if(0<nc.length){Kc(nc[0],a);for(var c=1;c<nc.length;c++){var d=nc[c];d.blockedOn===a&&(d.blockedOn=null);}}null!==oc&&Kc(oc,a);null!==pc&&Kc(pc,a);null!==qc&&Kc(qc,a);rc.forEach(b);sc.forEach(b);for(c=0;c<tc.length;c++)d=tc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<tc.length&&(c=tc[0],null===c.blockedOn);)Ec(c),null===c.blockedOn&&tc.shift();}
  function Mc(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function Nc(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function Oc(a,b,c){if(b=Da(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a);}
  function Pc(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Nc(b);for(b=c.length;0<b--;)Oc(c[b],"captured",a);for(b=0;b<c.length;b++)Oc(c[b],"bubbled",a);}}function Qc(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Da(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a));}function Rc(a){a&&a.dispatchConfig.registrationName&&Qc(a._targetInst,null,a);}
  function Sc(a){ya(a,Pc);}function Tc(){return !0}function Uc(){return !1}function E$1(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?Tc:Uc;this.isPropagationStopped=Uc;return this}
  objectAssign(E$1.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=Tc);},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=Tc);},persist:function(){this.isPersistent=Tc;},isPersistent:Uc,destructor:function(){var a=this.constructor.Interface,
  b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=Uc;this._dispatchInstances=this._dispatchListeners=null;}});E$1.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
  E$1.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;objectAssign(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=objectAssign({},d.Interface,a);c.extend=d.extend;Vc(c);return c};Vc(E$1);function Wc(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}
  function Xc(a){if(!(a instanceof this))throw Error(u$1(279));a.destructor();10>this.eventPool.length&&this.eventPool.push(a);}function Vc(a){a.eventPool=[];a.getPooled=Wc;a.release=Xc;}var Yc=E$1.extend({animationName:null,elapsedTime:null,pseudoElement:null}),Zc=E$1.extend({clipboardData:function(a){return "clipboardData"in a?a.clipboardData:window.clipboardData}}),$c=E$1.extend({view:null,detail:null}),ad=$c.extend({relatedTarget:null});
  function bd(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
  var cd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
  116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ed={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=ed[a])?!!b[a]:!1}function hd(){return gd}
  var id=$c.extend({key:function(a){if(a.key){var b=cd[a.key]||a.key;if("Unidentified"!==b)return b}return "keypress"===a.type?(a=bd(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?dd[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:hd,charCode:function(a){return "keypress"===a.type?bd(a):0},keyCode:function(a){return "keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return "keypress"===
  a.type?bd(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),jd=0,kd=0,ld=!1,md=!1,nd=$c.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:hd,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=jd;jd=a.screenX;return ld?"mousemove"===a.type?a.screenX-
  b:0:(ld=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;var b=kd;kd=a.screenY;return md?"mousemove"===a.type?a.screenY-b:0:(md=!0,0)}}),od=nd.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),pd=nd.extend({dataTransfer:null}),qd=$c.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:hd}),rd=E$1.extend({propertyName:null,
  elapsedTime:null,pseudoElement:null}),sd=nd.extend({deltaX:function(a){return "deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return "deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),td=[["blur","blur",0],["cancel","cancel",0],["click","click",0],["close","close",0],["contextmenu","contextMenu",0],["copy","copy",0],["cut","cut",0],["auxclick","auxClick",0],["dblclick","doubleClick",0],["dragend","dragEnd",
  0],["dragstart","dragStart",0],["drop","drop",0],["focus","focus",0],["input","input",0],["invalid","invalid",0],["keydown","keyDown",0],["keypress","keyPress",0],["keyup","keyUp",0],["mousedown","mouseDown",0],["mouseup","mouseUp",0],["paste","paste",0],["pause","pause",0],["play","play",0],["pointercancel","pointerCancel",0],["pointerdown","pointerDown",0],["pointerup","pointerUp",0],["ratechange","rateChange",0],["reset","reset",0],["seeked","seeked",0],["submit","submit",0],["touchcancel","touchCancel",
  0],["touchend","touchEnd",0],["touchstart","touchStart",0],["volumechange","volumeChange",0],["drag","drag",1],["dragenter","dragEnter",1],["dragexit","dragExit",1],["dragleave","dragLeave",1],["dragover","dragOver",1],["mousemove","mouseMove",1],["mouseout","mouseOut",1],["mouseover","mouseOver",1],["pointermove","pointerMove",1],["pointerout","pointerOut",1],["pointerover","pointerOver",1],["scroll","scroll",1],["toggle","toggle",1],["touchmove","touchMove",1],["wheel","wheel",1],["abort","abort",
  2],[Zb,"animationEnd",2],[$b,"animationIteration",2],[ac,"animationStart",2],["canplay","canPlay",2],["canplaythrough","canPlayThrough",2],["durationchange","durationChange",2],["emptied","emptied",2],["encrypted","encrypted",2],["ended","ended",2],["error","error",2],["gotpointercapture","gotPointerCapture",2],["load","load",2],["loadeddata","loadedData",2],["loadedmetadata","loadedMetadata",2],["loadstart","loadStart",2],["lostpointercapture","lostPointerCapture",2],["playing","playing",2],["progress",
  "progress",2],["seeking","seeking",2],["stalled","stalled",2],["suspend","suspend",2],["timeupdate","timeUpdate",2],[bc,"transitionEnd",2],["waiting","waiting",2]],ud={},vd={},wd=0;for(;wd<td.length;wd++){var yd=td[wd],zd=yd[0],Ad=yd[1],Bd=yd[2],Cd="on"+(Ad[0].toUpperCase()+Ad.slice(1)),Dd={phasedRegistrationNames:{bubbled:Cd,captured:Cd+"Capture"},dependencies:[zd],eventPriority:Bd};ud[Ad]=Dd;vd[zd]=Dd;}
  var Ed={eventTypes:ud,getEventPriority:function(a){a=vd[a];return void 0!==a?a.eventPriority:2},extractEvents:function(a,b,c,d){var e=vd[a];if(!e)return null;switch(a){case "keypress":if(0===bd(c))return null;case "keydown":case "keyup":a=id;break;case "blur":case "focus":a=ad;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=nd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
  pd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=qd;break;case Zb:case $b:case ac:a=Yc;break;case bc:a=rd;break;case "scroll":a=$c;break;case "wheel":a=sd;break;case "copy":case "cut":case "paste":a=Zc;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=od;break;default:a=E$1;}b=a.getPooled(e,b,c,d);Sc(b);return b}},Fd=scheduler.unstable_UserBlockingPriority,
  Gd=scheduler.unstable_runWithPriority,Hd=Ed.getEventPriority,Id=10,Jd=[];
  function Kd(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d=c;if(3===d.tag)d=d.stateNode.containerInfo;else{for(;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo;}if(!d)break;b=c.tag;5!==b&&6!==b||a.ancestors.push(c);c=Fc(d);}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=Mc(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,g=a.eventSystemFlags,h=null,k=0;k<ea.length;k++){var l=ea[k];l&&(l=l.extractEvents(d,b,f,e,g))&&(h=xa(h,l));}Ba(h);}}
  var Ld=!0;function F$1(a,b){Md(b,a,!1);}function Md(a,b,c){switch(Hd(b)){case 0:var d=Nd.bind(null,b,1);break;case 1:d=Od.bind(null,b,1);break;default:d=Pd.bind(null,b,1);}c?a.addEventListener(b,d,!0):a.addEventListener(b,d,!1);}function Nd(a,b,c){ib||gb();var d=Pd,e=ib;ib=!0;try{fb(d,a,b,c);}finally{(ib=e)||kb();}}function Od(a,b,c){Gd(Fd,Pd.bind(null,a,b,c));}
  function Qd(a,b,c,d){if(Jd.length){var e=Jd.pop();e.topLevelType=a;e.eventSystemFlags=b;e.nativeEvent=c;e.targetInst=d;a=e;}else a={topLevelType:a,eventSystemFlags:b,nativeEvent:c,targetInst:d,ancestors:[]};try{if(b=Kd,c=a,jb)b(c,void 0);else{jb=!0;try{hb(b,c,void 0);}finally{jb=!1,kb();}}}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,Jd.length<Id&&Jd.push(a);}}
  function Pd(a,b,c){if(Ld)if(0<nc.length&&-1<uc.indexOf(a))a=zc(null,a,b,c),nc.push(a);else{var d=Hc(a,b,c);null===d?Ac(a,c):-1<uc.indexOf(a)?(a=zc(d,a,b,c),nc.push(a)):Dc(d,a,b,c)||(Ac(a,c),Qd(a,b,c,null));}}function Hc(a,b,c){var d=Mc(c);d=Fc(d);if(null!==d){var e=ec(d);if(null===e)d=null;else{var f=e.tag;if(13===f){d=fc(e);if(null!==d)return d;d=null;}else if(3===f){if(e.stateNode.hydrate)return 3===e.tag?e.stateNode.containerInfo:null;d=null;}else e!==d&&(d=null);}}Qd(a,b,c,d);return null}
  function Rd(a){if(!Ya)return !1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}var Sd=new ("function"===typeof WeakMap?WeakMap:Map);function xc(a){var b=Sd.get(a);void 0===b&&(b=new Set,Sd.set(a,b));return b}
  function yc(a,b,c){if(!c.has(a)){switch(a){case "scroll":Md(b,"scroll",!0);break;case "focus":case "blur":Md(b,"focus",!0);Md(b,"blur",!0);c.add("blur");c.add("focus");break;case "cancel":case "close":Rd(a)&&Md(b,a,!0);break;case "invalid":case "submit":case "reset":break;default:-1===cc.indexOf(a)&&F$1(a,b);}c.add(a);}}
  var Td={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
  floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ud=["Webkit","ms","Moz","O"];Object.keys(Td).forEach(function(a){Ud.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Td[b]=Td[a];});});function Vd(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||Td.hasOwnProperty(a)&&Td[a]?(""+b).trim():b+"px"}
  function Wd(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=Vd(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e;}}var Xd=objectAssign({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
  function Yd(a,b){if(b){if(Xd[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(u$1(137,a,""));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(u$1(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(u$1(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(u$1(62,""));}}
  function Zd(a,b){if(-1===a.indexOf("-"))return "string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return !1;default:return !0}}function $d(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=xc(a);b=ja[b];for(var d=0;d<b.length;d++)yc(b[d],a,c);}function ae(){}
  function be(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function ce(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function de(a,b){var c=ce(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return {node:c,offset:b-a};a=d;}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode;}c=void 0;}c=ce(c);}}
  function ee(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?ee(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function fe(){for(var a=window,b=be();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href;}catch(d){c=!1;}if(c)a=b.contentWindow;else break;b=be(a.document);}return b}
  function ge(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}var he="$",ie="/$",je="$?",ke="$!",le=null,me=null;function ne(a,b){switch(a){case "button":case "input":case "select":case "textarea":return !!b.autoFocus}return !1}
  function oe(a,b){return "textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var pe="function"===typeof setTimeout?setTimeout:void 0,qe="function"===typeof clearTimeout?clearTimeout:void 0;function re(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}
  function se(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if(c===he||c===ke||c===je){if(0===b)return a;b--;}else c===ie&&b++;}a=a.previousSibling;}return null}var te=Math.random().toString(36).slice(2),ue="__reactInternalInstance$"+te,ve="__reactEventHandlers$"+te,we="__reactContainere$"+te;
  function Fc(a){var b=a[ue];if(b)return b;for(var c=a.parentNode;c;){if(b=c[we]||c[ue]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=se(a);null!==a;){if(c=a[ue])return c;a=se(a);}return b}a=c;c=a.parentNode;}return null}function Cc(a){a=a[ue]||a[we];return !a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function xe(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(u$1(33));}function ye(a){return a[ve]||null}var ze=null,Ae=null,Be=null;
  function Ce(){if(Be)return Be;var a,b=Ae,c=b.length,d,e="value"in ze?ze.value:ze.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return Be=e.slice(a,1<d?1-d:void 0)}var De=E$1.extend({data:null}),Ee=E$1.extend({data:null}),Fe=[9,13,27,32],Ge=Ya&&"CompositionEvent"in window,He=null;Ya&&"documentMode"in document&&(He=document.documentMode);
  var Ie=Ya&&"TextEvent"in window&&!He,Je=Ya&&(!Ge||He&&8<He&&11>=He),Ke=String.fromCharCode(32),Le={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
  captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},Me=!1;
  function Ne(a,b){switch(a){case "keyup":return -1!==Fe.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return !0;default:return !1}}function Oe(a){a=a.detail;return "object"===typeof a&&"data"in a?a.data:null}var Pe=!1;function Qe(a,b){switch(a){case "compositionend":return Oe(b);case "keypress":if(32!==b.which)return null;Me=!0;return Ke;case "textInput":return a=b.data,a===Ke&&Me?null:a;default:return null}}
  function Re(a,b){if(Pe)return "compositionend"===a||!Ge&&Ne(a,b)?(a=Ce(),Be=Ae=ze=null,Pe=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return Je&&"ko"!==b.locale?null:b.data;default:return null}}
  var Se={eventTypes:Le,extractEvents:function(a,b,c,d){var e;if(Ge)b:{switch(a){case "compositionstart":var f=Le.compositionStart;break b;case "compositionend":f=Le.compositionEnd;break b;case "compositionupdate":f=Le.compositionUpdate;break b}f=void 0;}else Pe?Ne(a,c)&&(f=Le.compositionEnd):"keydown"===a&&229===c.keyCode&&(f=Le.compositionStart);f?(Je&&"ko"!==c.locale&&(Pe||f!==Le.compositionStart?f===Le.compositionEnd&&Pe&&(e=Ce()):(ze=d,Ae="value"in ze?ze.value:ze.textContent,Pe=!0)),f=De.getPooled(f,
  b,c,d),e?f.data=e:(e=Oe(c),null!==e&&(f.data=e)),Sc(f),e=f):e=null;(a=Ie?Qe(a,c):Re(a,c))?(b=Ee.getPooled(Le.beforeInput,b,c,d),b.data=a,Sc(b)):b=null;return null===e?b:null===b?e:[e,b]}},Te={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ue(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return "input"===b?!!Te[a.type]:"textarea"===b?!0:!1}
  var Ve={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function We(a,b,c){a=E$1.getPooled(Ve.change,a,b,c);a.type="change";cb(c);Sc(a);return a}var Xe=null,Ye=null;function Ze(a){Ba(a);}function $e(a){var b=xe(a);if(zb(b))return a}function af(a,b){if("change"===a)return b}var bf=!1;Ya&&(bf=Rd("input")&&(!document.documentMode||9<document.documentMode));
  function cf(){Xe&&(Xe.detachEvent("onpropertychange",df),Ye=Xe=null);}function df(a){if("value"===a.propertyName&&$e(Ye))if(a=We(Ye,a,Mc(a)),ib)Ba(a);else{ib=!0;try{eb(Ze,a);}finally{ib=!1,kb();}}}function ef(a,b,c){"focus"===a?(cf(),Xe=b,Ye=c,Xe.attachEvent("onpropertychange",df)):"blur"===a&&cf();}function ff(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return $e(Ye)}function gf(a,b){if("click"===a)return $e(b)}function hf(a,b){if("input"===a||"change"===a)return $e(b)}
  var jf={eventTypes:Ve,_isInputEventSupported:bf,extractEvents:function(a,b,c,d){var e=b?xe(b):window,f=e.nodeName&&e.nodeName.toLowerCase();if("select"===f||"input"===f&&"file"===e.type)var g=af;else if(Ue(e))if(bf)g=hf;else{g=ff;var h=ef;}else(f=e.nodeName)&&"input"===f.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(g=gf);if(g&&(g=g(a,b)))return We(g,c,d);h&&h(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Fb(e,"number",e.value);}},kf={mouseEnter:{registrationName:"onMouseEnter",
  dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},lf,mf={eventTypes:kf,extractEvents:function(a,b,c,d,e){var f="mouseover"===a||"pointerover"===a,g="mouseout"===a||"pointerout"===a;if(f&&0===(e&32)&&(c.relatedTarget||c.fromElement)||!g&&!f)return null;
  e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;if(g){if(g=b,b=(b=c.relatedTarget||c.toElement)?Fc(b):null,null!==b&&(f=ec(b),b!==f||5!==b.tag&&6!==b.tag))b=null;}else g=null;if(g===b)return null;if("mouseout"===a||"mouseover"===a){var h=nd;var k=kf.mouseLeave;var l=kf.mouseEnter;var m="mouse";}else if("pointerout"===a||"pointerover"===a)h=od,k=kf.pointerLeave,l=kf.pointerEnter,m="pointer";a=null==g?e:xe(g);e=null==b?e:xe(b);k=h.getPooled(k,g,c,d);k.type=m+"leave";k.target=
  a;k.relatedTarget=e;d=h.getPooled(l,b,c,d);d.type=m+"enter";d.target=e;d.relatedTarget=a;h=g;m=b;if(h&&m)a:{l=h;a=m;g=0;for(b=l;b;b=Nc(b))g++;b=0;for(e=a;e;e=Nc(e))b++;for(;0<g-b;)l=Nc(l),g--;for(;0<b-g;)a=Nc(a),b--;for(;g--;){if(l===a||l===a.alternate)break a;l=Nc(l);a=Nc(a);}l=null;}else l=null;a=l;for(l=[];h&&h!==a;){g=h.alternate;if(null!==g&&g===a)break;l.push(h);h=Nc(h);}for(h=[];m&&m!==a;){g=m.alternate;if(null!==g&&g===a)break;h.push(m);m=Nc(m);}for(m=0;m<l.length;m++)Qc(l[m],"bubbled",k);for(m=
  h.length;0<m--;)Qc(h[m],"captured",d);if(c===lf)return lf=null,[k];lf=c;return [k,d]}};function nf(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var of="function"===typeof Object.is?Object.is:nf,pf=Object.prototype.hasOwnProperty;function qf(a,b){if(of(a,b))return !0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return !1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return !1;for(d=0;d<c.length;d++)if(!pf.call(b,c[d])||!of(a[c[d]],b[c[d]]))return !1;return !0}
  var rf=Ya&&"documentMode"in document&&11>=document.documentMode,sf={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},tf=null,uf=null,vf=null,wf=!1;
  function xf(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(wf||null==tf||tf!==be(c))return null;c=tf;"selectionStart"in c&&ge(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return vf&&qf(vf,c)?null:(vf=c,a=E$1.getPooled(sf.select,uf,a,b),a.type="select",a.target=tf,Sc(a),a)}
  var yf={eventTypes:sf,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=xc(e);f=ja.onSelect;for(var g=0;g<f.length;g++)if(!e.has(f[g])){e=!1;break a}e=!0;}f=!e;}if(f)return null;e=b?xe(b):window;switch(a){case "focus":if(Ue(e)||"true"===e.contentEditable)tf=e,uf=b,vf=null;break;case "blur":vf=uf=tf=null;break;case "mousedown":wf=!0;break;case "contextmenu":case "mouseup":case "dragend":return wf=!1,xf(c,d);case "selectionchange":if(rf)break;
  case "keydown":case "keyup":return xf(c,d)}return null}};Ca.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));var zf=Cc;sa=ye;ua=zf;va=xe;Ca.injectEventPluginsByName({SimpleEventPlugin:Ed,EnterLeaveEventPlugin:mf,ChangeEventPlugin:jf,SelectEventPlugin:yf,BeforeInputEventPlugin:Se});var Af=[],Bf=-1;function G$1(a){0>Bf||(a.current=Af[Bf],Af[Bf]=null,Bf--);}
  function I$1(a,b){Bf++;Af[Bf]=a.current;a.current=b;}var Cf={},J$1={current:Cf},K$1={current:!1},Df=Cf;function Ef(a,b){var c=a.type.contextTypes;if(!c)return Cf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function L$1(a){a=a.childContextTypes;return null!==a&&void 0!==a}
  function Ff(a){G$1(K$1);G$1(J$1);}function Gf(a){G$1(K$1);G$1(J$1);}function Hf(a,b,c){if(J$1.current!==Cf)throw Error(u$1(168));I$1(J$1,b);I$1(K$1,c);}function If(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(u$1(108,Wa(b)||"Unknown",e));return objectAssign({},c,{},d)}function Jf(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||Cf;Df=J$1.current;I$1(J$1,b);I$1(K$1,K$1.current);return !0}
  function Kf(a,b,c){var d=a.stateNode;if(!d)throw Error(u$1(169));c?(b=If(a,b,Df),d.__reactInternalMemoizedMergedChildContext=b,G$1(K$1),G$1(J$1),I$1(J$1,b)):G$1(K$1);I$1(K$1,c);}
  var Lf=scheduler.unstable_runWithPriority,Mf=scheduler.unstable_scheduleCallback,Nf=scheduler.unstable_cancelCallback,Of=scheduler.unstable_shouldYield,Pf=scheduler.unstable_requestPaint,Qf=scheduler.unstable_now,Rf=scheduler.unstable_getCurrentPriorityLevel,Sf=scheduler.unstable_ImmediatePriority,Tf=scheduler.unstable_UserBlockingPriority,Uf=scheduler.unstable_NormalPriority,Vf=scheduler.unstable_LowPriority,Wf=scheduler.unstable_IdlePriority,Xf={},Yf=void 0!==Pf?Pf:function(){},Zf=null,$f=null,ag=!1,bg=Qf(),cg=1E4>bg?Qf:function(){return Qf()-bg};
  function dg(){switch(Rf()){case Sf:return 99;case Tf:return 98;case Uf:return 97;case Vf:return 96;case Wf:return 95;default:throw Error(u$1(332));}}function eg(a){switch(a){case 99:return Sf;case 98:return Tf;case 97:return Uf;case 96:return Vf;case 95:return Wf;default:throw Error(u$1(332));}}function fg(a,b){a=eg(a);return Lf(a,b)}function gg(a,b,c){a=eg(a);return Mf(a,b,c)}function hg(a){null===Zf?(Zf=[a],$f=Mf(Sf,ig)):Zf.push(a);return Xf}function jg(){if(null!==$f){var a=$f;$f=null;Nf(a);}ig();}
  function ig(){if(!ag&&null!==Zf){ag=!0;var a=0;try{var b=Zf;fg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});Zf=null;}catch(c){throw null!==Zf&&(Zf=Zf.slice(a+1)),Mf(Sf,jg),c;}finally{ag=!1;}}}var kg=3;function lg(a,b,c){c/=10;return 1073741821-(((1073741821-a+b/10)/c|0)+1)*c}function mg(a,b){if(a&&a.defaultProps){b=objectAssign({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);}return b}var ng={current:null},og=null,pg=null,qg=null;function rg(){qg=pg=og=null;}
  function sg(a,b){var c=a.type._context;I$1(ng,c._currentValue);c._currentValue=b;}function tg(a){var b=ng.current;G$1(ng);a.type._context._currentValue=b;}function ug(a,b){for(;null!==a;){var c=a.alternate;if(a.childExpirationTime<b)a.childExpirationTime=b,null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);else if(null!==c&&c.childExpirationTime<b)c.childExpirationTime=b;else break;a=a.return;}}
  function vg(a,b){og=a;qg=pg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(a.expirationTime>=b&&(wg=!0),a.firstContext=null);}function xg(a,b){if(qg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)qg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===pg){if(null===og)throw Error(u$1(308));pg=b;og.dependencies={expirationTime:0,firstContext:b,responders:null};}else pg=pg.next=b;}return a._currentValue}var yg=!1;
  function zg(a){return {baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Ag(a){return {baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
  function Bg(a,b){return {expirationTime:a,suspenseConfig:b,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function Cg(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b);}
  function Dg(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=zg(a.memoizedState));}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=zg(a.memoizedState),e=c.updateQueue=zg(c.memoizedState)):d=a.updateQueue=Ag(e):null===e&&(e=c.updateQueue=Ag(d));null===e||d===e?Cg(d,b):null===d.lastUpdate||null===e.lastUpdate?(Cg(d,b),Cg(e,b)):(Cg(d,b),e.lastUpdate=b);}
  function Eg(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=zg(a.memoizedState):Fg(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b);}function Fg(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=Ag(b));return b}
  function Gg(a,b,c,d,e,f){switch(c.tag){case 1:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case 3:a.effectTag=a.effectTag&-4097|64;case 0:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return objectAssign({},d,e);case 2:yg=!0;}return d}
  function Hg(a,b,c,d,e){yg=!1;b=Fg(a,b);for(var f=b.baseState,g=null,h=0,k=b.firstUpdate,l=f;null!==k;){var m=k.expirationTime;m<e?(null===g&&(g=k,f=l),h<m&&(h=m)):(Ig(m,k.suspenseConfig),l=Gg(a,b,k,l,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=k:(b.lastEffect.nextEffect=k,b.lastEffect=k)));k=k.next;}m=null;for(k=b.firstCapturedUpdate;null!==k;){var C=k.expirationTime;C<e?(null===m&&(m=k,null===g&&(f=l)),h<C&&(h=C)):(l=Gg(a,b,k,l,c,d),null!==
  k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=k:(b.lastCapturedEffect.nextEffect=k,b.lastCapturedEffect=k)));k=k.next;}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===m&&(f=l);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;Jg(h);a.expirationTime=h;a.memoizedState=l;}
  function Kg(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);Lg(b.firstEffect,c);b.firstEffect=b.lastEffect=null;Lg(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null;}function Lg(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;if("function"!==typeof c)throw Error(u$1(191,c));c.call(d);}a=a.nextEffect;}}
  var Mg=Ea.ReactCurrentBatchConfig,Ng=(new react.Component).refs;function Og(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:objectAssign({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c);}
  var Sg={isMounted:function(a){return (a=a._reactInternalFiber)?ec(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=Pg(),e=Mg.suspense;d=Qg(d,a,e);e=Bg(d,e);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Dg(a,e);Rg(a,d);},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=Pg(),e=Mg.suspense;d=Qg(d,a,e);e=Bg(d,e);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Dg(a,e);Rg(a,d);},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=Pg(),d=Mg.suspense;
  c=Qg(c,a,d);d=Bg(c,d);d.tag=2;void 0!==b&&null!==b&&(d.callback=b);Dg(a,d);Rg(a,c);}};function Tg(a,b,c,d,e,f,g){a=a.stateNode;return "function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!qf(c,d)||!qf(e,f):!0}
  function Ug(a,b,c){var d=!1,e=Cf;var f=b.contextType;"object"===typeof f&&null!==f?f=xg(f):(e=L$1(b)?Df:J$1.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Ef(a,e):Cf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Sg;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
  function Vg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Sg.enqueueReplaceState(b,b.state,null);}
  function Wg(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Ng;var f=b.contextType;"object"===typeof f&&null!==f?e.context=xg(f):(f=L$1(b)?Df:J$1.current,e.context=Ef(a,f));f=a.updateQueue;null!==f&&(Hg(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(Og(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==
  typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Sg.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(Hg(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4);}var Xg=Array.isArray;
  function Yg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(u$1(309));var d=c.stateNode;}if(!d)throw Error(u$1(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Ng&&(b=d.refs={});null===a?delete b[e]:b[e]=a;};b._stringRef=e;return b}if("string"!==typeof a)throw Error(u$1(284));if(!c._owner)throw Error(u$1(290,a));}return a}
  function Zg(a,b){if("textarea"!==a.type)throw Error(u$1(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,""));}
  function $g(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8;}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=ah(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
  2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=bh(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Yg(a,b,c),d.return=a,d;d=ch(c.type,c.key,c.props,null,a.mode,d);d.ref=Yg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
  c.implementation)return b=dh(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=eh(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function C(a,b,c){if("string"===typeof b||"number"===typeof b)return b=bh(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Ga:return c=ch(b.type,b.key,b.props,null,a.mode,c),c.ref=Yg(a,null,b),c.return=a,c;case Ha:return b=dh(b,a.mode,c),b.return=a,b}if(Xg(b)||
  Ua(b))return b=eh(b,a.mode,c,null),b.return=a,b;Zg(a,b);}return null}function y(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Ga:return c.key===e?c.type===Ia?m(a,b,c.props.children,d,e):k(a,b,c,d):null;case Ha:return c.key===e?l(a,b,c,d):null}if(Xg(c)||Ua(c))return null!==e?null:m(a,b,c,d,null);Zg(a,c);}return null}function H(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
  a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Ga:return a=a.get(null===d.key?c:d.key)||null,d.type===Ia?m(b,a,d.props.children,e,d.key):k(b,a,d,e);case Ha:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Xg(d)||Ua(d))return a=a.get(c)||null,m(b,a,d,e,null);Zg(b,d);}return null}function z(e,g,h,k){for(var l=null,m=null,r=g,x=g=0,A=null;null!==r&&x<h.length;x++){r.index>x?(A=r,r=null):A=r.sibling;var p=y(e,r,h[x],k);if(null===p){null===r&&(r=A);break}a&&
  r&&null===p.alternate&&b(e,r);g=f(p,g,x);null===m?l=p:m.sibling=p;m=p;r=A;}if(x===h.length)return c(e,r),l;if(null===r){for(;x<h.length;x++)r=C(e,h[x],k),null!==r&&(g=f(r,g,x),null===m?l=r:m.sibling=r,m=r);return l}for(r=d(e,r);x<h.length;x++)A=H(r,e,x,h[x],k),null!==A&&(a&&null!==A.alternate&&r.delete(null===A.key?x:A.key),g=f(A,g,x),null===m?l=A:m.sibling=A,m=A);a&&r.forEach(function(a){return b(e,a)});return l}function ta(e,g,h,k){var l=Ua(h);if("function"!==typeof l)throw Error(u$1(150));h=l.call(h);
  if(null==h)throw Error(u$1(151));for(var m=l=null,r=g,x=g=0,A=null,p=h.next();null!==r&&!p.done;x++,p=h.next()){r.index>x?(A=r,r=null):A=r.sibling;var z=y(e,r,p.value,k);if(null===z){null===r&&(r=A);break}a&&r&&null===z.alternate&&b(e,r);g=f(z,g,x);null===m?l=z:m.sibling=z;m=z;r=A;}if(p.done)return c(e,r),l;if(null===r){for(;!p.done;x++,p=h.next())p=C(e,p.value,k),null!==p&&(g=f(p,g,x),null===m?l=p:m.sibling=p,m=p);return l}for(r=d(e,r);!p.done;x++,p=h.next())p=H(r,e,x,p.value,k),null!==p&&(a&&null!==
  p.alternate&&r.delete(null===p.key?x:p.key),g=f(p,g,x),null===m?l=p:m.sibling=p,m=p);a&&r.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===Ia&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Ga:a:{l=f.key;for(k=d;null!==k;){if(k.key===l)if(7===k.tag?f.type===Ia:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===Ia?f.props.children:f.props);d.ref=Yg(a,k,f);d.return=a;a=d;break a}else{c(a,
  k);break}else b(a,k);k=k.sibling;}f.type===Ia?(d=eh(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=ch(f.type,f.key,f.props,null,a.mode,h),h.ref=Yg(a,d,f),h.return=a,a=h);}return g(a);case Ha:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling;}d=dh(f,a.mode,h);d.return=a;a=d;}return g(a)}if("string"===
  typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=bh(f,a.mode,h),d.return=a,a=d),g(a);if(Xg(f))return z(a,d,f,h);if(Ua(f))return ta(a,d,f,h);l&&Zg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:throw a=a.type,Error(u$1(152,a.displayName||a.name||"Component"));}return c(a,d)}}var fh=$g(!0),gh=$g(!1),hh={},ih={current:hh},jh={current:hh},kh={current:hh};function lh(a){if(a===hh)throw Error(u$1(174));return a}
  function mh(a,b){I$1(kh,b);I$1(jh,a);I$1(ih,hh);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Qb(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=Qb(b,c);}G$1(ih);I$1(ih,b);}function nh(a){G$1(ih);G$1(jh);G$1(kh);}function oh(a){lh(kh.current);var b=lh(ih.current);var c=Qb(b,a.type);b!==c&&(I$1(jh,a),I$1(ih,c));}function ph(a){jh.current===a&&(G$1(ih),G$1(jh));}var M$1={current:0};
  function qh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||c.data===je||c.data===ke))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.effectTag&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}return null}function rh(a,b){return {responder:a,props:b}}
  var sh=Ea.ReactCurrentDispatcher,N$1=Ea.ReactCurrentBatchConfig,th=0,uh=null,O$1=null,vh=null,wh=null,P$1=null,xh=null,yh=0,zh=null,Ah=0,Bh=!1,Ch=null,Gh=0;function Q$1(){throw Error(u$1(321));}function Hh(a,b){if(null===b)return !1;for(var c=0;c<b.length&&c<a.length;c++)if(!of(a[c],b[c]))return !1;return !0}
  function Ih(a,b,c,d,e,f){th=f;uh=b;vh=null!==a?a.memoizedState:null;sh.current=null===vh?Jh:Kh;b=c(d,e);if(Bh){do Bh=!1,Gh+=1,vh=null!==a?a.memoizedState:null,xh=wh,zh=P$1=O$1=null,sh.current=Kh,b=c(d,e);while(Bh);Ch=null;Gh=0;}sh.current=Lh;a=uh;a.memoizedState=wh;a.expirationTime=yh;a.updateQueue=zh;a.effectTag|=Ah;a=null!==O$1&&null!==O$1.next;th=0;xh=P$1=wh=vh=O$1=uh=null;yh=0;zh=null;Ah=0;if(a)throw Error(u$1(300));return b}
  function Mh(){sh.current=Lh;th=0;xh=P$1=wh=vh=O$1=uh=null;yh=0;zh=null;Ah=0;Bh=!1;Ch=null;Gh=0;}function Nh(){var a={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};null===P$1?wh=P$1=a:P$1=P$1.next=a;return P$1}function Oh(){if(null!==xh)P$1=xh,xh=P$1.next,O$1=vh,vh=null!==O$1?O$1.next:null;else{if(null===vh)throw Error(u$1(310));O$1=vh;var a={memoizedState:O$1.memoizedState,baseState:O$1.baseState,queue:O$1.queue,baseUpdate:O$1.baseUpdate,next:null};P$1=null===P$1?wh=a:P$1.next=a;vh=O$1.next;}return P$1}
  function Ph(a,b){return "function"===typeof b?b(a):b}
  function Qh(a){var b=Oh(),c=b.queue;if(null===c)throw Error(u$1(311));c.lastRenderedReducer=a;if(0<Gh){var d=c.dispatch;if(null!==Ch){var e=Ch.get(c);if(void 0!==e){Ch.delete(c);var f=b.memoizedState;do f=a(f,e.action),e=e.next;while(null!==e);of(f,b.memoizedState)||(wg=!0);b.memoizedState=f;b.baseUpdate===c.last&&(b.baseState=f);c.lastRenderedState=f;return [f,d]}}return [b.memoizedState,d]}d=c.last;var g=b.baseUpdate;f=b.baseState;null!==g?(null!==d&&(d.next=null),d=g.next):d=null!==d?d.next:null;if(null!==
  d){var h=e=null,k=d,l=!1;do{var m=k.expirationTime;m<th?(l||(l=!0,h=g,e=f),m>yh&&(yh=m,Jg(yh))):(Ig(m,k.suspenseConfig),f=k.eagerReducer===a?k.eagerState:a(f,k.action));g=k;k=k.next;}while(null!==k&&k!==d);l||(h=g,e=f);of(f,b.memoizedState)||(wg=!0);b.memoizedState=f;b.baseUpdate=h;b.baseState=e;c.lastRenderedState=f;}return [b.memoizedState,c.dispatch]}
  function Rh(a){var b=Nh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={last:null,dispatch:null,lastRenderedReducer:Ph,lastRenderedState:a};a=a.dispatch=Sh.bind(null,uh,a);return [b.memoizedState,a]}function Th(a){return Qh(Ph)}function Uh(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};null===zh?(zh={lastEffect:null},zh.lastEffect=a.next=a):(b=zh.lastEffect,null===b?zh.lastEffect=a.next=a:(c=b.next,b.next=a,a.next=c,zh.lastEffect=a));return a}
  function Vh(a,b,c,d){var e=Nh();Ah|=a;e.memoizedState=Uh(b,c,void 0,void 0===d?null:d);}function Wh(a,b,c,d){var e=Oh();d=void 0===d?null:d;var f=void 0;if(null!==O$1){var g=O$1.memoizedState;f=g.destroy;if(null!==d&&Hh(d,g.deps)){Uh(0,c,f,d);return}}Ah|=a;e.memoizedState=Uh(b,c,f,d);}function Xh(a,b){return Vh(516,192,a,b)}function Yh(a,b){return Wh(516,192,a,b)}
  function Zh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null);};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null;}}function $h(){}function ai(a,b){Nh().memoizedState=[a,void 0===b?null:b];return a}function bi(a,b){var c=Oh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Hh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
  function Sh(a,b,c){if(!(25>Gh))throw Error(u$1(301));var d=a.alternate;if(a===uh||null!==d&&d===uh)if(Bh=!0,a={expirationTime:th,suspenseConfig:null,action:c,eagerReducer:null,eagerState:null,next:null},null===Ch&&(Ch=new Map),c=Ch.get(b),void 0===c)Ch.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a;}else{var e=Pg(),f=Mg.suspense;e=Qg(e,a,f);f={expirationTime:e,suspenseConfig:f,action:c,eagerReducer:null,eagerState:null,next:null};var g=b.last;if(null===g)f.next=f;else{var h=g.next;null!==h&&
  (f.next=h);g.next=f;}b.last=f;if(0===a.expirationTime&&(null===d||0===d.expirationTime)&&(d=b.lastRenderedReducer,null!==d))try{var k=b.lastRenderedState,l=d(k,c);f.eagerReducer=d;f.eagerState=l;if(of(l,k))return}catch(m){}finally{}Rg(a,e);}}
  var Lh={readContext:xg,useCallback:Q$1,useContext:Q$1,useEffect:Q$1,useImperativeHandle:Q$1,useLayoutEffect:Q$1,useMemo:Q$1,useReducer:Q$1,useRef:Q$1,useState:Q$1,useDebugValue:Q$1,useResponder:Q$1,useDeferredValue:Q$1,useTransition:Q$1},Jh={readContext:xg,useCallback:ai,useContext:xg,useEffect:Xh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Vh(4,36,Zh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Vh(4,36,a,b)},useMemo:function(a,b){var c=Nh();b=void 0===b?null:b;a=a();c.memoizedState=
  [a,b];return a},useReducer:function(a,b,c){var d=Nh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={last:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=Sh.bind(null,uh,a);return [d.memoizedState,a]},useRef:function(a){var b=Nh();a={current:a};return b.memoizedState=a},useState:Rh,useDebugValue:$h,useResponder:rh,useDeferredValue:function(a,b){var c=Rh(a),d=c[0],e=c[1];Xh(function(){scheduler.unstable_next(function(){var c=N$1.suspense;N$1.suspense=void 0===b?null:b;try{e(a);}finally{N$1.suspense=
  c;}});},[a,b]);return d},useTransition:function(a){var b=Rh(!1),c=b[0],d=b[1];return [ai(function(b){d(!0);scheduler.unstable_next(function(){var c=N$1.suspense;N$1.suspense=void 0===a?null:a;try{d(!1),b();}finally{N$1.suspense=c;}});},[a,c]),c]}},Kh={readContext:xg,useCallback:bi,useContext:xg,useEffect:Yh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Wh(4,36,Zh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Wh(4,36,a,b)},useMemo:function(a,b){var c=Oh();b=void 0===b?
  null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Hh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a},useReducer:Qh,useRef:function(){return Oh().memoizedState},useState:Th,useDebugValue:$h,useResponder:rh,useDeferredValue:function(a,b){var c=Th(),d=c[0],e=c[1];Yh(function(){scheduler.unstable_next(function(){var c=N$1.suspense;N$1.suspense=void 0===b?null:b;try{e(a);}finally{N$1.suspense=c;}});},[a,b]);return d},useTransition:function(a){var b=Th(),c=b[0],d=b[1];return [bi(function(b){d(!0);scheduler.unstable_next(function(){var c=
  N$1.suspense;N$1.suspense=void 0===a?null:a;try{d(!1),b();}finally{N$1.suspense=c;}});},[a,c]),c]}},ci=null,di=null,ei=!1;function fi(a,b){var c=gi(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c;}
  function hi(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return !1;default:return !1}}
  function ii(a){if(ei){var b=di;if(b){var c=b;if(!hi(a,b)){b=re(c.nextSibling);if(!b||!hi(a,b)){a.effectTag=a.effectTag&-1025|2;ei=!1;ci=a;return}fi(ci,c);}ci=a;di=re(b.firstChild);}else a.effectTag=a.effectTag&-1025|2,ei=!1,ci=a;}}function ji(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;ci=a;}
  function ki(a){if(a!==ci)return !1;if(!ei)return ji(a),ei=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!oe(b,a.memoizedProps))for(b=di;b;)fi(a,b),b=re(b.nextSibling);ji(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(u$1(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if(c===ie){if(0===b){di=re(a.nextSibling);break a}b--;}else c!==he&&c!==ke&&c!==je||b++;}a=a.nextSibling;}di=null;}}else di=ci?re(a.stateNode.nextSibling):null;return !0}
  function li(){di=ci=null;ei=!1;}var mi=Ea.ReactCurrentOwner,wg=!1;function R$1(a,b,c,d){b.child=null===a?gh(b,null,c,d):fh(b,a.child,c,d);}function ni(a,b,c,d,e){c=c.render;var f=b.ref;vg(b,e);d=Ih(a,b,c,d,f,e);if(null!==a&&!wg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),oi(a,b,e);b.effectTag|=1;R$1(a,b,d,e);return b.child}
  function pi(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!qi(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ri(a,b,g,d,e,f);a=ch(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:qf,c(e,d)&&a.ref===b.ref))return oi(a,b,f);b.effectTag|=1;a=ah(g,d);a.ref=b.ref;a.return=b;return b.child=a}
  function ri(a,b,c,d,e,f){return null!==a&&qf(a.memoizedProps,d)&&a.ref===b.ref&&(wg=!1,e<f)?oi(a,b,f):si(a,b,c,d,f)}function ti(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128;}function si(a,b,c,d,e){var f=L$1(c)?Df:J$1.current;f=Ef(b,f);vg(b,e);c=Ih(a,b,c,d,f,e);if(null!==a&&!wg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),oi(a,b,e);b.effectTag|=1;R$1(a,b,c,e);return b.child}
  function ui(a,b,c,d,e){if(L$1(c)){var f=!0;Jf(b);}else f=!1;vg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),Ug(b,c,d),Wg(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=xg(l):(l=L$1(c)?Df:J$1.current,l=Ef(b,l));var m=c.getDerivedStateFromProps,C="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;C||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
  "function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Vg(b,g,d,l);yg=!1;var y=b.memoizedState;k=g.state=y;var H=b.updateQueue;null!==H&&(Hg(b,H,d,g,e),k=b.memoizedState);h!==d||y!==k||K$1.current||yg?("function"===typeof m&&(Og(b,c,m,d),k=b.memoizedState),(h=yg||Tg(b,c,h,d,y,k,l))?(C||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&
  g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1);}else g=b.stateNode,h=b.memoizedProps,g.props=b.type===b.elementType?h:mg(b.type,h),k=g.context,l=c.contextType,"object"===typeof l&&null!==l?l=xg(l):(l=L$1(c)?Df:J$1.current,l=Ef(b,l)),m=c.getDerivedStateFromProps,(C=
  "function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Vg(b,g,d,l),yg=!1,k=b.memoizedState,y=g.state=k,H=b.updateQueue,null!==H&&(Hg(b,H,d,g,e),y=b.memoizedState),h!==d||k!==y||K$1.current||yg?("function"===typeof m&&(Og(b,c,m,d),y=b.memoizedState),(m=yg||Tg(b,c,h,d,k,y,l))?(C||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||
  ("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,y,l),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,y,l)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=
  d,b.memoizedState=y),g.props=d,g.state=y,g.context=l,d=m):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return vi(a,b,c,d,f,e)}
  function vi(a,b,c,d,e,f){ti(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Kf(b,c,!1),oi(a,b,f);d=b.stateNode;mi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=fh(b,a.child,null,f),b.child=fh(b,null,h,f)):R$1(a,b,h,f);b.memoizedState=d.state;e&&Kf(b,c,!0);return b.child}function wi(a){var b=a.stateNode;b.pendingContext?Hf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Hf(a,b.context,!1);mh(a,b.containerInfo);}
  var xi={dehydrated:null,retryTime:0};
  function yi(a,b,c){var d=b.mode,e=b.pendingProps,f=M$1.current,g=!1,h;(h=0!==(b.effectTag&64))||(h=0!==(f&2)&&(null===a||null!==a.memoizedState));h?(g=!0,b.effectTag&=-65):null!==a&&null===a.memoizedState||void 0===e.fallback||!0===e.unstable_avoidThisFallback||(f|=1);I$1(M$1,f&1);if(null===a){void 0!==e.fallback&&ii(b);if(g){g=e.fallback;e=eh(null,d,0,null);e.return=b;if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=eh(g,d,c,null);c.return=
  b;e.sibling=c;b.memoizedState=xi;b.child=e;return c}d=e.children;b.memoizedState=null;return b.child=gh(b,null,d,c)}if(null!==a.memoizedState){a=a.child;d=a.sibling;if(g){e=e.fallback;c=ah(a,a.pendingProps);c.return=b;if(0===(b.mode&2)&&(g=null!==b.memoizedState?b.child.child:b.child,g!==a.child))for(c.child=g;null!==g;)g.return=c,g=g.sibling;d=ah(d,e,d.expirationTime);d.return=b;c.sibling=d;c.childExpirationTime=0;b.memoizedState=xi;b.child=c;return d}c=fh(b,a.child,e.children,c);b.memoizedState=
  null;return b.child=c}a=a.child;if(g){g=e.fallback;e=eh(null,d,0,null);e.return=b;e.child=a;null!==a&&(a.return=e);if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=eh(g,d,c,null);c.return=b;e.sibling=c;c.effectTag|=2;e.childExpirationTime=0;b.memoizedState=xi;b.child=e;return c}b.memoizedState=null;return b.child=fh(b,a,e.children,c)}
  function zi(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);ug(a.return,b);}function Ai(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,last:d,tail:c,tailExpiration:0,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.last=d,g.tail=c,g.tailExpiration=0,g.tailMode=e,g.lastEffect=f);}
  function Bi(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;R$1(a,b,d.children,c);d=M$1.current;if(0!==(d&2))d=d&1|2,b.effectTag|=64;else{if(null!==a&&0!==(a.effectTag&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&zi(a,c);else if(19===a.tag)zi(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return;}a.sibling.return=a.return;a=a.sibling;}d&=1;}I$1(M$1,d);if(0===(b.mode&2))b.memoizedState=
  null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===qh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);Ai(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===qh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a;}Ai(b,!0,c,null,f,b.lastEffect);break;case "together":Ai(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null;}return b.child}
  function oi(a,b,c){null!==a&&(b.dependencies=a.dependencies);var d=b.expirationTime;0!==d&&Jg(d);if(b.childExpirationTime<c)return null;if(null!==a&&b.child!==a.child)throw Error(u$1(153));if(null!==b.child){a=b.child;c=ah(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=ah(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null;}return b.child}function Ci(a){a.effectTag|=4;}var Hi,Ii,Ji,Ki;
  Hi=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}};Ii=function(){};
  Ji=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;lh(ih.current);a=null;switch(c){case "input":f=Ab(g,f);d=Ab(g,d);a=[];break;case "option":f=Ib(g,f);d=Ib(g,d);a=[];break;case "select":f=objectAssign({},f,{value:void 0});d=objectAssign({},d,{value:void 0});a=[];break;case "textarea":f=Kb(g,f);d=Kb(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=ae);}Yd(c,d);var h,k;c=null;for(h in f)if(!d.hasOwnProperty(h)&&f.hasOwnProperty(h)&&null!=f[h])if("style"===
  h)for(k in g=f[h],g)g.hasOwnProperty(k)&&(c||(c={}),c[k]="");else"dangerouslySetInnerHTML"!==h&&"children"!==h&&"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(ia.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in d){var l=d[h];g=null!=f?f[h]:void 0;if(d.hasOwnProperty(h)&&l!==g&&(null!=l||null!=g))if("style"===h)if(g){for(k in g)!g.hasOwnProperty(k)||l&&l.hasOwnProperty(k)||(c||(c={}),c[k]="");for(k in l)l.hasOwnProperty(k)&&g[k]!==l[k]&&(c||(c={}),
  c[k]=l[k]);}else c||(a||(a=[]),a.push(h,c)),c=l;else"dangerouslySetInnerHTML"===h?(l=l?l.__html:void 0,g=g?g.__html:void 0,null!=l&&g!==l&&(a=a||[]).push(h,""+l)):"children"===h?g===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(h,""+l):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&(ia.hasOwnProperty(h)?(null!=l&&$d(e,h),a||g===l||(a=[])):(a=a||[]).push(h,l));}c&&(a=a||[]).push("style",c);e=a;(b.updateQueue=e)&&Ci(b);}};Ki=function(a,b,c,d){c!==d&&Ci(b);};
  function Li(a,b){switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null;}}
  function Mi(a){switch(a.tag){case 1:L$1(a.type)&&Ff();var b=a.effectTag;return b&4096?(a.effectTag=b&-4097|64,a):null;case 3:nh();Gf();b=a.effectTag;if(0!==(b&64))throw Error(u$1(285));a.effectTag=b&-4097|64;return a;case 5:return ph(a),null;case 13:return G$1(M$1),b=a.effectTag,b&4096?(a.effectTag=b&-4097|64,a):null;case 19:return G$1(M$1),null;case 4:return nh(),null;case 10:return tg(a),null;default:return null}}function Ni(a,b){return {value:a,source:b,stack:Xa(b)}}
  var Oi="function"===typeof WeakSet?WeakSet:Set;function Pi(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=Xa(c));null!==c&&Wa(c.type);b=b.value;null!==a&&1===a.tag&&Wa(a.type);try{console.error(b);}catch(e){setTimeout(function(){throw e;});}}function Qi(a,b){try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount();}catch(c){Ri(a,c);}}function Si(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null);}catch(c){Ri(a,c);}else b.current=null;}
  function Ti(a,b){switch(b.tag){case 0:case 11:case 15:Ui(2,0,b);break;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:mg(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b;}break;case 3:case 5:case 6:case 4:case 17:break;default:throw Error(u$1(163));}}
  function Ui(a,b,c){c=c.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do{if(0!==(d.tag&a)){var e=d.destroy;d.destroy=void 0;void 0!==e&&e();}0!==(d.tag&b)&&(e=d.create,d.destroy=e());d=d.next;}while(d!==c)}}
  function Vi(a,b,c){"function"===typeof Wi&&Wi(b);switch(b.tag){case 0:case 11:case 14:case 15:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var d=a.next;fg(97<c?97:c,function(){var a=d;do{var c=a.destroy;if(void 0!==c){var g=b;try{c();}catch(h){Ri(g,h);}}a=a.next;}while(a!==d)});}break;case 1:Si(b);c=b.stateNode;"function"===typeof c.componentWillUnmount&&Qi(b,c);break;case 5:Si(b);break;case 4:Xi(a,b,c);}}
  function Yi(a){var b=a.alternate;a.return=null;a.child=null;a.memoizedState=null;a.updateQueue=null;a.dependencies=null;a.alternate=null;a.firstEffect=null;a.lastEffect=null;a.pendingProps=null;a.memoizedProps=null;null!==b&&Yi(b);}function Zi(a){return 5===a.tag||3===a.tag||4===a.tag}
  function $i(a){a:{for(var b=a.return;null!==b;){if(Zi(b)){var c=b;break a}b=b.return;}throw Error(u$1(160));}b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(u$1(161));}c.effectTag&16&&(Tb(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Zi(c.return)){c=null;break a}c=c.return;}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;
  if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child;}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){var f=5===e.tag||6===e.tag;if(f){var g=f?e.stateNode:e.stateNode.instance;if(c)if(d){f=b;var h=g;g=c;8===f.nodeType?f.parentNode.insertBefore(h,g):f.insertBefore(h,g);}else b.insertBefore(g,c);else d?(h=b,8===h.nodeType?(f=h.parentNode,f.insertBefore(g,h)):(f=h,f.appendChild(g)),h=h._reactRootContainer,null!==h&&void 0!==h||null!==f.onclick||(f.onclick=ae)):b.appendChild(g);}else if(4!==
  e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return;}e.sibling.return=e.return;e=e.sibling;}}
  function Xi(a,b,c){for(var d=b,e=!1,f,g;;){if(!e){e=d.return;a:for(;;){if(null===e)throw Error(u$1(160));f=e.stateNode;switch(e.tag){case 5:g=!1;break a;case 3:f=f.containerInfo;g=!0;break a;case 4:f=f.containerInfo;g=!0;break a}e=e.return;}e=!0;}if(5===d.tag||6===d.tag){a:for(var h=a,k=d,l=c,m=k;;)if(Vi(h,m,l),null!==m.child&&4!==m.tag)m.child.return=m,m=m.child;else{if(m===k)break;for(;null===m.sibling;){if(null===m.return||m.return===k)break a;m=m.return;}m.sibling.return=m.return;m=m.sibling;}g?(h=
  f,k=d.stateNode,8===h.nodeType?h.parentNode.removeChild(k):h.removeChild(k)):f.removeChild(d.stateNode);}else if(4===d.tag){if(null!==d.child){f=d.stateNode.containerInfo;g=!0;d.child.return=d;d=d.child;continue}}else if(Vi(a,d,c),null!==d.child){d.child.return=d;d=d.child;continue}if(d===b)break;for(;null===d.sibling;){if(null===d.return||d.return===b)return;d=d.return;4===d.tag&&(e=!1);}d.sibling.return=d.return;d=d.sibling;}}
  function aj(a,b){switch(b.tag){case 0:case 11:case 14:case 15:Ui(4,8,b);break;case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[ve]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Cb(c,d);Zd(a,e);b=Zd(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?Wd(c,h):"dangerouslySetInnerHTML"===g?Sb(c,h):"children"===g?Tb(c,h):vb(c,g,h,b);}switch(a){case "input":Eb(c,d);break;case "textarea":Mb(c,
  d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?Jb(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?Jb(c,!!d.multiple,d.defaultValue,!0):Jb(c,!!d.multiple,d.multiple?[]:"",!1));}}}break;case 6:if(null===b.stateNode)throw Error(u$1(162));b.stateNode.nodeValue=b.memoizedProps;break;case 3:b=b.stateNode;b.hydrate&&(b.hydrate=!1,Lc(b.containerInfo));break;case 12:break;case 13:c=b;null===b.memoizedState?d=!1:(d=!0,c=b.child,bj=cg());
  if(null!==c)a:for(a=c;;){if(5===a.tag)f=a.stateNode,d?(f=f.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(f=a.stateNode,e=a.memoizedProps.style,e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null,f.style.display=Vd("display",e));else if(6===a.tag)a.stateNode.nodeValue=d?"":a.memoizedProps;else if(13===a.tag&&null!==a.memoizedState&&null===a.memoizedState.dehydrated){f=a.child.sibling;f.return=a;a=f;continue}else if(null!==a.child){a.child.return=
  a;a=a.child;continue}if(a===c)break a;for(;null===a.sibling;){if(null===a.return||a.return===c)break a;a=a.return;}a.sibling.return=a.return;a=a.sibling;}cj(b);break;case 19:cj(b);break;case 17:break;case 20:break;case 21:break;default:throw Error(u$1(163));}}function cj(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Oi);b.forEach(function(b){var d=dj.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d));});}}var ej="function"===typeof WeakMap?WeakMap:Map;
  function fj(a,b,c){c=Bg(c,null);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){gj||(gj=!0,hj=d);Pi(a,b);};return c}
  function ij(a,b,c){c=Bg(c,null);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Pi(a,b);return d(e)};}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===jj?jj=new Set([this]):jj.add(this),Pi(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""});});return c}
  var kj=Math.ceil,lj=Ea.ReactCurrentDispatcher,mj=Ea.ReactCurrentOwner,S$1=0,nj=8,oj=16,pj=32,qj=0,rj=1,sj=2,tj=3,uj=4,vj=5,T$1=S$1,U$1=null,V$1=null,W$1=0,X$1=qj,wj=null,xj=1073741823,yj=1073741823,zj=null,Aj=0,Bj=!1,bj=0,Cj=500,Y$1=null,gj=!1,hj=null,jj=null,Dj=!1,Ej=null,Fj=90,Gj=null,Hj=0,Ij=null,Jj=0;function Pg(){return (T$1&(oj|pj))!==S$1?1073741821-(cg()/10|0):0!==Jj?Jj:Jj=1073741821-(cg()/10|0)}
  function Qg(a,b,c){b=b.mode;if(0===(b&2))return 1073741823;var d=dg();if(0===(b&4))return 99===d?1073741823:1073741822;if((T$1&oj)!==S$1)return W$1;if(null!==c)a=lg(a,c.timeoutMs|0||5E3,250);else switch(d){case 99:a=1073741823;break;case 98:a=lg(a,150,100);break;case 97:case 96:a=lg(a,5E3,250);break;case 95:a=2;break;default:throw Error(u$1(326));}null!==U$1&&a===W$1&&--a;return a}
  function Rg(a,b){if(50<Hj)throw Hj=0,Ij=null,Error(u$1(185));a=Kj(a,b);if(null!==a){var c=dg();1073741823===b?(T$1&nj)!==S$1&&(T$1&(oj|pj))===S$1?Lj(a):(Z$1(a),T$1===S$1&&jg()):Z$1(a);(T$1&4)===S$1||98!==c&&99!==c||(null===Gj?Gj=new Map([[a,b]]):(c=Gj.get(a),(void 0===c||c>b)&&Gj.set(a,b)));}}
  function Kj(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return;}null!==e&&(U$1===e&&(Jg(b),X$1===uj&&Mj(e,W$1)),Nj(e,b));return e}
  function Oj(a){var b=a.lastExpiredTime;if(0!==b)return b;b=a.firstPendingTime;if(!Pj(a,b))return b;b=a.lastPingedTime;a=a.nextKnownPendingLevel;return b>a?b:a}
  function Z$1(a){if(0!==a.lastExpiredTime)a.callbackExpirationTime=1073741823,a.callbackPriority=99,a.callbackNode=hg(Lj.bind(null,a));else{var b=Oj(a),c=a.callbackNode;if(0===b)null!==c&&(a.callbackNode=null,a.callbackExpirationTime=0,a.callbackPriority=90);else{var d=Pg();1073741823===b?d=99:1===b||2===b?d=95:(d=10*(1073741821-b)-10*(1073741821-d),d=0>=d?99:250>=d?98:5250>=d?97:95);if(null!==c){var e=a.callbackPriority;if(a.callbackExpirationTime===b&&e>=d)return;c!==Xf&&Nf(c);}a.callbackExpirationTime=
  b;a.callbackPriority=d;b=1073741823===b?hg(Lj.bind(null,a)):gg(d,Qj.bind(null,a),{timeout:10*(1073741821-b)-cg()});a.callbackNode=b;}}}
  function Qj(a,b){Jj=0;if(b)return b=Pg(),Rj(a,b),Z$1(a),null;var c=Oj(a);if(0!==c){b=a.callbackNode;if((T$1&(oj|pj))!==S$1)throw Error(u$1(327));Sj();a===U$1&&c===W$1||Tj(a,c);if(null!==V$1){var d=T$1;T$1|=oj;var e=Uj();do try{Vj();break}catch(h){Wj(a,h);}while(1);rg();T$1=d;lj.current=e;if(X$1===rj)throw b=wj,Tj(a,c),Mj(a,c),Z$1(a),b;if(null===V$1)switch(e=a.finishedWork=a.current.alternate,a.finishedExpirationTime=c,d=X$1,U$1=null,d){case qj:case rj:throw Error(u$1(345));case sj:Rj(a,2<c?2:c);break;case tj:Mj(a,c);d=a.lastSuspendedTime;
  c===d&&(a.nextKnownPendingLevel=Xj(e));if(1073741823===xj&&(e=bj+Cj-cg(),10<e)){if(Bj){var f=a.lastPingedTime;if(0===f||f>=c){a.lastPingedTime=c;Tj(a,c);break}}f=Oj(a);if(0!==f&&f!==c)break;if(0!==d&&d!==c){a.lastPingedTime=d;break}a.timeoutHandle=pe(Yj.bind(null,a),e);break}Yj(a);break;case uj:Mj(a,c);d=a.lastSuspendedTime;c===d&&(a.nextKnownPendingLevel=Xj(e));if(Bj&&(e=a.lastPingedTime,0===e||e>=c)){a.lastPingedTime=c;Tj(a,c);break}e=Oj(a);if(0!==e&&e!==c)break;if(0!==d&&d!==c){a.lastPingedTime=
  d;break}1073741823!==yj?d=10*(1073741821-yj)-cg():1073741823===xj?d=0:(d=10*(1073741821-xj)-5E3,e=cg(),c=10*(1073741821-c)-e,d=e-d,0>d&&(d=0),d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*kj(d/1960))-d,c<d&&(d=c));if(10<d){a.timeoutHandle=pe(Yj.bind(null,a),d);break}Yj(a);break;case vj:if(1073741823!==xj&&null!==zj){f=xj;var g=zj;d=g.busyMinDurationMs|0;0>=d?d=0:(e=g.busyDelayMs|0,f=cg()-(10*(1073741821-f)-(g.timeoutMs|0||5E3)),d=f<=e?0:e+d-f);if(10<d){Mj(a,c);a.timeoutHandle=
  pe(Yj.bind(null,a),d);break}}Yj(a);break;default:throw Error(u$1(329));}Z$1(a);if(a.callbackNode===b)return Qj.bind(null,a)}}return null}
  function Lj(a){var b=a.lastExpiredTime;b=0!==b?b:1073741823;if(a.finishedExpirationTime===b)Yj(a);else{if((T$1&(oj|pj))!==S$1)throw Error(u$1(327));Sj();a===U$1&&b===W$1||Tj(a,b);if(null!==V$1){var c=T$1;T$1|=oj;var d=Uj();do try{Zj();break}catch(e){Wj(a,e);}while(1);rg();T$1=c;lj.current=d;if(X$1===rj)throw c=wj,Tj(a,b),Mj(a,b),Z$1(a),c;if(null!==V$1)throw Error(u$1(261));a.finishedWork=a.current.alternate;a.finishedExpirationTime=b;U$1=null;Yj(a);Z$1(a);}}return null}
  function ak(){if(null!==Gj){var a=Gj;Gj=null;a.forEach(function(a,c){Rj(c,a);Z$1(c);});jg();}}function bk(a,b){var c=T$1;T$1|=1;try{return a(b)}finally{T$1=c,T$1===S$1&&jg();}}function ck(a,b){var c=T$1;T$1&=-2;T$1|=nj;try{return a(b)}finally{T$1=c,T$1===S$1&&jg();}}
  function Tj(a,b){a.finishedWork=null;a.finishedExpirationTime=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,qe(c));if(null!==V$1)for(c=V$1.return;null!==c;){var d=c;switch(d.tag){case 1:var e=d.type.childContextTypes;null!==e&&void 0!==e&&Ff();break;case 3:nh();Gf();break;case 5:ph(d);break;case 4:nh();break;case 13:G$1(M$1);break;case 19:G$1(M$1);break;case 10:tg(d);}c=c.return;}U$1=a;V$1=ah(a.current,null);W$1=b;X$1=qj;wj=null;yj=xj=1073741823;zj=null;Aj=0;Bj=!1;}
  function Wj(a,b){do{try{rg();Mh();if(null===V$1||null===V$1.return)return X$1=rj,wj=b,null;a:{var c=a,d=V$1.return,e=V$1,f=b;b=W$1;e.effectTag|=2048;e.firstEffect=e.lastEffect=null;if(null!==f&&"object"===typeof f&&"function"===typeof f.then){var g=f,h=0!==(M$1.current&1),k=d;do{var l;if(l=13===k.tag){var m=k.memoizedState;if(null!==m)l=null!==m.dehydrated?!0:!1;else{var C=k.memoizedProps;l=void 0===C.fallback?!1:!0!==C.unstable_avoidThisFallback?!0:h?!1:!0;}}if(l){var y=k.updateQueue;if(null===y){var H=new Set;
  H.add(g);k.updateQueue=H;}else y.add(g);if(0===(k.mode&2)){k.effectTag|=64;e.effectTag&=-2981;if(1===e.tag)if(null===e.alternate)e.tag=17;else{var z=Bg(1073741823,null);z.tag=2;Dg(e,z);}e.expirationTime=1073741823;break a}f=void 0;e=b;var ta=c.pingCache;null===ta?(ta=c.pingCache=new ej,f=new Set,ta.set(g,f)):(f=ta.get(g),void 0===f&&(f=new Set,ta.set(g,f)));if(!f.has(e)){f.add(e);var r=dk.bind(null,c,g,e);g.then(r,r);}k.effectTag|=4096;k.expirationTime=b;break a}k=k.return;}while(null!==k);f=Error((Wa(e.type)||
  "A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+Xa(e));}X$1!==vj&&(X$1=sj);f=Ni(f,e);k=d;do{switch(k.tag){case 3:g=f;k.effectTag|=4096;k.expirationTime=b;var x=fj(k,g,b);Eg(k,x);break a;case 1:g=f;var A=k.type,p=k.stateNode;if(0===(k.effectTag&64)&&("function"===typeof A.getDerivedStateFromError||null!==p&&"function"===typeof p.componentDidCatch&&
  (null===jj||!jj.has(p)))){k.effectTag|=4096;k.expirationTime=b;var t=ij(k,g,b);Eg(k,t);break a}}k=k.return;}while(null!==k)}V$1=ek(V$1);}catch(v){b=v;continue}break}while(1)}function Uj(){var a=lj.current;lj.current=Lh;return null===a?Lh:a}function Ig(a,b){a<xj&&2<a&&(xj=a);null!==b&&a<yj&&2<a&&(yj=a,zj=b);}function Jg(a){a>Aj&&(Aj=a);}function Zj(){for(;null!==V$1;)V$1=fk(V$1);}function Vj(){for(;null!==V$1&&!Of();)V$1=fk(V$1);}
  function fk(a){var b=gk(a.alternate,a,W$1);a.memoizedProps=a.pendingProps;null===b&&(b=ek(a));mj.current=null;return b}
  function ek(a){V$1=a;do{var b=V$1.alternate;a=V$1.return;if(0===(V$1.effectTag&2048)){a:{var c=b;b=V$1;var d=W$1;var e=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:L$1(b.type)&&Ff();break;case 3:nh();Gf();e=b.stateNode;e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null);(null===c||null===c.child)&&ki(b)&&Ci(b);Ii(b);break;case 5:ph(b);d=lh(kh.current);var f=b.type;if(null!==c&&null!=b.stateNode)Ji(c,b,f,e,d),c.ref!==b.ref&&(b.effectTag|=128);else if(e){var g=
  lh(ih.current);if(ki(b)){e=b;var h=e.stateNode;c=e.type;var k=e.memoizedProps,l=d;h[ue]=e;h[ve]=k;f=void 0;d=h;switch(c){case "iframe":case "object":case "embed":F$1("load",d);break;case "video":case "audio":for(h=0;h<cc.length;h++)F$1(cc[h],d);break;case "source":F$1("error",d);break;case "img":case "image":case "link":F$1("error",d);F$1("load",d);break;case "form":F$1("reset",d);F$1("submit",d);break;case "details":F$1("toggle",d);break;case "input":Bb(d,k);F$1("invalid",d);$d(l,"onChange");break;case "select":d._wrapperState=
  {wasMultiple:!!k.multiple};F$1("invalid",d);$d(l,"onChange");break;case "textarea":Lb(d,k),F$1("invalid",d),$d(l,"onChange");}Yd(c,k);h=null;for(f in k)k.hasOwnProperty(f)&&(g=k[f],"children"===f?"string"===typeof g?d.textContent!==g&&(h=["children",g]):"number"===typeof g&&d.textContent!==""+g&&(h=["children",""+g]):ia.hasOwnProperty(f)&&null!=g&&$d(l,f));switch(c){case "input":yb(d);Gb(d,k,!0);break;case "textarea":yb(d);Nb(d);break;case "select":case "option":break;default:"function"===typeof k.onClick&&
  (d.onclick=ae);}f=h;e.updateQueue=f;e=null!==f?!0:!1;e&&Ci(b);}else{c=b;l=f;k=e;h=9===d.nodeType?d:d.ownerDocument;g===Ob.html&&(g=Pb(l));g===Ob.html?"script"===l?(k=h.createElement("div"),k.innerHTML="<script>\x3c/script>",h=k.removeChild(k.firstChild)):"string"===typeof k.is?h=h.createElement(l,{is:k.is}):(h=h.createElement(l),"select"===l&&(l=h,k.multiple?l.multiple=!0:k.size&&(l.size=k.size))):h=h.createElementNS(g,l);k=h;k[ue]=c;k[ve]=e;Hi(k,b,!1,!1);b.stateNode=k;l=f;c=e;var m=d,C=Zd(l,c);switch(l){case "iframe":case "object":case "embed":F$1("load",
  k);d=c;break;case "video":case "audio":for(d=0;d<cc.length;d++)F$1(cc[d],k);d=c;break;case "source":F$1("error",k);d=c;break;case "img":case "image":case "link":F$1("error",k);F$1("load",k);d=c;break;case "form":F$1("reset",k);F$1("submit",k);d=c;break;case "details":F$1("toggle",k);d=c;break;case "input":Bb(k,c);d=Ab(k,c);F$1("invalid",k);$d(m,"onChange");break;case "option":d=Ib(k,c);break;case "select":k._wrapperState={wasMultiple:!!c.multiple};d=objectAssign({},c,{value:void 0});F$1("invalid",k);$d(m,"onChange");break;case "textarea":Lb(k,
  c);d=Kb(k,c);F$1("invalid",k);$d(m,"onChange");break;default:d=c;}Yd(l,d);h=void 0;g=l;var y=k,H=d;for(h in H)if(H.hasOwnProperty(h)){var z=H[h];"style"===h?Wd(y,z):"dangerouslySetInnerHTML"===h?(z=z?z.__html:void 0,null!=z&&Sb(y,z)):"children"===h?"string"===typeof z?("textarea"!==g||""!==z)&&Tb(y,z):"number"===typeof z&&Tb(y,""+z):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(ia.hasOwnProperty(h)?null!=z&&$d(m,h):null!=z&&vb(y,h,z,C));}switch(l){case "input":yb(k);
  Gb(k,c,!1);break;case "textarea":yb(k);Nb(k);break;case "option":null!=c.value&&k.setAttribute("value",""+ub(c.value));break;case "select":d=k;d.multiple=!!c.multiple;k=c.value;null!=k?Jb(d,!!c.multiple,k,!1):null!=c.defaultValue&&Jb(d,!!c.multiple,c.defaultValue,!0);break;default:"function"===typeof d.onClick&&(k.onclick=ae);}(e=ne(f,e))&&Ci(b);}null!==b.ref&&(b.effectTag|=128);}else if(null===b.stateNode)throw Error(u$1(166));break;case 6:if(c&&null!=b.stateNode)Ki(c,b,c.memoizedProps,e);else{if("string"!==
  typeof e&&null===b.stateNode)throw Error(u$1(166));d=lh(kh.current);lh(ih.current);ki(b)?(e=b,f=e.stateNode,d=e.memoizedProps,f[ue]=e,(e=f.nodeValue!==d)&&Ci(b)):(f=b,e=(9===d.nodeType?d:d.ownerDocument).createTextNode(e),e[ue]=f,b.stateNode=e);}break;case 11:break;case 13:G$1(M$1);e=b.memoizedState;if(0!==(b.effectTag&64)){b.expirationTime=d;break a}e=null!==e;f=!1;null===c?void 0!==b.memoizedProps.fallback&&ki(b):(d=c.memoizedState,f=null!==d,e||null===d||(d=c.child.sibling,null!==d&&(k=b.firstEffect,
  null!==k?(b.firstEffect=d,d.nextEffect=k):(b.firstEffect=b.lastEffect=d,d.nextEffect=null),d.effectTag=8)));if(e&&!f&&0!==(b.mode&2))if(null===c&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(M$1.current&1))X$1===qj&&(X$1=tj);else{if(X$1===qj||X$1===tj)X$1=uj;0!==Aj&&null!==U$1&&(Mj(U$1,W$1),Nj(U$1,Aj));}if(e||f)b.effectTag|=4;break;case 7:break;case 8:break;case 12:break;case 4:nh();Ii(b);break;case 10:tg(b);break;case 9:break;case 14:break;case 17:L$1(b.type)&&Ff();break;case 19:G$1(M$1);e=b.memoizedState;if(null===
  e)break;f=0!==(b.effectTag&64);k=e.rendering;if(null===k)if(f)Li(e,!1);else{if(X$1!==qj||null!==c&&0!==(c.effectTag&64))for(c=b.child;null!==c;){k=qh(c);if(null!==k){b.effectTag|=64;Li(e,!1);f=k.updateQueue;null!==f&&(b.updateQueue=f,b.effectTag|=4);null===e.lastEffect&&(b.firstEffect=null);b.lastEffect=e.lastEffect;e=d;for(f=b.child;null!==f;)d=f,c=e,d.effectTag&=2,d.nextEffect=null,d.firstEffect=null,d.lastEffect=null,k=d.alternate,null===k?(d.childExpirationTime=0,d.expirationTime=c,d.child=null,
  d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null):(d.childExpirationTime=k.childExpirationTime,d.expirationTime=k.expirationTime,d.child=k.child,d.memoizedProps=k.memoizedProps,d.memoizedState=k.memoizedState,d.updateQueue=k.updateQueue,c=k.dependencies,d.dependencies=null===c?null:{expirationTime:c.expirationTime,firstContext:c.firstContext,responders:c.responders}),f=f.sibling;I$1(M$1,M$1.current&1|2);b=b.child;break a}c=c.sibling;}}else{if(!f)if(c=qh(k),null!==c){if(b.effectTag|=
  64,f=!0,d=c.updateQueue,null!==d&&(b.updateQueue=d,b.effectTag|=4),Li(e,!0),null===e.tail&&"hidden"===e.tailMode&&!k.alternate){b=b.lastEffect=e.lastEffect;null!==b&&(b.nextEffect=null);break}}else cg()>e.tailExpiration&&1<d&&(b.effectTag|=64,f=!0,Li(e,!1),b.expirationTime=b.childExpirationTime=d-1);e.isBackwards?(k.sibling=b.child,b.child=k):(d=e.last,null!==d?d.sibling=k:b.child=k,e.last=k);}if(null!==e.tail){0===e.tailExpiration&&(e.tailExpiration=cg()+500);d=e.tail;e.rendering=d;e.tail=d.sibling;
  e.lastEffect=b.lastEffect;d.sibling=null;e=M$1.current;e=f?e&1|2:e&1;I$1(M$1,e);b=d;break a}break;case 20:break;case 21:break;default:throw Error(u$1(156,b.tag));}b=null;}e=V$1;if(1===W$1||1!==e.childExpirationTime){f=0;for(d=e.child;null!==d;)c=d.expirationTime,k=d.childExpirationTime,c>f&&(f=c),k>f&&(f=k),d=d.sibling;e.childExpirationTime=f;}if(null!==b)return b;null!==a&&0===(a.effectTag&2048)&&(null===a.firstEffect&&(a.firstEffect=V$1.firstEffect),null!==V$1.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=
  V$1.firstEffect),a.lastEffect=V$1.lastEffect),1<V$1.effectTag&&(null!==a.lastEffect?a.lastEffect.nextEffect=V$1:a.firstEffect=V$1,a.lastEffect=V$1));}else{b=Mi(V$1);if(null!==b)return b.effectTag&=2047,b;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=2048);}b=V$1.sibling;if(null!==b)return b;V$1=a;}while(null!==V$1);X$1===qj&&(X$1=vj);return null}function Xj(a){var b=a.expirationTime;a=a.childExpirationTime;return b>a?b:a}function Yj(a){var b=dg();fg(99,ik.bind(null,a,b));return null}
  function ik(a,b){do Sj();while(null!==Ej);if((T$1&(oj|pj))!==S$1)throw Error(u$1(327));var c=a.finishedWork,d=a.finishedExpirationTime;if(null===c)return null;a.finishedWork=null;a.finishedExpirationTime=0;if(c===a.current)throw Error(u$1(177));a.callbackNode=null;a.callbackExpirationTime=0;a.callbackPriority=90;a.nextKnownPendingLevel=0;var e=Xj(c);a.firstPendingTime=e;d<=a.lastSuspendedTime?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:d<=a.firstSuspendedTime&&(a.firstSuspendedTime=
  d-1);d<=a.lastPingedTime&&(a.lastPingedTime=0);d<=a.lastExpiredTime&&(a.lastExpiredTime=0);a===U$1&&(V$1=U$1=null,W$1=0);1<c.effectTag?null!==c.lastEffect?(c.lastEffect.nextEffect=c,e=c.firstEffect):e=c:e=c.firstEffect;if(null!==e){var f=T$1;T$1|=pj;mj.current=null;le=Ld;var g=fe();if(ge(g)){if("selectionStart"in g)var h={start:g.selectionStart,end:g.selectionEnd};else a:{h=(h=g.ownerDocument)&&h.defaultView||window;var k=h.getSelection&&h.getSelection();if(k&&0!==k.rangeCount){h=k.anchorNode;var l=k.anchorOffset,
  m=k.focusNode;k=k.focusOffset;try{h.nodeType,m.nodeType;}catch(Db){h=null;break a}var C=0,y=-1,H=-1,z=0,ta=0,r=g,x=null;b:for(;;){for(var A;;){r!==h||0!==l&&3!==r.nodeType||(y=C+l);r!==m||0!==k&&3!==r.nodeType||(H=C+k);3===r.nodeType&&(C+=r.nodeValue.length);if(null===(A=r.firstChild))break;x=r;r=A;}for(;;){if(r===g)break b;x===h&&++z===l&&(y=C);x===m&&++ta===k&&(H=C);if(null!==(A=r.nextSibling))break;r=x;x=r.parentNode;}r=A;}h=-1===y||-1===H?null:{start:y,end:H};}else h=null;}h=h||{start:0,end:0};}else h=
  null;me={focusedElem:g,selectionRange:h};Ld=!1;Y$1=e;do try{jk();}catch(Db){if(null===Y$1)throw Error(u$1(330));Ri(Y$1,Db);Y$1=Y$1.nextEffect;}while(null!==Y$1);Y$1=e;do try{for(g=a,h=b;null!==Y$1;){var p=Y$1.effectTag;p&16&&Tb(Y$1.stateNode,"");if(p&128){var t=Y$1.alternate;if(null!==t){var v=t.ref;null!==v&&("function"===typeof v?v(null):v.current=null);}}switch(p&1038){case 2:$i(Y$1);Y$1.effectTag&=-3;break;case 6:$i(Y$1);Y$1.effectTag&=-3;aj(Y$1.alternate,Y$1);break;case 1024:Y$1.effectTag&=-1025;break;case 1028:Y$1.effectTag&=-1025;aj(Y$1.alternate,
  Y$1);break;case 4:aj(Y$1.alternate,Y$1);break;case 8:l=Y$1,Xi(g,l,h),Yi(l);}Y$1=Y$1.nextEffect;}}catch(Db){if(null===Y$1)throw Error(u$1(330));Ri(Y$1,Db);Y$1=Y$1.nextEffect;}while(null!==Y$1);v=me;t=fe();p=v.focusedElem;h=v.selectionRange;if(t!==p&&p&&p.ownerDocument&&ee(p.ownerDocument.documentElement,p)){null!==h&&ge(p)&&(t=h.start,v=h.end,void 0===v&&(v=t),"selectionStart"in p?(p.selectionStart=t,p.selectionEnd=Math.min(v,p.value.length)):(v=(t=p.ownerDocument||document)&&t.defaultView||window,v.getSelection&&(v=v.getSelection(),
  l=p.textContent.length,g=Math.min(h.start,l),h=void 0===h.end?g:Math.min(h.end,l),!v.extend&&g>h&&(l=h,h=g,g=l),l=de(p,g),m=de(p,h),l&&m&&(1!==v.rangeCount||v.anchorNode!==l.node||v.anchorOffset!==l.offset||v.focusNode!==m.node||v.focusOffset!==m.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),v.removeAllRanges(),g>h?(v.addRange(t),v.extend(m.node,m.offset)):(t.setEnd(m.node,m.offset),v.addRange(t))))));t=[];for(v=p;v=v.parentNode;)1===v.nodeType&&t.push({element:v,left:v.scrollLeft,top:v.scrollTop});
  "function"===typeof p.focus&&p.focus();for(p=0;p<t.length;p++)v=t[p],v.element.scrollLeft=v.left,v.element.scrollTop=v.top;}me=null;Ld=!!le;le=null;a.current=c;Y$1=e;do try{for(p=d;null!==Y$1;){var Dh=Y$1.effectTag;if(Dh&36){var dc=Y$1.alternate;t=Y$1;v=p;switch(t.tag){case 0:case 11:case 15:Ui(16,32,t);break;case 1:var fd=t.stateNode;if(t.effectTag&4)if(null===dc)fd.componentDidMount();else{var hk=t.elementType===t.type?dc.memoizedProps:mg(t.type,dc.memoizedProps);fd.componentDidUpdate(hk,dc.memoizedState,
  fd.__reactInternalSnapshotBeforeUpdate);}var Eh=t.updateQueue;null!==Eh&&Kg(t,Eh,fd,v);break;case 3:var Fh=t.updateQueue;if(null!==Fh){g=null;if(null!==t.child)switch(t.child.tag){case 5:g=t.child.stateNode;break;case 1:g=t.child.stateNode;}Kg(t,Fh,g,v);}break;case 5:var xk=t.stateNode;null===dc&&t.effectTag&4&&ne(t.type,t.memoizedProps)&&xk.focus();break;case 6:break;case 4:break;case 12:break;case 13:if(null===t.memoizedState){var Di=t.alternate;if(null!==Di){var Ei=Di.memoizedState;if(null!==Ei){var Fi=
  Ei.dehydrated;null!==Fi&&Lc(Fi);}}}break;case 19:case 17:case 20:case 21:break;default:throw Error(u$1(163));}}if(Dh&128){t=void 0;var xd=Y$1.ref;if(null!==xd){var Gi=Y$1.stateNode;switch(Y$1.tag){case 5:t=Gi;break;default:t=Gi;}"function"===typeof xd?xd(t):xd.current=t;}}Y$1=Y$1.nextEffect;}}catch(Db){if(null===Y$1)throw Error(u$1(330));Ri(Y$1,Db);Y$1=Y$1.nextEffect;}while(null!==Y$1);Y$1=null;Yf();T$1=f;}else a.current=c;if(Dj)Dj=!1,Ej=a,Fj=b;else for(Y$1=e;null!==Y$1;)b=Y$1.nextEffect,Y$1.nextEffect=null,Y$1=b;b=a.firstPendingTime;0===b&&
  (jj=null);1073741823===b?a===Ij?Hj++:(Hj=0,Ij=a):Hj=0;"function"===typeof kk&&kk(c.stateNode,d);Z$1(a);if(gj)throw gj=!1,a=hj,hj=null,a;if((T$1&nj)!==S$1)return null;jg();return null}function jk(){for(;null!==Y$1;){var a=Y$1.effectTag;0!==(a&256)&&Ti(Y$1.alternate,Y$1);0===(a&512)||Dj||(Dj=!0,gg(97,function(){Sj();return null}));Y$1=Y$1.nextEffect;}}function Sj(){if(90!==Fj){var a=97<Fj?97:Fj;Fj=90;return fg(a,lk)}}
  function lk(){if(null===Ej)return !1;var a=Ej;Ej=null;if((T$1&(oj|pj))!==S$1)throw Error(u$1(331));var b=T$1;T$1|=pj;for(a=a.current.firstEffect;null!==a;){try{var c=a;if(0!==(c.effectTag&512))switch(c.tag){case 0:case 11:case 15:Ui(128,0,c),Ui(0,64,c);}}catch(d){if(null===a)throw Error(u$1(330));Ri(a,d);}c=a.nextEffect;a.nextEffect=null;a=c;}T$1=b;jg();return !0}function mk(a,b,c){b=Ni(c,b);b=fj(a,b,1073741823);Dg(a,b);a=Kj(a,1073741823);null!==a&&Z$1(a);}
  function Ri(a,b){if(3===a.tag)mk(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){mk(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===jj||!jj.has(d))){a=Ni(b,a);a=ij(c,a,1073741823);Dg(c,a);c=Kj(c,1073741823);null!==c&&Z$1(c);break}}c=c.return;}}
  function dk(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);U$1===a&&W$1===c?X$1===uj||X$1===tj&&1073741823===xj&&cg()-bj<Cj?Tj(a,W$1):Bj=!0:Pj(a,c)&&(b=a.lastPingedTime,0!==b&&b<c||(a.lastPingedTime=c,a.finishedExpirationTime===c&&(a.finishedExpirationTime=0,a.finishedWork=null),Z$1(a)));}function dj(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=Pg(),b=Qg(b,a,null));a=Kj(a,b);null!==a&&Z$1(a);}var gk;
  gk=function(a,b,c){var d=b.expirationTime;if(null!==a){var e=b.pendingProps;if(a.memoizedProps!==e||K$1.current)wg=!0;else{if(d<c){wg=!1;switch(b.tag){case 3:wi(b);li();break;case 5:oh(b);if(b.mode&4&&1!==c&&e.hidden)return b.expirationTime=b.childExpirationTime=1,null;break;case 1:L$1(b.type)&&Jf(b);break;case 4:mh(b,b.stateNode.containerInfo);break;case 10:sg(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;if(0!==d&&d>=c)return yi(a,b,c);I$1(M$1,M$1.current&
  1);b=oi(a,b,c);return null!==b?b.sibling:null}I$1(M$1,M$1.current&1);break;case 19:d=b.childExpirationTime>=c;if(0!==(a.effectTag&64)){if(d)return Bi(a,b,c);b.effectTag|=64;}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null);I$1(M$1,M$1.current);if(!d)return null}return oi(a,b,c)}wg=!1;}}else wg=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Ef(b,J$1.current);vg(b,c);e=Ih(null,b,d,a,e,c);b.effectTag|=1;if("object"===
  typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;Mh();if(L$1(d)){var f=!0;Jf(b);}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;var g=d.getDerivedStateFromProps;"function"===typeof g&&Og(b,d,g,a);e.updater=Sg;b.stateNode=e;e._reactInternalFiber=b;Wg(b,d,a,c);b=vi(null,b,d,!0,f,c);}else b.tag=0,R$1(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;Va(e);if(1!==e._status)throw e._result;
  e=e._result;b.type=e;f=b.tag=nk(e);a=mg(e,a);switch(f){case 0:b=si(null,b,e,a,c);break;case 1:b=ui(null,b,e,a,c);break;case 11:b=ni(null,b,e,a,c);break;case 14:b=pi(null,b,e,mg(e.type,a),d,c);break;default:throw Error(u$1(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:mg(d,e),si(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:mg(d,e),ui(a,b,d,e,c);case 3:wi(b);d=b.updateQueue;if(null===d)throw Error(u$1(282));e=b.memoizedState;e=null!==e?e.element:
  null;Hg(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===e)li(),b=oi(a,b,c);else{if(e=b.stateNode.hydrate)di=re(b.stateNode.containerInfo.firstChild),ci=b,e=ei=!0;if(e)for(c=gh(b,null,d,c),b.child=c;c;)c.effectTag=c.effectTag&-3|1024,c=c.sibling;else R$1(a,b,d,c),li();b=b.child;}return b;case 5:return oh(b),null===a&&ii(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,oe(d,e)?g=null:null!==f&&oe(d,f)&&(b.effectTag|=16),ti(a,b),b.mode&4&&1!==c&&e.hidden?(b.expirationTime=
  b.childExpirationTime=1,b=null):(R$1(a,b,g,c),b=b.child),b;case 6:return null===a&&ii(b),null;case 13:return yi(a,b,c);case 4:return mh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=fh(b,null,d,c):R$1(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:mg(d,e),ni(a,b,d,e,c);case 7:return R$1(a,b,b.pendingProps,c),b.child;case 8:return R$1(a,b,b.pendingProps.children,c),b.child;case 12:return R$1(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;
  e=b.pendingProps;g=b.memoizedProps;f=e.value;sg(b,f);if(null!==g){var h=g.value;f=of(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0;if(0===f){if(g.children===e.children&&!K$1.current){b=oi(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==k){g=h.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=Bg(c,null),l.tag=2,Dg(h,l));h.expirationTime<c&&(h.expirationTime=
  c);l=h.alternate;null!==l&&l.expirationTime<c&&(l.expirationTime=c);ug(h.return,c);k.expirationTime<c&&(k.expirationTime=c);break}l=l.next;}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return;}h=g;}}R$1(a,b,e.children,c);b=b.child;}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,vg(b,c),e=xg(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,R$1(a,b,d,c),b.child;
  case 14:return e=b.type,f=mg(e,b.pendingProps),f=mg(e.type,f),pi(a,b,e,f,d,c);case 15:return ri(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:mg(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,L$1(d)?(a=!0,Jf(b)):a=!1,vg(b,c),Ug(b,d,e),Wg(b,d,e,c),vi(null,b,d,!0,a,c);case 19:return Bi(a,b,c)}throw Error(u$1(156,b.tag));};var kk=null,Wi=null;
  function ok(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return !1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return !0;try{var c=b.inject(a);kk=function(a){try{b.onCommitFiberRoot(c,a,void 0,64===(a.current.effectTag&64));}catch(e){}};Wi=function(a){try{b.onCommitFiberUnmount(c,a);}catch(e){}};}catch(d){}return !0}
  function pk(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null;}function gi(a,b,c,d){return new pk(a,b,c,d)}
  function qi(a){a=a.prototype;return !(!a||!a.isReactComponent)}function nk(a){if("function"===typeof a)return qi(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Oa)return 11;if(a===Ra)return 14}return 2}
  function ah(a,b){var c=a.alternate;null===c?(c=gi(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{expirationTime:b.expirationTime,
  firstContext:b.firstContext,responders:b.responders};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
  function ch(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)qi(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case Ia:return eh(c.children,e,f,b);case Na:g=8;e|=7;break;case Ja:g=8;e|=1;break;case Ka:return a=gi(12,c,b,e|8),a.elementType=Ka,a.type=Ka,a.expirationTime=f,a;case Pa:return a=gi(13,c,b,e),a.type=Pa,a.elementType=Pa,a.expirationTime=f,a;case Qa:return a=gi(19,c,b,e),a.elementType=Qa,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case La:g=
  10;break a;case Ma:g=9;break a;case Oa:g=11;break a;case Ra:g=14;break a;case Sa:g=16;d=null;break a}throw Error(u$1(130,null==a?a:typeof a,""));}b=gi(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function eh(a,b,c,d){a=gi(7,a,d,b);a.expirationTime=c;return a}function bh(a,b,c){a=gi(6,a,null,b);a.expirationTime=c;return a}
  function dh(a,b,c){b=gi(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
  function qk(a,b,c){this.tag=b;this.current=null;this.containerInfo=a;this.pingCache=this.pendingChildren=null;this.finishedExpirationTime=0;this.finishedWork=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=90;this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0;}
  function Pj(a,b){var c=a.firstSuspendedTime;a=a.lastSuspendedTime;return 0!==c&&c>=b&&a<=b}function Mj(a,b){var c=a.firstSuspendedTime,d=a.lastSuspendedTime;c<b&&(a.firstSuspendedTime=b);if(d>b||0===c)a.lastSuspendedTime=b;b<=a.lastPingedTime&&(a.lastPingedTime=0);b<=a.lastExpiredTime&&(a.lastExpiredTime=0);}
  function Nj(a,b){b>a.firstPendingTime&&(a.firstPendingTime=b);var c=a.firstSuspendedTime;0!==c&&(b>=c?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:b>=a.lastSuspendedTime&&(a.lastSuspendedTime=b+1),b>a.nextKnownPendingLevel&&(a.nextKnownPendingLevel=b));}function Rj(a,b){var c=a.lastExpiredTime;if(0===c||c>b)a.lastExpiredTime=b;}
  function rk(a,b,c,d){var e=b.current,f=Pg(),g=Mg.suspense;f=Qg(f,e,g);a:if(c){c=c._reactInternalFiber;b:{if(ec(c)!==c||1!==c.tag)throw Error(u$1(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(L$1(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return;}while(null!==h);throw Error(u$1(171));}if(1===c.tag){var k=c.type;if(L$1(k)){c=If(c,k,h);break a}}c=h;}else c=Cf;null===b.context?b.context=c:b.pendingContext=c;b=Bg(f,g);b.payload={element:a};d=void 0===
  d?null:d;null!==d&&(b.callback=d);Dg(e,b);Rg(e,f);return f}function sk(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function tk(a,b){a=a.memoizedState;null!==a&&null!==a.dehydrated&&a.retryTime<b&&(a.retryTime=b);}function uk(a,b){tk(a,b);(a=a.alternate)&&tk(a,b);}
  function vk(a,b,c){c=null!=c&&!0===c.hydrate;var d=new qk(a,b,c),e=gi(3,null,null,2===b?7:1===b?3:0);d.current=e;e.stateNode=d;a[we]=d.current;c&&0!==b&&wc(9===a.nodeType?a:a.ownerDocument);this._internalRoot=d;}vk.prototype.render=function(a,b){rk(a,this._internalRoot,null,void 0===b?null:b);};vk.prototype.unmount=function(a){var b=this._internalRoot,c=void 0===a?null:a,d=b.containerInfo;rk(null,b,null,function(){d[we]=null;null!==c&&c();});};
  function wk(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function yk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new vk(a,0,b?{hydrate:!0}:void 0)}
  function zk(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=sk(g);h.call(a);};}rk(b,g,a,e);}else{f=c._reactRootContainer=yk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=sk(g);k.call(a);};}ck(function(){rk(b,g,a,e);});}return sk(g)}function Ak(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return {$$typeof:Ha,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
  jc=function(a){if(13===a.tag){var b=lg(Pg(),150,100);Rg(a,b);uk(a,b);}};kc=function(a){if(13===a.tag){Pg();var b=kg++;Rg(a,b);uk(a,b);}};lc=function(a){if(13===a.tag){var b=Pg();b=Qg(b,a,null);Rg(a,b);uk(a,b);}};
  Za=function(a,b,c){switch(b){case "input":Eb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=ye(d);if(!e)throw Error(u$1(90));zb(d);Eb(d,e);}}}break;case "textarea":Mb(a,c);break;case "select":b=c.value,null!=b&&Jb(a,!!c.multiple,b,!1);}};eb=bk;
  fb=function(a,b,c,d){var e=T$1;T$1|=4;try{return fg(98,a.bind(null,b,c,d))}finally{T$1=e,T$1===S$1&&jg();}};gb=function(){(T$1&(1|oj|pj))===S$1&&(ak(),Sj());};hb=function(a,b){var c=T$1;T$1|=2;try{return a(b)}finally{T$1=c,T$1===S$1&&jg();}};function Bk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!wk(b))throw Error(u$1(200));return Ak(a,b,null,c)}
  var Ck={createPortal:Bk,findDOMNode:function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;if(void 0===b){if("function"===typeof a.render)throw Error(u$1(188));throw Error(u$1(268,Object.keys(a)));}a=ic(b);a=null===a?null:a.stateNode;return a},hydrate:function(a,b,c){if(!wk(b))throw Error(u$1(200));return zk(null,a,b,!0,c)},render:function(a,b,c){if(!wk(b))throw Error(u$1(200));return zk(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){if(!wk(c))throw Error(u$1(200));
  if(null==a||void 0===a._reactInternalFiber)throw Error(u$1(38));return zk(a,b,c,!1,d)},unmountComponentAtNode:function(a){if(!wk(a))throw Error(u$1(40));return a._reactRootContainer?(ck(function(){zk(null,null,a,!1,function(){a._reactRootContainer=null;a[we]=null;});}),!0):!1},unstable_createPortal:function(){return Bk.apply(void 0,arguments)},unstable_batchedUpdates:bk,flushSync:function(a,b){if((T$1&(oj|pj))!==S$1)throw Error(u$1(187));var c=T$1;T$1|=1;try{return fg(99,a.bind(null,b))}finally{T$1=c,jg();}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[Cc,
  xe,ye,Ca.injectEventPluginsByName,fa,Sc,function(a){ya(a,Rc);},cb,db,Pd,Ba,Sj,{current:!1}]}};
  (function(a){var b=a.findFiberByHostInstance;return ok(objectAssign({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ea.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=ic(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:Fc,bundleType:0,version:"16.12.0",
  rendererPackageName:"react-dom"});var Dk={default:Ck},Ek=Dk&&Ck||Dk;var reactDom_production_min=Ek.default||Ek;

  var reactDom = createCommonjsModule(function (module) {

  function checkDCE() {
    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
    ) {
      return;
    }
    try {
      // Verify that the code above has been dead code eliminated (DCE'd).
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      // DevTools shouldn't crash React, no matter what.
      // We should still report in case we break this code.
      console.error(err);
    }
  }

  {
    // DCE check should happen before ReactDOM bundle executes so that
    // DevTools can report bad minification during injection.
    checkDCE();
    module.exports = reactDom_production_min;
  }
  });
  var reactDom_1 = reactDom.createPortal;
  var reactDom_2 = reactDom.findDOMNode;

  function _extends$1() {
    _extends$1 = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends$1.apply(this, arguments);
  }

  function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

  function _typeof$2(obj) {
    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      _typeof$2 = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      _typeof$2 = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return _typeof$2(obj);
  }

  function isObject(item) {
    return item && _typeof$2(item) === 'object' && !Array.isArray(item);
  }
  function deepmerge(target, source) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      clone: true
    };
    var output = options.clone ? _extends$1({}, target) : target;

    if (isObject(target) && isObject(source)) {
      Object.keys(source).forEach(function (key) {
        // Avoid prototype pollution
        if (key === '__proto__') {
          return;
        }

        if (isObject(source[key]) && key in target) {
          output[key] = deepmerge(target[key], source[key], options);
        } else {
          output[key] = source[key];
        }
      });
    }

    return output;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  function emptyFunction() {}
  function emptyFunctionWithReset() {}
  emptyFunctionWithReset.resetWarningCache = emptyFunction;

  var factoryWithThrowingShims = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret_1) {
        // It is still safe when called from React.
        return;
      }
      var err = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
        'Use PropTypes.checkPropTypes() to call them. ' +
        'Read more at http://fb.me/use-check-prop-types'
      );
      err.name = 'Invariant Violation';
      throw err;
    }  shim.isRequired = shim;
    function getShim() {
      return shim;
    }  // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,

      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,

      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };

    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = factoryWithThrowingShims();
  }
  });
  var propTypes_1 = propTypes.array;
  var propTypes_2 = propTypes.bool;
  var propTypes_3 = propTypes.func;
  var propTypes_4 = propTypes.number;
  var propTypes_5 = propTypes.object;
  var propTypes_6 = propTypes.string;
  var propTypes_7 = propTypes.symbol;
  var propTypes_8 = propTypes.any;
  var propTypes_9 = propTypes.arrayOf;
  var propTypes_10 = propTypes.element;
  var propTypes_11 = propTypes.instanceOf;
  var propTypes_12 = propTypes.node;
  var propTypes_13 = propTypes.objectOf;
  var propTypes_14 = propTypes.oneOf;
  var propTypes_15 = propTypes.oneOfType;
  var propTypes_16 = propTypes.shape;
  var propTypes_17 = propTypes.exact;
  var propTypes_18 = propTypes.elementType;

  var reactIs_production_min = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports,"__esModule",{value:!0});
  var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):
  60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.fundamental"):60117,w=b?Symbol.for("react.responder"):60118,x=b?Symbol.for("react.scope"):60119;function y(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function z(a){return y(a)===m}
  exports.typeOf=y;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;
  exports.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===v||a.$$typeof===w||a.$$typeof===x)};exports.isAsyncMode=function(a){return z(a)||y(a)===l};exports.isConcurrentMode=z;exports.isContextConsumer=function(a){return y(a)===k};exports.isContextProvider=function(a){return y(a)===h};
  exports.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return y(a)===n};exports.isFragment=function(a){return y(a)===e};exports.isLazy=function(a){return y(a)===t};exports.isMemo=function(a){return y(a)===r};exports.isPortal=function(a){return y(a)===d};exports.isProfiler=function(a){return y(a)===g};exports.isStrictMode=function(a){return y(a)===f};exports.isSuspense=function(a){return y(a)===p};
  });

  unwrapExports(reactIs_production_min);
  var reactIs_production_min_1 = reactIs_production_min.typeOf;
  var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
  var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
  var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
  var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
  var reactIs_production_min_6 = reactIs_production_min.Element;
  var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
  var reactIs_production_min_8 = reactIs_production_min.Fragment;
  var reactIs_production_min_9 = reactIs_production_min.Lazy;
  var reactIs_production_min_10 = reactIs_production_min.Memo;
  var reactIs_production_min_11 = reactIs_production_min.Portal;
  var reactIs_production_min_12 = reactIs_production_min.Profiler;
  var reactIs_production_min_13 = reactIs_production_min.StrictMode;
  var reactIs_production_min_14 = reactIs_production_min.Suspense;
  var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
  var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
  var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
  var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
  var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
  var reactIs_production_min_20 = reactIs_production_min.isElement;
  var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
  var reactIs_production_min_22 = reactIs_production_min.isFragment;
  var reactIs_production_min_23 = reactIs_production_min.isLazy;
  var reactIs_production_min_24 = reactIs_production_min.isMemo;
  var reactIs_production_min_25 = reactIs_production_min.isPortal;
  var reactIs_production_min_26 = reactIs_production_min.isProfiler;
  var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
  var reactIs_production_min_28 = reactIs_production_min.isSuspense;

  var reactIs = createCommonjsModule(function (module) {

  {
    module.exports = reactIs_production_min;
  }
  });
  var reactIs_1 = reactIs.ForwardRef;
  var reactIs_2 = reactIs.isFragment;

  var hasSymbol = typeof Symbol === 'function' && Symbol.for;
  var nested = hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__';

  /**
   * This is the list of the style rule name we use as drop in replacement for the built-in
   * pseudo classes (:checked, :disabled, :focused, etc.).
   *
   * Why do they exist in the first place?
   * These classes are used at a specificity of 2.
   * It allows them to override previously definied styles as well as
   * being untouched by simple user overrides.
   */

  var pseudoClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected']; // Returns a function which generates unique class names based on counters.
  // When new generator function is created, rule counter is reset.
  // We need to reset the rule counter for SSR for each request.
  //
  // It's inspired by
  // https://github.com/cssinjs/jss/blob/4e6a05dd3f7b6572fdd3ab216861d9e446c20331/src/utils/createGenerateClassName.js

  function createGenerateClassName() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _options$disableGloba = options.disableGlobal,
        disableGlobal = _options$disableGloba === void 0 ? false : _options$disableGloba,
        _options$productionPr = options.productionPrefix,
        productionPrefix = _options$productionPr === void 0 ? 'jss' : _options$productionPr,
        _options$seed = options.seed,
        seed = _options$seed === void 0 ? '' : _options$seed;
    var seedPrefix = seed === '' ? '' : "".concat(seed, "-");
    var ruleCounter = 0;
    return function (rule, styleSheet) {
      ruleCounter += 1;

      var name = styleSheet.options.name; // Is a global static MUI style?

      if (name && name.indexOf('Mui') === 0 && !styleSheet.options.link && !disableGlobal) {
        // We can use a shorthand class name, we never use the keys to style the components.
        if (pseudoClasses.indexOf(rule.key) !== -1) {
          return "Mui-".concat(rule.key);
        }

        var prefix = "".concat(seedPrefix).concat(name, "-").concat(rule.key);

        if (!styleSheet.options.theme[nested] || seed !== '') {
          return prefix;
        }

        return "".concat(prefix, "-").concat(ruleCounter);
      }

      {
        return "".concat(seedPrefix).concat(productionPrefix).concat(ruleCounter);
      }
    };
  }

  /* eslint-disable no-restricted-syntax */
  function getThemeProps(params) {
    var theme = params.theme,
        name = params.name,
        props = params.props;

    if (!theme || !theme.props || !theme.props[name]) {
      return props;
    } // Resolve default props, code borrow from React source.
    // https://github.com/facebook/react/blob/15a8f031838a553e41c0b66eb1bcf1da8448104d/packages/react/src/ReactElement.js#L221


    var defaultProps = theme.props[name];
    var propName;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }

    return props;
  }

  function _extends$2() {
    _extends$2 = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends$2.apply(this, arguments);
  }

  var _typeof$3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof$3(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof$3(document)) === 'object' && document.nodeType === 9;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _objectWithoutPropertiesLoose$1(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  var plainObjectConstrurctor = {}.constructor;
  function cloneStyle(style) {
    if (style == null || typeof style !== 'object') return style;
    if (Array.isArray(style)) return style.map(cloneStyle);
    if (style.constructor !== plainObjectConstrurctor) return style;
    var newStyle = {};

    for (var name in style) {
      newStyle[name] = cloneStyle(style[name]);
    }

    return newStyle;
  }

  /**
   * Create a rule instance.
   */

  function createRule(name, decl, options) {
    if (name === void 0) {
      name = 'unnamed';
    }

    var jss = options.jss;
    var declCopy = cloneStyle(decl);
    var rule = jss.plugins.onCreateRule(name, declCopy, options);
    if (rule) return rule; // It is an at-rule and it has no instance.

    if (name[0] === '@') ;

    return null;
  }

  var join = function join(value, by) {
    var result = '';

    for (var i = 0; i < value.length; i++) {
      // Remove !important from the value, it will be readded later.
      if (value[i] === '!important') break;
      if (result) result += by;
      result += value[i];
    }

    return result;
  };
  /**
   * Converts array values to string.
   *
   * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
   * `border: ['1px', '2px']` > `border: 1px, 2px;`
   * `margin: [['5px', '10px'], '!important']` > `margin: 5px 10px !important;`
   * `color: ['red', !important]` > `color: red !important;`
   */


  function toCssValue(value, ignoreImportant) {
    if (ignoreImportant === void 0) {
      ignoreImportant = false;
    }

    if (!Array.isArray(value)) return value;
    var cssValue = ''; // Support space separated values via `[['5px', '10px']]`.

    if (Array.isArray(value[0])) {
      for (var i = 0; i < value.length; i++) {
        if (value[i] === '!important') break;
        if (cssValue) cssValue += ', ';
        cssValue += join(value[i], ' ');
      }
    } else cssValue = join(value, ', '); // Add !important, because it was ignored.


    if (!ignoreImportant && value[value.length - 1] === '!important') {
      cssValue += ' !important';
    }

    return cssValue;
  }

  /**
   * Indent a string.
   * http://jsperf.com/array-join-vs-for
   */
  function indentStr(str, indent) {
    var result = '';

    for (var index = 0; index < indent; index++) {
      result += '  ';
    }

    return result + str;
  }
  /**
   * Converts a Rule to CSS string.
   */


  function toCss(selector, style, options) {
    if (options === void 0) {
      options = {};
    }

    var result = '';
    if (!style) return result;
    var _options = options,
        _options$indent = _options.indent,
        indent = _options$indent === void 0 ? 0 : _options$indent;
    var fallbacks = style.fallbacks;
    if (selector) indent++; // Apply fallbacks first.

    if (fallbacks) {
      // Array syntax {fallbacks: [{prop: value}]}
      if (Array.isArray(fallbacks)) {
        for (var index = 0; index < fallbacks.length; index++) {
          var fallback = fallbacks[index];

          for (var prop in fallback) {
            var value = fallback[prop];

            if (value != null) {
              if (result) result += '\n';
              result += "" + indentStr(prop + ": " + toCssValue(value) + ";", indent);
            }
          }
        }
      } else {
        // Object syntax {fallbacks: {prop: value}}
        for (var _prop in fallbacks) {
          var _value = fallbacks[_prop];

          if (_value != null) {
            if (result) result += '\n';
            result += "" + indentStr(_prop + ": " + toCssValue(_value) + ";", indent);
          }
        }
      }
    }

    for (var _prop2 in style) {
      var _value2 = style[_prop2];

      if (_value2 != null && _prop2 !== 'fallbacks') {
        if (result) result += '\n';
        result += "" + indentStr(_prop2 + ": " + toCssValue(_value2) + ";", indent);
      }
    } // Allow empty style in this case, because properties will be added dynamically.


    if (!result && !options.allowEmpty) return result; // When rule is being stringified before selector was defined.

    if (!selector) return result;
    indent--;
    if (result) result = "\n" + result + "\n";
    return indentStr(selector + " {" + result, indent) + indentStr('}', indent);
  }

  var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
  var nativeEscape = typeof CSS !== 'undefined' && CSS.escape;
  var escape$1 = (function (str) {
    return nativeEscape ? nativeEscape(str) : str.replace(escapeRegex, '\\$1');
  });

  var BaseStyleRule =
  /*#__PURE__*/
  function () {
    function BaseStyleRule(key, style, options) {
      this.type = 'style';
      this.key = void 0;
      this.isProcessed = false;
      this.style = void 0;
      this.renderer = void 0;
      this.renderable = void 0;
      this.options = void 0;
      var sheet = options.sheet,
          Renderer = options.Renderer;
      this.key = key;
      this.options = options;
      this.style = style;
      if (sheet) this.renderer = sheet.renderer;else if (Renderer) this.renderer = new Renderer();
    }
    /**
     * Get or set a style property.
     */


    var _proto = BaseStyleRule.prototype;

    _proto.prop = function prop(name, value, options) {
      // It's a getter.
      if (value === undefined) return this.style[name]; // Don't do anything if the value has not changed.

      var force = options ? options.force : false;
      if (!force && this.style[name] === value) return this;
      var newValue = value;

      if (!options || options.process !== false) {
        newValue = this.options.jss.plugins.onChangeValue(value, name, this);
      }

      var isEmpty = newValue == null || newValue === false;
      var isDefined = name in this.style; // Value is empty and wasn't defined before.

      if (isEmpty && !isDefined && !force) return this; // We are going to remove this value.

      var remove = isEmpty && isDefined;
      if (remove) delete this.style[name];else this.style[name] = newValue; // Renderable is defined if StyleSheet option `link` is true.

      if (this.renderable && this.renderer) {
        if (remove) this.renderer.removeProperty(this.renderable, name);else this.renderer.setProperty(this.renderable, name, newValue);
        return this;
      }

      var sheet = this.options.sheet;

      if (sheet && sheet.attached) ;

      return this;
    };

    return BaseStyleRule;
  }();
  var StyleRule =
  /*#__PURE__*/
  function (_BaseStyleRule) {
    _inheritsLoose(StyleRule, _BaseStyleRule);

    function StyleRule(key, style, options) {
      var _this;

      _this = _BaseStyleRule.call(this, key, style, options) || this;
      _this.selectorText = void 0;
      _this.id = void 0;
      _this.renderable = void 0;
      var selector = options.selector,
          scoped = options.scoped,
          sheet = options.sheet,
          generateId = options.generateId;

      if (selector) {
        _this.selectorText = selector;
      } else if (scoped !== false) {
        _this.id = generateId(_assertThisInitialized(_assertThisInitialized(_this)), sheet);
        _this.selectorText = "." + escape$1(_this.id);
      }

      return _this;
    }
    /**
     * Set selector string.
     * Attention: use this with caution. Most browsers didn't implement
     * selectorText setter, so this may result in rerendering of entire Style Sheet.
     */


    var _proto2 = StyleRule.prototype;

    /**
     * Apply rule to an element inline.
     */
    _proto2.applyTo = function applyTo(renderable) {
      var renderer = this.renderer;

      if (renderer) {
        var json = this.toJSON();

        for (var prop in json) {
          renderer.setProperty(renderable, prop, json[prop]);
        }
      }

      return this;
    }
    /**
     * Returns JSON representation of the rule.
     * Fallbacks are not supported.
     * Useful for inline styles.
     */
    ;

    _proto2.toJSON = function toJSON() {
      var json = {};

      for (var prop in this.style) {
        var value = this.style[prop];
        if (typeof value !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = toCssValue(value);
      }

      return json;
    }
    /**
     * Generates a CSS string.
     */
    ;

    _proto2.toString = function toString(options) {
      var sheet = this.options.sheet;
      var link = sheet ? sheet.options.link : false;
      var opts = link ? _extends$2({}, options, {
        allowEmpty: true
      }) : options;
      return toCss(this.selectorText, this.style, opts);
    };

    _createClass(StyleRule, [{
      key: "selector",
      set: function set(selector) {
        if (selector === this.selectorText) return;
        this.selectorText = selector;
        var renderer = this.renderer,
            renderable = this.renderable;
        if (!renderable || !renderer) return;
        var hasChanged = renderer.setSelector(renderable, selector); // If selector setter is not implemented, rerender the rule.

        if (!hasChanged) {
          renderer.replaceRule(renderable, this);
        }
      }
      /**
       * Get selector string.
       */
      ,
      get: function get() {
        return this.selectorText;
      }
    }]);

    return StyleRule;
  }(BaseStyleRule);
  var pluginStyleRule = {
    onCreateRule: function onCreateRule(name, style, options) {
      if (name[0] === '@' || options.parent && options.parent.type === 'keyframes') {
        return null;
      }

      return new StyleRule(name, style, options);
    }
  };

  var defaultToStringOptions = {
    indent: 1,
    children: true
  };
  var atRegExp = /@([\w-]+)/;
  /**
   * Conditional rule for @media, @supports
   */

  var ConditionalRule =
  /*#__PURE__*/
  function () {
    function ConditionalRule(key, styles, options) {
      this.type = 'conditional';
      this.at = void 0;
      this.key = void 0;
      this.query = void 0;
      this.rules = void 0;
      this.options = void 0;
      this.isProcessed = false;
      this.renderable = void 0;
      this.key = key; // Key might contain a unique suffix in case the `name` passed by user was duplicate.

      this.query = options.name;
      var atMatch = key.match(atRegExp);
      this.at = atMatch ? atMatch[1] : 'unknown';
      this.options = options;
      this.rules = new RuleList(_extends$2({}, options, {
        parent: this
      }));

      for (var name in styles) {
        this.rules.add(name, styles[name]);
      }

      this.rules.process();
    }
    /**
     * Get a rule.
     */


    var _proto = ConditionalRule.prototype;

    _proto.getRule = function getRule(name) {
      return this.rules.get(name);
    }
    /**
     * Get index of a rule.
     */
    ;

    _proto.indexOf = function indexOf(rule) {
      return this.rules.indexOf(rule);
    }
    /**
     * Create and register rule, run plugins.
     */
    ;

    _proto.addRule = function addRule(name, style, options) {
      var rule = this.rules.add(name, style, options);
      if (!rule) return null;
      this.options.jss.plugins.onProcessRule(rule);
      return rule;
    }
    /**
     * Generates a CSS string.
     */
    ;

    _proto.toString = function toString(options) {
      if (options === void 0) {
        options = defaultToStringOptions;
      }

      if (options.indent == null) options.indent = defaultToStringOptions.indent;
      if (options.children == null) options.children = defaultToStringOptions.children;

      if (options.children === false) {
        return this.query + " {}";
      }

      var children = this.rules.toString(options);
      return children ? this.query + " {\n" + children + "\n}" : '';
    };

    return ConditionalRule;
  }();
  var keyRegExp = /@media|@supports\s+/;
  var pluginConditionalRule = {
    onCreateRule: function onCreateRule(key, styles, options) {
      return keyRegExp.test(key) ? new ConditionalRule(key, styles, options) : null;
    }
  };

  var defaultToStringOptions$1 = {
    indent: 1,
    children: true
  };
  var nameRegExp = /@keyframes\s+([\w-]+)/;
  /**
   * Rule for @keyframes
   */

  var KeyframesRule =
  /*#__PURE__*/
  function () {
    function KeyframesRule(key, frames, options) {
      this.type = 'keyframes';
      this.at = '@keyframes';
      this.key = void 0;
      this.name = void 0;
      this.id = void 0;
      this.rules = void 0;
      this.options = void 0;
      this.isProcessed = false;
      this.renderable = void 0;
      var nameMatch = key.match(nameRegExp);

      if (nameMatch && nameMatch[1]) {
        this.name = nameMatch[1];
      } else {
        this.name = 'noname';
      }

      this.key = this.type + "-" + this.name;
      this.options = options;
      var scoped = options.scoped,
          sheet = options.sheet,
          generateId = options.generateId;
      this.id = scoped === false ? this.name : escape$1(generateId(this, sheet));
      this.rules = new RuleList(_extends$2({}, options, {
        parent: this
      }));

      for (var name in frames) {
        this.rules.add(name, frames[name], _extends$2({}, options, {
          parent: this
        }));
      }

      this.rules.process();
    }
    /**
     * Generates a CSS string.
     */


    var _proto = KeyframesRule.prototype;

    _proto.toString = function toString(options) {
      if (options === void 0) {
        options = defaultToStringOptions$1;
      }

      if (options.indent == null) options.indent = defaultToStringOptions$1.indent;
      if (options.children == null) options.children = defaultToStringOptions$1.children;

      if (options.children === false) {
        return this.at + " " + this.id + " {}";
      }

      var children = this.rules.toString(options);
      if (children) children = "\n" + children + "\n";
      return this.at + " " + this.id + " {" + children + "}";
    };

    return KeyframesRule;
  }();
  var keyRegExp$1 = /@keyframes\s+/;
  var refRegExp = /\$([\w-]+)/g;

  var findReferencedKeyframe = function findReferencedKeyframe(val, keyframes) {
    if (typeof val === 'string') {
      return val.replace(refRegExp, function (match, name) {
        if (name in keyframes) {
          return keyframes[name];
        }
        return match;
      });
    }

    return val;
  };
  /**
   * Replace the reference for a animation name.
   */


  var replaceRef = function replaceRef(style, prop, keyframes) {
    var value = style[prop];
    var refKeyframe = findReferencedKeyframe(value, keyframes);

    if (refKeyframe !== value) {
      style[prop] = refKeyframe;
    }
  };

  var plugin = {
    onCreateRule: function onCreateRule(key, frames, options) {
      return typeof key === 'string' && keyRegExp$1.test(key) ? new KeyframesRule(key, frames, options) : null;
    },
    // Animation name ref replacer.
    onProcessStyle: function onProcessStyle(style, rule, sheet) {
      if (rule.type !== 'style' || !sheet) return style;
      if ('animation-name' in style) replaceRef(style, 'animation-name', sheet.keyframes);
      if ('animation' in style) replaceRef(style, 'animation', sheet.keyframes);
      return style;
    },
    onChangeValue: function onChangeValue(val, prop, rule) {
      var sheet = rule.options.sheet;

      if (!sheet) {
        return val;
      }

      switch (prop) {
        case 'animation':
          return findReferencedKeyframe(val, sheet.keyframes);

        case 'animation-name':
          return findReferencedKeyframe(val, sheet.keyframes);

        default:
          return val;
      }
    }
  };

  var KeyframeRule =
  /*#__PURE__*/
  function (_BaseStyleRule) {
    _inheritsLoose(KeyframeRule, _BaseStyleRule);

    function KeyframeRule() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _BaseStyleRule.call.apply(_BaseStyleRule, [this].concat(args)) || this;
      _this.renderable = void 0;
      return _this;
    }

    var _proto = KeyframeRule.prototype;

    /**
     * Generates a CSS string.
     */
    _proto.toString = function toString(options) {
      var sheet = this.options.sheet;
      var link = sheet ? sheet.options.link : false;
      var opts = link ? _extends$2({}, options, {
        allowEmpty: true
      }) : options;
      return toCss(this.key, this.style, opts);
    };

    return KeyframeRule;
  }(BaseStyleRule);
  var pluginKeyframeRule = {
    onCreateRule: function onCreateRule(key, style, options) {
      if (options.parent && options.parent.type === 'keyframes') {
        return new KeyframeRule(key, style, options);
      }

      return null;
    }
  };

  var FontFaceRule =
  /*#__PURE__*/
  function () {
    function FontFaceRule(key, style, options) {
      this.type = 'font-face';
      this.at = '@font-face';
      this.key = void 0;
      this.style = void 0;
      this.options = void 0;
      this.isProcessed = false;
      this.renderable = void 0;
      this.key = key;
      this.style = style;
      this.options = options;
    }
    /**
     * Generates a CSS string.
     */


    var _proto = FontFaceRule.prototype;

    _proto.toString = function toString(options) {
      if (Array.isArray(this.style)) {
        var str = '';

        for (var index = 0; index < this.style.length; index++) {
          str += toCss(this.key, this.style[index]);
          if (this.style[index + 1]) str += '\n';
        }

        return str;
      }

      return toCss(this.key, this.style, options);
    };

    return FontFaceRule;
  }();
  var pluginFontFaceRule = {
    onCreateRule: function onCreateRule(key, style, options) {
      return key === '@font-face' ? new FontFaceRule(key, style, options) : null;
    }
  };

  var ViewportRule =
  /*#__PURE__*/
  function () {
    function ViewportRule(key, style, options) {
      this.type = 'viewport';
      this.at = '@viewport';
      this.key = void 0;
      this.style = void 0;
      this.options = void 0;
      this.isProcessed = false;
      this.renderable = void 0;
      this.key = key;
      this.style = style;
      this.options = options;
    }
    /**
     * Generates a CSS string.
     */


    var _proto = ViewportRule.prototype;

    _proto.toString = function toString(options) {
      return toCss(this.key, this.style, options);
    };

    return ViewportRule;
  }();
  var pluginViewportRule = {
    onCreateRule: function onCreateRule(key, style, options) {
      return key === '@viewport' || key === '@-ms-viewport' ? new ViewportRule(key, style, options) : null;
    }
  };

  var SimpleRule =
  /*#__PURE__*/
  function () {
    function SimpleRule(key, value, options) {
      this.type = 'simple';
      this.key = void 0;
      this.value = void 0;
      this.options = void 0;
      this.isProcessed = false;
      this.renderable = void 0;
      this.key = key;
      this.value = value;
      this.options = options;
    }
    /**
     * Generates a CSS string.
     */
    // eslint-disable-next-line no-unused-vars


    var _proto = SimpleRule.prototype;

    _proto.toString = function toString(options) {
      if (Array.isArray(this.value)) {
        var str = '';

        for (var index = 0; index < this.value.length; index++) {
          str += this.key + " " + this.value[index] + ";";
          if (this.value[index + 1]) str += '\n';
        }

        return str;
      }

      return this.key + " " + this.value + ";";
    };

    return SimpleRule;
  }();
  var keysMap = {
    '@charset': true,
    '@import': true,
    '@namespace': true
  };
  var pluginSimpleRule = {
    onCreateRule: function onCreateRule(key, value, options) {
      return key in keysMap ? new SimpleRule(key, value, options) : null;
    }
  };

  var plugins = [pluginStyleRule, pluginConditionalRule, plugin, pluginKeyframeRule, pluginFontFaceRule, pluginViewportRule, pluginSimpleRule];

  var defaultUpdateOptions = {
    process: true
  };
  var forceUpdateOptions = {
    force: true,
    process: true
    /**
     * Contains rules objects and allows adding/removing etc.
     * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
     */

  };

  var RuleList =
  /*#__PURE__*/
  function () {
    // Rules registry for access by .get() method.
    // It contains the same rule registered by name and by selector.
    // Original styles object.
    // Used to ensure correct rules order.
    function RuleList(options) {
      this.map = {};
      this.raw = {};
      this.index = [];
      this.counter = 0;
      this.options = void 0;
      this.classes = void 0;
      this.keyframes = void 0;
      this.options = options;
      this.classes = options.classes;
      this.keyframes = options.keyframes;
    }
    /**
     * Create and register rule.
     *
     * Will not render after Style Sheet was rendered the first time.
     */


    var _proto = RuleList.prototype;

    _proto.add = function add(name, decl, ruleOptions) {
      var _this$options = this.options,
          parent = _this$options.parent,
          sheet = _this$options.sheet,
          jss = _this$options.jss,
          Renderer = _this$options.Renderer,
          generateId = _this$options.generateId,
          scoped = _this$options.scoped;

      var options = _extends$2({
        classes: this.classes,
        parent: parent,
        sheet: sheet,
        jss: jss,
        Renderer: Renderer,
        generateId: generateId,
        scoped: scoped,
        name: name
      }, ruleOptions); // When user uses .createStyleSheet(), duplicate names are not possible, but
      // `sheet.addRule()` opens the door for any duplicate rule name. When this happens
      // we need to make the key unique within this RuleList instance scope.


      var key = name;

      if (name in this.raw) {
        key = name + "-d" + this.counter++;
      } // We need to save the original decl before creating the rule
      // because cache plugin needs to use it as a key to return a cached rule.


      this.raw[key] = decl;

      if (key in this.classes) {
        // E.g. rules inside of @media container
        options.selector = "." + escape$1(this.classes[key]);
      }

      var rule = createRule(key, decl, options);
      if (!rule) return null;
      this.register(rule);
      var index = options.index === undefined ? this.index.length : options.index;
      this.index.splice(index, 0, rule);
      return rule;
    }
    /**
     * Get a rule.
     */
    ;

    _proto.get = function get(name) {
      return this.map[name];
    }
    /**
     * Delete a rule.
     */
    ;

    _proto.remove = function remove(rule) {
      this.unregister(rule);
      delete this.raw[rule.key];
      this.index.splice(this.index.indexOf(rule), 1);
    }
    /**
     * Get index of a rule.
     */
    ;

    _proto.indexOf = function indexOf(rule) {
      return this.index.indexOf(rule);
    }
    /**
     * Run `onProcessRule()` plugins on every rule.
     */
    ;

    _proto.process = function process() {
      var plugins$$1 = this.options.jss.plugins; // We need to clone array because if we modify the index somewhere else during a loop
      // we end up with very hard-to-track-down side effects.

      this.index.slice(0).forEach(plugins$$1.onProcessRule, plugins$$1);
    }
    /**
     * Register a rule in `.map`, `.classes` and `.keyframes` maps.
     */
    ;

    _proto.register = function register(rule) {
      this.map[rule.key] = rule;

      if (rule instanceof StyleRule) {
        this.map[rule.selector] = rule;
        if (rule.id) this.classes[rule.key] = rule.id;
      } else if (rule instanceof KeyframesRule && this.keyframes) {
        this.keyframes[rule.name] = rule.id;
      }
    }
    /**
     * Unregister a rule.
     */
    ;

    _proto.unregister = function unregister(rule) {
      delete this.map[rule.key];

      if (rule instanceof StyleRule) {
        delete this.map[rule.selector];
        delete this.classes[rule.key];
      } else if (rule instanceof KeyframesRule) {
        delete this.keyframes[rule.name];
      }
    }
    /**
     * Update the function values with a new data.
     */
    ;

    _proto.update = function update() {
      var name;
      var data;
      var options;

      if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string') {
        name = arguments.length <= 0 ? undefined : arguments[0]; // $FlowFixMe

        data = arguments.length <= 1 ? undefined : arguments[1]; // $FlowFixMe

        options = arguments.length <= 2 ? undefined : arguments[2];
      } else {
        data = arguments.length <= 0 ? undefined : arguments[0]; // $FlowFixMe

        options = arguments.length <= 1 ? undefined : arguments[1];
        name = null;
      }

      if (name) {
        this.updateOne(this.map[name], data, options);
      } else {
        for (var index = 0; index < this.index.length; index++) {
          this.updateOne(this.index[index], data, options);
        }
      }
    }
    /**
     * Execute plugins, update rule props.
     */
    ;

    _proto.updateOne = function updateOne(rule, data, options) {
      if (options === void 0) {
        options = defaultUpdateOptions;
      }

      var _this$options2 = this.options,
          plugins$$1 = _this$options2.jss.plugins,
          sheet = _this$options2.sheet; // It is a rules container like for e.g. ConditionalRule.

      if (rule.rules instanceof RuleList) {
        rule.rules.update(data, options);
        return;
      }

      var styleRule = rule;
      var style = styleRule.style;
      plugins$$1.onUpdate(data, rule, sheet, options); // We rely on a new `style` ref in case it was mutated during onUpdate hook.

      if (options.process && style && style !== styleRule.style) {
        // We need to run the plugins in case new `style` relies on syntax plugins.
        plugins$$1.onProcessStyle(styleRule.style, styleRule, sheet); // Update and add props.

        for (var prop in styleRule.style) {
          var nextValue = styleRule.style[prop];
          var prevValue = style[prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
          // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

          if (nextValue !== prevValue) {
            styleRule.prop(prop, nextValue, forceUpdateOptions);
          }
        } // Remove props.


        for (var _prop in style) {
          var _nextValue = styleRule.style[_prop];
          var _prevValue = style[_prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
          // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

          if (_nextValue == null && _nextValue !== _prevValue) {
            styleRule.prop(_prop, null, forceUpdateOptions);
          }
        }
      }
    }
    /**
     * Convert rules to a CSS string.
     */
    ;

    _proto.toString = function toString(options) {
      var str = '';
      var sheet = this.options.sheet;
      var link = sheet ? sheet.options.link : false;

      for (var index = 0; index < this.index.length; index++) {
        var rule = this.index[index];
        var css = rule.toString(options); // No need to render an empty rule.

        if (!css && !link) continue;
        if (str) str += '\n';
        str += css;
      }

      return str;
    };

    return RuleList;
  }();

  var StyleSheet =
  /*#__PURE__*/
  function () {
    function StyleSheet(styles, options) {
      this.options = void 0;
      this.deployed = void 0;
      this.attached = void 0;
      this.rules = void 0;
      this.renderer = void 0;
      this.classes = void 0;
      this.keyframes = void 0;
      this.queue = void 0;
      this.attached = false;
      this.deployed = false;
      this.classes = {};
      this.keyframes = {};
      this.options = _extends$2({}, options, {
        sheet: this,
        parent: this,
        classes: this.classes,
        keyframes: this.keyframes
      });

      if (options.Renderer) {
        this.renderer = new options.Renderer(this);
      }

      this.rules = new RuleList(this.options);

      for (var name in styles) {
        this.rules.add(name, styles[name]);
      }

      this.rules.process();
    }
    /**
     * Attach renderable to the render tree.
     */


    var _proto = StyleSheet.prototype;

    _proto.attach = function attach() {
      if (this.attached) return this;
      if (this.renderer) this.renderer.attach();
      this.attached = true; // Order is important, because we can't use insertRule API if style element is not attached.

      if (!this.deployed) this.deploy();
      return this;
    }
    /**
     * Remove renderable from render tree.
     */
    ;

    _proto.detach = function detach() {
      if (!this.attached) return this;
      if (this.renderer) this.renderer.detach();
      this.attached = false;
      return this;
    }
    /**
     * Add a rule to the current stylesheet.
     * Will insert a rule also after the stylesheet has been rendered first time.
     */
    ;

    _proto.addRule = function addRule(name, decl, options) {
      var queue = this.queue; // Plugins can create rules.
      // In order to preserve the right order, we need to queue all `.addRule` calls,
      // which happen after the first `rules.add()` call.

      if (this.attached && !queue) this.queue = [];
      var rule = this.rules.add(name, decl, options);
      if (!rule) return null;
      this.options.jss.plugins.onProcessRule(rule);

      if (this.attached) {
        if (!this.deployed) return rule; // Don't insert rule directly if there is no stringified version yet.
        // It will be inserted all together when .attach is called.

        if (queue) queue.push(rule);else {
          this.insertRule(rule);

          if (this.queue) {
            this.queue.forEach(this.insertRule, this);
            this.queue = undefined;
          }
        }
        return rule;
      } // We can't add rules to a detached style node.
      // We will redeploy the sheet once user will attach it.


      this.deployed = false;
      return rule;
    }
    /**
     * Insert rule into the StyleSheet
     */
    ;

    _proto.insertRule = function insertRule(rule) {
      if (this.renderer) {
        this.renderer.insertRule(rule);
      }
    }
    /**
     * Create and add rules.
     * Will render also after Style Sheet was rendered the first time.
     */
    ;

    _proto.addRules = function addRules(styles, options) {
      var added = [];

      for (var name in styles) {
        var rule = this.addRule(name, styles[name], options);
        if (rule) added.push(rule);
      }

      return added;
    }
    /**
     * Get a rule by name.
     */
    ;

    _proto.getRule = function getRule(name) {
      return this.rules.get(name);
    }
    /**
     * Delete a rule by name.
     * Returns `true`: if rule has been deleted from the DOM.
     */
    ;

    _proto.deleteRule = function deleteRule(name) {
      var rule = typeof name === 'object' ? name : this.rules.get(name);
      if (!rule) return false;
      this.rules.remove(rule);

      if (this.attached && rule.renderable && this.renderer) {
        return this.renderer.deleteRule(rule.renderable);
      }

      return true;
    }
    /**
     * Get index of a rule.
     */
    ;

    _proto.indexOf = function indexOf(rule) {
      return this.rules.indexOf(rule);
    }
    /**
     * Deploy pure CSS string to a renderable.
     */
    ;

    _proto.deploy = function deploy() {
      if (this.renderer) this.renderer.deploy();
      this.deployed = true;
      return this;
    }
    /**
     * Update the function values with a new data.
     */
    ;

    _proto.update = function update() {
      var _this$rules;

      (_this$rules = this.rules).update.apply(_this$rules, arguments);

      return this;
    }
    /**
     * Updates a single rule.
     */
    ;

    _proto.updateOne = function updateOne(rule, data, options) {
      this.rules.updateOne(rule, data, options);
      return this;
    }
    /**
     * Convert rules to a CSS string.
     */
    ;

    _proto.toString = function toString(options) {
      return this.rules.toString(options);
    };

    return StyleSheet;
  }();

  var PluginsRegistry =
  /*#__PURE__*/
  function () {
    function PluginsRegistry() {
      this.plugins = {
        internal: [],
        external: []
      };
      this.registry = void 0;
    }

    var _proto = PluginsRegistry.prototype;

    /**
     * Call `onCreateRule` hooks and return an object if returned by a hook.
     */
    _proto.onCreateRule = function onCreateRule(name, decl, options) {
      for (var i = 0; i < this.registry.onCreateRule.length; i++) {
        var rule = this.registry.onCreateRule[i](name, decl, options);
        if (rule) return rule;
      }

      return null;
    }
    /**
     * Call `onProcessRule` hooks.
     */
    ;

    _proto.onProcessRule = function onProcessRule(rule) {
      if (rule.isProcessed) return;
      var sheet = rule.options.sheet;

      for (var i = 0; i < this.registry.onProcessRule.length; i++) {
        this.registry.onProcessRule[i](rule, sheet);
      }

      if (rule.style) this.onProcessStyle(rule.style, rule, sheet);
      rule.isProcessed = true;
    }
    /**
     * Call `onProcessStyle` hooks.
     */
    ;

    _proto.onProcessStyle = function onProcessStyle(style, rule, sheet) {
      for (var i = 0; i < this.registry.onProcessStyle.length; i++) {
        // $FlowFixMe
        rule.style = this.registry.onProcessStyle[i](rule.style, rule, sheet);
      }
    }
    /**
     * Call `onProcessSheet` hooks.
     */
    ;

    _proto.onProcessSheet = function onProcessSheet(sheet) {
      for (var i = 0; i < this.registry.onProcessSheet.length; i++) {
        this.registry.onProcessSheet[i](sheet);
      }
    }
    /**
     * Call `onUpdate` hooks.
     */
    ;

    _proto.onUpdate = function onUpdate(data, rule, sheet, options) {
      for (var i = 0; i < this.registry.onUpdate.length; i++) {
        this.registry.onUpdate[i](data, rule, sheet, options);
      }
    }
    /**
     * Call `onChangeValue` hooks.
     */
    ;

    _proto.onChangeValue = function onChangeValue(value, prop, rule) {
      var processedValue = value;

      for (var i = 0; i < this.registry.onChangeValue.length; i++) {
        processedValue = this.registry.onChangeValue[i](processedValue, prop, rule);
      }

      return processedValue;
    }
    /**
     * Register a plugin.
     */
    ;

    _proto.use = function use(newPlugin, options) {
      if (options === void 0) {
        options = {
          queue: 'external'
        };
      }

      var plugins = this.plugins[options.queue]; // Avoids applying same plugin twice, at least based on ref.

      if (plugins.indexOf(newPlugin) !== -1) {
        return;
      }

      plugins.push(newPlugin);
      this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function (registry, plugin) {
        for (var name in plugin) {
          if (name in registry) {
            registry[name].push(plugin[name]);
          }
        }

        return registry;
      }, {
        onCreateRule: [],
        onProcessRule: [],
        onProcessStyle: [],
        onProcessSheet: [],
        onChangeValue: [],
        onUpdate: []
      });
    };

    return PluginsRegistry;
  }();

  /**
   * Sheets registry to access them all at one place.
   */
  var SheetsRegistry =
  /*#__PURE__*/
  function () {
    function SheetsRegistry() {
      this.registry = [];
    }

    var _proto = SheetsRegistry.prototype;

    /**
     * Register a Style Sheet.
     */
    _proto.add = function add(sheet) {
      var registry = this.registry;
      var index = sheet.options.index;
      if (registry.indexOf(sheet) !== -1) return;

      if (registry.length === 0 || index >= this.index) {
        registry.push(sheet);
        return;
      } // Find a position.


      for (var i = 0; i < registry.length; i++) {
        if (registry[i].options.index > index) {
          registry.splice(i, 0, sheet);
          return;
        }
      }
    }
    /**
     * Reset the registry.
     */
    ;

    _proto.reset = function reset() {
      this.registry = [];
    }
    /**
     * Remove a Style Sheet.
     */
    ;

    _proto.remove = function remove(sheet) {
      var index = this.registry.indexOf(sheet);
      this.registry.splice(index, 1);
    }
    /**
     * Convert all attached sheets to a CSS string.
     */
    ;

    _proto.toString = function toString(_temp) {
      var _ref = _temp === void 0 ? {} : _temp,
          attached = _ref.attached,
          options = _objectWithoutPropertiesLoose$1(_ref, ["attached"]);

      var css = '';

      for (var i = 0; i < this.registry.length; i++) {
        var sheet = this.registry[i];

        if (attached != null && sheet.attached !== attached) {
          continue;
        }

        if (css) css += '\n';
        css += sheet.toString(options);
      }

      return css;
    };

    _createClass(SheetsRegistry, [{
      key: "index",

      /**
       * Current highest index number.
       */
      get: function get() {
        return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
      }
    }]);

    return SheetsRegistry;
  }();

  /**
   * This is a global sheets registry. Only DomRenderer will add sheets to it.
   * On the server one should use an own SheetsRegistry instance and add the
   * sheets to it, because you need to make sure to create a new registry for
   * each request in order to not leak sheets across requests.
   */

  var sheets = new SheetsRegistry();

  /* eslint-disable */
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var globalThis = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();

  var ns = '2f1acc6c3a606b082e5eef5e54414ffb';
  if (globalThis[ns] == null) globalThis[ns] = 0; // Bundle may contain multiple JSS versions at the same time. In order to identify
  // the current version with just one short number and use it for classes generation
  // we use a counter. Also it is more accurate, because user can manually reevaluate
  // the module.

  var moduleId = globalThis[ns]++;

  /**
   * Returns a function which generates unique class names based on counters.
   * When new generator function is created, rule counter is reseted.
   * We need to reset the rule counter for SSR for each request.
   */
  var createGenerateId = function createGenerateId(options) {
    if (options === void 0) {
      options = {};
    }

    var ruleCounter = 0;
    return function (rule, sheet) {
      ruleCounter += 1;

      var jssId = '';
      var prefix = '';

      if (sheet) {
        if (sheet.options.classNamePrefix) {
          prefix = sheet.options.classNamePrefix;
        }

        if (sheet.options.jss.id != null) {
          jssId = String(sheet.options.jss.id);
        }
      }

      if (options.minify) {
        // Using "c" because a number can't be the first char in a class name.
        return "" + (prefix || 'c') + moduleId + jssId + ruleCounter;
      }

      return prefix + rule.key + "-" + moduleId + (jssId ? "-" + jssId : '') + "-" + ruleCounter;
    };
  };

  /**
   * Cache the value from the first time a function is called.
   */
  var memoize = function memoize(fn) {
    var value;
    return function () {
      if (!value) value = fn();
      return value;
    };
  };
  /**
   * Get a style property value.
   */


  function getPropertyValue(cssRule, prop) {
    try {
      // Support CSSTOM.
      if (cssRule.attributeStyleMap) {
        return cssRule.attributeStyleMap.get(prop);
      }

      return cssRule.style.getPropertyValue(prop);
    } catch (err) {
      // IE may throw if property is unknown.
      return '';
    }
  }
  /**
   * Set a style property.
   */


  function setProperty$1(cssRule, prop, value) {
    try {
      var cssValue = value;

      if (Array.isArray(value)) {
        cssValue = toCssValue(value, true);

        if (value[value.length - 1] === '!important') {
          cssRule.style.setProperty(prop, cssValue, 'important');
          return true;
        }
      } // Support CSSTOM.


      if (cssRule.attributeStyleMap) {
        cssRule.attributeStyleMap.set(prop, cssValue);
      } else {
        cssRule.style.setProperty(prop, cssValue);
      }
    } catch (err) {
      // IE may throw if property is unknown.
      return false;
    }

    return true;
  }
  /**
   * Remove a style property.
   */


  function removeProperty(cssRule, prop) {
    try {
      // Support CSSTOM.
      if (cssRule.attributeStyleMap) {
        cssRule.attributeStyleMap.delete(prop);
      } else {
        cssRule.style.removeProperty(prop);
      }
    } catch (err) {
    }
  }
  /**
   * Set the selector.
   */


  function setSelector(cssRule, selectorText) {
    cssRule.selectorText = selectorText; // Return false if setter was not successful.
    // Currently works in chrome only.

    return cssRule.selectorText === selectorText;
  }
  /**
   * Gets the `head` element upon the first call and caches it.
   * We assume it can't be null.
   */


  var getHead = memoize(function () {
    return document.querySelector('head');
  });
  /**
   * Find attached sheet with an index higher than the passed one.
   */

  function findHigherSheet(registry, options) {
    for (var i = 0; i < registry.length; i++) {
      var sheet = registry[i];

      if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
        return sheet;
      }
    }

    return null;
  }
  /**
   * Find attached sheet with the highest index.
   */


  function findHighestSheet(registry, options) {
    for (var i = registry.length - 1; i >= 0; i--) {
      var sheet = registry[i];

      if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
        return sheet;
      }
    }

    return null;
  }
  /**
   * Find a comment with "jss" inside.
   */


  function findCommentNode(text) {
    var head = getHead();

    for (var i = 0; i < head.childNodes.length; i++) {
      var node = head.childNodes[i];

      if (node.nodeType === 8 && node.nodeValue.trim() === text) {
        return node;
      }
    }

    return null;
  }

  /**
   * Find a node before which we can insert the sheet.
   */
  function findPrevNode(options) {
    var registry = sheets.registry;

    if (registry.length > 0) {
      // Try to insert before the next higher sheet.
      var sheet = findHigherSheet(registry, options);

      if (sheet && sheet.renderer) {
        return {
          parent: sheet.renderer.element.parentNode,
          node: sheet.renderer.element
        };
      } // Otherwise insert after the last attached.


      sheet = findHighestSheet(registry, options);

      if (sheet && sheet.renderer) {
        return {
          parent: sheet.renderer.element.parentNode,
          node: sheet.renderer.element.nextSibling
        };
      }
    } // Try to find a comment placeholder if registry is empty.


    var insertionPoint = options.insertionPoint;

    if (insertionPoint && typeof insertionPoint === 'string') {
      var comment = findCommentNode(insertionPoint);

      if (comment) {
        return {
          parent: comment.parentNode,
          node: comment.nextSibling
        };
      } // If user specifies an insertion point and it can't be found in the document -
    }

    return false;
  }
  /**
   * Insert style element into the DOM.
   */


  function insertStyle(style, options) {
    var insertionPoint = options.insertionPoint;
    var nextNode = findPrevNode(options);

    if (nextNode !== false && nextNode.parent) {
      nextNode.parent.insertBefore(style, nextNode.node);
      return;
    } // Works with iframes and any node types.


    if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
      // https://stackoverflow.com/questions/41328728/force-casting-in-flow
      var insertionPointElement = insertionPoint;
      var parentNode = insertionPointElement.parentNode;
      if (parentNode) parentNode.insertBefore(style, insertionPointElement.nextSibling);
      return;
    }

    getHead().appendChild(style);
  }
  /**
   * Read jss nonce setting from the page if the user has set it.
   */


  var getNonce = memoize(function () {
    var node = document.querySelector('meta[property="csp-nonce"]');
    return node ? node.getAttribute('content') : null;
  });

  var _insertRule = function insertRule(container, rule, index) {
    var maxIndex = container.cssRules.length; // In case previous insertion fails, passed index might be wrong

    if (index === undefined || index > maxIndex) {
      // eslint-disable-next-line no-param-reassign
      index = maxIndex;
    }

    try {
      if ('insertRule' in container) {
        var c = container;
        c.insertRule(rule, index);
      } // Keyframes rule.
      else if ('appendRule' in container) {
          var _c = container;

          _c.appendRule(rule);
        }
    } catch (err) {
      return false;
    }

    return container.cssRules[index];
  };

  var createStyle = function createStyle() {
    var el = document.createElement('style'); // Without it, IE will have a broken source order specificity if we
    // insert rules after we insert the style tag.
    // It seems to kick-off the source order specificity algorithm.

    el.textContent = '\n';
    return el;
  };

  var DomRenderer =
  /*#__PURE__*/
  function () {
    // HTMLStyleElement needs fixing https://github.com/facebook/flow/issues/2696
    function DomRenderer(sheet) {
      this.getPropertyValue = getPropertyValue;
      this.setProperty = setProperty$1;
      this.removeProperty = removeProperty;
      this.setSelector = setSelector;
      this.element = void 0;
      this.sheet = void 0;
      this.hasInsertedRules = false;
      // There is no sheet when the renderer is used from a standalone StyleRule.
      if (sheet) sheets.add(sheet);
      this.sheet = sheet;

      var _ref = this.sheet ? this.sheet.options : {},
          media = _ref.media,
          meta = _ref.meta,
          element = _ref.element;

      this.element = element || createStyle();
      this.element.setAttribute('data-jss', '');
      if (media) this.element.setAttribute('media', media);
      if (meta) this.element.setAttribute('data-meta', meta);
      var nonce = getNonce();
      if (nonce) this.element.setAttribute('nonce', nonce);
    }
    /**
     * Insert style element into render tree.
     */


    var _proto = DomRenderer.prototype;

    _proto.attach = function attach() {
      // In the case the element node is external and it is already in the DOM.
      if (this.element.parentNode || !this.sheet) return;
      insertStyle(this.element, this.sheet.options); // When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
      // most browsers create a new CSSStyleSheet, except of all IEs.

      var deployed = Boolean(this.sheet && this.sheet.deployed);

      if (this.hasInsertedRules && deployed) {
        this.hasInsertedRules = false;
        this.deploy();
      }
    }
    /**
     * Remove style element from render tree.
     */
    ;

    _proto.detach = function detach() {
      var parentNode = this.element.parentNode;
      if (parentNode) parentNode.removeChild(this.element);
    }
    /**
     * Inject CSS string into element.
     */
    ;

    _proto.deploy = function deploy() {
      var sheet = this.sheet;
      if (!sheet) return;

      if (sheet.options.link) {
        this.insertRules(sheet.rules);
        return;
      }

      this.element.textContent = "\n" + sheet.toString() + "\n";
    }
    /**
     * Insert RuleList into an element.
     */
    ;

    _proto.insertRules = function insertRules(rules, nativeParent) {
      for (var i = 0; i < rules.index.length; i++) {
        this.insertRule(rules.index[i], i, nativeParent);
      }
    }
    /**
     * Insert a rule into element.
     */
    ;

    _proto.insertRule = function insertRule(rule, index, nativeParent) {
      if (nativeParent === void 0) {
        nativeParent = this.element.sheet;
      }

      if (rule.rules) {
        var parent = rule;
        var latestNativeParent = nativeParent;

        if (rule.type === 'conditional' || rule.type === 'keyframes') {
          // We need to render the container without children first.
          latestNativeParent = _insertRule(nativeParent, parent.toString({
            children: false
          }), index);

          if (latestNativeParent === false) {
            return false;
          }
        }

        this.insertRules(parent.rules, latestNativeParent);
        return latestNativeParent;
      } // IE keeps the CSSStyleSheet after style node has been reattached,
      // so we need to check if the `renderable` reference the right style sheet and not
      // rerender those rules.


      if (rule.renderable && rule.renderable.parentStyleSheet === this.element.sheet) {
        return rule.renderable;
      }

      var ruleStr = rule.toString();
      if (!ruleStr) return false;

      var nativeRule = _insertRule(nativeParent, ruleStr, index);

      if (nativeRule === false) {
        return false;
      }

      this.hasInsertedRules = true;
      rule.renderable = nativeRule;
      return nativeRule;
    }
    /**
     * Delete a rule.
     */
    ;

    _proto.deleteRule = function deleteRule(cssRule) {
      var sheet = this.element.sheet;
      var index = this.indexOf(cssRule);
      if (index === -1) return false;
      sheet.deleteRule(index);
      return true;
    }
    /**
     * Get index of a CSS Rule.
     */
    ;

    _proto.indexOf = function indexOf(cssRule) {
      var cssRules = this.element.sheet.cssRules;

      for (var index = 0; index < cssRules.length; index++) {
        if (cssRule === cssRules[index]) return index;
      }

      return -1;
    }
    /**
     * Generate a new CSS rule and replace the existing one.
     *
     * Only used for some old browsers because they can't set a selector.
     */
    ;

    _proto.replaceRule = function replaceRule(cssRule, rule) {
      var index = this.indexOf(cssRule);
      if (index === -1) return false;
      this.element.sheet.deleteRule(index);
      return this.insertRule(rule, index);
    }
    /**
     * Get all rules elements.
     */
    ;

    _proto.getRules = function getRules() {
      return this.element.sheet.cssRules;
    };

    return DomRenderer;
  }();

  var instanceCounter = 0;

  var Jss =
  /*#__PURE__*/
  function () {
    function Jss(options) {
      this.id = instanceCounter++;
      this.version = "10.0.3";
      this.plugins = new PluginsRegistry();
      this.options = {
        id: {
          minify: false
        },
        createGenerateId: createGenerateId,
        Renderer: isBrowser ? DomRenderer : null,
        plugins: []
      };
      this.generateId = createGenerateId({
        minify: false
      });

      for (var i = 0; i < plugins.length; i++) {
        this.plugins.use(plugins[i], {
          queue: 'internal'
        });
      }

      this.setup(options);
    }
    /**
     * Prepares various options, applies plugins.
     * Should not be used twice on the same instance, because there is no plugins
     * deduplication logic.
     */


    var _proto = Jss.prototype;

    _proto.setup = function setup(options) {
      if (options === void 0) {
        options = {};
      }

      if (options.createGenerateId) {
        this.options.createGenerateId = options.createGenerateId;
      }

      if (options.id) {
        this.options.id = _extends$2({}, this.options.id, options.id);
      }

      if (options.createGenerateId || options.id) {
        this.generateId = this.options.createGenerateId(this.options.id);
      }

      if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint;

      if ('Renderer' in options) {
        this.options.Renderer = options.Renderer;
      } // eslint-disable-next-line prefer-spread


      if (options.plugins) this.use.apply(this, options.plugins);
      return this;
    }
    /**
     * Create a Style Sheet.
     */
    ;

    _proto.createStyleSheet = function createStyleSheet(styles, options) {
      if (options === void 0) {
        options = {};
      }

      var _options = options,
          index = _options.index;

      if (typeof index !== 'number') {
        index = sheets.index === 0 ? 0 : sheets.index + 1;
      }

      var sheet = new StyleSheet(styles, _extends$2({}, options, {
        jss: this,
        generateId: options.generateId || this.generateId,
        insertionPoint: this.options.insertionPoint,
        Renderer: this.options.Renderer,
        index: index
      }));
      this.plugins.onProcessSheet(sheet);
      return sheet;
    }
    /**
     * Detach the Style Sheet and remove it from the registry.
     */
    ;

    _proto.removeStyleSheet = function removeStyleSheet(sheet) {
      sheet.detach();
      sheets.remove(sheet);
      return this;
    }
    /**
     * Create a rule without a Style Sheet.
     * [Deprecated] will be removed in the next major version.
     */
    ;

    _proto.createRule = function createRule$$1(name, style, options) {
      if (style === void 0) {
        style = {};
      }

      if (options === void 0) {
        options = {};
      }

      // Enable rule without name for inline styles.
      if (typeof name === 'object') {
        return this.createRule(undefined, name, style);
      }

      var ruleOptions = _extends$2({}, options, {
        name: name,
        jss: this,
        Renderer: this.options.Renderer
      });

      if (!ruleOptions.generateId) ruleOptions.generateId = this.generateId;
      if (!ruleOptions.classes) ruleOptions.classes = {};
      if (!ruleOptions.keyframes) ruleOptions.keyframes = {};

      var rule = createRule(name, style, ruleOptions);

      if (rule) this.plugins.onProcessRule(rule);
      return rule;
    }
    /**
     * Register plugin. Passed function will be invoked with a rule instance.
     */
    ;

    _proto.use = function use() {
      var _this = this;

      for (var _len = arguments.length, plugins$$1 = new Array(_len), _key = 0; _key < _len; _key++) {
        plugins$$1[_key] = arguments[_key];
      }

      plugins$$1.forEach(function (plugin) {
        _this.plugins.use(plugin);
      });
      return this;
    };

    return Jss;
  }();

  /**
   * Extracts a styles object with only props that contain function values.
   */
  function getDynamicStyles(styles) {
    var to = null;

    for (var key in styles) {
      var value = styles[key];
      var type = typeof value;

      if (type === 'function') {
        if (!to) to = {};
        to[key] = value;
      } else if (type === 'object' && value !== null && !Array.isArray(value)) {
        var extracted = getDynamicStyles(value);

        if (extracted) {
          if (!to) to = {};
          to[key] = extracted;
        }
      }
    }

    return to;
  }

  /**
   * A better abstraction over CSS.
   *
   * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
   * @website https://github.com/cssinjs/jss
   * @license MIT
   */

  /**
   * Export a constant indicating if this browser has CSSTOM support.
   * https://developers.google.com/web/updates/2018/03/cssom
   */
  var hasCSSTOMSupport = typeof CSS !== 'undefined' && CSS && 'number' in CSS;
  /**
   * Creates a new instance of Jss.
   */

  var create = function create(options) {
    return new Jss(options);
  };
  /**
   * A global Jss instance.
   */

  var index = create();

  var now = Date.now();
  var fnValuesNs = "fnValues" + now;
  var fnRuleNs = "fnStyle" + ++now;
  function functionPlugin() {
    return {
      onCreateRule: function onCreateRule(name, decl, options) {
        if (typeof decl !== 'function') return null;
        var rule = createRule(name, {}, options);
        rule[fnRuleNs] = decl;
        return rule;
      },
      onProcessStyle: function onProcessStyle(style, rule) {
        // We need to extract function values from the declaration, so that we can keep core unaware of them.
        // We need to do that only once.
        // We don't need to extract functions on each style update, since this can happen only once.
        // We don't support function values inside of function rules.
        if (fnValuesNs in rule || fnRuleNs in rule) return style;
        var fnValues = {};

        for (var prop in style) {
          var value = style[prop];
          if (typeof value !== 'function') continue;
          delete style[prop];
          fnValues[prop] = value;
        } // $FlowFixMe


        rule[fnValuesNs] = fnValues;
        return style;
      },
      onUpdate: function onUpdate(data, rule, sheet, options) {
        var styleRule = rule;
        var fnRule = styleRule[fnRuleNs]; // If we have a style function, the entire rule is dynamic and style object
        // will be returned from that function.

        if (fnRule) {
          // Empty object will remove all currently defined props
          // in case function rule returns a falsy value.
          styleRule.style = fnRule(data) || {};
        }

        var fnValues = styleRule[fnValuesNs]; // If we have a fn values map, it is a rule with function values.

        if (fnValues) {
          for (var prop in fnValues) {
            styleRule.prop(prop, fnValues[prop](data), options);
          }
        }
      }
    };
  }

  function _extends$3() {
    _extends$3 = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends$3.apply(this, arguments);
  }

  var at = '@global';
  var atPrefix = '@global ';

  var GlobalContainerRule =
  /*#__PURE__*/
  function () {
    function GlobalContainerRule(key, styles, options) {
      this.type = 'global';
      this.at = at;
      this.rules = void 0;
      this.options = void 0;
      this.key = void 0;
      this.isProcessed = false;
      this.key = key;
      this.options = options;
      this.rules = new RuleList(_extends$3({}, options, {
        parent: this
      }));

      for (var selector in styles) {
        this.rules.add(selector, styles[selector]);
      }

      this.rules.process();
    }
    /**
     * Get a rule.
     */


    var _proto = GlobalContainerRule.prototype;

    _proto.getRule = function getRule(name) {
      return this.rules.get(name);
    }
    /**
     * Create and register rule, run plugins.
     */
    ;

    _proto.addRule = function addRule(name, style, options) {
      var rule = this.rules.add(name, style, options);
      this.options.jss.plugins.onProcessRule(rule);
      return rule;
    }
    /**
     * Get index of a rule.
     */
    ;

    _proto.indexOf = function indexOf(rule) {
      return this.rules.indexOf(rule);
    }
    /**
     * Generates a CSS string.
     */
    ;

    _proto.toString = function toString() {
      return this.rules.toString();
    };

    return GlobalContainerRule;
  }();

  var GlobalPrefixedRule =
  /*#__PURE__*/
  function () {
    function GlobalPrefixedRule(key, style, options) {
      this.type = 'global';
      this.at = at;
      this.options = void 0;
      this.rule = void 0;
      this.isProcessed = false;
      this.key = void 0;
      this.key = key;
      this.options = options;
      var selector = key.substr(atPrefix.length);
      this.rule = options.jss.createRule(selector, style, _extends$3({}, options, {
        parent: this
      }));
    }

    var _proto2 = GlobalPrefixedRule.prototype;

    _proto2.toString = function toString(options) {
      return this.rule ? this.rule.toString(options) : '';
    };

    return GlobalPrefixedRule;
  }();

  var separatorRegExp = /\s*,\s*/g;

  function addScope(selector, scope) {
    var parts = selector.split(separatorRegExp);
    var scoped = '';

    for (var i = 0; i < parts.length; i++) {
      scoped += scope + " " + parts[i].trim();
      if (parts[i + 1]) scoped += ', ';
    }

    return scoped;
  }

  function handleNestedGlobalContainerRule(rule) {
    var options = rule.options,
        style = rule.style;
    var rules = style ? style[at] : null;
    if (!rules) return;

    for (var name in rules) {
      options.sheet.addRule(name, rules[name], _extends$3({}, options, {
        selector: addScope(name, rule.selector)
      }));
    }

    delete style[at];
  }

  function handlePrefixedGlobalRule(rule) {
    var options = rule.options,
        style = rule.style;

    for (var prop in style) {
      if (prop[0] !== '@' || prop.substr(0, at.length) !== at) continue;
      var selector = addScope(prop.substr(at.length), rule.selector);
      options.sheet.addRule(selector, style[prop], _extends$3({}, options, {
        selector: selector
      }));
      delete style[prop];
    }
  }
  /**
   * Convert nested rules to separate, remove them from original styles.
   *
   * @param {Rule} rule
   * @api public
   */


  function jssGlobal() {
    function onCreateRule(name, styles, options) {
      if (!name) return null;

      if (name === at) {
        return new GlobalContainerRule(name, styles, options);
      }

      if (name[0] === '@' && name.substr(0, atPrefix.length) === atPrefix) {
        return new GlobalPrefixedRule(name, styles, options);
      }

      var parent = options.parent;

      if (parent) {
        if (parent.type === 'global' || parent.options.parent && parent.options.parent.type === 'global') {
          options.scoped = false;
        }
      }

      if (options.scoped === false) {
        options.selector = name;
      }

      return null;
    }

    function onProcessRule(rule) {
      if (rule.type !== 'style') return;
      handleNestedGlobalContainerRule(rule);
      handlePrefixedGlobalRule(rule);
    }

    return {
      onCreateRule: onCreateRule,
      onProcessRule: onProcessRule
    };
  }

  function _extends$4() {
    _extends$4 = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends$4.apply(this, arguments);
  }

  var separatorRegExp$1 = /\s*,\s*/g;
  var parentRegExp = /&/g;
  var refRegExp$1 = /\$([\w-]+)/g;
  /**
   * Convert nested rules to separate, remove them from original styles.
   *
   * @param {Rule} rule
   * @api public
   */

  function jssNested() {
    // Get a function to be used for $ref replacement.
    function getReplaceRef(container, sheet) {
      return function (match, key) {
        var rule = container.getRule(key) || sheet && sheet.getRule(key);

        if (rule) {
          rule = rule;
          return rule.selector;
        }
        return key;
      };
    }

    function replaceParentRefs(nestedProp, parentProp) {
      var parentSelectors = parentProp.split(separatorRegExp$1);
      var nestedSelectors = nestedProp.split(separatorRegExp$1);
      var result = '';

      for (var i = 0; i < parentSelectors.length; i++) {
        var parent = parentSelectors[i];

        for (var j = 0; j < nestedSelectors.length; j++) {
          var nested = nestedSelectors[j];
          if (result) result += ', '; // Replace all & by the parent or prefix & with the parent.

          result += nested.indexOf('&') !== -1 ? nested.replace(parentRegExp, parent) : parent + " " + nested;
        }
      }

      return result;
    }

    function getOptions(rule, container, prevOptions) {
      // Options has been already created, now we only increase index.
      if (prevOptions) return _extends$4({}, prevOptions, {
        index: prevOptions.index + 1
      });
      var nestingLevel = rule.options.nestingLevel;
      nestingLevel = nestingLevel === undefined ? 1 : nestingLevel + 1;

      var options = _extends$4({}, rule.options, {
        nestingLevel: nestingLevel,
        index: container.indexOf(rule) + 1 // We don't need the parent name to be set options for chlid.

      });

      delete options.name;
      return options;
    }

    function onProcessStyle(style, rule, sheet) {
      if (rule.type !== 'style') return style;
      var styleRule = rule;
      var container = styleRule.options.parent;
      var options;
      var replaceRef;

      for (var prop in style) {
        var isNested = prop.indexOf('&') !== -1;
        var isNestedConditional = prop[0] === '@';
        if (!isNested && !isNestedConditional) continue;
        options = getOptions(styleRule, container, options);

        if (isNested) {
          var selector = replaceParentRefs(prop, styleRule.selector); // Lazily create the ref replacer function just once for
          // all nested rules within the sheet.

          if (!replaceRef) replaceRef = getReplaceRef(container, sheet); // Replace all $refs.

          selector = selector.replace(refRegExp$1, replaceRef);
          container.addRule(selector, style[prop], _extends$4({}, options, {
            selector: selector
          }));
        } else if (isNestedConditional) {
          // Place conditional right after the parent rule to ensure right ordering.
          container.addRule(prop, {}, options) // Flow expects more options but they aren't required
          // And flow doesn't know this will always be a StyleRule which has the addRule method
          // $FlowFixMe
          .addRule(styleRule.key, style[prop], {
            selector: styleRule.selector
          });
        }

        delete style[prop];
      }

      return style;
    }

    return {
      onProcessStyle: onProcessStyle
    };
  }

  /* eslint-disable no-var, prefer-template */
  var uppercasePattern = /[A-Z]/g;
  var msPattern = /^ms-/;
  var cache = {};

  function toHyphenLower(match) {
    return '-' + match.toLowerCase()
  }

  function hyphenateStyleName(name) {
    if (cache.hasOwnProperty(name)) {
      return cache[name]
    }

    var hName = name.replace(uppercasePattern, toHyphenLower);
    return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)
  }

  /**
   * Convert camel cased property names to dash separated.
   *
   * @param {Object} style
   * @return {Object}
   */

  function convertCase(style) {
    var converted = {};

    for (var prop in style) {
      var key = prop.indexOf('--') === 0 ? prop : hyphenateStyleName(prop);
      converted[key] = style[prop];
    }

    if (style.fallbacks) {
      if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);else converted.fallbacks = convertCase(style.fallbacks);
    }

    return converted;
  }
  /**
   * Allow camel cased property names by converting them back to dasherized.
   *
   * @param {Rule} rule
   */


  function camelCase() {
    function onProcessStyle(style) {
      if (Array.isArray(style)) {
        // Handle rules like @font-face, which can have multiple styles in an array
        for (var index = 0; index < style.length; index++) {
          style[index] = convertCase(style[index]);
        }

        return style;
      }

      return convertCase(style);
    }

    function onChangeValue(value, prop, rule) {
      if (prop.indexOf('--') === 0) {
        return value;
      }

      var hyphenatedProp = hyphenateStyleName(prop); // There was no camel case in place

      if (prop === hyphenatedProp) return value;
      rule.prop(hyphenatedProp, value); // Core will ignore that property value we set the proper one above.

      return null;
    }

    return {
      onProcessStyle: onProcessStyle,
      onChangeValue: onChangeValue
    };
  }

  var px = hasCSSTOMSupport && CSS ? CSS.px : 'px';
  var ms = hasCSSTOMSupport && CSS ? CSS.ms : 'ms';
  var percent = hasCSSTOMSupport && CSS ? CSS.percent : '%';
  /**
   * Generated jss-plugin-default-unit CSS property units
   *
   * @type object
   */

  var defaultUnits = {
    // Animation properties
    'animation-delay': ms,
    'animation-duration': ms,
    // Background properties
    'background-position': px,
    'background-position-x': px,
    'background-position-y': px,
    'background-size': px,
    // Border Properties
    border: px,
    'border-bottom': px,
    'border-bottom-left-radius': px,
    'border-bottom-right-radius': px,
    'border-bottom-width': px,
    'border-left': px,
    'border-left-width': px,
    'border-radius': px,
    'border-right': px,
    'border-right-width': px,
    'border-top': px,
    'border-top-left-radius': px,
    'border-top-right-radius': px,
    'border-top-width': px,
    'border-width': px,
    // Margin properties
    margin: px,
    'margin-bottom': px,
    'margin-left': px,
    'margin-right': px,
    'margin-top': px,
    // Padding properties
    padding: px,
    'padding-bottom': px,
    'padding-left': px,
    'padding-right': px,
    'padding-top': px,
    // Mask properties
    'mask-position-x': px,
    'mask-position-y': px,
    'mask-size': px,
    // Width and height properties
    height: px,
    width: px,
    'min-height': px,
    'max-height': px,
    'min-width': px,
    'max-width': px,
    // Position properties
    bottom: px,
    left: px,
    top: px,
    right: px,
    // Shadow properties
    'box-shadow': px,
    'text-shadow': px,
    // Column properties
    'column-gap': px,
    'column-rule': px,
    'column-rule-width': px,
    'column-width': px,
    // Font and text properties
    'font-size': px,
    'font-size-delta': px,
    'letter-spacing': px,
    'text-indent': px,
    'text-stroke': px,
    'text-stroke-width': px,
    'word-spacing': px,
    // Motion properties
    motion: px,
    'motion-offset': px,
    // Outline properties
    outline: px,
    'outline-offset': px,
    'outline-width': px,
    // Perspective properties
    perspective: px,
    'perspective-origin-x': percent,
    'perspective-origin-y': percent,
    // Transform properties
    'transform-origin': percent,
    'transform-origin-x': percent,
    'transform-origin-y': percent,
    'transform-origin-z': percent,
    // Transition properties
    'transition-delay': ms,
    'transition-duration': ms,
    // Alignment properties
    'vertical-align': px,
    'flex-basis': px,
    // Some random properties
    'shape-margin': px,
    size: px,
    // Grid properties
    grid: px,
    'grid-gap': px,
    'grid-row-gap': px,
    'grid-column-gap': px,
    'grid-template-rows': px,
    'grid-template-columns': px,
    'grid-auto-rows': px,
    'grid-auto-columns': px,
    // Not existing properties.
    // Used to avoid issues with jss-plugin-expand integration.
    'box-shadow-x': px,
    'box-shadow-y': px,
    'box-shadow-blur': px,
    'box-shadow-spread': px,
    'font-line-height': px,
    'text-shadow-x': px,
    'text-shadow-y': px,
    'text-shadow-blur': px
  };

  /**
   * Clones the object and adds a camel cased property version.
   */
  function addCamelCasedVersion(obj) {
    var regExp = /(-[a-z])/g;

    var replace = function replace(str) {
      return str[1].toUpperCase();
    };

    var newObj = {};

    for (var _key in obj) {
      newObj[_key] = obj[_key];
      newObj[_key.replace(regExp, replace)] = obj[_key];
    }

    return newObj;
  }

  var units = addCamelCasedVersion(defaultUnits);
  /**
   * Recursive deep style passing function
   */

  function iterate(prop, value, options) {
    if (!value) return value;

    if (Array.isArray(value)) {
      for (var i = 0; i < value.length; i++) {
        value[i] = iterate(prop, value[i], options);
      }
    } else if (typeof value === 'object') {
      if (prop === 'fallbacks') {
        for (var innerProp in value) {
          value[innerProp] = iterate(innerProp, value[innerProp], options);
        }
      } else {
        for (var _innerProp in value) {
          value[_innerProp] = iterate(prop + "-" + _innerProp, value[_innerProp], options);
        }
      }
    } else if (typeof value === 'number') {
      if (options[prop]) {
        return "" + value + options[prop];
      }

      if (units[prop]) {
        return typeof units[prop] === 'function' ? units[prop](value).toString() : "" + value + units[prop];
      }

      return value.toString();
    }

    return value;
  }
  /**
   * Add unit to numeric values.
   */


  function defaultUnit(options) {
    if (options === void 0) {
      options = {};
    }

    var camelCasedOptions = addCamelCasedVersion(options);

    function onProcessStyle(style, rule) {
      if (rule.type !== 'style') return style;

      for (var prop in style) {
        style[prop] = iterate(prop, style[prop], camelCasedOptions);
      }

      return style;
    }

    function onChangeValue(value, prop) {
      return iterate(prop, value, camelCasedOptions);
    }

    return {
      onProcessStyle: onProcessStyle,
      onChangeValue: onChangeValue
    };
  }

  function _arrayWithoutHoles$2(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }
  }

  function _iterableToArray$2(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread$2() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _toConsumableArray$2(arr) {
    return _arrayWithoutHoles$2(arr) || _iterableToArray$2(arr) || _nonIterableSpread$2();
  }

  // Export javascript style and css style vendor prefixes.
  var js = '';
  var css = '';
  var vendor = '';
  var browser = '';
  var isTouch = isBrowser && 'ontouchstart' in document.documentElement; // We should not do anything if required serverside.

  if (isBrowser) {
    // Order matters. We need to check Webkit the last one because
    // other vendors use to add Webkit prefixes to some properties
    var jsCssMap = {
      Moz: '-moz-',
      ms: '-ms-',
      O: '-o-',
      Webkit: '-webkit-'
    };

    var _document$createEleme = document.createElement('p'),
        style = _document$createEleme.style;

    var testProp = 'Transform';

    for (var key in jsCssMap) {
      if (key + testProp in style) {
        js = key;
        css = jsCssMap[key];
        break;
      }
    } // Correctly detect the Edge browser.


    if (js === 'Webkit' && 'msHyphens' in style) {
      js = 'ms';
      css = jsCssMap.ms;
      browser = 'edge';
    } // Correctly detect the Safari browser.


    if (js === 'Webkit' && '-apple-trailing-word' in style) {
      vendor = 'apple';
    }
  }
  /**
   * Vendor prefix string for the current browser.
   *
   * @type {{js: String, css: String, vendor: String, browser: String}}
   * @api public
   */


  var prefix = {
    js: js,
    css: css,
    vendor: vendor,
    browser: browser,
    isTouch: isTouch
  };

  /**
   * Test if a keyframe at-rule should be prefixed or not
   *
   * @param {String} vendor prefix string for the current browser.
   * @return {String}
   * @api public
   */

  function supportedKeyframes(key) {
    // Keyframes is already prefixed. e.g. key = '@-webkit-keyframes a'
    if (key[1] === '-') return key; // No need to prefix IE/Edge. Older browsers will ignore unsupported rules.
    // https://caniuse.com/#search=keyframes

    if (prefix.js === 'ms') return key;
    return "@" + prefix.css + "keyframes" + key.substr(10);
  }

  // https://caniuse.com/#search=appearance

  var appearence = {
    noPrefill: ['appearance'],
    supportedProperty: function supportedProperty(prop) {
      if (prop !== 'appearance') return false;
      if (prefix.js === 'ms') return "-webkit-" + prop;
      return prefix.css + prop;
    }
  };

  // https://caniuse.com/#search=color-adjust

  var colorAdjust = {
    noPrefill: ['color-adjust'],
    supportedProperty: function supportedProperty(prop) {
      if (prop !== 'color-adjust') return false;
      if (prefix.js === 'Webkit') return prefix.css + "print-" + prop;
      return prop;
    }
  };

  var regExp = /[-\s]+(.)?/g;
  /**
   * Replaces the letter with the capital letter
   *
   * @param {String} match
   * @param {String} c
   * @return {String}
   * @api private
   */

  function toUpper(match, c) {
    return c ? c.toUpperCase() : '';
  }
  /**
   * Convert dash separated strings to camel-cased.
   *
   * @param {String} str
   * @return {String}
   * @api private
   */


  function camelize(str) {
    return str.replace(regExp, toUpper);
  }

  /**
   * Convert dash separated strings to pascal cased.
   *
   * @param {String} str
   * @return {String}
   * @api private
   */

  function pascalize(str) {
    return camelize("-" + str);
  }

  // but we can use a longhand property instead.
  // https://caniuse.com/#search=mask

  var mask = {
    noPrefill: ['mask'],
    supportedProperty: function supportedProperty(prop, style) {
      if (!/^mask/.test(prop)) return false;

      if (prefix.js === 'Webkit') {
        var longhand = 'mask-image';

        if (camelize(longhand) in style) {
          return prop;
        }

        if (prefix.js + pascalize(longhand) in style) {
          return prefix.css + prop;
        }
      }

      return prop;
    }
  };

  // https://caniuse.com/#search=text-orientation

  var textOrientation = {
    noPrefill: ['text-orientation'],
    supportedProperty: function supportedProperty(prop) {
      if (prop !== 'text-orientation') return false;

      if (prefix.vendor === 'apple' && !prefix.isTouch) {
        return prefix.css + prop;
      }

      return prop;
    }
  };

  // https://caniuse.com/#search=transform

  var transform = {
    noPrefill: ['transform'],
    supportedProperty: function supportedProperty(prop, style, options) {
      if (prop !== 'transform') return false;

      if (options.transform) {
        return prop;
      }

      return prefix.css + prop;
    }
  };

  // https://caniuse.com/#search=transition

  var transition = {
    noPrefill: ['transition'],
    supportedProperty: function supportedProperty(prop, style, options) {
      if (prop !== 'transition') return false;

      if (options.transition) {
        return prop;
      }

      return prefix.css + prop;
    }
  };

  // https://caniuse.com/#search=writing-mode

  var writingMode = {
    noPrefill: ['writing-mode'],
    supportedProperty: function supportedProperty(prop) {
      if (prop !== 'writing-mode') return false;

      if (prefix.js === 'Webkit' || prefix.js === 'ms') {
        return prefix.css + prop;
      }

      return prop;
    }
  };

  // https://caniuse.com/#search=user-select

  var userSelect = {
    noPrefill: ['user-select'],
    supportedProperty: function supportedProperty(prop) {
      if (prop !== 'user-select') return false;

      if (prefix.js === 'Moz' || prefix.js === 'ms' || prefix.vendor === 'apple') {
        return prefix.css + prop;
      }

      return prop;
    }
  };

  // https://caniuse.com/#search=multicolumn
  // https://github.com/postcss/autoprefixer/issues/491
  // https://github.com/postcss/autoprefixer/issues/177

  var breakPropsOld = {
    supportedProperty: function supportedProperty(prop, style) {
      if (!/^break-/.test(prop)) return false;

      if (prefix.js === 'Webkit') {
        var jsProp = "WebkitColumn" + pascalize(prop);
        return jsProp in style ? prefix.css + "column-" + prop : false;
      }

      if (prefix.js === 'Moz') {
        var _jsProp = "page" + pascalize(prop);

        return _jsProp in style ? "page-" + prop : false;
      }

      return false;
    }
  };

  // See https://github.com/postcss/autoprefixer/issues/324.

  var inlineLogicalOld = {
    supportedProperty: function supportedProperty(prop, style) {
      if (!/^(border|margin|padding)-inline/.test(prop)) return false;
      if (prefix.js === 'Moz') return prop;
      var newProp = prop.replace('-inline', '');
      return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
    }
  };

  // Camelization is required because we can't test using.
  // CSS syntax for e.g. in FF.

  var unprefixed = {
    supportedProperty: function supportedProperty(prop, style) {
      return camelize(prop) in style ? prop : false;
    }
  };

  var prefixed = {
    supportedProperty: function supportedProperty(prop, style) {
      var pascalized = pascalize(prop); // Return custom CSS variable without prefixing.

      if (prop[0] === '-') return prop; // Return already prefixed value without prefixing.

      if (prop[0] === '-' && prop[1] === '-') return prop;
      if (prefix.js + pascalized in style) return prefix.css + prop; // Try webkit fallback.

      if (prefix.js !== 'Webkit' && "Webkit" + pascalized in style) return "-webkit-" + prop;
      return false;
    }
  };

  // https://caniuse.com/#search=scroll-snap

  var scrollSnap = {
    supportedProperty: function supportedProperty(prop) {
      if (prop.substring(0, 11) !== 'scroll-snap') return false;

      if (prefix.js === 'ms') {
        return "" + prefix.css + prop;
      }

      return prop;
    }
  };

  // https://caniuse.com/#search=overscroll-behavior

  var overscrollBehavior = {
    supportedProperty: function supportedProperty(prop) {
      if (prop !== 'overscroll-behavior') return false;

      if (prefix.js === 'ms') {
        return prefix.css + "scroll-chaining";
      }

      return prop;
    }
  };

  var propMap = {
    'flex-grow': 'flex-positive',
    'flex-shrink': 'flex-negative',
    'flex-basis': 'flex-preferred-size',
    'justify-content': 'flex-pack',
    order: 'flex-order',
    'align-items': 'flex-align',
    'align-content': 'flex-line-pack' // 'align-self' is handled by 'align-self' plugin.

  }; // Support old flex spec from 2012.

  var flex2012 = {
    supportedProperty: function supportedProperty(prop, style) {
      var newProp = propMap[prop];
      if (!newProp) return false;
      return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
    }
  };

  var propMap$1 = {
    flex: 'box-flex',
    'flex-grow': 'box-flex',
    'flex-direction': ['box-orient', 'box-direction'],
    order: 'box-ordinal-group',
    'align-items': 'box-align',
    'flex-flow': ['box-orient', 'box-direction'],
    'justify-content': 'box-pack'
  };
  var propKeys = Object.keys(propMap$1);

  var prefixCss = function prefixCss(p) {
    return prefix.css + p;
  }; // Support old flex spec from 2009.


  var flex2009 = {
    supportedProperty: function supportedProperty(prop, style, _ref) {
      var multiple = _ref.multiple;

      if (propKeys.indexOf(prop) > -1) {
        var newProp = propMap$1[prop];

        if (!Array.isArray(newProp)) {
          return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
        }

        if (!multiple) return false;

        for (var i = 0; i < newProp.length; i++) {
          if (!(prefix.js + pascalize(newProp[0]) in style)) {
            return false;
          }
        }

        return newProp.map(prefixCss);
      }

      return false;
    }
  };

  // plugins = [
  //   ...plugins,
  //    breakPropsOld,
  //    inlineLogicalOld,
  //    unprefixed,
  //    prefixed,
  //    scrollSnap,
  //    flex2012,
  //    flex2009
  // ]
  // Plugins without 'noPrefill' value, going last.
  // 'flex-*' plugins should be at the bottom.
  // 'flex2009' going after 'flex2012'.
  // 'prefixed' going after 'unprefixed'

  var plugins$1 = [appearence, colorAdjust, mask, textOrientation, transform, transition, writingMode, userSelect, breakPropsOld, inlineLogicalOld, unprefixed, prefixed, scrollSnap, overscrollBehavior, flex2012, flex2009];
  var propertyDetectors = plugins$1.filter(function (p) {
    return p.supportedProperty;
  }).map(function (p) {
    return p.supportedProperty;
  });
  var noPrefill = plugins$1.filter(function (p) {
    return p.noPrefill;
  }).reduce(function (a, p) {
    a.push.apply(a, _toConsumableArray$2(p.noPrefill));
    return a;
  }, []);

  var el;
  var cache$1 = {};

  if (isBrowser) {
    el = document.createElement('p'); // We test every property on vendor prefix requirement.
    // Once tested, result is cached. It gives us up to 70% perf boost.
    // http://jsperf.com/element-style-object-access-vs-plain-object
    //
    // Prefill cache with known css properties to reduce amount of
    // properties we need to feature test at runtime.
    // http://davidwalsh.name/vendor-prefix

    var computed = window.getComputedStyle(document.documentElement, '');

    for (var key$1 in computed) {
      // eslint-disable-next-line no-restricted-globals
      if (!isNaN(key$1)) cache$1[computed[key$1]] = computed[key$1];
    } // Properties that cannot be correctly detected using the
    // cache prefill method.


    noPrefill.forEach(function (x) {
      return delete cache$1[x];
    });
  }
  /**
   * Test if a property is supported, returns supported property with vendor
   * prefix if required. Returns `false` if not supported.
   *
   * @param {String} prop dash separated
   * @param {Object} [options]
   * @return {String|Boolean}
   * @api public
   */


  function supportedProperty(prop, options) {
    if (options === void 0) {
      options = {};
    }

    // For server-side rendering.
    if (!el) return prop; // Remove cache for benchmark tests or return property from the cache.

    if ( cache$1[prop] != null) {
      return cache$1[prop];
    } // Check if 'transition' or 'transform' natively supported in browser.


    if (prop === 'transition' || prop === 'transform') {
      options[prop] = prop in el.style;
    } // Find a plugin for current prefix property.


    for (var i = 0; i < propertyDetectors.length; i++) {
      cache$1[prop] = propertyDetectors[i](prop, el.style, options); // Break loop, if value found.

      if (cache$1[prop]) break;
    } // Reset styles for current property.
    // Firefox can even throw an error for invalid properties, e.g., "0".


    try {
      el.style[prop] = '';
    } catch (err) {
      return false;
    }

    return cache$1[prop];
  }

  var cache$1$1 = {};
  var transitionProperties = {
    transition: 1,
    'transition-property': 1,
    '-webkit-transition': 1,
    '-webkit-transition-property': 1
  };
  var transPropsRegExp = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;
  var el$1;
  /**
   * Returns prefixed value transition/transform if needed.
   *
   * @param {String} match
   * @param {String} p1
   * @param {String} p2
   * @return {String}
   * @api private
   */

  function prefixTransitionCallback(match, p1, p2) {
    if (p1 === 'var') return 'var';
    if (p1 === 'all') return 'all';
    if (p2 === 'all') return ', all';
    var prefixedValue = p1 ? supportedProperty(p1) : ", " + supportedProperty(p2);
    if (!prefixedValue) return p1 || p2;
    return prefixedValue;
  }

  if (isBrowser) el$1 = document.createElement('p');
  /**
   * Returns prefixed value if needed. Returns `false` if value is not supported.
   *
   * @param {String} property
   * @param {String} value
   * @return {String|Boolean}
   * @api public
   */

  function supportedValue(property, value) {
    // For server-side rendering.
    var prefixedValue = value;
    if (!el$1 || property === 'content') return value; // It is a string or a number as a string like '1'.
    // We want only prefixable values here.
    // eslint-disable-next-line no-restricted-globals

    if (typeof prefixedValue !== 'string' || !isNaN(parseInt(prefixedValue, 10))) {
      return prefixedValue;
    } // Create cache key for current value.


    var cacheKey = property + prefixedValue; // Remove cache for benchmark tests or return value from cache.

    if ( cache$1$1[cacheKey] != null) {
      return cache$1$1[cacheKey];
    } // IE can even throw an error in some cases, for e.g. style.content = 'bar'.


    try {
      // Test value as it is.
      el$1.style[property] = prefixedValue;
    } catch (err) {
      // Return false if value not supported.
      cache$1$1[cacheKey] = false;
      return false;
    } // If 'transition' or 'transition-property' property.


    if (transitionProperties[property]) {
      prefixedValue = prefixedValue.replace(transPropsRegExp, prefixTransitionCallback);
    } else if (el$1.style[property] === '') {
      // Value with a vendor prefix.
      prefixedValue = prefix.css + prefixedValue; // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.

      if (prefixedValue === '-ms-flex') el$1.style[property] = '-ms-flexbox'; // Test prefixed value.

      el$1.style[property] = prefixedValue; // Return false if value not supported.

      if (el$1.style[property] === '') {
        cache$1$1[cacheKey] = false;
        return false;
      }
    } // Reset styles for current property.


    el$1.style[property] = ''; // Write current value to cache.

    cache$1$1[cacheKey] = prefixedValue;
    return cache$1$1[cacheKey];
  }

  /**
   * Add vendor prefix to a property name when needed.
   *
   * @api public
   */

  function jssVendorPrefixer() {
    function onProcessRule(rule) {
      if (rule.type === 'keyframes') {
        var atRule = rule;
        atRule.at = supportedKeyframes(atRule.at);
      }
    }

    function prefixStyle(style) {
      for (var prop in style) {
        var value = style[prop];

        if (prop === 'fallbacks' && Array.isArray(value)) {
          style[prop] = value.map(prefixStyle);
          continue;
        }

        var changeProp = false;
        var supportedProp = supportedProperty(prop);
        if (supportedProp && supportedProp !== prop) changeProp = true;
        var changeValue = false;
        var supportedValue$$1 = supportedValue(supportedProp, toCssValue(value));
        if (supportedValue$$1 && supportedValue$$1 !== value) changeValue = true;

        if (changeProp || changeValue) {
          if (changeProp) delete style[prop];
          style[supportedProp || prop] = supportedValue$$1 || value;
        }
      }

      return style;
    }

    function onProcessStyle(style, rule) {
      if (rule.type !== 'style') return style;
      return prefixStyle(style);
    }

    function onChangeValue(value, prop) {
      return supportedValue(prop, toCssValue(value)) || value;
    }

    return {
      onProcessRule: onProcessRule,
      onProcessStyle: onProcessStyle,
      onChangeValue: onChangeValue
    };
  }

  /**
   * Sort props by length.
   */
  function jssPropsSort() {
    var sort = function sort(prop0, prop1) {
      if (prop0.length === prop1.length) {
        return prop0 > prop1 ? 1 : -1;
      }

      return prop0.length - prop1.length;
    };

    return {
      onProcessStyle: function onProcessStyle(style, rule) {
        if (rule.type !== 'style') return style;
        var newStyle = {};
        var props = Object.keys(style).sort(sort);

        for (var i = 0; i < props.length; i++) {
          newStyle[props[i]] = style[props[i]];
        }

        return newStyle;
      }
    };
  }

  function jssPreset() {
    return {
      plugins: [functionPlugin(), jssGlobal(), jssNested(), camelCase(), defaultUnit(), // Disable the vendor prefixer server-side, it does nothing.
      // This way, we can get a performance boost.
      // In the documentation, we are using `autoprefixer` to solve this problem.
      typeof window === 'undefined' ? null : jssVendorPrefixer(), jssPropsSort()]
    };
  }

  function _objectWithoutPropertiesLoose$2(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties$1(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose$2(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _extends$5() {
    _extends$5 = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends$5.apply(this, arguments);
  }

  function mergeClasses() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var baseClasses = options.baseClasses,
        newClasses = options.newClasses,
        Component = options.Component;

    if (!newClasses) {
      return baseClasses;
    }

    var nextClasses = _extends$5({}, baseClasses);

    Object.keys(newClasses).forEach(function (key) {

      if (newClasses[key]) {
        nextClasses[key] = "".concat(baseClasses[key], " ").concat(newClasses[key]);
      }
    });
    return nextClasses;
  }

  // Used https://github.com/thinkloop/multi-key-cache as inspiration
  var multiKeyStore = {
    set: function set(cache, key1, key2, value) {
      var subCache = cache.get(key1);

      if (!subCache) {
        subCache = new Map();
        cache.set(key1, subCache);
      }

      subCache.set(key2, value);
    },
    get: function get(cache, key1, key2) {
      var subCache = cache.get(key1);
      return subCache ? subCache.get(key2) : undefined;
    },
    delete: function _delete(cache, key1, key2) {
      var subCache = cache.get(key1);
      subCache.delete(key2);
    }
  };

  var ThemeContext = react.createContext(null);

  function useTheme() {
    return react.useContext(ThemeContext);
  }

  var jss = create(jssPreset()); // Use a singleton or the provided one by the context.
  //
  // The counter-based approach doesn't tolerate any mistake.
  // It's much safer to use the same counter everywhere.

  var generateClassName = createGenerateClassName(); // Exported for test purposes

  var sheetsManager = new Map();
  var defaultOptions = {
    disableGeneration: false,
    generateClassName: generateClassName,
    jss: jss,
    sheetsCache: null,
    sheetsManager: sheetsManager,
    sheetsRegistry: null
  };
  var StylesContext = react.createContext(defaultOptions);

  var injectFirstNode;

  function StylesProvider(props) {
    var children = props.children,
        _props$injectFirst = props.injectFirst,
        injectFirst = _props$injectFirst === void 0 ? false : _props$injectFirst,
        _props$disableGenerat = props.disableGeneration,
        disableGeneration = _props$disableGenerat === void 0 ? false : _props$disableGenerat,
        localOptions = _objectWithoutProperties$1(props, ["children", "injectFirst", "disableGeneration"]);

    var outerOptions = react.useContext(StylesContext);

    var context = _extends$5({}, outerOptions, {
      disableGeneration: disableGeneration
    }, localOptions);

    if (!context.jss.options.insertionPoint && injectFirst && typeof window !== 'undefined') {
      if (!injectFirstNode) {
        var head = document.head;
        injectFirstNode = document.createComment('mui-inject-first');
        head.insertBefore(injectFirstNode, head.firstChild);
      }

      context.jss = create({
        plugins: jssPreset().plugins,
        insertionPoint: injectFirstNode
      });
    }

    return react.createElement(StylesContext.Provider, {
      value: context
    }, children);
  }

  /* eslint-disable import/prefer-default-export */
  // Global index counter to preserve source order.
  // We create the style sheet during at the creation of the component,
  // children are handled after the parents, so the order of style elements would be parent->child.
  // It is a problem though when a parent passes a className
  // which needs to override any child's styles.
  // StyleSheet of the child has a higher specificity, because of the source order.
  // So our solution is to render sheets them in the reverse order child->sheet, so
  // that parent has a higher specificity.
  var indexCounter = -1e9;
  function increment() {
    indexCounter += 1;

    return indexCounter;
  }

  // We use the same empty object to ref count the styles that don't need a theme object.
  var noopTheme = {};

  function getStylesCreator(stylesOrCreator) {
    var themingEnabled = typeof stylesOrCreator === 'function';

    return {
      create: function create(theme, name) {
        var styles;

        try {
          styles = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;
        } catch (err) {

          throw err;
        }

        if (!name || !theme.overrides || !theme.overrides[name]) {
          return styles;
        }

        var overrides = theme.overrides[name];

        var stylesWithOverrides = _extends$5({}, styles);

        Object.keys(overrides).forEach(function (key) {

          stylesWithOverrides[key] = deepmerge(stylesWithOverrides[key], overrides[key]);
        });
        return stylesWithOverrides;
      },
      options: {}
    };
  }

  function getClasses(_ref, classes, Component) {
    var state = _ref.state,
        stylesOptions = _ref.stylesOptions;

    if (stylesOptions.disableGeneration) {
      return classes || {};
    }

    if (!state.cacheClasses) {
      state.cacheClasses = {
        // Cache for the finalized classes value.
        value: null,
        // Cache for the last used classes prop pointer.
        lastProp: null,
        // Cache for the last used rendered classes pointer.
        lastJSS: {}
      };
    } // Tracks if either the rendered classes or classes prop has changed,
    // requiring the generation of a new finalized classes object.


    var generate = false;

    if (state.classes !== state.cacheClasses.lastJSS) {
      state.cacheClasses.lastJSS = state.classes;
      generate = true;
    }

    if (classes !== state.cacheClasses.lastProp) {
      state.cacheClasses.lastProp = classes;
      generate = true;
    }

    if (generate) {
      state.cacheClasses.value = mergeClasses({
        baseClasses: state.cacheClasses.lastJSS,
        newClasses: classes,
        Component: Component
      });
    }

    return state.cacheClasses.value;
  }

  function attach(_ref2, props) {
    var state = _ref2.state,
        theme = _ref2.theme,
        stylesOptions = _ref2.stylesOptions,
        stylesCreator = _ref2.stylesCreator,
        name = _ref2.name;

    if (stylesOptions.disableGeneration) {
      return;
    }

    var sheetManager = multiKeyStore.get(stylesOptions.sheetsManager, stylesCreator, theme);

    if (!sheetManager) {
      sheetManager = {
        refs: 0,
        staticSheet: null,
        dynamicStyles: null
      };
      multiKeyStore.set(stylesOptions.sheetsManager, stylesCreator, theme, sheetManager);
    }

    var options = _extends$5({}, stylesCreator.options, {}, stylesOptions, {
      theme: theme,
      flip: typeof stylesOptions.flip === 'boolean' ? stylesOptions.flip : theme.direction === 'rtl'
    });

    options.generateId = options.serverGenerateClassName || options.generateClassName;
    var sheetsRegistry = stylesOptions.sheetsRegistry;

    if (sheetManager.refs === 0) {
      var staticSheet;

      if (stylesOptions.sheetsCache) {
        staticSheet = multiKeyStore.get(stylesOptions.sheetsCache, stylesCreator, theme);
      }

      var styles = stylesCreator.create(theme, name);

      if (!staticSheet) {
        staticSheet = stylesOptions.jss.createStyleSheet(styles, _extends$5({
          link: false
        }, options));
        staticSheet.attach();

        if (stylesOptions.sheetsCache) {
          multiKeyStore.set(stylesOptions.sheetsCache, stylesCreator, theme, staticSheet);
        }
      }

      if (sheetsRegistry) {
        sheetsRegistry.add(staticSheet);
      }

      sheetManager.staticSheet = staticSheet;
      sheetManager.dynamicStyles = getDynamicStyles(styles);
    }

    if (sheetManager.dynamicStyles) {
      var dynamicSheet = stylesOptions.jss.createStyleSheet(sheetManager.dynamicStyles, _extends$5({
        link: true
      }, options));
      dynamicSheet.update(props);
      dynamicSheet.attach();
      state.dynamicSheet = dynamicSheet;
      state.classes = mergeClasses({
        baseClasses: sheetManager.staticSheet.classes,
        newClasses: dynamicSheet.classes
      });

      if (sheetsRegistry) {
        sheetsRegistry.add(dynamicSheet);
      }
    } else {
      state.classes = sheetManager.staticSheet.classes;
    }

    sheetManager.refs += 1;
  }

  function update(_ref3, props) {
    var state = _ref3.state;

    if (state.dynamicSheet) {
      state.dynamicSheet.update(props);
    }
  }

  function detach(_ref4) {
    var state = _ref4.state,
        theme = _ref4.theme,
        stylesOptions = _ref4.stylesOptions,
        stylesCreator = _ref4.stylesCreator;

    if (stylesOptions.disableGeneration) {
      return;
    }

    var sheetManager = multiKeyStore.get(stylesOptions.sheetsManager, stylesCreator, theme);
    sheetManager.refs -= 1;
    var sheetsRegistry = stylesOptions.sheetsRegistry;

    if (sheetManager.refs === 0) {
      multiKeyStore.delete(stylesOptions.sheetsManager, stylesCreator, theme);
      stylesOptions.jss.removeStyleSheet(sheetManager.staticSheet);

      if (sheetsRegistry) {
        sheetsRegistry.remove(sheetManager.staticSheet);
      }
    }

    if (state.dynamicSheet) {
      stylesOptions.jss.removeStyleSheet(state.dynamicSheet);

      if (sheetsRegistry) {
        sheetsRegistry.remove(state.dynamicSheet);
      }
    }
  }

  function useSynchronousEffect(func, values) {
    var key = react.useRef([]);
    var output; // Store "generation" key. Just returns a new object every time

    var currentKey = react.useMemo(function () {
      return {};
    }, values); // eslint-disable-line react-hooks/exhaustive-deps
    // "the first render", or "memo dropped the value"

    if (key.current !== currentKey) {
      key.current = currentKey;
      output = func();
    }

    react.useEffect(function () {
      return function () {
        if (output) {
          output();
        }
      };
    }, [currentKey] // eslint-disable-line react-hooks/exhaustive-deps
    );
  }

  function makeStyles(stylesOrCreator) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var name = options.name,
        classNamePrefixOption = options.classNamePrefix,
        Component = options.Component,
        _options$defaultTheme = options.defaultTheme,
        defaultTheme = _options$defaultTheme === void 0 ? noopTheme : _options$defaultTheme,
        stylesOptions2 = _objectWithoutProperties$1(options, ["name", "classNamePrefix", "Component", "defaultTheme"]);

    var stylesCreator = getStylesCreator(stylesOrCreator);
    var classNamePrefix = name || classNamePrefixOption || 'makeStyles';
    stylesCreator.options = {
      index: increment(),
      name: name,
      meta: classNamePrefix,
      classNamePrefix: classNamePrefix
    };
    return function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var theme = useTheme() || defaultTheme;

      var stylesOptions = _extends$5({}, react.useContext(StylesContext), {}, stylesOptions2);

      var instance = react.useRef();
      var shouldUpdate = react.useRef();
      useSynchronousEffect(function () {
        var current = {
          name: name,
          state: {},
          stylesCreator: stylesCreator,
          stylesOptions: stylesOptions,
          theme: theme
        };
        attach(current, props);
        shouldUpdate.current = false;
        instance.current = current;
        return function () {
          detach(current);
        };
      }, [theme, stylesCreator]);
      react.useEffect(function () {
        if (shouldUpdate.current) {
          update(instance.current, props);
        }

        shouldUpdate.current = true;
      });
      return getClasses(instance.current, props.classes, Component);
    };
  }

  function toVal(mix) {
  	var k, y, str='';
  	if (mix) {
  		if (typeof mix === 'object') {
  			if (!!mix.push) {
  				for (k=0; k < mix.length; k++) {
  					if (mix[k] && (y = toVal(mix[k]))) {
  						str && (str += ' ');
  						str += y;
  					}
  				}
  			} else {
  				for (k in mix) {
  					if (mix[k] && (y = toVal(k))) {
  						str && (str += ' ');
  						str += y;
  					}
  				}
  			}
  		} else if (typeof mix !== 'boolean' && !mix.call) {
  			str && (str += ' ');
  			str += mix;
  		}
  	}
  	return str;
  }

  function clsx () {
  	var i=0, x, str='';
  	while (i < arguments.length) {
  		if (x = toVal(arguments[i++])) {
  			str && (str += ' ');
  			str += x;
  		}
  	}
  	return str;
  }

  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  var REACT_STATICS = {
      childContextTypes: true,
      contextType: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromError: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
  };

  var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
  };

  var FORWARD_REF_STATICS = {
      '$$typeof': true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
  };

  var MEMO_STATICS = {
      '$$typeof': true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true
  };

  var TYPE_STATICS = {};
  TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;

  function getStatics(component) {
      if (reactIs.isMemo(component)) {
          return MEMO_STATICS;
      }
      return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
  }

  var defineProperty$1 = Object.defineProperty;
  var getOwnPropertyNames = Object.getOwnPropertyNames;
  var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var getPrototypeOf = Object.getPrototypeOf;
  var objectPrototype = Object.prototype;

  function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== 'string') {
          // don't hoist over string (html) components

          if (objectPrototype) {
              var inheritedComponent = getPrototypeOf(sourceComponent);
              if (inheritedComponent && inheritedComponent !== objectPrototype) {
                  hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
              }
          }

          var keys = getOwnPropertyNames(sourceComponent);

          if (getOwnPropertySymbols$1) {
              keys = keys.concat(getOwnPropertySymbols$1(sourceComponent));
          }

          var targetStatics = getStatics(targetComponent);
          var sourceStatics = getStatics(sourceComponent);

          for (var i = 0; i < keys.length; ++i) {
              var key = keys[i];
              if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                  var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                  try {
                      // Avoid failures from read-only properties
                      defineProperty$1(targetComponent, key, descriptor);
                  } catch (e) {}
              }
          }

          return targetComponent;
      }

      return targetComponent;
  }

  var hoistNonReactStatics_cjs = hoistNonReactStatics;

  function omit(input, fields) {
    var output = {};
    Object.keys(input).forEach(function (prop) {
      if (fields.indexOf(prop) === -1) {
        output[prop] = input[prop];
      }
    });
    return output;
  } // styled-components's API removes the mapping between components and styles.
  // Using components as a low-level styling construct can be simpler.


  function styled(Component) {
    var componentCreator = function componentCreator(style) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var name = options.name,
          stylesOptions = _objectWithoutProperties$1(options, ["name"]);

      var classNamePrefix = name;

      var stylesOrCreator = typeof style === 'function' ? function (theme) {
        return {
          root: function root(props) {
            return style(_extends$5({
              theme: theme
            }, props));
          }
        };
      } : {
        root: style
      };
      var useStyles = makeStyles(stylesOrCreator, _extends$5({
        Component: Component,
        name: name || Component.displayName,
        classNamePrefix: classNamePrefix
      }, stylesOptions));
      var filterProps;
      var propTypes = {};

      if (style.filterProps) {
        filterProps = style.filterProps;
        delete style.filterProps;
      }
      /* eslint-disable react/forbid-foreign-prop-types */


      if (style.propTypes) {
        propTypes = style.propTypes;
        delete style.propTypes;
      }
      /* eslint-enable react/forbid-foreign-prop-types */


      var StyledComponent = react.forwardRef(function StyledComponent(props, ref) {
        var children = props.children,
            classNameProp = props.className,
            clone = props.clone,
            ComponentProp = props.component,
            other = _objectWithoutProperties$1(props, ["children", "className", "clone", "component"]);

        var classes = useStyles(props);
        var className = clsx(classes.root, classNameProp);
        var spread = other;

        if (filterProps) {
          spread = omit(spread, filterProps);
        }

        if (clone) {
          return react.cloneElement(children, _extends$5({
            className: clsx(children.props.className, className)
          }, spread));
        }

        if (typeof children === 'function') {
          return children(_extends$5({
            className: className
          }, spread));
        }

        var FinalComponent = ComponentProp || Component;
        return react.createElement(FinalComponent, _extends$5({
          ref: ref,
          className: className
        }, spread), children);
      });

      hoistNonReactStatics_cjs(StyledComponent, Component);
      return StyledComponent;
    };

    return componentCreator;
  }

  function mergeOuterLocalTheme(outerTheme, localTheme) {
    if (typeof localTheme === 'function') {
      var mergedTheme = localTheme(outerTheme);

      return mergedTheme;
    }

    return _extends$5({}, outerTheme, {}, localTheme);
  }
  /**
   * This component takes a `theme` prop.
   * It makes the `theme` available down the React tree thanks to React context.
   * This component should preferably be used at **the root of your component tree**.
   */


  function ThemeProvider(props) {
    var children = props.children,
        localTheme = props.theme;
    var outerTheme = useTheme();

    var theme = react.useMemo(function () {
      var output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);

      if (output != null) {
        output[nested] = outerTheme !== null;
      }

      return output;
    }, [localTheme, outerTheme]);
    return react.createElement(ThemeContext.Provider, {
      value: theme
    }, children);
  }

  // It does not modify the component passed to it;
  // instead, it returns a new component, with a `classes` property.

  var withStyles = function withStyles(stylesOrCreator) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return function (Component) {
      var defaultTheme = options.defaultTheme,
          _options$withTheme = options.withTheme,
          withTheme = _options$withTheme === void 0 ? false : _options$withTheme,
          name = options.name,
          stylesOptions = _objectWithoutProperties$1(options, ["defaultTheme", "withTheme", "name"]);

      var classNamePrefix = name;

      var useStyles = makeStyles(stylesOrCreator, _extends$5({
        defaultTheme: defaultTheme,
        Component: Component,
        name: name || Component.displayName,
        classNamePrefix: classNamePrefix
      }, stylesOptions));
      var WithStyles = react.forwardRef(function WithStyles(props, ref) {
        var classesProp = props.classes,
            innerRef = props.innerRef,
            other = _objectWithoutProperties$1(props, ["classes", "innerRef"]);

        var classes = useStyles(props);
        var theme;
        var more = other;

        if (typeof name === 'string' || withTheme) {
          // name and withTheme are invariant in the outer scope
          // eslint-disable-next-line react-hooks/rules-of-hooks
          theme = useTheme() || defaultTheme;

          if (name) {
            more = getThemeProps({
              theme: theme,
              name: name,
              props: other
            });
          } // Provide the theme to the wrapped component.
          // So we don't have to use the `withTheme()` Higher-order Component.


          if (withTheme && !more.theme) {
            more.theme = theme;
          }
        }

        return react.createElement(Component, _extends$5({
          ref: innerRef || ref,
          classes: classes
        }, more));
      });
      // the actual props Component might receive due to merging with defaultProps.
      // So copying it here would give us the same result in the wrapper as well.

      WithStyles.defaultProps = Component.defaultProps;

      hoistNonReactStatics_cjs(WithStyles, Component);

      return WithStyles;
    };
  };

  /* eslint-disable no-use-before-define */

  /**
   * Returns a number whose value is limited to the given range.
   *
   * @param {number} value The value to be clamped
   * @param {number} min The lower boundary of the output range
   * @param {number} max The upper boundary of the output range
   * @returns {number} A number in the range [min, max]
   */
  function clamp(value) {
    var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    return Math.min(Math.max(min, value), max);
  }
  /**
   * Converts a color from CSS hex format to CSS rgb format.
   *
   * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
   * @returns {string} A CSS rgb color string
   */


  function hexToRgb(color) {
    color = color.substr(1);
    var re = new RegExp(".{1,".concat(color.length / 3, "}"), 'g');
    var colors = color.match(re);

    if (colors && colors[0].length === 1) {
      colors = colors.map(function (n) {
        return n + n;
      });
    }

    return colors ? "rgb(".concat(colors.map(function (n) {
      return parseInt(n, 16);
    }).join(', '), ")") : '';
  }
  /**
   * Converts a color from hsl format to rgb format.
   *
   * @param {string} color - HSL color values
   * @returns {string} rgb color values
   */

  function hslToRgb(color) {
    color = decomposeColor(color);
    var _color = color,
        values = _color.values;
    var h = values[0];
    var s = values[1] / 100;
    var l = values[2] / 100;
    var a = s * Math.min(l, 1 - l);

    var f = function f(n) {
      var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (n + h / 30) % 12;
      return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    };

    var type = 'rgb';
    var rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

    if (color.type === 'hsla') {
      type += 'a';
      rgb.push(values[3]);
    }

    return recomposeColor({
      type: type,
      values: rgb
    });
  }
  /**
   * Returns an object with the type and values of a color.
   *
   * Note: Does not support rgb % values.
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @returns {object} - A MUI color object: {type: string, values: number[]}
   */

  function decomposeColor(color) {
    // Idempotent
    if (color.type) {
      return color;
    }

    if (color.charAt(0) === '#') {
      return decomposeColor(hexToRgb(color));
    }

    var marker = color.indexOf('(');
    var type = color.substring(0, marker);

    if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
      throw new Error(["Material-UI: unsupported `".concat(color, "` color."), 'We support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().'].join('\n'));
    }

    var values = color.substring(marker + 1, color.length - 1).split(',');
    values = values.map(function (value) {
      return parseFloat(value);
    });
    return {
      type: type,
      values: values
    };
  }
  /**
   * Converts a color object with type and values to a string.
   *
   * @param {object} color - Decomposed color
   * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
   * @param {array} color.values - [n,n,n] or [n,n,n,n]
   * @returns {string} A CSS color string
   */

  function recomposeColor(color) {
    var type = color.type;
    var values = color.values;

    if (type.indexOf('rgb') !== -1) {
      // Only convert the first 3 values to int (i.e. not alpha)
      values = values.map(function (n, i) {
        return i < 3 ? parseInt(n, 10) : n;
      });
    } else if (type.indexOf('hsl') !== -1) {
      values[1] = "".concat(values[1], "%");
      values[2] = "".concat(values[2], "%");
    }

    return "".concat(type, "(").concat(values.join(', '), ")");
  }
  /**
   * Calculates the contrast ratio between two colors.
   *
   * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
   *
   * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @returns {number} A contrast ratio value in the range 0 - 21.
   */

  function getContrastRatio(foreground, background) {
    var lumA = getLuminance(foreground);
    var lumB = getLuminance(background);
    return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
  }
  /**
   * The relative brightness of any point in a color space,
   * normalized to 0 for darkest black and 1 for lightest white.
   *
   * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @returns {number} The relative brightness of the color in the range 0 - 1
   */

  function getLuminance(color) {
    color = decomposeColor(color);
    var rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
    rgb = rgb.map(function (val) {
      val /= 255; // normalized

      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    }); // Truncate at 3 digits

    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
  }
  /**
   * Set the absolute transparency of a color.
   * Any existing alpha values are overwritten.
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @param {number} value - value to set the alpha channel to in the range 0 -1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */

  function fade(color, value) {
    color = decomposeColor(color);
    value = clamp(value);

    if (color.type === 'rgb' || color.type === 'hsl') {
      color.type += 'a';
    }

    color.values[3] = value;
    return recomposeColor(color);
  }
  /**
   * Darkens a color.
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @param {number} coefficient - multiplier in the range 0 - 1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */

  function darken(color, coefficient) {
    color = decomposeColor(color);
    coefficient = clamp(coefficient);

    if (color.type.indexOf('hsl') !== -1) {
      color.values[2] *= 1 - coefficient;
    } else if (color.type.indexOf('rgb') !== -1) {
      for (var i = 0; i < 3; i += 1) {
        color.values[i] *= 1 - coefficient;
      }
    }

    return recomposeColor(color);
  }
  /**
   * Lightens a color.
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @param {number} coefficient - multiplier in the range 0 - 1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */

  function lighten(color, coefficient) {
    color = decomposeColor(color);
    coefficient = clamp(coefficient);

    if (color.type.indexOf('hsl') !== -1) {
      color.values[2] += (100 - color.values[2]) * coefficient;
    } else if (color.type.indexOf('rgb') !== -1) {
      for (var i = 0; i < 3; i += 1) {
        color.values[i] += (255 - color.values[i]) * coefficient;
      }
    }

    return recomposeColor(color);
  }

  function _defineProperty$1(obj, key, value) {
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

  function _objectWithoutPropertiesLoose$3(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties$2(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose$3(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _extends$6() {
    _extends$6 = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends$6.apply(this, arguments);
  }

  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  var keys = ['xs', 'sm', 'md', 'lg', 'xl']; // Keep in mind that @media is inclusive by the CSS specification.

  function createBreakpoints(breakpoints) {
    var _breakpoints$values = breakpoints.values,
        values = _breakpoints$values === void 0 ? {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    } : _breakpoints$values,
        _breakpoints$unit = breakpoints.unit,
        unit = _breakpoints$unit === void 0 ? 'px' : _breakpoints$unit,
        _breakpoints$step = breakpoints.step,
        step = _breakpoints$step === void 0 ? 5 : _breakpoints$step,
        other = _objectWithoutProperties$2(breakpoints, ["values", "unit", "step"]);

    function up(key) {
      var value = typeof values[key] === 'number' ? values[key] : key;
      return "@media (min-width:".concat(value).concat(unit, ")");
    }

    function down(key) {
      var endIndex = keys.indexOf(key) + 1;
      var upperbound = values[keys[endIndex]];

      if (endIndex === keys.length) {
        // xl down applies to all sizes
        return up('xs');
      }

      var value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
      return "@media (max-width:".concat(value - step / 100).concat(unit, ")");
    }

    function between(start, end) {
      var endIndex = keys.indexOf(end);

      if (endIndex === keys.length - 1) {
        return up(start);
      }

      return "@media (min-width:".concat(typeof values[start] === 'number' ? values[start] : start).concat(unit, ") and ") + "(max-width:".concat((endIndex !== -1 && typeof values[keys[endIndex + 1]] === 'number' ? values[keys[endIndex + 1]] : end) - step / 100).concat(unit, ")");
    }

    function only(key) {
      return between(key, key);
    }

    function width(key) {
      return values[key];
    }

    return _extends$6({
      keys: keys,
      values: values,
      up: up,
      down: down,
      between: between,
      only: only,
      width: width
    }, other);
  }

  function createMixins(breakpoints, spacing, mixins) {
    var _toolbar;

    return _extends$6({
      gutters: function gutters() {
        var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        // To deprecate in v4.1
        //       warning(
        //         false,
        //         [
        //           'Material-UI: theme.mixins.gutters() is deprecated.',
        //           'You can use the source of the mixin directly:',
        //           `
        // paddingLeft: theme.spacing(2),
        // paddingRight: theme.spacing(2),
        // [theme.breakpoints.up('sm')]: {
        //   paddingLeft: theme.spacing(3),
        //   paddingRight: theme.spacing(3),
        // },
        // `,
        //         ].join('\n'),
        //       );
        return _extends$6({
          paddingLeft: spacing(2),
          paddingRight: spacing(2)
        }, styles, _defineProperty$1({}, breakpoints.up('sm'), _extends$6({
          paddingLeft: spacing(3),
          paddingRight: spacing(3)
        }, styles[breakpoints.up('sm')])));
      },
      toolbar: (_toolbar = {
        minHeight: 56
      }, _defineProperty$1(_toolbar, "".concat(breakpoints.up('xs'), " and (orientation: landscape)"), {
        minHeight: 48
      }), _defineProperty$1(_toolbar, breakpoints.up('sm'), {
        minHeight: 64
      }), _toolbar)
    }, mixins);
  }

  var common = {
    black: '#000',
    white: '#fff'
  };

  var grey = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#d5d5d5',
    A200: '#aaaaaa',
    A400: '#303030',
    A700: '#616161'
  };

  var indigo = {
    50: '#e8eaf6',
    100: '#c5cae9',
    200: '#9fa8da',
    300: '#7986cb',
    400: '#5c6bc0',
    500: '#3f51b5',
    600: '#3949ab',
    700: '#303f9f',
    800: '#283593',
    900: '#1a237e',
    A100: '#8c9eff',
    A200: '#536dfe',
    A400: '#3d5afe',
    A700: '#304ffe'
  };

  var pink = {
    50: '#fce4ec',
    100: '#f8bbd0',
    200: '#f48fb1',
    300: '#f06292',
    400: '#ec407a',
    500: '#e91e63',
    600: '#d81b60',
    700: '#c2185b',
    800: '#ad1457',
    900: '#880e4f',
    A100: '#ff80ab',
    A200: '#ff4081',
    A400: '#f50057',
    A700: '#c51162'
  };

  var red = {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000'
  };

  var orange = {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
    A100: '#ffd180',
    A200: '#ffab40',
    A400: '#ff9100',
    A700: '#ff6d00'
  };

  var blue = {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    A100: '#82b1ff',
    A200: '#448aff',
    A400: '#2979ff',
    A700: '#2962ff'
  };

  var green = {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853'
  };

  var light = {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: 'rgba(0, 0, 0, 0.87)',
      // Secondary text.
      secondary: 'rgba(0, 0, 0, 0.54)',
      // Disabled text have even lower visual prominence.
      disabled: 'rgba(0, 0, 0, 0.38)',
      // Text hints.
      hint: 'rgba(0, 0, 0, 0.38)'
    },
    // The color used to divide different elements.
    divider: 'rgba(0, 0, 0, 0.12)',
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: common.white,
      default: grey[50]
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: 'rgba(0, 0, 0, 0.54)',
      // The color of an hovered action.
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: 'rgba(0, 0, 0, 0.26)',
      // The background color of a disabled action.
      disabledBackground: 'rgba(0, 0, 0, 0.12)'
    }
  };
  var dark = {
    text: {
      primary: common.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      hint: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)'
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: {
      paper: grey[800],
      default: '#303030'
    },
    action: {
      active: common.white,
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)'
    }
  };

  function addLightOrDark(intent, direction, shade, tonalOffset) {
    if (!intent[direction]) {
      if (intent.hasOwnProperty(shade)) {
        intent[direction] = intent[shade];
      } else if (direction === 'light') {
        intent.light = lighten(intent.main, tonalOffset);
      } else if (direction === 'dark') {
        intent.dark = darken(intent.main, tonalOffset * 1.5);
      }
    }
  }

  function createPalette(palette) {
    var _palette$primary = palette.primary,
        primary = _palette$primary === void 0 ? {
      light: indigo[300],
      main: indigo[500],
      dark: indigo[700]
    } : _palette$primary,
        _palette$secondary = palette.secondary,
        secondary = _palette$secondary === void 0 ? {
      light: pink.A200,
      main: pink.A400,
      dark: pink.A700
    } : _palette$secondary,
        _palette$error = palette.error,
        error = _palette$error === void 0 ? {
      light: red[300],
      main: red[500],
      dark: red[700]
    } : _palette$error,
        _palette$warning = palette.warning,
        warning = _palette$warning === void 0 ? {
      light: orange[300],
      main: orange[500],
      dark: orange[700]
    } : _palette$warning,
        _palette$info = palette.info,
        info = _palette$info === void 0 ? {
      light: blue[300],
      main: blue[500],
      dark: blue[700]
    } : _palette$info,
        _palette$success = palette.success,
        success = _palette$success === void 0 ? {
      light: green[300],
      main: green[500],
      dark: green[700]
    } : _palette$success,
        _palette$type = palette.type,
        type = _palette$type === void 0 ? 'light' : _palette$type,
        _palette$contrastThre = palette.contrastThreshold,
        contrastThreshold = _palette$contrastThre === void 0 ? 3 : _palette$contrastThre,
        _palette$tonalOffset = palette.tonalOffset,
        tonalOffset = _palette$tonalOffset === void 0 ? 0.2 : _palette$tonalOffset,
        other = _objectWithoutProperties$2(palette, ["primary", "secondary", "error", "warning", "info", "success", "type", "contrastThreshold", "tonalOffset"]); // Use the same logic as
    // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
    // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54


    function getContrastText(background) {
      if (!background) {
        throw new TypeError("Material-UI: missing background argument in getContrastText(".concat(background, ")."));
      }

      var contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

      return contrastText;
    }

    function augmentColor(color) {
      var mainShade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
      var lightShade = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
      var darkShade = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 700;
      color = _extends$6({}, color);

      if (!color.main && color[mainShade]) {
        color.main = color[mainShade];
      }

      addLightOrDark(color, 'light', lightShade, tonalOffset);
      addLightOrDark(color, 'dark', darkShade, tonalOffset);

      if (!color.contrastText) {
        color.contrastText = getContrastText(color.main);
      }

      return color;
    }

    var types = {
      dark: dark,
      light: light
    };

    var paletteOutput = deepmerge(_extends$6({
      // A collection of common colors.
      common: common,
      // The palette type, can be light or dark.
      type: type,
      // The colors used to represent primary interface elements for a user.
      primary: augmentColor(primary),
      // The colors used to represent secondary interface elements for a user.
      secondary: augmentColor(secondary, 'A400', 'A200', 'A700'),
      // The colors used to represent interface elements that the user should be made aware of.
      error: augmentColor(error),
      // The colors used to represent potentially dangerous actions or important messages.
      warning: augmentColor(warning),
      // The colors used to present information to the user that is neutral and not necessarily important.
      info: augmentColor(info),
      // The colors used to indicate the successful completion of an action that user triggered.
      success: augmentColor(success),
      // The grey colors.
      grey: grey,
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: contrastThreshold,
      // Takes a background color and returns the text color that maximizes the contrast.
      getContrastText: getContrastText,
      // Generate a rich color object.
      augmentColor: augmentColor,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: tonalOffset
    }, types[type]), other);
    return paletteOutput;
  }

  function round(value) {
    return Math.round(value * 1e5) / 1e5;
  }

  var caseAllCaps = {
    textTransform: 'uppercase'
  };
  var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
  /**
   * @see @link{https://material.io/design/typography/the-type-system.html}
   * @see @link{https://material.io/design/typography/understanding-typography.html}
   */

  function createTypography(palette, typography) {
    var _ref = typeof typography === 'function' ? typography(palette) : typography,
        _ref$fontFamily = _ref.fontFamily,
        fontFamily = _ref$fontFamily === void 0 ? defaultFontFamily : _ref$fontFamily,
        _ref$fontSize = _ref.fontSize,
        fontSize = _ref$fontSize === void 0 ? 14 : _ref$fontSize,
        _ref$fontWeightLight = _ref.fontWeightLight,
        fontWeightLight = _ref$fontWeightLight === void 0 ? 300 : _ref$fontWeightLight,
        _ref$fontWeightRegula = _ref.fontWeightRegular,
        fontWeightRegular = _ref$fontWeightRegula === void 0 ? 400 : _ref$fontWeightRegula,
        _ref$fontWeightMedium = _ref.fontWeightMedium,
        fontWeightMedium = _ref$fontWeightMedium === void 0 ? 500 : _ref$fontWeightMedium,
        _ref$fontWeightBold = _ref.fontWeightBold,
        fontWeightBold = _ref$fontWeightBold === void 0 ? 700 : _ref$fontWeightBold,
        _ref$htmlFontSize = _ref.htmlFontSize,
        htmlFontSize = _ref$htmlFontSize === void 0 ? 16 : _ref$htmlFontSize,
        allVariants = _ref.allVariants,
        pxToRem2 = _ref.pxToRem,
        other = _objectWithoutProperties$2(_ref, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"]);

    var coef = fontSize / 14;

    var pxToRem = pxToRem2 || function (size) {
      return "".concat(size / htmlFontSize * coef, "rem");
    };

    var buildVariant = function buildVariant(fontWeight, size, lineHeight, letterSpacing, casing) {
      return _extends$6({
        fontFamily: fontFamily,
        fontWeight: fontWeight,
        fontSize: pxToRem(size),
        // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
        lineHeight: lineHeight
      }, fontFamily === defaultFontFamily ? {
        letterSpacing: "".concat(round(letterSpacing / size), "em")
      } : {}, {}, casing, {}, allVariants);
    };

    var variants = {
      h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
      h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
      h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
      h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
      h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
      h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
      subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
      subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
      body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
      body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
      button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
      caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
      overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
    };
    return deepmerge(_extends$6({
      htmlFontSize: htmlFontSize,
      pxToRem: pxToRem,
      round: round,
      // TODO To remove in v5?
      fontFamily: fontFamily,
      fontSize: fontSize,
      fontWeightLight: fontWeightLight,
      fontWeightRegular: fontWeightRegular,
      fontWeightMedium: fontWeightMedium,
      fontWeightBold: fontWeightBold
    }, variants), other, {
      clone: false // No need to clone deep

    });
  }

  var shadowKeyUmbraOpacity = 0.2;
  var shadowKeyPenumbraOpacity = 0.14;
  var shadowAmbientShadowOpacity = 0.12;

  function createShadow() {
    return ["".concat(arguments.length <= 0 ? undefined : arguments[0], "px ").concat(arguments.length <= 1 ? undefined : arguments[1], "px ").concat(arguments.length <= 2 ? undefined : arguments[2], "px ").concat(arguments.length <= 3 ? undefined : arguments[3], "px rgba(0,0,0,").concat(shadowKeyUmbraOpacity, ")"), "".concat(arguments.length <= 4 ? undefined : arguments[4], "px ").concat(arguments.length <= 5 ? undefined : arguments[5], "px ").concat(arguments.length <= 6 ? undefined : arguments[6], "px ").concat(arguments.length <= 7 ? undefined : arguments[7], "px rgba(0,0,0,").concat(shadowKeyPenumbraOpacity, ")"), "".concat(arguments.length <= 8 ? undefined : arguments[8], "px ").concat(arguments.length <= 9 ? undefined : arguments[9], "px ").concat(arguments.length <= 10 ? undefined : arguments[10], "px ").concat(arguments.length <= 11 ? undefined : arguments[11], "px rgba(0,0,0,").concat(shadowAmbientShadowOpacity, ")")].join(',');
  } // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss


  var shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];

  var shape = {
    borderRadius: 4
  };

  function createSpacing() {
    var spacingInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;

    // Already transformed.
    if (spacingInput.mui) {
      return spacingInput;
    } // All components align to an 8dp square baseline grid for mobile, tablet, and desktop.
    // https://material.io/design/layout/understanding-layout.html#pixel-density


    var transform;

    if (typeof spacingInput === 'function') {
      transform = spacingInput;
    } else {

      transform = function transform(factor) {

        return spacingInput * factor;
      };
    }

    var spacing = function spacing() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (args.length === 0) {
        return transform(1);
      }

      if (args.length === 1) {
        return transform(args[0]);
      }

      return args.map(function (factor) {
        var output = transform(factor);
        return typeof output === 'number' ? "".concat(output, "px") : output;
      }).join(' ');
    }; // Backward compatibility, to remove in v5.


    Object.defineProperty(spacing, 'unit', {
      get: function get() {

        return spacingInput;
      }
    });
    spacing.mui = true;
    return spacing;
  }

  // Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
  // to learn the context in which each easing should be used.
  var easing = {
    // This is the most common easing curve.
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // Objects enter the screen at full velocity from off-screen and
    // slowly decelerate to a resting point.
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    // Objects leave the screen at full velocity. They do not decelerate when off-screen.
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    // The sharp curve is used by objects that may return to the screen at any time.
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
  }; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
  // to learn when use what timing

  var duration = {
    shortest: 150,
    shorter: 200,
    short: 250,
    // most basic recommended timing
    standard: 300,
    // this is to be used in complex animations
    complex: 375,
    // recommended when something is entering screen
    enteringScreen: 225,
    // recommended when something is leaving screen
    leavingScreen: 195
  };

  function formatMs(milliseconds) {
    return "".concat(Math.round(milliseconds), "ms");
  }
  /**
   * @param {string|Array} props
   * @param {object} param
   * @param {string} param.prop
   * @param {number} param.duration
   * @param {string} param.easing
   * @param {number} param.delay
   */


  var transitions = {
    easing: easing,
    duration: duration,
    create: function create() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['all'];
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _options$duration = options.duration,
          durationOption = _options$duration === void 0 ? duration.standard : _options$duration,
          _options$easing = options.easing,
          easingOption = _options$easing === void 0 ? easing.easeInOut : _options$easing,
          _options$delay = options.delay,
          delay = _options$delay === void 0 ? 0 : _options$delay,
          other = _objectWithoutProperties$2(options, ["duration", "easing", "delay"]);

      return (Array.isArray(props) ? props : [props]).map(function (animatedProp) {
        return "".concat(animatedProp, " ").concat(typeof durationOption === 'string' ? durationOption : formatMs(durationOption), " ").concat(easingOption, " ").concat(typeof delay === 'string' ? delay : formatMs(delay));
      }).join(',');
    },
    getAutoHeightDuration: function getAutoHeightDuration(height) {
      if (!height) {
        return 0;
      }

      var constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

      return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
    }
  };

  // We need to centralize the zIndex definitions as they work
  // like global values in the browser.
  var zIndex = {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  };

  function createMuiTheme() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _options$breakpoints = options.breakpoints,
        breakpointsInput = _options$breakpoints === void 0 ? {} : _options$breakpoints,
        _options$mixins = options.mixins,
        mixinsInput = _options$mixins === void 0 ? {} : _options$mixins,
        _options$palette = options.palette,
        paletteInput = _options$palette === void 0 ? {} : _options$palette,
        spacingInput = options.spacing,
        _options$typography = options.typography,
        typographyInput = _options$typography === void 0 ? {} : _options$typography,
        other = _objectWithoutProperties$2(options, ["breakpoints", "mixins", "palette", "spacing", "typography"]);

    var palette = createPalette(paletteInput);
    var breakpoints = createBreakpoints(breakpointsInput);
    var spacing = createSpacing(spacingInput);
    var muiTheme = deepmerge({
      breakpoints: breakpoints,
      direction: 'ltr',
      mixins: createMixins(breakpoints, spacing, mixinsInput),
      overrides: {},
      // Inject custom styles
      palette: palette,
      props: {},
      // Provide default props
      shadows: shadows,
      typography: createTypography(palette, typographyInput),
      spacing: spacing,
      shape: shape,
      transitions: transitions,
      zIndex: zIndex
    }, other);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    muiTheme = args.reduce(function (acc, argument) {
      return deepmerge(acc, argument);
    }, muiTheme);

    return muiTheme;
  }

  var defaultTheme = createMuiTheme();

  function makeStyles$1(stylesOrCreator) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return makeStyles(stylesOrCreator, _extends$6({
      defaultTheme: defaultTheme
    }, options));
  }

  var styled$1 = function styled$1(Component) {
    var componentCreator = styled(Component);
    return function (style, options) {
      return componentCreator(style, _extends$6({
        defaultTheme: defaultTheme
      }, options));
    };
  };

  function useTheme$1() {
    return useTheme() || defaultTheme;
  }

  function withStyles$1(stylesOrCreator, options) {
    return withStyles(stylesOrCreator, _extends$6({
      defaultTheme: defaultTheme
    }, options));
  }

  var base = {
    typography: {
      fontSize: 14,
      htmlFontSize: 16,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 600,
      fontFamily: ['"Source Sans Pro"', '"Segoe UI"', '"Helvetica Neue"', '-apple-system', 'Arial', 'sans-serif'].join(','),
      button: {
        textTransform: 'initial',
        fontWeight: 400
      }
    },
    shape: {
      borderRadius: 2
    },
    shadows: ['none', '0px 1px 2px 0px rgba(0,0,0,0.15)', '0px 1px 2px 0px rgba(0,0,0,0.15)', '0px 1px 2px 0px rgba(0,0,0,0.15)', '0px 1px 2px 0px rgba(0,0,0,0.15)', '0px 1px 2px 0px rgba(0,0,0,0.15)', '0px 1px 2px 0px rgba(0,0,0,0.15)', '0px 2px 4px 0px rgba(0,0,0,0.15)', '0px 2px 4px 0px rgba(0,0,0,0.15)', '0px 2px 4px 0px rgba(0,0,0,0.15)', '0px 2px 4px 0px rgba(0,0,0,0.15)', '0px 2px 4px 0px rgba(0,0,0,0.15)', '0px 2px 4px 0px rgba(0,0,0,0.15)', '0px 4px 10px 0px rgba(0,0,0,0.15)', '0px 4px 10px 0px rgba(0,0,0,0.15)', '0px 4px 10px 0px rgba(0,0,0,0.15)', '0px 4px 10px 0px rgba(0,0,0,0.15)', '0px 4px 10px 0px rgba(0,0,0,0.15)', '0px 4px 10px 0px rgba(0,0,0,0.15)', '0px 6px 20px 0px rgba(0,0,0,0.15)', '0px 6px 20px 0px rgba(0,0,0,0.15)', '0px 6px 20px 0px rgba(0,0,0,0.15)', '0px 6px 20px 0px rgba(0,0,0,0.15)', '0px 6px 20px 0px rgba(0,0,0,0.15)', '0px 6px 20px 0px rgba(0,0,0,0.15)'],
    props: {
      MuiButtonBase: {
        disableRipple: true,
        disableTouchRipple: true,
        focusRipple: false
      }
    }
  };

  var colors = {
    green: '#009845',
    greenPale: '#0AAF54',
    red: '#DC423F',
    redPale: '#F05551',
    blue: '#3F8AB3',
    bluePale: '#469DCD',
    // greyscale
    grey100: '#ffffff',
    grey98: '#FBFBFB',
    grey95: '#F2F2F2',
    grey90: '#E6E6E6',
    grey85: '#D9D9D9',
    grey55: '#8C8C8C',
    grey30: '#4D4D4D',
    grey25: '#404040',
    grey20: '#333333',
    grey15: '#262626',
    grey10: '#1A1A1A',
    grey5: '#0E0E0E',
    grey0: '#000000'
  };

  var light$1 = {
    type: 'light',
    palette: {
      primary: {
        main: colors.grey25,
        contrastText: colors.grey100
      },
      secondary: {
        light: '#0AAF54',
        main: '#009845',
        dark: '#006937'
      },
      text: {
        primary: colors.grey25,
        secondary: 'rgba(0, 0, 0, 0.55)',
        disabled: 'rgba(0, 0, 0, 0.3)'
      },
      action: {
        active: colors.grey25,
        // color for actionable things like icon buttons
        hover: 'rgba(0, 0, 0, 0.03)',
        // color for hoverable things like list items
        hoverOpacity: 0.08,
        // used to fade primary/secondary colors
        selected: 'rgba(0, 0, 0, 0.05)',
        // focused things like list items
        disabled: 'rgba(0, 0, 0, 0.3)',
        // usually text
        disabledBackground: 'rgba(0, 0, 0, 0.12)'
      },
      background: {
        paper: colors.grey100,
        default: colors.grey100,
        // -- custom properties --
        lightest: colors.grey100,
        lighter: colors.grey98,
        darker: colors.grey95,
        darkest: colors.grey90
      },
      // --- custom stuff ---
      custom: {
        focusBorder: colors.blue,
        focusOutline: 'rgba(70, 157, 205, 0.3)',
        inputBackground: 'rgba(255, 255, 255, 1)'
      },
      selected: {
        main: colors.green,
        alternative: '#E4E4E4',
        excluded: '#BEBEBE',
        mainContrastText: colors.grey100,
        alternativeContrastText: colors.grey25,
        excludedContrastText: colors.grey25
      },
      btn: {
        normal: 'rgba(255, 255, 255, 0.6)',
        hover: 'rgba(0, 0, 0, 0.03)',
        active: 'rgba(0, 0, 0, 0.1)',
        disabled: 'rgba(255, 255, 255, 0.6)',
        border: 'rgba(0, 0, 0, 0.15)',
        borderHover: 'rgba(0, 0, 0, 0.15)'
      }
    }
  };

  var dark$1 = {
    type: 'dark',
    palette: {
      primary: {
        main: colors.grey20,
        contrastText: colors.grey100
      },
      secondary: {
        light: '#0AAF54',
        main: '#009845',
        dark: '#006937'
      },
      text: {
        primary: colors.grey100,
        secondary: 'rgba(255, 255, 255, 0.6)',
        disabled: 'rgba(255, 255, 255, 0.3)'
      },
      action: {
        // active: 'rgba(0, 0, 0, 0.55)',
        active: colors.grey100,
        hover: 'rgba(255, 255, 255, 0.05)',
        hoverOpacity: 0.08,
        selected: 'rgba(0, 0, 0, 0.03)',
        disabled: 'rgba(255, 255, 255, 0.3)',
        disabledBackground: 'rgba(0, 0, 0, 0.12)'
      },
      divider: 'rgba(0,0,0,0.3)',
      background: {
        default: '#323232',
        paper: '#323232',
        // -- custom properties --
        lightest: colors.grey25,
        lighter: colors.grey20,
        darker: colors.grey15,
        darkest: colors.grey10
      },
      // -- custom --
      custom: {
        focusBorder: colors.blue,
        focusOutline: 'rgba(70, 157, 205, 0.3)',
        inputBackground: 'rgba(0, 0, 0, 0.2)'
      },
      selected: {
        main: colors.green,
        alternative: colors.grey20,
        excluded: colors.grey10,
        mainContrastText: colors.grey100,
        alternativeContrastText: colors.grey100,
        excludedContrastText: colors.grey100
      },
      btn: {
        normal: 'rgba(255, 255, 255, 0.15)',
        hover: 'rgba(255, 255, 255, 0.25)',
        active: 'rgba(0, 0, 0, 0.1)',
        disabled: 'rgba(255, 255, 255, 0.15)',
        border: 'rgba(0, 0, 0, 0.15)',
        borderHover: 'rgba(0, 0, 0, 0.30)'
      }
    }
  };

  var cache$2 = {};

  var overrides = function overrides(theme) {
    return {
      MuiTypography: {
        root: {
          color: theme.palette.text.primary
        }
      },
      MuiIconButton: {
        root: {
          padding: 7,
          borderRadius: 2,
          border: '1px solid transparent',
          // should ideally use $focusVisible, but that messes up focus in all other places where Iconbutton is used (Checkbox, Switch etc)
          '&:focus': {
            borderColor: theme.palette.custom.focusBorder,
            boxShadow: "0 0 0 2px ".concat(theme.palette.custom.focusOutline)
          }
        }
      },
      MuiOutlinedInput: {
        root: {
          backgroundColor: theme.palette.custom.inputBackground,
          '&:hover $notchedOutline': {
            borderColor: theme.palette.btn.border
          },
          '&$focused $notchedOutline': {
            borderColor: theme.palette.custom.focusBorder,
            borderWidth: 2
          }
        }
      },
      MuiButton: {
        outlined: {
          padding: '3px 11px',
          '&$focusVisible': {
            borderColor: theme.palette.custom.focusBorder,
            boxShadow: "0 0 0 2px ".concat(theme.palette.custom.focusOutline)
          }
        },
        contained: {
          color: theme.palette.text.primary,
          padding: '3px 11px',
          border: "1px solid ".concat(theme.palette.btn.border),
          backgroundColor: theme.palette.btn.normal,
          boxShadow: 'none',
          '&$focusVisible': {
            borderColor: theme.palette.custom.focusBorder,
            boxShadow: "0 0 0 2px ".concat(theme.palette.custom.focusOutline)
          },
          '&:hover': {
            backgroundColor: theme.palette.btn.hover,
            borderColor: theme.palette.btn.borderHover,
            boxShadow: 'none',
            '&$disabled': {
              backgroundColor: theme.palette.btn.disabled
            }
          },
          '&:active': {
            boxShadow: 'none',
            backgroundColor: theme.palette.btn.active
          },
          '&$disabled': {
            backgroundColor: theme.palette.btn.disabled
          }
        }
      },
      MuiExpansionPanelSummary: {
        content: {
          margin: '8px 0'
        }
      }
    };
  };

  function create$1(definition) {
    var def = light$1;
    var name = '';

    if (typeof definition === 'string') {
      name = definition;

      if (definition !== 'light' && definition !== 'dark') {
        console.warn("Invalid theme: '".concat(definition, "'"));
      } else if (definition === 'dark') {
        def = dark$1;
      }
    }

    var key = JSON.stringify(def);

    if (cache$2[key]) {
      return cache$2[key];
    }

    var withDefaults = {
      palette: _objectSpread2({
        type: def.type
      }, base.palette, {}, def.palette),
      typography: _objectSpread2({}, base.typography),
      shadows: base.shadows,
      props: _objectSpread2({}, base.props),
      shape: _objectSpread2({}, base.shape)
    };
    cache$2[key] = createMuiTheme(_objectSpread2({}, withDefaults, {
      overrides: overrides(withDefaults)
    }));
    cache$2[key].name = name;
    return cache$2[key];
  }

  var InstanceContext = react.createContext({
    language: null,
    theme: null,
    translator: null,
    constraints: {}
  });

  var createKeyStore = (function (initialState) {
    var applyMiddleware = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    var sharedState = initialState;
    var hookListeners = [];
    var store = {
      get: function get(key) {
        return sharedState[key];
      },
      set: function set(key, value) {
        if (typeof key === 'undefined' || _typeof(key) === 'object') {
          throw new Error("Invalid key: ".concat(JSON.stringify(key)));
        }

        sharedState[key] = value;
        applyMiddleware({
          type: 'SET',
          value: value
        });
        return value;
      },
      clear: function clear() {
        return Object.keys(sharedState).forEach(function (key) {
          sharedState[key] = null;
        });
      },
      dispatch: function dispatch(forceNewState) {
        hookListeners.forEach(function (listener) {
          return listener(forceNewState ? {} : sharedState);
        });
      }
    };

    var useKeyStore = function useKeyStore() {
      var _useState = react_1(sharedState),
          _useState2 = _slicedToArray(_useState, 2),
          setState = _useState2[1];

      react_2(function () {
        hookListeners.push(setState);
        return function () {
          var ix = hookListeners.indexOf(setState);
          hookListeners.splice(ix, 1);
        };
      }, [setState]);
      return [store];
    };

    return [useKeyStore, store];
  });

  var _createKeyStore = createKeyStore({}),
      _createKeyStore2 = _slicedToArray(_createKeyStore, 2),
      useRpcResultStore = _createKeyStore2[0],
      rpcResultStore = _createKeyStore2[1];

  var _createKeyStore3 = createKeyStore({}),
      _createKeyStore4 = _slicedToArray(_createKeyStore3, 2),
      useRpcRequestStore = _createKeyStore4[0],
      rpcRequestStore = _createKeyStore4[1];

  var _createKeyStore5 = createKeyStore({}),
      _createKeyStore6 = _slicedToArray(_createKeyStore5, 2),
      useRpcRequestSessionModelStore = _createKeyStore6[0],
      rpcRequestSessionModelStore = _createKeyStore6[1];

  var _createKeyStore7 = createKeyStore({}),
      _createKeyStore8 = _slicedToArray(_createKeyStore7, 2),
      useRpcRequestModelStore = _createKeyStore8[0],
      rpcRequestModelStore = _createKeyStore8[1];

  var _createKeyStore9 = createKeyStore({}),
      _createKeyStore10 = _slicedToArray(_createKeyStore9, 2),
      useModelChangedStore = _createKeyStore10[0],
      modelChangedStore = _createKeyStore10[1];

  var _createKeyStore11 = createKeyStore({}),
      _createKeyStore12 = _slicedToArray(_createKeyStore11, 2),
      modelInitializedStore = _createKeyStore12[1];

  var close = function close(model) {
    rpcResultStore.set(model.id, undefined);
    rpcRequestStore.set(model.id, undefined);
    rpcRequestSessionModelStore.set(model.id, undefined);
    rpcRequestModelStore.set(model.id, undefined);
    modelChangedStore.set(model.id, undefined);
    modelInitializedStore.set(model.id, undefined);
  };

  var modelStoreMiddleware = function modelStoreMiddleware(_ref) {
    var type = _ref.type,
        model = _ref.value;
    var initialized = modelInitializedStore.get(model.id);

    if (initialized) {
      return;
    }

    modelInitializedStore.set(model.id, {});

    var onChanged = function onChanged() {
      rpcRequestStore.set(model.id, undefined);
      modelChangedStore.set(model.id, {});
      modelChangedStore.dispatch(true); // Force new state to trigger hooks
    };

    switch (type) {
      case 'SET':
        model.on('changed', onChanged);
        model.once('closed', function () {
          model.removeListener('changed', onChanged);
          close(model);
        });
        break;
    }
  };

  var _createKeyStore13 = createKeyStore({}, modelStoreMiddleware),
      _createKeyStore14 = _slicedToArray(_createKeyStore13, 2),
      useModelStore = _createKeyStore14[0],
      modelStore = _createKeyStore14[1];

  var subscribe = function subscribe(model) {
    modelStoreMiddleware({
      type: 'SET',
      value: model
    });
  };

  var rpcReducer = function rpcReducer(state, action) {
    var rpcResultStore = action.rpcResultStore,
        key = action.key,
        method = action.method;
    var newState;

    switch (action.type) {
      case 'INVALID':
        {
          newState = _objectSpread2({}, state, {
            valid: false,
            invalid: true,
            validating: true,
            canCancel: true,
            canRetry: false,
            rpcRetry: false
          });
          break;
        }

      case 'VALID':
        {
          newState = {
            result: _objectSpread2({}, action.result),
            invalid: false,
            valid: true,
            validating: false,
            canCancel: false,
            canRetry: false,
            rpcRetry: false
          };
          break;
        }

      case 'CANCELLED':
        {
          newState = {
            invalid: true,
            valid: false,
            validating: false,
            canCancel: false,
            canRetry: true,
            rpcRetry: false
          };
          break;
        }

      default:
        throw new Error('Undefined action');
    }

    var sharedState = rpcResultStore.get(key);

    if (!sharedState) {
      sharedState = {};
    }

    sharedState[method] = newState;
    rpcResultStore.set(key, sharedState);
    return newState;
  };

  function useRpc(model, method) {
    var key = model ? "".concat(model.id) : null;

    var _useRpcResultStore = useRpcResultStore(),
        _useRpcResultStore2 = _slicedToArray(_useRpcResultStore, 1),
        rpcResultStore = _useRpcResultStore2[0];

    var _useReducer = react_5(rpcReducer, key ? rpcResultStore.get(key) : null),
        _useReducer2 = _slicedToArray(_useReducer, 2),
        state = _useReducer2[0],
        dispatch = _useReducer2[1];

    var _useModelChangedStore = useModelChangedStore(),
        _useModelChangedStore2 = _slicedToArray(_useModelChangedStore, 1),
        modelChangedStore = _useModelChangedStore2[0];

    var _useRpcRequestStore = useRpcRequestStore(),
        _useRpcRequestStore2 = _slicedToArray(_useRpcRequestStore, 1),
        rpcRequestStore = _useRpcRequestStore2[0];

    var rpcShared;

    if (key) {
      rpcShared = rpcRequestStore.get(key);

      if (!rpcShared) {
        rpcShared = {};
        rpcRequestStore.set(key, rpcShared);
      }
    }

    var call =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(skipRetry) {
        var cache, rpc, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                cache = rpcShared[method];

                if (!cache || cache && cache.rpcRetry) {
                  rpc = model[method]();
                  cache = {
                    rpc: rpc,
                    rpcRetry: false
                  };
                  rpcShared[method] = cache;
                  dispatch({
                    type: 'INVALID',
                    method: method,
                    key: key,
                    model: model,
                    rpcResultStore: rpcResultStore,
                    canCancel: true
                  });
                }

                _context.prev = 2;
                _context.next = 5;
                return cache.rpc;

              case 5:
                result = _context.sent;
                dispatch({
                  type: 'VALID',
                  result: result,
                  key: key,
                  method: method,
                  model: model,
                  rpcResultStore: rpcResultStore
                });
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);

                if (_context.t0.code === 15 && !skipRetry) {
                  // Request aborted. This will be called multiple times by hooks only retry once
                  if (!cache.rpcRetry) {
                    cache.rpcRetry = true;
                  }

                  call(true);
                }

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 9]]);
      }));

      return function call(_x) {
        return _ref.apply(this, arguments);
      };
    }();

    var longrunning = {
      cancel: function () {
        var _cancel = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          var global;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  global = model.session.getObjectApi({
                    handle: -1
                  });
                  _context2.next = 3;
                  return global.cancelRequest(rpcShared[method].rpc.requestId);

                case 3:
                  dispatch({
                    type: 'CANCELLED',
                    key: key,
                    method: method,
                    model: model,
                    rpcResultStore: rpcResultStore
                  });

                case 4:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        function cancel() {
          return _cancel.apply(this, arguments);
        }

        return cancel;
      }(),
      retry: function retry() {
        rpcShared[method].rpcRetry = true;
        call();
      }
    };
    react_2(function () {
      if (!model) return undefined;
      call();
      return undefined;
    }, [model, modelChangedStore.get(model && model.id), key, method]);
    return [// Result
    state && state.result, {
      validating: state && state.validating,
      canCancel: state && state.canCancel,
      canRetry: state && state.canRetry
    }, // Long running api e.g cancel retry
    longrunning];
  }

  function useLayout(model) {
    return useRpc(model, 'getLayout');
  }
  function useAppLayout(model) {
    return useRpc(model, 'getAppLayout');
  }

  function useSessionModel(definition, app) {
    var key = app ? "".concat(app.id, "/").concat(JSON.stringify(definition)) : null;

    var _useModelStore = useModelStore(),
        _useModelStore2 = _slicedToArray(_useModelStore, 1),
        modelStore = _useModelStore2[0];

    var _useRpcRequestSession = useRpcRequestSessionModelStore(),
        _useRpcRequestSession2 = _slicedToArray(_useRpcRequestSession, 1),
        rpcRequestSessionModelStore = _useRpcRequestSession2[0];

    var _useState = react_1(),
        _useState2 = _slicedToArray(_useState, 2),
        model = _useState2[0],
        setModel = _useState2[1];

    var rpcShared;

    if (key) {
      rpcShared = rpcRequestSessionModelStore.get(key);
    }

    for (var _len = arguments.length, deps = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      deps[_key - 2] = arguments[_key];
    }

    react_2(function () {
      if (!app) {
        return;
      } // Create new session object


      var create =
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var rpc, newModel;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!rpcShared) {
                    rpc = app.createSessionObject(definition);
                    rpcShared = rpc;
                    rpcRequestSessionModelStore.set(key, rpcShared);
                  }

                  _context.next = 3;
                  return rpcShared;

                case 3:
                  newModel = _context.sent;
                  modelStore.set(key, newModel);
                  setModel(newModel);

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function create() {
          return _ref.apply(this, arguments);
        };
      }();

      create();
    }, [app].concat(deps));
    return [model];
  }

  var definition = {
    qInfo: {
      qType: 'current-selections'
    },
    qSelectionObjectDef: {
      qStateName: '$'
    },
    alternateStates: []
  };
  function useCurrentSelectionsModel(app) {
    return useSessionModel(definition, app);
  }

  var patchAlternateState = function patchAlternateState(currentSelectionsModel, currentSelectionsLayout, appLayout) {
    var states = _toConsumableArray(appLayout.qStateNames || []).map(function (s) {
      return {
        stateName: s,
        // need this as reference in selection toolbar since qSelectionObject.qStateName is not in the layout
        qSelectionObjectDef: {
          qStateName: s
        }
      };
    });

    var existingStates = (currentSelectionsLayout && currentSelectionsLayout.alternateStates ? currentSelectionsLayout.alternateStates.map(function (s) {
      return s.stateName;
    }) : []).join('::');
    var newStates = (appLayout.qStateNames || []).map(function (s) {
      return s;
    }).join('::');

    if (existingStates !== newStates) {
      currentSelectionsModel.applyPatches([{
        qOp: 'replace',
        qPath: '/alternateStates',
        qValue: JSON.stringify(states)
      }], true);
    }
  };

  function useAppSelectionsNavigation(app) {
    var _useCurrentSelections = useCurrentSelectionsModel(app),
        _useCurrentSelections2 = _slicedToArray(_useCurrentSelections, 1),
        currentSelectionsModel = _useCurrentSelections2[0];

    var _useLayout = useLayout(currentSelectionsModel),
        _useLayout2 = _slicedToArray(_useLayout, 1),
        currentSelectionsLayout = _useLayout2[0];

    var _useAppLayout = useAppLayout(app),
        _useAppLayout2 = _slicedToArray(_useAppLayout, 1),
        appLayout = _useAppLayout2[0];

    var _useState = react_1(null),
        _useState2 = _slicedToArray(_useState, 2),
        navigationState = _useState2[0],
        setNavigationState = _useState2[1];

    react_2(function () {
      if (!appLayout || !currentSelectionsModel || !currentSelectionsLayout) return;
      patchAlternateState(currentSelectionsModel, currentSelectionsLayout, appLayout);
    }, [appLayout, currentSelectionsModel, currentSelectionsLayout]);
    react_2(function () {
      if (!currentSelectionsLayout) return;
      var canGoBack = false;
      var canGoForward = false;
      var canClear = false;
      [currentSelectionsLayout].concat(_toConsumableArray(currentSelectionsLayout.alternateStates || [])).forEach(function (state) {
        canGoBack = canGoBack || state.qSelectionObject && state.qSelectionObject.qBackCount > 0;
        canGoForward = canGoForward || state.qSelectionObject && state.qSelectionObject.qForwardCount > 0;
        canClear = canClear || (state.qSelectionObject && state.qSelectionObject.qSelections || []).filter(function (s) {
          return s.qLocked !== true;
        }).length > 0;
      });
      setNavigationState({
        canGoBack: canGoBack,
        canGoForward: canGoForward,
        canClear: canClear
      });
    }, [currentSelectionsLayout]);
    return [navigationState, currentSelectionsModel, currentSelectionsLayout];
  }

  var _createKeyStore$1 = createKeyStore({}),
      _createKeyStore2$1 = _slicedToArray(_createKeyStore$1, 2),
      useAppSelectionsStore = _createKeyStore2$1[0],
      appSelectionsStore = _createKeyStore2$1[1];

  var _createKeyStore3$1 = createKeyStore({}),
      _createKeyStore4$1 = _slicedToArray(_createKeyStore3$1, 2),
      useObjectSelectionsStore = _createKeyStore4$1[0],
      objectSelectionsStore = _createKeyStore4$1[1];

  var _createKeyStore$2 = createKeyStore({}),
      _createKeyStore2$2 = _slicedToArray(_createKeyStore$2, 2),
      useModalObjectStore = _createKeyStore2$2[0],
      modalObjectStore = _createKeyStore2$2[1];

  function createAppSelections(_ref) {
    var app = _ref.app,
        currentSelectionsLayout = _ref.currentSelectionsLayout,
        navState = _ref.navState;
    var key = "".concat(app.id);
    /**
     * @interface
     * @alias AppSelections
     */

    var appSelections = {
      model: app,
      switchModal: function switchModal(object, path) {
        var accept = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        if (object === modalObjectStore.get(key)) {
          return Promise.resolve();
        }

        var currentObject = modalObjectStore.get(key);

        if (currentObject) {
          currentObject.endSelections(accept);
          var objectSelections = objectSelectionsStore.get(currentObject.id);
          objectSelections.emit('deactivated');
        }

        if (object && typeof object !== 'undefined') {
          // TODO check model state
          modalObjectStore.set(key, object); // do not return the call to beginSelection to avoid waiting for it's response

          object.beginSelections(Array.isArray(path) ? path : [path]).catch(function (err) {
            if (err.code === 6003) {
              // If another object already is in modal -> abort and take over
              return appSelections.abortModal().then(function () {
                return object.beginSelections(Array.isArray(path) ? path : [path]);
              });
            }

            throw err;
          });
          return Promise.resolve();
        }

        modalObjectStore.set(key, undefined);
        return Promise.resolve();
      },
      isInModal: function isInModal() {
        return !!modalObjectStore.get(key);
      },
      isModal: function isModal(object) {
        // TODO check model state
        return object ? modalObjectStore.get(key) === object : !!modalObjectStore.get(key);
      },
      abortModal: function abortModal() {
        var accept = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        if (!modalObjectStore.get(key)) {
          return Promise.resolve();
        }

        modalObjectStore.set(key, undefined);
        return app.abortModal(accept);
      },
      canGoForward: function canGoForward() {
        return navState.canGoForward;
      },
      canGoBack: function canGoBack() {
        return navState.canGoBack;
      },
      canClear: function canClear() {
        return navState.canClear;
      },
      layout: function layout() {
        return currentSelectionsLayout;
      },
      forward: function forward() {
        return appSelections.switchModal().then(function () {
          return app.forward();
        });
      },
      back: function back() {
        return appSelections.switchModal().then(function () {
          return app.back();
        });
      },
      clear: function clear() {
        return appSelections.switchModal().then(function () {
          return app.clearAll();
        });
      },
      clearField: function clearField(field) {
        var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '$';
        return appSelections.switchModal().then(function () {
          return app.getField(field, state).then(function (f) {
            return f.clear();
          });
        });
      }
    };
    return appSelections;
  }

  function useAppSelections(app) {
    if (!app.session) {
      // assume the app is mocked if session is undefined
      return [];
    }

    var _useAppSelectionsNavi = useAppSelectionsNavigation(app),
        _useAppSelectionsNavi2 = _slicedToArray(_useAppSelectionsNavi, 3),
        navState = _useAppSelectionsNavi2[0],
        currentSelectionsModel = _useAppSelectionsNavi2[1],
        currentSelectionsLayout = _useAppSelectionsNavi2[2];

    var _useAppSelectionsStor = useAppSelectionsStore(),
        _useAppSelectionsStor2 = _slicedToArray(_useAppSelectionsStor, 1),
        appSelectionsStore = _useAppSelectionsStor2[0];

    var key = app ? app.id : null;
    var appSelections = appSelectionsStore.get(key);
    react_2(function () {
      if (!app || !currentSelectionsModel || !currentSelectionsLayout || !navState || appSelections) return;
      appSelections = createAppSelections({
        app: app,
        currentSelectionsLayout: currentSelectionsLayout,
        navState: navState
      });
      appSelectionsStore.set(key, appSelections);
    }, [app, currentSelectionsModel, currentSelectionsLayout, navState]);
    return [appSelections, navState];
  }

  var THEME_PREFIX = ("0.1.0-alpha.29" ).replace(/[.-]/g, '_');
  var counter = 0;
  var NebulaApp = react_7(function (_ref, ref) {
    var initialContext = _ref.initialContext,
        app = _ref.app;

    var _useAppSelections = useAppSelections(app),
        _useAppSelections2 = _slicedToArray(_useAppSelections, 1),
        appSelections = _useAppSelections2[0];

    var _useState = react_1(initialContext),
        _useState2 = _slicedToArray(_useState, 2),
        context = _useState2[0],
        setContext = _useState2[1];

    var _useState3 = react_1(),
        _useState4 = _slicedToArray(_useState3, 2),
        muiThemeName = _useState4[0],
        setMuiThemeName = _useState4[1];

    var _useMemo = react_10(function () {
      return {
        theme: create$1(muiThemeName),
        generator: createGenerateClassName({
          productionPrefix: "".concat(THEME_PREFIX, "-"),
          disableGlobal: true,
          seed: "nebulajs-".concat(counter++)
        })
      };
    }, [muiThemeName]),
        theme = _useMemo.theme,
        generator = _useMemo.generator;

    var _useState5 = react_1([]),
        _useState6 = _slicedToArray(_useState5, 2),
        components = _useState6[0],
        setComponents = _useState6[1];

    react_6(ref, function () {
      return {
        addComponent: function addComponent(component) {
          setComponents([].concat(_toConsumableArray(components), [component]));
        },
        removeComponent: function removeComponent(component) {
          var ix = components.indexOf(component);

          if (ix !== -1) {
            components.splice(ix, 1);
            setComponents(_toConsumableArray(components));
          }
        },
        setMuiThemeName: setMuiThemeName,
        setContext: setContext,
        getAppSelections: function getAppSelections() {
          return appSelections;
        }
      };
    });
    return react.createElement(StylesProvider, {
      generateClassName: generator
    }, react.createElement(ThemeProvider, {
      theme: theme
    }, react.createElement(InstanceContext.Provider, {
      value: context
    }, react.createElement(react.Fragment, null, components))));
  });
  function boot(_ref2) {
    var app = _ref2.app,
        context = _ref2.context;
    var resolveRender;
    var rendered = new Promise(function (resolve) {
      resolveRender = resolve;
    });
    var appRef = react.createRef();
    var element = document.createElement('div');
    element.style.display = 'none';
    element.setAttribute('data-nebulajs-version', "0.1.0-alpha.29" );
    element.setAttribute('data-app-id', app.id);
    document.body.appendChild(element);
    reactDom.render(react.createElement(NebulaApp, {
      ref: appRef,
      app: app,
      initialContext: context
    }), element, resolveRender);
    return [{
      add: function add(component) {
        _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return rendered;

                case 2:
                  appRef.current.addComponent(component);

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))();
      },
      remove: function remove(component) {
        _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return rendered;

                case 2:
                  appRef.current.removeComponent(component);

                case 3:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }))();
      },
      setMuiThemeName: function setMuiThemeName(themeName) {
        _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return rendered;

                case 2:
                  appRef.current.setMuiThemeName(themeName);

                case 3:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }))();
      },
      context: function context(ctx) {
        _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return rendered;

                case 2:
                  appRef.current.setContext(ctx);

                case 3:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }))();
      },
      getAppSelections: function () {
        var _getAppSelections = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return rendered;

                case 2:
                  return _context5.abrupt("return", appRef.current.getAppSelections());

                case 3:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        function getAppSelections() {
          return _getAppSelections.apply(this, arguments);
        }

        return getAppSelections;
      }()
    }, appRef, rendered];
  }

  // It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
  //
  // A strict capitalization should uppercase the first letter of each word a the sentence.
  // We only handle the first word.
  function capitalize(string) {

    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  var styles = function styles(theme) {
    var elevations = {};
    theme.shadows.forEach(function (shadow, index) {
      elevations["elevation".concat(index)] = {
        boxShadow: shadow
      };
    });
    return _extends$6({
      /* Styles applied to the root element. */
      root: {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        transition: theme.transitions.create('box-shadow')
      },

      /* Styles applied to the root element if `square={false}`. */
      rounded: {
        borderRadius: theme.shape.borderRadius
      },

      /* Styles applied to the root element if `variant="outlined"` */
      outlined: {
        border: "1px solid ".concat(theme.palette.divider)
      }
    }, elevations);
  };
  var Paper = react.forwardRef(function Paper(props, ref) {
    var classes = props.classes,
        className = props.className,
        _props$component = props.component,
        Component = _props$component === void 0 ? 'div' : _props$component,
        _props$square = props.square,
        square = _props$square === void 0 ? false : _props$square,
        _props$elevation = props.elevation,
        elevation = _props$elevation === void 0 ? 1 : _props$elevation,
        _props$variant = props.variant,
        variant = _props$variant === void 0 ? 'elevation' : _props$variant,
        other = _objectWithoutProperties$2(props, ["classes", "className", "component", "square", "elevation", "variant"]);

    return react.createElement(Component, _extends$6({
      className: clsx(classes.root, className, variant === 'outlined' ? classes.outlined : classes["elevation".concat(elevation)], !square && classes.rounded),
      ref: ref
    }, other));
  });
  var Paper$1 = withStyles$1(styles, {
    name: 'MuiPaper'
  })(Paper);

  function _extends$7() {
    _extends$7 = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends$7.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose$4(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _inheritsLoose$1(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  var ReactPropTypesSecret_1$1 = ReactPropTypesSecret$1;

  function emptyFunction$1() {}

  var factoryWithThrowingShims$1 = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret_1$1) {
        // It is still safe when called from React.
        return;
      }
      var err = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
        'Use PropTypes.checkPropTypes() to call them. ' +
        'Read more at http://fb.me/use-check-prop-types'
      );
      err.name = 'Invariant Violation';
      throw err;
    }  shim.isRequired = shim;
    function getShim() {
      return shim;
    }  // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,

      any: shim,
      arrayOf: getShim,
      element: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim
    };

    ReactPropTypes.checkPropTypes = emptyFunction$1;
    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  var propTypes$1 = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = factoryWithThrowingShims$1();
  }
  });

  var config = {
    disabled: false
  };

  var TransitionGroupContext = react.createContext(null);

  var UNMOUNTED = 'unmounted';
  var EXITED = 'exited';
  var ENTERING = 'entering';
  var ENTERED = 'entered';
  var EXITING = 'exiting';
  /**
   * The Transition component lets you describe a transition from one component
   * state to another _over time_ with a simple declarative API. Most commonly
   * it's used to animate the mounting and unmounting of a component, but can also
   * be used to describe in-place transition states as well.
   *
   * ---
   *
   * **Note**: `Transition` is a platform-agnostic base component. If you're using
   * transitions in CSS, you'll probably want to use
   * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
   * instead. It inherits all the features of `Transition`, but contains
   * additional features necessary to play nice with CSS transitions (hence the
   * name of the component).
   *
   * ---
   *
   * By default the `Transition` component does not alter the behavior of the
   * component it renders, it only tracks "enter" and "exit" states for the
   * components. It's up to you to give meaning and effect to those states. For
   * example we can add styles to a component when it enters or exits:
   *
   * ```jsx
   * import { Transition } from 'react-transition-group';
   *
   * const duration = 300;
   *
   * const defaultStyle = {
   *   transition: `opacity ${duration}ms ease-in-out`,
   *   opacity: 0,
   * }
   *
   * const transitionStyles = {
   *   entering: { opacity: 1 },
   *   entered:  { opacity: 1 },
   *   exiting:  { opacity: 0 },
   *   exited:  { opacity: 0 },
   * };
   *
   * const Fade = ({ in: inProp }) => (
   *   <Transition in={inProp} timeout={duration}>
   *     {state => (
   *       <div style={{
   *         ...defaultStyle,
   *         ...transitionStyles[state]
   *       }}>
   *         I'm a fade Transition!
   *       </div>
   *     )}
   *   </Transition>
   * );
   * ```
   *
   * There are 4 main states a Transition can be in:
   *  - `'entering'`
   *  - `'entered'`
   *  - `'exiting'`
   *  - `'exited'`
   *
   * Transition state is toggled via the `in` prop. When `true` the component
   * begins the "Enter" stage. During this stage, the component will shift from
   * its current transition state, to `'entering'` for the duration of the
   * transition and then to the `'entered'` stage once it's complete. Let's take
   * the following example (we'll use the
   * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
   *
   * ```jsx
   * function App() {
   *   const [inProp, setInProp] = useState(false);
   *   return (
   *     <div>
   *       <Transition in={inProp} timeout={500}>
   *         {state => (
   *           // ...
   *         )}
   *       </Transition>
   *       <button onClick={() => setInProp(true)}>
   *         Click to Enter
   *       </button>
   *     </div>
   *   );
   * }
   * ```
   *
   * When the button is clicked the component will shift to the `'entering'` state
   * and stay there for 500ms (the value of `timeout`) before it finally switches
   * to `'entered'`.
   *
   * When `in` is `false` the same thing happens except the state moves from
   * `'exiting'` to `'exited'`.
   */

  var Transition =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose$1(Transition, _React$Component);

    function Transition(props, context) {
      var _this;

      _this = _React$Component.call(this, props, context) || this;
      var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

      var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
      var initialStatus;
      _this.appearStatus = null;

      if (props.in) {
        if (appear) {
          initialStatus = EXITED;
          _this.appearStatus = ENTERING;
        } else {
          initialStatus = ENTERED;
        }
      } else {
        if (props.unmountOnExit || props.mountOnEnter) {
          initialStatus = UNMOUNTED;
        } else {
          initialStatus = EXITED;
        }
      }

      _this.state = {
        status: initialStatus
      };
      _this.nextCallback = null;
      return _this;
    }

    Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
      var nextIn = _ref.in;

      if (nextIn && prevState.status === UNMOUNTED) {
        return {
          status: EXITED
        };
      }

      return null;
    }; // getSnapshotBeforeUpdate(prevProps) {
    //   let nextStatus = null
    //   if (prevProps !== this.props) {
    //     const { status } = this.state
    //     if (this.props.in) {
    //       if (status !== ENTERING && status !== ENTERED) {
    //         nextStatus = ENTERING
    //       }
    //     } else {
    //       if (status === ENTERING || status === ENTERED) {
    //         nextStatus = EXITING
    //       }
    //     }
    //   }
    //   return { nextStatus }
    // }


    var _proto = Transition.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this.updateStatus(true, this.appearStatus);
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      var nextStatus = null;

      if (prevProps !== this.props) {
        var status = this.state.status;

        if (this.props.in) {
          if (status !== ENTERING && status !== ENTERED) {
            nextStatus = ENTERING;
          }
        } else {
          if (status === ENTERING || status === ENTERED) {
            nextStatus = EXITING;
          }
        }
      }

      this.updateStatus(false, nextStatus);
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.cancelNextCallback();
    };

    _proto.getTimeouts = function getTimeouts() {
      var timeout = this.props.timeout;
      var exit, enter, appear;
      exit = enter = appear = timeout;

      if (timeout != null && typeof timeout !== 'number') {
        exit = timeout.exit;
        enter = timeout.enter; // TODO: remove fallback for next major

        appear = timeout.appear !== undefined ? timeout.appear : enter;
      }

      return {
        exit: exit,
        enter: enter,
        appear: appear
      };
    };

    _proto.updateStatus = function updateStatus(mounting, nextStatus) {
      if (mounting === void 0) {
        mounting = false;
      }

      if (nextStatus !== null) {
        // nextStatus will always be ENTERING or EXITING.
        this.cancelNextCallback();
        var node = reactDom.findDOMNode(this);

        if (nextStatus === ENTERING) {
          this.performEnter(node, mounting);
        } else {
          this.performExit(node);
        }
      } else if (this.props.unmountOnExit && this.state.status === EXITED) {
        this.setState({
          status: UNMOUNTED
        });
      }
    };

    _proto.performEnter = function performEnter(node, mounting) {
      var _this2 = this;

      var enter = this.props.enter;
      var appearing = this.context ? this.context.isMounting : mounting;
      var timeouts = this.getTimeouts();
      var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
      // if we are mounting and running this it means appear _must_ be set

      if (!mounting && !enter || config.disabled) {
        this.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node);
        });
        return;
      }

      this.props.onEnter(node, appearing);
      this.safeSetState({
        status: ENTERING
      }, function () {
        _this2.props.onEntering(node, appearing);

        _this2.onTransitionEnd(node, enterTimeout, function () {
          _this2.safeSetState({
            status: ENTERED
          }, function () {
            _this2.props.onEntered(node, appearing);
          });
        });
      });
    };

    _proto.performExit = function performExit(node) {
      var _this3 = this;

      var exit = this.props.exit;
      var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

      if (!exit || config.disabled) {
        this.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
        return;
      }

      this.props.onExit(node);
      this.safeSetState({
        status: EXITING
      }, function () {
        _this3.props.onExiting(node);

        _this3.onTransitionEnd(node, timeouts.exit, function () {
          _this3.safeSetState({
            status: EXITED
          }, function () {
            _this3.props.onExited(node);
          });
        });
      });
    };

    _proto.cancelNextCallback = function cancelNextCallback() {
      if (this.nextCallback !== null) {
        this.nextCallback.cancel();
        this.nextCallback = null;
      }
    };

    _proto.safeSetState = function safeSetState(nextState, callback) {
      // This shouldn't be necessary, but there are weird race conditions with
      // setState callbacks and unmounting in testing, so always make sure that
      // we can cancel any pending setState callbacks after we unmount.
      callback = this.setNextCallback(callback);
      this.setState(nextState, callback);
    };

    _proto.setNextCallback = function setNextCallback(callback) {
      var _this4 = this;

      var active = true;

      this.nextCallback = function (event) {
        if (active) {
          active = false;
          _this4.nextCallback = null;
          callback(event);
        }
      };

      this.nextCallback.cancel = function () {
        active = false;
      };

      return this.nextCallback;
    };

    _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
      this.setNextCallback(handler);
      var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

      if (!node || doesNotHaveTimeoutOrListener) {
        setTimeout(this.nextCallback, 0);
        return;
      }

      if (this.props.addEndListener) {
        this.props.addEndListener(node, this.nextCallback);
      }

      if (timeout != null) {
        setTimeout(this.nextCallback, timeout);
      }
    };

    _proto.render = function render() {
      var status = this.state.status;

      if (status === UNMOUNTED) {
        return null;
      }

      var _this$props = this.props,
          children = _this$props.children,
          childProps = _objectWithoutPropertiesLoose$4(_this$props, ["children"]); // filter props for Transtition


      delete childProps.in;
      delete childProps.mountOnEnter;
      delete childProps.unmountOnExit;
      delete childProps.appear;
      delete childProps.enter;
      delete childProps.exit;
      delete childProps.timeout;
      delete childProps.addEndListener;
      delete childProps.onEnter;
      delete childProps.onEntering;
      delete childProps.onEntered;
      delete childProps.onExit;
      delete childProps.onExiting;
      delete childProps.onExited;

      if (typeof children === 'function') {
        // allows for nested Transitions
        return react.createElement(TransitionGroupContext.Provider, {
          value: null
        }, children(status, childProps));
      }

      var child = react.Children.only(children);
      return (// allows for nested Transitions
        react.createElement(TransitionGroupContext.Provider, {
          value: null
        }, react.cloneElement(child, childProps))
      );
    };

    return Transition;
  }(react.Component);

  Transition.contextType = TransitionGroupContext;
  Transition.propTypes =  {};

  function noop() {}

  Transition.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: noop,
    onEntering: noop,
    onEntered: noop,
    onExit: noop,
    onExiting: noop,
    onExited: noop
  };
  Transition.UNMOUNTED = 0;
  Transition.EXITED = 1;
  Transition.ENTERING = 2;
  Transition.ENTERED = 3;
  Transition.EXITING = 4;

  function _assertThisInitialized$1(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  /**
   * Given `this.props.children`, return an object mapping key to child.
   *
   * @param {*} children `this.props.children`
   * @return {object} Mapping of key to child
   */

  function getChildMapping(children, mapFn) {
    var mapper = function mapper(child) {
      return mapFn && react_13(child) ? mapFn(child) : child;
    };

    var result = Object.create(null);
    if (children) react_14.map(children, function (c) {
      return c;
    }).forEach(function (child) {
      // run the map function here instead so that the key is the computed one
      result[child.key] = mapper(child);
    });
    return result;
  }
  /**
   * When you're adding or removing children some may be added or removed in the
   * same render pass. We want to show *both* since we want to simultaneously
   * animate elements in and out. This function takes a previous set of keys
   * and a new set of keys and merges them with its best guess of the correct
   * ordering. In the future we may expose some of the utilities in
   * ReactMultiChild to make this easy, but for now React itself does not
   * directly have this concept of the union of prevChildren and nextChildren
   * so we implement it here.
   *
   * @param {object} prev prev children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @param {object} next next children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @return {object} a key set that contains all keys in `prev` and all keys
   * in `next` in a reasonable order.
   */

  function mergeChildMappings(prev, next) {
    prev = prev || {};
    next = next || {};

    function getValueForKey(key) {
      return key in next ? next[key] : prev[key];
    } // For each key of `next`, the list of keys to insert before that key in
    // the combined list


    var nextKeysPending = Object.create(null);
    var pendingKeys = [];

    for (var prevKey in prev) {
      if (prevKey in next) {
        if (pendingKeys.length) {
          nextKeysPending[prevKey] = pendingKeys;
          pendingKeys = [];
        }
      } else {
        pendingKeys.push(prevKey);
      }
    }

    var i;
    var childMapping = {};

    for (var nextKey in next) {
      if (nextKeysPending[nextKey]) {
        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
          var pendingNextKey = nextKeysPending[nextKey][i];
          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
        }
      }

      childMapping[nextKey] = getValueForKey(nextKey);
    } // Finally, add the keys which didn't appear before any key in `next`


    for (i = 0; i < pendingKeys.length; i++) {
      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }

    return childMapping;
  }

  function getProp(child, prop, props) {
    return props[prop] != null ? props[prop] : child.props[prop];
  }

  function getInitialChildMapping(props, onExited) {
    return getChildMapping(props.children, function (child) {
      return react_15(child, {
        onExited: onExited.bind(null, child),
        in: true,
        appear: getProp(child, 'appear', props),
        enter: getProp(child, 'enter', props),
        exit: getProp(child, 'exit', props)
      });
    });
  }
  function getNextChildMapping(nextProps, prevChildMapping, onExited) {
    var nextChildMapping = getChildMapping(nextProps.children);
    var children = mergeChildMappings(prevChildMapping, nextChildMapping);
    Object.keys(children).forEach(function (key) {
      var child = children[key];
      if (!react_13(child)) return;
      var hasPrev = key in prevChildMapping;
      var hasNext = key in nextChildMapping;
      var prevChild = prevChildMapping[key];
      var isLeaving = react_13(prevChild) && !prevChild.props.in; // item is new (entering)

      if (hasNext && (!hasPrev || isLeaving)) {
        // console.log('entering', key)
        children[key] = react_15(child, {
          onExited: onExited.bind(null, child),
          in: true,
          exit: getProp(child, 'exit', nextProps),
          enter: getProp(child, 'enter', nextProps)
        });
      } else if (!hasNext && hasPrev && !isLeaving) {
        // item is old (exiting)
        // console.log('leaving', key)
        children[key] = react_15(child, {
          in: false
        });
      } else if (hasNext && hasPrev && react_13(prevChild)) {
        // item hasn't changed transition states
        // copy over the last transition props;
        // console.log('unchanged', key)
        children[key] = react_15(child, {
          onExited: onExited.bind(null, child),
          in: prevChild.props.in,
          exit: getProp(child, 'exit', nextProps),
          enter: getProp(child, 'enter', nextProps)
        });
      }
    });
    return children;
  }

  var values = Object.values || function (obj) {
    return Object.keys(obj).map(function (k) {
      return obj[k];
    });
  };

  var defaultProps = {
    component: 'div',
    childFactory: function childFactory(child) {
      return child;
    }
    /**
     * The `<TransitionGroup>` component manages a set of transition components
     * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
     * components, `<TransitionGroup>` is a state machine for managing the mounting
     * and unmounting of components over time.
     *
     * Consider the example below. As items are removed or added to the TodoList the
     * `in` prop is toggled automatically by the `<TransitionGroup>`.
     *
     * Note that `<TransitionGroup>`  does not define any animation behavior!
     * Exactly _how_ a list item animates is up to the individual transition
     * component. This means you can mix and match animations across different list
     * items.
     */

  };

  var TransitionGroup =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose$1(TransitionGroup, _React$Component);

    function TransitionGroup(props, context) {
      var _this;

      _this = _React$Component.call(this, props, context) || this;

      var handleExited = _this.handleExited.bind(_assertThisInitialized$1(_assertThisInitialized$1(_this))); // Initial children should all be entering, dependent on appear


      _this.state = {
        contextValue: {
          isMounting: true
        },
        handleExited: handleExited,
        firstRender: true
      };
      return _this;
    }

    var _proto = TransitionGroup.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this.mounted = true;
      this.setState({
        contextValue: {
          isMounting: false
        }
      });
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.mounted = false;
    };

    TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
      var prevChildMapping = _ref.children,
          handleExited = _ref.handleExited,
          firstRender = _ref.firstRender;
      return {
        children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
        firstRender: false
      };
    };

    _proto.handleExited = function handleExited(child, node) {
      var currentChildMapping = getChildMapping(this.props.children);
      if (child.key in currentChildMapping) return;

      if (child.props.onExited) {
        child.props.onExited(node);
      }

      if (this.mounted) {
        this.setState(function (state) {
          var children = _extends$7({}, state.children);

          delete children[child.key];
          return {
            children: children
          };
        });
      }
    };

    _proto.render = function render() {
      var _this$props = this.props,
          Component = _this$props.component,
          childFactory = _this$props.childFactory,
          props = _objectWithoutPropertiesLoose$4(_this$props, ["component", "childFactory"]);

      var contextValue = this.state.contextValue;
      var children = values(this.state.children).map(childFactory);
      delete props.appear;
      delete props.enter;
      delete props.exit;

      if (Component === null) {
        return react.createElement(TransitionGroupContext.Provider, {
          value: contextValue
        }, children);
      }

      return react.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, react.createElement(Component, props, children));
    };

    return TransitionGroup;
  }(react.Component);

  TransitionGroup.propTypes =  {};
  TransitionGroup.defaultProps = defaultProps;

  var reflow = function reflow(node) {
    return node.scrollTop;
  };
  function getTransitionProps(props, options) {
    var timeout = props.timeout,
        _props$style = props.style,
        style = _props$style === void 0 ? {} : _props$style;
    return {
      duration: style.transitionDuration || typeof timeout === 'number' ? timeout : timeout[options.mode] || 0,
      delay: style.transitionDelay
    };
  }

  // TODO: Make it private only in v5
  function setRef(ref, value) {
    if (typeof ref === 'function') {
      ref(value);
    } else if (ref) {
      ref.current = value;
    }
  }

  function useForkRef(refA, refB) {
    /**
     * This will create a new function if the ref props change and are defined.
     * This means react will call the old forkRef with `null` and the new forkRef
     * with the ref. Cleanup naturally emerges from this behavior
     */
    return react.useMemo(function () {
      if (refA == null && refB == null) {
        return null;
      }

      return function (refValue) {
        setRef(refA, refValue);
        setRef(refB, refValue);
      };
    }, [refA, refB]);
  }

  var RADIUS_STANDARD = 10;
  var RADIUS_DOT = 4;
  var styles$1 = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        position: 'relative',
        display: 'inline-flex',
        // For correct alignment with the text.
        verticalAlign: 'middle',
        flexShrink: 0
      },

      /* Styles applied to the badge `span` element. */
      badge: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        boxSizing: 'border-box',
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.fontWeightMedium,
        fontSize: theme.typography.pxToRem(12),
        minWidth: RADIUS_STANDARD * 2,
        lineHeight: 1,
        padding: '0 6px',
        height: RADIUS_STANDARD * 2,
        borderRadius: RADIUS_STANDARD,
        zIndex: 1,
        // Render the badge on top of potential ripples.
        transition: theme.transitions.create('transform', {
          easing: theme.transitions.easing.easeInOut,
          duration: theme.transitions.duration.enteringScreen
        })
      },

      /* Styles applied to the root element if `color="primary"`. */
      colorPrimary: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
      },

      /* Styles applied to the root element if `color="secondary"`. */
      colorSecondary: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText
      },

      /* Styles applied to the root element if `color="error"`. */
      colorError: {
        backgroundColor: theme.palette.error.main,
        color: theme.palette.error.contrastText
      },

      /* Styles applied to the root element if `variant="dot"`. */
      dot: {
        borderRadius: RADIUS_DOT,
        height: RADIUS_DOT * 2,
        minWidth: RADIUS_DOT * 2,
        padding: 0
      },

      /* Styles applied to the root element if `anchorOrigin={{ 'top', 'right' }} overlap="rectangle"`. */
      anchorOriginTopRightRectangle: {
        top: 0,
        right: 0,
        transform: 'scale(1) translate(50%, -50%)',
        transformOrigin: '100% 0%',
        '&$invisible': {
          transform: 'scale(0) translate(50%, -50%)'
        }
      },

      /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'right' }} overlap="rectangle"`. */
      anchorOriginBottomRightRectangle: {
        bottom: 0,
        right: 0,
        transform: 'scale(1) translate(50%, 50%)',
        transformOrigin: '100% 100%',
        '&$invisible': {
          transform: 'scale(0) translate(50%, 50%)'
        }
      },

      /* Styles applied to the root element if `anchorOrigin={{ 'top', 'left' }} overlap="rectangle"`. */
      anchorOriginTopLeftRectangle: {
        top: 0,
        left: 0,
        transform: 'scale(1) translate(-50%, -50%)',
        transformOrigin: '0% 0%',
        '&$invisible': {
          transform: 'scale(0) translate(-50%, -50%)'
        }
      },

      /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'left' }} overlap="rectangle"`. */
      anchorOriginBottomLeftRectangle: {
        bottom: 0,
        left: 0,
        transform: 'scale(1) translate(-50%, 50%)',
        transformOrigin: '0% 100%',
        '&$invisible': {
          transform: 'scale(0) translate(-50%, 50%)'
        }
      },

      /* Styles applied to the root element if `anchorOrigin={{ 'top', 'right' }} overlap="circle"`. */
      anchorOriginTopRightCircle: {
        top: '14%',
        right: '14%',
        transform: 'scale(1) translate(50%, -50%)',
        transformOrigin: '100% 0%',
        '&$invisible': {
          transform: 'scale(0) translate(50%, -50%)'
        }
      },

      /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'right' }} overlap="circle"`. */
      anchorOriginBottomRightCircle: {
        bottom: '14%',
        right: '14%',
        transform: 'scale(1) translate(50%, 50%)',
        transformOrigin: '100% 100%',
        '&$invisible': {
          transform: 'scale(0) translate(50%, 50%)'
        }
      },

      /* Styles applied to the root element if `anchorOrigin={{ 'top', 'left' }} overlap="circle"`. */
      anchorOriginTopLeftCircle: {
        top: '14%',
        left: '14%',
        transform: 'scale(1) translate(-50%, -50%)',
        transformOrigin: '0% 0%',
        '&$invisible': {
          transform: 'scale(0) translate(-50%, -50%)'
        }
      },

      /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'left' }} overlap="circle"`. */
      anchorOriginBottomLeftCircle: {
        bottom: '14%',
        left: '14%',
        transform: 'scale(1) translate(-50%, 50%)',
        transformOrigin: '0% 100%',
        '&$invisible': {
          transform: 'scale(0) translate(-50%, 50%)'
        }
      },

      /* Pseudo-class to the badge `span` element if `invisible={true}`. */
      invisible: {
        transition: theme.transitions.create('transform', {
          easing: theme.transitions.easing.easeInOut,
          duration: theme.transitions.duration.leavingScreen
        })
      }
    };
  };
  var Badge = react.forwardRef(function Badge(props, ref) {
    var _props$anchorOrigin = props.anchorOrigin,
        anchorOrigin = _props$anchorOrigin === void 0 ? {
      vertical: 'top',
      horizontal: 'right'
    } : _props$anchorOrigin,
        badgeContent = props.badgeContent,
        children = props.children,
        classes = props.classes,
        className = props.className,
        _props$color = props.color,
        color = _props$color === void 0 ? 'default' : _props$color,
        _props$component = props.component,
        ComponentProp = _props$component === void 0 ? 'span' : _props$component,
        invisibleProp = props.invisible,
        _props$max = props.max,
        max = _props$max === void 0 ? 99 : _props$max,
        _props$overlap = props.overlap,
        overlap = _props$overlap === void 0 ? 'rectangle' : _props$overlap,
        _props$showZero = props.showZero,
        showZero = _props$showZero === void 0 ? false : _props$showZero,
        _props$variant = props.variant,
        variant = _props$variant === void 0 ? 'standard' : _props$variant,
        other = _objectWithoutProperties$2(props, ["anchorOrigin", "badgeContent", "children", "classes", "className", "color", "component", "invisible", "max", "overlap", "showZero", "variant"]);

    var invisible = invisibleProp;

    if (invisibleProp == null && (badgeContent === 0 && !showZero || badgeContent == null && variant !== 'dot')) {
      invisible = true;
    }

    var displayValue = '';

    if (variant !== 'dot') {
      displayValue = badgeContent > max ? "".concat(max, "+") : badgeContent;
    }

    return react.createElement(ComponentProp, _extends$6({
      className: clsx(classes.root, className),
      ref: ref
    }, other), children, react.createElement("span", {
      className: clsx(classes.badge, classes["".concat(anchorOrigin.horizontal).concat(capitalize(anchorOrigin.vertical), "}")], classes["anchorOrigin".concat(capitalize(anchorOrigin.vertical)).concat(capitalize(anchorOrigin.horizontal)).concat(capitalize(overlap))], color !== 'default' && classes["color".concat(capitalize(color))], invisible && classes.invisible, {
        dot: classes.dot
      }[variant])
    }, displayValue));
  });
  var Badge$1 = withStyles$1(styles$1, {
    name: 'MuiBadge'
  })(Badge);

  var useEnhancedEffect = typeof window !== 'undefined' ? react.useLayoutEffect : react.useEffect;
  /**
   * https://github.com/facebook/react/issues/14099#issuecomment-440013892
   *
   * @param {function} fn
   */

  function useEventCallback(fn) {
    var ref = react.useRef(fn);
    useEnhancedEffect(function () {
      ref.current = fn;
    });
    return react.useCallback(function () {
      return (ref.current).apply(void 0, arguments);
    }, []);
  }

  var useEnhancedEffect$1 = typeof window !== 'undefined' && "production" !== 'test' ? react.useLayoutEffect : react.useEffect;
  /**
   * NoSsr purposely removes components from the subject of Server Side Rendering (SSR).
   *
   * This component can be useful in a variety of situations:
   * - Escape hatch for broken dependencies not supporting SSR.
   * - Improve the time-to-first paint on the client by only rendering above the fold.
   * - Reduce the rendering time on the server.
   * - Under too heavy server load, you can turn on service degradation.
   */

  function NoSsr(props) {
    var children = props.children,
        _props$defer = props.defer,
        defer = _props$defer === void 0 ? false : _props$defer,
        _props$fallback = props.fallback,
        fallback = _props$fallback === void 0 ? null : _props$fallback;

    var _React$useState = react.useState(false),
        mountedState = _React$useState[0],
        setMountedState = _React$useState[1];

    useEnhancedEffect$1(function () {
      if (!defer) {
        setMountedState(true);
      }
    }, [defer]);
    react.useEffect(function () {
      if (defer) {
        setMountedState(true);
      }
    }, [defer]); // We need the Fragment here to force react-docgen to recognise NoSsr as a component.

    return react.createElement(react.Fragment, null, mountedState ? children : fallback);
  }

  // based on https://github.com/WICG/focus-visible/blob/v4.1.5/src/focus-visible.js
  var hadKeyboardEvent = true;
  var hadFocusVisibleRecently = false;
  var hadFocusVisibleRecentlyTimeout = null;
  var inputTypesWhitelist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
  };
  /**
   * Computes whether the given element should automatically trigger the
   * `focus-visible` class being added, i.e. whether it should always match
   * `:focus-visible` when focused.
   * @param {Element} node
   * @return {boolean}
   */

  function focusTriggersKeyboardModality(node) {
    var type = node.type,
        tagName = node.tagName;

    if (tagName === 'INPUT' && inputTypesWhitelist[type] && !node.readOnly) {
      return true;
    }

    if (tagName === 'TEXTAREA' && !node.readOnly) {
      return true;
    }

    if (node.isContentEditable) {
      return true;
    }

    return false;
  }
  /**
   * Keep track of our keyboard modality state with `hadKeyboardEvent`.
   * If the most recent user interaction was via the keyboard;
   * and the key press did not include a meta, alt/option, or control key;
   * then the modality is keyboard. Otherwise, the modality is not keyboard.
   * @param {KeyboardEvent} event
   */


  function handleKeyDown(event) {
    if (event.metaKey || event.altKey || event.ctrlKey) {
      return;
    }

    hadKeyboardEvent = true;
  }
  /**
   * If at any point a user clicks with a pointing device, ensure that we change
   * the modality away from keyboard.
   * This avoids the situation where a user presses a key on an already focused
   * element, and then clicks on a different element, focusing it with a
   * pointing device, while we still think we're in keyboard modality.
   */


  function handlePointerDown() {
    hadKeyboardEvent = false;
  }

  function handleVisibilityChange() {
    if (this.visibilityState === 'hidden') {
      // If the tab becomes active again, the browser will handle calling focus
      // on the element (Safari actually calls it twice).
      // If this tab change caused a blur on an element with focus-visible,
      // re-apply the class when the user switches back to the tab.
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }
    }
  }

  function prepare(doc) {
    doc.addEventListener('keydown', handleKeyDown, true);
    doc.addEventListener('mousedown', handlePointerDown, true);
    doc.addEventListener('pointerdown', handlePointerDown, true);
    doc.addEventListener('touchstart', handlePointerDown, true);
    doc.addEventListener('visibilitychange', handleVisibilityChange, true);
  }

  function isFocusVisible(event) {
    var target = event.target;

    try {
      return target.matches(':focus-visible');
    } catch (error) {} // browsers not implementing :focus-visible will throw a SyntaxError
    // we use our own heuristic for those browsers
    // rethrow might be better if it's not the expected error but do we really
    // want to crash if focus-visible malfunctioned?
    // no need for validFocusTarget check. the user does that by attaching it to
    // focusable events only


    return hadKeyboardEvent || focusTriggersKeyboardModality(target);
  }
  /**
   * Should be called if a blur event is fired on a focus-visible element
   */


  function handleBlurVisible() {
    // To detect a tab/window switch, we look for a blur event followed
    // rapidly by a visibility change.
    // If we don't see a visibility change within 100ms, it's probably a
    // regular focus change.
    hadFocusVisibleRecently = true;
    window.clearTimeout(hadFocusVisibleRecentlyTimeout);
    hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
      hadFocusVisibleRecently = false;
    }, 100);
  }

  function useIsFocusVisible() {
    var ref = react.useCallback(function (instance) {
      var node = reactDom.findDOMNode(instance);

      if (node != null) {
        prepare(node.ownerDocument);
      }
    }, []);
    return {
      isFocusVisible: isFocusVisible,
      onBlurVisible: handleBlurVisible,
      ref: ref
    };
  }

  function _arrayWithoutHoles$3(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }
  }

  function _iterableToArray$3(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread$3() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _toConsumableArray$3(arr) {
    return _arrayWithoutHoles$3(arr) || _iterableToArray$3(arr) || _nonIterableSpread$3();
  }

  var useEnhancedEffect$2 = typeof window === 'undefined' ? react.useEffect : react.useLayoutEffect;
  /**
   * @ignore - internal component.
   */

  function Ripple(props) {
    var classes = props.classes,
        _props$pulsate = props.pulsate,
        pulsate = _props$pulsate === void 0 ? false : _props$pulsate,
        rippleX = props.rippleX,
        rippleY = props.rippleY,
        rippleSize = props.rippleSize,
        inProp = props.in,
        _props$onExited = props.onExited,
        onExited = _props$onExited === void 0 ? function () {} : _props$onExited,
        timeout = props.timeout;

    var _React$useState = react.useState(false),
        leaving = _React$useState[0],
        setLeaving = _React$useState[1];

    var rippleClassName = clsx(classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
    var rippleStyles = {
      width: rippleSize,
      height: rippleSize,
      top: -(rippleSize / 2) + rippleY,
      left: -(rippleSize / 2) + rippleX
    };
    var childClassName = clsx(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
    var handleExited = useEventCallback(onExited); // Ripple is used for user feedback (e.g. click or press) so we want to apply styles with the highest priority

    useEnhancedEffect$2(function () {
      if (!inProp) {
        // react-transition-group#onExit
        setLeaving(true); // react-transition-group#onExited

        var timeoutId = setTimeout(handleExited, timeout);
        return function () {
          clearTimeout(timeoutId);
        };
      }

      return undefined;
    }, [handleExited, inProp, timeout]);
    return react.createElement("span", {
      className: rippleClassName,
      style: rippleStyles
    }, react.createElement("span", {
      className: childClassName
    }));
  }

  var DURATION = 550;
  var DELAY_RIPPLE = 80;
  var styles$2 = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        overflow: 'hidden',
        pointerEvents: 'none',
        position: 'absolute',
        zIndex: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderRadius: 'inherit'
      },

      /* Styles applied to the internal `Ripple` components `ripple` class. */
      ripple: {
        opacity: 0,
        position: 'absolute'
      },

      /* Styles applied to the internal `Ripple` components `rippleVisible` class. */
      rippleVisible: {
        opacity: 0.3,
        transform: 'scale(1)',
        animation: "$enter ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut)
      },

      /* Styles applied to the internal `Ripple` components `ripplePulsate` class. */
      ripplePulsate: {
        animationDuration: "".concat(theme.transitions.duration.shorter, "ms")
      },

      /* Styles applied to the internal `Ripple` components `child` class. */
      child: {
        opacity: 1,
        display: 'block',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        backgroundColor: 'currentColor'
      },

      /* Styles applied to the internal `Ripple` components `childLeaving` class. */
      childLeaving: {
        opacity: 0,
        animation: "$exit ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut)
      },

      /* Styles applied to the internal `Ripple` components `childPulsate` class. */
      childPulsate: {
        position: 'absolute',
        left: 0,
        top: 0,
        animation: "$pulsate 2500ms ".concat(theme.transitions.easing.easeInOut, " 200ms infinite")
      },
      '@keyframes enter': {
        '0%': {
          transform: 'scale(0)',
          opacity: 0.1
        },
        '100%': {
          transform: 'scale(1)',
          opacity: 0.3
        }
      },
      '@keyframes exit': {
        '0%': {
          opacity: 1
        },
        '100%': {
          opacity: 0
        }
      },
      '@keyframes pulsate': {
        '0%': {
          transform: 'scale(1)'
        },
        '50%': {
          transform: 'scale(0.92)'
        },
        '100%': {
          transform: 'scale(1)'
        }
      }
    };
  };
  /**
   * @ignore - internal component.
   *
   * TODO v5: Make private
   */

  var TouchRipple = react.forwardRef(function TouchRipple(props, ref) {
    var _props$center = props.center,
        centerProp = _props$center === void 0 ? false : _props$center,
        classes = props.classes,
        className = props.className,
        other = _objectWithoutProperties$2(props, ["center", "classes", "className"]);

    var _React$useState = react.useState([]),
        ripples = _React$useState[0],
        setRipples = _React$useState[1];

    var nextKey = react.useRef(0);
    var rippleCallback = react.useRef(null);
    react.useEffect(function () {
      if (rippleCallback.current) {
        rippleCallback.current();
        rippleCallback.current = null;
      }
    }, [ripples]); // Used to filter out mouse emulated events on mobile.

    var ignoringMouseDown = react.useRef(false); // We use a timer in order to only show the ripples for touch "click" like events.
    // We don't want to display the ripple for touch scroll events.

    var startTimer = react.useRef(null); // This is the hook called once the previous timeout is ready.

    var startTimerCommit = react.useRef(null);
    var container = react.useRef(null);
    react.useEffect(function () {
      return function () {
        clearTimeout(startTimer.current);
      };
    }, []);
    var startCommit = react.useCallback(function (params) {
      var pulsate = params.pulsate,
          rippleX = params.rippleX,
          rippleY = params.rippleY,
          rippleSize = params.rippleSize,
          cb = params.cb;
      setRipples(function (oldRipples) {
        return [].concat(_toConsumableArray$3(oldRipples), [react.createElement(Ripple, {
          key: nextKey.current,
          classes: classes,
          timeout: DURATION,
          pulsate: pulsate,
          rippleX: rippleX,
          rippleY: rippleY,
          rippleSize: rippleSize
        })]);
      });
      nextKey.current += 1;
      rippleCallback.current = cb;
    }, [classes]);
    var start = react.useCallback(function () {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var cb = arguments.length > 2 ? arguments[2] : undefined;
      var _options$pulsate = options.pulsate,
          pulsate = _options$pulsate === void 0 ? false : _options$pulsate,
          _options$center = options.center,
          center = _options$center === void 0 ? centerProp || options.pulsate : _options$center,
          _options$fakeElement = options.fakeElement,
          fakeElement = _options$fakeElement === void 0 ? false : _options$fakeElement;

      if (event.type === 'mousedown' && ignoringMouseDown.current) {
        ignoringMouseDown.current = false;
        return;
      }

      if (event.type === 'touchstart') {
        ignoringMouseDown.current = true;
      }

      var element = fakeElement ? null : container.current;
      var rect = element ? element.getBoundingClientRect() : {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      }; // Get the size of the ripple

      var rippleX;
      var rippleY;
      var rippleSize;

      if (center || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
        rippleX = Math.round(rect.width / 2);
        rippleY = Math.round(rect.height / 2);
      } else {
        var clientX = event.clientX ? event.clientX : event.touches[0].clientX;
        var clientY = event.clientY ? event.clientY : event.touches[0].clientY;
        rippleX = Math.round(clientX - rect.left);
        rippleY = Math.round(clientY - rect.top);
      }

      if (center) {
        rippleSize = Math.sqrt((2 * Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / 3); // For some reason the animation is broken on Mobile Chrome if the size if even.

        if (rippleSize % 2 === 0) {
          rippleSize += 1;
        }
      } else {
        var sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
        var sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
        rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));
      } // Touche devices


      if (event.touches) {
        // check that this isn't another touchstart due to multitouch
        // otherwise we will only clear a single timer when unmounting while two
        // are running
        if (startTimerCommit.current === null) {
          // Prepare the ripple effect.
          startTimerCommit.current = function () {
            startCommit({
              pulsate: pulsate,
              rippleX: rippleX,
              rippleY: rippleY,
              rippleSize: rippleSize,
              cb: cb
            });
          }; // Delay the execution of the ripple effect.


          startTimer.current = setTimeout(function () {
            if (startTimerCommit.current) {
              startTimerCommit.current();
              startTimerCommit.current = null;
            }
          }, DELAY_RIPPLE); // We have to make a tradeoff with this value.
        }
      } else {
        startCommit({
          pulsate: pulsate,
          rippleX: rippleX,
          rippleY: rippleY,
          rippleSize: rippleSize,
          cb: cb
        });
      }
    }, [centerProp, startCommit]);
    var pulsate = react.useCallback(function () {
      start({}, {
        pulsate: true
      });
    }, [start]);
    var stop = react.useCallback(function (event, cb) {
      clearTimeout(startTimer.current); // The touch interaction occurs too quickly.
      // We still want to show ripple effect.

      if (event.type === 'touchend' && startTimerCommit.current) {
        event.persist();
        startTimerCommit.current();
        startTimerCommit.current = null;
        startTimer.current = setTimeout(function () {
          stop(event, cb);
        });
        return;
      }

      startTimerCommit.current = null;
      setRipples(function (oldRipples) {
        if (oldRipples.length > 0) {
          return oldRipples.slice(1);
        }

        return oldRipples;
      });
      rippleCallback.current = cb;
    }, []);
    react.useImperativeHandle(ref, function () {
      return {
        pulsate: pulsate,
        start: start,
        stop: stop
      };
    }, [pulsate, start, stop]);
    return react.createElement("span", _extends$6({
      className: clsx(classes.root, className),
      ref: container
    }, other), react.createElement(TransitionGroup, {
      component: null,
      exit: true
    }, ripples));
  }); // TODO cleanup after https://github.com/reactjs/react-docgen/pull/378 is released

  function withMuiName(Component) {
    Component.muiName = 'MuiTouchRipple';
    return Component;
  }
  var TouchRipple$1 = withStyles$1(styles$2, {
    flip: false,
    name: 'MuiTouchRipple'
  })(withMuiName(react.memo(TouchRipple)));

  var styles$3 = {
    /* Styles applied to the root element. */
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      WebkitTapHighlightColor: 'transparent',
      backgroundColor: 'transparent',
      // Reset default value
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0,
      border: 0,
      margin: 0,
      // Remove the margin in Safari
      borderRadius: 0,
      padding: 0,
      // Remove the padding in Firefox
      cursor: 'pointer',
      userSelect: 'none',
      verticalAlign: 'middle',
      '-moz-appearance': 'none',
      // Reset
      '-webkit-appearance': 'none',
      // Reset
      textDecoration: 'none',
      // So we take precedent over the style of a native <a /> element.
      color: 'inherit',
      '&::-moz-focus-inner': {
        borderStyle: 'none' // Remove Firefox dotted outline.

      },
      '&$disabled': {
        pointerEvents: 'none',
        // Disable link interactions
        cursor: 'default'
      }
    },

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Pseudo-class applied to the root element if keyboard focused. */
    focusVisible: {}
  };
  /**
   * `ButtonBase` contains as few styles as possible.
   * It aims to be a simple building block for creating a button.
   * It contains a load of style reset and some focus/ripple logic.
   */

  var ButtonBase = react.forwardRef(function ButtonBase(props, ref) {
    var action = props.action,
        buttonRefProp = props.buttonRef,
        _props$centerRipple = props.centerRipple,
        centerRipple = _props$centerRipple === void 0 ? false : _props$centerRipple,
        children = props.children,
        classes = props.classes,
        className = props.className,
        _props$component = props.component,
        component = _props$component === void 0 ? 'button' : _props$component,
        _props$disabled = props.disabled,
        disabled = _props$disabled === void 0 ? false : _props$disabled,
        _props$disableRipple = props.disableRipple,
        disableRipple = _props$disableRipple === void 0 ? false : _props$disableRipple,
        _props$disableTouchRi = props.disableTouchRipple,
        disableTouchRipple = _props$disableTouchRi === void 0 ? false : _props$disableTouchRi,
        _props$focusRipple = props.focusRipple,
        focusRipple = _props$focusRipple === void 0 ? false : _props$focusRipple,
        focusVisibleClassName = props.focusVisibleClassName,
        onBlur = props.onBlur,
        onClick = props.onClick,
        onFocus = props.onFocus,
        onFocusVisible = props.onFocusVisible,
        onKeyDown = props.onKeyDown,
        onKeyUp = props.onKeyUp,
        onMouseDown = props.onMouseDown,
        onMouseLeave = props.onMouseLeave,
        onMouseUp = props.onMouseUp,
        onTouchEnd = props.onTouchEnd,
        onTouchMove = props.onTouchMove,
        onTouchStart = props.onTouchStart,
        onDragLeave = props.onDragLeave,
        _props$tabIndex = props.tabIndex,
        tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex,
        TouchRippleProps = props.TouchRippleProps,
        _props$type = props.type,
        type = _props$type === void 0 ? 'button' : _props$type,
        other = _objectWithoutProperties$2(props, ["action", "buttonRef", "centerRipple", "children", "classes", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "onBlur", "onClick", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "onDragLeave", "tabIndex", "TouchRippleProps", "type"]);

    var buttonRef = react.useRef(null);

    function getButtonNode() {
      // #StrictMode ready
      return reactDom.findDOMNode(buttonRef.current);
    }

    var rippleRef = react.useRef(null);

    var _React$useState = react.useState(false),
        focusVisible = _React$useState[0],
        setFocusVisible = _React$useState[1];

    if (disabled && focusVisible) {
      setFocusVisible(false);
    }

    var _useIsFocusVisible = useIsFocusVisible(),
        isFocusVisible = _useIsFocusVisible.isFocusVisible,
        onBlurVisible = _useIsFocusVisible.onBlurVisible,
        focusVisibleRef = _useIsFocusVisible.ref;

    react.useImperativeHandle(action, function () {
      return {
        focusVisible: function focusVisible() {
          setFocusVisible(true);
          buttonRef.current.focus();
        }
      };
    }, []);
    react.useEffect(function () {
      if (focusVisible && focusRipple && !disableRipple) {
        rippleRef.current.pulsate();
      }
    }, [disableRipple, focusRipple, focusVisible]);

    function useRippleHandler(rippleAction, eventCallback) {
      var skipRippleAction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : disableTouchRipple;
      return useEventCallback(function (event) {
        if (eventCallback) {
          eventCallback(event);
        }

        var ignore = skipRippleAction;

        if (!ignore && rippleRef.current) {
          rippleRef.current[rippleAction](event);
        }

        return true;
      });
    }

    var handleMouseDown = useRippleHandler('start', onMouseDown);
    var handleDragLeave = useRippleHandler('stop', onDragLeave);
    var handleMouseUp = useRippleHandler('stop', onMouseUp);
    var handleMouseLeave = useRippleHandler('stop', function (event) {
      if (focusVisible) {
        event.preventDefault();
      }

      if (onMouseLeave) {
        onMouseLeave(event);
      }
    });
    var handleTouchStart = useRippleHandler('start', onTouchStart);
    var handleTouchEnd = useRippleHandler('stop', onTouchEnd);
    var handleTouchMove = useRippleHandler('stop', onTouchMove);
    var handleBlur = useRippleHandler('stop', function (event) {
      if (focusVisible) {
        onBlurVisible(event);
        setFocusVisible(false);
      }

      if (onBlur) {
        onBlur(event);
      }
    }, false);
    var handleFocus = useEventCallback(function (event) {
      if (disabled) {
        return;
      } // Fix for https://github.com/facebook/react/issues/7769


      if (!buttonRef.current) {
        buttonRef.current = event.currentTarget;
      }

      if (isFocusVisible(event)) {
        setFocusVisible(true);

        if (onFocusVisible) {
          onFocusVisible(event);
        }
      }

      if (onFocus) {
        onFocus(event);
      }
    });

    var isNonNativeButton = function isNonNativeButton() {
      var button = getButtonNode();
      return component && component !== 'button' && !(button.tagName === 'A' && button.href);
    };
    /**
     * IE 11 shim for https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat
     */


    var keydownRef = react.useRef(false);
    var handleKeyDown = useEventCallback(function (event) {
      // Check if key is already down to avoid repeats being counted as multiple activations
      if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === ' ') {
        keydownRef.current = true;
        event.persist();
        rippleRef.current.stop(event, function () {
          rippleRef.current.start(event);
        });
      }

      if (onKeyDown) {
        onKeyDown(event);
      } // Keyboard accessibility for non interactive elements


      if (event.target === event.currentTarget && isNonNativeButton() && event.key === 'Enter') {
        event.preventDefault();

        if (onClick) {
          onClick(event);
        }
      }
    });
    var handleKeyUp = useEventCallback(function (event) {
      // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
      // https://codesandbox.io/s/button-keyup-preventdefault-dn7f0
      if (focusRipple && event.key === ' ' && rippleRef.current && focusVisible && !event.defaultPrevented) {
        keydownRef.current = false;
        event.persist();
        rippleRef.current.stop(event, function () {
          rippleRef.current.pulsate(event);
        });
      }

      if (onKeyUp) {
        onKeyUp(event);
      } // Keyboard accessibility for non interactive elements


      if (event.target === event.currentTarget && isNonNativeButton() && event.key === ' ' && !event.defaultPrevented) {
        event.preventDefault();

        if (onClick) {
          onClick(event);
        }
      }
    });
    var ComponentProp = component;

    if (ComponentProp === 'button' && other.href) {
      ComponentProp = 'a';
    }

    var buttonProps = {};

    if (ComponentProp === 'button') {
      buttonProps.type = type;
      buttonProps.disabled = disabled;
    } else {
      if (ComponentProp !== 'a' || !other.href) {
        buttonProps.role = 'button';
      }

      buttonProps['aria-disabled'] = disabled;
    }

    var handleUserRef = useForkRef(buttonRefProp, ref);
    var handleOwnRef = useForkRef(focusVisibleRef, buttonRef);
    var handleRef = useForkRef(handleUserRef, handleOwnRef);
    return react.createElement(ComponentProp, _extends$6({
      className: clsx(classes.root, className, focusVisible && [classes.focusVisible, focusVisibleClassName], disabled && classes.disabled),
      onBlur: handleBlur,
      onClick: onClick,
      onFocus: handleFocus,
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
      onMouseDown: handleMouseDown,
      onMouseLeave: handleMouseLeave,
      onMouseUp: handleMouseUp,
      onDragLeave: handleDragLeave,
      onTouchEnd: handleTouchEnd,
      onTouchMove: handleTouchMove,
      onTouchStart: handleTouchStart,
      ref: handleRef,
      tabIndex: disabled ? -1 : tabIndex
    }, buttonProps, other), children, !disableRipple && !disabled ? react.createElement(NoSsr, null, react.createElement(TouchRipple$1, _extends$6({
      ref: rippleRef,
      center: centerRipple
    }, TouchRippleProps))) : null);
  });
  var ButtonBase$1 = withStyles$1(styles$3, {
    name: 'MuiButtonBase'
  })(ButtonBase);

  function _defineProperty$2(obj, key, value) {
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

  function _arrayWithoutHoles$4(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }
  }

  function _iterableToArray$4(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread$4() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _toConsumableArray$4(arr) {
    return _arrayWithoutHoles$4(arr) || _iterableToArray$4(arr) || _nonIterableSpread$4();
  }

  function _extends$8() {
    _extends$8 = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends$8.apply(this, arguments);
  }

  function _typeof2$1(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2$1 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2$1 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2$1(obj); }

  function _typeof$4(obj) {
    if (typeof Symbol === "function" && _typeof2$1(Symbol.iterator) === "symbol") {
      _typeof$4 = function _typeof(obj) {
        return _typeof2$1(obj);
      };
    } else {
      _typeof$4 = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2$1(obj);
      };
    }

    return _typeof$4(obj);
  }

  function merge(acc, item) {
    if (!item) {
      return acc;
    }

    return deepmerge(acc, item, {
      clone: false // No need to clone deep, it's way faster.

    });
  }

  // For instance with the first breakpoint xs: [xs, sm[.

  var values$1 = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  };
  var defaultBreakpoints = {
    // Sorted ASC by size. That's important.
    // It can't be configured as it's used statically for propTypes.
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    up: function up(key) {
      return "@media (min-width:".concat(values$1[key], "px)");
    }
  };
  function handleBreakpoints(props, propValue, styleFromPropValue) {

    if (Array.isArray(propValue)) {
      var themeBreakpoints = props.theme.breakpoints || defaultBreakpoints;
      return propValue.reduce(function (acc, item, index) {
        acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
        return acc;
      }, {});
    }

    if (_typeof$4(propValue) === 'object') {
      var _themeBreakpoints = props.theme.breakpoints || defaultBreakpoints;

      return Object.keys(propValue).reduce(function (acc, breakpoint) {
        acc[_themeBreakpoints.up(breakpoint)] = styleFromPropValue(propValue[breakpoint]);
        return acc;
      }, {});
    }

    var output = styleFromPropValue(propValue);
    return output;
  }

  function getPath(obj, path) {
    if (!path || typeof path !== 'string') {
      return null;
    }

    return path.split('.').reduce(function (acc, item) {
      return acc && acc[item] ? acc[item] : null;
    }, obj);
  }

  function style$1(options) {
    var prop = options.prop,
        _options$cssProperty = options.cssProperty,
        cssProperty = _options$cssProperty === void 0 ? options.prop : _options$cssProperty,
        themeKey = options.themeKey,
        transform = options.transform;

    var fn = function fn(props) {
      if (props[prop] == null) {
        return null;
      }

      var propValue = props[prop];
      var theme = props.theme;
      var themeMapping = getPath(theme, themeKey) || {};

      var styleFromPropValue = function styleFromPropValue(propValueFinal) {
        var value;

        if (typeof themeMapping === 'function') {
          value = themeMapping(propValueFinal);
        } else if (Array.isArray(themeMapping)) {
          value = themeMapping[propValueFinal] || propValueFinal;
        } else {
          value = getPath(themeMapping, propValueFinal) || propValueFinal;

          if (transform) {
            value = transform(value);
          }
        }

        if (cssProperty === false) {
          return value;
        }

        return _defineProperty$2({}, cssProperty, value);
      };

      return handleBreakpoints(props, propValue, styleFromPropValue);
    };

    fn.propTypes =  {};
    fn.filterProps = [prop];
    return fn;
  }

  function compose() {
    for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
      styles[_key] = arguments[_key];
    }

    var fn = function fn(props) {
      return styles.reduce(function (acc, style) {
        var output = style(props);

        if (output) {
          return merge(acc, output);
        }

        return acc;
      }, {});
    }; // Alternative approach that doesn't yield any performance gain.
    // const handlers = styles.reduce((acc, style) => {
    //   style.filterProps.forEach(prop => {
    //     acc[prop] = style;
    //   });
    //   return acc;
    // }, {});
    // const fn = props => {
    //   return Object.keys(props).reduce((acc, prop) => {
    //     if (handlers[prop]) {
    //       return merge(acc, handlers[prop](props));
    //     }
    //     return acc;
    //   }, {});
    // };


    fn.propTypes =  {};
    fn.filterProps = styles.reduce(function (acc, style) {
      return acc.concat(style.filterProps);
    }, []);
    return fn;
  }

  function getBorder(value) {
    if (typeof value !== 'number') {
      return value;
    }

    return "".concat(value, "px solid");
  }

  var border = style$1({
    prop: 'border',
    themeKey: 'borders',
    transform: getBorder
  });
  var borderTop = style$1({
    prop: 'borderTop',
    themeKey: 'borders',
    transform: getBorder
  });
  var borderRight = style$1({
    prop: 'borderRight',
    themeKey: 'borders',
    transform: getBorder
  });
  var borderBottom = style$1({
    prop: 'borderBottom',
    themeKey: 'borders',
    transform: getBorder
  });
  var borderLeft = style$1({
    prop: 'borderLeft',
    themeKey: 'borders',
    transform: getBorder
  });
  var borderColor = style$1({
    prop: 'borderColor',
    themeKey: 'palette'
  });
  var borderRadius = style$1({
    prop: 'borderRadius',
    themeKey: 'shape'
  });
  var borders = compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderRadius);

  function omit$1(input, fields) {
    var output = {};
    Object.keys(input).forEach(function (prop) {
      if (fields.indexOf(prop) === -1) {
        output[prop] = input[prop];
      }
    });
    return output;
  }

  function css$1(styleFunction) {
    var newStyleFunction = function newStyleFunction(props) {
      var output = styleFunction(props);

      if (props.css) {
        return _extends$8({}, merge(output, styleFunction(_extends$8({
          theme: props.theme
        }, props.css))), {}, omit$1(props.css, [styleFunction.filterProps]));
      }

      return output;
    };

    newStyleFunction.propTypes =  {};
    newStyleFunction.filterProps = ['css'].concat(_toConsumableArray$4(styleFunction.filterProps));
    return newStyleFunction;
  }

  var displayPrint = style$1({
    prop: 'displayPrint',
    cssProperty: false,
    transform: function transform(value) {
      return {
        '@media print': {
          display: value
        }
      };
    }
  });
  var displayRaw = style$1({
    prop: 'display'
  });
  var overflow = style$1({
    prop: 'overflow'
  });
  var textOverflow = style$1({
    prop: 'textOverflow'
  });
  var visibility = style$1({
    prop: 'visibility'
  });
  var whiteSpace = style$1({
    prop: 'whiteSpace'
  });
  var display = compose(displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace);

  var flexBasis = style$1({
    prop: 'flexBasis'
  });
  var flexDirection = style$1({
    prop: 'flexDirection'
  });
  var flexWrap = style$1({
    prop: 'flexWrap'
  });
  var justifyContent = style$1({
    prop: 'justifyContent'
  });
  var alignItems = style$1({
    prop: 'alignItems'
  });
  var alignContent = style$1({
    prop: 'alignContent'
  });
  var order = style$1({
    prop: 'order'
  });
  var flex = style$1({
    prop: 'flex'
  });
  var flexGrow = style$1({
    prop: 'flexGrow'
  });
  var flexShrink = style$1({
    prop: 'flexShrink'
  });
  var alignSelf = style$1({
    prop: 'alignSelf'
  });
  var justifyItems = style$1({
    prop: 'justifyItems'
  });
  var justifySelf = style$1({
    prop: 'justifySelf'
  });
  var flexbox = compose(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf);

  var color$3 = style$1({
    prop: 'color',
    themeKey: 'palette'
  });
  var bgcolor = style$1({
    prop: 'bgcolor',
    cssProperty: 'backgroundColor',
    themeKey: 'palette'
  });
  var palette = compose(color$3, bgcolor);

  var position = style$1({
    prop: 'position'
  });
  var zIndex$1 = style$1({
    prop: 'zIndex',
    themeKey: 'zIndex'
  });
  var top = style$1({
    prop: 'top'
  });
  var right = style$1({
    prop: 'right'
  });
  var bottom = style$1({
    prop: 'bottom'
  });
  var left = style$1({
    prop: 'left'
  });
  var positions = compose(position, zIndex$1, top, right, bottom, left);

  var boxShadow = style$1({
    prop: 'boxShadow',
    themeKey: 'shadows'
  });

  function transform$1(value) {
    return value <= 1 ? "".concat(value * 100, "%") : value;
  }

  var width = style$1({
    prop: 'width',
    transform: transform$1
  });
  var maxWidth = style$1({
    prop: 'maxWidth',
    transform: transform$1
  });
  var minWidth = style$1({
    prop: 'minWidth',
    transform: transform$1
  });
  var height = style$1({
    prop: 'height',
    transform: transform$1
  });
  var maxHeight = style$1({
    prop: 'maxHeight',
    transform: transform$1
  });
  var minHeight = style$1({
    prop: 'minHeight',
    transform: transform$1
  });
  var sizeWidth = style$1({
    prop: 'size',
    cssProperty: 'width',
    transform: transform$1
  });
  var sizeHeight = style$1({
    prop: 'size',
    cssProperty: 'height',
    transform: transform$1
  });
  var sizing = compose(width, maxWidth, minWidth, height, maxHeight, minHeight);

  function _arrayWithHoles$2(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit$2(arr, i) {
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

  function _nonIterableRest$2() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  function _slicedToArray$2(arr, i) {
    return _arrayWithHoles$2(arr) || _iterableToArrayLimit$2(arr, i) || _nonIterableRest$2();
  }

  function memoize$1(fn) {
    var cache = {};
    return function (arg) {
      if (cache[arg] === undefined) {
        cache[arg] = fn(arg);
      }

      return cache[arg];
    };
  }

  var properties = {
    m: 'margin',
    p: 'padding'
  };
  var directions = {
    t: 'Top',
    r: 'Right',
    b: 'Bottom',
    l: 'Left',
    x: ['Left', 'Right'],
    y: ['Top', 'Bottom']
  };
  var aliases = {
    marginX: 'mx',
    marginY: 'my',
    paddingX: 'px',
    paddingY: 'py'
  }; // memoize() impact:
  // From 300,000 ops/sec
  // To 350,000 ops/sec

  var getCssProperties = memoize$1(function (prop) {
    // It's not a shorthand notation.
    if (prop.length > 2) {
      if (aliases[prop]) {
        prop = aliases[prop];
      } else {
        return [prop];
      }
    }

    var _prop$split = prop.split(''),
        _prop$split2 = _slicedToArray$2(_prop$split, 2),
        a = _prop$split2[0],
        b = _prop$split2[1];

    var property = properties[a];
    var direction = directions[b] || '';
    return Array.isArray(direction) ? direction.map(function (dir) {
      return property + dir;
    }) : [property + direction];
  });
  var spacingKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY'];

  function getTransformer(theme) {
    var themeSpacing = theme.spacing || 8;

    if (typeof themeSpacing === 'number') {
      return function (abs) {
        return themeSpacing * abs;
      };
    }

    if (Array.isArray(themeSpacing)) {
      return function (abs) {

        return themeSpacing[abs];
      };
    }

    if (typeof themeSpacing === 'function') {
      return themeSpacing;
    }

    return function () {
      return undefined;
    };
  }

  function getValue(transformer, propValue) {
    if (typeof propValue === 'string') {
      return propValue;
    }

    var abs = Math.abs(propValue);
    var transformed = transformer(abs);

    if (propValue >= 0) {
      return transformed;
    }

    if (typeof transformed === 'number') {
      return -transformed;
    }

    return "-".concat(transformed);
  }

  function getStyleFromPropValue(cssProperties, transformer) {
    return function (propValue) {
      return cssProperties.reduce(function (acc, cssProperty) {
        acc[cssProperty] = getValue(transformer, propValue);
        return acc;
      }, {});
    };
  }

  function spacing(props) {
    var theme = props.theme;
    var transformer = getTransformer(theme);
    return Object.keys(props).map(function (prop) {
      // Using a hash computation over an array iteration could be faster, but with only 28 items,
      // it's doesn't worth the bundle size.
      if (spacingKeys.indexOf(prop) === -1) {
        return null;
      }

      var cssProperties = getCssProperties(prop);
      var styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
      var propValue = props[prop];
      return handleBreakpoints(props, propValue, styleFromPropValue);
    }).reduce(merge, {});
  }

  spacing.propTypes =  {};
  spacing.filterProps = spacingKeys;

  var fontFamily$1 = style$1({
    prop: 'fontFamily',
    themeKey: 'typography'
  });
  var fontSize$1 = style$1({
    prop: 'fontSize',
    themeKey: 'typography'
  });
  var fontStyle = style$1({
    prop: 'fontStyle',
    themeKey: 'typography'
  });
  var fontWeight = style$1({
    prop: 'fontWeight',
    themeKey: 'typography'
  });
  var letterSpacing = style$1({
    prop: 'letterSpacing'
  });
  var lineHeight = style$1({
    prop: 'lineHeight'
  });
  var textAlign = style$1({
    prop: 'textAlign'
  });
  var typography = compose(fontFamily$1, fontSize$1, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign);

  var styleFunction = css$1(compose(borders, display, flexbox, positions, palette, boxShadow, sizing, spacing, typography));
  /**
   * @ignore - do not document.
   */

  var Box = styled$1('div')(styleFunction, {
    name: 'MuiBox'
  });

  var styles$4 = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        margin: 0
      },

      /* Styles applied to the root element if `variant="body2"`. */
      body2: theme.typography.body2,

      /* Styles applied to the root element if `variant="body1"`. */
      body1: theme.typography.body1,

      /* Styles applied to the root element if `variant="caption"`. */
      caption: theme.typography.caption,

      /* Styles applied to the root element if `variant="button"`. */
      button: theme.typography.button,

      /* Styles applied to the root element if `variant="h1"`. */
      h1: theme.typography.h1,

      /* Styles applied to the root element if `variant="h2"`. */
      h2: theme.typography.h2,

      /* Styles applied to the root element if `variant="h3"`. */
      h3: theme.typography.h3,

      /* Styles applied to the root element if `variant="h4"`. */
      h4: theme.typography.h4,

      /* Styles applied to the root element if `variant="h5"`. */
      h5: theme.typography.h5,

      /* Styles applied to the root element if `variant="h6"`. */
      h6: theme.typography.h6,

      /* Styles applied to the root element if `variant="subtitle1"`. */
      subtitle1: theme.typography.subtitle1,

      /* Styles applied to the root element if `variant="subtitle2"`. */
      subtitle2: theme.typography.subtitle2,

      /* Styles applied to the root element if `variant="overline"`. */
      overline: theme.typography.overline,

      /* Styles applied to the root element if `variant="srOnly"`. Only accessible to screen readers. */
      srOnly: {
        position: 'absolute',
        height: 1,
        width: 1,
        overflow: 'hidden'
      },

      /* Styles applied to the root element if `align="left"`. */
      alignLeft: {
        textAlign: 'left'
      },

      /* Styles applied to the root element if `align="center"`. */
      alignCenter: {
        textAlign: 'center'
      },

      /* Styles applied to the root element if `align="right"`. */
      alignRight: {
        textAlign: 'right'
      },

      /* Styles applied to the root element if `align="justify"`. */
      alignJustify: {
        textAlign: 'justify'
      },

      /* Styles applied to the root element if `nowrap={true}`. */
      noWrap: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      },

      /* Styles applied to the root element if `gutterBottom={true}`. */
      gutterBottom: {
        marginBottom: '0.35em'
      },

      /* Styles applied to the root element if `paragraph={true}`. */
      paragraph: {
        marginBottom: 16
      },

      /* Styles applied to the root element if `color="inherit"`. */
      colorInherit: {
        color: 'inherit'
      },

      /* Styles applied to the root element if `color="primary"`. */
      colorPrimary: {
        color: theme.palette.primary.main
      },

      /* Styles applied to the root element if `color="secondary"`. */
      colorSecondary: {
        color: theme.palette.secondary.main
      },

      /* Styles applied to the root element if `color="textPrimary"`. */
      colorTextPrimary: {
        color: theme.palette.text.primary
      },

      /* Styles applied to the root element if `color="textSecondary"`. */
      colorTextSecondary: {
        color: theme.palette.text.secondary
      },

      /* Styles applied to the root element if `color="error"`. */
      colorError: {
        color: theme.palette.error.main
      },

      /* Styles applied to the root element if `display="inline"`. */
      displayInline: {
        display: 'inline'
      },

      /* Styles applied to the root element if `display="block"`. */
      displayBlock: {
        display: 'block'
      }
    };
  };
  var defaultVariantMapping = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p'
  };
  var Typography = react.forwardRef(function Typography(props, ref) {
    var _props$align = props.align,
        align = _props$align === void 0 ? 'inherit' : _props$align,
        classes = props.classes,
        className = props.className,
        _props$color = props.color,
        color = _props$color === void 0 ? 'initial' : _props$color,
        component = props.component,
        _props$display = props.display,
        display = _props$display === void 0 ? 'initial' : _props$display,
        _props$gutterBottom = props.gutterBottom,
        gutterBottom = _props$gutterBottom === void 0 ? false : _props$gutterBottom,
        _props$noWrap = props.noWrap,
        noWrap = _props$noWrap === void 0 ? false : _props$noWrap,
        _props$paragraph = props.paragraph,
        paragraph = _props$paragraph === void 0 ? false : _props$paragraph,
        _props$variant = props.variant,
        variant = _props$variant === void 0 ? 'body1' : _props$variant,
        _props$variantMapping = props.variantMapping,
        variantMapping = _props$variantMapping === void 0 ? defaultVariantMapping : _props$variantMapping,
        other = _objectWithoutProperties$2(props, ["align", "classes", "className", "color", "component", "display", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"]);

    var Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';
    return react.createElement(Component, _extends$6({
      className: clsx(classes.root, className, variant !== 'inherit' && classes[variant], color !== 'initial' && classes["color".concat(capitalize(color))], noWrap && classes.noWrap, gutterBottom && classes.gutterBottom, paragraph && classes.paragraph, align !== 'inherit' && classes["align".concat(capitalize(align))], display !== 'initial' && classes["display".concat(capitalize(display))]),
      ref: ref
    }, other));
  });
  var Typography$1 = withStyles$1(styles$4, {
    name: 'MuiTypography'
  })(Typography);

  var styles$5 = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: _extends$6({}, theme.typography.button, {
        boxSizing: 'border-box',
        minWidth: 64,
        padding: '6px 16px',
        borderRadius: theme.shape.borderRadius,
        color: theme.palette.text.primary,
        transition: theme.transitions.create(['background-color', 'box-shadow', 'border'], {
          duration: theme.transitions.duration.short
        }),
        '&:hover': {
          textDecoration: 'none',
          backgroundColor: fade(theme.palette.text.primary, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          },
          '&$disabled': {
            backgroundColor: 'transparent'
          }
        },
        '&$disabled': {
          color: theme.palette.action.disabled
        }
      }),

      /* Styles applied to the span element that wraps the children. */
      label: {
        width: '100%',
        // Ensure the correct width for iOS Safari
        display: 'inherit',
        alignItems: 'inherit',
        justifyContent: 'inherit'
      },

      /* Styles applied to the root element if `variant="text"`. */
      text: {
        padding: '6px 8px'
      },

      /* Styles applied to the root element if `variant="text"` and `color="primary"`. */
      textPrimary: {
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },

      /* Styles applied to the root element if `variant="text"` and `color="secondary"`. */
      textSecondary: {
        color: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },

      /* Styles applied to the root element if `variant="outlined"`. */
      outlined: {
        padding: '5px 15px',
        border: "1px solid ".concat(theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'),
        '&$disabled': {
          border: "1px solid ".concat(theme.palette.action.disabled)
        }
      },

      /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
      outlinedPrimary: {
        color: theme.palette.primary.main,
        border: "1px solid ".concat(fade(theme.palette.primary.main, 0.5)),
        '&:hover': {
          border: "1px solid ".concat(theme.palette.primary.main),
          backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },

      /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
      outlinedSecondary: {
        color: theme.palette.secondary.main,
        border: "1px solid ".concat(fade(theme.palette.secondary.main, 0.5)),
        '&:hover': {
          border: "1px solid ".concat(theme.palette.secondary.main),
          backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        },
        '&$disabled': {
          border: "1px solid ".concat(theme.palette.action.disabled)
        }
      },

      /* Styles applied to the root element if `variant="contained"`. */
      contained: {
        color: theme.palette.getContrastText(theme.palette.grey[300]),
        backgroundColor: theme.palette.grey[300],
        boxShadow: theme.shadows[2],
        '&:hover': {
          backgroundColor: theme.palette.grey.A100,
          boxShadow: theme.shadows[4],
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            boxShadow: theme.shadows[2],
            backgroundColor: theme.palette.grey[300]
          },
          '&$disabled': {
            backgroundColor: theme.palette.action.disabledBackground
          }
        },
        '&$focusVisible': {
          boxShadow: theme.shadows[6]
        },
        '&:active': {
          boxShadow: theme.shadows[8]
        },
        '&$disabled': {
          color: theme.palette.action.disabled,
          boxShadow: theme.shadows[0],
          backgroundColor: theme.palette.action.disabledBackground
        }
      },

      /* Styles applied to the root element if `variant="contained"` and `color="primary"`. */
      containedPrimary: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: theme.palette.primary.dark,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: theme.palette.primary.main
          }
        }
      },

      /* Styles applied to the root element if `variant="contained"` and `color="secondary"`. */
      containedSecondary: {
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: theme.palette.secondary.dark,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: theme.palette.secondary.main
          }
        }
      },

      /* Styles applied to the root element if `disableElevation={true}`. */
      disableElevation: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none'
        },
        '&$focusVisible': {
          boxShadow: 'none'
        },
        '&:active': {
          boxShadow: 'none'
        },
        '&$disabled': {
          boxShadow: 'none'
        }
      },

      /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
      focusVisible: {},

      /* Pseudo-class applied to the root element if `disabled={true}`. */
      disabled: {},

      /* Styles applied to the root element if `color="inherit"`. */
      colorInherit: {
        color: 'inherit',
        borderColor: 'currentColor'
      },

      /* Styles applied to the root element if `size="small"` and `variant="text"`. */
      textSizeSmall: {
        padding: '4px 5px',
        fontSize: theme.typography.pxToRem(13)
      },

      /* Styles applied to the root element if `size="large"` and `variant="text"`. */
      textSizeLarge: {
        padding: '8px 11px',
        fontSize: theme.typography.pxToRem(15)
      },

      /* Styles applied to the root element if `size="small"` and `variant="outlined"`. */
      outlinedSizeSmall: {
        padding: '3px 9px',
        fontSize: theme.typography.pxToRem(13)
      },

      /* Styles applied to the root element if `size="large"` and `variant="outlined"`. */
      outlinedSizeLarge: {
        padding: '7px 21px',
        fontSize: theme.typography.pxToRem(15)
      },

      /* Styles applied to the root element if `size="small"` and `variant="contained"`. */
      containedSizeSmall: {
        padding: '4px 10px',
        fontSize: theme.typography.pxToRem(13)
      },

      /* Styles applied to the root element if `size="large"` and `variant="contained"`. */
      containedSizeLarge: {
        padding: '8px 22px',
        fontSize: theme.typography.pxToRem(15)
      },

      /* Styles applied to the root element if `size="small"`. */
      sizeSmall: {},

      /* Styles applied to the root element if `size="large"`. */
      sizeLarge: {},

      /* Styles applied to the root element if `fullWidth={true}`. */
      fullWidth: {
        width: '100%'
      },

      /* Styles applied to the startIcon element if supplied. */
      startIcon: {
        display: 'inherit',
        marginRight: 8,
        marginLeft: -4,
        '&$iconSizeSmall': {
          marginLeft: -2
        }
      },

      /* Styles applied to the endIcon element if supplied. */
      endIcon: {
        display: 'inherit',
        marginRight: -4,
        marginLeft: 8,
        '&$iconSizeSmall': {
          marginRight: -2
        }
      },

      /* Styles applied to the icon element if supplied and `size="small"`. */
      iconSizeSmall: {
        '& > *:first-child': {
          fontSize: 18
        }
      },

      /* Styles applied to the icon element if supplied and `size="medium"`. */
      iconSizeMedium: {
        '& > *:first-child': {
          fontSize: 20
        }
      },

      /* Styles applied to the icon element if supplied and `size="large"`. */
      iconSizeLarge: {
        '& > *:first-child': {
          fontSize: 22
        }
      }
    };
  };
  var Button = react.forwardRef(function Button(props, ref) {
    var children = props.children,
        classes = props.classes,
        className = props.className,
        _props$color = props.color,
        color = _props$color === void 0 ? 'default' : _props$color,
        _props$component = props.component,
        component = _props$component === void 0 ? 'button' : _props$component,
        _props$disabled = props.disabled,
        disabled = _props$disabled === void 0 ? false : _props$disabled,
        _props$disableElevati = props.disableElevation,
        disableElevation = _props$disableElevati === void 0 ? false : _props$disableElevati,
        _props$disableFocusRi = props.disableFocusRipple,
        disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
        endIconProp = props.endIcon,
        focusVisibleClassName = props.focusVisibleClassName,
        _props$fullWidth = props.fullWidth,
        fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
        _props$size = props.size,
        size = _props$size === void 0 ? 'medium' : _props$size,
        startIconProp = props.startIcon,
        _props$type = props.type,
        type = _props$type === void 0 ? 'button' : _props$type,
        _props$variant = props.variant,
        variant = _props$variant === void 0 ? 'text' : _props$variant,
        other = _objectWithoutProperties$2(props, ["children", "classes", "className", "color", "component", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"]);

    var startIcon = startIconProp && react.createElement("span", {
      className: clsx(classes.startIcon, classes["iconSize".concat(capitalize(size))])
    }, startIconProp);
    var endIcon = endIconProp && react.createElement("span", {
      className: clsx(classes.endIcon, classes["iconSize".concat(capitalize(size))])
    }, endIconProp);
    return react.createElement(ButtonBase$1, _extends$6({
      className: clsx(classes.root, classes[variant], className, color === 'inherit' ? classes.colorInherit : color !== 'default' && classes["".concat(variant).concat(capitalize(color))], size !== 'medium' && [classes["".concat(variant, "Size").concat(capitalize(size))], classes["size".concat(capitalize(size))]], disableElevation && classes.disableElevation, disabled && classes.disabled, fullWidth && classes.fullWidth),
      component: component,
      disabled: disabled,
      focusRipple: !disableFocusRipple,
      focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName),
      ref: ref,
      type: type
    }, other), react.createElement("span", {
      className: classes.label
    }, startIcon, children, endIcon));
  });
  var Button$1 = withStyles$1(styles$5, {
    name: 'MuiButton'
  })(Button);

  /**
   * @ignore - internal component.
   */

  var FormControlContext = react.createContext();

  function useFormControl() {
    return react.useContext(FormControlContext);
  }

  var styles$6 = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        textAlign: 'center',
        flex: '0 0 auto',
        fontSize: theme.typography.pxToRem(24),
        padding: 12,
        borderRadius: '50%',
        overflow: 'visible',
        // Explicitly set the default value to solve a bug on IE 11.
        color: theme.palette.action.active,
        transition: theme.transitions.create('background-color', {
          duration: theme.transitions.duration.shortest
        }),
        '&:hover': {
          backgroundColor: fade(theme.palette.action.active, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        },
        '&$disabled': {
          backgroundColor: 'transparent',
          color: theme.palette.action.disabled
        }
      },

      /* Styles applied to the root element if `edge="start"`. */
      edgeStart: {
        marginLeft: -12,
        '$sizeSmall&': {
          marginLeft: -3
        }
      },

      /* Styles applied to the root element if `edge="end"`. */
      edgeEnd: {
        marginRight: -12,
        '$sizeSmall&': {
          marginRight: -3
        }
      },

      /* Styles applied to the root element if `color="inherit"`. */
      colorInherit: {
        color: 'inherit'
      },

      /* Styles applied to the root element if `color="primary"`. */
      colorPrimary: {
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },

      /* Styles applied to the root element if `color="secondary"`. */
      colorSecondary: {
        color: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },

      /* Pseudo-class applied to the root element if `disabled={true}`. */
      disabled: {},

      /* Styles applied to the root element if `size="small"`. */
      sizeSmall: {
        padding: 3,
        fontSize: theme.typography.pxToRem(18)
      },

      /* Styles applied to the children container element. */
      label: {
        width: '100%',
        display: 'flex',
        alignItems: 'inherit',
        justifyContent: 'inherit'
      }
    };
  };
  /**
   * Refer to the [Icons](/components/icons/) section of the documentation
   * regarding the available icon options.
   */

  var IconButton = react.forwardRef(function IconButton(props, ref) {
    var _props$edge = props.edge,
        edge = _props$edge === void 0 ? false : _props$edge,
        children = props.children,
        classes = props.classes,
        className = props.className,
        _props$color = props.color,
        color = _props$color === void 0 ? 'default' : _props$color,
        _props$disabled = props.disabled,
        disabled = _props$disabled === void 0 ? false : _props$disabled,
        _props$disableFocusRi = props.disableFocusRipple,
        disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
        _props$size = props.size,
        size = _props$size === void 0 ? 'medium' : _props$size,
        other = _objectWithoutProperties$2(props, ["edge", "children", "classes", "className", "color", "disabled", "disableFocusRipple", "size"]);

    return react.createElement(ButtonBase$1, _extends$6({
      className: clsx(classes.root, className, color !== 'default' && classes["color".concat(capitalize(color))], disabled && classes.disabled, {
        small: classes["size".concat(capitalize(size))]
      }[size], {
        start: classes.edgeStart,
        end: classes.edgeEnd
      }[edge]),
      centerRipple: true,
      focusRipple: !disableFocusRipple,
      disabled: disabled,
      ref: ref
    }, other), react.createElement("span", {
      className: classes.label
    }, children));
  });
  var IconButton$1 = withStyles$1(styles$6, {
    name: 'MuiIconButton'
  })(IconButton);

  var SIZE = 44;

  function getRelativeValue(value, min, max) {
    return (Math.min(Math.max(min, value), max) - min) / (max - min);
  }

  function easeOut(t) {
    t = getRelativeValue(t, 0, 1); // https://gist.github.com/gre/1650294

    t = (t -= 1) * t * t + 1;
    return t;
  }

  function easeIn(t) {
    return t * t;
  }

  var styles$7 = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        display: 'inline-block'
      },

      /* Styles applied to the root element if `variant="static"`. */
      static: {
        transition: theme.transitions.create('transform')
      },

      /* Styles applied to the root element if `variant="indeterminate"`. */
      indeterminate: {
        animation: '$circular-rotate 1.4s linear infinite'
      },

      /* Styles applied to the root element if `color="primary"`. */
      colorPrimary: {
        color: theme.palette.primary.main
      },

      /* Styles applied to the root element if `color="secondary"`. */
      colorSecondary: {
        color: theme.palette.secondary.main
      },

      /* Styles applied to the `svg` element. */
      svg: {
        display: 'block' // Keeps the progress centered

      },

      /* Styles applied to the `circle` svg path. */
      circle: {
        stroke: 'currentColor' // Use butt to follow the specification, by chance, it's already the default CSS value.
        // strokeLinecap: 'butt',

      },

      /* Styles applied to the `circle` svg path if `variant="static"`. */
      circleStatic: {
        transition: theme.transitions.create('stroke-dashoffset')
      },

      /* Styles applied to the `circle` svg path if `variant="indeterminate"`. */
      circleIndeterminate: {
        animation: '$circular-dash 1.4s ease-in-out infinite',
        // Some default value that looks fine waiting for the animation to kicks in.
        strokeDasharray: '80px, 200px',
        strokeDashoffset: '0px' // Add the unit to fix a Edge 16 and below bug.

      },
      '@keyframes circular-rotate': {
        '100%': {
          transform: 'rotate(360deg)'
        }
      },
      '@keyframes circular-dash': {
        '0%': {
          strokeDasharray: '1px, 200px',
          strokeDashoffset: '0px'
        },
        '50%': {
          strokeDasharray: '100px, 200px',
          strokeDashoffset: '-15px'
        },
        '100%': {
          strokeDasharray: '100px, 200px',
          strokeDashoffset: '-125px'
        }
      },

      /* Styles applied to the `circle` svg path if `disableShrink={true}`. */
      circleDisableShrink: {
        animation: 'none'
      }
    };
  };
  /**
   * ## ARIA
   *
   * If the progress bar is describing the loading progress of a particular region of a page,
   * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
   * attribute to `true` on that region until it has finished loading.
   */

  var CircularProgress = react.forwardRef(function CircularProgress(props, ref) {
    var classes = props.classes,
        className = props.className,
        _props$color = props.color,
        color = _props$color === void 0 ? 'primary' : _props$color,
        _props$disableShrink = props.disableShrink,
        disableShrink = _props$disableShrink === void 0 ? false : _props$disableShrink,
        _props$size = props.size,
        size = _props$size === void 0 ? 40 : _props$size,
        style = props.style,
        _props$thickness = props.thickness,
        thickness = _props$thickness === void 0 ? 3.6 : _props$thickness,
        _props$value = props.value,
        value = _props$value === void 0 ? 0 : _props$value,
        _props$variant = props.variant,
        variant = _props$variant === void 0 ? 'indeterminate' : _props$variant,
        other = _objectWithoutProperties$2(props, ["classes", "className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"]);

    var circleStyle = {};
    var rootStyle = {};
    var rootProps = {};

    if (variant === 'determinate' || variant === 'static') {
      var circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
      circleStyle.strokeDasharray = circumference.toFixed(3);
      rootProps['aria-valuenow'] = Math.round(value);

      if (variant === 'static') {
        circleStyle.strokeDashoffset = "".concat(((100 - value) / 100 * circumference).toFixed(3), "px");
        rootStyle.transform = 'rotate(-90deg)';
      } else {
        circleStyle.strokeDashoffset = "".concat((easeIn((100 - value) / 100) * circumference).toFixed(3), "px");
        rootStyle.transform = "rotate(".concat((easeOut(value / 70) * 270).toFixed(3), "deg)");
      }
    }

    return react.createElement("div", _extends$6({
      className: clsx(classes.root, className, color !== 'inherit' && classes["color".concat(capitalize(color))], {
        indeterminate: classes.indeterminate,
        static: classes.static
      }[variant]),
      style: _extends$6({
        width: size,
        height: size
      }, rootStyle, {}, style),
      ref: ref,
      role: "progressbar"
    }, rootProps, other), react.createElement("svg", {
      className: classes.svg,
      viewBox: "".concat(SIZE / 2, " ").concat(SIZE / 2, " ").concat(SIZE, " ").concat(SIZE)
    }, react.createElement("circle", {
      className: clsx(classes.circle, disableShrink && classes.circleDisableShrink, {
        indeterminate: classes.circleIndeterminate,
        static: classes.circleStatic
      }[variant]),
      style: circleStyle,
      cx: SIZE,
      cy: SIZE,
      r: (SIZE - thickness) / 2,
      fill: "none",
      strokeWidth: thickness
    })));
  });
  var CircularProgress$1 = withStyles$1(styles$7, {
    name: 'MuiCircularProgress',
    flip: false
  })(CircularProgress);

  function ownerDocument(node) {
    return node && node.ownerDocument || document;
  }

  function getContainer(container) {
    container = typeof container === 'function' ? container() : container; // #StrictMode ready

    return reactDom.findDOMNode(container);
  }

  var useEnhancedEffect$3 = typeof window !== 'undefined' ? react.useLayoutEffect : react.useEffect;
  /**
   * Portals provide a first-class way to render children into a DOM node
   * that exists outside the DOM hierarchy of the parent component.
   */

  var Portal = react.forwardRef(function Portal(props, ref) {
    var children = props.children,
        container = props.container,
        _props$disablePortal = props.disablePortal,
        disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal,
        onRendered = props.onRendered;

    var _React$useState = react.useState(null),
        mountNode = _React$useState[0],
        setMountNode = _React$useState[1];

    var handleRef = useForkRef(react.isValidElement(children) ? children.ref : null, ref);
    useEnhancedEffect$3(function () {
      if (!disablePortal) {
        setMountNode(getContainer(container) || document.body);
      }
    }, [container, disablePortal]);
    useEnhancedEffect$3(function () {
      if (mountNode && !disablePortal) {
        setRef(ref, mountNode);
        return function () {
          setRef(ref, null);
        };
      }

      return undefined;
    }, [ref, mountNode, disablePortal]);
    useEnhancedEffect$3(function () {
      if (onRendered && (mountNode || disablePortal)) {
        onRendered();
      }
    }, [onRendered, mountNode, disablePortal]);

    if (disablePortal) {
      if (react.isValidElement(children)) {
        return react.cloneElement(children, {
          ref: handleRef
        });
      }

      return children;
    }

    return mountNode ? reactDom.createPortal(children, mountNode) : mountNode;
  });

  /**
   * Safe chained function
   *
   * Will only create a new function if needed,
   * otherwise will pass back existing functions or null.
   *
   * @param {function} functions to chain
   * @returns {function|null}
   */
  function createChainedFunction() {
    for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
      funcs[_key] = arguments[_key];
    }

    return funcs.reduce(function (acc, func) {
      if (func == null) {
        return acc;
      }

      return function chainedFunction() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        acc.apply(this, args);
        func.apply(this, args);
      };
    }, function () {});
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties$1(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass$1(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$1(Constructor, staticProps);
    return Constructor;
  }

  // A change of the browser zoom change the scrollbar size.
  // Credit https://github.com/twbs/bootstrap/blob/3ffe3a5d82f6f561b82ff78d82b32a7d14aed558/js/src/modal.js#L512-L519
  function getScrollbarSize() {
    var scrollDiv = document.createElement('div');
    scrollDiv.style.width = '99px';
    scrollDiv.style.height = '99px';
    scrollDiv.style.position = 'absolute';
    scrollDiv.style.top = '-9999px';
    scrollDiv.style.overflow = 'scroll';
    document.body.appendChild(scrollDiv);
    var scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarSize;
  }

  function ownerWindow(node) {
    var doc = ownerDocument(node);
    return doc.defaultView || window;
  }

  function isOverflowing(container) {
    var doc = ownerDocument(container);

    if (doc.body === container) {
      return ownerWindow(doc).innerWidth > doc.documentElement.clientWidth;
    }

    return container.scrollHeight > container.clientHeight;
  }

  function ariaHidden(node, show) {
    if (show) {
      node.setAttribute('aria-hidden', 'true');
    } else {
      node.removeAttribute('aria-hidden');
    }
  }

  function getPaddingRight(node) {
    return parseInt(window.getComputedStyle(node)['padding-right'], 10) || 0;
  }

  function ariaHiddenSiblings(container, mountNode, currentNode) {
    var nodesToExclude = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    var show = arguments.length > 4 ? arguments[4] : undefined;
    var blacklist = [mountNode, currentNode].concat(_toConsumableArray$3(nodesToExclude));
    var blacklistTagNames = ['TEMPLATE', 'SCRIPT', 'STYLE'];
    [].forEach.call(container.children, function (node) {
      if (node.nodeType === 1 && blacklist.indexOf(node) === -1 && blacklistTagNames.indexOf(node.tagName) === -1) {
        ariaHidden(node, show);
      }
    });
  }

  function findIndexOf(containerInfo, callback) {
    var idx = -1;
    containerInfo.some(function (item, index) {
      if (callback(item)) {
        idx = index;
        return true;
      }

      return false;
    });
    return idx;
  }

  function handleContainer(containerInfo, props) {
    var restoreStyle = [];
    var restorePaddings = [];
    var container = containerInfo.container;
    var fixedNodes;

    if (!props.disableScrollLock) {
      if (isOverflowing(container)) {
        // Compute the size before applying overflow hidden to avoid any scroll jumps.
        var scrollbarSize = getScrollbarSize();
        restoreStyle.push({
          value: container.style.paddingRight,
          key: 'padding-right',
          el: container
        }); // Use computed style, here to get the real padding to add our scrollbar width.

        container.style['padding-right'] = "".concat(getPaddingRight(container) + scrollbarSize, "px"); // .mui-fixed is a global helper.

        fixedNodes = ownerDocument(container).querySelectorAll('.mui-fixed');
        [].forEach.call(fixedNodes, function (node) {
          restorePaddings.push(node.style.paddingRight);
          node.style.paddingRight = "".concat(getPaddingRight(node) + scrollbarSize, "px");
        });
      } // Improve Gatsby support
      // https://css-tricks.com/snippets/css/force-vertical-scrollbar/


      var parent = container.parentElement;
      var scrollContainer = parent.nodeName === 'HTML' && window.getComputedStyle(parent)['overflow-y'] === 'scroll' ? parent : container; // Block the scroll even if no scrollbar is visible to account for mobile keyboard
      // screensize shrink.

      restoreStyle.push({
        value: scrollContainer.style.overflow,
        key: 'overflow',
        el: scrollContainer
      });
      scrollContainer.style.overflow = 'hidden';
    }

    var restore = function restore() {
      if (fixedNodes) {
        [].forEach.call(fixedNodes, function (node, i) {
          if (restorePaddings[i]) {
            node.style.paddingRight = restorePaddings[i];
          } else {
            node.style.removeProperty('padding-right');
          }
        });
      }

      restoreStyle.forEach(function (_ref) {
        var value = _ref.value,
            el = _ref.el,
            key = _ref.key;

        if (value) {
          el.style.setProperty(key, value);
        } else {
          el.style.removeProperty(key);
        }
      });
    };

    return restore;
  }

  function getHiddenSiblings(container) {
    var hiddenSiblings = [];
    [].forEach.call(container.children, function (node) {
      if (node.getAttribute && node.getAttribute('aria-hidden') === 'true') {
        hiddenSiblings.push(node);
      }
    });
    return hiddenSiblings;
  }
  /**
   * @ignore - do not document.
   *
   * Proper state management for containers and the modals in those containers.
   * Simplified, but inspired by react-overlay's ModalManager class.
   * Used by the Modal to ensure proper styling of containers.
   */


  var ModalManager =
  /*#__PURE__*/
  function () {
    function ModalManager() {
      _classCallCheck(this, ModalManager);

      // this.modals[modalIndex] = modal
      this.modals = []; // this.containers[containerIndex] = {
      //   modals: [],
      //   container,
      //   restore: null,
      // }

      this.containers = [];
    }

    _createClass$1(ModalManager, [{
      key: "add",
      value: function add(modal, container) {
        var modalIndex = this.modals.indexOf(modal);

        if (modalIndex !== -1) {
          return modalIndex;
        }

        modalIndex = this.modals.length;
        this.modals.push(modal); // If the modal we are adding is already in the DOM.

        if (modal.modalRef) {
          ariaHidden(modal.modalRef, false);
        }

        var hiddenSiblingNodes = getHiddenSiblings(container);
        ariaHiddenSiblings(container, modal.mountNode, modal.modalRef, hiddenSiblingNodes, true);
        var containerIndex = findIndexOf(this.containers, function (item) {
          return item.container === container;
        });

        if (containerIndex !== -1) {
          this.containers[containerIndex].modals.push(modal);
          return modalIndex;
        }

        this.containers.push({
          modals: [modal],
          container: container,
          restore: null,
          hiddenSiblingNodes: hiddenSiblingNodes
        });
        return modalIndex;
      }
    }, {
      key: "mount",
      value: function mount(modal, props) {
        var containerIndex = findIndexOf(this.containers, function (item) {
          return item.modals.indexOf(modal) !== -1;
        });
        var containerInfo = this.containers[containerIndex];

        if (!containerInfo.restore) {
          containerInfo.restore = handleContainer(containerInfo, props);
        }
      }
    }, {
      key: "remove",
      value: function remove(modal) {
        var modalIndex = this.modals.indexOf(modal);

        if (modalIndex === -1) {
          return modalIndex;
        }

        var containerIndex = findIndexOf(this.containers, function (item) {
          return item.modals.indexOf(modal) !== -1;
        });
        var containerInfo = this.containers[containerIndex];
        containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
        this.modals.splice(modalIndex, 1); // If that was the last modal in a container, clean up the container.

        if (containerInfo.modals.length === 0) {
          // The modal might be closed before it had the chance to be mounted in the DOM.
          if (containerInfo.restore) {
            containerInfo.restore();
          }

          if (modal.modalRef) {
            // In case the modal wasn't in the DOM yet.
            ariaHidden(modal.modalRef, true);
          }

          ariaHiddenSiblings(containerInfo.container, modal.mountNode, modal.modalRef, containerInfo.hiddenSiblingNodes, false);
          this.containers.splice(containerIndex, 1);
        } else {
          // Otherwise make sure the next top modal is visible to a screen reader.
          var nextTop = containerInfo.modals[containerInfo.modals.length - 1]; // as soon as a modal is adding its modalRef is undefined. it can't set
          // aria-hidden because the dom element doesn't exist either
          // when modal was unmounted before modalRef gets null

          if (nextTop.modalRef) {
            ariaHidden(nextTop.modalRef, false);
          }
        }

        return modalIndex;
      }
    }, {
      key: "isTopModal",
      value: function isTopModal(modal) {
        return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
      }
    }]);

    return ModalManager;
  }();

  /* eslint-disable consistent-return, jsx-a11y/no-noninteractive-tabindex */
  /**
   * @ignore - internal component.
   */

  function TrapFocus(props) {
    var children = props.children,
        _props$disableAutoFoc = props.disableAutoFocus,
        disableAutoFocus = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc,
        _props$disableEnforce = props.disableEnforceFocus,
        disableEnforceFocus = _props$disableEnforce === void 0 ? false : _props$disableEnforce,
        _props$disableRestore = props.disableRestoreFocus,
        disableRestoreFocus = _props$disableRestore === void 0 ? false : _props$disableRestore,
        getDoc = props.getDoc,
        isEnabled = props.isEnabled,
        open = props.open;
    var ignoreNextEnforceFocus = react.useRef();
    var sentinelStart = react.useRef(null);
    var sentinelEnd = react.useRef(null);
    var nodeToRestore = react.useRef();
    var rootRef = react.useRef(null); // can be removed once we drop support for non ref forwarding class components

    var handleOwnRef = react.useCallback(function (instance) {
      // #StrictMode ready
      rootRef.current = reactDom.findDOMNode(instance);
    }, []);
    var handleRef = useForkRef(children.ref, handleOwnRef); // ⚠️ You may rely on React.useMemo as a performance optimization, not as a semantic guarantee.
    // https://reactjs.org/docs/hooks-reference.html#usememo

    react.useMemo(function () {
      if (!open || typeof window === 'undefined') {
        return;
      }

      nodeToRestore.current = getDoc().activeElement;
    }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

    react.useEffect(function () {
      if (!open) {
        return;
      }

      var doc = ownerDocument(rootRef.current); // We might render an empty child.

      if (!disableAutoFocus && rootRef.current && !rootRef.current.contains(doc.activeElement)) {
        if (!rootRef.current.hasAttribute('tabIndex')) {

          rootRef.current.setAttribute('tabIndex', -1);
        }

        rootRef.current.focus();
      }

      var contain = function contain() {
        if (disableEnforceFocus || !isEnabled() || ignoreNextEnforceFocus.current) {
          ignoreNextEnforceFocus.current = false;
          return;
        }

        if (rootRef.current && !rootRef.current.contains(doc.activeElement)) {
          rootRef.current.focus();
        }
      };

      var loopFocus = function loopFocus(event) {
        // 9 = Tab
        if (disableEnforceFocus || !isEnabled() || event.keyCode !== 9) {
          return;
        } // Make sure the next tab starts from the right place.


        if (doc.activeElement === rootRef.current) {
          // We need to ignore the next contain as
          // it will try to move the focus back to the rootRef element.
          ignoreNextEnforceFocus.current = true;

          if (event.shiftKey) {
            sentinelEnd.current.focus();
          } else {
            sentinelStart.current.focus();
          }
        }
      };

      doc.addEventListener('focus', contain, true);
      doc.addEventListener('keydown', loopFocus, true); // With Edge, Safari and Firefox, no focus related events are fired when the focused area stops being a focused area
      // e.g. https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
      //
      // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
      // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.

      var interval = setInterval(function () {
        contain();
      }, 50);
      return function () {
        clearInterval(interval);
        doc.removeEventListener('focus', contain, true);
        doc.removeEventListener('keydown', loopFocus, true); // restoreLastFocus()

        if (!disableRestoreFocus) {
          // In IE 11 it is possible for document.activeElement to be null resulting
          // in nodeToRestore.current being null.
          // Not all elements in IE 11 have a focus method.
          // Once IE 11 support is dropped the focus() call can be unconditional.
          if (nodeToRestore.current && nodeToRestore.current.focus) {
            nodeToRestore.current.focus();
          }

          nodeToRestore.current = null;
        }
      };
    }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open]);
    return react.createElement(react.Fragment, null, react.createElement("div", {
      tabIndex: 0,
      ref: sentinelStart,
      "data-test": "sentinelStart"
    }), react.cloneElement(children, {
      ref: handleRef
    }), react.createElement("div", {
      tabIndex: 0,
      ref: sentinelEnd,
      "data-test": "sentinelEnd"
    }));
  }

  var styles$8 = {
    /* Styles applied to the root element. */
    root: {
      zIndex: -1,
      position: 'fixed',
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      WebkitTapHighlightColor: 'transparent',
      // Disable scroll capabilities.
      touchAction: 'none'
    },

    /* Styles applied to the root element if `invisible={true}`. */
    invisible: {
      backgroundColor: 'transparent'
    }
  };
  /**
   * @ignore - internal component.
   */

  var SimpleBackdrop = react.forwardRef(function SimpleBackdrop(props, ref) {
    var _props$invisible = props.invisible,
        invisible = _props$invisible === void 0 ? false : _props$invisible,
        open = props.open,
        other = _objectWithoutProperties$2(props, ["invisible", "open"]);

    return open ? react.createElement("div", _extends$6({
      "aria-hidden": true,
      ref: ref
    }, other, {
      style: _extends$6({}, styles$8.root, {}, invisible ? styles$8.invisible : {}, {}, other.style)
    })) : null;
  });

  function getContainer$1(container) {
    container = typeof container === 'function' ? container() : container;
    return reactDom.findDOMNode(container);
  }

  function getHasTransition(props) {
    return props.children ? props.children.props.hasOwnProperty('in') : false;
  } // A modal manager used to track and manage the state of open Modals.
  // Modals don't open on the server so this won't conflict with concurrent requests.


  var defaultManager = new ModalManager();
  var styles$9 = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        position: 'fixed',
        zIndex: theme.zIndex.modal,
        right: 0,
        bottom: 0,
        top: 0,
        left: 0
      },

      /* Styles applied to the root element if the `Modal` has exited. */
      hidden: {
        visibility: 'hidden'
      }
    };
  };
  /**
   * Modal is a lower-level construct that is leveraged by the following components:
   *
   * - [Dialog](/api/dialog/)
   * - [Drawer](/api/drawer/)
   * - [Menu](/api/menu/)
   * - [Popover](/api/popover/)
   *
   * If you are creating a modal dialog, you probably want to use the [Dialog](/api/dialog/) component
   * rather than directly using Modal.
   *
   * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
   */

  var Modal = react.forwardRef(function Modal(inProps, ref) {
    var theme = useTheme();
    var props = getThemeProps({
      name: 'MuiModal',
      props: _extends$6({}, inProps),
      theme: theme
    });

    var _props$BackdropCompon = props.BackdropComponent,
        BackdropComponent = _props$BackdropCompon === void 0 ? SimpleBackdrop : _props$BackdropCompon,
        BackdropProps = props.BackdropProps,
        children = props.children,
        _props$closeAfterTran = props.closeAfterTransition,
        closeAfterTransition = _props$closeAfterTran === void 0 ? false : _props$closeAfterTran,
        container = props.container,
        _props$disableAutoFoc = props.disableAutoFocus,
        disableAutoFocus = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc,
        _props$disableBackdro = props.disableBackdropClick,
        disableBackdropClick = _props$disableBackdro === void 0 ? false : _props$disableBackdro,
        _props$disableEnforce = props.disableEnforceFocus,
        disableEnforceFocus = _props$disableEnforce === void 0 ? false : _props$disableEnforce,
        _props$disableEscapeK = props.disableEscapeKeyDown,
        disableEscapeKeyDown = _props$disableEscapeK === void 0 ? false : _props$disableEscapeK,
        _props$disablePortal = props.disablePortal,
        disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal,
        _props$disableRestore = props.disableRestoreFocus,
        disableRestoreFocus = _props$disableRestore === void 0 ? false : _props$disableRestore,
        _props$disableScrollL = props.disableScrollLock,
        disableScrollLock = _props$disableScrollL === void 0 ? false : _props$disableScrollL,
        _props$hideBackdrop = props.hideBackdrop,
        hideBackdrop = _props$hideBackdrop === void 0 ? false : _props$hideBackdrop,
        _props$keepMounted = props.keepMounted,
        keepMounted = _props$keepMounted === void 0 ? false : _props$keepMounted,
        _props$manager = props.manager,
        manager = _props$manager === void 0 ? defaultManager : _props$manager,
        onBackdropClick = props.onBackdropClick,
        onClose = props.onClose,
        onEscapeKeyDown = props.onEscapeKeyDown,
        onRendered = props.onRendered,
        open = props.open,
        other = _objectWithoutProperties$2(props, ["BackdropComponent", "BackdropProps", "children", "closeAfterTransition", "container", "disableAutoFocus", "disableBackdropClick", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onEscapeKeyDown", "onRendered", "open"]);

    var _React$useState = react.useState(true),
        exited = _React$useState[0],
        setExited = _React$useState[1];

    var modal = react.useRef({});
    var mountNodeRef = react.useRef(null);
    var modalRef = react.useRef(null);
    var handleRef = useForkRef(modalRef, ref);
    var hasTransition = getHasTransition(props);

    var getDoc = function getDoc() {
      return ownerDocument(mountNodeRef.current);
    };

    var getModal = function getModal() {
      modal.current.modalRef = modalRef.current;
      modal.current.mountNode = mountNodeRef.current;
      return modal.current;
    };

    var handleMounted = function handleMounted() {
      manager.mount(getModal(), {
        disableScrollLock: disableScrollLock
      }); // Fix a bug on Chrome where the scroll isn't initially 0.

      modalRef.current.scrollTop = 0;
    };

    var handleOpen = useEventCallback(function () {
      var resolvedContainer = getContainer$1(container) || getDoc().body;
      manager.add(getModal(), resolvedContainer); // The element was already mounted.

      if (modalRef.current) {
        handleMounted();
      }
    });
    var isTopModal = react.useCallback(function () {
      return manager.isTopModal(getModal());
    }, [manager]);
    var handlePortalRef = useEventCallback(function (node) {
      mountNodeRef.current = node;

      if (!node) {
        return;
      }

      if (onRendered) {
        onRendered();
      }

      if (open && isTopModal()) {
        handleMounted();
      } else {
        ariaHidden(modalRef.current, true);
      }
    });
    var handleClose = react.useCallback(function () {
      manager.remove(getModal());
    }, [manager]);
    react.useEffect(function () {
      return function () {
        handleClose();
      };
    }, [handleClose]);
    react.useEffect(function () {
      if (open) {
        handleOpen();
      } else if (!hasTransition || !closeAfterTransition) {
        handleClose();
      }
    }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);

    if (!keepMounted && !open && (!hasTransition || exited)) {
      return null;
    }

    var handleEnter = function handleEnter() {
      setExited(false);
    };

    var handleExited = function handleExited() {
      setExited(true);

      if (closeAfterTransition) {
        handleClose();
      }
    };

    var handleBackdropClick = function handleBackdropClick(event) {
      if (event.target !== event.currentTarget) {
        return;
      }

      if (onBackdropClick) {
        onBackdropClick(event);
      }

      if (!disableBackdropClick && onClose) {
        onClose(event, 'backdropClick');
      }
    };

    var handleKeyDown = function handleKeyDown(event) {
      // The handler doesn't take event.defaultPrevented into account:
      //
      // event.preventDefault() is meant to stop default behaviours like
      // clicking a checkbox to check it, hitting a button to submit a form,
      // and hitting left arrow to move the cursor in a text input etc.
      // Only special HTML elements have these default behaviors.
      if (event.key !== 'Escape' || !isTopModal()) {
        return;
      } // Swallow the event, in case someone is listening for the escape key on the body.


      event.stopPropagation();

      if (onEscapeKeyDown) {
        onEscapeKeyDown(event);
      }

      if (!disableEscapeKeyDown && onClose) {
        onClose(event, 'escapeKeyDown');
      }
    };

    var inlineStyle = styles$9(theme || {
      zIndex: zIndex
    });
    var childProps = {};

    if (children.props.tabIndex === undefined) {
      childProps.tabIndex = children.props.tabIndex || '-1';
    } // It's a Transition like component


    if (hasTransition) {
      childProps.onEnter = createChainedFunction(handleEnter, children.props.onEnter);
      childProps.onExited = createChainedFunction(handleExited, children.props.onExited);
    }

    return react.createElement(Portal, {
      ref: handlePortalRef,
      container: container,
      disablePortal: disablePortal
    }, react.createElement("div", _extends$6({
      ref: handleRef,
      onKeyDown: handleKeyDown,
      role: "presentation"
    }, other, {
      style: _extends$6({}, inlineStyle.root, {}, !open && exited ? inlineStyle.hidden : {}, {}, other.style)
    }), hideBackdrop ? null : react.createElement(BackdropComponent, _extends$6({
      open: open,
      onClick: handleBackdropClick
    }, BackdropProps)), react.createElement(TrapFocus, {
      disableEnforceFocus: disableEnforceFocus,
      disableAutoFocus: disableAutoFocus,
      disableRestoreFocus: disableRestoreFocus,
      getDoc: getDoc,
      isEnabled: isTopModal,
      open: open
    }, react.cloneElement(children, childProps))));
  });

  // Corresponds to 10 frames at 60 Hz.
  // A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
  function debounce(func) {
    var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 166;
    var timeout;

    function debounced() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      // eslint-disable-next-line consistent-this
      var that = this;

      var later = function later() {
        func.apply(that, args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    }

    debounced.clear = function () {
      clearTimeout(timeout);
    };

    return debounced;
  }

  function formControlState(_ref) {
    var props = _ref.props,
        states = _ref.states,
        muiFormControl = _ref.muiFormControl;
    return states.reduce(function (acc, state) {
      acc[state] = props[state];

      if (muiFormControl) {
        if (typeof props[state] === 'undefined') {
          acc[state] = muiFormControl[state];
        }
      }

      return acc;
    }, {});
  }

  function getStyleValue(computedStyle, property) {
    return parseInt(computedStyle[property], 10) || 0;
  }

  var useEnhancedEffect$4 = typeof window !== 'undefined' ? react.useLayoutEffect : react.useEffect;
  var styles$a = {
    /* Styles applied to the shadow textarea element. */
    shadow: {
      // Visibility needed to hide the extra text area on iPads
      visibility: 'hidden',
      // Remove from the content flow
      position: 'absolute',
      // Ignore the scrollbar width
      overflow: 'hidden',
      height: 0,
      top: 0,
      left: 0,
      // Create a new layer, increase the isolation of the computed values
      transform: 'translateZ(0)'
    }
  };
  var TextareaAutosize = react.forwardRef(function TextareaAutosize(props, ref) {
    var onChange = props.onChange,
        rows = props.rows,
        rowsMax = props.rowsMax,
        _props$rowsMin = props.rowsMin,
        rowsMinProp = _props$rowsMin === void 0 ? 1 : _props$rowsMin,
        style = props.style,
        value = props.value,
        other = _objectWithoutProperties$2(props, ["onChange", "rows", "rowsMax", "rowsMin", "style", "value"]);

    var rowsMin = rows || rowsMinProp;

    var _React$useRef = react.useRef(value != null),
        isControlled = _React$useRef.current;

    var inputRef = react.useRef(null);
    var handleRef = useForkRef(ref, inputRef);
    var shadowRef = react.useRef(null);

    var _React$useState = react.useState({}),
        state = _React$useState[0],
        setState = _React$useState[1];

    var syncHeight = react.useCallback(function () {
      var input = inputRef.current;
      var computedStyle = window.getComputedStyle(input);
      var inputShallow = shadowRef.current;
      inputShallow.style.width = computedStyle.width;
      inputShallow.value = input.value || props.placeholder || 'x';
      var boxSizing = computedStyle['box-sizing'];
      var padding = getStyleValue(computedStyle, 'padding-bottom') + getStyleValue(computedStyle, 'padding-top');
      var border = getStyleValue(computedStyle, 'border-bottom-width') + getStyleValue(computedStyle, 'border-top-width'); // The height of the inner content

      var innerHeight = inputShallow.scrollHeight - padding; // Measure height of a textarea with a single row

      inputShallow.value = 'x';
      var singleRowHeight = inputShallow.scrollHeight - padding; // The height of the outer content

      var outerHeight = innerHeight;

      if (rowsMin) {
        outerHeight = Math.max(Number(rowsMin) * singleRowHeight, outerHeight);
      }

      if (rowsMax) {
        outerHeight = Math.min(Number(rowsMax) * singleRowHeight, outerHeight);
      }

      outerHeight = Math.max(outerHeight, singleRowHeight); // Take the box sizing into account for applying this value as a style.

      var outerHeightStyle = outerHeight + (boxSizing === 'border-box' ? padding + border : 0);
      var overflow = Math.abs(outerHeight - innerHeight) <= 1;
      setState(function (prevState) {
        // Need a large enough different to update the height.
        // This prevents infinite rendering loop.
        if (outerHeightStyle > 0 && Math.abs((prevState.outerHeightStyle || 0) - outerHeightStyle) > 1 || prevState.overflow !== overflow) {
          return {
            overflow: overflow,
            outerHeightStyle: outerHeightStyle
          };
        }

        return prevState;
      });
    }, [rowsMax, rowsMin, props.placeholder]);
    react.useEffect(function () {
      var handleResize = debounce(function () {
        syncHeight();
      });
      window.addEventListener('resize', handleResize);
      return function () {
        handleResize.clear();
        window.removeEventListener('resize', handleResize);
      };
    }, [syncHeight]);
    useEnhancedEffect$4(function () {
      syncHeight();
    });

    var handleChange = function handleChange(event) {
      if (!isControlled) {
        syncHeight();
      }

      if (onChange) {
        onChange(event);
      }
    };

    return react.createElement(react.Fragment, null, react.createElement("textarea", _extends$6({
      value: value,
      onChange: handleChange,
      ref: handleRef // Apply the rows prop to get a "correct" first SSR paint
      ,
      rows: rowsMin,
      style: _extends$6({
        height: state.outerHeightStyle,
        // Need a large enough different to allow scrolling.
        // This prevents infinite rendering loop.
        overflow: state.overflow ? 'hidden' : null
      }, style)
    }, other)), react.createElement("textarea", {
      "aria-hidden": true,
      className: props.className,
      readOnly: true,
      ref: shadowRef,
      tabIndex: -1,
      style: _extends$6({}, styles$a.shadow, {}, style)
    }));
  });

  // Supports determination of isControlled().
  // Controlled input accepts its current value as a prop.
  //
  // @see https://facebook.github.io/react/docs/forms.html#controlled-components
  // @param value
  // @returns {boolean} true if string (including '') or number (including zero)
  function hasValue(value) {
    return value != null && !(Array.isArray(value) && value.length === 0);
  } // Determine if field is empty or filled.
  // Response determines if label is presented above field or as placeholder.
  //
  // @param obj
  // @param SSR
  // @returns {boolean} False when not present or empty string.
  //                    True when any number or string with length.

  function isFilled(obj) {
    var SSR = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return obj && (hasValue(obj.value) && obj.value !== '' || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== '');
  } // Determine if an Input is adorned on start.

  var styles$b = function styles(theme) {
    var light = theme.palette.type === 'light';
    var placeholder = {
      color: 'currentColor',
      opacity: light ? 0.42 : 0.5,
      transition: theme.transitions.create('opacity', {
        duration: theme.transitions.duration.shorter
      })
    };
    var placeholderHidden = {
      opacity: '0 !important'
    };
    var placeholderVisible = {
      opacity: light ? 0.42 : 0.5
    };
    return {
      /* Styles applied to the root element. */
      root: {
        // Mimics the default input display property used by browsers for an input.
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.text.primary,
        fontSize: theme.typography.pxToRem(16),
        lineHeight: '1.1875em',
        // Reset (19px), match the native input line-height
        boxSizing: 'border-box',
        // Prevent padding issue with fullWidth.
        position: 'relative',
        cursor: 'text',
        display: 'inline-flex',
        alignItems: 'center',
        '&$disabled': {
          color: theme.palette.text.disabled,
          cursor: 'default'
        }
      },

      /* Styles applied to the root element if the component is a descendant of `FormControl`. */
      formControl: {},

      /* Styles applied to the root element if the component is focused. */
      focused: {},

      /* Styles applied to the root element if `disabled={true}`. */
      disabled: {},

      /* Styles applied to the root element if `startAdornment` is provided. */
      adornedStart: {},

      /* Styles applied to the root element if `endAdornment` is provided. */
      adornedEnd: {},

      /* Styles applied to the root element if `error={true}`. */
      error: {},

      /* Styles applied to the `input` element if `margin="dense"`. */
      marginDense: {},

      /* Styles applied to the root element if `multiline={true}`. */
      multiline: {
        padding: "".concat(8 - 2, "px 0 ").concat(8 - 1, "px"),
        '&$marginDense': {
          paddingTop: 4 - 1
        }
      },

      /* Styles applied to the root element if the color is secondary. */
      colorSecondary: {},

      /* Styles applied to the root element if `fullWidth={true}`. */
      fullWidth: {
        width: '100%'
      },

      /* Styles applied to the `input` element. */
      input: {
        font: 'inherit',
        color: 'currentColor',
        padding: "".concat(8 - 2, "px 0 ").concat(8 - 1, "px"),
        border: 0,
        boxSizing: 'content-box',
        background: 'none',
        height: '1.1875em',
        // Reset (19px), match the native input line-height
        margin: 0,
        // Reset for Safari
        WebkitTapHighlightColor: 'transparent',
        display: 'block',
        // Make the flex item shrink with Firefox
        minWidth: 0,
        width: '100%',
        // Fix IE 11 width issue
        animationName: '$auto-fill-cancel',
        '&::-webkit-input-placeholder': placeholder,
        '&::-moz-placeholder': placeholder,
        // Firefox 19+
        '&:-ms-input-placeholder': placeholder,
        // IE 11
        '&::-ms-input-placeholder': placeholder,
        // Edge
        '&:focus': {
          outline: 0
        },
        // Reset Firefox invalid required input style
        '&:invalid': {
          boxShadow: 'none'
        },
        '&::-webkit-search-decoration': {
          // Remove the padding when type=search.
          '-webkit-appearance': 'none'
        },
        // Show and hide the placeholder logic
        'label[data-shrink=false] + $formControl &': {
          '&::-webkit-input-placeholder': placeholderHidden,
          '&::-moz-placeholder': placeholderHidden,
          // Firefox 19+
          '&:-ms-input-placeholder': placeholderHidden,
          // IE 11
          '&::-ms-input-placeholder': placeholderHidden,
          // Edge
          '&:focus::-webkit-input-placeholder': placeholderVisible,
          '&:focus::-moz-placeholder': placeholderVisible,
          // Firefox 19+
          '&:focus:-ms-input-placeholder': placeholderVisible,
          // IE 11
          '&:focus::-ms-input-placeholder': placeholderVisible // Edge

        },
        '&$disabled': {
          opacity: 1 // Reset iOS opacity

        },
        '&:-webkit-autofill': {
          animationDuration: '5000s',
          animationName: '$auto-fill'
        }
      },
      '@keyframes auto-fill': {
        from: {}
      },
      '@keyframes auto-fill-cancel': {
        from: {}
      },

      /* Styles applied to the `input` element if `margin="dense"`. */
      inputMarginDense: {
        paddingTop: 4 - 1
      },

      /* Styles applied to the `input` element if `multiline={true}`. */
      inputMultiline: {
        height: 'auto',
        resize: 'none',
        padding: 0
      },

      /* Styles applied to the `input` element if `type="search"`. */
      inputTypeSearch: {
        // Improve type search style.
        '-moz-appearance': 'textfield',
        '-webkit-appearance': 'textfield'
      },

      /* Styles applied to the `input` element if `startAdornment` is provided. */
      inputAdornedStart: {},

      /* Styles applied to the `input` element if `endAdornment` is provided. */
      inputAdornedEnd: {},

      /* Styles applied to the `input` element if `hiddenLabel={true}`. */
      inputHiddenLabel: {}
    };
  };
  var useEnhancedEffect$5 = typeof window === 'undefined' ? react.useEffect : react.useLayoutEffect;
  /**
   * `InputBase` contains as few styles as possible.
   * It aims to be a simple building block for creating an input.
   * It contains a load of style reset and some state logic.
   */

  var InputBase = react.forwardRef(function InputBase(props, ref) {
    var ariaDescribedby = props['aria-describedby'],
        autoComplete = props.autoComplete,
        autoFocus = props.autoFocus,
        classes = props.classes,
        className = props.className,
        color = props.color,
        defaultValue = props.defaultValue,
        disabled = props.disabled,
        endAdornment = props.endAdornment,
        error = props.error,
        _props$fullWidth = props.fullWidth,
        fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
        id = props.id,
        _props$inputComponent = props.inputComponent,
        inputComponent = _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
        _props$inputProps = props.inputProps,
        inputPropsProp = _props$inputProps === void 0 ? {} : _props$inputProps,
        inputRefProp = props.inputRef,
        margin = props.margin,
        _props$multiline = props.multiline,
        multiline = _props$multiline === void 0 ? false : _props$multiline,
        name = props.name,
        onBlur = props.onBlur,
        onChange = props.onChange,
        onClick = props.onClick,
        onFocus = props.onFocus,
        onKeyDown = props.onKeyDown,
        onKeyUp = props.onKeyUp,
        placeholder = props.placeholder,
        readOnly = props.readOnly,
        renderSuffix = props.renderSuffix,
        rows = props.rows,
        rowsMax = props.rowsMax,
        rowsMin = props.rowsMin,
        startAdornment = props.startAdornment,
        _props$type = props.type,
        type = _props$type === void 0 ? 'text' : _props$type,
        valueProp = props.value,
        other = _objectWithoutProperties$2(props, ["aria-describedby", "autoComplete", "autoFocus", "classes", "className", "color", "defaultValue", "disabled", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "rowsMax", "rowsMin", "startAdornment", "type", "value"]);

    var value = inputPropsProp.value != null ? inputPropsProp.value : valueProp;

    var _React$useRef = react.useRef(value != null),
        isControlled = _React$useRef.current;

    var inputRef = react.useRef();
    var handleInputRefWarning = react.useCallback(function (instance) {
    }, []);
    var handleInputPropsRefProp = useForkRef(inputPropsProp.ref, handleInputRefWarning);
    var handleInputRefProp = useForkRef(inputRefProp, handleInputPropsRefProp);
    var handleInputRef = useForkRef(inputRef, handleInputRefProp);

    var _React$useState = react.useState(false),
        focused = _React$useState[0],
        setFocused = _React$useState[1];

    var muiFormControl = useFormControl();

    var fcs = formControlState({
      props: props,
      muiFormControl: muiFormControl,
      states: ['color', 'disabled', 'error', 'hiddenLabel', 'margin', 'required', 'filled']
    });
    fcs.focused = muiFormControl ? muiFormControl.focused : focused; // The blur won't fire when the disabled state is set on a focused input.
    // We need to book keep the focused state manually.

    react.useEffect(function () {
      if (!muiFormControl && disabled && focused) {
        setFocused(false);

        if (onBlur) {
          onBlur();
        }
      }
    }, [muiFormControl, disabled, focused, onBlur]);
    var onFilled = muiFormControl && muiFormControl.onFilled;
    var onEmpty = muiFormControl && muiFormControl.onEmpty;
    var checkDirty = react.useCallback(function (obj) {
      if (isFilled(obj)) {
        if (onFilled) {
          onFilled();
        }
      } else if (onEmpty) {
        onEmpty();
      }
    }, [onFilled, onEmpty]);
    useEnhancedEffect$5(function () {
      if (isControlled) {
        checkDirty({
          value: value
        });
      }
    }, [value, checkDirty, isControlled]);

    var handleFocus = function handleFocus(event) {
      // Fix a bug with IE 11 where the focus/blur events are triggered
      // while the input is disabled.
      if (fcs.disabled) {
        event.stopPropagation();
        return;
      }

      if (onFocus) {
        onFocus(event);
      }

      if (inputPropsProp.onFocus) {
        inputPropsProp.onFocus(event);
      }

      if (muiFormControl && muiFormControl.onFocus) {
        muiFormControl.onFocus(event);
      } else {
        setFocused(true);
      }
    };

    var handleBlur = function handleBlur(event) {
      if (onBlur) {
        onBlur(event);
      }

      if (inputPropsProp.onBlur) {
        inputPropsProp.onBlur(event);
      }

      if (muiFormControl && muiFormControl.onBlur) {
        muiFormControl.onBlur(event);
      } else {
        setFocused(false);
      }
    };

    var handleChange = function handleChange(event) {
      if (!isControlled) {
        var element = event.target || inputRef.current;

        if (element == null) {
          throw new TypeError('Material-UI: Expected valid input target. ' + 'Did you use a custom `inputComponent` and forget to forward refs? ' + 'See https://material-ui.com/r/input-component-ref-interface for more info.');
        }

        checkDirty({
          value: element.value
        });
      }

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (inputPropsProp.onChange) {
        inputPropsProp.onChange.apply(inputPropsProp, [event].concat(args));
      } // Perform in the willUpdate


      if (onChange) {
        onChange.apply(void 0, [event].concat(args));
      }
    }; // Check the input state on mount, in case it was filled by the user
    // or auto filled by the browser before the hydration (for SSR).


    react.useEffect(function () {
      checkDirty(inputRef.current);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    var handleClick = function handleClick(event) {
      if (inputRef.current && event.currentTarget === event.target) {
        inputRef.current.focus();
      }

      if (onClick) {
        onClick(event);
      }
    };

    var InputComponent = inputComponent;

    var inputProps = _extends$6({}, inputPropsProp, {
      ref: handleInputRef
    });

    if (typeof InputComponent !== 'string') {
      inputProps = _extends$6({
        // Rename ref to inputRef as we don't know the
        // provided `inputComponent` structure.
        inputRef: handleInputRef,
        type: type
      }, inputProps, {
        ref: null
      });
    } else if (multiline) {
      if (rows && !rowsMax && !rowsMin) {
        InputComponent = 'textarea';
      } else {
        inputProps = _extends$6({
          rows: rows,
          rowsMax: rowsMax
        }, inputProps);
        InputComponent = TextareaAutosize;
      }
    } else {
      inputProps = _extends$6({
        type: type
      }, inputProps);
    }

    var handleAutoFill = function handleAutoFill(event) {
      // Provide a fake value as Chrome might not let you access it for security reasons.
      checkDirty(event.animationName.indexOf('auto-fill-cancel') !== -1 ? inputRef.current : {
        value: 'x'
      });
    };

    react.useEffect(function () {
      if (muiFormControl) {
        muiFormControl.setAdornedStart(Boolean(startAdornment));
      }
    }, [muiFormControl, startAdornment]);
    return react.createElement("div", _extends$6({
      className: clsx(classes.root, classes["color".concat(capitalize(fcs.color || 'primary'))], className, fcs.disabled && classes.disabled, fcs.error && classes.error, fullWidth && classes.fullWidth, fcs.focused && classes.focused, muiFormControl && classes.formControl, multiline && classes.multiline, startAdornment && classes.adornedStart, endAdornment && classes.adornedEnd, {
        dense: classes.marginDense
      }[fcs.margin]),
      onClick: handleClick,
      ref: ref
    }, other), startAdornment, react.createElement(FormControlContext.Provider, {
      value: null
    }, react.createElement(InputComponent, _extends$6({
      "aria-invalid": fcs.error,
      "aria-describedby": ariaDescribedby,
      autoComplete: autoComplete,
      autoFocus: autoFocus,
      defaultValue: defaultValue,
      disabled: fcs.disabled,
      id: id,
      onAnimationStart: handleAutoFill,
      name: name,
      placeholder: placeholder,
      readOnly: readOnly,
      required: fcs.required,
      rows: rows,
      value: value,
      onKeyDown: onKeyDown,
      onKeyUp: onKeyUp
    }, inputProps, {
      className: clsx(classes.input, inputPropsProp.className, fcs.disabled && classes.disabled, multiline && classes.inputMultiline, fcs.hiddenLabel && classes.inputHiddenLabel, startAdornment && classes.inputAdornedStart, endAdornment && classes.inputAdornedEnd, {
        search: classes.inputTypeSearch
      }[type], {
        dense: classes.inputMarginDense
      }[fcs.margin]),
      onBlur: handleBlur,
      onChange: handleChange,
      onFocus: handleFocus
    }))), endAdornment, renderSuffix ? renderSuffix(_extends$6({}, fcs, {
      startAdornment: startAdornment
    })) : null);
  });
  var InputBase$1 = withStyles$1(styles$b, {
    name: 'MuiInputBase'
  })(InputBase);

  function isMuiElement(element, muiNames) {
    return react.isValidElement(element) && muiNames.indexOf(element.type.muiName) !== -1;
  }

  var SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var GRID_SIZES = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  function generateGrid(globalStyles, theme, breakpoint) {
    var styles = {};
    GRID_SIZES.forEach(function (size) {
      var key = "grid-".concat(breakpoint, "-").concat(size);

      if (size === true) {
        // For the auto layouting
        styles[key] = {
          flexBasis: 0,
          flexGrow: 1,
          maxWidth: '100%'
        };
        return;
      }

      if (size === 'auto') {
        styles[key] = {
          flexBasis: 'auto',
          flexGrow: 0,
          maxWidth: 'none'
        };
        return;
      } // Keep 7 significant numbers.


      var width = "".concat(Math.round(size / 12 * 10e7) / 10e5, "%"); // Close to the bootstrap implementation:
      // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41

      styles[key] = {
        flexBasis: width,
        flexGrow: 0,
        maxWidth: width
      };
    }); // No need for a media query for the first size.

    if (breakpoint === 'xs') {
      _extends$6(globalStyles, styles);
    } else {
      globalStyles[theme.breakpoints.up(breakpoint)] = styles;
    }
  }

  function getOffset(val) {
    var div = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var parse = parseFloat(val);
    return "".concat(parse / div).concat(String(val).replace(String(parse), '') || 'px');
  }

  function generateGutter(theme, breakpoint) {
    var styles = {};
    SPACINGS.forEach(function (spacing) {
      var themeSpacing = theme.spacing(spacing);

      if (themeSpacing === 0) {
        return;
      }

      styles["spacing-".concat(breakpoint, "-").concat(spacing)] = {
        margin: "-".concat(getOffset(themeSpacing, 2)),
        width: "calc(100% + ".concat(getOffset(themeSpacing), ")"),
        '& > $item': {
          padding: getOffset(themeSpacing, 2)
        }
      };
    });
    return styles;
  } // Default CSS values
  // flex: '0 1 auto',
  // flexDirection: 'row',
  // alignItems: 'flex-start',
  // flexWrap: 'nowrap',
  // justifyContent: 'flex-start',


  var styles$c = function styles(theme) {
    return _extends$6({
      /* Styles applied to the root element */
      root: {},

      /* Styles applied to the root element if `container={true}`. */
      container: {
        boxSizing: 'border-box',
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%'
      },

      /* Styles applied to the root element if `item={true}`. */
      item: {
        boxSizing: 'border-box',
        margin: '0' // For instance, it's useful when used with a `figure` element.

      },

      /* Styles applied to the root element if `zeroMinWidth={true}`. */
      zeroMinWidth: {
        minWidth: 0
      },

      /* Styles applied to the root element if `direction="column"`. */
      'direction-xs-column': {
        flexDirection: 'column'
      },

      /* Styles applied to the root element if `direction="column-reverse"`. */
      'direction-xs-column-reverse': {
        flexDirection: 'column-reverse'
      },

      /* Styles applied to the root element if `direction="rwo-reverse"`. */
      'direction-xs-row-reverse': {
        flexDirection: 'row-reverse'
      },

      /* Styles applied to the root element if `wrap="nowrap"`. */
      'wrap-xs-nowrap': {
        flexWrap: 'nowrap'
      },

      /* Styles applied to the root element if `wrap="reverse"`. */
      'wrap-xs-wrap-reverse': {
        flexWrap: 'wrap-reverse'
      },

      /* Styles applied to the root element if `alignItems="center"`. */
      'align-items-xs-center': {
        alignItems: 'center'
      },

      /* Styles applied to the root element if `alignItems="flex-start"`. */
      'align-items-xs-flex-start': {
        alignItems: 'flex-start'
      },

      /* Styles applied to the root element if `alignItems="flex-end"`. */
      'align-items-xs-flex-end': {
        alignItems: 'flex-end'
      },

      /* Styles applied to the root element if `alignItems="baseline"`. */
      'align-items-xs-baseline': {
        alignItems: 'baseline'
      },

      /* Styles applied to the root element if `alignContent="center"`. */
      'align-content-xs-center': {
        alignContent: 'center'
      },

      /* Styles applied to the root element if `alignContent="flex-start"`. */
      'align-content-xs-flex-start': {
        alignContent: 'flex-start'
      },

      /* Styles applied to the root element if `alignContent="flex-end"`. */
      'align-content-xs-flex-end': {
        alignContent: 'flex-end'
      },

      /* Styles applied to the root element if `alignContent="space-between"`. */
      'align-content-xs-space-between': {
        alignContent: 'space-between'
      },

      /* Styles applied to the root element if `alignContent="space-around"`. */
      'align-content-xs-space-around': {
        alignContent: 'space-around'
      },

      /* Styles applied to the root element if `justify="center"`. */
      'justify-xs-center': {
        justifyContent: 'center'
      },

      /* Styles applied to the root element if `justify="flex-end"`. */
      'justify-xs-flex-end': {
        justifyContent: 'flex-end'
      },

      /* Styles applied to the root element if `justify="space-between"`. */
      'justify-xs-space-between': {
        justifyContent: 'space-between'
      },

      /* Styles applied to the root element if `justify="space-around"`. */
      'justify-xs-space-around': {
        justifyContent: 'space-around'
      },

      /* Styles applied to the root element if `justify="space-evenly"`. */
      'justify-xs-space-evenly': {
        justifyContent: 'space-evenly'
      }
    }, generateGutter(theme, 'xs'), {}, theme.breakpoints.keys.reduce(function (accumulator, key) {
      // Use side effect over immutability for better performance.
      generateGrid(accumulator, theme, key);
      return accumulator;
    }, {}));
  };
  var Grid = react.forwardRef(function Grid(props, ref) {
    var _props$alignContent = props.alignContent,
        alignContent = _props$alignContent === void 0 ? 'stretch' : _props$alignContent,
        _props$alignItems = props.alignItems,
        alignItems = _props$alignItems === void 0 ? 'stretch' : _props$alignItems,
        classes = props.classes,
        classNameProp = props.className,
        _props$component = props.component,
        Component = _props$component === void 0 ? 'div' : _props$component,
        _props$container = props.container,
        container = _props$container === void 0 ? false : _props$container,
        _props$direction = props.direction,
        direction = _props$direction === void 0 ? 'row' : _props$direction,
        _props$item = props.item,
        item = _props$item === void 0 ? false : _props$item,
        _props$justify = props.justify,
        justify = _props$justify === void 0 ? 'flex-start' : _props$justify,
        _props$lg = props.lg,
        lg = _props$lg === void 0 ? false : _props$lg,
        _props$md = props.md,
        md = _props$md === void 0 ? false : _props$md,
        _props$sm = props.sm,
        sm = _props$sm === void 0 ? false : _props$sm,
        _props$spacing = props.spacing,
        spacing = _props$spacing === void 0 ? 0 : _props$spacing,
        _props$wrap = props.wrap,
        wrap = _props$wrap === void 0 ? 'wrap' : _props$wrap,
        _props$xl = props.xl,
        xl = _props$xl === void 0 ? false : _props$xl,
        _props$xs = props.xs,
        xs = _props$xs === void 0 ? false : _props$xs,
        _props$zeroMinWidth = props.zeroMinWidth,
        zeroMinWidth = _props$zeroMinWidth === void 0 ? false : _props$zeroMinWidth,
        other = _objectWithoutProperties$2(props, ["alignContent", "alignItems", "classes", "className", "component", "container", "direction", "item", "justify", "lg", "md", "sm", "spacing", "wrap", "xl", "xs", "zeroMinWidth"]);

    var className = clsx(classes.root, classNameProp, container && [classes.container, spacing !== 0 && classes["spacing-xs-".concat(String(spacing))]], item && classes.item, zeroMinWidth && classes.zeroMinWidth, direction !== 'row' && classes["direction-xs-".concat(String(direction))], wrap !== 'wrap' && classes["wrap-xs-".concat(String(wrap))], alignItems !== 'stretch' && classes["align-items-xs-".concat(String(alignItems))], alignContent !== 'stretch' && classes["align-content-xs-".concat(String(alignContent))], justify !== 'flex-start' && classes["justify-xs-".concat(String(justify))], xs !== false && classes["grid-xs-".concat(String(xs))], sm !== false && classes["grid-sm-".concat(String(sm))], md !== false && classes["grid-md-".concat(String(md))], lg !== false && classes["grid-lg-".concat(String(lg))], xl !== false && classes["grid-xl-".concat(String(xl))]);
    return react.createElement(Component, _extends$6({
      className: className,
      ref: ref
    }, other));
  });
  var StyledGrid = withStyles$1(styles$c, {
    name: 'MuiGrid'
  })(Grid);

  function getScale(value) {
    return "scale(".concat(value, ", ").concat(Math.pow(value, 2), ")");
  }

  var styles$d = {
    entering: {
      opacity: 1,
      transform: getScale(1)
    },
    entered: {
      opacity: 1,
      transform: 'none'
    }
  };
  /**
   * The Grow transition is used by the [Tooltip](/components/tooltips/) and
   * [Popover](/components/popover/) components.
   * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
   */

  var Grow = react.forwardRef(function Grow(props, ref) {
    var children = props.children,
        inProp = props.in,
        onEnter = props.onEnter,
        onExit = props.onExit,
        style = props.style,
        _props$timeout = props.timeout,
        timeout = _props$timeout === void 0 ? 'auto' : _props$timeout,
        other = _objectWithoutProperties$2(props, ["children", "in", "onEnter", "onExit", "style", "timeout"]);

    var timer = react.useRef();
    var autoTimeout = react.useRef();
    var handleRef = useForkRef(children.ref, ref);
    var theme = useTheme$1();

    var handleEnter = function handleEnter(node, isAppearing) {
      reflow(node); // So the animation always start from the start.

      var _getTransitionProps = getTransitionProps({
        style: style,
        timeout: timeout
      }, {
        mode: 'enter'
      }),
          transitionDuration = _getTransitionProps.duration,
          delay = _getTransitionProps.delay;

      var duration;

      if (timeout === 'auto') {
        duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
        autoTimeout.current = duration;
      } else {
        duration = transitionDuration;
      }

      node.style.transition = [theme.transitions.create('opacity', {
        duration: duration,
        delay: delay
      }), theme.transitions.create('transform', {
        duration: duration * 0.666,
        delay: delay
      })].join(',');

      if (onEnter) {
        onEnter(node, isAppearing);
      }
    };

    var handleExit = function handleExit(node) {
      var _getTransitionProps2 = getTransitionProps({
        style: style,
        timeout: timeout
      }, {
        mode: 'exit'
      }),
          transitionDuration = _getTransitionProps2.duration,
          delay = _getTransitionProps2.delay;

      var duration;

      if (timeout === 'auto') {
        duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
        autoTimeout.current = duration;
      } else {
        duration = transitionDuration;
      }

      node.style.transition = [theme.transitions.create('opacity', {
        duration: duration,
        delay: delay
      }), theme.transitions.create('transform', {
        duration: duration * 0.666,
        delay: delay || duration * 0.333
      })].join(',');
      node.style.opacity = '0';
      node.style.transform = getScale(0.75);

      if (onExit) {
        onExit(node);
      }
    };

    var addEndListener = function addEndListener(_, next) {
      if (timeout === 'auto') {
        timer.current = setTimeout(next, autoTimeout.current || 0);
      }
    };

    react.useEffect(function () {
      return function () {
        clearTimeout(timer.current);
      };
    }, []);
    return react.createElement(Transition, _extends$6({
      appear: true,
      in: inProp,
      onEnter: handleEnter,
      onExit: handleExit,
      addEndListener: addEndListener,
      timeout: timeout === 'auto' ? null : timeout
    }, other), function (state, childProps) {
      return react.cloneElement(children, _extends$6({
        style: _extends$6({
          opacity: 0,
          transform: getScale(0.75),
          visibility: state === 'exited' && !inProp ? 'hidden' : undefined
        }, styles$d[state], {}, style, {}, children.props.style),
        ref: handleRef
      }, childProps));
    });
  });
  Grow.muiSupportAuto = true;

  var styles$e = {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      height: '0.01em',
      // Fix IE 11 flexbox alignment. To remove at some point.
      maxHeight: '2em',
      alignItems: 'center',
      whiteSpace: 'nowrap'
    },

    /* Styles applied to the root element if `variant="filled"`. */
    filled: {
      '&$positionStart:not($hiddenLabel)': {
        marginTop: 16
      }
    },

    /* Styles applied to the root element if `position="start"`. */
    positionStart: {
      marginRight: 8
    },

    /* Styles applied to the root element if `position="end"`. */
    positionEnd: {
      marginLeft: 8
    },

    /* Styles applied to the root element if `disablePointerEvents=true`. */
    disablePointerEvents: {
      pointerEvents: 'none'
    },

    /* Styles applied if the adornment is used inside <FormControl hiddenLabel />. */
    hiddenLabel: {},

    /* Styles applied if the adornment is used inside <FormControl margin="dense" />. */
    marginDense: {}
  };
  var InputAdornment = react.forwardRef(function InputAdornment(props, ref) {
    var children = props.children,
        classes = props.classes,
        className = props.className,
        _props$component = props.component,
        Component = _props$component === void 0 ? 'div' : _props$component,
        _props$disablePointer = props.disablePointerEvents,
        disablePointerEvents = _props$disablePointer === void 0 ? false : _props$disablePointer,
        _props$disableTypogra = props.disableTypography,
        disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
        position = props.position,
        variantProp = props.variant,
        other = _objectWithoutProperties$2(props, ["children", "classes", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"]);

    var muiFormControl = useFormControl() || {};
    var variant = variantProp;

    if (variantProp && muiFormControl.variant) ;

    if (muiFormControl && !variant) {
      variant = muiFormControl.variant;
    }

    return react.createElement(FormControlContext.Provider, {
      value: null
    }, react.createElement(Component, _extends$6({
      className: clsx(classes.root, className, disablePointerEvents && classes.disablePointerEvents, muiFormControl.hiddenLabel && classes.hiddenLabel, {
        filled: classes.filled
      }[variant], {
        start: classes.positionStart,
        end: classes.positionEnd
      }[position], {
        dense: classes.marginDense
      }[muiFormControl.margin]),
      ref: ref
    }, other), typeof children === 'string' && !disableTypography ? react.createElement(Typography$1, {
      color: "textSecondary"
    }, children) : children));
  });
  var InputAdornment$1 = withStyles$1(styles$e, {
    name: 'MuiInputAdornment'
  })(InputAdornment);

  /**
   * @ignore - internal component.
   */

  var ListContext = react.createContext({});

  var styles$f = {
    /* Styles applied to the root element. */
    root: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      position: 'relative'
    },

    /* Styles applied to the root element if `disablePadding={false}`. */
    padding: {
      paddingTop: 8,
      paddingBottom: 8
    },

    /* Styles applied to the root element if dense. */
    dense: {},

    /* Styles applied to the root element if a `subheader` is provided. */
    subheader: {
      paddingTop: 0
    }
  };
  var List = react.forwardRef(function List(props, ref) {
    var children = props.children,
        classes = props.classes,
        className = props.className,
        _props$component = props.component,
        Component = _props$component === void 0 ? 'ul' : _props$component,
        _props$dense = props.dense,
        dense = _props$dense === void 0 ? false : _props$dense,
        _props$disablePadding = props.disablePadding,
        disablePadding = _props$disablePadding === void 0 ? false : _props$disablePadding,
        subheader = props.subheader,
        other = _objectWithoutProperties$2(props, ["children", "classes", "className", "component", "dense", "disablePadding", "subheader"]);

    var context = react.useMemo(function () {
      return {
        dense: dense
      };
    }, [dense]);
    return react.createElement(ListContext.Provider, {
      value: context
    }, react.createElement(Component, _extends$6({
      className: clsx(classes.root, className, dense && classes.dense, !disablePadding && classes.padding, subheader && classes.subheader),
      ref: ref
    }, other), subheader, children));
  });
  var List$1 = withStyles$1(styles$f, {
    name: 'MuiList'
  })(List);

  var styles$g = function styles(theme) {
    return {
      /* Styles applied to the (normally root) `component` element. May be wrapped by a `container`. */
      root: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
        textDecoration: 'none',
        width: '100%',
        boxSizing: 'border-box',
        textAlign: 'left',
        paddingTop: 8,
        paddingBottom: 8,
        '&$focusVisible': {
          backgroundColor: theme.palette.action.selected
        },
        '&$selected, &$selected:hover': {
          backgroundColor: theme.palette.action.selected
        },
        '&$disabled': {
          opacity: 0.5
        }
      },

      /* Styles applied to the `container` element if `children` includes `ListItemSecondaryAction`. */
      container: {
        position: 'relative'
      },

      /* Pseudo-class applied to the `component`'s `focusVisibleClassName` prop if `button={true}`. */
      focusVisible: {},

      /* Styles applied to the `component` element if dense. */
      dense: {
        paddingTop: 4,
        paddingBottom: 4
      },

      /* Styles applied to the `component` element if `alignItems="flex-start"`. */
      alignItemsFlexStart: {
        alignItems: 'flex-start'
      },

      /* Pseudo-class applied to the inner `component` element if `disabled={true}`. */
      disabled: {},

      /* Styles applied to the inner `component` element if `divider={true}`. */
      divider: {
        borderBottom: "1px solid ".concat(theme.palette.divider),
        backgroundClip: 'padding-box'
      },

      /* Styles applied to the inner `component` element if `disableGutters={false}`. */
      gutters: {
        paddingLeft: 16,
        paddingRight: 16
      },

      /* Styles applied to the inner `component` element if `button={true}`. */
      button: {
        transition: theme.transitions.create('background-color', {
          duration: theme.transitions.duration.shortest
        }),
        '&:hover': {
          textDecoration: 'none',
          backgroundColor: theme.palette.action.hover,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },

      /* Styles applied to the `component` element if `children` includes `ListItemSecondaryAction`. */
      secondaryAction: {
        // Add some space to avoid collision as `ListItemSecondaryAction`
        // is absolutely positioned.
        paddingRight: 48
      },

      /* Pseudo-class applied to the root element if `selected={true}`. */
      selected: {}
    };
  };
  var useEnhancedEffect$6 = typeof window === 'undefined' ? react.useEffect : react.useLayoutEffect;
  /**
   * Uses an additional container component if `ListItemSecondaryAction` is the last child.
   */

  var ListItem = react.forwardRef(function ListItem(props, ref) {
    var _props$alignItems = props.alignItems,
        alignItems = _props$alignItems === void 0 ? 'center' : _props$alignItems,
        _props$autoFocus = props.autoFocus,
        autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
        _props$button = props.button,
        button = _props$button === void 0 ? false : _props$button,
        childrenProp = props.children,
        classes = props.classes,
        className = props.className,
        componentProp = props.component,
        _props$ContainerCompo = props.ContainerComponent,
        ContainerComponent = _props$ContainerCompo === void 0 ? 'li' : _props$ContainerCompo,
        _props$ContainerProps = props.ContainerProps;
    _props$ContainerProps = _props$ContainerProps === void 0 ? {} : _props$ContainerProps;

    var ContainerClassName = _props$ContainerProps.className,
        ContainerProps = _objectWithoutProperties$2(_props$ContainerProps, ["className"]),
        _props$dense = props.dense,
        dense = _props$dense === void 0 ? false : _props$dense,
        _props$disabled = props.disabled,
        disabled = _props$disabled === void 0 ? false : _props$disabled,
        _props$disableGutters = props.disableGutters,
        disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
        _props$divider = props.divider,
        divider = _props$divider === void 0 ? false : _props$divider,
        focusVisibleClassName = props.focusVisibleClassName,
        _props$selected = props.selected,
        selected = _props$selected === void 0 ? false : _props$selected,
        other = _objectWithoutProperties$2(props, ["alignItems", "autoFocus", "button", "children", "classes", "className", "component", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "divider", "focusVisibleClassName", "selected"]);

    var context = react.useContext(ListContext);
    var childContext = {
      dense: dense || context.dense || false,
      alignItems: alignItems
    };
    var listItemRef = react.useRef(null);
    useEnhancedEffect$6(function () {
      if (autoFocus) {
        if (listItemRef.current) {
          listItemRef.current.focus();
        }
      }
    }, [autoFocus]);
    var children = react.Children.toArray(childrenProp);
    var hasSecondaryAction = children.length && isMuiElement(children[children.length - 1], ['ListItemSecondaryAction']);
    var handleOwnRef = react.useCallback(function (instance) {
      // #StrictMode ready
      listItemRef.current = reactDom.findDOMNode(instance);
    }, []);
    var handleRef = useForkRef(handleOwnRef, ref);

    var componentProps = _extends$6({
      className: clsx(classes.root, className, childContext.dense && classes.dense, !disableGutters && classes.gutters, divider && classes.divider, disabled && classes.disabled, button && classes.button, alignItems !== "center" && classes.alignItemsFlexStart, hasSecondaryAction && classes.secondaryAction, selected && classes.selected),
      disabled: disabled
    }, other);

    var Component = componentProp || 'li';

    if (button) {
      componentProps.component = componentProp || 'div';
      componentProps.focusVisibleClassName = clsx(classes.focusVisible, focusVisibleClassName);
      Component = ButtonBase$1;
    }

    if (hasSecondaryAction) {
      // Use div by default.
      Component = !componentProps.component && !componentProp ? 'div' : Component; // Avoid nesting of li > li.

      if (ContainerComponent === 'li') {
        if (Component === 'li') {
          Component = 'div';
        } else if (componentProps.component === 'li') {
          componentProps.component = 'div';
        }
      }

      return react.createElement(ListContext.Provider, {
        value: childContext
      }, react.createElement(ContainerComponent, _extends$6({
        className: clsx(classes.container, ContainerClassName),
        ref: handleRef
      }, ContainerProps), react.createElement(Component, componentProps, children), children.pop()));
    }

    return react.createElement(ListContext.Provider, {
      value: childContext
    }, react.createElement(Component, _extends$6({
      ref: handleRef
    }, componentProps), children));
  });
  var ListItem$1 = withStyles$1(styles$g, {
    name: 'MuiListItem'
  })(ListItem);

  var styles$h = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        minWidth: 56,
        color: theme.palette.action.active,
        flexShrink: 0,
        display: 'inline-flex'
      },

      /* Styles applied to the root element when the parent `ListItem` uses `alignItems="flex-start"`. */
      alignItemsFlexStart: {
        marginTop: 8
      }
    };
  };
  /**
   * A simple wrapper to apply `List` styles to an `Icon` or `SvgIcon`.
   */

  var ListItemIcon = react.forwardRef(function ListItemIcon(props, ref) {
    var classes = props.classes,
        className = props.className,
        other = _objectWithoutProperties$2(props, ["classes", "className"]);

    var context = react.useContext(ListContext);
    return react.createElement("div", _extends$6({
      className: clsx(classes.root, className, context.alignItems === 'flex-start' && classes.alignItemsFlexStart),
      ref: ref
    }, other));
  });
  var ListItemIcon$1 = withStyles$1(styles$h, {
    name: 'MuiListItemIcon'
  })(ListItemIcon);

  function getOffsetTop(rect, vertical) {
    var offset = 0;

    if (typeof vertical === 'number') {
      offset = vertical;
    } else if (vertical === 'center') {
      offset = rect.height / 2;
    } else if (vertical === 'bottom') {
      offset = rect.height;
    }

    return offset;
  }
  function getOffsetLeft(rect, horizontal) {
    var offset = 0;

    if (typeof horizontal === 'number') {
      offset = horizontal;
    } else if (horizontal === 'center') {
      offset = rect.width / 2;
    } else if (horizontal === 'right') {
      offset = rect.width;
    }

    return offset;
  }

  function getTransformOriginValue(transformOrigin) {
    return [transformOrigin.horizontal, transformOrigin.vertical].map(function (n) {
      return typeof n === 'number' ? "".concat(n, "px") : n;
    }).join(' ');
  } // Sum the scrollTop between two elements.


  function getScrollParent(parent, child) {
    var element = child;
    var scrollTop = 0;

    while (element && element !== parent) {
      element = element.parentElement;
      scrollTop += element.scrollTop;
    }

    return scrollTop;
  }

  function getAnchorEl(anchorEl) {
    return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
  }

  var styles$i = {
    /* Styles applied to the root element */
    root: {},

    /* Styles applied to the `Paper` component. */
    paper: {
      position: 'absolute',
      overflowY: 'auto',
      overflowX: 'hidden',
      // So we see the popover when it's empty.
      // It's most likely on issue on userland.
      minWidth: 16,
      minHeight: 16,
      maxWidth: 'calc(100% - 32px)',
      maxHeight: 'calc(100% - 32px)',
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0
    }
  };
  var Popover = react.forwardRef(function Popover(props, ref) {
    var action = props.action,
        anchorEl = props.anchorEl,
        _props$anchorOrigin = props.anchorOrigin,
        anchorOrigin = _props$anchorOrigin === void 0 ? {
      vertical: 'top',
      horizontal: 'left'
    } : _props$anchorOrigin,
        anchorPosition = props.anchorPosition,
        _props$anchorReferenc = props.anchorReference,
        anchorReference = _props$anchorReferenc === void 0 ? 'anchorEl' : _props$anchorReferenc,
        children = props.children,
        classes = props.classes,
        className = props.className,
        containerProp = props.container,
        _props$elevation = props.elevation,
        elevation = _props$elevation === void 0 ? 8 : _props$elevation,
        getContentAnchorEl = props.getContentAnchorEl,
        _props$marginThreshol = props.marginThreshold,
        marginThreshold = _props$marginThreshol === void 0 ? 16 : _props$marginThreshol,
        onEnter = props.onEnter,
        onEntered = props.onEntered,
        onEntering = props.onEntering,
        onExit = props.onExit,
        onExited = props.onExited,
        onExiting = props.onExiting,
        open = props.open,
        _props$PaperProps = props.PaperProps,
        PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
        _props$transformOrigi = props.transformOrigin,
        transformOrigin = _props$transformOrigi === void 0 ? {
      vertical: 'top',
      horizontal: 'left'
    } : _props$transformOrigi,
        _props$TransitionComp = props.TransitionComponent,
        TransitionComponent = _props$TransitionComp === void 0 ? Grow : _props$TransitionComp,
        _props$transitionDura = props.transitionDuration,
        transitionDurationProp = _props$transitionDura === void 0 ? 'auto' : _props$transitionDura,
        _props$TransitionProp = props.TransitionProps,
        TransitionProps = _props$TransitionProp === void 0 ? {} : _props$TransitionProp,
        other = _objectWithoutProperties$2(props, ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "classes", "className", "container", "elevation", "getContentAnchorEl", "marginThreshold", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "open", "PaperProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"]);

    var paperRef = react.useRef(); // Returns the top/left offset of the position
    // to attach to on the anchor element (or body if none is provided)

    var getAnchorOffset = react.useCallback(function (contentAnchorOffset) {
      if (anchorReference === 'anchorPosition') {

        return anchorPosition;
      }

      var resolvedAnchorEl = getAnchorEl(anchorEl);
      var containerWindow = ownerWindow(resolvedAnchorEl); // If an anchor element wasn't provided, just use the parent body element of this Popover

      var anchorElement = resolvedAnchorEl instanceof containerWindow.Element ? resolvedAnchorEl : ownerDocument(paperRef.current).body;
      var anchorRect = anchorElement.getBoundingClientRect();

      var anchorVertical = contentAnchorOffset === 0 ? anchorOrigin.vertical : 'center';
      return {
        top: anchorRect.top + getOffsetTop(anchorRect, anchorVertical),
        left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
      };
    }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical, anchorPosition, anchorReference]); // Returns the vertical offset of inner content to anchor the transform on if provided

    var getContentAnchorOffset = react.useCallback(function (element) {
      var contentAnchorOffset = 0;

      if (getContentAnchorEl && anchorReference === 'anchorEl') {
        var contentAnchorEl = getContentAnchorEl(element);

        if (contentAnchorEl && element.contains(contentAnchorEl)) {
          var scrollTop = getScrollParent(element, contentAnchorEl);
          contentAnchorOffset = contentAnchorEl.offsetTop + contentAnchorEl.clientHeight / 2 - scrollTop || 0;
        } // != the default value
      }

      return contentAnchorOffset;
    }, [anchorOrigin.vertical, anchorReference, getContentAnchorEl]); // Return the base transform origin using the element
    // and taking the content anchor offset into account if in use

    var getTransformOrigin = react.useCallback(function (elemRect) {
      var contentAnchorOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return {
        vertical: getOffsetTop(elemRect, transformOrigin.vertical) + contentAnchorOffset,
        horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
      };
    }, [transformOrigin.horizontal, transformOrigin.vertical]);
    var getPositioningStyle = react.useCallback(function (element) {
      // Check if the parent has requested anchoring on an inner content node
      var contentAnchorOffset = getContentAnchorOffset(element);
      var elemRect = {
        width: element.offsetWidth,
        height: element.offsetHeight
      }; // Get the transform origin point on the element itself

      var elemTransformOrigin = getTransformOrigin(elemRect, contentAnchorOffset);

      if (anchorReference === 'none') {
        return {
          top: null,
          left: null,
          transformOrigin: getTransformOriginValue(elemTransformOrigin)
        };
      } // Get the offset of of the anchoring element


      var anchorOffset = getAnchorOffset(contentAnchorOffset); // Calculate element positioning

      var top = anchorOffset.top - elemTransformOrigin.vertical;
      var left = anchorOffset.left - elemTransformOrigin.horizontal;
      var bottom = top + elemRect.height;
      var right = left + elemRect.width; // Use the parent window of the anchorEl if provided

      var containerWindow = ownerWindow(getAnchorEl(anchorEl)); // Window thresholds taking required margin into account

      var heightThreshold = containerWindow.innerHeight - marginThreshold;
      var widthThreshold = containerWindow.innerWidth - marginThreshold; // Check if the vertical axis needs shifting

      if (top < marginThreshold) {
        var diff = top - marginThreshold;
        top -= diff;
        elemTransformOrigin.vertical += diff;
      } else if (bottom > heightThreshold) {
        var _diff = bottom - heightThreshold;

        top -= _diff;
        elemTransformOrigin.vertical += _diff;
      }


      if (left < marginThreshold) {
        var _diff2 = left - marginThreshold;

        left -= _diff2;
        elemTransformOrigin.horizontal += _diff2;
      } else if (right > widthThreshold) {
        var _diff3 = right - widthThreshold;

        left -= _diff3;
        elemTransformOrigin.horizontal += _diff3;
      }

      return {
        top: "".concat(Math.round(top), "px"),
        left: "".concat(Math.round(left), "px"),
        transformOrigin: getTransformOriginValue(elemTransformOrigin)
      };
    }, [anchorEl, anchorReference, getAnchorOffset, getContentAnchorOffset, getTransformOrigin, marginThreshold]);
    var setPositioningStyles = react.useCallback(function () {
      var element = paperRef.current;

      if (!element) {
        return;
      }

      var positioning = getPositioningStyle(element);

      if (positioning.top !== null) {
        element.style.top = positioning.top;
      }

      if (positioning.left !== null) {
        element.style.left = positioning.left;
      }

      element.style.transformOrigin = positioning.transformOrigin;
    }, [getPositioningStyle]);

    var handleEntering = function handleEntering(element, isAppearing) {
      if (onEntering) {
        onEntering(element, isAppearing);
      }

      setPositioningStyles();
    };

    var handlePaperRef = react.useCallback(function (instance) {
      // #StrictMode ready
      paperRef.current = reactDom.findDOMNode(instance);
    }, []);
    react.useEffect(function () {
      if (open) {
        setPositioningStyles();
      }
    });
    react.useImperativeHandle(action, function () {
      return open ? {
        updatePosition: function updatePosition() {
          setPositioningStyles();
        }
      } : null;
    }, [open, setPositioningStyles]);
    react.useEffect(function () {
      if (!open) {
        return undefined;
      }

      var handleResize = debounce(function () {
        setPositioningStyles();
      });
      window.addEventListener('resize', handleResize);
      return function () {
        handleResize.clear();
        window.removeEventListener('rezise', handleResize);
      };
    }, [open, setPositioningStyles]);
    var transitionDuration = transitionDurationProp;

    if (transitionDurationProp === 'auto' && !TransitionComponent.muiSupportAuto) {
      transitionDuration = undefined;
    } // If the container prop is provided, use that
    // If the anchorEl prop is provided, use its parent body element as the container
    // If neither are provided let the Modal take care of choosing the container


    var container = containerProp || (anchorEl ? ownerDocument(getAnchorEl(anchorEl)).body : undefined);
    return react.createElement(Modal, _extends$6({
      container: container,
      open: open,
      ref: ref,
      BackdropProps: {
        invisible: true
      },
      className: clsx(classes.root, className)
    }, other), react.createElement(TransitionComponent, _extends$6({
      appear: true,
      in: open,
      onEnter: onEnter,
      onEntered: onEntered,
      onExit: onExit,
      onExited: onExited,
      onExiting: onExiting,
      timeout: transitionDuration
    }, TransitionProps, {
      onEntering: createChainedFunction(handleEntering, TransitionProps.onEntering)
    }), react.createElement(Paper$1, _extends$6({
      elevation: elevation,
      ref: handlePaperRef
    }, PaperProps, {
      className: clsx(classes.paper, PaperProps.className)
    }), children)));
  });
  var Popover$1 = withStyles$1(styles$i, {
    name: 'MuiPopover'
  })(Popover);

  function nextItem(list, item, disableListWrap) {
    if (list === item) {
      return list.firstChild;
    }

    if (item && item.nextElementSibling) {
      return item.nextElementSibling;
    }

    return disableListWrap ? null : list.firstChild;
  }

  function previousItem(list, item, disableListWrap) {
    if (list === item) {
      return disableListWrap ? list.firstChild : list.lastChild;
    }

    if (item && item.previousElementSibling) {
      return item.previousElementSibling;
    }

    return disableListWrap ? null : list.lastChild;
  }

  function textCriteriaMatches(nextFocus, textCriteria) {
    if (textCriteria === undefined) {
      return true;
    }

    var text = nextFocus.innerText;

    if (text === undefined) {
      // jsdom doesn't support innerText
      text = nextFocus.textContent;
    }

    text = text.trim().toLowerCase();

    if (text.length === 0) {
      return false;
    }

    if (textCriteria.repeating) {
      return text[0] === textCriteria.keys[0];
    }

    return text.indexOf(textCriteria.keys.join('')) === 0;
  }

  function moveFocus(list, currentFocus, disableListWrap, traversalFunction, textCriteria) {
    var wrappedOnce = false;
    var nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : false);

    while (nextFocus) {
      // Prevent infinite loop.
      if (nextFocus === list.firstChild) {
        if (wrappedOnce) {
          return false;
        }

        wrappedOnce = true;
      } // Move to the next element.


      if (!nextFocus.hasAttribute('tabindex') || nextFocus.disabled || nextFocus.getAttribute('aria-disabled') === 'true' || !textCriteriaMatches(nextFocus, textCriteria)) {
        nextFocus = traversalFunction(list, nextFocus, disableListWrap);
      } else {
        nextFocus.focus();
        return true;
      }
    }

    return false;
  }

  var useEnhancedEffect$7 = typeof window === 'undefined' ? react.useEffect : react.useLayoutEffect;
  /**
   * A permanently displayed menu following https://www.w3.org/TR/wai-aria-practices/#menubutton
   * It's exposed to help customization of the [`Menu`](/api/menu/) component. If you
   * use it separately you need to move focus into the component manually. Once
   * the focus is placed inside the component it is fully keyboard accessible.
   */

  var MenuList = react.forwardRef(function MenuList(props, ref) {
    var actions = props.actions,
        _props$autoFocus = props.autoFocus,
        autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
        _props$autoFocusItem = props.autoFocusItem,
        autoFocusItem = _props$autoFocusItem === void 0 ? false : _props$autoFocusItem,
        children = props.children,
        className = props.className,
        onKeyDown = props.onKeyDown,
        _props$disableListWra = props.disableListWrap,
        disableListWrap = _props$disableListWra === void 0 ? false : _props$disableListWra,
        _props$variant = props.variant,
        variant = _props$variant === void 0 ? 'selectedMenu' : _props$variant,
        other = _objectWithoutProperties$2(props, ["actions", "autoFocus", "autoFocusItem", "children", "className", "onKeyDown", "disableListWrap", "variant"]);

    var listRef = react.useRef(null);
    var textCriteriaRef = react.useRef({
      keys: [],
      repeating: true,
      previousKeyMatched: true,
      lastTime: null
    });
    useEnhancedEffect$7(function () {
      if (autoFocus) {
        listRef.current.focus();
      }
    }, [autoFocus]);
    react.useImperativeHandle(actions, function () {
      return {
        adjustStyleForScrollbar: function adjustStyleForScrollbar(containerElement, theme) {
          // Let's ignore that piece of logic if users are already overriding the width
          // of the menu.
          var noExplicitWidth = !listRef.current.style.width;

          if (containerElement.clientHeight < listRef.current.clientHeight && noExplicitWidth) {
            var scrollbarSize = "".concat(getScrollbarSize(), "px");
            listRef.current.style[theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight'] = scrollbarSize;
            listRef.current.style.width = "calc(100% + ".concat(scrollbarSize, ")");
          }

          return listRef.current;
        }
      };
    }, []);

    var handleKeyDown = function handleKeyDown(event) {
      var list = listRef.current;
      var key = event.key;
      /**
       * @type {Element} - will always be defined since we are in a keydown handler
       * attached to an element. A keydown event is either dispatched to the activeElement
       * or document.body or document.documentElement. Only the first case will
       * trigger this specific handler.
       */

      var currentFocus = ownerDocument(list).activeElement;

      if (key === 'ArrowDown') {
        // Prevent scroll of the page
        event.preventDefault();
        moveFocus(list, currentFocus, disableListWrap, nextItem);
      } else if (key === 'ArrowUp') {
        event.preventDefault();
        moveFocus(list, currentFocus, disableListWrap, previousItem);
      } else if (key === 'Home') {
        event.preventDefault();
        moveFocus(list, null, disableListWrap, nextItem);
      } else if (key === 'End') {
        event.preventDefault();
        moveFocus(list, null, disableListWrap, previousItem);
      } else if (key.length === 1) {
        var criteria = textCriteriaRef.current;
        var lowerKey = key.toLowerCase();
        var currTime = performance.now();

        if (criteria.keys.length > 0) {
          // Reset
          if (currTime - criteria.lastTime > 500) {
            criteria.keys = [];
            criteria.repeating = true;
            criteria.previousKeyMatched = true;
          } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
            criteria.repeating = false;
          }
        }

        criteria.lastTime = currTime;
        criteria.keys.push(lowerKey);
        var keepFocusOnCurrent = currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria);

        if (criteria.previousKeyMatched && (keepFocusOnCurrent || moveFocus(list, currentFocus, false, nextItem, criteria))) {
          event.preventDefault();
        } else {
          criteria.previousKeyMatched = false;
        }
      }

      if (onKeyDown) {
        onKeyDown(event);
      }
    };

    var handleOwnRef = react.useCallback(function (instance) {
      // #StrictMode ready
      listRef.current = reactDom.findDOMNode(instance);
    }, []);
    var handleRef = useForkRef(handleOwnRef, ref);
    /**
     * the index of the item should receive focus
     * in a `variant="selectedMenu"` it's the first `selected` item
     * otherwise it's the very first item.
     */

    var activeItemIndex = -1; // since we inject focus related props into children we have to do a lookahead
    // to check if there is a `selected` item. We're looking for the last `selected`
    // item and use the first valid item as a fallback

    react.Children.forEach(children, function (child, index) {
      if (!react.isValidElement(child)) {
        return;
      }

      if (!child.props.disabled) {
        if (variant === 'selectedMenu' && child.props.selected) {
          activeItemIndex = index;
        } else if (activeItemIndex === -1) {
          activeItemIndex = index;
        }
      }
    });
    var items = react.Children.map(children, function (child, index) {
      if (index === activeItemIndex) {
        var newChildProps = {};

        if (autoFocusItem) {
          newChildProps.autoFocus = true;
        }

        if (child.props.tabIndex === undefined && variant === 'selectedMenu') {
          newChildProps.tabIndex = 0;
        }

        if (newChildProps !== null) {
          return react.cloneElement(child, newChildProps);
        }
      }

      return child;
    });
    return react.createElement(List$1, _extends$6({
      role: "menu",
      ref: handleRef,
      className: className,
      onKeyDown: handleKeyDown,
      tabIndex: autoFocus ? 0 : -1
    }, other), items);
  });

  var styles$j = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: _extends$6({}, theme.typography.body1, _defineProperty$1({
        minHeight: 48,
        paddingTop: 6,
        paddingBottom: 6,
        boxSizing: 'border-box',
        width: 'auto',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      }, theme.breakpoints.up('sm'), {
        minHeight: 'auto'
      })),
      // TODO To remove in v5?

      /* Styles applied to the root element if `disableGutters={false}`. */
      gutters: {},

      /* Styles applied to the root element if `selected={true}`. */
      selected: {},

      /* Styles applied to the root element if dense. */
      dense: _extends$6({}, theme.typography.body2, {
        minHeight: 'auto'
      })
    };
  };
  var MenuItem = react.forwardRef(function MenuItem(props, ref) {
    var classes = props.classes,
        className = props.className,
        _props$component = props.component,
        component = _props$component === void 0 ? 'li' : _props$component,
        _props$disableGutters = props.disableGutters,
        disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
        _props$role = props.role,
        role = _props$role === void 0 ? 'menuitem' : _props$role,
        selected = props.selected,
        tabIndexProp = props.tabIndex,
        other = _objectWithoutProperties$2(props, ["classes", "className", "component", "disableGutters", "role", "selected", "tabIndex"]);

    var tabIndex;

    if (!props.disabled) {
      tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
    }

    return react.createElement(ListItem$1, _extends$6({
      button: true,
      role: role,
      tabIndex: tabIndex,
      component: component,
      selected: selected,
      disableGutters: disableGutters,
      classes: {
        dense: classes.dense
      },
      className: clsx(classes.root, className, selected && classes.selected, !disableGutters && classes.gutters),
      ref: ref
    }, other));
  });
  var MenuItem$1 = withStyles$1(styles$j, {
    name: 'MuiMenuItem'
  })(MenuItem);

  var styles$k = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        top: -5,
        left: 0,
        margin: 0,
        padding: 0,
        paddingLeft: 8,
        pointerEvents: 'none',
        borderRadius: 'inherit',
        borderStyle: 'solid',
        borderWidth: 1
      },

      /* Styles applied to the legend element when `labelWidth` is provided. */
      legend: {
        textAlign: 'left',
        padding: 0,
        lineHeight: '11px',
        // sync with `height` in `legend` styles
        transition: theme.transitions.create('width', {
          duration: 150,
          easing: theme.transitions.easing.easeOut
        })
      },

      /* Styles applied to the legend element. */
      legendLabelled: {
        textAlign: 'left',
        padding: 0,
        height: 11,
        // sync with `lineHeight` in `legend` styles
        fontSize: '0.75rem',
        visibility: 'hidden',
        maxWidth: 0.01,
        transition: theme.transitions.create('max-width', {
          duration: 50,
          easing: theme.transitions.easing.easeOut
        }),
        '& span': {
          paddingLeft: 5,
          paddingRight: 5
        }
      },

      /* Styles applied to the legend element is notched. */
      legendNotched: {
        maxWidth: 1000,
        transition: theme.transitions.create('max-width', {
          duration: 100,
          easing: theme.transitions.easing.easeOut,
          delay: 50
        })
      }
    };
  };
  /**
   * @ignore - internal component.
   */

  var NotchedOutline = react.forwardRef(function NotchedOutline(props, ref) {
    var children = props.children,
        classes = props.classes,
        className = props.className,
        label = props.label,
        labelWidthProp = props.labelWidth,
        notched = props.notched,
        style = props.style,
        other = _objectWithoutProperties$2(props, ["children", "classes", "className", "label", "labelWidth", "notched", "style"]);

    var theme = useTheme$1();
    var align = theme.direction === 'rtl' ? 'right' : 'left';

    if (label !== undefined) {
      return react.createElement("fieldset", _extends$6({
        "aria-hidden": true,
        className: clsx(classes.root, className),
        ref: ref,
        style: style
      }, other), react.createElement("legend", {
        className: clsx(classes.legendLabelled, notched && classes.legendNotched)
      }, label ? react.createElement("span", null, label) : react.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: '&#8203;'
        }
      })));
    }

    var labelWidth = labelWidthProp > 0 ? labelWidthProp * 0.75 + 8 : 0.01;
    return react.createElement("fieldset", _extends$6({
      "aria-hidden": true,
      style: _extends$6(_defineProperty$1({}, "padding".concat(capitalize(align)), 8), style),
      className: clsx(classes.root, className),
      ref: ref
    }, other), react.createElement("legend", {
      className: classes.legend,
      style: {
        // IE 11: fieldset with legend does not render
        // a border radius. This maintains consistency
        // by always having a legend rendered
        width: notched ? labelWidth : 0.01
      }
    }, react.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: '&#8203;'
      }
    })));
  });
  var NotchedOutline$1 = withStyles$1(styles$k, {
    name: 'PrivateNotchedOutline'
  })(NotchedOutline);

  var styles$l = function styles(theme) {
    var borderColor = theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
    return {
      /* Styles applied to the root element. */
      root: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        '&:hover $notchedOutline': {
          borderColor: theme.palette.text.primary
        },
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          '&:hover $notchedOutline': {
            borderColor: borderColor
          }
        },
        '&$focused $notchedOutline': {
          borderColor: theme.palette.primary.main,
          borderWidth: 2
        },
        '&$error $notchedOutline': {
          borderColor: theme.palette.error.main
        },
        '&$disabled $notchedOutline': {
          borderColor: theme.palette.action.disabled
        }
      },

      /* Styles applied to the root element if the color is secondary. */
      colorSecondary: {
        '&$focused $notchedOutline': {
          borderColor: theme.palette.secondary.main
        }
      },

      /* Styles applied to the root element if the component is focused. */
      focused: {},

      /* Styles applied to the root element if `disabled={true}`. */
      disabled: {},

      /* Styles applied to the root element if `startAdornment` is provided. */
      adornedStart: {
        paddingLeft: 14
      },

      /* Styles applied to the root element if `endAdornment` is provided. */
      adornedEnd: {
        paddingRight: 14
      },

      /* Styles applied to the root element if `error={true}`. */
      error: {},

      /* Styles applied to the `input` element if `margin="dense"`. */
      marginDense: {},

      /* Styles applied to the root element if `multiline={true}`. */
      multiline: {
        padding: '18.5px 14px',
        '&$marginDense': {
          paddingTop: 10.5,
          paddingBottom: 10.5
        }
      },

      /* Styles applied to the `NotchedOutline` element. */
      notchedOutline: {
        borderColor: borderColor
      },

      /* Styles applied to the `input` element. */
      input: {
        padding: '18.5px 14px',
        '&:-webkit-autofill': {
          WebkitBoxShadow: theme.palette.type === 'dark' ? '0 0 0 100px #266798 inset' : null,
          WebkitTextFillColor: theme.palette.type === 'dark' ? '#fff' : null,
          borderRadius: 'inherit'
        }
      },

      /* Styles applied to the `input` element if `margin="dense"`. */
      inputMarginDense: {
        paddingTop: 10.5,
        paddingBottom: 10.5
      },

      /* Styles applied to the `input` element if `multiline={true}`. */
      inputMultiline: {
        padding: 0
      },

      /* Styles applied to the `input` element if `startAdornment` is provided. */
      inputAdornedStart: {
        paddingLeft: 0
      },

      /* Styles applied to the `input` element if `endAdornment` is provided. */
      inputAdornedEnd: {
        paddingRight: 0
      }
    };
  };
  var OutlinedInput = react.forwardRef(function OutlinedInput(props, ref) {
    var classes = props.classes,
        _props$fullWidth = props.fullWidth,
        fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
        _props$inputComponent = props.inputComponent,
        inputComponent = _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
        label = props.label,
        _props$labelWidth = props.labelWidth,
        labelWidth = _props$labelWidth === void 0 ? 0 : _props$labelWidth,
        _props$multiline = props.multiline,
        multiline = _props$multiline === void 0 ? false : _props$multiline,
        notched = props.notched,
        _props$type = props.type,
        type = _props$type === void 0 ? 'text' : _props$type,
        other = _objectWithoutProperties$2(props, ["classes", "fullWidth", "inputComponent", "label", "labelWidth", "multiline", "notched", "type"]);

    return react.createElement(InputBase$1, _extends$6({
      renderSuffix: function renderSuffix(state) {
        return react.createElement(NotchedOutline$1, {
          className: classes.notchedOutline,
          label: label,
          labelWidth: labelWidth,
          notched: typeof notched !== 'undefined' ? notched : Boolean(state.startAdornment || state.filled || state.focused)
        });
      },
      classes: _extends$6({}, classes, {
        root: clsx(classes.root, classes.underline),
        notchedOutline: null
      }),
      fullWidth: fullWidth,
      inputComponent: inputComponent,
      multiline: multiline,
      ref: ref,
      type: type
    }, other));
  });
  OutlinedInput.muiName = 'Input';
  var OutlinedInput$1 = withStyles$1(styles$l, {
    name: 'MuiOutlinedInput'
  })(OutlinedInput);

  function getFontSize(size) {
    if (size === 'large') {
      return '20px';
    }

    if (size === 'small') {
      return '12px';
    }

    return '16px';
  }

  function SvgIcon(_ref) {
    var d = _ref.d,
        size = _ref.size,
        _ref$style = _ref.style,
        style = _ref$style === void 0 ? {} : _ref$style,
        _ref$viewBox = _ref.viewBox,
        viewBox = _ref$viewBox === void 0 ? '0 0 16 16' : _ref$viewBox;

    var s = _objectSpread2({
      fontSize: getFontSize(size),
      display: 'inline-block',
      fontStyle: 'normal',
      lineHeight: '0',
      textAlign: 'center',
      textTransform: 'none',
      verticalAlign: '-.125em',
      textRendering: 'optimizeLegibility',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale'
    }, style);

    return react.createElement("i", {
      style: s
    }, react.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: viewBox,
      fill: "currentColor"
    }, react.createElement("path", {
      d: d
    })));
  }

  var remove = function remove(props) {
    return _objectSpread2({}, props, {
      d: 'M9.41421356,8 L11.8890873,5.52512627 C12.065864,5.34834957 12.0305087,4.95944084 11.8183766,4.74730881 L11.2526912,4.18162338 C11.0405592,3.96949135 10.6516504,3.93413601 10.4748737,4.1109127 L8,6.58578644 L5.52512627,4.1109127 C5.34834957,3.93413601 4.95944084,3.96949135 4.74730881,4.18162338 L4.25233406,4.67659813 C3.96949135,4.95944084 3.93413601,5.34834957 4.1109127,5.52512627 L6.58578644,8 L4.1109127,10.4748737 C3.93413601,10.6516504 3.96949135,11.0405592 4.18162338,11.2526912 L4.67659813,11.7476659 C4.95944084,12.0305087 5.34834957,12.065864 5.52512627,11.8890873 L8,9.41421356 L10.4748737,11.8890873 C10.6516504,12.065864 11.0405592,12.0305087 11.2526912,11.8183766 L11.8183766,11.2526912 C12.0305087,11.0405592 12.065864,10.6516504 11.8890873,10.4748737 L9.41421356,8 Z M8,0 C12.4,0 16,3.6 16,8 C16,12.4 12.4,16 8,16 C3.6,16 0,12.4 0,8 C0,3.6 3.6,0 8,0 Z'
    });
  };

  var Remove = (function (props) {
    return SvgIcon(remove(props));
  });

  var lock = function lock(props) {
    return _objectSpread2({}, props, {
      d: 'M13,7 L8,7 L13,7 L13,4.98151367 C13,2.23029964 10.7614237,0 8,0 C5.23857625,0 3,2.23029964 3,4.98151367 L3,7 L3.75,7 L3,7 L4.5,7 L4.5,5.33193359 C4.5,3.21561511 5.54860291,1.5 8,1.5 C10.4513971,1.5 11.5,3.21561511 11.5,5.33193359 L11.5,7 L12.25,7 L3,7 C2.44771525,7 2,7.44771525 2,8 L2,15 C2,15.5522847 2.44771525,16 3,16 L13,16 C13.5522847,16 14,15.5522847 14,15 L14,8 C14,7.44771525 13.5522847,7 13,7 L3,7 L13,7 Z'
    });
  };

  var Lock = (function (props) {
    return SvgIcon(lock(props));
  });

  var unlock = function unlock(props) {
    return _objectSpread2({}, props, {
      d: 'M2.5,7 L11,7 C11.5522847,7 12,7.44771525 12,8 L12,15 C12,15.5522847 11.5522847,16 11,16 L1,16 C0.44771525,16 0,15.5522847 0,15 L0,8 C0,7.44771525 0.44771525,7 1,7 L1,4.98151367 C1,2.23029964 3.23857625,0 6,0 C8.4241995,0 10.4454541,1.71883353 10.9029715,4 L9.34209114,4 C8.9671727,2.54028848 7.9088888,1.5 6,1.5 C3.54860291,1.5 2.5,3.21561511 2.5,5.33193359 L2.5,7 Z'
    });
  };

  var Unlock = (function (props) {
    return SvgIcon(unlock(props));
  });

  var more = function more(props) {
    return _objectSpread2({}, props, {
      d: 'M2,6.5 L3,6.5 C3.55228475,6.5 4,6.94771525 4,7.5 L4,8.5 C4,9.05228475 3.55228475,9.5 3,9.5 L2,9.5 C1.44771525,9.5 1,9.05228475 1,8.5 L1,7.5 C1,6.94771525 1.44771525,6.5 2,6.5 Z M7.5,6.5 L8.5,6.5 C9.05228475,6.5 9.5,6.94771525 9.5,7.5 L9.5,8.5 C9.5,9.05228475 9.05228475,9.5 8.5,9.5 L7.5,9.5 C6.94771525,9.5 6.5,9.05228475 6.5,8.5 L6.5,7.5 C6.5,6.94771525 6.94771525,6.5 7.5,6.5 Z M13,6.5 L14,6.5 C14.5522847,6.5 15,6.94771525 15,7.5 L15,8.5 C15,9.05228475 14.5522847,9.5 14,9.5 L13,9.5 C12.4477153,9.5 12,9.05228475 12,8.5 L12,7.5 C12,6.94771525 12.4477153,6.5 13,6.5 Z'
    });
  };

  function _extends$9() {
    _extends$9 = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends$9.apply(this, arguments);
  }

  function _inheritsLoose$2(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _assertThisInitialized$2(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
      return false;
    }

    for (var i = 0; i < newInputs.length; i++) {
      if (newInputs[i] !== lastInputs[i]) {
        return false;
      }
    }

    return true;
  }

  function index$1 (resultFn, isEqual) {
    if (isEqual === void 0) {
      isEqual = areInputsEqual;
    }

    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;

    var result = function result() {
      for (var _len = arguments.length, newArgs = new Array(_len), _key = 0; _key < _len; _key++) {
        newArgs[_key] = arguments[_key];
      }

      if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
        return lastResult;
      }

      lastResult = resultFn.apply(this, newArgs);
      calledOnce = true;
      lastThis = this;
      lastArgs = newArgs;
      return lastResult;
    };

    return result;
  }

  // Animation frame based implementation of setTimeout.
  // Inspired by Joe Lambert, https://gist.github.com/joelambert/1002116#file-requesttimeout-js
  var hasNativePerformanceNow = typeof performance === 'object' && typeof performance.now === 'function';
  var now$1 = hasNativePerformanceNow ? function () {
    return performance.now();
  } : function () {
    return Date.now();
  };
  function cancelTimeout(timeoutID) {
    cancelAnimationFrame(timeoutID.id);
  }
  function requestTimeout(callback, delay) {
    var start = now$1();

    function tick() {
      if (now$1() - start >= delay) {
        callback.call(null);
      } else {
        timeoutID.id = requestAnimationFrame(tick);
      }
    }

    var timeoutID = {
      id: requestAnimationFrame(tick)
    };
    return timeoutID;
  }
  var cachedRTLResult = null; // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
  // Chrome does not seem to adhere; its scrollLeft values are positive (measured relative to the left).
  // Safari's elastic bounce makes detecting this even more complicated wrt potential false positives.
  // The safest way to check this is to intentionally set a negative offset,
  // and then verify that the subsequent "scroll" event matches the negative offset.
  // If it does not match, then we can assume a non-standard RTL scroll implementation.

  function getRTLOffsetType(recalculate) {
    if (recalculate === void 0) {
      recalculate = false;
    }

    if (cachedRTLResult === null || recalculate) {
      var outerDiv = document.createElement('div');
      var outerStyle = outerDiv.style;
      outerStyle.width = '50px';
      outerStyle.height = '50px';
      outerStyle.overflow = 'scroll';
      outerStyle.direction = 'rtl';
      var innerDiv = document.createElement('div');
      var innerStyle = innerDiv.style;
      innerStyle.width = '100px';
      innerStyle.height = '100px';
      outerDiv.appendChild(innerDiv);
      document.body.appendChild(outerDiv);

      if (outerDiv.scrollLeft > 0) {
        cachedRTLResult = 'positive-descending';
      } else {
        outerDiv.scrollLeft = 1;

        if (outerDiv.scrollLeft === 0) {
          cachedRTLResult = 'negative';
        } else {
          cachedRTLResult = 'positive-ascending';
        }
      }

      document.body.removeChild(outerDiv);
      return cachedRTLResult;
    }

    return cachedRTLResult;
  }

  var IS_SCROLLING_DEBOUNCE_INTERVAL$1 = 150;

  var defaultItemKey$1 = function defaultItemKey(index, data) {
    return index;
  }; // In DEV mode, this Set helps us only log a warning once per component instance.

  function createListComponent(_ref) {
    var _class, _temp;

    var getItemOffset = _ref.getItemOffset,
        getEstimatedTotalSize = _ref.getEstimatedTotalSize,
        getItemSize = _ref.getItemSize,
        getOffsetForIndexAndAlignment = _ref.getOffsetForIndexAndAlignment,
        getStartIndexForOffset = _ref.getStartIndexForOffset,
        getStopIndexForStartIndex = _ref.getStopIndexForStartIndex,
        initInstanceProps = _ref.initInstanceProps,
        shouldResetStyleCacheOnItemSizeChange = _ref.shouldResetStyleCacheOnItemSizeChange,
        validateProps = _ref.validateProps;
    return _temp = _class =
    /*#__PURE__*/
    function (_PureComponent) {
      _inheritsLoose$2(List, _PureComponent);

      // Always use explicit constructor for React components.
      // It produces less code after transpilation. (#26)
      // eslint-disable-next-line no-useless-constructor
      function List(props) {
        var _this;

        _this = _PureComponent.call(this, props) || this;
        _this._instanceProps = initInstanceProps(_this.props, _assertThisInitialized$2(_assertThisInitialized$2(_this)));
        _this._outerRef = void 0;
        _this._resetIsScrollingTimeoutId = null;
        _this.state = {
          instance: _assertThisInitialized$2(_assertThisInitialized$2(_this)),
          isScrolling: false,
          scrollDirection: 'forward',
          scrollOffset: typeof _this.props.initialScrollOffset === 'number' ? _this.props.initialScrollOffset : 0,
          scrollUpdateWasRequested: false
        };
        _this._callOnItemsRendered = void 0;
        _this._callOnItemsRendered = index$1(function (overscanStartIndex, overscanStopIndex, visibleStartIndex, visibleStopIndex) {
          return _this.props.onItemsRendered({
            overscanStartIndex: overscanStartIndex,
            overscanStopIndex: overscanStopIndex,
            visibleStartIndex: visibleStartIndex,
            visibleStopIndex: visibleStopIndex
          });
        });
        _this._callOnScroll = void 0;
        _this._callOnScroll = index$1(function (scrollDirection, scrollOffset, scrollUpdateWasRequested) {
          return _this.props.onScroll({
            scrollDirection: scrollDirection,
            scrollOffset: scrollOffset,
            scrollUpdateWasRequested: scrollUpdateWasRequested
          });
        });
        _this._getItemStyle = void 0;

        _this._getItemStyle = function (index) {
          var _this$props = _this.props,
              direction = _this$props.direction,
              itemSize = _this$props.itemSize,
              layout = _this$props.layout;

          var itemStyleCache = _this._getItemStyleCache(shouldResetStyleCacheOnItemSizeChange && itemSize, shouldResetStyleCacheOnItemSizeChange && layout, shouldResetStyleCacheOnItemSizeChange && direction);

          var style;

          if (itemStyleCache.hasOwnProperty(index)) {
            style = itemStyleCache[index];
          } else {
            var _style;

            var _offset = getItemOffset(_this.props, index, _this._instanceProps);

            var size = getItemSize(_this.props, index, _this._instanceProps); // TODO Deprecate direction "horizontal"

            var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
            itemStyleCache[index] = style = (_style = {
              position: 'absolute'
            }, _style[direction === 'rtl' ? 'right' : 'left'] = isHorizontal ? _offset : 0, _style.top = !isHorizontal ? _offset : 0, _style.height = !isHorizontal ? size : '100%', _style.width = isHorizontal ? size : '100%', _style);
          }

          return style;
        };

        _this._getItemStyleCache = void 0;
        _this._getItemStyleCache = index$1(function (_, __, ___) {
          return {};
        });

        _this._onScrollHorizontal = function (event) {
          var _event$currentTarget = event.currentTarget,
              clientWidth = _event$currentTarget.clientWidth,
              scrollLeft = _event$currentTarget.scrollLeft,
              scrollWidth = _event$currentTarget.scrollWidth;

          _this.setState(function (prevState) {
            if (prevState.scrollOffset === scrollLeft) {
              // Scroll position may have been updated by cDM/cDU,
              // In which case we don't need to trigger another render,
              // And we don't want to update state.isScrolling.
              return null;
            }

            var direction = _this.props.direction;
            var scrollOffset = scrollLeft;

            if (direction === 'rtl') {
              // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
              // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
              // It's also easier for this component if we convert offsets to the same format as they would be in for ltr.
              // So the simplest solution is to determine which browser behavior we're dealing with, and convert based on it.
              switch (getRTLOffsetType()) {
                case 'negative':
                  scrollOffset = -scrollLeft;
                  break;

                case 'positive-descending':
                  scrollOffset = scrollWidth - clientWidth - scrollLeft;
                  break;
              }
            } // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.


            scrollOffset = Math.max(0, Math.min(scrollOffset, scrollWidth - clientWidth));
            return {
              isScrolling: true,
              scrollDirection: prevState.scrollOffset < scrollLeft ? 'forward' : 'backward',
              scrollOffset: scrollOffset,
              scrollUpdateWasRequested: false
            };
          }, _this._resetIsScrollingDebounced);
        };

        _this._onScrollVertical = function (event) {
          var _event$currentTarget2 = event.currentTarget,
              clientHeight = _event$currentTarget2.clientHeight,
              scrollHeight = _event$currentTarget2.scrollHeight,
              scrollTop = _event$currentTarget2.scrollTop;

          _this.setState(function (prevState) {
            if (prevState.scrollOffset === scrollTop) {
              // Scroll position may have been updated by cDM/cDU,
              // In which case we don't need to trigger another render,
              // And we don't want to update state.isScrolling.
              return null;
            } // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.


            var scrollOffset = Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight));
            return {
              isScrolling: true,
              scrollDirection: prevState.scrollOffset < scrollOffset ? 'forward' : 'backward',
              scrollOffset: scrollOffset,
              scrollUpdateWasRequested: false
            };
          }, _this._resetIsScrollingDebounced);
        };

        _this._outerRefSetter = function (ref) {
          var outerRef = _this.props.outerRef;
          _this._outerRef = ref;

          if (typeof outerRef === 'function') {
            outerRef(ref);
          } else if (outerRef != null && typeof outerRef === 'object' && outerRef.hasOwnProperty('current')) {
            outerRef.current = ref;
          }
        };

        _this._resetIsScrollingDebounced = function () {
          if (_this._resetIsScrollingTimeoutId !== null) {
            cancelTimeout(_this._resetIsScrollingTimeoutId);
          }

          _this._resetIsScrollingTimeoutId = requestTimeout(_this._resetIsScrolling, IS_SCROLLING_DEBOUNCE_INTERVAL$1);
        };

        _this._resetIsScrolling = function () {
          _this._resetIsScrollingTimeoutId = null;

          _this.setState({
            isScrolling: false
          }, function () {
            // Clear style cache after state update has been committed.
            // This way we don't break pure sCU for items that don't use isScrolling param.
            _this._getItemStyleCache(-1, null);
          });
        };

        return _this;
      }

      List.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
        validateSharedProps$1(nextProps, prevState);
        validateProps(nextProps);
        return null;
      };

      var _proto = List.prototype;

      _proto.scrollTo = function scrollTo(scrollOffset) {
        scrollOffset = Math.max(0, scrollOffset);
        this.setState(function (prevState) {
          if (prevState.scrollOffset === scrollOffset) {
            return null;
          }

          return {
            scrollDirection: prevState.scrollOffset < scrollOffset ? 'forward' : 'backward',
            scrollOffset: scrollOffset,
            scrollUpdateWasRequested: true
          };
        }, this._resetIsScrollingDebounced);
      };

      _proto.scrollToItem = function scrollToItem(index, align) {
        if (align === void 0) {
          align = 'auto';
        }

        var itemCount = this.props.itemCount;
        var scrollOffset = this.state.scrollOffset;
        index = Math.max(0, Math.min(index, itemCount - 1));
        this.scrollTo(getOffsetForIndexAndAlignment(this.props, index, align, scrollOffset, this._instanceProps));
      };

      _proto.componentDidMount = function componentDidMount() {
        var _this$props2 = this.props,
            direction = _this$props2.direction,
            initialScrollOffset = _this$props2.initialScrollOffset,
            layout = _this$props2.layout;

        if (typeof initialScrollOffset === 'number' && this._outerRef != null) {
          var outerRef = this._outerRef; // TODO Deprecate direction "horizontal"

          if (direction === 'horizontal' || layout === 'horizontal') {
            outerRef.scrollLeft = initialScrollOffset;
          } else {
            outerRef.scrollTop = initialScrollOffset;
          }
        }

        this._callPropsCallbacks();
      };

      _proto.componentDidUpdate = function componentDidUpdate() {
        var _this$props3 = this.props,
            direction = _this$props3.direction,
            layout = _this$props3.layout;
        var _this$state = this.state,
            scrollOffset = _this$state.scrollOffset,
            scrollUpdateWasRequested = _this$state.scrollUpdateWasRequested;

        if (scrollUpdateWasRequested && this._outerRef != null) {
          var outerRef = this._outerRef; // TODO Deprecate direction "horizontal"

          if (direction === 'horizontal' || layout === 'horizontal') {
            if (direction === 'rtl') {
              // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
              // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
              // So we need to determine which browser behavior we're dealing with, and mimic it.
              switch (getRTLOffsetType()) {
                case 'negative':
                  outerRef.scrollLeft = -scrollOffset;
                  break;

                case 'positive-ascending':
                  outerRef.scrollLeft = scrollOffset;
                  break;

                default:
                  var clientWidth = outerRef.clientWidth,
                      scrollWidth = outerRef.scrollWidth;
                  outerRef.scrollLeft = scrollWidth - clientWidth - scrollOffset;
                  break;
              }
            } else {
              outerRef.scrollLeft = scrollOffset;
            }
          } else {
            outerRef.scrollTop = scrollOffset;
          }
        }

        this._callPropsCallbacks();
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        if (this._resetIsScrollingTimeoutId !== null) {
          cancelTimeout(this._resetIsScrollingTimeoutId);
        }
      };

      _proto.render = function render() {
        var _this$props4 = this.props,
            children = _this$props4.children,
            className = _this$props4.className,
            direction = _this$props4.direction,
            height = _this$props4.height,
            innerRef = _this$props4.innerRef,
            innerElementType = _this$props4.innerElementType,
            innerTagName = _this$props4.innerTagName,
            itemCount = _this$props4.itemCount,
            itemData = _this$props4.itemData,
            _this$props4$itemKey = _this$props4.itemKey,
            itemKey = _this$props4$itemKey === void 0 ? defaultItemKey$1 : _this$props4$itemKey,
            layout = _this$props4.layout,
            outerElementType = _this$props4.outerElementType,
            outerTagName = _this$props4.outerTagName,
            style = _this$props4.style,
            useIsScrolling = _this$props4.useIsScrolling,
            width = _this$props4.width;
        var isScrolling = this.state.isScrolling; // TODO Deprecate direction "horizontal"

        var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
        var onScroll = isHorizontal ? this._onScrollHorizontal : this._onScrollVertical;

        var _this$_getRangeToRend = this._getRangeToRender(),
            startIndex = _this$_getRangeToRend[0],
            stopIndex = _this$_getRangeToRend[1];

        var items = [];

        if (itemCount > 0) {
          for (var _index = startIndex; _index <= stopIndex; _index++) {
            items.push(react_11(children, {
              data: itemData,
              key: itemKey(_index, itemData),
              index: _index,
              isScrolling: useIsScrolling ? isScrolling : undefined,
              style: this._getItemStyle(_index)
            }));
          }
        } // Read this value AFTER items have been created,
        // So their actual sizes (if variable) are taken into consideration.


        var estimatedTotalSize = getEstimatedTotalSize(this.props, this._instanceProps);
        return react_11(outerElementType || outerTagName || 'div', {
          className: className,
          onScroll: onScroll,
          ref: this._outerRefSetter,
          style: _extends$9({
            position: 'relative',
            height: height,
            width: width,
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            willChange: 'transform',
            direction: direction
          }, style)
        }, react_11(innerElementType || innerTagName || 'div', {
          children: items,
          ref: innerRef,
          style: {
            height: isHorizontal ? '100%' : estimatedTotalSize,
            pointerEvents: isScrolling ? 'none' : undefined,
            width: isHorizontal ? estimatedTotalSize : '100%'
          }
        }));
      };

      _proto._callPropsCallbacks = function _callPropsCallbacks() {
        if (typeof this.props.onItemsRendered === 'function') {
          var itemCount = this.props.itemCount;

          if (itemCount > 0) {
            var _this$_getRangeToRend2 = this._getRangeToRender(),
                _overscanStartIndex = _this$_getRangeToRend2[0],
                _overscanStopIndex = _this$_getRangeToRend2[1],
                _visibleStartIndex = _this$_getRangeToRend2[2],
                _visibleStopIndex = _this$_getRangeToRend2[3];

            this._callOnItemsRendered(_overscanStartIndex, _overscanStopIndex, _visibleStartIndex, _visibleStopIndex);
          }
        }

        if (typeof this.props.onScroll === 'function') {
          var _this$state2 = this.state,
              _scrollDirection = _this$state2.scrollDirection,
              _scrollOffset = _this$state2.scrollOffset,
              _scrollUpdateWasRequested = _this$state2.scrollUpdateWasRequested;

          this._callOnScroll(_scrollDirection, _scrollOffset, _scrollUpdateWasRequested);
        }
      }; // Lazily create and cache item styles while scrolling,
      // So that pure component sCU will prevent re-renders.
      // We maintain this cache, and pass a style prop rather than index,
      // So that List can clear cached styles and force item re-render if necessary.


      _proto._getRangeToRender = function _getRangeToRender() {
        var _this$props5 = this.props,
            itemCount = _this$props5.itemCount,
            overscanCount = _this$props5.overscanCount;
        var _this$state3 = this.state,
            isScrolling = _this$state3.isScrolling,
            scrollDirection = _this$state3.scrollDirection,
            scrollOffset = _this$state3.scrollOffset;

        if (itemCount === 0) {
          return [0, 0, 0, 0];
        }

        var startIndex = getStartIndexForOffset(this.props, scrollOffset, this._instanceProps);
        var stopIndex = getStopIndexForStartIndex(this.props, startIndex, scrollOffset, this._instanceProps); // Overscan by one item in each direction so that tab/focus works.
        // If there isn't at least one extra item, tab loops back around.

        var overscanBackward = !isScrolling || scrollDirection === 'backward' ? Math.max(1, overscanCount) : 1;
        var overscanForward = !isScrolling || scrollDirection === 'forward' ? Math.max(1, overscanCount) : 1;
        return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(itemCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
      };

      return List;
    }(react_12), _class.defaultProps = {
      direction: 'ltr',
      itemData: undefined,
      layout: 'vertical',
      overscanCount: 2,
      useIsScrolling: false
    }, _temp;
  } // NOTE: I considered further wrapping individual items with a pure ListItem component.
  // This would avoid ever calling the render function for the same index more than once,
  // But it would also add the overhead of a lot of components/fibers.
  // I assume people already do this (render function returning a class component),
  // So my doing it would just unnecessarily double the wrappers.

  var validateSharedProps$1 = function validateSharedProps(_ref2, _ref3) {
    var children = _ref2.children,
        direction = _ref2.direction,
        height = _ref2.height,
        layout = _ref2.layout,
        innerTagName = _ref2.innerTagName,
        outerTagName = _ref2.outerTagName,
        width = _ref2.width;
    var instance = _ref3.instance;
  };

  var FixedSizeList =
  /*#__PURE__*/
  createListComponent({
    getItemOffset: function getItemOffset(_ref, index) {
      var itemSize = _ref.itemSize;
      return index * itemSize;
    },
    getItemSize: function getItemSize(_ref2, index) {
      var itemSize = _ref2.itemSize;
      return itemSize;
    },
    getEstimatedTotalSize: function getEstimatedTotalSize(_ref3) {
      var itemCount = _ref3.itemCount,
          itemSize = _ref3.itemSize;
      return itemSize * itemCount;
    },
    getOffsetForIndexAndAlignment: function getOffsetForIndexAndAlignment(_ref4, index, align, scrollOffset) {
      var direction = _ref4.direction,
          height = _ref4.height,
          itemCount = _ref4.itemCount,
          itemSize = _ref4.itemSize,
          layout = _ref4.layout,
          width = _ref4.width;
      // TODO Deprecate direction "horizontal"
      var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
      var size = isHorizontal ? width : height;
      var lastItemOffset = Math.max(0, itemCount * itemSize - size);
      var maxOffset = Math.min(lastItemOffset, index * itemSize);
      var minOffset = Math.max(0, index * itemSize - size + itemSize);

      if (align === 'smart') {
        if (scrollOffset >= minOffset - size && scrollOffset <= maxOffset + size) {
          align = 'auto';
        } else {
          align = 'center';
        }
      }

      switch (align) {
        case 'start':
          return maxOffset;

        case 'end':
          return minOffset;

        case 'center':
          {
            // "Centered" offset is usually the average of the min and max.
            // But near the edges of the list, this doesn't hold true.
            var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);

            if (middleOffset < Math.ceil(size / 2)) {
              return 0; // near the beginning
            } else if (middleOffset > lastItemOffset + Math.floor(size / 2)) {
              return lastItemOffset; // near the end
            } else {
              return middleOffset;
            }
          }

        case 'auto':
        default:
          if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
            return scrollOffset;
          } else if (scrollOffset < minOffset) {
            return minOffset;
          } else {
            return maxOffset;
          }

      }
    },
    getStartIndexForOffset: function getStartIndexForOffset(_ref5, offset) {
      var itemCount = _ref5.itemCount,
          itemSize = _ref5.itemSize;
      return Math.max(0, Math.min(itemCount - 1, Math.floor(offset / itemSize)));
    },
    getStopIndexForStartIndex: function getStopIndexForStartIndex(_ref6, startIndex, scrollOffset) {
      var direction = _ref6.direction,
          height = _ref6.height,
          itemCount = _ref6.itemCount,
          itemSize = _ref6.itemSize,
          layout = _ref6.layout,
          width = _ref6.width;
      // TODO Deprecate direction "horizontal"
      var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
      var offset = startIndex * itemSize;
      var size = isHorizontal ? width : height;
      var numVisibleItems = Math.ceil((size + scrollOffset - offset) / itemSize);
      return Math.max(0, Math.min(itemCount - 1, startIndex + numVisibleItems - 1 // -1 is because stop index is inclusive
      ));
    },
    initInstanceProps: function initInstanceProps(props) {// Noop
    },
    shouldResetStyleCacheOnItemSizeChange: true,
    validateProps: function validateProps(_ref7) {
      var itemSize = _ref7.itemSize;
    }
  });

  function isRangeVisible(_ref) {
    var lastRenderedStartIndex = _ref.lastRenderedStartIndex,
        lastRenderedStopIndex = _ref.lastRenderedStopIndex,
        startIndex = _ref.startIndex,
        stopIndex = _ref.stopIndex;

    return !(startIndex > lastRenderedStopIndex || stopIndex < lastRenderedStartIndex);
  }

  function scanForUnloadedRanges(_ref) {
    var isItemLoaded = _ref.isItemLoaded,
        itemCount = _ref.itemCount,
        minimumBatchSize = _ref.minimumBatchSize,
        startIndex = _ref.startIndex,
        stopIndex = _ref.stopIndex;

    var unloadedRanges = [];

    var rangeStartIndex = null;
    var rangeStopIndex = null;

    for (var _index = startIndex; _index <= stopIndex; _index++) {
      var loaded = isItemLoaded(_index);

      if (!loaded) {
        rangeStopIndex = _index;
        if (rangeStartIndex === null) {
          rangeStartIndex = _index;
        }
      } else if (rangeStopIndex !== null) {
        unloadedRanges.push([rangeStartIndex, rangeStopIndex]);

        rangeStartIndex = rangeStopIndex = null;
      }
    }

    // If :rangeStopIndex is not null it means we haven't ran out of unloaded rows.
    // Scan forward to try filling our :minimumBatchSize.
    if (rangeStopIndex !== null) {
      var potentialStopIndex = Math.min(Math.max(rangeStopIndex, rangeStartIndex + minimumBatchSize - 1), itemCount - 1);

      for (var _index2 = rangeStopIndex + 1; _index2 <= potentialStopIndex; _index2++) {
        if (!isItemLoaded(_index2)) {
          rangeStopIndex = _index2;
        } else {
          break;
        }
      }

      unloadedRanges.push([rangeStartIndex, rangeStopIndex]);
    }

    // Check to see if our first range ended prematurely.
    // In this case we should scan backwards to try filling our :minimumBatchSize.
    if (unloadedRanges.length) {
      var firstRange = unloadedRanges[0];

      while (firstRange[1] - firstRange[0] + 1 < minimumBatchSize && firstRange[0] > 0) {
        var _index3 = firstRange[0] - 1;

        if (!isItemLoaded(_index3)) {
          firstRange[0] = _index3;
        } else {
          break;
        }
      }
    }

    return unloadedRanges;
  }

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var slicedToArray = function () {
    function sliceIterator(arr, i) {
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
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var InfiniteLoader = function (_PureComponent) {
    inherits(InfiniteLoader, _PureComponent);

    function InfiniteLoader() {
      var _ref;

      var _temp, _this, _ret;

      classCallCheck(this, InfiniteLoader);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = InfiniteLoader.__proto__ || Object.getPrototypeOf(InfiniteLoader)).call.apply(_ref, [this].concat(args))), _this), _this._lastRenderedStartIndex = -1, _this._lastRenderedStopIndex = -1, _this._memoizedUnloadedRanges = [], _this._onItemsRendered = function (_ref2) {
        var visibleStartIndex = _ref2.visibleStartIndex,
            visibleStopIndex = _ref2.visibleStopIndex;

        _this._lastRenderedStartIndex = visibleStartIndex;
        _this._lastRenderedStopIndex = visibleStopIndex;

        _this._ensureRowsLoaded(visibleStartIndex, visibleStopIndex);
      }, _this._setRef = function (listRef) {
        _this._listRef = listRef;
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(InfiniteLoader, [{
      key: 'resetloadMoreItemsCache',
      value: function resetloadMoreItemsCache() {
        var autoReload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        this._memoizedUnloadedRanges = [];

        if (autoReload) {
          this._ensureRowsLoaded(this._lastRenderedStartIndex, this._lastRenderedStopIndex);
        }
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
      }
    }, {
      key: 'render',
      value: function render() {
        var children = this.props.children;


        return children({
          onItemsRendered: this._onItemsRendered,
          ref: this._setRef
        });
      }
    }, {
      key: '_ensureRowsLoaded',
      value: function _ensureRowsLoaded(startIndex, stopIndex) {
        var _props = this.props,
            isItemLoaded = _props.isItemLoaded,
            itemCount = _props.itemCount,
            _props$minimumBatchSi = _props.minimumBatchSize,
            minimumBatchSize = _props$minimumBatchSi === undefined ? 10 : _props$minimumBatchSi,
            _props$threshold = _props.threshold,
            threshold = _props$threshold === undefined ? 15 : _props$threshold;


        var unloadedRanges = scanForUnloadedRanges({
          isItemLoaded: isItemLoaded,
          itemCount: itemCount,
          minimumBatchSize: minimumBatchSize,
          startIndex: Math.max(0, startIndex - threshold),
          stopIndex: Math.min(itemCount - 1, stopIndex + threshold)
        });

        // Avoid calling load-rows unless range has changed.
        // This shouldn't be strictly necsesary, but is maybe nice to do.
        if (this._memoizedUnloadedRanges.length !== unloadedRanges.length || this._memoizedUnloadedRanges.some(function (_ref3, index) {
          var _ref4 = slicedToArray(_ref3, 2),
              startIndex = _ref4[0],
              stopIndex = _ref4[1];

          return unloadedRanges[index][0] !== startIndex || unloadedRanges[index][1] !== stopIndex;
        })) {
          this._memoizedUnloadedRanges = unloadedRanges;
          this._loadUnloadedRanges(unloadedRanges);
        }
      }
    }, {
      key: '_loadUnloadedRanges',
      value: function _loadUnloadedRanges(unloadedRanges) {
        var _this2 = this;

        // loadMoreRows was renamed to loadMoreItems in v1.0.3; will be removed in v2.0
        var loadMoreItems = this.props.loadMoreItems || this.props.loadMoreRows;

        unloadedRanges.forEach(function (_ref5) {
          var _ref6 = slicedToArray(_ref5, 2),
              startIndex = _ref6[0],
              stopIndex = _ref6[1];

          var promise = loadMoreItems(startIndex, stopIndex);
          if (promise != null) {
            promise.then(function () {
              // Refresh the visible rows if any of them have just been loaded.
              // Otherwise they will remain in their unloaded visual state.
              if (isRangeVisible({
                lastRenderedStartIndex: _this2._lastRenderedStartIndex,
                lastRenderedStopIndex: _this2._lastRenderedStopIndex,
                startIndex: startIndex,
                stopIndex: stopIndex
              })) {
                // Handle an unmount while promises are still in flight.
                if (_this2._listRef == null) {
                  return;
                }

                // Resize cached row sizes for VariableSizeList,
                // otherwise just re-render the list.
                if (typeof _this2._listRef.resetAfterIndex === 'function') {
                  _this2._listRef.resetAfterIndex(startIndex, true);
                } else {
                  // HACK reset temporarily cached item styles to force PureComponent to re-render.
                  // This is pretty gross, but I'm okay with it for now.
                  // Don't judge me.
                  if (typeof _this2._listRef._getItemStyleCache === 'function') {
                    _this2._listRef._getItemStyleCache(-1);
                  }
                  _this2._listRef.forceUpdate();
                }
              }
            });
          }
        });
      }
    }]);
    return InfiniteLoader;
  }(react_12);

  var tick = function tick(props) {
    return _objectSpread2({}, props, {
      d: 'M6,10 L13,3 L15,5 L8,12 L6,14 L1,9 L3,7 L6,10 Z'
    });
  };

  var Tick = (function (props) {
    return SvgIcon(tick(props));
  });

  var useStyles = makeStyles(function (theme) {
    return {
      row: {
        flexWrap: 'nowrap',
        borderBottom: "1px solid ".concat(theme.palette.divider),
        '&:focus': {
          boxShadow: "inset 0 0 0 2px ".concat(theme.palette.custom.focusOutline),
          outline: 'none'
        }
      },
      cell: {
        padding: '8px',
        '& span': {
          whiteSpace: 'nowrap',
          fontSize: '12px',
          lineHeight: '16px'
        },
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      },
      icon: {
        padding: theme.spacing(1)
      },
      S: {
        background: theme.palette.selected.main,
        color: theme.palette.selected.mainContrastText,
        '&:focus': {
          boxShadow: "inset 0 0 0 2px rgba(0, 0, 0, 0.3)",
          outline: 'none'
        }
      },
      A: {
        background: theme.palette.selected.alternative,
        color: theme.palette.selected.alternativeContrastText
      },
      X: {
        background: theme.palette.selected.excluded,
        color: theme.palette.selected.excludedContrastText
      },
      highlighted: {
        backgroundColor: '#FFC72A'
      }
    };
  });
  function Row(_ref) {
    var index = _ref.index,
        style = _ref.style,
        data = _ref.data;
    var classes = useStyles();
    var classArr = [classes.row];
    var label = '';
    var onClick = data.onClick,
        pages = data.pages;
    var cell;

    if (pages) {
      var page = pages.filter(function (p) {
        return p.qArea.qTop <= index && index < p.qArea.qTop + p.qArea.qHeight;
      })[0];

      if (page) {
        var area = page.qArea;

        if (index >= area.qTop && index < area.qTop + area.qHeight) {
          var _page$qMatrix = _slicedToArray(page.qMatrix[index - area.qTop], 1);

          cell = _page$qMatrix[0];
        }
      }
    }

    var locked = false;
    var selected = false;

    if (cell) {
      label = cell.qText;
      locked = cell.qState === 'L' || cell.qState === 'XL';
      selected = cell.qState === 'S' || cell.qState === 'XS';

      if (cell.qState === 'S' || cell.qState === 'L') {
        classArr.push(classes.S);
      } else if (cell.qState === 'A') {
        classArr.push(classes.A);
      } else if (cell.qState === 'X' || cell.qState === 'XS' || cell.qState === 'XL') {
        classArr.push(classes.X);
      }
    } // Handle search highlights


    var ranges = cell && cell.qHighlightRanges && cell.qHighlightRanges.qRanges.sort(function (a, b) {
      return a.qCharPos - b.qCharPos;
    }) || [];
    var labels = ranges.reduce(function (acc, curr, ix) {
      // First non highlighted segment
      if (curr.qCharPos > 0 && ix === 0) {
        acc.push([label.slice(0, curr.qCharPos)]);
      } // Previous non highlighted segment


      var prev = ranges[ix - 1];

      if (prev) {
        acc.push([label.slice(prev.qCharPos + prev.qCharPos + 1, curr.qCharPos)]);
      } // Highlighted segment


      acc.push([label.slice(curr.qCharPos, curr.qCharPos + curr.qCharCount), classes.highlighted]); // Last non highlighted segment

      if (ix === ranges.length - 1 && curr.qCharPos + curr.qCharCount < label.length) {
        acc.push([label.slice(curr.qCharPos + curr.qCharCount)]);
      }

      return acc;
    }, []);
    return react.createElement(StyledGrid, {
      container: true,
      spacing: 0,
      className: classArr.join(' ').trim(),
      style: style,
      onClick: onClick,
      role: "row",
      tabIndex: 0,
      "data-n": cell && cell.qElemNumber
    }, react.createElement(StyledGrid, {
      item: true,
      style: {
        minWidth: 0,
        flexGrow: 1
      },
      className: classes.cell
    }, ranges.length === 0 ? react.createElement(Typography$1, {
      component: "span",
      noWrap: true,
      color: "inherit"
    }, "".concat(label)) : labels.map(function (_ref2, ix) {
      var _ref3 = _slicedToArray(_ref2, 2),
          l = _ref3[0],
          highlighted = _ref3[1];

      return (// eslint-disable-next-line react/no-array-index-key
        react.createElement(Typography$1, {
          component: "span",
          key: ix,
          className: highlighted,
          noWrap: true
        }, l)
      );
    })), react.createElement(StyledGrid, {
      item: true,
      className: classes.icon
    }, locked && react.createElement(Lock, {
      size: "small"
    }), selected && react.createElement(Tick, {
      size: "small"
    })));
  }

  function ListBox(_ref) {
    var model = _ref.model,
        selections = _ref.selections,
        direction = _ref.direction;

    var _useLayout = useLayout(model),
        _useLayout2 = _slicedToArray(_useLayout, 1),
        layout = _useLayout2[0];

    var _useState = react_1(null),
        _useState2 = _slicedToArray(_useState, 2),
        pages = _useState2[0],
        setPages = _useState2[1];

    var loaderRef = react_4(null);
    var local = react_4({
      queue: [],
      validPages: false
    });
    var listData = react_4({
      pages: []
    });
    var onClick = react_9(function (e) {
      if (layout && layout.qListObject.qDimensionInfo.qLocked) {
        return;
      }

      var elemNumber = +e.currentTarget.getAttribute('data-n');

      if (!Number.isNaN(elemNumber)) {
        selections.select({
          method: 'selectListObjectValues',
          params: ['/qListObjectDef', [elemNumber], true]
        });
      }
    }, [model, layout && layout.qListObject.qDimensionInfo.qLocked]);
    var isItemLoaded = react_9(function (index) {
      if (!pages || !local.current.validPages) {
        return false;
      }

      local.current.checkIdx = index;
      var page = pages.filter(function (p) {
        return p.qArea.qTop <= index && index < p.qArea.qTop + p.qArea.qHeight;
      })[0];
      return page && page.qArea.qTop <= index && index < page.qArea.qTop + page.qArea.qHeight;
    }, [layout, pages]);
    var loadMoreItems = react_9(function (startIndex, stopIndex) {
      local.current.queue.push({
        start: startIndex,
        stop: stopIndex
      });
      var isScrolling = loaderRef.current ? loaderRef.current._listRef.state.isScrolling : false;

      if (local.current.queue.length > 10) {
        local.current.queue.shift();
      }

      clearTimeout(local.current.timeout);
      return new Promise(function (resolve) {
        local.current.timeout = setTimeout(function () {
          var sorted = local.current.queue.slice(-2).sort(function (a, b) {
            return a.start - b.start;
          });
          model.getListObjectData('/qListObjectDef', sorted.map(function (s) {
            return {
              qTop: s.start,
              qHeight: s.stop - s.start + 1,
              qLeft: 0,
              qWidth: 1
            };
          })).then(function (p) {
            local.current.validPages = true;
            listData.current.pages = p;
            setPages(p);
            resolve();
          });
        }, isScrolling ? 500 : 0);
      });
    }, [layout]);
    react_2(function () {
      local.current.queue = [];
      local.current.validPages = false;

      if (loaderRef.current) {
        loaderRef.current.resetloadMoreItemsCache(true); // Skip scrollToItem if we are in selections

        if (layout && layout.qSelectionInfo.qInSelections) {
          return;
        }

        loaderRef.current._listRef.scrollToItem(0);
      }
    }, [layout]);

    if (!layout) {
      return null;
    }

    var count = layout.qListObject.qSize.qcy;
    var ITEM_HEIGHT = 33;
    return react.createElement(InfiniteLoader, {
      isItemLoaded: isItemLoaded,
      itemCount: count,
      loadMoreItems: loadMoreItems,
      threshold: 0,
      minimumBatchSize: 100,
      ref: loaderRef
    }, function (_ref2) {
      var onItemsRendered = _ref2.onItemsRendered,
          ref = _ref2.ref;
      local.current.listRef = ref;
      return react.createElement(FixedSizeList, {
        direction: direction,
        useIsScrolling: true,
        style: {},
        height: 8 * ITEM_HEIGHT,
        itemCount: count,
        itemData: {
          onClick: onClick,
          pages: pages
        },
        itemSize: ITEM_HEIGHT,
        onItemsRendered: onItemsRendered,
        ref: ref
      }, Row);
    });
  }

  var selectAll = function selectAll(props) {
    return _objectSpread2({}, props, {
      d: 'M15.4,9 C15.8,9 16,9.3 16,9.6 L16,15.4 C16,15.7 15.8,16 15.4,16 L9.6,16 C9.3,16 9,15.8 9,15.4 L9,9.6 C9,9.3 9.3,9 9.6,9 L15.4,9 Z M15,10 L10,10 L10,15 L15,15 L15,10 Z M6.5,0 C6.8,0 7,0.3 7,0.6 L7,6.4 C7,6.8 6.8,7 6.5,7 L0.6,7 C0.3,7 0,6.8 0,6.5 L0,0.6 C0,0.3 0.3,0 0.6,0 L6.5,0 Z M6,2.8 C6.3,2.5 6.3,2.1 6.1,1.8 C5.9,1.5 5.4,1.6 5.1,1.9 L3.1,3.9 L2.4,3.2 C2.1,2.9 1.7,2.9 1.4,3.1 C1.2,3.3 1.2,3.8 1.5,4.1 L2.7,5.3 C3,5.6 3.4,5.6 3.7,5.3 L3.8,5.3 L6,2.8 Z M6.5,9 C6.8,9 7,9.3 7,9.6 L7,15.4 C7,15.8 6.8,16 6.5,16 L0.6,16 C0.3,16 0,15.8 0,15.4 L0,9.6 C0,9.3 0.3,9 0.6,9 L6.5,9 Z M6,11.8 C6.3,11.5 6.3,11.1 6.1,10.8 C5.9,10.6 5.4,10.6 5.1,10.8 L3.1,12.8 L2.3,12 C2,11.7 1.6,11.7 1.3,12 C1.1,12.3 1.1,12.7 1.4,13 L2.6,14.2 C2.9,14.5 3.3,14.5 3.6,14.3 L3.7,14.2 L6,11.8 Z M15.4,0 C15.8,0 16,0.3 16,0.6 L16,6.4 C16,6.8 15.8,7 15.4,7 L9.6,7 C9.3,7 9,6.8 9,6.5 L9,0.6 C9,0.3 9.3,0 9.6,0 L15.4,0 Z M15,2.8 C15.3,2.5 15.3,2.1 15.1,1.8 C14.9,1.5 14.4,1.6 14.1,1.9 L12.1,3.9 L11.3,3.1 C11,2.8 10.6,2.8 10.3,3 C10,3.2 10.1,3.7 10.3,4 L11.5,5.2 C11.8,5.5 12.2,5.5 12.5,5.2 L15,2.8 Z'
    });
  };

  var selectAlternative = function selectAlternative(props) {
    return _objectSpread2({}, props, {
      d: 'M6,15.5 C6,15.2238576 6.22385763,15 6.5,15 L9.5,15 C9.77614237,15 10,15.2238576 10,15.5 C10,15.7761424 9.77614237,16 9.5,16 L6.5,16 C6.22385763,16 6,15.7761424 6,15.5 Z M1,13.5 L1,14.5 C1,14.7761424 1.22385763,15 1.5,15 L2.5,15 C2.77614237,15 3,15.2238576 3,15.5 C3,15.7761424 2.77614237,16 2.5,16 L1,16 C0.44771525,16 6.76353751e-17,15.5522847 0,15 L0,13.5 C-3.38176876e-17,13.2238576 0.223857625,13 0.5,13 C0.776142375,13 1,13.2238576 1,13.5 Z M15,13.5 C15,13.2238576 15.2238576,13 15.5,13 C15.7761424,13 16,13.2238576 16,13.5 L16,15 C16,15.5522847 15.5522847,16 15,16 L13.5,16 C13.2238576,16 13,15.7761424 13,15.5 C13,15.2238576 13.2238576,15 13.5,15 L14.5,15 C14.7761424,15 15,14.7761424 15,14.5 L15,13.5 Z M1,6.5 L1,9.5 C1,9.77614237 0.776142375,10 0.5,10 C0.223857625,10 3.38176876e-17,9.77614237 0,9.5 L0,6.5 C-3.38176876e-17,6.22385763 0.223857625,6 0.5,6 C0.776142375,6 1,6.22385763 1,6.5 Z M16,6.5 L16,9.5 C16,9.77614237 15.7761424,10 15.5,10 C15.2238576,10 15,9.77614237 15,9.5 L15,6.5 C15,6.22385763 15.2238576,6 15.5,6 C15.7761424,6 16,6.22385763 16,6.5 Z M0,2.5 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 L2.5,0 C2.77614237,-5.07265313e-17 3,0.223857625 3,0.5 C3,0.776142375 2.77614237,1 2.5,1 L1.5,1 C1.22385763,1 1,1.22385763 1,1.5 L1,2.5 C1,2.77614237 0.776142375,3 0.5,3 C0.223857625,3 3.38176876e-17,2.77614237 0,2.5 Z M6,0.5 C6,0.223857625 6.22385763,5.07265313e-17 6.5,0 L9.5,0 C9.77614237,-5.07265313e-17 10,0.223857625 10,0.5 C10,0.776142375 9.77614237,1 9.5,1 L6.5,1 C6.22385763,1 6,0.776142375 6,0.5 Z M15,2.5 L15,1.5 C15,1.22385763 14.7761424,1 14.5,1 L13.5,1 C13.2238576,1 13,0.776142375 13,0.5 C13,0.223857625 13.2238576,5.07265313e-17 13.5,0 L15,0 C15.5522847,-1.01453063e-16 16,0.44771525 16,1 L16,2.5 C16,2.77614237 15.7761424,3 15.5,3 C15.2238576,3 15,2.77614237 15,2.5 Z M4,4 L4,12 L12,4 L4,4 Z M4,3 L12,3 C12.5522847,3 13,3.44771525 13,4 L13,12 C13,12.5522847 12.5522847,13 12,13 L4,13 C3.44771525,13 3,12.5522847 3,12 L3,4 C3,3.44771525 3.44771525,3 4,3 Z'
    });
  };

  var selectPossible = function selectPossible(props) {
    return _objectSpread2({}, props, {
      d: 'M6,15.5 C6,15.2238576 6.22385763,15 6.5,15 L9.5,15 C9.77614237,15 10,15.2238576 10,15.5 C10,15.7761424 9.77614237,16 9.5,16 L6.5,16 C6.22385763,16 6,15.7761424 6,15.5 Z M1,13.5 L1,14.5 C1,14.7761424 1.22385763,15 1.5,15 L2.5,15 C2.77614237,15 3,15.2238576 3,15.5 C3,15.7761424 2.77614237,16 2.5,16 L1,16 C0.44771525,16 6.76353751e-17,15.5522847 0,15 L0,13.5 C-3.38176876e-17,13.2238576 0.223857625,13 0.5,13 C0.776142375,13 1,13.2238576 1,13.5 Z M15,13.5 C15,13.2238576 15.2238576,13 15.5,13 C15.7761424,13 16,13.2238576 16,13.5 L16,15 C16,15.5522847 15.5522847,16 15,16 L13.5,16 C13.2238576,16 13,15.7761424 13,15.5 C13,15.2238576 13.2238576,15 13.5,15 L14.5,15 C14.7761424,15 15,14.7761424 15,14.5 L15,13.5 Z M1,6.5 L1,9.5 C1,9.77614237 0.776142375,10 0.5,10 C0.223857625,10 3.38176876e-17,9.77614237 0,9.5 L0,6.5 C-3.38176876e-17,6.22385763 0.223857625,6 0.5,6 C0.776142375,6 1,6.22385763 1,6.5 Z M16,6.5 L16,9.5 C16,9.77614237 15.7761424,10 15.5,10 C15.2238576,10 15,9.77614237 15,9.5 L15,6.5 C15,6.22385763 15.2238576,6 15.5,6 C15.7761424,6 16,6.22385763 16,6.5 Z M0,2.5 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 L2.5,0 C2.77614237,-5.07265313e-17 3,0.223857625 3,0.5 C3,0.776142375 2.77614237,1 2.5,1 L1.5,1 C1.22385763,1 1,1.22385763 1,1.5 L1,2.5 C1,2.77614237 0.776142375,3 0.5,3 C0.223857625,3 3.38176876e-17,2.77614237 0,2.5 Z M6,0.5 C6,0.223857625 6.22385763,5.07265313e-17 6.5,0 L9.5,0 C9.77614237,-5.07265313e-17 10,0.223857625 10,0.5 C10,0.776142375 9.77614237,1 9.5,1 L6.5,1 C6.22385763,1 6,0.776142375 6,0.5 Z M15,2.5 L15,1.5 C15,1.22385763 14.7761424,1 14.5,1 L13.5,1 C13.2238576,1 13,0.776142375 13,0.5 C13,0.223857625 13.2238576,5.07265313e-17 13.5,0 L15,0 C15.5522847,-1.01453063e-16 16,0.44771525 16,1 L16,2.5 C16,2.77614237 15.7761424,3 15.5,3 C15.2238576,3 15,2.77614237 15,2.5 Z M4,4 L4,12 L12,12 L12,4 L4,4 Z M4,3 L12,3 C12.5522847,3 13,3.44771525 13,4 L13,12 C13,12.5522847 12.5522847,13 12,13 L4,13 C3.44771525,13 3,12.5522847 3,12 L3,4 C3,3.44771525 3.44771525,3 4,3 Z'
    });
  };

  var selectExcluded = function selectExcluded(props) {
    return _objectSpread2({}, props, {
      d: 'M6,15.5 C6,15.2238576 6.22385763,15 6.5,15 L9.5,15 C9.77614237,15 10,15.2238576 10,15.5 C10,15.7761424 9.77614237,16 9.5,16 L6.5,16 C6.22385763,16 6,15.7761424 6,15.5 Z M1,13.5 L1,14.5 C1,14.7761424 1.22385763,15 1.5,15 L2.5,15 C2.77614237,15 3,15.2238576 3,15.5 C3,15.7761424 2.77614237,16 2.5,16 L1,16 C0.44771525,16 6.76353751e-17,15.5522847 0,15 L0,13.5 C-3.38176876e-17,13.2238576 0.223857625,13 0.5,13 C0.776142375,13 1,13.2238576 1,13.5 Z M15,13.5 C15,13.2238576 15.2238576,13 15.5,13 C15.7761424,13 16,13.2238576 16,13.5 L16,15 C16,15.5522847 15.5522847,16 15,16 L13.5,16 C13.2238576,16 13,15.7761424 13,15.5 C13,15.2238576 13.2238576,15 13.5,15 L14.5,15 C14.7761424,15 15,14.7761424 15,14.5 L15,13.5 Z M1,6.5 L1,9.5 C1,9.77614237 0.776142375,10 0.5,10 C0.223857625,10 3.38176876e-17,9.77614237 0,9.5 L0,6.5 C-3.38176876e-17,6.22385763 0.223857625,6 0.5,6 C0.776142375,6 1,6.22385763 1,6.5 Z M16,6.5 L16,9.5 C16,9.77614237 15.7761424,10 15.5,10 C15.2238576,10 15,9.77614237 15,9.5 L15,6.5 C15,6.22385763 15.2238576,6 15.5,6 C15.7761424,6 16,6.22385763 16,6.5 Z M0,2.5 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 L2.5,0 C2.77614237,-5.07265313e-17 3,0.223857625 3,0.5 C3,0.776142375 2.77614237,1 2.5,1 L1.5,1 C1.22385763,1 1,1.22385763 1,1.5 L1,2.5 C1,2.77614237 0.776142375,3 0.5,3 C0.223857625,3 3.38176876e-17,2.77614237 0,2.5 Z M6,0.5 C6,0.223857625 6.22385763,5.07265313e-17 6.5,0 L9.5,0 C9.77614237,-5.07265313e-17 10,0.223857625 10,0.5 C10,0.776142375 9.77614237,1 9.5,1 L6.5,1 C6.22385763,1 6,0.776142375 6,0.5 Z M15,2.5 L15,1.5 C15,1.22385763 14.7761424,1 14.5,1 L13.5,1 C13.2238576,1 13,0.776142375 13,0.5 C13,0.223857625 13.2238576,5.07265313e-17 13.5,0 L15,0 C15.5522847,-1.01453063e-16 16,0.44771525 16,1 L16,2.5 C16,2.77614237 15.7761424,3 15.5,3 C15.2238576,3 15,2.77614237 15,2.5 Z M4,3 L12,3 C12.5522847,3 13,3.44771525 13,4 L13,12 C13,12.5522847 12.5522847,13 12,13 L4,13 C3.44771525,13 3,12.5522847 3,12 L3,4 C3,3.44771525 3.44771525,3 4,3 Z'
    });
  };

  var createListboxSelectionToolbar = (function (_ref) {
    var layout = _ref.layout,
        model = _ref.model,
        translator = _ref.translator,
        _ref$onSelected = _ref.onSelected,
        onSelected = _ref$onSelected === void 0 ? function () {} : _ref$onSelected;

    var canSelectAll = function canSelectAll() {
      return ['qOption', 'qAlternative', 'qExcluded', 'qDeselected'].some(function (sc) {
        return layout.qListObject.qDimensionInfo.qStateCounts[sc] > 0;
      });
    };

    var canSelectPossible = function canSelectPossible() {
      return ['qOption'].some(function (sc) {
        return layout.qListObject.qDimensionInfo.qStateCounts[sc] > 0;
      });
    };

    var canSelectAlternative = function canSelectAlternative() {
      return ['qAlternative'].some(function (sc) {
        return layout.qListObject.qDimensionInfo.qStateCounts[sc] > 0;
      });
    };

    var canSelectExcluded = function canSelectExcluded() {
      return ['qAlternative', 'qExcluded'].some(function (sc) {
        return layout.qListObject.qDimensionInfo.qStateCounts[sc] > 0;
      });
    };

    return [{
      key: 'selectAll',
      type: 'menu-icon-button',
      label: translator.get('Selection.SelectAll'),
      getSvgIconShape: selectAll,
      enabled: canSelectAll,
      action: function action() {
        model.selectListObjectAll('/qListObjectDef');
        onSelected();
      }
    }, {
      key: 'selectPossible',
      type: 'menu-icon-button',
      label: translator.get('Selection.SelectPossible'),
      getSvgIconShape: selectPossible,
      enabled: canSelectPossible,
      action: function action() {
        model.selectListObjectPossible('/qListObjectDef');
        onSelected();
      }
    }, {
      key: 'selectAlternative',
      type: 'menu-icon-button',
      label: translator.get('Selection.SelectAlternative'),
      getSvgIconShape: selectAlternative,
      enabled: canSelectAlternative,
      action: function action() {
        model.selectListObjectAlternative('/qListObjectDef');
        onSelected();
      }
    }, {
      key: 'selectExcluded',
      type: 'menu-icon-button',
      label: translator.get('Selection.SelectExcluded'),
      getSvgIconShape: selectExcluded,
      enabled: canSelectExcluded,
      action: function action() {
        model.selectListObjectExcluded('/qListObjectDef');
        onSelected();
      }
    }];
  });

  var close$1 = function close(props) {
    return _objectSpread2({}, props, {
      d: 'M9.34535242,8 L13.3273238,11.9819714 C13.6988326,12.3534802 13.6988326,12.955815 13.3273238,13.3273238 C12.955815,13.6988326 12.3534802,13.6988326 11.9819714,13.3273238 L8,9.34535242 L4.01802863,13.3273238 C3.64651982,13.6988326 3.04418502,13.6988326 2.67267621,13.3273238 C2.3011674,12.955815 2.3011674,12.3534802 2.67267621,11.9819714 L6.65464758,8 L2.67267621,4.01802863 C2.3011674,3.64651982 2.3011674,3.04418502 2.67267621,2.67267621 C3.04418502,2.3011674 3.64651982,2.3011674 4.01802863,2.67267621 L8,6.65464758 L11.9819714,2.67267621 C12.3534802,2.3011674 12.955815,2.3011674 13.3273238,2.67267621 C13.6988326,3.04418502 13.6988326,3.64651982 13.3273238,4.01802863 L9.34535242,8 Z'
    });
  };

  var clearSelections = function clearSelections(props) {
    return _objectSpread2({}, props, {
      d: 'M6,15.5 L6,15.5 C6,15.2238576 6.22385763,15 6.5,15 L9.5,15 C9.77614237,15 10,15.2238576 10,15.5 L10,15.5 C10,15.7761424 9.77614237,16 9.5,16 L6.5,16 C6.22385763,16 6,15.7761424 6,15.5 Z M1,13.5 L1,14.5 C1,14.7761424 1.22385763,15 1.5,15 L2.5,15 C2.77614237,15 3,15.2238576 3,15.5 L3,15.5 C3,15.7761424 2.77614237,16 2.5,16 L1,16 C0.44771525,16 6.76353751e-17,15.5522847 0,15 L0,13.5 C-3.38176876e-17,13.2238576 0.223857625,13 0.5,13 L0.5,13 C0.776142375,13 1,13.2238576 1,13.5 Z M1,6.5 L1,9.5 C1,9.77614237 0.776142375,10 0.5,10 L0.5,10 C0.223857625,10 3.38176876e-17,9.77614237 0,9.5 L0,6.5 C-3.38176876e-17,6.22385763 0.223857625,6 0.5,6 L0.5,6 C0.776142375,6 1,6.22385763 1,6.5 Z M0,2.5 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 L2.5,0 C2.77614237,-5.07265313e-17 3,0.223857625 3,0.5 L3,0.5 C3,0.776142375 2.77614237,1 2.5,1 L1.5,1 C1.22385763,1 1,1.22385763 1,1.5 L1,2.5 C1,2.77614237 0.776142375,3 0.5,3 L0.5,3 C0.223857625,3 3.38176876e-17,2.77614237 0,2.5 Z M6,0.5 L6,0.5 C6,0.223857625 6.22385763,5.07265313e-17 6.5,0 L9.5,0 C9.77614237,-5.07265313e-17 10,0.223857625 10,0.5 L10,0.5 C10,0.776142375 9.77614237,1 9.5,1 L6.5,1 C6.22385763,1 6,0.776142375 6,0.5 Z M15,2.5 L15,1.5 C15,1.22385763 14.7761424,1 14.5,1 L13.5,1 C13.2238576,1 13,0.776142375 13,0.5 L13,0.5 C13,0.223857625 13.2238576,5.07265313e-17 13.5,0 L15,0 C15.5522847,-1.01453063e-16 16,0.44771525 16,1 L16,2.5 C16,2.77614237 15.7761424,3 15.5,3 L15.5,3 C15.2238576,3 15,2.77614237 15,2.5 Z M9.1661442,6.1661442 C10.7210031,4.61128527 13.2789969,4.61128527 14.8338558,6.1661442 C16.3887147,7.72100313 16.3887147,10.2789969 14.8338558,11.8338558 C13.2789969,13.3887147 10.7210031,13.3887147 9.1661442,11.8338558 C7.61128527,10.2789969 7.61128527,7.77115987 9.1661442,6.1661442 Z M14.1316614,7.72100313 C14.3322884,7.52037618 14.3824451,7.169279 14.1316614,6.9184953 C13.8808777,6.6677116 13.5297806,6.71786834 13.3291536,6.9184953 L12.0250784,8.22257053 L10.7210031,6.9184953 C10.5203762,6.6677116 10.1191223,6.6677116 9.9184953,6.9184953 C9.6677116,7.11912226 9.6677116,7.52037618 9.9184953,7.72100313 L11.2225705,9.02507837 L9.9184953,10.3291536 C9.6677116,10.5297806 9.6677116,10.8808777 9.9184953,11.1316614 C10.169279,11.3824451 10.5203762,11.3824451 10.7210031,11.1316614 L12.0250784,9.82758621 L13.3291536,11.1316614 C13.5297806,11.3824451 13.8808777,11.3824451 14.1316614,11.1316614 C14.3322884,10.9310345 14.3824451,10.5297806 14.1316614,10.3291536 L12.8275862,9.02507837 L14.1316614,7.72100313 Z'
    });
  };

  var ClearSelections = (function (props) {
    return SvgIcon(clearSelections(props));
  });

  var useStyles$1 = makeStyles(function (theme) {
    return {
      icon: {
        color: theme.palette.text.primary
      }
    };
  });

  var Item = function Item(_ref) {
    var item = _ref.item;
    var disabled = typeof item.enabled === 'function' ? !item.enabled() : !!item.disabled;

    var _useStyles = useStyles$1(),
        icon = _useStyles.icon;

    var hasSvgIconShape = typeof item.getSvgIconShape === 'function';

    if (item.type === 'menu-icon-button') {
      return react.createElement(MenuItem$1, {
        divider: true,
        title: item.label,
        onClick: function onClick() {
          return item.action();
        },
        disabled: disabled
      }, react.createElement(ListItemIcon$1, {
        className: icon
      }, hasSvgIconShape && SvgIcon(item.getSvgIconShape())), react.createElement(Typography$1, null, item.label));
    } // TODO - handle active/toggled state


    return item.type === 'button' ? react.createElement(Button$1, {
      title: item.label,
      variant: "contained",
      style: {
        backgroundColor: item.color
      },
      onClick: function onClick() {
        return item.action();
      },
      disabled: disabled
    }, hasSvgIconShape && SvgIcon(item.getSvgIconShape())) : react.createElement(IconButton$1, {
      title: item.label,
      onClick: function onClick() {
        return item.action();
      },
      disabled: disabled
    }, hasSvgIconShape && SvgIcon(item.getSvgIconShape()));
  };

  var SelectionToolbar = react.forwardRef(function (_ref, ref) {
    var layout = _ref.layout,
        items = _ref.items;
    return react.createElement(react.Fragment, null, items.map(function (e, ix) {
      return react.createElement(Item, {
        key: e.key,
        layout: layout,
        item: e,
        ref: ix === 0 ? ref : null
      });
    }));
  });

  var SelectionToolbarWithDefault = function SelectionToolbarWithDefault(_ref2) {
    var layout = _ref2.layout,
        api = _ref2.api,
        _ref2$xItems = _ref2.xItems,
        xItems = _ref2$xItems === void 0 ? [] : _ref2$xItems,
        _ref2$onCancel = _ref2.onCancel,
        onCancel = _ref2$onCancel === void 0 ? function () {} : _ref2$onCancel,
        _ref2$onConfirm = _ref2.onConfirm,
        onConfirm = _ref2$onConfirm === void 0 ? function () {} : _ref2$onConfirm;

    var _useContext = react_8(InstanceContext),
        translator = _useContext.translator;

    var items = [].concat(_toConsumableArray(xItems), [{
      key: 'clear',
      type: 'icon-button',
      label: translator.get('Selection.Clear'),
      enabled: function enabled() {
        return api.canClear();
      },
      action: function action() {
        return api.clear();
      },
      getSvgIconShape: clearSelections
    }, {
      key: 'cancel',
      type: 'icon-button',
      label: translator.get('Selection.Cancel'),
      enabled: function enabled() {
        return api.canCancel();
      },
      action: function action() {
        api.cancel();
        onCancel();
      },
      getSvgIconShape: close$1
    }, {
      key: 'confirm',
      type: 'icon-button',
      label: translator.get('Selection.Confirm'),
      enabled: function enabled() {
        return api.canConfirm();
      },
      action: function action() {
        api.confirm();
        onConfirm();
      },
      getSvgIconShape: tick
    }]);
    return react.createElement(SelectionToolbar, {
      layout: layout,
      items: items
    });
  };

  var search = function search(props) {
    return _objectSpread2({}, props, {
      d: 'M15.7873809,13.80959 C16.1870614,14.209868 15.9872212,15.1104934 15.4876205,15.5107714 C15.08794,15.9110493 14.1886588,16.2112578 13.7889782,15.8109798 L11.0911347,13.1091035 L10.9912145,12.5086866 L10.2917736,11.8082001 C9.19265216,12.5086866 7.89369045,13.0090341 6.49480859,13.0090341 C2.89768383,13.0090341 0,10.1070188 0,6.50451703 C0,2.90201529 2.89768383,0 6.49480859,0 C10.0919334,0 12.9896172,2.90201529 12.9896172,6.50451703 C12.9896172,7.90548992 12.4900165,9.20639333 11.7905756,10.3071577 L12.4900165,11.0076442 L13.0895373,11.1077137 L15.7873809,13.80959 Z M11.2909749,6.50451703 C11.2909749,5.20361362 10.7913743,4.00277971 9.89209309,3.00208478 C8.9928119,2.10145935 7.79377031,1.60111188 6.49480859,1.60111188 C5.19584688,1.60111188 3.99680529,2.10145935 2.99760397,3.00208478 C2.09832278,4.00277971 1.59872212,5.20361362 1.59872212,6.50451703 C1.59872212,7.80542043 2.09832278,9.00625434 2.99760397,9.90687978 C3.89688516,10.8075052 5.09592674,11.3078527 6.49480859,11.3078527 C7.79377031,11.4079222 8.9928119,10.9075747 9.89209309,9.90687978 C10.7913743,9.00625434 11.2909749,7.80542043 11.2909749,6.50451703 Z'
    });
  };

  var Search = (function (props) {
    return SvgIcon(search(props));
  });

  var useStyles$2 = makeStyles(function (theme) {
    return {
      root: {
        '& fieldset': {
          borderRadius: 0,
          borderColor: "".concat(theme.palette.divider, " transparent")
        }
      }
    };
  });
  var TREE_PATH = '/qListObjectDef';
  function ListBoxSearch(_ref) {
    var model = _ref.model;

    var _useContext = react_8(InstanceContext),
        translator = _useContext.translator;

    var _useState = react_1(''),
        _useState2 = _slicedToArray(_useState, 2),
        value = _useState2[0],
        setValue = _useState2[1];

    var onChange = function onChange(e) {
      setValue(e.target.value);
      model.searchListObjectFor(TREE_PATH, e.target.value);
    };

    var onKeyDown = function onKeyDown(e) {
      switch (e.key) {
        case 'Enter':
          model.acceptListObjectSearch(TREE_PATH, true);
          setValue('');
          break;

        case 'Escape':
          model.abortListObjectSearch(TREE_PATH);
          break;
      }
    };

    var classes = useStyles$2();
    return react.createElement(OutlinedInput$1, {
      startAdornment: react.createElement(InputAdornment$1, {
        position: "start"
      }, react.createElement(Search, null)),
      className: [classes.root].join(' '),
      autoFocus: true,
      margin: "dense",
      fullWidth: true,
      placeholder: translator.get('Listbox.Search'),
      value: value,
      onChange: onChange,
      onKeyDown: onKeyDown
    });
  }

  /**
   * Utility functions
   */

  var util$1 = {};

  util$1.isObject = function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
  };

  util$1.isNumber = function isNumber(arg) {
    return typeof arg === 'number';
  };

  util$1.isUndefined = function isUndefined(arg) {
    return arg === void 0;
  };

  util$1.isFunction = function isFunction(arg){
    return typeof arg === 'function';
  };


  /**
   * EventEmitter class
   */

  function EventEmitter$1() {
    EventEmitter$1.init.call(this);
  }
  var nodeEventEmitter$1 = EventEmitter$1;

  // Backwards-compat with node 0.10.x
  EventEmitter$1.EventEmitter = EventEmitter$1;

  EventEmitter$1.prototype._events = undefined;
  EventEmitter$1.prototype._maxListeners = undefined;

  // By default EventEmitters will print a warning if more than 10 listeners are
  // added to it. This is a useful default which helps finding memory leaks.
  EventEmitter$1.defaultMaxListeners = 10;

  EventEmitter$1.init = function() {
    this._events = this._events || {};
    this._maxListeners = this._maxListeners || undefined;
  };

  // Obviously not all Emitters should be limited to 10. This function allows
  // that to be increased. Set to zero for unlimited.
  EventEmitter$1.prototype.setMaxListeners = function(n) {
    if (!util$1.isNumber(n) || n < 0 || isNaN(n))
      throw TypeError('n must be a positive number');
    this._maxListeners = n;
    return this;
  };

  EventEmitter$1.prototype.emit = function(type) {
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

    if (util$1.isUndefined(handler))
      return false;

    if (util$1.isFunction(handler)) {
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
    } else if (util$1.isObject(handler)) {
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

  EventEmitter$1.prototype.addListener = function(type, listener) {
    var m;

    if (!util$1.isFunction(listener))
      throw TypeError('listener must be a function');

    if (!this._events)
      this._events = {};

    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (this._events.newListener)
      this.emit('newListener', type,
                util$1.isFunction(listener.listener) ?
                listener.listener : listener);

    if (!this._events[type])
      // Optimize the case of one listener. Don't need the extra array object.
      this._events[type] = listener;
    else if (util$1.isObject(this._events[type]))
      // If we've already got an array, just append.
      this._events[type].push(listener);
    else
      // Adding the second element, need to change to array.
      this._events[type] = [this._events[type], listener];

    // Check for listener leak
    if (util$1.isObject(this._events[type]) && !this._events[type].warned) {
      var m;
      if (!util$1.isUndefined(this._maxListeners)) {
        m = this._maxListeners;
      } else {
        m = EventEmitter$1.defaultMaxListeners;
      }

      if (m && m > 0 && this._events[type].length > m) {
        this._events[type].warned = true;

        if (util$1.isFunction(console.error)) {
          console.error('(node) warning: possible EventEmitter memory ' +
                        'leak detected. %d listeners added. ' +
                        'Use emitter.setMaxListeners() to increase limit.',
                        this._events[type].length);
        }
        if (util$1.isFunction(console.trace))
          console.trace();
      }
    }

    return this;
  };

  EventEmitter$1.prototype.on = EventEmitter$1.prototype.addListener;

  EventEmitter$1.prototype.once = function(type, listener) {
    if (!util$1.isFunction(listener))
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
  EventEmitter$1.prototype.removeListener = function(type, listener) {
    var list, position, length, i;

    if (!util$1.isFunction(listener))
      throw TypeError('listener must be a function');

    if (!this._events || !this._events[type])
      return this;

    list = this._events[type];
    length = list.length;
    position = -1;

    if (list === listener ||
        (util$1.isFunction(list.listener) && list.listener === listener)) {
      delete this._events[type];
      if (this._events.removeListener)
        this.emit('removeListener', type, listener);

    } else if (util$1.isObject(list)) {
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

  EventEmitter$1.prototype.removeAllListeners = function(type) {
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

    if (util$1.isFunction(listeners)) {
      this.removeListener(type, listeners);
    } else if (Array.isArray(listeners)) {
      // LIFO order
      while (listeners.length)
        this.removeListener(type, listeners[listeners.length - 1]);
    }
    delete this._events[type];

    return this;
  };

  EventEmitter$1.prototype.listeners = function(type) {
    var ret;
    if (!this._events || !this._events[type])
      ret = [];
    else if (util$1.isFunction(this._events[type]))
      ret = [this._events[type]];
    else
      ret = this._events[type].slice();
    return ret;
  };

  EventEmitter$1.listenerCount = function(emitter, type) {
    var ret;
    if (!emitter._events || !emitter._events[type])
      ret = 0;
    else if (util$1.isFunction(emitter._events[type]))
      ret = 1;
    else
      ret = emitter._events[type].length;
    return ret;
  };

  function eventmixin (obj) {
    /* eslint no-param-reassign: 0 */
    Object.keys(nodeEventEmitter$1.prototype).forEach(function (key) {
      obj[key] = nodeEventEmitter$1.prototype[key];
    });
    nodeEventEmitter$1.init(obj);
    return obj;
  }

  var event = function event() {
    var prevented = false;
    return {
      isPrevented: function isPrevented() {
        return prevented;
      },
      preventDefault: function preventDefault() {
        prevented = true;
      }
    };
  };

  function createObjectSelections(_ref) {
    var appSelections = _ref.appSelections,
        model = _ref.model;
    var layout;
    var _isActive = false;
    var hasSelected = false;
    /**
     * @interface
     * @alias ObjectSelections
     */

    var api =
    /** @lends ObjectSelections */
    {
      // model,
      id: model.id,
      setLayout: function setLayout(lyt) {
        layout = lyt;
      },

      /**
       * @param {string[]} paths
       * @returns {Promise<undefined>}
       */
      begin: function begin(paths) {
        var e = event(); // TODO - event as parameter?

        this.emit('activate', e);

        if (e.isPrevented()) {
          return Promise.resolve();
        }

        _isActive = true;
        this.emit('activated');
        return appSelections.switchModal(model, paths, true);
      },

      /**
       * @returns {Promise<undefined>}
       */
      clear: function clear() {
        hasSelected = false;
        this.emit('cleared');

        if (layout.qListObject) {
          return model.clearSelections('/qListObjectDef');
        }

        return model.resetMadeSelections();
      },

      /**
       * @returns {Promise<undefined>}
       */
      confirm: function confirm() {
        hasSelected = false;
        _isActive = false;
        this.emit('confirmed');
        this.emit('deactivated');
        return appSelections.switchModal(null, null, true);
      },

      /**
       * @returns {Promise<undefined>}
       */
      cancel: function cancel() {
        hasSelected = false;
        _isActive = false;
        this.emit('canceled'); // FIXME - spelling?

        this.emit('deactivated');
        return appSelections.switchModal(null, null, false, false);
      },

      /**
       * @param {object} s
       * @param {string} s.method
       * @param {any[]} s.params
       * @returns {Promise<boolean>}
       */
      select: function select(s) {
        var _this = this;

        var b = this.begin([s.params[0]]);

        if (!appSelections.isModal()) {
          return Promise.resolve(false);
        }

        hasSelected = true;
        return b.then(function () {
          return model[s.method].apply(model, _toConsumableArray(s.params)).then(function (qSuccess) {
            if (!qSuccess) {
              _this.clear();

              return false;
            }

            return true;
          });
        });
      },

      /**
       * @returns {boolean}
       */
      canClear: function canClear() {
        if (layout && layout.qListObject && layout.qListObject.qDimensionInfo) {
          return !layout.qListObject.qDimensionInfo.qLocked;
        }

        return hasSelected || layout && layout.qSelectionInfo.qMadeSelections;
      },

      /**
       * @returns {boolean}
       */
      canConfirm: function canConfirm() {
        if (layout && layout.qListObject && layout.qListObject.qDimensionInfo) {
          return !layout.qListObject.qDimensionInfo.qLocked;
        }

        return hasSelected || layout && layout.qSelectionInfo.qMadeSelections;
      },

      /**
       * @returns {boolean}
       */
      canCancel: function canCancel() {
        if (layout && layout.qListObject && layout.qListObject.qDimensionInfo) {
          return !layout.qListObject.qDimensionInfo.qLocked;
        }

        return true;
      },

      /**
       * @returns {boolean}
       */
      isActive: function isActive() {
        return _isActive;
      },

      /**
       * @returns {boolean}
       */
      isModal: function isModal() {
        return appSelections.isModal(model);
      },

      /**
       * @param {string[]} paths
       * @returns {Promise<undefined>}
       */
      goModal: function goModal(paths) {
        return appSelections.switchModal(model, paths, false);
      },

      /**
       * @param {boolean} [accept=false]
       * @returns {Promise<undefined>}
       */
      noModal: function noModal() {
        var accept = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        return appSelections.switchModal(null, null, accept);
      },

      /**
       * @returns {Promise<undefined>}
       */
      abortModal: function abortModal() {
        return appSelections.abortModal(true);
      }
    };
    eventmixin(api);
    return api;
  }

  function useObjectSelections(app, model) {
    var _useAppSelections = useAppSelections(app),
        _useAppSelections2 = _slicedToArray(_useAppSelections, 1),
        appSelections = _useAppSelections2[0];

    var _useLayout = useLayout(model),
        _useLayout2 = _slicedToArray(_useLayout, 1),
        layout = _useLayout2[0];

    var key = model ? model.id : null;

    var _useObjectSelectionsS = useObjectSelectionsStore(),
        _useObjectSelectionsS2 = _slicedToArray(_useObjectSelectionsS, 1),
        objectSelectionsStore = _useObjectSelectionsS2[0];

    var objectSelections = objectSelectionsStore.get(key);
    react_2(function () {
      if (!appSelections || !model || objectSelections) return;
      objectSelections = createObjectSelections({
        appSelections: appSelections,
        model: model
      });
      objectSelectionsStore.set(key, objectSelections);
    }, [appSelections, model]);
    react_2(function () {
      if (!objectSelections) return;
      objectSelections.setLayout(layout);
    }, [objectSelections, layout]);
    return [objectSelections];
  }

  function ListBoxPopover(_ref) {
    var alignTo = _ref.alignTo,
        show = _ref.show,
        close = _ref.close,
        app = _ref.app,
        fieldName = _ref.fieldName,
        _ref$stateName = _ref.stateName,
        stateName = _ref$stateName === void 0 ? '$' : _ref$stateName;
    var open = show && Boolean(alignTo.current);
    var theme = useTheme();

    var _useSessionModel = useSessionModel({
      qInfo: {
        qType: 'njsListbox'
      },
      qListObjectDef: {
        qStateName: stateName,
        qShowAlternatives: true,
        qInitialDataFetch: [{
          qTop: 0,
          qLeft: 0,
          qWidth: 0,
          qHeight: 0
        }],
        qDef: {
          qSortCriterias: [{
            qSortByState: 1,
            qSortByAscii: 1,
            qSortByNumeric: 1,
            qSortByLoadOrder: 1
          }],
          qFieldDefs: [fieldName]
        }
      }
    }, app, fieldName, stateName),
        _useSessionModel2 = _slicedToArray(_useSessionModel, 1),
        model = _useSessionModel2[0];

    var lock = react_9(function () {
      model.lock('/qListObjectDef');
    }, [model]);
    var unlock = react_9(function () {
      model.unlock('/qListObjectDef');
    }, [model]);

    var _useContext = react_8(InstanceContext),
        translator = _useContext.translator;

    var moreAlignTo = react_4();

    var _useState = react_1(false),
        _useState2 = _slicedToArray(_useState, 2),
        showSelectionsMenu = _useState2[0],
        setShowSelectionsMenu = _useState2[1];

    var _useObjectSelections = useObjectSelections(app, model),
        _useObjectSelections2 = _slicedToArray(_useObjectSelections, 1),
        selections = _useObjectSelections2[0];

    var _useLayout = useLayout(model),
        _useLayout2 = _slicedToArray(_useLayout, 1),
        layout = _useLayout2[0];

    react_2(function () {
      if (selections && open) {
        if (!selections.isModal(model)) {
          selections.goModal('/qListObjectDef');
        }
      }
    }, [selections, open]);

    if (!model || !layout || !translator) {
      return null;
    }

    var isLocked = layout.qListObject.qDimensionInfo.qLocked === true;

    var popoverClose = function popoverClose(e, reason) {
      var accept = reason !== 'escapeKeyDown';
      selections.noModal(accept);
      close();
    };

    var listboxSelectionToolbarItems = createListboxSelectionToolbar({
      layout: layout,
      model: model,
      translator: translator,
      onSelected: function onSelected() {
        return setShowSelectionsMenu(false);
      }
    });
    var moreItem = {
      key: 'more',
      type: 'icon-button',
      label: translator.get('Selection.Menu'),
      getSvgIconShape: more,
      enabled: function enabled() {
        return !isLocked;
      },
      action: function action() {
        return setShowSelectionsMenu(!showSelectionsMenu);
      }
    };
    var counts = layout.qListObject.qDimensionInfo.qStateCounts;
    var hasSelections = counts.qSelected + counts.qSelectedExcluded + counts.qLocked + counts.qLockedExcluded > 0;
    return react.createElement(Popover$1, {
      open: open,
      onClose: popoverClose,
      anchorEl: alignTo.current,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'center'
      },
      PaperProps: {
        style: {
          minWidth: '250px'
        }
      }
    }, react.createElement(StyledGrid, {
      container: true,
      direction: "column",
      spacing: 0
    }, react.createElement(StyledGrid, {
      item: true,
      container: true,
      style: {
        padding: theme.spacing(1)
      }
    }, react.createElement(StyledGrid, {
      item: true
    }, isLocked ? react.createElement(IconButton$1, {
      onClick: unlock,
      disabled: !isLocked
    }, react.createElement(Lock, null)) : react.createElement(IconButton$1, {
      onClick: lock,
      disabled: !hasSelections
    }, react.createElement(Unlock, null))), react.createElement(StyledGrid, {
      item: true,
      xs: true
    }), react.createElement(StyledGrid, {
      item: true
    }, react.createElement(SelectionToolbarWithDefault, {
      layout: layout,
      api: selections,
      xItems: [moreItem],
      onConfirm: popoverClose,
      onCancel: function onCancel() {
        return popoverClose(null, 'escapeKeyDown');
      }
    }))), react.createElement(StyledGrid, {
      item: true,
      xs: true
    }, react.createElement("div", {
      ref: moreAlignTo
    }), react.createElement(ListBoxSearch, {
      model: model
    }), react.createElement(ListBox, {
      model: model,
      selections: selections,
      direction: "ltr"
    }), showSelectionsMenu && react.createElement(Popover$1, {
      open: showSelectionsMenu,
      anchorEl: moreAlignTo.current,
      getContentAnchorEl: null,
      container: moreAlignTo.current,
      disablePortal: true,
      hideBackdrop: true,
      style: {
        pointerEvents: 'none'
      },
      transitionDuration: 0,
      elevation: 0,
      PaperProps: {
        style: {
          boxShadow: '0 12px 8px -8px rgba(0, 0, 0, 0.2)',
          minWidth: '250px',
          pointerEvents: 'auto'
        }
      }
    }, react.createElement(MenuList, null, react.createElement(SelectionToolbar, {
      layout: layout,
      items: listboxSelectionToolbarItems
    }))))));
  }

  var useStyles$3 = makeStyles(function (theme) {
    return {
      item: {
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        cursor: 'pointer',
        padding: '4px',
        '&:hover': {
          backgroundColor: theme.palette.action.hover
        }
      }
    };
  });
  function OneField(_ref) {
    var field = _ref.field,
        api = _ref.api,
        _ref$stateIx = _ref.stateIx,
        stateIx = _ref$stateIx === void 0 ? 0 : _ref$stateIx,
        _ref$skipHandleShowLi = _ref.skipHandleShowListBoxPopover,
        skipHandleShowListBoxPopover = _ref$skipHandleShowLi === void 0 ? false : _ref$skipHandleShowLi;

    var _useContext = react_8(InstanceContext),
        translator = _useContext.translator;

    var alignTo = react_4();
    var theme = useTheme();

    var _useState = react_1(false),
        _useState2 = _slicedToArray(_useState, 2),
        showListBoxPopover = _useState2[0],
        setShowListBoxPopover = _useState2[1];

    var classes = useStyles$3();

    var handleShowListBoxPopover = function handleShowListBoxPopover(e) {
      if (e.currentTarget.contains(e.target)) {
        // because click in popover will propagate to parent
        setShowListBoxPopover(!showListBoxPopover);
      }
    };

    var selection = field.selections[stateIx];

    if (typeof selection.qTotal === 'undefined') {
      selection.qTotal = 0;
    }

    var counts = selection.qStateCounts || {
      qSelected: 0,
      qLocked: 0,
      qExcluded: 0,
      qLockedExcluded: 0,
      qSelectedExcluded: 0,
      qAlternative: 0
    };
    var green = (counts.qSelected + counts.qLocked) / selection.qTotal;
    var white = counts.qAlternative / selection.qTotal;
    var grey = (counts.qExcluded + counts.qLockedExcluded + counts.qSelectedExcluded) / selection.qTotal;
    var numSelected = counts.qSelected + counts.qSelectedExcluded + counts.qLocked + counts.qLockedExcluded; // Maintain modal state in app selections

    var noSegments = numSelected === 0 && selection.qTotal === 0;
    var label = '';

    if (selection.qTotal === numSelected && selection.qTotal > 1) {
      label = translator.get('CurrentSelections.All');
    } else if (numSelected > 1 && selection.qTotal) {
      label = translator.get('CurrentSelections.Of', [numSelected, selection.qTotal]);
    } else if (selection.qSelectedFieldSelectionInfo) {
      label = selection.qSelectedFieldSelectionInfo.map(function (v) {
        return v.qName;
      }).join(', ');
    }

    if (field.states[stateIx] !== '$') {
      label = "".concat(field.states[stateIx], ": ").concat(label);
    }

    var segments = [{
      color: theme.palette.selected.main,
      ratio: green
    }, {
      color: theme.palette.selected.alternative,
      ratio: white
    }, {
      color: theme.palette.selected.excluded,
      ratio: grey
    }];
    segments.forEach(function (s, i) {
      s.offset = i ? segments[i - 1].offset + segments[i - 1].ratio : 0; // eslint-disable-line
    });
    return react.createElement(StyledGrid, {
      container: true,
      spacing: 0,
      ref: alignTo,
      className: classes.item,
      onClick: skipHandleShowListBoxPopover === false && handleShowListBoxPopover || null
    }, react.createElement(StyledGrid, {
      item: true,
      xs: true,
      style: {
        minWidth: 0,
        flexGrow: 1,
        opacity: selection.qLocked ? '0.3' : ''
      }
    }, react.createElement(Typography$1, {
      noWrap: true,
      style: {
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: 600
      }
    }, selection.qField), react.createElement(Typography$1, {
      noWrap: true,
      style: {
        fontSize: '12px',
        opacity: 0.55,
        lineHeight: '16px'
      }
    }, label)), selection.qLocked ? react.createElement(StyledGrid, {
      item: true
    }, react.createElement(IconButton$1, null, react.createElement(Lock, null))) : react.createElement(StyledGrid, {
      item: true
    }, react.createElement(IconButton$1, {
      title: translator.get('Selection.Clear'),
      onClick: function onClick(e) {
        e.stopPropagation();
        api.clearField(selection.qField, field.states[stateIx]);
      },
      style: {
        zIndex: 1
      }
    }, react.createElement(Remove, null))), react.createElement("div", {
      style: {
        height: '4px',
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%'
      }
    }, noSegments === false && segments.map(function (s) {
      return react.createElement("div", {
        key: s.color,
        style: {
          position: 'absolute',
          background: s.color,
          height: '100%',
          top: 0,
          width: "".concat(s.ratio * 100, "%"),
          left: "".concat(s.offset * 100, "%")
        }
      });
    })), showListBoxPopover && react.createElement(ListBoxPopover, {
      alignTo: alignTo,
      show: showListBoxPopover,
      close: function close() {
        return setShowListBoxPopover(false);
      },
      app: api.model,
      fieldName: selection.qField,
      stateName: field.states[stateIx]
    }));
  }

  var downArrow = function downArrow(props) {
    return _objectSpread2({}, props, {
      d: 'M8,9 L12.5,4.5 L14,6 L9.5,10.5 L8,12 L2,6 L3.5,4.5 L8,9 Z'
    });
  };

  var DownArrow = (function (props) {
    return SvgIcon(downArrow(props));
  });

  var useStyles$4 = makeStyles(function (theme) {
    return {
      item: {
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        cursor: 'pointer',
        padding: '4px',
        '&:hover': {
          backgroundColor: theme.palette.action.hover
        },
        height: '100%',
        alignItems: 'center'
      },
      badge: {
        padding: theme.spacing(0, 1)
      }
    };
  });
  function MultiState(_ref) {
    var field = _ref.field,
        api = _ref.api;
    var classes = useStyles$4();

    var _useState = react_1(false),
        _useState2 = _slicedToArray(_useState, 2),
        showFields = _useState2[0],
        setShowFields = _useState2[1];

    var _useState3 = react_1(-1),
        _useState4 = _slicedToArray(_useState3, 2),
        showStateIx = _useState4[0],
        setShowStateIx = _useState4[1];

    var _useState5 = react_1(null),
        _useState6 = _slicedToArray(_useState5, 2),
        anchorEl = _useState6[0],
        setAnchorEl = _useState6[1];

    var alignTo = react_4();

    var _useContext = react_8(InstanceContext),
        translator = _useContext.translator;

    var clearAllStates = translator.get('Selection.ClearAllStates');

    var handleShowFields = function handleShowFields(e) {
      if (e.currentTarget.contains(e.target)) {
        // because click in popover will propagate to parent
        setAnchorEl(e.currentTarget);
        alignTo.current = e.currentTarget;
        setShowFields(!showFields);
      }
    };

    var handleShowState = function handleShowState(e, ix) {
      e.stopPropagation();
      setShowFields(false);
      setShowStateIx(ix);
    };

    var handleClearAllStates = function handleClearAllStates() {
      field.states.forEach(function (s) {
        return api.clearField(field.name, s);
      });
    };

    return react.createElement(StyledGrid, {
      container: true,
      spacing: 0,
      className: classes.item,
      onClick: handleShowFields
    }, react.createElement(StyledGrid, {
      item: true,
      xs: true
    }, react.createElement(Badge$1, {
      className: classes.badge,
      color: "secondary",
      badgeContent: field.states.length
    }, react.createElement(Typography$1, {
      component: "span",
      noWrap: true,
      style: {
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: 600
      }
    }, field.name))), react.createElement(StyledGrid, {
      item: true
    }, react.createElement("div", {
      style: {
        width: '12px'
      }
    })), react.createElement(StyledGrid, {
      item: true
    }, react.createElement(IconButton$1, null, react.createElement(DownArrow, null))), showFields && react.createElement(Popover$1, {
      open: showFields,
      onClose: function onClose() {
        return setShowFields(false);
      },
      anchorEl: anchorEl,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'center'
      },
      PaperProps: {
        style: {
          minWidth: '200px',
          width: '200px',
          pointerEvents: 'auto'
        }
      }
    }, react.createElement(List$1, {
      dense: true
    }, react.createElement(ListItem$1, {
      title: clearAllStates,
      onClick: handleClearAllStates
    }, react.createElement(Button$1, {
      variant: "contained",
      fullWidth: true
    }, clearAllStates)), field.states.map(function (s, ix) {
      return (// eslint-disable-next-line react/no-array-index-key
        react.createElement(ListItem$1, {
          key: ix,
          title: field.name,
          onClick: function onClick(e) {
            return handleShowState(e, ix);
          }
        }, react.createElement(Box, {
          border: 1,
          width: "100%",
          borderRadius: "borderRadius",
          borderColor: "divider"
        }, react.createElement(OneField, {
          field: field,
          api: api,
          stateIx: ix,
          skipHandleShowListBoxPopover: true
        })))
      );
    }))), showStateIx > -1 && react.createElement(ListBoxPopover, {
      alignTo: alignTo,
      show: showStateIx > -1,
      close: function close() {
        return setShowStateIx(-1);
      },
      app: api.model,
      fieldName: field.selections[showStateIx].qField,
      stateName: field.states[showStateIx]
    }));
  }

  function collect(qSelectionObject, fields) {
    var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '$';
    qSelectionObject.qSelections.forEach(function (selection) {
      var name = selection.qField;
      var field = fields[name] = fields[name] || {
        name: name,
        states: [],
        selections: []
      }; // eslint-disable-line

      if (field.states.indexOf(state) === -1) {
        field.states.push(state);
        field.selections.push(selection);
      }
    });
  }

  function getItems(layout) {
    if (!layout) {
      return [];
    }

    var fields = {};

    if (layout.qSelectionObject) {
      collect(layout.qSelectionObject, fields);
    }

    if (layout.alternateStates) {
      layout.alternateStates.forEach(function (s) {
        return collect(s.qSelectionObject, fields, s.stateName);
      });
    }

    return Object.keys(fields).map(function (key) {
      return fields[key];
    });
  }

  function SelectedFields(_ref) {
    var api = _ref.api,
        app = _ref.app;
    var theme = useTheme();

    var _useCurrentSelections = useCurrentSelectionsModel(app),
        _useCurrentSelections2 = _slicedToArray(_useCurrentSelections, 1),
        currentSelectionsModel = _useCurrentSelections2[0];

    var _useLayout = useLayout(currentSelectionsModel),
        _useLayout2 = _slicedToArray(_useLayout, 1),
        layout = _useLayout2[0];

    var _useState = react_1({
      items: []
    }),
        _useState2 = _slicedToArray(_useState, 2),
        state = _useState2[0],
        setState = _useState2[1];

    var _useModalObjectStore = useModalObjectStore(),
        _useModalObjectStore2 = _slicedToArray(_useModalObjectStore, 1),
        modalObjectStore = _useModalObjectStore2[0];

    var isInListboxPopover = function isInListboxPopover() {
      var object = modalObjectStore.get(app.id);
      return object && object.genericType === 'njsListbox';
    };

    react_2(function () {
      if (!app || !currentSelectionsModel || !layout) {
        return;
      }

      var items = getItems(layout);
      setState(function (currState) {
        var newItems = items; // Maintain modal state in app selections

        if (isInListboxPopover() && newItems.length + 1 === currState.items.length) {
          var lastDeselectedField = currState.items.filter(function (f1) {
            return newItems.some(function (f2) {
              return f1.name === f2.name;
            }) === false;
          })[0];
          var qField = lastDeselectedField.selections[0].qField;
          lastDeselectedField.selections = [{
            qField: qField
          }];
          var wasIx = currState.items.indexOf(lastDeselectedField);
          newItems.splice(wasIx, 0, lastDeselectedField);
        }

        return {
          items: newItems
        };
      });
    }, [app, currentSelectionsModel, layout, api.isInModal()]);
    return react.createElement(StyledGrid, {
      container: true,
      spacing: 0,
      wrap: "nowrap",
      style: {
        height: '100%'
      }
    }, state.items.map(function (s) {
      return react.createElement(StyledGrid, {
        item: true,
        key: "".concat(s.states.join('::'), "::").concat(s.name),
        style: {
          position: 'relative',
          maxWidth: '240px',
          minWidth: '120px',
          background: theme.palette.background.paper,
          borderRight: "1px solid ".concat(theme.palette.divider)
        }
      }, s.states.length > 1 ? react.createElement(MultiState, {
        field: s,
        api: api
      }) : react.createElement(OneField, {
        field: s,
        api: api
      }));
    }));
  }

  var selectionsBack = function selectionsBack(props) {
    return _objectSpread2({}, props, {
      d: 'M10,15.5 C10,15.7761424 9.77614237,16 9.5,16 L6.5,16 C6.22385763,16 6,15.7761424 6,15.5 C6,15.2238576 6.22385763,15 6.5,15 L9.5,15 C9.77614237,15 10,15.2238576 10,15.5 Z M15,13.5 C15,13.2238576 15.2238576,13 15.5,13 C15.7761424,13 16,13.2238576 16,13.5 L16,15 C16,15.5522847 15.5522847,16 15,16 L13.5,16 C13.2238576,16 13,15.7761424 13,15.5 C13,15.2238576 13.2238576,15 13.5,15 L14.5,15 C14.7761424,15 15,14.7761424 15,14.5 L15,13.5 Z M15,6.5 C15,6.22385763 15.2238576,6 15.5,6 C15.7761424,6 16,6.22385763 16,6.5 L16,9.5 C16,9.77614237 15.7761424,10 15.5,10 C15.2238576,10 15,9.77614237 15,9.5 L15,6.5 Z M16,2.5 C16,2.77614237 15.7761424,3 15.5,3 C15.2238576,3 15,2.77614237 15,2.5 L15,1.5 C15,1.22385763 14.7761424,1 14.5,1 L13.5,1 C13.2238576,1 13,0.776142375 13,0.5 C13,0.223857625 13.2238576,-5.07265313e-17 13.5,0 L15,0 C15.5522847,1.01453063e-16 16,0.44771525 16,1 L16,2.5 Z M10,0.5 C10,0.776142375 9.77614237,1 9.5,1 L6.5,1 C6.22385763,1 6,0.776142375 6,0.5 C6,0.223857625 6.22385763,-5.07265313e-17 6.5,0 L9.5,0 C9.77614237,5.07265313e-17 10,0.223857625 10,0.5 Z M1,2.5 C1,2.77614237 0.776142375,3 0.5,3 C0.223857625,3 5.18696197e-13,2.77614237 5.18696197e-13,2.5 L5.18696197e-13,1 C5.18696197e-13,0.44771525 0.44771525,-1.01453063e-16 1,0 L2.5,0 C2.77614237,5.07265313e-17 3,0.223857625 3,0.5 C3,0.776142375 2.77614237,1 2.5,1 L1.5,1 C1.22385763,1 1,1.22385763 1,1.5 L1,2.5 Z M1,13.5 L1,14.5 C1,14.7761424 1.22385763,15 1.5,15 L2.5,15 C2.77614237,15 3,15.2238576 3,15.5 C3,15.7761424 2.77614237,16 2.5,16 L1,16 C0.44771525,16 5.18696197e-13,15.5522847 5.18696197e-13,15 L5.18696197e-13,13.5 C5.18696197e-13,13.2238576 0.223857625,13 0.5,13 C0.776142375,13 1,13.2238576 1,13.5 Z M4,7 C7.49095643,7 10,10.1337595 10,12.1872632 C10,12.1872632 8.16051135,9.86624054 4,10 L4,12 C4,12 2.66666667,10.8333333 -1.0658141e-14,8.5 C-2.59348099e-13,8.5 1.33333333,7.33333333 4,5 C4,5 4,5.66666667 4,7 Z'
    });
  };

  var SelectionsBack = (function (props) {
    return SvgIcon(selectionsBack(props));
  });

  var selectionsForward = function selectionsForward(props) {
    return _objectSpread2({}, props, {
      d: 'M6,15.5 L6,15.5 C6,15.2238576 6.22385763,15 6.5,15 L9.5,15 C9.77614237,15 10,15.2238576 10,15.5 L10,15.5 C10,15.7761424 9.77614237,16 9.5,16 L6.5,16 C6.22385763,16 6,15.7761424 6,15.5 Z M1,13.5 L1,14.5 C1,14.7761424 1.22385763,15 1.5,15 L2.5,15 C2.77614237,15 3,15.2238576 3,15.5 L3,15.5 C3,15.7761424 2.77614237,16 2.5,16 L1,16 C0.44771525,16 6.76353751e-17,15.5522847 0,15 L0,13.5 C-3.38176876e-17,13.2238576 0.223857625,13 0.5,13 L0.5,13 C0.776142375,13 1,13.2238576 1,13.5 Z M1,6.5 L1,9.5 C1,9.77614237 0.776142375,10 0.5,10 L0.5,10 C0.223857625,10 3.38176876e-17,9.77614237 0,9.5 L0,6.5 C-3.38176876e-17,6.22385763 0.223857625,6 0.5,6 L0.5,6 C0.776142375,6 1,6.22385763 1,6.5 Z M0,2.5 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 L2.5,0 C2.77614237,-5.07265313e-17 3,0.223857625 3,0.5 L3,0.5 C3,0.776142375 2.77614237,1 2.5,1 L1.5,1 C1.22385763,1 1,1.22385763 1,1.5 L1,2.5 C1,2.77614237 0.776142375,3 0.5,3 L0.5,3 C0.223857625,3 3.38176876e-17,2.77614237 0,2.5 Z M6,0.5 L6,0.5 C6,0.223857625 6.22385763,5.07265313e-17 6.5,0 L9.5,0 C9.77614237,-5.07265313e-17 10,0.223857625 10,0.5 L10,0.5 C10,0.776142375 9.77614237,1 9.5,1 L6.5,1 C6.22385763,1 6,0.776142375 6,0.5 Z M15,2.5 L15,1.5 C15,1.22385763 14.7761424,1 14.5,1 L13.5,1 C13.2238576,1 13,0.776142375 13,0.5 L13,0.5 C13,0.223857625 13.2238576,5.07265313e-17 13.5,0 L15,0 C15.5522847,-1.01453063e-16 16,0.44771525 16,1 L16,2.5 C16,2.77614237 15.7761424,3 15.5,3 L15.5,3 C15.2238576,3 15,2.77614237 15,2.5 Z M15,13.5 C15,13.2238576 15.2238576,13 15.5,13 C15.7761424,13 16,13.2238576 16,13.5 L16,15 C16,15.5522847 15.5522847,16 15,16 L13.5,16 C13.2238576,16 13,15.7761424 13,15.5 C13,15.2238576 13.2238576,15 13.5,15 L14.5,15 C14.7761424,15 15,14.7761424 15,14.5 L15,13.5 Z M12,7 C12,5.66666667 12,5 12,5 C14.6666667,7.33333333 16,8.5 16,8.5 C13.3333333,10.8333333 12,12 12,12 L12,10 C7.83948865,9.86624054 6,12.1872632 6,12.1872632 C6,10.1337595 8.50904357,7 12,7 Z'
    });
  };

  var SelectionsForward = (function (props) {
    return SvgIcon(selectionsForward(props));
  });

  function Nav(_ref) {
    var api = _ref.api,
        app = _ref.app;

    var _useContext = react_8(InstanceContext),
        translator = _useContext.translator;

    var _useAppSelectionsNavi = useAppSelectionsNavigation(app),
        _useAppSelectionsNavi2 = _slicedToArray(_useAppSelectionsNavi, 1),
        navState = _useAppSelectionsNavi2[0];

    return react.createElement(StyledGrid, {
      container: true,
      wrap: "nowrap",
      style: {
        height: '100%',
        alignItems: 'center',
        padding: '0 8px'
      }
    }, react.createElement(StyledGrid, {
      item: true
    }, react.createElement(IconButton$1, {
      style: {
        marginRight: '8px'
      },
      disabled: !navState || !navState.canGoBack,
      title: translator.get('Navigate.Back'),
      onClick: function onClick() {
        return api.back();
      }
    }, react.createElement(SelectionsBack, null))), react.createElement(StyledGrid, {
      item: true
    }, react.createElement(IconButton$1, {
      style: {
        marginRight: '8px'
      },
      disabled: !navState || !navState.canGoForward,
      title: translator.get('Navigate.Forward'),
      onClick: function onClick() {
        return api.forward();
      }
    }, react.createElement(SelectionsForward, null))), react.createElement(StyledGrid, {
      item: true
    }, react.createElement(IconButton$1, {
      disabled: !navState || !navState.canClear,
      title: translator.get('Selection.ClearAll'),
      onClick: function onClick() {
        return api.clear();
      }
    }, react.createElement(ClearSelections, null))));
  }

  var AppSelections = function AppSelections(_ref) {
    var app = _ref.app;
    var theme = useTheme();

    var _useAppSelections = useAppSelections(app),
        _useAppSelections2 = _slicedToArray(_useAppSelections, 1),
        appSelections = _useAppSelections2[0];

    if (!appSelections) return null;
    return react.createElement(StyledGrid, {
      container: true,
      spacing: 0,
      wrap: "nowrap",
      style: {
        backgroundColor: theme.palette.background.paper,
        minHeight: '40px'
      }
    }, react.createElement(StyledGrid, {
      item: true,
      style: {
        borderRight: "1px solid ".concat(theme.palette.divider)
      }
    }, react.createElement(Nav, {
      api: appSelections,
      app: app
    })), react.createElement(StyledGrid, {
      item: true,
      xs: true,
      style: {
        backgroundColor: theme.palette.background.darker,
        overflow: 'hidden'
      }
    }, react.createElement(SelectedFields, {
      api: appSelections,
      app: app
    })));
  };
  function mount(_ref2) {
    var element = _ref2.element,
        app = _ref2.app;
    return reactDom.createPortal(react.createElement(AppSelections, {
      app: app
    }), element);
  }

  var idGen = [[10, 31], [0, 31], [0, 31], [0, 31], [0, 31], [0, 31]];

  function toChar(_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        min = _ref2[0],
        max = _ref2[1];

    return (min + (Math.random() * (max - min) | 0)).toString(32);
  }

  function uid() {
    return idGen.map(toChar).join('');
  }

  function addIndex(array, index) {
    for (var i = 0; i < array.length; ++i) {
      if (array[i] >= 0 && array[i] >= index) {
        ++array[i];
      }
    }

    array.push(index);
  }

  function removeIndex(array, index) {
    var removeIdx = 0;

    for (var i = 0; i < array.length; ++i) {
      if (array[i] > index) {
        --array[i];
      } else if (array[i] === index) {
        removeIdx = i;
      }
    }

    array.splice(removeIdx, 1);
    return removeIdx;
  }

  var nxDimension = function nxDimension(f) {
    return {
      qDef: {
        qFieldDefs: [f],
        qSortCriterias: [{
          qSortByLoadOrder: 1,
          qSortByNumeric: 1,
          qSortByAscii: 1
        }]
      }
    };
  };

  var nxMeasure = function nxMeasure(f) {
    return {
      qDef: {
        qDef: f
      },
      qSortBy: {
        qSortByLoadOrder: 1,
        qSortByNumeric: -1
      }
    };
  };

  function hcHandler(_ref) {
    var hc = _ref.hc,
        def = _ref.def,
        properties = _ref.properties;
    hc.qDimensions = hc.qDimensions || [];
    hc.qMeasures = hc.qMeasures || [];
    hc.qInterColumnSortOrder = hc.qInterColumnSortOrder || [];
    var objectProperties = properties;
    var h = {
      dimensions: function dimensions() {
        return hc.qDimensions;
      },
      measures: function measures() {
        return hc.qMeasures;
      },
      addDimension: function addDimension(d) {
        var dimension = typeof d === 'string' ? nxDimension(d) : _objectSpread2({}, d, {
          qDef: d.qDef || {}
        });
        dimension.qDef.cId = dimension.qDef.cId || uid();

        if (!dimension.qDef.cId) {
          dimension.qDef.cId = uid();
        }

        if (hc.qDimensions.length < h.maxDimensions()) {
          // TODO - apply autosort properties based on tags
          hc.qDimensions.push(dimension);
          addIndex(hc.qInterColumnSortOrder, hc.qDimensions.length - 1);
          def.dimensions.added(dimension, objectProperties);
        } else {
          hc.qLayoutExclude = hc.qLayoutExclude || {};
          hc.qLayoutExclude.qHyperCubeDef = hc.qLayoutExclude.qHyperCubeDef || {};
          hc.qLayoutExclude.qHyperCubeDef.qDimensions = hc.qLayoutExclude.qHyperCubeDef.qDimensions || [];
          hc.qLayoutExclude.qHyperCubeDef.qMeasures = hc.qLayoutExclude.qHyperCubeDef.qMeasures || [];
          hc.qLayoutExclude.qHyperCubeDef.qDimensions.push(dimension);
        }
      },
      removeDimension: function removeDimension(idx) {
        var dimension = hc.qDimensions.splice(idx, 1)[0];
        removeIndex(hc.qInterColumnSortOrder, idx);
        def.dimensions.removed(dimension, objectProperties, idx);
      },
      addMeasure: function addMeasure(m) {
        var measure = typeof m === 'string' ? nxMeasure(m) : _objectSpread2({}, m, {
          qDef: m.qDef || {}
        });
        measure.qDef.cId = measure.qDef.cId || uid();

        if (!measure.qDef.cId) {
          measure.qDef.cId = uid();
        }

        if (hc.qMeasures.length < h.maxMeasures()) {
          hc.qMeasures.push(measure);
          addIndex(hc.qInterColumnSortOrder, hc.qDimensions.length + hc.qMeasures.length - 1);
          def.measures.added(measure, objectProperties);
        } else {
          hc.qLayoutExclude = hc.qLayoutExclude || {};
          hc.qLayoutExclude.qHyperCubeDef = hc.qLayoutExclude.qHyperCubeDef || {};
          hc.qLayoutExclude.qHyperCubeDef.qDimensions = hc.qLayoutExclude.qHyperCubeDef.qDimensions || [];
          hc.qLayoutExclude.qHyperCubeDef.qMeasures = hc.qLayoutExclude.qHyperCubeDef.qMeasures || [];
          hc.qLayoutExclude.qHyperCubeDef.qMeasures.push(measure);
        }
      },
      removeMeasure: function removeMeasure(idx) {
        var measure = hc.qMeasures.splice(idx, 1)[0];
        removeIndex(hc.qInterColumnSortOrder, hc.qDimensions.length + idx);
        def.measures.removed(measure, objectProperties, idx);
      },
      maxDimensions: function maxDimensions() {
        return def.dimensions.max(hc.qMeasures.length);
      },
      maxMeasures: function maxMeasures() {
        return def.measures.max(hc.qDimensions.length);
      },
      canAddDimension: function canAddDimension() {
        return hc.qDimensions.length < h.maxDimensions();
      },
      canAddMeasure: function canAddMeasure() {
        return hc.qMeasures.length < h.maxMeasures();
      }
    };
    return h;
  }

  function fieldType(f) {
    if ( // a string starting with '=' is just a convention we use
    typeof f === 'string' && f[0] === '=' || // based on NxMeasure and NxInlineMeasureDef
    _typeof(f) === 'object' && f.qDef && f.qDef.qDef || // use 'type' instead of 'qType' since this is not a real property
    _typeof(f) === 'object' && f.qLibraryId && f.type === 'measure') {
      return 'measure';
    }

    return 'dimension';
  }
  function populateData(_ref, corona) {
    var sn = _ref.sn,
        properties = _ref.properties,
        fields = _ref.fields;

    if (!fields.length) {
      return;
    }

    var target = sn.qae.data.targets[0];

    if (!target) {
      corona.logger.warn('Attempting to add fields to an object without a specified data target');
      return;
    }

    var propertyPath = target.propertyPath;
    var parts = propertyPath.split('/');
    var p = properties;

    for (var i = 0; i < parts.length; i++) {
      var s = parts[i];
      p = s ? p[s] : p;
    }

    var hc = hcHandler({
      hc: p,
      def: target,
      properties: properties
    });
    fields.forEach(function (f) {
      var type = fieldType(f);

      if (type === 'measure') {
        hc.addMeasure(f);
      } else {
        hc.addDimension(f);
      }
    });
  }

  var warning = function warning(props) {
    return _objectSpread2({}, props, {
      d: 'M8.86225926,1.6 L15.7815749,13.5 C16.2829746,14.3 15.8818548,15 14.9793354,15 L1.04042422,15 C0.0853772072,15 -0.232971797,14.3650794 0.172002787,13.6135407 L7.05722041,1.6 C7.55862009,0.8 8.36085958,0.8 8.86225926,1.6 Z M7.962,2.007 C7.95987183,2.02476599 7.95607967,2.03712023 7.94920396,2.05249845 L1.1033193,14 L14.915544,14 L7.99777452,2.10265906 L7.97779697,2.06138411 L7.96394459,2.01964415 L7.962,2.007 Z M7.5,11 L8.5,11 C8.76666667,11 8.95432099,11.1580247 8.99272977,11.4038409 L9,11.5 L9,12.5 C9,12.7666667 8.84197531,12.954321 8.59615912,12.9927298 L8.5,13 L7.5,13 C7.23333333,13 7.04567901,12.8419753 7.00727023,12.5961591 L7,12.5 L7,11.5 C7,11.2333333 7.15802469,11.045679 7.40384088,11.0072702 L7.5,11 L8.5,11 L7.5,11 Z M7.5,5 L8.5,5 C8.76666667,5 8.95432099,5.15802469 8.99272977,5.40384088 L9,5.5 L9,9.5 C9,9.76666667 8.84197531,9.95432099 8.59615912,9.99272977 L8.5,10 L7.5,10 C7.23333333,10 7.04567901,9.84197531 7.00727023,9.59615912 L7,9.5 L7,5.5 C7,5.23333333 7.15802469,5.04567901 7.40384088,5.00727023 L7.5,5 L8.5,5 L7.5,5 Z'
    });
  };

  var WarningTriangle = (function (props) {
    return SvgIcon(warning(props));
  });

  var useStyles$5 = makeStyles$1(function () {
    return {
      contentError: {
        '&::before': {
          position: 'absolute',
          height: '100%',
          width: '100%',
          top: 0,
          left: 0,
          content: '""',
          backgroundSize: '14.14px 14.14px',
          backgroundImage: 'linear-gradient(135deg, currentColor 10%, rgba(0,0,0,0) 10%, rgba(0,0,0,0) 50%, currentColor 50%, currentColor 59%, rgba(0,0,0,0) 60%, rgba(0,0,0,0) 103%)',
          opacity: 0.1
        }
      }
    };
  });
  function Error$1(_ref) {
    var _ref$title = _ref.title,
        title = _ref$title === void 0 ? 'Error' : _ref$title,
        _ref$message = _ref.message,
        message = _ref$message === void 0 ? '' : _ref$message,
        _ref$data = _ref.data,
        data = _ref$data === void 0 ? [] : _ref$data;

    var _useStyles = useStyles$5(),
        contentError = _useStyles.contentError;

    return react.createElement(StyledGrid, {
      container: true,
      direction: "column",
      alignItems: "center",
      justify: "center",
      className: contentError,
      style: {
        position: 'relative',
        height: '100%'
      },
      spacing: 1
    }, react.createElement(StyledGrid, {
      item: true
    }, react.createElement(WarningTriangle, {
      style: {
        fontSize: '38px'
      }
    })), react.createElement(StyledGrid, {
      item: true
    }, react.createElement(Typography$1, {
      variant: "h6",
      align: "center",
      "data-tid": "error-title"
    }, title)), react.createElement(StyledGrid, {
      item: true
    }, react.createElement(Typography$1, {
      variant: "subtitle1",
      align: "center",
      "data-tid": "error-message"
    }, message)), react.createElement(StyledGrid, {
      item: true
    }, data.map(function (d, ix) {
      return (// eslint-disable-next-line react/no-array-index-key
        react.createElement(Typography$1, {
          key: ix,
          variant: "subtitle2",
          align: "center"
        }, d.path, " ", d.error && '-', " ", d.error && d.error.qErrorCode)
      );
    })));
  }

  var useStyles$6 = makeStyles(function (theme) {
    return {
      root: {
        position: 'relative',
        display: 'inline-block'
      },
      front: {
        color: theme.palette.secondary.main,
        animationDuration: '1500ms',
        position: 'absolute',
        left: 0
      },
      back: {
        color: theme.palette.divider
      }
    };
  });
  var SIZES = {
    small: 16,
    medium: 32,
    large: 64,
    xlarge: 128
  };
  function Progress(_ref) {
    var _ref$size = _ref.size,
        size = _ref$size === void 0 ? 'medium' : _ref$size,
        props = _objectWithoutProperties(_ref, ["size"]);

    var classes = useStyles$6();
    var s = SIZES[size];
    return react.createElement("div", {
      className: classes.root
    }, react.createElement(CircularProgress$1, _extends({
      variant: "determinate",
      value: 100,
      className: classes.back,
      size: s,
      thickness: 3
    }, props)), react.createElement(CircularProgress$1, _extends({
      variant: "indeterminate",
      disableShrink: true,
      className: classes.front,
      size: s,
      thickness: 3
    }, props)));
  }

  var useStyles$7 = makeStyles$1(function () {
    return {
      stripes: {
        '&::before': {
          position: 'absolute',
          height: '100%',
          width: '100%',
          top: 0,
          left: 0,
          content: '""',
          backgroundSize: '14.14px 14.14px',
          backgroundImage: 'linear-gradient(135deg, currentColor 10%, rgba(0,0,0,0) 10%, rgba(0,0,0,0) 50%, currentColor 50%, currentColor 59%, rgba(0,0,0,0) 60%, rgba(0,0,0,0) 103%)',
          opacity: 0.1
        }
      }
    };
  });
  var Cancel$1 = function Cancel(_ref) {
    var cancel = _ref.cancel,
        translator = _ref.translator,
        props = _objectWithoutProperties(_ref, ["cancel", "translator"]);

    return react.createElement(react.Fragment, null, react.createElement(StyledGrid, {
      container: true,
      item: true,
      direction: "column",
      alignItems: "center",
      spacing: 2
    }, react.createElement(StyledGrid, {
      item: true
    }, react.createElement(Progress, null)), react.createElement(StyledGrid, {
      item: true
    }, react.createElement(Typography$1, {
      variant: "h6",
      align: "center"
    }, translator.get('Object.Update.Active')))), react.createElement(StyledGrid, _extends({
      item: true
    }, props), react.createElement(Button$1, {
      variant: "contained",
      onClick: cancel
    }, translator.get('Common.Cancel'))));
  };
  var Retry$1 = function Retry(_ref2) {
    var retry = _ref2.retry,
        translator = _ref2.translator,
        props = _objectWithoutProperties(_ref2, ["retry", "translator"]);

    return react.createElement(react.Fragment, null, react.createElement(StyledGrid, {
      item: true
    }, react.createElement(WarningTriangle, {
      style: {
        fontSize: '38px'
      }
    })), react.createElement(StyledGrid, {
      item: true
    }, react.createElement(Typography$1, {
      variant: "h6",
      align: "center"
    }, translator.get('Object.Update.Cancelled'))), react.createElement(StyledGrid, {
      item: true
    }, react.createElement(Button$1, _extends({
      variant: "contained",
      onClick: retry
    }, props), translator.get('Common.Retry'))));
  };
  function LongRunningQuery(_ref3) {
    var canCancel = _ref3.canCancel,
        canRetry = _ref3.canRetry,
        api = _ref3.api;

    var _useStyles = useStyles$7(),
        stripes = _useStyles.stripes,
        cancel = _useStyles.cancel,
        retry = _useStyles.retry;

    var _useContext = react_8(InstanceContext),
        translator = _useContext.translator;

    return react.createElement(StyledGrid, {
      container: true,
      direction: "column",
      alignItems: "center",
      justify: "center",
      className: stripes,
      style: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0
      },
      spacing: 2
    }, canCancel && react.createElement(Cancel$1, {
      cancel: api.cancel,
      translator: translator,
      className: cancel
    }), canRetry && react.createElement(Retry$1, {
      retry: api.retry,
      translator: translator,
      className: retry
    }));
  }

  /* eslint-disable react/jsx-props-no-spreading */
  function Loading() {
    return react.createElement(StyledGrid, {
      container: true,
      direction: "column",
      alignItems: "center",
      justify: "center",
      style: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0
      },
      spacing: 2
    }, react.createElement(Progress, {
      size: "large"
    }));
  }

  var Header = function Header(_ref) {
    var layout = _ref.layout,
        sn = _ref.sn;
    var showTitle = layout && layout.showTitles && !!layout.title;
    var showSubtitle = layout && layout.showTitles && !!layout.subtitle;
    var showInSelectionActions = sn && layout && layout.qSelectionInfo && layout.qSelectionInfo.qInSelections;

    var _useState = react_1([]),
        _useState2 = _slicedToArray(_useState, 2),
        items = _useState2[0],
        setItems = _useState2[1];

    react_2(function () {
      if (!sn || !sn.component || !sn.component.isHooked) {
        return;
      }

      sn.component.observeActions(function (actions) {
        return setItems(actions);
      });
    }, [sn]);
    return react.createElement(StyledGrid, {
      item: true,
      container: true,
      wrap: "nowrap",
      style: {
        flexGrow: 0
      }
    }, react.createElement(StyledGrid, {
      item: true,
      zeroMinWidth: true,
      xs: true
    }, react.createElement(StyledGrid, {
      container: true,
      wrap: "nowrap",
      direction: "column"
    }, showTitle && react.createElement(Typography$1, {
      variant: "h6",
      noWrap: true
    }, layout.title), showSubtitle && react.createElement(Typography$1, {
      variant: "body2",
      noWrap: true
    }, layout.subtitle))), react.createElement(StyledGrid, {
      item: true,
      style: {
        whiteSpace: 'nowrap',
        minHeight: '32px'
      }
    }, showInSelectionActions && react.createElement(SelectionToolbarWithDefault, {
      inline: true,
      layout: layout,
      api: sn.component.selections,
      xItems: [].concat(_toConsumableArray(items), _toConsumableArray(sn.selectionToolbar.items || []))
    })));
  };

  var Footer = function Footer(_ref) {
    var layout = _ref.layout;
    return layout && layout.showTitles && layout.footnote ? react.createElement(StyledGrid, {
      container: true
    }, react.createElement(StyledGrid, {
      item: true,
      style: {
        minWidth: 0
      }
    }, react.createElement(Typography$1, {
      noWrap: true,
      variant: "body2"
    }, layout.footnote))) : null;
  };

  function useRect() {
    var _useState = react_1(),
        _useState2 = _slicedToArray(_useState, 2),
        node = _useState2[0],
        setNode = _useState2[1];

    var _useState3 = react_1(),
        _useState4 = _slicedToArray(_useState3, 2),
        rect = _useState4[0],
        setRect = _useState4[1];

    var callbackRef = react_9(function (ref) {
      if (!ref) {
        return;
      }

      setNode(ref);
    }, []);

    var handleResize = function handleResize() {
      var _node$getBoundingClie = node.getBoundingClientRect(),
          left = _node$getBoundingClie.left,
          top = _node$getBoundingClie.top,
          width = _node$getBoundingClie.width,
          height = _node$getBoundingClie.height;

      setRect({
        left: left,
        top: top,
        width: width,
        height: height
      });
    };

    react_3(function () {
      if (!node) return undefined;

      if (typeof ResizeObserver === 'function') {
        var resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(node);
        return function () {
          resizeObserver.unobserve(node);
          resizeObserver.disconnect(node);
          resizeObserver = null;
        };
      }

      window.addEventListener('resize', handleResize);
      return function () {
        window.removeEventListener('resize', handleResize);
      };
    }, [node]);
    return [callbackRef, rect, node];
  }

  var Supernova = function Supernova(_ref) {
    var sn = _ref.sn,
        options = _ref.snOptions,
        layout = _ref.layout,
        appLayout = _ref.appLayout,
        corona = _ref.corona;
    var component = sn.component;

    var _useContext = react_8(InstanceContext),
        themeName = _useContext.theme,
        language = _useContext.language,
        constraints = _useContext.constraints;

    var renderDebouncer = react_4(null);

    var _useState = react_1(false),
        _useState2 = _slicedToArray(_useState, 2),
        isMounted = _useState2[0],
        setIsMounted = _useState2[1];

    var _useState3 = react_1(0),
        _useState4 = _slicedToArray(_useState3, 2),
        renderCnt = _useState4[0],
        setRenderCnt = _useState4[1];

    var _useRect = useRect(),
        _useRect2 = _slicedToArray(_useRect, 3),
        containerRef = _useRect2[0],
        containerRect = _useRect2[1],
        containerNode = _useRect2[2];

    var _useState5 = react_1(null),
        _useState6 = _slicedToArray(_useState5, 2),
        snNode = _useState6[0],
        setSnNode = _useState6[1];

    var snRef = react_9(function (ref) {
      if (!ref) {
        return;
      }

      setSnNode(ref);
    }, []); // Mount / Unmount

    react_2(function () {
      if (!snNode) return undefined;
      component.created({
        options: options
      });
      component.mounted(snNode);
      setIsMounted(true);
      return function () {
        clearTimeout(renderDebouncer.current);
        renderDebouncer.current = null;
        component.willUnmount();
      };
    }, [snNode, component]); // Render

    react_2(function () {
      if (!isMounted || !snNode || !containerNode) {
        return;
      } // TODO remove in-selections guard for old component API


      if (!component.isHooked && layout && layout.qSelectionInfo && layout.qSelectionInfo.qInSelections) {
        return;
      }

      if (renderDebouncer.current) {
        // rendering already scheduled
        return;
      }

      renderDebouncer.current = setTimeout(function () {
        // temporarily map constraints to permissions
        var permissions = [];

        if (!constraints.passive) {
          permissions.push('passive');
        }

        if (!constraints.active) {
          permissions.push('interact');
        }

        if (!constraints.select) {
          permissions.push('select');
        }

        if (corona.app && corona.app.session) {
          permissions.push('fetch');
        }

        Promise.resolve(component.render({
          layout: layout,
          options: options,
          context: _objectSpread2({
            constraints: constraints,
            // corona.public.theme is a singleton so themeName is used as dep to make sure this effect is triggered
            theme: corona.public.theme,
            appLayout: appLayout
          }, component.isHooked ? {} : {
            logicalSize: sn.logicalSize({
              layout: layout
            }),
            localeInfo: (appLayout || {}).qLocaleInfo,
            permissions: permissions
          })
        })).then(function () {
          renderDebouncer.current = null;

          if (renderCnt === 0 && typeof options.onInitialRender === 'function') {
            options.onInitialRender.call(null);
          }

          setRenderCnt(renderCnt + 1);
        });
      }, 10);
    }, [containerRect, options, snNode, containerNode, layout, appLayout, themeName, language, constraints, isMounted]);
    return react.createElement("div", {
      ref: containerRef,
      "data-render-count": renderCnt,
      style: {
        position: 'relative',
        height: '100%'
      },
      className: "nebulajs-sn"
    }, react.createElement("div", {
      ref: snRef,
      style: {
        position: 'absolute',
        width: '100%',
        height: '100%'
      }
    }));
  };

  var initialState = function initialState(err) {
    return {
      loading: false,
      loaded: false,
      longRunningQuery: false,
      error: err ? {
        title: err.message
      } : null,
      sn: null
    };
  };

  var contentReducer = function contentReducer(state, action) {
    // console.log('content reducer', action.type);
    switch (action.type) {
      case 'LOADING':
        {
          return _objectSpread2({}, state, {
            loading: true
          });
        }

      case 'LOADED':
        {
          return _objectSpread2({}, state, {
            loaded: true,
            loading: false,
            longRunningQuery: false,
            error: null,
            sn: action.sn
          });
        }

      case 'RENDER':
        {
          return _objectSpread2({}, state, {
            loaded: true,
            loading: false,
            longRunningQuery: false,
            error: null
          });
        }

      case 'LONG_RUNNING_QUERY':
        {
          return _objectSpread2({}, state, {
            longRunningQuery: true
          });
        }

      case 'ERROR':
        {
          return _objectSpread2({}, state, {
            loading: false,
            longRunningQuery: false,
            error: action.error
          });
        }

      default:
        {
          throw new Error("Unhandled type: ".concat(action.type));
        }
    }
  };

  var LoadingSn = function LoadingSn(_ref) {
    var _ref$delay = _ref.delay,
        delay = _ref$delay === void 0 ? 750 : _ref$delay;

    var _useState = react_1(false),
        _useState2 = _slicedToArray(_useState, 2),
        showLoading = _useState2[0],
        setShowLoading = _useState2[1];

    react_2(function () {
      var handle = setTimeout(function () {
        return setShowLoading(true);
      }, delay);
      return function () {
        return clearTimeout(handle);
      };
    }, []);
    return showLoading && react.createElement(Loading, null);
  };

  var filterData = function filterData(d) {
    return d.qError ? d.qError.qErrorCode === 7005 : true;
  };

  var validateTargets = function validateTargets(translator, layout, _ref3) {
    var targets = _ref3.targets;
    var layoutErrors = [];
    var requirementsError = [];
    targets.forEach(function (def) {
      var minD = def.dimensions.min();
      var minM = def.measures.min();
      var hc = def.resolveLayout(layout);
      var d = (hc.qDimensionInfo || []).filter(filterData);
      var m = (hc.qMeasureInfo || []).filter(filterData);
      var path = def.layoutPath;

      if (hc.qError) {
        layoutErrors.push({
          path: path,
          error: hc.qError
        });
      }

      if (d.length < minD || m.length < minM) {
        requirementsError.push({
          path: path
        });
      }
    });
    var showError = !!(layoutErrors.length || requirementsError.length);
    var title = requirementsError.length ? translator.get('Supernova.Incomplete') : 'Error';
    var data = requirementsError.length ? requirementsError : layoutErrors;
    return [showError, {
      title: title,
      data: data
    }];
  };

  var getType =
  /*#__PURE__*/
  function () {
    var _ref5 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(_ref4) {
      var types, name, version, SN;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              types = _ref4.types, name = _ref4.name, version = _ref4.version;
              _context.next = 3;
              return types.get({
                name: name,
                version: version
              }).supernova();

            case 3:
              SN = _context.sent;
              return _context.abrupt("return", SN);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getType(_x) {
      return _ref5.apply(this, arguments);
    };
  }();

  var loadType =
  /*#__PURE__*/
  function () {
    var _ref7 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(_ref6) {
      var dispatch, types, name, version, layout, model, app, selections, snType, sn;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch = _ref6.dispatch, types = _ref6.types, name = _ref6.name, version = _ref6.version, layout = _ref6.layout, model = _ref6.model, app = _ref6.app, selections = _ref6.selections;
              _context2.prev = 1;
              _context2.next = 4;
              return getType({
                types: types,
                name: name,
                version: version
              });

            case 4:
              snType = _context2.sent;

              if (!(layout.visualization !== name)) {
                _context2.next = 7;
                break;
              }

              return _context2.abrupt("return", undefined);

            case 7:
              sn = snType.create({
                model: model,
                app: app,
                selections: selections
              });
              return _context2.abrupt("return", sn);

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](1);
              dispatch({
                type: 'ERROR',
                error: {
                  title: _context2.t0.message
                }
              });

            case 14:
              return _context2.abrupt("return", undefined);

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 11]]);
    }));

    return function loadType(_x2) {
      return _ref7.apply(this, arguments);
    };
  }();

  var Cell = react_7(function (_ref8, ref) {
    var corona = _ref8.corona,
        model = _ref8.model,
        initialSnOptions = _ref8.initialSnOptions,
        initialError = _ref8.initialError,
        onMount = _ref8.onMount;
    var app = corona.app,
        types = corona.public.nebbie.types;

    var _useContext = react_8(InstanceContext),
        translator = _useContext.translator,
        language = _useContext.language;

    var theme = useTheme();
    var cellRef = react_4();

    var _useReducer = react_5(contentReducer, initialState(initialError)),
        _useReducer2 = _slicedToArray(_useReducer, 2),
        state = _useReducer2[0],
        dispatch = _useReducer2[1];

    var _useLayout = useLayout(model),
        _useLayout2 = _slicedToArray(_useLayout, 3),
        layout = _useLayout2[0],
        _useLayout2$ = _useLayout2[1],
        validating = _useLayout2$.validating,
        canCancel = _useLayout2$.canCancel,
        canRetry = _useLayout2$.canRetry,
        longrunning = _useLayout2[2];

    var _useAppLayout = useAppLayout(app),
        _useAppLayout2 = _slicedToArray(_useAppLayout, 1),
        appLayout = _useAppLayout2[0];

    var _useRect = useRect(),
        _useRect2 = _slicedToArray(_useRect, 4),
        contentRef = _useRect2[0],
        contentRect = _useRect2[1],
        contentNode = _useRect2[3];

    var _useState3 = react_1(initialSnOptions),
        _useState4 = _slicedToArray(_useState3, 2),
        snOptions = _useState4[0],
        setSnOptions = _useState4[1];

    var _useObjectSelections = useObjectSelections(app, model),
        _useObjectSelections2 = _slicedToArray(_useObjectSelections, 1),
        selections = _useObjectSelections2[0];

    react_2(function () {
      if (initialError || !appLayout) {
        return undefined;
      }

      var validate = function validate(sn) {
        var _validateTargets = validateTargets(translator, layout, sn.generator.qae.data),
            _validateTargets2 = _slicedToArray(_validateTargets, 2),
            showError = _validateTargets2[0],
            error = _validateTargets2[1];

        if (showError) {
          dispatch({
            type: 'ERROR',
            error: error
          });
        } else {
          dispatch({
            type: 'RENDER'
          });
        } // this function causes problems when calling beginSelections
        // handleModal({ sn: state.sn, layout, model });

      };

      var load =
      /*#__PURE__*/
      function () {
        var _ref9 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3(withLayout, version) {
          var sn;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return loadType({
                    dispatch: dispatch,
                    types: types,
                    name: withLayout.visualization,
                    version: version,
                    layout: layout,
                    model: model,
                    app: app,
                    selections: selections
                  });

                case 2:
                  sn = _context3.sent;

                  if (sn) {
                    dispatch({
                      type: 'LOADED',
                      sn: sn
                    });
                    onMount();
                  }

                  return _context3.abrupt("return", undefined);

                case 5:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function load(_x3, _x4) {
          return _ref9.apply(this, arguments);
        };
      }();

      if (!layout) {
        dispatch({
          type: 'LOADING'
        });
        return undefined;
      }

      if (state.sn) {
        validate(state.sn);
        return undefined;
      } // Load supernova h


      var withVersion = types.getSupportedVersion(layout.visualization, layout.version);

      if (!withVersion) {
        dispatch({
          type: 'ERROR',
          error: {
            title: "Could not find a version of '".concat(layout.visualization, "' that supports current object version. Did you forget to register ").concat(layout.visualization, "?")
          }
        });
        return undefined;
      }

      load(layout, withVersion);
      return function () {};
    }, [types, state.sn, model, layout, appLayout, language]); // Long running query

    react_2(function () {
      if (!validating) {
        return undefined;
      }

      var handle = setTimeout(function () {
        return dispatch({
          type: 'LONG_RUNNING_QUERY'
        });
      }, 2000);
      return function () {
        return clearTimeout(handle);
      };
    }, [validating]); // Expose cell ref api

    react_6(ref, function () {
      return {
        setSnOptions: setSnOptions,
        takeSnapshot: function () {
          var _takeSnapshot = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _cellRef$current$getB, width, height, clonedLayout;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _cellRef$current$getB = cellRef.current.getBoundingClientRect(), width = _cellRef$current$getB.width, height = _cellRef$current$getB.height; // clone layout to avoid mutation

                    clonedLayout = JSON.parse(JSON.stringify(layout));

                    if (!(typeof state.sn.component.setSnapshotData === 'function')) {
                      _context4.next = 9;
                      break;
                    }

                    _context4.next = 5;
                    return state.sn.component.setSnapshotData(clonedLayout);

                  case 5:
                    _context4.t0 = _context4.sent;

                    if (_context4.t0) {
                      _context4.next = 8;
                      break;
                    }

                    _context4.t0 = clonedLayout;

                  case 8:
                    clonedLayout = _context4.t0;

                  case 9:
                    return _context4.abrupt("return", {
                      // TODO - this snapshot format needs to be documented and governed
                      key: String(+Date.now()),
                      meta: {
                        language: translator.language(),
                        theme: theme.name,
                        appLayout: appLayout,
                        // direction: 'ltr',
                        size: {
                          width: Math.round(width),
                          height: Math.round(height)
                        }
                      },
                      layout: clonedLayout
                    });

                  case 10:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));

          function takeSnapshot() {
            return _takeSnapshot.apply(this, arguments);
          }

          return takeSnapshot;
        }(),
        exportImage: function () {
          var _exportImage = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var snapshot;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (corona.config.snapshot.capture) {
                      _context5.next = 2;
                      break;
                    }

                    throw new Error('Nebula has not been configured with snapshot.capture');

                  case 2:
                    _context5.next = 4;
                    return this.takeSnapshot();

                  case 4:
                    snapshot = _context5.sent;
                    return _context5.abrupt("return", corona.config.snapshot.capture(snapshot));

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));

          function exportImage() {
            return _exportImage.apply(this, arguments);
          }

          return exportImage;
        }()
      };
    }, [state.sn, contentRect, layout, theme.name, appLayout]); // console.log('content', state);

    var Content = null;

    if (state.loading) {
      Content = react.createElement(LoadingSn, null);
    } else if (state.error) {
      Content = react.createElement(Error$1, state.error);
    } else if (state.loaded) {
      Content = react.createElement(Supernova, {
        key: layout.visualization,
        sn: state.sn,
        corona: corona,
        snOptions: snOptions,
        layout: layout,
        appLayout: appLayout,
        parentNode: contentNode
      });
    }

    return react.createElement(Paper$1, {
      style: {
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden'
      },
      elevation: 0,
      square: true,
      className: "nebulajs-cell",
      ref: cellRef
    }, react.createElement(StyledGrid, {
      container: true,
      direction: "column",
      spacing: 0,
      style: _objectSpread2({
        position: 'relative',
        width: '100%',
        height: '100%',
        padding: theme.spacing(1)
      }, state.longRunningQuery ? {
        opacity: '0.3'
      } : {})
    }, react.createElement(Header, {
      layout: layout,
      sn: state.sn
    }, "\xA0"), react.createElement(StyledGrid, {
      item: true,
      xs: true,
      style: {
        height: '100%'
      },
      ref: contentRef
    }, Content), react.createElement(Footer, {
      layout: layout
    })), state.longRunningQuery && react.createElement(LongRunningQuery, {
      canCancel: canCancel,
      canRetry: canRetry,
      api: longrunning
    }));
  });

  function glue(_ref) {
    var corona = _ref.corona,
        element = _ref.element,
        model = _ref.model,
        initialSnOptions = _ref.initialSnOptions,
        onMount = _ref.onMount,
        initialError = _ref.initialError;
    var root = corona.root;
    var cellRef = react.createRef();
    var portal = reactDom.createPortal(react.createElement(Cell, {
      ref: cellRef,
      corona: corona,
      model: model,
      initialSnOptions: initialSnOptions,
      initialError: initialError,
      onMount: onMount
    }), element, model.id);

    var unmount = function unmount() {
      root.remove(portal);
    };

    model.once('closed', unmount);
    root.add(portal);
    return [function () {
      unmount();
    }, cellRef];
  }

  function isObject$1(v) {
    return v != null && !Array.isArray(v) && _typeof(v) === 'object';
  }

  function isEqual(a, b) {
    if (isObject$1(a) && isObject$1(b)) {
      return JSON.stringify(a) === JSON.stringify(b);
    }

    if (Array.isArray(a) || Array.isArray(b)) {
      return false;
    }

    return a === b;
  }

  function getPatches() {
    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
    var obj = arguments.length > 1 ? arguments[1] : undefined;
    var old = arguments.length > 2 ? arguments[2] : undefined;
    var patches = [];
    Object.keys(obj).forEach(function (prop) {
      var v = obj[prop];

      if (_typeof(old[prop]) === 'object' && _typeof(v) === 'object' && !Array.isArray(v)) {
        patches.push.apply(patches, _toConsumableArray(getPatches("".concat(path).concat(prop, "/"), obj[prop], old[prop])));
      } else if (!isEqual(v, old[prop])) {
        patches.push({
          qPath: path + prop,
          qOp: 'add',
          qValue: JSON.stringify(obj[prop])
        });
      }
    });
    return patches;
  }

  var noopi = function noopi() {};

  function viz() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        model = _ref.model,
        corona = _ref.corona,
        initialError = _ref.initialError;

    var unmountCell = noopi;
    var cellRef = null;
    var mountedReference = null;
    var onMount = null;
    var mounted = new Promise(function (resolve) {
      onMount = resolve;
    });
    var initialSnOptions = {};

    var setSnOptions =
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(opts) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (mountedReference) {
                  _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return mounted;

                          case 2:
                            cellRef.current.setSnOptions(_objectSpread2({}, initialSnOptions, {}, opts));

                          case 3:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }))();
                } else {
                  // Handle setting options before mount
                  initialSnOptions = _objectSpread2({}, initialSnOptions, {}, opts);
                }

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function setSnOptions(_x) {
        return _ref2.apply(this, arguments);
      };
    }();
    /**
     * @interface
     * @alias Viz
     */


    var api =
    /** @lends Viz */
    {
      /**
       * @type {EnigmaObjectModel}
       */
      model: model,
      // app,

      /**
       * @param {HTMLElement} element
       * @returns {Promise}
       */
      mount: function mount(element) {
        if (mountedReference) {
          throw new Error('Already mounted');
        }

        mountedReference = element;

        var _glueCell = glue({
          corona: corona,
          element: element,
          model: model,
          initialSnOptions: initialSnOptions,
          initialError: initialError,
          onMount: onMount
        });

        var _glueCell2 = _slicedToArray(_glueCell, 2);

        unmountCell = _glueCell2[0];
        cellRef = _glueCell2[1];
        return mounted;
      },

      /**
       *
       */
      close: function close() {
        // TODO - destroy session object (if created as such)
        model.emit('closed');
        unmountCell();
        unmountCell = noopi;
      },
      setTemporaryProperties: function () {
        var _setTemporaryProperties = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3(props) {
          var current, patches;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return model.getEffectiveProperties();

                case 2:
                  current = _context3.sent;
                  patches = getPatches('/', props, current);

                  if (!patches.length) {
                    _context3.next = 6;
                    break;
                  }

                  return _context3.abrupt("return", model.applyPatches(patches, true));

                case 6:
                  return _context3.abrupt("return", undefined);

                case 7:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        function setTemporaryProperties(_x2) {
          return _setTemporaryProperties.apply(this, arguments);
        }

        return setTemporaryProperties;
      }(),
      options: function options(opts) {
        setSnOptions(opts); // return api;
      },
      exportImage: function exportImage() {
        // TODO - check if exportable
        return cellRef.current.exportImage();
      },
      // DEBUG MODE ?
      // TODO - decide if this method is useful as part of public API
      takeSnapshot: function takeSnapshot() {
        return cellRef.current.takeSnapshot();
      } // QVisualization API
      // close() {},
      // exportData() {},
      // exportImg() {},
      // exportPdf() {},
      // setOptions() {}, // applied soft patch
      // resize() {},
      // show() {},
      // toggleDataView() {},

    };
    return api;
  }

  function init (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  }

  function _ref() {
    _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(model, optional, corona, initialError) {
      var api;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              api = viz({
                model: model,
                corona: corona,
                initialError: initialError
              });

              if (optional.options) {
                api.options(optional.options);
              }

              if (!optional.element) {
                _context.next = 5;
                break;
              }

              _context.next = 5;
              return api.mount(optional.element);

            case 5:
              return _context.abrupt("return", api);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _ref.apply(this, arguments);
  }

  /**
   * @typedef {object} CreateObjectConfig
   * @property {string} type
   * @property {string} version
   * @property {object[]} fields
   */

  function create$2(_x, _x2, _x3) {
    return _create.apply(this, arguments);
  }

  function _create() {
    _create = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(_ref, optional, corona) {
      var type, version, fields, mergedProps, error, t, sn, model;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              type = _ref.type, version = _ref.version, fields = _ref.fields;
              mergedProps = {};
              _context.prev = 2;
              t = corona.public.nebbie.types.get({
                name: type,
                version: version
              });
              _context.next = 6;
              return t.initialProperties(optional.properties);

            case 6:
              mergedProps = _context.sent;
              _context.next = 9;
              return t.supernova();

            case 9:
              sn = _context.sent;

              if (fields) {
                populateData({
                  sn: sn,
                  properties: mergedProps,
                  fields: fields
                }, corona);
              }

              if (optional.properties && sn && sn.qae.properties.onChange) {
                sn.qae.properties.onChange.call({}, mergedProps);
              }

              _context.next = 18;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](2);
              error = _context.t0; // minimal dummy object properties to allow it to be created
              // and rendered with the error

              mergedProps = {
                qInfo: {
                  qType: type
                },
                visualization: type
              }; // console.error(e); // eslint-disable-line

            case 18:
              _context.next = 20;
              return corona.app.createSessionObject(mergedProps);

            case 20:
              model = _context.sent;
              subscribe(model);
              return _context.abrupt("return", init(model, optional, corona, error));

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 14]]);
    }));
    return _create.apply(this, arguments);
  }

  /**
   * @typedef {object} GetObjectConfig
   * @property {string} id
   */

  /**
   * @typedef {object} VizConfig
   * @property {HTMLElement=} element
   * @property {object=} optional
   * @property {object=} optional.options
   * @property {object=} optional.properties
   */

  function getObject$1(_x, _x2, _x3) {
    return _getObject.apply(this, arguments);
  }

  function _getObject() {
    _getObject = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(_ref, optional, corona) {
      var id, key, rpc, model;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = _ref.id;
              key = "".concat(id);
              rpc = rpcRequestModelStore.get(key);

              if (!rpc) {
                rpc = corona.app.getObject(id);
                rpcRequestModelStore.set(key, rpc);
              }

              _context.next = 6;
              return rpc;

            case 6:
              model = _context.sent;
              modelStore.set(key, model);
              return _context.abrupt("return", init(model, optional, corona));

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getObject.apply(this, arguments);
  }

  var semver = createCommonjsModule(function (module, exports) {
    exports = module.exports = SemVer;
    var debug;
    /* istanbul ignore next */

    if ((typeof process === "undefined" ? "undefined" : _typeof(process)) === 'object' && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG)) {
      debug = function debug() {
        var args = Array.prototype.slice.call(arguments, 0);
        args.unshift('SEMVER');
        console.log.apply(console, args);
      };
    } else {
      debug = function debug() {};
    } // Note: this is the semver.org version of the spec that it implements
    // Not necessarily the package version of this code.


    exports.SEMVER_SPEC_VERSION = '2.0.0';
    var MAX_LENGTH = 256;
    var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER ||
    /* istanbul ignore next */
    9007199254740991; // Max safe segment length for coercion.

    var MAX_SAFE_COMPONENT_LENGTH = 16; // The actual regexps go on exports.re

    var re = exports.re = [];
    var src = exports.src = [];
    var t = exports.tokens = {};
    var R = 0;

    function tok(n) {
      t[n] = R++;
    } // The following Regular Expressions can be used for tokenizing,
    // validating, and parsing SemVer version strings.
    // ## Numeric Identifier
    // A single `0`, or a non-zero digit followed by zero or more digits.


    tok('NUMERICIDENTIFIER');
    src[t.NUMERICIDENTIFIER] = '0|[1-9]\\d*';
    tok('NUMERICIDENTIFIERLOOSE');
    src[t.NUMERICIDENTIFIERLOOSE] = '[0-9]+'; // ## Non-numeric Identifier
    // Zero or more digits, followed by a letter or hyphen, and then zero or
    // more letters, digits, or hyphens.

    tok('NONNUMERICIDENTIFIER');
    src[t.NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*'; // ## Main Version
    // Three dot-separated numeric identifiers.

    tok('MAINVERSION');
    src[t.MAINVERSION] = '(' + src[t.NUMERICIDENTIFIER] + ')\\.' + '(' + src[t.NUMERICIDENTIFIER] + ')\\.' + '(' + src[t.NUMERICIDENTIFIER] + ')';
    tok('MAINVERSIONLOOSE');
    src[t.MAINVERSIONLOOSE] = '(' + src[t.NUMERICIDENTIFIERLOOSE] + ')\\.' + '(' + src[t.NUMERICIDENTIFIERLOOSE] + ')\\.' + '(' + src[t.NUMERICIDENTIFIERLOOSE] + ')'; // ## Pre-release Version Identifier
    // A numeric identifier, or a non-numeric identifier.

    tok('PRERELEASEIDENTIFIER');
    src[t.PRERELEASEIDENTIFIER] = '(?:' + src[t.NUMERICIDENTIFIER] + '|' + src[t.NONNUMERICIDENTIFIER] + ')';
    tok('PRERELEASEIDENTIFIERLOOSE');
    src[t.PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[t.NUMERICIDENTIFIERLOOSE] + '|' + src[t.NONNUMERICIDENTIFIER] + ')'; // ## Pre-release Version
    // Hyphen, followed by one or more dot-separated pre-release version
    // identifiers.

    tok('PRERELEASE');
    src[t.PRERELEASE] = '(?:-(' + src[t.PRERELEASEIDENTIFIER] + '(?:\\.' + src[t.PRERELEASEIDENTIFIER] + ')*))';
    tok('PRERELEASELOOSE');
    src[t.PRERELEASELOOSE] = '(?:-?(' + src[t.PRERELEASEIDENTIFIERLOOSE] + '(?:\\.' + src[t.PRERELEASEIDENTIFIERLOOSE] + ')*))'; // ## Build Metadata Identifier
    // Any combination of digits, letters, or hyphens.

    tok('BUILDIDENTIFIER');
    src[t.BUILDIDENTIFIER] = '[0-9A-Za-z-]+'; // ## Build Metadata
    // Plus sign, followed by one or more period-separated build metadata
    // identifiers.

    tok('BUILD');
    src[t.BUILD] = '(?:\\+(' + src[t.BUILDIDENTIFIER] + '(?:\\.' + src[t.BUILDIDENTIFIER] + ')*))'; // ## Full Version String
    // A main version, followed optionally by a pre-release version and
    // build metadata.
    // Note that the only major, minor, patch, and pre-release sections of
    // the version string are capturing groups.  The build metadata is not a
    // capturing group, because it should not ever be used in version
    // comparison.

    tok('FULL');
    tok('FULLPLAIN');
    src[t.FULLPLAIN] = 'v?' + src[t.MAINVERSION] + src[t.PRERELEASE] + '?' + src[t.BUILD] + '?';
    src[t.FULL] = '^' + src[t.FULLPLAIN] + '$'; // like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
    // also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
    // common in the npm registry.

    tok('LOOSEPLAIN');
    src[t.LOOSEPLAIN] = '[v=\\s]*' + src[t.MAINVERSIONLOOSE] + src[t.PRERELEASELOOSE] + '?' + src[t.BUILD] + '?';
    tok('LOOSE');
    src[t.LOOSE] = '^' + src[t.LOOSEPLAIN] + '$';
    tok('GTLT');
    src[t.GTLT] = '((?:<|>)?=?)'; // Something like "2.*" or "1.2.x".
    // Note that "x.x" is a valid xRange identifer, meaning "any version"
    // Only the first item is strictly required.

    tok('XRANGEIDENTIFIERLOOSE');
    src[t.XRANGEIDENTIFIERLOOSE] = src[t.NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
    tok('XRANGEIDENTIFIER');
    src[t.XRANGEIDENTIFIER] = src[t.NUMERICIDENTIFIER] + '|x|X|\\*';
    tok('XRANGEPLAIN');
    src[t.XRANGEPLAIN] = '[v=\\s]*(' + src[t.XRANGEIDENTIFIER] + ')' + '(?:\\.(' + src[t.XRANGEIDENTIFIER] + ')' + '(?:\\.(' + src[t.XRANGEIDENTIFIER] + ')' + '(?:' + src[t.PRERELEASE] + ')?' + src[t.BUILD] + '?' + ')?)?';
    tok('XRANGEPLAINLOOSE');
    src[t.XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[t.XRANGEIDENTIFIERLOOSE] + ')' + '(?:\\.(' + src[t.XRANGEIDENTIFIERLOOSE] + ')' + '(?:\\.(' + src[t.XRANGEIDENTIFIERLOOSE] + ')' + '(?:' + src[t.PRERELEASELOOSE] + ')?' + src[t.BUILD] + '?' + ')?)?';
    tok('XRANGE');
    src[t.XRANGE] = '^' + src[t.GTLT] + '\\s*' + src[t.XRANGEPLAIN] + '$';
    tok('XRANGELOOSE');
    src[t.XRANGELOOSE] = '^' + src[t.GTLT] + '\\s*' + src[t.XRANGEPLAINLOOSE] + '$'; // Coercion.
    // Extract anything that could conceivably be a part of a valid semver

    tok('COERCE');
    src[t.COERCE] = '(^|[^\\d])' + '(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '})' + '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' + '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' + '(?:$|[^\\d])';
    tok('COERCERTL');
    re[t.COERCERTL] = new RegExp(src[t.COERCE], 'g'); // Tilde ranges.
    // Meaning is "reasonably at or greater than"

    tok('LONETILDE');
    src[t.LONETILDE] = '(?:~>?)';
    tok('TILDETRIM');
    src[t.TILDETRIM] = '(\\s*)' + src[t.LONETILDE] + '\\s+';
    re[t.TILDETRIM] = new RegExp(src[t.TILDETRIM], 'g');
    var tildeTrimReplace = '$1~';
    tok('TILDE');
    src[t.TILDE] = '^' + src[t.LONETILDE] + src[t.XRANGEPLAIN] + '$';
    tok('TILDELOOSE');
    src[t.TILDELOOSE] = '^' + src[t.LONETILDE] + src[t.XRANGEPLAINLOOSE] + '$'; // Caret ranges.
    // Meaning is "at least and backwards compatible with"

    tok('LONECARET');
    src[t.LONECARET] = '(?:\\^)';
    tok('CARETTRIM');
    src[t.CARETTRIM] = '(\\s*)' + src[t.LONECARET] + '\\s+';
    re[t.CARETTRIM] = new RegExp(src[t.CARETTRIM], 'g');
    var caretTrimReplace = '$1^';
    tok('CARET');
    src[t.CARET] = '^' + src[t.LONECARET] + src[t.XRANGEPLAIN] + '$';
    tok('CARETLOOSE');
    src[t.CARETLOOSE] = '^' + src[t.LONECARET] + src[t.XRANGEPLAINLOOSE] + '$'; // A simple gt/lt/eq thing, or just "" to indicate "any version"

    tok('COMPARATORLOOSE');
    src[t.COMPARATORLOOSE] = '^' + src[t.GTLT] + '\\s*(' + src[t.LOOSEPLAIN] + ')$|^$';
    tok('COMPARATOR');
    src[t.COMPARATOR] = '^' + src[t.GTLT] + '\\s*(' + src[t.FULLPLAIN] + ')$|^$'; // An expression to strip any whitespace between the gtlt and the thing
    // it modifies, so that `> 1.2.3` ==> `>1.2.3`

    tok('COMPARATORTRIM');
    src[t.COMPARATORTRIM] = '(\\s*)' + src[t.GTLT] + '\\s*(' + src[t.LOOSEPLAIN] + '|' + src[t.XRANGEPLAIN] + ')'; // this one has to use the /g flag

    re[t.COMPARATORTRIM] = new RegExp(src[t.COMPARATORTRIM], 'g');
    var comparatorTrimReplace = '$1$2$3'; // Something like `1.2.3 - 1.2.4`
    // Note that these all use the loose form, because they'll be
    // checked against either the strict or loose comparator form
    // later.

    tok('HYPHENRANGE');
    src[t.HYPHENRANGE] = '^\\s*(' + src[t.XRANGEPLAIN] + ')' + '\\s+-\\s+' + '(' + src[t.XRANGEPLAIN] + ')' + '\\s*$';
    tok('HYPHENRANGELOOSE');
    src[t.HYPHENRANGELOOSE] = '^\\s*(' + src[t.XRANGEPLAINLOOSE] + ')' + '\\s+-\\s+' + '(' + src[t.XRANGEPLAINLOOSE] + ')' + '\\s*$'; // Star ranges basically just allow anything at all.

    tok('STAR');
    src[t.STAR] = '(<|>)?=?\\s*\\*'; // Compile to actual regexp objects.
    // All are flag-free, unless they were created above with a flag.

    for (var i = 0; i < R; i++) {
      debug(i, src[i]);

      if (!re[i]) {
        re[i] = new RegExp(src[i]);
      }
    }

    exports.parse = parse;

    function parse(version, options) {
      if (!options || _typeof(options) !== 'object') {
        options = {
          loose: !!options,
          includePrerelease: false
        };
      }

      if (version instanceof SemVer) {
        return version;
      }

      if (typeof version !== 'string') {
        return null;
      }

      if (version.length > MAX_LENGTH) {
        return null;
      }

      var r = options.loose ? re[t.LOOSE] : re[t.FULL];

      if (!r.test(version)) {
        return null;
      }

      try {
        return new SemVer(version, options);
      } catch (er) {
        return null;
      }
    }

    exports.valid = valid;

    function valid(version, options) {
      var v = parse(version, options);
      return v ? v.version : null;
    }

    exports.clean = clean;

    function clean(version, options) {
      var s = parse(version.trim().replace(/^[=v]+/, ''), options);
      return s ? s.version : null;
    }

    exports.SemVer = SemVer;

    function SemVer(version, options) {
      if (!options || _typeof(options) !== 'object') {
        options = {
          loose: !!options,
          includePrerelease: false
        };
      }

      if (version instanceof SemVer) {
        if (version.loose === options.loose) {
          return version;
        } else {
          version = version.version;
        }
      } else if (typeof version !== 'string') {
        throw new TypeError('Invalid Version: ' + version);
      }

      if (version.length > MAX_LENGTH) {
        throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters');
      }

      if (!(this instanceof SemVer)) {
        return new SemVer(version, options);
      }

      debug('SemVer', version, options);
      this.options = options;
      this.loose = !!options.loose;
      var m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);

      if (!m) {
        throw new TypeError('Invalid Version: ' + version);
      }

      this.raw = version; // these are actually numbers

      this.major = +m[1];
      this.minor = +m[2];
      this.patch = +m[3];

      if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
        throw new TypeError('Invalid major version');
      }

      if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
        throw new TypeError('Invalid minor version');
      }

      if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
        throw new TypeError('Invalid patch version');
      } // numberify any prerelease numeric ids


      if (!m[4]) {
        this.prerelease = [];
      } else {
        this.prerelease = m[4].split('.').map(function (id) {
          if (/^[0-9]+$/.test(id)) {
            var num = +id;

            if (num >= 0 && num < MAX_SAFE_INTEGER) {
              return num;
            }
          }

          return id;
        });
      }

      this.build = m[5] ? m[5].split('.') : [];
      this.format();
    }

    SemVer.prototype.format = function () {
      this.version = this.major + '.' + this.minor + '.' + this.patch;

      if (this.prerelease.length) {
        this.version += '-' + this.prerelease.join('.');
      }

      return this.version;
    };

    SemVer.prototype.toString = function () {
      return this.version;
    };

    SemVer.prototype.compare = function (other) {
      debug('SemVer.compare', this.version, this.options, other);

      if (!(other instanceof SemVer)) {
        other = new SemVer(other, this.options);
      }

      return this.compareMain(other) || this.comparePre(other);
    };

    SemVer.prototype.compareMain = function (other) {
      if (!(other instanceof SemVer)) {
        other = new SemVer(other, this.options);
      }

      return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
    };

    SemVer.prototype.comparePre = function (other) {
      if (!(other instanceof SemVer)) {
        other = new SemVer(other, this.options);
      } // NOT having a prerelease is > having one


      if (this.prerelease.length && !other.prerelease.length) {
        return -1;
      } else if (!this.prerelease.length && other.prerelease.length) {
        return 1;
      } else if (!this.prerelease.length && !other.prerelease.length) {
        return 0;
      }

      var i = 0;

      do {
        var a = this.prerelease[i];
        var b = other.prerelease[i];
        debug('prerelease compare', i, a, b);

        if (a === undefined && b === undefined) {
          return 0;
        } else if (b === undefined) {
          return 1;
        } else if (a === undefined) {
          return -1;
        } else if (a === b) {
          continue;
        } else {
          return compareIdentifiers(a, b);
        }
      } while (++i);
    };

    SemVer.prototype.compareBuild = function (other) {
      if (!(other instanceof SemVer)) {
        other = new SemVer(other, this.options);
      }

      var i = 0;

      do {
        var a = this.build[i];
        var b = other.build[i];
        debug('prerelease compare', i, a, b);

        if (a === undefined && b === undefined) {
          return 0;
        } else if (b === undefined) {
          return 1;
        } else if (a === undefined) {
          return -1;
        } else if (a === b) {
          continue;
        } else {
          return compareIdentifiers(a, b);
        }
      } while (++i);
    }; // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.


    SemVer.prototype.inc = function (release, identifier) {
      switch (release) {
        case 'premajor':
          this.prerelease.length = 0;
          this.patch = 0;
          this.minor = 0;
          this.major++;
          this.inc('pre', identifier);
          break;

        case 'preminor':
          this.prerelease.length = 0;
          this.patch = 0;
          this.minor++;
          this.inc('pre', identifier);
          break;

        case 'prepatch':
          // If this is already a prerelease, it will bump to the next version
          // drop any prereleases that might already exist, since they are not
          // relevant at this point.
          this.prerelease.length = 0;
          this.inc('patch', identifier);
          this.inc('pre', identifier);
          break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.

        case 'prerelease':
          if (this.prerelease.length === 0) {
            this.inc('patch', identifier);
          }

          this.inc('pre', identifier);
          break;

        case 'major':
          // If this is a pre-major version, bump up to the same major version.
          // Otherwise increment major.
          // 1.0.0-5 bumps to 1.0.0
          // 1.1.0 bumps to 2.0.0
          if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
            this.major++;
          }

          this.minor = 0;
          this.patch = 0;
          this.prerelease = [];
          break;

        case 'minor':
          // If this is a pre-minor version, bump up to the same minor version.
          // Otherwise increment minor.
          // 1.2.0-5 bumps to 1.2.0
          // 1.2.1 bumps to 1.3.0
          if (this.patch !== 0 || this.prerelease.length === 0) {
            this.minor++;
          }

          this.patch = 0;
          this.prerelease = [];
          break;

        case 'patch':
          // If this is not a pre-release version, it will increment the patch.
          // If it is a pre-release it will bump up to the same patch version.
          // 1.2.0-5 patches to 1.2.0
          // 1.2.0 patches to 1.2.1
          if (this.prerelease.length === 0) {
            this.patch++;
          }

          this.prerelease = [];
          break;
        // This probably shouldn't be used publicly.
        // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.

        case 'pre':
          if (this.prerelease.length === 0) {
            this.prerelease = [0];
          } else {
            var i = this.prerelease.length;

            while (--i >= 0) {
              if (typeof this.prerelease[i] === 'number') {
                this.prerelease[i]++;
                i = -2;
              }
            }

            if (i === -1) {
              // didn't increment anything
              this.prerelease.push(0);
            }
          }

          if (identifier) {
            // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
            // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
            if (this.prerelease[0] === identifier) {
              if (isNaN(this.prerelease[1])) {
                this.prerelease = [identifier, 0];
              }
            } else {
              this.prerelease = [identifier, 0];
            }
          }

          break;

        default:
          throw new Error('invalid increment argument: ' + release);
      }

      this.format();
      this.raw = this.version;
      return this;
    };

    exports.inc = inc;

    function inc(version, release, loose, identifier) {
      if (typeof loose === 'string') {
        identifier = loose;
        loose = undefined;
      }

      try {
        return new SemVer(version, loose).inc(release, identifier).version;
      } catch (er) {
        return null;
      }
    }

    exports.diff = diff;

    function diff(version1, version2) {
      if (eq(version1, version2)) {
        return null;
      } else {
        var v1 = parse(version1);
        var v2 = parse(version2);
        var prefix = '';

        if (v1.prerelease.length || v2.prerelease.length) {
          prefix = 'pre';
          var defaultResult = 'prerelease';
        }

        for (var key in v1) {
          if (key === 'major' || key === 'minor' || key === 'patch') {
            if (v1[key] !== v2[key]) {
              return prefix + key;
            }
          }
        }

        return defaultResult; // may be undefined
      }
    }

    exports.compareIdentifiers = compareIdentifiers;
    var numeric = /^[0-9]+$/;

    function compareIdentifiers(a, b) {
      var anum = numeric.test(a);
      var bnum = numeric.test(b);

      if (anum && bnum) {
        a = +a;
        b = +b;
      }

      return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
    }

    exports.rcompareIdentifiers = rcompareIdentifiers;

    function rcompareIdentifiers(a, b) {
      return compareIdentifiers(b, a);
    }

    exports.major = major;

    function major(a, loose) {
      return new SemVer(a, loose).major;
    }

    exports.minor = minor;

    function minor(a, loose) {
      return new SemVer(a, loose).minor;
    }

    exports.patch = patch;

    function patch(a, loose) {
      return new SemVer(a, loose).patch;
    }

    exports.compare = compare;

    function compare(a, b, loose) {
      return new SemVer(a, loose).compare(new SemVer(b, loose));
    }

    exports.compareLoose = compareLoose;

    function compareLoose(a, b) {
      return compare(a, b, true);
    }

    exports.compareBuild = compareBuild;

    function compareBuild(a, b, loose) {
      var versionA = new SemVer(a, loose);
      var versionB = new SemVer(b, loose);
      return versionA.compare(versionB) || versionA.compareBuild(versionB);
    }

    exports.rcompare = rcompare;

    function rcompare(a, b, loose) {
      return compare(b, a, loose);
    }

    exports.sort = sort;

    function sort(list, loose) {
      return list.sort(function (a, b) {
        return exports.compareBuild(a, b, loose);
      });
    }

    exports.rsort = rsort;

    function rsort(list, loose) {
      return list.sort(function (a, b) {
        return exports.compareBuild(b, a, loose);
      });
    }

    exports.gt = gt;

    function gt(a, b, loose) {
      return compare(a, b, loose) > 0;
    }

    exports.lt = lt;

    function lt(a, b, loose) {
      return compare(a, b, loose) < 0;
    }

    exports.eq = eq;

    function eq(a, b, loose) {
      return compare(a, b, loose) === 0;
    }

    exports.neq = neq;

    function neq(a, b, loose) {
      return compare(a, b, loose) !== 0;
    }

    exports.gte = gte;

    function gte(a, b, loose) {
      return compare(a, b, loose) >= 0;
    }

    exports.lte = lte;

    function lte(a, b, loose) {
      return compare(a, b, loose) <= 0;
    }

    exports.cmp = cmp;

    function cmp(a, op, b, loose) {
      switch (op) {
        case '===':
          if (_typeof(a) === 'object') a = a.version;
          if (_typeof(b) === 'object') b = b.version;
          return a === b;

        case '!==':
          if (_typeof(a) === 'object') a = a.version;
          if (_typeof(b) === 'object') b = b.version;
          return a !== b;

        case '':
        case '=':
        case '==':
          return eq(a, b, loose);

        case '!=':
          return neq(a, b, loose);

        case '>':
          return gt(a, b, loose);

        case '>=':
          return gte(a, b, loose);

        case '<':
          return lt(a, b, loose);

        case '<=':
          return lte(a, b, loose);

        default:
          throw new TypeError('Invalid operator: ' + op);
      }
    }

    exports.Comparator = Comparator;

    function Comparator(comp, options) {
      if (!options || _typeof(options) !== 'object') {
        options = {
          loose: !!options,
          includePrerelease: false
        };
      }

      if (comp instanceof Comparator) {
        if (comp.loose === !!options.loose) {
          return comp;
        } else {
          comp = comp.value;
        }
      }

      if (!(this instanceof Comparator)) {
        return new Comparator(comp, options);
      }

      debug('comparator', comp, options);
      this.options = options;
      this.loose = !!options.loose;
      this.parse(comp);

      if (this.semver === ANY) {
        this.value = '';
      } else {
        this.value = this.operator + this.semver.version;
      }

      debug('comp', this);
    }

    var ANY = {};

    Comparator.prototype.parse = function (comp) {
      var r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
      var m = comp.match(r);

      if (!m) {
        throw new TypeError('Invalid comparator: ' + comp);
      }

      this.operator = m[1] !== undefined ? m[1] : '';

      if (this.operator === '=') {
        this.operator = '';
      } // if it literally is just '>' or '' then allow anything.


      if (!m[2]) {
        this.semver = ANY;
      } else {
        this.semver = new SemVer(m[2], this.options.loose);
      }
    };

    Comparator.prototype.toString = function () {
      return this.value;
    };

    Comparator.prototype.test = function (version) {
      debug('Comparator.test', version, this.options.loose);

      if (this.semver === ANY || version === ANY) {
        return true;
      }

      if (typeof version === 'string') {
        try {
          version = new SemVer(version, this.options);
        } catch (er) {
          return false;
        }
      }

      return cmp(version, this.operator, this.semver, this.options);
    };

    Comparator.prototype.intersects = function (comp, options) {
      if (!(comp instanceof Comparator)) {
        throw new TypeError('a Comparator is required');
      }

      if (!options || _typeof(options) !== 'object') {
        options = {
          loose: !!options,
          includePrerelease: false
        };
      }

      var rangeTmp;

      if (this.operator === '') {
        if (this.value === '') {
          return true;
        }

        rangeTmp = new Range(comp.value, options);
        return satisfies(this.value, rangeTmp, options);
      } else if (comp.operator === '') {
        if (comp.value === '') {
          return true;
        }

        rangeTmp = new Range(this.value, options);
        return satisfies(comp.semver, rangeTmp, options);
      }

      var sameDirectionIncreasing = (this.operator === '>=' || this.operator === '>') && (comp.operator === '>=' || comp.operator === '>');
      var sameDirectionDecreasing = (this.operator === '<=' || this.operator === '<') && (comp.operator === '<=' || comp.operator === '<');
      var sameSemVer = this.semver.version === comp.semver.version;
      var differentDirectionsInclusive = (this.operator === '>=' || this.operator === '<=') && (comp.operator === '>=' || comp.operator === '<=');
      var oppositeDirectionsLessThan = cmp(this.semver, '<', comp.semver, options) && (this.operator === '>=' || this.operator === '>') && (comp.operator === '<=' || comp.operator === '<');
      var oppositeDirectionsGreaterThan = cmp(this.semver, '>', comp.semver, options) && (this.operator === '<=' || this.operator === '<') && (comp.operator === '>=' || comp.operator === '>');
      return sameDirectionIncreasing || sameDirectionDecreasing || sameSemVer && differentDirectionsInclusive || oppositeDirectionsLessThan || oppositeDirectionsGreaterThan;
    };

    exports.Range = Range;

    function Range(range, options) {
      if (!options || _typeof(options) !== 'object') {
        options = {
          loose: !!options,
          includePrerelease: false
        };
      }

      if (range instanceof Range) {
        if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
          return range;
        } else {
          return new Range(range.raw, options);
        }
      }

      if (range instanceof Comparator) {
        return new Range(range.value, options);
      }

      if (!(this instanceof Range)) {
        return new Range(range, options);
      }

      this.options = options;
      this.loose = !!options.loose;
      this.includePrerelease = !!options.includePrerelease; // First, split based on boolean or ||

      this.raw = range;
      this.set = range.split(/\s*\|\|\s*/).map(function (range) {
        return this.parseRange(range.trim());
      }, this).filter(function (c) {
        // throw out any that are not relevant for whatever reason
        return c.length;
      });

      if (!this.set.length) {
        throw new TypeError('Invalid SemVer Range: ' + range);
      }

      this.format();
    }

    Range.prototype.format = function () {
      this.range = this.set.map(function (comps) {
        return comps.join(' ').trim();
      }).join('||').trim();
      return this.range;
    };

    Range.prototype.toString = function () {
      return this.range;
    };

    Range.prototype.parseRange = function (range) {
      var loose = this.options.loose;
      range = range.trim(); // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`

      var hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
      range = range.replace(hr, hyphenReplace);
      debug('hyphen replace', range); // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`

      range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
      debug('comparator trim', range, re[t.COMPARATORTRIM]); // `~ 1.2.3` => `~1.2.3`

      range = range.replace(re[t.TILDETRIM], tildeTrimReplace); // `^ 1.2.3` => `^1.2.3`

      range = range.replace(re[t.CARETTRIM], caretTrimReplace); // normalize spaces

      range = range.split(/\s+/).join(' '); // At this point, the range is completely trimmed and
      // ready to be split into comparators.

      var compRe = loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
      var set = range.split(' ').map(function (comp) {
        return parseComparator(comp, this.options);
      }, this).join(' ').split(/\s+/);

      if (this.options.loose) {
        // in loose mode, throw out any that are not valid comparators
        set = set.filter(function (comp) {
          return !!comp.match(compRe);
        });
      }

      set = set.map(function (comp) {
        return new Comparator(comp, this.options);
      }, this);
      return set;
    };

    Range.prototype.intersects = function (range, options) {
      if (!(range instanceof Range)) {
        throw new TypeError('a Range is required');
      }

      return this.set.some(function (thisComparators) {
        return isSatisfiable(thisComparators, options) && range.set.some(function (rangeComparators) {
          return isSatisfiable(rangeComparators, options) && thisComparators.every(function (thisComparator) {
            return rangeComparators.every(function (rangeComparator) {
              return thisComparator.intersects(rangeComparator, options);
            });
          });
        });
      });
    }; // take a set of comparators and determine whether there
    // exists a version which can satisfy it


    function isSatisfiable(comparators, options) {
      var result = true;
      var remainingComparators = comparators.slice();
      var testComparator = remainingComparators.pop();

      while (result && remainingComparators.length) {
        result = remainingComparators.every(function (otherComparator) {
          return testComparator.intersects(otherComparator, options);
        });
        testComparator = remainingComparators.pop();
      }

      return result;
    } // Mostly just for testing and legacy API reasons


    exports.toComparators = toComparators;

    function toComparators(range, options) {
      return new Range(range, options).set.map(function (comp) {
        return comp.map(function (c) {
          return c.value;
        }).join(' ').trim().split(' ');
      });
    } // comprised of xranges, tildes, stars, and gtlt's at this point.
    // already replaced the hyphen ranges
    // turn into a set of JUST comparators.


    function parseComparator(comp, options) {
      debug('comp', comp, options);
      comp = replaceCarets(comp, options);
      debug('caret', comp);
      comp = replaceTildes(comp, options);
      debug('tildes', comp);
      comp = replaceXRanges(comp, options);
      debug('xrange', comp);
      comp = replaceStars(comp, options);
      debug('stars', comp);
      return comp;
    }

    function isX(id) {
      return !id || id.toLowerCase() === 'x' || id === '*';
    } // ~, ~> --> * (any, kinda silly)
    // ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
    // ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
    // ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
    // ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
    // ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0


    function replaceTildes(comp, options) {
      return comp.trim().split(/\s+/).map(function (comp) {
        return replaceTilde(comp, options);
      }).join(' ');
    }

    function replaceTilde(comp, options) {
      var r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
      return comp.replace(r, function (_, M, m, p, pr) {
        debug('tilde', comp, _, M, m, p, pr);
        var ret;

        if (isX(M)) {
          ret = '';
        } else if (isX(m)) {
          ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
        } else if (isX(p)) {
          // ~1.2 == >=1.2.0 <1.3.0
          ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
        } else if (pr) {
          debug('replaceTilde pr', pr);
          ret = '>=' + M + '.' + m + '.' + p + '-' + pr + ' <' + M + '.' + (+m + 1) + '.0';
        } else {
          // ~1.2.3 == >=1.2.3 <1.3.0
          ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + (+m + 1) + '.0';
        }

        debug('tilde return', ret);
        return ret;
      });
    } // ^ --> * (any, kinda silly)
    // ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
    // ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
    // ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
    // ^1.2.3 --> >=1.2.3 <2.0.0
    // ^1.2.0 --> >=1.2.0 <2.0.0


    function replaceCarets(comp, options) {
      return comp.trim().split(/\s+/).map(function (comp) {
        return replaceCaret(comp, options);
      }).join(' ');
    }

    function replaceCaret(comp, options) {
      debug('caret', comp, options);
      var r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
      return comp.replace(r, function (_, M, m, p, pr) {
        debug('caret', comp, _, M, m, p, pr);
        var ret;

        if (isX(M)) {
          ret = '';
        } else if (isX(m)) {
          ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
        } else if (isX(p)) {
          if (M === '0') {
            ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
          } else {
            ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0';
          }
        } else if (pr) {
          debug('replaceCaret pr', pr);

          if (M === '0') {
            if (m === '0') {
              ret = '>=' + M + '.' + m + '.' + p + '-' + pr + ' <' + M + '.' + m + '.' + (+p + 1);
            } else {
              ret = '>=' + M + '.' + m + '.' + p + '-' + pr + ' <' + M + '.' + (+m + 1) + '.0';
            }
          } else {
            ret = '>=' + M + '.' + m + '.' + p + '-' + pr + ' <' + (+M + 1) + '.0.0';
          }
        } else {
          debug('no pr');

          if (M === '0') {
            if (m === '0') {
              ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + m + '.' + (+p + 1);
            } else {
              ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + (+m + 1) + '.0';
            }
          } else {
            ret = '>=' + M + '.' + m + '.' + p + ' <' + (+M + 1) + '.0.0';
          }
        }

        debug('caret return', ret);
        return ret;
      });
    }

    function replaceXRanges(comp, options) {
      debug('replaceXRanges', comp, options);
      return comp.split(/\s+/).map(function (comp) {
        return replaceXRange(comp, options);
      }).join(' ');
    }

    function replaceXRange(comp, options) {
      comp = comp.trim();
      var r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
      return comp.replace(r, function (ret, gtlt, M, m, p, pr) {
        debug('xRange', comp, ret, gtlt, M, m, p, pr);
        var xM = isX(M);
        var xm = xM || isX(m);
        var xp = xm || isX(p);
        var anyX = xp;

        if (gtlt === '=' && anyX) {
          gtlt = '';
        } // if we're including prereleases in the match, then we need
        // to fix this to -0, the lowest possible prerelease value


        pr = options.includePrerelease ? '-0' : '';

        if (xM) {
          if (gtlt === '>' || gtlt === '<') {
            // nothing is allowed
            ret = '<0.0.0-0';
          } else {
            // nothing is forbidden
            ret = '*';
          }
        } else if (gtlt && anyX) {
          // we know patch is an x, because we have any x at all.
          // replace X with 0
          if (xm) {
            m = 0;
          }

          p = 0;

          if (gtlt === '>') {
            // >1 => >=2.0.0
            // >1.2 => >=1.3.0
            // >1.2.3 => >= 1.2.4
            gtlt = '>=';

            if (xm) {
              M = +M + 1;
              m = 0;
              p = 0;
            } else {
              m = +m + 1;
              p = 0;
            }
          } else if (gtlt === '<=') {
            // <=0.7.x is actually <0.8.0, since any 0.7.x should
            // pass.  Similarly, <=7.x is actually <8.0.0, etc.
            gtlt = '<';

            if (xm) {
              M = +M + 1;
            } else {
              m = +m + 1;
            }
          }

          ret = gtlt + M + '.' + m + '.' + p + pr;
        } else if (xm) {
          ret = '>=' + M + '.0.0' + pr + ' <' + (+M + 1) + '.0.0' + pr;
        } else if (xp) {
          ret = '>=' + M + '.' + m + '.0' + pr + ' <' + M + '.' + (+m + 1) + '.0' + pr;
        }

        debug('xRange return', ret);
        return ret;
      });
    } // Because * is AND-ed with everything else in the comparator,
    // and '' means "any version", just remove the *s entirely.


    function replaceStars(comp, options) {
      debug('replaceStars', comp, options); // Looseness is ignored here.  star is always as loose as it gets!

      return comp.trim().replace(re[t.STAR], '');
    } // This function is passed to string.replace(re[t.HYPHENRANGE])
    // M, m, patch, prerelease, build
    // 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
    // 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
    // 1.2 - 3.4 => >=1.2.0 <3.5.0


    function hyphenReplace($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) {
      if (isX(fM)) {
        from = '';
      } else if (isX(fm)) {
        from = '>=' + fM + '.0.0';
      } else if (isX(fp)) {
        from = '>=' + fM + '.' + fm + '.0';
      } else {
        from = '>=' + from;
      }

      if (isX(tM)) {
        to = '';
      } else if (isX(tm)) {
        to = '<' + (+tM + 1) + '.0.0';
      } else if (isX(tp)) {
        to = '<' + tM + '.' + (+tm + 1) + '.0';
      } else if (tpr) {
        to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr;
      } else {
        to = '<=' + to;
      }

      return (from + ' ' + to).trim();
    } // if ANY of the sets match ALL of its comparators, then pass


    Range.prototype.test = function (version) {
      if (!version) {
        return false;
      }

      if (typeof version === 'string') {
        try {
          version = new SemVer(version, this.options);
        } catch (er) {
          return false;
        }
      }

      for (var i = 0; i < this.set.length; i++) {
        if (testSet(this.set[i], version, this.options)) {
          return true;
        }
      }

      return false;
    };

    function testSet(set, version, options) {
      for (var i = 0; i < set.length; i++) {
        if (!set[i].test(version)) {
          return false;
        }
      }

      if (version.prerelease.length && !options.includePrerelease) {
        // Find the set of versions that are allowed to have prereleases
        // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
        // That should allow `1.2.3-pr.2` to pass.
        // However, `1.2.4-alpha.notready` should NOT be allowed,
        // even though it's within the range set by the comparators.
        for (i = 0; i < set.length; i++) {
          debug(set[i].semver);

          if (set[i].semver === ANY) {
            continue;
          }

          if (set[i].semver.prerelease.length > 0) {
            var allowed = set[i].semver;

            if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
              return true;
            }
          }
        } // Version has a -pre, but it's not one of the ones we like.


        return false;
      }

      return true;
    }

    exports.satisfies = satisfies;

    function satisfies(version, range, options) {
      try {
        range = new Range(range, options);
      } catch (er) {
        return false;
      }

      return range.test(version);
    }

    exports.maxSatisfying = maxSatisfying;

    function maxSatisfying(versions, range, options) {
      var max = null;
      var maxSV = null;

      try {
        var rangeObj = new Range(range, options);
      } catch (er) {
        return null;
      }

      versions.forEach(function (v) {
        if (rangeObj.test(v)) {
          // satisfies(v, range, options)
          if (!max || maxSV.compare(v) === -1) {
            // compare(max, v, true)
            max = v;
            maxSV = new SemVer(max, options);
          }
        }
      });
      return max;
    }

    exports.minSatisfying = minSatisfying;

    function minSatisfying(versions, range, options) {
      var min = null;
      var minSV = null;

      try {
        var rangeObj = new Range(range, options);
      } catch (er) {
        return null;
      }

      versions.forEach(function (v) {
        if (rangeObj.test(v)) {
          // satisfies(v, range, options)
          if (!min || minSV.compare(v) === 1) {
            // compare(min, v, true)
            min = v;
            minSV = new SemVer(min, options);
          }
        }
      });
      return min;
    }

    exports.minVersion = minVersion;

    function minVersion(range, loose) {
      range = new Range(range, loose);
      var minver = new SemVer('0.0.0');

      if (range.test(minver)) {
        return minver;
      }

      minver = new SemVer('0.0.0-0');

      if (range.test(minver)) {
        return minver;
      }

      minver = null;

      for (var i = 0; i < range.set.length; ++i) {
        var comparators = range.set[i];
        comparators.forEach(function (comparator) {
          // Clone to avoid manipulating the comparator's semver object.
          var compver = new SemVer(comparator.semver.version);

          switch (comparator.operator) {
            case '>':
              if (compver.prerelease.length === 0) {
                compver.patch++;
              } else {
                compver.prerelease.push(0);
              }

              compver.raw = compver.format();

            /* fallthrough */

            case '':
            case '>=':
              if (!minver || gt(minver, compver)) {
                minver = compver;
              }

              break;

            case '<':
            case '<=':
              /* Ignore maximum versions */
              break;

            /* istanbul ignore next */

            default:
              throw new Error('Unexpected operation: ' + comparator.operator);
          }
        });
      }

      if (minver && range.test(minver)) {
        return minver;
      }

      return null;
    }

    exports.validRange = validRange;

    function validRange(range, options) {
      try {
        // Return '*' instead of '' so that truthiness works.
        // This will throw if it's invalid anyway
        return new Range(range, options).range || '*';
      } catch (er) {
        return null;
      }
    } // Determine if version is less than all the versions possible in the range


    exports.ltr = ltr;

    function ltr(version, range, options) {
      return outside(version, range, '<', options);
    } // Determine if version is greater than all the versions possible in the range.


    exports.gtr = gtr;

    function gtr(version, range, options) {
      return outside(version, range, '>', options);
    }

    exports.outside = outside;

    function outside(version, range, hilo, options) {
      version = new SemVer(version, options);
      range = new Range(range, options);
      var gtfn, ltefn, ltfn, comp, ecomp;

      switch (hilo) {
        case '>':
          gtfn = gt;
          ltefn = lte;
          ltfn = lt;
          comp = '>';
          ecomp = '>=';
          break;

        case '<':
          gtfn = lt;
          ltefn = gte;
          ltfn = gt;
          comp = '<';
          ecomp = '<=';
          break;

        default:
          throw new TypeError('Must provide a hilo val of "<" or ">"');
      } // If it satisifes the range it is not outside


      if (satisfies(version, range, options)) {
        return false;
      } // From now on, variable terms are as if we're in "gtr" mode.
      // but note that everything is flipped for the "ltr" function.


      for (var i = 0; i < range.set.length; ++i) {
        var comparators = range.set[i];
        var high = null;
        var low = null;
        comparators.forEach(function (comparator) {
          if (comparator.semver === ANY) {
            comparator = new Comparator('>=0.0.0');
          }

          high = high || comparator;
          low = low || comparator;

          if (gtfn(comparator.semver, high.semver, options)) {
            high = comparator;
          } else if (ltfn(comparator.semver, low.semver, options)) {
            low = comparator;
          }
        }); // If the edge version comparator has a operator then our version
        // isn't outside it

        if (high.operator === comp || high.operator === ecomp) {
          return false;
        } // If the lowest version comparator has an operator and our version
        // is less than it then it isn't higher than the range


        if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
          return false;
        } else if (low.operator === ecomp && ltfn(version, low.semver)) {
          return false;
        }
      }

      return true;
    }

    exports.prerelease = prerelease;

    function prerelease(version, options) {
      var parsed = parse(version, options);
      return parsed && parsed.prerelease.length ? parsed.prerelease : null;
    }

    exports.intersects = intersects;

    function intersects(r1, r2, options) {
      r1 = new Range(r1, options);
      r2 = new Range(r2, options);
      return r1.intersects(r2);
    }

    exports.coerce = coerce;

    function coerce(version, options) {
      if (version instanceof SemVer) {
        return version;
      }

      if (typeof version === 'number') {
        version = String(version);
      }

      if (typeof version !== 'string') {
        return null;
      }

      options = options || {};
      var match = null;

      if (!options.rtl) {
        match = version.match(re[t.COERCE]);
      } else {
        // Find the right-most coercible string that does not share
        // a terminus with a more left-ward coercible string.
        // Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
        //
        // Walk through the string checking with a /g regexp
        // Manually set the index so as to pick up overlapping matches.
        // Stop when we get a match that ends at the string end, since no
        // coercible string can be more right-ward without the same terminus.
        var next;

        while ((next = re[t.COERCERTL].exec(version)) && (!match || match.index + match[0].length !== version.length)) {
          if (!match || next.index + next[0].length !== match.index + match[0].length) {
            match = next;
          }

          re[t.COERCERTL].lastIndex = next.index + next[1].length + next[2].length;
        } // leave it in a clean state


        re[t.COERCERTL].lastIndex = -1;
      }

      if (match === null) {
        return null;
      }

      return parse(match[2] + '.' + (match[3] || '0') + '.' + (match[4] || '0'), options);
    }
  });
  var semver_1 = semver.SEMVER_SPEC_VERSION;
  var semver_2 = semver.re;
  var semver_3 = semver.src;
  var semver_4 = semver.tokens;
  var semver_5 = semver.parse;
  var semver_6 = semver.valid;
  var semver_7 = semver.clean;
  var semver_8 = semver.SemVer;
  var semver_9 = semver.inc;
  var semver_10 = semver.diff;
  var semver_11 = semver.compareIdentifiers;
  var semver_12 = semver.rcompareIdentifiers;
  var semver_13 = semver.major;
  var semver_14 = semver.minor;
  var semver_15 = semver.patch;
  var semver_16 = semver.compare;
  var semver_17 = semver.compareLoose;
  var semver_18 = semver.compareBuild;
  var semver_19 = semver.rcompare;
  var semver_20 = semver.sort;
  var semver_21 = semver.rsort;
  var semver_22 = semver.gt;
  var semver_23 = semver.lt;
  var semver_24 = semver.eq;
  var semver_25 = semver.neq;
  var semver_26 = semver.gte;
  var semver_27 = semver.lte;
  var semver_28 = semver.cmp;
  var semver_29 = semver.Comparator;
  var semver_30 = semver.Range;
  var semver_31 = semver.toComparators;
  var semver_32 = semver.satisfies;
  var semver_33 = semver.maxSatisfying;
  var semver_34 = semver.minSatisfying;
  var semver_35 = semver.minVersion;
  var semver_36 = semver.validRange;
  var semver_37 = semver.ltr;
  var semver_38 = semver.gtr;
  var semver_39 = semver.outside;
  var semver_40 = semver.prerelease;
  var semver_41 = semver.intersects;
  var semver_42 = semver.coerce;

  var LOADED = {};
  /**
   * @callback loadType
   * @param {object} type
   * @param {string} type.name
   * @param {string} type.version
   * @param {object} env
   * @returns {Promise<Supernova>}
   */

  function load(_x, _x2, _x3, _x4) {
    return _load.apply(this, arguments);
  }

  function _load() {
    _load = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(name, version, corona, loader) {
      var key, sKey, p, prom;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              key = "".concat(name, "__").concat(version);

              if (!LOADED[key]) {
                sKey = "".concat(name).concat(version && " v".concat(version) || '');
                p = (loader || corona.config.load)({
                  name: name,
                  version: version
                }, corona.public.env);
                prom = Promise.resolve(p);
                LOADED[key] = prom.then(function (sn) {
                  if (!sn) {
                    // TODO - improve validation
                    throw new Error("load() of supernova '".concat(sKey, "' resolved to an invalid object"));
                  }

                  return sn;
                }).catch(function (e) {
                  corona.logger.warn(e);
                  throw new Error("Failed to load supernova: '".concat(sKey, "'"));
                });
              }

              return _context.abrupt("return", LOADED[key]);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _load.apply(this, arguments);
  }

  function clearFromCache(name) {
    Object.keys(LOADED).forEach(function (key) {
      if (key.split('__')[0] === name) {
        LOADED[key] = undefined;
      }
    });
  }

  /**
   * @typedef {object} TypeInfo
   * @property {string} name
   * @property {string} version
   * @property {object=} meta
   * @property {loadType=} load
   */

  function create$3(info, corona) {
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var sn;
    var stringified;
    var meta = opts.meta;
    var type = {
      name: info.name,
      version: info.version,
      supportsPropertiesVersion: function supportsPropertiesVersion(v) {
        if (v && meta && meta.deps && meta.deps.properties) {
          return semver_32(v, meta.deps.properties);
        }

        return true;
      },
      supernova: function supernova$1() {
        return load(type.name, type.version, corona, opts.load).then(function (SNDefinition) {
          sn = sn || supernova.generator(SNDefinition, corona.public.env);
          stringified = JSON.stringify(sn.qae.properties.initial);
          return sn;
        });
      },
      initialProperties: function initialProperties(initial) {
        return this.supernova().then(function () {
          var props = _objectSpread2({
            qInfo: {
              qType: type.name
            },
            visualization: type.name,
            version: type.version,
            showTitles: true
          }, JSON.parse(stringified), {}, initial);

          return props;
        });
      }
    };
    return type;
  }

  function semverSort(arr) {
    var unversioned = arr.filter(function (v) {
      return v === 'undefined';
    });
    return [].concat(_toConsumableArray(unversioned), _toConsumableArray(arr.filter(function (v) {
      return v !== 'undefined';
    }).map(function (v) {
      return v.split('.').map(function (n) {
        return parseInt(n, 10);
      });
    }).sort(function (a, b) {
      return a[0] - b[0] || a[1] - b[1] || a[2] - b[2];
    }).map(function (n) {
      return n.join('.');
    })));
  }
  function typeCollection(name, corona) {
    var versions = {};
    var sortedVersions = null;
    return {
      get: function get(version) {
        return versions[version];
      },
      register: function register(version, opts) {
        if (versions[version]) {
          throw new Error("Supernova '".concat(name, "@").concat(version, "' already registered."));
        }

        versions[version] = create$3({
          name: name,
          version: version
        }, corona, opts);
        sortedVersions = null;
      },
      getMatchingVersionFromProperties: function getMatchingVersionFromProperties(propertyVersion) {
        if (!sortedVersions) {
          sortedVersions = semverSort(Object.keys(versions));
        }

        for (var i = sortedVersions.length - 1; i >= 0; i--) {
          var t = versions[sortedVersions[i]];

          if (t.supportsPropertiesVersion(propertyVersion)) {
            return sortedVersions[i];
          }
        }

        return null;
      },
      versions: versions
    };
  }
  function create$4(_ref) {
    var corona = _ref.corona,
        parent = _ref.parent;
    var tc = {};
    var p = parent || {
      get: function get() {
        return undefined;
      }
    };
    return {
      register: function register(typeInfo, opts) {
        if (!tc[typeInfo.name]) {
          tc[typeInfo.name] = typeCollection(typeInfo.name, corona);
        }

        tc[typeInfo.name].register(typeInfo.version, opts);
      },
      getSupportedVersion: function getSupportedVersion(name, propertyVersion) {
        if (!tc[name]) {
          return null;
        }

        return tc[name].getMatchingVersionFromProperties(propertyVersion);
      },
      get: function get(typeInfo) {
        var name = typeInfo.name,
            version = typeInfo.version;

        if (!tc[name] || !tc[name].versions[version]) {
          this.register({
            name: name,
            version: version
          });
        }

        return tc[name].get(version) || p.get(typeInfo);
      },
      clearFromCache: function clearFromCache$1(name) {
        if (tc[name]) {
          tc[name] = undefined;
        }

        clearFromCache(name);
      }
    };
  }

  var LOG_LEVEL = {
    OFF: 0,
    ERROR: 1,
    WARN: 2,
    INFO: 3,
    DEBUG: 4
  };

  var loggerFn = function loggerFn() {
    var _LOG_FN;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$level = _ref.level,
        level = _ref$level === void 0 ? LOG_LEVEL.OFF : _ref$level,
        _ref$pipe = _ref.pipe,
        pipe = _ref$pipe === void 0 ? console : _ref$pipe;

    var currentlevel = level;
    var LOG_FN = (_LOG_FN = {}, _defineProperty(_LOG_FN, LOG_LEVEL.OFF, function () {}), _defineProperty(_LOG_FN, LOG_LEVEL.ERROR, function () {
      return pipe.error.apply(pipe, arguments);
    }), _defineProperty(_LOG_FN, LOG_LEVEL.WARN, function () {
      return pipe.warn.apply(pipe, arguments);
    }), _defineProperty(_LOG_FN, LOG_LEVEL.INFO, function () {
      return pipe.info.apply(pipe, arguments);
    }), _defineProperty(_LOG_FN, LOG_LEVEL.DEBUG, function () {
      return pipe.log.apply(pipe, arguments);
    }), _LOG_FN);

    var log = function log(lev) {
      if (!lev || currentlevel < lev) {
        return;
      }

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      (LOG_FN[lev] || LOG_FN[LOG_LEVEL.DEBUG]).apply(void 0, args);
    };
    /**
     * @typedef {object} logger
     * @private
     */


    return (
      /** @lends logger */
      {
        /**
         * Log a message
         * @param {number} lev - The log level
         * @param {...any} args
         * @kind function
         */
        log: log,

        /**
         * Log an error message
         * @param {...any} args
         */
        error: function error() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return log.apply(void 0, [LOG_LEVEL.ERROR].concat(args));
        },

        /**
         * Log a warning message
         * @param {...any} args
         */
        warn: function warn() {
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          return log.apply(void 0, [LOG_LEVEL.WARN].concat(args));
        },

        /**
         * Log an info message
         * @param {...any} args
         */
        info: function info() {
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }

          return log.apply(void 0, [LOG_LEVEL.INFO].concat(args));
        },

        /**
         * Log a debug message
         * @param {...any} args
         */
        debug: function debug() {
          for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
          }

          return log.apply(void 0, [LOG_LEVEL.DEBUG].concat(args));
        },

        /**
         * Set the current log level
         * @param {number} lev - The log level
         */
        level: function level(lev) {
          if (typeof lev === 'number') {
            currentlevel = lev;
          }

          return currentlevel;
        },
        LOG_LEVEL: LOG_LEVEL
      }
    );
  };

  /**
   * @interface
   * @alias ThemeInfo
   * @property {string} key Theme identifier
   * @property {function} load A function that should return a Promise that resolve to a raw JSON theme
   */

  /**
   * @typedef {object}
   * @alias Configuration
   */

  var DEFAULT_CONFIG = {
    context: {
      theme: 'light',
      language: 'en-US',
      constraints: {}
    },

    /**
     *
     */
    load: function load() {
      return undefined;
    },
    log: {
      level: 1
    },

    /**
     * @type {TypeInfo[]}
     */
    types: [],

    /**
     * @type {ThemeInfo[]}
     */
    themes: [],

    /** */
    env: {},
    snapshot: {
      get: function () {
        var _get = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(id) {
          var res;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return fetch("/njs/snapshot/".concat(id));

                case 2:
                  res = _context.sent;

                  if (res.ok) {
                    _context.next = 5;
                    break;
                  }

                  throw new Error(res.statusText);

                case 5:
                  return _context.abrupt("return", res.json());

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function get(_x) {
          return _get.apply(this, arguments);
        }

        return get;
      }(),
      capture: function capture(payload) {
        return fetch("/njs/capture", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        }).then(function (res) {
          return res.json();
        });
      }
    }
  };

  var mergeConfigs = function mergeConfigs(base, c) {
    return {
      context: _objectSpread2({}, base.context, {}, c.context || {}),
      load: c.load || base.load,
      snapshot: _objectSpread2({}, c.snapshot || base.snapshot),
      types: [].concat(_toConsumableArray(base.types || []), _toConsumableArray(c.types || [])),
      themes: [].concat(_toConsumableArray(base.themes || []), _toConsumableArray(c.themes || [])),
      env: _objectSpread2({}, base.env || {}, {}, c.env || {}),
      log: _objectSpread2({}, base.log || {}, {}, c.log || {})
    };
  };

  function nuked() {
    var configuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var logger = loggerFn(configuration.log);
    var locale = appLocaleFn(configuration.context.language);
    /**
     * Initiates a new `nebbie` instance using the specified `app`.
     * @entry
     * @alias nucleus
     * @param {EnigmaAppModel} app
     * @param {Configuration=} instanceConfig
     * @returns {Nebbie}
     * @example
     * import nucleus from '@nebula.js/nucleus'
     * const nebbie = nucleus(app);
     */

    function nucleus(app, instanceConfig) {
      if (instanceConfig) {
        return nucleus.configured(instanceConfig)(app);
      }

      var currentContext = _objectSpread2({}, configuration.context, {
        translator: locale.translator
      });

      var _bootNebulaApp = boot({
        app: app,
        context: currentContext
      }),
          _bootNebulaApp2 = _slicedToArray(_bootNebulaApp, 1),
          root = _bootNebulaApp2[0];

      var appTheme$1 = appTheme({
        themes: configuration.themes,
        logger: logger,
        root: root
      });
      var publicAPIs = {
        env: {
          translator: locale.translator,
          nucleus: nucleus
        },
        theme: appTheme$1.externalAPI,
        translator: locale.translator,
        nebbie: null // actual value is set further down

      };
      var corona = {
        app: app,
        root: root,
        logger: logger,
        config: configuration,
        public: publicAPIs,
        context: currentContext,
        nebbie: null
      };
      var types = create$4({
        corona: corona
      });
      configuration.types.forEach(function (t) {
        return types.register({
          name: t.name,
          version: t.version
        }, {
          meta: t.meta,
          load: t.load
        });
      });
      var currentThemePromise = appTheme$1.setTheme(configuration.context.theme);
      var selectionsApi = null;
      var selectionsComponentReference = null;
      /**
       * @interface
       * @alias Nebbie
       */

      var api =
      /** @lends Nebbie */
      {
        /**
         * @param {GetObjectConfig} getCfg
         * @param {VizConfig=} vizConfig
         * @returns {Viz}
         */
        get: function () {
          var _get3 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2(getCfg, vizConfig) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return currentThemePromise;

                  case 2:
                    return _context2.abrupt("return", getObject$1(getCfg, vizConfig, corona));

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          function get(_x2, _x3) {
            return _get3.apply(this, arguments);
          }

          return get;
        }(),

        /**
         * @param {CreateObjectConfig} createCfg
         * @param {VizConfig=} vizConfig
         * @returns {Viz}
         */
        create: function () {
          var _create2 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3(createCfg, vizConfig) {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return currentThemePromise;

                  case 2:
                    return _context3.abrupt("return", create$2(createCfg, vizConfig, corona));

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          function create(_x4, _x5) {
            return _create2.apply(this, arguments);
          }

          return create;
        }(),

        /**
         * @param {object} ctx
         * @param {string} ctx.theme
         * @param {string} ctx.language
         * @param {string[]} ctx.constraints
         */
        context: function () {
          var _context4 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4(ctx) {
            var changes;
            return regeneratorRuntime.wrap(function _callee4$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    // filter valid values to avoid triggering unnecessary rerender
                    ['theme', 'language', 'constraints'].forEach(function (key) {
                      if (ctx[key] && ctx[key] !== currentContext[key]) {
                        if (!changes) {
                          changes = {};
                        }

                        changes[key] = ctx[key];
                      }
                    });

                    if (changes) {
                      _context5.next = 3;
                      break;
                    }

                    return _context5.abrupt("return");

                  case 3:
                    currentContext = _objectSpread2({}, currentContext, {}, changes, {
                      translator: locale.translator
                    });
                    corona.context = currentContext;

                    if (!changes.theme) {
                      _context5.next = 9;
                      break;
                    }

                    currentThemePromise = appTheme$1.setTheme(changes.theme);
                    _context5.next = 9;
                    return currentThemePromise;

                  case 9:
                    if (changes.language) {
                      corona.public.translator.language(changes.language);
                    }

                    root.context(currentContext);

                  case 11:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee4);
          }));

          function context(_x6) {
            return _context4.apply(this, arguments);
          }

          return context;
        }(),

        /**
         * @returns {AppSelections}
         */
        selections: function () {
          var _selections = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var appSelections;
            return regeneratorRuntime.wrap(function _callee5$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (selectionsApi) {
                      _context6.next = 5;
                      break;
                    }

                    _context6.next = 3;
                    return root.getAppSelections();

                  case 3:
                    appSelections = _context6.sent;
                    selectionsApi =
                    /** @lends AppSelections */
                    _objectSpread2({}, appSelections, {
                      /**
                       * @param {HTMLElement} element
                       */
                      mount: function mount$1(element) {
                        if (selectionsComponentReference) {
                          logger.error('Already mounted');
                          return;
                        }

                        selectionsComponentReference = mount({
                          element: element,
                          app: app
                        });
                        root.add(selectionsComponentReference);
                      },

                      /**
                       *
                       */
                      unmount: function unmount() {
                        if (selectionsComponentReference) {
                          root.remove(selectionsComponentReference);
                          selectionsComponentReference = null;
                        }
                      }
                    });

                  case 5:
                    return _context6.abrupt("return", selectionsApi);

                  case 6:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee5);
          }));

          function selections() {
            return _selections.apply(this, arguments);
          }

          return selections;
        }(),
        types: types
      };
      corona.public.nebbie = api;
      return api;
    }
    /**
     * Creates a new `nucleus` instance using the specified configuration.
     *
     * The configuration is merged with all previous instances.
     * @param {Configuration} configuration
     * @returns {nucleus}
     * @example
     * import nucleus from '@nebula.js/nucleus';
     * // create a 'master' config which registers all types
     * const m = nucleus.configured({
     *   types: [{
     *     name: 'mekko',
     *     version: '1.0.0',
     *   }],
     * });
     *
     * // create an alternate config with dark theme
     * // and inherit the config from the previous
     * const d = m.configured({
     *  theme: 'dark'
     * });
     *
     * m(app).create({ type: 'mekko' }); // will render the object with default theme
     * d(app).create({ type: 'mekko' }); // will render the object with 'dark' theme
     * nucleus(app).create({ type: 'mekko' }); // will throw error since 'mekko' is not a register type on the default instance
     */


    nucleus.configured = function (c) {
      return nuked(mergeConfigs(configuration, c));
    };

    nucleus.config = configuration;
    return nucleus;
  }

  var index$2 = nuked(DEFAULT_CONFIG);

  return index$2;

})));
