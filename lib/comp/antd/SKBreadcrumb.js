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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS0JyZWFkY3J1bWIuanMiXSwibmFtZXMiOlsiU0tCcmVhZGNydW1iIiwiYXJncyIsInByb3BzIiwiQ29tcFRhZyIsImNvbXBUYWciLCJyb3V0ZXMiLCJwYXJhbXMiLCJjb21wVmFsaWRQcm9wcyIsInNrUHJvcHNUcmFucyIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsImFzc2lnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxZOzs7QUFNbkIsMEJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLGtKQUNWQSxJQURVO0FBRXBCOzs7OzZCQUVRO0FBQUEsbUJBQ2tDLEtBQUtDLEtBRHZDO0FBQUEsVUFDT0MsT0FEUCxVQUNGQyxPQURFO0FBQUEsVUFDZ0JDLE1BRGhCLFVBQ2dCQSxNQURoQjtBQUFBLFVBQ3dCQyxNQUR4QixVQUN3QkEsTUFEeEI7OztBQUdQLGFBQ0U7QUFBQyxlQUFEO0FBQUEscUJBQWEsS0FBS0MsY0FBTCxDQUFvQkosT0FBcEIsQ0FBYjtBQUNTLGtCQUFRRyxNQURqQjtBQUVTLGtCQUFRRCxNQUZqQjtBQUdHLGFBQUtHLFlBQUw7QUFISCxPQURGO0FBT0Q7Ozs7OztBQXBCa0JSLFksQ0FDWlMsWSxHQUFlO0FBQ3BCTDtBQURvQixDO0FBREhKLFksQ0FJWlUsUyxHQUFZLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0QsU0FBbkIsRUFBOEIscUJBQVdBLFNBQXpDLEVBQW9ELEVBQXBELEM7a0JBSkFWLFkiLCJmaWxlIjoiY29tcC9hbnRkL1NLQnJlYWRjcnVtYi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QnJlYWRjcnVtYn0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNLIGZyb20gJ3NrLWpzJztcbmltcG9ydCBDb21wIGZyb20gJy4uLy4uL3V0aWwvQ29tcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLQnJlYWRjcnVtYiBleHRlbmRzIENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbXBUYWc6IEJyZWFkY3J1bWJcbiAgfTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQ29tcC5wcm9wVHlwZXMsIEJyZWFkY3J1bWIucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZywgcm91dGVzLCBwYXJhbXN9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5jb21wVmFsaWRQcm9wcyhDb21wVGFnKX1cbiAgICAgICAgICAgICAgIHBhcmFtcz17cGFyYW1zfVxuICAgICAgICAgICAgICAgcm91dGVzPXtyb3V0ZXN9PlxuICAgICAgICB7dGhpcy5za1Byb3BzVHJhbnMoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG59XG4iXX0=