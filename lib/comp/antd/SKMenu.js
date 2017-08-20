'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style2 = require('antd/lib/menu/style');

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _skJs = require('sk-js');

var _skJs2 = _interopRequireDefault(_skJs);

var _Comp2 = require('../../util/Comp');

var _Comp3 = _interopRequireDefault(_Comp2);

var _Const = require('../../util/Const');

var _SKIcon = require('./SKIcon');

var _SKIcon2 = _interopRequireDefault(_SKIcon);

var _SKMenuItem = require('./SKMenuItem');

var _SKMenuItem2 = _interopRequireDefault(_SKMenuItem);

var _SKSubMenu = require('./SKSubMenu');

var _SKSubMenu2 = _interopRequireDefault(_SKSubMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_menu2.default.propTypes = _skJs2.default.assign({}, _menu2.default.propTypes, {
  inlineIndent: _react2.default.PropTypes.number,
  onClick: _react2.default.PropTypes.func,
  onOpenChange: _react2.default.PropTypes.func
}, {
  level: _react2.default.PropTypes.number
});

_menu2.default.defaultProps = _skJs2.default.assign({}, _menu2.default.defaultProps, {
  inlineIndent: 24
}, {});

var SKMenu = function (_Comp) {
  _inherits(SKMenu, _Comp);

  function SKMenu() {
    var _ref;

    _classCallCheck(this, SKMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = SKMenu.__proto__ || Object.getPrototypeOf(SKMenu)).call.apply(_ref, [this].concat(args)));
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

      var menuCfgs = this.iModel().skVal(dataId);

      var displayTitle = mode == _Const.Dir.Inline || menuCfgs.indexOf(itemInfo) == -1;
      var rtnCfgs = [];

      if (itemInfo.children && !_lodash2.default.isEmpty(itemInfo.children)) {
        rtnCfgs.push(_react2.default.createElement(
          _SKSubMenu2.default,
          { key: itemInfo.router,
            title: _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement(_SKIcon2.default, { type: itemInfo.icon }),
              _react2.default.createElement(
                'span',
                null,
                displayTitle && itemInfo.title
              )
            ) },
          itemInfo.children.map(this.menuMap.bind(this))
        ));
      } else {
        if (displayItem && displayItem(itemInfo)) {
          rtnCfgs.push(_react2.default.createElement(
            _SKMenuItem2.default,
            { key: itemInfo.router },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: itemInfo.router },
              itemInfo.icon && _react2.default.createElement(_SKIcon2.default, { type: itemInfo.icon }),
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
        _extends({}, this.compValidProps(CompTag), {
          mode: mode,
          onClick: this.handleClick.bind(this),
          onOpenChange: this.handleOpenChange.bind(this),
          openKeys: this.skVal().openKeys,
          selectedKeys: this.skVal().selectedKeys,
          theme: theme }),
        dataId ? this.iModel().skVal(dataId).map(function ($itemInfo) {
          return _this2.menuMap($itemInfo);
        }) : this.skPropsTrans()
      );
    }
  }]);

  return SKMenu;
}(_Comp3.default);

