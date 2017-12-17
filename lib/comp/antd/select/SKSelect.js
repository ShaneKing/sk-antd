'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/select/style');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _skL10n = require('sk-l10n');

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

var _Const = require('../../../util/Const');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_select2.default.defaultProps = _skJs.SK.assign({}, {
  allowClear: false,
  autoFocus: false,
  combobox: false,
  defaultActiveFirstOption: true,
  disabled: false,
  dropdownMatchSelectWidth: true,
  filterOption: true,
  labelInValue: false,
  // multiple: false,
  notFoundContent: _skL10n.I18N.get('Not_Found'),
  // optionFilterProp:'value',
  showSearch: false,
  size: _Const.SIZE.Default,
  tags: false
}, _select2.default.defaultProps, {});

_select2.default.propTypes = _skJs.SK.assign({}, {
  //https://ant.design/components/select-cn/#API
  allowClear: _propTypes2.default.bool,
  autoFocus: _propTypes2.default.bool,
  combobox: _propTypes2.default.bool,
  defaultActiveFirstOption: _propTypes2.default.bool,
  defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
  disabled: _propTypes2.default.bool,
  dropdownClassName: _propTypes2.default.string,
  dropdownMatchSelectWidth: _propTypes2.default.bool,
  dropdownStyle: _propTypes2.default.object,
  filterOption: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func]),
  firstActiveValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
  getPopupContainer: _propTypes2.default.func,
  labelInValue: _propTypes2.default.bool,
  maxTagCount: _propTypes2.default.number,
  maxTagPlaceholder: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
  mode: _propTypes2.default.oneOf(Object.values(_Const.SELECT_MODE)),
  multiple: _propTypes2.default.bool,
  notFoundContent: _propTypes2.default.string,
  optionFilterProp: _propTypes2.default.string,
  optionLabelProp: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  showSearch: _propTypes2.default.bool,
  size: _propTypes2.default.string,
  tags: _propTypes2.default.bool,
  tokenSeparators: _propTypes2.default.array,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
  onBlur: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onDeselect: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onMouseEnter: _propTypes2.default.func,
  onMouseLeave: _propTypes2.default.func,
  onPopupScroll: _propTypes2.default.func,
  onSearch: _propTypes2.default.func,
  onSelect: _propTypes2.default.func
}, _select2.default.propTypes, {});

var SKSelect = function (_AntdComp) {
  _inherits(SKSelect, _AntdComp);

  function SKSelect() {
    var _ref;

    _classCallCheck(this, SKSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKSelect.__proto__ || Object.getPrototypeOf(SKSelect)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKSelect';
    return _this;
  }

  _createClass(SKSelect, [{
    key: 'handleSelect',
    value: function handleSelect(value, option) {
      if (this.props.onSelect && _lodash2.default.isFunction(this.props.onSelect)) {
        this.props.onSelect(value);
      } else {
        this.skVal(value);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          CompTag = _props.compTag,
          dataId = _props.dataId;


      return _react2.default.createElement(
        CompTag,
        _extends({}, this.skTransProps2Self(CompTag), {
          onSelect: this.handleSelect.bind(this),
          value: this.skVal() }),
        dataId ? this.skModel().skVal(dataId).map(function (selectOption) {
          return SKSelect.optionMap(selectOption);
        }) : this.skTransProps2Child()
      );
    }
  }], [{
    key: 'optionMap',
    value: function optionMap(selectOption) {
      return _react2.default.createElement(
        _select2.default.Option,
        { key: selectOption.id },
        selectOption.text
      );
    }
  }]);

  return SKSelect;
}(_AntdComp3.default);

SKSelect.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _select2.default.Option.defaultProps, _select2.default.defaultProps, {
  compTag: _select2.default,
  dataId: undefined
});
SKSelect.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _select2.default.Option.propTypes, _select2.default.propTypes, {
  dataId: _propTypes2.default.string
});
exports.default = SKSelect;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9zZWxlY3QvU0tTZWxlY3QuanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwiYWxsb3dDbGVhciIsImF1dG9Gb2N1cyIsImNvbWJvYm94IiwiZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uIiwiZGlzYWJsZWQiLCJkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGgiLCJmaWx0ZXJPcHRpb24iLCJsYWJlbEluVmFsdWUiLCJub3RGb3VuZENvbnRlbnQiLCJnZXQiLCJzaG93U2VhcmNoIiwic2l6ZSIsIkRlZmF1bHQiLCJ0YWdzIiwicHJvcFR5cGVzIiwiYm9vbCIsImRlZmF1bHRWYWx1ZSIsIm9uZU9mVHlwZSIsInN0cmluZyIsImFycmF5IiwiZHJvcGRvd25DbGFzc05hbWUiLCJkcm9wZG93blN0eWxlIiwib2JqZWN0IiwiZnVuYyIsImZpcnN0QWN0aXZlVmFsdWUiLCJnZXRQb3B1cENvbnRhaW5lciIsIm1heFRhZ0NvdW50IiwibnVtYmVyIiwibWF4VGFnUGxhY2Vob2xkZXIiLCJub2RlIiwibW9kZSIsIm9uZU9mIiwiT2JqZWN0IiwidmFsdWVzIiwibXVsdGlwbGUiLCJvcHRpb25GaWx0ZXJQcm9wIiwib3B0aW9uTGFiZWxQcm9wIiwicGxhY2Vob2xkZXIiLCJ0b2tlblNlcGFyYXRvcnMiLCJ2YWx1ZSIsIm9uQmx1ciIsIm9uQ2hhbmdlIiwib25EZXNlbGVjdCIsIm9uRm9jdXMiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJvblBvcHVwU2Nyb2xsIiwib25TZWFyY2giLCJvblNlbGVjdCIsIlNLU2VsZWN0IiwiYXJncyIsImNvbXBOYW1lIiwib3B0aW9uIiwicHJvcHMiLCJpc0Z1bmN0aW9uIiwic2tWYWwiLCJDb21wVGFnIiwiY29tcFRhZyIsImRhdGFJZCIsInNrVHJhbnNQcm9wczJTZWxmIiwiaGFuZGxlU2VsZWN0IiwiYmluZCIsInNrTW9kZWwiLCJtYXAiLCJzZWxlY3RPcHRpb24iLCJvcHRpb25NYXAiLCJz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QWhCa0JuQixRLENBQ1puRCxZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUMsaUJBQU91RSxNQUFQLENBQWN2RSxZQUFuRCxFQUFpRSxpQkFBT0EsWUFBeEUsRUFBc0Y7QUFDMUcyRCwyQkFEMEc7QUFFMUdDLFVBQVFZO0FBRmtHLENBQXRGLEM7QUFESHJCLFEsQ0FLWm5DLFMsR0FBWSxTQUFHZixNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTZSxTQUF2QixFQUFrQyxpQkFBT3VELE1BQVAsQ0FBY3ZELFNBQWhELEVBQTJELGlCQUFPQSxTQUFsRSxFQUE2RTtBQUM5RjRDLFVBQVEsb0JBQVV4QztBQUQ0RSxDQUE3RSxDO2tCQUxBK0IsUSIsImZpbGUiOiJjb21wL2FudGQvc2VsZWN0L1NLU2VsZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTZWxlY3R9IGZyb20gJ2FudGQnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IHtJMThOfSBmcm9tICdzay1sMTBuJztcbmltcG9ydCBBbnRkQ29tcCBmcm9tICcuLi9BbnRkQ29tcCc7XG5pbXBvcnQge1NFTEVDVF9NT0RFLCBTSVpFfSBmcm9tICcuLi8uLi8uLi91dGlsL0NvbnN0JztcblxuU2VsZWN0LmRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwge1xuICBhbGxvd0NsZWFyOiBmYWxzZSxcbiAgYXV0b0ZvY3VzOiBmYWxzZSxcbiAgY29tYm9ib3g6IGZhbHNlLFxuICBkZWZhdWx0QWN0aXZlRmlyc3RPcHRpb246IHRydWUsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoOiB0cnVlLFxuICBmaWx0ZXJPcHRpb246IHRydWUsXG4gIGxhYmVsSW5WYWx1ZTogZmFsc2UsXG4gIC8vIG11bHRpcGxlOiBmYWxzZSxcbiAgbm90Rm91bmRDb250ZW50OiBJMThOLmdldCgnTm90X0ZvdW5kJyksXG4gIC8vIG9wdGlvbkZpbHRlclByb3A6J3ZhbHVlJyxcbiAgc2hvd1NlYXJjaDogZmFsc2UsXG4gIHNpemU6IFNJWkUuRGVmYXVsdCxcbiAgdGFnczogZmFsc2Vcbn0sIFNlbGVjdC5kZWZhdWx0UHJvcHMsIHt9KTtcblxuU2VsZWN0LnByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwge1xuICAvL2h0dHBzOi8vYW50LmRlc2lnbi9jb21wb25lbnRzL3NlbGVjdC1jbi8jQVBJXG4gIGFsbG93Q2xlYXI6IFByb3BUeXBlcy5ib29sLFxuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuICBjb21ib2JveDogUHJvcFR5cGVzLmJvb2wsXG4gIGRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbjogUHJvcFR5cGVzLmJvb2wsXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMuYXJyYXlcbiAgXSksXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZHJvcGRvd25DbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDogUHJvcFR5cGVzLmJvb2wsXG4gIGRyb3Bkb3duU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIGZpbHRlck9wdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgUHJvcFR5cGVzLmZ1bmNcbiAgXSksXG4gIGZpcnN0QWN0aXZlVmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLmFycmF5XG4gIF0pLFxuICBnZXRQb3B1cENvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGxhYmVsSW5WYWx1ZTogUHJvcFR5cGVzLmJvb2wsXG4gIG1heFRhZ0NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICBtYXhUYWdQbGFjZWhvbGRlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm5vZGUsXG4gICAgUHJvcFR5cGVzLmZ1bmNcbiAgXSksXG4gIG1vZGU6IFByb3BUeXBlcy5vbmVPZihPYmplY3QudmFsdWVzKFNFTEVDVF9NT0RFKSksXG4gIG11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgbm90Rm91bmRDb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvcHRpb25GaWx0ZXJQcm9wOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvcHRpb25MYWJlbFByb3A6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaG93U2VhcmNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGFnczogUHJvcFR5cGVzLmJvb2wsXG4gIHRva2VuU2VwYXJhdG9yczogUHJvcFR5cGVzLmFycmF5LFxuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMuYXJyYXlcbiAgXSksXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25EZXNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuICBvbk1vdXNlRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbk1vdXNlTGVhdmU6IFByb3BUeXBlcy5mdW5jLFxuICBvblBvcHVwU2Nyb2xsOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TZWFyY2g6IFByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmNcbn0sIFNlbGVjdC5wcm9wVHlwZXMsIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tTZWxlY3QgZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywgU2VsZWN0Lk9wdGlvbi5kZWZhdWx0UHJvcHMsIFNlbGVjdC5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBTZWxlY3QsXG4gICAgZGF0YUlkOiB1bmRlZmluZWRcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLnByb3BUeXBlcywgU2VsZWN0Lk9wdGlvbi5wcm9wVHlwZXMsIFNlbGVjdC5wcm9wVHlwZXMsIHtcbiAgICBkYXRhSWQ6IFByb3BUeXBlcy5zdHJpbmdcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tTZWxlY3QnO1xuICB9XG5cbiAgc3RhdGljIG9wdGlvbk1hcChzZWxlY3RPcHRpb24pIHtcbiAgICByZXR1cm4gKDxTZWxlY3QuT3B0aW9uIGtleT17c2VsZWN0T3B0aW9uLmlkfT57c2VsZWN0T3B0aW9uLnRleHR9PC9TZWxlY3QuT3B0aW9uPik7XG4gIH1cblxuICBoYW5kbGVTZWxlY3QodmFsdWUsIG9wdGlvbikge1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0ICYmIF8uaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uU2VsZWN0KSkge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdCh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2tWYWwodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2NvbXBUYWc6IENvbXBUYWcsIGRhdGFJZH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKENvbXBUYWcpfVxuICAgICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMuaGFuZGxlU2VsZWN0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5za1ZhbCgpfT5cbiAgICAgICAge2RhdGFJZCA/IHRoaXMuc2tNb2RlbCgpLnNrVmFsKGRhdGFJZCkubWFwKChzZWxlY3RPcHRpb24pID0+IHtcbiAgICAgICAgICByZXR1cm4gU0tTZWxlY3Qub3B0aW9uTWFwKHNlbGVjdE9wdGlvbik7XG4gICAgICAgIH0pIDogdGhpcy5za1RyYW5zUHJvcHMyQ2hpbGQoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG59XG4iXX0=