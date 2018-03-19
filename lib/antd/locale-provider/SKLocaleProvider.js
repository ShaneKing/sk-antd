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
          locale: this.skVal() }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvbG9jYWxlLXByb3ZpZGVyL1NLTG9jYWxlUHJvdmlkZXIuanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwicHJvcFR5cGVzIiwibG9jYWxlIiwib2JqZWN0IiwiU0tMb2NhbGVQcm92aWRlciIsImFyZ3MiLCJjb21wTmFtZSIsIkNvbXBUYWciLCJwcm9wcyIsImNvbXBUYWciLCJza1RyYW5zUHJvcHMyU2VsZiIsInNrVmFsIiwic2tUcmFuc1Byb3BzMkNoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSx5QkFBZUEsWUFBZixHQUE4QixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLEVBQWQsRUFBa0IseUJBQWVELFlBQWpDLEVBQStDLEVBQS9DLENBQTlCOztBQUVBLHlCQUFlRSxTQUFmLEdBQTJCLFNBQUdELE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDdkM7QUFDQUUsVUFBUSxvQkFBVUM7QUFGcUIsQ0FBZCxFQUd4Qix5QkFBZUYsU0FIUyxFQUdFLEVBSEYsQ0FBM0I7O0lBS3FCRyxnQjs7O0FBTW5CLDhCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSwrSkFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixrQkFBaEI7QUFGbUI7QUFHcEI7Ozs7NkJBRVE7QUFBQSxVQUNPQyxPQURQLEdBQ2tCLEtBQUtDLEtBRHZCLENBQ0ZDLE9BREU7OztBQUdQLGFBQ0U7QUFBQyxlQUFEO0FBQUEscUJBQWEsS0FBS0MsaUJBQUwsQ0FBdUJILE9BQXZCLENBQWI7QUFDUyxrQkFBUSxLQUFLSSxLQUFMLEVBRGpCO0FBRUcsYUFBS0Msa0JBQUw7QUFGSCxPQURGO0FBTUQ7Ozs7OztBQXBCa0JSLGdCLENBQ1pMLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQyx5QkFBZUEsWUFBcEQsRUFBa0U7QUFDdEZVO0FBRHNGLENBQWxFLEM7QUFESEwsZ0IsQ0FJWkgsUyxHQUFZLFNBQUdELE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNDLFNBQXZCLEVBQWtDLHlCQUFlQSxTQUFqRCxFQUE0RCxFQUE1RCxDO2tCQUpBRyxnQiIsImZpbGUiOiJhbnRkL2xvY2FsZS1wcm92aWRlci9TS0xvY2FsZVByb3ZpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMb2NhbGVQcm92aWRlcn0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBBbnRkQ29tcCBmcm9tICcuLi9BbnRkQ29tcCc7XG5cbkxvY2FsZVByb3ZpZGVyLmRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwge30sIExvY2FsZVByb3ZpZGVyLmRlZmF1bHRQcm9wcywge30pO1xuXG5Mb2NhbGVQcm92aWRlci5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIHtcbiAgLy9odHRwczovL2FudC5kZXNpZ24vY29tcG9uZW50cy9ncmlkLWNuLyNMb2NhbGVQcm92aWRlclxcXG4gIGxvY2FsZTogUHJvcFR5cGVzLm9iamVjdFxufSwgTG9jYWxlUHJvdmlkZXIucHJvcFR5cGVzLCB7fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLTG9jYWxlUHJvdmlkZXIgZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywgTG9jYWxlUHJvdmlkZXIuZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogTG9jYWxlUHJvdmlkZXJcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLnByb3BUeXBlcywgTG9jYWxlUHJvdmlkZXIucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tMb2NhbGVQcm92aWRlcic7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoQ29tcFRhZyl9XG4gICAgICAgICAgICAgICBsb2NhbGU9e3RoaXMuc2tWYWwoKX0+XG4gICAgICAgIHt0aGlzLnNrVHJhbnNQcm9wczJDaGlsZCgpfVxuICAgICAgPC9Db21wVGFnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==