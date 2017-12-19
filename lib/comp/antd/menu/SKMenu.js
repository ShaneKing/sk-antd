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

var _SKMenuItem = require('./SKMenuItem');

var _SKMenuItem2 = _interopRequireDefault(_SKMenuItem);

var _SKSubMenu = require('./SKSubMenu');

var _SKSubMenu2 = _interopRequireDefault(_SKSubMenu);

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

var _SKIcon = require('../icon/SKIcon');

var _SKIcon2 = _interopRequireDefault(_SKIcon);

var _SKLink = require('../../react/SKLink');

var _SKLink2 = _interopRequireDefault(_SKLink);

var _Const = require('../../../util/Const');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
    _this.handleClick = function (clickInfo) {
      if (_this.props.onClick && _lodash2.default.isFunction(_this.props.onClick)) {
        _this.props.onClick(clickInfo);
      } else {
        var newVal = _lodash2.default.clone(_this.skVal());
        // newVal.openKeys = this.skVal().openKeys;
        newVal.selectedKeys = [clickInfo.key];
        _this.skVal(newVal);
      }
    };
    _this.handleOpenChange = function (openKeys) {
      if (_this.props.onOpenChange && _lodash2.default.isFunction(_this.props.onOpenChange)) {
        _this.props.onOpenChange(openKeys);
      } else {
        var newVal = _lodash2.default.clone(_this.skVal());
        newVal.openKeys = openKeys.slice(0);
        _this.skVal(newVal);
      }
    };
    return _this;
  }

  _createClass(SKMenu, [{
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
          onClick: this.handleClick,
          onOpenChange: this.handleOpenChange,
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

SKMenu.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, {
  compTag: _menu2.default,
  dataId: undefined,
  displayItem: function displayItem(itemInfo) {
    return true;
  }
});
SKMenu.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, {
  dataId: _propTypes2.default.string,
  displayItem: _propTypes2.default.func
});
exports.default = SKMenu;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9tZW51L1NLTWVudS5qcyJdLCJuYW1lcyI6WyJTS01lbnUiLCJhcmdzIiwiY29tcE5hbWUiLCJoYW5kbGVDbGljayIsImNsaWNrSW5mbyIsInByb3BzIiwib25DbGljayIsImlzRnVuY3Rpb24iLCJuZXdWYWwiLCJjbG9uZSIsInNrVmFsIiwic2VsZWN0ZWRLZXlzIiwia2V5IiwiaGFuZGxlT3BlbkNoYW5nZSIsIm9wZW5LZXlzIiwib25PcGVuQ2hhbmdlIiwic2xpY2UiLCJpdGVtSW5mbyIsImRpc3BsYXlJdGVtIiwiZGF0YUlkIiwibW9kZSIsIm1lbnVDZmdzIiwic2tNb2RlbCIsImRpc3BsYXlUaXRsZSIsIklubGluZSIsImluZGV4T2YiLCJydG5DZmdzIiwiY2hpbGRyZW4iLCJpc0VtcHR5IiwicHVzaCIsInNrVHJhbnNQcm9wczJTZWxmIiwicm91dGVyIiwiaWNvbiIsInRpdGxlIiwibWFwIiwibWVudU1hcCIsImJpbmQiLCJDb21wVGFnIiwiY29tcFRhZyIsInRoZW1lIiwiJGl0ZW1JbmZvIiwic2tUcmFuc1Byb3BzMkNoaWxkIiwiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwidW5kZWZpbmVkIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsTTs7O0FBYW5CLG9CQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSwySUFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixRQUFoQjtBQUNBLFVBQUtDLFdBQUwsR0FBbUIsVUFBQ0MsU0FBRCxFQUFlO0FBQ2hDLFVBQUksTUFBS0MsS0FBTCxDQUFXQyxPQUFYLElBQXNCLGlCQUFFQyxVQUFGLENBQWEsTUFBS0Ys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aUJBQUwsQ0FBdUJPLE9BQXZCLENBQWI7QUFDUyxnQkFBTWpCLElBRGY7QUFFUyxtQkFBUyxLQUFLakIsV0FGdkI7QUFHUyx3QkFBYyxLQUFLVSxnQkFINUI7QUFJUyxvQkFBVSxLQUFLSCxLQUFMLEdBQWFJLFFBSmhDO0FBS1Msd0JBQWMsS0FBS0osS0FBTCxHQUFhQyxZQUxwQztBQU1TLGlCQUFPNEIsS0FOaEI7QUFPR3BCLGlCQUFTLEtBQUtHLE9BQUwsR0FBZVosS0FBZixDQUFxQlMsTUFBckIsRUFBNkJlLEdBQTdCLENBQWlDLFVBQUNNLFNBQUQsRUFBZTtBQUN4RCxpQkFBTyxPQUFLTCxPQUFMLENBQWFLLFNBQWIsQ0FBUDtBQUNELFNBRlMsQ0FBVCxHQUVJLEtBQUtDLGtCQUFMO0FBVFAsT0FERjtBQWFEOzs7Ozs7QUFsRmtCekMsTSxDQUNaMEMsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNELFlBQXZCLEVBQXFDO0FBQ3pESix5QkFEeUQ7QUFFekRuQixVQUFReUIsU0FGaUQ7QUFHekQxQixlQUFhLHFCQUFDRCxRQUFELEVBQWM7QUFDekIsV0FBTyxJQUFQO0FBQ0Q7QUFMd0QsQ0FBckMsQztBQURIakIsTSxDQVFaNkMsUyxHQUFZLFNBQUdGLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNFLFNBQXZCLEVBQWtDO0FBQ25EMUIsVUFBUSxvQkFBVTJCLE1BRGlDO0FBRW5ENUIsZUFBYSxvQkFBVTZCO0FBRjRCLENBQWxDLEM7a0JBUkEvQyxNIiwiZmlsZSI6ImNvbXAvYW50ZC9tZW51L1NLTWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TWVudX0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1NLfSBmcm9tICdzay1qcyc7XG5pbXBvcnQgU0tNZW51SXRlbSBmcm9tICcuL1NLTWVudUl0ZW0nO1xuaW1wb3J0IFNLU3ViTWVudSBmcm9tICcuL1NLU3ViTWVudSc7XG5pbXBvcnQgQW50ZENvbXAgZnJvbSAnLi4vQW50ZENvbXAnO1xuaW1wb3J0IFNLSWNvbiBmcm9tICcuLi9pY29uL1NLSWNvbic7XG5pbXBvcnQgU0tMaW5rIGZyb20gJy4uLy4uL3JlYWN0L1NLTGluayc7XG5pbXBvcnQge0Rpcn0gZnJvbSAnLi4vLi4vLi4vdXRpbC9Db25zdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLTWVudSBleHRlbmRzIEFudGRDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAuZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogTWVudSxcbiAgICBkYXRhSWQ6IHVuZGVmaW5lZCxcbiAgICBkaXNwbGF5SXRlbTogKGl0ZW1JbmZvKSA9PiB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLnByb3BUeXBlcywge1xuICAgIGRhdGFJZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNwbGF5SXRlbTogUHJvcFR5cGVzLmZ1bmNcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tNZW51JztcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gKGNsaWNrSW5mbykgPT4ge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25DbGljayAmJiBfLmlzRnVuY3Rpb24odGhpcy5wcm9wcy5vbkNsaWNrKSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2soY2xpY2tJbmZvKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBuZXdWYWwgPSBfLmNsb25lKHRoaXMuc2tWYWwoKSk7XG4gICAgICAgIC8vIG5ld1ZhbC5vcGVuS2V5cyA9IHRoaXMuc2tWYWwoKS5vcGVuS2V5cztcbiAgICAgICAgbmV3VmFsLnNlbGVjdGVkS2V5cyA9IFtjbGlja0luZm8ua2V5XTtcbiAgICAgICAgdGhpcy5za1ZhbChuZXdWYWwpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVPcGVuQ2hhbmdlID0gKG9wZW5LZXlzKSA9PiB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbk9wZW5DaGFuZ2UgJiYgXy5pc0Z1bmN0aW9uKHRoaXMucHJvcHMub25PcGVuQ2hhbmdlKSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uT3BlbkNoYW5nZShvcGVuS2V5cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgbmV3VmFsID0gXy5jbG9uZSh0aGlzLnNrVmFsKCkpO1xuICAgICAgICBuZXdWYWwub3BlbktleXMgPSBvcGVuS2V5cy5zbGljZSgwKTtcbiAgICAgICAgdGhpcy5za1ZhbChuZXdWYWwpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBtZW51TWFwKGl0ZW1JbmZvKSB7XG4gICAgbGV0IHtkaXNwbGF5SXRlbSwgZGF0YUlkLCBtb2RlfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IG1lbnVDZmdzID0gdGhpcy5za01vZGVsKCkuc2tWYWwoZGF0YUlkKTtcblxuICAgIGxldCBkaXNwbGF5VGl0bGUgPSAoKG1vZGUgPT09IERpci5JbmxpbmUpIHx8IG1lbnVDZmdzLmluZGV4T2YoaXRlbUluZm8pID09PSAtMSk7XG4gICAgbGV0IHJ0bkNmZ3MgPSBbXTtcblxuICAgIGlmIChpdGVtSW5mby5jaGlsZHJlbiAmJiAhXy5pc0VtcHR5KGl0ZW1JbmZvLmNoaWxkcmVuKSkge1xuICAgICAgcnRuQ2Zncy5wdXNoKDxTS1N1Yk1lbnUgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoU0tTdWJNZW51KX0ga2V5PXtpdGVtSW5mby5yb3V0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRNZW51PXt0aGlzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U0tJY29uIHR5cGU9e2l0ZW1JbmZvLmljb259Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2Rpc3BsYXlUaXRsZSAmJiBpdGVtSW5mby50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+fT5cbiAgICAgICAge2l0ZW1JbmZvLmNoaWxkcmVuLm1hcCh0aGlzLm1lbnVNYXAuYmluZCh0aGlzKSl9XG4gICAgICA8L1NLU3ViTWVudT4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZGlzcGxheUl0ZW0gJiYgZGlzcGxheUl0ZW0oaXRlbUluZm8pKSB7XG4gICAgICAgIHJ0bkNmZ3MucHVzaCg8U0tNZW51SXRlbSB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihTS01lbnVJdGVtKX0ga2V5PXtpdGVtSW5mby5yb3V0ZXJ9IHBhcmVudE1lbnU9e3RoaXN9PlxuICAgICAgICAgIDxTS0xpbmsgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoU0tMaW5rKX0gdG89e2l0ZW1JbmZvLnJvdXRlcn0+XG4gICAgICAgICAgICB7aXRlbUluZm8uaWNvbiAmJiA8U0tJY29uIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKFNLSWNvbil9IHR5cGU9e2l0ZW1JbmZvLmljb259Lz59XG4gICAgICAgICAgICB7ZGlzcGxheVRpdGxlICYmIGl0ZW1JbmZvLnRpdGxlfVxuICAgICAgICAgIDwvU0tMaW5rPlxuICAgICAgICA8L1NLTWVudUl0ZW0+KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJ0bkNmZ3M7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnLCBkYXRhSWQsIG1vZGUsIHRoZW1lfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoQ29tcFRhZyl9XG4gICAgICAgICAgICAgICBtb2RlPXttb2RlfVxuICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgIG9uT3BlbkNoYW5nZT17dGhpcy5oYW5kbGVPcGVuQ2hhbmdlfVxuICAgICAgICAgICAgICAgb3BlbktleXM9e3RoaXMuc2tWYWwoKS5vcGVuS2V5c31cbiAgICAgICAgICAgICAgIHNlbGVjdGVkS2V5cz17dGhpcy5za1ZhbCgpLnNlbGVjdGVkS2V5c31cbiAgICAgICAgICAgICAgIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIHtkYXRhSWQgPyB0aGlzLnNrTW9kZWwoKS5za1ZhbChkYXRhSWQpLm1hcCgoJGl0ZW1JbmZvKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubWVudU1hcCgkaXRlbUluZm8pO1xuICAgICAgICB9KSA6IHRoaXMuc2tUcmFuc1Byb3BzMkNoaWxkKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxufVxuIl19