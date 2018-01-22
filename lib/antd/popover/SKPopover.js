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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvcG9wb3Zlci9TS1BvcG92ZXIuanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwicHJvcFR5cGVzIiwiY29udGVudCIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm5vZGUiLCJ0aXRsZSIsIlNLUG9wb3ZlciIsImFyZ3MiLCJjb21wTmFtZSIsImhhbmRsZVZpc2libGVDaGFuZ2UiLCJ2aXNpYmxlIiwic2tWYWwiLCJDb21wVGFnIiwicHJvcHMiLCJjb21wVGFnIiwic2tUcmFuc1Byb3BzMlNlbGYiLCJza1RyYW5zUHJvcHMyQ2hpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsa0JBQVFBLFlBQVIsR0FBdUIsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxFQUFkLEVBQWtCLG9CQUFVRCxZQUE1QixFQUEwQyxrQkFBUUEsWUFBbEQsRUFBZ0UsRUFBaEUsQ0FBdkI7QUFDQSxrQkFBUUUsU0FBUixHQUFvQixTQUFHRCxNQUFILENBQVUsRUFBVixFQUFjO0FBQ2hDO0FBQ0FFLFdBQVMsb0JBQVVDLFNBQVYsQ0FBb0IsQ0FDM0Isb0JBQVVDLE1BRGlCLEVBRTNCLG9CQUFVQyxJQUZpQixDQUFwQixDQUZ1QjtBQU1oQ0MsU0FBTyxvQkFBVUgsU0FBVixDQUFvQixDQUN6QixvQkFBVUMsTUFEZSxFQUV6QixvQkFBVUMsSUFGZSxDQUFwQjtBQU55QixDQUFkLEVBVWpCLG9CQUFVSixTQVZPLEVBVUksa0JBQVFBLFNBVlosRUFVdUIsRUFWdkIsQ0FBcEI7O0lBWXFCTSxTOzs7QUFNbkIsdUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLGlKQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLFdBQWhCO0FBQ0EsVUFBS0MsbUJBQUwsR0FBMkIsVUFBQ0MsT0FBRCxFQUFhO0FBQ3RDLFlBQUtDLEtBQUwsQ0FBV0QsT0FBWDtBQUNELEtBRkQ7QUFIbUI7QUFNcEI7Ozs7NkJBRVE7QUFBQSxVQUNPRSxPQURQLEdBQ2tCLEtBQUtDLEtBRHZCLENBQ0ZDLE9BREU7OztBQUdQLGFBQ0U7QUFBQyxlQUFEO0FBQUEscUJBQWEsS0FBS0MsaUJBQUwsQ0FBdUJILE9BQXZCLENBQWI7QUFDUywyQkFBaUIsS0FBS0gsbUJBRC9CO0FBRVMsbUJBQVMsS0FBS0UsS0FBTCxFQUZsQjtBQUdHLGFBQUtLLGtCQUFMO0FBSEgsT0FERjtBQU9EOzs7Ozs7QUF4QmtCVixTLENBQ1pSLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQyxrQkFBUUEsWUFBN0MsRUFBMkQ7QUFDL0VnQjtBQUQrRSxDQUEzRCxDO0FBREhSLFMsQ0FJWk4sUyxHQUFZLFNBQUdELE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNDLFNBQXZCLEVBQWtDLGtCQUFRQSxTQUExQyxFQUFxRCxFQUFyRCxDO2tCQUpBTSxTIiwiZmlsZSI6ImFudGQvcG9wb3Zlci9TS1BvcG92ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BvcG92ZXJ9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1NLfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgQW50ZENvbXAgZnJvbSAnLi4vQW50ZENvbXAnO1xuaW1wb3J0IENvbW1vblRpcCBmcm9tICcuLi90b29sdGlwL0NvbW1vblRpcCc7XG5cblBvcG92ZXIuZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCB7fSwgQ29tbW9uVGlwLmRlZmF1bHRQcm9wcywgUG9wb3Zlci5kZWZhdWx0UHJvcHMsIHt9KTtcblBvcG92ZXIucHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCB7XG4gIC8vaHR0cHM6Ly9hbnQuZGVzaWduL2NvbXBvbmVudHMvcG9wb3Zlci1jbi8jQVBJXG4gIGNvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm5vZGVcbiAgXSksXG4gIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5ub2RlXG4gIF0pXG59LCBDb21tb25UaXAucHJvcFR5cGVzLCBQb3BvdmVyLnByb3BUeXBlcywge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS1BvcG92ZXIgZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywgUG9wb3Zlci5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBQb3BvdmVyXG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5wcm9wVHlwZXMsIFBvcG92ZXIucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tQb3BvdmVyJztcbiAgICB0aGlzLmhhbmRsZVZpc2libGVDaGFuZ2UgPSAodmlzaWJsZSkgPT4ge1xuICAgICAgdGhpcy5za1ZhbCh2aXNpYmxlKTtcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZ30gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKENvbXBUYWcpfVxuICAgICAgICAgICAgICAgb25WaXNpYmxlQ2hhbmdlPXt0aGlzLmhhbmRsZVZpc2libGVDaGFuZ2V9XG4gICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnNrVmFsKCl9PlxuICAgICAgICB7dGhpcy5za1RyYW5zUHJvcHMyQ2hpbGQoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG59XG4iXX0=