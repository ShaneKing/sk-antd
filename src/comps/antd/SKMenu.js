import {Menu} from 'antd';
import _ from 'lodash';
import React from 'react';
import {Link} from 'react-router';
import SK from 'sk-js';
import Comp from '../../utils/Comp';
import {Dir} from '../../utils/Const';
import SKIcon from './SKIcon';
import SKMenuItem from './SKMenuItem';
import SKSubMenu from './SKSubMenu';

Menu.propTypes = SK.assign({}, Menu.propTypes, {
  inlineIndent: React.PropTypes.number
}, {
  level: React.PropTypes.number
});

Menu.defaultProps = SK.assign({}, Menu.defaultProps, {
  inlineIndent: 24
}, {});

export default class SKMenu extends Comp {
  static defaultProps = SK.assign({}, Menu.defaultProps, {
    compTag: Menu,
    displayItem: () => {
      return true
    },
    displayTitle: true
  });
  static propTypes = SK.assign({}, Comp.propTypes, SKMenuItem.propTypes, SKSubMenu.propTypes, Menu.propTypes, {
    displayItem: React.PropTypes.func,
    displayTitle: React.PropTypes.bool
  });

  constructor(...args) {
    super(...args);
  }

  handleOpenChange(es) {
    if (this.props.onOpenChange && _.isFunction(this.props.onOpenChange)) {
      this.props.onOpenChange(es);
    }else{
      let newVal = _.clone(this.skVal());
      newVal.openKeys = es.slice(0);
      this.skVal(newVal);
    }
  }

  handleClick(e) {
    if (this.props.onClick && _.isFunction(this.props.onClick)) {
      this.props.onClick(e);
    }else{
      let newVal = _.clone(this.skVal());
      // newVal.openKeys = this.skVal().openKeys;
      newVal.selectedKeys = [e.key];
      this.skVal(newVal);
    }
  }

  menuMap(menuCfg) {
    let {displayItem, menuCfgs, mode} = this.props;

    let displayTitle = ((mode == Dir.Inline) || menuCfgs.indexOf(menuCfg) == -1);
    let rtnCfgs = [];

    if (menuCfg.children && !_.isEmpty(menuCfg.children)) {
      rtnCfgs.push(<SKSubMenu key={menuCfg.router} title={<span><SKIcon type={menuCfg.icon} /><span>{displayTitle && menuCfg.title}</span></span>}>
        {menuCfg.children.map(this.menuMap.bind(this))}
      </SKSubMenu>);
    } else {
      if (displayItem && displayItem(menuCfg)) {
        rtnCfgs.push(<SKMenuItem key={menuCfg.router}>
          <Link to={menuCfg.router}>
            {menuCfg.icon && <SKIcon type={menuCfg.icon}/>}
            {displayTitle && menuCfg.title}
          </Link>
        </SKMenuItem>);
      }
    }
    return rtnCfgs;
  }

  render() {
    let {compTag: CompTag, menuCfgs, mode, theme} = this.props;

    return (
      <CompTag {...this.compValidProps(CompTag)}
        mode={mode}
        onClick={this.handleClick.bind(this)}
        onOpenChange={this.handleOpenChange.bind(this)}
        openKeys={this.skVal().openKeys}
        selectedKeys={this.skVal().selectedKeys}
        theme={theme}>
        {menuCfgs ? menuCfgs.map((menuCfg) => {
          return this.menuMap(menuCfg);
        }) : this.skPropsTrans()}
      </CompTag>
    );
  }
}
