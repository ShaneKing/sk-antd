'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style2 = require('antd/lib/table/style');

var _table = require('antd/lib/table');

var _table2 = _interopRequireDefault(_table);

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

_table2.default.propTypes = _skJs2.default.assign({}, _table2.default.propTypes, {
  rowKey: _react2.default.PropTypes.func,
  scroll: _react2.default.PropTypes.object,
  size: _react2.default.PropTypes.string
}, {});

var SKTable = function (_Comp) {
  _inherits(SKTable, _Comp);

  function SKTable() {
    var _ref;

    _classCallCheck(this, SKTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = SKTable.__proto__ || Object.getPrototypeOf(SKTable)).call.apply(_ref, [this].concat(args)));
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

      return _react2.default.createElement(CompTag, _extends({}, this.compValidProps(CompTag), {
        dataSource: this.skVal(),
        loading: this.iModel().skVal(this.props.loadingId),
        pagination: this.iModel().skVal(this.props.paginationId),
        scroll: tmpScroll }));
    }
  }]);

  return SKTable;
}(_Comp3.default);

SKTable.defaultProps = {
  compTag: _table2.default,
  bordered: true,
  loadingId: undefined,
  paginationId: undefined
};
SKTable.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _table2.default.propTypes, {
  loadingId: _react2.default.PropTypes.string.isRequired,
  paginationId: _react2.default.PropTypes.string.isRequired
});
exports.default = SKTable;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS1RhYmxlLmpzIl0sIm5hbWVzIjpbInByb3BUeXBlcyIsImFzc2lnbiIsInJvd0tleSIsIlByb3BUeXBlcyIsImZ1bmMiLCJzY3JvbGwiLCJvYmplY3QiLCJzaXplIiwic3RyaW5nIiwiU0tUYWJsZSIsImFyZ3MiLCJhZGRDaGFuZ2VkTW9uaXRvciIsInByb3BzIiwibG9hZGluZ0lkIiwicGFnaW5hdGlvbklkIiwicm12Q2hhbmdlZE1vbml0b3IiLCJDb21wVGFnIiwiY29tcFRhZyIsImNvbHVtbnMiLCJ0bXBTY3JvbGwiLCJ5IiwieCIsInJlZHVjZSIsIiRzdW0iLCIkaXRlbSIsIndpZHRoIiwiY29tcFZhbGlkUHJvcHMiLCJza1ZhbCIsImlNb2RlbCIsImRlZmF1bHRQcm9wcyIsImJvcmRlcmVkIiwidW5kZWZpbmVkIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsZ0JBQU1BLFNBQU4sR0FBa0IsZUFBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxnQkFBTUQsU0FBcEIsRUFBK0I7QUFDL0NFLFVBQVEsZ0JBQU1DLFNBQU4sQ0FBZ0JDLElBRHVCO0FBRS9DQyxVQUFRLGdCQUFNRixTQUFOLENBQWdCRyxNQUZ1QjtBQUcvQ0MsUUFBTSxnQkFBTUosU0FBTixDQUFnQks7QUFIeUIsQ0FBL0IsRUFJZixFQUplLENBQWxCOztJQU1xQkMsTzs7O0FBWW5CLHFCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSx3SUFDVkEsSUFEVTtBQUVwQjs7Ozs4Q0FFeUI7QUFDeEIsV0FBS0MsaUJBQUwsQ0FBdUIsS0FBS0MsS0FBTCxDQUFXQyxTQUFsQztBQUNBLFdBQUtGLGlCQUFMLENBQXVCLEtBQUtDLEtBQUwsQ0FBV0UsWUFBbEM7QUFDRDs7OzhDQUV5QjtBQUN4QixXQUFLQyxpQkFBTCxDQUF1QixLQUFLSCxLQUFMLENBQVdDLFNBQWxDO0FBQ0EsV0FBS0UsaUJBQUwsQ0FBdUIsS0FBS0gsS0FBTCxDQUFXRSxZQUFsQztBQUNEOzs7NkJBRVE7QUFBQSxtQkFDbUMsS0FBS0YsS0FEeEM7QUFBQSxVQUNPSSxPQURQLFVBQ0ZDLE9BREU7QUFBQSxVQUNnQkMsT0FEaEIsVUFDZ0JBLE9BRGhCO0FBQUEsVUFDeUJiLE1BRHpCLFVBQ3lCQSxNQUR6Qjs7O0FBR1AsVUFBSWMsWUFBWSxFQUFDQyxHQUFHLEtBQUosRUFBaEI7QUFDQUQsZ0JBQVVFLENBQVYsR0FBY0gsUUFBUUksTUFBUixDQUFlLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUM1QyxlQUFPRCxPQUFPQyxNQUFNQyxLQUFwQjtBQUNELE9BRmEsRUFFWCxDQUZXLENBQWQ7QUFHQU4sa0JBQVlkLFVBQVVjLFNBQXRCOztBQUVBLGFBQ0UsOEJBQUMsT0FBRCxlQUFhLEtBQUtPLGNBQUwsQ0FBb0JWLE9BQXBCLENBQWI7QUFDRSxvQkFBWSxLQUFLVyxLQUFMLEVBRGQ7QUFFRSxpQkFBUyxLQUFLQyxNQUFMLEdBQWNELEtBQWQsQ0FBb0IsS0FBS2YsS0FBTCxDQUFXQyxTQUEvQixDQUZYO0FBR0Usb0JBQVksS0FBS2UsTUFBTCxHQUFjRCxLQUFkLENBQW9CLEtBQUtmLEtBQUwsQ0FBV0UsWUFBL0IsQ0FIZDtBQUlFLGdCQUFRSyxTQUpWLElBREY7QUFPRDs7Ozs7O0FBMUNrQlYsTyxDQUNab0IsWSxHQUFlO0FBQ3BCWiwwQkFEb0I7QUFFcEJhLFlBQVUsSUFGVTtBQUdwQmpCLGFBQVdrQixTQUhTO0FBSXBCakIsZ0JBQWNpQjtBQUpNLEM7QUFESHRCLE8sQ0FPWlQsUyxHQUFZLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0QsU0FBbkIsRUFBOEIsZ0JBQU1BLFNBQXBDLEVBQStDO0FBQ2hFYSxhQUFXLGdCQUFNVixTQUFOLENBQWdCSyxNQUFoQixDQUF1QndCLFVBRDhCO0FBRWhFbEIsZ0JBQWMsZ0JBQU1YLFNBQU4sQ0FBZ0JLLE1BQWhCLENBQXVCd0I7QUFGMkIsQ0FBL0MsQztrQkFQQXZCLE8iLCJmaWxlIjoiY29tcC9hbnRkL1NLVGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RhYmxlfSBmcm9tICdhbnRkJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU0sgZnJvbSAnc2stanMnO1xuaW1wb3J0IENvbXAgZnJvbSAnLi4vLi4vdXRpbC9Db21wJztcblxuVGFibGUucHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBUYWJsZS5wcm9wVHlwZXMsIHtcbiAgcm93S2V5OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgc2Nyb2xsOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICBzaXplOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG59LCB7fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLVGFibGUgZXh0ZW5kcyBDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb21wVGFnOiBUYWJsZSxcbiAgICBib3JkZXJlZDogdHJ1ZSxcbiAgICBsb2FkaW5nSWQ6IHVuZGVmaW5lZCxcbiAgICBwYWdpbmF0aW9uSWQ6IHVuZGVmaW5lZFxuICB9O1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBDb21wLnByb3BUeXBlcywgVGFibGUucHJvcFR5cGVzLCB7XG4gICAgbG9hZGluZ0lkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcGFnaW5hdGlvbklkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICB9XG5cbiAgYWRkRXh0ZW5kQ2hhbmdlZE1vbml0b3IoKSB7XG4gICAgdGhpcy5hZGRDaGFuZ2VkTW9uaXRvcih0aGlzLnByb3BzLmxvYWRpbmdJZCk7XG4gICAgdGhpcy5hZGRDaGFuZ2VkTW9uaXRvcih0aGlzLnByb3BzLnBhZ2luYXRpb25JZCk7XG4gIH1cblxuICBybXZFeHRlbmRDaGFuZ2VkTW9uaXRvcigpIHtcbiAgICB0aGlzLnJtdkNoYW5nZWRNb25pdG9yKHRoaXMucHJvcHMubG9hZGluZ0lkKTtcbiAgICB0aGlzLnJtdkNoYW5nZWRNb25pdG9yKHRoaXMucHJvcHMucGFnaW5hdGlvbklkKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2NvbXBUYWc6IENvbXBUYWcsIGNvbHVtbnMsIHNjcm9sbH0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGV0IHRtcFNjcm9sbCA9IHt5OiBmYWxzZX07XG4gICAgdG1wU2Nyb2xsLnggPSBjb2x1bW5zLnJlZHVjZSgoJHN1bSwgJGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiAkc3VtICsgJGl0ZW0ud2lkdGg7XG4gICAgfSwgMCk7XG4gICAgdG1wU2Nyb2xsID0gc2Nyb2xsIHx8IHRtcFNjcm9sbDtcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5jb21wVmFsaWRQcm9wcyhDb21wVGFnKX1cbiAgICAgICAgZGF0YVNvdXJjZT17dGhpcy5za1ZhbCgpfVxuICAgICAgICBsb2FkaW5nPXt0aGlzLmlNb2RlbCgpLnNrVmFsKHRoaXMucHJvcHMubG9hZGluZ0lkKX1cbiAgICAgICAgcGFnaW5hdGlvbj17dGhpcy5pTW9kZWwoKS5za1ZhbCh0aGlzLnByb3BzLnBhZ2luYXRpb25JZCl9XG4gICAgICAgIHNjcm9sbD17dG1wU2Nyb2xsfS8+XG4gICAgKTtcbiAgfVxufVxuIl19