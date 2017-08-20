'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style2 = require('antd/lib/layout/style');

var _layout = require('antd/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

var _skJs = require('sk-js');

var _skJs2 = _interopRequireDefault(_skJs);

var _Comp2 = require('../../util/Comp');

var _Comp3 = _interopRequireDefault(_Comp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SKHeader = function (_Comp) {
  _inherits(SKHeader, _Comp);

  function SKHeader() {
    var _ref;

    _classCallCheck(this, SKHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = SKHeader.__proto__ || Object.getPrototypeOf(SKHeader)).call.apply(_ref, [this].concat(args)));
  }

  return SKHeader;
}(_Comp3.default);

SKHeader.defaultProps = {
  compTag: _layout2.default.Footer
};
SKHeader.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _layout2.default.Footer.propTypes, {});
exports.default = SKHeader;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS0Zvb3Rlci5qcyJdLCJuYW1lcyI6WyJTS0hlYWRlciIsImFyZ3MiLCJkZWZhdWx0UHJvcHMiLCJjb21wVGFnIiwiRm9vdGVyIiwicHJvcFR5cGVzIiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFE7OztBQU1uQixzQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsMElBQ1ZBLElBRFU7QUFFcEI7Ozs7O0FBUmtCRCxRLENBQ1pFLFksR0FBZTtBQUNwQkMsV0FBUyxpQkFBT0M7QUFESSxDO0FBREhKLFEsQ0FJWkssUyxHQUFZLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0QsU0FBbkIsRUFBOEIsaUJBQU9ELE1BQVAsQ0FBY0MsU0FBNUMsRUFBdUQsRUFBdkQsQztrQkFKQUwsUSIsImZpbGUiOiJjb21wL2FudGQvU0tGb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xheW91dH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgU0sgZnJvbSAnc2stanMnO1xuaW1wb3J0IENvbXAgZnJvbSAnLi4vLi4vdXRpbC9Db21wJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tIZWFkZXIgZXh0ZW5kcyBDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb21wVGFnOiBMYXlvdXQuRm9vdGVyXG4gIH07XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIENvbXAucHJvcFR5cGVzLCBMYXlvdXQuRm9vdGVyLnByb3BUeXBlcywge30pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxufVxuIl19