'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _skJs = require('sk-js');

var _Comp2 = require('../Comp');

var _Comp3 = _interopRequireDefault(_Comp2);

var _REACT = require('../../util/REACT');

var _REACT2 = _interopRequireDefault(_REACT);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SKCanvas = function (_Comp) {
  _inherits(SKCanvas, _Comp);

  function SKCanvas() {
    var _ref;

    _classCallCheck(this, SKCanvas);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKCanvas.__proto__ || Object.getPrototypeOf(SKCanvas)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKCanvas';
    return _this;
  }

  return SKCanvas;
}(_Comp3.default);

SKCanvas.defaultProps = _skJs.SK.assign({}, _Comp3.default.defaultProps, {
  compTag: _REACT2.default.TAG.canvas
});
exports.default = SKCanvas;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvaHRtbC9TS0NhbnZhcy5qcyJdLCJuYW1lcyI6WyJTS0NhbnZhcyIsImFyZ3MiLCJjb21wTmFtZSIsImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsImNvbXBUYWciLCJUQUciLCJjYW52YXMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7O0FBS25CLHNCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSwrSUFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixVQUFoQjtBQUZtQjtBQUdwQjs7Ozs7QUFSa0JGLFEsQ0FDWkcsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0QsWUFBbkIsRUFBaUM7QUFDckRFLFdBQVMsZ0JBQU1DLEdBQU4sQ0FBVUM7QUFEa0MsQ0FBakMsQztrQkFESFAsUSIsImZpbGUiOiJjb21wL2h0bWwvU0tDYW52YXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NLfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgQ29tcCBmcm9tICcuLi9Db21wJztcbmltcG9ydCBSRUFDVCBmcm9tICcuLi8uLi91dGlsL1JFQUNUJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tDYW52YXMgZXh0ZW5kcyBDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgQ29tcC5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBSRUFDVC5UQUcuY2FudmFzXG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ1NLQ2FudmFzJztcbiAgfVxufVxuIl19