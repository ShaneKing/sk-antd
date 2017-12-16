'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RespMsg = undefined;

var _message2 = require('antd/lib/message');

var _message3 = _interopRequireDefault(_message2);

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/message/style');

require('antd/lib/modal/style');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _skJs = require('sk-js');

var _skL10n = require('sk-l10n');

var _Reacts = require('./Reacts');

var _Reacts2 = _interopRequireDefault(_Reacts);

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
      } else if (i18nMsg !== key) {
        rtn = i18nMsg;
      }
      return rtn;
    }
  }, {
    key: 'getType',
    value: function getType() {
      return this.type;
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
    if (_lodash2.default.isPlainObject(respJsonData.mesg) && !_lodash2.default.isEmpty(respJsonData.mesg)) {
      //Result Message Object, Required if done is false
      this.mesg = new RespMsg(respJsonData.mesg);
    }
  }

  _createClass(Resp, [{
    key: 'feedback',
    value: function feedback() {
      if (this.mesg && this.mesg.getType() && this.mesg.getMessage()) {
        if (!this.done && this.mesg.getType() === RespMsg.TYPE.ERROR) {
          _modal2.default.error({
            title: this.mesg.getType(), content: this.mesg.getMessage(), okText: _skL10n.I18N.get('Return'), onOk: function onOk() {
              _Reacts2.default.forward(_skJs.SK.CHAR_SLASH);
            }
          });
        } else {
          _message3.default[_lodash2.default.lowerCase(this.mesg.getType())](this.mesg.getMessage());
        }
      }
    }
  }]);

  return Resp;
}();

