'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _skJs = require('sk-js');

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
        dataType: _skJs.SK.FILE_TYPE_JSON,
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
          if (_skJs.SK.$(_Model2.default.PROP_SYS) instanceof _Model2.default) {
            _skJs.SK.$(_Model2.default.PROP_SYS).skVal('ui.spinning', true);
          }
        }
        Ajax.CURRENT_SYNC_COUNT++;
      }
      settings.data = settings.data && settings.needStringify ? JSON.stringify(settings.data) : settings.data;
      try {
        return _jquery2.default.ajax(settings).done(function (data, textStatus, jqXHR) {
          var response = new _Resp2.default(data);
          response.feedback();
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
              if (_skJs.SK.$(_Model2.default.PROP_SYS) instanceof _Model2.default) {
                _skJs.SK.$(_Model2.default.PROP_SYS).skVal('ui.spinning', false);
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

      return Ajax.doAjax(_skJs.SK.assign({}, Ajax.getDefaultSettings(), { url: url }, { data: data }, { method: Ajax.METHOD.DELETE }, options));
    }
  }, {
    key: 'doGet',
    value: function doGet(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return Ajax.doAjax(_skJs.SK.assign({}, Ajax.getDefaultSettings(), { url: url }, { data: data }, { method: Ajax.METHOD.GET }, options));
    }
  }, {
    key: 'doPost',
    value: function doPost(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return Ajax.doAjax(_skJs.SK.assign({}, Ajax.getDefaultSettings(), { url: url }, { data: data }, { method: Ajax.METHOD.POST }, options));
    }
  }, {
    key: 'doPut',
    value: function doPut(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return Ajax.doAjax(_skJs.SK.assign({}, Ajax.getDefaultSettings(), { url: url }, { data: data }, { method: Ajax.METHOD.PUT }, options));
    }
  }]);

  return Ajax;
}();

Ajax.METHOD = {
  DELETE: _skJs.SK.REQUEST_METHOD_DELETE,
  GET: _skJs.SK.REQUEST_METHOD_GET,
  POST: _skJs.SK.REQUEST_METHOD_POST,
  PUT: _skJs.SK.REQUEST_METHOD_PUT
};
Ajax.CURRENT_PROGRESS_COUNT = 0;
Ajax.CURRENT_SYNC_COUNT = 0;
Ajax.CONTENT_JSON_UTF_8 = 'application/json; charset=UTF-8';
exports.default = Ajax;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvQWpheC5qcyJdLCJuYW1lcyI6WyJBamF4IiwiY29udGVudFR5cGUiLCJDT05URU5UX0pTT05fVVRGXzgiLCJkYXRhVHlwZSIsIkZJTEVfVFlQRV9KU09OIiwibmVlZFN0cmluZ2lmeSIsInByb2dyZXNzIiwiYXN5bmMiLCJzZXR0aW5ncyIsIkNVUlJFTlRfUFJPR1JFU1NfQ09VTlQiLCJzdGFydCIsIkNVUlJFTlRfU1lOQ19DT1VOVCIsIiQiLCJQUk9QX1NZUyIsInNrVmFsIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhamF4IiwiZG9uZSIsInRleHRTdGF0dXMiLCJqcVhIUiIsInJlc3BvbnNlIiwiZmVlZGJhY2siLCJmYWlsIiwiZXJyb3JUaHJvd24iLCJjb25zb2xlIiwiZXJyb3IiLCJhbHdheXMiLCJpbmMiLCJleGNlcHRpb24iLCJ1cmwiLCJvcHRpb25zIiwiZG9BamF4IiwiYXNzaWduIiwiZ2V0RGVmYXVsdFNldHRpbmdzIiwibWV0aG9kIiwiTUVUSE9EIiwiREVMRVRFIiwiR0VUIiwiUE9TVCIsIlBVVCIsIlJFUVVFU1RfTUVUSE9EX0RFTEVURSIsIlJFUVVFU1RfTUVUSE9EX0dFVCIsIlJFUVVFU1RfTUVUSE9EX1BPU1QiLCJSRVFVRVNUX01FVEhPRF9QVVQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7O3lDQVlTO0FBQzFCLGFBQU87QUFDTEMscUJBQWFELEtBQUtFLGtCQURiO0FBRUxDLGtCQUFVLFNBQUdDLGNBRlI7QUFHTDtBQUNBO0FBQ0FDLHVCQUFlLElBTFY7QUFNTEMsa0JBQVUsSUFOTCxFQU1VO0FBQ2ZDLGVBQU8sSUFQRixDQU9NO0FBUE4sT0FBUDtBQVNEOzs7MkJBRWFDLFEsRUFBVTtBQUN0QixVQUFJQSxTQUFTRixRQUFiLEVBQXVCO0FBQ3JCLFlBQUlOLEtBQUtTLHNCQUFMLElBQStCLENBQW5DLEVBQXNDO0FBQ3BD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QUE4QjtBQUFBLFVBQXpCaEIsSUFBeUIsdUVBQWxCLEVBQWtCO0FBQUEsVUFBZGlCLE9BQWMsdUVBQUosRUFBSTs7QUFDMUMsYUFBT2hDLEtBQUtpQyxNQUFMLENBQVksU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBY2xDLEtBQUttQyxrQkFBTCxFQUFkLEVBQXlDLEVBQUNKLEtBQUtBLEdBQU4sRUFBekMsRUFBcUQsRUFBQ2hCLE1BQU1BLElBQVAsRUFBckQsRUFBbUUsRUFBQ3FCLFFBQVFwQyxLQUFLcUMsTUFBTCxDQUFZRyxJQUFyQixFQUFuRSxFQUErRlIsT0FBL0YsQ0FBWixDQUFQO0FBQ0Q7OzswQkFFWUQsRyxFQUE4QjtBQUFBLFVBQXpCaEIsSUFBeUIsdUVBQWxCLEVBQWtCO0FBQUEsVUFBZGlCLE9BQWMsdUVBQUosRUFBSTs7QUFDekMsYUFBT2hDLEtBQUtpQyxNQUFMLENBQVksU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBY2xDLEtBQUttQyxrQkFBTCxFQUFkLEVBQXlDLEVBQUNKLEtBQUtBLEdBQU4sRUFBekMsRUFBcUQsRUFBQ2hCLE1BQU1BLElBQVAsRUFBckQsRUFBbUUsRUFBQ3FCLFFBQVFwQyxLQUFLcUMsTUFBTCxDQUFZSSxHQUFyQixFQUFuRSxFQUE4RlQsT0FBOUYsQ0FBWixDQUFQO0FBQ0Q7Ozs7OztBQXJGa0JoQyxJLENBQ1pxQyxNLEdBQVM7QUFDZEMsVUFBUSxTQUFHSSxxQkFERztBQUVkSCxPQUFLLFNBQUdJLGtCQUZNO0FBR2RILFFBQU0sU0FBR0ksbUJBSEs7QUFJZEgsT0FBSyxTQUFHSTtBQUpNLEM7QUFERzdDLEksQ0FPWlMsc0IsR0FBeUIsQztBQVBiVCxJLENBUVpXLGtCLEdBQXFCLEM7QUFSVFgsSSxDQVVaRSxrQixHQUFxQixpQztrQkFWVEYsSSIsImZpbGUiOiJ1dGlsL0FqYXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xuaW1wb3J0IE1vZGVsIGZyb20gJy4vTW9kZWwnO1xuaW1wb3J0IFJlc3AgZnJvbSAnLi9SZXNwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWpheCB7XG4gIHN0YXRpYyBNRVRIT0QgPSB7XG4gICAgREVMRVRFOiBTSy5SRVFVRVNUX01FVEhPRF9ERUxFVEUsXG4gICAgR0VUOiBTSy5SRVFVRVNUX01FVEhPRF9HRVQsXG4gICAgUE9TVDogU0suUkVRVUVTVF9NRVRIT0RfUE9TVCxcbiAgICBQVVQ6IFNLLlJFUVVFU1RfTUVUSE9EX1BVVFxuICB9O1xuICBzdGF0aWMgQ1VSUkVOVF9QUk9HUkVTU19DT1VOVCA9IDA7XG4gIHN0YXRpYyBDVVJSRU5UX1NZTkNfQ09VTlQgPSAwO1xuXG4gIHN0YXRpYyBDT05URU5UX0pTT05fVVRGXzggPSAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCc7XG5cbiAgc3RhdGljIGdldERlZmF1bHRTZXR0aW5ncygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29udGVudFR5cGU6IEFqYXguQ09OVEVOVF9KU09OX1VURl84LFxuICAgICAgZGF0YVR5cGU6IFNLLkZJTEVfVFlQRV9KU09OLFxuICAgICAgLy8gcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgLy8gdHJhZGl0aW9uYWw6IHRydWUsXG4gICAgICBuZWVkU3RyaW5naWZ5OiB0cnVlLFxuICAgICAgcHJvZ3Jlc3M6IHRydWUsLy9zayBleHRlbmQganF1ZXJ5XG4gICAgICBhc3luYzogdHJ1ZS8vc2sgZXh0ZW5kIGpxdWVyeVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBkb0FqYXgoc2V0dGluZ3MpIHtcbiAgICBpZiAoc2V0dGluZ3MucHJvZ3Jlc3MpIHtcbiAgICAgIGlmIChBamF4LkNVUlJFTlRfUFJPR1JFU1NfQ09VTlQgPT0gMCkge1xuICAgICAgICBOUHJvZ3Jlc3Muc3RhcnQoKTtcbiAgICAgIH1cbiAgICAgIEFqYXguQ1VSUkVOVF9QUk9HUkVTU19DT1VOVCsrO1xuICAgIH1cbiAgICBpZiAoIXNldHRpbmdzLmFzeW5jKSB7XG4gICAgICBpZiAoQWpheC5DVVJSRU5UX1NZTkNfQ09VTlQgPT0gMCkge1xuICAgICAgICBpZiAoU0suJChNb2RlbC5QUk9QX1NZUykgaW5zdGFuY2VvZiBNb2RlbCkge1xuICAgICAgICAgIFNLLiQoTW9kZWwuUFJPUF9TWVMpLnNrVmFsKCd1aS5zcGlubmluZycsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBBamF4LkNVUlJFTlRfU1lOQ19DT1VOVCsrO1xuICAgIH1cbiAgICBzZXR0aW5ncy5kYXRhID0gc2V0dGluZ3MuZGF0YSAmJiBzZXR0aW5ncy5uZWVkU3RyaW5naWZ5ID8gSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MuZGF0YSkgOiBzZXR0aW5ncy5kYXRhO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gJC5hamF4KHNldHRpbmdzKS5kb25lKChkYXRhLCB0ZXh0U3RhdHVzLCBqcVhIUikgPT4ge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBuZXcgUmVzcChkYXRhKTtcbiAgICAgICAgcmVzcG9uc2UuZmVlZGJhY2soKTtcbiAgICAgIH0pLmZhaWwoKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGpxWEhSKTtcbiAgICAgICAgY29uc29sZS5lcnJvcih0ZXh0U3RhdHVzKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvclRocm93bik7XG4gICAgICB9KS5hbHdheXMoKCkgPT4ge1xuICAgICAgICBpZiAoc2V0dGluZ3MucHJvZ3Jlc3MpIHtcbiAgICAgICAgICBBamF4LkNVUlJFTlRfUFJPR1JFU1NfQ09VTlQtLTtcbiAgICAgICAgICBpZiAoQWpheC5DVVJSRU5UX1BST0dSRVNTX0NPVU5UID09IDApIHtcbiAgICAgICAgICAgIE5Qcm9ncmVzcy5kb25lKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE5Qcm9ncmVzcy5pbmMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzZXR0aW5ncy5hc3luYykge1xuICAgICAgICAgIEFqYXguQ1VSUkVOVF9TWU5DX0NPVU5ULS07XG4gICAgICAgICAgaWYgKEFqYXguQ1VSUkVOVF9TWU5DX0NPVU5UID09IDApIHtcbiAgICAgICAgICAgIGlmIChTSy4kKE1vZGVsLlBST1BfU1lTKSBpbnN0YW5jZW9mIE1vZGVsKSB7XG4gICAgICAgICAgICAgIFNLLiQoTW9kZWwuUFJPUF9TWVMpLnNrVmFsKCd1aS5zcGlubmluZycsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgY29uc29sZS5lcnJvcihleGNlcHRpb24pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBkb0RlbGV0ZSh1cmwsIGRhdGEgPSB7fSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIEFqYXguZG9BamF4KFNLLmFzc2lnbih7fSwgQWpheC5nZXREZWZhdWx0U2V0dGluZ3MoKSwge3VybDogdXJsfSwge2RhdGE6IGRhdGF9LCB7bWV0aG9kOiBBamF4Lk1FVEhPRC5ERUxFVEV9LCBvcHRpb25zKSk7XG4gIH1cblxuICBzdGF0aWMgZG9HZXQodXJsLCBkYXRhID0ge30sIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiBBamF4LmRvQWpheChTSy5hc3NpZ24oe30sIEFqYXguZ2V0RGVmYXVsdFNldHRpbmdzKCksIHt1cmw6IHVybH0sIHtkYXRhOiBkYXRhfSwge21ldGhvZDogQWpheC5NRVRIT0QuR0VUfSwgb3B0aW9ucykpO1xuICB9XG5cbiAgc3RhdGljIGRvUG9zdCh1cmwsIGRhdGEgPSB7fSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIEFqYXguZG9BamF4KFNLLmFzc2lnbih7fSwgQWpheC5nZXREZWZhdWx0U2V0dGluZ3MoKSwge3VybDogdXJsfSwge2RhdGE6IGRhdGF9LCB7bWV0aG9kOiBBamF4Lk1FVEhPRC5QT1NUfSwgb3B0aW9ucykpO1xuICB9XG5cbiAgc3RhdGljIGRvUHV0KHVybCwgZGF0YSA9IHt9LCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gQWpheC5kb0FqYXgoU0suYXNzaWduKHt9LCBBamF4LmdldERlZmF1bHRTZXR0aW5ncygpLCB7dXJsOiB1cmx9LCB7ZGF0YTogZGF0YX0sIHttZXRob2Q6IEFqYXguTUVUSE9ELlBVVH0sIG9wdGlvbnMpKTtcbiAgfVxufVxuIl19