'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style2 = require('antd/lib/layout/style');

var _layout = require('antd/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dedupe = require('classnames/dedupe');

var _dedupe2 = _interopRequireDefault(_dedupe);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _skJs2 = _interopRequireDefault(_skJs);

var _Comp2 = require('../../utils/Comp');

var _Comp3 = _interopRequireDefault(_Comp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SKLayout = function (_Comp) {
  _inherits(SKLayout, _Comp);

  function SKLayout() {
    var _ref;

    _classCallCheck(this, SKLayout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = SKLayout.__proto__ || Object.getPrototypeOf(SKLayout)).call.apply(_ref, [this].concat(args)));
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
        _extends({}, this.compValidProps(CompTag), { className: (0, _dedupe2.default)(classes, className) }),
        this.skPropsTrans()
      );
    }
  }]);

  return SKLayout;
}(_Comp3.default);

SKLayout.defaultProps = {
  compTag: _layout2.default
};
SKLayout.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _layout2.default.propTypes, {});
exports.default = SKLayout;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FudGQvU0tMYXlvdXQuanMiXSwibmFtZXMiOlsiU0tMYXlvdXQiLCJhcmdzIiwicHJvcHMiLCJDb21wVGFnIiwiY29tcFRhZyIsImNsYXNzTmFtZSIsImNsYXNzZXMiLCJoYXNTcGVjaWFsQ2hpbGQiLCJjb21wVmFsaWRQcm9wcyIsInNrUHJvcHNUcmFucyIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsImFzc2lnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFE7OztBQU1uQixzQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsMElBQ1ZBLElBRFU7QUFFcEI7Ozs7NkJBRVE7QUFBQSxtQkFDNkIsS0FBS0MsS0FEbEM7QUFBQSxVQUNPQyxPQURQLFVBQ0ZDLE9BREU7QUFBQSxVQUNnQkMsU0FEaEIsVUFDZ0JBLFNBRGhCOzs7QUFHUCxVQUFJQyxVQUFVLEVBQWQ7QUFDQUEsY0FBUSxzQkFBUixJQUFrQyxLQUFLQyxlQUFMLENBQXFCLFNBQXJCLENBQWxDOztBQUVBLGFBQ0U7QUFBQyxlQUFEO0FBQUEscUJBQWEsS0FBS0MsY0FBTCxDQUFvQkwsT0FBcEIsQ0FBYixJQUEyQyxXQUFXLHNCQUFXRyxPQUFYLEVBQW9CRCxTQUFwQixDQUF0RDtBQUNHLGFBQUtJLFlBQUw7QUFESCxPQURGO0FBS0Q7Ozs7OztBQXJCa0JULFEsQ0FDWlUsWSxHQUFlO0FBQ3BCTjtBQURvQixDO0FBREhKLFEsQ0FJWlcsUyxHQUFZLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0QsU0FBbkIsRUFBOEIsaUJBQU9BLFNBQXJDLEVBQWdELEVBQWhELEM7a0JBSkFYLFEiLCJmaWxlIjoiY29tcHMvYW50ZC9TS0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMvZGVkdXBlJztcbmltcG9ydCB7TGF5b3V0fSBmcm9tICdhbnRkJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU0sgZnJvbSAnc2stanMnO1xuaW1wb3J0IENvbXAgZnJvbSAnLi4vLi4vdXRpbHMvQ29tcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLTGF5b3V0IGV4dGVuZHMgQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29tcFRhZzogTGF5b3V0XG4gIH07XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIENvbXAucHJvcFR5cGVzLCBMYXlvdXQucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZywgY2xhc3NOYW1lfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgY2xhc3NlcyA9IHt9O1xuICAgIGNsYXNzZXNbJ2FudC1sYXlvdXQtaGFzLXNpZGVyJ10gPSB0aGlzLmhhc1NwZWNpYWxDaGlsZCgnU0tTaWRlcicpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLmNvbXBWYWxpZFByb3BzKENvbXBUYWcpfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3NlcywgY2xhc3NOYW1lKX0+XG4gICAgICAgIHt0aGlzLnNrUHJvcHNUcmFucygpfVxuICAgICAgPC9Db21wVGFnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==