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

var _SKLink = require('../../react/SKLink');

var _SKLink2 = _interopRequireDefault(_SKLink);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvbWVudS9TS01lbnUuanMiXSwibmFtZXMiOlsiU0tNZW51IiwiYXJncyIsImNvbXBOYW1lIiwiaGFuZGxlQ2xpY2siLCJjbGlja0luZm8iLCJwcm9wcyIsIm9uQ2xpY2siLCJpc0Z1bmN0aW9uIiwibmV3VmFsIiwiY2xvbmUiLCJza1ZhbCIsInNlbGVjdGVkS2V5cyIsImtleSIsImhhbmRsZU9wZW5DaGFuZ2UiLCJvcGVuS2V5cyIsIm9uT3BlbkNoYW5nZSIsInNsaWNlIiwiaXRlbUluZm8iLCJkaXNwbGF5SXRlbSIsImRhdGFJZCIsIm1vZGUiLCJtZW51Q2ZncyIsInNrTW9kZWwiLCJkaXNwbGF5VGl0bGUiLCJJbmxpbmUiLCJpbmRleE9mIiwicnRuQ2ZncyIsImNoaWxkcmVuIiwiaXNFbXB0eSIsInB1c2giLCJza1RyYW5zUHJvcHMyU2VsZiIsInJvdXRlciIsImljb24iLCJ0aXRsZSIsIm1hcCIsIm1lbnVNYXAiLCJiaW5kIiwiQ29tcFRhZyIsImNvbXBUYWciLCJ0aGVtZSIsIiRpdGVtSW5mbyIsInNrVHJhbnNQcm9wczJDaGlsZCIsImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsInVuZGVmaW5lZCIsInByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7O0FBYW5CLG9CQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSwySUFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixRQUFoQjtBQUNBLFVBQUtDLFdBQUwsR0FBbUIsVUFBQ0MsU0FBRCxFQUFlO0FBQ2hDLFVBQUksTUFBS0MsS0FBTCxDQUFXQyxPQUFYLElBQXNCLGlCQUFFQyxVQUFGLENBQWEsTUFB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S1QsaUJBQUwsQ0FBdUJPLE9BQXZCLENBQWI7QUFDUyxnQkFBTWpCLElBRGY7QUFFUyxtQkFBUyxLQUFLakIsV0FGdkI7QUFHUyx3QkFBYyxLQUFLVSxnQkFINUI7QUFJUyxvQkFBVSxLQUFLSCxLQUFMLEdBQWFJLFFBSmhDO0FBS1Msd0JBQWMsS0FBS0osS0FBTCxHQUFhQyxZQUxwQztBQU1TLGlCQUFPNEIsS0FOaEI7QUFPR3BCLGlCQUFTLEtBQUtHLE9BQUwsR0FBZVosS0FBZixDQUFxQlMsTUFBckIsRUFBNkJlLEdBQTdCLENBQWlDLFVBQUNNLFNBQUQsRUFBZTtBQUN4RCxpQkFBTyxPQUFLTCxPQUFMLENBQWFLLFNBQWIsQ0FBUDtBQUNELFNBRlMsQ0FBVCxHQUVJLEtBQUtDLGtCQUFMO0FBVFAsT0FERjtBQWFEOzs7Ozs7QUFsRmtCekMsTSxDQUNaMEMsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNELFlBQXZCLEVBQXFDLHFCQUFXQSxZQUFoRCxFQUE4RCxvQkFBVUEsWUFBeEUsRUFBc0YscUJBQVdBLFlBQWpHLEVBQStHO0FBQ25JSix5QkFEbUk7QUFFbkluQixVQUFReUIsU0FGMkg7QUFHbkkxQixlQUFhLHFCQUFDRCxRQUFELEVBQWM7QUFDekIsV0FBTyxJQUFQO0FBQ0Q7QUFMa0ksQ0FBL0csQztBQURIakIsTSxDQVFaNkMsUyxHQUFZLFNBQUdGLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNFLFNBQXZCLEVBQWtDLHFCQUFXQSxTQUE3QyxFQUF3RCxvQkFBVUEsU0FBbEUsRUFBNkUscUJBQVdBLFNBQXhGLEVBQW1HO0FBQ3BIMUIsVUFBUSxvQkFBVTJCLE1BRGtHO0FBRXBINUIsZUFBYSxvQkFBVTZCO0FBRjZGLENBQW5HLEM7a0JBUkEvQyxNIiwiZmlsZSI6ImFudGQvbWVudS9TS01lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01lbnV9IGZyb20gJ2FudGQnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IE9yaWdpbk1lbnUgZnJvbSAnLi9PcmlnaW5NZW51JztcbmltcG9ydCBTS01lbnVJdGVtIGZyb20gJy4vU0tNZW51SXRlbSc7XG5pbXBvcnQgU0tTdWJNZW51IGZyb20gJy4vU0tTdWJNZW51JztcbmltcG9ydCBBbnRkQ29tcCBmcm9tICcuLi9BbnRkQ29tcCc7XG5pbXBvcnQgU0tJY29uIGZyb20gJy4uL2ljb24vU0tJY29uJztcbmltcG9ydCB7RGlyfSBmcm9tICcuLi8uLi9Db25zdCc7XG5pbXBvcnQgU0tMaW5rIGZyb20gJy4uLy4uL3JlYWN0L1NLTGluayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLTWVudSBleHRlbmRzIEFudGRDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAuZGVmYXVsdFByb3BzLCBTS01lbnVJdGVtLmRlZmF1bHRQcm9wcywgU0tTdWJNZW51LmRlZmF1bHRQcm9wcywgT3JpZ2luTWVudS5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBNZW51LFxuICAgIGRhdGFJZDogdW5kZWZpbmVkLFxuICAgIGRpc3BsYXlJdGVtOiAoaXRlbUluZm8pID0+IHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCBTS01lbnVJdGVtLnByb3BUeXBlcywgU0tTdWJNZW51LnByb3BUeXBlcywgT3JpZ2luTWVudS5wcm9wVHlwZXMsIHtcbiAgICBkYXRhSWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzcGxheUl0ZW06IFByb3BUeXBlcy5mdW5jXG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ1NLTWVudSc7XG4gICAgdGhpcy5oYW5kbGVDbGljayA9IChjbGlja0luZm8pID0+IHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2sgJiYgXy5pc0Z1bmN0aW9uKHRoaXMucHJvcHMub25DbGljaykpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGNsaWNrSW5mbyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgbmV3VmFsID0gXy5jbG9uZSh0aGlzLnNrVmFsKCkpO1xuICAgICAgICAvLyBuZXdWYWwub3BlbktleXMgPSB0aGlzLnNrVmFsKCkub3BlbktleXM7XG4gICAgICAgIG5ld1ZhbC5zZWxlY3RlZEtleXMgPSBbY2xpY2tJbmZvLmtleV07XG4gICAgICAgIHRoaXMuc2tWYWwobmV3VmFsKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlT3BlbkNoYW5nZSA9IChvcGVuS2V5cykgPT4ge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25PcGVuQ2hhbmdlICYmIF8uaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uT3BlbkNoYW5nZSkpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbk9wZW5DaGFuZ2Uob3BlbktleXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IG5ld1ZhbCA9IF8uY2xvbmUodGhpcy5za1ZhbCgpKTtcbiAgICAgICAgbmV3VmFsLm9wZW5LZXlzID0gb3BlbktleXMuc2xpY2UoMCk7XG4gICAgICAgIHRoaXMuc2tWYWwobmV3VmFsKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgbWVudU1hcChpdGVtSW5mbykge1xuICAgIGxldCB7ZGlzcGxheUl0ZW0sIGRhdGFJZCwgbW9kZX0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBtZW51Q2ZncyA9IHRoaXMuc2tNb2RlbCgpLnNrVmFsKGRhdGFJZCk7XG5cbiAgICBsZXQgZGlzcGxheVRpdGxlID0gKChtb2RlID09PSBEaXIuSW5saW5lKSB8fCBtZW51Q2Zncy5pbmRleE9mKGl0ZW1JbmZvKSA9PT0gLTEpO1xuICAgIGxldCBydG5DZmdzID0gW107XG5cbiAgICBpZiAoaXRlbUluZm8uY2hpbGRyZW4gJiYgIV8uaXNFbXB0eShpdGVtSW5mby5jaGlsZHJlbikpIHtcbiAgICAgIHJ0bkNmZ3MucHVzaCg8U0tTdWJNZW51IHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKFNLU3ViTWVudSl9IGtleT17aXRlbUluZm8ucm91dGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50TWVudT17dGhpc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNLSWNvbiB0eXBlPXtpdGVtSW5mby5pY29ufS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntkaXNwbGF5VGl0bGUgJiYgaXRlbUluZm8udGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPn0+XG4gICAgICAgIHtpdGVtSW5mby5jaGlsZHJlbi5tYXAodGhpcy5tZW51TWFwLmJpbmQodGhpcykpfVxuICAgICAgPC9TS1N1Yk1lbnU+KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRpc3BsYXlJdGVtICYmIGRpc3BsYXlJdGVtKGl0ZW1JbmZvKSkge1xuICAgICAgICBydG5DZmdzLnB1c2goPFNLTWVudUl0ZW0gey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoU0tNZW51SXRlbSl9IGtleT17aXRlbUluZm8ucm91dGVyfSBwYXJlbnRNZW51PXt0aGlzfT5cbiAgICAgICAgICA8U0tMaW5rIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKFNLTGluayl9IHRvPXtpdGVtSW5mby5yb3V0ZXJ9PlxuICAgICAgICAgICAge2l0ZW1JbmZvLmljb24gJiYgPFNLSWNvbiB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihTS0ljb24pfSB0eXBlPXtpdGVtSW5mby5pY29ufS8+fVxuICAgICAgICAgICAge2Rpc3BsYXlUaXRsZSAmJiBpdGVtSW5mby50aXRsZX1cbiAgICAgICAgICA8L1NLTGluaz5cbiAgICAgICAgPC9TS01lbnVJdGVtPik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBydG5DZmdzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZywgZGF0YUlkLCBtb2RlLCB0aGVtZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKENvbXBUYWcpfVxuICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cbiAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICBvbk9wZW5DaGFuZ2U9e3RoaXMuaGFuZGxlT3BlbkNoYW5nZX1cbiAgICAgICAgICAgICAgIG9wZW5LZXlzPXt0aGlzLnNrVmFsKCkub3BlbktleXN9XG4gICAgICAgICAgICAgICBzZWxlY3RlZEtleXM9e3RoaXMuc2tWYWwoKS5zZWxlY3RlZEtleXN9XG4gICAgICAgICAgICAgICB0aGVtZT17dGhlbWV9PlxuICAgICAgICB7ZGF0YUlkID8gdGhpcy5za01vZGVsKCkuc2tWYWwoZGF0YUlkKS5tYXAoKCRpdGVtSW5mbykgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLm1lbnVNYXAoJGl0ZW1JbmZvKTtcbiAgICAgICAgfSkgOiB0aGlzLnNrVHJhbnNQcm9wczJDaGlsZCgpfVxuICAgICAgPC9Db21wVGFnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==