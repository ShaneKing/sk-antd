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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9sYXlvdXQvT3JpZ2luTGF5b3V0LmpzIl0sIm5hbWVzIjpbIk9yaWdpbkxheW91dCIsImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0lBRXFCQSxZOzs7O0FBQUFBLFksQ0FDWkMsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsRUFBZCxFQUFrQix1QkFBYUQsWUFBL0IsRUFBNkMsaUJBQU9BLFlBQXBELEVBQWtFLEVBQWxFLEM7QUFESEQsWSxDQUVaRyxTLEdBQVksU0FBR0QsTUFBSCxDQUFVLEVBQVYsRUFBYyx1QkFBYUMsU0FBM0IsRUFBc0MsaUJBQU9BLFNBQTdDLEVBQXdELEVBQXhELEM7a0JBRkFILFk7QUFHcEIiLCJmaWxlIjoiY29tcC9hbnRkL2xheW91dC9PcmlnaW5MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xheW91dH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQge1NLfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgQ29tbW9uTGF5b3V0IGZyb20gJy4vQ29tbW9uTGF5b3V0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JpZ2luTGF5b3V0IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwge30sIENvbW1vbkxheW91dC5kZWZhdWx0UHJvcHMsIExheW91dC5kZWZhdWx0UHJvcHMsIHt9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQ29tbW9uTGF5b3V0LnByb3BUeXBlcywgTGF5b3V0LnByb3BUeXBlcywge30pO1xufTtcbiJdfQ==