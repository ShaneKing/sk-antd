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

var _Comp2 = require('../../utils/Comp');

var _Comp3 = _interopRequireDefault(_Comp2);

var _Const = require('../../utils/Const');

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
    value: function handleOpenChange(es) {
      if (this.props.onOpenChange && _lodash2.default.isFunction(this.props.onOpenChange)) {
        this.props.onOpenChange(es);
      } else {
        var newVal = _lodash2.default.clone(this.skVal());
        newVal.openKeys = es.slice(0);
        this.skVal(newVal);
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      if (this.props.onClick && _lodash2.default.isFunction(this.props.onClick)) {
        this.props.onClick(e);
      } else {
        var newVal = _lodash2.default.clone(this.skVal());
        // newVal.openKeys = this.skVal().openKeys;
        newVal.selectedKeys = [e.key];
        this.skVal(newVal);
      }
    }
  }, {
    key: 'menuMap',
    value: function menuMap(menuCfg) {
      var _props = this.props,
          displayItem = _props.displayItem,
          menuCfgs = _props.menuCfgs,
          mode = _props.mode;


      var displayTitle = mode == _Const.Dir.Inline || menuCfgs.indexOf(menuCfg) == -1;
      var rtnCfgs = [];

      if (menuCfg.children && !_lodash2.default.isEmpty(menuCfg.children)) {
        rtnCfgs.push(_react2.default.createElement(
          _SKSubMenu2.default,
          { key: menuCfg.router, title: _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement(_SKIcon2.default, { type: menuCfg.icon }),
              _react2.default.createElement(
                'span',
                null,
                displayTitle && menuCfg.title
              )
            ) },
          menuCfg.children.map(this.menuMap.bind(this))
        ));
      } else {
        if (displayItem && displayItem(menuCfg)) {
          rtnCfgs.push(_react2.default.createElement(
            _SKMenuItem2.default,
            { key: menuCfg.router },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: menuCfg.router },
              menuCfg.icon && _react2.default.createElement(_SKIcon2.default, { type: menuCfg.icon }),
              displayTitle && menuCfg.title
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
          menuCfgs = _props2.menuCfgs,
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
        menuCfgs ? menuCfgs.map(function (menuCfg) {
          return _this2.menuMap(menuCfg);
        }) : this.skPropsTrans()
      );
    }
  }]);

  return SKMenu;
}(_Comp3.default);

