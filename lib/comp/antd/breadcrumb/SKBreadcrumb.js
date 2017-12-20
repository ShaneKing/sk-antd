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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9icmVhZGNydW1iL1NLQnJlYWRjcnVtYi5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJzZXBhcmF0b3IiLCJDSEFSX1NMQVNIIiwicHJvcFR5cGVzIiwiaXRlbVJlbmRlciIsImZ1bmMiLCJwYXJhbXMiLCJvYmplY3QiLCJyb3V0ZXMiLCJhcnJheSIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm5vZGUiLCJTS0JyZWFkY3J1bWIiLCJhcmdzIiwiY29tcE5hbWUiLCJwcm9wcyIsIkNvbXBUYWciLCJjb21wVGFnIiwic2tUcmFuc1Byb3BzMlNlbGYiLCJza1RyYW5zUHJvcHMyQ2hpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLHFCQUFXQSxZQUFYLEdBQTBCLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDdENDLGFBQVcsU0FBR0M7QUFEd0IsQ0FBZCxFQUV2QixxQkFBV0gsWUFGWSxFQUVFLEVBRkYsQ0FBMUI7O0FBSUEscUJBQVdJLFNBQVgsR0FBdUIsU0FBR0gsTUFBSCxDQUFVLEVBQVYsRUFBYztBQUNuQztBQUNBSSxjQUFZLG9CQUFVQyxJQUZhO0FBR25DQyxVQUFRLG9CQUFVQyxNQUhpQjtBQUluQ0MsVUFBUSxvQkFBVUMsS0FKaUI7QUFLbkNSLGFBQVcsb0JBQVVTLFNBQVYsQ0FBb0IsQ0FDN0Isb0JBQVVDLE1BRG1CLEVBRTdCLG9CQUFVQyxJQUZtQixDQUFwQjtBQUx3QixDQUFkLEVBU3BCLHFCQUFXVCxTQVRTLEVBU0UsRUFURixDQUF2Qjs7SUFXcUJVLFk7OztBQU1uQiwwQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsdUpBQ1ZBLElBRFU7O0FBRW5CLFVBQUtDLFFBQUwsR0FBZ0IsY0FBaEI7QUFGbUI7QUFHcEI7Ozs7NkJBRVE7QUFBQSxtQkFDa0MsS0FBS0MsS0FEdkM7QUFBQSxVQUNPQyxPQURQLFVBQ0ZDLE9BREU7QUFBQSxVQUNnQlYsTUFEaEIsVUFDZ0JBLE1BRGhCO0FBQUEsVUFDd0JGLE1BRHhCLFVBQ3dCQSxNQUR4Qjs7O0FBR1AsYUFDRTtBQUFDLGVBQUQ7QUFBQSxxQkFBYSxLQUFLYSxpQkFBTCxDQUF1QkYsT0FBdkIsQ0FBYjtBQUNTLGtCQUFRWCxNQURqQjtBQUVTLGtCQUFRRSxNQUZqQjtBQUdHLGFBQUtZLGtCQUFMO0FBSEgsT0FERjtBQU9EOzs7Ozs7QUFyQmtCUCxZLENBQ1pkLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQyxxQkFBV0EsWUFBaEQsRUFBOEQ7QUFDbEZtQjtBQURrRixDQUE5RCxDO0FBREhMLFksQ0FJWlYsUyxHQUFZLFNBQUdILE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNHLFNBQXZCLEVBQWtDLHFCQUFXQSxTQUE3QyxFQUF3RCxFQUF4RCxDO2tCQUpBVSxZIiwiZmlsZSI6ImNvbXAvYW50ZC9icmVhZGNydW1iL1NLQnJlYWRjcnVtYi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QnJlYWRjcnVtYn0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBBbnRkQ29tcCBmcm9tICcuLi9BbnRkQ29tcCc7XG5cbkJyZWFkY3J1bWIuZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCB7XG4gIHNlcGFyYXRvcjogU0suQ0hBUl9TTEFTSFxufSwgQnJlYWRjcnVtYi5kZWZhdWx0UHJvcHMsIHt9KTtcblxuQnJlYWRjcnVtYi5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIHtcbiAgLy9odHRwczovL2FudC5kZXNpZ24vY29tcG9uZW50cy9icmVhZGNydW1iLWNuLyNBUElcbiAgaXRlbVJlbmRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIHBhcmFtczogUHJvcFR5cGVzLm9iamVjdCxcbiAgcm91dGVzOiBQcm9wVHlwZXMuYXJyYXksXG4gIHNlcGFyYXRvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubm9kZVxuICBdKVxufSwgQnJlYWRjcnVtYi5wcm9wVHlwZXMsIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tCcmVhZGNydW1iIGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5kZWZhdWx0UHJvcHMsIEJyZWFkY3J1bWIuZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogQnJlYWRjcnVtYlxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCBCcmVhZGNydW1iLnByb3BUeXBlcywge30pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ1NLQnJlYWRjcnVtYic7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnLCByb3V0ZXMsIHBhcmFtc30gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKENvbXBUYWcpfVxuICAgICAgICAgICAgICAgcGFyYW1zPXtwYXJhbXN9XG4gICAgICAgICAgICAgICByb3V0ZXM9e3JvdXRlc30+XG4gICAgICAgIHt0aGlzLnNrVHJhbnNQcm9wczJDaGlsZCgpfVxuICAgICAgPC9Db21wVGFnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==