import { Menu } from 'antd';
import PropTypes from 'prop-types';
import { SK } from 'sk-js';
import OriginMenu from './OriginMenu';
import AntdComp from '../AntdComp';

const {Item} = Menu;

Item.defaultProps = SK.extend(true, {}, {
  disabled: false,
}, OriginMenu.defaultProps, Item.defaultProps, {});

Item.propTypes = SK.extend(true, {
  //https://github.com/react-component/menu/blob/master/src/MenuItem.jsx#L21
  onItemHover: PropTypes.func,
}, {
  //https://ant.design/components/menu-cn/#Menu.Item
  disabled: PropTypes.bool,
  //key: PropTypes.string,//Warning: SKMenuItem: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)
  //https://github.com/react-component/menu#menuitem-props
  eventKey: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
}, OriginMenu.propTypes, Item.propTypes, {});

Item.NON_SK_COMP_NAME = 'MenuItem';

export default class SKMenuItem extends AntdComp {
  static SK_COMP_NAME = 'SKMenuItem';
  static defaultProps = SK.extend(true, {}, AntdComp.defaultProps, Item.defaultProps, {
    compTag: Menu.Item,
  });
  static propTypes = SK.extend(true, {}, AntdComp.propTypes, Item.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKMenuItem.SK_COMP_NAME;
  }
}
