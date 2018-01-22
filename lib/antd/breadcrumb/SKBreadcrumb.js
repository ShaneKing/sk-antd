'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _breadcrumb = require('antd/lib/breadcrumb');

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/breadcrumb/style');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_breadcrumb2.default.defaultProps = _skJs.SK.assign({}, {
  separator: _skJs.SK.CHAR_SLASH
}, _breadcrumb2.default.defaultProps, {});

_breadcrumb2.default.propTypes = _skJs.SK.assign({}, {
  //https://ant.design/components/breadcrumb-cn/#API
  itemRender: _propTypes2.default.func,
  params: _propTypes2.default.object,
  routes: _propTypes2.default.array,
  separator: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node])
}, _breadcrumb2.default.propTypes, {});

var SKBreadcrumb = function (_AntdComp) {
  _inherits(SKBreadcrumb, _AntdComp);

  function SKBreadcrumb() {
    var _ref;

    _classCallCheck(this, SKBreadcrumb);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKBreadcrumb.__proto__ || Object.getPrototypeOf(SKBreadcrumb)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKBreadcrumb';
    return _this;
  }

  _createClass(SKBreadcrumb, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          CompTag = _props.compTag,
          routes = _props.routes,
          params = _props.params;


      return _react2.default.createElement(
        CompTag,
        _extends({}, this.skTransProps2Self(CompTag), {
          params: params,
          routes: routes }),
        this.skTransProps2Child()
      );
    }
  }]);

  return SKBreadcrumb;
}(_AntdComp3.default);

SKBreadcrumb.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _breadcrumb2.default.defaultProps, {
  compTag: _breadcrumb2.default
});
SKBreadcrumb.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _breadcrumb2.default.propTypes, {});
exports.default = SKBreadcrumb;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvYnJlYWRjcnVtYi9TS0JyZWFkY3J1bWIuanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwic2VwYXJhdG9yIiwiQ0hBUl9TTEFTSCIsInByb3BUeXBlcyIsIml0ZW1SZW5kZXIiLCJmdW5jIiwicGFyYW1zIiwib2JqZWN0Iiwicm91dGVzIiwiYXJyYXkiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJub2RlIiwiU0tCcmVhZGNydW1iIiwiYXJncyIsImNvbXBOYW1lIiwicHJvcHMiLCJDb21wVGFnIiwiY29tcFRhZyIsInNrVHJhbnNQcm9wczJTZWxmIiwic2tUcmFuc1Byb3BzMkNoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxxQkFBV0EsWUFBWCxHQUEwQixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjO0FBQ3RDQyxhQUFXLFNBQUdDO0FBRHdCLENBQWQsRUFFdkIscUJBQVdILFlBRlksRUFFRSxFQUZGLENBQTFCOztBQUlBLHFCQUFXSSxTQUFYLEdBQXVCLFNBQUdILE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDbkM7QUFDQUksY0FBWSxvQkFBVUMsSUFGYTtBQUduQ0MsVUFBUSxvQkFBVUMsTUFIaUI7QUFJbkNDLFVBQVEsb0JBQVVDLEtBSmlCO0FBS25DUixhQUFXLG9CQUFVUyxTQUFWLENBQW9CLENBQzdCLG9CQUFVQyxNQURtQixFQUU3QixvQkFBVUMsSUFGbUIsQ0FBcEI7QUFMd0IsQ0FBZCxFQVNwQixxQkFBV1QsU0FUUyxFQVNFLEVBVEYsQ0FBdkI7O0lBV3FCVSxZOzs7QUFNbkIsMEJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLHVKQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLGNBQWhCO0FBRm1CO0FBR3BCOzs7OzZCQUVRO0FBQUEsbUJBQ2tDLEtBQUtDLEtBRHZDO0FBQUEsVUFDT0MsT0FEUCxVQUNGQyxPQURFO0FBQUEsVUFDZ0JWLE1BRGhCLFVBQ2dCQSxNQURoQjtBQUFBLFVBQ3dCRixNQUR4QixVQUN3QkEsTUFEeEI7OztBQUdQLGFBQ0U7QUFBQyxlQUFEO0FBQUEscUJBQWEsS0FBS2EsaUJBQUwsQ0FBdUJGLE9BQXZCLENBQWI7QUFDUyxrQkFBUVgsTUFEakI7QUFFUyxrQkFBUUUsTUFGakI7QUFHRyxhQUFLWSxrQkFBTDtBQUhILE9BREY7QUFPRDs7Ozs7O0FBckJrQlAsWSxDQUNaZCxZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUMscUJBQVdBLFlBQWhELEVBQThEO0FBQ2xGbUI7QUFEa0YsQ0FBOUQsQztBQURITCxZLENBSVpWLFMsR0FBWSxTQUFHSCxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRyxTQUF2QixFQUFrQyxxQkFBV0EsU0FBN0MsRUFBd0QsRUFBeEQsQztrQkFKQVUsWSIsImZpbGUiOiJhbnRkL2JyZWFkY3J1bWIvU0tCcmVhZGNydW1iLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCcmVhZGNydW1ifSBmcm9tICdhbnRkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcblxuQnJlYWRjcnVtYi5kZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIHtcbiAgc2VwYXJhdG9yOiBTSy5DSEFSX1NMQVNIXG59LCBCcmVhZGNydW1iLmRlZmF1bHRQcm9wcywge30pO1xuXG5CcmVhZGNydW1iLnByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwge1xuICAvL2h0dHBzOi8vYW50LmRlc2lnbi9jb21wb25lbnRzL2JyZWFkY3J1bWItY24vI0FQSVxuICBpdGVtUmVuZGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgcGFyYW1zOiBQcm9wVHlwZXMub2JqZWN0LFxuICByb3V0ZXM6IFByb3BUeXBlcy5hcnJheSxcbiAgc2VwYXJhdG9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5ub2RlXG4gIF0pXG59LCBCcmVhZGNydW1iLnByb3BUeXBlcywge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS0JyZWFkY3J1bWIgZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywgQnJlYWRjcnVtYi5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBCcmVhZGNydW1iXG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5wcm9wVHlwZXMsIEJyZWFkY3J1bWIucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tCcmVhZGNydW1iJztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2NvbXBUYWc6IENvbXBUYWcsIHJvdXRlcywgcGFyYW1zfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoQ29tcFRhZyl9XG4gICAgICAgICAgICAgICBwYXJhbXM9e3BhcmFtc31cbiAgICAgICAgICAgICAgIHJvdXRlcz17cm91dGVzfT5cbiAgICAgICAge3RoaXMuc2tUcmFuc1Byb3BzMkNoaWxkKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxufVxuIl19