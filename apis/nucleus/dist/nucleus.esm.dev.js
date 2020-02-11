/*
* @nebula.js/nucleus v0.1.0-alpha.29
* Copyright (c) 2020 QlikTech International AB
* Released under the MIT license.
*/

import React, { useState, useEffect, useReducer, forwardRef, useMemo, useImperativeHandle, createElement, PureComponent, useRef, useCallback, useContext, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import { createGenerateClassName, StylesProvider, ThemeProvider, makeStyles, useTheme } from '@material-ui/styles';
import { Grid, Typography, MenuItem, ListItemIcon, Button, IconButton, OutlinedInput, InputAdornment, Popover, MenuList, Badge, List, ListItem, Box, makeStyles as makeStyles$1, CircularProgress, Paper } from '@material-ui/core';
import { generator } from '@nebula.js/supernova';

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

  {
    if (value < min || value > max) {
      console.error("Material-UI: the value provided ".concat(value, " is out of range [").concat(min, ", ").concat(max, "]."));
    }
  }

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

function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
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

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
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
      other = _objectWithoutProperties$1(breakpoints, ["values", "unit", "step"]);

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

  return _extends$2({
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

  return _extends$2({
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
      return _extends$2({
        paddingLeft: spacing(2),
        paddingRight: spacing(2)
      }, styles, _defineProperty$1({}, breakpoints.up('sm'), _extends$2({
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
      other = _objectWithoutProperties$1(palette, ["primary", "secondary", "error", "warning", "info", "success", "type", "contrastThreshold", "tonalOffset"]); // Use the same logic as
  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54


  function getContrastText(background) {
    if (!background) {
      throw new TypeError("Material-UI: missing background argument in getContrastText(".concat(background, ")."));
    }

    var contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

    {
      var contrast = getContrastRatio(background, contrastText);

      if (contrast < 3) {
        console.error(["Material-UI: the contrast ratio of ".concat(contrast, ":1 for ").concat(contrastText, " on ").concat(background), 'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.', 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'].join('\n'));
      }
    }

    return contrastText;
  }

  function augmentColor(color) {
    var mainShade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    var lightShade = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
    var darkShade = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 700;
    color = _extends$2({}, color);

    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }

    {
      if (!color.main) {
        throw new Error(['Material-UI: the color provided to augmentColor(color) is invalid.', "The color object needs to have a `main` property or a `".concat(mainShade, "` property.")].join('\n'));
      }
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

  {
    if (!types[type]) {
      console.error("Material-UI: the palette type `".concat(type, "` is not supported."));
    }
  }

  var paletteOutput = deepmerge(_extends$2({
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
      other = _objectWithoutProperties$1(_ref, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"]);

  {
    if (typeof fontSize !== 'number') {
      console.error('Material-UI: `fontSize` is required to be a number.');
    }

    if (typeof htmlFontSize !== 'number') {
      console.error('Material-UI: `htmlFontSize` is required to be a number.');
    }
  }

  var coef = fontSize / 14;

  var pxToRem = pxToRem2 || function (size) {
    return "".concat(size / htmlFontSize * coef, "rem");
  };

  var buildVariant = function buildVariant(fontWeight, size, lineHeight, letterSpacing, casing) {
    return _extends$2({
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
  return deepmerge(_extends$2({
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

var warnOnce;
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
    {
      if (typeof spacingInput !== 'number') {
        console.error(["Material-UI: the `theme.spacing` value (".concat(spacingInput, ") is invalid."), 'It should be a number or a function.'].join('\n'));
      }
    }

    transform = function transform(factor) {
      {
        if (typeof factor !== 'number') {
          console.error("Expected spacing argument to be a number, got ".concat(factor));
        }
      }

      return spacingInput * factor;
    };
  }

  var spacing = function spacing() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    {
      if (!(args.length <= 4)) {
        console.error("Material-UI: Too many arguments provided, expected between 0 and 4, got ".concat(args.length));
      }
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
      {
        if (!warnOnce || "development" === 'test') {
          console.error(['Material-UI: theme.spacing.unit usage has been deprecated.', 'It will be removed in v5.', 'You can replace `theme.spacing.unit * y` with `theme.spacing(y)`.', '', 'You can use the `https://github.com/mui-org/material-ui/tree/master/packages/material-ui-codemod/README.md#theme-spacing-api` migration helper to make the process smoother.'].join('\n'));
        }

        warnOnce = true;
      }

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
        other = _objectWithoutProperties$1(options, ["duration", "easing", "delay"]);

    {
      var isString = function isString(value) {
        return typeof value === 'string';
      };

      var isNumber = function isNumber(value) {
        return !isNaN(parseFloat(value));
      };

      if (!isString(props) && !Array.isArray(props)) {
        console.error('Material-UI: argument "props" must be a string or Array.');
      }

      if (!isNumber(durationOption) && !isString(durationOption)) {
        console.error("Material-UI: argument \"duration\" must be a number or a string but found ".concat(durationOption, "."));
      }

      if (!isString(easingOption)) {
        console.error('Material-UI: argument "easing" must be a string.');
      }

      if (!isNumber(delay) && !isString(delay)) {
        console.error('Material-UI: argument "delay" must be a number or a string.');
      }

      if (Object.keys(other).length !== 0) {
        console.error("Material-UI: unrecognized argument(s) [".concat(Object.keys(other).join(','), "]"));
      }
    }

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
      other = _objectWithoutProperties$1(options, ["breakpoints", "mixins", "palette", "spacing", "typography"]);

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

  {
    var pseudoClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected'];

    var traverse = function traverse(node, parentKey) {
      var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var key; // eslint-disable-next-line guard-for-in, no-restricted-syntax

      for (key in node) {
        var child = node[key];

        if (depth === 1) {
          if (key.indexOf('Mui') === 0 && child) {
            traverse(child, key, depth + 1);
          }
        } else if (pseudoClasses.indexOf(key) !== -1 && Object.keys(child).length > 0) {
          {
            console.error(["Material-UI: the `".concat(parentKey, "` component increases ") + "the CSS specificity of the `".concat(key, "` internal state."), 'You can not override it like this: ', JSON.stringify(node, null, 2), '', 'Instead, you need to use the $ruleName syntax:', JSON.stringify({
              root: _defineProperty$1({}, "&$".concat(key), child)
            }, null, 2), '', 'https://material-ui.com/r/pseudo-classes-guide'].join('\n'));
          } // Remove the style to prevent global conflicts.


          node[key] = {};
        }
      }
    };

    traverse(muiTheme.overrides);
  }

  return muiTheme;
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

var cache = {};

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

function create(definition) {
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

  if (cache[key]) {
    return cache[key];
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
  cache[key] = createMuiTheme(_objectSpread2({}, withDefaults, {
    overrides: overrides(withDefaults)
  }));
  cache[key].name = name;
  return cache[key];
}

var InstanceContext = React.createContext({
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
    var _useState = useState(sharedState),
        _useState2 = _slicedToArray(_useState, 2),
        setState = _useState2[1];

    useEffect(function () {
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

  var _useReducer = useReducer(rpcReducer, key ? rpcResultStore.get(key) : null),
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
  useEffect(function () {
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

  var _useState = useState(),
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

  useEffect(function () {
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

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      navigationState = _useState2[0],
      setNavigationState = _useState2[1];

  useEffect(function () {
    if (!appLayout || !currentSelectionsModel || !currentSelectionsLayout) return;
    patchAlternateState(currentSelectionsModel, currentSelectionsLayout, appLayout);
  }, [appLayout, currentSelectionsModel, currentSelectionsLayout]);
  useEffect(function () {
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
  useEffect(function () {
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
var NebulaApp = forwardRef(function (_ref, ref) {
  var initialContext = _ref.initialContext,
      app = _ref.app;

  var _useAppSelections = useAppSelections(app),
      _useAppSelections2 = _slicedToArray(_useAppSelections, 1),
      appSelections = _useAppSelections2[0];

  var _useState = useState(initialContext),
      _useState2 = _slicedToArray(_useState, 2),
      context = _useState2[0],
      setContext = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      muiThemeName = _useState4[0],
      setMuiThemeName = _useState4[1];

  var _useMemo = useMemo(function () {
    return {
      theme: create(muiThemeName),
      generator: createGenerateClassName({
        productionPrefix: "".concat(THEME_PREFIX, "-"),
        disableGlobal: true,
        seed: "nebulajs-".concat(counter++)
      })
    };
  }, [muiThemeName]),
      theme = _useMemo.theme,
      generator = _useMemo.generator;

  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      components = _useState6[0],
      setComponents = _useState6[1];

  useImperativeHandle(ref, function () {
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
  return React.createElement(StylesProvider, {
    generateClassName: generator
  }, React.createElement(ThemeProvider, {
    theme: theme
  }, React.createElement(InstanceContext.Provider, {
    value: context
  }, React.createElement(React.Fragment, null, components))));
});
function boot(_ref2) {
  var app = _ref2.app,
      context = _ref2.context;
  var resolveRender;
  var rendered = new Promise(function (resolve) {
    resolveRender = resolve;
  });
  var appRef = React.createRef();
  var element = document.createElement('div');
  element.style.display = 'none';
  element.setAttribute('data-nebulajs-version', "0.1.0-alpha.29" );
  element.setAttribute('data-app-id', app.id);
  document.body.appendChild(element);
  ReactDOM.render(React.createElement(NebulaApp, {
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

  return React.createElement("i", {
    style: s
  }, React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: viewBox,
    fill: "currentColor"
  }, React.createElement("path", {
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

function index (resultFn, isEqual) {
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
var now = hasNativePerformanceNow ? function () {
  return performance.now();
} : function () {
  return Date.now();
};
function cancelTimeout(timeoutID) {
  cancelAnimationFrame(timeoutID.id);
}
function requestTimeout(callback, delay) {
  var start = now();

  function tick() {
    if (now() - start >= delay) {
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
// This avoids spamming the console every time a render happens.


var devWarningsDirection = null;
var devWarningsTagName$1 = null;

{
  if (typeof window !== 'undefined' && typeof window.WeakSet !== 'undefined') {
    devWarningsDirection =
    /*#__PURE__*/
    new WeakSet();
    devWarningsTagName$1 =
    /*#__PURE__*/
    new WeakSet();
  }
}

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
    _inheritsLoose(List, _PureComponent);

    // Always use explicit constructor for React components.
    // It produces less code after transpilation. (#26)
    // eslint-disable-next-line no-useless-constructor
    function List(props) {
      var _this;

      _this = _PureComponent.call(this, props) || this;
      _this._instanceProps = initInstanceProps(_this.props, _assertThisInitialized(_assertThisInitialized(_this)));
      _this._outerRef = void 0;
      _this._resetIsScrollingTimeoutId = null;
      _this.state = {
        instance: _assertThisInitialized(_assertThisInitialized(_this)),
        isScrolling: false,
        scrollDirection: 'forward',
        scrollOffset: typeof _this.props.initialScrollOffset === 'number' ? _this.props.initialScrollOffset : 0,
        scrollUpdateWasRequested: false
      };
      _this._callOnItemsRendered = void 0;
      _this._callOnItemsRendered = index(function (overscanStartIndex, overscanStopIndex, visibleStartIndex, visibleStopIndex) {
        return _this.props.onItemsRendered({
          overscanStartIndex: overscanStartIndex,
          overscanStopIndex: overscanStopIndex,
          visibleStartIndex: visibleStartIndex,
          visibleStopIndex: visibleStopIndex
        });
      });
      _this._callOnScroll = void 0;
      _this._callOnScroll = index(function (scrollDirection, scrollOffset, scrollUpdateWasRequested) {
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
      _this._getItemStyleCache = index(function (_, __, ___) {
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
          items.push(createElement(children, {
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
      return createElement(outerElementType || outerTagName || 'div', {
        className: className,
        onScroll: onScroll,
        ref: this._outerRefSetter,
        style: _extends$3({
          position: 'relative',
          height: height,
          width: width,
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          willChange: 'transform',
          direction: direction
        }, style)
      }, createElement(innerElementType || innerTagName || 'div', {
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
  }(PureComponent), _class.defaultProps = {
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

  {
    if (innerTagName != null || outerTagName != null) {
      if (devWarningsTagName$1 && !devWarningsTagName$1.has(instance)) {
        devWarningsTagName$1.add(instance);
        console.warn('The innerTagName and outerTagName props have been deprecated. ' + 'Please use the innerElementType and outerElementType props instead.');
      }
    } // TODO Deprecate direction "horizontal"


    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';

    switch (direction) {
      case 'horizontal':
      case 'vertical':
        if (devWarningsDirection && !devWarningsDirection.has(instance)) {
          devWarningsDirection.add(instance);
          console.warn('The direction prop should be either "ltr" (default) or "rtl". ' + 'Please use the layout prop to specify "vertical" (default) or "horizontal" orientation.');
        }

        break;

      case 'ltr':
      case 'rtl':
        // Valid values
        break;

      default:
        throw Error('An invalid "direction" prop has been specified. ' + 'Value should be either "ltr" or "rtl". ' + ("\"" + direction + "\" was specified."));
    }

    switch (layout) {
      case 'horizontal':
      case 'vertical':
        // Valid values
        break;

      default:
        throw Error('An invalid "layout" prop has been specified. ' + 'Value should be either "horizontal" or "vertical". ' + ("\"" + layout + "\" was specified."));
    }

    if (children == null) {
      throw Error('An invalid "children" prop has been specified. ' + 'Value should be a React component. ' + ("\"" + (children === null ? 'null' : typeof children) + "\" was specified."));
    }

    if (isHorizontal && typeof width !== 'number') {
      throw Error('An invalid "width" prop has been specified. ' + 'Horizontal lists must specify a number for width. ' + ("\"" + (width === null ? 'null' : typeof width) + "\" was specified."));
    } else if (!isHorizontal && typeof height !== 'number') {
      throw Error('An invalid "height" prop has been specified. ' + 'Vertical lists must specify a number for height. ' + ("\"" + (height === null ? 'null' : typeof height) + "\" was specified."));
    }
  }
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

    {
      if (typeof itemSize !== 'number') {
        throw Error('An invalid "itemSize" prop has been specified. ' + 'Value should be a number. ' + ("\"" + (itemSize === null ? 'null' : typeof itemSize) + "\" was specified."));
      }
    }
  }
});

function isInteger(value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}

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

      {
        if (!isInteger(visibleStartIndex) || !isInteger(visibleStopIndex)) {
          console.warn('Invalid onItemsRendered signature; please refer to InfiniteLoader documentation.');
        }

        if (typeof _this.props.loadMoreRows === 'function') {
          console.warn('InfiniteLoader "loadMoreRows" prop has been renamed to "loadMoreItems".');
        }
      }

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
      {
        if (this._listRef == null) {
          console.warn('Invalid list ref; please refer to InfiniteLoader documentation.');
        }
      }
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
}(PureComponent);

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
  return React.createElement(Grid, {
    container: true,
    spacing: 0,
    className: classArr.join(' ').trim(),
    style: style,
    onClick: onClick,
    role: "row",
    tabIndex: 0,
    "data-n": cell && cell.qElemNumber
  }, React.createElement(Grid, {
    item: true,
    style: {
      minWidth: 0,
      flexGrow: 1
    },
    className: classes.cell
  }, ranges.length === 0 ? React.createElement(Typography, {
    component: "span",
    noWrap: true,
    color: "inherit"
  }, "".concat(label)) : labels.map(function (_ref2, ix) {
    var _ref3 = _slicedToArray(_ref2, 2),
        l = _ref3[0],
        highlighted = _ref3[1];

    return (// eslint-disable-next-line react/no-array-index-key
      React.createElement(Typography, {
        component: "span",
        key: ix,
        className: highlighted,
        noWrap: true
      }, l)
    );
  })), React.createElement(Grid, {
    item: true,
    className: classes.icon
  }, locked && React.createElement(Lock, {
    size: "small"
  }), selected && React.createElement(Tick, {
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

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      pages = _useState2[0],
      setPages = _useState2[1];

  var loaderRef = useRef(null);
  var local = useRef({
    queue: [],
    validPages: false
  });
  var listData = useRef({
    pages: []
  });
  var onClick = useCallback(function (e) {
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
  var isItemLoaded = useCallback(function (index) {
    if (!pages || !local.current.validPages) {
      return false;
    }

    local.current.checkIdx = index;
    var page = pages.filter(function (p) {
      return p.qArea.qTop <= index && index < p.qArea.qTop + p.qArea.qHeight;
    })[0];
    return page && page.qArea.qTop <= index && index < page.qArea.qTop + page.qArea.qHeight;
  }, [layout, pages]);
  var loadMoreItems = useCallback(function (startIndex, stopIndex) {
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
  useEffect(function () {
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
  return React.createElement(InfiniteLoader, {
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
    return React.createElement(FixedSizeList, {
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
    return React.createElement(MenuItem, {
      divider: true,
      title: item.label,
      onClick: function onClick() {
        return item.action();
      },
      disabled: disabled
    }, React.createElement(ListItemIcon, {
      className: icon
    }, hasSvgIconShape && SvgIcon(item.getSvgIconShape())), React.createElement(Typography, null, item.label));
  } // TODO - handle active/toggled state


  return item.type === 'button' ? React.createElement(Button, {
    title: item.label,
    variant: "contained",
    style: {
      backgroundColor: item.color
    },
    onClick: function onClick() {
      return item.action();
    },
    disabled: disabled
  }, hasSvgIconShape && SvgIcon(item.getSvgIconShape())) : React.createElement(IconButton, {
    title: item.label,
    onClick: function onClick() {
      return item.action();
    },
    disabled: disabled
  }, hasSvgIconShape && SvgIcon(item.getSvgIconShape()));
};

var SelectionToolbar = React.forwardRef(function (_ref, ref) {
  var layout = _ref.layout,
      items = _ref.items;
  return React.createElement(React.Fragment, null, items.map(function (e, ix) {
    return React.createElement(Item, {
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

  var _useContext = useContext(InstanceContext),
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
  return React.createElement(SelectionToolbar, {
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

  var _useContext = useContext(InstanceContext),
      translator = _useContext.translator;

  var _useState = useState(''),
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
  return React.createElement(OutlinedInput, {
    startAdornment: React.createElement(InputAdornment, {
      position: "start"
    }, React.createElement(Search, null)),
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
  useEffect(function () {
    if (!appSelections || !model || objectSelections) return;
    objectSelections = createObjectSelections({
      appSelections: appSelections,
      model: model
    });
    objectSelectionsStore.set(key, objectSelections);
  }, [appSelections, model]);
  useEffect(function () {
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

  var lock = useCallback(function () {
    model.lock('/qListObjectDef');
  }, [model]);
  var unlock = useCallback(function () {
    model.unlock('/qListObjectDef');
  }, [model]);

  var _useContext = useContext(InstanceContext),
      translator = _useContext.translator;

  var moreAlignTo = useRef();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showSelectionsMenu = _useState2[0],
      setShowSelectionsMenu = _useState2[1];

  var _useObjectSelections = useObjectSelections(app, model),
      _useObjectSelections2 = _slicedToArray(_useObjectSelections, 1),
      selections = _useObjectSelections2[0];

  var _useLayout = useLayout(model),
      _useLayout2 = _slicedToArray(_useLayout, 1),
      layout = _useLayout2[0];

  useEffect(function () {
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
  return React.createElement(Popover, {
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
  }, React.createElement(Grid, {
    container: true,
    direction: "column",
    spacing: 0
  }, React.createElement(Grid, {
    item: true,
    container: true,
    style: {
      padding: theme.spacing(1)
    }
  }, React.createElement(Grid, {
    item: true
  }, isLocked ? React.createElement(IconButton, {
    onClick: unlock,
    disabled: !isLocked
  }, React.createElement(Lock, null)) : React.createElement(IconButton, {
    onClick: lock,
    disabled: !hasSelections
  }, React.createElement(Unlock, null))), React.createElement(Grid, {
    item: true,
    xs: true
  }), React.createElement(Grid, {
    item: true
  }, React.createElement(SelectionToolbarWithDefault, {
    layout: layout,
    api: selections,
    xItems: [moreItem],
    onConfirm: popoverClose,
    onCancel: function onCancel() {
      return popoverClose(null, 'escapeKeyDown');
    }
  }))), React.createElement(Grid, {
    item: true,
    xs: true
  }, React.createElement("div", {
    ref: moreAlignTo
  }), React.createElement(ListBoxSearch, {
    model: model
  }), React.createElement(ListBox, {
    model: model,
    selections: selections,
    direction: "ltr"
  }), showSelectionsMenu && React.createElement(Popover, {
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
  }, React.createElement(MenuList, null, React.createElement(SelectionToolbar, {
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

  var _useContext = useContext(InstanceContext),
      translator = _useContext.translator;

  var alignTo = useRef();
  var theme = useTheme();

  var _useState = useState(false),
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
  return React.createElement(Grid, {
    container: true,
    spacing: 0,
    ref: alignTo,
    className: classes.item,
    onClick: skipHandleShowListBoxPopover === false && handleShowListBoxPopover || null
  }, React.createElement(Grid, {
    item: true,
    xs: true,
    style: {
      minWidth: 0,
      flexGrow: 1,
      opacity: selection.qLocked ? '0.3' : ''
    }
  }, React.createElement(Typography, {
    noWrap: true,
    style: {
      fontSize: '12px',
      lineHeight: '16px',
      fontWeight: 600
    }
  }, selection.qField), React.createElement(Typography, {
    noWrap: true,
    style: {
      fontSize: '12px',
      opacity: 0.55,
      lineHeight: '16px'
    }
  }, label)), selection.qLocked ? React.createElement(Grid, {
    item: true
  }, React.createElement(IconButton, null, React.createElement(Lock, null))) : React.createElement(Grid, {
    item: true
  }, React.createElement(IconButton, {
    title: translator.get('Selection.Clear'),
    onClick: function onClick(e) {
      e.stopPropagation();
      api.clearField(selection.qField, field.states[stateIx]);
    },
    style: {
      zIndex: 1
    }
  }, React.createElement(Remove, null))), React.createElement("div", {
    style: {
      height: '4px',
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '100%'
    }
  }, noSegments === false && segments.map(function (s) {
    return React.createElement("div", {
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
  })), showListBoxPopover && React.createElement(ListBoxPopover, {
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

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showFields = _useState2[0],
      setShowFields = _useState2[1];

  var _useState3 = useState(-1),
      _useState4 = _slicedToArray(_useState3, 2),
      showStateIx = _useState4[0],
      setShowStateIx = _useState4[1];

  var _useState5 = useState(null),
      _useState6 = _slicedToArray(_useState5, 2),
      anchorEl = _useState6[0],
      setAnchorEl = _useState6[1];

  var alignTo = useRef();

  var _useContext = useContext(InstanceContext),
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

  return React.createElement(Grid, {
    container: true,
    spacing: 0,
    className: classes.item,
    onClick: handleShowFields
  }, React.createElement(Grid, {
    item: true,
    xs: true
  }, React.createElement(Badge, {
    className: classes.badge,
    color: "secondary",
    badgeContent: field.states.length
  }, React.createElement(Typography, {
    component: "span",
    noWrap: true,
    style: {
      fontSize: '12px',
      lineHeight: '16px',
      fontWeight: 600
    }
  }, field.name))), React.createElement(Grid, {
    item: true
  }, React.createElement("div", {
    style: {
      width: '12px'
    }
  })), React.createElement(Grid, {
    item: true
  }, React.createElement(IconButton, null, React.createElement(DownArrow, null))), showFields && React.createElement(Popover, {
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
  }, React.createElement(List, {
    dense: true
  }, React.createElement(ListItem, {
    title: clearAllStates,
    onClick: handleClearAllStates
  }, React.createElement(Button, {
    variant: "contained",
    fullWidth: true
  }, clearAllStates)), field.states.map(function (s, ix) {
    return (// eslint-disable-next-line react/no-array-index-key
      React.createElement(ListItem, {
        key: ix,
        title: field.name,
        onClick: function onClick(e) {
          return handleShowState(e, ix);
        }
      }, React.createElement(Box, {
        border: 1,
        width: "100%",
        borderRadius: "borderRadius",
        borderColor: "divider"
      }, React.createElement(OneField, {
        field: field,
        api: api,
        stateIx: ix,
        skipHandleShowListBoxPopover: true
      })))
    );
  }))), showStateIx > -1 && React.createElement(ListBoxPopover, {
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

  var _useState = useState({
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

  useEffect(function () {
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
  return React.createElement(Grid, {
    container: true,
    spacing: 0,
    wrap: "nowrap",
    style: {
      height: '100%'
    }
  }, state.items.map(function (s) {
    return React.createElement(Grid, {
      item: true,
      key: "".concat(s.states.join('::'), "::").concat(s.name),
      style: {
        position: 'relative',
        maxWidth: '240px',
        minWidth: '120px',
        background: theme.palette.background.paper,
        borderRight: "1px solid ".concat(theme.palette.divider)
      }
    }, s.states.length > 1 ? React.createElement(MultiState, {
      field: s,
      api: api
    }) : React.createElement(OneField, {
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

  var _useContext = useContext(InstanceContext),
      translator = _useContext.translator;

  var _useAppSelectionsNavi = useAppSelectionsNavigation(app),
      _useAppSelectionsNavi2 = _slicedToArray(_useAppSelectionsNavi, 1),
      navState = _useAppSelectionsNavi2[0];

  return React.createElement(Grid, {
    container: true,
    wrap: "nowrap",
    style: {
      height: '100%',
      alignItems: 'center',
      padding: '0 8px'
    }
  }, React.createElement(Grid, {
    item: true
  }, React.createElement(IconButton, {
    style: {
      marginRight: '8px'
    },
    disabled: !navState || !navState.canGoBack,
    title: translator.get('Navigate.Back'),
    onClick: function onClick() {
      return api.back();
    }
  }, React.createElement(SelectionsBack, null))), React.createElement(Grid, {
    item: true
  }, React.createElement(IconButton, {
    style: {
      marginRight: '8px'
    },
    disabled: !navState || !navState.canGoForward,
    title: translator.get('Navigate.Forward'),
    onClick: function onClick() {
      return api.forward();
    }
  }, React.createElement(SelectionsForward, null))), React.createElement(Grid, {
    item: true
  }, React.createElement(IconButton, {
    disabled: !navState || !navState.canClear,
    title: translator.get('Selection.ClearAll'),
    onClick: function onClick() {
      return api.clear();
    }
  }, React.createElement(ClearSelections, null))));
}

var AppSelections = function AppSelections(_ref) {
  var app = _ref.app;
  var theme = useTheme();

  var _useAppSelections = useAppSelections(app),
      _useAppSelections2 = _slicedToArray(_useAppSelections, 1),
      appSelections = _useAppSelections2[0];

  if (!appSelections) return null;
  return React.createElement(Grid, {
    container: true,
    spacing: 0,
    wrap: "nowrap",
    style: {
      backgroundColor: theme.palette.background.paper,
      minHeight: '40px'
    }
  }, React.createElement(Grid, {
    item: true,
    style: {
      borderRight: "1px solid ".concat(theme.palette.divider)
    }
  }, React.createElement(Nav, {
    api: appSelections,
    app: app
  })), React.createElement(Grid, {
    item: true,
    xs: true,
    style: {
      backgroundColor: theme.palette.background.darker,
      overflow: 'hidden'
    }
  }, React.createElement(SelectedFields, {
    api: appSelections,
    app: app
  })));
};
function mount(_ref2) {
  var element = _ref2.element,
      app = _ref2.app;
  return ReactDOM.createPortal(React.createElement(AppSelections, {
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

  return React.createElement(Grid, {
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
  }, React.createElement(Grid, {
    item: true
  }, React.createElement(WarningTriangle, {
    style: {
      fontSize: '38px'
    }
  })), React.createElement(Grid, {
    item: true
  }, React.createElement(Typography, {
    variant: "h6",
    align: "center",
    "data-tid": "error-title"
  }, title)), React.createElement(Grid, {
    item: true
  }, React.createElement(Typography, {
    variant: "subtitle1",
    align: "center",
    "data-tid": "error-message"
  }, message)), React.createElement(Grid, {
    item: true
  }, data.map(function (d, ix) {
    return (// eslint-disable-next-line react/no-array-index-key
      React.createElement(Typography, {
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
  return React.createElement("div", {
    className: classes.root
  }, React.createElement(CircularProgress, _extends({
    variant: "determinate",
    value: 100,
    className: classes.back,
    size: s,
    thickness: 3
  }, props)), React.createElement(CircularProgress, _extends({
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

  return React.createElement(React.Fragment, null, React.createElement(Grid, {
    container: true,
    item: true,
    direction: "column",
    alignItems: "center",
    spacing: 2
  }, React.createElement(Grid, {
    item: true
  }, React.createElement(Progress, null)), React.createElement(Grid, {
    item: true
  }, React.createElement(Typography, {
    variant: "h6",
    align: "center"
  }, translator.get('Object.Update.Active')))), React.createElement(Grid, _extends({
    item: true
  }, props), React.createElement(Button, {
    variant: "contained",
    onClick: cancel
  }, translator.get('Common.Cancel'))));
};
var Retry$1 = function Retry(_ref2) {
  var retry = _ref2.retry,
      translator = _ref2.translator,
      props = _objectWithoutProperties(_ref2, ["retry", "translator"]);

  return React.createElement(React.Fragment, null, React.createElement(Grid, {
    item: true
  }, React.createElement(WarningTriangle, {
    style: {
      fontSize: '38px'
    }
  })), React.createElement(Grid, {
    item: true
  }, React.createElement(Typography, {
    variant: "h6",
    align: "center"
  }, translator.get('Object.Update.Cancelled'))), React.createElement(Grid, {
    item: true
  }, React.createElement(Button, _extends({
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

  var _useContext = useContext(InstanceContext),
      translator = _useContext.translator;

  return React.createElement(Grid, {
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
  }, canCancel && React.createElement(Cancel$1, {
    cancel: api.cancel,
    translator: translator,
    className: cancel
  }), canRetry && React.createElement(Retry$1, {
    retry: api.retry,
    translator: translator,
    className: retry
  }));
}

/* eslint-disable react/jsx-props-no-spreading */
function Loading() {
  return React.createElement(Grid, {
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
  }, React.createElement(Progress, {
    size: "large"
  }));
}

var Header = function Header(_ref) {
  var layout = _ref.layout,
      sn = _ref.sn;
  var showTitle = layout && layout.showTitles && !!layout.title;
  var showSubtitle = layout && layout.showTitles && !!layout.subtitle;
  var showInSelectionActions = sn && layout && layout.qSelectionInfo && layout.qSelectionInfo.qInSelections;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      items = _useState2[0],
      setItems = _useState2[1];

  useEffect(function () {
    if (!sn || !sn.component || !sn.component.isHooked) {
      return;
    }

    sn.component.observeActions(function (actions) {
      return setItems(actions);
    });
  }, [sn]);
  return React.createElement(Grid, {
    item: true,
    container: true,
    wrap: "nowrap",
    style: {
      flexGrow: 0
    }
  }, React.createElement(Grid, {
    item: true,
    zeroMinWidth: true,
    xs: true
  }, React.createElement(Grid, {
    container: true,
    wrap: "nowrap",
    direction: "column"
  }, showTitle && React.createElement(Typography, {
    variant: "h6",
    noWrap: true
  }, layout.title), showSubtitle && React.createElement(Typography, {
    variant: "body2",
    noWrap: true
  }, layout.subtitle))), React.createElement(Grid, {
    item: true,
    style: {
      whiteSpace: 'nowrap',
      minHeight: '32px'
    }
  }, showInSelectionActions && React.createElement(SelectionToolbarWithDefault, {
    inline: true,
    layout: layout,
    api: sn.component.selections,
    xItems: [].concat(_toConsumableArray(items), _toConsumableArray(sn.selectionToolbar.items || []))
  })));
};

var Footer = function Footer(_ref) {
  var layout = _ref.layout;
  return layout && layout.showTitles && layout.footnote ? React.createElement(Grid, {
    container: true
  }, React.createElement(Grid, {
    item: true,
    style: {
      minWidth: 0
    }
  }, React.createElement(Typography, {
    noWrap: true,
    variant: "body2"
  }, layout.footnote))) : null;
};

function useRect() {
  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      node = _useState2[0],
      setNode = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      rect = _useState4[0],
      setRect = _useState4[1];

  var callbackRef = useCallback(function (ref) {
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

  useLayoutEffect(function () {
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

  var _useContext = useContext(InstanceContext),
      themeName = _useContext.theme,
      language = _useContext.language,
      constraints = _useContext.constraints;

  var renderDebouncer = useRef(null);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isMounted = _useState2[0],
      setIsMounted = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      renderCnt = _useState4[0],
      setRenderCnt = _useState4[1];

  var _useRect = useRect(),
      _useRect2 = _slicedToArray(_useRect, 3),
      containerRef = _useRect2[0],
      containerRect = _useRect2[1],
      containerNode = _useRect2[2];

  var _useState5 = useState(null),
      _useState6 = _slicedToArray(_useState5, 2),
      snNode = _useState6[0],
      setSnNode = _useState6[1];

  var snRef = useCallback(function (ref) {
    if (!ref) {
      return;
    }

    setSnNode(ref);
  }, []); // Mount / Unmount

  useEffect(function () {
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

  useEffect(function () {
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
  return React.createElement("div", {
    ref: containerRef,
    "data-render-count": renderCnt,
    style: {
      position: 'relative',
      height: '100%'
    },
    className: "nebulajs-sn"
  }, React.createElement("div", {
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

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showLoading = _useState2[0],
      setShowLoading = _useState2[1];

  useEffect(function () {
    var handle = setTimeout(function () {
      return setShowLoading(true);
    }, delay);
    return function () {
      return clearTimeout(handle);
    };
  }, []);
  return showLoading && React.createElement(Loading, null);
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

var Cell = forwardRef(function (_ref8, ref) {
  var corona = _ref8.corona,
      model = _ref8.model,
      initialSnOptions = _ref8.initialSnOptions,
      initialError = _ref8.initialError,
      onMount = _ref8.onMount;
  var app = corona.app,
      types = corona.public.nebbie.types;

  var _useContext = useContext(InstanceContext),
      translator = _useContext.translator,
      language = _useContext.language;

  var theme = useTheme();
  var cellRef = useRef();

  var _useReducer = useReducer(contentReducer, initialState(initialError)),
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

  var _useState3 = useState(initialSnOptions),
      _useState4 = _slicedToArray(_useState3, 2),
      snOptions = _useState4[0],
      setSnOptions = _useState4[1];

  var _useObjectSelections = useObjectSelections(app, model),
      _useObjectSelections2 = _slicedToArray(_useObjectSelections, 1),
      selections = _useObjectSelections2[0];

  useEffect(function () {
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

  useEffect(function () {
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

  useImperativeHandle(ref, function () {
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
    Content = React.createElement(LoadingSn, null);
  } else if (state.error) {
    Content = React.createElement(Error$1, state.error);
  } else if (state.loaded) {
    Content = React.createElement(Supernova, {
      key: layout.visualization,
      sn: state.sn,
      corona: corona,
      snOptions: snOptions,
      layout: layout,
      appLayout: appLayout,
      parentNode: contentNode
    });
  }

  return React.createElement(Paper, {
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
  }, React.createElement(Grid, {
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
  }, React.createElement(Header, {
    layout: layout,
    sn: state.sn
  }, "\xA0"), React.createElement(Grid, {
    item: true,
    xs: true,
    style: {
      height: '100%'
    },
    ref: contentRef
  }, Content), React.createElement(Footer, {
    layout: layout
  })), state.longRunningQuery && React.createElement(LongRunningQuery, {
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
  var cellRef = React.createRef();
  var portal = ReactDOM.createPortal(React.createElement(Cell, {
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

function create$1(_x, _x2, _x3) {
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

function create$2(info, corona) {
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
    supernova: function supernova() {
      return load(type.name, type.version, corona, opts.load).then(function (SNDefinition) {
        sn = sn || generator(SNDefinition, corona.public.env);
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

      versions[version] = create$2({
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
function create$3(_ref) {
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
    var types = create$3({
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
                  return _context3.abrupt("return", create$1(createCfg, vizConfig, corona));

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

var index$1 = nuked(DEFAULT_CONFIG);

export default index$1;
