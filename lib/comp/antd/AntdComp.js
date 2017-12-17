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

/**
 * 1.The defaultProps and propTypes of AntD just can be use in wrapper Comp or non-Comp
 * 2.if origin exist, must be use origin
 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9BbnRkQ29tcC5qcyJdLCJuYW1lcyI6WyJBbnRkQ29tcCIsImFyZ3MiLCJjb21wTmFtZSIsImFkZEFsbEVycm9yZWRNb25pdG9yIiwiYWRkRXh0ZW5kRXJyb3JlZE1vbml0b3IiLCJybXZBbGxFcnJvcmVkTW9uaXRvciIsInJtdkV4dGVuZEVycm9yZWRNb25pdG9yIiwicGFyc2VTYW8iLCJwcm9wcyIsIm1vbml0b3IiLCJmb3JFYWNoIiwiJGlkT3JSZWciLCJhZGRFcnJvcmVkTW9uaXRvciIsImdldE1vZGVsSWQiLCJpZE9yUmVnIiwibW9uaXRvcnMiLCJpbmRleE9mIiwicHVzaCIsImlzUmVnRXhwIiwic2tNb2RlbCIsImFkZFJlZ0Vycm9yZWRMaXN0ZW5lciIsInVwZGF0ZVVJIiwiYWRkSWRFcnJvcmVkTGlzdGVuZXIiLCJybXZFcnJvcmVkTW9uaXRvciIsInJtdlJlZ0Vycm9yZWRMaXN0ZW5lciIsInJtdklkRXJyb3JlZExpc3RlbmVyIiwic2tSbXYiLCJzcGVjaWFsQ2hpbGROYW1lIiwic29tZSIsImNoaWxkcmVuIiwiY2hpbGQiLCJpZHgiLCJ0eXBlIiwibmFtZSIsIlNLX1BST1BTIiwiQ09MX1NQQU4iLCJDT0xfWFMiLCJDT0xfU00iLCJDT0xfTUQiLCJDT0xfTEciLCJDT0xfWEwiLCJGT1JNX0xBQkVMX0NPTCIsIkZPUk1fTEFZT1VUIiwiRk9STV9XUkFQUEVSX0NPTCIsIkdSSURfR1VUVEVSIiwiSU5fRlJPTV9JVEVNIiwiSU5fRlJPTV9ST1ciLCJTSVpFIiwiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwicHJvcFR5cGVzIiwiY29sU3BhbiIsIm51bWJlciIsInNrQ29sU3BhbiIsImNvbFhzIiwib25lT2ZUeXBlIiwib2JqZWN0Iiwic2tDb2xYcyIsImNvbFNtIiwic2tDb2xTbSIsImNvbE1kIiwic2tDb2xNZCIsImNvbExnIiwic2tDb2xMZyIsImNvbFhsIiwic2tDb2xYbCIsImZvcm1MYXlvdXQiLCJvbmVPZiIsIkhvcml6b250YWwiLCJWZXJ0aWNhbCIsIklubGluZSIsInNrRm9ybUxheW91dCIsImZvcm1MYWJlbENvbCIsInNrRm9ybUxhYmVsQ29sIiwiZm9ybVdyYXBwZXJDb2wiLCJza0Zvcm1XcmFwcGVyQ29sIiwiZ3JpZEd1dHRlciIsInNrR3JpZEd1dHRlciIsImluRm9ybUl0ZW0iLCJib29sIiwic2tJbkZvcm1JdGVtIiwiaW5Gb3JtUm93Iiwic2tJbkZvcm1Sb3ciLCJzaXplIiwiTGFyZ2UiLCJEZWZhdWx0IiwiU21hbGwiLCJza1NpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7O0lBSXFCQSxROzs7QUE0RW5CLHNCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSwrSUFDVkEsSUFEVTs7QUFFbkIsVUFBS0MsUUFBTCxHQUFnQixVQUFoQjtBQUZtQjtBQUdwQjs7Ozt3Q0FFbUI7QUFDbEI7QUFDQSxXQUFLQyxvQkFBTDtBQUNBLFdBQUtDLHVCQUFMO0FBQ0Q7OzswQ0FFcUI7QUFDcEIsV0FBS0Msb0JBQUw7QUFDQSxXQUFLQyx1QkFBTDtBQUNBO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkI7QUFDQSxXQUFLSCxvQkFBTDtBQUNBLFdBQUtDLHVCQUFMO0FBQ0Q7OzsyQ0FFc0I7QUFDckIsV0FBS0Msb0JBQUw7QUFDQSxXQUFLQyx1QkFBTDtBQUNBO0FBQ0Q7Ozs4Q0FFeUIsQ0FDekI7Ozs4Q0FFeUIsQ0FDekI7O0FBRUQ7Ozs7MkNBQ3VCO0FBQUE7O0FBQ3JCLHNCQUFNQyxRQUFOLENBQWUsS0FBS0MsS0FBTCxDQUFXQyxPQUExQixFQUFtQ0MsT0FBbkMsQ0FBMkMsVUFBQ0MsUUFBRCxFQUFjO0FBQ3ZELGVBQUtDLGlCQUFMLENBQXVCRCxRQUF2QjtBQUNELE9BRkQ7QUFHQTtBQUNBLFVBQUksS0FBS0UsVUFBTCxFQUFKLEVBQXVCO0FBQ3JCLGFBQUtELGlCQUFMLENBQXVCLEtBQUtDLFVBQUwsRUFBdkI7QUFDRDtBQUNGOzs7c0NBRWlCQyxPLEVBQVM7QUFDekIsVUFBSSxLQUFLQyxRQUFMLENBQWNDLE9BQWQsQ0FBc0JGLE9BQXRCLElBQWlDLENBQXJDLEVBQXdDO0FBQ3RDLGFBQUtDLFFBQUwsQ0FBY0UsSUFBZCxDQUFtQkgsT0FBbkI7QUFDRDtBQUNELFVBQUksaUJBQUVJLFFBQUYsQ0FBV0osT0FBWCxDQUFKLEVBQXlCO0FBQ3ZCLGFBQUtLLE9BQUwsR0FBZUMscUJBQWYsQ0FBcUNOLE9BQXJDLEVBQThDLEtBQUtPLFFBQW5EO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS0YsT0FBTCxHQUFlRyxvQkFBZixDQUFvQ1IsT0FBcEMsRUFBNkMsS0FBS08sUUFBbEQ7QUFDRDtBQUNGOzs7MkNBRXNCO0FBQUE7O0FBQ3JCLFdBQUtOLFFBQUwsQ0FBY0wsT0FBZCxDQUFzQixVQUFDQyxRQUFELEVBQWM7QUFDbEMsZUFBS1ksaUJBQUwsQ0FBdUJaLFFBQXZCO0FBQ0QsT0FGRDtBQUdEOzs7c0NBRWlCRyxPLEVBQVM7QUFDekIsVUFBSSxpQkFBRUksUUFBRixDQUFXSixPQUFYLENBQUosRUFBeUI7QUFDdkIsYUFBS0ssT0FBTCxHQUFlSyxxQkFBZixDQUFxQ1YsT0FBckMsRUFBOEMsS0FBS08sUUFBbkQ7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLRixPQUFMLEdBQWVNLG9CQUFmLENBQW9DWCxPQUFwQyxFQUE2QyxLQUFLTyxRQUFsRDtBQUNEO0FBQ0QsV0FBS04sUUFBTCxDQUFjVyxLQUFkLENBQW9CWixPQUFwQjtBQUNEOzs7b0NBRWVhLGdCLEVBQWtCO0FBQ2hDLGFBQU8saUJBQU9DLElBQVAsQ0FBWSxLQUFLcEIsS0FBTCxDQUFXcUIsUUFBdkIsRUFBaUMsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSLEVBQWdCO0FBQ3RELGVBQU9ELE1BQU1FLElBQU4sSUFBY0YsTUFBTUUsSUFBTixDQUFXQyxJQUFYLEtBQW9CTixnQkFBekM7QUFDRCxPQUZNLEVBRUosSUFGSSxDQUFQO0FBR0Q7Ozs7OztBQXhKa0IzQixRLENBQ1prQyxRLEdBQVc7QUFDaEJDLFlBQVUsU0FETTtBQUVoQkMsVUFBUSxPQUZRO0FBR2hCQyxVQUFRLE9BSFE7QUFJaEJDLFVBQVEsT0FKUTtBQUtoQkMsVUFBUSxPQUxRO0FBTWhCQyxVQUFRLE9BTlE7QUFPaEJDLGtCQUFnQixjQVBBO0FBUWhCQyxlQUFhLFlBUkc7QUFTaEJDLG9CQUFrQixnQkFURjtBQVVoQkMsZUFBYSxZQVZHO0FBV2hCQyxnQkFBYyxZQVhFO0FBWWhCQyxlQUFhLFdBWkc7QUFhaEJDLFFBQU07QUFiVSxDO0FBREMvQyxRLENBZ0JaZ0QsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0QsWUFBbkIsRUFBaUMsRUFBakMsQztBQWhCSGhELFEsQ0FpQlprRCxTLEdBQVksU0FBR0QsTUFBSCxDQUFVLEVBQVYsRUFBYyxlQUFLQyxTQUFuQixFQUE4QjtBQUMvQ0MsV0FBUyxvQkFBVUMsTUFENEI7QUFFL0NDLGFBQVcsb0JBQVVELE1BRjBCO0FBRy9DRSxTQUFPLG9CQUFVQyxTQUFWLENBQW9CLENBQ3pCLG9CQUFVSCxNQURlLEVBRXpCLG9CQUFVSSxNQUZlLENBQXBCLENBSHdDO0FBTy9DQyxXQUFTLG9CQUFVRixTQUFWLENBQW9CLENBQzNCLG9CQUFVSCxNQURpQixFQUUzQixvQkFBVUksTUFGaUIsQ0FBcEIsQ0FQc0M7QUFXL0NFLFNBQU8sb0JBQVVILFNBQVYsQ0FBb0IsQ0FDekIsb0JBQVVILE1BRGUsRUFFekIsb0JBQVVJLE1BRmUsQ0FBcEIsQ0FYd0M7QUFlL0NHLFdBQVMsb0JBQVVKLFNBQVYsQ0FBb0IsQ0FDM0Isb0JBQVVILE1BRGlCLEVBRTNCLG9CQUFVSSxNQUZpQixDQUFwQixDQWZzQztBQW1CL0NJLFNBQU8sb0JBQVVMLFNBQVYsQ0FBb0IsQ0FDekIsb0JBQVVILE1BRGUsRUFFekIsb0JBQVVJLE1BRmUsQ0FBcEIsQ0FuQndDO0FBdUIvQ0ssV0FBUyxvQkFBVU4sU0FBVixDQUFvQixDQUMzQixvQkFBVUgsTUFEaUIsRUFFM0Isb0JBQVVJLE1BRmlCLENBQXBCLENBdkJzQztBQTJCL0NNLFNBQU8sb0JBQVVQLFNBQVYsQ0FBb0IsQ0FDekIsb0JBQVVILE1BRGUsRUFFekIsb0JBQVVJLE1BRmUsQ0FBcEIsQ0EzQndDO0FBK0IvQ08sV0FBUyxvQkFBVVIsU0FBVixDQUFvQixDQUMzQixvQkFBVUgsTUFEaUIsRUFFM0Isb0JBQVVJLE1BRmlCLENBQXBCLENBL0JzQztBQW1DL0NRLFNBQU8sb0JBQVVULFNBQVYsQ0FBb0IsQ0FDekIsb0JBQVVILE1BRGUsRUFFekIsb0JBQVVJLE1BRmUsQ0FBcEIsQ0FuQ3dDO0FBdUMvQ1MsV0FBUyxvQkFBVVYsU0FBVixDQUFvQixDQUMzQixvQkFBVUgsTUFEaUIsRUFFM0Isb0JBQVVJLE1BRmlCLENBQXBCLENBdkNzQztBQTJDL0NVLGNBQVksb0JBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxXQUFJQyxVQUFMLEVBQWlCLFdBQUlDLFFBQXJCLEVBQStCLFdBQUlDLE1BQW5DLENBQWhCLENBM0NtQztBQTRDL0NDLGdCQUFjLG9CQUFVSixLQUFWLENBQWdCLENBQUMsV0FBSUMsVUFBTCxFQUFpQixXQUFJQyxRQUFyQixFQUErQixXQUFJQyxNQUFuQyxDQUFoQixDQTVDaUMsRUE0QzJCO0FBQzFFRSxnQkFBYyxvQkFBVWhCLE1BN0N1QjtBQThDL0NpQixrQkFBZ0Isb0JBQVVqQixNQTlDcUI7QUErQy9Da0Isa0JBQWdCLG9CQUFVbEIsTUEvQ3FCO0FBZ0QvQ21CLG9CQUFrQixvQkFBVW5CLE1BaERtQjtBQWlEL0NvQixjQUFZLG9CQUFVeEIsTUFqRHlCO0FBa0QvQ3lCLGdCQUFjLG9CQUFVekIsTUFsRHVCO0FBbUQvQzBCLGNBQVksb0JBQVVDLElBbkR5QjtBQW9EL0NDLGdCQUFjLG9CQUFVRCxJQXBEdUI7QUFxRC9DRSxhQUFXLG9CQUFVRixJQXJEMEI7QUFzRC9DRyxlQUFhLG9CQUFVSCxJQXREd0I7QUF1RC9DSSxRQUFNLG9CQUFVaEIsS0FBVixDQUFnQixDQUFDLFlBQUtpQixLQUFOLEVBQWEsWUFBS0MsT0FBbEIsRUFBMkIsWUFBS0MsS0FBaEMsQ0FBaEIsQ0F2RHlDO0FBd0QvQ0MsVUFBUSxvQkFBVXBCLEtBQVYsQ0FBZ0IsQ0FBQyxZQUFLaUIsS0FBTixFQUFhLFlBQUtDLE9BQWxCLEVBQTJCLFlBQUtDLEtBQWhDLENBQWhCO0FBeER1QyxDQUE5QixDO2tCQWpCQXRGLFEiLCJmaWxlIjoiY29tcC9hbnRkL0FudGRDb21wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IENvbXAgZnJvbSAnLi4vLi4vdXRpbC9Db21wJztcbmltcG9ydCB7RGlyLCBTSVpFfSBmcm9tICcuLi8uLi91dGlsL0NvbnN0JztcbmltcG9ydCBNb2RlbCBmcm9tICcuLi8uLi91dGlsL01vZGVsJztcbmltcG9ydCBSZWFjdHMgZnJvbSAnLi4vLi4vdXRpbC9SZWFjdHMnO1xuXG4vKipcbiAqIDEuVGhlIGRlZmF1bHRQcm9wcyBhbmQgcHJvcFR5cGVzIG9mIEFudEQganVzdCBjYW4gYmUgdXNlIGluIHdyYXBwZXIgQ29tcCBvciBub24tQ29tcFxuICogMi5pZiBvcmlnaW4gZXhpc3QsIG11c3QgYmUgdXNlIG9yaWdpblxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbnRkQ29tcCBleHRlbmRzIENvbXAge1xuICBzdGF0aWMgU0tfUFJPUFMgPSB7XG4gICAgQ09MX1NQQU46ICdjb2xTcGFuJyxcbiAgICBDT0xfWFM6ICdjb2xYcycsXG4gICAgQ09MX1NNOiAnY29sU20nLFxuICAgIENPTF9NRDogJ2NvbE1kJyxcbiAgICBDT0xfTEc6ICdjb2xMZycsXG4gICAgQ09MX1hMOiAnY29sWGwnLFxuICAgIEZPUk1fTEFCRUxfQ09MOiAnZm9ybUxhYmVsQ29sJyxcbiAgICBGT1JNX0xBWU9VVDogJ2Zvcm1MYXlvdXQnLFxuICAgIEZPUk1fV1JBUFBFUl9DT0w6ICdmb3JtV3JhcHBlckNvbCcsXG4gICAgR1JJRF9HVVRURVI6ICdncmlkR3V0dGVyJyxcbiAgICBJTl9GUk9NX0lURU06ICdpbkZvcm1JdGVtJyxcbiAgICBJTl9GUk9NX1JPVzogJ2luRm9ybVJvdycsXG4gICAgU0laRTogJ3NpemUnXG4gIH07XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIENvbXAuZGVmYXVsdFByb3BzLCB7fSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIENvbXAucHJvcFR5cGVzLCB7XG4gICAgY29sU3BhbjogUHJvcFR5cGVzLm51bWJlcixcbiAgICBza0NvbFNwYW46IFByb3BUeXBlcy5udW1iZXIsXG4gICAgY29sWHM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBza0NvbFhzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgY29sU206IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBza0NvbFNtOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgY29sTWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBza0NvbE1kOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgY29sTGc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBza0NvbExnOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgY29sWGw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBza0NvbFhsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgZm9ybUxheW91dDogUHJvcFR5cGVzLm9uZU9mKFtEaXIuSG9yaXpvbnRhbCwgRGlyLlZlcnRpY2FsLCBEaXIuSW5saW5lXSksXG4gICAgc2tGb3JtTGF5b3V0OiBQcm9wVHlwZXMub25lT2YoW0Rpci5Ib3Jpem9udGFsLCBEaXIuVmVydGljYWwsIERpci5JbmxpbmVdKSwvL0NvbnN0LkRpclxuICAgIGZvcm1MYWJlbENvbDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBza0Zvcm1MYWJlbENvbDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBmb3JtV3JhcHBlckNvbDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBza0Zvcm1XcmFwcGVyQ29sOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGdyaWRHdXR0ZXI6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgc2tHcmlkR3V0dGVyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGluRm9ybUl0ZW06IFByb3BUeXBlcy5ib29sLFxuICAgIHNrSW5Gb3JtSXRlbTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaW5Gb3JtUm93OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBza0luRm9ybVJvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtTSVpFLkxhcmdlLCBTSVpFLkRlZmF1bHQsIFNJWkUuU21hbGxdKSxcbiAgICBza1NpemU6IFByb3BUeXBlcy5vbmVPZihbU0laRS5MYXJnZSwgU0laRS5EZWZhdWx0LCBTSVpFLlNtYWxsXSlcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnQW50ZENvbXAnO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc3VwZXIuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgICB0aGlzLmFkZEFsbEVycm9yZWRNb25pdG9yKCk7XG4gICAgdGhpcy5hZGRFeHRlbmRFcnJvcmVkTW9uaXRvcigpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVwZGF0ZSgpIHtcbiAgICB0aGlzLnJtdkFsbEVycm9yZWRNb25pdG9yKCk7XG4gICAgdGhpcy5ybXZFeHRlbmRFcnJvcmVkTW9uaXRvcigpO1xuICAgIHN1cGVyLmNvbXBvbmVudFdpbGxVcGRhdGUoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBzdXBlci5jb21wb25lbnREaWRVcGRhdGUoKTtcbiAgICB0aGlzLmFkZEFsbEVycm9yZWRNb25pdG9yKCk7XG4gICAgdGhpcy5hZGRFeHRlbmRFcnJvcmVkTW9uaXRvcigpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5ybXZBbGxFcnJvcmVkTW9uaXRvcigpO1xuICAgIHRoaXMucm12RXh0ZW5kRXJyb3JlZE1vbml0b3IoKTtcbiAgICBzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuICB9XG5cbiAgYWRkRXh0ZW5kRXJyb3JlZE1vbml0b3IoKSB7XG4gIH1cblxuICBybXZFeHRlbmRFcnJvcmVkTW9uaXRvcigpIHtcbiAgfVxuXG4gIC8vbW9uaXRvciBiZWdpblxuICBhZGRBbGxFcnJvcmVkTW9uaXRvcigpIHtcbiAgICBNb2RlbC5wYXJzZVNhbyh0aGlzLnByb3BzLm1vbml0b3IpLmZvckVhY2goKCRpZE9yUmVnKSA9PiB7XG4gICAgICB0aGlzLmFkZEVycm9yZWRNb25pdG9yKCRpZE9yUmVnKTtcbiAgICB9KTtcbiAgICAvL1NlbGYgdmFsdWUgbW9uaXRvclxuICAgIGlmICh0aGlzLmdldE1vZGVsSWQoKSkge1xuICAgICAgdGhpcy5hZGRFcnJvcmVkTW9uaXRvcih0aGlzLmdldE1vZGVsSWQoKSk7XG4gICAgfVxuICB9XG5cbiAgYWRkRXJyb3JlZE1vbml0b3IoaWRPclJlZykge1xuICAgIGlmICh0aGlzLm1vbml0b3JzLmluZGV4T2YoaWRPclJlZykgPCAwKSB7XG4gICAgICB0aGlzLm1vbml0b3JzLnB1c2goaWRPclJlZyk7XG4gICAgfVxuICAgIGlmIChfLmlzUmVnRXhwKGlkT3JSZWcpKSB7XG4gICAgICB0aGlzLnNrTW9kZWwoKS5hZGRSZWdFcnJvcmVkTGlzdGVuZXIoaWRPclJlZywgdGhpcy51cGRhdGVVSSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2tNb2RlbCgpLmFkZElkRXJyb3JlZExpc3RlbmVyKGlkT3JSZWcsIHRoaXMudXBkYXRlVUkpXG4gICAgfVxuICB9XG5cbiAgcm12QWxsRXJyb3JlZE1vbml0b3IoKSB7XG4gICAgdGhpcy5tb25pdG9ycy5mb3JFYWNoKCgkaWRPclJlZykgPT4ge1xuICAgICAgdGhpcy5ybXZFcnJvcmVkTW9uaXRvcigkaWRPclJlZyk7XG4gICAgfSk7XG4gIH1cblxuICBybXZFcnJvcmVkTW9uaXRvcihpZE9yUmVnKSB7XG4gICAgaWYgKF8uaXNSZWdFeHAoaWRPclJlZykpIHtcbiAgICAgIHRoaXMuc2tNb2RlbCgpLnJtdlJlZ0Vycm9yZWRMaXN0ZW5lcihpZE9yUmVnLCB0aGlzLnVwZGF0ZVVJKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5za01vZGVsKCkucm12SWRFcnJvcmVkTGlzdGVuZXIoaWRPclJlZywgdGhpcy51cGRhdGVVSSlcbiAgICB9XG4gICAgdGhpcy5tb25pdG9ycy5za1JtdihpZE9yUmVnKTtcbiAgfVxuXG4gIGhhc1NwZWNpYWxDaGlsZChzcGVjaWFsQ2hpbGROYW1lKSB7XG4gICAgcmV0dXJuIFJlYWN0cy5zb21lKHRoaXMucHJvcHMuY2hpbGRyZW4sIChjaGlsZCwgaWR4KSA9PiB7XG4gICAgICByZXR1cm4gY2hpbGQudHlwZSAmJiBjaGlsZC50eXBlLm5hbWUgPT09IHNwZWNpYWxDaGlsZE5hbWVcbiAgICB9LCB0aGlzKTtcbiAgfVxuXG59XG4iXX0=