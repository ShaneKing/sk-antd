'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style2 = require('antd/lib/popover/style');

var _popover = require('antd/lib/popover');

var _popover2 = _interopRequireDefault(_popover);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _skJs2 = _interopRequireDefault(_skJs);

var _Comp2 = require('../../util/Comp');

var _Comp3 = _interopRequireDefault(_Comp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_popover2.default.propTypes = _skJs2.default.assign({}, _popover2.default.propTypes, {
  onVisibleChange: _react2.default.PropTypes.func,
  overlayClassName: _react2.default.PropTypes.string,
  placement: _react2.default.PropTypes.string,
  visible: _react2.default.PropTypes.bool,
  trigger: _react2.default.PropTypes.string
}, {});

var SKPopover = function (_Comp) {
  _inherits(SKPopover, _Comp);

  function SKPopover() {
    var _ref;

    _classCallCheck(this, SKPopover);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = SKPopover.__proto__ || Object.getPrototypeOf(SKPopover)).call.apply(_ref, [this].concat(args)));
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
        _extends({}, this.compValidProps(CompTag), {
          onVisibleChange: this.handleVisibleChange.bind(this),
          visible: this.skVal() }),
        this.skPropsTrans()
      );
    }
  }]);

  return SKPopover;
}(_Comp3.default);

SKPopover.defaultProps = {
  compTag: _popover2.default
};
SKPopover.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _popover2.default.propTypes, {});
exports.default = SKPopover;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS1BvcG92ZXIuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwiYXNzaWduIiwib25WaXNpYmxlQ2hhbmdlIiwiUHJvcFR5cGVzIiwiZnVuYyIsIm92ZXJsYXlDbGFzc05hbWUiLCJzdHJpbmciLCJwbGFjZW1lbnQiLCJ2aXNpYmxlIiwiYm9vbCIsInRyaWdnZXIiLCJTS1BvcG92ZXIiLCJhcmdzIiwic2tWYWwiLCJDb21wVGFnIiwicHJvcHMiLCJjb21wVGFnIiwiY29tcFZhbGlkUHJvcHMiLCJoYW5kbGVWaXNpYmxlQ2hhbmdlIiwiYmluZCIsInNrUHJvcHNUcmFucyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsa0JBQVFBLFNBQVIsR0FBb0IsZUFBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxrQkFBUUQsU0FBdEIsRUFBaUM7QUFDbkRFLG1CQUFpQixnQkFBTUMsU0FBTixDQUFnQkMsSUFEa0I7QUFFbkRDLG9CQUFrQixnQkFBTUYsU0FBTixDQUFnQkcsTUFGaUI7QUFHbkRDLGFBQVcsZ0JBQU1KLFNBQU4sQ0FBZ0JHLE1BSHdCO0FBSW5ERSxXQUFTLGdCQUFNTCxTQUFOLENBQWdCTSxJQUowQjtBQUtuREMsV0FBUyxnQkFBTVAsU0FBTixDQUFnQkc7QUFMMEIsQ0FBakMsRUFNakIsRUFOaUIsQ0FBcEI7O0lBUXFCSyxTOzs7QUFNbkIsdUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLDRJQUNWQSxJQURVO0FBRXBCOzs7O3dDQUVtQkosTyxFQUFTO0FBQzNCLFdBQUtLLEtBQUwsQ0FBV0wsT0FBWDtBQUNEOzs7NkJBRVE7QUFBQSxVQUNPTSxPQURQLEdBQ2tCLEtBQUtDLEtBRHZCLENBQ0ZDLE9BREU7OztBQUdQLGFBQ0U7QUFBQyxlQUFEO0FBQUEscUJBQWEsS0FBS0MsY0FBTCxDQUFvQkgsT0FBcEIsQ0FBYjtBQUNFLDJCQUFpQixLQUFLSSxtQkFBTCxDQUF5QkMsSUFBekIsQ0FBOEIsSUFBOUIsQ0FEbkI7QUFFRSxtQkFBUyxLQUFLTixLQUFMLEVBRlg7QUFHRyxhQUFLTyxZQUFMO0FBSEgsT0FERjtBQU9EOzs7Ozs7QUF4QmtCVCxTLENBQ1pVLFksR0FBZTtBQUNwQkw7QUFEb0IsQztBQURITCxTLENBSVpYLFMsR0FBWSxlQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLGVBQUtELFNBQW5CLEVBQThCLGtCQUFRQSxTQUF0QyxFQUFpRCxFQUFqRCxDO2tCQUpBVyxTIiwiZmlsZSI6ImNvbXAvYW50ZC9TS1BvcG92ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BvcG92ZXJ9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTSyBmcm9tICdzay1qcyc7XG5pbXBvcnQgQ29tcCBmcm9tICcuLi8uLi91dGlsL0NvbXAnO1xuXG5Qb3BvdmVyLnByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgUG9wb3Zlci5wcm9wVHlwZXMsIHtcbiAgb25WaXNpYmxlQ2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgb3ZlcmxheUNsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgcGxhY2VtZW50OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICB2aXNpYmxlOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgdHJpZ2dlcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xufSwge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS1BvcG92ZXIgZXh0ZW5kcyBDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb21wVGFnOiBQb3BvdmVyXG4gIH07XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIENvbXAucHJvcFR5cGVzLCBQb3BvdmVyLnByb3BUeXBlcywge30pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxuXG4gIGhhbmRsZVZpc2libGVDaGFuZ2UodmlzaWJsZSkge1xuICAgIHRoaXMuc2tWYWwodmlzaWJsZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuY29tcFZhbGlkUHJvcHMoQ29tcFRhZyl9XG4gICAgICAgIG9uVmlzaWJsZUNoYW5nZT17dGhpcy5oYW5kbGVWaXNpYmxlQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgIHZpc2libGU9e3RoaXMuc2tWYWwoKX0+XG4gICAgICAgIHt0aGlzLnNrUHJvcHNUcmFucygpfVxuICAgICAgPC9Db21wVGFnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==