'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _countup = require('countup.js');

var _countup2 = _interopRequireDefault(_countup);

var _skJs = require('sk-js');

var _skJs2 = _interopRequireDefault(_skJs);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Comp2 = require('../../util/Comp');

var _Comp3 = _interopRequireDefault(_Comp2);

var _REACT = require('../../util/REACT');

var _REACT2 = _interopRequireDefault(_REACT);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SKCountUp = function (_Comp) {
  _inherits(SKCountUp, _Comp);

  function SKCountUp() {
    var _ref;

    _classCallCheck(this, SKCountUp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = SKCountUp.__proto__ || Object.getPrototypeOf(SKCountUp)).call.apply(_ref, [this].concat(args)));
  }

  _createClass(SKCountUp, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props.duration !== nextProps.duration || this.props.end !== nextProps.end || this.props.start !== nextProps.start;
    }
  }, {
    key: 'updateUI',
    value: function updateUI(evt) {
      _get(SKCountUp.prototype.__proto__ || Object.getPrototypeOf(SKCountUp.prototype), 'updateUI', this).call(this, evt);
      this.startAnimation(this);
    }
  }, {
    key: 'startAnimation',
    value: function startAnimation(comp) {
      if (comp && comp.refs.countupDomRef) {
        var _comp$props = comp.props,
            decimal = _comp$props.decimal,
            decimals = _comp$props.decimals,
            duration = _comp$props.duration,
            easingFn = _comp$props.easingFn,
            end = _comp$props.end,
            formattingFn = _comp$props.formattingFn,
            onComplete = _comp$props.onComplete,
            onStart = _comp$props.onStart,
            prefix = _comp$props.prefix,
            separator = _comp$props.separator,
            start = _comp$props.start,
            suffix = _comp$props.suffix,
            useEasing = _comp$props.useEasing,
            useGrouping = _comp$props.useGrouping;


        end = this.skVal();

        var countupInstance = new _countup2.default(comp.refs.countupDomRef, start, end, decimals, duration, {
          decimal: decimal,
          easingFn: easingFn,
          formattingFn: formattingFn,
          separator: separator,
          prefix: prefix,
          suffix: suffix,
          useEasing: useEasing,
          useGrouping: useGrouping
        });

        if (_lodash2.default.isFunction(onStart)) {
          onStart();
        }

        countupInstance.start(onComplete);
      } else {
        throw new Error('You need to pass the CountUp component as an argument!\neg. this.myCountUp.startAnimation(this.myCountUp);');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          CompTag = _props.compTag,
          start = _props.start;


      return _react2.default.createElement(
        CompTag,
        _extends({}, this.compValidProps(CompTag), { ref: 'countupDomRef' }),
        start
      );
    }
  }]);

  return SKCountUp;
}(_Comp3.default);

