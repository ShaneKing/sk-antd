'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _skJs = require('sk-js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommonLayout = function CommonLayout() {
  _classCallCheck(this, CommonLayout);
};

CommonLayout.defaultProps = _skJs.SK.assign({}, {}, {});
CommonLayout.propTypes = _skJs.SK.assign({}, {
  //https://ant.design/components/layout-cn/#Layout
  className: _propTypes2.default.string,
  style: _propTypes2.default.object
}, {});
exports.default = CommonLayout;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvbGF5b3V0L0NvbW1vbkxheW91dC5qcyJdLCJuYW1lcyI6WyJDb21tb25MYXlvdXQiLCJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJwcm9wVHlwZXMiLCJjbGFzc05hbWUiLCJzdHJpbmciLCJzdHlsZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0lBRXFCQSxZOzs7O0FBQUFBLFksQ0FDWkMsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsRUFBZCxFQUFrQixFQUFsQixDO0FBREhGLFksQ0FFWkcsUyxHQUFZLFNBQUdELE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDL0I7QUFDQUUsYUFBVyxvQkFBVUMsTUFGVTtBQUcvQkMsU0FBTyxvQkFBVUM7QUFIYyxDQUFkLEVBSWhCLEVBSmdCLEM7a0JBRkFQLFkiLCJmaWxlIjoiYW50ZC9sYXlvdXQvQ29tbW9uTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbW9uTGF5b3V0IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwge30sIHt9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwge1xuICAgIC8vaHR0cHM6Ly9hbnQuZGVzaWduL2NvbXBvbmVudHMvbGF5b3V0LWNuLyNMYXlvdXRcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3RcbiAgfSwge30pO1xufVxuIl19