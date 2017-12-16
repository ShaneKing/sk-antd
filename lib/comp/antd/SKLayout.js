'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _layout = require('antd/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/layout/style');

var _dedupe = require('classnames/dedupe');

var _dedupe2 = _interopRequireDefault(_dedupe);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _AntdComp2 = require('./AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_layout2.default.COMMON_DEFAULT_PROPS = _skJs.SK.assign({}, {}, {});
_layout2.default.COMMON_PROP_TYPES = _skJs.SK.assign({}, {
  className: _propTypes2.default.string,
  style: _propTypes2.default.object
}, {});

_layout2.default.defaultProps = _skJs.SK.assign({}, {}, _layout2.default.COMMON_DEFAULT_PROPS, _layout2.default.defaultProps, {});
_layout2.default.propTypes = _skJs.SK.assign({}, {}, _layout2.default.COMMON_PROP_TYPES, _layout2.default.propTypes, {});

var SKLayout = function (_AntdComp) {
  _inherits(SKLayout, _AntdComp);

  function SKLayout() {
    var _ref;

    _classCallCheck(this, SKLayout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKLayout.__proto__ || Object.getPrototypeOf(SKLayout)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKLayout';
    return _this;
  }

  _createClass(SKLayout, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          CompTag = _props.compTag,
          className = _props.className;


      var classes = {};
      classes['ant-layout-has-sider'] = this.hasSpecialChild('SKSider');

      return _react2.default.createElement(
        CompTag,
        _extends({}, this.skTransProps2Self(CompTag), { className: (0, _dedupe2.default)(classes, className) }),
        this.skTransProps2Child()
      );
    }
  }]);

  return SKLayout;
}(_AntdComp3.default);

SKLayout.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _layout2.default.defaultProps, {
  compTag: _layout2.default
});
SKLayout.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _layout2.default.propTypes, {});
exports.default = SKLayout;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS0xheW91dC5qcyJdLCJuYW1lcyI6WyJDT01NT05fREVGQVVMVF9QUk9QUyIsImFzc2lnbiIsIkNPTU1PTl9QUk9QX1RZUEVTIiwiY2xhc3NOYW1lIiwic3RyaW5nIiwic3R5bGUiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJTS0xheW91dCIsImFyZ3MiLCJjb21wTmFtZSIsInByb3BzIiwiQ29tcFRhZyIsImNvbXBUYWciLCJjbGFzc2VzIiwiaGFzU3BlY2lhbENoaWxkIiwic2tUcmFuc1Byb3BzMlNlbGYiLCJza1RyYW5zUHJvcHMyQ2hpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsaUJBQU9BLG9CQUFQLEdBQThCLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsRUFBZCxFQUFrQixFQUFsQixDQUE5QjtBQUNBLGlCQUFPQyxpQkFBUCxHQUEyQixTQUFHRCxNQUFILENBQVUsRUFBVixFQUFjO0FBQ3ZDRSxhQUFXLG9CQUFVQyxNQURrQjtBQUV2Q0MsU0FBTyxvQkFBVUM7QUFGc0IsQ0FBZCxFQUd4QixFQUh3QixDQUEzQjs7QUFLQSxpQkFBT0MsWUFBUCxHQUFzQixTQUFHTixNQUFILENBQVUsRUFBVixFQUFjLEVBQWQsRUFBa0IsaUJBQU9ELG9CQUF6QixFQUErQyxpQkFBT08sWUFBdEQsRUFBb0UsRUFBcEUsQ0FBdEI7QUFDQSxpQkFBT0MsU0FBUCxHQUFtQixTQUFHUCxNQUFILENBQVUsRUFBVixFQUFjLEVBQWQsRUFBa0IsaUJBQU9DLGlCQUF6QixFQUE0QyxpQkFBT00sU0FBbkQsRUFBOEQsRUFBOUQsQ0FBbkI7O0lBRXFCQyxROzs7QUFPbkIsc0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLCtJQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLFVBQWhCO0FBRm1CO0FBR3BCOzs7OzZCQUVRO0FBQUEsbUJBQzZCLEtBQUtDLEtBRGxDO0FBQUEsVUFDT0MsT0FEUCxVQUNGQyxPQURFO0FBQUEsVUFDZ0JYLFNBRGhCLFVBQ2dCQSxTQURoQjs7O0FBR1AsVUFBSVksVUFBVSxFQUFkO0FBQ0FBLGNBQVEsc0JBQVIsSUFBa0MsS0FBS0MsZUFBTCxDQUFxQixTQUFyQixDQUFsQzs7QUFFQSxhQUNFO0FBQUMsZUFBRDtBQUFBLHFCQUFhLEtBQUtDLGlCQUFMLENBQXVCSixPQUF2QixDQUFiLElBQThDLFdBQVcsc0JBQVdFLE9BQVgsRUFBb0JaLFNBQXBCLENBQXpEO0FBQ0csYUFBS2Usa0JBQUw7QUFESCxPQURGO0FBS0Q7Ozs7OztBQXZCa0JULFEsQ0FDWkYsWSxHQUFlLFNBQUdOLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNNLFlBQXZCLEVBQXFDLGlCQUFPQSxZQUE1QyxFQUEwRDtBQUM5RU87QUFEOEUsQ0FBMUQsQztBQURITCxRLENBSVpELFMsR0FBWSxTQUFHUCxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTTyxTQUF2QixFQUFrQyxpQkFBT0EsU0FBekMsRUFBb0QsRUFBcEQsQztrQkFKQUMsUSIsImZpbGUiOiJjb21wL2FudGQvU0tMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xheW91dH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzL2RlZHVwZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBBbnRkQ29tcCBmcm9tICcuL0FudGRDb21wJztcblxuTGF5b3V0LkNPTU1PTl9ERUZBVUxUX1BST1BTID0gU0suYXNzaWduKHt9LCB7fSwge30pO1xuTGF5b3V0LkNPTU1PTl9QUk9QX1RZUEVTID0gU0suYXNzaWduKHt9LCB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3Rcbn0sIHt9KTtcblxuTGF5b3V0LmRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwge30sIExheW91dC5DT01NT05fREVGQVVMVF9QUk9QUywgTGF5b3V0LmRlZmF1bHRQcm9wcywge30pO1xuTGF5b3V0LnByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwge30sIExheW91dC5DT01NT05fUFJPUF9UWVBFUywgTGF5b3V0LnByb3BUeXBlcywge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS0xheW91dCBleHRlbmRzIEFudGRDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAuZGVmYXVsdFByb3BzLCBMYXlvdXQuZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogTGF5b3V0XG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5wcm9wVHlwZXMsIExheW91dC5wcm9wVHlwZXMsIHt9KTtcblxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ1NLTGF5b3V0JztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2NvbXBUYWc6IENvbXBUYWcsIGNsYXNzTmFtZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGV0IGNsYXNzZXMgPSB7fTtcbiAgICBjbGFzc2VzWydhbnQtbGF5b3V0LWhhcy1zaWRlciddID0gdGhpcy5oYXNTcGVjaWFsQ2hpbGQoJ1NLU2lkZXInKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihDb21wVGFnKX0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzZXMsIGNsYXNzTmFtZSl9PlxuICAgICAgICB7dGhpcy5za1RyYW5zUHJvcHMyQ2hpbGQoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG59XG4iXX0=