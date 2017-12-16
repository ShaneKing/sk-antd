import {Menu} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from './AntdComp';

Menu.SubMenu.defaultProps = SK.assign({}, {
  disabled: false
}, Menu.defaultProps, Menu.SubMenu.defaultProps, {});

Menu.SubMenu.propTypes = SK.assign({}, {
  // children: PropTypes.array,
  disabled: PropTypes.bool,
  key: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  onTitleClick: PropTypes.func
}, Menu.propTypes, Menu.SubMenu.propTypes, {});

export default class SKSubMenu extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, Menu.SubMenu.defaultProps, {
    compTag: Menu.SubMenu
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, Menu.SubMenu.propTypes, {});


  constructor(...args) {
    super(...args);
    this.compName = 'SKSubMenu';
  }

  allowTransProps2Self() {
    return Object.keys(Menu.propTypes);
  }
}
