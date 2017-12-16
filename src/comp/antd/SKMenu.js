import {Menu} from 'antd';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from './AntdComp';
import {Dir, MENU_MODE, THEME} from '../../util/Const';
import SKIcon from './SKIcon';
import SKMenuItem from './SKMenuItem';
import SKSubMenu from './SKSubMenu';
import SKLink from '../react/SKLink';

Menu.defaultProps = SK.assign({}, {
  inlineIndent: 24,
  mode: MENU_MODE.Vertical,
  multiple: false,
  selectable: true,
  theme: THEME.Light,
  // onOpenChange: noop,
  subMenuOpenDelay: 0,
  subMenuCloseDelay: 0.1,
  forceSubMenuRender: false
}, Menu.defaultProps, {});

Menu.propTypes = SK.assign({
  level: PropTypes.number,
  parentMenu: PropTypes.object
}, {
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
  forceSubMenuRender: PropTypes.bool
}, Menu.propTypes, {});

export default class SKMenu extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, SKMenuItem.defaultProps, SKSubMenu.defaultProps, Menu.defaultProps, {
    compTag: Menu,
    dataId: undefined,
    displayItem: (itemInfo) => {
      return true
    }
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, SKMenuItem.propTypes, SKSubMenu.propTypes, Menu.propTypes, {
    dataId: PropTypes.string,
    displayItem: PropTypes.func
  });


  constructor(...args) {
    super(...args);
    this.compName = 'SKMenu';
  }

  handleOpenChange(openKeys) {
    if (this.props.onOpenChange && _.isFunction(this.props.onOpenChange)) {
      this.props.onOpenChange(openKeys);
    } else {
      let newVal = _.clone(this.skVal());
      newVal.openKeys = openKeys.slice(0);
      this.skVal(newVal);
    }
  }

  handleClick(clickInfo) {
    if (this.props.onClick && _.isFunction(this.props.onClick)) {
      this.props.onClick(clickInfo);
    } else {
      let newVal = _.clone(this.skVal());
      // newVal.openKeys = this.skVal().openKeys;
      newVal.selectedKeys = [clickInfo.key];
      this.skVal(newVal);
    }
  }

  menuMap(itemInfo) {
    let {displayItem, dataId, mode} = this.props;
    let menuCfgs = this.skModel().skVal(dataId);

    let displayTitle = ((mode === Dir.Inline) || menuCfgs.indexOf(itemInfo) === -1);
    let rtnCfgs = [];

    if (itemInfo.children && !_.isEmpty(itemInfo.children)) {
      rtnCfgs.push(<SKSubMenu {...this.skTransProps2Self(SKSubMenu)} key={itemInfo.router}
                              parentMenu={this}
                              title={<span>
                                <SKIcon type={itemInfo.icon}/>
                                <span>{displayTitle && itemInfo.title}</span>
                              </span>}>
        {itemInfo.children.map(this.menuMap.bind(this))}
      </SKSubMenu>);
    } else {
      if (displayItem && displayItem(itemInfo)) {
        rtnCfgs.push(<SKMenuItem {...this.skTransProps2Self(SKMenuItem)} key={itemInfo.router} parentMenu={this}>
          <SKLink {...this.skTransProps2Self(SKLink)} to={itemInfo.router}>
            {itemInfo.icon && <SKIcon {...this.skTransProps2Self(SKIcon)} type={itemInfo.icon}/>}
            {displayTitle && itemInfo.title}
          </SKLink>
        </SKMenuItem>);
      }
    }
    return rtnCfgs;
  }

  render() {
    let {compTag: CompTag, dataId, mode, theme} = this.props;

    return (
      <CompTag {...this.skTransProps2Self(CompTag)}
               mode={mode}
               onClick={this.handleClick.bind(this)}
               onOpenChange={this.handleOpenChange.bind(this)}
               openKeys={this.skVal().openKeys}
               selectedKeys={this.skVal().selectedKeys}
               theme={theme}>
        {dataId ? this.skModel().skVal(dataId).map(($itemInfo) => {
          return this.menuMap($itemInfo);
        }) : this.skTransProps2Child()}
      </CompTag>
    );
  }
}
