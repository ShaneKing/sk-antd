'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

require('antd/lib/input/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _SKInput2 = require('./SKInput');

var _SKInput3 = _interopRequireDefault(_SKInput2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

SKSearch.defaultProps = _skJs.SK.assign({}, _SKInput3.default.defaultProps, {
  compTag: _input2.default.Search
});
SKSearch.propTypes = _skJs.SK.assign({}, _SKInput3.default.propTypes, {});
exports.default = SKSearch;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9pbnB1dC9TS1NlYXJjaC5qcyJdLCJuYW1lcyI6WyJTS1NlYXJjaCIsImFyZ3MiLCJjb21wTmFtZSIsImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsImNvbXBUYWciLCJTZWFyY2giLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7O0FBTW5CLHNCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSwrSUFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixVQUFoQjtBQUZtQjtBQUdwQjs7Ozs7QUFUa0JGLFEsQ0FDWkcsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsa0JBQVFELFlBQXRCLEVBQW9DO0FBQ3hERSxXQUFTLGdCQUFNQztBQUR5QyxDQUFwQyxDO0FBREhOLFEsQ0FJWk8sUyxHQUFZLFNBQUdILE1BQUgsQ0FBVSxFQUFWLEVBQWMsa0JBQVFHLFNBQXRCLEVBQWlDLEVBQWpDLEM7a0JBSkFQLFEiLCJmaWxlIjoiY29tcC9hbnRkL2lucHV0L1NLU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbnB1dH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IFNLSW5wdXQgZnJvbSAnLi9TS0lucHV0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tTZWFyY2ggZXh0ZW5kcyBTS0lucHV0IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgU0tJbnB1dC5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBJbnB1dC5TZWFyY2hcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIFNLSW5wdXQucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tTZWFyY2gnO1xuICB9XG59XG4iXX0=