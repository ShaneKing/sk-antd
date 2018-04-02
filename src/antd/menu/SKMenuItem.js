import { Menu } from 'antd';
import PropTypes from 'prop-types';
import { SK } from 'sk-js';
import OriginMenu from './OriginMenu';
import AntdComp from '../AntdComp';

Menu.Item.defaultProps = SK.assign({}, {
  disabled: false,
}, OriginMenu.defaultProps, Menu.Item.defaultProps, {});

Menu.Item.propTypes = SK.assign({
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
}, OriginMenu.propTypes, Menu.Item.propTypes, {});

export default class SKMenuItem extends AntdComp {
  static SK_COMP_NAME = 'SKMenuItem';
  static defaultProps = SK.assign({}, AntdComp.defaultProps, Menu.Item.defaultProps, {
    compTag: Menu.Item,
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, Menu.Item.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKMenuItem.SK_COMP_NAME;
  }
}
