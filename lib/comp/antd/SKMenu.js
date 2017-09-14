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

var _SKLink = require('../react/SKLink');

var _SKLink2 = _interopRequireDefault(_SKLink);

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
          _extends({}, this.compValidProps(_SKSubMenu2.default), { key: itemInfo.router,
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
            _extends({}, this.compValidProps(_SKMenuItem2.default), { key: itemInfo.router }),
            _react2.default.createElement(
              _SKLink2.default,
              _extends({}, this.compValidProps(_SKLink2.default), { to: itemInfo.router }),
              itemInfo.icon && _react2.default.createElement(_SKIcon2.default, _extends({}, this.compValidProps(_SKIcon2.default), { type: itemInfo.icon })),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS01lbnUuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwiYXNzaWduIiwiaW5saW5lSW5kZW50IiwiUHJvcFR5cGVzIiwibnVtYmVyIiwib25DbGljayIsImZ1bmMiLCJvbk9wZW5DaGFuZ2UiLCJsZXZlbCIsImRlZmF1bHRQcm9wcyIsIlNLTWVudSIsImFyZ3MiLCJvcGVuS2V5cyIsInByb3BzIiwiaXNGdW5jdGlvbiIsIm5ld1ZhbCIsImNsb25lIiwic2tWYWwiLCJzbGljZSIsImNsaWNrSW5mbyIsInNlbGVjdGVkS2V5cyIsImtleSIsIml0ZW1JbmZvIiwiZGlzcGxheUl0ZW0iLCJkYXRhSWQiLCJtb2RlIiwibWVudUNmZ3MiLCJpTW9kZWwiLCJkaXNwbGF5VGl0bGUiLCJJbmxpbmUiLCJpbmRleE9mIiwicnRuQ2ZncyIsImNoaWxkcmVuIiwiaXNFbXB0eSIsInB1c2giLCJjb21wVmFsaWRQcm9wcyIsInJvdXRlciIsImljb24iLCJ0aXRsZSIsIm1hcCIsIm1lbnVNYXAiLCJiaW5kIiwiQ29tcFRhZyIsImNvbXBUYWciLCJ0aGVtZSIsImhhbmRsZUNsaWNrIiwiaGFuZGxlT3BlbkNoYW5nZSIsIiRpdGVtSW5mbyIsInNrUHJvcHNUcmFucyIsInVuZGVmaW5lZCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLGVBQUtBLFNBQUwsR0FBaUIsZUFBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxlQUFLRCxTQUFuQixFQUE4QjtBQUM3Q0UsZ0JBQWMsZ0JBQU1DLFNBQU4sQ0FBZ0JDLE1BRGU7QUFFN0NDLFdBQVMsZ0JBQU1GLFNBQU4sQ0FBZ0JHLElBRm9CO0FBRzdDQyxnQkFBYyxnQkFBTUosU0FBTixDQUFnQkc7QUFIZSxDQUE5QixFQUlkO0FBQ0RFLFNBQU8sZ0JBQU1M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QUE5RCxFQUF5RSxlQUFLQSxTQUE5RSxFQUF5RjtBQUMxR3dCLFVBQVEsZ0JBQU1yQixTQUFOLENBQWdCK0MsTUFEa0Y7QUFFMUczQixlQUFhLGdCQUFNcEIsU0FBTixDQUFnQkc7QUFGNkUsQ0FBekYsQztrQkFSQUksTSIsImZpbGUiOiJjb21wL2FudGQvU0tNZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNZW51fSBmcm9tICdhbnRkJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNLIGZyb20gJ3NrLWpzJztcbmltcG9ydCBDb21wIGZyb20gJy4uLy4uL3V0aWwvQ29tcCc7XG5pbXBvcnQge0Rpcn0gZnJvbSAnLi4vLi4vdXRpbC9Db25zdCc7XG5pbXBvcnQgU0tJY29uIGZyb20gJy4vU0tJY29uJztcbmltcG9ydCBTS01lbnVJdGVtIGZyb20gJy4vU0tNZW51SXRlbSc7XG5pbXBvcnQgU0tTdWJNZW51IGZyb20gJy4vU0tTdWJNZW51JztcbmltcG9ydCBTS0xpbmsgZnJvbSAnLi4vcmVhY3QvU0tMaW5rJztcblxuTWVudS5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIE1lbnUucHJvcFR5cGVzLCB7XG4gIGlubGluZUluZGVudDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgb25DbGljazogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIG9uT3BlbkNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbn0sIHtcbiAgbGV2ZWw6IFJlYWN0LlByb3BUeXBlcy5udW1iZXJcbn0pO1xuXG5NZW51LmRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgTWVudS5kZWZhdWx0UHJvcHMsIHtcbiAgaW5saW5lSW5kZW50OiAyNFxufSwge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS01lbnUgZXh0ZW5kcyBDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgTWVudS5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBNZW51LFxuICAgIGRhdGFJZDogdW5kZWZpbmVkLFxuICAgIGRpc3BsYXlJdGVtOiAoaXRlbUluZm8pID0+IHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQ29tcC5wcm9wVHlwZXMsIFNLTWVudUl0ZW0ucHJvcFR5cGVzLCBTS1N1Yk1lbnUucHJvcFR5cGVzLCBNZW51LnByb3BUeXBlcywge1xuICAgIGRhdGFJZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNwbGF5SXRlbTogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICB9XG5cbiAgaGFuZGxlT3BlbkNoYW5nZShvcGVuS2V5cykge1xuICAgIGlmICh0aGlzLnByb3BzLm9uT3BlbkNoYW5nZSAmJiBfLmlzRnVuY3Rpb24odGhpcy5wcm9wcy5vbk9wZW5DaGFuZ2UpKSB7XG4gICAgICB0aGlzLnByb3BzLm9uT3BlbkNoYW5nZShvcGVuS2V5cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBuZXdWYWwgPSBfLmNsb25lKHRoaXMuc2tWYWwoKSk7XG4gICAgICBuZXdWYWwub3BlbktleXMgPSBvcGVuS2V5cy5zbGljZSgwKTtcbiAgICAgIHRoaXMuc2tWYWwobmV3VmFsKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDbGljayhjbGlja0luZm8pIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrICYmIF8uaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uQ2xpY2spKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2soY2xpY2tJbmZvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG5ld1ZhbCA9IF8uY2xvbmUodGhpcy5za1ZhbCgpKTtcbiAgICAgIC8vIG5ld1ZhbC5vcGVuS2V5cyA9IHRoaXMuc2tWYWwoKS5vcGVuS2V5cztcbiAgICAgIG5ld1ZhbC5zZWxlY3RlZEtleXMgPSBbY2xpY2tJbmZvLmtleV07XG4gICAgICB0aGlzLnNrVmFsKG5ld1ZhbCk7XG4gICAgfVxuICB9XG5cbiAgbWVudU1hcChpdGVtSW5mbykge1xuICAgIGxldCB7ZGlzcGxheUl0ZW0sIGRhdGFJZCwgbW9kZX0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBtZW51Q2ZncyA9IHRoaXMuaU1vZGVsKCkuc2tWYWwoZGF0YUlkKTtcblxuICAgIGxldCBkaXNwbGF5VGl0bGUgPSAoKG1vZGUgPT0gRGlyLklubGluZSkgfHwgbWVudUNmZ3MuaW5kZXhPZihpdGVtSW5mbykgPT0gLTEpO1xuICAgIGxldCBydG5DZmdzID0gW107XG5cbiAgICBpZiAoaXRlbUluZm8uY2hpbGRyZW4gJiYgIV8uaXNFbXB0eShpdGVtSW5mby5jaGlsZHJlbikpIHtcbiAgICAgIHJ0bkNmZ3MucHVzaCg8U0tTdWJNZW51IHsuLi50aGlzLmNvbXBWYWxpZFByb3BzKFNLU3ViTWVudSl9IGtleT17aXRlbUluZm8ucm91dGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U0tJY29uIHR5cGU9e2l0ZW1JbmZvLmljb259Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2Rpc3BsYXlUaXRsZSAmJiBpdGVtSW5mby50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+fT5cbiAgICAgICAge2l0ZW1JbmZvLmNoaWxkcmVuLm1hcCh0aGlzLm1lbnVNYXAuYmluZCh0aGlzKSl9XG4gICAgICA8L1NLU3ViTWVudT4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZGlzcGxheUl0ZW0gJiYgZGlzcGxheUl0ZW0oaXRlbUluZm8pKSB7XG4gICAgICAgIHJ0bkNmZ3MucHVzaCg8U0tNZW51SXRlbSB7Li4udGhpcy5jb21wVmFsaWRQcm9wcyhTS01lbnVJdGVtKX0ga2V5PXtpdGVtSW5mby5yb3V0ZXJ9PlxuICAgICAgICAgIDxTS0xpbmsgey4uLnRoaXMuY29tcFZhbGlkUHJvcHMoU0tMaW5rKX0gdG89e2l0ZW1JbmZvLnJvdXRlcn0+XG4gICAgICAgICAgICB7aXRlbUluZm8uaWNvbiAmJiA8U0tJY29uIHsuLi50aGlzLmNvbXBWYWxpZFByb3BzKFNLSWNvbil9IHR5cGU9e2l0ZW1JbmZvLmljb259Lz59XG4gICAgICAgICAgICB7ZGlzcGxheVRpdGxlICYmIGl0ZW1JbmZvLnRpdGxlfVxuICAgICAgICAgIDwvU0tMaW5rPlxuICAgICAgICA8L1NLTWVudUl0ZW0+KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJ0bkNmZ3M7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnLCBkYXRhSWQsIG1vZGUsIHRoZW1lfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuY29tcFZhbGlkUHJvcHMoQ29tcFRhZyl9XG4gICAgICAgICAgICAgICBtb2RlPXttb2RlfVxuICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgb25PcGVuQ2hhbmdlPXt0aGlzLmhhbmRsZU9wZW5DaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgIG9wZW5LZXlzPXt0aGlzLnNrVmFsKCkub3BlbktleXN9XG4gICAgICAgICAgICAgICBzZWxlY3RlZEtleXM9e3RoaXMuc2tWYWwoKS5zZWxlY3RlZEtleXN9XG4gICAgICAgICAgICAgICB0aGVtZT17dGhlbWV9PlxuICAgICAgICB7ZGF0YUlkID8gdGhpcy5pTW9kZWwoKS5za1ZhbChkYXRhSWQpLm1hcCgoJGl0ZW1JbmZvKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubWVudU1hcCgkaXRlbUluZm8pO1xuICAgICAgICB9KSA6IHRoaXMuc2tQcm9wc1RyYW5zKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxufVxuIl19