'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _countup = require('countup.js');

var _countup2 = _interopRequireDefault(_countup);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

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
    key: 'componentDidMount',
    value: function componentDidMount() {
      _get(SKCountUp.prototype.__proto__ || Object.getPrototypeOf(SKCountUp.prototype), 'componentDidMount', this).call(this);
      this.startAnimation(this);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      _get(SKCountUp.prototype.__proto__ || Object.getPrototypeOf(SKCountUp.prototype), 'componentDidUpdate', this).call(this);
      this.startAnimation(this);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props.duration !== nextProps.duration || this.props.end !== nextProps.end || (0, _jquery2.default)(this.refs.countupDomRef).text() != this.skVal().skCurrencyFmt(nextProps.decimals) || this.props.start !== nextProps.start;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvc2svU0tDb3VudFVwLmpzIl0sIm5hbWVzIjpbIlNLQ291bnRVcCIsImFyZ3MiLCJzdGFydEFuaW1hdGlvbiIsIm5leHRQcm9wcyIsIm5leHRTdGF0ZSIsInByb3BzIiwiZHVyYXRpb24iLCJlbmQiLCJyZWZzIiwiY291bnR1cERvbVJlZiIsInRleHQiLCJza1ZhbCIsInNrQ3VycmVuY3lGbXQiLCJkZWNpbWFscyIsInN0YXJ0IiwiY29tcCIsImRlY2ltYWwiLCJlYXNpbmdGbiIsImZvcm1hdHRpbmdGbiIsIm9uQ29tcGxldGUiLCJvblN0YXJ0IiwicHJlZml4Iiwic2VwYXJhdG9yIiwic3VmZml4IiwidXNlRWFzaW5nIiwidXNlR3JvdXBpbmciLCJjb3VudHVwSW5zdGFuY2UiLCJpc0Z1bmN0aW9uIiwiRXJyb3IiLCJDb21wVGFnIiwiY29tcFRhZyIsImNvbXBWYWxpZFByb3BzIiwiZGVmYXVsdFByb3BzIiwiVEFHIiwic3BhbiIsIkNIQVJfRE9UIiwidW5kZWZpbmVkIiwiRU1QVFkiLCJDSEFSX0NPTU1BIiwicmVkcmF3Iiwic3R5bGUiLCJwcm9wVHlwZXMiLCJhc3NpZ24iLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJudW1iZXIiLCJmdW5jIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7O0FBcUNuQix1QkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsNElBQ1ZBLElBRFU7QUFFcEI7Ozs7d0NBRW1CO0FBQ2xCO0FBQ0EsV0FBS0MsY0FBTCxDQUFvQixJQUFwQjtBQUNEOzs7eUNBRW9CO0FBQ25CO0FBQ0EsV0FBS0EsY0FBTCxDQUFvQixJQUFwQjtBQUNEOzs7MENBRXFCQyxTLEVBQVdDLFMsRUFBVztBQUMxQyxhQUFPLEtBQUtDLEtBQUwsQ0FBV0Ms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Z0JBQU0yQixTQUFOLENBQWdCQyxNQURzQjtBQUUvQy9CLFlBQVUsZ0JBQU04QixTQUFOLENBQWdCRSxNQUZxQjtBQUcvQ3ZDLFlBQVUsZ0JBQU1xQyxTQUFOLENBQWdCRSxNQUhxQjtBQUkvQzVCLFlBQVUsZ0JBQU0wQixTQUFOLENBQWdCRyxJQUpxQjtBQUsvQ3ZDLE9BQUssZ0JBQU1vQyxTQUFOLENBQWdCRSxNQUwwQjtBQU0vQzNCLGdCQUFjLGdCQUFNeUIsU0FBTixDQUFnQkcsSUFOaUI7QUFPL0MzQixjQUFZLGdCQUFNd0IsU0FBTixDQUFnQkcsSUFQbUI7QUFRL0MxQixXQUFTLGdCQUFNdUIsU0FBTixDQUFnQkcsSUFSc0I7QUFTL0N6QixVQUFRLGdCQUFNc0IsU0FBTixDQUFnQkMsTUFUdUI7QUFVL0N0QixhQUFXLGdCQUFNcUIsU0FBTixDQUFnQkMsTUFWb0I7QUFXL0M5QixTQUFPLGdCQUFNNkIsU0FBTixDQUFnQkUsTUFYd0I7QUFZL0N0QixVQUFRLGdCQUFNb0IsU0FBTixDQUFnQkMsTUFadUI7QUFhL0NwQixhQUFXLGdCQUFNbUIsU0FBTixDQUFnQkksSUFib0I7QUFjL0N0QixlQUFhLGdCQUFNa0IsU0FBTixDQUFnQkk7QUFka0IsQ0FBOUIsQztrQkFwQkEvQyxTIiwiZmlsZSI6ImNvbXAvc2svU0tDb3VudFVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvdW50VXAgZnJvbSAnY291bnR1cC5qcyc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IFNLIGZyb20gJ3NrLWpzJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbXAgZnJvbSAnLi4vLi4vdXRpbC9Db21wJztcbmltcG9ydCBSRUFDVCBmcm9tICcuLi8uLi91dGlsL1JFQUNUJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tDb3VudFVwIGV4dGVuZHMgQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29tcFRhZzogUkVBQ1QuVEFHLnNwYW4sXG4gICAgZGVjaW1hbDogU0suQ0hBUl9ET1QsXG4gICAgZGVjaW1hbHM6IDAsXG4gICAgZHVyYXRpb246IDMsXG4gICAgZWFzaW5nRm46IG51bGwsXG4gICAgZW5kOiAxMDAsXG4gICAgZm9ybWF0dGluZ0ZuOiBudWxsLFxuICAgIG9uQ29tcGxldGU6IHVuZGVmaW5lZCxcbiAgICBvblN0YXJ0OiB1bmRlZmluZWQsXG4gICAgcHJlZml4OiBTSy5FTVBUWSxcbiAgICBzZXBhcmF0b3I6IFNLLkNIQVJfQ09NTUEsXG4gICAgc3RhcnQ6IDAsXG4gICAgc3VmZml4OiBTSy5FTVBUWSxcbiAgICByZWRyYXc6IGZhbHNlLFxuICAgIHN0eWxlOiB1bmRlZmluZWQsXG4gICAgdXNlRWFzaW5nOiB0cnVlLFxuICAgIHVzZUdyb3VwaW5nOiB0cnVlXG4gIH07XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIENvbXAucHJvcFR5cGVzLCB7XG4gICAgZGVjaW1hbDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkZWNpbWFsczogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBkdXJhdGlvbjogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBlYXNpbmdGbjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgZW5kOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGZvcm1hdHRpbmdGbjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Db21wbGV0ZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TdGFydDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgcHJlZml4OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNlcGFyYXRvcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdGFydDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBzdWZmaXg6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdXNlRWFzaW5nOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICB1c2VHcm91cGluZzogUmVhY3QuUHJvcFR5cGVzLmJvb2xcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc3VwZXIuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgICB0aGlzLnN0YXJ0QW5pbWF0aW9uKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHN1cGVyLmNvbXBvbmVudERpZFVwZGF0ZSgpO1xuICAgIHRoaXMuc3RhcnRBbmltYXRpb24odGhpcyk7XG4gIH1cblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5kdXJhdGlvbiAhPT0gbmV4dFByb3BzLmR1cmF0aW9uIHx8XG4gICAgICB0aGlzLnByb3BzLmVuZCAhPT0gbmV4dFByb3BzLmVuZCB8fFxuICAgICAgJCh0aGlzLnJlZnMuY291bnR1cERvbVJlZikudGV4dCgpICE9IHRoaXMuc2tWYWwoKS5za0N1cnJlbmN5Rm10KG5leHRQcm9wcy5kZWNpbWFscykgfHxcbiAgICAgIHRoaXMucHJvcHMuc3RhcnQgIT09IG5leHRQcm9wcy5zdGFydDtcbiAgfVxuXG4gIHN0YXJ0QW5pbWF0aW9uKGNvbXApIHtcbiAgICBpZiAoY29tcCAmJiBjb21wLnJlZnMuY291bnR1cERvbVJlZikge1xuICAgICAgbGV0IHtcbiAgICAgICAgZGVjaW1hbCxcbiAgICAgICAgZGVjaW1hbHMsXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBlYXNpbmdGbixcbiAgICAgICAgZW5kLFxuICAgICAgICBmb3JtYXR0aW5nRm4sXG4gICAgICAgIG9uQ29tcGxldGUsXG4gICAgICAgIG9uU3RhcnQsXG4gICAgICAgIHByZWZpeCxcbiAgICAgICAgc2VwYXJhdG9yLFxuICAgICAgICBzdGFydCxcbiAgICAgICAgc3VmZml4LFxuICAgICAgICB1c2VFYXNpbmcsXG4gICAgICAgIHVzZUdyb3VwaW5nXG4gICAgICB9ID0gY29tcC5wcm9wcztcblxuICAgICAgZW5kID0gdGhpcy5za1ZhbCgpO1xuXG4gICAgICBjb25zdCBjb3VudHVwSW5zdGFuY2UgPSBuZXcgQ291bnRVcChcbiAgICAgICAgY29tcC5yZWZzLmNvdW50dXBEb21SZWYsXG4gICAgICAgIHN0YXJ0LFxuICAgICAgICBlbmQsXG4gICAgICAgIGRlY2ltYWxzLFxuICAgICAgICBkdXJhdGlvbixcbiAgICAgICAge1xuICAgICAgICAgIGRlY2ltYWwsXG4gICAgICAgICAgZWFzaW5nRm4sXG4gICAgICAgICAgZm9ybWF0dGluZ0ZuLFxuICAgICAgICAgIHNlcGFyYXRvcixcbiAgICAgICAgICBwcmVmaXgsXG4gICAgICAgICAgc3VmZml4LFxuICAgICAgICAgIHVzZUVhc2luZyxcbiAgICAgICAgICB1c2VHcm91cGluZ1xuICAgICAgICB9LFxuICAgICAgKTtcblxuICAgICAgaWYgKF8uaXNGdW5jdGlvbihvblN0YXJ0KSkge1xuICAgICAgICBvblN0YXJ0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvdW50dXBJbnN0YW5jZS5zdGFydChvbkNvbXBsZXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnWW91IG5lZWQgdG8gcGFzcyB0aGUgQ291bnRVcCBjb21wb25lbnQgYXMgYW4gYXJndW1lbnQhXFxuZWcuIHRoaXMubXlDb3VudFVwLnN0YXJ0QW5pbWF0aW9uKHRoaXMubXlDb3VudFVwKTsnLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnLCBzdGFydH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLmNvbXBWYWxpZFByb3BzKENvbXBUYWcpfSByZWY9J2NvdW50dXBEb21SZWYnPlxuICAgICAgICB7c3RhcnR9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxufVxuIl19