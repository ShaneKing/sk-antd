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

var _Const = require('../../../util/Const');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_table2.default.defaultProps = _skJs.SK.assign({}, {
  bordered: false,
  defaultExpandAllRows: false,
  expandRowByClick: false,
  indentSize: 15,
  loading: false,
  rowSelection: null,
  showHeader: true,
  size: _Const.SIZE.Default
}, _table2.default.defaultProps, {});

_table2.default.propTypes = _skJs.SK.assign({}, {
  //https://ant.design/components/table-cn/#Table
  bordered: _propTypes2.default.bool,
  columns: _propTypes2.default.array,
  components: _propTypes2.default.object,
  dataSource: _propTypes2.default.array,
  defaultExpandAllRows: _propTypes2.default.bool,
  defaultExpandedRowKeys: _propTypes2.default.array,
  expandedRowKeys: _propTypes2.default.array,
  expandedRowRender: _propTypes2.default.func,
  expandRowByClick: _propTypes2.default.bool,
  footer: _propTypes2.default.func,
  indentSize: _propTypes2.default.number,
  loading: _propTypes2.default.any, //
  locale: _propTypes2.default.object,
  pagination: _propTypes2.default.object,
  rowClassName: _propTypes2.default.func,
  rowKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  rowSelection: _propTypes2.default.object,
  scroll: _propTypes2.default.object,
  showHeader: _propTypes2.default.bool,
  size: _propTypes2.default.string,
  title: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onExpand: _propTypes2.default.func,
  onExpandedRowsChange: _propTypes2.default.func,
  onHeaderRow: _propTypes2.default.func,
  onRow: _propTypes2.default.func
}, _table2.default.propTypes, {});

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

SKTable.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _table2.default.defaultProps, {
  compTag: _table2.default,
  bordered: true,
  loadingId: undefined,
  paginationId: undefined
});
SKTable.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _table2.default.propTypes, {
  loadingId: _propTypes2.default.string.isRequired,
  paginationId: _propTypes2.default.string.isRequired
});
exports.default = SKTable;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC90YWJsZS9TS1RhYmxlLmpzIl0sIm5hbWVzIjpbImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsImJvcmRlcmVkIiwiZGVmYXVsdEV4cGFuZEFsbFJvd3MiLCJleHBhbmRSb3dCeUNsaWNrIiwiaW5kZW50U2l6ZSIsImxvYWRpbmciLCJyb3dTZWxlY3Rpb24iLCJzaG93SGVhZGVyIiwic2l6ZSIsIkRlZmF1bHQiLCJwcm9wVHlwZXMiLCJib29sIiwiY29sdW1ucyIsImFycmF5IiwiY29tcG9uZW50cyIsIm9iamVjdCIsImRhdGFTb3VyY2UiLCJkZWZhdWx0RXhwYW5kZWRSb3dLZXlzIiwiZXhwYW5kZWRSb3dLZXlzIiwiZXhwYW5kZWRSb3dSZW5kZXIiLCJmdW5jIiwiZm9vdGVyIiwibnVtYmVyIiwiYW55IiwibG9jYWxlIiwicGFnaW5hdGlvbiIsInJvd0NsYXNzTmFtZSIsInJvd0tleSIsIm9uZU9mVHlwZSIsInN0cmluZyIsInNjcm9sbCIsInRpdGxlIiwib25DaGFuZ2UiLCJvbkV4cGFuZCIsIm9uRXhwYW5kZWRSb3dzQ2hhbmdlIiwib25IZWFkZXJSb3ciLCJvblJvdyIsIlNLVGFibGUiLCJhcmdzIiwiY29tcE5hbWUiLCJhZGRDaGFuZ2VkTW9uaXRvciIsInByb3BzIiwibG9hZGluZ0lkIiwicGFnaW5hdGlvbklkIiwicm12Q2hhbmdlZE1vbml0b3IiLCJDb21wVGFnIiwiY29tcFRhZyIsInRtcFNjcm9sbCIsInkiLCJ4IiwicmVkdWNlIiwiJHN1bSIsIiRpdGVtIiwid2lkdGgiLCJza1RyYW5zUHJvcHMyU2VsZiIsInNrVmFsIiwic2tNb2RlbCIsInVuZGVmaW5lZCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBLGdCQUFNQSxZQUFOLEdBQXFCLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDakNDLFlBQVUsS0FE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QUwsQ0FBV0MsU0FBaEMsQ0FGbEI7QUFHUyxvQkFBWSxLQUFLYyxPQUFMLEdBQWVELEtBQWYsQ0FBcUIsS0FBS2QsS0FBTCxDQUFXRSxZQUFoQyxDQUhyQjtBQUlTLGdCQUFRSSxTQUpqQixJQURGO0FBT0Q7Ozs7OztBQTVDa0JWLE8sQ0FDWnRDLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQyxnQkFBTUEsWUFBM0MsRUFBeUQ7QUFDN0UrQywwQkFENkU7QUFFN0U3QyxZQUFVLElBRm1FO0FBRzdFeUMsYUFBV2UsU0FIa0U7QUFJN0VkLGdCQUFjYztBQUorRCxDQUF6RCxDO0FBREhwQixPLENBT1ozQixTLEdBQVksU0FBR1YsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU1UsU0FBdkIsRUFBa0MsZ0JBQU1BLFNBQXhDLEVBQW1EO0FBQ3BFZ0MsYUFBVyxvQkFBVWIsTUFBVixDQUFpQjZCLFVBRHdDO0FBRXBFZixnQkFBYyxvQkFBVWQsTUFBVixDQUFpQjZCO0FBRnFDLENBQW5ELEM7a0JBUEFyQixPIiwiZmlsZSI6ImNvbXAvYW50ZC90YWJsZS9TS1RhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUYWJsZX0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBBbnRkQ29tcCBmcm9tICcuLi9BbnRkQ29tcCc7XG5pbXBvcnQge1NJWkV9IGZyb20gJy4uLy4uLy4uL3V0aWwvQ29uc3QnO1xuXG5UYWJsZS5kZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIHtcbiAgYm9yZGVyZWQ6IGZhbHNlLFxuICBkZWZhdWx0RXhwYW5kQWxsUm93czogZmFsc2UsXG4gIGV4cGFuZFJvd0J5Q2xpY2s6IGZhbHNlLFxuICBpbmRlbnRTaXplOiAxNSxcbiAgbG9hZGluZzogZmFsc2UsXG4gIHJvd1NlbGVjdGlvbjogbnVsbCxcbiAgc2hvd0hlYWRlcjogdHJ1ZSxcbiAgc2l6ZTogU0laRS5EZWZhdWx0XG59LCBUYWJsZS5kZWZhdWx0UHJvcHMsIHt9KTtcblxuVGFibGUucHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCB7XG4gIC8vaHR0cHM6Ly9hbnQuZGVzaWduL2NvbXBvbmVudHMvdGFibGUtY24vI1RhYmxlXG4gIGJvcmRlcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LFxuICBjb21wb25lbnRzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBkYXRhU291cmNlOiBQcm9wVHlwZXMuYXJyYXksXG4gIGRlZmF1bHRFeHBhbmRBbGxSb3dzOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGVmYXVsdEV4cGFuZGVkUm93S2V5czogUHJvcFR5cGVzLmFycmF5LFxuICBleHBhbmRlZFJvd0tleXM6IFByb3BUeXBlcy5hcnJheSxcbiAgZXhwYW5kZWRSb3dSZW5kZXI6IFByb3BUeXBlcy5mdW5jLFxuICBleHBhbmRSb3dCeUNsaWNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgZm9vdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgaW5kZW50U2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgbG9hZGluZzogUHJvcFR5cGVzLmFueSwvL1xuICBsb2NhbGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIHBhZ2luYXRpb246IFByb3BUeXBlcy5vYmplY3QsXG4gIHJvd0NsYXNzTmFtZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHJvd0tleTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMuZnVuY1xuICBdKSxcbiAgcm93U2VsZWN0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICBzY3JvbGw6IFByb3BUeXBlcy5vYmplY3QsXG4gIHNob3dIZWFkZXI6IFByb3BUeXBlcy5ib29sLFxuICBzaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0aXRsZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25FeHBhbmQ6IFByb3BUeXBlcy5mdW5jLFxuICBvbkV4cGFuZGVkUm93c0NoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uSGVhZGVyUm93OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Sb3c6IFByb3BUeXBlcy5mdW5jXG59LCBUYWJsZS5wcm9wVHlwZXMsIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tUYWJsZSBleHRlbmRzIEFudGRDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAuZGVmYXVsdFByb3BzLCBUYWJsZS5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBUYWJsZSxcbiAgICBib3JkZXJlZDogdHJ1ZSxcbiAgICBsb2FkaW5nSWQ6IHVuZGVmaW5lZCxcbiAgICBwYWdpbmF0aW9uSWQ6IHVuZGVmaW5lZFxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCBUYWJsZS5wcm9wVHlwZXMsIHtcbiAgICBsb2FkaW5nSWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBwYWdpbmF0aW9uSWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICB9KTtcblxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ1NLVGFibGUnO1xuICB9XG5cbiAgYWRkRXh0ZW5kQ2hhbmdlZE1vbml0b3IoKSB7XG4gICAgdGhpcy5hZGRDaGFuZ2VkTW9uaXRvcih0aGlzLnByb3BzLmxvYWRpbmdJZCk7XG4gICAgdGhpcy5hZGRDaGFuZ2VkTW9uaXRvcih0aGlzLnByb3BzLnBhZ2luYXRpb25JZCk7XG4gIH1cblxuICBybXZFeHRlbmRDaGFuZ2VkTW9uaXRvcigpIHtcbiAgICB0aGlzLnJtdkNoYW5nZWRNb25pdG9yKHRoaXMucHJvcHMubG9hZGluZ0lkKTtcbiAgICB0aGlzLnJtdkNoYW5nZWRNb25pdG9yKHRoaXMucHJvcHMucGFnaW5hdGlvbklkKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2NvbXBUYWc6IENvbXBUYWcsIGNvbHVtbnMsIHNjcm9sbH0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGV0IHRtcFNjcm9sbCA9IHt5OiBmYWxzZX07XG4gICAgdG1wU2Nyb2xsLnggPSBjb2x1bW5zLnJlZHVjZSgoJHN1bSwgJGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiAkc3VtICsgJGl0ZW0ud2lkdGg7XG4gICAgfSwgMCk7XG4gICAgdG1wU2Nyb2xsID0gc2Nyb2xsIHx8IHRtcFNjcm9sbDtcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihDb21wVGFnKX1cbiAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e3RoaXMuc2tWYWwoKX1cbiAgICAgICAgICAgICAgIGxvYWRpbmc9e3RoaXMuc2tNb2RlbCgpLnNrVmFsKHRoaXMucHJvcHMubG9hZGluZ0lkKX1cbiAgICAgICAgICAgICAgIHBhZ2luYXRpb249e3RoaXMuc2tNb2RlbCgpLnNrVmFsKHRoaXMucHJvcHMucGFnaW5hdGlvbklkKX1cbiAgICAgICAgICAgICAgIHNjcm9sbD17dG1wU2Nyb2xsfS8+XG4gICAgKTtcbiAgfVxufVxuIl19