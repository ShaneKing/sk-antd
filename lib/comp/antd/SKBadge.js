'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _badge = require('antd/lib/badge');

var _badge2 = _interopRequireDefault(_badge);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/badge/style');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _AntdComp2 = require('./AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

var _Const = require('../../util/Const');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_badge2.default.defaultProps = _skJs.SK.assign({}, {
  dot: false,
  overflowCount: 99,
  showZero: false
}, _badge2.default.defaultProps, {});

_badge2.default.propTypes = _skJs.SK.assign({}, {
  count: _propTypes2.default.number,
  dot: _propTypes2.default.bool,
  overflowCount: _propTypes2.default.number,
  showZero: _propTypes2.default.bool,
  status: _propTypes2.default.oneOf(Object.values(_Const.STATUS)),
  text: _propTypes2.default.string,
  offset: _propTypes2.default.any
}, _badge2.default.propTypes, {});

var SKBadge = function (_AntdComp) {
  _inherits(SKBadge, _AntdComp);

  function SKBadge() {
    var _ref;

    _classCallCheck(this, SKBadge);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKBadge.__proto__ || Object.getPrototypeOf(SKBadge)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKBadge';
    return _this;
  }

  _createClass(SKBadge, [{
    key: 'render',
    value: function render() {
      var CompTag = this.props.compTag;


      return _react2.default.createElement(
        CompTag,
        _extends({}, this.skTransProps2Self(CompTag), { count: this.skVal() }),
        this.skTransProps2Child()
      );
    }
  }]);

  return SKBadge;
}(_AntdComp3.default);

SKBadge.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _badge2.default.defaultProps, {
  compTag: _badge2.default
});
SKBadge.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _badge2.default.propTypes, {});
exports.default = SKBadge;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS0JhZGdlLmpzIl0sIm5hbWVzIjpbImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsImRvdCIsIm92ZXJmbG93Q291bnQiLCJzaG93WmVybyIsInByb3BUeXBlcyIsImNvdW50IiwibnVtYmVyIiwiYm9vbCIsInN0YXR1cyIsIm9uZU9mIiwiT2JqZWN0IiwidmFsdWVzIiwidGV4dCIsInN0cmluZyIsIm9mZnNldCIsImFueSIsIlNLQmFkZ2UiLCJhcmdzIiwiY29tcE5hbWUiLCJDb21wVGFnIiwicHJvcHMiLCJjb21wVGFnIiwic2tUcmFuc1Byb3BzMlNlbGYiLCJza1ZhbCIsInNrVHJhbnNQcm9wczJDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUEsZ0JBQU1BLFlBQU4sR0FBcUIsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYztBQUNqQ0MsT0FBSyxLQUQ0QjtBQUVqQ0MsaUJBQWUsRUFGa0I7QUFHakNDLFlBQVU7QUFIdUIsQ0FBZCxFQUlsQixnQkFBTUosWUFKWSxFQUlFLEVBSkYsQ0FBckI7O0FBTUEsZ0JBQU1LLFNBQU4sR0FBa0IsU0FBR0osTUFBSCxDQUFVLEVBQVYsRUFBYztBQUM5QkssU0FBTyxvQkFBVUMsTUFEYTtBQUU5QkwsT0FBSyxvQkFBVU0sSUFGZTtBQUc5QkwsaUJBQWUsb0JBQVVJLE1BSEs7QUFJOUJILFlBQVUsb0JBQVVJLElBSlU7QUFLOUJDLFVBQVEsb0JBQVVDLEtBQVYsQ0FBZ0JDLE9BQU9DLE1BQVAsZUFBaEIsQ0FMc0I7QUFNOUJDLFFBQU0sb0JBQVVDLE1BTmM7QUFPOUJDLFVBQVEsb0JBQVVDO0FBUFksQ0FBZCxFQVFmLGdCQUFNWCxTQVJTLEVBUUUsRUFSRixDQUFsQjs7SUFVcUJZLE87OztBQU1uQixxQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsNklBQ1ZBLElBRFU7O0FBRW5CLFVBQUtDLFFBQUwsR0FBZ0IsU0FBaEI7QUFGbUI7QUFHcEI7Ozs7NkJBRVE7QUFBQSxVQUNPQyxPQURQLEdBQ2tCLEtBQUtDLEtBRHZCLENBQ0ZDLE9BREU7OztBQUdQLGFBQ0U7QUFBQyxlQUFEO0FBQUEscUJBQWEsS0FBS0MsaUJBQUwsQ0FBdUJILE9BQXZCLENBQWIsSUFBOEMsT0FBTyxLQUFLSSxLQUFMLEVBQXJEO0FBQ0csYUFBS0Msa0JBQUw7QUFESCxPQURGO0FBS0Q7Ozs7OztBQW5Ca0JSLE8sQ0FDWmpCLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQyxnQkFBTUEsWUFBM0MsRUFBeUQ7QUFDN0VzQjtBQUQ2RSxDQUF6RCxDO0FBREhMLE8sQ0FJWlosUyxHQUFZLFNBQUdKLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNJLFNBQXZCLEVBQWtDLGdCQUFNQSxTQUF4QyxFQUFtRCxFQUFuRCxDO2tCQUpBWSxPIiwiZmlsZSI6ImNvbXAvYW50ZC9TS0JhZGdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCYWRnZX0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBBbnRkQ29tcCBmcm9tICcuL0FudGRDb21wJztcbmltcG9ydCB7U1RBVFVTfSBmcm9tICcuLi8uLi91dGlsL0NvbnN0JztcblxuQmFkZ2UuZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCB7XG4gIGRvdDogZmFsc2UsXG4gIG92ZXJmbG93Q291bnQ6IDk5LFxuICBzaG93WmVybzogZmFsc2Vcbn0sIEJhZGdlLmRlZmF1bHRQcm9wcywge30pO1xuXG5CYWRnZS5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIHtcbiAgY291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGRvdDogUHJvcFR5cGVzLmJvb2wsXG4gIG92ZXJmbG93Q291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIHNob3daZXJvOiBQcm9wVHlwZXMuYm9vbCxcbiAgc3RhdHVzOiBQcm9wVHlwZXMub25lT2YoT2JqZWN0LnZhbHVlcyhTVEFUVVMpKSxcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgb2Zmc2V0OiBQcm9wVHlwZXMuYW55XG59LCBCYWRnZS5wcm9wVHlwZXMsIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tCYWRnZSBleHRlbmRzIEFudGRDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAuZGVmYXVsdFByb3BzLCBCYWRnZS5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBCYWRnZVxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCBCYWRnZS5wcm9wVHlwZXMsIHt9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS0JhZGdlJztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2NvbXBUYWc6IENvbXBUYWd9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihDb21wVGFnKX0gY291bnQ9e3RoaXMuc2tWYWwoKX0+XG4gICAgICAgIHt0aGlzLnNrVHJhbnNQcm9wczJDaGlsZCgpfVxuICAgICAgPC9Db21wVGFnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==