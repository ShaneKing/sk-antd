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
    return _this;
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
          onClick: this.handleClick.bind(this),
          onOpenChange: this.handleOpenChange.bind(this),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9tZW51L1NLTWVudS5qcyJdLCJuYW1lcyI6WyJTS01lbnUiLCJhcmdzIiwiY29tcE5hbWUiLCJvcGVuS2V5cyIsInByb3BzIiwib25PcGVuQ2hhbmdlIiwiaXNGdW5jdGlvbiIsIm5ld1ZhbCIsImNsb25lIiwic2tWYWwiLCJzbGljZSIsImNsaWNrSW5mbyIsIm9uQ2xpY2siLCJzZWxlY3RlZEtleXMiLCJrZXkiLCJpdGVtSW5mbyIsImRpc3BsYXlJdGVtIiwiZGF0YUlkIiwibW9kZSIsIm1lbnVDZmdzIiwic2tNb2RlbCIsImRpc3BsYXlUaXRsZSIsIklubGluZSIsImluZGV4T2YiLCJydG5DZmdzIiwiY2hpbGRyZW4iLCJpc0VtcHR5IiwicHVzaCIsInNrVHJhbnNQcm9wczJTZWxmIiwicm91dGVyIiwiaWNvbiIsInRpdGxlIiwibWFwIiwibWVudU1hcCIsImJpbmQiLCJDb21wVGFnIiwiY29tcFRhZyIsInRoZW1lIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVPcGVuQ2hhbmdlIiwiJGl0ZW1JbmZvIiwic2tUcmFuc1Byb3BzMkNoaWxkIiwiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwidW5kZWZpbmVkIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxNOzs7QUFjbkIsb0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLDJJQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLFFBQWhCO0FBRm1CO0FBR3BCOzs7O3FDQUVnQkMsUSxFQUFVO0FBQ3pCLFVBQUksS0FBS0MsS0FBTCxDQUFXQyxZQUFYLElBQTJCLGlCQUFFQyxVQUFGLENBQWEsS0FBS0Ys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bUJBQVMsS0FBS29CLFdBQUwsQ0FBaUJKLElBQWpCLENBQXNCLElBQXRCLENBRmxCO0FBR1Msd0JBQWMsS0FBS0ssZ0JBQUwsQ0FBc0JMLElBQXRCLENBQTJCLElBQTNCLENBSHZCO0FBSVMsb0JBQVUsS0FBS3pCLEtBQUwsR0FBYU4sUUFKaEM7QUFLUyx3QkFBYyxLQUFLTSxLQUFMLEdBQWFJLFlBTHBDO0FBTVMsaUJBQU93QixLQU5oQjtBQU9HcEIsaUJBQVMsS0FBS0csT0FBTCxHQUFlWCxLQUFmLENBQXFCUSxNQUFyQixFQUE2QmUsR0FBN0IsQ0FBaUMsVUFBQ1EsU0FBRCxFQUFlO0FBQ3hELGlCQUFPLE9BQUtQLE9BQUwsQ0FBYU8sU0FBYixDQUFQO0FBQ0QsU0FGUyxDQUFULEdBRUksS0FBS0Msa0JBQUw7QUFUUCxPQURGO0FBYUQ7Ozs7OztBQXJGa0J6QyxNLENBQ1owQyxZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUMscUJBQVdBLFlBQWhELEVBQThELG9CQUFVQSxZQUF4RSxFQUFzRixxQkFBV0EsWUFBakcsRUFBK0c7QUFDbklOLHlCQURtSTtBQUVuSW5CLFVBQVEyQixTQUYySDtBQUduSTVCLGVBQWEscUJBQUNELFFBQUQsRUFBYztBQUN6QixXQUFPLElBQVA7QUFDRDtBQUxrSSxDQUEvRyxDO0FBREhmLE0sQ0FRWjZDLFMsR0FBWSxTQUFHRixNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTRSxTQUF2QixFQUFrQyxxQkFBV0EsU0FBN0MsRUFBd0Qsb0JBQVVBLFNBQWxFLEVBQTZFLHFCQUFXQSxTQUF4RixFQUFtRztBQUNwSDVCLFVBQVEsb0JBQVU2QixNQURrRztBQUVwSDlCLGVBQWEsb0JBQVUrQjtBQUY2RixDQUFuRyxDO2tCQVJBL0MsTSIsImZpbGUiOiJjb21wL2FudGQvbWVudS9TS01lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01lbnV9IGZyb20gJ2FudGQnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IE9yaWdpbk1lbnUgZnJvbSAnLi9PcmlnaW5NZW51JztcbmltcG9ydCBTS01lbnVJdGVtIGZyb20gJy4vU0tNZW51SXRlbSc7XG5pbXBvcnQgU0tTdWJNZW51IGZyb20gJy4vU0tTdWJNZW51JztcbmltcG9ydCBBbnRkQ29tcCBmcm9tICcuLi9BbnRkQ29tcCc7XG5pbXBvcnQgU0tJY29uIGZyb20gJy4uL2ljb24vU0tJY29uJztcbmltcG9ydCBTS0xpbmsgZnJvbSAnLi4vLi4vcmVhY3QvU0tMaW5rJztcbmltcG9ydCB7RGlyfSBmcm9tICcuLi8uLi8uLi91dGlsL0NvbnN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0tNZW51IGV4dGVuZHMgQW50ZENvbXAge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5kZWZhdWx0UHJvcHMsIFNLTWVudUl0ZW0uZGVmYXVsdFByb3BzLCBTS1N1Yk1lbnUuZGVmYXVsdFByb3BzLCBPcmlnaW5NZW51LmRlZmF1bHRQcm9wcywge1xuICAgIGNvbXBUYWc6IE1lbnUsXG4gICAgZGF0YUlkOiB1bmRlZmluZWQsXG4gICAgZGlzcGxheUl0ZW06IChpdGVtSW5mbykgPT4ge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5wcm9wVHlwZXMsIFNLTWVudUl0ZW0ucHJvcFR5cGVzLCBTS1N1Yk1lbnUucHJvcFR5cGVzLCBPcmlnaW5NZW51LnByb3BUeXBlcywge1xuICAgIGRhdGFJZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNwbGF5SXRlbTogUHJvcFR5cGVzLmZ1bmNcbiAgfSk7XG5cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb21wTmFtZSA9ICdTS01lbnUnO1xuICB9XG5cbiAgaGFuZGxlT3BlbkNoYW5nZShvcGVuS2V5cykge1xuICAgIGlmICh0aGlzLnByb3BzLm9uT3BlbkNoYW5nZSAmJiBfLmlzRnVuY3Rpb24odGhpcy5wcm9wcy5vbk9wZW5DaGFuZ2UpKSB7XG4gICAgICB0aGlzLnByb3BzLm9uT3BlbkNoYW5nZShvcGVuS2V5cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBuZXdWYWwgPSBfLmNsb25lKHRoaXMuc2tWYWwoKSk7XG4gICAgICBuZXdWYWwub3BlbktleXMgPSBvcGVuS2V5cy5zbGljZSgwKTtcbiAgICAgIHRoaXMuc2tWYWwobmV3VmFsKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDbGljayhjbGlja0luZm8pIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrICYmIF8uaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uQ2xpY2spKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2soY2xpY2tJbmZvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG5ld1ZhbCA9IF8uY2xvbmUodGhpcy5za1ZhbCgpKTtcbiAgICAgIC8vIG5ld1ZhbC5vcGVuS2V5cyA9IHRoaXMuc2tWYWwoKS5vcGVuS2V5cztcbiAgICAgIG5ld1ZhbC5zZWxlY3RlZEtleXMgPSBbY2xpY2tJbmZvLmtleV07XG4gICAgICB0aGlzLnNrVmFsKG5ld1ZhbCk7XG4gICAgfVxuICB9XG5cbiAgbWVudU1hcChpdGVtSW5mbykge1xuICAgIGxldCB7ZGlzcGxheUl0ZW0sIGRhdGFJZCwgbW9kZX0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBtZW51Q2ZncyA9IHRoaXMuc2tNb2RlbCgpLnNrVmFsKGRhdGFJZCk7XG5cbiAgICBsZXQgZGlzcGxheVRpdGxlID0gKChtb2RlID09PSBEaXIuSW5saW5lKSB8fCBtZW51Q2Zncy5pbmRleE9mKGl0ZW1JbmZvKSA9PT0gLTEpO1xuICAgIGxldCBydG5DZmdzID0gW107XG5cbiAgICBpZiAoaXRlbUluZm8uY2hpbGRyZW4gJiYgIV8uaXNFbXB0eShpdGVtSW5mby5jaGlsZHJlbikpIHtcbiAgICAgIHJ0bkNmZ3MucHVzaCg8U0tTdWJNZW51IHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKFNLU3ViTWVudSl9IGtleT17aXRlbUluZm8ucm91dGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50TWVudT17dGhpc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNLSWNvbiB0eXBlPXtpdGVtSW5mby5pY29ufS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntkaXNwbGF5VGl0bGUgJiYgaXRlbUluZm8udGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPn0+XG4gICAgICAgIHtpdGVtSW5mby5jaGlsZHJlbi5tYXAodGhpcy5tZW51TWFwLmJpbmQodGhpcykpfVxuICAgICAgPC9TS1N1Yk1lbnU+KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRpc3BsYXlJdGVtICYmIGRpc3BsYXlJdGVtKGl0ZW1JbmZvKSkge1xuICAgICAgICBydG5DZmdzLnB1c2goPFNLTWVudUl0ZW0gey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoU0tNZW51SXRlbSl9IGtleT17aXRlbUluZm8ucm91dGVyfSBwYXJlbnRNZW51PXt0aGlzfT5cbiAgICAgICAgICA8U0tMaW5rIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKFNLTGluayl9IHRvPXtpdGVtSW5mby5yb3V0ZXJ9PlxuICAgICAgICAgICAge2l0ZW1JbmZvLmljb24gJiYgPFNLSWNvbiB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihTS0ljb24pfSB0eXBlPXtpdGVtSW5mby5pY29ufS8+fVxuICAgICAgICAgICAge2Rpc3BsYXlUaXRsZSAmJiBpdGVtSW5mby50aXRsZX1cbiAgICAgICAgICA8L1NLTGluaz5cbiAgICAgICAgPC9TS01lbnVJdGVtPik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBydG5DZmdzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZywgZGF0YUlkLCBtb2RlLCB0aGVtZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKENvbXBUYWcpfVxuICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cbiAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgIG9uT3BlbkNoYW5nZT17dGhpcy5oYW5kbGVPcGVuQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICBvcGVuS2V5cz17dGhpcy5za1ZhbCgpLm9wZW5LZXlzfVxuICAgICAgICAgICAgICAgc2VsZWN0ZWRLZXlzPXt0aGlzLnNrVmFsKCkuc2VsZWN0ZWRLZXlzfVxuICAgICAgICAgICAgICAgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAge2RhdGFJZCA/IHRoaXMuc2tNb2RlbCgpLnNrVmFsKGRhdGFJZCkubWFwKCgkaXRlbUluZm8pID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5tZW51TWFwKCRpdGVtSW5mbyk7XG4gICAgICAgIH0pIDogdGhpcy5za1RyYW5zUHJvcHMyQ2hpbGQoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG59XG4iXX0=