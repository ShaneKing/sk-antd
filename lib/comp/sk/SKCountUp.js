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
      return this.props.duration !== nextProps.duration || this.props.end !== nextProps.end || this.props.start !== nextProps.start;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvc2svU0tDb3VudFVwLmpzIl0sIm5hbWVzIjpbIlNLQ291bnRVcCIsImFyZ3MiLCJzdGFydEFuaW1hdGlvbiIsIm5leHRQcm9wcyIsIm5leHRTdGF0ZSIsInByb3BzIiwiZHVyYXRpb24iLCJlbmQiLCJzdGFydCIsImNvbXAiLCJyZWZzIiwiY291bnR1cERvbVJlZiIsImRlY2ltYWwiLCJkZWNpbWFscyIsImVhc2luZ0ZuIiwiZm9ybWF0dGluZ0ZuIiwib25Db21wbGV0ZSIsIm9uU3RhcnQiLCJwcmVmaXgiLCJzZXBhcmF0b3IiLCJzdWZmaXgiLCJ1c2VFYXNpbmciLCJ1c2VHcm91cGluZyIsInNrVmFsIiwiY291bnR1cEluc3RhbmNlIiwiaXNGdW5jdGlvbiIsIkVycm9yIiwiQ29tcFRhZyIsImNvbXBUYWciLCJjb21wVmFsaWRQcm9wcyIsImRlZmF1bHRQcm9wcyIsIlRBRyIsInNwYW4iLCJDSEFSX0RPVCIsInVuZGVmaW5lZCIsIkVNUFRZIiwiQ0hBUl9DT01NQSIsInJlZHJhdyIsInN0eWxlIiwicHJvcFR5cGVzIiwiYXNzaWduIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibnVtYmVyIiwiZnVuYyIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7QUFxQ25CLHVCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSw0SUFDVkEsSUFEVTtBQUVwQjs7Ozt3Q0FFbUI7QUFDbEI7QUFDQSxXQUFLQyxjQUFMLENBQW9CLElBQXBCO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkI7QUFDQSxXQUFLQSxjQUFMLENBQW9CLElBQXBCO0FBQ0Q7OzswQ0FFcUJDLFMsRUFBV0MsUyxFQUFXO0FBQzFDLGFBQU8sS0FBS0MsS0FBTCxDQUFXQyxRQUFYLEtBQXdCSCxVQUFVRyxRQUFsQyxJQUNMLEtBQUtELEtBQUwsQ0FBV0UsR0FBWCxLQUFtQkosVUFBVUksR0FEeEIsSUFFTCxLQUFLRixLQUFMLENBQVdHLEtBQVgsS0FBcUJMLFVBQVVLLEtBRmpDO0FBR0Q7OzttQ0FFY0MsSSxFQUFNO0FBQ25CLFVBQUlBLFFBQVFBLEtBQUtDLElBQUwsQ0FBVUMsYUFBdEIsRUFBcUM7QUFBQSwwQkFnQi9CRixLQUFLSixLQWhCMEI7QUFBQSxZQUVqQ08sT0FGaUMsZUFFakNBLE9BRmlDO0FBQUEsWUFHakNDLFFBSGlDLGVBR2pDQSxRQUhpQztBQUFBLFlBSWpDUCxRQUppQyxlQUlqQ0EsUUFKaUM7QUFBQSxZQUtqQ1EsUUFMaUMsZUFLakNBLFFBTGlDO0FBQUEsWUFNakNQLEdBTmlDLGVBTWpDQSxHQU5pQztBQUFBLFlBT2pDUSxZQVBpQyxlQU9qQ0EsWUFQaUM7QUFBQSxZQVFqQ0MsVUFSaUMsZUFRakNBLFVBUmlDO0FBQUEsWUFTakNDLE9BVGlDLGVBU2pDQSxPQVRpQztBQUFBLFlBVWpDQyxNQVZpQyxlQVVqQ0EsTUFWaUM7QUFBQSxZQVdqQ0MsU0FYaUMsZUFXakNBLFNBWGlDO0FBQUEsWUFZakNYLEtBWmlDLGVBWWpDQSxLQVppQztBQUFBLFlBYWpDWSxNQWJpQyxlQWFqQ0EsTUFiaUM7QUFBQSxZQWNqQ0MsU0FkaUMsZUFjakNBLFNBZGlDO0FBQUEsWUFlakNDLFdBZmlDLGVBZWpDQSxXQWZpQzs7O0FBa0JuQ2YsY0FBTSxLQUFLZ0IsS0FBTCxFQUFOOztBQUVBLFlBQU1DLGtCQUFrQixzQkFDdEJmLEtBQUtDLElBQUwsQ0FBVUMsYUFEWSxFQUV0QkgsS0FGc0IsRUFHdEJELEdBSHNCLEVBSXRCTSxRQUpzQixFQUt0QlAsUUFMc0IsRUFNdEI7QUFDRU0sMEJBREY7QUFFRUUsNEJBRkY7QUFHRUMsb0NBSEY7QUFJRUksOEJBSkY7QUFLRUQsd0JBTEY7QUFNRUUsd0JBTkY7QUFPRUMsOEJBUEY7QUFRRUM7QUFSRixTQU5zQixDQUF4Qjs7QUFrQkEsWUFBSSxpQkFBRUcsVUFBRixDQUFhUixPQUFiLENBQUosRUFBMkI7QUFDekJBO0FBQ0Q7O0FBRURPLHdCQUFnQmhCLEtBQWhCLENBQXNCUSxVQUF0QjtBQUNELE9BM0NELE1BMkNPO0FBQ0wsY0FBTSxJQUFJVSxLQUFKLENBQ0osNEdBREksQ0FBTjtBQUdEO0FBQ0Y7Ozs2QkFFUTtBQUFBLG1CQUN5QixLQUFLckIsS0FEOUI7QUFBQSxVQUNPc0IsT0FEUCxVQUNGQyxPQURFO0FBQUEsVUFDZ0JwQixLQURoQixVQUNnQkEsS0FEaEI7OztBQUdQLGFBQ0U7QUFBQyxlQUFEO0FBQUEscUJBQWEsS0FBS3FCLGNBQUwsQ0FBb0JGLE9BQXBCLENBQWIsSUFBMkMsS0FBSSxlQUEvQztBQUNHbkI7QUFESCxPQURGO0FBS0Q7Ozs7OztBQXBIa0JSLFMsQ0FDWjhCLFksR0FBZTtBQUNwQkYsV0FBUyxnQkFBTUcsR0FBTixDQUFVQyxJQURDO0FBRXBCcEIsV0FBUyxlQUFHcUIsUUFGUTtBQUdwQnBCLFlBQVUsQ0FIVTtBQUlwQlAsWUFBVSxDQUpVO0FBS3BCUSxZQUFVLElBTFU7QUFNcEJQLE9BQUssR0FOZTtBQU9wQlEsZ0JBQWMsSUFQTTtBQVFwQkMsY0FBWWtCLFNBUlE7QUFTcEJqQixXQUFTaUIsU0FUVztBQVVwQmhCLFVBQVEsZUFBR2lCLEtBVlM7QUFXcEJoQixhQUFXLGVBQUdpQixVQVhNO0FBWXBCNUIsU0FBTyxDQVphO0FBYXBCWSxVQUFRLGVBQUdlLEtBYlM7QUFjcEJFLFVBQVEsS0FkWTtBQWVwQkMsU0FBT0osU0FmYTtBQWdCcEJiLGFBQVcsSUFoQlM7QUFpQnBCQyxlQUFhO0FBakJPLEM7QUFESHRCLFMsQ0FvQlp1QyxTLEdBQVksZUFBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxlQUFLRCxTQUFuQixFQUE4QjtBQUMvQzNCLFdBQVMsZ0JBQU02QixTQUFOLENBQWdCQyxNQURzQjtBQUUvQzdCLFlBQVUsZ0JBQU00QixTQUFOLENBQWdCRSxNQUZxQjtBQUcvQ3JDLFlBQVUsZ0JBQU1tQyxTQUFOLENBQWdCRSxNQUhxQjtBQUkvQzdCLFlBQVUsZ0JBQU0yQixTQUFOLENBQWdCRyxJQUpxQjtBQUsvQ3JDLE9BQUssZ0JBQU1rQyxTQUFOLENBQWdCRSxNQUwwQjtBQU0vQzVCLGdCQUFjLGdCQUFNMEIsU0FBTixDQUFnQkcsSUFOaUI7QUFPL0M1QixjQUFZLGdCQUFNeUIsU0FBTixDQUFnQkcsSUFQbUI7QUFRL0MzQixXQUFTLGdCQUFNd0IsU0FBTixDQUFnQkcsSUFSc0I7QUFTL0MxQixVQUFRLGdCQUFNdUIsU0FBTixDQUFnQkMsTUFUdUI7QUFVL0N2QixhQUFXLGdCQUFNc0IsU0FBTixDQUFnQkMsTUFWb0I7QUFXL0NsQyxTQUFPLGdCQUFNaUMsU0FBTixDQUFnQkUsTUFYd0I7QUFZL0N2QixVQUFRLGdCQUFNcUIsU0FBTixDQUFnQkMsTUFadUI7QUFhL0NyQixhQUFXLGdCQUFNb0IsU0FBTixDQUFnQkksSUFib0I7QUFjL0N2QixlQUFhLGdCQUFNbUIsU0FBTixDQUFnQkk7QUFka0IsQ0FBOUIsQztrQkFwQkE3QyxTIiwiZmlsZSI6ImNvbXAvc2svU0tDb3VudFVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvdW50VXAgZnJvbSAnY291bnR1cC5qcyc7XG5pbXBvcnQgU0sgZnJvbSAnc2stanMnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tcCBmcm9tICcuLi8uLi91dGlsL0NvbXAnO1xuaW1wb3J0IFJFQUNUIGZyb20gJy4uLy4uL3V0aWwvUkVBQ1QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS0NvdW50VXAgZXh0ZW5kcyBDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb21wVGFnOiBSRUFDVC5UQUcuc3BhbixcbiAgICBkZWNpbWFsOiBTSy5DSEFSX0RPVCxcbiAgICBkZWNpbWFsczogMCxcbiAgICBkdXJhdGlvbjogMyxcbiAgICBlYXNpbmdGbjogbnVsbCxcbiAgICBlbmQ6IDEwMCxcbiAgICBmb3JtYXR0aW5nRm46IG51bGwsXG4gICAgb25Db21wbGV0ZTogdW5kZWZpbmVkLFxuICAgIG9uU3RhcnQ6IHVuZGVmaW5lZCxcbiAgICBwcmVmaXg6IFNLLkVNUFRZLFxuICAgIHNlcGFyYXRvcjogU0suQ0hBUl9DT01NQSxcbiAgICBzdGFydDogMCxcbiAgICBzdWZmaXg6IFNLLkVNUFRZLFxuICAgIHJlZHJhdzogZmFsc2UsXG4gICAgc3R5bGU6IHVuZGVmaW5lZCxcbiAgICB1c2VFYXNpbmc6IHRydWUsXG4gICAgdXNlR3JvdXBpbmc6IHRydWVcbiAgfTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQ29tcC5wcm9wVHlwZXMsIHtcbiAgICBkZWNpbWFsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRlY2ltYWxzOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGR1cmF0aW9uOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGVhc2luZ0ZuOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBlbmQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgZm9ybWF0dGluZ0ZuOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNvbXBsZXRlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvblN0YXJ0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBwcmVmaXg6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2VwYXJhdG9yOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0YXJ0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIHN1ZmZpeDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICB1c2VFYXNpbmc6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIHVzZUdyb3VwaW5nOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbFxuICB9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBzdXBlci5jb21wb25lbnREaWRNb3VudCgpO1xuICAgIHRoaXMuc3RhcnRBbmltYXRpb24odGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgc3VwZXIuY29tcG9uZW50RGlkVXBkYXRlKCk7XG4gICAgdGhpcy5zdGFydEFuaW1hdGlvbih0aGlzKTtcbiAgfVxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmR1cmF0aW9uICE9PSBuZXh0UHJvcHMuZHVyYXRpb24gfHxcbiAgICAgIHRoaXMucHJvcHMuZW5kICE9PSBuZXh0UHJvcHMuZW5kIHx8XG4gICAgICB0aGlzLnByb3BzLnN0YXJ0ICE9PSBuZXh0UHJvcHMuc3RhcnQ7XG4gIH1cblxuICBzdGFydEFuaW1hdGlvbihjb21wKSB7XG4gICAgaWYgKGNvbXAgJiYgY29tcC5yZWZzLmNvdW50dXBEb21SZWYpIHtcbiAgICAgIGxldCB7XG4gICAgICAgIGRlY2ltYWwsXG4gICAgICAgIGRlY2ltYWxzLFxuICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgZWFzaW5nRm4sXG4gICAgICAgIGVuZCxcbiAgICAgICAgZm9ybWF0dGluZ0ZuLFxuICAgICAgICBvbkNvbXBsZXRlLFxuICAgICAgICBvblN0YXJ0LFxuICAgICAgICBwcmVmaXgsXG4gICAgICAgIHNlcGFyYXRvcixcbiAgICAgICAgc3RhcnQsXG4gICAgICAgIHN1ZmZpeCxcbiAgICAgICAgdXNlRWFzaW5nLFxuICAgICAgICB1c2VHcm91cGluZ1xuICAgICAgfSA9IGNvbXAucHJvcHM7XG5cbiAgICAgIGVuZCA9IHRoaXMuc2tWYWwoKTtcblxuICAgICAgY29uc3QgY291bnR1cEluc3RhbmNlID0gbmV3IENvdW50VXAoXG4gICAgICAgIGNvbXAucmVmcy5jb3VudHVwRG9tUmVmLFxuICAgICAgICBzdGFydCxcbiAgICAgICAgZW5kLFxuICAgICAgICBkZWNpbWFscyxcbiAgICAgICAgZHVyYXRpb24sXG4gICAgICAgIHtcbiAgICAgICAgICBkZWNpbWFsLFxuICAgICAgICAgIGVhc2luZ0ZuLFxuICAgICAgICAgIGZvcm1hdHRpbmdGbixcbiAgICAgICAgICBzZXBhcmF0b3IsXG4gICAgICAgICAgcHJlZml4LFxuICAgICAgICAgIHN1ZmZpeCxcbiAgICAgICAgICB1c2VFYXNpbmcsXG4gICAgICAgICAgdXNlR3JvdXBpbmdcbiAgICAgICAgfSxcbiAgICAgICk7XG5cbiAgICAgIGlmIChfLmlzRnVuY3Rpb24ob25TdGFydCkpIHtcbiAgICAgICAgb25TdGFydCgpO1xuICAgICAgfVxuXG4gICAgICBjb3VudHVwSW5zdGFuY2Uuc3RhcnQob25Db21wbGV0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1lvdSBuZWVkIHRvIHBhc3MgdGhlIENvdW50VXAgY29tcG9uZW50IGFzIGFuIGFyZ3VtZW50IVxcbmVnLiB0aGlzLm15Q291bnRVcC5zdGFydEFuaW1hdGlvbih0aGlzLm15Q291bnRVcCk7JyxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZywgc3RhcnR9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5jb21wVmFsaWRQcm9wcyhDb21wVGFnKX0gcmVmPSdjb3VudHVwRG9tUmVmJz5cbiAgICAgICAge3N0YXJ0fVxuICAgICAgPC9Db21wVGFnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==