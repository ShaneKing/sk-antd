'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

require('antd/lib/button/style');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _skJs = require('sk-js');

var _AntdComp2 = require('./AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

var _Const = require('../../util/Const');

var _REACT = require('../../util/REACT');

var _REACT2 = _interopRequireDefault(_REACT);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_button2.default.defaultProps = _skJs.SK.assign({}, {
  ghost: false,
  htmlType: _REACT2.default.TAG.button,
  loading: false,
  size: _Const.SIZE.Default
}, _button2.default.defaultProps, {});

_button2.default.propTypes = _skJs.SK.assign({}, {
  ghost: _propTypes2.default.bool,
  htmlType: _propTypes2.default.string,
  icon: _propTypes2.default.string,
  loading: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.object]),
  shape: _propTypes2.default.string,
  size: _propTypes2.default.string,
  type: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  href: _propTypes2.default.string,
  target: _propTypes2.default.string
}, _button2.default.propTypes, {});

var SKButton = function (_AntdComp) {
  _inherits(SKButton, _AntdComp);

  function SKButton() {
    var _ref;

    _classCallCheck(this, SKButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKButton.__proto__ || Object.getPrototypeOf(SKButton)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKButton';
    return _this;
  }

  return SKButton;
}(_AntdComp3.default);

SKButton.TYPE = {
  Primary: 'primary',
  Dashed: 'dashed',
  Danger: 'danger'
};
SKButton.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _button2.default.defaultProps, {
  compTag: _button2.default
});
SKButton.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _button2.default.propTypes, {});
exports.default = SKButton;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS0J1dHRvbi5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJnaG9zdCIsImh0bWxUeXBlIiwiVEFHIiwiYnV0dG9uIiwibG9hZGluZyIsInNpemUiLCJEZWZhdWx0IiwicHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsImljb24iLCJvbmVPZlR5cGUiLCJvYmplY3QiLCJzaGFwZSIsInR5cGUiLCJvbkNsaWNrIiwiZnVuYyIsImhyZWYiLCJ0YXJnZXQiLCJTS0J1dHRvbiIsImFyZ3MiLCJjb21wTmFtZSIsIlRZUEUiLCJQcmltYXJ5IiwiRGFzaGVkIiwiRGFuZ2VyIiwiY29tcFRhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxpQkFBT0EsWUFBUCxHQUFzQixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjO0FBQ2xDQyxTQUFPLEtBRDJCO0FBRWxDQyxZQUFVLGdCQUFNQyxHQUFOLENBQVVDLE1BRmM7QUFHbENDLFdBQVMsS0FIeUI7QUFJbENDLFFBQU0sWUFBS0M7QUFKdUIsQ0FBZCxFQUtuQixpQkFBT1IsWUFMWSxFQUtFLEVBTEYsQ0FBdEI7O0FBT0EsaUJBQU9TLFNBQVAsR0FBbUIsU0FBR1IsTUFBSCxDQUFVLEVBQVYsRUFBYztBQUMvQkMsU0FBTyxvQkFBVVEsSUFEYztBQUUvQlAsWUFBVSxvQkFBVVEsTUFGVztBQUcvQkMsUUFBTSxvQkFBVUQsTUFIZTtBQUkvQkwsV0FBUyxvQkFBVU8sU0FBVixDQUFvQixDQUMzQixvQkFBVUgsSUFEaUIsRUFFM0Isb0JBQVVJLE1BRmlCLENBQXBCLENBSnNCO0FBUS9CQyxTQUFPLG9CQUFVSixNQVJjO0FBUy9CSixRQUFNLG9CQUFVSSxNQVRlO0FBVS9CSyxRQUFNLG9CQUFVTCxNQVZlO0FBVy9CTSxXQUFTLG9CQUFVQyxJQVhZO0FBWS9CQyxRQUFNLG9CQUFVUixNQVplO0FBYS9CUyxVQUFRLG9CQUFVVDtBQWJhLENBQWQsRUFjaEIsaUJBQU9GLFNBZFMsRUFjRSxFQWRGLENBQW5COztJQWdCcUJZLFE7OztBQVduQixzQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsK0lBQ1ZBLElBRFU7O0FBRW5CLFVBQUtDLFFBQUwsR0FBZ0IsVUFBaEI7QUFGbUI7QUFHcEI7Ozs7O0FBZGtCRixRLENBQ1pHLEksR0FBTztBQUNaQyxXQUFTLFNBREc7QUFFWkMsVUFBUSxRQUZJO0FBR1pDLFVBQVE7QUFISSxDO0FBREtOLFEsQ0FNWnJCLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQyxpQkFBT0EsWUFBNUMsRUFBMEQ7QUFDOUU0QjtBQUQ4RSxDQUExRCxDO0FBTkhQLFEsQ0FTWlosUyxHQUFZLFNBQUdSLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNRLFNBQXZCLEVBQWtDLGlCQUFPQSxTQUF6QyxFQUFvRCxFQUFwRCxDO2tCQVRBWSxRIiwiZmlsZSI6ImNvbXAvYW50ZC9TS0J1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QnV0dG9ufSBmcm9tICdhbnRkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge1NLfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgQW50ZENvbXAgZnJvbSAnLi9BbnRkQ29tcCc7XG5pbXBvcnQge1NJWkV9IGZyb20gJy4uLy4uL3V0aWwvQ29uc3QnO1xuaW1wb3J0IFJFQUNUIGZyb20gJy4uLy4uL3V0aWwvUkVBQ1QnO1xuXG5CdXR0b24uZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCB7XG4gIGdob3N0OiBmYWxzZSxcbiAgaHRtbFR5cGU6IFJFQUNULlRBRy5idXR0b24sXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBzaXplOiBTSVpFLkRlZmF1bHQsXG59LCBCdXR0b24uZGVmYXVsdFByb3BzLCB7fSk7XG5cbkJ1dHRvbi5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIHtcbiAgZ2hvc3Q6IFByb3BUeXBlcy5ib29sLFxuICBodG1sVHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgbG9hZGluZzogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgUHJvcFR5cGVzLm9iamVjdFxuICBdKSxcbiAgc2hhcGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNpemU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0YXJnZXQ6IFByb3BUeXBlcy5zdHJpbmdcbn0sIEJ1dHRvbi5wcm9wVHlwZXMsIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tCdXR0b24gZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBUWVBFID0ge1xuICAgIFByaW1hcnk6ICdwcmltYXJ5JyxcbiAgICBEYXNoZWQ6ICdkYXNoZWQnLFxuICAgIERhbmdlcjogJ2RhbmdlcidcbiAgfTtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAuZGVmYXVsdFByb3BzLCBCdXR0b24uZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogQnV0dG9uXG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5wcm9wVHlwZXMsIEJ1dHRvbi5wcm9wVHlwZXMsIHt9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS0J1dHRvbic7XG4gIH1cbn1cbiJdfQ==