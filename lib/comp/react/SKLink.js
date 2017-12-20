'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _skJs = require('sk-js');

var _Comp2 = require('../Comp');

var _Comp3 = _interopRequireDefault(_Comp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SKLink = function (_Comp) {
  _inherits(SKLink, _Comp);

  function SKLink() {
    var _ref;

    _classCallCheck(this, SKLink);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKLink.__proto__ || Object.getPrototypeOf(SKLink)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKLink';
    return _this;
  }

  return SKLink;
}(_Comp3.default);

SKLink.defaultProps = _skJs.SK.assign({}, _Comp3.default.defaultProps, _reactRouterDom.Link.defaultProps, {
  compTag: _reactRouterDom.Link
});
SKLink.propTypes = _skJs.SK.assign({}, _Comp3.default.propTypes, _reactRouterDom.Link.propTypes, {});
exports.default = SKLink;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvcmVhY3QvU0tMaW5rLmpzIl0sIm5hbWVzIjpbIlNLTGluayIsImFyZ3MiLCJjb21wTmFtZSIsImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsImNvbXBUYWciLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7O0FBTW5CLG9CQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSwySUFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixRQUFoQjtBQUZtQjtBQUdwQjs7Ozs7QUFUa0JGLE0sQ0FDWkcsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0QsWUFBbkIsRUFBaUMscUJBQUtBLFlBQXRDLEVBQW9EO0FBQ3hFRTtBQUR3RSxDQUFwRCxDO0FBREhMLE0sQ0FJWk0sUyxHQUFZLFNBQUdGLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0UsU0FBbkIsRUFBOEIscUJBQUtBLFNBQW5DLEVBQThDLEVBQTlDLEM7a0JBSkFOLE0iLCJmaWxlIjoiY29tcC9yZWFjdC9TS0xpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBDb21wIGZyb20gJy4uL0NvbXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS0xpbmsgZXh0ZW5kcyBDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgQ29tcC5kZWZhdWx0UHJvcHMsIExpbmsuZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogTGlua1xuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQ29tcC5wcm9wVHlwZXMsIExpbmsucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tMaW5rJztcbiAgfVxufVxuIl19