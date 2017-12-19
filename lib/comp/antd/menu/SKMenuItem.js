'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

require('antd/lib/menu/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SKMenuItem = function (_AntdComp) {
  _inherits(SKMenuItem, _AntdComp);

  function SKMenuItem() {
    var _ref;

    _classCallCheck(this, SKMenuItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKMenuItem.__proto__ || Object.getPrototypeOf(SKMenuItem)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKMenuItem';
    return _this;
  }

  return SKMenuItem;
}(_AntdComp3.default);

SKMenuItem.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, {
  compTag: _menu2.default.Item
});
SKMenuItem.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, {});
exports.default = SKMenuItem;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9tZW51L1NLTWVudUl0ZW0uanMiXSwibmFtZXMiOlsiU0tNZW51SXRlbSIsImFyZ3MiLCJjb21wTmFtZSIsImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsImNvbXBUYWciLCJJdGVtIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFU7OztBQU1uQix3QkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsbUpBQ1ZBLElBRFU7O0FBRW5CLFVBQUtDLFFBQUwsR0FBZ0IsWUFBaEI7QUFGbUI7QUFHcEI7Ozs7O0FBVGtCRixVLENBQ1pHLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQztBQUN6REUsV0FBUyxlQUFLQztBQUQyQyxDQUFyQyxDO0FBREhOLFUsQ0FJWk8sUyxHQUFZLFNBQUdILE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNHLFNBQXZCLEVBQWtDLEVBQWxDLEM7a0JBSkFQLFUiLCJmaWxlIjoiY29tcC9hbnRkL21lbnUvU0tNZW51SXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TWVudX0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tNZW51SXRlbSBleHRlbmRzIEFudGRDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAuZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogTWVudS5JdGVtXG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5wcm9wVHlwZXMsIHt9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS01lbnVJdGVtJztcbiAgfVxufVxuIl19