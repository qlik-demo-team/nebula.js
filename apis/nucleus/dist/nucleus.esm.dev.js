/*
* @nebula.js/nucleus v0.1.0-alpha.29
* Copyright (c) 2020 QlikTech International AB
* Released under the MIT license.
*/

import localeFn from '@nebula.js/locale';
import themeFn from '@nebula.js/theme';
import React, { useState, useEffect, useReducer, forwardRef, useMemo, useImperativeHandle, useRef, useCallback, useContext, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import { createTheme, createGenerateClassName, StylesProvider, ThemeProvider, makeStyles, useTheme } from '@nebula.js/ui/theme';
import { Grid, Typography, MenuItem, ListItemIcon, Button, IconButton, OutlinedInput, InputAdornment, Popover, MenuList, Badge, List, ListItem, Box, makeStyles as makeStyles$1, CircularProgress, Paper } from '@material-ui/core';
import Remove from '@nebula.js/ui/icons/remove';
import Lock from '@nebula.js/ui/icons/lock';
import Unlock from '@nebula.js/ui/icons/unlock';
import { more } from '@nebula.js/ui/icons/more';
import { FixedSizeList } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import Tick, { tick } from '@nebula.js/ui/icons/tick';
import { selectAll } from '@nebula.js/ui/icons/select-all';
import { selectAlternative } from '@nebula.js/ui/icons/select-alternative';
import { selectPossible } from '@nebula.js/ui/icons/select-possible';
import { selectExcluded } from '@nebula.js/ui/icons/select-excluded';
import { close as close$1 } from '@nebula.js/ui/icons/close';
import ClearSelections, { clearSelections } from '@nebula.js/ui/icons/clear-selections';
import SvgIcon from '@nebula.js/ui/icons/SvgIcon';
import Search from '@nebula.js/ui/icons/search';
import EventEmitter from 'node-event-emitter';
import DownArrow from '@nebula.js/ui/icons/down-arrow';
import SelectionsBack from '@nebula.js/ui/icons/selections-back';
import SelectionsForward from '@nebula.js/ui/icons/selections-forward';
import WarningTriangle from '@nebula.js/ui/icons/warning-triangle-2';
import { generator } from '@nebula.js/supernova';

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
  var l = localeFn({
    initial: language
  });
  Object.keys(all).forEach(function (key) {
    l.translator.add(all[key]);
  });
  return {
    translator: l.translator
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

  var theme = themeFn();

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
      theme: createTheme(muiThemeName),
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

function eventmixin (obj) {
  /* eslint no-param-reassign: 0 */
  Object.keys(EventEmitter.prototype).forEach(function (key) {
    obj[key] = EventEmitter.prototype[key];
  });
  EventEmitter.init(obj);
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
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref5) {
    var types, name, version, SN;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            types = _ref5.types, name = _ref5.name, version = _ref5.version;
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
    return _ref4.apply(this, arguments);
  };
}();

var loadType =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(_ref7) {
    var dispatch, types, name, version, layout, model, app, selections, snType, sn;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            dispatch = _ref7.dispatch, types = _ref7.types, name = _ref7.name, version = _ref7.version, layout = _ref7.layout, model = _ref7.model, app = _ref7.app, selections = _ref7.selections;
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
    return _ref6.apply(this, arguments);
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
      takeSnapshot: function takeSnapshot() {
        return _asyncToGenerator(
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
        }))();
      },
      exportImage: function exportImage() {
        var _this = this;

        return _asyncToGenerator(
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
                  return _this.takeSnapshot();

                case 4:
                  snapshot = _context5.sent;
                  return _context5.abrupt("return", corona.config.snapshot.capture(snapshot));

                case 6:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }))();
      }
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

function isObject(v) {
  return v != null && !Array.isArray(v) && _typeof(v) === 'object';
}

function isEqual(a, b) {
  if (isObject(a) && isObject(b)) {
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
    setTemporaryProperties: function setTemporaryProperties(props) {
      return _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
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
      }))();
    },
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

function create(_x, _x2, _x3) {
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

function getObject(_x, _x2, _x3) {
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

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var semver = createCommonjsModule(function (module, exports) {
exports = module.exports = SemVer;

var debug;
/* istanbul ignore next */
if (typeof process === 'object' &&
    process.env &&
    process.env.NODE_DEBUG &&
    /\bsemver\b/i.test(process.env.NODE_DEBUG)) {
  debug = function () {
    var args = Array.prototype.slice.call(arguments, 0);
    args.unshift('SEMVER');
    console.log.apply(console, args);
  };
} else {
  debug = function () {};
}

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
exports.SEMVER_SPEC_VERSION = '2.0.0';

var MAX_LENGTH = 256;
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER ||
  /* istanbul ignore next */ 9007199254740991;

// Max safe segment length for coercion.
var MAX_SAFE_COMPONENT_LENGTH = 16;

// The actual regexps go on exports.re
var re = exports.re = [];
var src = exports.src = [];
var t = exports.tokens = {};
var R = 0;

function tok (n) {
  t[n] = R++;
}

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

tok('NUMERICIDENTIFIER');
src[t.NUMERICIDENTIFIER] = '0|[1-9]\\d*';
tok('NUMERICIDENTIFIERLOOSE');
src[t.NUMERICIDENTIFIERLOOSE] = '[0-9]+';

// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

tok('NONNUMERICIDENTIFIER');
src[t.NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';

// ## Main Version
// Three dot-separated numeric identifiers.

tok('MAINVERSION');
src[t.MAINVERSION] = '(' + src[t.NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[t.NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[t.NUMERICIDENTIFIER] + ')';

tok('MAINVERSIONLOOSE');
src[t.MAINVERSIONLOOSE] = '(' + src[t.NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[t.NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[t.NUMERICIDENTIFIERLOOSE] + ')';

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

tok('PRERELEASEIDENTIFIER');
src[t.PRERELEASEIDENTIFIER] = '(?:' + src[t.NUMERICIDENTIFIER] +
                            '|' + src[t.NONNUMERICIDENTIFIER] + ')';

tok('PRERELEASEIDENTIFIERLOOSE');
src[t.PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[t.NUMERICIDENTIFIERLOOSE] +
                                 '|' + src[t.NONNUMERICIDENTIFIER] + ')';

// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

tok('PRERELEASE');
src[t.PRERELEASE] = '(?:-(' + src[t.PRERELEASEIDENTIFIER] +
                  '(?:\\.' + src[t.PRERELEASEIDENTIFIER] + ')*))';

tok('PRERELEASELOOSE');
src[t.PRERELEASELOOSE] = '(?:-?(' + src[t.PRERELEASEIDENTIFIERLOOSE] +
                       '(?:\\.' + src[t.PRERELEASEIDENTIFIERLOOSE] + ')*))';

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

tok('BUILDIDENTIFIER');
src[t.BUILDIDENTIFIER] = '[0-9A-Za-z-]+';

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

tok('BUILD');
src[t.BUILD] = '(?:\\+(' + src[t.BUILDIDENTIFIER] +
             '(?:\\.' + src[t.BUILDIDENTIFIER] + ')*))';

// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

tok('FULL');
tok('FULLPLAIN');
src[t.FULLPLAIN] = 'v?' + src[t.MAINVERSION] +
                  src[t.PRERELEASE] + '?' +
                  src[t.BUILD] + '?';

src[t.FULL] = '^' + src[t.FULLPLAIN] + '$';

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
tok('LOOSEPLAIN');
src[t.LOOSEPLAIN] = '[v=\\s]*' + src[t.MAINVERSIONLOOSE] +
                  src[t.PRERELEASELOOSE] + '?' +
                  src[t.BUILD] + '?';

tok('LOOSE');
src[t.LOOSE] = '^' + src[t.LOOSEPLAIN] + '$';

tok('GTLT');
src[t.GTLT] = '((?:<|>)?=?)';

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
tok('XRANGEIDENTIFIERLOOSE');
src[t.XRANGEIDENTIFIERLOOSE] = src[t.NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
tok('XRANGEIDENTIFIER');
src[t.XRANGEIDENTIFIER] = src[t.NUMERICIDENTIFIER] + '|x|X|\\*';

tok('XRANGEPLAIN');
src[t.XRANGEPLAIN] = '[v=\\s]*(' + src[t.XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[t.XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[t.XRANGEIDENTIFIER] + ')' +
                   '(?:' + src[t.PRERELEASE] + ')?' +
                   src[t.BUILD] + '?' +
                   ')?)?';

tok('XRANGEPLAINLOOSE');
src[t.XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[t.XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[t.XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[t.XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:' + src[t.PRERELEASELOOSE] + ')?' +
                        src[t.BUILD] + '?' +
                        ')?)?';

tok('XRANGE');
src[t.XRANGE] = '^' + src[t.GTLT] + '\\s*' + src[t.XRANGEPLAIN] + '$';
tok('XRANGELOOSE');
src[t.XRANGELOOSE] = '^' + src[t.GTLT] + '\\s*' + src[t.XRANGEPLAINLOOSE] + '$';

// Coercion.
// Extract anything that could conceivably be a part of a valid semver
tok('COERCE');
src[t.COERCE] = '(^|[^\\d])' +
              '(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '})' +
              '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' +
              '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' +
              '(?:$|[^\\d])';
tok('COERCERTL');
re[t.COERCERTL] = new RegExp(src[t.COERCE], 'g');

// Tilde ranges.
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
src[t.TILDELOOSE] = '^' + src[t.LONETILDE] + src[t.XRANGEPLAINLOOSE] + '$';

// Caret ranges.
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
src[t.CARETLOOSE] = '^' + src[t.LONECARET] + src[t.XRANGEPLAINLOOSE] + '$';

// A simple gt/lt/eq thing, or just "" to indicate "any version"
tok('COMPARATORLOOSE');
src[t.COMPARATORLOOSE] = '^' + src[t.GTLT] + '\\s*(' + src[t.LOOSEPLAIN] + ')$|^$';
tok('COMPARATOR');
src[t.COMPARATOR] = '^' + src[t.GTLT] + '\\s*(' + src[t.FULLPLAIN] + ')$|^$';

// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
tok('COMPARATORTRIM');
src[t.COMPARATORTRIM] = '(\\s*)' + src[t.GTLT] +
                      '\\s*(' + src[t.LOOSEPLAIN] + '|' + src[t.XRANGEPLAIN] + ')';

// this one has to use the /g flag
re[t.COMPARATORTRIM] = new RegExp(src[t.COMPARATORTRIM], 'g');
var comparatorTrimReplace = '$1$2$3';

// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
tok('HYPHENRANGE');
src[t.HYPHENRANGE] = '^\\s*(' + src[t.XRANGEPLAIN] + ')' +
                   '\\s+-\\s+' +
                   '(' + src[t.XRANGEPLAIN] + ')' +
                   '\\s*$';

tok('HYPHENRANGELOOSE');
src[t.HYPHENRANGELOOSE] = '^\\s*(' + src[t.XRANGEPLAINLOOSE] + ')' +
                        '\\s+-\\s+' +
                        '(' + src[t.XRANGEPLAINLOOSE] + ')' +
                        '\\s*$';

// Star ranges basically just allow anything at all.
tok('STAR');
src[t.STAR] = '(<|>)?=?\\s*\\*';

// Compile to actual regexp objects.
// All are flag-free, unless they were created above with a flag.
for (var i = 0; i < R; i++) {
  debug(i, src[i]);
  if (!re[i]) {
    re[i] = new RegExp(src[i]);
  }
}

exports.parse = parse;
function parse (version, options) {
  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    };
  }

  if (version instanceof SemVer) {
    return version
  }

  if (typeof version !== 'string') {
    return null
  }

  if (version.length > MAX_LENGTH) {
    return null
  }

  var r = options.loose ? re[t.LOOSE] : re[t.FULL];
  if (!r.test(version)) {
    return null
  }

  try {
    return new SemVer(version, options)
  } catch (er) {
    return null
  }
}

exports.valid = valid;
function valid (version, options) {
  var v = parse(version, options);
  return v ? v.version : null
}

exports.clean = clean;
function clean (version, options) {
  var s = parse(version.trim().replace(/^[=v]+/, ''), options);
  return s ? s.version : null
}

exports.SemVer = SemVer;

function SemVer (version, options) {
  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    };
  }
  if (version instanceof SemVer) {
    if (version.loose === options.loose) {
      return version
    } else {
      version = version.version;
    }
  } else if (typeof version !== 'string') {
    throw new TypeError('Invalid Version: ' + version)
  }

  if (version.length > MAX_LENGTH) {
    throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters')
  }

  if (!(this instanceof SemVer)) {
    return new SemVer(version, options)
  }

  debug('SemVer', version, options);
  this.options = options;
  this.loose = !!options.loose;

  var m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);

  if (!m) {
    throw new TypeError('Invalid Version: ' + version)
  }

  this.raw = version;

  // these are actually numbers
  this.major = +m[1];
  this.minor = +m[2];
  this.patch = +m[3];

  if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
    throw new TypeError('Invalid major version')
  }

  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
    throw new TypeError('Invalid minor version')
  }

  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
    throw new TypeError('Invalid patch version')
  }

  // numberify any prerelease numeric ids
  if (!m[4]) {
    this.prerelease = [];
  } else {
    this.prerelease = m[4].split('.').map(function (id) {
      if (/^[0-9]+$/.test(id)) {
        var num = +id;
        if (num >= 0 && num < MAX_SAFE_INTEGER) {
          return num
        }
      }
      return id
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
  return this.version
};

SemVer.prototype.toString = function () {
  return this.version
};

SemVer.prototype.compare = function (other) {
  debug('SemVer.compare', this.version, this.options, other);
  if (!(other instanceof SemVer)) {
    other = new SemVer(other, this.options);
  }

  return this.compareMain(other) || this.comparePre(other)
};

SemVer.prototype.compareMain = function (other) {
  if (!(other instanceof SemVer)) {
    other = new SemVer(other, this.options);
  }

  return compareIdentifiers(this.major, other.major) ||
         compareIdentifiers(this.minor, other.minor) ||
         compareIdentifiers(this.patch, other.patch)
};

SemVer.prototype.comparePre = function (other) {
  if (!(other instanceof SemVer)) {
    other = new SemVer(other, this.options);
  }

  // NOT having a prerelease is > having one
  if (this.prerelease.length && !other.prerelease.length) {
    return -1
  } else if (!this.prerelease.length && other.prerelease.length) {
    return 1
  } else if (!this.prerelease.length && !other.prerelease.length) {
    return 0
  }

  var i = 0;
  do {
    var a = this.prerelease[i];
    var b = other.prerelease[i];
    debug('prerelease compare', i, a, b);
    if (a === undefined && b === undefined) {
      return 0
    } else if (b === undefined) {
      return 1
    } else if (a === undefined) {
      return -1
    } else if (a === b) {
      continue
    } else {
      return compareIdentifiers(a, b)
    }
  } while (++i)
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
      return 0
    } else if (b === undefined) {
      return 1
    } else if (a === undefined) {
      return -1
    } else if (a === b) {
      continue
    } else {
      return compareIdentifiers(a, b)
    }
  } while (++i)
};

// preminor will bump the version up to the next minor release, and immediately
// down to pre-release. premajor and prepatch work the same way.
SemVer.prototype.inc = function (release, identifier) {
  switch (release) {
    case 'premajor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor = 0;
      this.major++;
      this.inc('pre', identifier);
      break
    case 'preminor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor++;
      this.inc('pre', identifier);
      break
    case 'prepatch':
      // If this is already a prerelease, it will bump to the next version
      // drop any prereleases that might already exist, since they are not
      // relevant at this point.
      this.prerelease.length = 0;
      this.inc('patch', identifier);
      this.inc('pre', identifier);
      break
    // If the input is a non-prerelease version, this acts the same as
    // prepatch.
    case 'prerelease':
      if (this.prerelease.length === 0) {
        this.inc('patch', identifier);
      }
      this.inc('pre', identifier);
      break

    case 'major':
      // If this is a pre-major version, bump up to the same major version.
      // Otherwise increment major.
      // 1.0.0-5 bumps to 1.0.0
      // 1.1.0 bumps to 2.0.0
      if (this.minor !== 0 ||
          this.patch !== 0 ||
          this.prerelease.length === 0) {
        this.major++;
      }
      this.minor = 0;
      this.patch = 0;
      this.prerelease = [];
      break
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
      break
    case 'patch':
      // If this is not a pre-release version, it will increment the patch.
      // If it is a pre-release it will bump up to the same patch version.
      // 1.2.0-5 patches to 1.2.0
      // 1.2.0 patches to 1.2.1
      if (this.prerelease.length === 0) {
        this.patch++;
      }
      this.prerelease = [];
      break
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
      break

    default:
      throw new Error('invalid increment argument: ' + release)
  }
  this.format();
  this.raw = this.version;
  return this
};

exports.inc = inc;
function inc (version, release, loose, identifier) {
  if (typeof (loose) === 'string') {
    identifier = loose;
    loose = undefined;
  }

  try {
    return new SemVer(version, loose).inc(release, identifier).version
  } catch (er) {
    return null
  }
}

exports.diff = diff;
function diff (version1, version2) {
  if (eq(version1, version2)) {
    return null
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
          return prefix + key
        }
      }
    }
    return defaultResult // may be undefined
  }
}

exports.compareIdentifiers = compareIdentifiers;

var numeric = /^[0-9]+$/;
function compareIdentifiers (a, b) {
  var anum = numeric.test(a);
  var bnum = numeric.test(b);

  if (anum && bnum) {
    a = +a;
    b = +b;
  }

  return a === b ? 0
    : (anum && !bnum) ? -1
    : (bnum && !anum) ? 1
    : a < b ? -1
    : 1
}

exports.rcompareIdentifiers = rcompareIdentifiers;
function rcompareIdentifiers (a, b) {
  return compareIdentifiers(b, a)
}

exports.major = major;
function major (a, loose) {
  return new SemVer(a, loose).major
}

exports.minor = minor;
function minor (a, loose) {
  return new SemVer(a, loose).minor
}

exports.patch = patch;
function patch (a, loose) {
  return new SemVer(a, loose).patch
}

exports.compare = compare;
function compare (a, b, loose) {
  return new SemVer(a, loose).compare(new SemVer(b, loose))
}

exports.compareLoose = compareLoose;
function compareLoose (a, b) {
  return compare(a, b, true)
}

exports.compareBuild = compareBuild;
function compareBuild (a, b, loose) {
  var versionA = new SemVer(a, loose);
  var versionB = new SemVer(b, loose);
  return versionA.compare(versionB) || versionA.compareBuild(versionB)
}

exports.rcompare = rcompare;
function rcompare (a, b, loose) {
  return compare(b, a, loose)
}

exports.sort = sort;
function sort (list, loose) {
  return list.sort(function (a, b) {
    return exports.compareBuild(a, b, loose)
  })
}

exports.rsort = rsort;
function rsort (list, loose) {
  return list.sort(function (a, b) {
    return exports.compareBuild(b, a, loose)
  })
}

exports.gt = gt;
function gt (a, b, loose) {
  return compare(a, b, loose) > 0
}

exports.lt = lt;
function lt (a, b, loose) {
  return compare(a, b, loose) < 0
}

exports.eq = eq;
function eq (a, b, loose) {
  return compare(a, b, loose) === 0
}

exports.neq = neq;
function neq (a, b, loose) {
  return compare(a, b, loose) !== 0
}

exports.gte = gte;
function gte (a, b, loose) {
  return compare(a, b, loose) >= 0
}

exports.lte = lte;
function lte (a, b, loose) {
  return compare(a, b, loose) <= 0
}

exports.cmp = cmp;
function cmp (a, op, b, loose) {
  switch (op) {
    case '===':
      if (typeof a === 'object')
        a = a.version;
      if (typeof b === 'object')
        b = b.version;
      return a === b

    case '!==':
      if (typeof a === 'object')
        a = a.version;
      if (typeof b === 'object')
        b = b.version;
      return a !== b

    case '':
    case '=':
    case '==':
      return eq(a, b, loose)

    case '!=':
      return neq(a, b, loose)

    case '>':
      return gt(a, b, loose)

    case '>=':
      return gte(a, b, loose)

    case '<':
      return lt(a, b, loose)

    case '<=':
      return lte(a, b, loose)

    default:
      throw new TypeError('Invalid operator: ' + op)
  }
}

exports.Comparator = Comparator;
function Comparator (comp, options) {
  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    };
  }

  if (comp instanceof Comparator) {
    if (comp.loose === !!options.loose) {
      return comp
    } else {
      comp = comp.value;
    }
  }

  if (!(this instanceof Comparator)) {
    return new Comparator(comp, options)
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
    throw new TypeError('Invalid comparator: ' + comp)
  }

  this.operator = m[1] !== undefined ? m[1] : '';
  if (this.operator === '=') {
    this.operator = '';
  }

  // if it literally is just '>' or '' then allow anything.
  if (!m[2]) {
    this.semver = ANY;
  } else {
    this.semver = new SemVer(m[2], this.options.loose);
  }
};

Comparator.prototype.toString = function () {
  return this.value
};

Comparator.prototype.test = function (version) {
  debug('Comparator.test', version, this.options.loose);

  if (this.semver === ANY || version === ANY) {
    return true
  }

  if (typeof version === 'string') {
    try {
      version = new SemVer(version, this.options);
    } catch (er) {
      return false
    }
  }

  return cmp(version, this.operator, this.semver, this.options)
};

Comparator.prototype.intersects = function (comp, options) {
  if (!(comp instanceof Comparator)) {
    throw new TypeError('a Comparator is required')
  }

  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    };
  }

  var rangeTmp;

  if (this.operator === '') {
    if (this.value === '') {
      return true
    }
    rangeTmp = new Range(comp.value, options);
    return satisfies(this.value, rangeTmp, options)
  } else if (comp.operator === '') {
    if (comp.value === '') {
      return true
    }
    rangeTmp = new Range(this.value, options);
    return satisfies(comp.semver, rangeTmp, options)
  }

  var sameDirectionIncreasing =
    (this.operator === '>=' || this.operator === '>') &&
    (comp.operator === '>=' || comp.operator === '>');
  var sameDirectionDecreasing =
    (this.operator === '<=' || this.operator === '<') &&
    (comp.operator === '<=' || comp.operator === '<');
  var sameSemVer = this.semver.version === comp.semver.version;
  var differentDirectionsInclusive =
    (this.operator === '>=' || this.operator === '<=') &&
    (comp.operator === '>=' || comp.operator === '<=');
  var oppositeDirectionsLessThan =
    cmp(this.semver, '<', comp.semver, options) &&
    ((this.operator === '>=' || this.operator === '>') &&
    (comp.operator === '<=' || comp.operator === '<'));
  var oppositeDirectionsGreaterThan =
    cmp(this.semver, '>', comp.semver, options) &&
    ((this.operator === '<=' || this.operator === '<') &&
    (comp.operator === '>=' || comp.operator === '>'));

  return sameDirectionIncreasing || sameDirectionDecreasing ||
    (sameSemVer && differentDirectionsInclusive) ||
    oppositeDirectionsLessThan || oppositeDirectionsGreaterThan
};

exports.Range = Range;
function Range (range, options) {
  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    };
  }

  if (range instanceof Range) {
    if (range.loose === !!options.loose &&
        range.includePrerelease === !!options.includePrerelease) {
      return range
    } else {
      return new Range(range.raw, options)
    }
  }

  if (range instanceof Comparator) {
    return new Range(range.value, options)
  }

  if (!(this instanceof Range)) {
    return new Range(range, options)
  }

  this.options = options;
  this.loose = !!options.loose;
  this.includePrerelease = !!options.includePrerelease;

  // First, split based on boolean or ||
  this.raw = range;
  this.set = range.split(/\s*\|\|\s*/).map(function (range) {
    return this.parseRange(range.trim())
  }, this).filter(function (c) {
    // throw out any that are not relevant for whatever reason
    return c.length
  });

  if (!this.set.length) {
    throw new TypeError('Invalid SemVer Range: ' + range)
  }

  this.format();
}

Range.prototype.format = function () {
  this.range = this.set.map(function (comps) {
    return comps.join(' ').trim()
  }).join('||').trim();
  return this.range
};

Range.prototype.toString = function () {
  return this.range
};

Range.prototype.parseRange = function (range) {
  var loose = this.options.loose;
  range = range.trim();
  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
  var hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
  range = range.replace(hr, hyphenReplace);
  debug('hyphen replace', range);
  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
  range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
  debug('comparator trim', range, re[t.COMPARATORTRIM]);

  // `~ 1.2.3` => `~1.2.3`
  range = range.replace(re[t.TILDETRIM], tildeTrimReplace);

  // `^ 1.2.3` => `^1.2.3`
  range = range.replace(re[t.CARETTRIM], caretTrimReplace);

  // normalize spaces
  range = range.split(/\s+/).join(' ');

  // At this point, the range is completely trimmed and
  // ready to be split into comparators.

  var compRe = loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
  var set = range.split(' ').map(function (comp) {
    return parseComparator(comp, this.options)
  }, this).join(' ').split(/\s+/);
  if (this.options.loose) {
    // in loose mode, throw out any that are not valid comparators
    set = set.filter(function (comp) {
      return !!comp.match(compRe)
    });
  }
  set = set.map(function (comp) {
    return new Comparator(comp, this.options)
  }, this);

  return set
};

Range.prototype.intersects = function (range, options) {
  if (!(range instanceof Range)) {
    throw new TypeError('a Range is required')
  }

  return this.set.some(function (thisComparators) {
    return (
      isSatisfiable(thisComparators, options) &&
      range.set.some(function (rangeComparators) {
        return (
          isSatisfiable(rangeComparators, options) &&
          thisComparators.every(function (thisComparator) {
            return rangeComparators.every(function (rangeComparator) {
              return thisComparator.intersects(rangeComparator, options)
            })
          })
        )
      })
    )
  })
};

// take a set of comparators and determine whether there
// exists a version which can satisfy it
function isSatisfiable (comparators, options) {
  var result = true;
  var remainingComparators = comparators.slice();
  var testComparator = remainingComparators.pop();

  while (result && remainingComparators.length) {
    result = remainingComparators.every(function (otherComparator) {
      return testComparator.intersects(otherComparator, options)
    });

    testComparator = remainingComparators.pop();
  }

  return result
}

// Mostly just for testing and legacy API reasons
exports.toComparators = toComparators;
function toComparators (range, options) {
  return new Range(range, options).set.map(function (comp) {
    return comp.map(function (c) {
      return c.value
    }).join(' ').trim().split(' ')
  })
}

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
function parseComparator (comp, options) {
  debug('comp', comp, options);
  comp = replaceCarets(comp, options);
  debug('caret', comp);
  comp = replaceTildes(comp, options);
  debug('tildes', comp);
  comp = replaceXRanges(comp, options);
  debug('xrange', comp);
  comp = replaceStars(comp, options);
  debug('stars', comp);
  return comp
}

