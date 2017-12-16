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

var _SKInput2 = require('./SKInput');

var _SKInput3 = _interopRequireDefault(_SKInput2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_input2.default.Search.defaultProps = _skJs.SK.assign({}, {
  enterButton: false
}, _input2.default.defaultProps, _input2.default.Search.defaultProps, {});

_input2.default.Search.propTypes = _skJs.SK.assign({}, {
  enterButton: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  onSearch: _propTypes2.default.func
}, _input2.default.propTypes, _input2.default.Search.propTypes, {});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS1NlYXJjaC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJlbnRlckJ1dHRvbiIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm5vZGUiLCJvblNlYXJjaCIsImZ1bmMiLCJTS1NlYXJjaCIsImFyZ3MiLCJjb21wTmFtZSIsImNvbXBUYWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsZ0JBQU1BLE1BQU4sQ0FBYUMsWUFBYixHQUE0QixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjO0FBQ3hDQyxlQUFhO0FBRDJCLENBQWQsRUFFekIsZ0JBQU1GLFlBRm1CLEVBRUwsZ0JBQU1ELE1BQU4sQ0FBYUMsWUFGUixFQUVzQixFQUZ0QixDQUE1Qjs7QUFJQSxnQkFBTUQsTUFBTixDQUFhSSxTQUFiLEdBQXlCLFNBQUdGLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDckNDLGVBQWEsb0JBQVVFLFNBQVYsQ0FBb0IsQ0FDL0Isb0JBQVVDLE1BRHFCLEVBRS9CLG9CQUFVQyxJQUZxQixDQUFwQixDQUR3QjtBQUtyQ0MsWUFBVSxvQkFBVUM7QUFMaUIsQ0FBZCxFQU10QixnQkFBTUwsU0FOZ0IsRUFNTCxnQkFBTUosTUFBTixDQUFhSSxTQU5SLEVBTW1CLEVBTm5CLENBQXpCOztJQVFxQk0sUTs7O0FBTW5CLHNCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSwrSUFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixVQUFoQjtBQUZtQjtBQUdwQjs7Ozs7QUFUa0JGLFEsQ0FDWlQsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsa0JBQVFELFlBQXRCLEVBQW9DLGdCQUFNRCxNQUFOLENBQWFDLFlBQWpELEVBQStEO0FBQ25GWSxXQUFTLGdCQUFNYjtBQURvRSxDQUEvRCxDO0FBREhVLFEsQ0FJWk4sUyxHQUFZLFNBQUdGLE1BQUgsQ0FBVSxFQUFWLEVBQWMsa0JBQVFFLFNBQXRCLEVBQWlDLGdCQUFNSixNQUFOLENBQWFJLFNBQTlDLEVBQXlELEVBQXpELEM7a0JBSkFNLFEiLCJmaWxlIjoiY29tcC9hbnRkL1NLU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbnB1dH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBTS0lucHV0IGZyb20gJy4vU0tJbnB1dCc7XG5cbklucHV0LlNlYXJjaC5kZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIHtcbiAgZW50ZXJCdXR0b246IGZhbHNlXG59LCBJbnB1dC5kZWZhdWx0UHJvcHMsIElucHV0LlNlYXJjaC5kZWZhdWx0UHJvcHMsIHt9KTtcblxuSW5wdXQuU2VhcmNoLnByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwge1xuICBlbnRlckJ1dHRvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubm9kZVxuICBdKSxcbiAgb25TZWFyY2g6IFByb3BUeXBlcy5mdW5jXG59LCBJbnB1dC5wcm9wVHlwZXMsIElucHV0LlNlYXJjaC5wcm9wVHlwZXMsIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tTZWFyY2ggZXh0ZW5kcyBTS0lucHV0IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgU0tJbnB1dC5kZWZhdWx0UHJvcHMsIElucHV0LlNlYXJjaC5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBJbnB1dC5TZWFyY2hcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIFNLSW5wdXQucHJvcFR5cGVzLCBJbnB1dC5TZWFyY2gucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tTZWFyY2gnO1xuICB9XG59XG4iXX0=