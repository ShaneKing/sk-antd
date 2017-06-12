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
  inlineIndent: _react2.default.PropTypes.number
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FudGQvU0tNZW51LmpzIl0sIm5hbWVzIjpbInByb3BUeXBlcyIsImFzc2lnbiIsImlubGluZUluZGVudCIsIlByb3BUeXBlcyIsIm51bWJlciIsImxldmVsIiwiZGVmYXVsdFByb3BzIiwiU0tNZW51IiwiYXJncyIsImVzIiwicHJvcHMiLCJvbk9wZW5DaGFuZ2UiLCJpc0Z1bmN0aW9uIiwibmV3VmFsIiwiY2xvbmUiLCJza1ZhbCIsIm9wZW5LZXlzIiwic2xpY2UiLCJlIiwib25DbGljayIsInNlbGVjdGVkS2V5cyIsImtleSIsIm1lbnVDZmciLCJkaXNwbGF5SXRlbSIsIm1lbnVDZmdzIiwibW9kZSIsImRpc3BsYXlUaXRsZSIsIklubGluZSIsImluZGV4T2YiLCJydG5DZmdzIiwiY2hpbGRyZW4iLCJpc0VtcHR5IiwicHVzaCIsInJvdXRlciIsImljb24iLCJ0aXRsZSIsIm1hcCIsIm1lbnVNYXAiLCJiaW5kIiwiQ29tcFRhZyIsImNvbXBUYWciLCJ0aGVtZSIsImNvbXBWYWxpZFByb3BzIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVPcGVuQ2hhbmdlIiwic2tQcm9wc1RyYW5zIiwiZnVuYyIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsZUFBS0EsU0FBTCxHQUFpQixlQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLGVBQUtELFNBQW5CLEVBQThCO0FBQzdDRSxnQkFBYyxnQkFBTUMsU0FBTixDQUFnQkM7QUFEZSxDQUE5QixFQUVkO0FBQ0RDLFNBQU8sZ0JBQU1GLFNBQU4sQ0FBZ0JDO0FBRHRCLENBRmMsQ0FBakI7O0FBTUEsZUFBS0UsWUFBTCxHQUFvQixlQUFHTCxNQUFILENBQVUsRUFBVixFQUFjLGVBQUtLLFlBQW5CLEVBQWlDO0FBQ25ESixnQkFBYztBQURxQyxDQUFqQyxF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LEtBQUtrQixXQUFMLENBQWlCTCxJQUFqQixDQUFzQixJQUF0QixDQUZYO0FBR0Usd0JBQWMsS0FBS00sZ0JBQUwsQ0FBc0JOLElBQXRCLENBQTJCLElBQTNCLENBSGhCO0FBSUUsb0JBQVUsS0FBS3ZCLEtBQUwsR0FBYUMsUUFKekI7QUFLRSx3QkFBYyxLQUFLRCxLQUFMLEdBQWFLLFlBTDdCO0FBTUUsaUJBQU9xQixLQU5UO0FBT0dqQixtQkFBV0EsU0FBU1ksR0FBVCxDQUFhLFVBQUNkLE9BQUQsRUFBYTtBQUNwQyxpQkFBTyxPQUFLZSxPQUFMLENBQWFmLE9BQWIsQ0FBUDtBQUNELFNBRlcsQ0FBWCxHQUVJLEtBQUt1QixZQUFMO0FBVFAsT0FERjtBQWFEOzs7Ozs7QUE3RWtCdEMsTSxDQUNaRCxZLEdBQWUsZUFBR0wsTUFBSCxDQUFVLEVBQVYsRUFBYyxlQUFLSyxZQUFuQixFQUFpQztBQUNyRGtDLHlCQURxRDtBQUVyRGpCLGVBQWEsdUJBQU07QUFDakIsV0FBTyxJQUFQO0FBQ0QsR0FKb0Q7QUFLckRHLGdCQUFjO0FBTHVDLENBQWpDLEM7QUFESG5CLE0sQ0FRWlAsUyxHQUFZLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0QsU0FBbkIsRUFBOEIscUJBQVdBLFNBQXpDLEVBQW9ELG9CQUFVQSxTQUE5RCxFQUF5RSxlQUFLQSxTQUE5RSxFQUF5RjtBQUMxR3VCLGVBQWEsZ0JBQU1wQixTQUFOLENBQWdCMkMsSUFENkU7QUFFMUdwQixnQkFBYyxnQkFBTXZCLFNBQU4sQ0FBZ0I0QztBQUY0RSxDQUF6RixDO2tCQVJBeEMsTSIsImZpbGUiOiJjb21wcy9hbnRkL1NLTWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TWVudX0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBTSyBmcm9tICdzay1qcyc7XG5pbXBvcnQgQ29tcCBmcm9tICcuLi8uLi91dGlscy9Db21wJztcbmltcG9ydCB7RGlyfSBmcm9tICcuLi8uLi91dGlscy9Db25zdCc7XG5pbXBvcnQgU0tJY29uIGZyb20gJy4vU0tJY29uJztcbmltcG9ydCBTS01lbnVJdGVtIGZyb20gJy4vU0tNZW51SXRlbSc7XG5pbXBvcnQgU0tTdWJNZW51IGZyb20gJy4vU0tTdWJNZW51JztcblxuTWVudS5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIE1lbnUucHJvcFR5cGVzLCB7XG4gIGlubGluZUluZGVudDogUmVhY3QuUHJvcFR5cGVzLm51bWJlclxufSwge1xuICBsZXZlbDogUmVhY3QuUHJvcFR5cGVzLm51bWJlclxufSk7XG5cbk1lbnUuZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBNZW51LmRlZmF1bHRQcm9wcywge1xuICBpbmxpbmVJbmRlbnQ6IDI0XG59LCB7fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLTWVudSBleHRlbmRzIENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBNZW51LmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IE1lbnUsXG4gICAgZGlzcGxheUl0ZW06ICgpID0+IHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSxcbiAgICBkaXNwbGF5VGl0bGU6IHRydWVcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIENvbXAucHJvcFR5cGVzLCBTS01lbnVJdGVtLnByb3BUeXBlcywgU0tTdWJNZW51LnByb3BUeXBlcywgTWVudS5wcm9wVHlwZXMsIHtcbiAgICBkaXNwbGF5SXRlbTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzcGxheVRpdGxlOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbFxuICB9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gIH1cblxuICBoYW5kbGVPcGVuQ2hhbmdlKGVzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25PcGVuQ2hhbmdlICYmIF8uaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uT3BlbkNoYW5nZSkpIHtcbiAgICAgIHRoaXMucHJvcHMub25PcGVuQ2hhbmdlKGVzKTtcbiAgICB9ZWxzZXtcbiAgICAgIGxldCBuZXdWYWwgPSBfLmNsb25lKHRoaXMuc2tWYWwoKSk7XG4gICAgICBuZXdWYWwub3BlbktleXMgPSBlcy5zbGljZSgwKTtcbiAgICAgIHRoaXMuc2tWYWwobmV3VmFsKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDbGljayhlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25DbGljayAmJiBfLmlzRnVuY3Rpb24odGhpcy5wcm9wcy5vbkNsaWNrKSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGUpO1xuICAgIH1lbHNle1xuICAgICAgbGV0IG5ld1ZhbCA9IF8uY2xvbmUodGhpcy5za1ZhbCgpKTtcbiAgICAgIC8vIG5ld1ZhbC5vcGVuS2V5cyA9IHRoaXMuc2tWYWwoKS5vcGVuS2V5cztcbiAgICAgIG5ld1ZhbC5zZWxlY3RlZEtleXMgPSBbZS5rZXldO1xuICAgICAgdGhpcy5za1ZhbChuZXdWYWwpO1xuICAgIH1cbiAgfVxuXG4gIG1lbnVNYXAobWVudUNmZykge1xuICAgIGxldCB7ZGlzcGxheUl0ZW0sIG1lbnVDZmdzLCBtb2RlfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgZGlzcGxheVRpdGxlID0gKChtb2RlID09IERpci5JbmxpbmUpIHx8IG1lbnVDZmdzLmluZGV4T2YobWVudUNmZykgPT0gLTEpO1xuICAgIGxldCBydG5DZmdzID0gW107XG5cbiAgICBpZiAobWVudUNmZy5jaGlsZHJlbiAmJiAhXy5pc0VtcHR5KG1lbnVDZmcuY2hpbGRyZW4pKSB7XG4gICAgICBydG5DZmdzLnB1c2goPFNLU3ViTWVudSBrZXk9e21lbnVDZmcucm91dGVyfSB0aXRsZT17PHNwYW4+PFNLSWNvbiB0eXBlPXttZW51Q2ZnLmljb259IC8+PHNwYW4+e2Rpc3BsYXlUaXRsZSAmJiBtZW51Q2ZnLnRpdGxlfTwvc3Bhbj48L3NwYW4+fT5cbiAgICAgICAge21lbnVDZmcuY2hpbGRyZW4ubWFwKHRoaXMubWVudU1hcC5iaW5kKHRoaXMpKX1cbiAgICAgIDwvU0tTdWJNZW51Pik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChkaXNwbGF5SXRlbSAmJiBkaXNwbGF5SXRlbShtZW51Q2ZnKSkge1xuICAgICAgICBydG5DZmdzLnB1c2goPFNLTWVudUl0ZW0ga2V5PXttZW51Q2ZnLnJvdXRlcn0+XG4gICAgICAgICAgPExpbmsgdG89e21lbnVDZmcucm91dGVyfT5cbiAgICAgICAgICAgIHttZW51Q2ZnLmljb24gJiYgPFNLSWNvbiB0eXBlPXttZW51Q2ZnLmljb259Lz59XG4gICAgICAgICAgICB7ZGlzcGxheVRpdGxlICYmIG1lbnVDZmcudGl0bGV9XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L1NLTWVudUl0ZW0+KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJ0bkNmZ3M7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnLCBtZW51Q2ZncywgbW9kZSwgdGhlbWV9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5jb21wVmFsaWRQcm9wcyhDb21wVGFnKX1cbiAgICAgICAgbW9kZT17bW9kZX1cbiAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpfVxuICAgICAgICBvbk9wZW5DaGFuZ2U9e3RoaXMuaGFuZGxlT3BlbkNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICBvcGVuS2V5cz17dGhpcy5za1ZhbCgpLm9wZW5LZXlzfVxuICAgICAgICBzZWxlY3RlZEtleXM9e3RoaXMuc2tWYWwoKS5zZWxlY3RlZEtleXN9XG4gICAgICAgIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIHttZW51Q2ZncyA/IG1lbnVDZmdzLm1hcCgobWVudUNmZykgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLm1lbnVNYXAobWVudUNmZyk7XG4gICAgICAgIH0pIDogdGhpcy5za1Byb3BzVHJhbnMoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG59XG4iXX0=