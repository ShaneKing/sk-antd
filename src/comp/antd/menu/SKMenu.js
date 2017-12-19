import {Menu} from 'antd';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import SKMenuItem from './SKMenuItem';
import SKSubMenu from './SKSubMenu';
import AntdComp from '../AntdComp';
import SKIcon from '../icon/SKIcon';
import SKLink from '../../react/SKLink';
import {Dir} from '../../../util/Const';

export default class SKMenu extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, {
    compTag: Menu,
    dataId: undefined,
    displayItem: (itemInfo) => {
      return true
    }
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, {
    dataId: PropTypes.string,
    displayItem: PropTypes.func
  });

  constructor(...args) {
    super(...args);
    this.compName = 'SKMenu';
    this.handleClick = (clickInfo) => {
      if (this.props.onClick && _.isFunction(this.props.onClick)) {
        this.props.onClick(clickInfo);
      } else {
        let newVal = _.clone(this.skVal());
        // newVal.openKeys = this.skVal().openKeys;
        newVal.selectedKeys = [clickInfo.key];
        this.skVal(newVal);
      }
    };
    this.handleOpenChange = (openKeys) => {
      if (this.props.onOpenChange && _.isFunction(this.props.onOpenChange)) {
        this.props.onOpenChange(openKeys);
      } else {
        let newVal = _.clone(this.skVal());
        newVal.openKeys = openKeys.slice(0);
        this.skVal(newVal);
      }
    };
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
               onClick={this.handleClick}
               onOpenChange={this.handleOpenChange}
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
