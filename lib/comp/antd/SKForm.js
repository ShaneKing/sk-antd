'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style2 = require('antd/lib/form/style');

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _skJs = require('sk-js');

var _skJs2 = _interopRequireDefault(_skJs);

var _Comp2 = require('../../util/Comp');

var _Comp3 = _interopRequireDefault(_Comp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SKForm = function (_Comp) {
  _inherits(SKForm, _Comp);

  function SKForm() {
    var _ref;

    _classCallCheck(this, SKForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = SKForm.__proto__ || Object.getPrototypeOf(SKForm)).call.apply(_ref, [this].concat(args)));
  }

  return SKForm;
}(_Comp3.default);

SKForm.defaultProps = {
  compTag: _form2.default
};
SKForm.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _form2.default.propTypes, {});
exports.default = SKForm;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS0Zvcm0uanMiXSwibmFtZXMiOlsiU0tGb3JtIiwiYXJncyIsImRlZmF1bHRQcm9wcyIsImNvbXBUYWciLCJwcm9wVHlwZXMiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7O0FBTW5CLG9CQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSxzSUFDVkEsSUFEVTtBQUVwQjs7Ozs7QUFSa0JELE0sQ0FDWkUsWSxHQUFlO0FBQ3BCQztBQURvQixDO0FBREhILE0sQ0FJWkksUyxHQUFZLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0QsU0FBbkIsRUFBOEIsZUFBS0EsU0FBbkMsRUFBOEMsRUFBOUMsQztrQkFKQUosTSIsImZpbGUiOiJjb21wL2FudGQvU0tGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGb3JtfSBmcm9tICdhbnRkJztcbmltcG9ydCBTSyBmcm9tICdzay1qcyc7XG5pbXBvcnQgQ29tcCBmcm9tICcuLi8uLi91dGlsL0NvbXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS0Zvcm0gZXh0ZW5kcyBDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb21wVGFnOiBGb3JtXG4gIH07XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIENvbXAucHJvcFR5cGVzLCBGb3JtLnByb3BUeXBlcywge30pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxufVxuIl19