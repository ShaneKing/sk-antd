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
        contentType: 'application/json; charset=UTF-8',
        dataType: 'json',
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
      } catch (e) {
        console.error(e);
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
  DELETE: 'DELETE',
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT'
};
Ajax.CURRENT_PROGRESS_COUNT = 0;
Ajax.CURRENT_SYNC_COUNT = 0;
exports.default = Ajax;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL0FqYXguanMiXSwibmFtZXMiOlsiQWpheCIsImNvbnRlbnRUeXBlIiwiZGF0YVR5cGUiLCJuZWVkU3RyaW5naWZ5IiwicHJvZ3Jlc3MiLCJhc3luYyIsInNldHRpbmdzIiwiQ1VSUkVOVF9QUk9HUkVTU19DT1VOVCIsInN0YXJ0IiwiQ1VSUkVOVF9TWU5DX0NPVU5UIiwiJCIsIlBST1BfU1lTIiwic2tWYWwiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImFqYXgiLCJkb25lIiwidGV4dFN0YXR1cyIsImpxWEhSIiwicmVzcG9uc2UiLCJzaG93UmVzdWx0IiwiZmFpbCIsImVycm9yVGhyb3duIiwiY29uc29sZSIsImVycm9yIiwiYWx3YXlzIiwiaW5jIiwiZSIsInVybCIsIm9wdGlvbnMiLCJkb0FqYXgiLCJhc3NpZ24iLCJnZXREZWZhdWx0U2V0dGluZ3MiLCJtZXRob2QiLCJNRVRIT0QiLCJERUxFVEUiLCJHRVQiLCJQT1NUIiwiUFVUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7O3lDQVVTO0FBQzFCLGFBQU87QUFDTEMscUJBQWEsaUNBRFI7QUFFTEMsa0JBQVUsTUFGTDtBQUdMO0FBQ0E7QUFDQUMsdUJBQWUsSUFMVjtBQU1MQyxrQkFBVSxJQU5MLEVBTVU7QUFDZkMsZUFBTyxJQVBGLENBT007QUFQTixPQUFQO0FBU0Q7OzsyQkFFYUMsUSxFQUFVO0FBQ3RCLFVBQUlBLFNBQVNGLFFBQWIsRUFBdUI7QUFDckIsWUFBSUosS0FBS08sc0JBQUwsSUFBK0IsQ0FBbkMsRUFBc0M7QUFDcEMsOEJBQVVDLEtBQVY7QUFDRDtBQUNEUixhQUFLTyxzQkFBTDtBQUNEO0FBQ0QsVUFBSSxDQUFDRCxTQUFTRCxLQUFkLEVBQXFCO0FBQ25CLFlBQUlMLEtBQUtTLGtCQUFMLElBQTJCLENBQS9CLEVBQWtDO0FBQ2hDLGNBQUksZUFBR0MsQ0FBSCxDQUFL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QXlDLEVBQUNKLEtBQUtBLEdBQU4sRUFBekMsRUFBcUQsRUFBQ2hCLE1BQU1BLElBQVAsRUFBckQsRUFBbUUsRUFBQ3FCLFFBQVFsQyxLQUFLbUMsTUFBTCxDQUFZRyxJQUFyQixFQUFuRSxFQUErRlIsT0FBL0YsQ0FBWixDQUFQO0FBQ0Q7OzswQkFDWUQsRyxFQUE4QjtBQUFBLFVBQXpCaEIsSUFBeUIsdUVBQWxCLEVBQWtCO0FBQUEsVUFBZGlCLE9BQWMsdUVBQUosRUFBSTs7QUFDekMsYUFBTzlCLEtBQUsrQixNQUFMLENBQVksZUFBR0MsTUFBSCxDQUFVLEVBQVYsRUFBY2hDLEtBQUtpQyxrQkFBTCxFQUFkLEVBQXlDLEVBQUNKLEtBQUtBLEdBQU4sRUFBekMsRUFBcUQsRUFBQ2hCLE1BQU1BLElBQVAsRUFBckQsRUFBbUUsRUFBQ3FCLFFBQVFsQyxLQUFLbUMsTUFBTCxDQUFZSSxHQUFyQixFQUFuRSxFQUE4RlQsT0FBOUYsQ0FBWixDQUFQO0FBQ0Q7Ozs7OztBQWhGa0I5QixJLENBQ1ptQyxNLEdBQVM7QUFDZEMsVUFBUSxRQURNO0FBRWRDLE9BQUssS0FGUztBQUdkQyxRQUFNLE1BSFE7QUFJZEMsT0FBSztBQUpTLEM7QUFER3ZDLEksQ0FPWk8sc0IsR0FBeUIsQztBQVBiUCxJLENBUVpTLGtCLEdBQXFCLEM7a0JBUlRULEkiLCJmaWxlIjoidXRpbHMvQWpheC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgU0sgZnJvbSAnc2stanMnO1xuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xuaW1wb3J0IE1vZGVsIGZyb20gJy4vTW9kZWwnO1xuaW1wb3J0IFJlc3AgZnJvbSAnLi9SZXNwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWpheCB7XG4gIHN0YXRpYyBNRVRIT0QgPSB7XG4gICAgREVMRVRFOiAnREVMRVRFJyxcbiAgICBHRVQ6ICdHRVQnLFxuICAgIFBPU1Q6ICdQT1NUJyxcbiAgICBQVVQ6ICdQVVQnXG4gIH07XG4gIHN0YXRpYyBDVVJSRU5UX1BST0dSRVNTX0NPVU5UID0gMDtcbiAgc3RhdGljIENVUlJFTlRfU1lOQ19DT1VOVCA9IDA7XG5cbiAgc3RhdGljIGdldERlZmF1bHRTZXR0aW5ncygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAvLyBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgICAvLyB0cmFkaXRpb25hbDogdHJ1ZSxcbiAgICAgIG5lZWRTdHJpbmdpZnk6IHRydWUsXG4gICAgICBwcm9ncmVzczogdHJ1ZSwvL3NrIGV4dGVuZCBqcXVlcnlcbiAgICAgIGFzeW5jOiB0cnVlLy9zayBleHRlbmQganF1ZXJ5XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGRvQWpheChzZXR0aW5ncykge1xuICAgIGlmIChzZXR0aW5ncy5wcm9ncmVzcykge1xuICAgICAgaWYgKEFqYXguQ1VSUkVOVF9QUk9HUkVTU19DT1VOVCA9PSAwKSB7XG4gICAgICAgIE5Qcm9ncmVzcy5zdGFydCgpO1xuICAgICAgfVxuICAgICAgQWpheC5DVVJSRU5UX1BST0dSRVNTX0NPVU5UKys7XG4gICAgfVxuICAgIGlmICghc2V0dGluZ3MuYXN5bmMpIHtcbiAgICAgIGlmIChBamF4LkNVUlJFTlRfU1lOQ19DT1VOVCA9PSAwKSB7XG4gICAgICAgIGlmIChTSy4kKE1vZGVsLlBST1BfU1lTKSBpbnN0YW5jZW9mIE1vZGVsKSB7XG4gICAgICAgICAgU0suJChNb2RlbC5QUk9QX1NZUykuc2tWYWwoJ3VpLnNwaW5uaW5nJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEFqYXguQ1VSUkVOVF9TWU5DX0NPVU5UKys7XG4gICAgfVxuICAgIHNldHRpbmdzLmRhdGEgPSBzZXR0aW5ncy5kYXRhICYmIHNldHRpbmdzLm5lZWRTdHJpbmdpZnkgPyBKU09OLnN0cmluZ2lmeShzZXR0aW5ncy5kYXRhKSA6IHNldHRpbmdzLmRhdGE7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAkLmFqYXgoc2V0dGluZ3MpLmRvbmUoKGRhdGEsIHRleHRTdGF0dXMsIGpxWEhSKSA9PiB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IG5ldyBSZXNwKGRhdGEpO1xuICAgICAgICByZXNwb25zZS5zaG93UmVzdWx0KCk7XG4gICAgICB9KS5mYWlsKChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihqcVhIUik7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IodGV4dFN0YXR1cyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JUaHJvd24pO1xuICAgICAgfSkuYWx3YXlzKCgpID0+IHtcbiAgICAgICAgaWYgKHNldHRpbmdzLnByb2dyZXNzKSB7XG4gICAgICAgICAgQWpheC5DVVJSRU5UX1BST0dSRVNTX0NPVU5ULS07XG4gICAgICAgICAgaWYgKEFqYXguQ1VSUkVOVF9QUk9HUkVTU19DT1VOVCA9PSAwKSB7XG4gICAgICAgICAgICBOUHJvZ3Jlc3MuZG9uZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBOUHJvZ3Jlc3MuaW5jKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghc2V0dGluZ3MuYXN5bmMpIHtcbiAgICAgICAgICBBamF4LkNVUlJFTlRfU1lOQ19DT1VOVC0tO1xuICAgICAgICAgIGlmIChBamF4LkNVUlJFTlRfU1lOQ19DT1VOVCA9PSAwKSB7XG4gICAgICAgICAgICBpZiAoU0suJChNb2RlbC5QUk9QX1NZUykgaW5zdGFuY2VvZiBNb2RlbCkge1xuICAgICAgICAgICAgICBTSy4kKE1vZGVsLlBST1BfU1lTKS5za1ZhbCgndWkuc3Bpbm5pbmcnLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBkb0RlbGV0ZSh1cmwsIGRhdGEgPSB7fSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIEFqYXguZG9BamF4KFNLLmFzc2lnbih7fSwgQWpheC5nZXREZWZhdWx0U2V0dGluZ3MoKSwge3VybDogdXJsfSwge2RhdGE6IGRhdGF9LCB7bWV0aG9kOiBBamF4Lk1FVEhPRC5ERUxFVEV9LCBvcHRpb25zKSk7XG4gIH1cbiAgc3RhdGljIGRvR2V0KHVybCwgZGF0YSA9IHt9LCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gQWpheC5kb0FqYXgoU0suYXNzaWduKHt9LCBBamF4LmdldERlZmF1bHRTZXR0aW5ncygpLCB7dXJsOiB1cmx9LCB7ZGF0YTogZGF0YX0sIHttZXRob2Q6IEFqYXguTUVUSE9ELkdFVH0sIG9wdGlvbnMpKTtcbiAgfVxuICBzdGF0aWMgZG9Qb3N0KHVybCwgZGF0YSA9IHt9LCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gQWpheC5kb0FqYXgoU0suYXNzaWduKHt9LCBBamF4LmdldERlZmF1bHRTZXR0aW5ncygpLCB7dXJsOiB1cmx9LCB7ZGF0YTogZGF0YX0sIHttZXRob2Q6IEFqYXguTUVUSE9ELlBPU1R9LCBvcHRpb25zKSk7XG4gIH1cbiAgc3RhdGljIGRvUHV0KHVybCwgZGF0YSA9IHt9LCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gQWpheC5kb0FqYXgoU0suYXNzaWduKHt9LCBBamF4LmdldERlZmF1bHRTZXR0aW5ncygpLCB7dXJsOiB1cmx9LCB7ZGF0YTogZGF0YX0sIHttZXRob2Q6IEFqYXguTUVUSE9ELlBVVH0sIG9wdGlvbnMpKTtcbiAgfVxufVxuIl19