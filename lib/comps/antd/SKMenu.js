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
      }
      var newVal = _lodash2.default.clone(this.skVal());
      newVal.openKeys = es.slice(0);
      this.skVal(newVal);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      if (this.props.onClick && _lodash2.default.isFunction(this.props.onClick)) {
        this.props.onClick(e);
      }
      var newVal = _lodash2.default.clone(this.skVal());
      // newVal.openKeys = this.skVal().openKeys;
      newVal.selectedKeys = [e.key];
      this.skVal(newVal);
    }
  }, {
    key: 'menuMap',
    value: function menuMap(menuCfg) {
      var _props = this.props,
          displayItem = _props.displayItem,
          menuCfgs = _props.menuCfgs,
          mode = _props.mode;


      var displayTitle = mode == 'inline' || menuCfgs.indexOf(menuCfg) == -1;
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
        menuCfgs.map(function (menuCfg) {
          return _this2.menuMap(menuCfg);
        })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FudGQvU0tNZW51LmpzIl0sIm5hbWVzIjpbInByb3BUeXBlcyIsImFzc2lnbiIsImlubGluZUluZGVudCIsIlByb3BUeXBlcyIsIm51bWJlciIsImxldmVsIiwiZGVmYXVsdFByb3BzIiwiU0tNZW51IiwiYXJncyIsImVzIiwicHJvcHMiLCJvbk9wZW5DaGFuZ2UiLCJpc0Z1bmN0aW9uIiwibmV3VmFsIiwiY2xvbmUiLCJza1ZhbCIsIm9wZW5LZXlzIiwic2xpY2UiLCJlIiwib25DbGljayIsInNlbGVjdGVkS2V5cyIsImtleSIsIm1lbnVDZmciLCJkaXNwbGF5SXRlbSIsIm1lbnVDZmdzIiwibW9kZSIsImRpc3BsYXlUaXRsZSIsImluZGV4T2YiLCJydG5DZmdzIiwiY2hpbGRyZW4iLCJpc0VtcHR5IiwicHVzaCIsInJvdXRlciIsImljb24iLCJ0aXRsZSIsIm1hcCIsIm1lbnVNYXAiLCJiaW5kIiwiQ29tcFRhZyIsImNvbXBUYWciLCJ0aGVtZSIsImNvbXBWYWxpZFByb3BzIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVPcGVuQ2hhbmdlIiwiZnVuYyIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsZUFBS0EsU0FBTCxHQUFpQixlQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLGVBQUtELFNBQW5CLEVBQThCO0FBQzdDRSxnQkFBYyxnQkFBTUMsU0FBTixDQUFnQkM7QUFEZSxDQUE5QixFQUVkO0FBQ0RDLFNBQU8sZ0JBQU1GLFNBQU4sQ0FBZ0JDO0FBRHRCLENBRmMsQ0FBakI7O0FBTUEsZUFBS0UsWUFBTCxHQUFvQixlQUFHTCxNQUFILENBQVUsRUFBVixFQUFjLGVBQUtLLFlBQW5CLEVBQWlDO0FBQ25ESixnQkFBYztBQURxQyxDQUFqQyxFQUVqQixFQUZpQixDQUFwQjs7SUFJcUJLLE07OztB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QXNCTixJQUF0QixDQUEyQixJQUEzQixDQUhoQjtBQUlFLG9CQUFVLEtBQUt0QixLQUFMLEdBQWFDLFFBSnpCO0FBS0Usd0JBQWMsS0FBS0QsS0FBTCxHQUFhSyxZQUw3QjtBQU1FLGlCQUFPb0IsS0FOVDtBQU9HaEIsaUJBQVNXLEdBQVQsQ0FBYSxVQUFDYixPQUFELEVBQWE7QUFDekIsaUJBQU8sT0FBS2MsT0FBTCxDQUFhZCxPQUFiLENBQVA7QUFDRCxTQUZBO0FBUEgsT0FERjtBQWFEOzs7Ozs7QUEzRWtCZixNLENBQ1pELFksR0FBZSxlQUFHTCxNQUFILENBQVUsRUFBVixFQUFjLGVBQUtLLFlBQW5CLEVBQWlDO0FBQ3JEaUMseUJBRHFEO0FBRXJEaEIsZUFBYSx1QkFBTTtBQUNqQixXQUFPLElBQVA7QUFDRCxHQUpvRDtBQUtyREcsZ0JBQWM7QUFMdUMsQ0FBakMsQztBQURIbkIsTSxDQVFaUCxTLEdBQVksZUFBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxlQUFLRCxTQUFuQixFQUE4QixxQkFBV0EsU0FBekMsRUFBb0Qsb0JBQVVBLFNBQTlELEVBQXlFLGVBQUtBLFNBQTlFLEVBQXlGO0FBQzFHdUIsZUFBYSxnQkFBTXBCLFNBQU4sQ0FBZ0J5QyxJQUQ2RTtBQUUxR2xCLGdCQUFjLGdCQUFNdkIsU0FBTixDQUFnQjBDO0FBRjRFLENBQXpGLEM7a0JBUkF0QyxNIiwiZmlsZSI6ImNvbXBzL2FudGQvU0tNZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNZW51fSBmcm9tICdhbnRkJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IFNLIGZyb20gJ3NrLWpzJztcbmltcG9ydCBDb21wIGZyb20gJy4uLy4uL3V0aWxzL0NvbXAnO1xuaW1wb3J0IFNLSWNvbiBmcm9tICcuL1NLSWNvbic7XG5pbXBvcnQgU0tNZW51SXRlbSBmcm9tICcuL1NLTWVudUl0ZW0nO1xuaW1wb3J0IFNLU3ViTWVudSBmcm9tICcuL1NLU3ViTWVudSc7XG5cbk1lbnUucHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBNZW51LnByb3BUeXBlcywge1xuICBpbmxpbmVJbmRlbnQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXJcbn0sIHtcbiAgbGV2ZWw6IFJlYWN0LlByb3BUeXBlcy5udW1iZXJcbn0pO1xuXG5NZW51LmRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgTWVudS5kZWZhdWx0UHJvcHMsIHtcbiAgaW5saW5lSW5kZW50OiAyNFxufSwge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS01lbnUgZXh0ZW5kcyBDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgTWVudS5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBNZW51LFxuICAgIGRpc3BsYXlJdGVtOiAoKSA9PiB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0sXG4gICAgZGlzcGxheVRpdGxlOiB0cnVlXG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBDb21wLnByb3BUeXBlcywgU0tNZW51SXRlbS5wcm9wVHlwZXMsIFNLU3ViTWVudS5wcm9wVHlwZXMsIE1lbnUucHJvcFR5cGVzLCB7XG4gICAgZGlzcGxheUl0ZW06IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIGRpc3BsYXlUaXRsZTogUmVhY3QuUHJvcFR5cGVzLmJvb2xcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICB9XG5cbiAgaGFuZGxlT3BlbkNoYW5nZShlcykge1xuICAgIGlmICh0aGlzLnByb3BzLm9uT3BlbkNoYW5nZSAmJiBfLmlzRnVuY3Rpb24odGhpcy5wcm9wcy5vbk9wZW5DaGFuZ2UpKSB7XG4gICAgICB0aGlzLnByb3BzLm9uT3BlbkNoYW5nZShlcyk7XG4gICAgfVxuICAgIGxldCBuZXdWYWwgPSBfLmNsb25lKHRoaXMuc2tWYWwoKSk7XG4gICAgbmV3VmFsLm9wZW5LZXlzID0gZXMuc2xpY2UoMCk7XG4gICAgdGhpcy5za1ZhbChuZXdWYWwpO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2sgJiYgXy5pc0Z1bmN0aW9uKHRoaXMucHJvcHMub25DbGljaykpIHtcbiAgICAgIHRoaXMucHJvcHMub25DbGljayhlKTtcbiAgICB9XG4gICAgbGV0IG5ld1ZhbCA9IF8uY2xvbmUodGhpcy5za1ZhbCgpKTtcbiAgICAvLyBuZXdWYWwub3BlbktleXMgPSB0aGlzLnNrVmFsKCkub3BlbktleXM7XG4gICAgbmV3VmFsLnNlbGVjdGVkS2V5cyA9IFtlLmtleV07XG4gICAgdGhpcy5za1ZhbChuZXdWYWwpO1xuICB9XG5cbiAgbWVudU1hcChtZW51Q2ZnKSB7XG4gICAgbGV0IHtkaXNwbGF5SXRlbSwgbWVudUNmZ3MsIG1vZGV9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBkaXNwbGF5VGl0bGUgPSAoKG1vZGUgPT0gJ2lubGluZScpIHx8IG1lbnVDZmdzLmluZGV4T2YobWVudUNmZykgPT0gLTEpO1xuICAgIGxldCBydG5DZmdzID0gW107XG5cbiAgICBpZiAobWVudUNmZy5jaGlsZHJlbiAmJiAhXy5pc0VtcHR5KG1lbnVDZmcuY2hpbGRyZW4pKSB7XG4gICAgICBydG5DZmdzLnB1c2goPFNLU3ViTWVudSBrZXk9e21lbnVDZmcucm91dGVyfSB0aXRsZT17PHNwYW4+PFNLSWNvbiB0eXBlPXttZW51Q2ZnLmljb259IC8+PHNwYW4+e2Rpc3BsYXlUaXRsZSAmJiBtZW51Q2ZnLnRpdGxlfTwvc3Bhbj48L3NwYW4+fT5cbiAgICAgICAge21lbnVDZmcuY2hpbGRyZW4ubWFwKHRoaXMubWVudU1hcC5iaW5kKHRoaXMpKX1cbiAgICAgIDwvU0tTdWJNZW51Pik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChkaXNwbGF5SXRlbSAmJiBkaXNwbGF5SXRlbShtZW51Q2ZnKSkge1xuICAgICAgICBydG5DZmdzLnB1c2goPFNLTWVudUl0ZW0ga2V5PXttZW51Q2ZnLnJvdXRlcn0+XG4gICAgICAgICAgPExpbmsgdG89e21lbnVDZmcucm91dGVyfT5cbiAgICAgICAgICAgIHttZW51Q2ZnLmljb24gJiYgPFNLSWNvbiB0eXBlPXttZW51Q2ZnLmljb259Lz59XG4gICAgICAgICAgICB7ZGlzcGxheVRpdGxlICYmIG1lbnVDZmcudGl0bGV9XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L1NLTWVudUl0ZW0+KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJ0bkNmZ3M7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb21wVGFnOiBDb21wVGFnLCBtZW51Q2ZncywgbW9kZSwgdGhlbWV9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5jb21wVmFsaWRQcm9wcyhDb21wVGFnKX1cbiAgICAgICAgbW9kZT17bW9kZX1cbiAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpfVxuICAgICAgICBvbk9wZW5DaGFuZ2U9e3RoaXMuaGFuZGxlT3BlbkNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICBvcGVuS2V5cz17dGhpcy5za1ZhbCgpLm9wZW5LZXlzfVxuICAgICAgICBzZWxlY3RlZEtleXM9e3RoaXMuc2tWYWwoKS5zZWxlY3RlZEtleXN9XG4gICAgICAgIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIHttZW51Q2Zncy5tYXAoKG1lbnVDZmcpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5tZW51TWFwKG1lbnVDZmcpO1xuICAgICAgICB9KX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG59XG4iXX0=