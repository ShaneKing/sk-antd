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

var _Const = require('../../Const');

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
        scroll: tmpScroll
      }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvdGFibGUvU0tUYWJsZS5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJib3JkZXJlZCIsImRlZmF1bHRFeHBhbmRBbGxSb3dzIiwiZXhwYW5kUm93QnlDbGljayIsImluZGVudFNpemUiLCJsb2FkaW5nIiwicm93U2VsZWN0aW9uIiwic2hvd0hlYWRlciIsInNpemUiLCJEZWZhdWx0IiwicHJvcFR5cGVzIiwiYm9vbCIsImNvbHVtbnMiLCJhcnJheSIsImNvbXBvbmVudHMiLCJvYmplY3QiLCJkYXRhU291cmNlIiwiZGVmYXVsdEV4cGFuZGVkUm93S2V5cyIsImV4cGFuZGVkUm93S2V5cyIsImV4cGFuZGVkUm93UmVuZGVyIiwiZnVuYyIsImZvb3RlciIsIm51bWJlciIsImFueSIsImxvY2FsZSIsInBhZ2luYXRpb24iLCJyb3dDbGFzc05hbWUiLCJyb3dLZXkiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJzY3JvbGwiLCJ0aXRsZSIsIm9uQ2hhbmdlIiwib25FeHBhbmQiLCJvbkV4cGFuZGVkUm93c0NoYW5nZSIsIm9uSGVhZGVyUm93Iiwib25Sb3ciLCJTS1RhYmxlIiwiYXJncyIsImNvbXBOYW1lIiwiYWRkQ2hhbmdlZE1vbml0b3IiLCJwcm9wcyIsImxvYWRpbmdJZCIsInBhZ2luYXRpb25JZCIsInJtdkNoYW5nZWRNb25pdG9yIiwiQ29tcFRhZyIsImNvbXBUYWciLCJ0bXBTY3JvbGwiLCJ5IiwieCIsInJlZHVjZSIsIiRzdW0iLCIkaXRlbSIsIndpZHRoIiwic2tUcmFuc1Byb3BzMlNlbGYiLCJza1ZhbCIsInNrTW9kZWwiLCJ1bmRlZmluZWQiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxnQkFBTUEsWUFBTixHQUFxQixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjO0FBQ2pDQyxZQUFVLEtBRHVCO0FB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V0MsU0FBaEMsQ0FIWDtBQUlFLG9CQUFZLEtBQUtjLE9BQUwsR0FBZUQsS0FBZixDQUFxQixLQUFLZCxLQUFMLENBQVdFLFlBQWhDLENBSmQ7QUFLRSxnQkFBUUk7QUFMVixTQURGO0FBU0Q7Ozs7OztBQTdDa0JWLE8sQ0FDWnRDLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQyxnQkFBTUEsWUFBM0MsRUFBeUQ7QUFDN0UrQywwQkFENkU7QUFFN0U3QyxZQUFVLElBRm1FO0FBRzdFeUMsYUFBV2UsU0FIa0U7QUFJN0VkLGdCQUFjYztBQUorRCxDQUF6RCxDO0FBREhwQixPLENBT1ozQixTLEdBQVksU0FBR1YsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU1UsU0FBdkIsRUFBa0MsZ0JBQU1BLFNBQXhDLEVBQW1EO0FBQ3BFZ0MsYUFBVyxvQkFBVWIsTUFBVixDQUFpQjZCLFVBRHdDO0FBRXBFZixnQkFBYyxvQkFBVWQsTUFBVixDQUFpQjZCO0FBRnFDLENBQW5ELEM7a0JBUEFyQixPIiwiZmlsZSI6ImFudGQvdGFibGUvU0tUYWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhYmxlIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNLIH0gZnJvbSAnc2stanMnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcbmltcG9ydCB7IFNJWkUgfSBmcm9tICcuLi8uLi9Db25zdCc7XG5cblRhYmxlLmRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwge1xuICBib3JkZXJlZDogZmFsc2UsXG4gIGRlZmF1bHRFeHBhbmRBbGxSb3dzOiBmYWxzZSxcbiAgZXhwYW5kUm93QnlDbGljazogZmFsc2UsXG4gIGluZGVudFNpemU6IDE1LFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgcm93U2VsZWN0aW9uOiBudWxsLFxuICBzaG93SGVhZGVyOiB0cnVlLFxuICBzaXplOiBTSVpFLkRlZmF1bHQsXG59LCBUYWJsZS5kZWZhdWx0UHJvcHMsIHt9KTtcblxuVGFibGUucHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCB7XG4gIC8vaHR0cHM6Ly9hbnQuZGVzaWduL2NvbXBvbmVudHMvdGFibGUtY24vI1RhYmxlXG4gIGJvcmRlcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LFxuICBjb21wb25lbnRzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBkYXRhU291cmNlOiBQcm9wVHlwZXMuYXJyYXksXG4gIGRlZmF1bHRFeHBhbmRBbGxSb3dzOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGVmYXVsdEV4cGFuZGVkUm93S2V5czogUHJvcFR5cGVzLmFycmF5LFxuICBleHBhbmRlZFJvd0tleXM6IFByb3BUeXBlcy5hcnJheSxcbiAgZXhwYW5kZWRSb3dSZW5kZXI6IFByb3BUeXBlcy5mdW5jLFxuICBleHBhbmRSb3dCeUNsaWNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgZm9vdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgaW5kZW50U2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgbG9hZGluZzogUHJvcFR5cGVzLmFueSwgLy9cbiAgbG9jYWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBwYWdpbmF0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICByb3dDbGFzc05hbWU6IFByb3BUeXBlcy5mdW5jLFxuICByb3dLZXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLmZ1bmMsXG4gIF0pLFxuICByb3dTZWxlY3Rpb246IFByb3BUeXBlcy5vYmplY3QsXG4gIHNjcm9sbDogUHJvcFR5cGVzLm9iamVjdCxcbiAgc2hvd0hlYWRlcjogUHJvcFR5cGVzLmJvb2wsXG4gIHNpemU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRpdGxlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbkV4cGFuZDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRXhwYW5kZWRSb3dzQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25IZWFkZXJSb3c6IFByb3BUeXBlcy5mdW5jLFxuICBvblJvdzogUHJvcFR5cGVzLmZ1bmMsXG59LCBUYWJsZS5wcm9wVHlwZXMsIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tUYWJsZSBleHRlbmRzIEFudGRDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAuZGVmYXVsdFByb3BzLCBUYWJsZS5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBUYWJsZSxcbiAgICBib3JkZXJlZDogdHJ1ZSxcbiAgICBsb2FkaW5nSWQ6IHVuZGVmaW5lZCxcbiAgICBwYWdpbmF0aW9uSWQ6IHVuZGVmaW5lZCxcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLnByb3BUeXBlcywgVGFibGUucHJvcFR5cGVzLCB7XG4gICAgbG9hZGluZ0lkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcGFnaW5hdGlvbklkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ1NLVGFibGUnO1xuICB9XG5cbiAgYWRkRXh0ZW5kQ2hhbmdlZE1vbml0b3IoKSB7XG4gICAgdGhpcy5hZGRDaGFuZ2VkTW9uaXRvcih0aGlzLnByb3BzLmxvYWRpbmdJZCk7XG4gICAgdGhpcy5hZGRDaGFuZ2VkTW9uaXRvcih0aGlzLnByb3BzLnBhZ2luYXRpb25JZCk7XG4gIH1cblxuICBybXZFeHRlbmRDaGFuZ2VkTW9uaXRvcigpIHtcbiAgICB0aGlzLnJtdkNoYW5nZWRNb25pdG9yKHRoaXMucHJvcHMubG9hZGluZ0lkKTtcbiAgICB0aGlzLnJtdkNoYW5nZWRNb25pdG9yKHRoaXMucHJvcHMucGFnaW5hdGlvbklkKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbXBUYWc6IENvbXBUYWcsIGNvbHVtbnMsIHNjcm9sbCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCB0bXBTY3JvbGwgPSB7IHk6IGZhbHNlIH07XG4gICAgdG1wU2Nyb2xsLnggPSBjb2x1bW5zLnJlZHVjZSgoJHN1bSwgJGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiAkc3VtICsgJGl0ZW0ud2lkdGg7XG4gICAgfSwgMCk7XG4gICAgdG1wU2Nyb2xsID0gc2Nyb2xsIHx8IHRtcFNjcm9sbDtcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZ1xuICAgICAgICB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihDb21wVGFnKX1cbiAgICAgICAgZGF0YVNvdXJjZT17dGhpcy5za1ZhbCgpfVxuICAgICAgICBsb2FkaW5nPXt0aGlzLnNrTW9kZWwoKS5za1ZhbCh0aGlzLnByb3BzLmxvYWRpbmdJZCl9XG4gICAgICAgIHBhZ2luYXRpb249e3RoaXMuc2tNb2RlbCgpLnNrVmFsKHRoaXMucHJvcHMucGFnaW5hdGlvbklkKX1cbiAgICAgICAgc2Nyb2xsPXt0bXBTY3JvbGx9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==