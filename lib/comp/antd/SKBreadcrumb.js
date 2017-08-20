'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style2 = require('antd/lib/breadcrumb/style');

var _breadcrumb = require('antd/lib/breadcrumb');

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

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

var SKBreadcrumb = function (_Comp) {
  _inherits(SKBreadcrumb, _Comp);

  function SKBreadcrumb() {
    var _ref;

    _classCallCheck(this, SKBreadcrumb);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = SKBreadcrumb.__proto__ || Object.getPrototypeOf(SKBreadcrumb)).call.apply(_ref, [this].concat(args)));
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
        _extends({}, this.compValidProps(CompTag), {
          params: params,
          routes: routes }),
        this.skPropsTrans()
      );
    }
  }]);

  return SKBreadcrumb;
}(_Comp3.default);

SKBreadcrumb.defaultProps = {
  compTag: _breadcrumb2.default
};
SKBreadcrumb.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _breadcrumb2.default.propTypes, {});
exports.default = SKBreadcrumb;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS0JyZWFkY3J1bWIuanMiXSwibmFtZXMiOlsiU0tCcmVhZGNydW1iIiwiYXJncyIsInByb3BzIiwiQ29tcFRhZyIsImNvbXBUYWciLCJyb3V0ZXMiLCJwYXJhbXMiLCJjb21wVmFsaWRQcm9wcyIsInNrUHJvcHNUcmFucyIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsImFzc2lnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxZOzs7QUFNbkIsMEJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLGtKQUNWQSxJQURVO0FBRXBCOzs7OzZCQUVRO0FBQUEsbUJBQ2tDLEtBQUtDLEtBRHZDO0FBQUEsVUFDT0MsT0FEUCxVQUNGQyxPQURFO0FBQUEsVUFDZ0JDLE1BRGhCLFVBQ2dCQSxNQURoQjtBQUFBLFVBQ3dCQyxNQUR4QixVQUN3QkEsTUFEeEI7OztBQUdQLGFBQ0U7QUFBQyxlQUFEO0FBQUEscUJBQWEsS0FBS0MsY0FBTCxDQUFvQkosT0FBcEIsQ0FBYjtBQUNFLGtCQUFRRyxNQURWO0FBRUUsa0JBQVFELE1BRlY7QUFHRyxhQUFLRyxZQUFMO0FBSEgsT0FERjtBQU9EOzs7Ozs7QUFwQmtCUixZLENBQ1pTLFksR0FBZTtBQUNwQkw7QUFEb0IsQztBQURISixZLENBSVpVLFMsR0FBWSxlQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLGVBQUtELFNBQW5CLEVBQThCLHFCQUFXQSxTQUF6QyxFQUFvRCxFQUFwRCxDO2tCQUpBVixZIiwiZmlsZSI6ImNvbXAvYW50ZC9TS0JyZWFkY3J1bWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0JyZWFkY3J1bWJ9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTSyBmcm9tICdzay1qcyc7XG5pbXBvcnQgQ29tcCBmcm9tICcuLi8uLi91dGlsL0NvbXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS0JyZWFkY3J1bWIgZXh0ZW5kcyBDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb21wVGFnOiBCcmVhZGNydW1iXG4gIH07XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIENvbXAucHJvcFR5cGVzLCBCcmVhZGNydW1iLnByb3BUeXBlcywge30pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2NvbXBUYWc6IENvbXBUYWcsIHJvdXRlcywgcGFyYW1zfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuY29tcFZhbGlkUHJvcHMoQ29tcFRhZyl9XG4gICAgICAgIHBhcmFtcz17cGFyYW1zfVxuICAgICAgICByb3V0ZXM9e3JvdXRlc30+XG4gICAgICAgIHt0aGlzLnNrUHJvcHNUcmFucygpfVxuICAgICAgPC9Db21wVGFnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==