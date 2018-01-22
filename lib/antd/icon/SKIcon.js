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

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_icon2.default.defaultProps = _skJs.SK.assign({}, {
  spin: false
}, _icon2.default.defaultProps, {});

_icon2.default.propTypes = _skJs.SK.assign({}, {
  //https://ant.design/components/icon-cn/#API
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvaWNvbi9TS0ljb24uanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwic3BpbiIsInByb3BUeXBlcyIsImJvb2wiLCJzdHlsZSIsIm9iamVjdCIsInR5cGUiLCJzdHJpbmciLCJTS0ljb24iLCJhcmdzIiwiY29tcE5hbWUiLCJjb21wVGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxlQUFLQSxZQUFMLEdBQW9CLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDaENDLFFBQU07QUFEMEIsQ0FBZCxFQUVqQixlQUFLRixZQUZZLEVBRUUsRUFGRixDQUFwQjs7QUFJQSxlQUFLRyxTQUFMLEdBQWlCLFNBQUdGLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDN0I7QUFDQUMsUUFBTSxvQkFBVUUsSUFGYTtBQUc3QkMsU0FBTyxvQkFBVUMsTUFIWTtBQUk3QkMsUUFBTSxvQkFBVUM7QUFKYSxDQUFkLEVBS2QsZUFBS0wsU0FMUyxFQUtFLEVBTEYsQ0FBakI7O0lBT3FCTSxNOzs7QUFNbkIsb0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLDJJQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLFFBQWhCO0FBRm1CO0FBR3BCOzs7OztBQVRrQkYsTSxDQUNaVCxZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUMsZUFBS0EsWUFBMUMsRUFBd0Q7QUFDNUVZO0FBRDRFLENBQXhELEM7QUFESEgsTSxDQUlaTixTLEdBQVksU0FBR0YsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0UsU0FBdkIsRUFBa0MsZUFBS0EsU0FBdkMsRUFBa0QsRUFBbEQsQztrQkFKQU0sTSIsImZpbGUiOiJhbnRkL2ljb24vU0tJY29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJY29ufSBmcm9tICdhbnRkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge1NLfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgQW50ZENvbXAgZnJvbSAnLi4vQW50ZENvbXAnO1xuXG5JY29uLmRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwge1xuICBzcGluOiBmYWxzZVxufSwgSWNvbi5kZWZhdWx0UHJvcHMsIHt9KTtcblxuSWNvbi5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIHtcbiAgLy9odHRwczovL2FudC5kZXNpZ24vY29tcG9uZW50cy9pY29uLWNuLyNBUElcbiAgc3BpbjogUHJvcFR5cGVzLmJvb2wsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nXG59LCBJY29uLnByb3BUeXBlcywge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS0ljb24gZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywgSWNvbi5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBJY29uXG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5wcm9wVHlwZXMsIEljb24ucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tJY29uJztcbiAgfVxufVxuIl19