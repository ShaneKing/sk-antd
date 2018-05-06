import {Menu} from 'antd';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import OriginMenu from './OriginMenu';
import SKMenuItem from './SKMenuItem';
import SKSubMenu from './SKSubMenu';
import AntdComp from '../AntdComp';
import SKIcon from '../icon/SKIcon';
import {Dir} from '../AntdConst';

/*eslint no-unused-vars: "off"*/
/*eslint react/jsx-closing-tag-location: "off"*/

//modelId is selectedKeysId
export default class SKMenu extends AntdComp {
  static SK_COMP_NAME = 'SKMenu';
  static defaultProps = SK.extend(true, {}, AntdComp.defaultProps, SKMenuItem.defaultProps, SKSubMenu.defaultProps, OriginMenu.defaultProps, {
    compTag: Menu,
    displayItem: (itemInfo) => {
      return true;
    }
  });
  static propTypes = SK.extend(true, {}, AntdComp.propTypes, SKMenuItem.propTypes, SKSubMenu.propTypes, OriginMenu.propTypes, {
    dataId: PropTypes.string.isRequired,
    displayItem: PropTypes.func,
    openKeysId: PropTypes.string.isRequired,
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKMenu.SK_COMP_NAME;
  }

  addExtendChangedMonitor() {
    super.addExtendChangedMonitor();
    this.addChangedMonitor(this.props.dataId);
    this.addChangedMonitor(this.props.openKeysId);
  }

  rmvExtendChangedMonitor() {
    super.rmvExtendChangedMonitor();
    this.rmvChangedMonitor(this.props.dataId);
    this.rmvChangedMonitor(this.props.openKeysId);
  }

  handleClick = (clickInfo) => {
    if (this.props.onClick && _.isFunction(this.props.onClick)) {
      this.props.onClick(clickInfo);
    } else {
      this.skVal([clickInfo.key]);
    }
  };

  handleOpenChange = (openKeys) => {
    if (this.props.onOpenChange && _.isFunction(this.props.onOpenChange)) {
      this.props.onOpenChange(openKeys);
    } else {
      this.skModel().skVal(this.props.openKeysId, openKeys);
    }
  };

  menuMap = (itemInfo) => {
    const {displayItem} = this.props;

    let rtnMenu = undefined;

    if (itemInfo.children && !_.isEmpty(itemInfo.children)) {
      rtnMenu = (<SKSubMenu
        {...this.skTransProps2Self(SKSubMenu)}
        eventKey={itemInfo.router}
        key={itemInfo.router}
        title={<span>
          {itemInfo.icon && <SKIcon type={itemInfo.icon}/>}
          <span>{itemInfo.title}</span>
        </span>}
      >
        {itemInfo.children.map(this.menuMap)}
      </SKSubMenu>);
    } else if (displayItem && displayItem(itemInfo)) {
      if(itemInfo.divider){
        rtnMenu = (<Menu.Divider key={itemInfo.router} />);
      }else{
        rtnMenu = (<SKMenuItem {...this.skTransProps2Self(SKMenuItem)} eventKey={itemInfo.router} key={itemInfo.router}>
          {itemInfo.icon && <SKIcon type={itemInfo.icon}/>}
          <span>{itemInfo.title}</span>
        </SKMenuItem>);
      }
    }

    return rtnMenu;
  };

  render() {
    const {compTag: CompTag, dataId, openKeysId, theme} = this.props;

    return (
      <CompTag
        {...this.skTransProps2Self(CompTag)}
        onClick={this.handleClick}
        onOpenChange={this.handleOpenChange}
        openKeys={this.skModel().skVal(openKeysId)}
        selectedKeys={this.skVal()}
        theme={theme}
      >
        {dataId ? this.skModel().skVal(dataId).map(($itemInfo) => {
          return this.menuMap($itemInfo);
        }) : this.skTransProps2Child()}
      </CompTag>
    );
  }
}
