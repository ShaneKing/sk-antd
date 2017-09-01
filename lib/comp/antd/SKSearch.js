'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style2 = require('antd/lib/input/style');

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _skJs2 = _interopRequireDefault(_skJs);

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

    return _possibleConstructorReturn(this, (_ref = SKSearch.__proto__ || Object.getPrototypeOf(SKSearch)).call.apply(_ref, [this].concat(args)));
  }

  return SKSearch;
}(_SKInput3.default);

SKSearch.defaultProps = _skJs2.default.assign({}, _input2.default.Search.defaultProps, {
  compTag: _input2.default.Search
});
SKSearch.propTypes = _skJs2.default.assign({}, _SKInput3.default.propTypes, _input2.default.Search.propTypes, {});
exports.default = SKSearch;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS1NlYXJjaC5qcyJdLCJuYW1lcyI6WyJTS1NlYXJjaCIsImFyZ3MiLCJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJTZWFyY2giLCJjb21wVGFnIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7O0FBTW5CLHNCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSwwSUFDVkEsSUFEVTtBQUVwQjs7Ozs7QUFSa0JELFEsQ0FDWkUsWSxHQUFlLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZ0JBQU1DLE1BQU4sQ0FBYUYsWUFBM0IsRUFBeUM7QUFDN0RHLFdBQVMsZ0JBQU1EO0FBRDhDLENBQXpDLEM7QUFESEosUSxDQUlaTSxTLEdBQVksZUFBR0gsTUFBSCxDQUFVLEVBQVYsRUFBYyxrQkFBUUcsU0FBdEIsRUFBaUMsZ0JBQU1GLE1BQU4sQ0FBYUUsU0FBOUMsRUFBeUQsRUFBekQsQztrQkFKQU4sUSIsImZpbGUiOiJjb21wL2FudGQvU0tTZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lucHV0fSBmcm9tICdhbnRkJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU0sgZnJvbSAnc2stanMnO1xuaW1wb3J0IFNLSW5wdXQgZnJvbSAnLi9TS0lucHV0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tTZWFyY2ggZXh0ZW5kcyBTS0lucHV0IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgSW5wdXQuU2VhcmNoLmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IElucHV0LlNlYXJjaFxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgU0tJbnB1dC5wcm9wVHlwZXMsIElucHV0LlNlYXJjaC5wcm9wVHlwZXMsIHt9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gIH1cbn1cbiJdfQ==