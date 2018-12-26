import PropTypes from 'prop-types';
import {SK} from 'sk-js';
import {PLACEMENT, TRIGGER} from '../AntdConst';

export default class CommonTip {
  static defaultProps = SK.extends(true, {}, {
    arrowPointAtCenter: false,
    autoAdjustOverflow: true,
    mouseEnterDelay: 0,
    mouseLeaveDelay: 0.1,
    placement: PLACEMENT.Top,
    trigger: TRIGGER.Hover,
    defaultVisible: false,
    visible: false,
  }, {});
  static propTypes = SK.extends(true, {}, {
    //https://ant.design/components/tooltip-cn/#%E5%85%B1%E5%90%8C%E7%9A%84-API
    arrowPointAtCenter: PropTypes.bool,
    autoAdjustOverflow: PropTypes.bool,
    getPopupContainer: PropTypes.func,
    mouseEnterDelay: PropTypes.number,
    mouseLeaveDelay: PropTypes.number,
    overlayClassName: PropTypes.string,
    overlayStyle: PropTypes.object,
    placement: PropTypes.oneOf(Object.values(PLACEMENT)),
    trigger: PropTypes.string,
    defaultVisible: PropTypes.bool,
    visible: PropTypes.bool,
    onCollapse: PropTypes.func,
    //https://ant.design/components/tooltip-cn/#%E6%B3%A8%E6%84%8F
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onFocus: PropTypes.func,
    onClick: PropTypes.func,
  }, {});
}
