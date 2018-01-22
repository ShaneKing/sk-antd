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

var _Const = require('../../Const');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGQvZm9ybS9PcmlnaW5Gb3JtLmpzIl0sIm5hbWVzIjpbIk9yaWdpbkZvcm0iLCJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJoaWRlUmVxdWlyZWRNYXJrIiwibGF5b3V0IiwiSG9yaXpvbnRhbCIsInByb3BUeXBlcyIsImZvcm0iLCJvYmplY3QiLCJib29sIiwib25lT2YiLCJPYmplY3QiLCJ2YWx1ZXMiLCJvblN1Ym1pdCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztJQUVxQkEsVTs7OztBQUFBQSxVLENBQ1pDLFksR0FBZSxTQUFHQyxNQUFILENBQVUsRUFBVixFQUFjO0FBQ2xDQyxvQkFBa0IsS0FEZ0I7QUFFbENDLFVBQVEsV0FBSUM7QUFGc0IsQ0FBZCxFQUduQixlQUFLSixZQUhjLEVBR0EsRUFIQSxDO0FBREhELFUsQ0FLWk0sUyxHQUFZLFNBQUdKLE1BQUgsQ0FBVSxFQUFWLEVBQWM7QUFDL0I7QUFDQUssUUFBTSxvQkFBVUMsTUFGZTtBQUcvQkwsb0JBQWtCLG9CQUFVTSxJQUhHO0FBSS9CTCxVQUFRLG9CQUFVTSxLQUFWLENBQWdCQyxPQUFPQyxNQUFQLFlBQWhCLENBSnVCO0FBSy9CQyxZQUFVLG9CQUFVQztBQUxXLENBQWQsRUFNaEIsZUFBS1IsU0FOVyxFQU1BLEVBTkEsQztrQkFMQU4sVSIsImZpbGUiOiJhbnRkL2Zvcm0vT3JpZ2luRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9ybX0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtTS30gZnJvbSAnc2stanMnO1xuaW1wb3J0IHtEaXJ9IGZyb20gJy4uLy4uL0NvbnN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JpZ2luRm9ybSB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBTSy5hc3NpZ24oe30sIHtcbiAgICBoaWRlUmVxdWlyZWRNYXJrOiBmYWxzZSxcbiAgICBsYXlvdXQ6IERpci5Ib3Jpem9udGFsXG4gIH0sIEZvcm0uZGVmYXVsdFByb3BzLCB7fSk7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBTSy5hc3NpZ24oe30sIHtcbiAgICAvL2h0dHBzOi8vYW50LmRlc2lnbi9jb21wb25lbnRzL2Zvcm0tY24vI0Zvcm1cbiAgICBmb3JtOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGhpZGVSZXF1aXJlZE1hcms6IFByb3BUeXBlcy5ib29sLFxuICAgIGxheW91dDogUHJvcFR5cGVzLm9uZU9mKE9iamVjdC52YWx1ZXMoRGlyKSksXG4gICAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jXG4gIH0sIEZvcm0ucHJvcFR5cGVzLCB7fSk7XG59XG4iXX0=