SKCountUp.defaultProps = {
  compTag: _REACT2.default.TAG.span,
  decimal: _skJs2.default.CHAR_DOT,
  decimals: 0,
  duration: 3,
  easingFn: null,
  end: 100,
  formattingFn: null,
  onComplete: undefined,
  onStart: undefined,
  prefix: _skJs2.default.EMPTY,
  separator: _skJs2.default.CHAR_COMMA,
  start: 0,
  suffix: _skJs2.default.EMPTY,
  redraw: false,
  style: undefined,
  useEasing: true,
  useGrouping: true
};
SKCountUp.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, {
  decimal: _react2.default.PropTypes.string,
  decimals: _react2.default.PropTypes.number,
  duration: _react2.default.PropTypes.number,
  easingFn: _react2.default.PropTypes.func,
  end: _react2.default.PropTypes.number,
  formattingFn: _react2.default.PropTypes.func,
  onComplete: _react2.default.PropTypes.func,
  onStart: _react2.default.PropTypes.func,
  prefix: _react2.default.PropTypes.string,
  separator: _react2.default.PropTypes.string,
  start: _react2.default.PropTypes.number,
  suffix: _react2.default.PropTypes.string,
  useEasing: _react2.default.PropTypes.bool,
  useGrouping: _react2.default.PropTypes.bool
});
exports.default = SKCountUp;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvc2svU0tDb3VudFVwLmpzIl0sIm5hbWVzIjpbIlNLQ291bnRVcCIsImFyZ3MiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJwcm9wcyIsImR1cmF0aW9uIiwiZW5kIiwic3RhcnQiLCJldnQiLCJzdGFydEFuaW1hdGlvbiIsImNvbXAiLCJyZWZzIiwiY291bnR1cERvbVJlZiIsImRlY2ltYWwiLCJkZWNpbWFscyIsImVhc2luZ0ZuIiwiZm9ybWF0dGluZ0ZuIiwib25Db21wbGV0ZSIsIm9uU3RhcnQiLCJwcmVmaXgiLCJzZXBhcmF0b3IiLCJzdWZmaXgiLCJ1c2VFYXNpbmciLCJ1c2VHcm91cGluZyIsInNrVmFsIiwiY291bnR1cEluc3RhbmNlIiwiaXNGdW5jdGlvbiIsIkVycm9yIiwiQ29tcFRhZyIsImNvbXBUYWciLCJjb21wVmFsaWRQcm9wcyIsImRlZmF1bHRQcm9wcyIsIlRBRyIsInNwYW4iLCJDSEFSX0RPVCIsInVuZGVmaW5lZCIsIkVNUFRZIiwiQ0hBUl9DT01NQSIsInJlZHJhdyIsInN0eWxlIiwicHJvcFR5cGVzIiwiYXNzaWduIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibnVtYmVyIiwiZnVuYyIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7QUFxQ25CLHVCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSw0SUFDVkEsSUFEVTtBQUVwQjs7OzswQ0FFcUJDLFMsRUFBV0MsUyxFQUFXO0FBQzFDLGFBQU8sS0FBS0MsS0FBTCxDQUFXQyxRQUFYLEtBQXdCSCxVQUFVRyxRQUFsQyxJQUNMLEtBQUtELEtBQUwsQ0FBV0UsR0FBWCxLQUFtQkosVUFBVUksR0FEeEIsSUFFTCxLQUFLRixLQUFMLENBQVdHLEtBQVgsS0FBcUJMLFVBQVVLLEtBRmpDO0FBR0Q7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QyxPQUFLLGdCQUFNb0MsU0FBTixDQUFnQkUsTUFMMEI7QUFNL0M1QixnQkFBYyxnQkFBTTBCLFNBQU4sQ0FBZ0JHLElBTmlCO0FBTy9DNUIsY0FBWSxnQkFBTXlCLFNBQU4sQ0FBZ0JHLElBUG1CO0FBUS9DM0IsV0FBUyxnQkFBTXdCLFNBQU4sQ0FBZ0JHLElBUnNCO0FBUy9DMUIsVUFBUSxnQkFBTXVCLFNBQU4sQ0FBZ0JDLE1BVHVCO0FBVS9DdkIsYUFBVyxnQkFBTXNCLFNBQU4sQ0FBZ0JDLE1BVm9CO0FBVy9DcEMsU0FBTyxnQkFBTW1DLFNBQU4sQ0FBZ0JFLE1BWHdCO0FBWS9DdkIsVUFBUSxnQkFBTXFCLFNBQU4sQ0FBZ0JDLE1BWnVCO0FBYS9DckIsYUFBVyxnQkFBTW9CLFNBQU4sQ0FBZ0JJLElBYm9CO0FBYy9DdkIsZUFBYSxnQkFBTW1CLFNBQU4sQ0FBZ0JJO0FBZGtCLENBQTlCLEM7a0JBcEJBOUMsUyIsImZpbGUiOiJjb21wL3NrL1NLQ291bnRVcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb3VudFVwIGZyb20gJ2NvdW50dXAuanMnO1xuaW1wb3J0IFNLIGZyb20gJ3NrLWpzJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbXAgZnJvbSAnLi4vLi4vdXRpbC9Db21wJztcbmltcG9ydCBSRUFDVCBmcm9tICcuLi8uLi91dGlsL1JFQUNUJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tDb3VudFVwIGV4dGVuZHMgQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29tcFRhZzogUkVBQ1QuVEFHLnNwYW4sXG4gICAgZGVjaW1hbDogU0suQ0hBUl9ET1QsXG4gICAgZGVjaW1hbHM6IDAsXG4gICAgZHVyYXRpb246IDMsXG4gICAgZWFzaW5nRm46IG51bGwsXG4gICAgZW5kOiAxMDAsXG4gICAgZm9ybWF0dGluZ0ZuOiBudWxsLFxuICAgIG9uQ29tcGxldGU6IHVuZGVmaW5lZCxcbiAgICBvblN0YXJ0OiB1bmRlZmluZWQsXG4gICAgcHJlZml4OiBTSy5FTVBUWSxcbiAgICBzZXBhcmF0b3I6IFNLLkNIQVJfQ09NTUEsXG4gICAgc3RhcnQ6IDAsXG4gICAgc3VmZml4OiBTSy5FTVBUWSxcbiAgICByZWRyYXc6IGZhbHNlLFxuICAgIHN0eWxlOiB1bmRlZmluZWQsXG4gICAgdXNlRWFzaW5nOiB0cnVlLFxuICAgIHVzZUdyb3VwaW5nOiB0cnVlXG4gIH07XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIENvbXAucHJvcFR5cGVzLCB7XG4gICAgZGVjaW1hbDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkZWNpbWFsczogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBkdXJhdGlvbjogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBlYXNpbmdGbjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgZW5kOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGZvcm1hdHRpbmdGbjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Db21wbGV0ZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TdGFydDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgcHJlZml4OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNlcGFyYXRvcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdGFydDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBzdWZmaXg6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdXNlRWFzaW5nOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICB1c2VHcm91cGluZzogUmVhY3QuUHJvcFR5cGVzLmJvb2xcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZHVyYXRpb24gIT09IG5leHRQcm9wcy5kdXJhdGlvbiB8fFxuICAgICAgdGhpcy5wcm9wcy5lbmQgIT09IG5leHRQcm9wcy5lbmQgfHxcbiAgICAgIHRoaXMucHJvcHMuc3RhcnQgIT09IG5leHRQcm9wcy5zdGFydDtcbiAgfVxuXG4gIHVwZGF0ZVVJKGV2dCkge1xuICAgIHN1cGVyLnVwZGF0ZVVJKGV2dCk7XG4gICAgdGhpcy5zdGFydEFuaW1hdGlvbih0aGlzKTtcbiAgfVxuXG4gIHN0YXJ0QW5pbWF0aW9uKGNvbXApIHtcbiAgICBpZiAoY29tcCAmJiBjb21wLnJlZnMuY291bnR1cERvbVJlZikge1xuICAgICAgbGV0IHtcbiAgICAgICAgZGVjaW1hbCxcbiAgICAgICAgZGVjaW1hbHMsXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBlYXNpbmdGbixcbiAgICAgICAgZW5kLFxuICAgICAgICBmb3JtYXR0aW5nRm4sXG4gICAgICAgIG9uQ29tcGxldGUsXG4gICAgICAgIG9uU3RhcnQsXG4gICAgICAgIHByZWZpeCxcbiAgICAgICAgc2VwYXJhdG9yLFxuICAgICAgICBzdGFydCxcbiAgICAgICAgc3VmZml4LFxuICAgICAgICB1c2VFYXNpbmcsXG4gICAgICAgIHVzZUdyb3VwaW5nXG4gICAgICB9ID0gY29tcC5wcm9wcztcblxuICAgICAgZW5kID0gdGhpcy5za1ZhbCgpO1xuXG4gICAgICBjb25zdCBjb3VudHVwSW5zdGFuY2UgPSBuZXcgQ291bnRVcChcbiAgICAgICAgY29tcC5yZWZzLmNvdW50dXBEb21SZWYsXG4gICAgICAgIHN0YXJ0LFxuICAgICAgICBlbmQsXG4gICAgICAgIGRlY2ltYWxzLFxuICAgICAgICBkdXJhdGlvbixcbiAgICAgICAge1xuICAgICAgICAgIGRlY2ltYWwsXG4gICAgICAgICAgZWFzaW5nRm4sXG4gICAgICAgICAgZm9ybWF0dGluZ0ZuLFxuICAgICAgICAgIHNlcGFyYXRvcixcbiAgICAgICAgICBwcmVmaXgsXG4gICAgICAgICAgc3VmZml4LFxuICAgICAgICAgIHVzZUVhc2luZyxcbiAgICAgICAgICB1c2VHcm91cGluZ1xuICAgICAgICB9LFxuICAgICAgKTtcblxuICAgICAgaWYgKF8uaXNGdW5jdGlvbihvblN0YXJ0KSkge1xuICAgICAgICBvblN0YXJ0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvdW50dXBJbnN0YW5jZS5zdGFydChvbkNvbXBsZXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnWW91IG5lZWQgdG8gcGFzcyB0aGUgQ291bnRVcCBjb21wb25lbnQgYXMgYW4gYXJndW1lbnQhXFxuZWcuIHRoaXMubXlDb3VudFVwLnN0YXJ0QW5pbWF0aW9uKHRoaXMubXlDb3VudFVwKTsnLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnLCBzdGFydH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLmNvbXBWYWxpZFByb3BzKENvbXBUYWcpfSByZWY9J2NvdW50dXBEb21SZWYnPlxuICAgICAgICB7c3RhcnR9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxufVxuIl19