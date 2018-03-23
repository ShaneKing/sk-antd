'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

require('antd/lib/input/style');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _skJs = require('sk-js');

var _OriginInput = require('./OriginInput');

var _OriginInput2 = _interopRequireDefault(_OriginInput);

var _SKInput2 = require('./SKInput');

var _SKInput3 = _interopRequireDefault(_SKInput2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_input2.default.Search.defaultProps = _skJs.SK.assign({}, {
  enterButton: false
}, _OriginInput2.default.defaultProps, _input2.default.Search.defaultProps, {});

_input2.default.Search.propTypes = _skJs.SK.assign({}, {
  //https://ant.design/components/input-cn/#Input.Search
  enterButton: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  onSearch: _propTypes2.default.func
}, _OriginInput2.default.propTypes, _input2.default.Search.propTypes, {});

var SKSearch = function (_SKInput) {
  _inherits(SKSearch, _SKInput);

  function SKSearch() {
    var _ref;

    _classCallCheck(this, SKSearch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKSearch.__proto__ || Object.getPrototypeOf(SKSearch)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKSearch';
    return _this;
  }

  return SKSearch;
}(_SKInput3.default);

SKSearch.defaultProps = _skJs.SK.assign({}, _SKInput3.default.defaultProps, _input2.default.Search.defaultProps, {
  compTag: _input2.default.Search
});
SKSearch.propTypes = _skJs.SK.assign({}, _SKInput3.default.propTypes, _input2.default.Search.propTypes, {});
exports.default = SKSearch;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvaW5wdXQvU0tTZWFyY2guanMiXSwibmFtZXMiOlsiU2VhcmNoIiwiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwiZW50ZXJCdXR0b24iLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJub2RlIiwib25TZWFyY2giLCJmdW5jIiwiU0tTZWFyY2giLCJhcmdzIiwiY29tcE5hbWUiLCJjb21wVGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLGdCQUFNQSxNQUFOLENBQWFDLFlBQWIsR0FBNEIsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYztBQUN4Q0MsZUFBYTtBQUQyQixDQUFkLEVBRXpCLHNCQUFZRixZQUZhLEVBRUMsZ0JBQU1ELE1BQU4sQ0FBYUMsWUFGZCxFQUU0QixFQUY1QixDQUE1Qjs7QUFJQSxnQkFBTUQsTUFBTixDQUFhSSxTQUFiLEdBQXlCLFNBQUdGLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDckM7QUFDQUMsZUFBYSxvQkFBVUUsU0FBVixDQUFvQixDQUMvQixvQkFBVUMsTUFEcUIsRUFFL0Isb0JBQVVDLElBRnFCLENBQXBCLENBRndCO0FBTXJDQyxZQUFVLG9CQUFVQztBQU5pQixDQUFkLEVBT3RCLHNCQUFZTCxTQVBVLEVBT0MsZ0JBQU1KLE1BQU4sQ0FBYUksU0FQZCxFQU95QixFQVB6QixDQUF6Qjs7SUFTcUJNLFE7OztBQU1uQixzQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsK0lBQ1ZBLElBRFU7O0FBRW5CLFVBQUtDLFFBQUwsR0FBZ0IsVUFBaEI7QUFGbUI7QUFHcEI7Ozs7O0FBVGtCRixRLENBQ1pULFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLGtCQUFRRCxZQUF0QixFQUFvQyxnQkFBTUQsTUFBTixDQUFhQyxZQUFqRCxFQUErRDtBQUNuRlksV0FBUyxnQkFBTWI7QUFEb0UsQ0FBL0QsQztBQURIVSxRLENBSVpOLFMsR0FBWSxTQUFHRixNQUFILENBQVUsRUFBVixFQUFjLGtCQUFRRSxTQUF0QixFQUFpQyxnQkFBTUosTUFBTixDQUFhSSxTQUE5QyxFQUF5RCxFQUF6RCxDO2tCQUpBTSxRIiwiZmlsZSI6ImFudGQvaW5wdXQvU0tTZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFNLIH0gZnJvbSAnc2stanMnO1xuaW1wb3J0IE9yaWdpbklucHV0IGZyb20gJy4vT3JpZ2luSW5wdXQnO1xuaW1wb3J0IFNLSW5wdXQgZnJvbSAnLi9TS0lucHV0JztcblxuSW5wdXQuU2VhcmNoLmRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwge1xuICBlbnRlckJ1dHRvbjogZmFsc2UsXG59LCBPcmlnaW5JbnB1dC5kZWZhdWx0UHJvcHMsIElucHV0LlNlYXJjaC5kZWZhdWx0UHJvcHMsIHt9KTtcblxuSW5wdXQuU2VhcmNoLnByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwge1xuICAvL2h0dHBzOi8vYW50LmRlc2lnbi9jb21wb25lbnRzL2lucHV0LWNuLyNJbnB1dC5TZWFyY2hcbiAgZW50ZXJCdXR0b246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm5vZGUsXG4gIF0pLFxuICBvblNlYXJjaDogUHJvcFR5cGVzLmZ1bmMsXG59LCBPcmlnaW5JbnB1dC5wcm9wVHlwZXMsIElucHV0LlNlYXJjaC5wcm9wVHlwZXMsIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tTZWFyY2ggZXh0ZW5kcyBTS0lucHV0IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgU0tJbnB1dC5kZWZhdWx0UHJvcHMsIElucHV0LlNlYXJjaC5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBJbnB1dC5TZWFyY2gsXG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBTS0lucHV0LnByb3BUeXBlcywgSW5wdXQuU2VhcmNoLnByb3BUeXBlcywge30pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ1NLU2VhcmNoJztcbiAgfVxufVxuIl19