import { Menu } from 'antd';
import PropTypes from 'prop-types';
import { SK } from 'sk-js';
import OriginMenu from './OriginMenu';
import AntdComp from '../AntdComp';

Menu.SubMenu.defaultProps = SK.assign({}, {
  disabled: false,
}, OriginMenu.defaultProps, Menu.SubMenu.defaultProps, {});

Menu.SubMenu.propTypes = SK.assign({
  //https://github.com/react-component/menu/blob/master/src/SubMenu.jsx#L36
  onItemHover: PropTypes.func,
}, {
  //https://ant.design/components/menu-cn/#Menu.SubMenu
  // children: PropTypes.array,
  disabled: PropTypes.bool,
  //key: PropTypes.string,//Warning: SKMenuItem: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  onTitleClick: PropTypes.func,
  //https://github.com/react-component/menu#menusubmenu-props
  eventKey: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onTitleMouseEnter: PropTypes.func,
  onTitleMouseLeave: PropTypes.func,
}, OriginMenu.propTypes, Menu.SubMenu.propTypes, {});

export default class SKSubMenu extends AntdComp {
  static SK_COMP_NAME = 'SKSubMenu';
  static defaultProps = SK.assign({}, AntdComp.defaultProps, Menu.SubMenu.defaultProps, {
    compTag: Menu.SubMenu,
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, Menu.SubMenu.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKSubMenu.SK_COMP_NAME;
  }
}
