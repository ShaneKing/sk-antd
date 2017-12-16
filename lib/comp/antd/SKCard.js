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

var _AntdComp2 = require('./AntdComp');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS0NhcmQuanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwiYm9yZGVyZWQiLCJob3ZlcmFibGUiLCJsb2FkaW5nIiwicHJvcFR5cGVzIiwiYWN0aW9ucyIsImFycmF5IiwiYm9keVN0eWxlIiwib2JqZWN0IiwiYm9vbCIsImNvdmVyIiwibm9kZSIsImV4dHJhIiwib25lT2ZUeXBlIiwic3RyaW5nIiwidGFiTGlzdCIsImFueSIsInRpdGxlIiwidHlwZSIsIm9uVGFiQ2hhbmdlIiwiZnVuYyIsIlNLQ2FyZCIsImFyZ3MiLCJjb21wTmFtZSIsImNvbXBUYWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsZUFBS0EsWUFBTCxHQUFvQixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjO0FBQ2hDQyxZQUFVLElBRHNCO0FBRWhDQyxhQUFXLEtBRnFCO0FBR2hDQyxXQUFTO0FBSHVCLENBQWQsRUFJakIsZUFBS0osWUFKWSxFQUlFLEVBSkYsQ0FBcEI7O0FBTUEsZUFBS0ssU0FBTCxHQUFpQixTQUFHSixNQUFILENBQVUsRUFBVixFQUFjO0FBQzdCSyxXQUFTLG9CQUFVQyxLQURVO0FBRTdCQyxhQUFXLG9CQUFVQyxNQUZRO0FBRzdCUCxZQUFVLG9CQUFVUSxJQUhTO0FBSTdCQyxTQUFPLG9CQUFVQyxJQUpZO0FBSzdCQyxTQUFPLG9CQUFVQyxTQUFWLENBQW9CLENBQ3pCLG9CQUFVQyxNQURlLEVBRXpCLG9CQUFVSCxJQUZlLENBQXBCLENBTHNCO0FBUzdCVCxhQUFXLG9CQUFVTyxJQVRRO0FBVTdCTixXQUFTLG9CQUFVTSxJQVZVO0FBVzdCTSxXQUFTLG9CQUFVQyxHQVhVO0FBWTdCQyxTQUFPLG9CQUFVSixTQUFWLENBQW9CLENBQ3pCLG9CQUFVQyxNQURlLEVBRXpCLG9CQUFVSCxJQUZlLENBQXBCLENBWnNCO0FBZ0I3Qk8sUUFBTSxvQkFBVUosTUFoQmE7QUFpQjdCSyxlQUFhLG9CQUFVQztBQWpCTSxDQUFkLEVBa0JkLGVBQUtoQixTQWxCUyxFQWtCRSxFQWxCRixDQUFqQjs7SUFvQnFCaUIsTTs7O0FBTW5CLG9CQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSwySUFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixRQUFoQjtBQUZtQjtBQUdwQjs7Ozs7QUFUa0JGLE0sQ0FDWnRCLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQyxlQUFLQSxZQUExQyxFQUF3RDtBQUM1RXlCO0FBRDRFLENBQXhELEM7QUFESEgsTSxDQUlaakIsUyxHQUFZLFNBQUdKLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNJLFNBQXZCLEVBQWtDLGVBQUtBLFNBQXZDLEVBQWtELEVBQWxELEM7a0JBSkFpQixNIiwiZmlsZSI6ImNvbXAvYW50ZC9TS0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NhcmR9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQW50ZENvbXAgZnJvbSAnLi9BbnRkQ29tcCc7XG5cbkNhcmQuZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCB7XG4gIGJvcmRlcmVkOiB0cnVlLFxuICBob3ZlcmFibGU6IGZhbHNlLFxuICBsb2FkaW5nOiBmYWxzZVxufSwgQ2FyZC5kZWZhdWx0UHJvcHMsIHt9KTtcblxuQ2FyZC5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIHtcbiAgYWN0aW9uczogUHJvcFR5cGVzLmFycmF5LFxuICBib2R5U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIGJvcmRlcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgY292ZXI6IFByb3BUeXBlcy5ub2RlLFxuICBleHRyYTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubm9kZVxuICBdKSxcbiAgaG92ZXJhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIHRhYkxpc3Q6IFByb3BUeXBlcy5hbnksXG4gIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5ub2RlXG4gIF0pLFxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvblRhYkNoYW5nZTogUHJvcFR5cGVzLmZ1bmNcbn0sIENhcmQucHJvcFR5cGVzLCB7fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLQ2FyZCBleHRlbmRzIEFudGRDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAuZGVmYXVsdFByb3BzLCBDYXJkLmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IENhcmRcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLnByb3BUeXBlcywgQ2FyZC5wcm9wVHlwZXMsIHt9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS0NhcmQnO1xuICB9XG59XG4iXX0=