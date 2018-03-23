'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _spin = require('antd/lib/spin');

var _spin2 = _interopRequireDefault(_spin);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/spin/style');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _skJs = require('sk-js');

var _AntdComp2 = require('../AntdComp');

var _AntdComp3 = _interopRequireDefault(_AntdComp2);

var _Const = require('../../Const');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_spin2.default.defaultProps = _skJs.SK.assign({}, {
  size: _Const.SIZE.Default,
  spinning: true
}, _spin2.default.defaultProps, {});

_spin2.default.propTypes = _skJs.SK.assign({}, {
  //https://ant.design/components/spin-cn/#API
  delay: _propTypes2.default.number,
  indicator: _propTypes2.default.node,
  size: _propTypes2.default.string,
  spinning: _propTypes2.default.bool,
  tip: _propTypes2.default.string,
  wrapperClassName: _propTypes2.default.string
}, _spin2.default.propTypes, {});

var SKSpin = function (_AntdComp) {
  _inherits(SKSpin, _AntdComp);

  function SKSpin() {
    var _ref;

    _classCallCheck(this, SKSpin);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SKSpin.__proto__ || Object.getPrototypeOf(SKSpin)).call.apply(_ref, [this].concat(args)));

    _this.compName = 'SKSpin';
    return _this;
  }

  _createClass(SKSpin, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          CompTag = _props.compTag,
          className = _props.className;


      return _react2.default.createElement(
        CompTag,
        _extends({}, this.skTransProps2Self(CompTag), {
          className: className,
          spinning: this.skVal()
        }),
        this.skTransProps2Child()
      );
    }
  }]);

  return SKSpin;
}(_AntdComp3.default);

SKSpin.defaultProps = _skJs.SK.assign({}, _AntdComp3.default.defaultProps, _spin2.default.defaultProps, {
  compTag: _spin2.default,
  size: _Const.SIZE.Large
});
SKSpin.propTypes = _skJs.SK.assign({}, _AntdComp3.default.propTypes, _spin2.default.propTypes, {});
exports.default = SKSpin;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvc3Bpbi9TS1NwaW4uanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwiYXNzaWduIiwic2l6ZSIsIkRlZmF1bHQiLCJzcGlubmluZyIsInByb3BUeXBlcyIsImRlbGF5IiwibnVtYmVyIiwiaW5kaWNhdG9yIiwibm9kZSIsInN0cmluZyIsImJvb2wiLCJ0aXAiLCJ3cmFwcGVyQ2xhc3NOYW1lIiwiU0tTcGluIiwiYXJncyIsImNvbXBOYW1lIiwicHJvcHMiLCJDb21wVGFnIiwiY29tcFRhZyIsImNsYXNzTmFtZSIsInNrVHJhbnNQcm9wczJTZWxmIiwic2tWYWwiLCJza1RyYW5zUHJvcHMyQ2hpbGQiLCJMYXJnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUEsZUFBS0EsWUFBTCxHQUFvQixTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjO0FBQ2hDQyxRQUFNLFlBQUtDLE9BRHFCO0FBRWhDQyxZQUFVO0FBRnNCLENBQWQsRUFHakIsZUFBS0osWUFIWSxFQUdFLEVBSEYsQ0FBcEI7O0FBS0EsZUFBS0ssU0FBTCxHQUFpQixTQUFHSixNQUFILENBQVUsRUFBVixFQUFjO0FBQzdCO0FBQ0FLLFNBQU8sb0JBQVVDLE1BRlk7QUFHN0JDLGFBQVcsb0JBQVVDLElBSFE7QUFJN0JQLFFBQU0sb0JBQVVRLE1BSmE7QUFLN0JOLFlBQVUsb0JBQVVPLElBTFM7QUFNN0JDLE9BQUssb0JBQVVGLE1BTmM7QUFPN0JHLG9CQUFrQixvQkFBVUg7QUFQQyxDQUFkLEVBUWQsZUFBS0wsU0FSUyxFQVFFLEVBUkYsQ0FBakI7O0lBVXFCUyxNOzs7QUFPbkIsb0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLDJJQUNWQSxJQURVOztBQUVuQixVQUFLQyxRQUFMLEdBQWdCLFFBQWhCO0FBRm1CO0FBR3BCOzs7OzZCQUVRO0FBQUEsbUJBQ2lDLEtBQUtDLEtBRHRDO0FBQUEsVUFDVUMsT0FEVixVQUNDQyxPQUREO0FBQUEsVUFDbUJDLFNBRG5CLFVBQ21CQSxTQURuQjs7O0FBR1AsYUFDRTtBQUFDLGVBQUQ7QUFBQSxxQkFDTSxLQUFLQyxpQkFBTCxDQUF1QkgsT0FBdkIsQ0FETjtBQUVFLHFCQUFXRSxTQUZiO0FBR0Usb0JBQVUsS0FBS0UsS0FBTDtBQUhaO0FBS0csYUFBS0Msa0JBQUw7QUFMSCxPQURGO0FBU0Q7Ozs7OztBQXhCa0JULE0sQ0FDWmQsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWMsbUJBQVNELFlBQXZCLEVBQXFDLGVBQUtBLFlBQTFDLEVBQXdEO0FBQzVFbUIseUJBRDRFO0FBRTVFakIsUUFBTSxZQUFLc0I7QUFGaUUsQ0FBeEQsQztBQURIVixNLENBS1pULFMsR0FBWSxTQUFHSixNQUFILENBQVUsRUFBVixFQUFjLG1CQUFTSSxTQUF2QixFQUFrQyxlQUFLQSxTQUF2QyxFQUFrRCxFQUFsRCxDO2tCQUxBUyxNIiwiZmlsZSI6ImFudGQvc3Bpbi9TS1NwaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTcGluIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNLIH0gZnJvbSAnc2stanMnO1xuaW1wb3J0IEFudGRDb21wIGZyb20gJy4uL0FudGRDb21wJztcbmltcG9ydCB7IFNJWkUgfSBmcm9tICcuLi8uLi9Db25zdCc7XG5cblNwaW4uZGVmYXVsdFByb3BzID0gU0suYXNzaWduKHt9LCB7XG4gIHNpemU6IFNJWkUuRGVmYXVsdCxcbiAgc3Bpbm5pbmc6IHRydWUsXG59LCBTcGluLmRlZmF1bHRQcm9wcywge30pO1xuXG5TcGluLnByb3BUeXBlcyA9IFNLLmFzc2lnbih7fSwge1xuICAvL2h0dHBzOi8vYW50LmRlc2lnbi9jb21wb25lbnRzL3NwaW4tY24vI0FQSVxuICBkZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgaW5kaWNhdG9yOiBQcm9wVHlwZXMubm9kZSxcbiAgc2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3Bpbm5pbmc6IFByb3BUeXBlcy5ib29sLFxuICB0aXA6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHdyYXBwZXJDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59LCBTcGluLnByb3BUeXBlcywge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTS1NwaW4gZXh0ZW5kcyBBbnRkQ29tcCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIEFudGRDb21wLmRlZmF1bHRQcm9wcywgU3Bpbi5kZWZhdWx0UHJvcHMsIHtcbiAgICBjb21wVGFnOiBTcGluLFxuICAgIHNpemU6IFNJWkUuTGFyZ2UsXG4gIH0pO1xuICBzdGF0aWMgcHJvcFR5cGVzID0gU0suYXNzaWduKHt9LCBBbnRkQ29tcC5wcm9wVHlwZXMsIFNwaW4ucHJvcFR5cGVzLCB7fSk7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29tcE5hbWUgPSAnU0tTcGluJztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbXBUYWc6IENvbXBUYWcsIGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFRhZ1xuICAgICAgICB7Li4udGhpcy5za1RyYW5zUHJvcHMyU2VsZihDb21wVGFnKX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHNwaW5uaW5nPXt0aGlzLnNrVmFsKCl9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnNrVHJhbnNQcm9wczJDaGlsZCgpfVxuICAgICAgPC9Db21wVGFnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==