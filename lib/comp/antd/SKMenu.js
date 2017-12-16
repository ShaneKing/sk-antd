'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/menu/style');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _AntdComp2 = require('./AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

var _Const = require('../../util/Const');

var _SKIcon = require('./SKIcon');

var _SKIcon2 = _interopRequireDefault(_SKIcon);

var _SKMenuItem = require('./SKMenuItem');

var _SKMenuItem2 = _interopRequireDefault(_SKMenuItem);

var _SKSubMenu = require('./SKSubMenu');

var _SKSubMenu2 = _interopRequireDefault(_SKSubMenu);

var _SKLink = require('../react/SKLink');

var _SKLink2 = _interopRequireDefault(_SKLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_menu2.default.defaultProps = _skJs.SK.assign({}, {
  inlineIndent: 24,
  mode: _Const.MENU_MODE.Vertical,
  multiple: false,
  selectable: true,
  theme: _Const.THEME.Light,
  // onOpenChange: noop,
  subMenuOpenDelay: 0,
  subMenuCloseDelay: 0.1,
  forceSubMenuRender: false
}, _menu2.default.defaultProps, {});

_menu2.default.propTypes = _skJs.SK.assign({
  level: _propTypes2.default.number,
  parentMenu: _propTypes2.default.object
}, {
  defaultOpenKeys: _propTypes2.default.any,
  defaultSelectedKeys: _propTypes2.default.array,
  inlineCollapsed: _propTypes2.default.bool,
  inlineIndent: _propTypes2.default.number,
  mode: _propTypes2.default.oneOf(Object.values(_Const.MENU_MODE)),
  multiple: _propTypes2.default.bool,
  openKeys: _propTypes2.default.array,
  selectable: _propTypes2.default.bool,
  selectedKeys: _propTypes2.default.array,
  style: _propTypes2.default.object,
  theme: _propTypes2.default.oneOf(Object.values(_Const.THEME)),
  onClick: _propTypes2.default.func,
  onDeselect: _propTypes2.default.func,
  onOpenChange: _propTypes2.default.func,
  onSelect: _propTypes2.default.func,
  subMenuOpenDelay: _propTypes2.default.number,
  subMenuCloseDelay: _propTypes2.default.number,
  forceSubMenuRender: _propTypes2.default.bool
}, _menu2.default.propTypes, {});

var SKMenu = function (_AntdComp) {
  _inherits(SKMenu, _AntdComp);

  function SKMenu() {
    var _ref;

    _classCallCheck(this, SKMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKMenu.__proto__ || Object.getPrototypeOf(SKMenu)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKMenu';
    return _this;
  }

  _createClass(SKMenu, [{
    key: 'handleOpenChange',
    value: function handleOpenChange(openKeys) {
      if (this.props.onOpenChange && _lodash2.default.isFunction(this.props.onOpenChange)) {
        this.props.onOpenChange(openKeys);
      } else {
        var newVal = _lodash2.default.clone(this.skVal());
        newVal.openKeys = openKeys.slice(0);
        this.skVal(newVal);
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(clickInfo) {
      if (this.props.onClick && _lodash2.default.isFunction(this.props.onClick)) {
        this.props.onClick(clickInfo);
      } else {
        var newVal = _lodash2.default.clone(this.skVal());
        // newVal.openKeys = this.skVal().openKeys;
        newVal.selectedKeys = [clickInfo.key];
        this.skVal(newVal);
      }
    }
  }, {
    key: 'menuMap',
    value: function menuMap(itemInfo) {
      var _props = this.props,
          displayItem = _props.displayItem,
          dataId = _props.dataId,
          mode = _props.mode;

      var menuCfgs = this.skModel().skVal(dataId);

      var displayTitle = mode === _Const.Dir.Inline || menuCfgs.indexOf(itemInfo) === -1;
      var rtnCfgs = [];

      if (itemInfo.children && !_lodash2.default.isEmpty(itemInfo.children)) {
        rtnCfgs.push(_react2.default.createElement(
          _SKSubMenu2.default,
          _extends({}, this.skTransProps2Self(_SKSubMenu2.default), { key: itemInfo.router,
            parentMenu: this,
            title: _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement(_SKIcon2.default, { type: itemInfo.icon }),
              _react2.default.createElement(
                'span',
                null,
                displayTitle && itemInfo.title
              )
            ) }),
          itemInfo.children.map(this.menuMap.bind(this))
        ));
      } else {
        if (displayItem && displayItem(itemInfo)) {
          rtnCfgs.push(_react2.default.createElement(
            _SKMenuItem2.default,
            _extends({}, this.skTransProps2Self(_SKMenuItem2.default), { key: itemInfo.router, parentMenu: this }),
            _react2.default.createElement(
              _SKLink2.default,
              _extends({}, this.skTransProps2Self(_SKLink2.default), { to: itemInfo.router }),
              itemInfo.icon && _react2.default.createElement(_SKIcon2.default, _extends({}, this.skTransProps2Self(_SKIcon2.default), { type: itemInfo.icon })),
              displayTitle && itemInfo.title
            )
          ));
        }
      }
      return rtnCfgs;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          CompTag = _props2.compTag,
          dataId = _props2.dataId,
          mode = _props2.mode,
          theme = _props2.theme;


      return _react2.default.createElement(
        CompTag,
        _extends({}, this.skTransProps2Self(CompTag), {
          mode: mode,
          onClick: this.handleClick.bind(this),
          onOpenChange: this.handleOpenChange.bind(this),
          openKeys: this.skVal().openKeys,
          selectedKeys: this.skVal().selectedKeys,
          theme: theme }),
        dataId ? this.skModel().skVal(dataId).map(function ($itemInfo) {
          return _this2.menuMap($itemInfo);
        }) : this.skTransProps2Child()
      );
    }
  }]);

  return SKMenu;
}(_AntdComp3.default);

SKMenu.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _SKMenuItem2.default.defaultProps, _SKSubMenu2.default.defaultProps, _menu2.default.defaultProps, {
  compTag: _menu2.default,
  dataId: undefined,
  displayItem: function displayItem(itemInfo) {
    return true;
  }
});
SKMenu.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _SKMenuItem2.default.propTypes, _SKSubMenu2.default.propTypes, _menu2.default.propTypes, {
  dataId: _propTypes2.default.string,
  displayItem: _propTypes2.default.func
});
exports.default = SKMenu;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS01lbnUuanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwiaW5saW5lSW5kZW50IiwibW9kZSIsIlZlcnRpY2FsIiwibXVsdGlwbGUiLCJzZWxlY3RhYmxlIiwidGhlbWUiLCJMaWdodCIsInN1Yk1lbnVPcGVuRGVsYXkiLCJzdWJNZW51Q2xvc2VEZWxheSIsImZvcmNlU3ViTWVudVJlbmRlciIsInByb3BUeXBlcyIsImxldmVsIiwibnVtYmVyIiwicGFyZW50TWVudSIsIm9iamVjdCIsImRlZmF1bHRPcGVuS2V5cyIsImFueSIsImRlZmF1bHRTZWxlY3RlZEtleXMiLCJhcnJheSIsImlubGluZUNvbGxhcHNlZCIsImJvb2wiLCJvbmVPZiIsIk9iamVjdCIsInZhbHVlcyIsIm9wZW5LZXlzIiwic2VsZWN0ZWRLZXlzIiwic3R5bGUiLCJvbkNsaWNrIiwiZnVuYyIsIm9uRGVzZWxlY3QiLCJvbk9wZW5DaGFuZ2UiLCJvblNlbGVjdCIsIlNLTWVudSIsImFyZ3MiLCJjb21wTmFtZSIsInByb3BzIiwiaXNGdW5jdGlvbiIsIm5ld1ZhbCIsImNsb25lIiwic2tWYWwiLCJzbGljZSIsImNsaWNrSW5mbyIsImtleSIsIml0ZW1JbmZvIiwiZGlzcGxheUl0ZW0iLCJkYXRhSWQiLCJtZW51Q2ZncyIsInNrTW9kZWwiLCJkaXNwbGF5VGl0bGUiLCJJbmxpbmUiLCJpbmRleE9mIiwicnRuQ2ZncyIsImNoaWxkcmVuIiwiaXNFbXB0eSIsInB1c2giLCJza1RyYW5zUHJvcHMyU2VsZiIsInJvdXRlciIsImljb24iLCJ0aXRsZSIsIm1hcCIsIm1lbnVNYXAiLCJiaW5kIiwiQ29tcFRhZyIsImNvbXBUYWciLCJoYW5kbGVDbGljayIsImhhbmRsZU9wZW5DaGFuZ2UiLCIkaXRlbUluZm8iLCJza1RyYW5zUHJvcHMyQ2hpbGQiLCJ1bmRlZmluZWQiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNB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QixTLEdBQVksU0FBR1gsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU1csU0FBdkIsRUFBa0MscUJBQVdBLFNBQTdDLEVBQXdELG9CQUFVQSxTQUFsRSxFQUE2RSxlQUFLQSxTQUFsRixFQUE2RjtBQUM5R21DLFVBQVEsb0JBQVV3QixNQUQ0RjtBQUU5R3pCLGVBQWEsb0JBQVVoQjtBQUZ1RixDQUE3RixDO2tCQVJBSSxNIiwiZmlsZSI6ImNvbXAvYW50ZC9TS01lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01lbnV9IGZyb20gJ2FudGQnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4vQW50ZENvbXAnO1xuaW1wb3J0IHtEaXIsIE1FTlVfTU9ERSwgVEhFTUV9IGZyb20gJy4uLy4uL3V0aWwvQ29uc3QnO1xuaW1wb3J0IFNLSWNvbiBmcm9tICcuL1NLSWNvbic7XG5pbXBvcnQgU0tNZW51SXRlbSBmcm9tICcuL1NLTWVudUl0ZW0nO1xuaW1wb3J0IFNLU3ViTWVudSBmcm9tICcuL1NLU3ViTWVudSc7XG5pbXBvcnQgU0tMaW5rIGZyb20gJy4uL3JlYWN0L1NLTGluayc7XG5cbk1lbnUuZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCB7XG4gIGlubGluZUluZGVudDogMjQsXG4gIG1vZGU6IE1FTlVfTU9ERS5WZXJ0aWNhbCxcbiAgbXVsdGlwbGU6IGZhbHNlLFxuICBzZWxlY3RhYmxlOiB0cnVlLFxuICB0aGVtZTogVEhFTUUuTGlnaHQsXG4gIC8vIG9uT3BlbkNoYW5nZTogbm9vcCxcbiAgc3ViTWVudU9wZW5EZWxheTogMCxcbiAgc3ViTWVudUNsb3NlRGVsYXk6IDAuMSxcbiAgZm9yY2VTdWJNZW51UmVuZGVyOiBmYWxzZVxufSwgTWVudS5kZWZhdWx0UHJvcHMsIHt9KTtcblxuTWVudS5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe1xuICBsZXZlbDogUHJvcFR5cGVzLm51bWJlcixcbiAgcGFyZW50TWVudTogUHJvcFR5cGVzLm9iamVjdFxufSwge1xuICBkZWZhdWx0T3BlbktleXM6IFByb3BUeXBlcy5hbnksXG4gIGRlZmF1bHRTZWxlY3RlZEtleXM6IFByb3BUeXBlcy5hcnJheSxcbiAgaW5saW5lQ29sbGFwc2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgaW5saW5lSW5kZW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICBtb2RlOiBQcm9wVHlwZXMub25lT2YoT2JqZWN0LnZhbHVlcyhNRU5VX01PREUpKSxcbiAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuICBvcGVuS2V5czogUHJvcFR5cGVzLmFycmF5LFxuICBzZWxlY3RhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2VsZWN0ZWRLZXlzOiBQcm9wVHlwZXMuYXJyYXksXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICB0aGVtZTogUHJvcFR5cGVzLm9uZU9mKE9iamVjdC52YWx1ZXMoVEhFTUUpKSxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRGVzZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICBvbk9wZW5DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIHN1Yk1lbnVPcGVuRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIHN1Yk1lbnVDbG9zZURlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICBmb3JjZVN1Yk1lbnVSZW5kZXI6IFByb3BUeXBlcy5ib29sXG59LCBNZW51LnByb3BUeXBlcywge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS01lbnUgZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywgU0tNZW51SXRlbS5kZWZhdWx0UHJvcHMsIFNLU3ViTWVudS5kZWZhdWx0UHJvcHMsIE1lbnUuZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogTWVudSxcbiAgICBkYXRhSWQ6IHVuZGVmaW5lZCxcbiAgICBkaXNwbGF5SXRlbTogKGl0ZW1JbmZvKSA9PiB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLnByb3BUeXBlcywgU0tNZW51SXRlbS5wcm9wVHlwZXMsIFNLU3ViTWVudS5wcm9wVHlwZXMsIE1lbnUucHJvcFR5cGVzLCB7XG4gICAgZGF0YUlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpc3BsYXlJdGVtOiBQcm9wVHlwZXMuZnVuY1xuICB9KTtcblxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ1NLTWVudSc7XG4gIH1cblxuICBoYW5kbGVPcGVuQ2hhbmdlKG9wZW5LZXlzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25PcGVuQ2hhbmdlICYmIF8uaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uT3BlbkNoYW5nZSkpIHtcbiAgICAgIHRoaXMucHJvcHMub25PcGVuQ2hhbmdlKG9wZW5LZXlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG5ld1ZhbCA9IF8uY2xvbmUodGhpcy5za1ZhbCgpKTtcbiAgICAgIG5ld1ZhbC5vcGVuS2V5cyA9IG9wZW5LZXlzLnNsaWNlKDApO1xuICAgICAgdGhpcy5za1ZhbChuZXdWYWwpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGNsaWNrSW5mbykge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2sgJiYgXy5pc0Z1bmN0aW9uKHRoaXMucHJvcHMub25DbGljaykpIHtcbiAgICAgIHRoaXMucHJvcHMub25DbGljayhjbGlja0luZm8pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbmV3VmFsID0gXy5jbG9uZSh0aGlzLnNrVmFsKCkpO1xuICAgICAgLy8gbmV3VmFsLm9wZW5LZXlzID0gdGhpcy5za1ZhbCgpLm9wZW5LZXlzO1xuICAgICAgbmV3VmFsLnNlbGVjdGVkS2V5cyA9IFtjbGlja0luZm8ua2V5XTtcbiAgICAgIHRoaXMuc2tWYWwobmV3VmFsKTtcbiAgICB9XG4gIH1cblxuICBtZW51TWFwKGl0ZW1JbmZvKSB7XG4gICAgbGV0IHtkaXNwbGF5SXRlbSwgZGF0YUlkLCBtb2RlfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IG1lbnVDZmdzID0gdGhpcy5za01vZGVsKCkuc2tWYWwoZGF0YUlkKTtcblxuICAgIGxldCBkaXNwbGF5VGl0bGUgPSAoKG1vZGUgPT09IERpci5JbmxpbmUpIHx8IG1lbnVDZmdzLmluZGV4T2YoaXRlbUluZm8pID09PSAtMSk7XG4gICAgbGV0IHJ0bkNmZ3MgPSBbXTtcblxuICAgIGlmIChpdGVtSW5mby5jaGlsZHJlbiAmJiAhXy5pc0VtcHR5KGl0ZW1JbmZvLmNoaWxkcmVuKSkge1xuICAgICAgcnRuQ2Zncy5wdXNoKDxTS1N1Yk1lbnUgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoU0tTdWJNZW51KX0ga2V5PXtpdGVtSW5mby5yb3V0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRNZW51PXt0aGlzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U0tJY29uIHR5cGU9e2l0ZW1JbmZvLmljb259Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2Rpc3BsYXlUaXRsZSAmJiBpdGVtSW5mby50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+fT5cbiAgICAgICAge2l0ZW1JbmZvLmNoaWxkcmVuLm1hcCh0aGlzLm1lbnVNYXAuYmluZCh0aGlzKSl9XG4gICAgICA8L1NLU3ViTWVudT4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZGlzcGxheUl0ZW0gJiYgZGlzcGxheUl0ZW0oaXRlbUluZm8pKSB7XG4gICAgICAgIHJ0bkNmZ3MucHVzaCg8U0tNZW51SXRlbSB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihTS01lbnVJdGVtKX0ga2V5PXtpdGVtSW5mby5yb3V0ZXJ9IHBhcmVudE1lbnU9e3RoaXN9PlxuICAgICAgICAgIDxTS0xpbmsgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoU0tMaW5rKX0gdG89e2l0ZW1JbmZvLnJvdXRlcn0+XG4gICAgICAgICAgICB7aXRlbUluZm8uaWNvbiAmJiA8U0tJY29uIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKFNLSWNvbil9IHR5cGU9e2l0ZW1JbmZvLmljb259Lz59XG4gICAgICAgICAgICB7ZGlzcGxheVRpdGxlICYmIGl0ZW1JbmZvLnRpdGxlfVxuICAgICAgICAgIDwvU0tMaW5rPlxuICAgICAgICA8L1NLTWVudUl0ZW0+KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJ0bkNmZ3M7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnLCBkYXRhSWQsIG1vZGUsIHRoZW1lfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoQ29tcFRhZyl9XG4gICAgICAgICAgICAgICBtb2RlPXttb2RlfVxuICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgb25PcGVuQ2hhbmdlPXt0aGlzLmhhbmRsZU9wZW5DaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgIG9wZW5LZXlzPXt0aGlzLnNrVmFsKCkub3BlbktleXN9XG4gICAgICAgICAgICAgICBzZWxlY3RlZEtleXM9e3RoaXMuc2tWYWwoKS5zZWxlY3RlZEtleXN9XG4gICAgICAgICAgICAgICB0aGVtZT17dGhlbWV9PlxuICAgICAgICB7ZGF0YUlkID8gdGhpcy5za01vZGVsKCkuc2tWYWwoZGF0YUlkKS5tYXAoKCRpdGVtSW5mbykgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLm1lbnVNYXAoJGl0ZW1JbmZvKTtcbiAgICAgICAgfSkgOiB0aGlzLnNrVHJhbnNQcm9wczJDaGlsZCgpfVxuICAgICAgPC9Db21wVGFnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==