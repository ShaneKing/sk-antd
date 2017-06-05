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

var _Comp2 = require('../../utils/Comp');

var _Comp3 = _interopRequireDefault(_Comp2);

var _REACT = require('../../utils/REACT');

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
  decimal: '.',
  decimals: 0,
  duration: 3,
  easingFn: null,
  end: 100,
  formattingFn: null,
  onComplete: undefined,
  onStart: undefined,
  prefix: '',
  separator: ',',
  start: 0,
  suffix: '',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL3NrL1NLQ291bnRVcC5qcyJdLCJuYW1lcyI6WyJTS0NvdW50VXAiLCJhcmdzIiwibmV4dFByb3BzIiwibmV4dFN0YXRlIiwicHJvcHMiLCJkdXJhdGlvbiIsImVuZCIsInN0YXJ0IiwiZXZ0Iiwic3RhcnRBbmltYXRpb24iLCJjb21wIiwicmVmcyIsImNvdW50dXBEb21SZWYiLCJkZWNpbWFsIiwiZGVjaW1hbHMiLCJlYXNpbmdGbiIsImZvcm1hdHRpbmdGbiIsIm9uQ29tcGxldGUiLCJvblN0YXJ0IiwicHJlZml4Iiwic2VwYXJhdG9yIiwic3VmZml4IiwidXNlRWFzaW5nIiwidXNlR3JvdXBpbmciLCJza1ZhbCIsImNvdW50dXBJbnN0YW5jZSIsImlzRnVuY3Rpb24iLCJFcnJvciIsIkNvbXBUYWciLCJjb21wVGFnIiwiY29tcFZhbGlkUHJvcHMiLCJkZWZhdWx0UHJvcHMiLCJUQUciLCJzcGFuIiwidW5kZWZpbmVkIiwicmVkcmF3Iiwic3R5bGUiLCJwcm9wVHlwZXMiLCJhc3NpZ24iLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJudW1iZXIiLCJmdW5jIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7OztBQXFDbkIsdUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLDRJQUNWQSxJQURVO0FBRXBCOzs7OzBDQUVxQkMsUyxFQUFXQyxTLEVBQVc7QUFDMUMsYUFBTyxLQUFLQyxLQUFMLENBQVdDLFFBQVgsS0FBd0JILFVBQVVHLFFBQWxDLElBQ0wsS0FBS0QsS0FBTCxDQUFXRSxHQUFYLEtBQW1CSixVQUFVSSxHQUR4QixJQUVMLEtBQUtGLEtBQUwsQ0FBV0csS0FBWCxLQUFxQkwsVUFBVUssS0FGakM7QUFHRDs7OzZCQUVRQyxHLEVBQUs7QUFDWixxSEFBZUEsR0FB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QWdCRyxJQU5pQjtBQU8vQ3pCLGNBQVksZ0JBQU1zQixTQUFOLENBQWdCRyxJQVBtQjtBQVEvQ3hCLFdBQVMsZ0JBQU1xQixTQUFOLENBQWdCRyxJQVJzQjtBQVMvQ3ZCLFVBQVEsZ0JBQU1vQixTQUFOLENBQWdCQyxNQVR1QjtBQVUvQ3BCLGFBQVcsZ0JBQU1tQixTQUFOLENBQWdCQyxNQVZvQjtBQVcvQ2pDLFNBQU8sZ0JBQU1nQyxTQUFOLENBQWdCRSxNQVh3QjtBQVkvQ3BCLFVBQVEsZ0JBQU1rQixTQUFOLENBQWdCQyxNQVp1QjtBQWEvQ2xCLGFBQVcsZ0JBQU1pQixTQUFOLENBQWdCSSxJQWJvQjtBQWMvQ3BCLGVBQWEsZ0JBQU1nQixTQUFOLENBQWdCSTtBQWRrQixDQUE5QixDO2tCQXBCQTNDLFMiLCJmaWxlIjoiY29tcHMvc2svU0tDb3VudFVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvdW50VXAgZnJvbSAnY291bnR1cC5qcyc7XG5pbXBvcnQgU0sgZnJvbSAnc2stanMnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tcCBmcm9tICcuLi8uLi91dGlscy9Db21wJztcbmltcG9ydCBSRUFDVCBmcm9tICcuLi8uLi91dGlscy9SRUFDVCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLQ291bnRVcCBleHRlbmRzIENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbXBUYWc6IFJFQUNULlRBRy5zcGFuLFxuICAgIGRlY2ltYWw6ICcuJyxcbiAgICBkZWNpbWFsczogMCxcbiAgICBkdXJhdGlvbjogMyxcbiAgICBlYXNpbmdGbjogbnVsbCxcbiAgICBlbmQ6IDEwMCxcbiAgICBmb3JtYXR0aW5nRm46IG51bGwsXG4gICAgb25Db21wbGV0ZTogdW5kZWZpbmVkLFxuICAgIG9uU3RhcnQ6IHVuZGVmaW5lZCxcbiAgICBwcmVmaXg6ICcnLFxuICAgIHNlcGFyYXRvcjogJywnLFxuICAgIHN0YXJ0OiAwLFxuICAgIHN1ZmZpeDogJycsXG4gICAgcmVkcmF3OiBmYWxzZSxcbiAgICBzdHlsZTogdW5kZWZpbmVkLFxuICAgIHVzZUVhc2luZzogdHJ1ZSxcbiAgICB1c2VHcm91cGluZzogdHJ1ZVxuICB9O1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBDb21wLnByb3BUeXBlcywge1xuICAgIGRlY2ltYWw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGVjaW1hbHM6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgZHVyYXRpb246IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgZWFzaW5nRm46IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIGVuZDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBmb3JtYXR0aW5nRm46IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ29tcGxldGU6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uU3RhcnQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIHByZWZpeDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZXBhcmF0b3I6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3RhcnQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgc3VmZml4OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHVzZUVhc2luZzogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgdXNlR3JvdXBpbmc6IFJlYWN0LlByb3BUeXBlcy5ib29sXG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmR1cmF0aW9uICE9PSBuZXh0UHJvcHMuZHVyYXRpb24gfHxcbiAgICAgIHRoaXMucHJvcHMuZW5kICE9PSBuZXh0UHJvcHMuZW5kIHx8XG4gICAgICB0aGlzLnByb3BzLnN0YXJ0ICE9PSBuZXh0UHJvcHMuc3RhcnQ7XG4gIH1cblxuICB1cGRhdGVVSShldnQpIHtcbiAgICBzdXBlci51cGRhdGVVSShldnQpO1xuICAgIHRoaXMuc3RhcnRBbmltYXRpb24odGhpcyk7XG4gIH1cblxuICBzdGFydEFuaW1hdGlvbihjb21wKSB7XG4gICAgaWYgKGNvbXAgJiYgY29tcC5yZWZzLmNvdW50dXBEb21SZWYpIHtcbiAgICAgIGxldCB7XG4gICAgICAgIGRlY2ltYWwsXG4gICAgICAgIGRlY2ltYWxzLFxuICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgZWFzaW5nRm4sXG4gICAgICAgIGVuZCxcbiAgICAgICAgZm9ybWF0dGluZ0ZuLFxuICAgICAgICBvbkNvbXBsZXRlLFxuICAgICAgICBvblN0YXJ0LFxuICAgICAgICBwcmVmaXgsXG4gICAgICAgIHNlcGFyYXRvcixcbiAgICAgICAgc3RhcnQsXG4gICAgICAgIHN1ZmZpeCxcbiAgICAgICAgdXNlRWFzaW5nLFxuICAgICAgICB1c2VHcm91cGluZ1xuICAgICAgfSA9IGNvbXAucHJvcHM7XG5cbiAgICAgIGVuZCA9IHRoaXMuc2tWYWwoKTtcblxuICAgICAgY29uc3QgY291bnR1cEluc3RhbmNlID0gbmV3IENvdW50VXAoXG4gICAgICAgIGNvbXAucmVmcy5jb3VudHVwRG9tUmVmLFxuICAgICAgICBzdGFydCxcbiAgICAgICAgZW5kLFxuICAgICAgICBkZWNpbWFscyxcbiAgICAgICAgZHVyYXRpb24sXG4gICAgICAgIHtcbiAgICAgICAgICBkZWNpbWFsLFxuICAgICAgICAgIGVhc2luZ0ZuLFxuICAgICAgICAgIGZvcm1hdHRpbmdGbixcbiAgICAgICAgICBzZXBhcmF0b3IsXG4gICAgICAgICAgcHJlZml4LFxuICAgICAgICAgIHN1ZmZpeCxcbiAgICAgICAgICB1c2VFYXNpbmcsXG4gICAgICAgICAgdXNlR3JvdXBpbmdcbiAgICAgICAgfSxcbiAgICAgICk7XG5cbiAgICAgIGlmIChfLmlzRnVuY3Rpb24ob25TdGFydCkpIHtcbiAgICAgICAgb25TdGFydCgpO1xuICAgICAgfVxuXG4gICAgICBjb3VudHVwSW5zdGFuY2Uuc3RhcnQob25Db21wbGV0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1lvdSBuZWVkIHRvIHBhc3MgdGhlIENvdW50VXAgY29tcG9uZW50IGFzIGFuIGFyZ3VtZW50IVxcbmVnLiB0aGlzLm15Q291bnRVcC5zdGFydEFuaW1hdGlvbih0aGlzLm15Q291bnRVcCk7JyxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZywgc3RhcnR9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5jb21wVmFsaWRQcm9wcyhDb21wVGFnKX0gcmVmPSdjb3VudHVwRG9tUmVmJz5cbiAgICAgICAge3N0YXJ0fVxuICAgICAgPC9Db21wVGFnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==