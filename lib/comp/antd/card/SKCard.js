'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _card = require('antd/lib/card');

var _card2 = _interopRequireDefault(_card);

require('antd/lib/card/style');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _skJs = require('sk-js');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_card2.default.defaultProps = _skJs.SK.assign({}, {
  bordered: true,
  hoverable: false,
  loading: false
}, _card2.default.defaultProps, {});

_card2.default.propTypes = _skJs.SK.assign({}, {
  //https://ant.design/components/card-cn/#Card
  actions: _propTypes2.default.array,
  bodyStyle: _propTypes2.default.object,
  bordered: _propTypes2.default.bool,
  cover: _propTypes2.default.node,
  extra: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  hoverable: _propTypes2.default.bool,
  loading: _propTypes2.default.bool,
  tabList: _propTypes2.default.any,
  title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  type: _propTypes2.default.string,
  onTabChange: _propTypes2.default.func
}, _card2.default.propTypes, {});

var SKCard = function (_AntdComp) {
  _inherits(SKCard, _AntdComp);

  function SKCard() {
    var _ref;

    _classCallCheck(this, SKCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKCard.__proto__ || Object.getPrototypeOf(SKCard)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKCard';
    return _this;
  }

  return SKCard;
}(_AntdComp3.default);

SKCard.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _card2.default.defaultProps, {
  compTag: _card2.default
});
SKCard.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _card2.default.propTypes, {});
exports.default = SKCard;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9jYXJkL1NLQ2FyZC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJib3JkZXJlZCIsImhvdmVyYWJsZSIsImxvYWRpbmciLCJwcm9wVHlwZXMiLCJhY3Rpb25zIiwiYXJyYXkiLCJib2R5U3R5bGUiLCJvYmplY3QiLCJib29sIiwiY292ZXIiLCJub2RlIiwiZXh0cmEiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJ0YWJMaXN0IiwiYW55IiwidGl0bGUiLCJ0eXBlIiwib25UYWJDaGFuZ2UiLCJmdW5jIiwiU0tDYXJkIiwiYXJncyIsImNvbXBOYW1lIiwiY29tcFRhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxlQUFLQSxZQUFMLEdBQW9CLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDaENDLFlBQVUsSUFEc0I7QUFFaENDLGFBQVcsS0FGcUI7QUFHaENDLFdBQVM7QUFIdUIsQ0FBZCxFQUlqQixlQUFLSixZQUpZLEVBSUUsRUFKRixDQUFwQjs7QUFNQSxlQUFLSyxTQUFMLEdBQWlCLFNBQUdKLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDN0I7QUFDQUssV0FBUyxvQkFBVUMsS0FGVTtBQUc3QkMsYUFBVyxvQkFBVUMsTUFIUTtBQUk3QlAsWUFBVSxvQkFBVVEsSUFKUztBQUs3QkMsU0FBTyxvQkFBVUMsSUFMWTtBQU03QkMsU0FBTyxvQkFBVUMsU0FBVixDQUFvQixDQUN6QixvQkFBVUMsTUFEZSxFQUV6QixvQkFBVUgsSUFGZSxDQUFwQixDQU5zQjtBQVU3QlQsYUFBVyxvQkFBVU8sSUFWUTtBQVc3Qk4sV0FBUyxvQkFBVU0sSUFYVTtBQVk3Qk0sV0FBUyxvQkFBVUMsR0FaVTtBQWE3QkMsU0FBTyxvQkFBVUosU0FBVixDQUFvQixDQUN6QixvQkFBVUMsTUFEZSxFQUV6QixvQkFBVUgsSUFGZSxDQUFwQixDQWJzQjtBQWlCN0JPLFFBQU0sb0JBQVVKLE1BakJhO0FBa0I3QkssZUFBYSxvQkFBVUM7QUFsQk0sQ0FBZCxFQW1CZCxlQUFLaEIsU0FuQlMsRUFtQkUsRUFuQkYsQ0FBakI7O0lBcUJxQmlCLE07OztBQU1uQixvQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsMklBQ1ZBLElBRFU7O0FBRW5CLFVBQUtDLFFBQUwsR0FBZ0IsUUFBaEI7QUFGbUI7QUFHcEI7Ozs7O0FBVGtCRixNLENBQ1p0QixZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUMsZUFBS0EsWUFBMUMsRUFBd0Q7QUFDNUV5QjtBQUQ0RSxDQUF4RCxDO0FBREhILE0sQ0FJWmpCLFMsR0FBWSxTQUFHSixNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTSSxTQUF2QixFQUFrQyxlQUFLQSxTQUF2QyxFQUFrRCxFQUFsRCxDO2tCQUpBaUIsTSIsImZpbGUiOiJjb21wL2FudGQvY2FyZC9TS0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NhcmR9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQW50ZENvbXAgZnJvbSAnLi4vQW50ZENvbXAnO1xuXG5DYXJkLmRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwge1xuICBib3JkZXJlZDogdHJ1ZSxcbiAgaG92ZXJhYmxlOiBmYWxzZSxcbiAgbG9hZGluZzogZmFsc2Vcbn0sIENhcmQuZGVmYXVsdFByb3BzLCB7fSk7XG5cbkNhcmQucHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCB7XG4gIC8vaHR0cHM6Ly9hbnQuZGVzaWduL2NvbXBvbmVudHMvY2FyZC1jbi8jQ2FyZFxuICBhY3Rpb25zOiBQcm9wVHlwZXMuYXJyYXksXG4gIGJvZHlTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgYm9yZGVyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBjb3ZlcjogUHJvcFR5cGVzLm5vZGUsXG4gIGV4dHJhOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5ub2RlXG4gIF0pLFxuICBob3ZlcmFibGU6IFByb3BUeXBlcy5ib29sLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgdGFiTGlzdDogUHJvcFR5cGVzLmFueSxcbiAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm5vZGVcbiAgXSksXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uVGFiQ2hhbmdlOiBQcm9wVHlwZXMuZnVuY1xufSwgQ2FyZC5wcm9wVHlwZXMsIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tDYXJkIGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5kZWZhdWx0UHJvcHMsIENhcmQuZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogQ2FyZFxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCBDYXJkLnByb3BUeXBlcywge30pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ1NLQ2FyZCc7XG4gIH1cbn1cbiJdfQ==