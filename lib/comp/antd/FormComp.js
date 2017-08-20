'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _skJs2 = _interopRequireDefault(_skJs);

var _SKCol = require('./SKCol');

var _SKCol2 = _interopRequireDefault(_SKCol);

var _SKFormItem = require('./SKFormItem');

var _SKFormItem2 = _interopRequireDefault(_SKFormItem);

var _Comp2 = require('../../util/Comp');

var _Comp3 = _interopRequireDefault(_Comp2);

var _Model = require('../../util/Model');

var _Model2 = _interopRequireDefault(_Model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormComp = function (_Comp) {
  _inherits(FormComp, _Comp);

  function FormComp() {
    var _ref;

    _classCallCheck(this, FormComp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = FormComp.__proto__ || Object.getPrototypeOf(FormComp)).call.apply(_ref, [this].concat(args)));
  }

  _createClass(FormComp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _get(FormComp.prototype.__proto__ || Object.getPrototypeOf(FormComp.prototype), 'componentDidMount', this).call(this);
      this.addAllErroredMonitor();
      this.addExtendErroredMonitor();
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {
      _get(FormComp.prototype.__proto__ || Object.getPrototypeOf(FormComp.prototype), 'componentWillUpdate', this).call(this);
      this.rmvAllErroredMonitor();
      this.rmvExtendErroredMonitor();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      _get(FormComp.prototype.__proto__ || Object.getPrototypeOf(FormComp.prototype), 'componentDidUpdate', this).call(this);
      this.addAllErroredMonitor();
      this.addExtendErroredMonitor();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _get(FormComp.prototype.__proto__ || Object.getPrototypeOf(FormComp.prototype), 'componentWillUnmount', this).call(this);
      this.rmvAllErroredMonitor();
      this.rmvExtendErroredMonitor();
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
      if (this.iModelId()) {
        this.addErroredMonitor(this.iModelId());
      }
    }
  }, {
    key: 'addErroredMonitor',
    value: function addErroredMonitor(idOrReg) {
      if (this.monitors.indexOf(idOrReg) < 0) {
        this.monitors.push(idOrReg);
      }
      if (_.isRegExp(idOrReg)) {
        this.iModel().addRegErroredListener(idOrReg, this._updateUI);
      } else {
        this.iModel().addIdErroredListener(idOrReg, this._updateUI);
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
      if (_.isRegExp(idOrReg)) {
        this.iModel().rmvRegErroredListener(idOrReg, this._updateUI);
      } else {
        this.iModel().rmvIdErroredListener(idOrReg, this._updateUI);
      }
      this.monitors.skRmv(idOrReg);
    }
  }, {
    key: 'render',
    value: function render() {
      var inFormItem = this.skProp(_Comp3.default.SK_PROPS.IN_FROM_ITEM);
      var inFormRow = this.skProp(_Comp3.default.SK_PROPS.IN_FROM_ROW);

      var errorObj = this.getErrors();
      var help = _.isEmpty(errorObj) ? _skJs2.default.EMPTY : _.join(errorObj.skVals(), _skJs2.default.CHAR_VERTICAL);
      var validateStatus = _.isEmpty(errorObj) ? _skJs2.default.EMPTY : _skJs2.default.STR_ERROR;

      if (inFormRow && inFormItem) {
        return _react2.default.createElement(
          _SKCol2.default,
          this.compValidProps(_SKCol2.default),
          _react2.default.createElement(
            _SKFormItem2.default,
            _extends({}, this.compValidProps(_SKFormItem2.default), { validateStatus: validateStatus, help: help }),
            this.renderFormComp()
          )
        );
      } else if (inFormRow && !inFormItem) {
        return _react2.default.createElement(
          _SKCol2.default,
          this.compValidProps(_SKCol2.default),
          this.renderFormComp()
        );
      } else if (!inFormRow && inFormItem) {
        return _react2.default.createElement(
          _SKFormItem2.default,
          _extends({}, this.compValidProps(_SKFormItem2.default), { validateStatus: validateStatus, help: help }),
          this.renderFormComp()
        );
      } else {
        return this.renderFormComp();
      }
    }
  }, {
    key: 'renderFormComp',
    value: function renderFormComp() {
      var _props = this.props,
          CompTag = _props.compTag,
          modelId = _props.modelId;


      return _react2.default.createElement(
        CompTag,
        _extends({}, this.compValidProps(CompTag), { modelId: modelId }),
        this.skPropsTrans()
      );
    }
  }]);

  return FormComp;
}(_Comp3.default);

