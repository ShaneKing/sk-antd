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
    _this.handleChange = function (domEvent) {
      _this.skVal(domEvent.target.value);
    };
    return _this;
  }

  _createClass(SKInput, [{
    key: 'render',
    value: function render() {
      var CompTag = this.props.compTag;


      return _react2.default.createElement(
        CompTag,
        _extends({}, this.skTransProps2Self(CompTag), {
          onChange: this.handleChange,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9pbnB1dC9TS0lucHV0LmpzIl0sIm5hbWVzIjpbIlNLSW5wdXQiLCJhcmdzIiwiY29tcE5hbWUiLCJoYW5kbGVDaGFuZ2UiLCJkb21FdmVudCIsInNrVmFsIiwidGFyZ2V0IiwidmFsdWUiLCJDb21wVGFnIiwicHJvcHMiLCJjb21wVGFnIiwic2tUcmFuc1Byb3BzMlNlbGYiLCJza1Byb3AiLCJTS19QUk9QUyIsIlNJWkUiLCJza1RyYW5zUHJvcHMyQ2hpbGQiLCJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBO0lBQ3FCQSxPOzs7QUFNbkIscUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLDZJQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLFNBQWhCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixVQUFDQyxRQUFELEVBQWM7QUFDaEMsWUFBS0MsS0FBTCxDQUFXRCxTQUFTRSxNQUFULENBQWdCQyxLQUEzQjtBQUNELEtBRkQ7QUFIbUI7QUFNcEI7Ozs7NkJBRVE7QUFBQSxVQUNPQyxPQURQLEdBQ2tCLEtBQUtDLEtBRHZCLENBQ0ZDLE9BREU7OztBQUdQLGFBQ0U7QUFBQyxlQUFEO0FBQUEscUJBQWEsS0FBS0MsaUJBQUwsQ0FBdUJILE9BQXZCLENBQWI7QUFDUyxvQkFBVSxLQUFLTCxZQUR4QjtBQUVTLGdCQUFNLEtBQUtTLE1BQUwsQ0FBWSxtQkFBU0MsUUFBVCxDQUFrQkMsSUFBOUIsQ0FGZjtBQUdTLGlCQUFPLEtBQUtULEtBQUwsRUFIaEI7QUFJRyxhQUFLVSxrQkFBTDtBQUpILE9BREY7QUFRRDs7Ozs7O0FBekJrQmYsTyxDQUNaZ0IsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNELFlBQXZCLEVBQXFDLHNCQUFZQSxZQUFqRCxFQUErRDtBQUNuRk47QUFEbUYsQ0FBL0QsQztBQURIVixPLENBSVprQixTLEdBQVksU0FBR0QsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0MsU0FBdkIsRUFBa0Msc0JBQVlBLFNBQTlDLEVBQXlELEVBQXpELEM7a0JBSkFsQixPIiwiZmlsZSI6ImNvbXAvYW50ZC9pbnB1dC9TS0lucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbnB1dH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IE9yaWdpbklucHV0IGZyb20gJy4vT3JpZ2luSW5wdXQnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcblxuLy9vcmlnaW4gZXhpc3QsIHVzZSBvcmlnaW5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLSW5wdXQgZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywgT3JpZ2luSW5wdXQuZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogSW5wdXRcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLnByb3BUeXBlcywgT3JpZ2luSW5wdXQucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tJbnB1dCc7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSAoZG9tRXZlbnQpID0+IHtcbiAgICAgIHRoaXMuc2tWYWwoZG9tRXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZ30gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKENvbXBUYWcpfVxuICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgc2l6ZT17dGhpcy5za1Byb3AoQW50ZENvbXAuU0tfUFJPUFMuU0laRSl9XG4gICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5za1ZhbCgpfT5cbiAgICAgICAge3RoaXMuc2tUcmFuc1Byb3BzMkNoaWxkKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxufVxuIl19