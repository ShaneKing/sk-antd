'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _skJs = require('sk-js');

var _skJs2 = _interopRequireDefault(_skJs);

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
    key: 'getDefaultSettings',
    value: function getDefaultSettings() {
      return {
        contentType: Ajax.CONTENT_JSON_UTF_8,
        dataType: _skJs2.default.FILE_TYPE_JSON,
        // processData: false,
        // traditional: true,
        needStringify: true,
        progress: true, //sk extend jquery
        async: true //sk extend jquery
      };
    }
  }, {
    key: 'doAjax',
    value: function doAjax(settings) {
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
      try {
        return _jquery2.default.ajax(settings).done(function (data, textStatus, jqXHR) {
          var response = new _Resp2.default(data);
          response.showResult();
        }).fail(function (jqXHR, textStatus, errorThrown) {
          console.error(jqXHR);
          console.error(textStatus);
          console.error(errorThrown);
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
      } catch (exception) {
        console.error(exception);
      }
    }
  }, {
    key: 'doDelete',
    value: function doDelete(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return Ajax.doAjax(_skJs2.default.assign({}, Ajax.getDefaultSettings(), { url: url }, { data: data }, { method: Ajax.METHOD.DELETE }, options));
    }
  }, {
    key: 'doGet',
    value: function doGet(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return Ajax.doAjax(_skJs2.default.assign({}, Ajax.getDefaultSettings(), { url: url }, { data: data }, { method: Ajax.METHOD.GET }, options));
    }
  }, {
    key: 'doPost',
    value: function doPost(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return Ajax.doAjax(_skJs2.default.assign({}, Ajax.getDefaultSettings(), { url: url }, { data: data }, { method: Ajax.METHOD.POST }, options));
    }
  }, {
    key: 'doPut',
    value: function doPut(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return Ajax.doAjax(_skJs2.default.assign({}, Ajax.getDefaultSettings(), { url: url }, { data: data }, { method: Ajax.METHOD.PUT }, options));
    }
  }]);

  return Ajax;
}();

Ajax.METHOD = {
  DELETE: _skJs2.default.REQUEST_METHOD_DELETE,
  GET: _skJs2.default.REQUEST_METHOD_GET,
  POST: _skJs2.default.REQUEST_METHOD_POST,
  PUT: _skJs2.default.REQUEST_METHOD_PUT
};
Ajax.CURRENT_PROGRESS_COUNT = 0;
Ajax.CURRENT_SYNC_COUNT = 0;
Ajax.CONTENT_JSON_UTF_8 = 'application/json; charset=UTF-8';
exports.default = Ajax;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvQWpheC5qcyJdLCJuYW1lcyI6WyJBamF4IiwiY29udGVudFR5cGUiLCJDT05URU5UX0pTT05fVVRGXzgiLCJkYXRhVHlwZSIsIkZJTEVfVFlQRV9KU09OIiwibmVlZFN0cmluZ2lmeSIsInByb2dyZXNzIiwiYXN5bmMiLCJzZXR0aW5ncyIsIkNVUlJFTlRfUFJPR1JFU1NfQ09VTlQiLCJzdGFydCIsIkNVUlJFTlRfU1lOQ19DT1VOVCIsIiQiLCJQUk9QX1NZUyIsInNrVmFsIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhamF4IiwiZG9uZSIsInRleHRTdGF0dXMiLCJqcVhIUiIsInJlc3BvbnNlIiwic2hvd1Jlc3VsdCIsImZhaWwiLCJlcnJvclRocm93biIsImNvbnNvbGUiLCJlcnJvciIsImFsd2F5cyIsImluYyIsImV4Y2VwdGlvbiIsInVybCIsIm9wdGlvbnMiLCJkb0FqYXgiLCJhc3NpZ24iLCJnZXREZWZhdWx0U2V0dGluZ3MiLCJtZXRob2QiLCJNRVRIT0QiLCJERUxFVEUiLCJHRVQiLCJQT1NUIiwiUFVUIiwiUkVRVUVTVF9NRVRIT0RfREVMRVRFIiwiUkVRVUVTVF9NRVRIT0RfR0VUIiwiUkVRVUVTVF9NRVRIT0RfUE9TVCIsIlJFUVVFU1RfTUVUSE9EX1BVVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozt5Q0FZUztBQUMxQixhQUFPO0FBQ0xDLHFCQUFhRCxLQUFLRSxrQkFEYjtBQUVMQyxrQkFBVSxlQUFHQyxjQUZSO0FBR0w7QUFDQTtBQUNBQyx1QkFBZSxJQUxWO0FBTUxDLGtCQUFVLElBTkwsRUFNVTtBQUNmQyxlQUFPLElBUEYsQ0FPTTtBQVBOLE9BQVA7QUFTRDs7OzJCQUVhQyxRLEVBQVU7QUFDdEIsVUFBSUEsU0FBU0YsUUFBYixFQUF1QjtBQUNyQixZQUFJTixLQUFLUyxzQkFBTCxJQUErQixDQUFuQyxFQUFzQztB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LEcsRUFBOEI7QUFBQSxVQUF6QmhCLElBQXlCLHVFQUFsQixFQUFrQjtBQUFBLFVBQWRpQixPQUFjLHVFQUFKLEVBQUk7O0FBQzFDLGFBQU9oQyxLQUFLaUMsTUFBTCxDQUFZLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWNsQyxLQUFLbUMsa0JBQUwsRUFBZCxFQUF5QyxFQUFDSixLQUFLQSxHQUFOLEVBQXpDLEVBQXFELEVBQUNoQixNQUFNQSxJQUFQLEVBQXJELEVBQW1FLEVBQUNxQixRQUFRcEMsS0FBS3FDLE1BQUwsQ0FBWUcsSUFBckIsRUFBbkUsRUFBK0ZSLE9BQS9GLENBQVosQ0FBUDtBQUNEOzs7MEJBQ1lELEcsRUFBOEI7QUFBQSxVQUF6QmhCLElBQXlCLHVFQUFsQixFQUFrQjtBQUFBLFVBQWRpQixPQUFjLHVFQUFKLEVBQUk7O0FBQ3pDLGFBQU9oQyxLQUFLaUMsTUFBTCxDQUFZLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWNsQyxLQUFLbUMsa0JBQUwsRUFBZCxFQUF5QyxFQUFDSixLQUFLQSxHQUFOLEVBQXpDLEVBQXFELEVBQUNoQixNQUFNQSxJQUFQLEVBQXJELEVBQW1FLEVBQUNxQixRQUFRcEMsS0FBS3FDLE1BQUwsQ0FBWUksR0FBckIsRUFBbkUsRUFBOEZULE9BQTlGLENBQVosQ0FBUDtBQUNEOzs7Ozs7QUFsRmtCaEMsSSxDQUNacUMsTSxHQUFTO0FBQ2RDLFVBQVEsZUFBR0kscUJBREc7QUFFZEgsT0FBSyxlQUFHSSxrQkFGTTtBQUdkSCxRQUFNLGVBQUdJLG1CQUhLO0FBSWRILE9BQUssZUFBR0k7QUFKTSxDO0FBREc3QyxJLENBT1pTLHNCLEdBQXlCLEM7QUFQYlQsSSxDQVFaVyxrQixHQUFxQixDO0FBUlRYLEksQ0FVWkUsa0IsR0FBcUIsaUM7a0JBVlRGLEkiLCJmaWxlIjoidXRpbC9BamF4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBTSyBmcm9tICdzay1qcyc7XG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7XG5pbXBvcnQgTW9kZWwgZnJvbSAnLi9Nb2RlbCc7XG5pbXBvcnQgUmVzcCBmcm9tICcuL1Jlc3AnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBamF4IHtcbiAgc3RhdGljIE1FVEhPRCA9IHtcbiAgICBERUxFVEU6IFNLLlJFUVVFU1RfTUVUSE9EX0RFTEVURSxcbiAgICBHRVQ6IFNLLlJFUVVFU1RfTUVUSE9EX0dFVCxcbiAgICBQT1NUOiBTSy5SRVFVRVNUX01FVEhPRF9QT1NULFxuICAgIFBVVDogU0suUkVRVUVTVF9NRVRIT0RfUFVUXG4gIH07XG4gIHN0YXRpYyBDVVJSRU5UX1BST0dSRVNTX0NPVU5UID0gMDtcbiAgc3RhdGljIENVUlJFTlRfU1lOQ19DT1VOVCA9IDA7XG4gIFxuICBzdGF0aWMgQ09OVEVOVF9KU09OX1VURl84ID0gJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnO1xuXG4gIHN0YXRpYyBnZXREZWZhdWx0U2V0dGluZ3MoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRlbnRUeXBlOiBBamF4LkNPTlRFTlRfSlNPTl9VVEZfOCxcbiAgICAgIGRhdGFUeXBlOiBTSy5GSUxFX1RZUEVfSlNPTixcbiAgICAgIC8vIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgIC8vIHRyYWRpdGlvbmFsOiB0cnVlLFxuICAgICAgbmVlZFN0cmluZ2lmeTogdHJ1ZSxcbiAgICAgIHByb2dyZXNzOiB0cnVlLC8vc2sgZXh0ZW5kIGpxdWVyeVxuICAgICAgYXN5bmM6IHRydWUvL3NrIGV4dGVuZCBqcXVlcnlcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZG9BamF4KHNldHRpbmdzKSB7XG4gICAgaWYgKHNldHRpbmdzLnByb2dyZXNzKSB7XG4gICAgICBpZiAoQWpheC5DVVJSRU5UX1BST0dSRVNTX0NPVU5UID09IDApIHtcbiAgICAgICAgTlByb2dyZXNzLnN0YXJ0KCk7XG4gICAgICB9XG4gICAgICBBamF4LkNVUlJFTlRfUFJPR1JFU1NfQ09VTlQrKztcbiAgICB9XG4gICAgaWYgKCFzZXR0aW5ncy5hc3luYykge1xuICAgICAgaWYgKEFqYXguQ1VSUkVOVF9TWU5DX0NPVU5UID09IDApIHtcbiAgICAgICAgaWYgKFNLLiQoTW9kZWwuUFJPUF9TWVMpIGluc3RhbmNlb2YgTW9kZWwpIHtcbiAgICAgICAgICBTSy4kKE1vZGVsLlBST1BfU1lTKS5za1ZhbCgndWkuc3Bpbm5pbmcnLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQWpheC5DVVJSRU5UX1NZTkNfQ09VTlQrKztcbiAgICB9XG4gICAgc2V0dGluZ3MuZGF0YSA9IHNldHRpbmdzLmRhdGEgJiYgc2V0dGluZ3MubmVlZFN0cmluZ2lmeSA/IEpTT04uc3RyaW5naWZ5KHNldHRpbmdzLmRhdGEpIDogc2V0dGluZ3MuZGF0YTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuICQuYWpheChzZXR0aW5ncykuZG9uZSgoZGF0YSwgdGV4dFN0YXR1cywganFYSFIpID0+IHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gbmV3IFJlc3AoZGF0YSk7XG4gICAgICAgIHJlc3BvbnNlLnNob3dSZXN1bHQoKTtcbiAgICAgIH0pLmZhaWwoKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGpxWEhSKTtcbiAgICAgICAgY29uc29sZS5lcnJvcih0ZXh0U3RhdHVzKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvclRocm93bik7XG4gICAgICB9KS5hbHdheXMoKCkgPT4ge1xuICAgICAgICBpZiAoc2V0dGluZ3MucHJvZ3Jlc3MpIHtcbiAgICAgICAgICBBamF4LkNVUlJFTlRfUFJPR1JFU1NfQ09VTlQtLTtcbiAgICAgICAgICBpZiAoQWpheC5DVVJSRU5UX1BST0dSRVNTX0NPVU5UID09IDApIHtcbiAgICAgICAgICAgIE5Qcm9ncmVzcy5kb25lKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE5Qcm9ncmVzcy5pbmMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzZXR0aW5ncy5hc3luYykge1xuICAgICAgICAgIEFqYXguQ1VSUkVOVF9TWU5DX0NPVU5ULS07XG4gICAgICAgICAgaWYgKEFqYXguQ1VSUkVOVF9TWU5DX0NPVU5UID09IDApIHtcbiAgICAgICAgICAgIGlmIChTSy4kKE1vZGVsLlBST1BfU1lTKSBpbnN0YW5jZW9mIE1vZGVsKSB7XG4gICAgICAgICAgICAgIFNLLiQoTW9kZWwuUFJPUF9TWVMpLnNrVmFsKCd1aS5zcGlubmluZycsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgY29uc29sZS5lcnJvcihleGNlcHRpb24pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBkb0RlbGV0ZSh1cmwsIGRhdGEgPSB7fSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIEFqYXguZG9BamF4KFNLLmFzc2lnbih7fSwgQWpheC5nZXREZWZhdWx0U2V0dGluZ3MoKSwge3VybDogdXJsfSwge2RhdGE6IGRhdGF9LCB7bWV0aG9kOiBBamF4Lk1FVEhPRC5ERUxFVEV9LCBvcHRpb25zKSk7XG4gIH1cbiAgc3RhdGljIGRvR2V0KHVybCwgZGF0YSA9IHt9LCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gQWpheC5kb0FqYXgoU0suYXNzaWduKHt9LCBBamF4LmdldERlZmF1bHRTZXR0aW5ncygpLCB7dXJsOiB1cmx9LCB7ZGF0YTogZGF0YX0sIHttZXRob2Q6IEFqYXguTUVUSE9ELkdFVH0sIG9wdGlvbnMpKTtcbiAgfVxuICBzdGF0aWMgZG9Qb3N0KHVybCwgZGF0YSA9IHt9LCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gQWpheC5kb0FqYXgoU0suYXNzaWduKHt9LCBBamF4LmdldERlZmF1bHRTZXR0aW5ncygpLCB7dXJsOiB1cmx9LCB7ZGF0YTogZGF0YX0sIHttZXRob2Q6IEFqYXguTUVUSE9ELlBPU1R9LCBvcHRpb25zKSk7XG4gIH1cbiAgc3RhdGljIGRvUHV0KHVybCwgZGF0YSA9IHt9LCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gQWpheC5kb0FqYXgoU0suYXNzaWduKHt9LCBBamF4LmdldERlZmF1bHRTZXR0aW5ncygpLCB7dXJsOiB1cmx9LCB7ZGF0YTogZGF0YX0sIHttZXRob2Q6IEFqYXguTUVUSE9ELlBVVH0sIG9wdGlvbnMpKTtcbiAgfVxufVxuIl19