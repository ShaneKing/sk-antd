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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvQWpheC5qcyJdLCJuYW1lcyI6WyJBamF4IiwiY29udGVudFR5cGUiLCJDT05URU5UX0pTT05fVVRGXzgiLCJkYXRhVHlwZSIsIkZJTEVfVFlQRV9KU09OIiwibmVlZFN0cmluZ2lmeSIsInByb2dyZXNzIiwiYXN5bmMiLCJzZXR0aW5ncyIsIkNVUlJFTlRfUFJPR1JFU1NfQ09VTlQiLCJzdGFydCIsIkNVUlJFTlRfU1lOQ19DT1VOVCIsIiQiLCJQUk9QX1NZUyIsInNrVmFsIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhamF4IiwiZG9uZSIsInRleHRTdGF0dXMiLCJqcVhIUiIsInJlc3BvbnNlIiwic2hvd1Jlc3VsdCIsImZhaWwiLCJlcnJvclRocm93biIsImNvbnNvbGUiLCJlcnJvciIsImFsd2F5cyIsImluYyIsImV4Y2VwdGlvbiIsInVybCIsIm9wdGlvbnMiLCJkb0FqYXgiLCJhc3NpZ24iLCJnZXREZWZhdWx0U2V0dGluZ3MiLCJtZXRob2QiLCJNRVRIT0QiLCJERUxFVEUiLCJHRVQiLCJQT1NUIiwiUFVUIiwiUkVRVUVTVF9NRVRIT0RfREVMRVRFIiwiUkVRVUVTVF9NRVRIT0RfR0VUIiwiUkVRVUVTVF9NRVRIT0RfUE9TVCIsIlJFUVVFU1RfTUVUSE9EX1BVVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozt5Q0FZUztBQUMxQixhQUFPO0FBQ0xDLHFCQUFhRCxLQUFLRSxrQkFEYjtBQUVMQyxrQkFBVSxlQUFHQyxjQUZSO0FBR0w7QUFDQTtBQUNBQyx1QkFBZSxJQUxWO0FBTUxDLGtCQUFVLElBTkwsRUFNVTtBQUNmQyxlQUFPLElBUEYsQ0FPTTtBQVBOLE9BQVA7QUFTRDs7OzJCQUVhQyxRLEVBQVU7QUFDdEIsVUFBSUEsU0FBU0YsUUFBYixFQUF1QjtBQUNyQixZQUFJTixLQUFLUyxzQkFBTCxJQUErQixDQUFuQyxFQUFzQztB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LEcsRUFBOEI7QUFBQSxVQUF6QmhCLElBQXlCLHVFQUFsQixFQUFrQjtBQUFBLFVBQWRpQixPQUFjLHVFQUFKLEVBQUk7O0FBQzFDLGFBQU9oQyxLQUFLaUMsTUFBTCxDQUFZLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWNsQyxLQUFLbUMsa0JBQUwsRUFBZCxFQUF5QyxFQUFDSixLQUFLQSxHQUFOLEVBQXpDLEVBQXFELEVBQUNoQixNQUFNQSxJQUFQLEVBQXJELEVBQW1FLEVBQUNxQixRQUFRcEMsS0FBS3FDLE1BQUwsQ0FBWUcsSUFBckIsRUFBbkUsRUFBK0ZSLE9BQS9GLENBQVosQ0FBUDtBQUNEOzs7MEJBRVlELEcsRUFBOEI7QUFBQSxVQUF6QmhCLElBQXlCLHVFQUFsQixFQUFrQjtBQUFBLFVBQWRpQixPQUFjLHVFQUFKLEVBQUk7O0FBQ3pDLGFBQU9oQyxLQUFLaUMsTUFBTCxDQUFZLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWNsQyxLQUFLbUMsa0JBQUwsRUFBZCxFQUF5QyxFQUFDSixLQUFLQSxHQUFOLEVBQXpDLEVBQXFELEVBQUNoQixNQUFNQSxJQUFQLEVBQXJELEVBQW1FLEVBQUNxQixRQUFRcEMsS0FBS3FDLE1BQUwsQ0FBWUksR0FBckIsRUFBbkUsRUFBOEZULE9BQTlGLENBQVosQ0FBUDtBQUNEOzs7Ozs7QUFyRmtCaEMsSSxDQUNacUMsTSxHQUFTO0FBQ2RDLFVBQVEsZUFBR0kscUJBREc7QUFFZEgsT0FBSyxlQUFHSSxrQkFGTTtBQUdkSCxRQUFNLGVBQUdJLG1CQUhLO0FBSWRILE9BQUssZUFBR0k7QUFKTSxDO0FBREc3QyxJLENBT1pTLHNCLEdBQXlCLEM7QUFQYlQsSSxDQVFaVyxrQixHQUFxQixDO0FBUlRYLEksQ0FVWkUsa0IsR0FBcUIsaUM7a0JBVlRGLEkiLCJmaWxlIjoidXRpbC9BamF4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBTSyBmcm9tICdzay1qcyc7XG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7XG5pbXBvcnQgTW9kZWwgZnJvbSAnLi9Nb2RlbCc7XG5pbXBvcnQgUmVzcCBmcm9tICcuL1Jlc3AnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBamF4IHtcbiAgc3RhdGljIE1FVEhPRCA9IHtcbiAgICBERUxFVEU6IFNLLlJFUVVFU1RfTUVUSE9EX0RFTEVURSxcbiAgICBHRVQ6IFNLLlJFUVVFU1RfTUVUSE9EX0dFVCxcbiAgICBQT1NUOiBTSy5SRVFVRVNUX01FVEhPRF9QT1NULFxuICAgIFBVVDogU0suUkVRVUVTVF9NRVRIT0RfUFVUXG4gIH07XG4gIHN0YXRpYyBDVVJSRU5UX1BST0dSRVNTX0NPVU5UID0gMDtcbiAgc3RhdGljIENVUlJFTlRfU1lOQ19DT1VOVCA9IDA7XG5cbiAgc3RhdGljIENPTlRFTlRfSlNPTl9VVEZfOCA9ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JztcblxuICBzdGF0aWMgZ2V0RGVmYXVsdFNldHRpbmdzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb250ZW50VHlwZTogQWpheC5DT05URU5UX0pTT05fVVRGXzgsXG4gICAgICBkYXRhVHlwZTogU0suRklMRV9UWVBFX0pTT04sXG4gICAgICAvLyBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgICAvLyB0cmFkaXRpb25hbDogdHJ1ZSxcbiAgICAgIG5lZWRTdHJpbmdpZnk6IHRydWUsXG4gICAgICBwcm9ncmVzczogdHJ1ZSwvL3NrIGV4dGVuZCBqcXVlcnlcbiAgICAgIGFzeW5jOiB0cnVlLy9zayBleHRlbmQganF1ZXJ5XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGRvQWpheChzZXR0aW5ncykge1xuICAgIGlmIChzZXR0aW5ncy5wcm9ncmVzcykge1xuICAgICAgaWYgKEFqYXguQ1VSUkVOVF9QUk9HUkVTU19DT1VOVCA9PSAwKSB7XG4gICAgICAgIE5Qcm9ncmVzcy5zdGFydCgpO1xuICAgICAgfVxuICAgICAgQWpheC5DVVJSRU5UX1BST0dSRVNTX0NPVU5UKys7XG4gICAgfVxuICAgIGlmICghc2V0dGluZ3MuYXN5bmMpIHtcbiAgICAgIGlmIChBamF4LkNVUlJFTlRfU1lOQ19DT1VOVCA9PSAwKSB7XG4gICAgICAgIGlmIChTSy4kKE1vZGVsLlBST1BfU1lTKSBpbnN0YW5jZW9mIE1vZGVsKSB7XG4gICAgICAgICAgU0suJChNb2RlbC5QUk9QX1NZUykuc2tWYWwoJ3VpLnNwaW5uaW5nJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEFqYXguQ1VSUkVOVF9TWU5DX0NPVU5UKys7XG4gICAgfVxuICAgIHNldHRpbmdzLmRhdGEgPSBzZXR0aW5ncy5kYXRhICYmIHNldHRpbmdzLm5lZWRTdHJpbmdpZnkgPyBKU09OLnN0cmluZ2lmeShzZXR0aW5ncy5kYXRhKSA6IHNldHRpbmdzLmRhdGE7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAkLmFqYXgoc2V0dGluZ3MpLmRvbmUoKGRhdGEsIHRleHRTdGF0dXMsIGpxWEhSKSA9PiB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IG5ldyBSZXNwKGRhdGEpO1xuICAgICAgICByZXNwb25zZS5zaG93UmVzdWx0KCk7XG4gICAgICB9KS5mYWlsKChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihqcVhIUik7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IodGV4dFN0YXR1cyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JUaHJvd24pO1xuICAgICAgfSkuYWx3YXlzKCgpID0+IHtcbiAgICAgICAgaWYgKHNldHRpbmdzLnByb2dyZXNzKSB7XG4gICAgICAgICAgQWpheC5DVVJSRU5UX1BST0dSRVNTX0NPVU5ULS07XG4gICAgICAgICAgaWYgKEFqYXguQ1VSUkVOVF9QUk9HUkVTU19DT1VOVCA9PSAwKSB7XG4gICAgICAgICAgICBOUHJvZ3Jlc3MuZG9uZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBOUHJvZ3Jlc3MuaW5jKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghc2V0dGluZ3MuYXN5bmMpIHtcbiAgICAgICAgICBBamF4LkNVUlJFTlRfU1lOQ19DT1VOVC0tO1xuICAgICAgICAgIGlmIChBamF4LkNVUlJFTlRfU1lOQ19DT1VOVCA9PSAwKSB7XG4gICAgICAgICAgICBpZiAoU0suJChNb2RlbC5QUk9QX1NZUykgaW5zdGFuY2VvZiBNb2RlbCkge1xuICAgICAgICAgICAgICBTSy4kKE1vZGVsLlBST1BfU1lTKS5za1ZhbCgndWkuc3Bpbm5pbmcnLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXhjZXB0aW9uKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZG9EZWxldGUodXJsLCBkYXRhID0ge30sIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiBBamF4LmRvQWpheChTSy5hc3NpZ24oe30sIEFqYXguZ2V0RGVmYXVsdFNldHRpbmdzKCksIHt1cmw6IHVybH0sIHtkYXRhOiBkYXRhfSwge21ldGhvZDogQWpheC5NRVRIT0QuREVMRVRFfSwgb3B0aW9ucykpO1xuICB9XG5cbiAgc3RhdGljIGRvR2V0KHVybCwgZGF0YSA9IHt9LCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gQWpheC5kb0FqYXgoU0suYXNzaWduKHt9LCBBamF4LmdldERlZmF1bHRTZXR0aW5ncygpLCB7dXJsOiB1cmx9LCB7ZGF0YTogZGF0YX0sIHttZXRob2Q6IEFqYXguTUVUSE9ELkdFVH0sIG9wdGlvbnMpKTtcbiAgfVxuXG4gIHN0YXRpYyBkb1Bvc3QodXJsLCBkYXRhID0ge30sIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiBBamF4LmRvQWpheChTSy5hc3NpZ24oe30sIEFqYXguZ2V0RGVmYXVsdFNldHRpbmdzKCksIHt1cmw6IHVybH0sIHtkYXRhOiBkYXRhfSwge21ldGhvZDogQWpheC5NRVRIT0QuUE9TVH0sIG9wdGlvbnMpKTtcbiAgfVxuXG4gIHN0YXRpYyBkb1B1dCh1cmwsIGRhdGEgPSB7fSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIEFqYXguZG9BamF4KFNLLmFzc2lnbih7fSwgQWpheC5nZXREZWZhdWx0U2V0dGluZ3MoKSwge3VybDogdXJsfSwge2RhdGE6IGRhdGF9LCB7bWV0aG9kOiBBamF4Lk1FVEhPRC5QVVR9LCBvcHRpb25zKSk7XG4gIH1cbn1cbiJdfQ==