'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _layout = require('antd/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

require('antd/lib/layout/style');

var _skJs = require('sk-js');

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

var _OriginLayout = require('./OriginLayout');

var _OriginLayout2 = _interopRequireDefault(_OriginLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_layout2.default.Header.defaultProps = _skJs.SK.assign({}, {}, _OriginLayout2.default.defaultProps, _layout2.default.Header.defaultProps, {});
_layout2.default.Header.propTypes = _skJs.SK.assign({}, {}, _OriginLayout2.default.propTypes, _layout2.default.Header.propTypes, {});

var SKHeader = function (_AntdComp) {
  _inherits(SKHeader, _AntdComp);

  function SKHeader() {
    var _ref;

    _classCallCheck(this, SKHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKHeader.__proto__ || Object.getPrototypeOf(SKHeader)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKHeader';
    return _this;
  }

  return SKHeader;
}(_AntdComp3.default);

SKHeader.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _layout2.default.Header.defaultProps, {
  compTag: _layout2.default.Header
});
SKHeader.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _layout2.default.Header.propTypes, {});
exports.default = SKHeader;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9sYXlvdXQvU0tIZWFkZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwicHJvcFR5cGVzIiwiU0tIZWFkZXIiLCJhcmdzIiwiY29tcE5hbWUiLCJjb21wVGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxpQkFBT0EsTUFBUCxDQUFjQyxZQUFkLEdBQTZCLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsRUFBZCxFQUFrQix1QkFBYUQsWUFBL0IsRUFBNkMsaUJBQU9ELE1BQVAsQ0FBY0MsWUFBM0QsRUFBeUUsRUFBekUsQ0FBN0I7QUFDQSxpQkFBT0QsTUFBUCxDQUFjRyxTQUFkLEdBQTBCLFNBQUdELE1BQUgsQ0FBVSxFQUFWLEVBQWMsRUFBZCxFQUFrQix1QkFBYUMsU0FBL0IsRUFBMEMsaUJBQU9ILE1BQVAsQ0FBY0csU0FBeEQsRUFBbUUsRUFBbkUsQ0FBMUI7O0lBRXFCQyxROzs7QUFNbkIsc0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLCtJQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLFVBQWhCO0FBRm1CO0FBR3BCOzs7OztBQVRrQkYsUSxDQUNaSCxZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUMsaUJBQU9ELE1BQVAsQ0FBY0MsWUFBbkQsRUFBaUU7QUFDckZNLFdBQVMsaUJBQU9QO0FBRHFFLENBQWpFLEM7QUFESEksUSxDQUlaRCxTLEdBQVksU0FBR0QsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0MsU0FBdkIsRUFBa0MsaUJBQU9ILE1BQVAsQ0FBY0csU0FBaEQsRUFBMkQsRUFBM0QsQztrQkFKQUMsUSIsImZpbGUiOiJjb21wL2FudGQvbGF5b3V0L1NLSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMYXlvdXR9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcbmltcG9ydCBPcmlnaW5MYXlvdXQgZnJvbSAnLi9PcmlnaW5MYXlvdXQnO1xuXG5MYXlvdXQuSGVhZGVyLmRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwge30sIE9yaWdpbkxheW91dC5kZWZhdWx0UHJvcHMsIExheW91dC5IZWFkZXIuZGVmYXVsdFByb3BzLCB7fSk7XG5MYXlvdXQuSGVhZGVyLnByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwge30sIE9yaWdpbkxheW91dC5wcm9wVHlwZXMsIExheW91dC5IZWFkZXIucHJvcFR5cGVzLCB7fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLSGVhZGVyIGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5kZWZhdWx0UHJvcHMsIExheW91dC5IZWFkZXIuZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogTGF5b3V0LkhlYWRlclxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCBMYXlvdXQuSGVhZGVyLnByb3BUeXBlcywge30pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ1NLSGVhZGVyJztcbiAgfVxufVxuIl19