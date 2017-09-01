import {Menu} from 'antd';
import _ from 'lodash';
import React from 'react';
import {Link} from 'react-router-dom';
import SK from 'sk-js';
import Comp from '../../util/Comp';
import {Dir} from '../../util/Const';
import SKIcon from './SKIcon';
import SKMenuItem from './SKMenuItem';
import SKSubMenu from './SKSubMenu';

Menu.propTypes = SK.assign({}, Menu.propTypes, {
  inlineIndent: React.PropTypes.number,
  onClick: React.PropTypes.func,
  onOpenChange: React.PropTypes.func
}, {
  level: React.PropTypes.number
});

Menu.defaultProps = SK.assign({}, Menu.defaultProps, {
  inlineIndent: 24
}, {});

export default class SKMenu extends Comp {
  static defaultProps = SK.assign({}, Menu.defaultProps, {
    compTag: Menu,
    dataId: undefined,
    displayItem: (itemInfo) => {
      return true
    }
  });
  static propTypes = SK.assign({}, Comp.propTypes, SKMenuItem.propTypes, SKSubMenu.propTypes, Menu.propTypes, {
    dataId: React.PropTypes.string,
    displayItem: React.PropTypes.func
  });

  constructor(...args) {
    super(...args);
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
    let menuCfgs = this.iModel().skVal(dataId);

    let displayTitle = ((mode == Dir.Inline) || menuCfgs.indexOf(itemInfo) == -1);
    let rtnCfgs = [];

    if (itemInfo.children && !_.isEmpty(itemInfo.children)) {
      rtnCfgs.push(<SKSubMenu key={itemInfo.router}
                              title={<span>
                                <SKIcon type={itemInfo.icon}/>
                                <span>{displayTitle && itemInfo.title}</span>
                              </span>}>
        {itemInfo.children.map(this.menuMap.bind(this))}
      </SKSubMenu>);
    } else {
      if (displayItem && displayItem(itemInfo)) {
        rtnCfgs.push(<SKMenuItem key={itemInfo.router}>
          <Link to={itemInfo.router}>
            {itemInfo.icon && <SKIcon type={itemInfo.icon}/>}
            {displayTitle && itemInfo.title}
          </Link>
        </SKMenuItem>);
      }
    }
    return rtnCfgs;
  }

  render() {
    let {compTag: CompTag, dataId, mode, theme} = this.props;

    return (
      <CompTag {...this.compValidProps(CompTag)}
               mode={mode}
               onClick={this.handleClick.bind(this)}
               onOpenChange={this.handleOpenChange.bind(this)}
               openKeys={this.skVal().openKeys}
               selectedKeys={this.skVal().selectedKeys}
               theme={theme}>
        {dataId ? this.iModel().skVal(dataId).map(($itemInfo) => {
          return this.menuMap($itemInfo);
        }) : this.skPropsTrans()}
      </CompTag>
    );
  }
}
