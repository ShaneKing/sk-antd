'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _Comp2 = require('../Comp');

var _Const = require('../Const');

var _Reacts = require('../Reacts');

var _Reacts2 = _interopRequireDefault(_Reacts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 1.The defaultProps and propTypes of AntD just can be use in wrapper Comp or non-Comp
 * 2.if origin exist, must be use origin
 */
var AntdComp = function (_Comp) {
  _inherits(AntdComp, _Comp);

  function AntdComp() {
    var _ref;

    _classCallCheck(this, AntdComp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = AntdComp.__proto__ || Object.getPrototypeOf(AntdComp)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'AntdComp';
    return _this;
  }

  _createClass(AntdComp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _get(AntdComp.prototype.__proto__ || Object.getPrototypeOf(AntdComp.prototype), 'componentDidMount', this).call(this);
      this.addAllErroredMonitor();
      this.addExtendErroredMonitor();
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {
      this.rmvAllErroredMonitor();
      this.rmvExtendErroredMonitor();
      _get(AntdComp.prototype.__proto__ || Object.getPrototypeOf(AntdComp.prototype), 'componentWillUpdate', this).call(this);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      _get(AntdComp.prototype.__proto__ || Object.getPrototypeOf(AntdComp.prototype), 'componentDidUpdate', this).call(this);
      this.addAllErroredMonitor();
      this.addExtendErroredMonitor();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.rmvAllErroredMonitor();
      this.rmvExtendErroredMonitor();
      _get(AntdComp.prototype.__proto__ || Object.getPrototypeOf(AntdComp.prototype), 'componentWillUnmount', this).call(this);
    }
  }, {
    key: 'addExtendErroredMonitor',
    value: function addExtendErroredMonitor() {}
  }, {
    key: 'rmvExtendErroredMonitor',
    value: function rmvExtendErroredMonitor() {}

    //monitor begin

  }, {
    key: 'addAllErroredMonitor',
    value: function addAllErroredMonitor() {
      var _this2 = this;

      _skJs.Model.parseSao(this.props.monitor).forEach(function ($idOrReg) {
        _this2.addErroredMonitor($idOrReg);
      });
      //Self value monitor
      if (this.getModelId()) {
        this.addErroredMonitor(this.getModelId());
      }
    }
  }, {
    key: 'addErroredMonitor',
    value: function addErroredMonitor(idOrReg) {
      if (this.monitors.indexOf(idOrReg) < 0) {
        this.monitors.push(idOrReg);
      }
      if (_lodash2.default.isRegExp(idOrReg)) {
        this.skModel().addRegErroredListener(idOrReg, this.updateUI);
      } else {
        this.skModel().addIdErroredListener(idOrReg, this.updateUI);
      }
    }
  }, {
    key: 'rmvAllErroredMonitor',
    value: function rmvAllErroredMonitor() {
      var _this3 = this;

      this.monitors.forEach(function ($idOrReg) {
        _this3.rmvErroredMonitor($idOrReg);
      });
    }
  }, {
    key: 'rmvErroredMonitor',
    value: function rmvErroredMonitor(idOrReg) {
      if (_lodash2.default.isRegExp(idOrReg)) {
        this.skModel().rmvRegErroredListener(idOrReg, this.updateUI);
      } else {
        this.skModel().rmvIdErroredListener(idOrReg, this.updateUI);
      }
      this.monitors.skRmv(idOrReg);
    }
  }, {
    key: 'hasSpecialChild',
    value: function hasSpecialChild(specialChildName) {
      return _Reacts2.default.some(this.props.children, function (child, idx) {
        return child.type && child.type.name === specialChildName;
      }, this);
    }
  }]);

  return AntdComp;
}(_Comp2.Comp);

