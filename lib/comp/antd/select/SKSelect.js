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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9zZWxlY3QvU0tTZWxlY3QuanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwiYWxsb3dDbGVhciIsImF1dG9Gb2N1cyIsImNvbWJvYm94IiwiZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uIiwiZGlzYWJsZWQiLCJkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGgiLCJmaWx0ZXJPcHRpb24iLCJsYWJlbEluVmFsdWUiLCJub3RGb3VuZENvbnRlbnQiLCJnZXQiLCJzaG93U2VhcmNoIiwic2l6ZSIsIkRlZmF1bHQiLCJ0YWdzIiwicHJvcFR5cGVzIiwiYm9vbCIsImRlZmF1bHRWYWx1ZSIsIm9uZU9mVHlwZSIsInN0cmluZyIsImFycmF5IiwiZHJvcGRvd25DbGFzc05hbWUiLCJkcm9wZG93blN0eWxlIiwib2JqZWN0IiwiZnVuYyIsImZpcnN0QWN0aXZlVmFsdWUiLCJnZXRQb3B1cENvbnRhaW5lciIsIm1heFRhZ0NvdW50IiwibnVtYmVyIiwibWF4VGFnUGxhY2Vob2xkZXIiLCJub2RlIiwibW9kZSIsIm9uZU9mIiwiT2JqZWN0IiwidmFsdWVzIiwibXVsdGlwbGUiLCJvcHRpb25GaWx0ZXJQcm9wIiwib3B0aW9uTGFiZWxQcm9wIiwicGxhY2Vob2xkZXIiLCJ0b2tlblNlcGFyYXRvcnMiLCJ2YWx1ZSIsIm9uQmx1ciIsIm9uQ2hhbmdlIiwib25EZXNlbGVjdCIsIm9uRm9jdXMiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJvblBvcHVwU2Nyb2xsIiwib25TZWFyY2giLCJvblNlbGVjdCIsIlNLU2VsZWN0IiwiYXJncyIsImNvbXBOYW1lIiwiaGFuZGxlU2VsZWN0Iiwib3B0aW9uIiwicHJvcHMiLCJpc0Z1bmN0aW9uIiwic2tWYWwiLCJDb21wVGFnIiwiY29tcFRhZyIsImRhdGFJZCIsInNrVHJhbnNQcm9wczJTZWxmIiwic2tNb2RlbCIsIm1hcCIsInNlbGVjdE9wdGlvbiIsIm9wdGlvbk1hcCIsInNrVHJhbnNQ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LFEsQ0FDWm5ELFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQyxpQkFBT3NFLE1BQVAsQ0FBY3RFLFlBQW5ELEVBQWlFLGlCQUFPQSxZQUF4RSxFQUFzRjtBQUMxRzRELDJCQUQwRztBQUUxR0MsVUFBUVU7QUFGa0csQ0FBdEYsQztBQURIcEIsUSxDQUtabkMsUyxHQUFZLFNBQUdmLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNlLFNBQXZCLEVBQWtDLGlCQUFPc0QsTUFBUCxDQUFjdEQsU0FBaEQsRUFBMkQsaUJBQU9BLFNBQWxFLEVBQTZFO0FBQzlGNkMsVUFBUSxvQkFBVXpDO0FBRDRFLENBQTdFLEM7a0JBTEErQixRIiwiZmlsZSI6ImNvbXAvYW50ZC9zZWxlY3QvU0tTZWxlY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NlbGVjdH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1NLfSBmcm9tICdzay1qcyc7XG5pbXBvcnQge0kxOE59IGZyb20gJ3NrLWwxMG4nO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcbmltcG9ydCB7U0VMRUNUX01PREUsIFNJWkV9IGZyb20gJy4uLy4uLy4uL3V0aWwvQ29uc3QnO1xuXG5TZWxlY3QuZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCB7XG4gIGFsbG93Q2xlYXI6IGZhbHNlLFxuICBhdXRvRm9jdXM6IGZhbHNlLFxuICBjb21ib2JveDogZmFsc2UsXG4gIGRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbjogdHJ1ZSxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg6IHRydWUsXG4gIGZpbHRlck9wdGlvbjogdHJ1ZSxcbiAgbGFiZWxJblZhbHVlOiBmYWxzZSxcbiAgLy8gbXVsdGlwbGU6IGZhbHNlLFxuICBub3RGb3VuZENvbnRlbnQ6IEkxOE4uZ2V0KCdOb3RfRm91bmQnKSxcbiAgLy8gb3B0aW9uRmlsdGVyUHJvcDondmFsdWUnLFxuICBzaG93U2VhcmNoOiBmYWxzZSxcbiAgc2l6ZTogU0laRS5EZWZhdWx0LFxuICB0YWdzOiBmYWxzZVxufSwgU2VsZWN0LmRlZmF1bHRQcm9wcywge30pO1xuXG5TZWxlY3QucHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCB7XG4gIC8vaHR0cHM6Ly9hbnQuZGVzaWduL2NvbXBvbmVudHMvc2VsZWN0LWNuLyNBUElcbiAgYWxsb3dDbGVhcjogUHJvcFR5cGVzLmJvb2wsXG4gIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG4gIGNvbWJvYm94OiBQcm9wVHlwZXMuYm9vbCxcbiAgZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5hcnJheVxuICBdKSxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBkcm9wZG93bkNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoOiBQcm9wVHlwZXMuYm9vbCxcbiAgZHJvcGRvd25TdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgZmlsdGVyT3B0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICBQcm9wVHlwZXMuZnVuY1xuICBdKSxcbiAgZmlyc3RBY3RpdmVWYWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMuYXJyYXlcbiAgXSksXG4gIGdldFBvcHVwQ29udGFpbmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgbGFiZWxJblZhbHVlOiBQcm9wVHlwZXMuYm9vbCxcbiAgbWF4VGFnQ291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIG1heFRhZ1BsYWNlaG9sZGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubm9kZSxcbiAgICBQcm9wVHlwZXMuZnVuY1xuICBdKSxcbiAgbW9kZTogUHJvcFR5cGVzLm9uZU9mKE9iamVjdC52YWx1ZXMoU0VMRUNUX01PREUpKSxcbiAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuICBub3RGb3VuZENvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9wdGlvbkZpbHRlclByb3A6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9wdGlvbkxhYmVsUHJvcDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNob3dTZWFyY2g6IFByb3BUeXBlcy5ib29sLFxuICBzaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0YWdzOiBQcm9wVHlwZXMuYm9vbCxcbiAgdG9rZW5TZXBhcmF0b3JzOiBQcm9wVHlwZXMuYXJyYXksXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5hcnJheVxuICBdKSxcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbkRlc2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uTW91c2VFbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uTW91c2VMZWF2ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uUG9wdXBTY3JvbGw6IFByb3BUeXBlcy5mdW5jLFxuICBvblNlYXJjaDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuY1xufSwgU2VsZWN0LnByb3BUeXBlcywge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS1NlbGVjdCBleHRlbmRzIEFudGRDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAuZGVmYXVsdFByb3BzLCBTZWxlY3QuT3B0aW9uLmRlZmF1bHRQcm9wcywgU2VsZWN0LmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IFNlbGVjdCxcbiAgICBkYXRhSWQ6IHVuZGVmaW5lZFxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCBTZWxlY3QuT3B0aW9uLnByb3BUeXBlcywgU2VsZWN0LnByb3BUeXBlcywge1xuICAgIGRhdGFJZDogUHJvcFR5cGVzLnN0cmluZ1xuICB9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS1NlbGVjdCc7XG4gICAgdGhpcy5oYW5kbGVTZWxlY3QgPSAodmFsdWUsIG9wdGlvbikgPT4ge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QgJiYgXy5pc0Z1bmN0aW9uKHRoaXMucHJvcHMub25TZWxlY3QpKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25TZWxlY3QodmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5za1ZhbCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBvcHRpb25NYXAoc2VsZWN0T3B0aW9uKSB7XG4gICAgcmV0dXJuICg8U2VsZWN0Lk9wdGlvbiBrZXk9e3NlbGVjdE9wdGlvbi5pZH0+e3NlbGVjdE9wdGlvbi50ZXh0fTwvU2VsZWN0Lk9wdGlvbj4pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZywgZGF0YUlkfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoQ29tcFRhZyl9XG4gICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5oYW5kbGVTZWxlY3R9XG4gICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5za1ZhbCgpfT5cbiAgICAgICAge2RhdGFJZCA/IHRoaXMuc2tNb2RlbCgpLnNrVmFsKGRhdGFJZCkubWFwKChzZWxlY3RPcHRpb24pID0+IHtcbiAgICAgICAgICByZXR1cm4gU0tTZWxlY3Qub3B0aW9uTWFwKHNlbGVjdE9wdGlvbik7XG4gICAgICAgIH0pIDogdGhpcy5za1RyYW5zUHJvcHMyQ2hpbGQoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG59XG4iXX0=