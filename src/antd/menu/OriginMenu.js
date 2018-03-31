import { Menu } from 'antd';
import PropTypes from 'prop-types';
import { SK } from 'sk-js';
import { MENU_MODE, THEME } from '../AntdConst';

export default class OriginMenu {
  static defaultProps = SK.assign({}, {
    inlineIndent: 24,
    mode: MENU_MODE.Vertical,
    multiple: false,
    selectable: true,
    theme: THEME.Light,
    // onOpenChange: noop,
    subMenuOpenDelay: 0,
    subMenuCloseDelay: 0.1,
    forceSubMenuRender: false,
  }, Menu.defaultProps, {});
  static propTypes = SK.assign({
    level: PropTypes.number,
    parentMenu: PropTypes.object,
    prefixCls: PropTypes.string,
    rootPrefixCls: PropTypes.string,
  }, {
    //https://ant.design/components/menu-cn/#Menu
    defaultOpenKeys: PropTypes.any,
    defaultSelectedKeys: PropTypes.array,
    inlineCollapsed: PropTypes.bool,
    inlineIndent: PropTypes.number,
    mode: PropTypes.oneOf(Object.values(MENU_MODE)),
    multiple: PropTypes.bool,
    openKeys: PropTypes.array,
    selectable: PropTypes.bool,
    selectedKeys: PropTypes.array,
    style: PropTypes.object,
    theme: PropTypes.oneOf(Object.values(THEME)),
    onClick: PropTypes.func,
    onDeselect: PropTypes.func,
    onOpenChange: PropTypes.func,
    onSelect: PropTypes.func,
    subMenuOpenDelay: PropTypes.number,
    subMenuCloseDelay: PropTypes.number,
    forceSubMenuRender: PropTypes.bool,
    //https://github.com/react-component/menu#menu-props
    activeKey: PropTypes.object,
    defaultActiveFirst: PropTypes.bool,
    triggerSubMenuAction: PropTypes.string,
    openAnimation: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
    openTransition: PropTypes.string,
    getPopupContainer: PropTypes.func,
  }, Menu.propTypes, {});
}
