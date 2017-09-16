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
      return this.props.duration !== nextProps.duration || this.props.end !== nextProps.end || (0, _jquery2.default)(this.refs.countupDomRef).text() != nextProps.end.skCurrencyFmt() || this.props.start !== nextProps.start;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvc2svU0tDb3VudFVwLmpzIl0sIm5hbWVzIjpbIlNLQ291bnRVcCIsImFyZ3MiLCJzdGFydEFuaW1hdGlvbiIsIm5leHRQcm9wcyIsIm5leHRTdGF0ZSIsInByb3BzIiwiZHVyYXRpb24iLCJlbmQiLCJyZWZzIiwiY291bnR1cERvbVJlZiIsInRleHQiLCJza0N1cnJlbmN5Rm10Iiwic3RhcnQiLCJjb21wIiwiZGVjaW1hbCIsImRlY2ltYWxzIiwiZWFzaW5nRm4iLCJmb3JtYXR0aW5nRm4iLCJvbkNvbXBsZXRlIiwib25TdGFydCIsInByZWZpeCIsInNlcGFyYXRvciIsInN1ZmZpeCIsInVzZUVhc2luZyIsInVzZUdyb3VwaW5nIiwic2tWYWwiLCJjb3VudHVwSW5zdGFuY2UiLCJpc0Z1bmN0aW9uIiwiRXJyb3IiLCJDb21wVGFnIiwiY29tcFRhZyIsImNvbXBWYWxpZFByb3BzIiwiZGVmYXVsdFByb3BzIiwiVEFHIiwic3BhbiIsIkNIQVJfRE9UIiwidW5kZWZpbmVkIiwiRU1QVFkiLCJDSEFSX0NPTU1BIiwicmVkcmF3Iiwic3R5bGUiLCJwcm9wVHlwZXMiLCJhc3NpZ24iLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJudW1iZXIiLCJmdW5jIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7O0FBcUNuQix1QkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsNElBQ1ZBLElBRFU7QUFFcEI7Ozs7d0NBRW1CO0FBQ2xCO0FBQ0EsV0FBS0MsY0FBTCxDQUFvQixJQUFwQjtBQUNEOzs7eUNBRW9CO0FBQ25CO0FBQ0EsV0FBS0EsY0FBTCxDQUFvQixJQUFwQjtBQUNEOzs7MENBRXFCQyxTLEVBQVdDLFMsRUFBVztBQUMxQyxhQUFPLEtBQUtDLEtBQUwsQ0FBV0Ms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QUFnQkMsTUFEc0I7QUFFL0M3QixZQUFVLGdCQUFNNEIsU0FBTixDQUFnQkUsTUFGcUI7QUFHL0N2QyxZQUFVLGdCQUFNcUMsU0FBTixDQUFnQkUsTUFIcUI7QUFJL0M3QixZQUFVLGdCQUFNMkIsU0FBTixDQUFnQkcsSUFKcUI7QUFLL0N2QyxPQUFLLGdCQUFNb0MsU0FBTixDQUFnQkUsTUFMMEI7QUFNL0M1QixnQkFBYyxnQkFBTTBCLFNBQU4sQ0FBZ0JHLElBTmlCO0FBTy9DNUIsY0FBWSxnQkFBTXlCLFNBQU4sQ0FBZ0JHLElBUG1CO0FBUS9DM0IsV0FBUyxnQkFBTXdCLFNBQU4sQ0FBZ0JHLElBUnNCO0FBUy9DMUIsVUFBUSxnQkFBTXVCLFNBQU4sQ0FBZ0JDLE1BVHVCO0FBVS9DdkIsYUFBVyxnQkFBTXNCLFNBQU4sQ0FBZ0JDLE1BVm9CO0FBVy9DaEMsU0FBTyxnQkFBTStCLFNBQU4sQ0FBZ0JFLE1BWHdCO0FBWS9DdkIsVUFBUSxnQkFBTXFCLFNBQU4sQ0FBZ0JDLE1BWnVCO0FBYS9DckIsYUFBVyxnQkFBTW9CLFNBQU4sQ0FBZ0JJLElBYm9CO0FBYy9DdkIsZUFBYSxnQkFBTW1CLFNBQU4sQ0FBZ0JJO0FBZGtCLENBQTlCLEM7a0JBcEJBL0MsUyIsImZpbGUiOiJjb21wL3NrL1NLQ291bnRVcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb3VudFVwIGZyb20gJ2NvdW50dXAuanMnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBTSyBmcm9tICdzay1qcyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb21wIGZyb20gJy4uLy4uL3V0aWwvQ29tcCc7XG5pbXBvcnQgUkVBQ1QgZnJvbSAnLi4vLi4vdXRpbC9SRUFDVCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLQ291bnRVcCBleHRlbmRzIENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbXBUYWc6IFJFQUNULlRBRy5zcGFuLFxuICAgIGRlY2ltYWw6IFNLLkNIQVJfRE9ULFxuICAgIGRlY2ltYWxzOiAwLFxuICAgIGR1cmF0aW9uOiAzLFxuICAgIGVhc2luZ0ZuOiBudWxsLFxuICAgIGVuZDogMTAwLFxuICAgIGZvcm1hdHRpbmdGbjogbnVsbCxcbiAgICBvbkNvbXBsZXRlOiB1bmRlZmluZWQsXG4gICAgb25TdGFydDogdW5kZWZpbmVkLFxuICAgIHByZWZpeDogU0suRU1QVFksXG4gICAgc2VwYXJhdG9yOiBTSy5DSEFSX0NPTU1BLFxuICAgIHN0YXJ0OiAwLFxuICAgIHN1ZmZpeDogU0suRU1QVFksXG4gICAgcmVkcmF3OiBmYWxzZSxcbiAgICBzdHlsZTogdW5kZWZpbmVkLFxuICAgIHVzZUVhc2luZzogdHJ1ZSxcbiAgICB1c2VHcm91cGluZzogdHJ1ZVxuICB9O1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBDb21wLnByb3BUeXBlcywge1xuICAgIGRlY2ltYWw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGVjaW1hbHM6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgZHVyYXRpb246IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgZWFzaW5nRm46IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIGVuZDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBmb3JtYXR0aW5nRm46IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ29tcGxldGU6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uU3RhcnQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIHByZWZpeDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZXBhcmF0b3I6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3RhcnQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgc3VmZml4OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHVzZUVhc2luZzogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgdXNlR3JvdXBpbmc6IFJlYWN0LlByb3BUeXBlcy5ib29sXG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHN1cGVyLmNvbXBvbmVudERpZE1vdW50KCk7XG4gICAgdGhpcy5zdGFydEFuaW1hdGlvbih0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBzdXBlci5jb21wb25lbnREaWRVcGRhdGUoKTtcbiAgICB0aGlzLnN0YXJ0QW5pbWF0aW9uKHRoaXMpO1xuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZHVyYXRpb24gIT09IG5leHRQcm9wcy5kdXJhdGlvbiB8fFxuICAgICAgdGhpcy5wcm9wcy5lbmQgIT09IG5leHRQcm9wcy5lbmQgfHxcbiAgICAgICQodGhpcy5yZWZzLmNvdW50dXBEb21SZWYpLnRleHQoKSAhPSBuZXh0UHJvcHMuZW5kLnNrQ3VycmVuY3lGbXQoKSB8fFxuICAgICAgdGhpcy5wcm9wcy5zdGFydCAhPT0gbmV4dFByb3BzLnN0YXJ0O1xuICB9XG5cbiAgc3RhcnRBbmltYXRpb24oY29tcCkge1xuICAgIGlmIChjb21wICYmIGNvbXAucmVmcy5jb3VudHVwRG9tUmVmKSB7XG4gICAgICBsZXQge1xuICAgICAgICBkZWNpbWFsLFxuICAgICAgICBkZWNpbWFscyxcbiAgICAgICAgZHVyYXRpb24sXG4gICAgICAgIGVhc2luZ0ZuLFxuICAgICAgICBlbmQsXG4gICAgICAgIGZvcm1hdHRpbmdGbixcbiAgICAgICAgb25Db21wbGV0ZSxcbiAgICAgICAgb25TdGFydCxcbiAgICAgICAgcHJlZml4LFxuICAgICAgICBzZXBhcmF0b3IsXG4gICAgICAgIHN0YXJ0LFxuICAgICAgICBzdWZmaXgsXG4gICAgICAgIHVzZUVhc2luZyxcbiAgICAgICAgdXNlR3JvdXBpbmdcbiAgICAgIH0gPSBjb21wLnByb3BzO1xuXG4gICAgICBlbmQgPSB0aGlzLnNrVmFsKCk7XG5cbiAgICAgIGNvbnN0IGNvdW50dXBJbnN0YW5jZSA9IG5ldyBDb3VudFVwKFxuICAgICAgICBjb21wLnJlZnMuY291bnR1cERvbVJlZixcbiAgICAgICAgc3RhcnQsXG4gICAgICAgIGVuZCxcbiAgICAgICAgZGVjaW1hbHMsXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICB7XG4gICAgICAgICAgZGVjaW1hbCxcbiAgICAgICAgICBlYXNpbmdGbixcbiAgICAgICAgICBmb3JtYXR0aW5nRm4sXG4gICAgICAgICAgc2VwYXJhdG9yLFxuICAgICAgICAgIHByZWZpeCxcbiAgICAgICAgICBzdWZmaXgsXG4gICAgICAgICAgdXNlRWFzaW5nLFxuICAgICAgICAgIHVzZUdyb3VwaW5nXG4gICAgICAgIH0sXG4gICAgICApO1xuXG4gICAgICBpZiAoXy5pc0Z1bmN0aW9uKG9uU3RhcnQpKSB7XG4gICAgICAgIG9uU3RhcnQoKTtcbiAgICAgIH1cblxuICAgICAgY291bnR1cEluc3RhbmNlLnN0YXJ0KG9uQ29tcGxldGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdZb3UgbmVlZCB0byBwYXNzIHRoZSBDb3VudFVwIGNvbXBvbmVudCBhcyBhbiBhcmd1bWVudCFcXG5lZy4gdGhpcy5teUNvdW50VXAuc3RhcnRBbmltYXRpb24odGhpcy5teUNvdW50VXApOycsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2NvbXBUYWc6IENvbXBUYWcsIHN0YXJ0fSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuY29tcFZhbGlkUHJvcHMoQ29tcFRhZyl9IHJlZj0nY291bnR1cERvbVJlZic+XG4gICAgICAgIHtzdGFydH1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG59XG4iXX0=