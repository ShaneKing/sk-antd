'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _layout = require('antd/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

require('antd/lib/layout/style');

var _skJs = require('sk-js');

var _CommonLayout = require('./CommonLayout');

var _CommonLayout2 = _interopRequireDefault(_CommonLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OriginLayout = function OriginLayout() {
  _classCallCheck(this, OriginLayout);
};

OriginLayout.defaultProps = _skJs.SK.assign({}, {}, _CommonLayout2.default.defaultProps, _layout2.default.defaultProps, {});
OriginLayout.propTypes = _skJs.SK.assign({}, _CommonLayout2.default.propTypes, _layout2.default.propTypes, {});
exports.default = OriginLayout;
;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvbGF5b3V0L09yaWdpbkxheW91dC5qcyJdLCJuYW1lcyI6WyJPcmlnaW5MYXlvdXQiLCJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOzs7Ozs7OztJQUVxQkEsWTs7OztBQUFBQSxZLENBQ1pDLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLEVBQWQsRUFBa0IsdUJBQWFELFlBQS9CLEVBQTZDLGlCQUFPQSxZQUFwRCxFQUFrRSxFQUFsRSxDO0FBREhELFksQ0FFWkcsUyxHQUFZLFNBQUdELE1BQUgsQ0FBVSxFQUFWLEVBQWMsdUJBQWFDLFNBQTNCLEVBQXNDLGlCQUFPQSxTQUE3QyxFQUF3RCxFQUF4RCxDO2tCQUZBSCxZO0FBR3BCIiwiZmlsZSI6ImFudGQvbGF5b3V0L09yaWdpbkxheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TGF5b3V0fSBmcm9tICdhbnRkJztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBDb21tb25MYXlvdXQgZnJvbSAnLi9Db21tb25MYXlvdXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmlnaW5MYXlvdXQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCB7fSwgQ29tbW9uTGF5b3V0LmRlZmF1bHRQcm9wcywgTGF5b3V0LmRlZmF1bHRQcm9wcywge30pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBDb21tb25MYXlvdXQucHJvcFR5cGVzLCBMYXlvdXQucHJvcFR5cGVzLCB7fSk7XG59O1xuIl19