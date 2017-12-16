'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

require('antd/lib/icon/style');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _skJs = require('sk-js');

var _AntdComp2 = require('./AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_icon2.default.defaultProps = _skJs.SK.assign({}, {
  spin: false
}, _icon2.default.defaultProps, {});

_icon2.default.propTypes = _skJs.SK.assign({}, {
  spin: _propTypes2.default.bool,
  style: _propTypes2.default.object,
  type: _propTypes2.default.string
}, _icon2.default.propTypes, {});

var SKIcon = function (_AntdComp) {
  _inherits(SKIcon, _AntdComp);

  function SKIcon() {
    var _ref;

    _classCallCheck(this, SKIcon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKIcon.__proto__ || Object.getPrototypeOf(SKIcon)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKIcon';
    return _this;
  }

  return SKIcon;
}(_AntdComp3.default);

SKIcon.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _icon2.default.defaultProps, {
  compTag: _icon2.default
});
SKIcon.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _icon2.default.propTypes, {});
exports.default = SKIcon;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS0ljb24uanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwic3BpbiIsInByb3BUeXBlcyIsImJvb2wiLCJzdHlsZSIsIm9iamVjdCIsInR5cGUiLCJzdHJpbmciLCJTS0ljb24iLCJhcmdzIiwiY29tcE5hbWUiLCJjb21wVGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxlQUFLQSxZQUFMLEdBQW9CLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDaENDLFFBQU07QUFEMEIsQ0FBZCxFQUVqQixlQUFLRixZQUZZLEVBRUUsRUFGRixDQUFwQjs7QUFJQSxlQUFLRyxTQUFMLEdBQWlCLFNBQUdGLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDN0JDLFFBQU0sb0JBQVVFLElBRGE7QUFFN0JDLFNBQU8sb0JBQVVDLE1BRlk7QUFHN0JDLFFBQU0sb0JBQVVDO0FBSGEsQ0FBZCxFQUlkLGVBQUtMLFNBSlMsRUFJRSxFQUpGLENBQWpCOztJQU1xQk0sTTs7O0FBT25CLG9CQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSwySUFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixRQUFoQjtBQUZtQjtBQUdwQjs7Ozs7QUFWa0JGLE0sQ0FDWlQsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNELFlBQXZCLEVBQXFDLGVBQUtBLFlBQTFDLEVBQXdEO0FBQzVFWTtBQUQ0RSxDQUF4RCxDO0FBREhILE0sQ0FJWk4sUyxHQUFZLFNBQUdGLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNFLFNBQXZCLEVBQWtDLGVBQUtBLFNBQXZDLEVBQWtELEVBQWxELEM7a0JBSkFNLE0iLCJmaWxlIjoiY29tcC9hbnRkL1NLSWNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SWNvbn0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4vQW50ZENvbXAnO1xuXG5JY29uLmRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwge1xuICBzcGluOiBmYWxzZVxufSwgSWNvbi5kZWZhdWx0UHJvcHMsIHt9KTtcblxuSWNvbi5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIHtcbiAgc3BpbjogUHJvcFR5cGVzLmJvb2wsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nXG59LCBJY29uLnByb3BUeXBlcywge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS0ljb24gZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywgSWNvbi5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBJY29uXG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5wcm9wVHlwZXMsIEljb24ucHJvcFR5cGVzLCB7fSk7XG5cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS0ljb24nO1xuICB9XG59XG4iXX0=