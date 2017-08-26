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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9TS01lbnUuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwiYXNzaWduIiwiaW5saW5lSW5kZW50IiwiUHJvcFR5cGVzIiwibnVtYmVyIiwib25DbGljayIsImZ1bmMiLCJvbk9wZW5DaGFuZ2UiLCJsZXZlbCIsImRlZmF1bHRQcm9wcyIsIlNLTWVudSIsImFyZ3MiLCJvcGVuS2V5cyIsInByb3BzIiwiaXNGdW5jdGlvbiIsIm5ld1ZhbCIsImNsb25lIiwic2tWYWwiLCJzbGljZSIsImNsaWNrSW5mbyIsInNlbGVjdGVkS2V5cyIsImtleSIsIml0ZW1JbmZvIiwiZGlzcGxheUl0ZW0iLCJkYXRhSWQiLCJtb2RlIiwibWVudUNmZ3MiLCJpTW9kZWwiLCJkaXNwbGF5VGl0bGUiLCJJbmxpbmUiLCJpbmRleE9mIiwicnRuQ2ZncyIsImNoaWxkcmVuIiwiaXNFbXB0eSIsInB1c2giLCJyb3V0ZXIiLCJpY29uIiwidGl0bGUiLCJtYXAiLCJtZW51TWFwIiwiYmluZCIsIkNvbXBUYWciLCJjb21wVGFnIiwidGhlbWUiLCJjb21wVmFsaWRQcm9wcyIsImhhbmRsZUNsaWNrIiwiaGFuZGxlT3BlbkNoYW5nZSIsIiRpdGVtSW5mbyIsInNrUHJvcHNUcmFucyIsInVuZGVmaW5lZCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxlQUFLQSxTQUFMLEdBQWlCLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0QsU0FBbkIsRUFBOEI7QUFDN0NFLGdCQUFjLGdCQUFNQyxTQUFOLENBQWdCQyxNQURlO0FBRTdDQyxXQUFTLGdCQUFNRixTQUFOLENBQWdCRyxJQUZvQjtBQUc3Q0MsZ0JBQWMsZ0JBQU1KLFNBQU4sQ0FBZ0JHO0FBSGUsQ0FBOUIsRUFJZDtBQUNERSxTQUFPLGdCQUFNTCxTQUFOLENBQWdCQztBQUR0QixDQUpjLENBQWpCOztBQVFBLGVBQUtLLFlBQUwsR0FBb0IsZUFBR1IsTUFBSCxDQUFVLEVBQVYsRUFBYyxlQUFLUSxZQUFuQixFQUFpQztBQUNuRFAsZ0JBQWM7QUFEcUMsQ0FBakMsRUFFakIsRUFGaUIsQ0FBcEI7O0lBSXFCUSxNOzs7QUFhbkIsb0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLHNJQUNWQSxJQURVO0FBRXBCOzs7O3FDQUVnQkMsUSxFQUFVO0FBQ3pCLFVBQUksS0FBS0MsS0FBTCxDQUFXTixZQUFYLElBQTJCLGlCQUFFTyxVQUFGLENBQWEsS0FBS0QsS0FBTCxDQUFXTixZQUF4QixDQUEvQixFQUFzRTtBQUNwRSxhQUFLTSxLQUFMLENBQVdOLFlBQVgsQ0FBd0JLLFFBQXhCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBSUcsU0FBUyxpQkFBRUMsS0FBRixDQUFRLEtBQUtDLEtBQUwsRUFBUixDQUFiO0FBQ0FGLGVBQU9ILFFBQVAsR0FBa0JBLFNBQVNNLEtBQVQsQ0FBZSxDQUFmLENBQWxCO0FBQ0EsYUFBS0QsS0FBTCxDQUFXRixNQUFYO0FBQ0Q7QUFDRjs7O2dDQUVXSSxTLEVBQVc7QUFDckIsVUFBSSxLQUFLTixLQUFMLENBQVdSLE9BQVgsSUFBc0IsaUJBQUVTLFVBQUYsQ0FBYSxLQUFLRCxLQUFMLENBQVdSLE9BQXhCLENBQTFCLEVBQTREO0FBQzFELGFBQUtRLEtBQUwsQ0FBV1IsT0FBWCxDQUFtQmMsU0FBbkI7QUFDRCxPQUZELE1BRU87QUFDTCxZQUFJSixTQUFTLGlCQUFFQyxLQUFGLENBQVEsS0FBS0MsS0FBTCxFQUFSLENBQWI7QUFDQTtBQUNBRixlQUFPSyxZQUFQLEdBQXNCLENBQUNELFVBQVVFLEdBQVgsQ0FBdEI7QUFDQSxhQUFLSixLQUFMLENBQVdGLE1BQVg7QUFDRDtBQUNGOzs7NEJBRU9PLFEsRUFBVTtBQUFBLG1CQUNrQixLQUFLVCxLQUR2QjtBQUFBLFVBQ1hVLFdBRFcsVUFDWEEsV0FEVztBQUFBLFVBQ0VDLE1BREYsVUFDRUEsTUFERjtBQUFBLFVBQ1VDLElBRFYsVUFDVUEsSUFEVjs7QUFFaEIsVUFBSUMsV0FBVyxLQUFLQyxNQUFMLEdBQWNWLEtBQWQsQ0FBb0JPLE1BQXBCLENBQWY7O0FBRUEsVUFBSUksZUFBaUJILFFBQVEsV0FBSUksTUFBYixJQUF3QkgsU0FBU0ksT0FBVCxDQUFpQlIsUUFBakIsS0FBOEIsQ0FBQyxDQUEzRTtBQUNBLFVBQUlTLFVBQVUsRUFBZDs7QUFFQSxVQUFJVCxTQUFTVSxRQUFULElBQXFCLENBQUMsaUJBQUVDLE9BQUYsQ0FBVVgsU0FBU1UsUUFBbkIsQ0FBMUIsRUFBd0Q7QUFDdERELGdCQUFRRyxJQUFSLENBQWE7QUFBQTtBQUFBLFlBQVcsS0FBS1osU0FBU2EsTUFBekI7QUFDVyxtQkFBTztBQUFBO0FBQUE7QUFDTCxnRUFBUSxNQUFNYixTQUFTYyxJQUF2QixHQURLO0FBRUw7QUFBQTtBQUFBO0FBQU9SLGdDQUFnQk4sU0FBU2U7QUFBaEM7QUFGSyxhQURsQjtBQUtWZixtQkFBU1UsUUFBVCxDQUFrQk0sR0FBbEIsQ0FBc0IsS0FBS0MsT0FBTCxDQUFhQyxJQUFiLENBQWtCLElBQWxCLENBQXRCO0FBTFUsU0FBYjtBQU9ELE9BUkQsTUFRTztBQUNMLFlBQUlqQixlQUFlQSxZQUFZRCxRQUFaLENBQW5CLEVBQTBDO0FBQ3hDUyxrQkFBUUcsSUFBUixDQUFhO0FBQUE7QUFBQSxjQUFZLEtBQUtaLFNBQVNhLE1BQTFCO0FBQ1g7QUFBQTtBQUFBLGdCQUFNLElBQUliLFNBQVNhLE1BQW5CO0FBQ0diLHVCQUFTYyxJQUFULElBQWlCLGtEQUFRLE1BQU1kLFNBQVNjLElBQXZCLEdBRHBCO0FBRUdSLDhCQUFnQk4sU0FBU2U7QUFGNUI7QUFEVyxXQUFiO0FBTUQ7QUFDRjtBQUNELGFBQU9OLE9BQVA7QUFDRDs7OzZCQUVRO0FBQUE7O0FBQUEsb0JBQ3VDLEtBQUtsQixLQUQ1QztBQUFBLFVBQ080QixPQURQLFdBQ0ZDLE9BREU7QUFBQSxVQUNnQmxCLE1BRGhCLFdBQ2dCQSxNQURoQjtBQUFBLFVBQ3dCQyxJQUR4QixXQUN3QkEsSUFEeEI7QUFBQSxVQUM4QmtCLEtBRDlCLFdBQzhCQSxLQUQ5Qjs7O0FBR1AsYUFDRTtBQUFDLGVBQUQ7QUFBQSxxQkFBYSxLQUFLQyxjQUFMLENBQW9CSCxPQUFwQixDQUFiO0FBQ0UsZ0JBQU1oQixJQURSO0FBRUUsbUJBQVMsS0FBS29CLFdBQUwsQ0FBaUJMLElBQWpCLENBQXNCLElBQXRCLENBRlg7QUFHRSx3QkFBYyxLQUFLTSxnQkFBTCxDQUFzQk4sSUFBdEIsQ0FBMkIsSUFBM0IsQ0FIaEI7QUFJRSxvQkFBVSxLQUFLdkIsS0FBTCxHQUFhTCxRQUp6QjtBQUtFLHdCQUFjLEtBQUtLLEtBQUwsR0FBYUcsWUFMN0I7QUFNRSxpQkFBT3VCLEtBTlQ7QUFPR25CLGlCQUFTLEtBQUtHLE1BQUwsR0FBY1YsS0FBZCxDQUFvQk8sTUFBcEIsRUFBNEJjLEdBQTVCLENBQWdDLFVBQUNTLFNBQUQsRUFBZTtBQUN2RCxpQkFBTyxPQUFLUixPQUFMLENBQWFRLFNBQWIsQ0FBUDtBQUNELFNBRlMsQ0FBVCxHQUVJLEtBQUtDLFlBQUw7QUFUUCxPQURGO0FBYUQ7Ozs7OztBQWxGa0J0QyxNLENBQ1pELFksR0FBZSxlQUFHUixNQUFILENBQVUsRUFBVixFQUFjLGVBQUtRLFlBQW5CLEVBQWlDO0FBQ3JEaUMseUJBRHFEO0FBRXJEbEIsVUFBUXlCLFNBRjZDO0FBR3JEMUIsZUFBYSxxQkFBQ0QsUUFBRCxFQUFjO0FBQ3pCLFdBQU8sSUFBUDtBQUNEO0FBTG9ELENBQWpDLEM7QUFESFosTSxDQVFaVixTLEdBQVksZUFBR0MsTUFBSCxDQUFVLEVBQVYsRUFBYyxlQUFLRCxTQUFuQixFQUE4QixxQkFBV0EsU0FBekMsRUFBb0Qsb0JBQVVBLFNBQTlELEVBQXlFLGVBQUtBLFNBQTlFLEVBQXlGO0FBQzFHd0IsVUFBUSxnQkFBTXJCLFNBQU4sQ0FBZ0IrQyxNQURrRjtBQUUxRzNCLGVBQWEsZ0JBQU1wQixTQUFOLENBQWdCRztBQUY2RSxDQUF6RixDO2tCQVJBSSxNIiwiZmlsZSI6ImNvbXAvYW50ZC9TS01lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01lbnV9IGZyb20gJ2FudGQnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFNLIGZyb20gJ3NrLWpzJztcbmltcG9ydCBDb21wIGZyb20gJy4uLy4uL3V0aWwvQ29tcCc7XG5pbXBvcnQge0Rpcn0gZnJvbSAnLi4vLi4vdXRpbC9Db25zdCc7XG5pbXBvcnQgU0tJY29uIGZyb20gJy4vU0tJY29uJztcbmltcG9ydCBTS01lbnVJdGVtIGZyb20gJy4vU0tNZW51SXRlbSc7XG5pbXBvcnQgU0tTdWJNZW51IGZyb20gJy4vU0tTdWJNZW51JztcblxuTWVudS5wcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIE1lbnUucHJvcFR5cGVzLCB7XG4gIGlubGluZUluZGVudDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgb25DbGljazogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIG9uT3BlbkNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbn0sIHtcbiAgbGV2ZWw6IFJlYWN0LlByb3BUeXBlcy5udW1iZXJcbn0pO1xuXG5NZW51LmRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgTWVudS5kZWZhdWx0UHJvcHMsIHtcbiAgaW5saW5lSW5kZW50OiAyNFxufSwge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS01lbnUgZXh0ZW5kcyBDb21wIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IFNLLmFzc2lnbih7fSwgTWVudS5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBNZW51LFxuICAgIGRhdGFJZDogdW5kZWZpbmVkLFxuICAgIGRpc3BsYXlJdGVtOiAoaXRlbUluZm8pID0+IHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9KTtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQ29tcC5wcm9wVHlwZXMsIFNLTWVudUl0ZW0ucHJvcFR5cGVzLCBTS1N1Yk1lbnUucHJvcFR5cGVzLCBNZW51LnByb3BUeXBlcywge1xuICAgIGRhdGFJZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNwbGF5SXRlbTogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICB9XG5cbiAgaGFuZGxlT3BlbkNoYW5nZShvcGVuS2V5cykge1xuICAgIGlmICh0aGlzLnByb3BzLm9uT3BlbkNoYW5nZSAmJiBfLmlzRnVuY3Rpb24odGhpcy5wcm9wcy5vbk9wZW5DaGFuZ2UpKSB7XG4gICAgICB0aGlzLnByb3BzLm9uT3BlbkNoYW5nZShvcGVuS2V5cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBuZXdWYWwgPSBfLmNsb25lKHRoaXMuc2tWYWwoKSk7XG4gICAgICBuZXdWYWwub3BlbktleXMgPSBvcGVuS2V5cy5zbGljZSgwKTtcbiAgICAgIHRoaXMuc2tWYWwobmV3VmFsKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDbGljayhjbGlja0luZm8pIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrICYmIF8uaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uQ2xpY2spKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2soY2xpY2tJbmZvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG5ld1ZhbCA9IF8uY2xvbmUodGhpcy5za1ZhbCgpKTtcbiAgICAgIC8vIG5ld1ZhbC5vcGVuS2V5cyA9IHRoaXMuc2tWYWwoKS5vcGVuS2V5cztcbiAgICAgIG5ld1ZhbC5zZWxlY3RlZEtleXMgPSBbY2xpY2tJbmZvLmtleV07XG4gICAgICB0aGlzLnNrVmFsKG5ld1ZhbCk7XG4gICAgfVxuICB9XG5cbiAgbWVudU1hcChpdGVtSW5mbykge1xuICAgIGxldCB7ZGlzcGxheUl0ZW0sIGRhdGFJZCwgbW9kZX0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBtZW51Q2ZncyA9IHRoaXMuaU1vZGVsKCkuc2tWYWwoZGF0YUlkKTtcblxuICAgIGxldCBkaXNwbGF5VGl0bGUgPSAoKG1vZGUgPT0gRGlyLklubGluZSkgfHwgbWVudUNmZ3MuaW5kZXhPZihpdGVtSW5mbykgPT0gLTEpO1xuICAgIGxldCBydG5DZmdzID0gW107XG5cbiAgICBpZiAoaXRlbUluZm8uY2hpbGRyZW4gJiYgIV8uaXNFbXB0eShpdGVtSW5mby5jaGlsZHJlbikpIHtcbiAgICAgIHJ0bkNmZ3MucHVzaCg8U0tTdWJNZW51IGtleT17aXRlbUluZm8ucm91dGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U0tJY29uIHR5cGU9e2l0ZW1JbmZvLmljb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntkaXNwbGF5VGl0bGUgJiYgaXRlbUluZm8udGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPn0+XG4gICAgICAgIHtpdGVtSW5mby5jaGlsZHJlbi5tYXAodGhpcy5tZW51TWFwLmJpbmQodGhpcykpfVxuICAgICAgPC9TS1N1Yk1lbnU+KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRpc3BsYXlJdGVtICYmIGRpc3BsYXlJdGVtKGl0ZW1JbmZvKSkge1xuICAgICAgICBydG5DZmdzLnB1c2goPFNLTWVudUl0ZW0ga2V5PXtpdGVtSW5mby5yb3V0ZXJ9PlxuICAgICAgICAgIDxMaW5rIHRvPXtpdGVtSW5mby5yb3V0ZXJ9PlxuICAgICAgICAgICAge2l0ZW1JbmZvLmljb24gJiYgPFNLSWNvbiB0eXBlPXtpdGVtSW5mby5pY29ufS8+fVxuICAgICAgICAgICAge2Rpc3BsYXlUaXRsZSAmJiBpdGVtSW5mby50aXRsZX1cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvU0tNZW51SXRlbT4pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcnRuQ2ZncztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2NvbXBUYWc6IENvbXBUYWcsIGRhdGFJZCwgbW9kZSwgdGhlbWV9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5jb21wVmFsaWRQcm9wcyhDb21wVGFnKX1cbiAgICAgICAgbW9kZT17bW9kZX1cbiAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpfVxuICAgICAgICBvbk9wZW5DaGFuZ2U9e3RoaXMuaGFuZGxlT3BlbkNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICBvcGVuS2V5cz17dGhpcy5za1ZhbCgpLm9wZW5LZXlzfVxuICAgICAgICBzZWxlY3RlZEtleXM9e3RoaXMuc2tWYWwoKS5zZWxlY3RlZEtleXN9XG4gICAgICAgIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIHtkYXRhSWQgPyB0aGlzLmlNb2RlbCgpLnNrVmFsKGRhdGFJZCkubWFwKCgkaXRlbUluZm8pID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5tZW51TWFwKCRpdGVtSW5mbyk7XG4gICAgICAgIH0pIDogdGhpcy5za1Byb3BzVHJhbnMoKX1cbiAgICAgIDwvQ29tcFRhZz5cbiAgICApO1xuICB9XG59XG4iXX0=