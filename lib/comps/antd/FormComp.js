'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _skJs = require('sk-js');

var _skJs2 = _interopRequireDefault(_skJs);

var _SKCol = require('./SKCol');

var _SKCol2 = _interopRequireDefault(_SKCol);

var _SKFormItem = require('./SKFormItem');

var _SKFormItem2 = _interopRequireDefault(_SKFormItem);

var _Comp2 = require('../../utils/Comp');

var _Comp3 = _interopRequireDefault(_Comp2);

var _Model = require('../../utils/Model');

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

      _Model2.default.parseSao(this.props.monitor).forEach(function ($i) {
        _this2.addErroredMonitor($i);
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

      this.monitors.forEach(function ($i) {
        _this3.rmvErroredMonitor($i);
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
      var help = _.isEmpty(errorObj) ? '' : _.join(errorObj.skVals(), _skJs2.default.CHAR_VERTICAL);
      var validateStatus = _.isEmpty(errorObj) ? '' : 'error';

      if (inFormRow && inFormItem) {
        return React.createElement(
          _SKCol2.default,
          this.compValidProps(_SKCol2.default),
          React.createElement(
            _SKFormItem2.default,
            _extends({}, this.compValidProps(_SKFormItem2.default), { validateStatus: validateStatus, help: help }),
            this.renderFormComp()
          )
        );
      } else if (inFormRow && !inFormItem) {
        return React.createElement(
          _SKCol2.default,
          this.compValidProps(_SKCol2.default),
          this.renderFormComp()
        );
      } else if (!inFormRow && inFormItem) {
        return React.createElement(
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


      return React.createElement(
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FudGQvRm9ybUNvbXAuanMiXSwibmFtZXMiOlsiRm9ybUNvbXAiLCJhcmdzIiwiYWRkQWxsRXJyb3JlZE1vbml0b3IiLCJhZGRFeHRlbmRFcnJvcmVkTW9uaXRvciIsInJtdkFsbEVycm9yZWRNb25pdG9yIiwicm12RXh0ZW5kRXJyb3JlZE1vbml0b3IiLCJwYXJzZVNhbyIsInByb3BzIiwibW9uaXRvciIsImZvckVhY2giLCIkaSIsImFkZEVycm9yZWRNb25pdG9yIiwiaU1vZGVsSWQiLCJpZE9yUmVnIiwibW9uaXRvcnMiLCJpbmRleE9mIiwicHVzaCIsIl8iLCJpc1JlZ0V4cCIsImlNb2RlbCIsImFkZFJlZ0Vycm9yZWRMaXN0ZW5lciIsIl91cGRhdGVVSSIsImFkZElkRXJyb3JlZExpc3RlbmVyIiwicm12RXJyb3JlZE1vbml0b3IiLCJybXZSZWdFcnJvcmVkTGlzdGVuZXIiLCJybXZJZEVycm9yZWRMaXN0ZW5lciIsInNrUm12IiwiaW5Gb3JtSXRlbSIsInNrUHJvcCIsIlNLX1BST1BTIiwiSU5fRlJPTV9JVEVNIiwiaW5Gb3JtUm93IiwiSU5fRlJPTV9ST1ciLCJlcnJvck9iaiIsImdldEVycm9ycyIsImhlbHAiLCJpc0VtcHR5Iiwiam9pbiIsInNrVmFscyIsIkNIQVJfVkVSVElDQUwiLCJ2YWxpZGF0ZVN0YXR1cyIsImNvbXBWYWxpZFByb3BzIiwicmVuZGVyRm9ybUNvbXAiLCJDb21wVGFnIiwiY29tcFRhZyIsIm1vZGVsSWQiLCJza1Byb3BzVHJhbnMiLCJwcm9wVHlwZXMiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7O0FBR25CLHNCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSwwSUFDVkEsSUFEVTtBQUVwQjs7Ozt3Q0FFbUI7QUFDbEI7QUFDQSxXQUFL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QWxCLEVBQThCO0FBQ25DLGVBQ0U7QUFBQTtBQUFBLHVCQUFnQixLQUFLYyxjQUFMLHNCQUFoQixJQUFpRCxnQkFBZ0JELGNBQWpFLEVBQWlGLE1BQU1MLElBQXZGO0FBQ0csZUFBS08sY0FBTDtBQURILFNBREY7QUFLRCxPQU5NLE1BTUE7QUFDTCxlQUFPLEtBQUtBLGNBQUwsRUFBUDtBQUNEO0FBQ0Y7OztxQ0FFZ0I7QUFBQSxtQkFDbUIsS0FBS25DLEtBRHhCO0FBQUEsVUFDRG9DLE9BREMsVUFDVkMsT0FEVTtBQUFBLFVBQ1FDLE9BRFIsVUFDUUEsT0FEUjs7O0FBR2YsYUFDRTtBQUFDLGVBQUQ7QUFBQSxxQkFBYSxLQUFLSixjQUFMLENBQW9CRSxPQUFwQixDQUFiLElBQTJDLFNBQVNFLE9BQXBEO0FBQ0csYUFBS0MsWUFBTDtBQURILE9BREY7QUFLRDs7Ozs7O0FBckhrQjlDLFEsQ0FDWitDLFMsR0FBWSxlQUFHQyxNQUFILENBQVUsRUFBVixFQUFjLGVBQUtELFNBQW5CLEVBQThCLGdCQUFNQSxTQUFwQyxFQUErQyxxQkFBV0EsU0FBMUQsRUFBcUUsRUFBckUsQztrQkFEQS9DLFEiLCJmaWxlIjoiY29tcHMvYW50ZC9Gb3JtQ29tcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTSyBmcm9tICdzay1qcyc7XG5pbXBvcnQgU0tDb2wgZnJvbSAnLi9TS0NvbCc7XG5pbXBvcnQgU0tGb3JtSXRlbSBmcm9tICcuL1NLRm9ybUl0ZW0nO1xuaW1wb3J0IENvbXAgZnJvbSAnLi4vLi4vdXRpbHMvQ29tcCc7XG5pbXBvcnQgTW9kZWwgZnJvbSAnLi4vLi4vdXRpbHMvTW9kZWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtQ29tcCBleHRlbmRzIENvbXAge1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBDb21wLnByb3BUeXBlcywgU0tDb2wucHJvcFR5cGVzLCBTS0Zvcm1JdGVtLnByb3BUeXBlcywge30pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHN1cGVyLmNvbXBvbmVudERpZE1vdW50KCk7XG4gICAgdGhpcy5hZGRBbGxFcnJvcmVkTW9uaXRvcigpO1xuICAgIHRoaXMuYWRkRXh0ZW5kRXJyb3JlZE1vbml0b3IoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVcGRhdGUoKSB7XG4gICAgc3VwZXIuY29tcG9uZW50V2lsbFVwZGF0ZSgpO1xuICAgIHRoaXMucm12QWxsRXJyb3JlZE1vbml0b3IoKTtcbiAgICB0aGlzLnJtdkV4dGVuZEVycm9yZWRNb25pdG9yKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgc3VwZXIuY29tcG9uZW50RGlkVXBkYXRlKCk7XG4gICAgdGhpcy5hZGRBbGxFcnJvcmVkTW9uaXRvcigpO1xuICAgIHRoaXMuYWRkRXh0ZW5kRXJyb3JlZE1vbml0b3IoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHN1cGVyLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG4gICAgdGhpcy5ybXZBbGxFcnJvcmVkTW9uaXRvcigpO1xuICAgIHRoaXMucm12RXh0ZW5kRXJyb3JlZE1vbml0b3IoKTtcbiAgfVxuXG4gIGFkZEV4dGVuZEVycm9yZWRNb25pdG9yKCkge1xuXG4gIH1cblxuICBybXZFeHRlbmRFcnJvcmVkTW9uaXRvcigpIHtcblxuICB9XG5cbiAgLy9tb25pdG9yIGJlZ2luXG4gIGFkZEFsbEVycm9yZWRNb25pdG9yKCkge1xuICAgIE1vZGVsLnBhcnNlU2FvKHRoaXMucHJvcHMubW9uaXRvcikuZm9yRWFjaCgoJGkpID0+IHtcbiAgICAgIHRoaXMuYWRkRXJyb3JlZE1vbml0b3IoJGkpO1xuICAgIH0pO1xuICAgIC8vU2VsZiB2YWx1ZSBtb25pdG9yXG4gICAgaWYgKHRoaXMuaU1vZGVsSWQoKSkge1xuICAgICAgdGhpcy5hZGRFcnJvcmVkTW9uaXRvcih0aGlzLmlNb2RlbElkKCkpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEVycm9yZWRNb25pdG9yKGlkT3JSZWcpIHtcbiAgICBpZiAodGhpcy5tb25pdG9ycy5pbmRleE9mKGlkT3JSZWcpIDwgMCkge1xuICAgICAgdGhpcy5tb25pdG9ycy5wdXNoKGlkT3JSZWcpO1xuICAgIH1cbiAgICBpZiAoXy5pc1JlZ0V4cChpZE9yUmVnKSkge1xuICAgICAgdGhpcy5pTW9kZWwoKS5hZGRSZWdFcnJvcmVkTGlzdGVuZXIoaWRPclJlZywgdGhpcy5fdXBkYXRlVUkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlNb2RlbCgpLmFkZElkRXJyb3JlZExpc3RlbmVyKGlkT3JSZWcsIHRoaXMuX3VwZGF0ZVVJKVxuICAgIH1cbiAgfVxuXG4gIHJtdkFsbEVycm9yZWRNb25pdG9yKCkge1xuICAgIHRoaXMubW9uaXRvcnMuZm9yRWFjaCgoJGkpID0+IHtcbiAgICAgIHRoaXMucm12RXJyb3JlZE1vbml0b3IoJGkpO1xuICAgIH0pO1xuICB9XG5cbiAgcm12RXJyb3JlZE1vbml0b3IoaWRPclJlZykge1xuICAgIGlmIChfLmlzUmVnRXhwKGlkT3JSZWcpKSB7XG4gICAgICB0aGlzLmlNb2RlbCgpLnJtdlJlZ0Vycm9yZWRMaXN0ZW5lcihpZE9yUmVnLCB0aGlzLl91cGRhdGVVSSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaU1vZGVsKCkucm12SWRFcnJvcmVkTGlzdGVuZXIoaWRPclJlZywgdGhpcy5fdXBkYXRlVUkpXG4gICAgfVxuICAgIHRoaXMubW9uaXRvcnMuc2tSbXYoaWRPclJlZyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGluRm9ybUl0ZW0gPSB0aGlzLnNrUHJvcChDb21wLlNLX1BST1BTLklOX0ZST01fSVRFTSk7XG4gICAgbGV0IGluRm9ybVJvdyA9IHRoaXMuc2tQcm9wKENvbXAuU0tfUFJPUFMuSU5fRlJPTV9ST1cpO1xuXG4gICAgbGV0IGVycm9yT2JqID0gdGhpcy5nZXRFcnJvcnMoKTtcbiAgICBsZXQgaGVscCA9IF8uaXNFbXB0eShlcnJvck9iaikgPyAnJyA6IF8uam9pbihlcnJvck9iai5za1ZhbHMoKSwgU0suQ0hBUl9WRVJUSUNBTCk7XG4gICAgbGV0IHZhbGlkYXRlU3RhdHVzID0gXy5pc0VtcHR5KGVycm9yT2JqKSA/ICcnIDogJ2Vycm9yJztcblxuICAgIGlmIChpbkZvcm1Sb3cgJiYgaW5Gb3JtSXRlbSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFNLQ29sIHsuLi50aGlzLmNvbXBWYWxpZFByb3BzKFNLQ29sKX0+XG4gICAgICAgICAgPFNLRm9ybUl0ZW0gey4uLnRoaXMuY29tcFZhbGlkUHJvcHMoU0tGb3JtSXRlbSl9IHZhbGlkYXRlU3RhdHVzPXt2YWxpZGF0ZVN0YXR1c30gaGVscD17aGVscH0+XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJGb3JtQ29tcCgpfVxuICAgICAgICAgIDwvU0tGb3JtSXRlbT5cbiAgICAgICAgPC9TS0NvbD5cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChpbkZvcm1Sb3cgJiYgIWluRm9ybUl0ZW0pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTS0NvbCB7Li4udGhpcy5jb21wVmFsaWRQcm9wcyhTS0NvbCl9PlxuICAgICAgICAgIHt0aGlzLnJlbmRlckZvcm1Db21wKCl9XG4gICAgICAgIDwvU0tDb2w+XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoIWluRm9ybVJvdyAmJiBpbkZvcm1JdGVtKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U0tGb3JtSXRlbSB7Li4udGhpcy5jb21wVmFsaWRQcm9wcyhTS0Zvcm1JdGVtKX0gdmFsaWRhdGVTdGF0dXM9e3ZhbGlkYXRlU3RhdHVzfSBoZWxwPXtoZWxwfT5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJGb3JtQ29tcCgpfVxuICAgICAgICA8L1NLRm9ybUl0ZW0+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJGb3JtQ29tcCgpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckZvcm1Db21wKCkge1xuICAgIGxldCB7Y29tcFRhZzogQ29tcFRhZywgbW9kZWxJZH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wVGFnIHsuLi50aGlzLmNvbXBWYWxpZFByb3BzKENvbXBUYWcpfSBtb2RlbElkPXttb2RlbElkfT5cbiAgICAgICAge3RoaXMuc2tQcm9wc1RyYW5zKCl9XG4gICAgICA8L0NvbXBUYWc+XG4gICAgKTtcbiAgfVxufVxuIl19