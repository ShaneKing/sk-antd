'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _popover = require('antd/lib/popover');

var _popover2 = _interopRequireDefault(_popover);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/popover/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

SKPopover.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, {
  compTag: _popover2.default
});
SKPopover.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, {});
exports.default = SKPopover;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9wb3BvdmVyL1NLUG9wb3Zlci5qcyJdLCJuYW1lcyI6WyJTS1BvcG92ZXIiLCJhcmdzIiwiY29tcE5hbWUiLCJoYW5kbGVWaXNpYmxlQ2hhbmdlIiwidmlzaWJsZSIsInNrVmFsIiwiQ29tcFRhZyIsInByb3BzIiwiY29tcFRhZyIsInNrVHJhbnNQcm9wczJTZWxmIiwic2tUcmFuc1Byb3BzMkNoaWxkIiwiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7QUFPbkIsdUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLGlKQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLFdBQWhCO0FBQ0EsVUFBS0MsbUJBQUwsR0FBMkIsVUFBQ0MsT0FBRCxFQUFhO0FBQ3RDLFlBQUtDLEtBQUwsQ0FBV0QsT0FBWDtBQUNELEtBRkQ7QUFIbUI7QUFNcEI7Ozs7NkJBRVE7QUFBQSxVQUNPRSxPQURQLEdBQ2tCLEtBQUtDLEtBRHZCLENBQ0ZDLE9BREU7OztBQUdQLGFBQ0U7QUFBQyxlQUFEO0FBQUEscUJBQWEsS0FBS0MsaUJBQUwsQ0FBdUJILE9BQXZCLENBQWI7QUFDUywyQkFBaUIsS0FBS0gsbUJBRC9CO0FBRVMsbUJBQVMsS0FBS0UsS0FBTCxFQUZsQjtBQUdHLGFBQUtLLGtCQUFMO0FBSEgsT0FERjtBQU9EOzs7Ozs7QUF6QmtCVixTLENBQ1pXLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQztBQUN6REg7QUFEeUQsQ0FBckMsQztBQURIUixTLENBSVphLFMsR0FBWSxTQUFHRCxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTQyxTQUF2QixFQUFrQyxFQUFsQyxDO2tCQUpBYixTIiwiZmlsZSI6ImNvbXAvYW50ZC9wb3BvdmVyL1NLUG9wb3Zlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UG9wb3Zlcn0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tQb3BvdmVyIGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBQb3BvdmVyXG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5wcm9wVHlwZXMsIHt9KTtcblxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ1NLUG9wb3Zlcic7XG4gICAgdGhpcy5oYW5kbGVWaXNpYmxlQ2hhbmdlID0gKHZpc2libGUpID0+IHtcbiAgICAgIHRoaXMuc2tWYWwodmlzaWJsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2NvbXBUYWc6IENvbXBUYWd9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihDb21wVGFnKX1cbiAgICAgICAgICAgICAgIG9uVmlzaWJsZUNoYW5nZT17dGhpcy5oYW5kbGVWaXNpYmxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5za1ZhbCgpfT5cbiAgICAgICAge3RoaXMuc2tUcmFuc1Byb3BzMkNoaWxkKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxufVxuIl19