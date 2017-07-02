'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style2 = require('antd/lib/modal/style');

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _skJs = require('sk-js');

var _skJs2 = _interopRequireDefault(_skJs);

var _skL10n = require('sk-l10n');

var _nprogress = require('nprogress');

var _nprogress2 = _interopRequireDefault(_nprogress);

var _Model = require('./Model');

var _Model2 = _interopRequireDefault(_Model);

var _Resp = require('./Resp');

var _Resp2 = _interopRequireDefault(_Resp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ajax = function () {
  function Ajax() {
    _classCallCheck(this, Ajax);
  }

  _createClass(Ajax, null, [{
    key: 'fail401Func',
    value: function fail401Func(jqXHR, textStatus, errorThrown) {
      var $Deferred = _jquery2.default.Deferred();
      $Deferred.reject(jqXHR, textStatus, errorThrown);
      return $Deferred;
    }
  }, {
    key: 'doAjax',
    value: function doAjax(settings) {
      var $Deferred = _jquery2.default.Deferred();
      if (settings.progress) {
        if (Ajax.CURRENT_PROGRESS_COUNT == 0) {
          _nprogress2.default.start();
        }
        Ajax.CURRENT_PROGRESS_COUNT++;
      }
      if (!settings.async) {
        if (Ajax.CURRENT_SYNC_COUNT == 0) {
          if (_skJs2.default.$(_Model2.default.PROP_SYS) instanceof _Model2.default) {
            _skJs2.default.$(_Model2.default.PROP_SYS).skVal('ui.spinning', true);
          }
        }
        Ajax.CURRENT_SYNC_COUNT++;
      }
      settings.data = settings.data && settings.needStringify ? JSON.stringify(settings.data) : settings.data;
      _jquery2.default.ajax(settings).done(function (data, textStatus, jqXHR) {
        var response = new _Resp2.default(data);
        response.showResult();
        $Deferred.resolve(data, textStatus, jqXHR);
      }).fail(function (jqXHR, textStatus, errorThrown) {
        console.error(jqXHR);
        console.error(textStatus);
        console.error(errorThrown);
        if (_.isFunction(Ajax.SETTINGS[jqXHR.status])) {
          Ajax.SETTINGS[jqXHR.status](jqXHR, textStatus, errorThrown).done(function (data2, textStatus2, jqXHR2) {
            Ajax.doAjax(settings).done(function (data3, textStatus3, jqXHR3) {
              $Deferred.resolve(data3, textStatus3, jqXHR3);
            }).fail(function (jqXHR3, textStatus3, errorThrown3) {
              $Deferred.reject(jqXHR3, textStatus3, errorThrown3);
            });
          }).fail(function (jqXHR2, textStatus2, errorThrown2) {
            $Deferred.reject(jqXHR2, textStatus2, errorThrown2);
          });
        } else {
          _modal2.default.error({
            title: _skL10n.I18N.get('System_Error'), content: errorThrown, okText: _skL10n.I18N.get('OK')
          });
          $Deferred.reject(jqXHR, textStatus, errorThrown);
        }
      }).always(function () {
        if (settings.progress) {
          Ajax.CURRENT_PROGRESS_COUNT--;
          if (Ajax.CURRENT_PROGRESS_COUNT == 0) {
            _nprogress2.default.done();
          } else {
            _nprogress2.default.inc();
          }
        }
        if (!settings.async) {
          Ajax.CURRENT_SYNC_COUNT--;
          if (Ajax.CURRENT_SYNC_COUNT == 0) {
            if (_skJs2.default.$(_Model2.default.PROP_SYS) instanceof _Model2.default) {
              _skJs2.default.$(_Model2.default.PROP_SYS).skVal('ui.spinning', false);
            }
          }
        }
      });
      return $Deferred;
    }
  }, {
    key: 'doDelete',
    value: function doDelete(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return Ajax.doAjax(_skJs2.default.assign({}, Ajax.SETTINGS, { url: url }, { data: data }, { method: Ajax.METHOD.DELETE }, options));
    }
  }, {
    key: 'doGet',
    value: function doGet(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return Ajax.doAjax(_skJs2.default.assign({}, Ajax.SETTINGS, { url: url }, { data: data }, { method: Ajax.METHOD.GET }, options));
    }
  }, {
    key: 'doPost',
    value: function doPost(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return Ajax.doAjax(_skJs2.default.assign({}, Ajax.SETTINGS, { url: url }, { data: data }, { method: Ajax.METHOD.POST }, options));
    }
  }, {
    key: 'doPut',
    value: function doPut(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return Ajax.doAjax(_skJs2.default.assign({}, Ajax.SETTINGS, { url: url }, { data: data }, { method: Ajax.METHOD.PUT }, options));
    }
  }]);

  return Ajax;
}();

Ajax.METHOD = {
  DELETE: 'DELETE',
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT'
};
Ajax.SETTINGS = {
  contentType: 'application/json; charset=UTF-8',
  dataType: 'json',
  // processData: false,
  // traditional: true,
  failFuncs: {
    401: Ajax.fail401Func
  },
  needStringify: true,
  progress: true, //sk extend jquery
  async: true //sk extend jquery
};
Ajax.CURRENT_PROGRESS_COUNT = 0;
Ajax.CURRENT_SYNC_COUNT = 0;
exports.default = Ajax;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL0FqYXguanMiXSwibmFtZXMiOlsiQWpheCIsImpxWEhSIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwiJERlZmVycmVkIiwiRGVmZXJyZWQiLCJyZWplY3QiLCJzZXR0aW5ncyIsInByb2dyZXNzIiwiQ1VSUkVOVF9QUk9HUkVTU19DT1VOVCIsInN0YXJ0IiwiYXN5bmMiLCJDVVJSRU5UX1NZTkNfQ09VTlQiLCIkIiwiUFJPUF9TWVMiLCJza1ZhbCIsImRhdGEiLCJuZWVkU3RyaW5naWZ5IiwiSlNPTiIsInN0cmluZ2lmeSIsImFqYXgiLCJkb25lIiwicmVzcG9uc2UiLCJzaG93UmVzdWx0IiwicmVzb2x2ZSIsImZhaWwiLCJjb25zb2xlIiwiZXJyb3IiLCJfIiwiaXNGdW5jdGlvbiIsIlNFVFRJTkdTIiwic3RhdHVzIiwiZGF0YTIiLCJ0ZXh0U3RhdHVzMiIsImpxWEhSMiIsImRvQWpheCIsImRhdGEzIiwidGV4dFN0YXR1czMiLCJqcVhIUjMiLCJlcnJvclRocm93bjMiLCJlcnJvclRocm93bjIiLCJ0aXRsZSIsImdldCIsImNvbnRlbnQiLCJva1RleHQiLCJhbHdheXMiLCJpbmMiLCJ1cmwiLCJvcHRpb25zIiwiYXNzaWduIiwibWV0aG9kIiwiTUVUSE9EIiwiREVMRVRFIiwiR0VUIiwiUE9TVCIsIlBVVCIsImNvbnRlbnRUeXBlIiwiZGF0YVR5cGUiLCJmYWlsRnVuY3MiLCJmYWlsNDAxRnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztJQUVxQkEsSTs7Ozs7OztnQ0FzQkFDLEssRUFBT0MsVSxFQUFZQyxXLEVBQVk7QUFDaEQsVUFBSUMsWUFBWSxpQkFBRUMsUUFBRixFQUFoQjtBQUNBRCxnQkFBVUUsTUFBVixDQUFpQkwsS0FBakIsRUFBd0JDLFVBQXhCLEVBQW9DQyxXQUFwQztBQUNBLGFBQU9DLFNBQVA7QUFDRDs7OzJCQUVhRyxR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QW1CWlMsc0IsR0FBeUIsQztBQW5CYlQsSSxDQW9CWlksa0IsR0FBcUIsQztrQkFwQlRaLEkiLCJmaWxlIjoidXRpbHMvQWpheC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TW9kYWx9IGZyb20gJ2FudGQnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBTSyBmcm9tICdzay1qcyc7XG5pbXBvcnQge0kxOE59IGZyb20gJ3NrLWwxMG4nO1xuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xuaW1wb3J0IE1vZGVsIGZyb20gJy4vTW9kZWwnO1xuaW1wb3J0IFJlc3AgZnJvbSAnLi9SZXNwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWpheCB7XG4gIHN0YXRpYyBNRVRIT0QgPSB7XG4gICAgREVMRVRFOiAnREVMRVRFJyxcbiAgICBHRVQ6ICdHRVQnLFxuICAgIFBPU1Q6ICdQT1NUJyxcbiAgICBQVVQ6ICdQVVQnXG4gIH07XG4gIHN0YXRpYyBTRVRUSU5HUyA9IHtcbiAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgLy8gcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgIC8vIHRyYWRpdGlvbmFsOiB0cnVlLFxuICAgIGZhaWxGdW5jczp7XG4gICAgICA0MDE6QWpheC5mYWlsNDAxRnVuY1xuICAgIH0sXG4gICAgbmVlZFN0cmluZ2lmeTogdHJ1ZSxcbiAgICBwcm9ncmVzczogdHJ1ZSwvL3NrIGV4dGVuZCBqcXVlcnlcbiAgICBhc3luYzogdHJ1ZS8vc2sgZXh0ZW5kIGpxdWVyeVxuICB9O1xuICBzdGF0aWMgQ1VSUkVOVF9QUk9HUkVTU19DT1VOVCA9IDA7XG4gIHN0YXRpYyBDVVJSRU5UX1NZTkNfQ09VTlQgPSAwO1xuXG4gIHN0YXRpYyBmYWlsNDAxRnVuYyhqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pe1xuICAgIGxldCAkRGVmZXJyZWQgPSAkLkRlZmVycmVkKCk7XG4gICAgJERlZmVycmVkLnJlamVjdChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xuICAgIHJldHVybiAkRGVmZXJyZWQ7XG4gIH1cblxuICBzdGF0aWMgZG9BamF4KHNldHRpbmdzKSB7XG4gICAgbGV0ICREZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcbiAgICBpZiAoc2V0dGluZ3MucHJvZ3Jlc3MpIHtcbiAgICAgIGlmIChBamF4LkNVUlJFTlRfUFJPR1JFU1NfQ09VTlQgPT0gMCkge1xuICAgICAgICBOUHJvZ3Jlc3Muc3RhcnQoKTtcbiAgICAgIH1cbiAgICAgIEFqYXguQ1VSUkVOVF9QUk9HUkVTU19DT1VOVCsrO1xuICAgIH1cbiAgICBpZiAoIXNldHRpbmdzLmFzeW5jKSB7XG4gICAgICBpZiAoQWpheC5DVVJSRU5UX1NZTkNfQ09VTlQgPT0gMCkge1xuICAgICAgICBpZiAoU0suJChNb2RlbC5QUk9QX1NZUykgaW5zdGFuY2VvZiBNb2RlbCkge1xuICAgICAgICAgIFNLLiQoTW9kZWwuUFJPUF9TWVMpLnNrVmFsKCd1aS5zcGlubmluZycsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBBamF4LkNVUlJFTlRfU1lOQ19DT1VOVCsrO1xuICAgIH1cbiAgICBzZXR0aW5ncy5kYXRhID0gc2V0dGluZ3MuZGF0YSAmJiBzZXR0aW5ncy5uZWVkU3RyaW5naWZ5ID8gSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MuZGF0YSkgOiBzZXR0aW5ncy5kYXRhO1xuICAgICQuYWpheChzZXR0aW5ncykuZG9uZSgoZGF0YSwgdGV4dFN0YXR1cywganFYSFIpID0+IHtcbiAgICAgIGxldCByZXNwb25zZSA9IG5ldyBSZXNwKGRhdGEpO1xuICAgICAgcmVzcG9uc2Uuc2hvd1Jlc3VsdCgpO1xuICAgICAgJERlZmVycmVkLnJlc29sdmUoZGF0YSwgdGV4dFN0YXR1cywganFYSFIpO1xuICAgIH0pLmZhaWwoKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihqcVhIUik7XG4gICAgICBjb25zb2xlLmVycm9yKHRleHRTdGF0dXMpO1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvclRocm93bik7XG4gICAgICBpZihfLmlzRnVuY3Rpb24oQWpheC5TRVRUSU5HU1tqcVhIUi5zdGF0dXNdKSl7XG4gICAgICAgIEFqYXguU0VUVElOR1NbanFYSFIuc3RhdHVzXShqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pLmRvbmUoKGRhdGEyLCB0ZXh0U3RhdHVzMiwganFYSFIyKSA9PiB7XG4gICAgICAgICAgQWpheC5kb0FqYXgoc2V0dGluZ3MpLmRvbmUoKGRhdGEzLCB0ZXh0U3RhdHVzMywganFYSFIzKSA9PiB7XG4gICAgICAgICAgICAkRGVmZXJyZWQucmVzb2x2ZShkYXRhMywgdGV4dFN0YXR1czMsIGpxWEhSMyk7XG4gICAgICAgICAgfSkuZmFpbCgoanFYSFIzLCB0ZXh0U3RhdHVzMywgZXJyb3JUaHJvd24zKSA9PiB7XG4gICAgICAgICAgICAkRGVmZXJyZWQucmVqZWN0KGpxWEhSMywgdGV4dFN0YXR1czMsIGVycm9yVGhyb3duMyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pLmZhaWwoKGpxWEhSMiwgdGV4dFN0YXR1czIsIGVycm9yVGhyb3duMikgPT4ge1xuICAgICAgICAgICREZWZlcnJlZC5yZWplY3QoanFYSFIyLCB0ZXh0U3RhdHVzMiwgZXJyb3JUaHJvd24yKTtcbiAgICAgICAgfSk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgTW9kYWwuZXJyb3Ioe1xuICAgICAgICAgIHRpdGxlOiBJMThOLmdldCgnU3lzdGVtX0Vycm9yJyksIGNvbnRlbnQ6IGVycm9yVGhyb3duLCBva1RleHQ6IEkxOE4uZ2V0KCdPSycpXG4gICAgICAgIH0pO1xuICAgICAgICAkRGVmZXJyZWQucmVqZWN0KGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bik7XG4gICAgICB9XG4gICAgfSkuYWx3YXlzKCgpID0+IHtcbiAgICAgIGlmIChzZXR0aW5ncy5wcm9ncmVzcykge1xuICAgICAgICBBamF4LkNVUlJFTlRfUFJPR1JFU1NfQ09VTlQtLTtcbiAgICAgICAgaWYgKEFqYXguQ1VSUkVOVF9QUk9HUkVTU19DT1VOVCA9PSAwKSB7XG4gICAgICAgICAgTlByb2dyZXNzLmRvbmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBOUHJvZ3Jlc3MuaW5jKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghc2V0dGluZ3MuYXN5bmMpIHtcbiAgICAgICAgQWpheC5DVVJSRU5UX1NZTkNfQ09VTlQtLTtcbiAgICAgICAgaWYgKEFqYXguQ1VSUkVOVF9TWU5DX0NPVU5UID09IDApIHtcbiAgICAgICAgICBpZiAoU0suJChNb2RlbC5QUk9QX1NZUykgaW5zdGFuY2VvZiBNb2RlbCkge1xuICAgICAgICAgICAgU0suJChNb2RlbC5QUk9QX1NZUykuc2tWYWwoJ3VpLnNwaW5uaW5nJywgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiAkRGVmZXJyZWQ7XG4gIH1cblxuICBzdGF0aWMgZG9EZWxldGUodXJsLCBkYXRhID0ge30sIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiBBamF4LmRvQWpheChTSy5hc3NpZ24oe30sIEFqYXguU0VUVElOR1MsIHt1cmw6IHVybH0sIHtkYXRhOiBkYXRhfSwge21ldGhvZDogQWpheC5NRVRIT0QuREVMRVRFfSwgb3B0aW9ucykpO1xuICB9XG4gIHN0YXRpYyBkb0dldCh1cmwsIGRhdGEgPSB7fSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIEFqYXguZG9BamF4KFNLLmFzc2lnbih7fSwgQWpheC5TRVRUSU5HUywge3VybDogdXJsfSwge2RhdGE6IGRhdGF9LCB7bWV0aG9kOiBBamF4Lk1FVEhPRC5HRVR9LCBvcHRpb25zKSk7XG4gIH1cbiAgc3RhdGljIGRvUG9zdCh1cmwsIGRhdGEgPSB7fSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIEFqYXguZG9BamF4KFNLLmFzc2lnbih7fSwgQWpheC5TRVRUSU5HUywge3VybDogdXJsfSwge2RhdGE6IGRhdGF9LCB7bWV0aG9kOiBBamF4Lk1FVEhPRC5QT1NUfSwgb3B0aW9ucykpO1xuICB9XG4gIHN0YXRpYyBkb1B1dCh1cmwsIGRhdGEgPSB7fSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIEFqYXguZG9BamF4KFNLLmFzc2lnbih7fSwgQWpheC5TRVRUSU5HUywge3VybDogdXJsfSwge2RhdGE6IGRhdGF9LCB7bWV0aG9kOiBBamF4Lk1FVEhPRC5QVVR9LCBvcHRpb25zKSk7XG4gIH1cbn1cbiJdfQ==