FormComp.propTypes = _skJs2.default.assign({}, _Comp3.default.propTypes, _SKCol2.default.propTypes, _SKFormItem2.default.propTypes, {});
exports.default = FormComp;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9Gb3JtQ29tcC5qcyJdLCJuYW1lcyI6WyJGb3JtQ29tcCIsImFyZ3MiLCJhZGRBbGxFcnJvcmVkTW9uaXRvciIsImFkZEV4dGVuZEVycm9yZWRNb25pdG9yIiwicm12QWxsRXJyb3JlZE1vbml0b3IiLCJybXZFeHRlbmRFcnJvcmVkTW9uaXRvciIsInBhcnNlU2FvIiwicHJvcHMiLCJtb25pdG9yIiwiZm9yRWFjaCIsIiRpZE9yUmVnIiwiYWRkRXJyb3JlZE1vbml0b3IiLCJpTW9kZWxJZCIsImlkT3JSZWciLCJtb25pdG9ycyIsImluZGV4T2YiLCJwdXNoIiwiXyIsImlzUmVnRXhwIiwiaU1vZGVsIiwiYWRkUmVnRXJyb3JlZExpc3RlbmVyIiwiX3VwZGF0ZVVJIiwiYWRkSWRFcnJvcmVkTGlzdGVuZXIiLCJybXZFcnJvcmVkTW9uaXRvciIsInJtdlJlZ0Vycm9yZWRMaXN0ZW5lciIsInJtdklkRXJyb3JlZExpc3RlbmVyIiwic2tSbXYiLCJpbkZvcm1JdGVtIiwic2tQcm9wIiwiU0tfUFJPUFMiLCJJTl9GUk9NX0lURU0iLCJpbkZvcm1Sb3ciLCJJTl9GUk9NX1JPVyIsImVycm9yT2JqIiwiZ2V0RXJyb3JzIiwiaGVscCIsImlzRW1wdHkiLCJFTVBUWSIsImpvaW4iLCJza1ZhbHMiLCJDSEFSX1ZFUlRJQ0FMIiwidmFsaWRhdGVTdGF0dXMiLCJTVFJfRVJST1IiLCJjb21wVmFsaWRQcm9wcyIsInJlbmRlckZvcm1Db21wIiwiQ29tcFRhZyIsImNvbXBUYWciLCJtb2RlbElkIiwic2tQcm9wc1RyYW5zIiwicHJvcFR5cGVzIiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7O0FBR25CLHNCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSwwSUFDVkEsSUFE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QUFMO0FBREgsU0FERjtBQUtELE9BTk0sTUFNQSxJQUFJLENBQUNiLFNBQUQsSUFBY0osVUFBbEIsRUFBOEI7QUFDbkMsZUFDRTtBQUFBO0FBQUEsdUJBQWdCLEtBQUtnQixjQUFMLHNCQUFoQixJQUFpRCxnQkFBZ0JGLGNBQWpFLEVBQWlGLE1BQU1OLElBQXZGO0FBQ0csZUFBS1MsY0FBTDtBQURILFNBREY7QUFLRCxPQU5NLE1BTUE7QUFDTCxlQUFPLEtBQUtBLGNBQUwsRUFBUDtBQUNEO0FBQ0Y7OztxQ0FFZ0I7QUFBQSxtQkFDbUIsS0FBS3JDLEtBRHhCO0FBQUEsVUFDRHNDLE9BREMsVUFDVkMsT0FEVTtBQUFBLFVBQ1FDLE9BRFIsVUFDUUEsT0FEUjs7O0FBR2YsYUFDRTtBQUFDLGVBQUQ7QUFBQSxxQkFBYSxLQUFLSixjQUFMLENBQW9CRSxPQUFwQixDQUFiLElBQTJDLFNBQVNFLE9BQXBEO0FBQ0csYUFBS0MsWUFBTDtBQURILE9BREY7QUFLRDs7Ozs7O0FBckhrQmhELFEsQ0FDWmlELFMsR0FBWSxlQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLGVBQUtELFNBQW5CLEVBQThCLGdCQUFNQSxTQUFwQyxFQUErQyxxQkFBV0EsU0FBMUQsRUFBcUUsRUFBckUsQztrQkFEQWpELFEiLCJmaWxlIjoiY29tcC9hbnRkL0Zvcm1Db21wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTSyBmcm9tICdzay1qcyc7XG5pbXBvcnQgU0tDb2wgZnJvbSAnLi9TS0NvbCc7XG5pbXBvcnQgU0tGb3JtSXRlbSBmcm9tICcuL1NLRm9ybUl0ZW0nO1xuaW1wb3J0IENvbXAgZnJvbSAnLi4vLi4vdXRpbC9Db21wJztcbmltcG9ydCBNb2RlbCBmcm9tICcuLi8uLi91dGlsL01vZGVsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUNvbXAgZXh0ZW5kcyBDb21wIHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwgQ29tcC5wcm9wVHlwZXMsIFNLQ29sLnByb3BUeXBlcywgU0tGb3JtSXRlbS5wcm9wVHlwZXMsIHt9KTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBzdXBlci5jb21wb25lbnREaWRNb3VudCgpO1xuICAgIHRoaXMuYWRkQWxsRXJyb3JlZE1vbml0b3IoKTtcbiAgICB0aGlzLmFkZEV4dGVuZEVycm9yZWRNb25pdG9yKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVXBkYXRlKCkge1xuICAgIHN1cGVyLmNvbXBvbmVudFdpbGxVcGRhdGUoKTtcbiAgICB0aGlzLnJtdkFsbEVycm9yZWRNb25pdG9yKCk7XG4gICAgdGhpcy5ybXZFeHRlbmRFcnJvcmVkTW9uaXRvcigpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHN1cGVyLmNvbXBvbmVudERpZFVwZGF0ZSgpO1xuICAgIHRoaXMuYWRkQWxsRXJyb3JlZE1vbml0b3IoKTtcbiAgICB0aGlzLmFkZEV4dGVuZEVycm9yZWRNb25pdG9yKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBzdXBlci5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuICAgIHRoaXMucm12QWxsRXJyb3JlZE1vbml0b3IoKTtcbiAgICB0aGlzLnJtdkV4dGVuZEVycm9yZWRNb25pdG9yKCk7XG4gIH1cblxuICBhZGRFeHRlbmRFcnJvcmVkTW9uaXRvcigpIHtcblxuICB9XG5cbiAgcm12RXh0ZW5kRXJyb3JlZE1vbml0b3IoKSB7XG5cbiAgfVxuXG4gIC8vbW9uaXRvciBiZWdpblxuICBhZGRBbGxFcnJvcmVkTW9uaXRvcigpIHtcbiAgICBNb2RlbC5wYXJzZVNhbyh0aGlzLnByb3BzLm1vbml0b3IpLmZvckVhY2goKCRpZE9yUmVnKSA9PiB7XG4gICAgICB0aGlzLmFkZEVycm9yZWRNb25pdG9yKCRpZE9yUmVnKTtcbiAgICB9KTtcbiAgICAvL1NlbGYgdmFsdWUgbW9uaXRvclxuICAgIGlmICh0aGlzLmlNb2RlbElkKCkpIHtcbiAgICAgIHRoaXMuYWRkRXJyb3JlZE1vbml0b3IodGhpcy5pTW9kZWxJZCgpKTtcbiAgICB9XG4gIH1cblxuICBhZGRFcnJvcmVkTW9uaXRvcihpZE9yUmVnKSB7XG4gICAgaWYgKHRoaXMubW9uaXRvcnMuaW5kZXhPZihpZE9yUmVnKSA8IDApIHtcbiAgICAgIHRoaXMubW9uaXRvcnMucHVzaChpZE9yUmVnKTtcbiAgICB9XG4gICAgaWYgKF8uaXNSZWdFeHAoaWRPclJlZykpIHtcbiAgICAgIHRoaXMuaU1vZGVsKCkuYWRkUmVnRXJyb3JlZExpc3RlbmVyKGlkT3JSZWcsIHRoaXMuX3VwZGF0ZVVJKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pTW9kZWwoKS5hZGRJZEVycm9yZWRMaXN0ZW5lcihpZE9yUmVnLCB0aGlzLl91cGRhdGVVSSlcbiAgICB9XG4gIH1cblxuICBybXZBbGxFcnJvcmVkTW9uaXRvcigpIHtcbiAgICB0aGlzLm1vbml0b3JzLmZvckVhY2goKCRpZE9yUmVnKSA9PiB7XG4gICAgICB0aGlzLnJtdkVycm9yZWRNb25pdG9yKCRpZE9yUmVnKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJtdkVycm9yZWRNb25pdG9yKGlkT3JSZWcpIHtcbiAgICBpZiAoXy5pc1JlZ0V4cChpZE9yUmVnKSkge1xuICAgICAgdGhpcy5pTW9kZWwoKS5ybXZSZWdFcnJvcmVkTGlzdGVuZXIoaWRPclJlZywgdGhpcy5fdXBkYXRlVUkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlNb2RlbCgpLnJtdklkRXJyb3JlZExpc3RlbmVyKGlkT3JSZWcsIHRoaXMuX3VwZGF0ZVVJKVxuICAgIH1cbiAgICB0aGlzLm1vbml0b3JzLnNrUm12KGlkT3JSZWcpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBpbkZvcm1JdGVtID0gdGhpcy5za1Byb3AoQ29tcC5TS19QUk9QUy5JTl9GUk9NX0lURU0pO1xuICAgIGxldCBpbkZvcm1Sb3cgPSB0aGlzLnNrUHJvcChDb21wLlNLX1BST1BTLklOX0ZST01fUk9XKTtcblxuICAgIGxldCBlcnJvck9iaiA9IHRoaXMuZ2V0RXJyb3JzKCk7XG4gICAgbGV0IGhlbHAgPSBfLmlzRW1wdHkoZXJyb3JPYmopID8gU0suRU1QVFkgOiBfLmpvaW4oZXJyb3JPYmouc2tWYWxzKCksIFNLLkNIQVJfVkVSVElDQUwpO1xuICAgIGxldCB2YWxpZGF0ZVN0YXR1cyA9IF8uaXNFbXB0eShlcnJvck9iaikgPyBTSy5FTVBUWSA6IFNLLlNUUl9FUlJPUjtcblxuICAgIGlmIChpbkZvcm1Sb3cgJiYgaW5Gb3JtSXRlbSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFNLQ29sIHsuLi50aGlzLmNvbXBWYWxpZFByb3BzKFNLQ29sKX0+XG4gICAgICAgICAgPFNLRm9ybUl0ZW0gey4uLnRoaXMuY29tcFZhbGlkUHJvcHMoU0tGb3JtSXRlbSl9IHZhbGlkYXRlU3RhdHVzPXt2YWxpZGF0ZVN0YXR1c30gaGVscD17aGVscH0+XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJGb3JtQ29tcCgpfVxuICAgICAgICAgIDwvU0tGb3JtSXRlbT5cbiAgICAgICAgPC9TS0NvbD5cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChpbkZvcm1Sb3cgJiYgIWluRm9ybUl0ZW0pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTS0NvbCB7Li4udGhpcy5jb21wVmFsaWRQcm9wcyhTS0NvbCl9PlxuICAgICAgICAgIHt0aGlzLnJlbmRlckZvcm1Db21wKCl9XG4gICAgICAgIDwvU0tDb2w+XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoIWluRm9ybVJvdyAmJiBpbkZvcm1JdGVtKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U0tGb3JtSXRlbSB7Li4udGhpcy5jb21wVmFsaWRQcm9wcyhTS0Zvcm1JdGVtKX0gdmFsaWRhdGVTdGF0dXM9e3ZhbGlkYXRlU3RhdHVzfSBoZWxwPXtoZWxwfT5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJGb3JtQ29tcCgpfVxuICAgICAgICA8L1NLRm9ybUl0ZW0+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJGb3JtQ29tcCgpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckZvcm1Db21wKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZywgbW9kZWxJZH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLmNvbXBWYWxpZFByb3BzKENvbXBUYWcpfSBtb2RlbElkPXttb2RlbElkfT5cbiAgICAgICAge3RoaXMuc2tQcm9wc1RyYW5zKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxufVxuIl19