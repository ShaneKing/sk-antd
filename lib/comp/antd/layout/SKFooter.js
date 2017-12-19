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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SKFooter = function (_AntdComp) {
  _inherits(SKFooter, _AntdComp);

  function SKFooter() {
    var _ref;

    _classCallCheck(this, SKFooter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKFooter.__proto__ || Object.getPrototypeOf(SKFooter)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKFooter';
    return _this;
  }

  return SKFooter;
}(_AntdComp3.default);

SKFooter.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, {
  compTag: _layout2.default.Footer
});
SKFooter.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, {});
exports.default = SKFooter;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9sYXlvdXQvU0tGb290ZXIuanMiXSwibmFtZXMiOlsiU0tGb290ZXIiLCJhcmdzIiwiY29tcE5hbWUiLCJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJjb21wVGFnIiwiRm9vdGVyIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7QUFNbkIsc0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLCtJQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLFVBQWhCO0FBRm1CO0FBR3BCOzs7OztBQVRrQkYsUSxDQUNaRyxZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUM7QUFDekRFLFdBQVMsaUJBQU9DO0FBRHlDLENBQXJDLEM7QUFESE4sUSxDQUlaTyxTLEdBQVksU0FBR0gsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0csU0FBdkIsRUFBa0MsRUFBbEMsQztrQkFKQVAsUSIsImZpbGUiOiJjb21wL2FudGQvbGF5b3V0L1NLRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMYXlvdXR9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tGb290ZXIgZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IExheW91dC5Gb290ZXJcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLnByb3BUeXBlcywge30pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ1NLRm9vdGVyJztcbiAgfVxufVxuIl19