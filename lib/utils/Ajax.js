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
      } catch (e) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL0FqYXguanMiXSwibmFtZXMiOlsiQWpheCIsImNvbnRlbnRUeXBlIiwiZGF0YVR5cGUiLCJuZWVkU3RyaW5naWZ5IiwicHJvZ3Jlc3MiLCJhc3luYyIsInNldHRpbmdzIiwiQ1VSUkVOVF9QUk9HUkVTU19DT1VOVCIsInN0YXJ0IiwiQ1VSUkVOVF9TWU5DX0NPVU5UIiwiJCIsIlBST1BfU1lTIiwic2tWYWwiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImFqYXgiLCJkb25lIiwidGV4dFN0YXR1cyIsImpxWEhSIiwicmVzcG9uc2UiLCJzaG93UmVzdWx0IiwiZmFpbCIsImVycm9yVGhyb3duIiwiY29uc29sZSIsImVycm9yIiwiYWx3YXlzIiwiaW5jIiwiZSIsInVybCIsIm9wdGlvbnMiLCJkb0FqYXgiLCJhc3NpZ24iLCJnZXREZWZhdWx0U2V0dGluZ3MiLCJtZXRob2QiLCJNRVRIT0QiLCJERUxFVEUiLCJHRVQiLCJQT1NUIiwiUFVUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7O3lDQVVTO0FBQzFCLGFBQU87QUFDTEMscUJBQWEsaUNBRFI7QUFFTEMsa0JBQVUsTUFGTDtBQUdMO0FBQ0E7QUFDQUMsdUJBQWUsSUFMVjtBQU1MQyxrQkFBVSxJQU5MLEVBTVU7QUFDZkMsZUFBTyxJQVBGLENBT007QUFQTixPQUFQO0FBU0Q7OzsyQkFDYUMsUSxFQUFVO0FBQ3RCLFVBQUlBLFNBQVNGLFFBQWIsRUFBdUI7QUFDckIsWUFBSUosS0FBS08sc0JBQUwsSUFBK0IsQ0FBbkMsRUFBc0M7QUFDcEMsOEJBQVVDLEtBQVY7QUFDRDtBQUNEUixhQUFLTyxzQkFBTDtBQUNEO0FBQ0QsVUFBSSxDQUFDRCxTQUFTRCxLQUFkLEVBQXFCO0FBQ25CLFlBQUlMLEtBQUtTLGtCQUFMLElBQTJCLENBQS9CLEVBQWtDO0FBQ2hDLGNBQUksZUFBR0MsQ0FBSCxDQUFLLGdCQUFNQyxRQUFYLDRCQUFKLEVBQTJDO0FBQ3pDLDJCQUFHRCxDQUFILENBQUssZ0JBQU1DLFFBQVgsRUFBcUJDLEtBQXJCLENBQTJCLGFBQTNCLEVBQTBDLElBQTFDO0FBQ0Q7QUFDRjtBQUNEWixhQUFLUyxrQkFBTDtBQUNEO0FBQ0RILGVBQVNPLElBQVQsR0FBZ0JQLFNBQVNPLElBQVQsSUFBaUJQLFNBQVNILGFBQTFCLEdBQTBDVyxLQUFLQyxTQUFMLENBQWVULFNBQVNPLElBQXhCLENBQTFDLEdBQTBFUCxTQUFTTyxJQUFuRztBQUNBLFVBQUk7QUFDRixlQUFPLGlCQUFFRyxJQUFGLENBQU9WLFFBQVAsRUFBaUJXLElBQWpCLENBQXNCLFVBQUNKLElBQUQsRUFBT0ssVUFBUCxFQUFtQkMsS0FBbkIsRUFBNkI7QUFDeEQsY0FBSUMsV0FBVyxtQkFBU1AsSUFBVCxDQUFmO0FBQ0FPLG1CQUFTQyxVQUFUO0FBQ0QsU0FITSxFQUdKQyxJQUhJLENBR0MsVUFBQ0gsS0FBRCxFQUFRRCxVQUFSLEVBQW9CSyxXQUFwQixFQUFvQztBQUMxQ0Msa0JBQVFDLEtBQVIsQ0FBY04sS0FBZDtBQUNBSyxrQkFBUUMsS0FBUixDQUFjUCxVQUFkO0FBQ0FNLGtCQUFRQyxLQUFSLENBQWNGLFdBQWQ7QUFDRCxTQVBNLEVBT0pHLE1BUEksQ0FPRyxZQUFNO0FBQ2QsY0FBSXBCLFNBQVNGLFFBQWIsRUFBdUI7QUFDckJKLGlCQUFLTyxzQkFBTDtBQUNBLGdCQUFJUCxLQUFLTyxzQkFBTCxJQUErQixDQUFuQyxFQUFzQztBQUNwQyxrQ0FBVVUsSUFBVjtBQUNELGFBRkQsTUFFTztBQUNMLGtDQUFVVSxHQUFWO0FBQ0Q7QUFDRjtBQUNELGNBQUksQ0FBQ3JCLFNBQVNELEtBQWQsRUFBcUI7QUFDbkJMLGlCQUFLUyxrQkFBTDtBQUNBLGdCQUFJVCxLQUFLUyxrQkFBTCxJQUEyQixDQUEvQixFQUFrQztBQUNoQyxrQkFBSSxlQUFHQyxDQUFILENBQUssZ0JBQU1DLFFBQVgsNEJBQUosRUFBMkM7QUFDekMsK0JBQUdELENBQUgsQ0FBSyxnQkFBTUMsUUFBWCxFQUFxQkMsS0FBckIsQ0FBMkIsYUFBM0IsRUFBMEMsS0FBMUM7QUFDRDtBQUNGO0FBQ0Y7QUFDRixTQXhCTSxDQUFQO0FBeUJELE9BMUJELENBMEJFLE9BQU9nQixDQUFQLEVBQVUsQ0FFWDtBQUNGOzs7NkJBRWVDLEcsRUFBOEI7QUFBQSxVQUF6QmhCLElBQXlCLHVFQUFsQixFQUFrQjtBQUFBLFVBQWRpQixPQUFjLHVFQUFKLEVBQUk7O0FBQzVDLGFBQU85QixLQUFLK0IsTUFBTCxDQUFZLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWNoQyxLQUFLaUMsa0JBQUwsRUFBZCxFQUF5QyxFQUFDSixLQUFLQSxHQUFOLEVBQXpDLEVBQXFELEVBQUNoQixNQUFNQSxJQUFQLEVBQXJELEVBQW1FLEVBQUNxQixRQUFRbEMsS0FBS21DLE1BQUwsQ0FBWUMsTUFBckIsRUFBbkUsRUFBaUdOLE9BQWpHLENBQVosQ0FBUDtBQUNEOzs7MEJBQ1lELEcsRUFBOEI7QUFBQSxVQUF6QmhCLElBQXlCLHVFQUFsQixFQUFrQjtBQUFBLFVBQWRpQixPQUFjLHVFQUFKLEVBQUk7O0FBQ3pDLGFBQU85QixLQUFLK0IsTUFBTCxDQUFZLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWNoQyxLQUFLaUMsa0JBQUwsRUFBZCxFQUF5QyxFQUFDSixLQUFLQSxHQUFOLEVBQXpDLEVBQXFELEVBQUNoQixNQUFNQSxJQUFQLEVBQXJELEVBQW1FLEVBQUNxQixRQUFRbEMsS0FBS21DLE1BQUwsQ0FBWUUsR0FBckIsRUFBbkUsRUFBOEZQLE9BQTlGLENBQVosQ0FBUDtBQUNEOzs7MkJBQ2FELEcsRUFBOEI7QUFBQSxVQUF6QmhCLElBQXlCLHVFQUFsQixFQUFrQjtBQUFBLFVBQWRpQixPQUFjLHVFQUFKLEVBQUk7O0FBQzFDLGFBQU85QixLQUFLK0IsTUFBTCxDQUFZLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWNoQyxLQUFLaUMsa0JBQUwsRUFBZCxFQUF5QyxFQUFDSixLQUFLQSxHQUFOLEVBQXpDLEVBQXFELEVBQUNoQixNQUFNQSxJQUFQLEVBQXJELEVBQW1FLEVBQUNxQixRQUFRbEMsS0FBS21DLE1BQUwsQ0FBWUcsSUFBckIsRUFBbkUsRUFBK0ZSLE9BQS9GLENBQVosQ0FBUDtBQUNEOzs7MEJBQ1lELEcsRUFBOEI7QUFBQSxVQUF6QmhCLElBQXlCLHVFQUFsQixFQUFrQjtBQUFBLFVBQWRpQixPQUFjLHVFQUFKLEVBQUk7O0FBQ3pDLGFBQU85QixLQUFLK0IsTUFBTCxDQUFZLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWNoQyxLQUFLaUMsa0JBQUwsRUFBZCxFQUF5QyxFQUFDSixLQUFLQSxHQUFOLEVBQXpDLEVBQXFELEVBQUNoQixNQUFNQSxJQUFQLEVBQXJELEVBQW1FLEVBQUNxQixRQUFRbEMsS0FBS21DLE1BQUwsQ0FBWUksR0FBckIsRUFBbkUsRUFBOEZULE9BQTlGLENBQVosQ0FBUDtBQUNEOzs7Ozs7QUEvRWtCOUIsSSxDQUNabUMsTSxHQUFTO0FBQ2RDLFVBQVEsUUFETTtBQUVkQyxPQUFLLEtBRlM7QUFHZEMsUUFBTSxNQUhRO0FBSWRDLE9BQUs7QUFKUyxDO0FBREd2QyxJLENBT1pPLHNCLEdBQXlCLEM7QUFQYlAsSSxDQVFaUyxrQixHQUFxQixDO2tCQVJUVCxJIiwiZmlsZSI6InV0aWxzL0FqYXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IFNLIGZyb20gJ3NrLWpzJztcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcbmltcG9ydCBNb2RlbCBmcm9tICcuL01vZGVsJztcbmltcG9ydCBSZXNwIGZyb20gJy4vUmVzcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFqYXgge1xuICBzdGF0aWMgTUVUSE9EID0ge1xuICAgIERFTEVURTogJ0RFTEVURScsXG4gICAgR0VUOiAnR0VUJyxcbiAgICBQT1NUOiAnUE9TVCcsXG4gICAgUFVUOiAnUFVUJ1xuICB9O1xuICBzdGF0aWMgQ1VSUkVOVF9QUk9HUkVTU19DT1VOVCA9IDA7XG4gIHN0YXRpYyBDVVJSRU5UX1NZTkNfQ09VTlQgPSAwO1xuXG4gIHN0YXRpYyBnZXREZWZhdWx0U2V0dGluZ3MoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgLy8gcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgLy8gdHJhZGl0aW9uYWw6IHRydWUsXG4gICAgICBuZWVkU3RyaW5naWZ5OiB0cnVlLFxuICAgICAgcHJvZ3Jlc3M6IHRydWUsLy9zayBleHRlbmQganF1ZXJ5XG4gICAgICBhc3luYzogdHJ1ZS8vc2sgZXh0ZW5kIGpxdWVyeVxuICAgIH1cbiAgfVxuICBzdGF0aWMgZG9BamF4KHNldHRpbmdzKSB7XG4gICAgaWYgKHNldHRpbmdzLnByb2dyZXNzKSB7XG4gICAgICBpZiAoQWpheC5DVVJSRU5UX1BST0dSRVNTX0NPVU5UID09IDApIHtcbiAgICAgICAgTlByb2dyZXNzLnN0YXJ0KCk7XG4gICAgICB9XG4gICAgICBBamF4LkNVUlJFTlRfUFJPR1JFU1NfQ09VTlQrKztcbiAgICB9XG4gICAgaWYgKCFzZXR0aW5ncy5hc3luYykge1xuICAgICAgaWYgKEFqYXguQ1VSUkVOVF9TWU5DX0NPVU5UID09IDApIHtcbiAgICAgICAgaWYgKFNLLiQoTW9kZWwuUFJPUF9TWVMpIGluc3RhbmNlb2YgTW9kZWwpIHtcbiAgICAgICAgICBTSy4kKE1vZGVsLlBST1BfU1lTKS5za1ZhbCgndWkuc3Bpbm5pbmcnLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQWpheC5DVVJSRU5UX1NZTkNfQ09VTlQrKztcbiAgICB9XG4gICAgc2V0dGluZ3MuZGF0YSA9IHNldHRpbmdzLmRhdGEgJiYgc2V0dGluZ3MubmVlZFN0cmluZ2lmeSA/IEpTT04uc3RyaW5naWZ5KHNldHRpbmdzLmRhdGEpIDogc2V0dGluZ3MuZGF0YTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuICQuYWpheChzZXR0aW5ncykuZG9uZSgoZGF0YSwgdGV4dFN0YXR1cywganFYSFIpID0+IHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gbmV3IFJlc3AoZGF0YSk7XG4gICAgICAgIHJlc3BvbnNlLnNob3dSZXN1bHQoKTtcbiAgICAgIH0pLmZhaWwoKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGpxWEhSKTtcbiAgICAgICAgY29uc29sZS5lcnJvcih0ZXh0U3RhdHVzKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvclRocm93bik7XG4gICAgICB9KS5hbHdheXMoKCkgPT4ge1xuICAgICAgICBpZiAoc2V0dGluZ3MucHJvZ3Jlc3MpIHtcbiAgICAgICAgICBBamF4LkNVUlJFTlRfUFJPR1JFU1NfQ09VTlQtLTtcbiAgICAgICAgICBpZiAoQWpheC5DVVJSRU5UX1BST0dSRVNTX0NPVU5UID09IDApIHtcbiAgICAgICAgICAgIE5Qcm9ncmVzcy5kb25lKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE5Qcm9ncmVzcy5pbmMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzZXR0aW5ncy5hc3luYykge1xuICAgICAgICAgIEFqYXguQ1VSUkVOVF9TWU5DX0NPVU5ULS07XG4gICAgICAgICAgaWYgKEFqYXguQ1VSUkVOVF9TWU5DX0NPVU5UID09IDApIHtcbiAgICAgICAgICAgIGlmIChTSy4kKE1vZGVsLlBST1BfU1lTKSBpbnN0YW5jZW9mIE1vZGVsKSB7XG4gICAgICAgICAgICAgIFNLLiQoTW9kZWwuUFJPUF9TWVMpLnNrVmFsKCd1aS5zcGlubmluZycsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcblxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBkb0RlbGV0ZSh1cmwsIGRhdGEgPSB7fSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIEFqYXguZG9BamF4KFNLLmFzc2lnbih7fSwgQWpheC5nZXREZWZhdWx0U2V0dGluZ3MoKSwge3VybDogdXJsfSwge2RhdGE6IGRhdGF9LCB7bWV0aG9kOiBBamF4Lk1FVEhPRC5ERUxFVEV9LCBvcHRpb25zKSk7XG4gIH1cbiAgc3RhdGljIGRvR2V0KHVybCwgZGF0YSA9IHt9LCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gQWpheC5kb0FqYXgoU0suYXNzaWduKHt9LCBBamF4LmdldERlZmF1bHRTZXR0aW5ncygpLCB7dXJsOiB1cmx9LCB7ZGF0YTogZGF0YX0sIHttZXRob2Q6IEFqYXguTUVUSE9ELkdFVH0sIG9wdGlvbnMpKTtcbiAgfVxuICBzdGF0aWMgZG9Qb3N0KHVybCwgZGF0YSA9IHt9LCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gQWpheC5kb0FqYXgoU0suYXNzaWduKHt9LCBBamF4LmdldERlZmF1bHRTZXR0aW5ncygpLCB7dXJsOiB1cmx9LCB7ZGF0YTogZGF0YX0sIHttZXRob2Q6IEFqYXguTUVUSE9ELlBPU1R9LCBvcHRpb25zKSk7XG4gIH1cbiAgc3RhdGljIGRvUHV0KHVybCwgZGF0YSA9IHt9LCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gQWpheC5kb0FqYXgoU0suYXNzaWduKHt9LCBBamF4LmdldERlZmF1bHRTZXR0aW5ncygpLCB7dXJsOiB1cmx9LCB7ZGF0YTogZGF0YX0sIHttZXRob2Q6IEFqYXguTUVUSE9ELlBVVH0sIG9wdGlvbnMpKTtcbiAgfVxufVxuIl19