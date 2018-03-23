'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _localeProvider = require('antd/lib/locale-provider');

var _localeProvider2 = _interopRequireDefault(_localeProvider);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/locale-provider/style');

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

_localeProvider2.default.defaultProps = _skJs.SK.assign({}, {}, _localeProvider2.default.defaultProps, {});

_localeProvider2.default.propTypes = _skJs.SK.assign({}, {
  //https://ant.design/components/grid-cn/#LocaleProvider\
  locale: _propTypes2.default.object
}, _localeProvider2.default.propTypes, {});

var SKLocaleProvider = function (_AntdComp) {
  _inherits(SKLocaleProvider, _AntdComp);

  function SKLocaleProvider() {
    var _ref;

    _classCallCheck(this, SKLocaleProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKLocaleProvider.__proto__ || Object.getPrototypeOf(SKLocaleProvider)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKLocaleProvider';
    return _this;
  }

  _createClass(SKLocaleProvider, [{
    key: 'render',
    value: function render() {
      var CompTag = this.props.compTag;


      return _react2.default.createElement(
        CompTag,
        _extends({}, this.skTransProps2Self(CompTag), {
          locale: this.skVal()
        }),
        this.skTransProps2Child()
      );
    }
  }]);

  return SKLocaleProvider;
}(_AntdComp3.default);

SKLocaleProvider.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _localeProvider2.default.defaultProps, {
  compTag: _localeProvider2.default
});
SKLocaleProvider.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _localeProvider2.default.propTypes, {});
exports.default = SKLocaleProvider;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvbG9jYWxlLXByb3ZpZGVyL1NLTG9jYWxlUHJvdmlkZXIuanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwicHJvcFR5cGVzIiwibG9jYWxlIiwib2JqZWN0IiwiU0tMb2NhbGVQcm92aWRlciIsImFyZ3MiLCJjb21wTmFtZSIsIkNvbXBUYWciLCJwcm9wcyIsImNvbXBUYWciLCJza1RyYW5zUHJvcHMyU2VsZiIsInNrVmFsIiwic2tUcmFuc1Byb3BzMkNoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSx5QkFBZUEsWUFBZixHQUE4QixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLEVBQWQsRUFBa0IseUJBQWVELFlBQWpDLEVBQStDLEVBQS9DLENBQTlCOztBQUVBLHlCQUFlRSxTQUFmLEdBQTJCLFNBQUdELE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDdkM7QUFDQUUsVUFBUSxvQkFBVUM7QUFGcUIsQ0FBZCxFQUd4Qix5QkFBZUYsU0FIUyxFQUdFLEVBSEYsQ0FBM0I7O0lBS3FCRyxnQjs7O0FBTW5CLDhCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSwrSkFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixrQkFBaEI7QUFGbUI7QUFHcEI7Ozs7NkJBRVE7QUFBQSxVQUNVQyxPQURWLEdBQ3NCLEtBQUtDLEtBRDNCLENBQ0NDLE9BREQ7OztBQUdQLGFBQ0U7QUFBQyxlQUFEO0FBQUEscUJBQ00sS0FBS0MsaUJBQUwsQ0FBdUJILE9BQXZCLENBRE47QUFFRSxrQkFBUSxLQUFLSSxLQUFMO0FBRlY7QUFJRyxhQUFLQyxrQkFBTDtBQUpILE9BREY7QUFRRDs7Ozs7O0FBdEJrQlIsZ0IsQ0FDWkwsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNELFlBQXZCLEVBQXFDLHlCQUFlQSxZQUFwRCxFQUFrRTtBQUN0RlU7QUFEc0YsQ0FBbEUsQztBQURITCxnQixDQUlaSCxTLEdBQVksU0FBR0QsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0MsU0FBdkIsRUFBa0MseUJBQWVBLFNBQWpELEVBQTRELEVBQTVELEM7a0JBSkFHLGdCIiwiZmlsZSI6ImFudGQvbG9jYWxlLXByb3ZpZGVyL1NLTG9jYWxlUHJvdmlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2NhbGVQcm92aWRlciB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTSyB9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBBbnRkQ29tcCBmcm9tICcuLi9BbnRkQ29tcCc7XG5cbkxvY2FsZVByb3ZpZGVyLmRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwge30sIExvY2FsZVByb3ZpZGVyLmRlZmF1bHRQcm9wcywge30pO1xuXG5Mb2NhbGVQcm92aWRlci5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIHtcbiAgLy9odHRwczovL2FudC5kZXNpZ24vY29tcG9uZW50cy9ncmlkLWNuLyNMb2NhbGVQcm92aWRlclxcXG4gIGxvY2FsZTogUHJvcFR5cGVzLm9iamVjdCxcbn0sIExvY2FsZVByb3ZpZGVyLnByb3BUeXBlcywge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS0xvY2FsZVByb3ZpZGVyIGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5kZWZhdWx0UHJvcHMsIExvY2FsZVByb3ZpZGVyLmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IExvY2FsZVByb3ZpZGVyLFxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCBMb2NhbGVQcm92aWRlci5wcm9wVHlwZXMsIHt9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS0xvY2FsZVByb3ZpZGVyJztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbXBUYWc6IENvbXBUYWcgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWdcbiAgICAgICAgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoQ29tcFRhZyl9XG4gICAgICAgIGxvY2FsZT17dGhpcy5za1ZhbCgpfVxuICAgICAgPlxuICAgICAgICB7dGhpcy5za1RyYW5zUHJvcHMyQ2hpbGQoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG59XG4iXX0=