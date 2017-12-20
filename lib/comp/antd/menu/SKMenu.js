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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9tZW51L1NLTWVudS5qcyJdLCJuYW1lcyI6WyJTS01lbnUiLCJhcmdzIiwiY29tcE5hbWUiLCJoYW5kbGVDbGljayIsImNsaWNrSW5mbyIsInByb3BzIiwib25DbGljayIsImlzRnVuY3Rpb24iLCJuZXdWYWwiLCJjbG9uZSIsInNrVmFsIiwic2VsZWN0ZWRLZXlzIiwia2V5IiwiaGFuZGxlT3BlbkNoYW5nZSIsIm9wZW5LZXlzIiwib25PcGVuQ2hhbmdlIiwic2xpY2UiLCJpdGVtSW5mbyIsImRpc3BsYXlJdGVtIiwiZGF0YUlkIiwibW9kZSIsIm1lbnVDZmdzIiwic2tNb2RlbCIsImRpc3BsYXlUaXRsZSIsIklubGluZSIsImluZGV4T2YiLCJydG5DZmdzIiwiY2hpbGRyZW4iLCJpc0VtcHR5IiwicHVzaCIsInNrVHJhbnNQcm9wczJTZWxmIiwicm91dGVyIiwiaWNvbiIsInRpdGxlIiwibWFwIiwibWVudU1hcCIsImJpbmQiLCJDb21wVGFnIiwiY29tcFRhZyIsInRoZW1lIiwiJGl0ZW1JbmZvIiwic2tUcmFuc1Byb3BzMkNoaWxkIiwiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwidW5kZWZpbmVkIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxNOzs7QUFhbkIsb0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLDJJQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLFFBQWhCO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixVQUFDQyxTQUFELEVBQWU7QUFDaEMsVUFBSSxNQUFLQyxLQUFMLENBQVdDLE9BQVgsSUFBc0IsaUJBQUVDLFVBQUYsQ0FB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YSxLQUFLVCxpQkFBTCxDQUF1Qk8sT0FBdkIsQ0FBYjtBQUNTLGdCQUFNakIsSUFEZjtBQUVTLG1CQUFTLEtBQUtqQixXQUZ2QjtBQUdTLHdCQUFjLEtBQUtVLGdCQUg1QjtBQUlTLG9CQUFVLEtBQUtILEtBQUwsR0FBYUksUUFKaEM7QUFLUyx3QkFBYyxLQUFLSixLQUFMLEdBQWFDLFlBTHBDO0FBTVMsaUJBQU80QixLQU5oQjtBQU9HcEIsaUJBQVMsS0FBS0csT0FBTCxHQUFlWixLQUFmLENBQXFCUyxNQUFyQixFQUE2QmUsR0FBN0IsQ0FBaUMsVUFBQ00sU0FBRCxFQUFlO0FBQ3hELGlCQUFPLE9BQUtMLE9BQUwsQ0FBYUssU0FBYixDQUFQO0FBQ0QsU0FGUyxDQUFULEdBRUksS0FBS0Msa0JBQUw7QUFUUCxPQURGO0FBYUQ7Ozs7OztBQWxGa0J6QyxNLENBQ1owQyxZLEdBQWUsU0FBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0QsWUFBdkIsRUFBcUMscUJBQVdBLFlBQWhELEVBQThELG9CQUFVQSxZQUF4RSxFQUFzRixxQkFBV0EsWUFBakcsRUFBK0c7QUFDbklKLHlCQURtSTtBQUVuSW5CLFVBQVF5QixTQUYySDtBQUduSTFCLGVBQWEscUJBQUNELFFBQUQsRUFBYztBQUN6QixXQUFPLElBQVA7QUFDRDtBQUxrSSxDQUEvRyxDO0FBREhqQixNLENBUVo2QyxTLEdBQVksU0FBR0YsTUFBSCxDQUFVLEVBQVYsRUFBYyxtQkFBU0UsU0FBdkIsRUFBa0MscUJBQVdBLFNBQTdDLEVBQXdELG9CQUFVQSxTQUFsRSxFQUE2RSxxQkFBV0EsU0FBeEYsRUFBbUc7QUFDcEgxQixVQUFRLG9CQUFVMkIsTUFEa0c7QUFFcEg1QixlQUFhLG9CQUFVNkI7QUFGNkYsQ0FBbkcsQztrQkFSQS9DLE0iLCJmaWxlIjoiY29tcC9hbnRkL21lbnUvU0tNZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNZW51fSBmcm9tICdhbnRkJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBPcmlnaW5NZW51IGZyb20gJy4vT3JpZ2luTWVudSc7XG5pbXBvcnQgU0tNZW51SXRlbSBmcm9tICcuL1NLTWVudUl0ZW0nO1xuaW1wb3J0IFNLU3ViTWVudSBmcm9tICcuL1NLU3ViTWVudSc7XG5pbXBvcnQgQW50ZENvbXAgZnJvbSAnLi4vQW50ZENvbXAnO1xuaW1wb3J0IFNLSWNvbiBmcm9tICcuLi9pY29uL1NLSWNvbic7XG5pbXBvcnQgU0tMaW5rIGZyb20gJy4uLy4uL3JlYWN0L1NLTGluayc7XG5pbXBvcnQge0Rpcn0gZnJvbSAnLi4vLi4vLi4vdXRpbC9Db25zdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNLTWVudSBleHRlbmRzIEFudGRDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAuZGVmYXVsdFByb3BzLCBTS01lbnVJdGVtLmRlZmF1bHRQcm9wcywgU0tTdWJNZW51LmRlZmF1bHRQcm9wcywgT3JpZ2luTWVudS5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBNZW51LFxuICAgIGRhdGFJZDogdW5kZWZpbmVkLFxuICAgIGRpc3BsYXlJdGVtOiAoaXRlbUluZm8pID0+IHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQW50ZENvbXAucHJvcFR5cGVzLCBTS01lbnVJdGVtLnByb3BUeXBlcywgU0tTdWJNZW51LnByb3BUeXBlcywgT3JpZ2luTWVudS5wcm9wVHlwZXMsIHtcbiAgICBkYXRhSWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzcGxheUl0ZW06IFByb3BUeXBlcy5mdW5jXG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ1NLTWVudSc7XG4gICAgdGhpcy5oYW5kbGVDbGljayA9IChjbGlja0luZm8pID0+IHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2sgJiYgXy5pc0Z1bmN0aW9uKHRoaXMucHJvcHMub25DbGljaykpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGNsaWNrSW5mbyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgbmV3VmFsID0gXy5jbG9uZSh0aGlzLnNrVmFsKCkpO1xuICAgICAgICAvLyBuZXdWYWwub3BlbktleXMgPSB0aGlzLnNrVmFsKCkub3BlbktleXM7XG4gICAgICAgIG5ld1ZhbC5zZWxlY3RlZEtleXMgPSBbY2xpY2tJbmZvLmtleV07XG4gICAgICAgIHRoaXMuc2tWYWwobmV3VmFsKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlT3BlbkNoYW5nZSA9IChvcGVuS2V5cykgPT4ge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25PcGVuQ2hhbmdlICYmIF8uaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uT3BlbkNoYW5nZSkpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbk9wZW5DaGFuZ2Uob3BlbktleXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IG5ld1ZhbCA9IF8uY2xvbmUodGhpcy5za1ZhbCgpKTtcbiAgICAgICAgbmV3VmFsLm9wZW5LZXlzID0gb3BlbktleXMuc2xpY2UoMCk7XG4gICAgICAgIHRoaXMuc2tWYWwobmV3VmFsKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgbWVudU1hcChpdGVtSW5mbykge1xuICAgIGxldCB7ZGlzcGxheUl0ZW0sIGRhdGFJZCwgbW9kZX0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBtZW51Q2ZncyA9IHRoaXMuc2tNb2RlbCgpLnNrVmFsKGRhdGFJZCk7XG5cbiAgICBsZXQgZGlzcGxheVRpdGxlID0gKChtb2RlID09PSBEaXIuSW5saW5lKSB8fCBtZW51Q2Zncy5pbmRleE9mKGl0ZW1JbmZvKSA9PT0gLTEpO1xuICAgIGxldCBydG5DZmdzID0gW107XG5cbiAgICBpZiAoaXRlbUluZm8uY2hpbGRyZW4gJiYgIV8uaXNFbXB0eShpdGVtSW5mby5jaGlsZHJlbikpIHtcbiAgICAgIHJ0bkNmZ3MucHVzaCg8U0tTdWJNZW51IHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKFNLU3ViTWVudSl9IGtleT17aXRlbUluZm8ucm91dGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50TWVudT17dGhpc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNLSWNvbiB0eXBlPXtpdGVtSW5mby5pY29ufS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntkaXNwbGF5VGl0bGUgJiYgaXRlbUluZm8udGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPn0+XG4gICAgICAgIHtpdGVtSW5mby5jaGlsZHJlbi5tYXAodGhpcy5tZW51TWFwLmJpbmQodGhpcykpfVxuICAgICAgPC9TS1N1Yk1lbnU+KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRpc3BsYXlJdGVtICYmIGRpc3BsYXlJdGVtKGl0ZW1JbmZvKSkge1xuICAgICAgICBydG5DZmdzLnB1c2goPFNLTWVudUl0ZW0gey4uLnRoaXMuc2tUcmFuc1Byb3BzMlNlbGYoU0tNZW51SXRlbSl9IGtleT17aXRlbUluZm8ucm91dGVyfSBwYXJlbnRNZW51PXt0aGlzfT5cbiAgICAgICAgICA8U0tMaW5rIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKFNLTGluayl9IHRvPXtpdGVtSW5mby5yb3V0ZXJ9PlxuICAgICAgICAgICAge2l0ZW1JbmZvLmljb24gJiYgPFNLSWNvbiB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihTS0ljb24pfSB0eXBlPXtpdGVtSW5mby5pY29ufS8+fVxuICAgICAgICAgICAge2Rpc3BsYXlUaXRsZSAmJiBpdGVtSW5mby50aXRsZX1cbiAgICAgICAgICA8L1NLTGluaz5cbiAgICAgICAgPC9TS01lbnVJdGVtPik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBydG5DZmdzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZywgZGF0YUlkLCBtb2RlLCB0aGVtZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLnNrVHJhbnNQcm9wczJTZWxmKENvbXBUYWcpfVxuICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cbiAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICBvbk9wZW5DaGFuZ2U9e3RoaXMuaGFuZGxlT3BlbkNoYW5nZX1cbiAgICAgICAgICAgICAgIG9wZW5LZXlzPXt0aGlzLnNrVmFsKCkub3BlbktleXN9XG4gICAgICAgICAgICAgICBzZWxlY3RlZEtleXM9e3RoaXMuc2tWYWwoKS5zZWxlY3RlZEtleXN9XG4gICAgICAgICAgICAgICB0aGVtZT17dGhlbWV9PlxuICAgICAgICB7ZGF0YUlkID8gdGhpcy5za01vZGVsKCkuc2tWYWwoZGF0YUlkKS5tYXAoKCRpdGVtSW5mbykgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLm1lbnVNYXAoJGl0ZW1JbmZvKTtcbiAgICAgICAgfSkgOiB0aGlzLnNrVHJhbnNQcm9wczJDaGlsZCgpfVxuICAgICAgPC9Db21wVGFnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==