AntdComp.SK_PROPS = {
  SIZE: 'size'
};
AntdComp.defaultProps = _skJs.SK.assign({}, _Comp2.Comp.defaultProps, {});
AntdComp.propTypes = _skJs.SK.assign({}, _Comp2.Comp.propTypes, {
  size: _propTypes2.default.oneOf(Object.values(_Const.SIZE)),
  skSize: _propTypes2.default.oneOf(Object.values(_Const.SIZE))
});
exports.default = AntdComp;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvQW50ZENvbXAuanMiXSwibmFtZXMiOlsiQW50ZENvbXAiLCJhcmdzIiwiY29tcE5hbWUiLCJhZGRBbGxFcnJvcmVkTW9uaXRvciIsImFkZEV4dGVuZEVycm9yZWRNb25pdG9yIiwicm12QWxsRXJyb3JlZE1vbml0b3IiLCJybXZFeHRlbmRFcnJvcmVkTW9uaXRvciIsInBhcnNlU2FvIiwicHJvcHMiLCJtb25pdG9yIiwiZm9yRWFjaCIsIiRpZE9yUmVnIiwiYWRkRXJyb3JlZE1vbml0b3IiLCJnZXRNb2RlbElkIiwiaWRPclJlZyIsIm1vbml0b3JzIiwiaW5kZXhPZiIsInB1c2giLCJpc1JlZ0V4cCIsInNrTW9kZWwiLCJhZGRSZWdFcnJvcmVkTGlzdGVuZXIiLCJ1cGRhdGVVSSIsImFkZElkRXJyb3JlZExpc3RlbmVyIiwicm12RXJyb3JlZE1vbml0b3IiLCJybXZSZWdFcnJvcmVkTGlzdGVuZXIiLCJybXZJZEVycm9yZWRMaXN0ZW5lciIsInNrUm12Iiwic3BlY2lhbENoaWxkTmFtZSIsInNvbWUiLCJjaGlsZHJlbiIsImNoaWxkIiwiaWR4IiwidHlwZSIsIm5hbWUiLCJTS19QUk9QUyIsIlNJWkUiLCJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJwcm9wVHlwZXMiLCJzaXplIiwib25lT2YiLCJPYmplY3QiLCJ2YWx1ZXMiLCJza1NpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7SUFJcUJBLFE7OztBQVVuQixzQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsK0lBQ1ZBLElBRFU7O0FBRW5CLFVBQUtDLFFBQUwsR0FBZ0IsVUFBaEI7QUFGbUI7QUFHcEI7Ozs7d0NBRW1CO0FBQ2xCO0FBQ0EsV0FBS0Msb0JBQUw7QUFDQSxXQUFLQyx1QkFBTDtBQUNEOzs7MENBRXFCO0FBQ3BCLFdBQUtDLG9CQUFMO0FBQ0EsV0FBS0MsdUJBQUw7QUFDQTtBQUNEOzs7eUNBRW9CO0FBQ25CO0FBQ0EsV0FBS0gsb0JBQUw7QUFDQSxXQUFLQyx1QkFBTDtBQUNEOzs7MkNBRXNCO0FBQ3JCLFdBQUtDLG9CQUFMO0FBQ0EsV0FBS0MsdUJBQUw7QUFDQTtBQUNEOzs7OENBRXlCLENBQ3pCOzs7OENBRXlCLENBQ3pCOztBQUVEOzs7OzJDQUN1QjtBQUFBOztBQUNyQixrQkFBTUMsUUFBTixDQUFlLEtBQUtDLEtBQUwsQ0FBV0MsT0FBMUIsRUFBbUNDLE9BQW5DLENBQTJDLFVBQUNDLFFBQUQsRUFBYztBQUN2RCxlQUFLQyxpQkFBTCxDQUF1QkQsUUFBdkI7QUFDRCxPQUZEO0FBR0E7QUFDQSxVQUFJLEtBQUtFLFVBQUwsRUFBSixFQUF1QjtBQUNyQixhQUFLRCxpQkFBTCxDQUF1QixLQUFLQyxVQUFMLEVBQXZCO0FBQ0Q7QUFDRjs7O3NDQUVpQkMsTyxFQUFTO0FBQ3pCLFVBQUksS0FBS0MsUUFBTCxDQUFjQyxPQUFkLENBQXNCRixPQUF0QixJQUFpQyxDQUFyQyxFQUF3QztBQUN0QyxhQUFLQyxRQUFMLENBQWNFLElBQWQsQ0FBbUJILE9BQW5CO0FBQ0Q7QUFDRCxVQUFJLGlCQUFFSSxRQUFGLENBQVdKLE9BQVgsQ0FBSixFQUF5QjtBQUN2QixhQUFLSyxPQUFMLEdBQWVDLHFCQUFmLENBQXFDTixPQUFyQyxFQUE4QyxLQUFLTyxRQUFuRDtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUtGLE9BQUwsR0FBZUcsb0JBQWYsQ0FBb0NSLE9BQXBDLEVBQTZDLEtBQUtPLFFBQWxEO0FBQ0Q7QUFDRjs7OzJDQUVzQjtBQUFBOztBQUNyQixXQUFLTixRQUFMLENBQWNMLE9BQWQsQ0FBc0IsVUFBQ0MsUUFBRCxFQUFjO0FBQ2xDLGVBQUtZLGlCQUFMLENBQXVCWixRQUF2QjtBQUNELE9BRkQ7QUFHRDs7O3NDQUVpQkcsTyxFQUFTO0FBQ3pCLFVBQUksaUJBQUVJLFFBQUYsQ0FBV0osT0FBWCxDQUFKLEVBQXlCO0FBQ3ZCLGFBQUtLLE9BQUwsR0FBZUsscUJBQWYsQ0FBcUNWLE9BQXJDLEVBQThDLEtBQUtPLFFBQW5EO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS0YsT0FBTCxHQUFlTSxvQkFBZixDQUFvQ1gsT0FBcEMsRUFBNkMsS0FBS08sUUFBbEQ7QUFDRDtBQUNELFdBQUtOLFFBQUwsQ0FBY1csS0FBZCxDQUFvQlosT0FBcEI7QUFDRDs7O29DQUVlYSxnQixFQUFrQjtBQUNoQyxhQUFPLGlCQUFPQyxJQUFQLENBQVksS0FBS3BCLEtBQUwsQ0FBV3FCLFFBQXZCLEVBQWlDLFVBQUNDLEtBQUQsRUFBUUMsR0FBUixFQUFnQjtBQUN0RCxlQUFPRCxNQUFNRSxJQUFOLElBQWNGLE1BQU1FLElBQU4sQ0FBV0MsSUFBWCxLQUFvQk4sZ0JBQXpDO0FBQ0QsT0FGTSxFQUVKLElBRkksQ0FBUDtBQUdEOzs7Ozs7QUF0RmtCM0IsUSxDQUNaa0MsUSxHQUFXO0FBQ2hCQyxRQUFNO0FBRFUsQztBQURDbkMsUSxDQUlab0MsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsWUFBS0QsWUFBbkIsRUFBaUMsRUFBakMsQztBQUpIcEMsUSxDQUtac0MsUyxHQUFZLFNBQUdELE1BQUgsQ0FBVSxFQUFWLEVBQWMsWUFBS0MsU0FBbkIsRUFBOEI7QUFDL0NDLFFBQU0sb0JBQVVDLEtBQVYsQ0FBZ0JDLE9BQU9DLE1BQVAsYUFBaEIsQ0FEeUM7QUFFL0NDLFVBQVEsb0JBQVVILEtBQVYsQ0FBZ0JDLE9BQU9DLE1BQVAsYUFBaEI7QUFGdUMsQ0FBOUIsQztrQkFMQTFDLFEiLCJmaWxlIjoiYW50ZC9BbnRkQ29tcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U0ssIE1vZGVsfSBmcm9tICdzay1qcyc7XG5pbXBvcnQge0NvbXB9IGZyb20gJy4uL0NvbXAnO1xuaW1wb3J0IHtTSVpFfSBmcm9tICcuLi9Db25zdCc7XG5pbXBvcnQgUmVhY3RzIGZyb20gJy4uL1JlYWN0cyc7XG5cbi8qKlxuICogMS5UaGUgZGVmYXVsdFByb3BzIGFuZCBwcm9wVHlwZXMgb2YgQW50RCBqdXN0IGNhbiBiZSB1c2UgaW4gd3JhcHBlciBDb21wIG9yIG5vbi1Db21wXG4gKiAyLmlmIG9yaWdpbiBleGlzdCwgbXVzdCBiZSB1c2Ugb3JpZ2luXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFudGRDb21wIGV4dGVuZHMgQ29tcCB7XG4gIHN0YXRpYyBTS19QUk9QUyA9IHtcbiAgICBTSVpFOiAnc2l6ZSdcbiAgfTtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgQ29tcC5kZWZhdWx0UHJvcHMsIHt9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQ29tcC5wcm9wVHlwZXMsIHtcbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoT2JqZWN0LnZhbHVlcyhTSVpFKSksXG4gICAgc2tTaXplOiBQcm9wVHlwZXMub25lT2YoT2JqZWN0LnZhbHVlcyhTSVpFKSlcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnQW50ZENvbXAnO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc3VwZXIuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgICB0aGlzLmFkZEFsbEVycm9yZWRNb25pdG9yKCk7XG4gICAgdGhpcy5hZGRFeHRlbmRFcnJvcmVkTW9uaXRvcigpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVwZGF0ZSgpIHtcbiAgICB0aGlzLnJtdkFsbEVycm9yZWRNb25pdG9yKCk7XG4gICAgdGhpcy5ybXZFeHRlbmRFcnJvcmVkTW9uaXRvcigpO1xuICAgIHN1cGVyLmNvbXBvbmVudFdpbGxVcGRhdGUoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBzdXBlci5jb21wb25lbnREaWRVcGRhdGUoKTtcbiAgICB0aGlzLmFkZEFsbEVycm9yZWRNb25pdG9yKCk7XG4gICAgdGhpcy5hZGRFeHRlbmRFcnJvcmVkTW9uaXRvcigpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5ybXZBbGxFcnJvcmVkTW9uaXRvcigpO1xuICAgIHRoaXMucm12RXh0ZW5kRXJyb3JlZE1vbml0b3IoKTtcbiAgICBzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuICB9XG5cbiAgYWRkRXh0ZW5kRXJyb3JlZE1vbml0b3IoKSB7XG4gIH1cblxuICBybXZFeHRlbmRFcnJvcmVkTW9uaXRvcigpIHtcbiAgfVxuXG4gIC8vbW9uaXRvciBiZWdpblxuICBhZGRBbGxFcnJvcmVkTW9uaXRvcigpIHtcbiAgICBNb2RlbC5wYXJzZVNhbyh0aGlzLnByb3BzLm1vbml0b3IpLmZvckVhY2goKCRpZE9yUmVnKSA9PiB7XG4gICAgICB0aGlzLmFkZEVycm9yZWRNb25pdG9yKCRpZE9yUmVnKTtcbiAgICB9KTtcbiAgICAvL1NlbGYgdmFsdWUgbW9uaXRvclxuICAgIGlmICh0aGlzLmdldE1vZGVsSWQoKSkge1xuICAgICAgdGhpcy5hZGRFcnJvcmVkTW9uaXRvcih0aGlzLmdldE1vZGVsSWQoKSk7XG4gICAgfVxuICB9XG5cbiAgYWRkRXJyb3JlZE1vbml0b3IoaWRPclJlZykge1xuICAgIGlmICh0aGlzLm1vbml0b3JzLmluZGV4T2YoaWRPclJlZykgPCAwKSB7XG4gICAgICB0aGlzLm1vbml0b3JzLnB1c2goaWRPclJlZyk7XG4gICAgfVxuICAgIGlmIChfLmlzUmVnRXhwKGlkT3JSZWcpKSB7XG4gICAgICB0aGlzLnNrTW9kZWwoKS5hZGRSZWdFcnJvcmVkTGlzdGVuZXIoaWRPclJlZywgdGhpcy51cGRhdGVVSSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2tNb2RlbCgpLmFkZElkRXJyb3JlZExpc3RlbmVyKGlkT3JSZWcsIHRoaXMudXBkYXRlVUkpXG4gICAgfVxuICB9XG5cbiAgcm12QWxsRXJyb3JlZE1vbml0b3IoKSB7XG4gICAgdGhpcy5tb25pdG9ycy5mb3JFYWNoKCgkaWRPclJlZykgPT4ge1xuICAgICAgdGhpcy5ybXZFcnJvcmVkTW9uaXRvcigkaWRPclJlZyk7XG4gICAgfSk7XG4gIH1cblxuICBybXZFcnJvcmVkTW9uaXRvcihpZE9yUmVnKSB7XG4gICAgaWYgKF8uaXNSZWdFeHAoaWRPclJlZykpIHtcbiAgICAgIHRoaXMuc2tNb2RlbCgpLnJtdlJlZ0Vycm9yZWRMaXN0ZW5lcihpZE9yUmVnLCB0aGlzLnVwZGF0ZVVJKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5za01vZGVsKCkucm12SWRFcnJvcmVkTGlzdGVuZXIoaWRPclJlZywgdGhpcy51cGRhdGVVSSlcbiAgICB9XG4gICAgdGhpcy5tb25pdG9ycy5za1JtdihpZE9yUmVnKTtcbiAgfVxuXG4gIGhhc1NwZWNpYWxDaGlsZChzcGVjaWFsQ2hpbGROYW1lKSB7XG4gICAgcmV0dXJuIFJlYWN0cy5zb21lKHRoaXMucHJvcHMuY2hpbGRyZW4sIChjaGlsZCwgaWR4KSA9PiB7XG4gICAgICByZXR1cm4gY2hpbGQudHlwZSAmJiBjaGlsZC50eXBlLm5hbWUgPT09IHNwZWNpYWxDaGlsZE5hbWVcbiAgICB9LCB0aGlzKTtcbiAgfVxuXG59XG4iXX0=