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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvY2FyZC9TS0NhcmQuanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwiYm9yZGVyZWQiLCJob3ZlcmFibGUiLCJsb2FkaW5nIiwicHJvcFR5cGVzIiwiYWN0aW9ucyIsImFycmF5IiwiYm9keVN0eWxlIiwib2JqZWN0IiwiYm9vbCIsImNvdmVyIiwibm9kZSIsImV4dHJhIiwib25lT2ZUeXBlIiwic3RyaW5nIiwidGFiTGlzdCIsImFueSIsInRpdGxlIiwidHlwZSIsIm9uVGFiQ2hhbmdlIiwiZnVuYyIsIlNLQ2FyZCIsImFyZ3MiLCJjb21wTmFtZSIsImNvbXBUYWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsZUFBS0EsWUFBTCxHQUFvQixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjO0FBQ2hDQyxZQUFVLElBRHNCO0FBRWhDQyxhQUFXLEtBRnFCO0FBR2hDQyxXQUFTO0FBSHVCLENBQWQsRUFJakIsZUFBS0osWUFKWSxFQUlFLEVBSkYsQ0FBcEI7O0FBTUEsZUFBS0ssU0FBTCxHQUFpQixTQUFHSixNQUFILENBQVUsRUFBVixFQUFjO0FBQzdCO0FBQ0FLLFdBQVMsb0JBQVVDLEtBRlU7QUFHN0JDLGFBQVcsb0JBQVVDLE1BSFE7QUFJN0JQLFlBQVUsb0JBQVVRLElBSlM7QUFLN0JDLFNBQU8sb0JBQVVDLElBTFk7QUFNN0JDLFNBQU8sb0JBQVVDLFNBQVYsQ0FBb0IsQ0FDekIsb0JBQVVDLE1BRGUsRUFFekIsb0JBQVVILElBRmUsQ0FBcEIsQ0FOc0I7QUFVN0JULGFBQVcsb0JBQVVPLElBVlE7QUFXN0JOLFdBQVMsb0JBQVVNLElBWFU7QUFZN0JNLFdBQVMsb0JBQVVDLEdBWlU7QUFhN0JDLFNBQU8sb0JBQVVKLFNBQVYsQ0FBb0IsQ0FDekIsb0JBQVVDLE1BRGUsRUFFekIsb0JBQVVILElBRmUsQ0FBcEIsQ0Fic0I7QUFpQjdCTyxRQUFNLG9CQUFVSixNQWpCYTtBQWtCN0JLLGVBQWEsb0JBQVVDO0FBbEJNLENBQWQsRUFtQmQsZUFBS2hCLFNBbkJTLEVBbUJFLEVBbkJGLENBQWpCOztJQXFCcUJpQixNOzs7QUFNbkIsb0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLDJJQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLFFBQWhCO0FBRm1CO0FBR3BCOzs7OztBQVRrQkYsTSxDQUNadEIsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNELFlBQXZCLEVBQXFDLGVBQUtBLFlBQTFDLEVBQXdEO0FBQzVFeUI7QUFENEUsQ0FBeEQsQztBQURISCxNLENBSVpqQixTLEdBQVksU0FBR0osTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0ksU0FBdkIsRUFBa0MsZUFBS0EsU0FBdkMsRUFBa0QsRUFBbEQsQztrQkFKQWlCLE0iLCJmaWxlIjoiYW50ZC9jYXJkL1NLQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2FyZH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBbnRkQ29tcCBmcm9tICcuLi9BbnRkQ29tcCc7XG5cbkNhcmQuZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCB7XG4gIGJvcmRlcmVkOiB0cnVlLFxuICBob3ZlcmFibGU6IGZhbHNlLFxuICBsb2FkaW5nOiBmYWxzZVxufSwgQ2FyZC5kZWZhdWx0UHJvcHMsIHt9KTtcblxuQ2FyZC5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIHtcbiAgLy9odHRwczovL2FudC5kZXNpZ24vY29tcG9uZW50cy9jYXJkLWNuLyNDYXJkXG4gIGFjdGlvbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgYm9keVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBib3JkZXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGNvdmVyOiBQcm9wVHlwZXMubm9kZSxcbiAgZXh0cmE6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm5vZGVcbiAgXSksXG4gIGhvdmVyYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICB0YWJMaXN0OiBQcm9wVHlwZXMuYW55LFxuICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubm9kZVxuICBdKSxcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25UYWJDaGFuZ2U6IFByb3BUeXBlcy5mdW5jXG59LCBDYXJkLnByb3BUeXBlcywge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS0NhcmQgZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywgQ2FyZC5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBDYXJkXG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5wcm9wVHlwZXMsIENhcmQucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tDYXJkJztcbiAgfVxufVxuIl19