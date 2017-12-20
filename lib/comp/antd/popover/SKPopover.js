'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _popover = require('antd/lib/popover');

var _popover2 = _interopRequireDefault(_popover);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/popover/style');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

var _CommonTip = require('../tooltip/CommonTip');

var _CommonTip2 = _interopRequireDefault(_CommonTip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_popover2.default.defaultProps = _skJs.SK.assign({}, {}, _CommonTip2.default.defaultProps, _popover2.default.defaultProps, {});
_popover2.default.propTypes = _skJs.SK.assign({}, {
  //https://ant.design/components/popover-cn/#API
  content: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node])
}, _CommonTip2.default.propTypes, _popover2.default.propTypes, {});

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
    _this.handleVisibleChange = function (visible) {
      _this.skVal(visible);
    };
    return _this;
  }

  _createClass(SKPopover, [{
    key: 'render',
    value: function render() {
      var CompTag = this.props.compTag;


      return _react2.default.createElement(
        CompTag,
        _extends({}, this.skTransProps2Self(CompTag), {
          onVisibleChange: this.handleVisibleChange,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9wb3BvdmVyL1NLUG9wb3Zlci5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJwcm9wVHlwZXMiLCJjb250ZW50Iiwib25lT2ZUeXBlIiwic3RyaW5nIiwibm9kZSIsInRpdGxlIiwiU0tQb3BvdmVyIiwiYXJncyIsImNvbXBOYW1lIiwiaGFuZGxlVmlzaWJsZUNoYW5nZSIsInZpc2libGUiLCJza1ZhbCIsIkNvbXBUYWciLCJwcm9wcyIsImNvbXBUYWciLCJza1RyYW5zUHJvcHMyU2VsZiIsInNrVHJhbnNQcm9wczJDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxrQkFBUUEsWUFBUixHQUF1QixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLEVBQWQsRUFBa0Isb0JBQVVELFlBQTVCLEVBQTBDLGtCQUFRQSxZQUFsRCxFQUFnRSxFQUFoRSxDQUF2QjtBQUNBLGtCQUFRRSxTQUFSLEdBQW9CLFNBQUdELE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDaEM7QUFDQUUsV0FBUyxvQkFBVUMsU0FBVixDQUFvQixDQUMzQixvQkFBVUMsTUFEaUIsRUFFM0Isb0JBQVVDLElBRmlCLENBQXBCLENBRnVCO0FBTWhDQyxTQUFPLG9CQUFVSCxTQUFWLENBQW9CLENBQ3pCLG9CQUFVQyxNQURlLEVBRXpCLG9CQUFVQyxJQUZlLENBQXBCO0FBTnlCLENBQWQsRUFVakIsb0JBQVVKLFNBVk8sRUFVSSxrQkFBUUEsU0FWWixFQVV1QixFQVZ2QixDQUFwQjs7SUFZcUJNLFM7OztBQU1uQix1QkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsaUpBQ1ZBLElBRFU7O0FBRW5CLFVBQUtDLFFBQUwsR0FBZ0IsV0FBaEI7QUFDQSxVQUFLQyxtQkFBTCxHQUEyQixVQUFDQyxPQUFELEVBQWE7QUFDdEMsWUFBS0MsS0FBTCxDQUFXRCxPQUFYO0FBQ0QsS0FGRDtBQUhtQjtBQU1wQjs7Ozs2QkFFUTtBQUFBLFVBQ09FLE9BRFAsR0FDa0IsS0FBS0MsS0FEdkIsQ0FDRkMsT0FERTs7O0FBR1AsYUFDRTtBQUFDLGVBQUQ7QUFBQSxxQkFBYSxLQUFLQyxpQkFBTCxDQUF1QkgsT0FBdkIsQ0FBYjtBQUNTLDJCQUFpQixLQUFLSCxtQkFEL0I7QUFFUyxtQkFBUyxLQUFLRSxLQUFMLEVBRmxCO0FBR0csYUFBS0ssa0JBQUw7QUFISCxPQURGO0FBT0Q7Ozs7OztBQXhCa0JWLFMsQ0FDWlIsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNELFlBQXZCLEVBQXFDLGtCQUFRQSxZQUE3QyxFQUEyRDtBQUMvRWdCO0FBRCtFLENBQTNELEM7QUFESFIsUyxDQUlaTixTLEdBQVksU0FBR0QsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0MsU0FBdkIsRUFBa0Msa0JBQVFBLFNBQTFDLEVBQXFELEVBQXJELEM7a0JBSkFNLFMiLCJmaWxlIjoiY29tcC9hbnRkL3BvcG92ZXIvU0tQb3BvdmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQb3BvdmVyfSBmcm9tICdhbnRkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcbmltcG9ydCBDb21tb25UaXAgZnJvbSAnLi4vdG9vbHRpcC9Db21tb25UaXAnO1xuXG5Qb3BvdmVyLmRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwge30sIENvbW1vblRpcC5kZWZhdWx0UHJvcHMsIFBvcG92ZXIuZGVmYXVsdFByb3BzLCB7fSk7XG5Qb3BvdmVyLnByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwge1xuICAvL2h0dHBzOi8vYW50LmRlc2lnbi9jb21wb25lbnRzL3BvcG92ZXItY24vI0FQSVxuICBjb250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5ub2RlXG4gIF0pLFxuICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubm9kZVxuICBdKVxufSwgQ29tbW9uVGlwLnByb3BUeXBlcywgUG9wb3Zlci5wcm9wVHlwZXMsIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tQb3BvdmVyIGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5kZWZhdWx0UHJvcHMsIFBvcG92ZXIuZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogUG9wb3ZlclxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCBQb3BvdmVyLnByb3BUeXBlcywge30pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ1NLUG9wb3Zlcic7XG4gICAgdGhpcy5oYW5kbGVWaXNpYmxlQ2hhbmdlID0gKHZpc2libGUpID0+IHtcbiAgICAgIHRoaXMuc2tWYWwodmlzaWJsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2NvbXBUYWc6IENvbXBUYWd9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihDb21wVGFnKX1cbiAgICAgICAgICAgICAgIG9uVmlzaWJsZUNoYW5nZT17dGhpcy5oYW5kbGVWaXNpYmxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5za1ZhbCgpfT5cbiAgICAgICAge3RoaXMuc2tUcmFuc1Byb3BzMkNoaWxkKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxufVxuIl19