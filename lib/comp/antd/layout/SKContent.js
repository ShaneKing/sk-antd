'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _layout = require('antd/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

require('antd/lib/layout/style');

var _skJs = require('sk-js');

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

var _OriginLayout = require('./OriginLayout');

var _OriginLayout2 = _interopRequireDefault(_OriginLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_layout2.default.Content.defaultProps = _skJs.SK.assign({}, {}, _OriginLayout2.default.defaultProps, _layout2.default.Content.defaultProps, {});
_layout2.default.Content.propTypes = _skJs.SK.assign({}, {}, _OriginLayout2.default.propTypes, _layout2.default.Content.propTypes, {});

var SKContent = function (_AntdComp) {
  _inherits(SKContent, _AntdComp);

  function SKContent() {
    var _ref;

    _classCallCheck(this, SKContent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKContent.__proto__ || Object.getPrototypeOf(SKContent)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKContent';
    return _this;
  }

  return SKContent;
}(_AntdComp3.default);

SKContent.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _layout2.default.Content.defaultProps, {
  compTag: _layout2.default.Content
});
SKContent.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _layout2.default.Content.propTypes, {});
exports.default = SKContent;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9sYXlvdXQvU0tDb250ZW50LmpzIl0sIm5hbWVzIjpbIkNvbnRlbnQiLCJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJwcm9wVHlwZXMiLCJTS0NvbnRlbnQiLCJhcmdzIiwiY29tcE5hbWUiLCJjb21wVGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxpQkFBT0EsT0FBUCxDQUFlQyxZQUFmLEdBQThCLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsRUFBZCxFQUFrQix1QkFBYUQsWUFBL0IsRUFBNkMsaUJBQU9ELE9BQVAsQ0FBZUMsWUFBNUQsRUFBMEUsRUFBMUUsQ0FBOUI7QUFDQSxpQkFBT0QsT0FBUCxDQUFlRyxTQUFmLEdBQTJCLFNBQUdELE1BQUgsQ0FBVSxFQUFWLEVBQWMsRUFBZCxFQUFrQix1QkFBYUMsU0FBL0IsRUFBMEMsaUJBQU9ILE9BQVAsQ0FBZUcsU0FBekQsRUFBb0UsRUFBcEUsQ0FBM0I7O0lBRXFCQyxTOzs7QUFNbkIsdUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLGlKQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLFdBQWhCO0FBRm1CO0FBR3BCOzs7OztBQVRrQkYsUyxDQUNaSCxZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUMsaUJBQU9ELE9BQVAsQ0FBZUMsWUFBcEQsRUFBa0U7QUFDdEZNLFdBQVMsaUJBQU9QO0FBRHNFLENBQWxFLEM7QUFESEksUyxDQUlaRCxTLEdBQVksU0FBR0QsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0MsU0FBdkIsRUFBa0MsaUJBQU9ILE9BQVAsQ0FBZUcsU0FBakQsRUFBNEQsRUFBNUQsQztrQkFKQUMsUyIsImZpbGUiOiJjb21wL2FudGQvbGF5b3V0L1NLQ29udGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TGF5b3V0fSBmcm9tICdhbnRkJztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBBbnRkQ29tcCBmcm9tICcuLi9BbnRkQ29tcCc7XG5pbXBvcnQgT3JpZ2luTGF5b3V0IGZyb20gJy4vT3JpZ2luTGF5b3V0JztcblxuTGF5b3V0LkNvbnRlbnQuZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCB7fSwgT3JpZ2luTGF5b3V0LmRlZmF1bHRQcm9wcywgTGF5b3V0LkNvbnRlbnQuZGVmYXVsdFByb3BzLCB7fSk7XG5MYXlvdXQuQ29udGVudC5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIHt9LCBPcmlnaW5MYXlvdXQucHJvcFR5cGVzLCBMYXlvdXQuQ29udGVudC5wcm9wVHlwZXMsIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tDb250ZW50IGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5kZWZhdWx0UHJvcHMsIExheW91dC5Db250ZW50LmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IExheW91dC5Db250ZW50XG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5wcm9wVHlwZXMsIExheW91dC5Db250ZW50LnByb3BUeXBlcywge30pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ1NLQ29udGVudCc7XG4gIH1cbn1cbiJdfQ==