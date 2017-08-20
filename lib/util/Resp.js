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

var _skJs = require('sk-js');

var _skJs2 = _interopRequireDefault(_skJs);

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
      var key = _skL10n.I18N.RESP_MSG_KEY_PREFIX + this.code;
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
              _ReactUtil2.default.forward(_skJs2.default.CHAR_SLASH);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvUmVzcC5qcyJdLCJuYW1lcyI6WyJSZXNwTXNnIiwibXNnIiwidHlwZSIsImNvZGUiLCJhcmdzIiwia2V5IiwiUkVTUF9NU0dfS0VZX1BSRUZJWCIsImkxOG5Nc2ciLCJnZXQiLCJydG4iLCJBcnJheSIsImlzQXJyYXkiLCJza0ZtdEFyciIsIm1hcCIsInRtcFJ0biIsImlzUGxhaW5PYmplY3QiLCJhcmciLCJpZCIsImZpbmQiLCJpdGVtIiwidGV4dCIsImlzRW1wdHkiLCJza0ZtdCIsIlRZUEUiLCJTVUNDRVNTIiwiSU5GTyIsIldBUk5JTkciLCJFUlJPUiIsIlJlc3AiLCJyZXNwSnNvbkRhdGEiLCJkYXRhIiwiZG9uZSIsInJzbHQiLCJudGZzIiwibnRmIiwiZm9yRWFjaCIsIiRyZXNwTXNnIiwiZ2V0VHlwZSIsImdldE1lc3NhZ2UiLCJsb3dlckNhc2UiLCJtZXNzYWdlIiwiZGVzY3JpcHRpb24iLCJlcnJvciIsInRpdGxlIiwiY29udGVudCIsIm9rVGV4dCIsIm9uT2siLCJmb3J3YXJkIiwiQ0hBUl9TTEFTSCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7OztJQUVhQSxPLFdBQUFBLE87QUFRWCxtQkFBWUMsR0FBWixFQUFpQjtBQUFBOztBQUNmLFNBQUtDLElBQUwsR0FBWUQsSUFBSUMsSUFBaEIsQ0FEZSxDQUNNO0FBQ3JCLFNBQUtDLElBQUwsR0FBWUYsSUFBSUUsSUFBaEIsQ0FGZSxDQUVNO0FBQ3JCLFNBQUtDLElBQUwsR0FBWUgsSUFBSUcsSUFBaEIsQ0FIZSxDQUdNO0FBQ3RCOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLRixJQUFaO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQUlHLE1BQU0sYUFBS0MsbUJBQUwsR0FBMkIsS0FBS0gsSUFBMUM7QUFDQSxVQUFJSSxVQUFVLGFBQUtDLEdBQUwsQ0FBU0gsR0FBVCxDQUFkO0FBQ0EsVUFBSUksTUFBTSxLQUFL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SUFBTCxDQUFVSyxPQUFWLE1BQXVCckMsUUFBUXVCLElBQVIsQ0FBYUksS0FBdEQsRUFBNkQ7QUFDM0QsMEJBQU1lLEtBQU4sQ0FBWTtBQUNWQyxtQkFBTyxLQUFLWCxJQUFMLENBQVVLLE9BQVYsRUFERyxFQUNrQk8sU0FBUyxLQUFLWixJQUFMLENBQVVNLFVBQVYsRUFEM0IsRUFDbURPLFFBQVEsYUFBS3JDLEdBQUwsQ0FBUyxRQUFULENBRDNELEVBQytFc0MsSUFEL0Usa0JBQ3NGO0FBQzlGLGtDQUFVQyxPQUFWLENBQWtCLGVBQUdDLFVBQXJCO0FBQ0Q7QUFIUyxXQUFaO0FBS0QsU0FORCxNQU1PO0FBQ0wsNEJBQVEsaUJBQUVULFNBQUYsQ0FBWSxLQUFLUCxJQUFMLENBQVVLLE9BQVYsRUFBWixDQUFSLEVBQTBDLEtBQUtMLElBQUwsQ0FBVU0sVUFBVixFQUExQztBQUNEO0FBQ0Y7QUFDRjs7Ozs7O2tCQXRDa0JWLEkiLCJmaWxlIjoidXRpbC9SZXNwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHttZXNzYWdlLCBNb2RhbCwgbm90aWZpY2F0aW9ufSBmcm9tICdhbnRkJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgU0sgZnJvbSAnc2stanMnO1xuaW1wb3J0IHtDb2RlcywgSTE4Tn0gZnJvbSAnc2stbDEwbic7XG5pbXBvcnQgUmVhY3RVdGlsIGZyb20gJy4vUmVhY3RVdGlsJztcblxuZXhwb3J0IGNsYXNzIFJlc3BNc2cge1xuICBzdGF0aWMgVFlQRSA9IHtcbiAgICBTVUNDRVNTOiAnU3VjY2VzcycsLy9KdXN0IHByb21wdFxuICAgIElORk86ICdJbmZvJywvL0p1c3QgcHJvbXB0XG4gICAgV0FSTklORzogJ1dhcm5pbmcnLC8vQnVzaW5lc3MgY29udGludWUsIGJ1dCBtdXN0IHByb21wdFxuICAgIEVSUk9SOiAnRXJyb3InLy9Vbmtub3duIEV4Y2VwdGlvbihkb25lID09IGZhbHNlKSwgVUkgd2lsbCBwcm9tcHQgZGV0YWlsczsgQnVzaW5lc3MgU3RvcChkb25lID09IHRydWUpLCBwcm9jZXNzIGJ5IGNvbXBvbmVudFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKG1zZykge1xuICAgIHRoaXMudHlwZSA9IG1zZy50eXBlOy8vTWVzc2FnZSBUeXBlXG4gICAgdGhpcy5jb2RlID0gbXNnLmNvZGU7Ly9NZXNzYWdlIENvZGUgb3IgTWVzc2FnZSBDb250ZW50XG4gICAgdGhpcy5hcmdzID0gbXNnLmFyZ3M7Ly9NZXNzYWdlIEFyZ3VtZW50cywgQXJyYXkgb3IgT2JqZWN0LCBmb3JtYXQgYnkgc2tGbXRBcnIgb3Igc2tGbXRcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldE1lc3NhZ2UoKSB7XG4gICAgbGV0IGtleSA9IEkxOE4uUkVTUF9NU0dfS0VZX1BSRUZJWCArIHRoaXMuY29kZTtcbiAgICBsZXQgaTE4bk1zZyA9IEkxOE4uZ2V0KGtleSk7XG4gICAgbGV0IHJ0biA9IHRoaXMuY29kZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmFyZ3MpKSB7XG4gICAgICBydG4gPSBpMThuTXNnLnNrRm10QXJyKHRoaXMuYXJncy5tYXAoYXJnID0+IHtcbiAgICAgICAgbGV0IHRtcFJ0biA9IG51bGw7XG4gICAgICAgIGlmIChfLmlzUGxhaW5PYmplY3QoYXJnKSAmJiBhcmcuY29kZSAmJiBhcmcuaWQpIHtcbiAgICAgICAgICB0bXBSdG4gPSBDb2Rlcy5nZXQoYXJnLmNvZGUpLmZpbmQoaXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5pZCA9IGFyZy5pZFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRtcFJ0biA9IHRtcFJ0biA/IHRtcFJ0bi50ZXh0IDogYXJnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRtcFJ0biA9IGFyZztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG1wUnRuO1xuICAgICAgfSkpXG4gICAgfSBlbHNlIGlmIChfLmlzUGxhaW5PYmplY3QodGhpcy5hcmdzKSAmJiAhXy5pc0VtcHR5KHRoaXMuYXJncykpIHtcbiAgICAgIHJ0biA9IGkxOG5Nc2cuc2tGbXQodGhpcy5hcmdzKTtcbiAgICB9IGVsc2UgaWYgKGkxOG5Nc2cgIT0ga2V5KSB7XG4gICAgICBydG4gPSBpMThuTXNnO1xuICAgIH1cbiAgICByZXR1cm4gcnRuO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3Age1xuICBjb25zdHJ1Y3RvcihyZXNwSnNvbkRhdGEpIHtcbiAgICB0aGlzLmRhdGEgPSByZXNwSnNvbkRhdGEuZGF0YTsvL0J1c2luZXNzIERhdGFcbiAgICB0aGlzLmRvbmUgPSByZXNwSnNvbkRhdGEuZG9uZTsvL3RydWU6IE5vIFVua25vd24gRXhjZXB0aW9uLGZhbHNlOiBoYXMgVW5rbm93biBFeGNlcHRpb25cbiAgICBpZiAoXy5pc1BsYWluT2JqZWN0KHJlc3BKc29uRGF0YS5yc2x0KSAmJiAhXy5pc0VtcHR5KHJlc3BKc29uRGF0YS5yc2x0KSkgey8vUmVzdWx0IE1lc3NhZ2UgT2JqZWN0LCBSZXF1aXJlZCBpZiBkb25lIGlzIGZhbHNlXG4gICAgICB0aGlzLnJzbHQgPSBuZXcgUmVzcE1zZyhyZXNwSnNvbkRhdGEucnNsdCk7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3BKc29uRGF0YS5udGZzKSAmJiAhXy5pc0VtcHR5KHJlc3BKc29uRGF0YS5udGZzKSkgey8vTm90aWZpY2F0aW9ucyBBcnJheVxuICAgICAgdGhpcy5udGZzID0gcmVzcEpzb25EYXRhLm50ZnMubWFwKG50ZiA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUmVzcE1zZyhudGYpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc2hvd05vdGlmaWNhdGlvbnMoKSB7XG4gICAgaWYgKHRoaXMubnRmcykge1xuICAgICAgdGhpcy5udGZzLmZvckVhY2goKCRyZXNwTXNnKSA9PiB7XG4gICAgICAgIGlmICgkcmVzcE1zZyBpbnN0YW5jZW9mIFJlc3BNc2cpIHtcbiAgICAgICAgICBpZiAoJHJlc3BNc2cuZ2V0VHlwZSgpICYmICRyZXNwTXNnLmdldE1lc3NhZ2UoKSkge1xuICAgICAgICAgICAgbm90aWZpY2F0aW9uW18ubG93ZXJDYXNlKCRyZXNwTXNnLmdldFR5cGUoKSldKHttZXNzYWdlOiAkcmVzcE1zZy5nZXRUeXBlKCksIGRlc2NyaXB0aW9uOiAkcmVzcE1zZy5nZXRNZXNzYWdlKCl9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNob3dSZXN1bHQoKSB7XG4gICAgaWYgKHRoaXMucnNsdCAmJiB0aGlzLnJzbHQuZ2V0VHlwZSgpICYmIHRoaXMucnNsdC5nZXRNZXNzYWdlKCkpIHtcbiAgICAgIGlmICghdGhpcy5kb25lICYmIHRoaXMucnNsdC5nZXRUeXBlKCkgPT0gUmVzcE1zZy5UWVBFLkVSUk9SKSB7XG4gICAgICAgIE1vZGFsLmVycm9yKHtcbiAgICAgICAgICB0aXRsZTogdGhpcy5yc2x0LmdldFR5cGUoKSwgY29udGVudDogdGhpcy5yc2x0LmdldE1lc3NhZ2UoKSwgb2tUZXh0OiBJMThOLmdldCgnUmV0dXJuJyksIG9uT2soKSB7XG4gICAgICAgICAgICBSZWFjdFV0aWwuZm9yd2FyZChTSy5DSEFSX1NMQVNIKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVzc2FnZVtfLmxvd2VyQ2FzZSh0aGlzLnJzbHQuZ2V0VHlwZSgpKV0odGhpcy5yc2x0LmdldE1lc3NhZ2UoKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=