exports.default = Resp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvUmVzcC5qcyJdLCJuYW1lcyI6WyJSZXNwTXNnIiwibXNnIiwidHlwZSIsImNvZGUiLCJhcmdzIiwia2V5IiwiUkVTUF9NU0dfS0VZX1BSRUZJWCIsImkxOG5Nc2ciLCJnZXQiLCJydG4iLCJBcnJheSIsImlzQXJyYXkiLCJza0ZtdEFyciIsIm1hcCIsInRtcFJ0biIsImlzUGxhaW5PYmplY3QiLCJhcmciLCJpZCIsImZpbmQiLCJpdGVtIiwidGV4dCIsImlzRW1wdHkiLCJza0ZtdCIsIlRZUEUiLCJTVUNDRVNTIiwiSU5GTyIsIldBUk5JTkciLCJFUlJPUiIsIlJlc3AiLCJyZXNwSnNvbkRhdGEiLCJkYXRhIiwiZG9uZSIsIm1lc2ciLCJnZXRUeXBlIiwiZ2V0TWVzc2FnZSIsImVycm9yIiwidGl0bGUiLCJjb250ZW50Iiwib2tUZXh0Iiwib25PayIsImZvcndhcmQiLCJDSEFSX1NMQVNIIiwibG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztJQUVhQSxPLFdBQUFBLE87QUFRWCxtQkFBWUMsR0FBWixFQUFpQjtBQUFBOztBQUNmLFNBQUtDLElBQUwsR0FBWUQsSUFBSUMsSUFBaEIsQ0FEZSxDQUNNO0FBQ3JCLFNBQUtDLElBQUwsR0FBWUYsSUFBSUUsSUFBaEIsQ0FGZSxDQUVNO0FBQ3JCLFNBQUtDLElBQUwsR0FBWUgsSUFBSUcsSUFBaEIsQ0FIZSxDQUdNO0FBQ3RCOzs7O2lDQUVZO0FBQ1gsVUFBSUMsTUFBTSxhQUFLQyxtQkFBTCxHQUEyQixLQUFLSCxJQUExQztBQUNBLFVBQUlJLFVBQVUsYUFBS0MsR0FBTCxDQUFTSCxHQUFULENBQWQ7QUFDQSxVQUFJSSxNQUFNLEtBQUtOLElBQWY7QUFDQSxVQUFJTyxNQUFNQyxPQUFOLENBQWMsS0FBS1AsSUFBbkIsQ0FBSixFQUE4QjtBQUM1QkssY0FBTUYsUUFBUUssUUFBUixDQUFpQixLQUFLUixJQUFMLENBQVVTLEdBQVYsQ0FBYyxlQUFPO0FBQzFDLGNBQUlDLFNBQVMsSUFBYjtBQUNBLGNBQUksaUJBQUVDLGFBQUYsQ0FBZ0JDLEdBQWhCLEtBQXdCQSxJQUFJYixJQUE1QixJQUFvQ2EsSUFBSUMsRUFBNUMsRUFBZ0Q7QUFDOUNILHFCQUFTLGNBQU1OLEdBQU4sQ0FBVVEsSUFBSWIsSUFBZCxFQUFvQmUsSUFBcEIsQ0FBeUIsZ0JBQVE7QUFDeEMscUJBQU9DLEtBQUtGLEVBQUwsR0FBVUQsSUFBSUMsRUFBckI7QUFDRCxhQUZRLENBQVQ7QUFHQUgscUJBQVNBLFNBQVNBLE9BQU9NLElBQWhCLEdBQXVCSixHQUFoQztBQUNELFdBTEQsTUFLTztBQUNMRixxQkFBU0UsR0FBVDtBQUNEO0FBQ0QsaUJBQU9GLE1BQVA7QUFDRCxTQVhzQixDQUFqQixDQUFOO0FBWUQsT0FiRCxNQWFPLElBQUksaUJBQUVDLGFBQUYsQ0FBZ0IsS0FBS1gsSUFBckIsS0FBOEIsQ0FBQyxpQkFBRWlCLE9BQUYsQ0FBVSxLQUFLakIsSUFBZixDQUFuQyxFQUF5RDtBQUM5REssY0FBTUYsUUFBUWUsS0FBUixDQUFjLEtBQUtsQixJQUFuQixDQUFOO0FBQ0QsT0FGTSxNQUVBLElBQUlHLFlBQVlGLEdBQWhCLEVBQXFCO0FBQzFCSSxjQUFNRixPQUFOO0FBQ0Q7QUFDRCxhQUFPRSxHQUFQO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS1AsSUFBWjtBQUNEOzs7Ozs7QUF6Q1VGLE8sQ0FDSnVCLEksR0FBTztBQUNaQyxXQUFTLFNBREcsRUFDTztBQUNuQkMsUUFBTSxNQUZNLEVBRUM7QUFDYkMsV0FBUyxTQUhHLEVBR087QUFDbkJDLFNBQU8sT0FKSyxDQUlFO0FBSkYsQzs7SUEyQ0tDLEk7QUFDbkIsZ0JBQVlDLFlBQVosRUFBMEI7QUFBQTs7QUFDeEIsU0FBS0MsSUFBTCxHQUFZRCxhQUFhQyxJQUF6QixDQUR3QixDQUNNO0FBQzlCLFNBQUtDLElBQUwsR0FBWUYsYUFBYUUsSUFBekIsQ0FGd0IsQ0FFTTtBQUM5QixRQUFJLGlCQUFFaEIsYUFBRixDQUFnQmMsYUFBYUcsSUFBN0IsS0FBc0MsQ0FBQyxpQkFBRVgsT0FBRixDQUFVUSxhQUFhRyxJQUF2QixDQUEzQyxFQUF5RTtBQUFDO0FBQ3hFLFdBQUtBLElBQUwsR0FBWSxJQUFJaEMsT0FBSixDQUFZNkIsYUFBYUcsSUFBekIsQ0FBWjtBQUNEO0FBQ0Y7Ozs7K0JBRVU7QUFDVCxVQUFJLEtBQUtBLElBQUwsSUFBYSxLQUFLQSxJQUFMLENBQVVDLE9BQVYsRUFBYixJQUFvQyxLQUFLRCxJQUFMLENBQVVFLFVBQVYsRUFBeEMsRUFBZ0U7QUFDOUQsWUFBSSxDQUFDLEtBQUtILElBQU4sSUFBYyxLQUFLQyxJQUFMLENBQVVDLE9BQVYsT0FBd0JqQyxRQUFRdUIsSUFBUixDQUFhSSxLQUF2RCxFQUE4RDtBQUM1RCwwQkFBTVEsS0FBTixDQUFZO0FBQ1ZDLG1CQUFPLEtBQUtKLElBQUwsQ0FBVUMsT0FBVixFQURHLEVBQ2tCSSxTQUFTLEtBQUtMLElBQUwsQ0FBVUUsVUFBVixFQUQzQixFQUNtREksUUFBUSxhQUFLOUIsR0FBTCxDQUFTLFFBQVQsQ0FEM0QsRUFDK0UrQixJQUQvRSxrQkFDc0Y7QUFDOUYsK0JBQVVDLE9BQVYsQ0FBa0IsU0FBR0MsVUFBckI7QUFDRDtBQUhTLFdBQVo7QUFLRCxTQU5ELE1BTU87QUFDTCw0QkFBUSxpQkFBRUMsU0FBRixDQUFZLEtBQUtWLElBQUwsQ0FBVUMsT0FBVixFQUFaLENBQVIsRUFBMEMsS0FBS0QsSUFBTCxDQUFVRSxVQUFWLEVBQTFDO0FBQ0Q7QUFDRjtBQUNGOzs7Ozs7a0JBckJrQk4sSSIsImZpbGUiOiJ1dGlsL1Jlc3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge21lc3NhZ2UsIE1vZGFsfSBmcm9tICdhbnRkJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge1NLfSBmcm9tICdzay1qcyc7XG5pbXBvcnQge0NvZGVzLCBJMThOfSBmcm9tICdzay1sMTBuJztcbmltcG9ydCBSZWFjdFV0aWwgZnJvbSAnLi9SZWFjdHMnO1xuXG5leHBvcnQgY2xhc3MgUmVzcE1zZyB7XG4gIHN0YXRpYyBUWVBFID0ge1xuICAgIFNVQ0NFU1M6ICdTdWNjZXNzJywvL0p1c3QgcHJvbXB0XG4gICAgSU5GTzogJ0luZm8nLC8vSnVzdCBwcm9tcHRcbiAgICBXQVJOSU5HOiAnV2FybmluZycsLy9CdXNpbmVzcyBjb250aW51ZSwgYnV0IG11c3QgcHJvbXB0XG4gICAgRVJST1I6ICdFcnJvcicvL1Vua25vd24gRXhjZXB0aW9uKGRvbmUgPT0gZmFsc2UpLCBVSSB3aWxsIHByb21wdCBkZXRhaWxzOyBCdXNpbmVzcyBTdG9wKGRvbmUgPT0gdHJ1ZSksIHByb2Nlc3MgYnkgY29tcG9uZW50XG4gIH07XG5cbiAgY29uc3RydWN0b3IobXNnKSB7XG4gICAgdGhpcy50eXBlID0gbXNnLnR5cGU7Ly9NZXNzYWdlIFR5cGVcbiAgICB0aGlzLmNvZGUgPSBtc2cuY29kZTsvL01lc3NhZ2UgQ29kZSBvciBNZXNzYWdlIENvbnRlbnRcbiAgICB0aGlzLmFyZ3MgPSBtc2cuYXJnczsvL01lc3NhZ2UgQXJndW1lbnRzLCBBcnJheSBvciBPYmplY3QsIGZvcm1hdCBieSBza0ZtdEFyciBvciBza0ZtdFxuICB9XG5cbiAgZ2V0TWVzc2FnZSgpIHtcbiAgICBsZXQga2V5ID0gSTE4Ti5SRVNQX01TR19LRVlfUFJFRklYICsgdGhpcy5jb2RlO1xuICAgIGxldCBpMThuTXNnID0gSTE4Ti5nZXQoa2V5KTtcbiAgICBsZXQgcnRuID0gdGhpcy5jb2RlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuYXJncykpIHtcbiAgICAgIHJ0biA9IGkxOG5Nc2cuc2tGbXRBcnIodGhpcy5hcmdzLm1hcChhcmcgPT4ge1xuICAgICAgICBsZXQgdG1wUnRuID0gbnVsbDtcbiAgICAgICAgaWYgKF8uaXNQbGFpbk9iamVjdChhcmcpICYmIGFyZy5jb2RlICYmIGFyZy5pZCkge1xuICAgICAgICAgIHRtcFJ0biA9IENvZGVzLmdldChhcmcuY29kZSkuZmluZChpdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmlkID0gYXJnLmlkXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdG1wUnRuID0gdG1wUnRuID8gdG1wUnRuLnRleHQgOiBhcmc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG1wUnRuID0gYXJnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0bXBSdG47XG4gICAgICB9KSlcbiAgICB9IGVsc2UgaWYgKF8uaXNQbGFpbk9iamVjdCh0aGlzLmFyZ3MpICYmICFfLmlzRW1wdHkodGhpcy5hcmdzKSkge1xuICAgICAgcnRuID0gaTE4bk1zZy5za0ZtdCh0aGlzLmFyZ3MpO1xuICAgIH0gZWxzZSBpZiAoaTE4bk1zZyAhPT0ga2V5KSB7XG4gICAgICBydG4gPSBpMThuTXNnO1xuICAgIH1cbiAgICByZXR1cm4gcnRuO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3Age1xuICBjb25zdHJ1Y3RvcihyZXNwSnNvbkRhdGEpIHtcbiAgICB0aGlzLmRhdGEgPSByZXNwSnNvbkRhdGEuZGF0YTsvL0J1c2luZXNzIERhdGFcbiAgICB0aGlzLmRvbmUgPSByZXNwSnNvbkRhdGEuZG9uZTsvL3RydWU6IE5vIFVua25vd24gRXhjZXB0aW9uLGZhbHNlOiBoYXMgVW5rbm93biBFeGNlcHRpb25cbiAgICBpZiAoXy5pc1BsYWluT2JqZWN0KHJlc3BKc29uRGF0YS5tZXNnKSAmJiAhXy5pc0VtcHR5KHJlc3BKc29uRGF0YS5tZXNnKSkgey8vUmVzdWx0IE1lc3NhZ2UgT2JqZWN0LCBSZXF1aXJlZCBpZiBkb25lIGlzIGZhbHNlXG4gICAgICB0aGlzLm1lc2cgPSBuZXcgUmVzcE1zZyhyZXNwSnNvbkRhdGEubWVzZyk7XG4gICAgfVxuICB9XG5cbiAgZmVlZGJhY2soKSB7XG4gICAgaWYgKHRoaXMubWVzZyAmJiB0aGlzLm1lc2cuZ2V0VHlwZSgpICYmIHRoaXMubWVzZy5nZXRNZXNzYWdlKCkpIHtcbiAgICAgIGlmICghdGhpcy5kb25lICYmIHRoaXMubWVzZy5nZXRUeXBlKCkgPT09IFJlc3BNc2cuVFlQRS5FUlJPUikge1xuICAgICAgICBNb2RhbC5lcnJvcih7XG4gICAgICAgICAgdGl0bGU6IHRoaXMubWVzZy5nZXRUeXBlKCksIGNvbnRlbnQ6IHRoaXMubWVzZy5nZXRNZXNzYWdlKCksIG9rVGV4dDogSTE4Ti5nZXQoJ1JldHVybicpLCBvbk9rKCkge1xuICAgICAgICAgICAgUmVhY3RVdGlsLmZvcndhcmQoU0suQ0hBUl9TTEFTSCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lc3NhZ2VbXy5sb3dlckNhc2UodGhpcy5tZXNnLmdldFR5cGUoKSldKHRoaXMubWVzZy5nZXRNZXNzYWdlKCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19