function isX (id) {
  return !id || id.toLowerCase() === 'x' || id === '*'
}

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
function replaceTildes (comp, options) {
  return comp.trim().split(/\s+/).map(function (comp) {
    return replaceTilde(comp, options)
  }).join(' ')
}

function replaceTilde (comp, options) {
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
      ret = '>=' + M + '.' + m + '.' + p + '-' + pr +
            ' <' + M + '.' + (+m + 1) + '.0';
    } else {
      // ~1.2.3 == >=1.2.3 <1.3.0
      ret = '>=' + M + '.' + m + '.' + p +
            ' <' + M + '.' + (+m + 1) + '.0';
    }

    debug('tilde return', ret);
    return ret
  })
}

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
// ^1.2.3 --> >=1.2.3 <2.0.0
// ^1.2.0 --> >=1.2.0 <2.0.0
function replaceCarets (comp, options) {
  return comp.trim().split(/\s+/).map(function (comp) {
    return replaceCaret(comp, options)
  }).join(' ')
}

function replaceCaret (comp, options) {
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
          ret = '>=' + M + '.' + m + '.' + p + '-' + pr +
                ' <' + M + '.' + m + '.' + (+p + 1);
        } else {
          ret = '>=' + M + '.' + m + '.' + p + '-' + pr +
                ' <' + M + '.' + (+m + 1) + '.0';
        }
      } else {
        ret = '>=' + M + '.' + m + '.' + p + '-' + pr +
              ' <' + (+M + 1) + '.0.0';
      }
    } else {
      debug('no pr');
      if (M === '0') {
        if (m === '0') {
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + m + '.' + (+p + 1);
        } else {
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + (+m + 1) + '.0';
        }
      } else {
        ret = '>=' + M + '.' + m + '.' + p +
              ' <' + (+M + 1) + '.0.0';
      }
    }

    debug('caret return', ret);
    return ret
  })
}

