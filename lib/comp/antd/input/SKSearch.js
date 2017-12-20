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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9pbnB1dC9TS1NlYXJjaC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJlbnRlckJ1dHRvbiIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm5vZGUiLCJvblNlYXJjaCIsImZ1bmMiLCJTS1NlYXJjaCIsImFyZ3MiLCJjb21wTmFtZSIsImNvbXBUYWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxnQkFBTUEsTUFBTixDQUFhQyxZQUFiLEdBQTRCLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDeENDLGVBQWE7QUFEMkIsQ0FBZCxFQUV6QixzQkFBWUYsWUFGYSxFQUVDLGdCQUFNRCxNQUFOLENBQWFDLFlBRmQsRUFFNEIsRUFGNUIsQ0FBNUI7O0FBSUEsZ0JBQU1ELE1BQU4sQ0FBYUksU0FBYixHQUF5QixTQUFHRixNQUFILENBQVUsRUFBVixFQUFjO0FBQ3JDO0FBQ0FDLGVBQWEsb0JBQVVFLFNBQVYsQ0FBb0IsQ0FDL0Isb0JBQVVDLE1BRHFCLEVBRS9CLG9CQUFVQyxJQUZxQixDQUFwQixDQUZ3QjtBQU1yQ0MsWUFBVSxvQkFBVUM7QUFOaUIsQ0FBZCxFQU90QixzQkFBWUwsU0FQVSxFQU9DLGdCQUFNSixNQUFOLENBQWFJLFNBUGQsRUFPeUIsRUFQekIsQ0FBekI7O0lBU3FCTSxROzs7QUFNbkIsc0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLCtJQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLFVBQWhCO0FBRm1CO0FBR3BCOzs7OztBQVRrQkYsUSxDQUNaVCxZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxrQkFBUUQsWUFBdEIsRUFBb0MsZ0JBQU1ELE1BQU4sQ0FBYUMsWUFBakQsRUFBK0Q7QUFDbkZZLFdBQVMsZ0JBQU1iO0FBRG9FLENBQS9ELEM7QUFESFUsUSxDQUlaTixTLEdBQVksU0FBR0YsTUFBSCxDQUFVLEVBQVYsRUFBYyxrQkFBUUUsU0FBdEIsRUFBaUMsZ0JBQU1KLE1BQU4sQ0FBYUksU0FBOUMsRUFBeUQsRUFBekQsQztrQkFKQU0sUSIsImZpbGUiOiJjb21wL2FudGQvaW5wdXQvU0tTZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lucHV0fSBmcm9tICdhbnRkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IE9yaWdpbklucHV0IGZyb20gJy4vT3JpZ2luSW5wdXQnO1xuaW1wb3J0IFNLSW5wdXQgZnJvbSAnLi9TS0lucHV0JztcblxuSW5wdXQuU2VhcmNoLmRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwge1xuICBlbnRlckJ1dHRvbjogZmFsc2Vcbn0sIE9yaWdpbklucHV0LmRlZmF1bHRQcm9wcywgSW5wdXQuU2VhcmNoLmRlZmF1bHRQcm9wcywge30pO1xuXG5JbnB1dC5TZWFyY2gucHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCB7XG4gIC8vaHR0cHM6Ly9hbnQuZGVzaWduL2NvbXBvbmVudHMvaW5wdXQtY24vI0lucHV0LlNlYXJjaFxuICBlbnRlckJ1dHRvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubm9kZVxuICBdKSxcbiAgb25TZWFyY2g6IFByb3BUeXBlcy5mdW5jXG59LCBPcmlnaW5JbnB1dC5wcm9wVHlwZXMsIElucHV0LlNlYXJjaC5wcm9wVHlwZXMsIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tTZWFyY2ggZXh0ZW5kcyBTS0lucHV0IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgU0tJbnB1dC5kZWZhdWx0UHJvcHMsIElucHV0LlNlYXJjaC5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBJbnB1dC5TZWFyY2hcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIFNLSW5wdXQucHJvcFR5cGVzLCBJbnB1dC5TZWFyY2gucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tTZWFyY2gnO1xuICB9XG59XG4iXX0=