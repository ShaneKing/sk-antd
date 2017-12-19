'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _table = require('antd/lib/table');

var _table2 = _interopRequireDefault(_table);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/table/style');

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

var SKTable = function (_AntdComp) {
  _inherits(SKTable, _AntdComp);

  function SKTable() {
    var _ref;

    _classCallCheck(this, SKTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKTable.__proto__ || Object.getPrototypeOf(SKTable)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKTable';
    return _this;
  }

  _createClass(SKTable, [{
    key: 'addExtendChangedMonitor',
    value: function addExtendChangedMonitor() {
      this.addChangedMonitor(this.props.loadingId);
      this.addChangedMonitor(this.props.paginationId);
    }
  }, {
    key: 'rmvExtendChangedMonitor',
    value: function rmvExtendChangedMonitor() {
      this.rmvChangedMonitor(this.props.loadingId);
      this.rmvChangedMonitor(this.props.paginationId);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          CompTag = _props.compTag,
          columns = _props.columns,
          scroll = _props.scroll;


      var tmpScroll = { y: false };
      tmpScroll.x = columns.reduce(function ($sum, $item) {
        return $sum + $item.width;
      }, 0);
      tmpScroll = scroll || tmpScroll;

      return _react2.default.createElement(CompTag, _extends({}, this.skTransProps2Self(CompTag), {
        dataSource: this.skVal(),
        loading: this.skModel().skVal(this.props.loadingId),
        pagination: this.skModel().skVal(this.props.paginationId),
        scroll: tmpScroll }));
    }
  }]);

  return SKTable;
}(_AntdComp3.default);

SKTable.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, {
  compTag: _table2.default,
  bordered: true,
  loadingId: undefined,
  paginationId: undefined
});
SKTable.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, {
  loadingId: _propTypes2.default.string.isRequired,
  paginationId: _propTypes2.default.string.isRequired
});
exports.default = SKTable;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC90YWJsZS9TS1RhYmxlLmpzIl0sIm5hbWVzIjpbIlNLVGFibGUiLCJhcmdzIiwiY29tcE5hbWUiLCJhZGRDaGFuZ2VkTW9uaXRvciIsInByb3BzIiwibG9hZGluZ0lkIiwicGFnaW5hdGlvbklkIiwicm12Q2hhbmdlZE1vbml0b3IiLCJDb21wVGFnIiwiY29tcFRhZyIsImNvbHVtbnMiLCJzY3JvbGwiLCJ0bXBTY3JvbGwiLCJ5IiwieCIsInJlZHVjZSIsIiRzdW0iLCIkaXRlbSIsIndpZHRoIiwic2tUcmFuc1Byb3BzMlNlbGYiLCJza1ZhbCIsInNrTW9kZWwiLCJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJib3JkZXJlZCIsInVuZGVmaW5lZCIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7O0FBWW5CLHFCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSw2SUFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixTQUFoQjtBQUZtQjtBQUdwQjs7Ozs4Q0FFeUI7QUFDeEIsV0FBS0MsaUJBQUwsQ0FBdUIsS0FBS0MsS0FBTCxDQUFXQyxTQUFsQztBQUNBLFdBQUtGLGlCQUFMLENBQXVCLEtBQUtDLEtBQUwsQ0FBV0UsWUFBbEM7QUFDRDs7OzhDQUV5QjtBQUN4QixXQUFLQyxpQkFBTCxDQUF1QixLQUFLSCxLQUFMLENBQVdDLFNBQWxDO0FBQ0EsV0FBS0UsaUJBQUwsQ0FBdUIsS0FBS0gsS0FBTCxDQUFXRSxZQUFsQztBQUNEOzs7NkJBRVE7QUFBQSxtQkFDbUMsS0FBS0YsS0FEeEM7QUFBQSxVQUNPSSxPQURQLFVBQ0ZDLE9BREU7QUFBQSxVQUNnQkMsT0FEaEIsVUFDZ0JBLE9BRGhCO0FBQUEsVUFDeUJDLE1BRHpCLFVBQ3lCQSxNQUR6Qjs7O0FBR1AsVUFBSUMsWUFBWSxFQUFDQyxHQUFHLEtBQUosRUFBaEI7QUFDQUQsZ0JBQVVFLENBQVYsR0FBY0osUUFBUUssTUFBUixDQUFlLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUM1QyxlQUFPRCxPQUFPQyxNQUFNQyxLQUFwQjtBQUNELE9BRmEsRUFFWCxDQUZXLENBQWQ7QUFHQU4sa0JBQVlELFVBQVVDLFNBQXRCOztBQUVBLGFBQ0UsOEJBQUMsT0FBRCxlQUFhLEtBQUtPLGlCQUFMLENBQXVCWCxPQUF2QixDQUFiO0FBQ1Msb0JBQVksS0FBS1ksS0FBTCxFQURyQjtBQUVTLGlCQUFTLEtBQUtDLE9BQUwsR0FBZUQsS0FBZixDQUFxQixLQUFLaEIsS0FBTCxDQUFXQyxTQUFoQyxDQUZsQjtBQUdTLG9CQUFZLEtBQUtnQixPQUFMLEdBQWVELEtBQWYsQ0FBcUIsS0FBS2hCLEtBQUwsQ0FBV0UsWUFBaEMsQ0FIckI7QUFJUyxnQkFBUU0sU0FKakIsSUFERjtBQU9EOzs7Ozs7QUEzQ2tCWixPLENBQ1pzQixZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUM7QUFDekRiLDBCQUR5RDtBQUV6RGUsWUFBVSxJQUYrQztBQUd6RG5CLGFBQVdvQixTQUg4QztBQUl6RG5CLGdCQUFjbUI7QUFKMkMsQ0FBckMsQztBQURIekIsTyxDQU9aMEIsUyxHQUFZLFNBQUdILE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNHLFNBQXZCLEVBQWtDO0FBQ25EckIsYUFBVyxvQkFBVXNCLE1BQVYsQ0FBaUJDLFVBRHVCO0FBRW5EdEIsZ0JBQWMsb0JBQVVxQixNQUFWLENBQWlCQztBQUZvQixDQUFsQyxDO2tCQVBBNUIsTyIsImZpbGUiOiJjb21wL2FudGQvdGFibGUvU0tUYWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VGFibGV9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1NLfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgQW50ZENvbXAgZnJvbSAnLi4vQW50ZENvbXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS1RhYmxlIGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBUYWJsZSxcbiAgICBib3JkZXJlZDogdHJ1ZSxcbiAgICBsb2FkaW5nSWQ6IHVuZGVmaW5lZCxcbiAgICBwYWdpbmF0aW9uSWQ6IHVuZGVmaW5lZFxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCB7XG4gICAgbG9hZGluZ0lkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcGFnaW5hdGlvbklkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tUYWJsZSc7XG4gIH1cblxuICBhZGRFeHRlbmRDaGFuZ2VkTW9uaXRvcigpIHtcbiAgICB0aGlzLmFkZENoYW5nZWRNb25pdG9yKHRoaXMucHJvcHMubG9hZGluZ0lkKTtcbiAgICB0aGlzLmFkZENoYW5nZWRNb25pdG9yKHRoaXMucHJvcHMucGFnaW5hdGlvbklkKTtcbiAgfVxuXG4gIHJtdkV4dGVuZENoYW5nZWRNb25pdG9yKCkge1xuICAgIHRoaXMucm12Q2hhbmdlZE1vbml0b3IodGhpcy5wcm9wcy5sb2FkaW5nSWQpO1xuICAgIHRoaXMucm12Q2hhbmdlZE1vbml0b3IodGhpcy5wcm9wcy5wYWdpbmF0aW9uSWQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZywgY29sdW1ucywgc2Nyb2xsfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgdG1wU2Nyb2xsID0ge3k6IGZhbHNlfTtcbiAgICB0bXBTY3JvbGwueCA9IGNvbHVtbnMucmVkdWNlKCgkc3VtLCAkaXRlbSkgPT4ge1xuICAgICAgcmV0dXJuICRzdW0gKyAkaXRlbS53aWR0aDtcbiAgICB9LCAwKTtcbiAgICB0bXBTY3JvbGwgPSBzY3JvbGwgfHwgdG1wU2Nyb2xsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKENvbXBUYWcpfVxuICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17dGhpcy5za1ZhbCgpfVxuICAgICAgICAgICAgICAgbG9hZGluZz17dGhpcy5za01vZGVsKCkuc2tWYWwodGhpcy5wcm9wcy5sb2FkaW5nSWQpfVxuICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17dGhpcy5za01vZGVsKCkuc2tWYWwodGhpcy5wcm9wcy5wYWdpbmF0aW9uSWQpfVxuICAgICAgICAgICAgICAgc2Nyb2xsPXt0bXBTY3JvbGx9Lz5cbiAgICApO1xuICB9XG59XG4iXX0=