SKMenu.defaultProps = _skJs2.default.assign({}, _menu2.default.defaultProps, {
  compTag: _menu2.default,
  dataId: undefined,
  displayItem: function displayItem(itemInfo) {
    return true;
  }
});
SKMenu.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _SKMenuItem2.default.propTypes, _SKSubMenu2.default.propTypes, _menu2.default.propTypes, {
  dataId: _react2.default.PropTypes.string,
  displayItem: _react2.default.PropTypes.func
});
exports.default = SKMenu;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS01lbnUuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwiYXNzaWduIiwiaW5saW5lSW5kZW50IiwiUHJvcFR5cGVzIiwibnVtYmVyIiwib25DbGljayIsImZ1bmMiLCJvbk9wZW5DaGFuZ2UiLCJsZXZlbCIsImRlZmF1bHRQcm9wcyIsIlNLTWVudSIsImFyZ3MiLCJvcGVuS2V5cyIsInByb3BzIiwiaXNGdW5jdGlvbiIsIm5ld1ZhbCIsImNsb25lIiwic2tWYWwiLCJzbGljZSIsImNsaWNrSW5mbyIsInNlbGVjdGVkS2V5cyIsImtleSIsIml0ZW1JbmZvIiwiZGlzcGxheUl0ZW0iLCJkYXRhSWQiLCJtb2RlIiwibWVudUNmZ3MiLCJpTW9kZWwiLCJkaXNwbGF5VGl0bGUiLCJJbmxpbmUiLCJpbmRleE9mIiwicnRuQ2ZncyIsImNoaWxkcmVuIiwiaXNFbXB0eSIsInB1c2giLCJyb3V0ZXIiLCJpY29uIiwidGl0bGUiLCJtYXAiLCJtZW51TWFwIiwiYmluZCIsIkNvbXBUYWciLCJjb21wVGFnIiwidGhlbWUiLCJjb21wVmFsaWRQcm9wcyIsImhhbmRsZUNsaWNrIiwiaGFuZGxlT3BlbkNoYW5nZSIsIiRpdGVtSW5mbyIsInNrUHJvcHNUcmFucyIsInVuZGVmaW5lZCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxlQUFLQSxTQUFMLEdBQWlCLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0QsU0FBbkIsRUFBOEI7QUFDN0NFLGdCQUFjLGdCQUFNQyxTQUFOLENBQWdCQyxNQURlO0FBRTdDQyxXQUFTLGdCQUFNRixTQUFOLENBQWdCRyxJQUZvQjtBQUc3Q0MsZ0JBQWMsZ0JBQU1KLFNBQU4sQ0FBZ0JHO0FBSGUsQ0FBOUIsRUFJZDtBQUNERSxTQUFPLGdCQUFNTCxT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QUY2RSxDQUF6RixDO2tCQVJBSSxNIiwiZmlsZSI6ImNvbXAvYW50ZC9TS01lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01lbnV9IGZyb20gJ2FudGQnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgU0sgZnJvbSAnc2stanMnO1xuaW1wb3J0IENvbXAgZnJvbSAnLi4vLi4vdXRpbC9Db21wJztcbmltcG9ydCB7RGlyfSBmcm9tICcuLi8uLi91dGlsL0NvbnN0JztcbmltcG9ydCBTS0ljb24gZnJvbSAnLi9TS0ljb24nO1xuaW1wb3J0IFNLTWVudUl0ZW0gZnJvbSAnLi9TS01lbnVJdGVtJztcbmltcG9ydCBTS1N1Yk1lbnUgZnJvbSAnLi9TS1N1Yk1lbnUnO1xuXG5NZW51LnByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgTWVudS5wcm9wVHlwZXMsIHtcbiAgaW5saW5lSW5kZW50OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICBvbkNsaWNrOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgb25PcGVuQ2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xufSwge1xuICBsZXZlbDogUmVhY3QuUHJvcFR5cGVzLm51bWJlclxufSk7XG5cbk1lbnUuZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBNZW51LmRlZmF1bHRQcm9wcywge1xuICBpbmxpbmVJbmRlbnQ6IDI0XG59LCB7fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLTWVudSBleHRlbmRzIENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBNZW51LmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IE1lbnUsXG4gICAgZGF0YUlkOiB1bmRlZmluZWQsXG4gICAgZGlzcGxheUl0ZW06IChpdGVtSW5mbykgPT4ge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBDb21wLnByb3BUeXBlcywgU0tNZW51SXRlbS5wcm9wVHlwZXMsIFNLU3ViTWVudS5wcm9wVHlwZXMsIE1lbnUucHJvcFR5cGVzLCB7XG4gICAgZGF0YUlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpc3BsYXlJdGVtOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xuICB9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gIH1cblxuICBoYW5kbGVPcGVuQ2hhbmdlKG9wZW5LZXlzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25PcGVuQ2hhbmdlICYmIF8uaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uT3BlbkNoYW5nZSkpIHtcbiAgICAgIHRoaXMucHJvcHMub25PcGVuQ2hhbmdlKG9wZW5LZXlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG5ld1ZhbCA9IF8uY2xvbmUodGhpcy5za1ZhbCgpKTtcbiAgICAgIG5ld1ZhbC5vcGVuS2V5cyA9IG9wZW5LZXlzLnNsaWNlKDApO1xuICAgICAgdGhpcy5za1ZhbChuZXdWYWwpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGNsaWNrSW5mbykge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2sgJiYgXy5pc0Z1bmN0aW9uKHRoaXMucHJvcHMub25DbGljaykpIHtcbiAgICAgIHRoaXMucHJvcHMub25DbGljayhjbGlja0luZm8pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbmV3VmFsID0gXy5jbG9uZSh0aGlzLnNrVmFsKCkpO1xuICAgICAgLy8gbmV3VmFsLm9wZW5LZXlzID0gdGhpcy5za1ZhbCgpLm9wZW5LZXlzO1xuICAgICAgbmV3VmFsLnNlbGVjdGVkS2V5cyA9IFtjbGlja0luZm8ua2V5XTtcbiAgICAgIHRoaXMuc2tWYWwobmV3VmFsKTtcbiAgICB9XG4gIH1cblxuICBtZW51TWFwKGl0ZW1JbmZvKSB7XG4gICAgbGV0IHtkaXNwbGF5SXRlbSwgZGF0YUlkLCBtb2RlfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IG1lbnVDZmdzID0gdGhpcy5pTW9kZWwoKS5za1ZhbChkYXRhSWQpO1xuXG4gICAgbGV0IGRpc3BsYXlUaXRsZSA9ICgobW9kZSA9PSBEaXIuSW5saW5lKSB8fCBtZW51Q2Zncy5pbmRleE9mKGl0ZW1JbmZvKSA9PSAtMSk7XG4gICAgbGV0IHJ0bkNmZ3MgPSBbXTtcblxuICAgIGlmIChpdGVtSW5mby5jaGlsZHJlbiAmJiAhXy5pc0VtcHR5KGl0ZW1JbmZvLmNoaWxkcmVuKSkge1xuICAgICAgcnRuQ2Zncy5wdXNoKDxTS1N1Yk1lbnUga2V5PXtpdGVtSW5mby5yb3V0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17PHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTS0ljb24gdHlwZT17aXRlbUluZm8uaWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2Rpc3BsYXlUaXRsZSAmJiBpdGVtSW5mby50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+fT5cbiAgICAgICAge2l0ZW1JbmZvLmNoaWxkcmVuLm1hcCh0aGlzLm1lbnVNYXAuYmluZCh0aGlzKSl9XG4gICAgICA8L1NLU3ViTWVudT4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZGlzcGxheUl0ZW0gJiYgZGlzcGxheUl0ZW0oaXRlbUluZm8pKSB7XG4gICAgICAgIHJ0bkNmZ3MucHVzaCg8U0tNZW51SXRlbSBrZXk9e2l0ZW1JbmZvLnJvdXRlcn0+XG4gICAgICAgICAgPExpbmsgdG89e2l0ZW1JbmZvLnJvdXRlcn0+XG4gICAgICAgICAgICB7aXRlbUluZm8uaWNvbiAmJiA8U0tJY29uIHR5cGU9e2l0ZW1JbmZvLmljb259Lz59XG4gICAgICAgICAgICB7ZGlzcGxheVRpdGxlICYmIGl0ZW1JbmZvLnRpdGxlfVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9TS01lbnVJdGVtPik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBydG5DZmdzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZywgZGF0YUlkLCBtb2RlLCB0aGVtZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLmNvbXBWYWxpZFByb3BzKENvbXBUYWcpfVxuICAgICAgICBtb2RlPXttb2RlfVxuICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgIG9uT3BlbkNoYW5nZT17dGhpcy5oYW5kbGVPcGVuQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgIG9wZW5LZXlzPXt0aGlzLnNrVmFsKCkub3BlbktleXN9XG4gICAgICAgIHNlbGVjdGVkS2V5cz17dGhpcy5za1ZhbCgpLnNlbGVjdGVkS2V5c31cbiAgICAgICAgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAge2RhdGFJZCA/IHRoaXMuaU1vZGVsKCkuc2tWYWwoZGF0YUlkKS5tYXAoKCRpdGVtSW5mbykgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLm1lbnVNYXAoJGl0ZW1JbmZvKTtcbiAgICAgICAgfSkgOiB0aGlzLnNrUHJvcHNUcmFucygpfVxuICAgICAgPC9Db21wVGFnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==