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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvY2FyZC9TS0NhcmQuanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwiYm9yZGVyZWQiLCJob3ZlcmFibGUiLCJsb2FkaW5nIiwicHJvcFR5cGVzIiwiYWN0aW9ucyIsImFycmF5IiwiYm9keVN0eWxlIiwib2JqZWN0IiwiYm9vbCIsImNvdmVyIiwibm9kZSIsImV4dHJhIiwib25lT2ZUeXBlIiwic3RyaW5nIiwidGFiTGlzdCIsImFueSIsInRpdGxlIiwidHlwZSIsIm9uVGFiQ2hhbmdlIiwiZnVuYyIsIlNLQ2FyZCIsImFyZ3MiLCJjb21wTmFtZSIsImNvbXBUYWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLGVBQUtBLFlBQUwsR0FBb0IsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYztBQUNoQ0MsWUFBVSxJQURzQjtBQUVoQ0MsYUFBVyxLQUZxQjtBQUdoQ0MsV0FBUztBQUh1QixDQUFkLEVBSWpCLGVBQUtKLFlBSlksRUFJRSxFQUpGLENBQXBCOztBQU1BLGVBQUtLLFNBQUwsR0FBaUIsU0FBR0osTUFBSCxDQUFVLEVBQVYsRUFBYztBQUM3QjtBQUNBSyxXQUFTLG9CQUFVQyxLQUZVO0FBRzdCQyxhQUFXLG9CQUFVQyxNQUhRO0FBSTdCUCxZQUFVLG9CQUFVUSxJQUpTO0FBSzdCQyxTQUFPLG9CQUFVQyxJQUxZO0FBTTdCQyxTQUFPLG9CQUFVQyxTQUFWLENBQW9CLENBQ3pCLG9CQUFVQyxNQURlLEVBRXpCLG9CQUFVSCxJQUZlLENBQXBCLENBTnNCO0FBVTdCVCxhQUFXLG9CQUFVTyxJQVZRO0FBVzdCTixXQUFTLG9CQUFVTSxJQVhVO0FBWTdCTSxXQUFTLG9CQUFVQyxHQVpVO0FBYTdCQyxTQUFPLG9CQUFVSixTQUFWLENBQW9CLENBQ3pCLG9CQUFVQyxNQURlLEVBRXpCLG9CQUFVSCxJQUZlLENBQXBCLENBYnNCO0FBaUI3Qk8sUUFBTSxvQkFBVUosTUFqQmE7QUFrQjdCSyxlQUFhLG9CQUFVQztBQWxCTSxDQUFkLEVBbUJkLGVBQUtoQixTQW5CUyxFQW1CRSxFQW5CRixDQUFqQjs7SUFxQnFCaUIsTTs7O0FBTW5CLG9CQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSwySUFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixRQUFoQjtBQUZtQjtBQUdwQjs7Ozs7QUFUa0JGLE0sQ0FDWnRCLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQyxlQUFLQSxZQUExQyxFQUF3RDtBQUM1RXlCO0FBRDRFLENBQXhELEM7QUFESEgsTSxDQUlaakIsUyxHQUFZLFNBQUdKLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNJLFNBQXZCLEVBQWtDLGVBQUtBLFNBQXZDLEVBQWtELEVBQWxELEM7a0JBSkFpQixNIiwiZmlsZSI6ImFudGQvY2FyZC9TS0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgU0sgfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgQW50ZENvbXAgZnJvbSAnLi4vQW50ZENvbXAnO1xuXG5DYXJkLmRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwge1xuICBib3JkZXJlZDogdHJ1ZSxcbiAgaG92ZXJhYmxlOiBmYWxzZSxcbiAgbG9hZGluZzogZmFsc2UsXG59LCBDYXJkLmRlZmF1bHRQcm9wcywge30pO1xuXG5DYXJkLnByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwge1xuICAvL2h0dHBzOi8vYW50LmRlc2lnbi9jb21wb25lbnRzL2NhcmQtY24vI0NhcmRcbiAgYWN0aW9uczogUHJvcFR5cGVzLmFycmF5LFxuICBib2R5U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIGJvcmRlcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgY292ZXI6IFByb3BUeXBlcy5ub2RlLFxuICBleHRyYTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubm9kZSxcbiAgXSksXG4gIGhvdmVyYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICB0YWJMaXN0OiBQcm9wVHlwZXMuYW55LFxuICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubm9kZSxcbiAgXSksXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uVGFiQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbn0sIENhcmQucHJvcFR5cGVzLCB7fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLQ2FyZCBleHRlbmRzIEFudGRDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAuZGVmYXVsdFByb3BzLCBDYXJkLmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IENhcmQsXG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5wcm9wVHlwZXMsIENhcmQucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tDYXJkJztcbiAgfVxufVxuIl19