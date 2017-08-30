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
        this.iModel().addRegErroredListener(idOrReg, this.updateUI);
      } else {
        this.iModel().addIdErroredListener(idOrReg, this.updateUI);
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
        this.iModel().rmvRegErroredListener(idOrReg, this.updateUI);
      } else {
        this.iModel().rmvIdErroredListener(idOrReg, this.updateUI);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9Gb3JtQ29tcC5qcyJdLCJuYW1lcyI6WyJGb3JtQ29tcCIsImFyZ3MiLCJhZGRBbGxFcnJvcmVkTW9uaXRvciIsImFkZEV4dGVuZEVycm9yZWRNb25pdG9yIiwicm12QWxsRXJyb3JlZE1vbml0b3IiLCJybXZFeHRlbmRFcnJvcmVkTW9uaXRvciIsInBhcnNlU2FvIiwicHJvcHMiLCJtb25pdG9yIiwiZm9yRWFjaCIsIiRpZE9yUmVnIiwiYWRkRXJyb3JlZE1vbml0b3IiLCJpTW9kZWxJZCIsImlkT3JSZWciLCJtb25pdG9ycyIsImluZGV4T2YiLCJwdXNoIiwiXyIsImlzUmVnRXhwIiwiaU1vZGVsIiwiYWRkUmVnRXJyb3JlZExpc3RlbmVyIiwidXBkYXRlVUkiLCJhZGRJZEVycm9yZWRMaXN0ZW5lciIsInJtdkVycm9yZWRNb25pdG9yIiwicm12UmVnRXJyb3JlZExpc3RlbmVyIiwicm12SWRFcnJvcmVkTGlzdGVuZXIiLCJza1JtdiIsImluRm9ybUl0ZW0iLCJza1Byb3AiLCJTS19QUk9QUyIsIklOX0ZST01fSVRFTSIsImluRm9ybVJvdyIsIklOX0ZST01fUk9XIiwiZXJyb3JPYmoiLCJnZXRFcnJvcnMiLCJoZWxwIiwiaXNFbXB0eSIsIkVNUFRZIiwiam9pbiIsInNrVmFscyIsIkNIQVJfVkVSVElDQUwiLCJ2YWxpZGF0ZVN0YXR1cyIsIlNUUl9FUlJPUiIsImNvbXBWYWxpZFByb3BzIiwicmVuZGVyRm9ybUNvbXAiLCJDb21wVGFnIiwiY29tcFRhZyIsIm1vZGVsSWQiLCJza1Byb3BzVHJhbnMiLCJwcm9wVHlwZXMiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7QUFHbkIsc0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLDBJQUNWQSxJQURV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QUw7QUFESCxTQURGO0FBS0QsT0FOTSxNQU1BLElBQUksQ0FBQ2IsU0FBRCxJQUFjSixVQUFsQixFQUE4QjtBQUNuQyxlQUNFO0FBQUE7QUFBQSx1QkFBZ0IsS0FBS2dCLGNBQUwsc0JBQWhCLElBQWlELGdCQUFnQkYsY0FBakUsRUFBaUYsTUFBTU4sSUFBdkY7QUFDRyxlQUFLUyxjQUFMO0FBREgsU0FERjtBQUtELE9BTk0sTUFNQTtBQUNMLGVBQU8sS0FBS0EsY0FBTCxFQUFQO0FBQ0Q7QUFDRjs7O3FDQUVnQjtBQUFBLG1CQUNtQixLQUFLckMsS0FEeEI7QUFBQSxVQUNEc0MsT0FEQyxVQUNWQyxPQURVO0FBQUEsVUFDUUMsT0FEUixVQUNRQSxPQURSOzs7QUFHZixhQUNFO0FBQUMsZUFBRDtBQUFBLHFCQUFhLEtBQUtKLGNBQUwsQ0FBb0JFLE9BQXBCLENBQWIsSUFBMkMsU0FBU0UsT0FBcEQ7QUFDRyxhQUFLQyxZQUFMO0FBREgsT0FERjtBQUtEOzs7Ozs7QUFySGtCaEQsUSxDQUNaaUQsUyxHQUFZLGVBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsZUFBS0QsU0FBbkIsRUFBOEIsZ0JBQU1BLFNBQXBDLEVBQStDLHFCQUFXQSxTQUExRCxFQUFxRSxFQUFyRSxDO2tCQURBakQsUSIsImZpbGUiOiJjb21wL2FudGQvRm9ybUNvbXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNLIGZyb20gJ3NrLWpzJztcbmltcG9ydCBTS0NvbCBmcm9tICcuL1NLQ29sJztcbmltcG9ydCBTS0Zvcm1JdGVtIGZyb20gJy4vU0tGb3JtSXRlbSc7XG5pbXBvcnQgQ29tcCBmcm9tICcuLi8uLi91dGlsL0NvbXAnO1xuaW1wb3J0IE1vZGVsIGZyb20gJy4uLy4uL3V0aWwvTW9kZWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtQ29tcCBleHRlbmRzIENvbXAge1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBDb21wLnByb3BUeXBlcywgU0tDb2wucHJvcFR5cGVzLCBTS0Zvcm1JdGVtLnByb3BUeXBlcywge30pO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHN1cGVyLmNvbXBvbmVudERpZE1vdW50KCk7XG4gICAgdGhpcy5hZGRBbGxFcnJvcmVkTW9uaXRvcigpO1xuICAgIHRoaXMuYWRkRXh0ZW5kRXJyb3JlZE1vbml0b3IoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVcGRhdGUoKSB7XG4gICAgc3VwZXIuY29tcG9uZW50V2lsbFVwZGF0ZSgpO1xuICAgIHRoaXMucm12QWxsRXJyb3JlZE1vbml0b3IoKTtcbiAgICB0aGlzLnJtdkV4dGVuZEVycm9yZWRNb25pdG9yKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgc3VwZXIuY29tcG9uZW50RGlkVXBkYXRlKCk7XG4gICAgdGhpcy5hZGRBbGxFcnJvcmVkTW9uaXRvcigpO1xuICAgIHRoaXMuYWRkRXh0ZW5kRXJyb3JlZE1vbml0b3IoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHN1cGVyLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG4gICAgdGhpcy5ybXZBbGxFcnJvcmVkTW9uaXRvcigpO1xuICAgIHRoaXMucm12RXh0ZW5kRXJyb3JlZE1vbml0b3IoKTtcbiAgfVxuXG4gIGFkZEV4dGVuZEVycm9yZWRNb25pdG9yKCkge1xuXG4gIH1cblxuICBybXZFeHRlbmRFcnJvcmVkTW9uaXRvcigpIHtcblxuICB9XG5cbiAgLy9tb25pdG9yIGJlZ2luXG4gIGFkZEFsbEVycm9yZWRNb25pdG9yKCkge1xuICAgIE1vZGVsLnBhcnNlU2FvKHRoaXMucHJvcHMubW9uaXRvcikuZm9yRWFjaCgoJGlkT3JSZWcpID0+IHtcbiAgICAgIHRoaXMuYWRkRXJyb3JlZE1vbml0b3IoJGlkT3JSZWcpO1xuICAgIH0pO1xuICAgIC8vU2VsZiB2YWx1ZSBtb25pdG9yXG4gICAgaWYgKHRoaXMuaU1vZGVsSWQoKSkge1xuICAgICAgdGhpcy5hZGRFcnJvcmVkTW9uaXRvcih0aGlzLmlNb2RlbElkKCkpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEVycm9yZWRNb25pdG9yKGlkT3JSZWcpIHtcbiAgICBpZiAodGhpcy5tb25pdG9ycy5pbmRleE9mKGlkT3JSZWcpIDwgMCkge1xuICAgICAgdGhpcy5tb25pdG9ycy5wdXNoKGlkT3JSZWcpO1xuICAgIH1cbiAgICBpZiAoXy5pc1JlZ0V4cChpZE9yUmVnKSkge1xuICAgICAgdGhpcy5pTW9kZWwoKS5hZGRSZWdFcnJvcmVkTGlzdGVuZXIoaWRPclJlZywgdGhpcy51cGRhdGVVSSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaU1vZGVsKCkuYWRkSWRFcnJvcmVkTGlzdGVuZXIoaWRPclJlZywgdGhpcy51cGRhdGVVSSlcbiAgICB9XG4gIH1cblxuICBybXZBbGxFcnJvcmVkTW9uaXRvcigpIHtcbiAgICB0aGlzLm1vbml0b3JzLmZvckVhY2goKCRpZE9yUmVnKSA9PiB7XG4gICAgICB0aGlzLnJtdkVycm9yZWRNb25pdG9yKCRpZE9yUmVnKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJtdkVycm9yZWRNb25pdG9yKGlkT3JSZWcpIHtcbiAgICBpZiAoXy5pc1JlZ0V4cChpZE9yUmVnKSkge1xuICAgICAgdGhpcy5pTW9kZWwoKS5ybXZSZWdFcnJvcmVkTGlzdGVuZXIoaWRPclJlZywgdGhpcy51cGRhdGVVSSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaU1vZGVsKCkucm12SWRFcnJvcmVkTGlzdGVuZXIoaWRPclJlZywgdGhpcy51cGRhdGVVSSlcbiAgICB9XG4gICAgdGhpcy5tb25pdG9ycy5za1JtdihpZE9yUmVnKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgaW5Gb3JtSXRlbSA9IHRoaXMuc2tQcm9wKENvbXAuU0tfUFJPUFMuSU5fRlJPTV9JVEVNKTtcbiAgICBsZXQgaW5Gb3JtUm93ID0gdGhpcy5za1Byb3AoQ29tcC5TS19QUk9QUy5JTl9GUk9NX1JPVyk7XG5cbiAgICBsZXQgZXJyb3JPYmogPSB0aGlzLmdldEVycm9ycygpO1xuICAgIGxldCBoZWxwID0gXy5pc0VtcHR5KGVycm9yT2JqKSA/IFNLLkVNUFRZIDogXy5qb2luKGVycm9yT2JqLnNrVmFscygpLCBTSy5DSEFSX1ZFUlRJQ0FMKTtcbiAgICBsZXQgdmFsaWRhdGVTdGF0dXMgPSBfLmlzRW1wdHkoZXJyb3JPYmopID8gU0suRU1QVFkgOiBTSy5TVFJfRVJST1I7XG5cbiAgICBpZiAoaW5Gb3JtUm93ICYmIGluRm9ybUl0ZW0pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTS0NvbCB7Li4udGhpcy5jb21wVmFsaWRQcm9wcyhTS0NvbCl9PlxuICAgICAgICAgIDxTS0Zvcm1JdGVtIHsuLi50aGlzLmNvbXBWYWxpZFByb3BzKFNLRm9ybUl0ZW0pfSB2YWxpZGF0ZVN0YXR1cz17dmFsaWRhdGVTdGF0dXN9IGhlbHA9e2hlbHB9PlxuICAgICAgICAgICAge3RoaXMucmVuZGVyRm9ybUNvbXAoKX1cbiAgICAgICAgICA8L1NLRm9ybUl0ZW0+XG4gICAgICAgIDwvU0tDb2w+XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoaW5Gb3JtUm93ICYmICFpbkZvcm1JdGVtKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U0tDb2wgey4uLnRoaXMuY29tcFZhbGlkUHJvcHMoU0tDb2wpfT5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJGb3JtQ29tcCgpfVxuICAgICAgICA8L1NLQ29sPlxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKCFpbkZvcm1Sb3cgJiYgaW5Gb3JtSXRlbSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFNLRm9ybUl0ZW0gey4uLnRoaXMuY29tcFZhbGlkUHJvcHMoU0tGb3JtSXRlbSl9IHZhbGlkYXRlU3RhdHVzPXt2YWxpZGF0ZVN0YXR1c30gaGVscD17aGVscH0+XG4gICAgICAgICAge3RoaXMucmVuZGVyRm9ybUNvbXAoKX1cbiAgICAgICAgPC9TS0Zvcm1JdGVtPlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRm9ybUNvbXAoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJGb3JtQ29tcCgpIHtcbiAgICBsZXQge2NvbXBUYWc6IENvbXBUYWcsIG1vZGVsSWR9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZyB7Li4udGhpcy5jb21wVmFsaWRQcm9wcyhDb21wVGFnKX0gbW9kZWxJZD17bW9kZWxJZH0+XG4gICAgICAgIHt0aGlzLnNrUHJvcHNUcmFucygpfVxuICAgICAgPC9Db21wVGFnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==