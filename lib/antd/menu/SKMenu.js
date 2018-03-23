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

/*eslint no-unused-vars: "off"*/
/*eslint react/jsx-closing-tag-location: "off"*/

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
          _extends({}, this.skTransProps2Self(_SKSubMenu2.default), {
            key: itemInfo.router,
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
            )
          }),
          itemInfo.children.map(this.menuMap.bind(this))
        ));
      } else if (displayItem && displayItem(itemInfo)) {
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
          theme: theme
        }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvbWVudS9TS01lbnUuanMiXSwibmFtZXMiOlsiU0tNZW51IiwiYXJncyIsImNvbXBOYW1lIiwiaGFuZGxlQ2xpY2siLCJjbGlja0luZm8iLCJwcm9wcyIsIm9uQ2xpY2siLCJpc0Z1bmN0aW9uIiwibmV3VmFsIiwiY2xvbmUiLCJza1ZhbCIsInNlbGVjdGVkS2V5cyIsImtleSIsImhhbmRsZU9wZW5DaGFuZ2UiLCJvcGVuS2V5cyIsIm9uT3BlbkNoYW5nZSIsInNsaWNlIiwiaXRlbUluZm8iLCJkaXNwbGF5SXRlbSIsImRhdGFJZCIsIm1vZGUiLCJtZW51Q2ZncyIsInNrTW9kZWwiLCJkaXNwbGF5VGl0bGUiLCJJbmxpbmUiLCJpbmRleE9mIiwicnRuQ2ZncyIsImNoaWxkcmVuIiwiaXNFbXB0eSIsInB1c2giLCJza1RyYW5zUHJvcHMyU2VsZiIsInJvdXRlciIsImljb24iLCJ0aXRsZSIsIm1hcCIsIm1lbnVNYXAiLCJiaW5kIiwiQ29tcFRhZyIsImNvbXBUYWciLCJ0aGVtZSIsIiRpdGVtSW5mbyIsInNrVHJhbnNQcm9wczJDaGlsZCIsImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsInVuZGVmaW5lZCIsInByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7O0lBRXFCQSxNOzs7QUFhbkIsb0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLDJJQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLFFBQWhCO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixVQUFDQyxTQUFELEVBQWU7QUFDaEMsVUFBSSxNQUFLQyxLQUFMLENBQVdDLE9BQVgsSUFBc0IsaUJBQUVDLFVB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S1QsaUJBQUwsQ0FBdUJPLE9BQXZCLENBRE47QUFFRSxnQkFBTWpCLElBRlI7QUFHRSxtQkFBUyxLQUFLakIsV0FIaEI7QUFJRSx3QkFBYyxLQUFLVSxnQkFKckI7QUFLRSxvQkFBVSxLQUFLSCxLQUFMLEdBQWFJLFFBTHpCO0FBTUUsd0JBQWMsS0FBS0osS0FBTCxHQUFhQyxZQU43QjtBQU9FLGlCQUFPNEI7QUFQVDtBQVNHcEIsaUJBQVMsS0FBS0csT0FBTCxHQUFlWixLQUFmLENBQXFCUyxNQUFyQixFQUE2QmUsR0FBN0IsQ0FBaUMsVUFBQ00sU0FBRCxFQUFlO0FBQ3hELGlCQUFPLE9BQUtMLE9BQUwsQ0FBYUssU0FBYixDQUFQO0FBQ0QsU0FGUyxDQUFULEdBRUksS0FBS0Msa0JBQUw7QUFYUCxPQURGO0FBZUQ7Ozs7OztBQXJGa0J6QyxNLENBQ1owQyxZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUMscUJBQVdBLFlBQWhELEVBQThELG9CQUFVQSxZQUF4RSxFQUFzRixxQkFBV0EsWUFBakcsRUFBK0c7QUFDbklKLHlCQURtSTtBQUVuSW5CLFVBQVF5QixTQUYySDtBQUduSTFCLGVBQWEscUJBQUNELFFBQUQsRUFBYztBQUN6QixXQUFPLElBQVA7QUFDRDtBQUxrSSxDQUEvRyxDO0FBREhqQixNLENBUVo2QyxTLEdBQVksU0FBR0YsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0UsU0FBdkIsRUFBa0MscUJBQVdBLFNBQTdDLEVBQXdELG9CQUFVQSxTQUFsRSxFQUE2RSxxQkFBV0EsU0FBeEYsRUFBbUc7QUFDcEgxQixVQUFRLG9CQUFVMkIsTUFEa0c7QUFFcEg1QixlQUFhLG9CQUFVNkI7QUFGNkYsQ0FBbkcsQztrQkFSQS9DLE0iLCJmaWxlIjoiYW50ZC9tZW51L1NLTWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lbnUgfSBmcm9tICdhbnRkJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNLIH0gZnJvbSAnc2stanMnO1xuaW1wb3J0IE9yaWdpbk1lbnUgZnJvbSAnLi9PcmlnaW5NZW51JztcbmltcG9ydCBTS01lbnVJdGVtIGZyb20gJy4vU0tNZW51SXRlbSc7XG5pbXBvcnQgU0tTdWJNZW51IGZyb20gJy4vU0tTdWJNZW51JztcbmltcG9ydCBBbnRkQ29tcCBmcm9tICcuLi9BbnRkQ29tcCc7XG5pbXBvcnQgU0tJY29uIGZyb20gJy4uL2ljb24vU0tJY29uJztcbmltcG9ydCB7IERpciB9IGZyb20gJy4uLy4uL0NvbnN0JztcbmltcG9ydCBTS0xpbmsgZnJvbSAnLi4vLi4vcmVhY3QvU0tMaW5rJztcblxuLyplc2xpbnQgbm8tdW51c2VkLXZhcnM6IFwib2ZmXCIqL1xuLyplc2xpbnQgcmVhY3QvanN4LWNsb3NpbmctdGFnLWxvY2F0aW9uOiBcIm9mZlwiKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tNZW51IGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5kZWZhdWx0UHJvcHMsIFNLTWVudUl0ZW0uZGVmYXVsdFByb3BzLCBTS1N1Yk1lbnUuZGVmYXVsdFByb3BzLCBPcmlnaW5NZW51LmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IE1lbnUsXG4gICAgZGF0YUlkOiB1bmRlZmluZWQsXG4gICAgZGlzcGxheUl0ZW06IChpdGVtSW5mbykgPT4ge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgfSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLnByb3BUeXBlcywgU0tNZW51SXRlbS5wcm9wVHlwZXMsIFNLU3ViTWVudS5wcm9wVHlwZXMsIE9yaWdpbk1lbnUucHJvcFR5cGVzLCB7XG4gICAgZGF0YUlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpc3BsYXlJdGVtOiBQcm9wVHlwZXMuZnVuYyxcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tNZW51JztcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gKGNsaWNrSW5mbykgPT4ge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25DbGljayAmJiBfLmlzRnVuY3Rpb24odGhpcy5wcm9wcy5vbkNsaWNrKSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2soY2xpY2tJbmZvKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld1ZhbCA9IF8uY2xvbmUodGhpcy5za1ZhbCgpKTtcbiAgICAgICAgLy8gbmV3VmFsLm9wZW5LZXlzID0gdGhpcy5za1ZhbCgpLm9wZW5LZXlzO1xuICAgICAgICBuZXdWYWwuc2VsZWN0ZWRLZXlzID0gW2NsaWNrSW5mby5rZXldO1xuICAgICAgICB0aGlzLnNrVmFsKG5ld1ZhbCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZU9wZW5DaGFuZ2UgPSAob3BlbktleXMpID0+IHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uT3BlbkNoYW5nZSAmJiBfLmlzRnVuY3Rpb24odGhpcy5wcm9wcy5vbk9wZW5DaGFuZ2UpKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25PcGVuQ2hhbmdlKG9wZW5LZXlzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld1ZhbCA9IF8uY2xvbmUodGhpcy5za1ZhbCgpKTtcbiAgICAgICAgbmV3VmFsLm9wZW5LZXlzID0gb3BlbktleXMuc2xpY2UoMCk7XG4gICAgICAgIHRoaXMuc2tWYWwobmV3VmFsKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgbWVudU1hcChpdGVtSW5mbykge1xuICAgIGNvbnN0IHsgZGlzcGxheUl0ZW0sIGRhdGFJZCwgbW9kZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBtZW51Q2ZncyA9IHRoaXMuc2tNb2RlbCgpLnNrVmFsKGRhdGFJZCk7XG5cbiAgICBjb25zdCBkaXNwbGF5VGl0bGUgPSAoKG1vZGUgPT09IERpci5JbmxpbmUpIHx8IG1lbnVDZmdzLmluZGV4T2YoaXRlbUluZm8pID09PSAtMSk7XG4gICAgY29uc3QgcnRuQ2ZncyA9IFtdO1xuXG4gICAgaWYgKGl0ZW1JbmZvLmNoaWxkcmVuICYmICFfLmlzRW1wdHkoaXRlbUluZm8uY2hpbGRyZW4pKSB7XG4gICAgICBydG5DZmdzLnB1c2goPFNLU3ViTWVudVxuICAgICAgICB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihTS1N1Yk1lbnUpfVxuICAgICAgICBrZXk9e2l0ZW1JbmZvLnJvdXRlcn1cbiAgICAgICAgcGFyZW50TWVudT17dGhpc31cbiAgICAgICAgdGl0bGU9ezxzcGFuPlxuICAgICAgICAgIDxTS0ljb24gdHlwZT17aXRlbUluZm8uaWNvbn0gLz5cbiAgICAgICAgICA8c3Bhbj57ZGlzcGxheVRpdGxlICYmIGl0ZW1JbmZvLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPn1cbiAgICAgID5cbiAgICAgICAge2l0ZW1JbmZvLmNoaWxkcmVuLm1hcCh0aGlzLm1lbnVNYXAuYmluZCh0aGlzKSl9XG4gICAgICA8L1NLU3ViTWVudT4pO1xuICAgIH0gZWxzZSBpZiAoZGlzcGxheUl0ZW0gJiYgZGlzcGxheUl0ZW0oaXRlbUluZm8pKSB7XG4gICAgICBydG5DZmdzLnB1c2goPFNLTWVudUl0ZW0gey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoU0tNZW51SXRlbSl9IGtleT17aXRlbUluZm8ucm91dGVyfSBwYXJlbnRNZW51PXt0aGlzfT5cbiAgICAgICAgPFNLTGluayB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihTS0xpbmspfSB0bz17aXRlbUluZm8ucm91dGVyfT5cbiAgICAgICAgICB7aXRlbUluZm8uaWNvbiAmJiA8U0tJY29uIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKFNLSWNvbil9IHR5cGU9e2l0ZW1JbmZvLmljb259IC8+fVxuICAgICAgICAgIHtkaXNwbGF5VGl0bGUgJiYgaXRlbUluZm8udGl0bGV9XG4gICAgICAgIDwvU0tMaW5rPlxuICAgICAgPC9TS01lbnVJdGVtPik7XG4gICAgfVxuICAgIHJldHVybiBydG5DZmdzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29tcFRhZzogQ29tcFRhZywgZGF0YUlkLCBtb2RlLCB0aGVtZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZ1xuICAgICAgICB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihDb21wVGFnKX1cbiAgICAgICAgbW9kZT17bW9kZX1cbiAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgb25PcGVuQ2hhbmdlPXt0aGlzLmhhbmRsZU9wZW5DaGFuZ2V9XG4gICAgICAgIG9wZW5LZXlzPXt0aGlzLnNrVmFsKCkub3BlbktleXN9XG4gICAgICAgIHNlbGVjdGVkS2V5cz17dGhpcy5za1ZhbCgpLnNlbGVjdGVkS2V5c31cbiAgICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgPlxuICAgICAgICB7ZGF0YUlkID8gdGhpcy5za01vZGVsKCkuc2tWYWwoZGF0YUlkKS5tYXAoKCRpdGVtSW5mbykgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLm1lbnVNYXAoJGl0ZW1JbmZvKTtcbiAgICAgICAgfSkgOiB0aGlzLnNrVHJhbnNQcm9wczJDaGlsZCgpfVxuICAgICAgPC9Db21wVGFnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==