function replaceXRanges (comp, options) {
  debug('replaceXRanges', comp, options);
  return comp.split(/\s+/).map(function (comp) {
    return replaceXRange(comp, options)
  }).join(' ')
}

function replaceXRange (comp, options) {
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
    }

    // if we're including prereleases in the match, then we need
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
      ret = '>=' + M + '.' + m + '.0' + pr +
        ' <' + M + '.' + (+m + 1) + '.0' + pr;
    }

    debug('xRange return', ret);

    return ret
  })
}

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
function replaceStars (comp, options) {
  debug('replaceStars', comp, options);
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp.trim().replace(re[t.STAR], '')
}

// This function is passed to string.replace(re[t.HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0
function hyphenReplace ($0,
  from, fM, fm, fp, fpr, fb,
  to, tM, tm, tp, tpr, tb) {
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

  return (from + ' ' + to).trim()
}

// if ANY of the sets match ALL of its comparators, then pass
Range.prototype.test = function (version) {
  if (!version) {
    return false
  }

  if (typeof version === 'string') {
    try {
      version = new SemVer(version, this.options);
    } catch (er) {
      return false
    }
  }

  for (var i = 0; i < this.set.length; i++) {
    if (testSet(this.set[i], version, this.options)) {
      return true
    }
  }
  return false
};

