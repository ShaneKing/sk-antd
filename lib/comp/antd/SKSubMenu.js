'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/menu/style');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _AntdComp2 = require('./AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_menu2.default.SubMenu.defaultProps = _skJs.SK.assign({}, {
  disabled: false
}, _menu2.default.defaultProps, _menu2.default.SubMenu.defaultProps, {});

_menu2.default.SubMenu.propTypes = _skJs.SK.assign({}, {
  // children: PropTypes.array,
  disabled: _propTypes2.default.bool,
  key: _propTypes2.default.string,
  title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  onTitleClick: _propTypes2.default.func
}, _menu2.default.propTypes, _menu2.default.SubMenu.propTypes, {});

var SKSubMenu = function (_AntdComp) {
  _inherits(SKSubMenu, _AntdComp);

  function SKSubMenu() {
    var _ref;

    _classCallCheck(this, SKSubMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKSubMenu.__proto__ || Object.getPrototypeOf(SKSubMenu)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKSubMenu';
    return _this;
  }

  _createClass(SKSubMenu, [{
    key: 'allowTransProps2Self',
    value: function allowTransProps2Self() {
      return Object.keys(_menu2.default.propTypes);
    }
  }]);

  return SKSubMenu;
}(_AntdComp3.default);

SKSubMenu.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _menu2.default.SubMenu.defaultProps, {
  compTag: _menu2.default.SubMenu
});
SKSubMenu.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _menu2.default.SubMenu.propTypes, {});
exports.default = SKSubMenu;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS1N1Yk1lbnUuanMiXSwibmFtZXMiOlsiU3ViTWVudSIsImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsImRpc2FibGVkIiwicHJvcFR5cGVzIiwiYm9vbCIsImtleSIsInN0cmluZyIsInRpdGxlIiwib25lT2ZUeXBlIiwibm9kZSIsIm9uVGl0bGVDbGljayIsImZ1bmMiLCJTS1N1Yk1lbnUiLCJhcmdzIiwiY29tcE5hbWUiLCJPYmplY3QiLCJrZXlzIiwiY29tcFRhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLGVBQUtBLE9BQUwsQ0FBYUMsWUFBYixHQUE0QixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjO0FBQ3hDQyxZQUFVO0FBRDhCLENBQWQsRUFFekIsZUFBS0YsWUFGb0IsRUFFTixlQUFLRCxPQUFMLENBQWFDLFlBRlAsRUFFcUIsRUFGckIsQ0FBNUI7O0FBSUEsZUFBS0QsT0FBTCxDQUFhSSxTQUFiLEdBQXlCLFNBQUdGLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDckM7QUFDQUMsWUFBVSxvQkFBVUUsSUFGaUI7QUFHckNDLE9BQUssb0JBQVVDLE1BSHNCO0FBSXJDQyxTQUFPLG9CQUFVQyxTQUFWLENBQW9CLENBQ3pCLG9CQUFVRixNQURlLEVBRXpCLG9CQUFVRyxJQUZlLENBQXBCLENBSjhCO0FBUXJDQyxnQkFBYyxvQkFBVUM7QUFSYSxDQUFkLEVBU3RCLGVBQUtSLFNBVGlCLEVBU04sZUFBS0osT0FBTCxDQUFhSSxTQVRQLEVBU2tCLEVBVGxCLENBQXpCOztJQVdxQlMsUzs7O0FBT25CLHVCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSxpSkFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixXQUFoQjtBQUZtQjtBQUdwQjs7OzsyQ0FFc0I7QUFDckIsYUFBT0MsT0FBT0MsSUFBUCxDQUFZLGVBQUtiLFNBQWpCLENBQVA7QUFDRDs7Ozs7O0FBZGtCUyxTLENBQ1paLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQyxlQUFLRCxPQUFMLENBQWFDLFlBQWxELEVBQWdFO0FBQ3BGaUIsV0FBUyxlQUFLbEI7QUFEc0UsQ0FBaEUsQztBQURIYSxTLENBSVpULFMsR0FBWSxTQUFHRixNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRSxTQUF2QixFQUFrQyxlQUFLSixPQUFMLENBQWFJLFNBQS9DLEVBQTBELEVBQTFELEM7a0JBSkFTLFMiLCJmaWxlIjoiY29tcC9hbnRkL1NLU3ViTWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TWVudX0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBBbnRkQ29tcCBmcm9tICcuL0FudGRDb21wJztcblxuTWVudS5TdWJNZW51LmRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwge1xuICBkaXNhYmxlZDogZmFsc2Vcbn0sIE1lbnUuZGVmYXVsdFByb3BzLCBNZW51LlN1Yk1lbnUuZGVmYXVsdFByb3BzLCB7fSk7XG5cbk1lbnUuU3ViTWVudS5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIHtcbiAgLy8gY2hpbGRyZW46IFByb3BUeXBlcy5hcnJheSxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBrZXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5ub2RlXG4gIF0pLFxuICBvblRpdGxlQ2xpY2s6IFByb3BUeXBlcy5mdW5jXG59LCBNZW51LnByb3BUeXBlcywgTWVudS5TdWJNZW51LnByb3BUeXBlcywge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS1N1Yk1lbnUgZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywgTWVudS5TdWJNZW51LmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IE1lbnUuU3ViTWVudVxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCBNZW51LlN1Yk1lbnUucHJvcFR5cGVzLCB7fSk7XG5cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS1N1Yk1lbnUnO1xuICB9XG5cbiAgYWxsb3dUcmFuc1Byb3BzMlNlbGYoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKE1lbnUucHJvcFR5cGVzKTtcbiAgfVxufVxuIl19