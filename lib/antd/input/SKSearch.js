'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

require('antd/lib/input/style');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _OriginInput = require('./OriginInput');

var _OriginInput2 = _interopRequireDefault(_OriginInput);

var _SKInput2 = require('./SKInput');

var _SKInput3 = _interopRequireDefault(_SKInput2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_input2.default.Search.defaultProps = _skJs.SK.assign({}, {
  enterButton: false
}, _OriginInput2.default.defaultProps, _input2.default.Search.defaultProps, {});

_input2.default.Search.propTypes = _skJs.SK.assign({}, {
  //https://ant.design/components/input-cn/#Input.Search
  enterButton: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  onSearch: _propTypes2.default.func
}, _OriginInput2.default.propTypes, _input2.default.Search.propTypes, {});

var SKSearch = function (_SKInput) {
  _inherits(SKSearch, _SKInput);

  function SKSearch() {
    var _ref;

    _classCallCheck(this, SKSearch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKSearch.__proto__ || Object.getPrototypeOf(SKSearch)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKSearch';
    return _this;
  }

  return SKSearch;
}(_SKInput3.default);

SKSearch.defaultProps = _skJs.SK.assign({}, _SKInput3.default.defaultProps, _input2.default.Search.defaultProps, {
  compTag: _input2.default.Search
});
SKSearch.propTypes = _skJs.SK.assign({}, _SKInput3.default.propTypes, _input2.default.Search.propTypes, {});
exports.default = SKSearch;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvaW5wdXQvU0tTZWFyY2guanMiXSwibmFtZXMiOlsiU2VhcmNoIiwiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwiZW50ZXJCdXR0b24iLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJub2RlIiwib25TZWFyY2giLCJmdW5jIiwiU0tTZWFyY2giLCJhcmdzIiwiY29tcE5hbWUiLCJjb21wVGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsZ0JBQU1BLE1BQU4sQ0FBYUMsWUFBYixHQUE0QixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjO0FBQ3hDQyxlQUFhO0FBRDJCLENBQWQsRUFFekIsc0JBQVlGLFlBRmEsRUFFQyxnQkFBTUQsTUFBTixDQUFhQyxZQUZkLEVBRTRCLEVBRjVCLENBQTVCOztBQUlBLGdCQUFNRCxNQUFOLENBQWFJLFNBQWIsR0FBeUIsU0FBR0YsTUFBSCxDQUFVLEVBQVYsRUFBYztBQUNyQztBQUNBQyxlQUFhLG9CQUFVRSxTQUFWLENBQW9CLENBQy9CLG9CQUFVQyxNQURxQixFQUUvQixvQkFBVUMsSUFGcUIsQ0FBcEIsQ0FGd0I7QUFNckNDLFlBQVUsb0JBQVVDO0FBTmlCLENBQWQsRUFPdEIsc0JBQVlMLFNBUFUsRUFPQyxnQkFBTUosTUFBTixDQUFhSSxTQVBkLEVBT3lCLEVBUHpCLENBQXpCOztJQVNxQk0sUTs7O0FBTW5CLHNCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSwrSUFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixVQUFoQjtBQUZtQjtBQUdwQjs7Ozs7QUFUa0JGLFEsQ0FDWlQsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsa0JBQVFELFlBQXRCLEVBQW9DLGdCQUFNRCxNQUFOLENBQWFDLFlBQWpELEVBQStEO0FBQ25GWSxXQUFTLGdCQUFNYjtBQURvRSxDQUEvRCxDO0FBREhVLFEsQ0FJWk4sUyxHQUFZLFNBQUdGLE1BQUgsQ0FBVSxFQUFWLEVBQWMsa0JBQVFFLFNBQXRCLEVBQWlDLGdCQUFNSixNQUFOLENBQWFJLFNBQTlDLEVBQXlELEVBQXpELEM7a0JBSkFNLFEiLCJmaWxlIjoiYW50ZC9pbnB1dC9TS1NlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5wdXR9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1NLfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgT3JpZ2luSW5wdXQgZnJvbSAnLi9PcmlnaW5JbnB1dCc7XG5pbXBvcnQgU0tJbnB1dCBmcm9tICcuL1NLSW5wdXQnO1xuXG5JbnB1dC5TZWFyY2guZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCB7XG4gIGVudGVyQnV0dG9uOiBmYWxzZVxufSwgT3JpZ2luSW5wdXQuZGVmYXVsdFByb3BzLCBJbnB1dC5TZWFyY2guZGVmYXVsdFByb3BzLCB7fSk7XG5cbklucHV0LlNlYXJjaC5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIHtcbiAgLy9odHRwczovL2FudC5kZXNpZ24vY29tcG9uZW50cy9pbnB1dC1jbi8jSW5wdXQuU2VhcmNoXG4gIGVudGVyQnV0dG9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5ub2RlXG4gIF0pLFxuICBvblNlYXJjaDogUHJvcFR5cGVzLmZ1bmNcbn0sIE9yaWdpbklucHV0LnByb3BUeXBlcywgSW5wdXQuU2VhcmNoLnByb3BUeXBlcywge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS1NlYXJjaCBleHRlbmRzIFNLSW5wdXQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBTS0lucHV0LmRlZmF1bHRQcm9wcywgSW5wdXQuU2VhcmNoLmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IElucHV0LlNlYXJjaFxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgU0tJbnB1dC5wcm9wVHlwZXMsIElucHV0LlNlYXJjaC5wcm9wVHlwZXMsIHt9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS1NlYXJjaCc7XG4gIH1cbn1cbiJdfQ==