function testSet (set, version, options) {
  for (var i = 0; i < set.length; i++) {
    if (!set[i].test(version)) {
      return false
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
        continue
      }

      if (set[i].semver.prerelease.length > 0) {
        var allowed = set[i].semver;
        if (allowed.major === version.major &&
            allowed.minor === version.minor &&
            allowed.patch === version.patch) {
          return true
        }
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false
  }

  return true
}

exports.satisfies = satisfies;
function satisfies (version, range, options) {
  try {
    range = new Range(range, options);
  } catch (er) {
    return false
  }
  return range.test(version)
}

exports.maxSatisfying = maxSatisfying;
function maxSatisfying (versions, range, options) {
  var max = null;
  var maxSV = null;
  try {
    var rangeObj = new Range(range, options);
  } catch (er) {
    return null
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
  return max
}

exports.minSatisfying = minSatisfying;
function minSatisfying (versions, range, options) {
  var min = null;
  var minSV = null;
  try {
    var rangeObj = new Range(range, options);
  } catch (er) {
    return null
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
  return min
}

exports.minVersion = minVersion;
function minVersion (range, loose) {
  range = new Range(range, loose);

  var minver = new SemVer('0.0.0');
  if (range.test(minver)) {
    return minver
  }

  minver = new SemVer('0.0.0-0');
  if (range.test(minver)) {
    return minver
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
          break
        case '<':
        case '<=':
          /* Ignore maximum versions */
          break
        /* istanbul ignore next */
        default:
          throw new Error('Unexpected operation: ' + comparator.operator)
      }
    });
  }

  if (minver && range.test(minver)) {
    return minver
  }

  return null
}

