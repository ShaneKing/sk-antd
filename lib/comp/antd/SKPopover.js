'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _popover = require('antd/lib/popover');

var _popover2 = _interopRequireDefault(_popover);

var _tooltip = require('antd/lib/tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/popover/style');

require('antd/lib/tooltip/style');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _AntdComp2 = require('./AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_popover2.default.defaultProps = _skJs.SK.assign({}, {}, _tooltip2.default.COMMON_DEFAULT_PROPS, _popover2.default.defaultProps, {});

_popover2.default.propTypes = _skJs.SK.assign({}, {
  content: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node])
}, _tooltip2.default.COMMON_PROP_TYPES, _popover2.default.propTypes, {});

var SKPopover = function (_AntdComp) {
  _inherits(SKPopover, _AntdComp);

  function SKPopover() {
    var _ref;

    _classCallCheck(this, SKPopover);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKPopover.__proto__ || Object.getPrototypeOf(SKPopover)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKPopover';
    return _this;
  }

  _createClass(SKPopover, [{
    key: 'handleVisibleChange',
    value: function handleVisibleChange(visible) {
      this.skVal(visible);
    }
  }, {
    key: 'render',
    value: function render() {
      var CompTag = this.props.compTag;


      return _react2.default.createElement(
        CompTag,
        _extends({}, this.skTransProps2Self(CompTag), {
          onVisibleChange: this.handleVisibleChange.bind(this),
          visible: this.skVal() }),
        this.skTransProps2Child()
      );
    }
  }]);

  return SKPopover;
}(_AntdComp3.default);

SKPopover.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _popover2.default.defaultProps, {
  compTag: _popover2.default
});
SKPopover.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _popover2.default.propTypes, {});
exports.default = SKPopover;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS1BvcG92ZXIuanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwiQ09NTU9OX0RFRkFVTFRfUFJPUFMiLCJwcm9wVHlwZXMiLCJjb250ZW50Iiwib25lT2ZUeXBlIiwic3RyaW5nIiwibm9kZSIsInRpdGxlIiwiQ09NTU9OX1BST1BfVFlQRVMiLCJTS1BvcG92ZXIiLCJhcmdzIiwiY29tcE5hbWUiLCJ2aXNpYmxlIiwic2tWYWwiLCJDb21wVGFnIiwicHJvcHMiLCJjb21wVGFnIiwic2tUcmFuc1Byb3BzMlNlbGYiLCJoYW5kbGVWaXNpYmxlQ2hhbmdlIiwiYmluZCIsInNrVHJhbnNQcm9wczJDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsa0JBQVFBLFlBQVIsR0FBdUIsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxFQUFkLEVBQWtCLGtCQUFRQyxvQkFBMUIsRUFBZ0Qsa0JBQVFGLFlBQXhELEVBQXNFLEVBQXRFLENBQXZCOztBQUVBLGtCQUFRRyxTQUFSLEdBQW9CLFNBQUdGLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDaENHLFdBQVMsb0JBQVVDLFNBQVYsQ0FBb0IsQ0FDM0Isb0JBQVVDLE1BRGlCLEVBRTNCLG9CQUFVQyxJQUZpQixDQUFwQixDQUR1QjtBQUtoQ0MsU0FBTyxvQkFBVUgsU0FBVixDQUFvQixDQUN6QixvQkFBVUMsTUFEZSxFQUV6QixvQkFBVUMsSUFGZSxDQUFwQjtBQUx5QixDQUFkLEVBU2pCLGtCQUFRRSxpQkFUUyxFQVNVLGtCQUFRTixTQVRsQixFQVM2QixFQVQ3QixDQUFwQjs7SUFXcUJPLFM7OztBQU9uQix1QkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsaUpBQ1ZBLElBRFU7O0FBRW5CLFVBQUtDLFFBQUwsR0FBZ0IsV0FBaEI7QUFGbUI7QUFHcEI7Ozs7d0NBRW1CQyxPLEVBQVM7QUFDM0IsV0FBS0MsS0FBTCxDQUFXRCxPQUFYO0FBQ0Q7Ozs2QkFFUTtBQUFBLFVBQ09FLE9BRFAsR0FDa0IsS0FBS0MsS0FEdkIsQ0FDRkMsT0FERTs7O0FBR1AsYUFDRTtBQUFDLGVBQUQ7QUFBQSxxQkFBYSxLQUFLQyxpQkFBTCxDQUF1QkgsT0FBdkIsQ0FBYjtBQUNTLDJCQUFpQixLQUFLSSxtQkFBTCxDQUF5QkMsSUFBekIsQ0FBOEIsSUFBOUIsQ0FEMUI7QUFFUyxtQkFBUyxLQUFLTixLQUFMLEVBRmxCO0FBR0csYUFBS08sa0JBQUw7QUFISCxPQURGO0FBT0Q7Ozs7OztBQTFCa0JYLFMsQ0FDWlYsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNELFlBQXZCLEVBQXFDLGtCQUFRQSxZQUE3QyxFQUEyRDtBQUMvRWlCO0FBRCtFLENBQTNELEM7QUFESFAsUyxDQUlaUCxTLEdBQVksU0FBR0YsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0UsU0FBdkIsRUFBa0Msa0JBQVFBLFNBQTFDLEVBQXFELEVBQXJELEM7a0JBSkFPLFMiLCJmaWxlIjoiY29tcC9hbnRkL1NLUG9wb3Zlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UG9wb3ZlciwgVG9vbHRpcH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBBbnRkQ29tcCBmcm9tICcuL0FudGRDb21wJztcblxuUG9wb3Zlci5kZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIHt9LCBUb29sdGlwLkNPTU1PTl9ERUZBVUxUX1BST1BTLCBQb3BvdmVyLmRlZmF1bHRQcm9wcywge30pO1xuXG5Qb3BvdmVyLnByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwge1xuICBjb250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5ub2RlXG4gIF0pLFxuICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubm9kZVxuICBdKVxufSwgVG9vbHRpcC5DT01NT05fUFJPUF9UWVBFUywgUG9wb3Zlci5wcm9wVHlwZXMsIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tQb3BvdmVyIGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5kZWZhdWx0UHJvcHMsIFBvcG92ZXIuZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogUG9wb3ZlclxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCBQb3BvdmVyLnByb3BUeXBlcywge30pO1xuXG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tQb3BvdmVyJztcbiAgfVxuXG4gIGhhbmRsZVZpc2libGVDaGFuZ2UodmlzaWJsZSkge1xuICAgIHRoaXMuc2tWYWwodmlzaWJsZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoQ29tcFRhZyl9XG4gICAgICAgICAgICAgICBvblZpc2libGVDaGFuZ2U9e3RoaXMuaGFuZGxlVmlzaWJsZUNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5za1ZhbCgpfT5cbiAgICAgICAge3RoaXMuc2tUcmFuc1Byb3BzMkNoaWxkKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxufVxuIl19