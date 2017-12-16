'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _layout = require('antd/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

require('antd/lib/layout/style');

var _skJs = require('sk-js');

var _AntdComp2 = require('./AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_layout2.default.Content.defaultProps = _skJs.SK.assign({}, {}, _layout2.default.defaultProps, _layout2.default.Content.defaultProps, {});
_layout2.default.Content.propTypes = _skJs.SK.assign({}, {}, _layout2.default.propTypes, _layout2.default.Content.propTypes, {});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS0NvbnRlbnQuanMiXSwibmFtZXMiOlsiQ29udGVudCIsImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsInByb3BUeXBlcyIsIlNLQ29udGVudCIsImFyZ3MiLCJjb21wTmFtZSIsImNvbXBUYWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxpQkFBT0EsT0FBUCxDQUFlQyxZQUFmLEdBQThCLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsRUFBZCxFQUFrQixpQkFBT0QsWUFBekIsRUFBdUMsaUJBQU9ELE9BQVAsQ0FBZUMsWUFBdEQsRUFBb0UsRUFBcEUsQ0FBOUI7QUFDQSxpQkFBT0QsT0FBUCxDQUFlRyxTQUFmLEdBQTJCLFNBQUdELE1BQUgsQ0FBVSxFQUFWLEVBQWMsRUFBZCxFQUFrQixpQkFBT0MsU0FBekIsRUFBb0MsaUJBQU9ILE9BQVAsQ0FBZUcsU0FBbkQsRUFBOEQsRUFBOUQsQ0FBM0I7O0lBRXFCQyxTOzs7QUFNbkIsdUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLGlKQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLFdBQWhCO0FBRm1CO0FBR3BCOzs7OztBQVRrQkYsUyxDQUNaSCxZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUMsaUJBQU9ELE9BQVAsQ0FBZUMsWUFBcEQsRUFBa0U7QUFDdEZNLFdBQVMsaUJBQU9QO0FBRHNFLENBQWxFLEM7QUFESEksUyxDQUlaRCxTLEdBQVksU0FBR0QsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0MsU0FBdkIsRUFBa0MsaUJBQU9ILE9BQVAsQ0FBZUcsU0FBakQsRUFBNEQsRUFBNUQsQztrQkFKQUMsUyIsImZpbGUiOiJjb21wL2FudGQvU0tDb250ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMYXlvdXR9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4vQW50ZENvbXAnO1xuXG5MYXlvdXQuQ29udGVudC5kZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIHt9LCBMYXlvdXQuZGVmYXVsdFByb3BzLCBMYXlvdXQuQ29udGVudC5kZWZhdWx0UHJvcHMsIHt9KTtcbkxheW91dC5Db250ZW50LnByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwge30sIExheW91dC5wcm9wVHlwZXMsIExheW91dC5Db250ZW50LnByb3BUeXBlcywge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS0NvbnRlbnQgZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywgTGF5b3V0LkNvbnRlbnQuZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogTGF5b3V0LkNvbnRlbnRcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLnByb3BUeXBlcywgTGF5b3V0LkNvbnRlbnQucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tDb250ZW50JztcbiAgfVxufVxuIl19