exports.validRange = validRange;
function validRange (range, options) {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, options).range || '*'
  } catch (er) {
    return null
  }
}

// Determine if version is less than all the versions possible in the range
exports.ltr = ltr;
function ltr (version, range, options) {
  return outside(version, range, '<', options)
}

// Determine if version is greater than all the versions possible in the range.
exports.gtr = gtr;
function gtr (version, range, options) {
  return outside(version, range, '>', options)
}

exports.outside = outside;
function outside (version, range, hilo, options) {
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
      break
    case '<':
      gtfn = lt;
      ltefn = gte;
      ltfn = gt;
      comp = '<';
      ecomp = '<=';
      break
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"')
  }

  // If it satisifes the range it is not outside
  if (satisfies(version, range, options)) {
    return false
  }

  // From now on, variable terms are as if we're in "gtr" mode.
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
    });

    // If the edge version comparator has a operator then our version
    // isn't outside it
    if (high.operator === comp || high.operator === ecomp) {
      return false
    }

    // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range
    if ((!low.operator || low.operator === comp) &&
        ltefn(version, low.semver)) {
      return false
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false
    }
  }
  return true
}

exports.prerelease = prerelease;
function prerelease (version, options) {
  var parsed = parse(version, options);
  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null
}

exports.intersects = intersects;
function intersects (r1, r2, options) {
  r1 = new Range(r1, options);
  r2 = new Range(r2, options);
  return r1.intersects(r2)
}

exports.coerce = coerce;
function coerce (version, options) {
  if (version instanceof SemVer) {
    return version
  }

  if (typeof version === 'number') {
    version = String(version);
  }

  if (typeof version !== 'string') {
    return null
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
    while ((next = re[t.COERCERTL].exec(version)) &&
      (!match || match.index + match[0].length !== version.length)
    ) {
      if (!match ||
          next.index + next[0].length !== match.index + match[0].length) {
        match = next;
      }
      re[t.COERCERTL].lastIndex = next.index + next[1].length + next[2].length;
    }
    // leave it in a clean state
    re[t.COERCERTL].lastIndex = -1;
  }

  if (match === null) {
    return null
  }

  return parse(match[2] +
    '.' + (match[3] || '0') +
    '.' + (match[4] || '0'), options)
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

function create$1(info, corona) {
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

      versions[version] = create$1({
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
function create$2(_ref) {
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
    var types = create$2({
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
                  return _context2.abrupt("return", getObject(getCfg, vizConfig, corona));

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
                  return _context3.abrupt("return", create(createCfg, vizConfig, corona));

                case 3:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        function create$1(_x4, _x5) {
          return _create2.apply(this, arguments);
        }

        return create$1;
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

var index = nuked(DEFAULT_CONFIG);

export default index;
