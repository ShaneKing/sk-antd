'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _Comp2 = require('../../util/Comp');

var _Comp3 = _interopRequireDefault(_Comp2);

var _Const = require('../../util/Const');

var _Model = require('../../util/Model');

var _Model2 = _interopRequireDefault(_Model);

var _Reacts = require('../../util/Reacts');

var _Reacts2 = _interopRequireDefault(_Reacts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AntdComp = function (_Comp) {
  _inherits(AntdComp, _Comp);

  function AntdComp() {
    var _ref;

    _classCallCheck(this, AntdComp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = AntdComp.__proto__ || Object.getPrototypeOf(AntdComp)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'AntdComp';
    return _this;
  }

  _createClass(AntdComp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _get(AntdComp.prototype.__proto__ || Object.getPrototypeOf(AntdComp.prototype), 'componentDidMount', this).call(this);
      this.addAllErroredMonitor();
      this.addExtendErroredMonitor();
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {
      this.rmvAllErroredMonitor();
      this.rmvExtendErroredMonitor();
      _get(AntdComp.prototype.__proto__ || Object.getPrototypeOf(AntdComp.prototype), 'componentWillUpdate', this).call(this);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      _get(AntdComp.prototype.__proto__ || Object.getPrototypeOf(AntdComp.prototype), 'componentDidUpdate', this).call(this);
      this.addAllErroredMonitor();
      this.addExtendErroredMonitor();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.rmvAllErroredMonitor();
      this.rmvExtendErroredMonitor();
      _get(AntdComp.prototype.__proto__ || Object.getPrototypeOf(AntdComp.prototype), 'componentWillUnmount', this).call(this);
    }
  }, {
    key: 'addExtendErroredMonitor',
    value: function addExtendErroredMonitor() {}
  }, {
    key: 'rmvExtendErroredMonitor',
    value: function rmvExtendErroredMonitor() {}

    //monitor begin

  }, {
    key: 'addAllErroredMonitor',
    value: function addAllErroredMonitor() {
      var _this2 = this;

      _Model2.default.parseSao(this.props.monitor).forEach(function ($idOrReg) {
        _this2.addErroredMonitor($idOrReg);
      });
      //Self value monitor
      if (this.getModelId()) {
        this.addErroredMonitor(this.getModelId());
      }
    }
  }, {
    key: 'addErroredMonitor',
    value: function addErroredMonitor(idOrReg) {
      if (this.monitors.indexOf(idOrReg) < 0) {
        this.monitors.push(idOrReg);
      }
      if (_lodash2.default.isRegExp(idOrReg)) {
        this.skModel().addRegErroredListener(idOrReg, this.updateUI);
      } else {
        this.skModel().addIdErroredListener(idOrReg, this.updateUI);
      }
    }
  }, {
    key: 'rmvAllErroredMonitor',
    value: function rmvAllErroredMonitor() {
      var _this3 = this;

      this.monitors.forEach(function ($idOrReg) {
        _this3.rmvErroredMonitor($idOrReg);
      });
    }
  }, {
    key: 'rmvErroredMonitor',
    value: function rmvErroredMonitor(idOrReg) {
      if (_lodash2.default.isRegExp(idOrReg)) {
        this.skModel().rmvRegErroredListener(idOrReg, this.updateUI);
      } else {
        this.skModel().rmvIdErroredListener(idOrReg, this.updateUI);
      }
      this.monitors.skRmv(idOrReg);
    }
  }, {
    key: 'hasSpecialChild',
    value: function hasSpecialChild(specialChildName) {
      return _Reacts2.default.some(this.props.children, function (child, idx) {
        return child.type && child.type.name === specialChildName;
      }, this);
    }
  }]);

  return AntdComp;
}(_Comp3.default);

AntdComp.SK_PROPS = {
  COL_SPAN: 'colSpan',
  COL_XS: 'colXs',
  COL_SM: 'colSm',
  COL_MD: 'colMd',
  COL_LG: 'colLg',
  COL_XL: 'colXl',
  FORM_LABEL_COL: 'formLabelCol',
  FORM_LAYOUT: 'formLayout',
  FORM_WRAPPER_COL: 'formWrapperCol',
  GRID_GUTTER: 'gridGutter',
  IN_FROM_ITEM: 'inFormItem',
  IN_FROM_ROW: 'inFormRow',
  SIZE: 'size'
};
AntdComp.defaultProps = _skJs.SK.assign({}, _Comp3.default.defaultProps, {});
AntdComp.propTypes = _skJs.SK.assign({}, _Comp3.default.propTypes, {
  colSpan: _propTypes2.default.number,
  skColSpan: _propTypes2.default.number,
  colXs: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.object]),
  skColXs: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.object]),
  colSm: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.object]),
  skColSm: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.object]),
  colMd: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.object]),
  skColMd: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.object]),
  colLg: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.object]),
  skColLg: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.object]),
  colXl: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.object]),
  skColXl: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.object]),
  formLayout: _propTypes2.default.oneOf([_Const.Dir.Horizontal, _Const.Dir.Vertical, _Const.Dir.Inline]),
  skFormLayout: _propTypes2.default.oneOf([_Const.Dir.Horizontal, _Const.Dir.Vertical, _Const.Dir.Inline]), //Const.Dir
  formLabelCol: _propTypes2.default.object,
  skFormLabelCol: _propTypes2.default.object,
  formWrapperCol: _propTypes2.default.object,
  skFormWrapperCol: _propTypes2.default.object,
  gridGutter: _propTypes2.default.number,
  skGridGutter: _propTypes2.default.number,
  inFormItem: _propTypes2.default.bool,
  skInFormItem: _propTypes2.default.bool,
  inFormRow: _propTypes2.default.bool,
  skInFormRow: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf([_Const.SIZE.Large, _Const.SIZE.Default, _Const.SIZE.Small]),
  skSize: _propTypes2.default.oneOf([_Const.SIZE.Large, _Const.SIZE.Default, _Const.SIZE.Small])
});
exports.default = AntdComp;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9BbnRkQ29tcC5qcyJdLCJuYW1lcyI6WyJBbnRkQ29tcCIsImFyZ3MiLCJjb21wTmFtZSIsImFkZEFsbEVycm9yZWRNb25pdG9yIiwiYWRkRXh0ZW5kRXJyb3JlZE1vbml0b3IiLCJybXZBbGxFcnJvcmVkTW9uaXRvciIsInJtdkV4dGVuZEVycm9yZWRNb25pdG9yIiwicGFyc2VTYW8iLCJwcm9wcyIsIm1vbml0b3IiLCJmb3JFYWNoIiwiJGlkT3JSZWciLCJhZGRFcnJvcmVkTW9uaXRvciIsImdldE1vZGVsSWQiLCJpZE9yUmVnIiwibW9uaXRvcnMiLCJpbmRleE9mIiwicHVzaCIsImlzUmVnRXhwIiwic2tNb2RlbCIsImFkZFJlZ0Vycm9yZWRMaXN0ZW5lciIsInVwZGF0ZVVJIiwiYWRkSWRFcnJvcmVkTGlzdGVuZXIiLCJybXZFcnJvcmVkTW9uaXRvciIsInJtdlJlZ0Vycm9yZWRMaXN0ZW5lciIsInJtdklkRXJyb3JlZExpc3RlbmVyIiwic2tSbXYiLCJzcGVjaWFsQ2hpbGROYW1lIiwic29tZSIsImNoaWxkcmVuIiwiY2hpbGQiLCJpZHgiLCJ0eXBlIiwibmFtZSIsIlNLX1BST1BTIiwiQ09MX1NQQU4iLCJDT0xfWFMiLCJDT0xfU00iLCJDT0xfTUQiLCJDT0xfTEciLCJDT0xfWEwiLCJGT1JNX0xBQkVMX0NPTCIsIkZPUk1fTEFZT1VUIiwiRk9STV9XUkFQUEVSX0NPTCIsIkdSSURfR1VUVEVSIiwiSU5fRlJPTV9JVEVNIiwiSU5fRlJPTV9ST1ciLCJTSVpFIiwiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwicHJvcFR5cGVzIiwiY29sU3BhbiIsIm51bWJlciIsInNrQ29sU3BhbiIsImNvbFhzIiwib25lT2ZUeXBlIiwib2JqZWN0Iiwic2tDb2xYcyIsImNvbFNtIiwic2tDb2xTbSIsImNvbE1kIiwic2tDb2xNZCIsImNvbExnIiwic2tDb2xMZyIsImNvbFhsIiwic2tDb2xYbCIsImZvcm1MYXlvdXQiLCJvbmVPZiIsIkhvcml6b250YWwiLCJWZXJ0aWNhbCIsIklubGluZSIsInNrRm9ybUxheW91dCIsImZvcm1MYWJlbENvbCIsInNrRm9ybUxhYmVsQ29sIiwiZm9ybVdyYXBwZXJDb2wiLCJza0Zvcm1XcmFwcGVyQ29sIiwiZ3JpZEd1dHRlciIsInNrR3JpZEd1dHRlciIsImluRm9ybUl0ZW0iLCJib29sIiwic2tJbkZvcm1JdGVtIiwiaW5Gb3JtUm93Iiwic2tJbkZvcm1Sb3ciLCJzaXplIiwiTGFyZ2UiLCJEZWZhdWx0IiwiU21hbGwiLCJza1NpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7O0FBNEVuQixzQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsK0lBQ1ZBLElBRFU7O0FBRW5CLFVBQUtDLFFBQUwsR0FBZ0IsVUFBaEI7QUFGbUI7QUFHcEI7Ozs7d0NBRW1CO0FBQ2xCO0FBQ0EsV0FBS0Msb0JBQUw7QUFDQSxXQUFLQyx1QkFBTDtBQUNEOzs7MENBRXFCO0FBQ3BCLFdBQUtDLG9CQUFMO0FBQ0EsV0FBS0MsdUJBQUw7QUFDQTtBQUNEOzs7eUNBRW9CO0FBQ25CO0FBQ0EsV0FBS0gsb0JBQUw7QUFDQSxXQUFLQyx1QkFBTDtBQUNEOzs7MkNBRXNCO0FBQ3JCLFdBQUtDLG9CQUFMO0FBQ0EsV0FBS0MsdUJBQUw7QUFDQTtBQUNEOzs7OENBRXlCLENBQ3pCOzs7OENBRXlCLENBQ3pCOztBQUVEOzs7OzJDQUN1QjtBQUFBOztBQUNyQixzQkFBTUMsUUFBTixDQUFlLEtBQUtDLEtBQUwsQ0FBV0MsT0FBMUIsRUFBbUNDLE9BQW5DLENBQTJDLFVBQUNDLFFBQUQsRUFBYztBQUN2RCxlQUFLQyxpQkFBTCxDQUF1QkQsUUFBdkI7QUFDRCxPQUZEO0FBR0E7QUFDQSxVQUFJLEtBQUtFLFVBQUwsRUFBSixFQUF1QjtBQUNyQixhQUFLRCxp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S0FBTixFQUFhLFlBQUtDLE9BQWxCLEVBQTJCLFlBQUtDLEtBQWhDLENBQWhCLENBdkR5QztBQXdEL0NDLFVBQVEsb0JBQVVwQixLQUFWLENBQWdCLENBQUMsWUFBS2lCLEtBQU4sRUFBYSxZQUFLQyxPQUFsQixFQUEyQixZQUFLQyxLQUFoQyxDQUFoQjtBQXhEdUMsQ0FBOUIsQztrQkFqQkF0RixRIiwiZmlsZSI6ImNvbXAvYW50ZC9BbnRkQ29tcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCBDb21wIGZyb20gJy4uLy4uL3V0aWwvQ29tcCc7XG5pbXBvcnQge0RpciwgU0laRX0gZnJvbSAnLi4vLi4vdXRpbC9Db25zdCc7XG5pbXBvcnQgTW9kZWwgZnJvbSAnLi4vLi4vdXRpbC9Nb2RlbCc7XG5pbXBvcnQgUmVhY3RzIGZyb20gJy4uLy4uL3V0aWwvUmVhY3RzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW50ZENvbXAgZXh0ZW5kcyBDb21wIHtcbiAgc3RhdGljIFNLX1BST1BTID0ge1xuICAgIENPTF9TUEFOOiAnY29sU3BhbicsXG4gICAgQ09MX1hTOiAnY29sWHMnLFxuICAgIENPTF9TTTogJ2NvbFNtJyxcbiAgICBDT0xfTUQ6ICdjb2xNZCcsXG4gICAgQ09MX0xHOiAnY29sTGcnLFxuICAgIENPTF9YTDogJ2NvbFhsJyxcbiAgICBGT1JNX0xBQkVMX0NPTDogJ2Zvcm1MYWJlbENvbCcsXG4gICAgRk9STV9MQVlPVVQ6ICdmb3JtTGF5b3V0JyxcbiAgICBGT1JNX1dSQVBQRVJfQ09MOiAnZm9ybVdyYXBwZXJDb2wnLFxuICAgIEdSSURfR1VUVEVSOiAnZ3JpZEd1dHRlcicsXG4gICAgSU5fRlJPTV9JVEVNOiAnaW5Gb3JtSXRlbScsXG4gICAgSU5fRlJPTV9ST1c6ICdpbkZvcm1Sb3cnLFxuICAgIFNJWkU6ICdzaXplJ1xuICB9O1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCBDb21wLmRlZmF1bHRQcm9wcywge30pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBDb21wLnByb3BUeXBlcywge1xuICAgIGNvbFNwYW46IFByb3BUeXBlcy5udW1iZXIsXG4gICAgc2tDb2xTcGFuOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGNvbFhzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tDb2xYczogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIGNvbFNtOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tDb2xTbTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIGNvbE1kOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tDb2xNZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIGNvbExnOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tDb2xMZzogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIGNvbFhsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgc2tDb2xYbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIGZvcm1MYXlvdXQ6IFByb3BUeXBlcy5vbmVPZihbRGlyLkhvcml6b250YWwsIERpci5WZXJ0aWNhbCwgRGlyLklubGluZV0pLFxuICAgIHNrRm9ybUxheW91dDogUHJvcFR5cGVzLm9uZU9mKFtEaXIuSG9yaXpvbnRhbCwgRGlyLlZlcnRpY2FsLCBEaXIuSW5saW5lXSksLy9Db25zdC5EaXJcbiAgICBmb3JtTGFiZWxDb2w6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgc2tGb3JtTGFiZWxDb2w6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZm9ybVdyYXBwZXJDb2w6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgc2tGb3JtV3JhcHBlckNvbDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBncmlkR3V0dGVyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHNrR3JpZEd1dHRlcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICBpbkZvcm1JdGVtOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBza0luRm9ybUl0ZW06IFByb3BUeXBlcy5ib29sLFxuICAgIGluRm9ybVJvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2tJbkZvcm1Sb3c6IFByb3BUeXBlcy5ib29sLFxuICAgIHNpemU6IFByb3BUeXBlcy5vbmVPZihbU0laRS5MYXJnZSwgU0laRS5EZWZhdWx0LCBTSVpFLlNtYWxsXSksXG4gICAgc2tTaXplOiBQcm9wVHlwZXMub25lT2YoW1NJWkUuTGFyZ2UsIFNJWkUuRGVmYXVsdCwgU0laRS5TbWFsbF0pXG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvbXBOYW1lID0gJ0FudGRDb21wJztcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHN1cGVyLmNvbXBvbmVudERpZE1vdW50KCk7XG4gICAgdGhpcy5hZGRBbGxFcnJvcmVkTW9uaXRvcigpO1xuICAgIHRoaXMuYWRkRXh0ZW5kRXJyb3JlZE1vbml0b3IoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVcGRhdGUoKSB7XG4gICAgdGhpcy5ybXZBbGxFcnJvcmVkTW9uaXRvcigpO1xuICAgIHRoaXMucm12RXh0ZW5kRXJyb3JlZE1vbml0b3IoKTtcbiAgICBzdXBlci5jb21wb25lbnRXaWxsVXBkYXRlKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgc3VwZXIuY29tcG9uZW50RGlkVXBkYXRlKCk7XG4gICAgdGhpcy5hZGRBbGxFcnJvcmVkTW9uaXRvcigpO1xuICAgIHRoaXMuYWRkRXh0ZW5kRXJyb3JlZE1vbml0b3IoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucm12QWxsRXJyb3JlZE1vbml0b3IoKTtcbiAgICB0aGlzLnJtdkV4dGVuZEVycm9yZWRNb25pdG9yKCk7XG4gICAgc3VwZXIuY29tcG9uZW50V2lsbFVubW91bnQoKTtcbiAgfVxuXG4gIGFkZEV4dGVuZEVycm9yZWRNb25pdG9yKCkge1xuICB9XG5cbiAgcm12RXh0ZW5kRXJyb3JlZE1vbml0b3IoKSB7XG4gIH1cblxuICAvL21vbml0b3IgYmVnaW5cbiAgYWRkQWxsRXJyb3JlZE1vbml0b3IoKSB7XG4gICAgTW9kZWwucGFyc2VTYW8odGhpcy5wcm9wcy5tb25pdG9yKS5mb3JFYWNoKCgkaWRPclJlZykgPT4ge1xuICAgICAgdGhpcy5hZGRFcnJvcmVkTW9uaXRvcigkaWRPclJlZyk7XG4gICAgfSk7XG4gICAgLy9TZWxmIHZhbHVlIG1vbml0b3JcbiAgICBpZiAodGhpcy5nZXRNb2RlbElkKCkpIHtcbiAgICAgIHRoaXMuYWRkRXJyb3JlZE1vbml0b3IodGhpcy5nZXRNb2RlbElkKCkpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEVycm9yZWRNb25pdG9yKGlkT3JSZWcpIHtcbiAgICBpZiAodGhpcy5tb25pdG9ycy5pbmRleE9mKGlkT3JSZWcpIDwgMCkge1xuICAgICAgdGhpcy5tb25pdG9ycy5wdXNoKGlkT3JSZWcpO1xuICAgIH1cbiAgICBpZiAoXy5pc1JlZ0V4cChpZE9yUmVnKSkge1xuICAgICAgdGhpcy5za01vZGVsKCkuYWRkUmVnRXJyb3JlZExpc3RlbmVyKGlkT3JSZWcsIHRoaXMudXBkYXRlVUkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNrTW9kZWwoKS5hZGRJZEVycm9yZWRMaXN0ZW5lcihpZE9yUmVnLCB0aGlzLnVwZGF0ZVVJKVxuICAgIH1cbiAgfVxuXG4gIHJtdkFsbEVycm9yZWRNb25pdG9yKCkge1xuICAgIHRoaXMubW9uaXRvcnMuZm9yRWFjaCgoJGlkT3JSZWcpID0+IHtcbiAgICAgIHRoaXMucm12RXJyb3JlZE1vbml0b3IoJGlkT3JSZWcpO1xuICAgIH0pO1xuICB9XG5cbiAgcm12RXJyb3JlZE1vbml0b3IoaWRPclJlZykge1xuICAgIGlmIChfLmlzUmVnRXhwKGlkT3JSZWcpKSB7XG4gICAgICB0aGlzLnNrTW9kZWwoKS5ybXZSZWdFcnJvcmVkTGlzdGVuZXIoaWRPclJlZywgdGhpcy51cGRhdGVVSSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2tNb2RlbCgpLnJtdklkRXJyb3JlZExpc3RlbmVyKGlkT3JSZWcsIHRoaXMudXBkYXRlVUkpXG4gICAgfVxuICAgIHRoaXMubW9uaXRvcnMuc2tSbXYoaWRPclJlZyk7XG4gIH1cblxuICBoYXNTcGVjaWFsQ2hpbGQoc3BlY2lhbENoaWxkTmFtZSkge1xuICAgIHJldHVybiBSZWFjdHMuc29tZSh0aGlzLnByb3BzLmNoaWxkcmVuLCAoY2hpbGQsIGlkeCkgPT4ge1xuICAgICAgcmV0dXJuIGNoaWxkLnR5cGUgJiYgY2hpbGQudHlwZS5uYW1lID09PSBzcGVjaWFsQ2hpbGROYW1lXG4gICAgfSwgdGhpcyk7XG4gIH1cblxufVxuIl19