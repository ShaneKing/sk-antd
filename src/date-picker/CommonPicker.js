import PropTypes from 'prop-types';
import {SK} from 'sk-js';

export default class CommonPicker {
  static defaultProps = SK.extends(true, {}, {
    allowClear: true,
    autoFocus: false,
    className: SK.STR_EMPTY,
    disabled: false,
    popupStyle: {},
    // style: {},
  }, {});
  static propTypes = SK.extends(true, {}, {
    //https://ant.design/components/date-picker-cn/#%E5%85%B1%E5%90%8C%E7%9A%84-API
    allowClear: PropTypes.bool,
    autoFocus: PropTypes.bool,
    className: PropTypes.string,
    dateRender: PropTypes.func,
    disabled: PropTypes.bool,
    disabledDate: PropTypes.func,
    getCalendarContainer: PropTypes.func,
    locale: PropTypes.object,
    open: PropTypes.bool,
    placeholder: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
    ]),
    popupStyle: PropTypes.object,
    size: PropTypes.string,
    // style: PropTypes.object,
    onOpenChange: PropTypes.func,
  }, {});
}
