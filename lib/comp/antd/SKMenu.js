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

var _reactRouterDom = require('react-router-dom');

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
              _reactRouterDom.Link,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS01lbnUuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwiYXNzaWduIiwiaW5saW5lSW5kZW50IiwiUHJvcFR5cGVzIiwibnVtYmVyIiwib25DbGljayIsImZ1bmMiLCJvbk9wZW5DaGFuZ2UiLCJsZXZlbCIsImRlZmF1bHRQcm9wcyIsIlNLTWVudSIsImFyZ3MiLCJvcGVuS2V5cyIsInByb3BzIiwiaXNGdW5jdGlvbiIsIm5ld1ZhbCIsImNsb25lIiwic2tWYWwiLCJzbGljZSIsImNsaWNrSW5mbyIsInNlbGVjdGVkS2V5cyIsImtleSIsIml0ZW1JbmZvIiwiZGlzcGxheUl0ZW0iLCJkYXRhSWQiLCJtb2RlIiwibWVudUNmZ3MiLCJpTW9kZWwiLCJkaXNwbGF5VGl0bGUiLCJJbmxpbmUiLCJpbmRleE9mIiwicnRuQ2ZncyIsImNoaWxkcmVuIiwiaXNFbXB0eSIsInB1c2giLCJjb21wVmFsaWRQcm9wcyIsInJvdXRlciIsImljb24iLCJ0aXRsZSIsIm1hcCIsIm1lbnVNYXAiLCJiaW5kIiwiQ29tcFRhZyIsImNvbXBUYWciLCJ0aGVtZSIsImhhbmRsZUNsaWNrIiwiaGFuZGxlT3BlbkNoYW5nZSIsIiRpdGVtSW5mbyIsInNrUHJvcHNUcmFucyIsInVuZGVmaW5lZCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxlQUFLQSxTQUFMLEdBQWlCLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0QsU0FBbkIsRUFBOEI7QUFDN0NFLGdCQUFjLGdCQUFNQyxTQUFOLENBQWdCQyxNQURlO0FBRTdDQyxXQUFTLGdCQUFNRixTQUFOLENBQWdCRyxJQUZvQjtBQUc3Q0MsZ0JBQWMsZ0JBQU1KLFNBQU4sQ0FBZ0JHO0FBSGUsQ0FBOUIsRUFJZDtBQUNERSxTQUFPLGdCQUFNTCxT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QixTQUFOLENBQWdCK0MsTUFEa0Y7QUFFMUczQixlQUFhLGdCQUFNcEIsU0FBTixDQUFnQkc7QUFGNkUsQ0FBekYsQztrQkFSQUksTSIsImZpbGUiOiJjb21wL2FudGQvU0tNZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNZW51fSBmcm9tICdhbnRkJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBTSyBmcm9tICdzay1qcyc7XG5pbXBvcnQgQ29tcCBmcm9tICcuLi8uLi91dGlsL0NvbXAnO1xuaW1wb3J0IHtEaXJ9IGZyb20gJy4uLy4uL3V0aWwvQ29uc3QnO1xuaW1wb3J0IFNLSWNvbiBmcm9tICcuL1NLSWNvbic7XG5pbXBvcnQgU0tNZW51SXRlbSBmcm9tICcuL1NLTWVudUl0ZW0nO1xuaW1wb3J0IFNLU3ViTWVudSBmcm9tICcuL1NLU3ViTWVudSc7XG5cbk1lbnUucHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBNZW51LnByb3BUeXBlcywge1xuICBpbmxpbmVJbmRlbnQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIG9uQ2xpY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBvbk9wZW5DaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG59LCB7XG4gIGxldmVsOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyXG59KTtcblxuTWVudS5kZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIE1lbnUuZGVmYXVsdFByb3BzLCB7XG4gIGlubGluZUluZGVudDogMjRcbn0sIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tNZW51IGV4dGVuZHMgQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIE1lbnUuZGVmYXVsdFByb3BzLCB7XG4gICAgY29tcFRhZzogTWVudSxcbiAgICBkYXRhSWQ6IHVuZGVmaW5lZCxcbiAgICBkaXNwbGF5SXRlbTogKGl0ZW1JbmZvKSA9PiB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIENvbXAucHJvcFR5cGVzLCBTS01lbnVJdGVtLnByb3BUeXBlcywgU0tTdWJNZW51LnByb3BUeXBlcywgTWVudS5wcm9wVHlwZXMsIHtcbiAgICBkYXRhSWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzcGxheUl0ZW06IFJlYWN0LlByb3BUeXBlcy5mdW5jXG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxuXG4gIGhhbmRsZU9wZW5DaGFuZ2Uob3BlbktleXMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbk9wZW5DaGFuZ2UgJiYgXy5pc0Z1bmN0aW9uKHRoaXMucHJvcHMub25PcGVuQ2hhbmdlKSkge1xuICAgICAgdGhpcy5wcm9wcy5vbk9wZW5DaGFuZ2Uob3BlbktleXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbmV3VmFsID0gXy5jbG9uZSh0aGlzLnNrVmFsKCkpO1xuICAgICAgbmV3VmFsLm9wZW5LZXlzID0gb3BlbktleXMuc2xpY2UoMCk7XG4gICAgICB0aGlzLnNrVmFsKG5ld1ZhbCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2xpY2soY2xpY2tJbmZvKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25DbGljayAmJiBfLmlzRnVuY3Rpb24odGhpcy5wcm9wcy5vbkNsaWNrKSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGNsaWNrSW5mbyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBuZXdWYWwgPSBfLmNsb25lKHRoaXMuc2tWYWwoKSk7XG4gICAgICAvLyBuZXdWYWwub3BlbktleXMgPSB0aGlzLnNrVmFsKCkub3BlbktleXM7XG4gICAgICBuZXdWYWwuc2VsZWN0ZWRLZXlzID0gW2NsaWNrSW5mby5rZXldO1xuICAgICAgdGhpcy5za1ZhbChuZXdWYWwpO1xuICAgIH1cbiAgfVxuXG4gIG1lbnVNYXAoaXRlbUluZm8pIHtcbiAgICBsZXQge2Rpc3BsYXlJdGVtLCBkYXRhSWQsIG1vZGV9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgbWVudUNmZ3MgPSB0aGlzLmlNb2RlbCgpLnNrVmFsKGRhdGFJZCk7XG5cbiAgICBsZXQgZGlzcGxheVRpdGxlID0gKChtb2RlID09IERpci5JbmxpbmUpIHx8IG1lbnVDZmdzLmluZGV4T2YoaXRlbUluZm8pID09IC0xKTtcbiAgICBsZXQgcnRuQ2ZncyA9IFtdO1xuXG4gICAgaWYgKGl0ZW1JbmZvLmNoaWxkcmVuICYmICFfLmlzRW1wdHkoaXRlbUluZm8uY2hpbGRyZW4pKSB7XG4gICAgICBydG5DZmdzLnB1c2goPFNLU3ViTWVudSB7Li4udGhpcy5jb21wVmFsaWRQcm9wcyhTS1N1Yk1lbnUpfSBrZXk9e2l0ZW1JbmZvLnJvdXRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNLSWNvbiB0eXBlPXtpdGVtSW5mby5pY29ufS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntkaXNwbGF5VGl0bGUgJiYgaXRlbUluZm8udGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPn0+XG4gICAgICAgIHtpdGVtSW5mby5jaGlsZHJlbi5tYXAodGhpcy5tZW51TWFwLmJpbmQodGhpcykpfVxuICAgICAgPC9TS1N1Yk1lbnU+KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRpc3BsYXlJdGVtICYmIGRpc3BsYXlJdGVtKGl0ZW1JbmZvKSkge1xuICAgICAgICBydG5DZmdzLnB1c2goPFNLTWVudUl0ZW0gey4uLnRoaXMuY29tcFZhbGlkUHJvcHMoU0tNZW51SXRlbSl9IGtleT17aXRlbUluZm8ucm91dGVyfT5cbiAgICAgICAgICA8TGluayB0bz17aXRlbUluZm8ucm91dGVyfT5cbiAgICAgICAgICAgIHtpdGVtSW5mby5pY29uICYmIDxTS0ljb24gdHlwZT17aXRlbUluZm8uaWNvbn0vPn1cbiAgICAgICAgICAgIHtkaXNwbGF5VGl0bGUgJiYgaXRlbUluZm8udGl0bGV9XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L1NLTWVudUl0ZW0+KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJ0bkNmZ3M7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnLCBkYXRhSWQsIG1vZGUsIHRoZW1lfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBUYWcgey4uLnRoaXMuY29tcFZhbGlkUHJvcHMoQ29tcFRhZyl9XG4gICAgICAgICAgICAgICBtb2RlPXttb2RlfVxuICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgb25PcGVuQ2hhbmdlPXt0aGlzLmhhbmRsZU9wZW5DaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgIG9wZW5LZXlzPXt0aGlzLnNrVmFsKCkub3BlbktleXN9XG4gICAgICAgICAgICAgICBzZWxlY3RlZEtleXM9e3RoaXMuc2tWYWwoKS5zZWxlY3RlZEtleXN9XG4gICAgICAgICAgICAgICB0aGVtZT17dGhlbWV9PlxuICAgICAgICB7ZGF0YUlkID8gdGhpcy5pTW9kZWwoKS5za1ZhbChkYXRhSWQpLm1hcCgoJGl0ZW1JbmZvKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubWVudU1hcCgkaXRlbUluZm8pO1xuICAgICAgICB9KSA6IHRoaXMuc2tQcm9wc1RyYW5zKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxufVxuIl19