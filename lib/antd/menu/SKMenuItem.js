'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

require('antd/lib/menu/style');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _OriginMenu = require('./OriginMenu');

var _OriginMenu2 = _interopRequireDefault(_OriginMenu);

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_menu2.default.Item.defaultProps = _skJs.SK.assign({}, {
  disabled: false
}, _OriginMenu2.default.defaultProps, _menu2.default.Item.defaultProps, {});

_menu2.default.Item.propTypes = _skJs.SK.assign({
  //https://github.com/react-component/menu/blob/master/src/MenuItem.jsx#L21
  onItemHover: _propTypes2.default.func
}, {
  //https://ant.design/components/menu-cn/#Menu.Item
  disabled: _propTypes2.default.bool,
  //https://github.com/react-component/menu#menuitem-props
  onMouseEnter: _propTypes2.default.func,
  onMouseLeave: _propTypes2.default.func
}, _OriginMenu2.default.propTypes, _menu2.default.Item.propTypes, {});

var SKMenuItem = function (_AntdComp) {
  _inherits(SKMenuItem, _AntdComp);

  function SKMenuItem() {
    var _ref;

    _classCallCheck(this, SKMenuItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKMenuItem.__proto__ || Object.getPrototypeOf(SKMenuItem)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKMenuItem';
    return _this;
  }

  return SKMenuItem;
}(_AntdComp3.default);

SKMenuItem.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _menu2.default.Item.defaultProps, {
  compTag: _menu2.default.Item
});
SKMenuItem.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _menu2.default.Item.propTypes, {});
exports.default = SKMenuItem;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvbWVudS9TS01lbnVJdGVtLmpzIl0sIm5hbWVzIjpbIkl0ZW0iLCJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJkaXNhYmxlZCIsInByb3BUeXBlcyIsIm9uSXRlbUhvdmVyIiwiZnVuYyIsImJvb2wiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJTS01lbnVJdGVtIiwiYXJncyIsImNvbXBOYW1lIiwiY29tcFRhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLGVBQUtBLElBQUwsQ0FBVUMsWUFBVixHQUF5QixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjO0FBQ3JDQyxZQUFVO0FBRDJCLENBQWQsRUFFdEIscUJBQVdGLFlBRlcsRUFFRyxlQUFLRCxJQUFMLENBQVVDLFlBRmIsRUFFMkIsRUFGM0IsQ0FBekI7O0FBSUEsZUFBS0QsSUFBTCxDQUFVSSxTQUFWLEdBQXNCLFNBQUdGLE1BQUgsQ0FBVTtBQUM5QjtBQUNBRyxlQUFhLG9CQUFVQztBQUZPLENBQVYsRUFHbkI7QUFDRDtBQUNBSCxZQUFVLG9CQUFVSSxJQUZuQjtBQUdEO0FBQ0FDLGdCQUFjLG9CQUFVRixJQUp2QjtBQUtERyxnQkFBYyxvQkFBVUg7QUFMdkIsQ0FIbUIsRUFTbkIscUJBQVdGLFNBVFEsRUFTRyxlQUFLSixJQUFMLENBQVVJLFNBVGIsRUFTd0IsRUFUeEIsQ0FBdEI7O0lBV3FCTSxVOzs7QUFNbkIsd0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLG1KQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLFlBQWhCO0FBRm1CO0FBR3BCOzs7OztBQVRrQkYsVSxDQUNaVCxZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUMsZUFBS0QsSUFBTCxDQUFVQyxZQUEvQyxFQUE2RDtBQUNqRlksV0FBUyxlQUFLYjtBQURtRSxDQUE3RCxDO0FBREhVLFUsQ0FJWk4sUyxHQUFZLFNBQUdGLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNFLFNBQXZCLEVBQWtDLGVBQUtKLElBQUwsQ0FBVUksU0FBNUMsRUFBdUQsRUFBdkQsQztrQkFKQU0sVSIsImZpbGUiOiJhbnRkL21lbnUvU0tNZW51SXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TWVudX0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBPcmlnaW5NZW51IGZyb20gJy4vT3JpZ2luTWVudSc7XG5pbXBvcnQgQW50ZENvbXAgZnJvbSAnLi4vQW50ZENvbXAnO1xuXG5NZW51Lkl0ZW0uZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCB7XG4gIGRpc2FibGVkOiBmYWxzZVxufSwgT3JpZ2luTWVudS5kZWZhdWx0UHJvcHMsIE1lbnUuSXRlbS5kZWZhdWx0UHJvcHMsIHt9KTtcblxuTWVudS5JdGVtLnByb3BUeXBlcyA9IFNLLmFzc2lnbih7XG4gIC8vaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC9tZW51L2Jsb2IvbWFzdGVyL3NyYy9NZW51SXRlbS5qc3gjTDIxXG4gIG9uSXRlbUhvdmVyOiBQcm9wVHlwZXMuZnVuY1xufSwge1xuICAvL2h0dHBzOi8vYW50LmRlc2lnbi9jb21wb25lbnRzL21lbnUtY24vI01lbnUuSXRlbVxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8vaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC9tZW51I21lbnVpdGVtLXByb3BzXG4gIG9uTW91c2VFbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uTW91c2VMZWF2ZTogUHJvcFR5cGVzLmZ1bmNcbn0sIE9yaWdpbk1lbnUucHJvcFR5cGVzLCBNZW51Lkl0ZW0ucHJvcFR5cGVzLCB7fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLTWVudUl0ZW0gZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywgTWVudS5JdGVtLmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IE1lbnUuSXRlbVxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCBNZW51Lkl0ZW0ucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tNZW51SXRlbSc7XG4gIH1cbn1cbiJdfQ==