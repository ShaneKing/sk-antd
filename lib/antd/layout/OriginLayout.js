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
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvbGF5b3V0L09yaWdpbkxheW91dC5qcyJdLCJuYW1lcyI6WyJPcmlnaW5MYXlvdXQiLCJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOzs7Ozs7OztJQUVxQkEsWTs7OztBQUFBQSxZLENBQ1pDLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLEVBQWQsRUFBa0IsdUJBQWFELFlBQS9CLEVBQTZDLGlCQUFPQSxZQUFwRCxFQUFrRSxFQUFsRSxDO0FBREhELFksQ0FFWkcsUyxHQUFZLFNBQUdELE1BQUgsQ0FBVSxFQUFWLEVBQWMsdUJBQWFDLFNBQTNCLEVBQXNDLGlCQUFPQSxTQUE3QyxFQUF3RCxFQUF4RCxDO2tCQUZBSCxZIiwiZmlsZSI6ImFudGQvbGF5b3V0L09yaWdpbkxheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgU0sgfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgQ29tbW9uTGF5b3V0IGZyb20gJy4vQ29tbW9uTGF5b3V0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JpZ2luTGF5b3V0IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwge30sIENvbW1vbkxheW91dC5kZWZhdWx0UHJvcHMsIExheW91dC5kZWZhdWx0UHJvcHMsIHt9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQ29tbW9uTGF5b3V0LnByb3BUeXBlcywgTGF5b3V0LnByb3BUeXBlcywge30pO1xufVxuIl19