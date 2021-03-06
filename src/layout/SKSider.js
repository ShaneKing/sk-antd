import {Layout} from 'antd';
import PropTypes from 'prop-types';
import {SK} from 'sk-js';
import AntdComp from '../AntdComp';
import {BREAKPOINT} from '../AntdConst';
import OriginLayout from './OriginLayout';

const {Sider} = Layout;

Sider.defaultProps = SK.extends(true, {}, {
  // collapsedWidth: 64, // fixed for @ant-design/pro-layout
  collapsible: false,
  defaultCollapsed: false,
  reverseArrow: false,
  width: 200,
}, OriginLayout.defaultProps, Sider.defaultProps, {});

Sider.propTypes = SK.extends(true, {}, {
  //https://ant.design/components/layout-cn/#Layout.Sider
  breakpoint: PropTypes.oneOf(Object.values(BREAKPOINT)),
  className: PropTypes.string,
  collapsed: PropTypes.bool,
  collapsedWidth: PropTypes.number,
  collapsible: PropTypes.bool,
  defaultCollapsed: PropTypes.bool,
  reverseArrow: PropTypes.bool,
  style: PropTypes.object,
  theme: PropTypes.string,
  trigger: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  width: PropTypes.number,
  onBreakpoint: PropTypes.func,
  onCollapse: PropTypes.func,
}, OriginLayout.propTypes, Sider.propTypes, {});

Sider.NON_SK_COMP_NAME = 'Sider';

export default class SKSider extends AntdComp {
  static SK_COMP_NAME = 'SKSider';
  static defaultProps = SK.extends(true, {}, AntdComp.defaultProps, Sider.defaultProps, {
    compTag: Sider,
  });
  static propTypes = SK.extends(true, {}, AntdComp.propTypes, Sider.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKSider.SK_COMP_NAME;
  }
}
