'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

require('antd/lib/form/style');

var _skJs = require('sk-js');

var _OriginForm = require('./OriginForm');

var _OriginForm2 = _interopRequireDefault(_OriginForm);

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//origin exist, use origin
var SKForm = function (_AntdComp) {
  _inherits(SKForm, _AntdComp);

  function SKForm() {
    var _ref;

    _classCallCheck(this, SKForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKForm.__proto__ || Object.getPrototypeOf(SKForm)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKForm';
    return _this;
  }

  return SKForm;
}(_AntdComp3.default);

SKForm.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _OriginForm2.default.defaultProps, {
  compTag: _form2.default
});
SKForm.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _OriginForm2.default.propTypes, {});
exports.default = SKForm;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9mb3JtL1NLRm9ybS5qcyJdLCJuYW1lcyI6WyJTS0Zvcm0iLCJhcmdzIiwiY29tcE5hbWUiLCJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJjb21wVGFnIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTtJQUNxQkEsTTs7O0FBTW5CLG9CQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSwySUFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixRQUFoQjtBQUZtQjtBQUdwQjs7Ozs7QUFUa0JGLE0sQ0FDWkcsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNELFlBQXZCLEVBQXFDLHFCQUFXQSxZQUFoRCxFQUE4RDtBQUNsRkU7QUFEa0YsQ0FBOUQsQztBQURITCxNLENBSVpNLFMsR0FBWSxTQUFHRixNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRSxTQUF2QixFQUFrQyxxQkFBV0EsU0FBN0MsRUFBd0QsRUFBeEQsQztrQkFKQU4sTSIsImZpbGUiOiJjb21wL2FudGQvZm9ybS9TS0Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Zvcm19IGZyb20gJ2FudGQnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IE9yaWdpbkZvcm0gZnJvbSAnLi9PcmlnaW5Gb3JtJztcbmltcG9ydCBBbnRkQ29tcCBmcm9tICcuLi9BbnRkQ29tcCc7XG5cbi8vb3JpZ2luIGV4aXN0LCB1c2Ugb3JpZ2luXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS0Zvcm0gZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywgT3JpZ2luRm9ybS5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBGb3JtXG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5wcm9wVHlwZXMsIE9yaWdpbkZvcm0ucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tGb3JtJztcbiAgfVxufVxuIl19