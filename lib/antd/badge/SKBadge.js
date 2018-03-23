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

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

var _Const = require('../../Const');

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
  //https://ant.design/components/badge-cn/#API
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvYmFkZ2UvU0tCYWRnZS5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJkb3QiLCJvdmVyZmxvd0NvdW50Iiwic2hvd1plcm8iLCJwcm9wVHlwZXMiLCJjb3VudCIsIm51bWJlciIsImJvb2wiLCJzdGF0dXMiLCJvbmVPZiIsIk9iamVjdCIsInZhbHVlcyIsInRleHQiLCJzdHJpbmciLCJvZmZzZXQiLCJhbnkiLCJTS0JhZGdlIiwiYXJncyIsImNvbXBOYW1lIiwiQ29tcFRhZyIsInByb3BzIiwiY29tcFRhZyIsInNrVHJhbnNQcm9wczJTZWxmIiwic2tWYWwiLCJza1RyYW5zUHJvcHMyQ2hpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBLGdCQUFNQSxZQUFOLEdBQXFCLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDakNDLE9BQUssS0FENEI7QUFFakNDLGlCQUFlLEVBRmtCO0FBR2pDQyxZQUFVO0FBSHVCLENBQWQsRUFJbEIsZ0JBQU1KLFlBSlksRUFJRSxFQUpGLENBQXJCOztBQU1BLGdCQUFNSyxTQUFOLEdBQWtCLFNBQUdKLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDOUI7QUFDQUssU0FBTyxvQkFBVUMsTUFGYTtBQUc5QkwsT0FBSyxvQkFBVU0sSUFIZTtBQUk5QkwsaUJBQWUsb0JBQVVJLE1BSks7QUFLOUJILFlBQVUsb0JBQVVJLElBTFU7QUFNOUJDLFVBQVEsb0JBQVVDLEtBQVYsQ0FBZ0JDLE9BQU9DLE1BQVAsZUFBaEIsQ0FOc0I7QUFPOUJDLFFBQU0sb0JBQVVDLE1BUGM7QUFROUJDLFVBQVEsb0JBQVVDO0FBUlksQ0FBZCxFQVNmLGdCQUFNWCxTQVRTLEVBU0UsRUFURixDQUFsQjs7SUFXcUJZLE87OztBQU1uQixxQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsNklBQ1ZBLElBRFU7O0FBRW5CLFVBQUtDLFFBQUwsR0FBZ0IsU0FBaEI7QUFGbUI7QUFHcEI7Ozs7NkJBRVE7QUFBQSxVQUNVQyxPQURWLEdBQ3NCLEtBQUtDLEtBRDNCLENBQ0NDLE9BREQ7OztBQUdQLGFBQ0U7QUFBQyxlQUFEO0FBQUEscUJBQWEsS0FBS0MsaUJBQUwsQ0FBdUJILE9BQXZCLENBQWIsSUFBOEMsT0FBTyxLQUFLSSxLQUFMLEVBQXJEO0FBQ0csYUFBS0Msa0JBQUw7QUFESCxPQURGO0FBS0Q7Ozs7OztBQW5Ca0JSLE8sQ0FDWmpCLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQyxnQkFBTUEsWUFBM0MsRUFBeUQ7QUFDN0VzQjtBQUQ2RSxDQUF6RCxDO0FBREhMLE8sQ0FJWlosUyxHQUFZLFNBQUdKLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNJLFNBQXZCLEVBQWtDLGdCQUFNQSxTQUF4QyxFQUFtRCxFQUFuRCxDO2tCQUpBWSxPIiwiZmlsZSI6ImFudGQvYmFkZ2UvU0tCYWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhZGdlIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNLIH0gZnJvbSAnc2stanMnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcbmltcG9ydCB7IFNUQVRVUyB9IGZyb20gJy4uLy4uL0NvbnN0JztcblxuQmFkZ2UuZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCB7XG4gIGRvdDogZmFsc2UsXG4gIG92ZXJmbG93Q291bnQ6IDk5LFxuICBzaG93WmVybzogZmFsc2UsXG59LCBCYWRnZS5kZWZhdWx0UHJvcHMsIHt9KTtcblxuQmFkZ2UucHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCB7XG4gIC8vaHR0cHM6Ly9hbnQuZGVzaWduL2NvbXBvbmVudHMvYmFkZ2UtY24vI0FQSVxuICBjb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgZG90OiBQcm9wVHlwZXMuYm9vbCxcbiAgb3ZlcmZsb3dDb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgc2hvd1plcm86IFByb3BUeXBlcy5ib29sLFxuICBzdGF0dXM6IFByb3BUeXBlcy5vbmVPZihPYmplY3QudmFsdWVzKFNUQVRVUykpLFxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvZmZzZXQ6IFByb3BUeXBlcy5hbnksXG59LCBCYWRnZS5wcm9wVHlwZXMsIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tCYWRnZSBleHRlbmRzIEFudGRDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAuZGVmYXVsdFByb3BzLCBCYWRnZS5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBCYWRnZSxcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLnByb3BUeXBlcywgQmFkZ2UucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tCYWRnZSc7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb21wVGFnOiBDb21wVGFnIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKENvbXBUYWcpfSBjb3VudD17dGhpcy5za1ZhbCgpfT5cbiAgICAgICAge3RoaXMuc2tUcmFuc1Byb3BzMkNoaWxkKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxufVxuIl19