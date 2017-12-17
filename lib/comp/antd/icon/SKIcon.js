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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9pY29uL1NLSWNvbi5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJzcGluIiwicHJvcFR5cGVzIiwiYm9vbCIsInN0eWxlIiwib2JqZWN0IiwidHlwZSIsInN0cmluZyIsIlNLSWNvbiIsImFyZ3MiLCJjb21wTmFtZSIsImNvbXBUYWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLGVBQUtBLFlBQUwsR0FBb0IsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYztBQUNoQ0MsUUFBTTtBQUQwQixDQUFkLEVBRWpCLGVBQUtGLFlBRlksRUFFRSxFQUZGLENBQXBCOztBQUlBLGVBQUtHLFNBQUwsR0FBaUIsU0FBR0YsTUFBSCxDQUFVLEVBQVYsRUFBYztBQUM3QjtBQUNBQyxRQUFNLG9CQUFVRSxJQUZhO0FBRzdCQyxTQUFPLG9CQUFVQyxNQUhZO0FBSTdCQyxRQUFNLG9CQUFVQztBQUphLENBQWQsRUFLZCxlQUFLTCxTQUxTLEVBS0UsRUFMRixDQUFqQjs7SUFPcUJNLE07OztBQU9uQixvQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsMklBQ1ZBLElBRFU7O0FBRW5CLFVBQUtDLFFBQUwsR0FBZ0IsUUFBaEI7QUFGbUI7QUFHcEI7Ozs7O0FBVmtCRixNLENBQ1pULFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQyxlQUFLQSxZQUExQyxFQUF3RDtBQUM1RVk7QUFENEUsQ0FBeEQsQztBQURISCxNLENBSVpOLFMsR0FBWSxTQUFHRixNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRSxTQUF2QixFQUFrQyxlQUFLQSxTQUF2QyxFQUFrRCxFQUFsRCxDO2tCQUpBTSxNIiwiZmlsZSI6ImNvbXAvYW50ZC9pY29uL1NLSWNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SWNvbn0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcblxuSWNvbi5kZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIHtcbiAgc3BpbjogZmFsc2Vcbn0sIEljb24uZGVmYXVsdFByb3BzLCB7fSk7XG5cbkljb24ucHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCB7XG4gIC8vaHR0cHM6Ly9hbnQuZGVzaWduL2NvbXBvbmVudHMvaWNvbi1jbi8jQVBJXG4gIHNwaW46IFByb3BUeXBlcy5ib29sLFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZ1xufSwgSWNvbi5wcm9wVHlwZXMsIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tJY29uIGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5kZWZhdWx0UHJvcHMsIEljb24uZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogSWNvblxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCBJY29uLnByb3BUeXBlcywge30pO1xuXG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tJY29uJztcbiAgfVxufVxuIl19