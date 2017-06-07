'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RespMsg = undefined;

var _style4 = require('antd/lib/message/style');

var _message = require('antd/lib/message');

var _message2 = _interopRequireDefault(_message);

var _style5 = require('antd/lib/modal/style');

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _style6 = require('antd/lib/notification/style');

var _notification = require('antd/lib/notification');

var _notification2 = _interopRequireDefault(_notification);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _skL10n = require('sk-l10n');

var _ReactUtil = require('./ReactUtil');

var _ReactUtil2 = _interopRequireDefault(_ReactUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RespMsg = exports.RespMsg = function () {
  function RespMsg(msg) {
    _classCallCheck(this, RespMsg);

    this.type = msg.type; //Message Type
    this.code = msg.code; //Message Code or Message Content
    this.args = msg.args; //Message Arguments, Array or Object, format by skFmtArr or skFmt
  }

  _createClass(RespMsg, [{
    key: 'getType',
    value: function getType() {
      return this.type;
    }
  }, {
    key: 'getMessage',
    value: function getMessage() {
      var key = 'Resp.' + this.code;
      var i18nMsg = _skL10n.I18N.get(key);
      var rtn = this.code;
      if (Array.isArray(this.args)) {
        rtn = i18nMsg.skFmtArr(this.args.map(function (arg) {
          var tmpRtn = null;
          if (_lodash2.default.isPlainObject(arg) && arg.code && arg.id) {
            tmpRtn = _skL10n.Codes.get(arg.code).find(function (item) {
              return item.id = arg.id;
            });
            tmpRtn = tmpRtn ? tmpRtn.text : arg;
          } else {
            tmpRtn = arg;
          }
          return tmpRtn;
        }));
      } else if (_lodash2.default.isPlainObject(this.args) && !_lodash2.default.isEmpty(this.args)) {
        rtn = i18nMsg.skFmt(this.args);
      } else if (i18nMsg != key) {
        rtn = i18nMsg;
      }
      return rtn;
    }
  }]);

  return RespMsg;
}();

RespMsg.TYPE = {
  SUCCESS: 'Success', //Just prompt
  INFO: 'Info', //Just prompt
  WARNING: 'Warning', //Business continue, but must prompt
  ERROR: 'Error' //Unknown Exception(done == false), UI will prompt details; Business Stop(done == true), process by component
};

var Resp = function () {
  function Resp(respJsonData) {
    _classCallCheck(this, Resp);

    this.data = respJsonData.data; //Business Data
    this.done = respJsonData.done; //true: No Unknown Exception,false: has Unknown Exception
    if (_lodash2.default.isPlainObject(respJsonData.rslt) && !_lodash2.default.isEmpty(respJsonData.rslt)) {
      //Result Message Object, Required if done is false
      this.rslt = new RespMsg(respJsonData.rslt);
    }
    if (Array.isArray(respJsonData.ntfs) && !_lodash2.default.isEmpty(respJsonData.ntfs)) {
      //Notifications Array
      this.ntfs = respJsonData.ntfs.map(function (ntf) {
        return new RespMsg(ntf);
      });
    }
  }

  _createClass(Resp, [{
    key: 'showNotifications',
    value: function showNotifications() {
      if (this.ntfs) {
        this.ntfs.forEach(function ($respMsg) {
          if ($respMsg instanceof RespMsg) {
            if ($respMsg.getType() && $respMsg.getMessage()) {
              _notification2.default[_lodash2.default.lowerCase($respMsg.getType())]({ message: $respMsg.getType(), description: $respMsg.getMessage() });
            }
          }
        });
      }
    }
  }, {
    key: 'showResult',
    value: function showResult() {
      if (this.rslt && this.rslt.getType() && this.rslt.getMessage()) {
        if (!this.done && this.rslt.getType() == RespMsg.TYPE.ERROR) {
          _modal2.default.error({
            title: this.rslt.getType(), content: this.rslt.getMessage(), okText: _skL10n.I18N.get('Return'), onOk: function onOk() {
              _ReactUtil2.default.forward('/');
            }
          });
        } else {
          _message2.default[_lodash2.default.lowerCase(this.rslt.getType())](this.rslt.getMessage());
        }
      }
    }
  }]);

  return Resp;
}();

exports.default = Resp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL1Jlc3AuanMiXSwibmFtZXMiOlsiUmVzcE1zZyIsIm1zZyIsInR5cGUiLCJjb2RlIiwiYXJncyIsImtleSIsImkxOG5Nc2ciLCJnZXQiLCJydG4iLCJBcnJheSIsImlzQXJyYXkiLCJza0ZtdEFyciIsIm1hcCIsInRtcFJ0biIsImlzUGxhaW5PYmplY3QiLCJhcmciLCJpZCIsImZpbmQiLCJpdGVtIiwidGV4dCIsImlzRW1wdHkiLCJza0ZtdCIsIlRZUEUiLCJTVUNDRVNTIiwiSU5GTyIsIldBUk5JTkciLCJFUlJPUiIsIlJlc3AiLCJyZXNwSnNvbkRhdGEiLCJkYXRhIiwiZG9uZSIsInJzbHQiLCJudGZzIiwibnRmIiwiZm9yRWFjaCIsIiRyZXNwTXNnIiwiZ2V0VHlwZSIsImdldE1lc3NhZ2UiLCJsb3dlckNhc2UiLCJtZXNzYWdlIiwiZGVzY3JpcHRpb24iLCJlcnJvciIsInRpdGxlIiwiY29udGVudCIsIm9rVGV4dCIsIm9uT2siLCJmb3J3YXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7OztJQUVhQSxPLFdBQUFBLE87QUFRWCxtQkFBWUMsR0FBWixFQUFpQjtBQUFBOztBQUNmLFNBQUtDLElBQUwsR0FBWUQsSUFBSUMsSUFBaEIsQ0FEZSxDQUNNO0FBQ3JCLFNBQUtDLElBQUwsR0FBWUYsSUFBSUUsSUFBaEIsQ0FGZSxDQUVNO0FBQ3JCLFNBQUtDLElBQUwsR0FBWUgsSUFBSUcsSUFBaEIsQ0FIZSxDQUdNO0FBQ3RCOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLRixJQUFaO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQUlHLE1BQU0sVUFBVSxLQUFLRixJQUF6QjtBQUNBLFVBQUlHLFVBQVUsYUFBS0MsR0FBTCxDQUFTRixHQUFULENBQWQ7QUFDQSxVQUFJRyxNQUFNLEtBQUtMLElBQWY7QUFDQSxVQUFJTSxNQUFNQyxPQUFOLENBQWMsS0FBS04sSUFBbkIsQ0FBSixFQUE4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QUMzRCwwQkFBTWUsS0FBTixDQUFZO0FBQ1ZDLG1CQUFPLEtBQUtYLElBQUwsQ0FBVUssT0FBVixFQURHLEVBQ2tCTyxTQUFTLEtBQUtaLElBQUwsQ0FBVU0sVUFBVixFQUQzQixFQUNtRE8sUUFBUSxhQUFLckMsR0FBTCxDQUFTLFFBQVQsQ0FEM0QsRUFDK0VzQyxJQUQvRSxrQkFDc0Y7QUFDOUYsa0NBQVVDLE9BQVYsQ0FBa0IsR0FBbEI7QUFDRDtBQUhTLFdBQVo7QUFLRCxTQU5ELE1BTU87QUFDTCw0QkFBUSxpQkFBRVIsU0FBRixDQUFZLEtBQUtQLElBQUwsQ0FBVUssT0FBVixFQUFaLENBQVIsRUFBMEMsS0FBS0wsSUFBTCxDQUFVTSxVQUFWLEVBQTFDO0FBQ0Q7QUFDRjtBQUNGOzs7Ozs7a0JBdENrQlYsSSIsImZpbGUiOiJ1dGlscy9SZXNwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHttZXNzYWdlLCBNb2RhbCwgbm90aWZpY2F0aW9ufSBmcm9tICdhbnRkJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge0NvZGVzLCBJMThOfSBmcm9tICdzay1sMTBuJztcbmltcG9ydCBSZWFjdFV0aWwgZnJvbSAnLi9SZWFjdFV0aWwnO1xuXG5leHBvcnQgY2xhc3MgUmVzcE1zZyB7XG4gIHN0YXRpYyBUWVBFID0ge1xuICAgIFNVQ0NFU1M6ICdTdWNjZXNzJywvL0p1c3QgcHJvbXB0XG4gICAgSU5GTzogJ0luZm8nLC8vSnVzdCBwcm9tcHRcbiAgICBXQVJOSU5HOiAnV2FybmluZycsLy9CdXNpbmVzcyBjb250aW51ZSwgYnV0IG11c3QgcHJvbXB0XG4gICAgRVJST1I6ICdFcnJvcicvL1Vua25vd24gRXhjZXB0aW9uKGRvbmUgPT0gZmFsc2UpLCBVSSB3aWxsIHByb21wdCBkZXRhaWxzOyBCdXNpbmVzcyBTdG9wKGRvbmUgPT0gdHJ1ZSksIHByb2Nlc3MgYnkgY29tcG9uZW50XG4gIH07XG5cbiAgY29uc3RydWN0b3IobXNnKSB7XG4gICAgdGhpcy50eXBlID0gbXNnLnR5cGU7Ly9NZXNzYWdlIFR5cGVcbiAgICB0aGlzLmNvZGUgPSBtc2cuY29kZTsvL01lc3NhZ2UgQ29kZSBvciBNZXNzYWdlIENvbnRlbnRcbiAgICB0aGlzLmFyZ3MgPSBtc2cuYXJnczsvL01lc3NhZ2UgQXJndW1lbnRzLCBBcnJheSBvciBPYmplY3QsIGZvcm1hdCBieSBza0ZtdEFyciBvciBza0ZtdFxuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0TWVzc2FnZSgpIHtcbiAgICBsZXQga2V5ID0gJ1Jlc3AuJyArIHRoaXMuY29kZTtcbiAgICBsZXQgaTE4bk1zZyA9IEkxOE4uZ2V0KGtleSk7XG4gICAgbGV0IHJ0biA9IHRoaXMuY29kZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmFyZ3MpKSB7XG4gICAgICBydG4gPSBpMThuTXNnLnNrRm10QXJyKHRoaXMuYXJncy5tYXAoYXJnID0+IHtcbiAgICAgICAgbGV0IHRtcFJ0biA9IG51bGw7XG4gICAgICAgIGlmIChfLmlzUGxhaW5PYmplY3QoYXJnKSAmJiBhcmcuY29kZSAmJiBhcmcuaWQpIHtcbiAgICAgICAgICB0bXBSdG4gPSBDb2Rlcy5nZXQoYXJnLmNvZGUpLmZpbmQoaXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5pZCA9IGFyZy5pZFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRtcFJ0biA9IHRtcFJ0biA/IHRtcFJ0bi50ZXh0IDogYXJnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRtcFJ0biA9IGFyZztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG1wUnRuO1xuICAgICAgfSkpXG4gICAgfSBlbHNlIGlmIChfLmlzUGxhaW5PYmplY3QodGhpcy5hcmdzKSAmJiAhXy5pc0VtcHR5KHRoaXMuYXJncykpIHtcbiAgICAgIHJ0biA9IGkxOG5Nc2cuc2tGbXQodGhpcy5hcmdzKTtcbiAgICB9IGVsc2UgaWYgKGkxOG5Nc2cgIT0ga2V5KSB7XG4gICAgICBydG4gPSBpMThuTXNnO1xuICAgIH1cbiAgICByZXR1cm4gcnRuO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3Age1xuICBjb25zdHJ1Y3RvcihyZXNwSnNvbkRhdGEpIHtcbiAgICB0aGlzLmRhdGEgPSByZXNwSnNvbkRhdGEuZGF0YTsvL0J1c2luZXNzIERhdGFcbiAgICB0aGlzLmRvbmUgPSByZXNwSnNvbkRhdGEuZG9uZTsvL3RydWU6IE5vIFVua25vd24gRXhjZXB0aW9uLGZhbHNlOiBoYXMgVW5rbm93biBFeGNlcHRpb25cbiAgICBpZiAoXy5pc1BsYWluT2JqZWN0KHJlc3BKc29uRGF0YS5yc2x0KSAmJiAhXy5pc0VtcHR5KHJlc3BKc29uRGF0YS5yc2x0KSkgey8vUmVzdWx0IE1lc3NhZ2UgT2JqZWN0LCBSZXF1aXJlZCBpZiBkb25lIGlzIGZhbHNlXG4gICAgICB0aGlzLnJzbHQgPSBuZXcgUmVzcE1zZyhyZXNwSnNvbkRhdGEucnNsdCk7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3BKc29uRGF0YS5udGZzKSAmJiAhXy5pc0VtcHR5KHJlc3BKc29uRGF0YS5udGZzKSkgey8vTm90aWZpY2F0aW9ucyBBcnJheVxuICAgICAgdGhpcy5udGZzID0gcmVzcEpzb25EYXRhLm50ZnMubWFwKG50ZiA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUmVzcE1zZyhudGYpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc2hvd05vdGlmaWNhdGlvbnMoKSB7XG4gICAgaWYgKHRoaXMubnRmcykge1xuICAgICAgdGhpcy5udGZzLmZvckVhY2goKCRyZXNwTXNnKSA9PiB7XG4gICAgICAgIGlmICgkcmVzcE1zZyBpbnN0YW5jZW9mIFJlc3BNc2cpIHtcbiAgICAgICAgICBpZiAoJHJlc3BNc2cuZ2V0VHlwZSgpICYmICRyZXNwTXNnLmdldE1lc3NhZ2UoKSkge1xuICAgICAgICAgICAgbm90aWZpY2F0aW9uW18ubG93ZXJDYXNlKCRyZXNwTXNnLmdldFR5cGUoKSldKHttZXNzYWdlOiAkcmVzcE1zZy5nZXRUeXBlKCksIGRlc2NyaXB0aW9uOiAkcmVzcE1zZy5nZXRNZXNzYWdlKCl9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNob3dSZXN1bHQoKSB7XG4gICAgaWYgKHRoaXMucnNsdCAmJiB0aGlzLnJzbHQuZ2V0VHlwZSgpICYmIHRoaXMucnNsdC5nZXRNZXNzYWdlKCkpIHtcbiAgICAgIGlmICghdGhpcy5kb25lICYmIHRoaXMucnNsdC5nZXRUeXBlKCkgPT0gUmVzcE1zZy5UWVBFLkVSUk9SKSB7XG4gICAgICAgIE1vZGFsLmVycm9yKHtcbiAgICAgICAgICB0aXRsZTogdGhpcy5yc2x0LmdldFR5cGUoKSwgY29udGVudDogdGhpcy5yc2x0LmdldE1lc3NhZ2UoKSwgb2tUZXh0OiBJMThOLmdldCgnUmV0dXJuJyksIG9uT2soKSB7XG4gICAgICAgICAgICBSZWFjdFV0aWwuZm9yd2FyZCgnLycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZXNzYWdlW18ubG93ZXJDYXNlKHRoaXMucnNsdC5nZXRUeXBlKCkpXSh0aGlzLnJzbHQuZ2V0TWVzc2FnZSgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==