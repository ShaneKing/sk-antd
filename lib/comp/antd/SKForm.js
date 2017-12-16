'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

require('antd/lib/form/style');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _skJs = require('sk-js');

var _AntdComp2 = require('./AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

var _Const = require('../../util/Const');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_form2.default.defaultProps = _skJs.SK.assign({}, {
  hideRequiredMark: false,
  layout: _Const.Dir.Horizontal
}, _form2.default.defaultProps, {});

_form2.default.propTypes = _skJs.SK.assign({}, {
  form: _propTypes2.default.object,
  hideRequiredMark: _propTypes2.default.bool,
  layout: _propTypes2.default.oneOf(Object.values(_Const.Dir)),
  onSubmit: _propTypes2.default.func
}, _form2.default.propTypes, {});

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

SKForm.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _form2.default.defaultProps, {
  compTag: _form2.default
});
SKForm.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _form2.default.propTypes, {});
exports.default = SKForm;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS0Zvcm0uanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwiaGlkZVJlcXVpcmVkTWFyayIsImxheW91dCIsIkhvcml6b250YWwiLCJwcm9wVHlwZXMiLCJmb3JtIiwib2JqZWN0IiwiYm9vbCIsIm9uZU9mIiwiT2JqZWN0IiwidmFsdWVzIiwib25TdWJtaXQiLCJmdW5jIiwiU0tGb3JtIiwiYXJncyIsImNvbXBOYW1lIiwiY29tcFRhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUEsZUFBS0EsWUFBTCxHQUFvQixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjO0FBQ2hDQyxvQkFBa0IsS0FEYztBQUVoQ0MsVUFBUSxXQUFJQztBQUZvQixDQUFkLEVBR2pCLGVBQUtKLFlBSFksRUFHRSxFQUhGLENBQXBCOztBQUtBLGVBQUtLLFNBQUwsR0FBaUIsU0FBR0osTUFBSCxDQUFVLEVBQVYsRUFBYztBQUM3QkssUUFBTSxvQkFBVUMsTUFEYTtBQUU3Qkwsb0JBQWtCLG9CQUFVTSxJQUZDO0FBRzdCTCxVQUFRLG9CQUFVTSxLQUFWLENBQWdCQyxPQUFPQyxNQUFQLFlBQWhCLENBSHFCO0FBSTdCQyxZQUFVLG9CQUFVQztBQUpTLENBQWQsRUFLZCxlQUFLUixTQUxTLEVBS0UsRUFMRixDQUFqQjs7SUFPcUJTLE07OztBQU9uQixvQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsMklBQ1ZBLElBRFU7O0FBRW5CLFVBQUtDLFFBQUwsR0FBZ0IsUUFBaEI7QUFGbUI7QUFHcEI7Ozs7O0FBVmtCRixNLENBQ1pkLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQyxlQUFLQSxZQUExQyxFQUF3RDtBQUM1RWlCO0FBRDRFLENBQXhELEM7QUFESEgsTSxDQUlaVCxTLEdBQVksU0FBR0osTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0ksU0FBdkIsRUFBa0MsZUFBS0EsU0FBdkMsRUFBa0QsRUFBbEQsQztrQkFKQVMsTSIsImZpbGUiOiJjb21wL2FudGQvU0tGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGb3JtfSBmcm9tICdhbnRkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge1NLfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgQW50ZENvbXAgZnJvbSAnLi9BbnRkQ29tcCc7XG5pbXBvcnQge0Rpcn0gZnJvbSAnLi4vLi4vdXRpbC9Db25zdCc7XG5cbkZvcm0uZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCB7XG4gIGhpZGVSZXF1aXJlZE1hcms6IGZhbHNlLFxuICBsYXlvdXQ6IERpci5Ib3Jpem9udGFsXG59LCBGb3JtLmRlZmF1bHRQcm9wcywge30pO1xuXG5Gb3JtLnByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwge1xuICBmb3JtOiBQcm9wVHlwZXMub2JqZWN0LFxuICBoaWRlUmVxdWlyZWRNYXJrOiBQcm9wVHlwZXMuYm9vbCxcbiAgbGF5b3V0OiBQcm9wVHlwZXMub25lT2YoT2JqZWN0LnZhbHVlcyhEaXIpKSxcbiAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jXG59LCBGb3JtLnByb3BUeXBlcywge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS0Zvcm0gZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywgRm9ybS5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBGb3JtXG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5wcm9wVHlwZXMsIEZvcm0ucHJvcFR5cGVzLCB7fSk7XG5cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS0Zvcm0nO1xuICB9XG59XG4iXX0=