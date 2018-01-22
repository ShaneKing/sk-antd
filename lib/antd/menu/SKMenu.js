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

var _skReact = require('sk-react');

var _OriginMenu = require('./OriginMenu');

var _OriginMenu2 = _interopRequireDefault(_OriginMenu);

var _SKMenuItem = require('./SKMenuItem');

var _SKMenuItem2 = _interopRequireDefault(_SKMenuItem);

var _SKSubMenu = require('./SKSubMenu');

var _SKSubMenu2 = _interopRequireDefault(_SKSubMenu);

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

var _SKIcon = require('../icon/SKIcon');

var _SKIcon2 = _interopRequireDefault(_SKIcon);

var _Const = require('../../Const');

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
              _skReact.SKLink,
              _extends({}, this.skTransProps2Self(_skReact.SKLink), { to: itemInfo.router }),
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

SKMenu.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _SKMenuItem2.default.defaultProps, _SKSubMenu2.default.defaultProps, _OriginMenu2.default.defaultProps, {
  compTag: _menu2.default,
  dataId: undefined,
  displayItem: function displayItem(itemInfo) {
    return true;
  }
});
SKMenu.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _SKMenuItem2.default.propTypes, _SKSubMenu2.default.propTypes, _OriginMenu2.default.propTypes, {
  dataId: _propTypes2.default.string,
  displayItem: _propTypes2.default.func
});
exports.default = SKMenu;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvbWVudS9TS01lbnUuanMiXSwibmFtZXMiOlsiU0tNZW51IiwiYXJncyIsImNvbXBOYW1lIiwiaGFuZGxlQ2xpY2siLCJjbGlja0luZm8iLCJwcm9wcyIsIm9uQ2xpY2siLCJpc0Z1bmN0aW9uIiwibmV3VmFsIiwiY2xvbmUiLCJza1ZhbCIsInNlbGVjdGVkS2V5cyIsImtleSIsImhhbmRsZU9wZW5DaGFuZ2UiLCJvcGVuS2V5cyIsIm9uT3BlbkNoYW5nZSIsInNsaWNlIiwiaXRlbUluZm8iLCJkaXNwbGF5SXRlbSIsImRhdGFJZCIsIm1vZGUiLCJtZW51Q2ZncyIsInNrTW9kZWwiLCJkaXNwbGF5VGl0bGUiLCJJbmxpbmUiLCJpbmRleE9mIiwicnRuQ2ZncyIsImNoaWxkcmVuIiwiaXNFbXB0eSIsInB1c2giLCJza1RyYW5zUHJvcHMyU2VsZiIsInJvdXRlciIsImljb24iLCJ0aXRsZSIsIm1hcCIsIm1lbnVNYXAiLCJiaW5kIiwiQ29tcFRhZyIsImNvbXBUYWciLCJ0aGVtZSIsIiRpdGVtSW5mbyIsInNrVHJhbnNQcm9wczJDaGlsZCIsImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsInVuZGVmaW5lZCIsInByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLE07OztBQWFuQixvQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsMklBQ1ZBLElBRFU7O0FBRW5CLFVBQUtDLFFBQUwsR0FBZ0IsUUFBaEI7QUFDQSxVQUFLQyxXQUFMLEdBQW1CLFVBQUNDLFNBQUQsRUFBZTtBQUNoQyxVQUFJLE1BQUtDLEtBQUwsQ0FBV0MsT0FBWCxJQUFzQixpQkFBRUMsVUFBRixDQUFhLE1BQUtG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LGlCQUFMLENBQXVCTyxPQUF2QixDQUFiO0FBQ1MsZ0JBQU1qQixJQURmO0FBRVMsbUJBQVMsS0FBS2pCLFdBRnZCO0FBR1Msd0JBQWMsS0FBS1UsZ0JBSDVCO0FBSVMsb0JBQVUsS0FBS0gsS0FBTCxHQUFhSSxRQUpoQztBQUtTLHdCQUFjLEtBQUtKLEtBQUwsR0FBYUMsWUFMcEM7QUFNUyxpQkFBTzRCLEtBTmhCO0FBT0dwQixpQkFBUyxLQUFLRyxPQUFMLEdBQWVaLEtBQWYsQ0FBcUJTLE1BQXJCLEVBQTZCZSxHQUE3QixDQUFpQyxVQUFDTSxTQUFELEVBQWU7QUFDeEQsaUJBQU8sT0FBS0wsT0FBTCxDQUFhSyxTQUFiLENBQVA7QUFDRCxTQUZTLENBQVQsR0FFSSxLQUFLQyxrQkFBTDtBQVRQLE9BREY7QUFhRDs7Ozs7O0FBbEZrQnpDLE0sQ0FDWjBDLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRCxZQUF2QixFQUFxQyxxQkFBV0EsWUFBaEQsRUFBOEQsb0JBQVVBLFlBQXhFLEVBQXNGLHFCQUFXQSxZQUFqRyxFQUErRztBQUNuSUoseUJBRG1JO0FBRW5JbkIsVUFBUXlCLFNBRjJIO0FBR25JMUIsZUFBYSxxQkFBQ0QsUUFBRCxFQUFjO0FBQ3pCLFdBQU8sSUFBUDtBQUNEO0FBTGtJLENBQS9HLEM7QUFESGpCLE0sQ0FRWjZDLFMsR0FBWSxTQUFHRixNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRSxTQUF2QixFQUFrQyxxQkFBV0EsU0FBN0MsRUFBd0Qsb0JBQVVBLFNBQWxFLEVBQTZFLHFCQUFXQSxTQUF4RixFQUFtRztBQUNwSDFCLFVBQVEsb0JBQVUyQixNQURrRztBQUVwSDVCLGVBQWEsb0JBQVU2QjtBQUY2RixDQUFuRyxDO2tCQVJBL0MsTSIsImZpbGUiOiJhbnRkL21lbnUvU0tNZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNZW51fSBmcm9tICdhbnRkJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCB7U0tMaW5rfSBmcm9tICdzay1yZWFjdCc7XG5pbXBvcnQgT3JpZ2luTWVudSBmcm9tICcuL09yaWdpbk1lbnUnO1xuaW1wb3J0IFNLTWVudUl0ZW0gZnJvbSAnLi9TS01lbnVJdGVtJztcbmltcG9ydCBTS1N1Yk1lbnUgZnJvbSAnLi9TS1N1Yk1lbnUnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcbmltcG9ydCBTS0ljb24gZnJvbSAnLi4vaWNvbi9TS0ljb24nO1xuaW1wb3J0IHtEaXJ9IGZyb20gJy4uLy4uL0NvbnN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tNZW51IGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5kZWZhdWx0UHJvcHMsIFNLTWVudUl0ZW0uZGVmYXVsdFByb3BzLCBTS1N1Yk1lbnUuZGVmYXVsdFByb3BzLCBPcmlnaW5NZW51LmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IE1lbnUsXG4gICAgZGF0YUlkOiB1bmRlZmluZWQsXG4gICAgZGlzcGxheUl0ZW06IChpdGVtSW5mbykgPT4ge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5wcm9wVHlwZXMsIFNLTWVudUl0ZW0ucHJvcFR5cGVzLCBTS1N1Yk1lbnUucHJvcFR5cGVzLCBPcmlnaW5NZW51LnByb3BUeXBlcywge1xuICAgIGRhdGFJZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNwbGF5SXRlbTogUHJvcFR5cGVzLmZ1bmNcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tNZW51JztcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gKGNsaWNrSW5mbykgPT4ge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25DbGljayAmJiBfLmlzRnVuY3Rpb24odGhpcy5wcm9wcy5vbkNsaWNrKSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2soY2xpY2tJbmZvKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBuZXdWYWwgPSBfLmNsb25lKHRoaXMuc2tWYWwoKSk7XG4gICAgICAgIC8vIG5ld1ZhbC5vcGVuS2V5cyA9IHRoaXMuc2tWYWwoKS5vcGVuS2V5cztcbiAgICAgICAgbmV3VmFsLnNlbGVjdGVkS2V5cyA9IFtjbGlja0luZm8ua2V5XTtcbiAgICAgICAgdGhpcy5za1ZhbChuZXdWYWwpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVPcGVuQ2hhbmdlID0gKG9wZW5LZXlzKSA9PiB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbk9wZW5DaGFuZ2UgJiYgXy5pc0Z1bmN0aW9uKHRoaXMucHJvcHMub25PcGVuQ2hhbmdlKSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uT3BlbkNoYW5nZShvcGVuS2V5cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgbmV3VmFsID0gXy5jbG9uZSh0aGlzLnNrVmFsKCkpO1xuICAgICAgICBuZXdWYWwub3BlbktleXMgPSBvcGVuS2V5cy5zbGljZSgwKTtcbiAgICAgICAgdGhpcy5za1ZhbChuZXdWYWwpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBtZW51TWFwKGl0ZW1JbmZvKSB7XG4gICAgbGV0IHtkaXNwbGF5SXRlbSwgZGF0YUlkLCBtb2RlfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IG1lbnVDZmdzID0gdGhpcy5za01vZGVsKCkuc2tWYWwoZGF0YUlkKTtcblxuICAgIGxldCBkaXNwbGF5VGl0bGUgPSAoKG1vZGUgPT09IERpci5JbmxpbmUpIHx8IG1lbnVDZmdzLmluZGV4T2YoaXRlbUluZm8pID09PSAtMSk7XG4gICAgbGV0IHJ0bkNmZ3MgPSBbXTtcblxuICAgIGlmIChpdGVtSW5mby5jaGlsZHJlbiAmJiAhXy5pc0VtcHR5KGl0ZW1JbmZvLmNoaWxkcmVuKSkge1xuICAgICAgcnRuQ2Zncy5wdXNoKDxTS1N1Yk1lbnUgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoU0tTdWJNZW51KX0ga2V5PXtpdGVtSW5mby5yb3V0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRNZW51PXt0aGlzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U0tJY29uIHR5cGU9e2l0ZW1JbmZvLmljb259Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2Rpc3BsYXlUaXRsZSAmJiBpdGVtSW5mby50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+fT5cbiAgICAgICAge2l0ZW1JbmZvLmNoaWxkcmVuLm1hcCh0aGlzLm1lbnVNYXAuYmluZCh0aGlzKSl9XG4gICAgICA8L1NLU3ViTWVudT4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZGlzcGxheUl0ZW0gJiYgZGlzcGxheUl0ZW0oaXRlbUluZm8pKSB7XG4gICAgICAgIHJ0bkNmZ3MucHVzaCg8U0tNZW51SXRlbSB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihTS01lbnVJdGVtKX0ga2V5PXtpdGVtSW5mby5yb3V0ZXJ9IHBhcmVudE1lbnU9e3RoaXN9PlxuICAgICAgICAgIDxTS0xpbmsgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoU0tMaW5rKX0gdG89e2l0ZW1JbmZvLnJvdXRlcn0+XG4gICAgICAgICAgICB7aXRlbUluZm8uaWNvbiAmJiA8U0tJY29uIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKFNLSWNvbil9IHR5cGU9e2l0ZW1JbmZvLmljb259Lz59XG4gICAgICAgICAgICB7ZGlzcGxheVRpdGxlICYmIGl0ZW1JbmZvLnRpdGxlfVxuICAgICAgICAgIDwvU0tMaW5rPlxuICAgICAgICA8L1NLTWVudUl0ZW0+KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJ0bkNmZ3M7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnLCBkYXRhSWQsIG1vZGUsIHRoZW1lfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoQ29tcFRhZyl9XG4gICAgICAgICAgICAgICBtb2RlPXttb2RlfVxuICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgIG9uT3BlbkNoYW5nZT17dGhpcy5oYW5kbGVPcGVuQ2hhbmdlfVxuICAgICAgICAgICAgICAgb3BlbktleXM9e3RoaXMuc2tWYWwoKS5vcGVuS2V5c31cbiAgICAgICAgICAgICAgIHNlbGVjdGVkS2V5cz17dGhpcy5za1ZhbCgpLnNlbGVjdGVkS2V5c31cbiAgICAgICAgICAgICAgIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIHtkYXRhSWQgPyB0aGlzLnNrTW9kZWwoKS5za1ZhbChkYXRhSWQpLm1hcCgoJGl0ZW1JbmZvKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubWVudU1hcCgkaXRlbUluZm8pO1xuICAgICAgICB9KSA6IHRoaXMuc2tUcmFuc1Byb3BzMkNoaWxkKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxufVxuIl19