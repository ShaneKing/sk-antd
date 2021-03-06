import {Menu} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import {Proxy0, SK} from 'sk-js';
import OriginMenu from './OriginMenu';
import SKMenuItem from './SKMenuItem';
import SKSubMenu from './SKSubMenu';
import AntdComp from '../AntdComp';
import SKIcon from '../icon/SKIcon';

/**
 * if ssClick, must modelId
 * if ssOpenChange, must openKeysId
 */
export default class SKMenu extends AntdComp {
  static SK_COMP_NAME = 'SKMenu';
  static defaultProps = SK.extends(true, {}, AntdComp.defaultProps, SKMenuItem.defaultProps, SKSubMenu.defaultProps, OriginMenu.defaultProps, {
    compTag: Menu,
    displayItem: (itemInfo) => {
      return true;
    }
  });
  static propTypes = SK.extends(true, {}, AntdComp.propTypes, SKMenuItem.propTypes, SKSubMenu.propTypes, OriginMenu.propTypes, {
    data: PropTypes.array,
    dataId: PropTypes.string,
    displayItem: PropTypes.func,
    openKeysId: PropTypes.string.isRequired,
    ssClick: PropTypes.func,
    ssOpenChange: PropTypes.func,
  });

  state = {
    openKeys: [],
    selectedKeys: [],
  };

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKMenu.SK_COMP_NAME;
    this.handleClick = (clickInfo) => {
      if (this.props.ssClick && Proxy0._.isFunction(this.props.ssClick)) {
        this.props.ssClick(clickInfo);
      } else {
        if (this.getModelId()) {
          this.n2m([clickInfo.key]);
        } else {
          this.setState({selectedKeys: [clickInfo.key]});
        }
      }
    };
    this.handleOpenChange = (openKeys) => {
      if (this.props.ssOpenChange && Proxy0._.isFunction(this.props.ssOpenChange)) {
        this.props.ssOpenChange(openKeys);
      } else {
        if (this.props.openKeysId) {
          this.skModel().skVal(this.props.openKeysId, openKeys);
        } else {
          this.setState({openKeys: openKeys});
        }
      }
    };
    this.menuMap = (itemInfo) => {
      const {displayItem} = this.props;

      let rtnMenu = undefined;
      if (displayItem && displayItem(itemInfo)) {
        if (itemInfo.children && !Proxy0._.isEmpty(itemInfo.children)) {
          // {...this.skTransProps2Self(SKSubMenu)} // deleted it for fixed horizontal
          rtnMenu = (<SKSubMenu
            eventKey={itemInfo.router}
            key={itemInfo.router}
            title={<span>
          {itemInfo.icon && <SKIcon type={itemInfo.icon}/>}
              <span>{itemInfo.title}</span>
        </span>}
          >
            {itemInfo.children.map(this.menuMap)}
          </SKSubMenu>);
        } else if (itemInfo.divider) {
          rtnMenu = (<Menu.Divider key={itemInfo.router}/>);
        } else {
          // {...this.skTransProps2Self(SKMenuItem)} // deleted it for fixed horizontal
          rtnMenu = (<SKMenuItem eventKey={itemInfo.router} key={itemInfo.router}>
            {itemInfo.icon && <SKIcon type={itemInfo.icon}/>}
            <span>{itemInfo.title}</span>
          </SKMenuItem>);
        }
      }

      return rtnMenu;
    };
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

  render() {
    const {compTag: CompTag, data, dataId, openKeysId, theme} = this.props;

    return (
      <CompTag
        {...this.skTransProps2Self(CompTag)}
        onClick={this.handleClick}
        onOpenChange={this.handleOpenChange}
        openKeys={openKeysId ? this.skModel().skVal(openKeysId) : this.state.openKeys}
        selectedKeys={this.getModelId() ? this.m2n() : this.state.selectedKeys}
        theme={theme}
      >
        {(data || dataId) ? ((dataId ? this.skModel().skVal(dataId) : SK.s4a(data)).map((itemInfo) => {
          return this.menuMap(itemInfo);
        })) : this.skTransProps2Child()}
      </CompTag>
    );
  }
}
