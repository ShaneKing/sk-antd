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

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

var _Const = require('../../Const');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*eslint no-unused-vars: "off"*/

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
  notFoundContent: _skJs.Mesgs.get('Not_Found'),
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
    _this.handleSelect = function (value, option) {
      if (_this.props.onSelect && _lodash2.default.isFunction(_this.props.onSelect)) {
        _this.props.onSelect(value);
      } else {
        _this.skVal(value);
      }
    };
    return _this;
  }

  _createClass(SKSelect, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          CompTag = _props.compTag,
          dataId = _props.dataId;


      return _react2.default.createElement(
        CompTag,
        _extends({}, this.skTransProps2Self(CompTag), {
          onSelect: this.handleSelect,
          value: this.skVal()
        }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvc2VsZWN0L1NLU2VsZWN0LmpzIl0sIm5hbWVzIjpbImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsImFsbG93Q2xlYXIiLCJhdXRvRm9jdXMiLCJjb21ib2JveCIsImRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbiIsImRpc2FibGVkIiwiZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoIiwiZmlsdGVyT3B0aW9uIiwibGFiZWxJblZhbHVlIiwibm90Rm91bmRDb250ZW50IiwiZ2V0Iiwic2hvd1NlYXJjaCIsInNpemUiLCJEZWZhdWx0IiwidGFncyIsInByb3BUeXBlcyIsImJvb2wiLCJkZWZhdWx0VmFsdWUiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJhcnJheSIsImRyb3Bkb3duQ2xhc3NOYW1lIiwiZHJvcGRvd25TdHlsZSIsIm9iamVjdCIsImZ1bmMiLCJmaXJzdEFjdGl2ZVZhbHVlIiwiZ2V0UG9wdXBDb250YWluZXIiLCJtYXhUYWdDb3VudCIsIm51bWJlciIsIm1heFRhZ1BsYWNlaG9sZGVyIiwibm9kZSIsIm1vZGUiLCJvbmVPZiIsIk9iamVjdCIsInZhbHVlcyIsIm11bHRpcGxlIiwib3B0aW9uRmlsdGVyUHJvcCIsIm9wdGlvbkxhYmVsUHJvcCIsInBsYWNlaG9sZGVyIiwidG9rZW5TZXBhcmF0b3JzIiwidmFsdWUiLCJvbkJsdXIiLCJvbkNoYW5nZSIsIm9uRGVzZWxlY3QiLCJvbkZvY3VzIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwib25Qb3B1cFNjcm9sbCIsIm9uU2VhcmNoIiwib25TZWxlY3QiLCJTS1NlbGVjdCIsImFyZ3MiLCJjb21wTmFtZSIsImhhbmRsZVNlbGVjdCIsIm9wdGlvbiIsInByb3BzIiwiaXNGdW5jdGlvbiIsInNrVmFsIiwiQ29tcFRhZyIsImNvbXBUYWciLCJkYXRhSWQiLCJza1RyYW5zUHJvcHMyU2VsZiIsInNrTW9kZWwiLCJtYXAiLCJzZWxlY3RPcHRpb24iLCJvcHRpb25NYXAiLCJza1RyYW5zUHJvcHMy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Wm5ELFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQyxpQkFBT3NFLE1BQVAsQ0FBY3RFLFlBQW5ELEVBQWlFLGlCQUFPQSxZQUF4RSxFQUFzRjtBQUMxRzRELDJCQUQwRztBQUUxR0MsVUFBUVU7QUFGa0csQ0FBdEYsQztBQURIcEIsUSxDQUtabkMsUyxHQUFZLFNBQUdmLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNlLFNBQXZCLEVBQWtDLGlCQUFPc0QsTUFBUCxDQUFjdEQsU0FBaEQsRUFBMkQsaUJBQU9BLFNBQWxFLEVBQTZFO0FBQzlGNkMsVUFBUSxvQkFBVXpDO0FBRDRFLENBQTdFLEM7a0JBTEErQixRIiwiZmlsZSI6ImFudGQvc2VsZWN0L1NLU2VsZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTSywgTWVzZ3MgfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgQW50ZENvbXAgZnJvbSAnLi4vQW50ZENvbXAnO1xuaW1wb3J0IHsgU0VMRUNUX01PREUsIFNJWkUgfSBmcm9tICcuLi8uLi9Db25zdCc7XG5cbi8qZXNsaW50IG5vLXVudXNlZC12YXJzOiBcIm9mZlwiKi9cblxuU2VsZWN0LmRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwge1xuICBhbGxvd0NsZWFyOiBmYWxzZSxcbiAgYXV0b0ZvY3VzOiBmYWxzZSxcbiAgY29tYm9ib3g6IGZhbHNlLFxuICBkZWZhdWx0QWN0aXZlRmlyc3RPcHRpb246IHRydWUsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoOiB0cnVlLFxuICBmaWx0ZXJPcHRpb246IHRydWUsXG4gIGxhYmVsSW5WYWx1ZTogZmFsc2UsXG4gIC8vIG11bHRpcGxlOiBmYWxzZSxcbiAgbm90Rm91bmRDb250ZW50OiBNZXNncy5nZXQoJ05vdF9Gb3VuZCcpLFxuICAvLyBvcHRpb25GaWx0ZXJQcm9wOid2YWx1ZScsXG4gIHNob3dTZWFyY2g6IGZhbHNlLFxuICBzaXplOiBTSVpFLkRlZmF1bHQsXG4gIHRhZ3M6IGZhbHNlLFxufSwgU2VsZWN0LmRlZmF1bHRQcm9wcywge30pO1xuXG5TZWxlY3QucHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCB7XG4gIC8vaHR0cHM6Ly9hbnQuZGVzaWduL2NvbXBvbmVudHMvc2VsZWN0LWNuLyNBUElcbiAgYWxsb3dDbGVhcjogUHJvcFR5cGVzLmJvb2wsXG4gIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG4gIGNvbWJvYm94OiBQcm9wVHlwZXMuYm9vbCxcbiAgZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5hcnJheSxcbiAgXSksXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZHJvcGRvd25DbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDogUHJvcFR5cGVzLmJvb2wsXG4gIGRyb3Bkb3duU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIGZpbHRlck9wdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgUHJvcFR5cGVzLmZ1bmMsXG4gIF0pLFxuICBmaXJzdEFjdGl2ZVZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5hcnJheSxcbiAgXSksXG4gIGdldFBvcHVwQ29udGFpbmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgbGFiZWxJblZhbHVlOiBQcm9wVHlwZXMuYm9vbCxcbiAgbWF4VGFnQ291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIG1heFRhZ1BsYWNlaG9sZGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubm9kZSxcbiAgICBQcm9wVHlwZXMuZnVuYyxcbiAgXSksXG4gIG1vZGU6IFByb3BUeXBlcy5vbmVPZihPYmplY3QudmFsdWVzKFNFTEVDVF9NT0RFKSksXG4gIG11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgbm90Rm91bmRDb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvcHRpb25GaWx0ZXJQcm9wOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvcHRpb25MYWJlbFByb3A6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaG93U2VhcmNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGFnczogUHJvcFR5cGVzLmJvb2wsXG4gIHRva2VuU2VwYXJhdG9yczogUHJvcFR5cGVzLmFycmF5LFxuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMuYXJyYXksXG4gIF0pLFxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRGVzZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Nb3VzZUVudGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Nb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Qb3B1cFNjcm9sbDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2VhcmNoOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxufSwgU2VsZWN0LnByb3BUeXBlcywge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS1NlbGVjdCBleHRlbmRzIEFudGRDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAuZGVmYXVsdFByb3BzLCBTZWxlY3QuT3B0aW9uLmRlZmF1bHRQcm9wcywgU2VsZWN0LmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IFNlbGVjdCxcbiAgICBkYXRhSWQ6IHVuZGVmaW5lZCxcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLnByb3BUeXBlcywgU2VsZWN0Lk9wdGlvbi5wcm9wVHlwZXMsIFNlbGVjdC5wcm9wVHlwZXMsIHtcbiAgICBkYXRhSWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ1NLU2VsZWN0JztcbiAgICB0aGlzLmhhbmRsZVNlbGVjdCA9ICh2YWx1ZSwgb3B0aW9uKSA9PiB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCAmJiBfLmlzRnVuY3Rpb24odGhpcy5wcm9wcy5vblNlbGVjdCkpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdCh2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNrVmFsKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIG9wdGlvbk1hcChzZWxlY3RPcHRpb24pIHtcbiAgICByZXR1cm4gKDxTZWxlY3QuT3B0aW9uIGtleT17c2VsZWN0T3B0aW9uLmlkfT57c2VsZWN0T3B0aW9uLnRleHR9PC9TZWxlY3QuT3B0aW9uPik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb21wVGFnOiBDb21wVGFnLCBkYXRhSWQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWdcbiAgICAgICAgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoQ29tcFRhZyl9XG4gICAgICAgIG9uU2VsZWN0PXt0aGlzLmhhbmRsZVNlbGVjdH1cbiAgICAgICAgdmFsdWU9e3RoaXMuc2tWYWwoKX1cbiAgICAgID5cbiAgICAgICAge2RhdGFJZCA/IHRoaXMuc2tNb2RlbCgpLnNrVmFsKGRhdGFJZCkubWFwKChzZWxlY3RPcHRpb24pID0+IHtcbiAgICAgICAgICByZXR1cm4gU0tTZWxlY3Qub3B0aW9uTWFwKHNlbGVjdE9wdGlvbik7XG4gICAgICAgIH0pIDogdGhpcy5za1RyYW5zUHJvcHMyQ2hpbGQoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG59XG4iXX0=