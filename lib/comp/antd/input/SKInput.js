'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/input/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _OriginInput = require('./OriginInput');

var _OriginInput2 = _interopRequireDefault(_OriginInput);

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//origin exist, use origin
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

SKInput.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _OriginInput2.default.defaultProps, {
  compTag: _input2.default
});
SKInput.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _OriginInput2.default.propTypes, {});
exports.default = SKInput;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9pbnB1dC9TS0lucHV0LmpzIl0sIm5hbWVzIjpbIlNLSW5wdXQiLCJhcmdzIiwiY29tcE5hbWUiLCJkb21FdmVudCIsInNrVmFsIiwidGFyZ2V0IiwidmFsdWUiLCJDb21wVGFnIiwicHJvcHMiLCJjb21wVGFnIiwic2tUcmFuc1Byb3BzMlNlbGYiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwic2tQcm9wIiwiU0tfUFJPUFMiLCJTSVpFIiwic2tUcmFuc1Byb3BzMkNoaWxkIiwiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTtJQUNxQkEsTzs7O0FBTW5CLHFCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSw2SUFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixTQUFoQjtBQUZtQjtBQUdwQjs7OztpQ0FFWUMsUSxFQUFVO0FBQ3JCLFdBQUtDLEtBQUwsQ0FBV0QsU0FBU0UsTUFBVCxDQUFnQkMsS0FBM0I7QUFDRDs7OzZCQUVRO0FBQUEsVUFDT0MsT0FEUCxHQUNrQixLQUFLQyxLQUR2QixDQUNGQyxPQURFOzs7QUFHUCxhQUNFO0FBQUMsZUFBRDtBQUFBLHFCQUFhLEtBQUtDLGlCQUFMLENBQXVCSCxPQUF2QixDQUFiO0FBQ1Msb0JBQVUsS0FBS0ksWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FEbkI7QUFFUyxnQkFBTSxLQUFLQyxNQUFMLENBQVksbUJBQVNDLFFBQVQsQ0FBa0JDLElBQTlCLENBRmY7QUFHUyxpQkFBTyxLQUFLWCxLQUFMLEVBSGhCO0FBSUcsYUFBS1ksa0JBQUw7QUFKSCxPQURGO0FBUUQ7Ozs7OztBQTFCa0JoQixPLENBQ1ppQixZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUMsc0JBQVlBLFlBQWpELEVBQStEO0FBQ25GUjtBQURtRixDQUEvRCxDO0FBREhULE8sQ0FJWm1CLFMsR0FBWSxTQUFHRCxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTQyxTQUF2QixFQUFrQyxzQkFBWUEsU0FBOUMsRUFBeUQsRUFBekQsQztrQkFKQW5CLE8iLCJmaWxlIjoiY29tcC9hbnRkL2lucHV0L1NLSW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lucHV0fSBmcm9tICdhbnRkJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1NLfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgT3JpZ2luSW5wdXQgZnJvbSAnLi9PcmlnaW5JbnB1dCc7XG5pbXBvcnQgQW50ZENvbXAgZnJvbSAnLi4vQW50ZENvbXAnO1xuXG4vL29yaWdpbiBleGlzdCwgdXNlIG9yaWdpblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tJbnB1dCBleHRlbmRzIEFudGRDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAuZGVmYXVsdFByb3BzLCBPcmlnaW5JbnB1dC5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBJbnB1dFxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCBPcmlnaW5JbnB1dC5wcm9wVHlwZXMsIHt9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS0lucHV0JztcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShkb21FdmVudCkge1xuICAgIHRoaXMuc2tWYWwoZG9tRXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2NvbXBUYWc6IENvbXBUYWd9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihDb21wVGFnKX1cbiAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgc2l6ZT17dGhpcy5za1Byb3AoQW50ZENvbXAuU0tfUFJPUFMuU0laRSl9XG4gICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5za1ZhbCgpfT5cbiAgICAgICAge3RoaXMuc2tUcmFuc1Byb3BzMkNoaWxkKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxufVxuIl19