import { Layout } from 'antd';
import PropTypes from 'prop-types';
import { SK } from 'sk-js';
import AntdComp from '../AntdComp';
import { BREAKPOINT } from '../AntdConst';
import OriginLayout from './OriginLayout';

Layout.Sider.defaultProps = SK.assign({}, {
  collapsedWidth: 64,
  collapsible: false,
  defaultCollapsed: false,
  reverseArrow: false,
  width: 200,
}, OriginLayout.defaultProps, Layout.Sider.defaultProps, {});

Layout.Sider.propTypes = SK.assign({}, {
  //https://ant.design/components/layout-cn/#Layout.Sider
  breakpoint: PropTypes.oneOf(Object.values(BREAKPOINT)),
  className: PropTypes.string,
  collapsed: PropTypes.bool,
  collapsedWidth: PropTypes.number,
  collapsible: PropTypes.bool,
  defaultCollapsed: PropTypes.bool,
  reverseArrow: PropTypes.bool,
  style: PropTypes.object,
  trigger: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  width: PropTypes.number,
  onCollapse: PropTypes.func,
}, OriginLayout.propTypes, Layout.Sider.propTypes, {});

export default class SKSider extends AntdComp {
  static SK_COMP_NAME = 'SKSider';
  static defaultProps = SK.assign({}, AntdComp.defaultProps, Layout.Sider.defaultProps, {
    compTag: Layout.Sider,
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, Layout.Sider.propTypes, {});

  constructor(...args) {
    super(...args);
    this.compName = 'SKSider';
  }
}
