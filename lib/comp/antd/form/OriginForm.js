'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

require('antd/lib/form/style');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _skJs = require('sk-js');

var _Const = require('../../../util/Const');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OriginForm = function OriginForm() {
  _classCallCheck(this, OriginForm);
};

OriginForm.defaultProps = _skJs.SK.assign({}, {
  hideRequiredMark: false,
  layout: _Const.Dir.Horizontal
}, _form2.default.defaultProps, {});
OriginForm.propTypes = _skJs.SK.assign({}, {
  //https://ant.design/components/form-cn/#Form
  form: _propTypes2.default.object,
  hideRequiredMark: _propTypes2.default.bool,
  layout: _propTypes2.default.oneOf(Object.values(_Const.Dir)),
  onSubmit: _propTypes2.default.func
}, _form2.default.propTypes, {});
exports.default = OriginForm;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAvYW50ZC9mb3JtL09yaWdpbkZvcm0uanMiXSwibmFtZXMiOlsiT3JpZ2luRm9ybSIsImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsImhpZGVSZXF1aXJlZE1hcmsiLCJsYXlvdXQiLCJIb3Jpem9udGFsIiwicHJvcFR5cGVzIiwiZm9ybSIsIm9iamVjdCIsImJvb2wiLCJvbmVPZiIsIk9iamVjdCIsInZhbHVlcyIsIm9uU3VibWl0IiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7O0lBRXFCQSxVOzs7O0FBQUFBLFUsQ0FDWkMsWSxHQUFlLFNBQUdDLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDbENDLG9CQUFrQixLQURnQjtBQUVsQ0MsVUFBUSxXQUFJQztBQUZzQixDQUFkLEVBR25CLGVBQUtKLFlBSGMsRUFHQSxFQUhBLEM7QUFESEQsVSxDQUtaTSxTLEdBQVksU0FBR0osTUFBSCxDQUFVLEVBQVYsRUFBYztBQUMvQjtBQUNBSyxRQUFNLG9CQUFVQyxNQUZlO0FBRy9CTCxvQkFBa0Isb0JBQVVNLElBSEc7QUFJL0JMLFVBQVEsb0JBQVVNLEtBQVYsQ0FBZ0JDLE9BQU9DLE1BQVAsWUFBaEIsQ0FKdUI7QUFLL0JDLFlBQVUsb0JBQVVDO0FBTFcsQ0FBZCxFQU1oQixlQUFLUixTQU5XLEVBTUEsRUFOQSxDO2tCQUxBTixVIiwiZmlsZSI6ImNvbXAvYW50ZC9mb3JtL09yaWdpbkZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Zvcm19IGZyb20gJ2FudGQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7U0t9IGZyb20gJ3NrLWpzJztcbmltcG9ydCB7RGlyfSBmcm9tICcuLi8uLi8uLi91dGlsL0NvbnN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JpZ2luRm9ybSB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIHtcbiAgICBoaWRlUmVxdWlyZWRNYXJrOiBmYWxzZSxcbiAgICBsYXlvdXQ6IERpci5Ib3Jpem9udGFsXG4gIH0sIEZvcm0uZGVmYXVsdFByb3BzLCB7fSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIHtcbiAgICAvL2h0dHBzOi8vYW50LmRlc2lnbi9jb21wb25lbnRzL2Zvcm0tY24vI0Zvcm1cbiAgICBmb3JtOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGhpZGVSZXF1aXJlZE1hcms6IFByb3BUeXBlcy5ib29sLFxuICAgIGxheW91dDogUHJvcFR5cGVzLm9uZU9mKE9iamVjdC52YWx1ZXMoRGlyKSksXG4gICAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jXG4gIH0sIEZvcm0ucHJvcFR5cGVzLCB7fSk7XG59XG4iXX0=