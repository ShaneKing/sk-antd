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
      return _Reacts2.default.some(this.props.children, function (child) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvQW50ZENvbXAuanMiXSwibmFtZXMiOlsiQW50ZENvbXAiLCJhcmdzIiwiY29tcE5hbWUiLCJhZGRBbGxFcnJvcmVkTW9uaXRvciIsImFkZEV4dGVuZEVycm9yZWRNb25pdG9yIiwicm12QWxsRXJyb3JlZE1vbml0b3IiLCJybXZFeHRlbmRFcnJvcmVkTW9uaXRvciIsInBhcnNlU2FvIiwicHJvcHMiLCJtb25pdG9yIiwiZm9yRWFjaCIsIiRpZE9yUmVnIiwiYWRkRXJyb3JlZE1vbml0b3IiLCJnZXRNb2RlbElkIiwiaWRPclJlZyIsIm1vbml0b3JzIiwiaW5kZXhPZiIsInB1c2giLCJpc1JlZ0V4cCIsInNrTW9kZWwiLCJhZGRSZWdFcnJvcmVkTGlzdGVuZXIiLCJ1cGRhdGVVSSIsImFkZElkRXJyb3JlZExpc3RlbmVyIiwicm12RXJyb3JlZE1vbml0b3IiLCJybXZSZWdFcnJvcmVkTGlzdGVuZXIiLCJybXZJZEVycm9yZWRMaXN0ZW5lciIsInNrUm12Iiwic3BlY2lhbENoaWxkTmFtZSIsInNvbWUiLCJjaGlsZHJlbiIsImNoaWxkIiwidHlwZSIsIm5hbWUiLCJTS19QUk9QUyIsIlNJWkUiLCJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJwcm9wVHlwZXMiLCJzaXplIiwib25lT2YiLCJPYmplY3QiLCJ2YWx1ZXMiLCJza1NpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7O0lBSXFCQSxROzs7QUFVbkIsc0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLCtJQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLFVBQWhCO0FBRm1CO0FBR3BCOzs7O3dDQUVtQjtBQUNsQjtBQUNBLFdBQUtDLG9CQUFMO0FBQ0EsV0FBS0MsdUJBQUw7QUFDRDs7OzBDQUVxQjtBQUNwQixXQUFLQyxvQkFBTDtBQUNBLFdBQUtDLHVCQUFMO0FBQ0E7QUFDRDs7O3lDQUVvQjtBQUNuQjtBQUNBLFdBQUtILG9CQUFMO0FBQ0EsV0FBS0MsdUJBQUw7QUFDRDs7OzJDQUVzQjtBQUNyQixXQUFLQyxvQkFBTDtBQUNBLFdBQUtDLHVCQUFMO0FBQ0E7QUFDRDs7OzhDQUV5QixDQUN6Qjs7OzhDQUV5QixDQUN6Qjs7QUFFRDs7OzsyQ0FDdUI7QUFBQTs7QUFDckIsa0JBQU1DLFFBQU4sQ0FBZSxLQUFLQyxLQUFMLENBQVdDLE9BQTFCLEVBQW1DQyxPQUFuQyxDQUEyQyxVQUFDQyxRQUFELEVBQWM7QUFDdkQsZUFBS0MsaUJBQUwsQ0FBdUJELFFBQXZCO0FBQ0QsT0FGRDtBQUdBO0FBQ0EsVUFBSSxLQUFLRSxVQUFMLEVBQUosRUFBdUI7QUFDckIsYUFBS0QsaUJBQUwsQ0FBdUIsS0FBS0MsVUFBTCxFQUF2QjtBQUNEO0FBQ0Y7OztzQ0FFaUJDLE8sRUFBUztBQUN6QixVQUFJLEtBQUtDLFFBQUwsQ0FBY0MsT0FBZCxDQUFzQkYsT0FBdEIsSUFBaUMsQ0FBckMsRUFBd0M7QUFDdEMsYUFBS0MsUUFBTCxDQUFjRSxJQUFkLENBQW1CSCxPQUFuQjtBQUNEO0FBQ0QsVUFBSSxpQkFBRUksUUFBRixDQUFXSixPQUFYLENBQUosRUFBeUI7QUFDdkIsYUFBS0ssT0FBTCxHQUFlQyxxQkFBZixDQUFxQ04sT0FBckMsRUFBOEMsS0FBS08sUUFBbkQ7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLRixPQUFMLEdBQWVHLG9CQUFmLENBQW9DUixPQUFwQyxFQUE2QyxLQUFLTyxRQUFsRDtBQUNEO0FBQ0Y7OzsyQ0FFc0I7QUFBQTs7QUFDckIsV0FBS04sUUFBTCxDQUFjTCxPQUFkLENBQXNCLFVBQUNDLFFBQUQsRUFBYztBQUNsQyxlQUFLWSxpQkFBTCxDQUF1QlosUUFBdkI7QUFDRCxPQUZEO0FBR0Q7OztzQ0FFaUJHLE8sRUFBUztBQUN6QixVQUFJLGlCQUFFSSxRQUFGLENBQVdKLE9BQVgsQ0FBSixFQUF5QjtBQUN2QixhQUFLSyxPQUFMLEdBQWVLLHFCQUFmLENBQXFDVixPQUFyQyxFQUE4QyxLQUFLTyxRQUFuRDtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUtGLE9BQUwsR0FBZU0sb0JBQWYsQ0FBb0NYLE9BQXBDLEVBQTZDLEtBQUtPLFFBQWxEO0FBQ0Q7QUFDRCxXQUFLTixRQUFMLENBQWNXLEtBQWQsQ0FBb0JaLE9BQXBCO0FBQ0Q7OztvQ0FFZWEsZ0IsRUFBa0I7QUFDaEMsYUFBTyxpQkFBT0MsSUFBUCxDQUFZLEtBQUtwQixLQUFMLENBQVdxQixRQUF2QixFQUFpQyxVQUFDQyxLQUFELEVBQVc7QUFDakQsZUFBT0EsTUFBTUMsSUFBTixJQUFjRCxNQUFNQyxJQUFOLENBQVdDLElBQVgsS0FBb0JMLGdCQUF6QztBQUNELE9BRk0sRUFFSixJQUZJLENBQVA7QUFHRDs7Ozs7O0FBdEZrQjNCLFEsQ0FDWmlDLFEsR0FBVztBQUNoQkMsUUFBTTtBQURVLEM7QUFEQ2xDLFEsQ0FJWm1DLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLFlBQUtELFlBQW5CLEVBQWlDLEVBQWpDLEM7QUFKSG5DLFEsQ0FLWnFDLFMsR0FBWSxTQUFHRCxNQUFILENBQVUsRUFBVixFQUFjLFlBQUtDLFNBQW5CLEVBQThCO0FBQy9DQyxRQUFNLG9CQUFVQyxLQUFWLENBQWdCQyxPQUFPQyxNQUFQLGFBQWhCLENBRHlDO0FBRS9DQyxVQUFRLG9CQUFVSCxLQUFWLENBQWdCQyxPQUFPQyxNQUFQLGFBQWhCO0FBRnVDLENBQTlCLEM7a0JBTEF6QyxRIiwiZmlsZSI6ImFudGQvQW50ZENvbXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFNLLCBNb2RlbCB9IGZyb20gJ3NrLWpzJztcbmltcG9ydCB7IENvbXAgfSBmcm9tICcuLi9Db21wJztcbmltcG9ydCB7IFNJWkUgfSBmcm9tICcuLi9Db25zdCc7XG5pbXBvcnQgUmVhY3RzIGZyb20gJy4uL1JlYWN0cyc7XG5cbi8qKlxuICogMS5UaGUgZGVmYXVsdFByb3BzIGFuZCBwcm9wVHlwZXMgb2YgQW50RCBqdXN0IGNhbiBiZSB1c2UgaW4gd3JhcHBlciBDb21wIG9yIG5vbi1Db21wXG4gKiAyLmlmIG9yaWdpbiBleGlzdCwgbXVzdCBiZSB1c2Ugb3JpZ2luXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFudGRDb21wIGV4dGVuZHMgQ29tcCB7XG4gIHN0YXRpYyBTS19QUk9QUyA9IHtcbiAgICBTSVpFOiAnc2l6ZScsXG4gIH07XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIENvbXAuZGVmYXVsdFByb3BzLCB7fSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIENvbXAucHJvcFR5cGVzLCB7XG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKE9iamVjdC52YWx1ZXMoU0laRSkpLFxuICAgIHNrU2l6ZTogUHJvcFR5cGVzLm9uZU9mKE9iamVjdC52YWx1ZXMoU0laRSkpLFxuICB9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdBbnRkQ29tcCc7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBzdXBlci5jb21wb25lbnREaWRNb3VudCgpO1xuICAgIHRoaXMuYWRkQWxsRXJyb3JlZE1vbml0b3IoKTtcbiAgICB0aGlzLmFkZEV4dGVuZEVycm9yZWRNb25pdG9yKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVXBkYXRlKCkge1xuICAgIHRoaXMucm12QWxsRXJyb3JlZE1vbml0b3IoKTtcbiAgICB0aGlzLnJtdkV4dGVuZEVycm9yZWRNb25pdG9yKCk7XG4gICAgc3VwZXIuY29tcG9uZW50V2lsbFVwZGF0ZSgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHN1cGVyLmNvbXBvbmVudERpZFVwZGF0ZSgpO1xuICAgIHRoaXMuYWRkQWxsRXJyb3JlZE1vbml0b3IoKTtcbiAgICB0aGlzLmFkZEV4dGVuZEVycm9yZWRNb25pdG9yKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnJtdkFsbEVycm9yZWRNb25pdG9yKCk7XG4gICAgdGhpcy5ybXZFeHRlbmRFcnJvcmVkTW9uaXRvcigpO1xuICAgIHN1cGVyLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG4gIH1cblxuICBhZGRFeHRlbmRFcnJvcmVkTW9uaXRvcigpIHtcbiAgfVxuXG4gIHJtdkV4dGVuZEVycm9yZWRNb25pdG9yKCkge1xuICB9XG5cbiAgLy9tb25pdG9yIGJlZ2luXG4gIGFkZEFsbEVycm9yZWRNb25pdG9yKCkge1xuICAgIE1vZGVsLnBhcnNlU2FvKHRoaXMucHJvcHMubW9uaXRvcikuZm9yRWFjaCgoJGlkT3JSZWcpID0+IHtcbiAgICAgIHRoaXMuYWRkRXJyb3JlZE1vbml0b3IoJGlkT3JSZWcpO1xuICAgIH0pO1xuICAgIC8vU2VsZiB2YWx1ZSBtb25pdG9yXG4gICAgaWYgKHRoaXMuZ2V0TW9kZWxJZCgpKSB7XG4gICAgICB0aGlzLmFkZEVycm9yZWRNb25pdG9yKHRoaXMuZ2V0TW9kZWxJZCgpKTtcbiAgICB9XG4gIH1cblxuICBhZGRFcnJvcmVkTW9uaXRvcihpZE9yUmVnKSB7XG4gICAgaWYgKHRoaXMubW9uaXRvcnMuaW5kZXhPZihpZE9yUmVnKSA8IDApIHtcbiAgICAgIHRoaXMubW9uaXRvcnMucHVzaChpZE9yUmVnKTtcbiAgICB9XG4gICAgaWYgKF8uaXNSZWdFeHAoaWRPclJlZykpIHtcbiAgICAgIHRoaXMuc2tNb2RlbCgpLmFkZFJlZ0Vycm9yZWRMaXN0ZW5lcihpZE9yUmVnLCB0aGlzLnVwZGF0ZVVJKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5za01vZGVsKCkuYWRkSWRFcnJvcmVkTGlzdGVuZXIoaWRPclJlZywgdGhpcy51cGRhdGVVSSk7XG4gICAgfVxuICB9XG5cbiAgcm12QWxsRXJyb3JlZE1vbml0b3IoKSB7XG4gICAgdGhpcy5tb25pdG9ycy5mb3JFYWNoKCgkaWRPclJlZykgPT4ge1xuICAgICAgdGhpcy5ybXZFcnJvcmVkTW9uaXRvcigkaWRPclJlZyk7XG4gICAgfSk7XG4gIH1cblxuICBybXZFcnJvcmVkTW9uaXRvcihpZE9yUmVnKSB7XG4gICAgaWYgKF8uaXNSZWdFeHAoaWRPclJlZykpIHtcbiAgICAgIHRoaXMuc2tNb2RlbCgpLnJtdlJlZ0Vycm9yZWRMaXN0ZW5lcihpZE9yUmVnLCB0aGlzLnVwZGF0ZVVJKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5za01vZGVsKCkucm12SWRFcnJvcmVkTGlzdGVuZXIoaWRPclJlZywgdGhpcy51cGRhdGVVSSk7XG4gICAgfVxuICAgIHRoaXMubW9uaXRvcnMuc2tSbXYoaWRPclJlZyk7XG4gIH1cblxuICBoYXNTcGVjaWFsQ2hpbGQoc3BlY2lhbENoaWxkTmFtZSkge1xuICAgIHJldHVybiBSZWFjdHMuc29tZSh0aGlzLnByb3BzLmNoaWxkcmVuLCAoY2hpbGQpID0+IHtcbiAgICAgIHJldHVybiBjaGlsZC50eXBlICYmIGNoaWxkLnR5cGUubmFtZSA9PT0gc3BlY2lhbENoaWxkTmFtZTtcbiAgICB9LCB0aGlzKTtcbiAgfVxufVxuIl19