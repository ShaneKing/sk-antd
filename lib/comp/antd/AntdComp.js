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

var _Comp3 = _interopRequireDefault(_Comp2);

var _Const = require('../../util/Const');

var _Model = require('../../util/Model');

var _Model2 = _interopRequireDefault(_Model);

var _Reacts = require('../../util/Reacts');

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

      _Model2.default.parseSao(this.props.monitor).forEach(function ($idOrReg) {
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
}(_Comp3.default);

AntdComp.SK_PROPS = {
  SIZE: 'size'
};
AntdComp.defaultProps = _skJs.SK.assign({}, _Comp3.default.defaultProps, {});
AntdComp.propTypes = _skJs.SK.assign({}, _Comp3.default.propTypes, {
  size: _propTypes2.default.oneOf(),
  skSize: _propTypes2.default.oneOf(Object.values(_Const.SIZE))
});
exports.default = AntdComp;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9BbnRkQ29tcC5qcyJdLCJuYW1lcyI6WyJBbnRkQ29tcCIsImFyZ3MiLCJjb21wTmFtZSIsImFkZEFsbEVycm9yZWRNb25pdG9yIiwiYWRkRXh0ZW5kRXJyb3JlZE1vbml0b3IiLCJybXZBbGxFcnJvcmVkTW9uaXRvciIsInJtdkV4dGVuZEVycm9yZWRNb25pdG9yIiwicGFyc2VTYW8iLCJwcm9wcyIsIm1vbml0b3IiLCJmb3JFYWNoIiwiJGlkT3JSZWciLCJhZGRFcnJvcmVkTW9uaXRvciIsImdldE1vZGVsSWQiLCJpZE9yUmVnIiwibW9uaXRvcnMiLCJpbmRleE9mIiwicHVzaCIsImlzUmVnRXhwIiwic2tNb2RlbCIsImFkZFJlZ0Vycm9yZWRMaXN0ZW5lciIsInVwZGF0ZVVJIiwiYWRkSWRFcnJvcmVkTGlzdGVuZXIiLCJybXZFcnJvcmVkTW9uaXRvciIsInJtdlJlZ0Vycm9yZWRMaXN0ZW5lciIsInJtdklkRXJyb3JlZExpc3RlbmVyIiwic2tSbXYiLCJzcGVjaWFsQ2hpbGROYW1lIiwic29tZSIsImNoaWxkcmVuIiwiY2hpbGQiLCJpZHgiLCJ0eXBlIiwibmFtZSIsIlNLX1BST1BTIiwiU0laRSIsImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsInByb3BUeXBlcyIsInNpemUiLCJvbmVPZiIsInNrU2l6ZSIsIk9iamVjdCIsInZhbHVlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7SUFJcUJBLFE7OztBQVVuQixzQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsK0lBQ1ZBLElBRFU7O0FBRW5CLFVBQUtDLFFBQUwsR0FBZ0IsVUFBaEI7QUFGbUI7QUFHcEI7Ozs7d0NBRW1CO0FBQ2xCO0FBQ0EsV0FBS0Msb0JBQUw7QUFDQSxXQUFLQyx1QkFBTDtBQUNEOzs7MENBRXFCO0FBQ3BCLFdBQUtDLG9CQUFMO0FBQ0EsV0FBS0MsdUJBQUw7QUFDQTtBQUNEOzs7eUNBRW9CO0FBQ25CO0FBQ0EsV0FBS0gsb0JBQUw7QUFDQSxXQUFLQyx1QkFBTDtBQUNEOzs7MkNBRXNCO0FBQ3JCLFdBQUtDLG9CQUFMO0FBQ0EsV0FBS0MsdUJBQUw7QUFDQTtBQUNEOzs7OENBRXlCLENBQ3pCOzs7OENBRXlCLENBQ3pCOztBQUVEOzs7OzJDQUN1QjtBQUFBOztBQUNyQixzQkFBTUMsUUFBTixDQUFlLEtBQUtDLEtBQUwsQ0FBV0MsT0FBMUIsRUFBbUNDLE9BQW5DLENBQTJDLFVBQUNDLFFBQUQsRUFBYztBQUN2RCxlQUFLQyxpQkFBTCxDQUF1QkQsUUFBdkI7QUFDRCxPQUZEO0FBR0E7QUFDQSxVQUFJLEtBQUtFLFVBQUwsRUFBSixFQUF1QjtBQUNyQixhQUFLRCxpQkFBTCxDQUF1QixLQUFLQyxVQUFMLEVBQXZCO0FBQ0Q7QUFDRjs7O3NDQUVpQkMsTyxFQUFTO0FBQ3pCLFVBQUksS0FBS0MsUUFBTCxDQUFjQyxPQUFkLENBQXNCRixPQUF0QixJQUFpQyxDQUFyQyxFQUF3QztBQUN0QyxhQUFLQyxRQUFMLENBQWNFLElBQWQsQ0FBbUJILE9BQW5CO0FBQ0Q7QUFDRCxVQUFJLGlCQUFFSSxRQUFGLENBQVdKLE9BQVgsQ0FBSixFQUF5QjtBQUN2QixhQUFLSyxPQUFMLEdBQWVDLHFCQUFmLENBQXFDTixPQUFyQyxFQUE4QyxLQUFLTyxRQUFuRDtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUtGLE9BQUwsR0FBZUcsb0JBQWYsQ0FBb0NSLE9BQXBDLEVBQTZDLEtBQUtPLFFBQWxEO0FBQ0Q7QUFDRjs7OzJDQUVzQjtBQUFBOztBQUNyQixXQUFLTixRQUFMLENBQWNMLE9BQWQsQ0FBc0IsVUFBQ0MsUUFBRCxFQUFjO0FBQ2xDLGVBQUtZLGlCQUFMLENBQXVCWixRQUF2QjtBQUNELE9BRkQ7QUFHRDs7O3NDQUVpQkcsTyxFQUFTO0FBQ3pCLFVBQUksaUJBQUVJLFFBQUYsQ0FBV0osT0FBWCxDQUFKLEVBQXlCO0FBQ3ZCLGFBQUtLLE9BQUwsR0FBZUsscUJBQWYsQ0FBcUNWLE9BQXJDLEVBQThDLEtBQUtPLFFBQW5EO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS0YsT0FBTCxHQUFlTSxvQkFBZixDQUFvQ1gsT0FBcEMsRUFBNkMsS0FBS08sUUFBbEQ7QUFDRDtBQUNELFdBQUtOLFFBQUwsQ0FBY1csS0FBZCxDQUFvQlosT0FBcEI7QUFDRDs7O29DQUVlYSxnQixFQUFrQjtBQUNoQyxhQUFPLGlCQUFPQyxJQUFQLENBQVksS0FBS3BCLEtBQUwsQ0FBV3FCLFFBQXZCLEVBQWlDLFVBQUNDLEtBQUQsRUFBUUMsR0FBUixFQUFnQjtBQUN0RCxlQUFPRCxNQUFNRSxJQUFOLElBQWNGLE1BQU1FLElBQU4sQ0FBV0MsSUFBWCxLQUFvQk4sZ0JBQXpDO0FBQ0QsT0FGTSxFQUVKLElBRkksQ0FBUDtBQUdEOzs7Ozs7QUF0RmtCM0IsUSxDQUNaa0MsUSxHQUFXO0FBQ2hCQyxRQUFNO0FBRFUsQztBQURDbkMsUSxDQUlab0MsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0QsWUFBbkIsRUFBaUMsRUFBakMsQztBQUpIcEMsUSxDQUtac0MsUyxHQUFZLFNBQUdELE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0MsU0FBbkIsRUFBOEI7QUFDL0NDLFFBQU0sb0JBQVVDLEtBQVYsRUFEeUM7QUFFL0NDLFVBQVEsb0JBQVVELEtBQVYsQ0FBZ0JFLE9BQU9DLE1BQVAsYUFBaEI7QUFGdUMsQ0FBOUIsQztrQkFMQTNDLFEiLCJmaWxlIjoiY29tcC9hbnRkL0FudGRDb21wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IENvbXAgZnJvbSAnLi4vQ29tcCc7XG5pbXBvcnQge1NJWkV9IGZyb20gJy4uLy4uL3V0aWwvQ29uc3QnO1xuaW1wb3J0IE1vZGVsIGZyb20gJy4uLy4uL3V0aWwvTW9kZWwnO1xuaW1wb3J0IFJlYWN0cyBmcm9tICcuLi8uLi91dGlsL1JlYWN0cyc7XG5cbi8qKlxuICogMS5UaGUgZGVmYXVsdFByb3BzIGFuZCBwcm9wVHlwZXMgb2YgQW50RCBqdXN0IGNhbiBiZSB1c2UgaW4gd3JhcHBlciBDb21wIG9yIG5vbi1Db21wXG4gKiAyLmlmIG9yaWdpbiBleGlzdCwgbXVzdCBiZSB1c2Ugb3JpZ2luXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFudGRDb21wIGV4dGVuZHMgQ29tcCB7XG4gIHN0YXRpYyBTS19QUk9QUyA9IHtcbiAgICBTSVpFOiAnc2l6ZSdcbiAgfTtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgQ29tcC5kZWZhdWx0UHJvcHMsIHt9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQ29tcC5wcm9wVHlwZXMsIHtcbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoKSxcbiAgICBza1NpemU6IFByb3BUeXBlcy5vbmVPZihPYmplY3QudmFsdWVzKFNJWkUpKVxuICB9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdBbnRkQ29tcCc7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBzdXBlci5jb21wb25lbnREaWRNb3VudCgpO1xuICAgIHRoaXMuYWRkQWxsRXJyb3JlZE1vbml0b3IoKTtcbiAgICB0aGlzLmFkZEV4dGVuZEVycm9yZWRNb25pdG9yKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVXBkYXRlKCkge1xuICAgIHRoaXMucm12QWxsRXJyb3JlZE1vbml0b3IoKTtcbiAgICB0aGlzLnJtdkV4dGVuZEVycm9yZWRNb25pdG9yKCk7XG4gICAgc3VwZXIuY29tcG9uZW50V2lsbFVwZGF0ZSgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHN1cGVyLmNvbXBvbmVudERpZFVwZGF0ZSgpO1xuICAgIHRoaXMuYWRkQWxsRXJyb3JlZE1vbml0b3IoKTtcbiAgICB0aGlzLmFkZEV4dGVuZEVycm9yZWRNb25pdG9yKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnJtdkFsbEVycm9yZWRNb25pdG9yKCk7XG4gICAgdGhpcy5ybXZFeHRlbmRFcnJvcmVkTW9uaXRvcigpO1xuICAgIHN1cGVyLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG4gIH1cblxuICBhZGRFeHRlbmRFcnJvcmVkTW9uaXRvcigpIHtcbiAgfVxuXG4gIHJtdkV4dGVuZEVycm9yZWRNb25pdG9yKCkge1xuICB9XG5cbiAgLy9tb25pdG9yIGJlZ2luXG4gIGFkZEFsbEVycm9yZWRNb25pdG9yKCkge1xuICAgIE1vZGVsLnBhcnNlU2FvKHRoaXMucHJvcHMubW9uaXRvcikuZm9yRWFjaCgoJGlkT3JSZWcpID0+IHtcbiAgICAgIHRoaXMuYWRkRXJyb3JlZE1vbml0b3IoJGlkT3JSZWcpO1xuICAgIH0pO1xuICAgIC8vU2VsZiB2YWx1ZSBtb25pdG9yXG4gICAgaWYgKHRoaXMuZ2V0TW9kZWxJZCgpKSB7XG4gICAgICB0aGlzLmFkZEVycm9yZWRNb25pdG9yKHRoaXMuZ2V0TW9kZWxJZCgpKTtcbiAgICB9XG4gIH1cblxuICBhZGRFcnJvcmVkTW9uaXRvcihpZE9yUmVnKSB7XG4gICAgaWYgKHRoaXMubW9uaXRvcnMuaW5kZXhPZihpZE9yUmVnKSA8IDApIHtcbiAgICAgIHRoaXMubW9uaXRvcnMucHVzaChpZE9yUmVnKTtcbiAgICB9XG4gICAgaWYgKF8uaXNSZWdFeHAoaWRPclJlZykpIHtcbiAgICAgIHRoaXMuc2tNb2RlbCgpLmFkZFJlZ0Vycm9yZWRMaXN0ZW5lcihpZE9yUmVnLCB0aGlzLnVwZGF0ZVVJKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5za01vZGVsKCkuYWRkSWRFcnJvcmVkTGlzdGVuZXIoaWRPclJlZywgdGhpcy51cGRhdGVVSSlcbiAgICB9XG4gIH1cblxuICBybXZBbGxFcnJvcmVkTW9uaXRvcigpIHtcbiAgICB0aGlzLm1vbml0b3JzLmZvckVhY2goKCRpZE9yUmVnKSA9PiB7XG4gICAgICB0aGlzLnJtdkVycm9yZWRNb25pdG9yKCRpZE9yUmVnKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJtdkVycm9yZWRNb25pdG9yKGlkT3JSZWcpIHtcbiAgICBpZiAoXy5pc1JlZ0V4cChpZE9yUmVnKSkge1xuICAgICAgdGhpcy5za01vZGVsKCkucm12UmVnRXJyb3JlZExpc3RlbmVyKGlkT3JSZWcsIHRoaXMudXBkYXRlVUkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNrTW9kZWwoKS5ybXZJZEVycm9yZWRMaXN0ZW5lcihpZE9yUmVnLCB0aGlzLnVwZGF0ZVVJKVxuICAgIH1cbiAgICB0aGlzLm1vbml0b3JzLnNrUm12KGlkT3JSZWcpO1xuICB9XG5cbiAgaGFzU3BlY2lhbENoaWxkKHNwZWNpYWxDaGlsZE5hbWUpIHtcbiAgICByZXR1cm4gUmVhY3RzLnNvbWUodGhpcy5wcm9wcy5jaGlsZHJlbiwgKGNoaWxkLCBpZHgpID0+IHtcbiAgICAgIHJldHVybiBjaGlsZC50eXBlICYmIGNoaWxkLnR5cGUubmFtZSA9PT0gc3BlY2lhbENoaWxkTmFtZVxuICAgIH0sIHRoaXMpO1xuICB9XG5cbn1cbiJdfQ==