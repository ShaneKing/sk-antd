'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/input/style');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _AntdComp2 = require('./AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

var _Const = require('../../util/Const');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_input2.default.defaultProps = _skJs.SK.assign({}, {
  disabled: false,
  size: _Const.SIZE.Default,
  type: _Const.INPUT_TYPE.Text
}, _input2.default.defaultProps, {});

_input2.default.propTypes = _skJs.SK.assign({}, {
  addonAfter: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  addonBefore: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  defaultValue: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  id: _propTypes2.default.string,
  prefix: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  size: _propTypes2.default.string,
  suffix: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  type: _propTypes2.default.string,
  value: _propTypes2.default.string,
  onPressEnter: _propTypes2.default.func
}, _input2.default.propTypes, {});

var SKInput = function (_AntdComp) {
  _inherits(SKInput, _AntdComp);

  function SKInput() {
    var _ref;

    _classCallCheck(this, SKInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKInput.__proto__ || Object.getPrototypeOf(SKInput)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKInput';
    return _this;
  }

  _createClass(SKInput, [{
    key: 'handleChange',
    value: function handleChange(domEvent) {
      this.skVal(domEvent.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var CompTag = this.props.compTag;


      return _react2.default.createElement(
        CompTag,
        _extends({}, this.skTransProps2Self(CompTag), {
          onChange: this.handleChange.bind(this),
          size: this.skProp(_AntdComp3.default.SK_PROPS.SIZE),
          value: this.skVal() }),
        this.skTransProps2Child()
      );
    }
  }]);

  return SKInput;
}(_AntdComp3.default);

SKInput.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _input2.default.defaultProps, {
  compTag: _input2.default
});
SKInput.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _input2.default.propTypes, {});
exports.default = SKInput;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS0lucHV0LmpzIl0sIm5hbWVzIjpbImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsImRpc2FibGVkIiwic2l6ZSIsIkRlZmF1bHQiLCJ0eXBlIiwiVGV4dCIsInByb3BUeXBlcyIsImFkZG9uQWZ0ZXIiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJub2RlIiwiYWRkb25CZWZvcmUiLCJkZWZhdWx0VmFsdWUiLCJib29sIiwiaWQiLCJwcmVmaXgiLCJzdWZmaXgiLCJ2YWx1ZSIsIm9uUHJlc3NFbnRlciIsImZ1bmMiLCJTS0lucHV0IiwiYXJncyIsImNvbXBOYW1lIiwiZG9tRXZlbnQiLCJza1ZhbCIsInRhcmdldCIsIkNvbXBUYWciLCJwcm9wcyIsImNvbXBUYWciLCJza1RyYW5zUHJvcHMyU2VsZiIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJza1Byb3AiLCJTS19QUk9QUyIsIlNJWkUiLCJza1RyYW5zUHJvcHMyQ2hpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBLGdCQUFNQSxZQUFOLEdBQXFCLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDakNDLFlBQVUsS0FEdUI7QUFFakNDLFFBQU0sWUFBS0MsT0FGc0I7QUFHakNDLFFBQU0sa0JBQVdDO0FBSGdCLENBQWQsRUFJbEIsZ0JBQU1OLFlBSlksRUFJRSxFQUpGLENBQXJCOztBQU1BLGdCQUFNTyxTQUFOLEdBQWtCLFNBQUdOLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDOUJPLGNBQVksb0JBQVVDLFNBQVYsQ0FBb0IsQ0FDOUIsb0JBQVVDLE1BRG9CLEVBRTlCLG9CQUFVQyxJQUZvQixDQUFwQixDQURrQjtBQUs5QkMsZUFBYSxvQkFBVUgsU0FBVixDQUFvQixDQUMvQixvQkFBVUMsTUFEcUIsRUFFL0Isb0JBQVVDLElBRnFCLENBQXBCLENBTGlCO0FBUzlCRSxnQkFBYyxvQkFBVUgsTUFUTTtBQVU5QlIsWUFBVSxvQkFBVVksSUFWVTtBQVc5QkMsTUFBSSxvQkFBVUwsTUFYZ0I7QUFZOUJNLFVBQVEsb0JBQVVQLFNBQVYsQ0FBb0IsQ0FDMUIsb0JBQVVDLE1BRGdCLEVBRTFCLG9CQUFVQyxJQUZnQixDQUFwQixDQVpzQjtBQWdCOUJSLFFBQU0sb0JBQVVPLE1BaEJjO0FBaUI5Qk8sVUFBUSxvQkFBVVIsU0FBVixDQUFvQixDQUMxQixvQkFBVUMsTUFEZ0IsRUFFMUIsb0JBQVVDLElBRmdCLENBQXBCLENBakJzQjtBQXFCOUJOLFFBQU0sb0JBQVVLLE1BckJjO0FBc0I5QlEsU0FBTyxvQkFBVVIsTUF0QmE7QUF1QjlCUyxnQkFBYyxvQkFBVUM7QUF2Qk0sQ0FBZCxFQXdCZixnQkFBTWIsU0F4QlMsRUF3QkUsRUF4QkYsQ0FBbEI7O0lBMEJxQmMsTzs7O0FBTW5CLHFCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSw2SUFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixTQUFoQjtBQUZtQjtBQUdwQjs7OztpQ0FFWUMsUSxFQUFVO0FBQ3JCLFdBQUtDLEtBQUwsQ0FBV0QsU0FBU0UsTUFBVCxDQUFnQlIsS0FBM0I7QUFDRDs7OzZCQUVRO0FBQUEsVUFDT1MsT0FEUCxHQUNrQixLQUFLQyxLQUR2QixDQUNGQyxPQURFOzs7QUFHUCxhQUNFO0FBQUMsZUFBRDtBQUFBLHFCQUFhLEtBQUtDLGlCQUFMLENBQXVCSCxPQUF2QixDQUFiO0FBQ1Msb0JBQVUsS0FBS0ksWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FEbkI7QUFFUyxnQkFBTSxLQUFLQyxNQUFMLENBQVksbUJBQVNDLFFBQVQsQ0FBa0JDLElBQTlCLENBRmY7QUFHUyxpQkFBTyxLQUFLVixLQUFMLEVBSGhCO0FBSUcsYUFBS1csa0JBQUw7QUFKSCxPQURGO0FBUUQ7Ozs7OztBQTFCa0JmLE8sQ0FDWnJCLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQyxnQkFBTUEsWUFBM0MsRUFBeUQ7QUFDN0U2QjtBQUQ2RSxDQUF6RCxDO0FBREhSLE8sQ0FJWmQsUyxHQUFZLFNBQUdOLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNNLFNBQXZCLEVBQWtDLGdCQUFNQSxTQUF4QyxFQUFtRCxFQUFuRCxDO2tCQUpBYyxPIiwiZmlsZSI6ImNvbXAvYW50ZC9TS0lucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbnB1dH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBBbnRkQ29tcCBmcm9tICcuL0FudGRDb21wJztcbmltcG9ydCB7SU5QVVRfVFlQRSwgU0laRX0gZnJvbSAnLi4vLi4vdXRpbC9Db25zdCc7XG5cbklucHV0LmRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwge1xuICBkaXNhYmxlZDogZmFsc2UsXG4gIHNpemU6IFNJWkUuRGVmYXVsdCxcbiAgdHlwZTogSU5QVVRfVFlQRS5UZXh0XG59LCBJbnB1dC5kZWZhdWx0UHJvcHMsIHt9KTtcblxuSW5wdXQucHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCB7XG4gIGFkZG9uQWZ0ZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm5vZGVcbiAgXSksXG4gIGFkZG9uQmVmb3JlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5ub2RlXG4gIF0pLFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHByZWZpeDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubm9kZVxuICBdKSxcbiAgc2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3VmZml4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5ub2RlXG4gIF0pLFxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25QcmVzc0VudGVyOiBQcm9wVHlwZXMuZnVuY1xufSwgSW5wdXQucHJvcFR5cGVzLCB7fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLSW5wdXQgZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywgSW5wdXQuZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogSW5wdXRcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLnByb3BUeXBlcywgSW5wdXQucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tJbnB1dCc7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZG9tRXZlbnQpIHtcbiAgICB0aGlzLnNrVmFsKGRvbUV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoQ29tcFRhZyl9XG4gICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgIHNpemU9e3RoaXMuc2tQcm9wKEFudGRDb21wLlNLX1BST1BTLlNJWkUpfVxuICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc2tWYWwoKX0+XG4gICAgICAgIHt0aGlzLnNrVHJhbnNQcm9wczJDaGlsZCgpfVxuICAgICAgPC9Db21wVGFnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==