SKMenu.defaultProps = _skJs2.default.assign({}, _menu2.default.defaultProps, {
  compTag: _menu2.default,
  displayItem: function displayItem() {
    return true;
  },
  displayTitle: true
});
SKMenu.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _SKMenuItem2.default.propTypes, _SKSubMenu2.default.propTypes, _menu2.default.propTypes, {
  displayItem: _react2.default.PropTypes.func,
  displayTitle: _react2.default.PropTypes.bool
});
exports.default = SKMenu;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FudGQvU0tNZW51LmpzIl0sIm5hbWVzIjpbInByb3BUeXBlcyIsImFzc2lnbiIsImlubGluZUluZGVudCIsIlByb3BUeXBlcyIsIm51bWJlciIsIm9uQ2xpY2siLCJmdW5jIiwib25PcGVuQ2hhbmdlIiwibGV2ZWwiLCJkZWZhdWx0UHJvcHMiLCJTS01lbnUiLCJhcmdzIiwiZXMiLCJwcm9wcyIsImlzRnVuY3Rpb24iLCJuZXdWYWwiLCJjbG9uZSIsInNrVmFsIiwib3BlbktleXMiLCJzbGljZSIsImUiLCJzZWxlY3RlZEtleXMiLCJrZXkiLCJtZW51Q2ZnIiwiZGlzcGxheUl0ZW0iLCJtZW51Q2ZncyIsIm1vZGUiLCJkaXNwbGF5VGl0bGUiLCJJbmxpbmUiLCJpbmRleE9mIiwicnRuQ2ZncyIsImNoaWxkcmVuIiwiaXNFbXB0eSIsInB1c2giLCJyb3V0ZXIiLCJpY29uIiwidGl0bGUiLCJtYXAiLCJtZW51TWFwIiwiYmluZCIsIkNvbXBUYWciLCJjb21wVGFnIiwidGhlbWUiLCJjb21wVmFsaWRQcm9wcyIsImhhbmRsZUNsaWNrIiwiaGFuZGxlT3BlbkNoYW5nZSIsInNrUHJvcHNUcmFucyIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsZUFBS0EsU0FBTCxHQUFpQixlQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLGVBQUtELFNBQW5CLEVBQThCO0FBQzdDRSxnQkFBYyxnQkFBTUMsU0FBTixDQUFnQkMsTUFEZTtBQUU3Q0MsV0FBUyxnQkFBTUYsU0FBTixDQUFnQkcsSUFGb0I7QUFHN0NDLGdCQUFjLGdCQUFNSixTQUFOLENBQWdCRztBQUhlLENBQTlCLEVBSWQ7QUFDREUsU0FBTyxnQkFBTUwsU0FBTixDQUFnQkM7QUFEdEIsQ0FKYyxDQUFqQjs7QUFRQSxlQUFLSyxZQUFMLEdB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QyxlQUFEO0FBQUEscUJBQWEsS0FBS0MsY0FBTCxDQUFvQkgsT0FBcEIsQ0FBYjtBQUNFLGdCQUFNZCxJQURSO0FBRUUsbUJBQVMsS0FBS2tCLFdBQUwsQ0FBaUJMLElBQWpCLENBQXNCLElBQXRCLENBRlg7QUFHRSx3QkFBYyxLQUFLTSxnQkFBTCxDQUFzQk4sSUFBdEIsQ0FBMkIsSUFBM0IsQ0FIaEI7QUFJRSxvQkFBVSxLQUFLdEIsS0FBTCxHQUFhQyxRQUp6QjtBQUtFLHdCQUFjLEtBQUtELEtBQUwsR0FBYUksWUFMN0I7QUFNRSxpQkFBT3FCLEtBTlQ7QUFPR2pCLG1CQUFXQSxTQUFTWSxHQUFULENBQWEsVUFBQ2QsT0FBRCxFQUFhO0FBQ3BDLGlCQUFPLE9BQUtlLE9BQUwsQ0FBYWYsT0FBYixDQUFQO0FBQ0QsU0FGVyxDQUFYLEdBRUksS0FBS3VCLFlBQUw7QUFUUCxPQURGO0FBYUQ7Ozs7OztBQTdFa0JwQyxNLENBQ1pELFksR0FBZSxlQUFHUixNQUFILENBQVUsRUFBVixFQUFjLGVBQUtRLFlBQW5CLEVBQWlDO0FBQ3JEZ0MseUJBRHFEO0FBRXJEakIsZUFBYSx1QkFBTTtBQUNqQixXQUFPLElBQVA7QUFDRCxHQUpvRDtBQUtyREcsZ0JBQWM7QUFMdUMsQ0FBakMsQztBQURIakIsTSxDQVFaVixTLEdBQVksZUFBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxlQUFLRCxTQUFuQixFQUE4QixxQkFBV0EsU0FBekMsRUFBb0Qsb0JBQVVBLFNBQTlELEVBQXlFLGVBQUtBLFNBQTlFLEVBQXlGO0FBQzFHd0IsZUFBYSxnQkFBTXJCLFNBQU4sQ0FBZ0JHLElBRDZFO0FBRTFHcUIsZ0JBQWMsZ0JBQU14QixTQUFOLENBQWdCNEM7QUFGNEUsQ0FBekYsQztrQkFSQXJDLE0iLCJmaWxlIjoiY29tcHMvYW50ZC9TS01lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01lbnV9IGZyb20gJ2FudGQnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgU0sgZnJvbSAnc2stanMnO1xuaW1wb3J0IENvbXAgZnJvbSAnLi4vLi4vdXRpbHMvQ29tcCc7XG5pbXBvcnQge0Rpcn0gZnJvbSAnLi4vLi4vdXRpbHMvQ29uc3QnO1xuaW1wb3J0IFNLSWNvbiBmcm9tICcuL1NLSWNvbic7XG5pbXBvcnQgU0tNZW51SXRlbSBmcm9tICcuL1NLTWVudUl0ZW0nO1xuaW1wb3J0IFNLU3ViTWVudSBmcm9tICcuL1NLU3ViTWVudSc7XG5cbk1lbnUucHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBNZW51LnByb3BUeXBlcywge1xuICBpbmxpbmVJbmRlbnQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIG9uQ2xpY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBvbk9wZW5DaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG59LCB7XG4gIGxldmVsOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyXG59KTtcblxuTWVudS5kZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIE1lbnUuZGVmYXVsdFByb3BzLCB7XG4gIGlubGluZUluZGVudDogMjRcbn0sIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tNZW51IGV4dGVuZHMgQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIE1lbnUuZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogTWVudSxcbiAgICBkaXNwbGF5SXRlbTogKCkgPT4ge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9LFxuICAgIGRpc3BsYXlUaXRsZTogdHJ1ZVxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQ29tcC5wcm9wVHlwZXMsIFNLTWVudUl0ZW0ucHJvcFR5cGVzLCBTS1N1Yk1lbnUucHJvcFR5cGVzLCBNZW51LnByb3BUeXBlcywge1xuICAgIGRpc3BsYXlJdGVtOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBkaXNwbGF5VGl0bGU6IFJlYWN0LlByb3BUeXBlcy5ib29sXG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxuXG4gIGhhbmRsZU9wZW5DaGFuZ2UoZXMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbk9wZW5DaGFuZ2UgJiYgXy5pc0Z1bmN0aW9uKHRoaXMucHJvcHMub25PcGVuQ2hhbmdlKSkge1xuICAgICAgdGhpcy5wcm9wcy5vbk9wZW5DaGFuZ2UoZXMpO1xuICAgIH1lbHNle1xuICAgICAgbGV0IG5ld1ZhbCA9IF8uY2xvbmUodGhpcy5za1ZhbCgpKTtcbiAgICAgIG5ld1ZhbC5vcGVuS2V5cyA9IGVzLnNsaWNlKDApO1xuICAgICAgdGhpcy5za1ZhbChuZXdWYWwpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrICYmIF8uaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uQ2xpY2spKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgfWVsc2V7XG4gICAgICBsZXQgbmV3VmFsID0gXy5jbG9uZSh0aGlzLnNrVmFsKCkpO1xuICAgICAgLy8gbmV3VmFsLm9wZW5LZXlzID0gdGhpcy5za1ZhbCgpLm9wZW5LZXlzO1xuICAgICAgbmV3VmFsLnNlbGVjdGVkS2V5cyA9IFtlLmtleV07XG4gICAgICB0aGlzLnNrVmFsKG5ld1ZhbCk7XG4gICAgfVxuICB9XG5cbiAgbWVudU1hcChtZW51Q2ZnKSB7XG4gICAgbGV0IHtkaXNwbGF5SXRlbSwgbWVudUNmZ3MsIG1vZGV9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBkaXNwbGF5VGl0bGUgPSAoKG1vZGUgPT0gRGlyLklubGluZSkgfHwgbWVudUNmZ3MuaW5kZXhPZihtZW51Q2ZnKSA9PSAtMSk7XG4gICAgbGV0IHJ0bkNmZ3MgPSBbXTtcblxuICAgIGlmIChtZW51Q2ZnLmNoaWxkcmVuICYmICFfLmlzRW1wdHkobWVudUNmZy5jaGlsZHJlbikpIHtcbiAgICAgIHJ0bkNmZ3MucHVzaCg8U0tTdWJNZW51IGtleT17bWVudUNmZy5yb3V0ZXJ9IHRpdGxlPXs8c3Bhbj48U0tJY29uIHR5cGU9e21lbnVDZmcuaWNvbn0gLz48c3Bhbj57ZGlzcGxheVRpdGxlICYmIG1lbnVDZmcudGl0bGV9PC9zcGFuPjwvc3Bhbj59PlxuICAgICAgICB7bWVudUNmZy5jaGlsZHJlbi5tYXAodGhpcy5tZW51TWFwLmJpbmQodGhpcykpfVxuICAgICAgPC9TS1N1Yk1lbnU+KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRpc3BsYXlJdGVtICYmIGRpc3BsYXlJdGVtKG1lbnVDZmcpKSB7XG4gICAgICAgIHJ0bkNmZ3MucHVzaCg8U0tNZW51SXRlbSBrZXk9e21lbnVDZmcucm91dGVyfT5cbiAgICAgICAgICA8TGluayB0bz17bWVudUNmZy5yb3V0ZXJ9PlxuICAgICAgICAgICAge21lbnVDZmcuaWNvbiAmJiA8U0tJY29uIHR5cGU9e21lbnVDZmcuaWNvbn0vPn1cbiAgICAgICAgICAgIHtkaXNwbGF5VGl0bGUgJiYgbWVudUNmZy50aXRsZX1cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvU0tNZW51SXRlbT4pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcnRuQ2ZncztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2NvbXBUYWc6IENvbXBUYWcsIG1lbnVDZmdzLCBtb2RlLCB0aGVtZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLmNvbXBWYWxpZFByb3BzKENvbXBUYWcpfVxuICAgICAgICBtb2RlPXttb2RlfVxuICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgIG9uT3BlbkNoYW5nZT17dGhpcy5oYW5kbGVPcGVuQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgIG9wZW5LZXlzPXt0aGlzLnNrVmFsKCkub3BlbktleXN9XG4gICAgICAgIHNlbGVjdGVkS2V5cz17dGhpcy5za1ZhbCgpLnNlbGVjdGVkS2V5c31cbiAgICAgICAgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAge21lbnVDZmdzID8gbWVudUNmZ3MubWFwKChtZW51Q2ZnKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubWVudU1hcChtZW51Q2ZnKTtcbiAgICAgICAgfSkgOiB0aGlzLnNrUHJvcHNUcmFucygpfVxuICAgICAgPC9Db21wVGFnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==