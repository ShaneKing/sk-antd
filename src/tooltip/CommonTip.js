import PropTypes from 'prop-types';
import {SK} from 'sk-js';
import {PLACEMENT} from '../AntdConst';

export default class CommonTip {
  static defaultProps = SK.extends(true, {}, {
    arrowPointAtCenter: false,
    autoAdjustOverflow: true,
    // defaultVisible: false,
    mouseEnterDelay: 0,
    mouseLeaveDelay: 0.1,
    placement: PLACEMENT.Top,
    // trigger: TRIGGER.Hover,//maybe array
    //can't set visible, because https://github.com/ant-design/ant-design/blob/master/components/tooltip/index.tsx#L113
    // visible: false,//Comp
  }, {});
  static propTypes = SK.extends(true, {}, {
    //https://ant.design/components/tooltip-cn/#%E5%85%B1%E5%90%8C%E7%9A%84-API
    arrowPointAtCenter: PropTypes.bool,
    autoAdjustOverflow: PropTypes.bool,
    defaultVisible: PropTypes.bool,
    getPopupContainer: PropTypes.func,
    mouseEnterDelay: PropTypes.number,
    mouseLeaveDelay: PropTypes.number,
    overlayClassName: PropTypes.string,
    overlayStyle: PropTypes.object,
    placement: PropTypes.oneOf(Object.values(PLACEMENT)),
    trigger: PropTypes.any,
    // visible: PropTypes.bool,//Comp
    onVisibleChange: PropTypes.func,
    //https://ant.design/components/tooltip-cn/#%E6%B3%A8%E6%84%8F
    onMouseEnter: PropTypes.any,
    onMouseLeave: PropTypes.any,
    onFocus: PropTypes.any,
    onClick: PropTypes.any,
  }, {});
}
