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

var _Comp2 = require('../../util/Comp');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS0xheW91dC5qcyJdLCJuYW1lcyI6WyJTS0xheW91dCIsImFyZ3MiLCJwcm9wcyIsIkNvbXBUYWciLCJjb21wVGFnIiwiY2xhc3NOYW1lIiwiY2xhc3NlcyIsImhhc1NwZWNpYWxDaGlsZCIsImNvbXBWYWxpZFByb3BzIiwic2tQcm9wc1RyYW5zIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7O0FBTW5CLHNCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSwwSUFDVkEsSUFEVTtBQUVwQjs7Ozs2QkFFUTtBQUFBLG1CQUM2QixLQUFLQyxLQURsQztBQUFBLFVBQ09DLE9BRFAsVUFDRkMsT0FERTtBQUFBLFVBQ2dCQyxTQURoQixVQUNnQkEsU0FEaEI7OztBQUdQLFVBQUlDLFVBQVUsRUFBZDtBQUNBQSxjQUFRLHNCQUFSLElBQWtDLEtBQUtDLGVBQUwsQ0FBcUIsU0FBckIsQ0FBbEM7O0FBRUEsYUFDRTtBQUFDLGVBQUQ7QUFBQSxxQkFBYSxLQUFLQyxjQUFMLENBQW9CTCxPQUFwQixDQUFiLElBQTJDLFdBQVcsc0JBQVdHLE9BQVgsRUFBb0JELFNBQXBCLENBQXREO0FBQ0csYUFBS0ksWUFBTDtBQURILE9BREY7QUFLRDs7Ozs7O0FBckJrQlQsUSxDQUNaVSxZLEdBQWU7QUFDcEJOO0FBRG9CLEM7QUFESEosUSxDQUlaVyxTLEdBQVksZUFBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxlQUFLRCxTQUFuQixFQUE4QixpQkFBT0EsU0FBckMsRUFBZ0QsRUFBaEQsQztrQkFKQVgsUSIsImZpbGUiOiJjb21wL2FudGQvU0tMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzL2RlZHVwZSc7XG5pbXBvcnQge0xheW91dH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNLIGZyb20gJ3NrLWpzJztcbmltcG9ydCBDb21wIGZyb20gJy4uLy4uL3V0aWwvQ29tcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLTGF5b3V0IGV4dGVuZHMgQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29tcFRhZzogTGF5b3V0XG4gIH07XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIENvbXAucHJvcFR5cGVzLCBMYXlvdXQucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZywgY2xhc3NOYW1lfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgY2xhc3NlcyA9IHt9O1xuICAgIGNsYXNzZXNbJ2FudC1sYXlvdXQtaGFzLXNpZGVyJ10gPSB0aGlzLmhhc1NwZWNpYWxDaGlsZCgnU0tTaWRlcicpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLmNvbXBWYWxpZFByb3BzKENvbXBUYWcpfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3NlcywgY2xhc3NOYW1lKX0+XG4gICAgICAgIHt0aGlzLnNrUHJvcHNUcmFucygpfVxuICAgICAgPC9Db21wVGFnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==