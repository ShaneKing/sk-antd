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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

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

    var _this = _possibleConstructorReturn(this, (_ref = SKCountUp.__proto__ || Object.getPrototypeOf(SKCountUp)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKCountUp';
    return _this;
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
        _extends({}, this.skTransProps2Self(CompTag), { ref: 'countupDomRef' }),
        start
      );
    }
  }]);

  return SKCountUp;
}(_Comp3.default);

SKCountUp.defaultProps = _skJs.SK.assign({}, _Comp3.default.defaultProps, {
  compTag: _REACT2.default.TAG.span,
  decimal: _skJs.SK.CHAR_DOT,
  decimals: 0,
  duration: 3,
  easingFn: null,
  end: 100,
  formattingFn: null,
  onComplete: undefined,
  onStart: undefined,
  prefix: _skJs.SK.EMPTY,
  separator: _skJs.SK.CHAR_COMMA,
  start: 0,
  suffix: _skJs.SK.EMPTY,
  redraw: false,
  style: undefined,
  useEasing: true,
  useGrouping: true
});
SKCountUp.propTypes = _skJs.SK.assign({}, _Comp3.default.propTypes, {
  decimal: _propTypes2.default.string,
  decimals: _propTypes2.default.number,
  duration: _propTypes2.default.number,
  easingFn: _propTypes2.default.func,
  end: _propTypes2.default.number,
  formattingFn: _propTypes2.default.func,
  onComplete: _propTypes2.default.func,
  onStart: _propTypes2.default.func,
  prefix: _propTypes2.default.string,
  separator: _propTypes2.default.string,
  start: _propTypes2.default.number,
  suffix: _propTypes2.default.string,
  useEasing: _propTypes2.default.bool,
  useGrouping: _propTypes2.default.bool
});
exports.default = SKCountUp;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvc2svU0tDb3VudFVwLmpzIl0sIm5hbWVzIjpbIlNLQ291bnRVcCIsImFyZ3MiLCJjb21wTmFtZSIsInN0YXJ0QW5pbWF0aW9uIiwibmV4dFByb3BzIiwibmV4dFN0YXRlIiwicHJvcHMiLCJkdXJhdGlvbiIsImVuZCIsInJlZnMiLCJjb3VudHVwRG9tUmVmIiwidGV4dCIsInNrVmFsIiwic2tDdXJyZW5jeUZtdCIsImRlY2ltYWxzIiwic3RhcnQiLCJjb21wIiwiZGVjaW1hbCIsImVhc2luZ0ZuIiwiZm9ybWF0dGluZ0ZuIiwib25Db21wbGV0ZSIsIm9uU3RhcnQiLCJwcmVmaXgiLCJzZXBhcmF0b3IiLCJzdWZmaXgiLCJ1c2VFYXNpbmciLCJ1c2VHcm91cGluZyIsImNvdW50dXBJbnN0YW5jZSIsImlzRnVuY3Rpb24iLCJFcnJvciIsIkNvbXBUYWciLCJjb21wVGFnIiwic2tUcmFuc1Byb3BzMlNlbGYiLCJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJUQUciLCJzcGFuIiwiQ0hBUl9ET1QiLCJ1bmRlZmluZWQiLCJFTVBUWSIsIkNIQVJfQ09NTUEiLCJyZWRyYXciLCJzdHlsZSIsInByb3BUeXBlcyIsInN0cmluZyIsIm51bWJlciIsImZ1bmMiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7QUFzQ25CLHVCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSxpSkFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixXQUFoQjtBQUZtQjtBQUdwQjs7Ozt3Q0FFbUI7QUFDbEI7QUFDQSxXQUFLQyxjQUFMLENBQW9CLElBQXBCO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkI7QUFDQSxXQUFLQSxjQUFMLENBQW9CLElBQXBCO0FBQ0Q7OzswQ0FFcUJD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aEIwQztBQWlCckRDLGVBQWE7QUFqQndDLENBQWpDLEM7QUFESDFCLFMsQ0FvQloyQyxTLEdBQVksU0FBR1QsTUFBSCxDQUFVLEVBQVYsRUFBYyxlQUFLUyxTQUFuQixFQUE4QjtBQUMvQzFCLFdBQVMsb0JBQVUyQixNQUQ0QjtBQUUvQzlCLFlBQVUsb0JBQVUrQixNQUYyQjtBQUcvQ3RDLFlBQVUsb0JBQVVzQyxNQUgyQjtBQUkvQzNCLFlBQVUsb0JBQVU0QixJQUoyQjtBQUsvQ3RDLE9BQUssb0JBQVVxQyxNQUxnQztBQU0vQzFCLGdCQUFjLG9CQUFVMkIsSUFOdUI7QUFPL0MxQixjQUFZLG9CQUFVMEIsSUFQeUI7QUFRL0N6QixXQUFTLG9CQUFVeUIsSUFSNEI7QUFTL0N4QixVQUFRLG9CQUFVc0IsTUFUNkI7QUFVL0NyQixhQUFXLG9CQUFVcUIsTUFWMEI7QUFXL0M3QixTQUFPLG9CQUFVOEIsTUFYOEI7QUFZL0NyQixVQUFRLG9CQUFVb0IsTUFaNkI7QUFhL0NuQixhQUFXLG9CQUFVc0IsSUFiMEI7QUFjL0NyQixlQUFhLG9CQUFVcUI7QUFkd0IsQ0FBOUIsQztrQkFwQkEvQyxTIiwiZmlsZSI6ImNvbXAvc2svU0tDb3VudFVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvdW50VXAgZnJvbSAnY291bnR1cC5qcyc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IENvbXAgZnJvbSAnLi4vLi4vdXRpbC9Db21wJztcbmltcG9ydCBSRUFDVCBmcm9tICcuLi8uLi91dGlsL1JFQUNUJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tDb3VudFVwIGV4dGVuZHMgQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIENvbXAuZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogUkVBQ1QuVEFHLnNwYW4sXG4gICAgZGVjaW1hbDogU0suQ0hBUl9ET1QsXG4gICAgZGVjaW1hbHM6IDAsXG4gICAgZHVyYXRpb246IDMsXG4gICAgZWFzaW5nRm46IG51bGwsXG4gICAgZW5kOiAxMDAsXG4gICAgZm9ybWF0dGluZ0ZuOiBudWxsLFxuICAgIG9uQ29tcGxldGU6IHVuZGVmaW5lZCxcbiAgICBvblN0YXJ0OiB1bmRlZmluZWQsXG4gICAgcHJlZml4OiBTSy5FTVBUWSxcbiAgICBzZXBhcmF0b3I6IFNLLkNIQVJfQ09NTUEsXG4gICAgc3RhcnQ6IDAsXG4gICAgc3VmZml4OiBTSy5FTVBUWSxcbiAgICByZWRyYXc6IGZhbHNlLFxuICAgIHN0eWxlOiB1bmRlZmluZWQsXG4gICAgdXNlRWFzaW5nOiB0cnVlLFxuICAgIHVzZUdyb3VwaW5nOiB0cnVlXG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBDb21wLnByb3BUeXBlcywge1xuICAgIGRlY2ltYWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGVjaW1hbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZHVyYXRpb246IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZWFzaW5nRm46IFByb3BUeXBlcy5mdW5jLFxuICAgIGVuZDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBmb3JtYXR0aW5nRm46IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU3RhcnQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIHByZWZpeDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZXBhcmF0b3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3RhcnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgc3VmZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHVzZUVhc2luZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgdXNlR3JvdXBpbmc6IFByb3BUeXBlcy5ib29sXG4gIH0pO1xuXG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tDb3VudFVwJztcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHN1cGVyLmNvbXBvbmVudERpZE1vdW50KCk7XG4gICAgdGhpcy5zdGFydEFuaW1hdGlvbih0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBzdXBlci5jb21wb25lbnREaWRVcGRhdGUoKTtcbiAgICB0aGlzLnN0YXJ0QW5pbWF0aW9uKHRoaXMpO1xuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZHVyYXRpb24gIT09IG5leHRQcm9wcy5kdXJhdGlvbiB8fFxuICAgICAgdGhpcy5wcm9wcy5lbmQgIT09IG5leHRQcm9wcy5lbmQgfHxcbiAgICAgICQodGhpcy5yZWZzLmNvdW50dXBEb21SZWYpLnRleHQoKSAhPSB0aGlzLnNrVmFsKCkuc2tDdXJyZW5jeUZtdChuZXh0UHJvcHMuZGVjaW1hbHMpIHx8XG4gICAgICB0aGlzLnByb3BzLnN0YXJ0ICE9PSBuZXh0UHJvcHMuc3RhcnQ7XG4gIH1cblxuICBzdGFydEFuaW1hdGlvbihjb21wKSB7XG4gICAgaWYgKGNvbXAgJiYgY29tcC5yZWZzLmNvdW50dXBEb21SZWYpIHtcbiAgICAgIGxldCB7XG4gICAgICAgIGRlY2ltYWwsXG4gICAgICAgIGRlY2ltYWxzLFxuICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgZWFzaW5nRm4sXG4gICAgICAgIGVuZCxcbiAgICAgICAgZm9ybWF0dGluZ0ZuLFxuICAgICAgICBvbkNvbXBsZXRlLFxuICAgICAgICBvblN0YXJ0LFxuICAgICAgICBwcmVmaXgsXG4gICAgICAgIHNlcGFyYXRvcixcbiAgICAgICAgc3RhcnQsXG4gICAgICAgIHN1ZmZpeCxcbiAgICAgICAgdXNlRWFzaW5nLFxuICAgICAgICB1c2VHcm91cGluZ1xuICAgICAgfSA9IGNvbXAucHJvcHM7XG5cbiAgICAgIGVuZCA9IHRoaXMuc2tWYWwoKTtcblxuICAgICAgY29uc3QgY291bnR1cEluc3RhbmNlID0gbmV3IENvdW50VXAoXG4gICAgICAgIGNvbXAucmVmcy5jb3VudHVwRG9tUmVmLFxuICAgICAgICBzdGFydCxcbiAgICAgICAgZW5kLFxuICAgICAgICBkZWNpbWFscyxcbiAgICAgICAgZHVyYXRpb24sXG4gICAgICAgIHtcbiAgICAgICAgICBkZWNpbWFsLFxuICAgICAgICAgIGVhc2luZ0ZuLFxuICAgICAgICAgIGZvcm1hdHRpbmdGbixcbiAgICAgICAgICBzZXBhcmF0b3IsXG4gICAgICAgICAgcHJlZml4LFxuICAgICAgICAgIHN1ZmZpeCxcbiAgICAgICAgICB1c2VFYXNpbmcsXG4gICAgICAgICAgdXNlR3JvdXBpbmdcbiAgICAgICAgfSxcbiAgICAgICk7XG5cbiAgICAgIGlmIChfLmlzRnVuY3Rpb24ob25TdGFydCkpIHtcbiAgICAgICAgb25TdGFydCgpO1xuICAgICAgfVxuXG4gICAgICBjb3VudHVwSW5zdGFuY2Uuc3RhcnQob25Db21wbGV0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1lvdSBuZWVkIHRvIHBhc3MgdGhlIENvdW50VXAgY29tcG9uZW50IGFzIGFuIGFyZ3VtZW50IVxcbmVnLiB0aGlzLm15Q291bnRVcC5zdGFydEFuaW1hdGlvbih0aGlzLm15Q291bnRVcCk7JyxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZywgc3RhcnR9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihDb21wVGFnKX0gcmVmPSdjb3VudHVwRG9tUmVmJz5cbiAgICAgICAge3N0YXJ0fVxuICAgICAgPC9Db21wVGFnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==